# SiteBos Todo List

Questo documento traccia l'elenco delle attività di sviluppo (frontend e backend) aperte e lo storico dei completamenti per il progetto **SiteBos**.

---

## ⏳ Attività Aperte (To-Do)

### 🖥️ Frontend & Style
- [ ] **Allineamento Grafico Centrale (`style.css`)**:
  - Uniformare gli stili per garantire un design premium omogeneo (tavolozza colori HSL coerente, supporto dark mode nativo, font Outfit/Inter, ed eliminazione di elementi placeholder o stili ad-hoc sparsi).
- [ ] **Rifinitura Interfacce HTML**:
  - Completare e convalidare l'interfaccia di prenotazione agenda in `telegram_control/agenda.html`.
  - Completare e convalidare l'interfaccia di compilazione preventivi in `telegram_control/preventivi.html`.

### ⚙️ Backend n8n
- [ ] **Sicurezza su `booking_engine.json`**:
  - Integrare la validazione tramite il subworkflow centralizzato `Unified-Authentication.json` a monte delle chiamate per le prenotazioni del client.
- [ ] **Risoluzione Bug in `Preventivi_engine.json`**:
  - Debuggare e ripristinare il collegamento dati sul ramo di lettura dei preventivi (`u_calc_prev_get`).

---

## ✅ Attività Completate (Done)

- [x] **Controllo Esistenza su Onboarding Hook**:
  - Configurato il controllo sul recupero della collezione `owner_data` (nodi `If` / `If1` con risposta HTTP 401 in caso di record mancante) in `onboarding.json` e aggiornata la documentazione in `onboarding.md`.
- [x] **Riorganizzazione Documentazione di Sistema**:
  - Creata la cartella centralizzata `System_Istruction/`.
  - Spostati all'interno: `n8n_development_standards.md`, `unfinished_backends.md`, `backend_frontend_mapping.md` e `Ready_to_production.md`.
  - Scritto il file di orientamento `system_instructions.md`.
- [x] **Standardizzazione AI Caller**:
  - Documentata l'architettura dei wrapper centralizzati per le chiamate generiche, mappe e ricerche Web in `SiteBoS_Caller/` (`GeminiCall.json`, `GeminiGoogleMaps.json`, `GeminiGoogleSerch.json`).
- [x] **Subworkflow Crediti standard (`Standard_AcCredit`)**:
  - Sviluppato e documentato il modulo di detrazione crediti a consumo con tripla persistenza parallela su MongoDB.
- [x] **Allineamento Sicurezza Core**:
  - Ottimizzati e documentati i moduli di sicurezza principali `Unified-Authentication.json` e `Lock-Manager.json`.
