# Collezione: honeypots

La "Mieliera" (Knowledge Base) ottimizzata per il RAG. Contiene il DNA dell'azienda pronto per l'uso da parte dei bot.

## Identificativi
- **Database**: `MemoryManager`
- **Chiave Primaria**: `vat_number` (P.IVA)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (P.IVA)",
  "messages": [
    {
      "type": "String (es. 'system')",
      "data": {
        "company_context_string": "String (Narrativa Mission/Vision)",
        "offer_text": "String (HTML/Markdown per Copy Vendita)",
        "knowledge_fragments": [
          {
            "fragment_id": "String (ID Univoco)",
            "user_utterances": ["Array[String] (Varianti Domande)"],
            "answer_fragment": "String (Risposta Principale)",
            "summary": "String (Metafora/Sintesi)",
            "sections": [
              {
                "question": "String (Domanda di dettaglio)",
                "answer": "String (Risposta di dettaglio)"
              }
            ]
          }
        ],
        "availability_schedule": {
          "type": "String (es. 'By Appointment')",
          "notes": "String",
          "hours": {
            "monday": { "morning": { "from": "HH:mm", "to": "HH:mm" }, "afternoon": { "from": "HH:mm", "to": "HH:mm" } },
            "tuesday": "...", "wednesday": "...", "thursday": "...", "friday": "..."
          }
        },
        "config": {
          "onboarding_completed": "Boolean",
          "completed_at": "ISO Date String"
        },
        "assets": {
          "logo": {
            "url": "String",
            "mime": "String",
            "description": "String",
            "updated_at": "ISO Date String",
            "meta": {
              "visual_analysis": "String",
              "pro_tip": "String",
              "colors": ["Array[HEX]"]
            }
          },
          "photo": "Object (stessa struttura di logo)",
          "gallery1": "Object (stessa struttura di logo)"
        }
      }
    }
  ]
}
```

---

## Dettaglio Campi Strategici

### 1. Visual Intelligence (`assets`)
Il sistema analizza ogni risorsa visiva per garantire coerenza nel branding:
- **`meta.colors`**: Utilizzati per generare palette dinamiche nelle MiniApp.
- **`meta.visual_analysis`**: Permette all'IA di "descrivere" il logo o l'ufficio se l'utente lo chiede.

### 2. Knowledge Architecture (`knowledge_fragments`)
- **`user_utterances`**: Fondamentali per il training del matching semantico (NPL).
- **`summary`**: La "Mieliera Choice" - una versione semplificata e memorabile del concetto.

### 3. Scheduling (`availability_schedule`)
Struttura a doppio slot (morning/afternoon) per ogni giorno feriale, con supporto per valori `null` se il bot non deve accettare appuntamenti (es. Giovedì/Venerdì dedicati al dev).

---
> [!TIP]
> Per una comprensione futura, ricordarsi che il campo `sessionId` in questa collezione è sempre la P.IVA pura dell'istanza, senza suffissi.
