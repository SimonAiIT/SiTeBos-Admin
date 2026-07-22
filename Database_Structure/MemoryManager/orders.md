# Collezione: orders

Questa collezione traccia lo "Stato Live" delle intenzioni d'acquisto dei clienti. Seguendo la filosofia BOS (Business Operating System), non gestisce il magazzino ma funge da registro delle "liste della spesa" validate e referenziate al catalogo servizi.

## Identificativi
- **Database**: `MemoryManager`
- **Chiave Primaria**: `sessionId` (Pattern: `[Customer_ID]_order_[Timestamp]`)
- **Indice di Ricerca**: `customer_id` (per recupero storico)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (C_ID_order_TS)",
  "messages": [
    {
      "type": "system",
      "data": {
        "order_info": {
          "order_id": "String (ORD-HEX)",
          "timestamp": "ISO Date String",
          "status": "String (PENDING / CONFIRMED / DELIVERED / CANCELLED)",
          "total_amount": "Number",
          "payment_method": "String (es. 'PAY_ON_DELIVERY')",
          "payment_mode": "String (CARD / DELIVERY)"
        },
        "customer": {
          "id": "Number (Telegram ID)",
          "name": "String",
          "username": "String"
        },
        "delivery": {
          "address": "String",
          "location": {
            "lat": "Number",
            "lon": "Number"
          }
        },
        "items": [
          {
            "sku": "String (SVC_...)",
            "name": "String",
            "base_price": "Number",
            "final_price": "Number",
            "quantity": "Number",
            "selected_extras": [
              { "name": "String", "price": "Number" }
            ],
            "customer_note": "String"
          }
        ],
        "metadata": {
          "ash_session": "String (Signed Token Reference)",
          "marketing_node_ref": "String (Source context)"
        }
      }
    }
  ]
}
```

---

## Logiche di Runtime

### 1. Referenziazione Catalogo
Ogni item nell'array `items` DEVE contenere lo `sku` (callback_data) presente nel `service_catalog`. Questo permette all'Owner di risalire immediatamente alla procedura operativa o alle specifiche del prodotto ordinato.

### 2. Live History & Suggestions
Il sistema n8n, durante la chiamata `u_calc_ecom_get`, esegue una query su questa collezione filtrando per `customer.id`. I dati ottenuti vengono processati da un algoritmo di scoring (o mini-agente) per:
- Identificare i **Preferiti**: Prodotti ordinati più frequentemente.
- Generare **Suggeriti**: Prodotti correlati alle categorie più acquistate.

### 3. Order Lifecycle
Essendo SiteBoS un sistema basato su stati, il cambio di `status` di un ordine (es. da PENDING a CONFIRMED) può essere attivato da un comando sulla Dashboard dell'Owner, scatenando automaticamente notifiche Telegram al cliente tramite il `customerBot`.

---
> [!TIP]
> Questa collezione è ottimizzata per la velocità di lettura dello storico durante l'apertura della MiniApp Ecommerce.
