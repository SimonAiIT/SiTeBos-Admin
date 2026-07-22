# Telegram Control: Management & Runtime UI

Questa cartella contiene i componenti dell'interfaccia utente (UI) per la gestione dei bot Telegram e le sessioni di runtime delle **Telegram Web Apps (TWA)**, progettate per offrire un'esperienza premium direttamente all'interno della chat di Telegram.

---

## Rotta Principale (Index Redirect)
*   `index.html`: Pagina d'ingresso principale che effettua un redirect automatico verso il portale della Guida Utente SiTeBoS (`userguide/index.html`).

---

## Struttura della Cartella per Ambito

### 1. Dashboard (`dashboard/`)
Pannello di controllo centrale a scorrimento 3D (Cilindro 3D):
*   `dashboard.html`: Interfaccia principale a cilindro 3D per l'Owner.
*   `identity_logic.js`: Logica per il caricamento dei sottomenu.
*   `dashboard.wav` & `identity.wav`: Guide e tracce audio vocali di supporto.

### 2. Area Configurazione (`identity/`)
Pagine di setup anagrafico e del bot:
*   `edit_owner.html`: Gestione del profilo aziendale, dati fiscali e chiavi API.
*   `bot_config.html`: Pannello di controllo per configurare flussi del bot e attivazioni AI.
*   `advanced-setup.html`: Configurazione guidata a step per parametri e conti finanziari.
*   *File Audio*: `edit_owner.wav`, `bot_config.wav`, `advanced_setup_wizard.wav`, `advanced_setup_dashboard.wav`.

### 3. Area Gestione (`gestione/`)
Pagine per la configurazione del business e dei contenuti:
*   `catalog.html`: Selettore unico per la gestione dei cataloghi prodotti e servizi.
*   `add-product.html` / `edit-product.html`: Creazione e modifica delle voci catalogo.
*   `edit-advanced.html`: Setup e ingegneria dei parametri avanzati/SOP del settore merceologico.
*   `edit-blueprint.html` / `edit-blueprint-product.html`: Gestione dei flussi di lavoro/blueprint operativi.
*   `edit-knowledge.html`: Editor per la Knowledge Base aziendale.
*   `edit-blog.html`: Strumenti di pubblicazione post e blog aziendale.
*   `edit-location.html` / `edit-semilavorati.html`: Altri pannelli gestionali.
*   `supervisor_hub.html`: Pannello di controllo dei flussi e monitoraggio operatori.
*   *File Audio*: `catalog.wav`, `add-product.wav`, `add-category.wav`, `edit-advanced-crafted.wav`, `edit-advanced-draft.wav` ecc.

### 4. Area Operatività (`operativita/`)
Strumenti di logistica e operatività aziendale quotidiana:
*   `job-create.html`: Assegnazione, code di lavoro e avvio di nuove commesse lavorative.
*   `orders-manager.html`: Monitoraggio ed evasione degli ordini e-commerce live.
*   `pianificazione_itinerari.html`: Algoritmi predittivi per il calcolo dei percorsi logistici e delle consegne.

### 5. Area Analisi (`agents/`)
Moduli di intelligence per il controllo di gestione e decisioni strategiche:
*   `agent_intelligence.html`: Report e cruscotto di controllo direzionale sintetico.
*   `analisi-mercato.html`: Benchmarking automatizzato dei competitor territoriali.
*   `assistente-sicurezza.html`: Modulo di conformità normativa DVR e sicurezza.
*   `controllo_gestione.html`: Monitoraggio flussi di cassa, bilancio e marginalità.
*   `risorse_umane.html`: Gestione del personale e delle competenze del team.
*   `intelligent-warehouse.html`: Magazzino AI per l'ottimizzazione e tracciamento automatico scorte (IN/OUT).
*   `agenda.html` & `agenda-ocr-helper.js`: Gestione ed analisi del calendario, degli orari dello staff e caricamento OCR delle agende.

### 6. Pagine Bot Cliente (`customer_bot/`)
Interfaccia utente dedicata alle azioni dei clienti finali del bot:
*   `assistant.html`: Portale di assistenza e interazione con l'agente conversazionale.
*   `booking.html`: Sistema per la prenotazione autonoma degli appuntamenti.
*   `ecommerce.html`: Catalogo e-commerce interattivo per acquisti via Telegram.
*   `handover.html`: Gestione passaggio della chat da AI ad operatore umano.
*   `preventivi.html`: Wizard guidato per la richiesta di preventivi strutturati.
*   `ticket.html`: Creazione e monitoraggio dei ticket di supporto tecnico.
*   `legal.html`: Centro di conformità e Privacy Policy destinata ai clienti finali.

### 7. Pagine Operatori Staff (`operators/`)
Interfacce dedicate al personale dipendente ed operatori:
*   `operator_dashboard.html`: Cruscotto di tracciamento e gestione attività per i dipendenti.
*   `operator_onboarding.html`: Flusso guidato per l'attivazione dei profili staff.
*   `legal.html`: Informativa legale e trattamento dati personali specifica per i dipendenti.

### 8. Valutazione Competenze (`softskill/`)
*   Cartella contenente il questionario di valutazione delle soft skill personali (150 domande interattive).

### 9. Addestramento IA (`fine-tuning/`)
*   `fine-tuning.html`: Interfaccia per l'estrazione ed esportazione dei dati in formato JSONL per il fine-tuning dei modelli AI.

### 10. Versioni Deprecate (`old_version/` - *Esclusa in .gitignore*)
File deprecati non più attivi in produzione ma conservati in locale per storico storico:
*   `certificator.html`, `test_print.html`, `order-viewer.html`, `minisite.html`, ecc.

---

## Sviluppo & Design
Tutte le interfacce seguono lo stile **`dark-tech`** o **`white-clean`** (con coerenza di schemi colore):
*   **Framework**: Tailwind CSS.
*   **Font**: Plus Jakarta Sans / Inter.
*   **Integrazione**: Telegram WebApp SDK per il passaggio delle sessioni sicure ai workflow n8n.
