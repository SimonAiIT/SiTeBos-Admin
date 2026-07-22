# Collezione: evidence_docs

Il registro del **Processo di Certificazione**. Traccia l'avanzamento passo-passo della validazione di una SOP e genera il documento finale di certificazione. È l'output del motore di "erogazione certificata" di SiteBoS.

## Identificativi
- **Database**: `TbosAssetLake`
- **Chiave Primaria**: `sessionId` (Pattern: `[P.IVA]_[SKU_SOP]_[EXECUTION_ID]`)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (Identificativo univoco esecuzione)",
  "messages": [
    {
      "type": "system",
      "data": {
        "document_type": "CERTIFICATION_RECORD",
        "version": "String",
        "certification_id": "String",
        "execution_id": "String",
        "sop_id": "String (SKU del catalogo)",
        "company_info": {
          "vat": "String",
          "operator_chat_id": "Number"
        },
        "blueprint_info": {
          "name": "String",
          "description": "String"
        },
        "status": "String (COMPLETED/IN_PROGRESS/FAILED)",
        "timing": {
          "started_at": "ISO Date String",
          "closed_at": "ISO Date String",
          "duration_minutes": "Number"
        },
        "total_steps_executed": "Number",
        "audit_trail": [
          {
            "step_id": "String",
            "step_name": "String",
            "method": "String (es. SELF_MANUAL)",
            "timestamp": "ISO Date String"
          }
        ]
      }
    }
  ]
}
```

---

## Logiche di Compliance Operativa

### 1. Tracciabilità Totale (`audit_trail`)
A differenza di un semplice LOG, questa collezione salva l'ordine esatto e il timestamp di ogni singolo step del Blueprint. Questo costituisce una prova legale di corretta esecuzione della procedura (fondamentale per normative come la D.Lgs. 19/2026 menzionata nel record).

### 2. Monitoraggio Performance (`timing`)
Il sistema calcola automaticamente la `duration_minutes`. Questo permette all'IA di fare analisi statistiche sul tempo medio di esecuzione di una determinata attività rispetto alle stime fornite nel Blueprint originale.

### 3. Proof of Work
Il campo `operator_chat_id` identifica chi ha eseguito fisicamente il lavoro, permettendo di attribuire la responsabilità delle azioni all'interno dell'istanza multi-operatore.

---
> [!IMPORTANT]
> Il `TbosAssetLake` è la memoria storica di ciò che l'azienda "HA FATTO". Il `process_blueprints` è la memoria di ciò che l'azienda "SA FARE".
