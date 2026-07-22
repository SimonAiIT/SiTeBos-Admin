# Collezione: marketing_nodes

Questa collezione funge da **Content Manifest** per la presenza online dell'azienda. Traccia lo stato, lo stile e la gerarchia dei nodi pubblicati (MiniSito, Blog, Social Assets) collegandoli ai rispettivi file fisici su GitHub e ai dati strategici del sistema.

## Identificativi
- **Database**: `MemoryManager`
- **Chiave Primaria**: `sessionId` (Pattern: `[P.IVA]_marketing`)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (P.IVA_marketing)",
  "messages": [
    {
      "type": "system",
      "data": {
        "identity": {
          "style_preset": "String (es. 'dark-tech')",
          "primary_color": "HEX String",
          "accent_color": "HEX String",
          "font_family": "String"
        },
        "site_manifest": {
          "is_live": "Boolean",
          "last_deploy": "ISO Date String",
          "github_repo": "String",
          "base_url": "String (URL GitHub Pages)",
          "pages": [
            {
              "slug": "String",
              "type": "String (index / service / about)",
              "sku_reference": "String (Link a service_catalog SKU)",
              "last_updated": "ISO Date String",
              "status": "String (LIVE / DRAFT)"
            }
          ]
        },
        "social_manifest": {
          "active_channels": ["Array[String]"],
          "last_post_date": "ISO Date String",
          "total_posts": "Number"
        },
        "analytics_brief": {
          "total_views": "Number (Aggregato asincrono)",
          "conversion_rate": "Number"
        }
      }
    }
  ]
}
```

---

## Logiche di Business

### 1. Sincronizzazione SKU
Ogni pagina di servizio nel `site_manifest` deve contenere un riferimento allo SKU del `service_catalog`. Questo permette all'IA di aggiornare automaticamente il contenuto del sito quando viene modificata una procedura operativa (Blueprint) o un'offerta nel catalogo.

### 2. Style Management
Il campo `style_preset` definisce l'estetica visuale generata dai workflow di deploy. Attualmente lo stile predefinito è `dark-tech`, ma la struttura permette l'espansione a nuovi preset (es. `minimal-light`, `corporate-blue`).

### 3. Deploy tracking
A differenza della collezione `honeypots` (che contiene i dati grezzi), `marketing_nodes` traccia l'effettiva erogazione del servizio web. Se un file viene rimosso da GitHub o il deploy fallisce, lo stato `is_live` viene aggiornato per informare l'Owner tramite la Dashboard.

---
> [!NOTE]
> Questa collezione è il ponte tra l'intelligenza aziendale interna e la sua manifestazione pubblica esterna.
