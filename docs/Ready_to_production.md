# Workflow Pronti per la Produzione (Ready to Production)

Questo documento elenca tutti i workflow di backend n8n che sono stati completamente sviluppati, testati, allineati agli standard di sicurezza multitenant (validazione HMAC Telegram, decodifica `Ash Decoder`, controllo collisioni, e gestione addebito crediti) e sono pronti per essere distribuiti in produzione.

---

## 🔒 1. Moduli di Sicurezza e Utility Centrali (Root)

Questi workflow gestiscono le funzioni trasversali del sistema come autenticazione, lock di concorrenza ed addebiti.

*   **[Unified-Authentication.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/Unified-Authentication.json)**
    *   **Descrizione**: Modulo di autenticazione crittografica e validazione dell'origine delle chiamate client Telegram WebApp.
    *   **Documentazione**: [Unified-Authentication.md](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/docs/Unified-Authentication.md)
*   **[Lock-Manager.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/Lock-Manager.json)**
    *   **Descrizione**: Gestore centralizzato dei lock di concorrenza per prevenire la sovrascrittura simultanea dei dati da parte di operatori.
    *   **Documentazione**: [Lock-Manager.md](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/docs/Lock-Manager.md)
*   **[Standard_AcCredit.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/Standard_AcCredit.json)**
    *   **Descrizione**: Subworkflow centralizzato per l'addebito interno dei crediti e la persistenza sincronizzata su tre collezioni MongoDB.
    *   **Documentazione**: [Standard_AcCredit.md](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/docs/Standard_AcCredit.md)
*   **[Billing-Balance.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/Billing-Balance.json)**
    *   **Descrizione**: Recupero e formattazione dello stato crediti ed estratto conto esterno per l'owner.
    *   **Documentazione**: [Billing-Balance.md](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/docs/Billing-Balance.md)
*   **[stakeholder_Session_Draft.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/stakeholder_Session_Draft.json)**
    *   **Descrizione**: Inizializzazione e gestione delle bozze per le nuove sessioni degli stakeholder.
    *   **Documentazione**: [stakeholder_Session_Draft.md](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/docs/stakeholder_Session_Draft.md)

---

## 🌐 2. Hook di Piattaforma (SiteBoS-App-Hook)

Workflow dedicati alla comunicazione server-to-server tra la dashboard amministrativa centrale e il backend n8n.

*   **[onboarding.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/onboarding.json)**
    *   **Descrizione**: Gestore dei flussi di onboarding dei tenant, verifica chiavi API Gemini, recupero e aggiornamento dei dati dell'owner con validazione dell'esistenza del record (`If` / `If1` per prevenire errori 401).
    *   **Documentazione**: [onboarding.md](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/docs/SiteBoS-App-Hook/onboarding.md)

---

## 🤖 3. Wrapper Centralizzati Intelligenza Artificiale (SiteBoS_Caller)

Infrastruttura di chiamata centralizzata ai modelli generativi Gemini con persistenza ed esecuzione in pipe.

*   **[GeminiCall.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS_Caller/GeminiCall.json)**
    *   **Descrizione**: Chiamata diretta e formattata a Gemini Flash/Pro.
    *   **Documentazione**: [GeminiCall.md](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/docs/SiteBoS_Caller/GeminiCall.md)
*   **[GeminiGoogleMaps.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS_Caller/GeminiGoogleMaps.json)**
    *   **Descrizione**: Wrapper Gemini per l'integrazione di ricerche locali tramite Google Maps.
    *   **Documentazione**: [GeminiGoogleMaps.md](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/docs/SiteBoS_Caller/GeminiGoogleMaps.md)
*   **[GeminiGoogleSerch.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS_Caller/GeminiGoogleSerch.json)**
    *   **Descrizione**: Wrapper Gemini per ricerche Web abilitate da Google Search Grounding.
    *   **Documentazione**: [GeminiGoogleSerch.md](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/docs/SiteBoS_Caller/GeminiGoogleSerch.md)
*   **Documentazione Generale della Cartella**: [Overview.md](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/docs/SiteBoS_Caller/Overview.md)

---

## ⚙️ 4. Servizi di Business e MiniApp (Completati e Risolti)

Ex workflow incompleti o critici, ora interamente ottimizzati, cablati e pronti al rilascio.

*   **[booking_engine.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/booking_engine.json)**
    *   **Descrizione**: Motore di prenotazione clienti per Telegram Customer Bot. Gestisce orari di apertura, blocco orari occupati e salvataggio proposte con invio notifica Vault all'owner.
*   **[Preventivi_engine.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Preventivi_engine.json)**
    *   **Descrizione**: Calcolo, persistenza e invio notifica delle proposte di preventivo cliente. Richiamato dal dispatcher in `Commerce_Engine.json`.
*   **[Telegram_teamAssistant.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/Telegram_teamAssistant.json)**
    *   **Descrizione**: Gestore dei comandi per il bot Desk degli operatori. Purgato dei nodi di certificazione deprecati e con switch completamente collegato per le azioni operative.
*   **[supervisor.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/supervisor.json)**
    *   **Descrizione**: Proxy di supervisione catalogo per il recupero delle opzioni di visualizzazione e ghosting di `catalog.html`.
*   **[intelligent_warehouse.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/intelligence/intelligent_warehouse.json)**
    *   **Descrizione**: Acquisizione e scansione OCR/Visione di bolle e documenti di carico, estrazione lotti, persistenza in inventario e notifica Vault.
*   **[MarketAnalisy.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/intelligence/MarketAnalisy.json)**
    *   **Descrizione**: Analisi geolocalizzata e di mercato a due step (`list_competitors` e `analyze_competitor`) con integrazione dei wrapper di ricerca Gemini.
