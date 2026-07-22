# Stato di Produzione e Registro Modifiche Workflow

Questo documento traccia lo stato finale dei workflow di backend n8n di **SiteBoS**, i flussi verificati per la produzione e le modifiche apportate al sistema.

---

## 🔒 1. Moduli di Sicurezza e Utility Centrali (Root)

Tutti i workflow di seguito sono allineati ai criteri di sicurezza multitenant (validazione HMAC Telegram, decodifica `Ash Decoder`, controllo concorrenza e gestione crediti):

* **[Unified-Authentication.json](file:///c:/Users/garof/Desktop/TrinAi/SiTeBos-Admin/n8n_workflow/Unified-Authentication.json)**
  * **Descrizione**: Modulo di autenticazione crittografica e validazione dell'origine delle chiamate client Telegram WebApp.
* **[Lock-Manager.json](file:///c:/Users/garof/Desktop/TrinAi/SiTeBos-Admin/n8n_workflow/Lock-Manager.json)**
  * **Descrizione**: Gestore centralizzato dei lock di concorrenza per prevenire la sovrascrittura simultanea dei dati da parte degli operatori.
* **[Standard_AcCredit.json](file:///c:/Users/garof/Desktop/TrinAi/SiTeBos-Admin/n8n_workflow/Standard_AcCredit.json)**
  * **Descrizione**: Subworkflow centralizzato per l'addebito interno dei crediti e la persistenza sincronizzata su tre collezioni MongoDB.
* **[Billing-Balance.json](file:///c:/Users/garof/Desktop/TrinAi/SiTeBos-Admin/n8n_workflow/Billing-Balance.json)**
  * **Descrizione**: Recupero e formattazione dello stato crediti ed estratto conto esterno per l'owner.
* **[stakeholder_Session_Draft.json](file:///c:/Users/garof/Desktop/TrinAi/SiTeBos-Admin/n8n_workflow/stakeholder_Session_Draft.json)**
  * **Descrizione**: Inizializzazione e gestione delle bozze per le nuove sessioni degli stakeholder.

---

## 🌐 2. Hook di Piattaforma & AI Wrappers

* **[onboarding.json](file:///c:/Users/garof/Desktop/TrinAi/SiTeBos-Admin/n8n_workflow/SiteBoS-App-Hook/onboarding.json)**: Gestione onboarding dei tenant, verifica API key Gemini e aggiornamento profilo owner.
* **SiteBoS_Caller (`GeminiCall.json`, `GeminiGoogleMaps.json`, `GeminiGoogleSerch.json`)**: Infrastruttura di chiamata centralizzata ai modelli generativi Gemini con Google Search Grounding e Google Maps grounding.

---

## ⚙️ 3. Servizi di Business & MiniApp Completati

* **`booking_engine.json`**: Motore di prenotazione per Telegram Customer Bot. Gestisce orari di apertura, blocco slot occupati e salvataggio proposte con notifica Vault all'owner.
* **`Preventivi_engine.json`**: Calcolo, persistenza e notifica delle proposte di preventivo cliente.
* **`Telegram_teamAssistant.json`**: Gestore dei comandi per il bot Desk degli operatori.
* **`supervisor.json`**: Proxy di supervisione catalogo e controllo opzioni di visualizzazione.
* **`intelligent_warehouse.json`**: Acquisizione e scansione OCR/Vision di bolle e documenti di carico, estrazione lotti e aggiornamento inventario.
* **`MarketAnalisy.json`**: Analisi geolocalizzata e di mercato a due step (`list_competitors` e `analyze_competitor`).

---

## 📝 4. Registro Modifiche ed Estensioni Azioni (Changelog)

### Azione `vertical` (Configurazione Multiverticale)
Per consentire al modulo di setup avanzato (`advanced-setup.html`) di configurarsi dinamicamente in base al settore aziendale:
* **Metodo**: `POST`
* **Action**: `"vertical"`
* **Codici Verticali Supportati**: `dental`, `beauty`, `food`, `hospitality`, `professional`, `workshop`, `construction`, `generic`.
