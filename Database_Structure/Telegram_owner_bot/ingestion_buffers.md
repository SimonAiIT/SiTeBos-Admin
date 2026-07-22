# Collezione: ingestion_buffers (Transient Lock)

Il meccanismo di **Controllo della Concorrenza (Atomic Lock)** di SiteBoS. Questa collezione non contiene dati persistenti, ma funge da semaforo per gestire il flusso dei messaggi in entrata da Telegram.

## Identificativi
- **Database**: `Telegram_owner_bot`
- **Chiave Primaria**: `sessionId` (Pattern: `[Customer_ChatID]`)
- **Stato**: **EFFIMERO** (I documenti vengono creati all'arrivo del messaggio e cancellati a fine processamento).

## Schema Tecnico (Struttura di Lock)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (ChatID)",
  "messages": [
    {
      "type": "system",
      "data": {
        "status": "PROCESSING",
        "lock_timestamp": "ISO Date String",
        "retry_count": "Number"
      }
    }
  ]
}
```

---

## Logiche di Concorrrenza & Protezione

### 1. Prevenzione delle Race Conditions
Quando un utente invia messaggi multipli in rapida successione (burst), n8n controlla se esiste già un documento con quel `sessionId` in questa collezione. Se esiste, significa che l'IA sta già elaborando una risposta e il nuovo messaggio viene messo in coda o scartato per evitare risposte multiple e incoerenti.

### 2. Meccanismo "Clean to Pass"
Come sottolineato dall'architettura, questa collezione **deve essere vuota** per permettere il passaggio del messaggio successivo. La cancellazione del documento a fine workflow è la condizione necessaria ("altrimenti non si passa") per sbloccare la conversazione.

### 3. Self-Healing (Timeout)
In caso di errore critico del workflow che impedisce la cancellazione manuale, i documenti in questa collezione dovrebbero avere un indice TTL (Time-To-Live) o un meccanismo di pulizia agentiva per evitare il blocco permanente della chat dell'utente.

---
> [!CAUTION]
> Se noti che un utente non riceve più risposte nonostante il bot sia online, controlla questa collezione: un "lock residuo" non cancellato è la causa più probabile del blocco.
