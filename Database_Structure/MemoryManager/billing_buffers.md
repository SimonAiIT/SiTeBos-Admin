# Collezione: billing_buffers

Il registro transazionale dei consumi AI (V2 Improved). È la "Fonte di Verità" per la fatturazione e il controllo dei costi API.

## Identificativi
- **Database**: `MemoryManager`
- **Chiave Primaria**: `sessionId` (P.IVA dell'owner)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (P.IVA)",
  "messages": [
    {
      "type": "String (es. 'system')",
      "data": {
        "model": "String (ID modello es. 'gemini-3.1-flash')",
        "is_long_context": "Boolean",
        "usage": {
          "in": "Number (tokens input)",
          "out": "Number (tokens output)",
          "units": "Number (unità atomiche o immagini)"
        },
        "usd_cost": "Number (float cost in USD)",
        "credits_deducted": "Number (int)",
        "previous_balance": "Number (int)",
        "final_balance": "Number (int)",
        "timestamp": "ISO Date String",
        "billing_source": {
          "wh": "String (Webhook URL di origine)",
          "use": "String (Scopo funzionale es. 'REGENERATE_ASSET')"
        },
        "rationale": {
          "pricing_tier": "String (Dettaglio fascia applicata)",
          "api_cost": "String (Dettaglio calcolo monetario)"
        },
        "additional_kwargs": "Object (estendibilità)",
        "response_metadata": "Object (estendibilità)"
      }
    }
  ]
}
```

---

## Logiche di Business

### 1. Sistema di Crediti
Il sistema converte il `usd_cost` reale in `credits_deducted` basandosi su fasce di prezzo predefinite (es. Fascia 3 Flash Standard). Questo permette di isolare l'utente finale dalle fluttuazioni delle tariffe API dirette.

### 2. Tracciabilità (`billing_source`)
Ogni addebito è firmato digitalmente dall'URL del webhook orchestratore (`wh`). Questo garantisce che ogni centesimo speso sia riconducibile a uno specifico workflow n8n e a una specifica azione dell'utente.

---
> [!IMPORTANT]
> Il `final_balance` di un record deve sempre corrispondere al `previous_balance` del record cronologicamente successivo per garantire l'integrità del database di contabilità.
