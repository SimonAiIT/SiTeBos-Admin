# Collezione: evidence_logs

Il sistema di **Logging Puro** degli eventi di sistema. Registra la sequenza cronologica dei "colpi" (hit) ricevuti dal sistema durante qualsiasi operazione, fungendo da database di tracciamento tecnico indipendente dal processo di certificazione.

## Identificativi
- **Database**: `TbosAssetLake`
- **Chiave Primaria**: `sessionId` (Pattern: `[P.IVA]_[SKU_SOP]_[EXECUTION_ID]`)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (ID Esecuzione univoco)",
  "messages": [
    {
      "type": "system",
      "data": {
        "report_id": "String",
        "exec_id": "String",
        "sop_id": "String (SKU)",
        "vat": "String",
        "timestamp": "ISO Date String",
        "event_type": "String (INSTANCE_OPEN / STEP_COMPLETED / INSTANCE_CLOSED)",
        "status": "String (STARTED / IN_PROGRESS / COMPLETED)",
        "operator_start": {
          "chat_id": "Number",
          "full_name": "String"
        },
        "completed_step": {
          "id": "String",
          "name": "String",
          "method": "String",
          "operator_chat_id": "Number"
        }
      }
    }
  ]
}
```

---

## Logiche di Event Logging

### 1. Granularità Energetica
Ogni messaggio nell'array rappresenta un evento discreto. Questo permette di ricostruire non solo il risultato finale, ma anche la **sequenza temporale esatta** e le eventuali interruzioni. Se un processo viene abbandonato a metà, troveremo i log degli step completati qui, anche se non esiste ancora un record in `evidence_docs`.

### 2. Monitoraggio Real-Time
Il sistema usa questi log per alimentare i "Loader" e le barre di avanzamento nella MiniApp. Quando un operatore completa uno step su Telegram, il workflow n8n spinge un nuovo evento in questo array e l'interfaccia si aggiorna di conseguenza.

### 3. Differenza con `evidence_docs`
- **`evidence_logs`**: È il registro dei "lavori in corso" (Live Stream).
- **`evidence_docs`**: È l'atto notarile finale (Certification Record).

---
> [!NOTE]
> Questa collezione è fondamentale per i workflow n8n che gestiscono la "ripresa" di sessioni interrotte.
