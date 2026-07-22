# Modello Dati Semilavorati (Multi-tenant)

## Scopo
Questo schema definisce la struttura "agnostica" per la gestione dei semilavorati (Semi-Finished Goods) all'interno del SiteBoS. Essendo multi-tenant, deve adattarsi sia al settore alimentare (es. "Impasto per pizza", "Sugo") sia al manifatturiero (es. "Scocca saldata", "Scheda pre-assemblata").

## Struttura MongoDB (`semi_finished_goods`)

```json
{
  "_id": "ObjectId()",
  "tenant_id": "String (ID dell'azienda)",
  "semi_id": "String (Identificativo univoco, es. SEMI-1234)",
  
  "identity": {
    "name": "String (es. 'Impasto Pizza 48h' o 'Motore V8 Assemblato')",
    "category": "String (es. 'Alimentare', 'Elettronica', 'Saldatura')",
    "description": "String"
  },
  
  "production_specs": {
    "yield_quantity": "Number (Quanto ne produco con un ciclo)",
    "unit_of_measure": "String (kg, lt, pz, m)",
    "estimated_time_minutes": "Number (Tempo medio di produzione)",
    "required_skills": ["String"]
  },
  
  "recipe_or_bom": [
    {
      "raw_material_id": "String (ID fornitura o materia prima)",
      "quantity_required": "Number",
      "unit": "String"
    }
  ],
  
  "storage_logistics": {
    "storage_type": "String (es. 'Frigorifero', 'Scaffale B', 'Silos')",
    "storage_temperature": "String (es. '4°C' o 'Ambiente')",
    "shelf_life_days": "Number (Giorni di validità prima della scadenza/deterioramento)"
  },
  
  "stock_tracking": {
    "current_quantity": "Number",
    "active_lots": [
      {
        "lot_id": "String",
        "produced_at": "ISO Date",
        "expiry_date": "ISO Date",
        "quantity": "Number"
      }
    ]
  },
  
  "metadata": {
    "created_at": "ISO Date",
    "updated_at": "ISO Date",
    "is_active": "Boolean"
  }
}
```

## Integrazione
Questo documento viene letto quando un prodotto richiama una semilavorazione nella sua BOM. Il SiteBoS calcola automaticamente i tempi, gli ingredienti richiesti e decreziona i lotti in base al `lot_id` utilizzato.
