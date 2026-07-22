// Test di validazione dell'autenticazione unificata (ASH + telegram_validator)
const crypto = require('crypto');

const SECRET_KEY = 'TrinAI-Autorize-Transaction-2=2&';
const OWNER_CHAT_ID = '8305126267';
const SECONDARY_ID = '987654321';
const TIMESTAMP = Date.now().toString();
const WEBHOOK_ID = 'e353fd8a-62fb-4203-a2a7-20369d832e00';

const OWNER_BOT_TOKEN = "8558665614:AAGTk9YMw3ubkcBLFue1H7fkY339AmnVYuU";
const OPERATOR_BOT_TOKEN = "8644939941:AAHPiZM3D9xg6TbHXGSiCfiXbA4q99fyuYQ";
const CUSTOMER_BOT_TOKEN = "8378810625:AAHK3Zya8qFKD4OzFBbwSTOAGolDeY7jiJQ";

// --- HELPERS DI GENERAZIONE FIRMA ASH (SIMMETRICA) ---
function generateAshSignature(str, key) {
    let hash = 0;
    const combined = str + key;
    for (let i = 0; i < combined.length; i++) {
        const char = combined.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; 
    }
    return Math.abs(hash).toString(16);
}

function createAsh(payload) {
    const signature = generateAshSignature(payload, SECRET_KEY);
    return Buffer.from(payload).toString('base64') + '.' + signature;
}

// --- HELPER DI GENERAZIONE TELEGRAM INITDATA ---
function createTelegramInitData(botToken, userObj) {
    const data = {
        auth_date: Math.floor(Date.now() / 1000).toString(),
        query_id: 'AAF7KwZvAwAAAHsrBm8osFX9',
        user: JSON.stringify(userObj)
    };
    
    const checkString = Object.keys(data)
        .sort()
        .map(k => k + '=' + data[k])
        .join('\n');
        
    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
    const hash = crypto.createHmac('sha256', secretKey).update(checkString).digest('hex');
    
    return Object.keys(data)
        .map(k => k + '=' + encodeURIComponent(data[k]))
        .join('&') + '&hash=' + hash;
}

// --- LOGICA DECODIFICA ASH ---
function decodeAsh(rawAsh) {
    if (!rawAsh || typeof rawAsh !== "string") {
        throw new Error("ASH non trovato o non valido.");
    }

    const [encodedPayload, signatureReceived] = rawAsh.split(".");
    if (!encodedPayload || !signatureReceived) {
        throw new Error("Formato ASH non valido.");
    }

    const decodedPayload = Buffer.from(encodedPayload, "base64").toString("utf8");

    if (generateAshSignature(decodedPayload, SECRET_KEY) !== signatureReceived) {
        throw new Error("SECURITY: Firma ASH non valida o manomessa.");
    }

    const parts = decodedPayload.split("|");
    let ids = {};
    let role = "";

    if (parts.length === 3) {
        // Formato Owner: [chatId, timestamp, webhookId]
        ids = {
            owner_id: parts[0],
            caller_chat_id: parts[0],
            timestamp: parts[1],
            webhook: parts[2]
        };
        role = "owner";
    } else if (parts.length === 4) {
        // Formato Operator o Customer: [owner_id, secondary_id, timestamp, webhook]
        ids = {
            owner_id: parts[0],
            secondary_id: parts[1],
            operator: parts[1],
            customer_id: parts[1],
            caller_chat_id: parts[1],
            timestamp: parts[2],
            webhook: parts[3]
        };
        role = "secondary";
    } else {
        throw new Error("Struttura interna ASH non supportata.");
    }

    const testers = ["2041408875", "8305126267"];
    const urlMiniApp = testers.includes(String(ids.caller_chat_id))
        ? "https://trinaibusinessoperatingsystem.github.io/SiteBoS-MiniApp/telegram_control/"
        : "https://telegram.trinai.it/";

    return {
        ash_valid: true,
        ash_role: role,
        ids: ids,
        urlMiniApp: urlMiniApp
    };
}

// --- LOGICA TELEGRAM VALIDATOR UNIFICATO ---
function validateTelegram(initData, ownerData) {
    if (!initData) {
        return { isValid: false, error: "Dato _auth di Telegram mancante." };
    }

    const candidateTokens = [];
    if (ownerData && ownerData.bot_key) {
        candidateTokens.push({ token: ownerData.bot_key, source: "owner_custom" });
    }
    candidateTokens.push({ token: OPERATOR_BOT_TOKEN, source: "operator_global" });
    candidateTokens.push({ token: CUSTOMER_BOT_TOKEN, source: "customer_global" });

    // CryptoJS pure JS HMAC implementation - FIXED loop scopes
    const CryptoJS = (function() {
        function sha256(m) {
            var h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
            var k = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
            var b = Array.from(typeof m === 'string' ? new TextEncoder().encode(m) : m);
            var l = b.length * 8; b.push(0x80);
            while ((b.length * 8) % 512 !== 448) b.push(0);
            for (let i = 7; i >= 0; i--) b.push((l / Math.pow(2, i * 8)) & 0xff);
            for (let i = 0; i < b.length; i += 64) {
                var w = new Int32Array(64);
                for (let j = 0; j < 16; j++) w[j] = (b[i + j * 4] << 24) | (b[i + j * 4 + 1] << 16) | (b[i + j * 4 + 2] << 8) | (b[i + j * 4 + 3]);
                for (let j = 16; j < 64; j++) {
                    var s0 = ((w[j - 15] >>> 7) | (w[j - 15] << 25)) ^ ((w[j - 15] >>> 18) | (w[j - 15] << 14)) ^ (w[j - 15] >>> 3);
                    var s1 = ((w[j - 2] >>> 17) | (w[j - 2] << 15)) ^ ((w[j - 2] >>> 19) | (w[j - 2] << 13)) ^ (w[j - 2] >>> 10);
                    w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
                }
                var v = [...h];
                for (let j = 0; j < 64; j++) {
                    var S1 = ((v[4] >>> 6) | (v[4] << 26)) ^ ((v[4] >>> 11) | (v[4] << 21)) ^ ((v[4] >>> 25) | (v[4] << 7));
                    var ch = (v[4] & v[5]) ^ (~v[4] & v[6]);
                    var t1 = (v[7] + S1 + ch + k[j] + w[j]) | 0;
                    var S0 = ((v[0] >>> 2) | (v[0] << 30)) ^ ((v[0] >>> 13) | (v[0] << 19)) ^ ((v[0] >>> 22) | (v[0] << 10));
                    var maj = (v[0] & v[1]) ^ (v[0] & v[2]) ^ (v[1] & v[2]);
                    var t2 = (S0 + maj) | 0;
                    v.unshift((t1 + t2) | 0); v.splice(8); v[4] = (v[4] + t1) | 0;
                }
                for (let j = 0; j < 8; j++) h[j] = (h[j] + v[j]) | 0;
            }
            return h.reduce((acc, val) => acc.concat([(val >>> 24) & 0xff, (val >>> 16) & 0xff, (val >>> 8) & 0xff, val & 0xff]), []);
        }
        if (typeof TextEncoder === "undefined") {
            window.TextEncoder = function() {};
            TextEncoder.prototype.encode = function(s) {
                return new Uint8Array(unescape(encodeURIComponent(s)).split("").map(c => c.charCodeAt(0)));
            };
        }
        return {
            hmac: function(key, message) {
                var k = typeof key === 'string' ? Array.from(new TextEncoder().encode(key)) : key;
                var m = Array.from(new TextEncoder().encode(message));
                var b = 64;
                if (k.length > b) k = sha256(k);
                while (k.length < b) k.push(0);
                var ipad = k.map(x => x ^ 0x36);
                var opad = k.map(x => x ^ 0x5c);
                var inner = sha256(ipad.concat(m));
                return sha256(opad.concat(inner));
            }
        };
    })();

    const data = {};
    initData.split('&').forEach(pair => {
        const [k, v] = pair.split('=');
        data[k] = decodeURIComponent(v);
    });

    const hashReceived = data.hash;
    const checkString = Object.keys(data)
        .filter(k => k !== 'hash')
        .sort()
        .map(k => k + '=' + data[k])
        .join('\n');

    const now = Math.floor(Date.now() / 1000);
    const authDate = parseInt(data.auth_date);
    const isExpired = (now - authDate) > 3600;

    let isValid = false;
    let matchedSource = null;

    if (!isExpired) {
        for (const itemToken of candidateTokens) {
            const secretKey = CryptoJS.hmac("WebAppData", itemToken.token);
            const computedHashBytes = CryptoJS.hmac(secretKey, checkString);
            const computedHash = computedHashBytes.map(b => b.toString(16).padStart(2, '0')).join('');
            
            if (computedHash === hashReceived) {
                isValid = true;
                matchedSource = itemToken.source;
                break;
            }
        }
    }

    return {
        isValid: isValid,
        isExpired: isExpired,
        auth_source: matchedSource,
        user: data.user ? JSON.parse(data.user) : null
    };
}

// ==========================================
// SCENARI DI TEST
// ==========================================
console.log("--- INIZIO TEST AUTENTICAZIONE UNIFICATA ---");

// Test 1: Decodifica ASH Owner (3 parametri)
try {
    const ownerPayload = `${OWNER_CHAT_ID}|${TIMESTAMP}|${WEBHOOK_ID}`;
    const ashToken = createAsh(ownerPayload);
    const result = decodeAsh(ashToken);
    
    console.log("Test 1 Passed: ASH Owner decodificato correttamente.");
    console.log("Result:", result);
    if (result.ids.owner_id !== OWNER_CHAT_ID || result.ids.caller_chat_id !== OWNER_CHAT_ID || result.ash_role !== "owner" || result.urlMiniApp !== "https://trinaibusinessoperatingsystem.github.io/SiteBoS-MiniApp/telegram_control/") {
        throw new Error("Dati decodificati ASH Owner o urlMiniApp non validi.");
    }
} catch (e) {
    console.error("Test 1 FAILED:", e.message);
    process.exit(1);
}

// Test 2: Decodifica ASH Operator (4 parametri)
try {
    const opPayload = `${OWNER_CHAT_ID}|${SECONDARY_ID}|${TIMESTAMP}|${WEBHOOK_ID}`;
    const ashToken = createAsh(opPayload);
    const result = decodeAsh(ashToken);
    
    console.log("Test 2 Passed: ASH Operator decodificato correttamente.");
    console.log("Result:", result);
    if (result.ids.owner_id !== OWNER_CHAT_ID || result.ids.secondary_id !== SECONDARY_ID || result.ids.caller_chat_id !== SECONDARY_ID || result.ash_role !== "secondary" || result.urlMiniApp !== "https://telegram.trinai.it/") {
        throw new Error("Dati decodificati ASH Operator o urlMiniApp non validi.");
    }
} catch (e) {
    console.error("Test 2 FAILED:", e.message);
    process.exit(1);
}

// Test 3: telegram_validator con Owner Custom Bot
try {
    const mockOwnerData = { chat_id: parseInt(OWNER_CHAT_ID), bot_key: OWNER_BOT_TOKEN };
    const initData = createTelegramInitData(OWNER_BOT_TOKEN, { id: parseInt(OWNER_CHAT_ID), first_name: "Giuseppe" });
    const result = validateTelegram(initData, mockOwnerData);
    
    console.log("Test 3 Passed: telegram_validator unificato per Owner Custom Bot.");
    console.log("Result:", result);
    if (!result.isValid || result.auth_source !== "owner_custom") {
        throw new Error("Validazione Owner Custom Bot fallita.");
    }
} catch (e) {
    console.error("Test 3 FAILED:", e.message);
    process.exit(1);
}

// Test 4: telegram_validator con Operator Global Bot
try {
    const mockOwnerData = { chat_id: parseInt(OWNER_CHAT_ID), bot_key: OWNER_BOT_TOKEN };
    const initData = createTelegramInitData(OPERATOR_BOT_TOKEN, { id: parseInt(SECONDARY_ID), first_name: "Operatore" });
    const result = validateTelegram(initData, mockOwnerData);
    
    console.log("Test 4 Passed: telegram_validator unificato per Operator Global Bot.");
    console.log("Result:", result);
    if (!result.isValid || result.auth_source !== "operator_global") {
        throw new Error("Validazione Operator Global Bot fallita.");
    }
} catch (e) {
    console.error("Test 4 FAILED:", e.message);
    process.exit(1);
}

// Test 5: telegram_validator con Customer Global Bot
try {
    const mockOwnerData = { chat_id: parseInt(OWNER_CHAT_ID), bot_key: OWNER_BOT_TOKEN };
    const initData = createTelegramInitData(CUSTOMER_BOT_TOKEN, { id: parseInt(SECONDARY_ID), first_name: "Cliente" });
    const result = validateTelegram(initData, mockOwnerData);
    
    console.log("Test 5 Passed: telegram_validator unificato per Customer Global Bot.");
    console.log("Result:", result);
    if (!result.isValid || result.auth_source !== "customer_global") {
        throw new Error("Validazione Customer Global Bot fallita.");
    }
} catch (e) {
    console.error("Test 5 FAILED:", e.message);
    process.exit(1);
}

console.log("--- TUTTI I TEST SONO PASSATI CON SUCCESSO! ---");
