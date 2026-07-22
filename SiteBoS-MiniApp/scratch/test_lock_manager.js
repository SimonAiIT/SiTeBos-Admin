// Test offline della logica del Lock-Manager basato su Langchain Memory e Aggregate Query
const assert = require('assert');

// Mock del DB MongoDB che supporta la struttura documenti Langchain Memory
class MockMongoCollection {
    constructor() {
        this.store = new Map(); // key: sessionId, value: doc
    }

    // Simula MongoDB aggregate con la pipeline $match
    aggregate(pipeline) {
        const matchStage = pipeline[0].$match;
        const results = [];

        for (const [sessionId, doc] of this.store.entries()) {
            let matches = false;

            // Logica del $or in matchStage
            for (const orCondition of matchStage.$or) {
                if (orCondition.sessionId && orCondition.sessionId === sessionId) {
                    matches = true;
                    break;
                }
                
                if (orCondition.$and) {
                    const inCondition = orCondition.$and[0].sessionId.$in;
                    const colCondition = orCondition.$and[1]["messages.0.data.target_collection"].$eq;
                    const docCondition = orCondition.$and[2]["messages.0.data.target_document"].$eq;
                    
                    const firstMsg = doc.messages && doc.messages[0];
                    const msgData = firstMsg ? firstMsg.data : {};

                    if (
                        inCondition.includes(sessionId) &&
                        msgData.target_collection === colCondition &&
                        msgData.target_document === docCondition
                    ) {
                        matches = true;
                        break;
                    }
                }
            }

            if (matches) {
                results.push({ ...doc });
            }
        }

        return results;
    }

    // Simula l'inserimento di Langchain Memory Manager con override
    insertMemory(sessionId, messageData) {
        const doc = {
            sessionId: sessionId,
            messages: [
                {
                    type: "ai",
                    data: { ...messageData }
                }
            ],
            createdAt: new Date().toISOString()
        };
        this.store.set(sessionId, doc);
        return doc;
    }

    // Simula la cancellazione mirata del lock
    deleteMemory(sessionId) {
        const wasDeleted = this.store.delete(sessionId);
        return { deletedCount: wasDeleted ? 1 : 0 };
    }

    clear() {
        this.store.clear();
    }
}

// Simulatore della logica di Lock-Manager
function checkAndAcquireLock(db, callerId, otherOperatorIds, targetCollection, targetDocument, action) {
    // 1. Definiamo la pipeline di match analoga a quella n8n
    const pipeline = [
        {
            $match: {
                $or: [
                    {
                        sessionId: callerId
                    },
                    {
                        $and: [
                            {
                                sessionId: {
                                    $in: otherOperatorIds
                                }
                            },
                            {
                                "messages.0.data.target_collection": {
                                    $eq: targetCollection
                                }
                            },
                            {
                                "messages.0.data.target_document": {
                                    $eq: targetDocument
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ];

    // 2. Eseguiamo il controllo aggregate
    const activeLocks = db.aggregate(pipeline);

    if (activeLocks.length > 0) {
        // Trovato conflitto di sessione o risorsa
        return {
            lockAcquired: false,
            error: true,
            message: "Collisione: Sessione occupata o risorsa in modifica da un altro operatore."
        };
    }

    // 3. Lock libero -> Eseguiamo inserimento in active_actions tramite Langchain Memory
    db.insertMemory(callerId, {
        action: action,
        target_collection: targetCollection,
        target_document: targetDocument
    });

    return {
        lockAcquired: true,
        lock_id: callerId
    };
}

// --- SUITE DI TEST ---
console.log("--- INIZIO VERIFICA LOCK MANAGER SPECIFICHE PROGETTO ---");
const db = new MockMongoCollection();

const OWNER_ID = "8305126267";
const OPERATOR_A = "987654321";
const OPERATOR_B = "555555555";
const OPERATOR_C = "111111111";

// Gli operatori della stessa famiglia (esclusi ciascuno se stessi)
const otherOpsForA = [OPERATOR_B, OPERATOR_C];
const otherOpsForB = [OPERATOR_A, OPERATOR_C];

// Test 1: Acquisizione Lock Sessione ed Inserimento Memory (Successo)
try {
    const res = checkAndAcquireLock(db, OPERATOR_A, otherOpsForA, "service_catalog", "prod_123", "edit_product");
    console.log("Test 1: Acquisizione Lock (Operatore A su prod_123) ->", res);
    assert.strictEqual(res.lockAcquired, true);
    assert.strictEqual(res.lock_id, OPERATOR_A);
    
    // Verifichiamo la struttura salvata nel DB mock
    const savedDoc = db.store.get(OPERATOR_A);
    assert.ok(savedDoc);
    assert.strictEqual(savedDoc.sessionId, OPERATOR_A);
    assert.strictEqual(savedDoc.messages[0].data.target_collection, "service_catalog");
    assert.strictEqual(savedDoc.messages[0].data.target_document, "prod_123");
} catch (e) {
    console.error("Test 1 Fallito:", e.message);
    process.exit(1);
}

// Test 2: Tentativo di doppia acquisizione dallo STESSO operatore (Fallimento)
try {
    const res = checkAndAcquireLock(db, OPERATOR_A, otherOpsForA, "agenda_events", "slot_45", "edit_agenda");
    console.log("Test 2: Concorrenza dello stesso Operatore A ->", res);
    assert.strictEqual(res.lockAcquired, false);
    assert.strictEqual(res.error, true);
} catch (e) {
    console.error("Test 2 Fallito:", e.message);
    process.exit(1);
}

// Test 3: Tentativo di acquisizione da parte di un altro operatore sulla STESSA risorsa (Fallimento - Concorrenza)
try {
    const res = checkAndAcquireLock(db, OPERATOR_B, otherOpsForB, "service_catalog", "prod_123", "edit_product");
    console.log("Test 3: Concorrenza Operatore B sulla stessa risorsa (prod_123) ->", res);
    assert.strictEqual(res.lockAcquired, false);
    assert.strictEqual(res.error, true);
} catch (e) {
    console.error("Test 3 Fallito:", e.message);
    process.exit(1);
}

// Test 4: Acquisizione da parte di un altro operatore su una risorsa DIVERSA (Successo)
try {
    const res = checkAndAcquireLock(db, OPERATOR_B, otherOpsForB, "service_catalog", "prod_789", "edit_product");
    console.log("Test 4: Acquisizione Operatore B su risorsa diversa (prod_789) ->", res);
    assert.strictEqual(res.lockAcquired, true);
    assert.strictEqual(res.lock_id, OPERATOR_B);
} catch (e) {
    console.error("Test 4 Fallito:", e.message);
    process.exit(1);
}

// Test 5: Rilascio del Lock tramite eliminazione del sessionId
try {
    const rel = db.deleteMemory(OPERATOR_A);
    console.log("Test 5: Rilascio del Lock per Operatore A ->", rel);
    assert.strictEqual(rel.deletedCount, 1);
    assert.strictEqual(db.store.has(OPERATOR_A), false);
} catch (e) {
    console.error("Test 5 Fallito:", e.message);
    process.exit(1);
}

// Test 6: Ri-acquisizione della risorsa sbloccata da parte dell'Operatore B (Successo)
try {
    const res = checkAndAcquireLock(db, OPERATOR_B, otherOpsForB, "service_catalog", "prod_123", "edit_product");
    console.log("Test 6: Ri-acquisizione risorsa sbloccata da parte di B ->", res);
    // Nota: l'Operatore B era già attivo su prod_789, ma nel Test 5 abbiamo eliminato il lock di A su prod_123.
    // Aspetta! L'operatore B ha già un lock attivo su prod_789 (acquisito nel Test 4).
    // Quindi B NON può acquisire un nuovo lock perché B è già attivo!
    // Vediamo se checkAndAcquireLock lo blocca correttamente:
    assert.strictEqual(res.lockAcquired, false);
    assert.strictEqual(res.error, true);
    console.log("Test 6 Passed: Operatore B bloccato correttamente perché ha già un'altra sessione attiva.");
} catch (e) {
    console.error("Test 6 Fallito:", e.message);
    process.exit(1);
}

// Test 7: Sblocchiamo B, e ora B può acquisire prod_123 (Successo)
try {
    db.deleteMemory(OPERATOR_B);
    const res = checkAndAcquireLock(db, OPERATOR_B, otherOpsForB, "service_catalog", "prod_123", "edit_product");
    console.log("Test 7: Acquisizione B dopo rilascio sessione precedente ->", res);
    assert.strictEqual(res.lockAcquired, true);
} catch (e) {
    console.error("Test 7 Fallito:", e.message);
    process.exit(1);
}

console.log("--- TUTTI I TEST SONO PASSATI CON SUCCESSO! ---");
