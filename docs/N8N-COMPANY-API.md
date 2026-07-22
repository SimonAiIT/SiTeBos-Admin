# N8N Company Data API (Bridge)

Questa API permette a N8N di interrogare il servizio **OpenAPI Company** tramite TrinAI. Il sistema gestisce automaticamente l'autenticazione verso OpenAPI e la **cache intelligente** dei risultati per ridurre i costi e migliorare le performance.

## Autenticazione

Tutte le richieste richiedono un Bearer Token.

**Header**: `Authorization: Bearer <API_EXTERNAL_TOKEN>`

---

## Endpoint: `POST /api/external-data`

L'endpoint centralizzato per il recupero di dati da provider esterni.

### Recupero Dati Azienda (`openapi_company`)
Restituisce i dati completi di un'azienda italiana partendo dalla Partita IVA o dal Codice Fiscale.

**Payload**:
```json
{
  "service": "openapi_company",
  "lookup_value": "12485671007"
}
```

**Parametri**:
- `service`: Deve essere `openapi_company`.
- `lookup_value`: Partita IVA (11 cifre) o Codice Fiscale (16 caratteri).

---

## Risposta API

Il bridge restituisce un oggetto standardizzato che include i dati originali di OpenAPI e i metadata della cache di TrinAI.

### Esempio Successo (200 OK)
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

**Metadata**:
- `cached`: `true` se i dati provengono dal database locale di TrinAI (costo zero).
- `cost`: Crediti consumati su OpenAPI (0 se cached).
- `fetched_at`: Data e ora dell'ultimo aggiornamento dei dati.

---

## Gestione Errori

- **401 Unauthorized**: Token mancante o errato.
- **400 Bad Request**: Payload JSON non valido o campi obbligatori mancanti.
- **404 Not Found**: Nessuna azienda trovata per il valore fornito.
- **500 Internal Error**: Problemi di comunicazione con il provider esterno.

---

## Consigli per N8N

1. **Usa il nodo HTTP Request**: Imposta il metodo su `POST`.
2. **Header Auth**: Usa `Authorization` con valore `Bearer {{ $env.API_EXTERNAL_TOKEN }}`.
3. **Caching**: Non preoccuparti di interrogare l'API più volte; TrinAI risponderà istantaneamente se i dati sono già in cache e non sono scaduti.
