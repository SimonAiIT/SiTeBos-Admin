# Collezione: service_catalog

L'architettura dei servizi, dei prodotti e delle procedure (SOP) dell'istanza. È la mappa concettuale che l'IA usa per navigare tra le competenze dell'azienda e proporre soluzioni.

## Identificativi
- **Database**: `MemoryManager`
- **Chiave Primaria**: `sessionId` (Pattern: `[P.IVA]_setup_ik`)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (P.IVA_setup_ik)",
  "messages": [
    {
      "type": "system",
      "data": {
        "categories": [
          {
            "name": "String (es. '[SOP] Gestione Cassa e Soldi')",
            "short_name": "String (Emoji + Titolo Breve)",
            "callback_data": "String (ID Categoria SVC_...)",
            "macrocategories": "String (SOP / SER / PRO)",
            "subcategories": [
              {
                "name": "String (Nome esteso del servizio)",
                "short_name": "String (Nome breve per menu)",
                "callback_data": "String (ID Servizio SVC_...)",
                "original_slug": "String (Slug interno)",
                "blueprint_ready": "Boolean (Indica se esiste un Process Blueprint collegato)"
              }
            ],
            "original_slug": "String"
          }
        ],
        "metadata": {
          "last_updated_at": "ISO Date String",
          "updated_by": "String (es. 'SYSTEM_AUTO_PROVISIONING')"
        }
      }
    }
  ]
}
```

## Struttura Dettagliata Catalog Item (Documento Singolo)

Oltre alla gerarchia delle categorie, ogni singolo prodotto/servizio segue questo schema tecnico granulare, utilizzato dalle WebApp di editing e vendita per la generazione di bozze AI e manutenzione manuale.

```json
{
  "catalog_item_draft": {
    "document_type": "CATALOG_ITEM",
    "version": "1.0",
    "owner_instance_id": "String (P.IVA)",
    "metadata": { 
      "status": "DRAFT | LIVE", 
      "source": "CHAT_INFERENCE | MANUAL", 
      "created_at": "ISO Date", 
      "is_duplicate": Boolean, 
      "duplicate_of": "String (ID) | null" 
    },
    "identity": {
      "item_name": "String",
      "item_sku": "String (ID Casuale 8 char)",
      "item_type": "SERVICE | PRODUCT | INTERNAL_PROTOCOL",
      "description": { "short": "String (Max 100 char)", "long": "String", "internal_notes": "String" },
      "category": "String (ID Categoria)",
      "tags": ["Array[String]"],
      "keywords": ["Array[String]"]
    },
    "pricing": {
      "base_price": Number,
      "currency": "EUR | USD",
      "unit_of_measure": "item | hour | project | month | year",
      "tax_info": { "taxable": Boolean, "tax_rate_percentage": Number },
      "pricing_rules_engine": { 
        "is_dynamic_price": Boolean, 
        "rules_ids": ["Array[String]"], 
        "notes": "String" 
      },
      "cost_of_goods": "Number | null"
    },
    "commercial_setup": {
      "extra_options": [
        { "name": "String", "price": Number }
      ],
      "allow_customer_notes": Boolean
    },
    "operations": {
      "requires_booking": Boolean,
      "requires_inventory_check": Boolean,
      "process_blueprint_id": "String | null",
      "fulfillment_time": { "value": "Number | null", "unit": "String | null" },
      "provider_info": { 
        "required_skill_tags": ["Array[String]"], 
        "specific_provider_ids": ["Array[String]"] 
      }
    },
    "relations": {
      "related_items": ["Array[String]"],
      "marketing_info": { "is_featured": Boolean, "target_audience_tags": ["Array[String]"] }
    }
  },
  "ui_node_draft": {
    "name": "String",
    "short_name": "String (Emoji + Titolo)",
    "callback_data": "String (ID univoco)"
  }
}
```

---

## Logiche di Classificazione

### 1. Macro-categorie (`macrocategories`)
Il sistema divide gli asset in tre grandi famiglie:
- **`SOP` (Standard Operating Procedure)**: Procedure interne per l'ordine e la sicurezza (es. Gestione Cassa, Difesa Digitale).
- **`SER` (Service)**: Servizi erogabili a terzi (es. Costruzione Motori n8n, Configurazione Gemini).
- **`PRO` (Product)**: Asset finiti o pacchettizzati (es. Kit Ufficio Automatico, Video-Corsi).

### 2. Collegamento Operativo (`blueprint_ready`)
Questo flag è fondamentale: se impostato a `true`, significa che esiste un documento corrispondente nella collezione `process_blueprints`. L'assistente IA userà questa informazione per capire se può "guidare" l'utente nell'esecuzione pratica di quel compito.

### 3. Navigazione (`callback_data`)
Questi ID sono ottimizzati per le interazioni Telegram e Web. Permettono il passaggio di parametri leggeri tra i nodi di n8n senza dover trasportare interi oggetti JSON pesanti.

---
> [!TIP]
> Il `service_catalog` è il menu di SiteBoS. Quando un owner aggiunge una procedura, l'IA aggiorna questo catalogo, rendendo la nuova competenza immediatamente disponibile per la ricerca e l'esecuzione.
