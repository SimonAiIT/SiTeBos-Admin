# Istruzioni Configurazione Backend: Azione `vertical`

Per consentire al modulo di setup avanzato (`advanced-setup.html`) di configurare correttamente e dinamicamente l'interfaccia in base alle verticali attive dell'azienda, è necessario aggiungere il supporto per l'azione `vertical` nel workflow n8n che gestisce il webhook di configurazione aziendale.

## Dettagli Webhook

* **Metodo**: `POST`
* **URL**: `https://prod.workflow.trinai.it/webhook/958dc50f-87c8-496c-85e4-29ca7d87f2fc`

## Payload Ricevuto

Quando la pagina si carica, invierà la seguente richiesta di controllo:

```json
{
  "_auth": "...", // Dati di inizializzazione di Telegram WebApp
  "ash": "...",   // Hash della sessione
  "action": "vertical"
}
```

## Schema di Risposta Richiesto

Il nodo n8n deve intercettare `action == "vertical"` e restituire un JSON con le verticali attive, la verticale primaria e il numero di postazioni o unità operative per ciascuna verticale:

```json
{
  "vertical": "dental",
  "verticals": ["dental", "beauty"],
  "primary_vertical": "dental",
  "operational_units": [
    { "vertical": "dental", "count": 3, "label": "Riuniti Dentistici" },
    { "vertical": "beauty", "count": 2, "label": "Cabine Estetiche" }
  ]
}
```

### Elenco Codici Verticali Supportati

* `dental` (Odontoiatria 🦷)
* `beauty` (Estetica 💆)
* `food` (Ristorazione 🍕)
* `hospitality` (Ospitalità 🛌)
* `professional` (Servizi Professionali / Uffici ⚖️)
* `workshop` (Artigianato / Officine 🔧)
* `construction` (Edilizia / Impianti 🚧)
* `generic` (Generico 💼)
