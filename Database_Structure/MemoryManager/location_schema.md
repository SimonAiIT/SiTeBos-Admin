# Modello Dati Logistica e Luoghi (Multi-tenant)

## Scopo
Questo schema definisce la struttura per gestire i "Luoghi" (Locations) fisici o virtuali nel SiteBoS. Può rappresentare:
- **Storage Location**: Dove viene stoccato un prodotto (es. Magazzino A, Scaffale 3, Cella Frigo).
- **Service/Delivery Location**: Dove viene erogato un servizio (es. Sala Riunioni, Domicilio Cliente, Officina, Tavolo 5).

## Struttura MongoDB (`locations`)

```json
{
  "_id": "ObjectId()",
  "tenant_id": "String (ID dell'azienda)",
  "loc_id": "String (Identificativo univoco, es. LOC-001)",
  
  "identity": {
    "name": "String (es. 'Cella Frigorifera B' o 'Sala Meeting')",
    "type": "String ('STORAGE', 'SERVICE_AREA', 'TRANSIT', 'VIRTUAL')",
    "description": "String"
  },
  
  "properties": {
    "capacity": "Number (es. 100 posti o 50 pallet)",
    "capacity_unit": "String",
    "controlled_temperature": "String (es. '-18°C')",
    "is_bookable": "Boolean (se può essere prenotata da un cliente o da un task)"
  },
  
  "address_info": {
    "address": "String",
    "coordinates": {
      "lat": "Number",
      "lng": "Number"
    }
  },
  
  "status_info": {
    "current_status": "String ('AVAILABLE', 'FULL', 'MAINTENANCE', 'CLOSED')",
    "assigned_operator": "String (Opzionale)"
  },
  
  "metadata": {
    "created_at": "ISO Date",
    "updated_at": "ISO Date",
    "is_active": "Boolean"
  }
}
```

## Integrazione
Quando un prodotto in `edit-product` viene associato a una o più Location, il sistema sa dove stoccarlo o dove deve essere svolto il task associato a quel prodotto/servizio.
