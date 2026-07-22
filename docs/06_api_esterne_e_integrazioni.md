# API Esterne e Integrazioni di Piattaforma

Questo documento descrive le interfacce API esterne e i servizi bridge integrati nell'ecosistema SiteBoS.

---

## 🏢 1. N8N Company Data API (Bridge OpenAPI)

Questa API permette a n8n di interrogare il servizio **OpenAPI Company** tramite TrinAI per recuperare i dati ufficiali delle aziende italiane da Partita IVA o Codice Fiscale.

* **Endpoint**: `POST /api/external-data`
* **Header**: `Authorization: Bearer <API_EXTERNAL_TOKEN>`
* **Payload**:
```json
{
  "service": "openapi_company",
  "lookup_value": "12485671007"
}
```
* **Risposta (200 OK)**:
```json
{
  "success": true,
  "cached": true,
  "fetched_at": "2026-05-04T14:30:00+00:00",
  "cost": 0,
  "data": {
    "companyDetails": {
      "companyName": "OPENAPI SPA",
      "vatCode": "12485671007",
      "taxCode": "12485671007"
    },
    "address": {
      "streetName": "VIALE FILIPPO TOMMASO MARINETTI, 221",
      "town": "ROMA",
      "zipCode": "00143"
    },
    "pec": "openapi@legalmail.it",
    "sdiCode": "USAL8PV"
  }
}
```

---

## 🌐 2. Minisite File API (JSON Engine v2.0 & Legacy)

Permette a n8n di gestire i contenuti dei minisiti dinamici associati alle Partite IVA.

* **JSON Engine v2.0 (Raccomandato)**: `POST /api/n8n/json/minisite`
  * N8N invia uno schema JSON strutturato.
  * Inietta `window.MINISITE_DATA` nei template in `public/minisite/{VAT}/`.
* **Salvataggio Immagini**: `save_image`
  * Permette l'upload in Base64 di immagini (loghi, foto prodotti) salvandole nella cartella asset del minisito.
