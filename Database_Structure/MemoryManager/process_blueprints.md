# Collezione: process_blueprints

L'architettura operativa (SOP) di SiteBoS. Definisce come erogare un servizio con precisione chirurgica, gestendo risorse, tempi, costi e controlli di qualità.

## Identificativi
- **Database**: `MemoryManager`
- **Chiave Primaria**: `sessionId` (Pattern: `[P.IVA]-SVC_[ID_SERVIZIO]`)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (P.IVA-SKU)",
  "messages": [
    {
      "type": "system",
      "data": {
        "document_type": "String (es. 'PROCESS_BLUEPRINT')",
        "version": "String",
        "service_sku": "String (SKU del catalogo)",
        "blueprint_name": "String",
        "description": "String",
        "tags": ["Array[String]"],
        "summary": {
          "estimated_total_cost": "String (es. '145.00 EUR')",
          "estimated_total_time_minutes": "Number",
          "bill_of_materials_summary": [
            { "material_sku": "String", "quantity": "Number", "unit_of_measure": "String" }
          ]
        },
        "stages": [
          {
            "stage_id": "String",
            "stage_order": "Number",
            "stage_name": "String",
            "steps": [
              {
                "step_id": "String",
                "step_name": "String",
                "instructions": "String (Dettaglio operativo)",
                "estimated_time_minutes": "Number",
                "resources_needed": {
                  "labor": {
                    "required_skill_tags": ["Array[String]"],
                    "estimated_work_minutes": "Number"
                  },
                  "materials": ["Array[String]"],
                  "assets": ["Array[String]"]
                },
                "quality_check": {
                  "is_required": "Boolean",
                  "evidence_type": "String (TEXT/SIGNATURE/FILE/VISION)",
                  "check_description": "String",
                  "acceptance_criteria": "String"
                },
                "logistics_flags": {
                  "requires_wip": "Boolean",
                  "requires_finished": "Boolean"
                }
              }
            ]
          }
        ]
      }
    }
  ]
}
```

---

## Logiche di Processo

### 1. Human-in-the-Loop & Quality Check (`quality_check`)
È il cuore della sicurezza operativa di SiteBoS. Ogni passo può richiedere una prova di esecuzione (`evidence_type`). Ad esempio:
- **`SIGNATURE`**: Richiede una firma digitale per procedere (es. accettazione legale).
- **`VISION`**: Richiede una convalida visiva di un output.
- **`FILE`**: Verifica la presenza di un documento (es. disclaimer legale).

### 2. Gestione Risorse (`labor`)
Ogni passo non specifica solo "cosa" fare, ma "chi" (in termini di competenze) deve farlo. Questo permette all'IA di assegnare il compito al collaboratore giusto filtrando per `required_skill_tags`.

### 3. Logistica e Workflow (`logistics_flags`)
I flag `requires_wip` e `requires_finished` permettono ai sistemi di automazione (n8n) di capire se un'attività può essere eseguita in parallelo o se deve attendere il completamento di una fase precedente (Work In Progress).

---
> [!IMPORTANT]
> Un Blueprint non è un file statico: è un file di configurazione che l'IA "legge" per guidare l'utente passo-passo attraverso la dashboard di SiteBoS.
