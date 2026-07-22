# Collezione: active_sessions

Il "Sistema Nervoso Centrale" in tempo reale. Questa collezione traccia lo stato live di ogni conversazione tra un utente (Customer) e il bot di un Owner, gestendo memoria a breve termine, step del funnel e sicurezza.

## Identificativi
- **Database**: `Telegram_owner_bot`
- **Chiave Primaria**: 
    - `sessionId`: Stato e Metadati (Pattern: `[C_ID]-[O_ID]`)
    - `sessionId_conversation`: Storico letterale (Pattern: `[C_ID]-[O_ID]_conversation`)

## Schema Tecnico: Session State (`[C_ID]-[O_ID]`)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (C_ID-O_ID)",
  "messages": [
    {
      "type": "system",
      "data": {
        "session_id": "String",
        "owner_chatid": "Number",
        "customer_chatid": "Number",
        "session_status": "String (ACTIVE/EXPIRED/ARCHIVED)",
        "lead_profile": {
          "first_name": "String",
          "last_name": "String",
          "username": "String",
          "language": "String (es. 'it')"
        },
        "preferences": {
          "broadcast_subscribed": "Boolean",
          "last_preference_update": "ISO Date String"
        },
        "prediction_keywords": "String (Keywords estratte dall'IA per routing semantico)",
        "working_memory": {
          "behavioral_log": "String (Riassunto del comportamento/intento live)",
          "funnel_step": "String (es. 'start', 'awareness', 'conversion')"
        },
        "telegram": {
          "last_bot_message_id": "Number",
          "last_interaction": "ISO Date String"
        },
        "security_profile": {
          "status": "String",
          "consecutive_negative_interactions": "Number (Contatore Strike)",
          "is_banned": "Boolean"
        }
      }
    }
  ]
}
```

---

## Schema Tecnico: Conversation History (`[C_ID]-[O_ID]_conversation`)
Questa collezione gemella contiene il transcript letterale della sessione in formato LangChain.

```json
{
  "_id": "ObjectId",
  "sessionId": "String (C_ID-O_ID_conversation)",
  "messages": [
    {
      "type": "human",
      "data": { "content": "String (Testo dell'utente)" }
    },
    {
      "type": "system",
      "data": { "content": "String (Risposta del Bot)" }
    }
  ]
}
```

---

## Logiche di Runtime & Sicurezza

### 1. Working Memory (Cervello a Breve Termine)
Il campo `working_memory` permette all'IA di non essere "amnesica". Il `behavioral_log` viene aggiornato ad ogni messaggio per riassumere l'intento dell'utente (es. "Interessato allo Scudo Tecnico"). Questo permette risposte contestuali senza dover rileggere l'intera cronologia ogni volta.

### 2. Funnel Tracking
Il sistema sa esattamente in quale fase del processo di vendita si trova l'utente (`funnel_step`). Questo permette di personalizzare i messaggi e le CTA in base alla maturità dell'utente.

### 3. Sistema di "Security Strike"
Il `security_profile` monitora il numero di `consecutive_negative_interactions`. Se l'utente inizia a insultare o a mostrare frustrazione estrema, il sistema incrementa lo strike e può decidere autonomamente di:
- Inviare un disclaimer di calma.
- Segnalare l'utente all'Owner.
- Bloccare l'utente (`is_banned: true`) per proteggere l'integrità del sistema.

### 4. Prediction Keywords
L'IA estrae costantemente parole chiave che descrivono l'interesse dell'utente. Queste keywords vengono poi sincronizzate con lo `stakeholder_profile` per creare un database di interessi a lungo termine.

---
> [!IMPORTANT]
> A differenza dei database `Strategic`, questa collezione deve essere letta e scritta in pochi millisecondi. È ottimizzata per la performance del bot Telegram.
