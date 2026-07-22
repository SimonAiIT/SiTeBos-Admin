# Indice Semantico Conversazionale (SiteBoS Project)

Questo documento funge da indice semantico e conversazionale ottimizzato per l'Agente Selettore (LLM). Fornisce una mappatura estesa, descrittiva ed esplicativa delle associazioni tra le funzionalità del Frontend (MiniApp in `telegram_control`) e i flussi di backend (workflow n8n in `n8n_workflows`), con i relativi dettagli del database MongoDB.

---

### Aggiunta Categoria
* **Descrizione Funzionale:** Questa interfaccia consente all'utente (proprietario del business) di creare e inserire una nuova categoria merceologica all'interno del catalogo dei prodotti o dei servizi. L'interfaccia raccoglie i dettagli inseriti dall'utente e interagisce con il backend per convalidare la sessione ed effettuare il salvataggio effettivo nel database.
* **Come ne parla l'utente (Frasi Tipo):**
  - "voglio creare una nuova categoria di prodotti"
  - "aggiungi una categoria al menu"
  - "modifica la schermata per inserire le categorie nel catalogo"
  - "cambia la logica con cui si salvano le categorie dei servizi"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [add-category.html](telegram_control/gestione/add-category.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [product_category.json](n8n_workflow/SiteBoS-App-Hook/catalog/product_category.json)
  - [saveCategory.json](n8n_workflow/SiteBoS-App-Hook/catalog/saveCategory.json)
* **Database e Collezioni:**
  - `honeypots`
  - `owner_sessions`
  - `service_catalog`

---

### Aggiunta Prodotto
* **Descrizione Funzionale:** Questa interfaccia consente l'aggiunta fisica di un nuovo prodotto o servizio all'interno del catalogo aziendale. Raccoglie informazioni quali nome del prodotto, descrizione testuale, prezzo e altri metadati rilevanti. Il backend valida la chiamata tramite i controlli di Telegram e il token transazionale ash, per poi salvare le informazioni nel catalogo dei servizi.
* **Come ne parla l'utente (Frasi Tipo):**
  - "aggiungi un nuovo prodotto al catalogo"
  - "inserisci un nuovo servizio con descrizione e prezzo"
  - "modifica il modulo per creare prodotti"
  - "cambia il comportamento di registrazione di un nuovo articolo"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [add-product.html](telegram_control/gestione/add-product.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [newProduct.json](n8n_workflow/SiteBoS-App-Hook/catalog/newProduct.json)
  - [saveProduct_processor.json](n8n_workflow/SiteBoS-App-Hook/catalog/saveProduct_processor.json)
* **Database e Collezioni:**
  - `honeypots`
  - `owner_sessions`
  - `service_catalog`

---

### Pipeline Generazione Prodotto Digitale (PDF Pipe)
* **Descrizione Funzionale:** Gestisce la generazione dinamica di PDF informativi o schede tecniche partendo da prodotti a catalogo. La pipeline estrae le informazioni del prodotto, la struttura editoriale dal blueprint e il profilo aziendale dell'utente per comporre, renderizzare e archiviare un documento personalizzato.
* **Come ne parla l'utente (Frasi Tipo):**
  - "genera il PDF con la scheda tecnica del prodotto"
  - "crea una brochure informativa per questo servizio"
  - "avvia la generazione del documento digitale nel catalogo"
  - "scarica il report tecnico aggiornato"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [catalog.html](telegram_control/gestione/catalog.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [service_catalog.json](n8n_workflow/SiteBoS-App-Hook/catalog/service_catalog.json)
* **Database e Collezioni:**
  - `service_catalog` (campo `identity.item_type: "digital"`)
  - `process_blueprints`
  - `owner_sessions` (campo `additional_kwargs.digital_downloads_history`)

---

### Configurazione Avanzata
* **Descrizione Funzionale:** Questa interfaccia consente la configurazione avanzata dei parametri e del setup finanziario dell'attività in ottica multiverticale. Consente di definire il tipo di società (di capitali, di persone, ditta individuale), calcolare la scomposizione dei costi operativi e invitare collaboratori. Il backend elabora queste informazioni avvalendosi di ricerche e modelli fiscali tramite AI.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica il setup avanzato dell'impresa"
  - "cambia i parametri per la società o ditta individuale"
  - "aggiorna i calcoli della scomposizione economica"
  - "crea un link di invito per lo staff"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [advanced-setup.html](telegram_control/identity/advanced-setup.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [advanced-setup.json](n8n_workflow/SiteBoS-App-Hook/advanced-setup.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `stakeholders`

---

### Agenda e Calendario
* **Descrizione Funzionale:** Questa schermata mostra il calendario aziendale con gli appuntamenti, le disponibilità orarie del personale e le prenotazioni programmate. Permette al gestore e al personale di monitorare gli slot prenotati.
* **Come ne parla l'utente (Frasi Tipo):**
  - "mostra l'agenda aziendale"
  - "modifica il calendario degli appuntamenti"
  - "cambia gli orari e le disponibilità del personale"
  - "gestisci le prenotazioni del giorno"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [agenda.html](telegram_control/agents/agenda.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [Agenda-Radar.json](n8n_workflow/SiteBoS-App-Hook/intelligence/Agenda-Radar.json)
* **Database e Collezioni:**
  - `owner_sessions`

---

### Chat Assistente del Team
* **Descrizione Funzionale:** Interfaccia di chat che consente agli operatori del team di interagire con un assistente virtuale intelligente (Gemini). L'assistente risponde in base alla base di conoscenza caricata o alle istruzioni del bot.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica la chat dell'assistente virtuale"
  - "cambia le istruzioni o il comportamento del chatbot del team"
  - "aggiungi funzioni alla conversazione con l'AI"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [assistant.html](telegram_control/customer_bot/assistant.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [Telegram_teamAssistant.json](n8n_workflow/SiteBoS-App-Hook/operators/Telegram_teamAssistant.json)
  - [dashboard_confirmAssistant.json](n8n_workflow/SiteBoS-App-Hook/dashboard/dashboard_confirmAssistant.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `stakeholders`

---

### Prenotazione Clienti (Booking)
* **Descrizione Funzionale:** Pagina pubblica in cui i clienti dell'attività possono effettuare prenotazioni selezionando la data, l'ora e il tipo di servizio desiderato. Il backend gestisce la logica di memorizzazione e l'eventuale conferma della proposta di prenotazione.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica il form di booking per i clienti"
  - "cambia la schermata delle prenotazioni dei servizi"
  - "modifica le date o i campi del modulo di proposta prenotazione"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [booking.html](telegram_control/customer_bot/booking.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [booking_engine.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/booking_engine.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `active_sessions`

---

### Configurazione del Bot Telegram
* **Descrizione Funzionale:** Questa interfaccia consente di configurare le risposte automatiche, i testi e le impostazioni del Bot Telegram dedicato alla cura e interazione con i clienti dell'azienda.
* **Come ne parla l'utente (Frasi Tipo):**
  - "cambia il messaggio di benvenuto del bot"
  - "configura i comandi del chatbot di Telegram"
  - "modifica le impostazioni generali del customer bot"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [bot_config.html](telegram_control/identity/bot_config.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [telegram_customerBot.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `stakeholders`

---

### Catalogo Prodotti e Servizi (Pannello Principale)
* **Descrizione Funzionale:** La pagina centrale del catalogo aziendale. Oltre a mostrare prodotti e categorie, consente di avviare flussi per la produzione di materiali di marketing (video promozionali, immagini generate tramite AI e post per il blog o i social media), di stampare schede tecniche in PDF (inclusi i blueprint operativi) e di eliminare o aggiornare prodotti.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica la visualizzazione del catalogo"
  - "aggiungi o rimuovi elementi nel catalogo prodotti"
  - "genera un video promozionale o una foto con l'AI a partire dal prodotto"
  - "stampa o scarica la scheda tecnica (PDF) del prodotto"
  - "imposta la pubblicazione automatica dei post di marketing sul blog"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [catalog.html](telegram_control/gestione/catalog.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [service_catalog.json](n8n_workflow/SiteBoS-App-Hook/catalog/service_catalog.json)
  - [createPost.json](n8n_workflow/SiteBoS-App-Hook/knowledge_Marketing/createPost.json)
  - [deploy_blog.json](n8n_workflow/SiteBoS-App-Hook/knowledge_Marketing/deploy_blog.json)
  - [videoProd.json](n8n_workflow/SiteBoS-App-Hook/knowledge_Marketing/videoProd.json)
  - [supervisor.json](n8n_workflow/SiteBoS-App-Hook/operators/supervisor.json)
  - [tasks.json](n8n_workflow/SiteBoS-App-Hook/operators/tasks.json)
* **Database e Collezioni:**
  - `social_posts`
  - `owner_sessions`
  - `service_catalog`
  - `website_board`
  - `process_blueprints`
  - `knowledge_fragments`
  - `honeypots`
  - `projects`
  - `stakeholders`

---

### Certificatore e Compliance (Pannello Utente / Supervisor)
* **Descrizione Funzionale:** Questa schermata e hub direzionale guida l'utente e il supervisore nel caricamento e nell'approvazione di evidenze documentali o firme per autocertificare e convalidare la conformità del lavoro svolto rispetto a specifici blueprint.
* **Come ne parla l'utente (Frasi Tipo):**
  - "carica un file per certificare il lavoro svolto"
  - "modifica la schermata del certificatore o delle evidenze"
  - "cambia il controllo di conformità dei documenti"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [supervisor_hub.html](telegram_control/gestione/supervisor_hub.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [dashboard.json](n8n_workflow/SiteBoS-App-Hook/dashboard/dashboard.json)
* **Database e Collezioni:**
  - `honeypots`
  - `owner_sessions`
  - `service_catalog`

---

### Configurazione del Negozio (E-commerce)
* **Descrizione Funzionale:** Schermata per la gestione delle impostazioni operative e delle regole del carrello e-commerce integrato per la vendita dei prodotti ai clienti finali.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica le regole del carrello dell'e-commerce"
  - "cambia i parametri di configurazione del negozio online"
  - "attiva o disattiva le impostazioni di vendita dei prodotti"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [ecommerce.html](telegram_control/customer_bot/ecommerce.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [Commerce_Engine.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json)
  - [telegram_customerBot.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)
* **Database e Collezioni:**
  - `orders`
  - `honeypots`
  - `service_catalog`
  - `owner_sessions`
  - `stakeholders`

---

### Gestione Avanzata Prodotto (BOM & Sourcing)
* **Descrizione Funzionale:** Questa interfaccia (Operations & Sourcing Controller) permette di gestire e analizzare i dettagli avanzati di un prodotto o servizio nel catalogo. Consente di definire la Distinta Base (BOM / Sottoprocessi Operativi), analizzare i fornitori e i prezzi delle materie prime (Sourcing), confrontare le tariffe con i concorrenti territoriali (Competitors) e ricalcolare la marginalità economico-finanziaria complessiva (CFO Advisory) con il supporto dell'AI.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica la distinta base del prodotto"
  - "ricalcola i costi delle materie prime o i margini del servizio"
  - "gestisci i fornitori e il sourcing del prodotto"
  - "cambia i dati di concorrenza per questa prestazione"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [edit-advanced.html](telegram_control/gestione/edit-advanced.html)
  - [edit-advanced-product.html](telegram_control/gestione/edit-advanced-product.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [Advanced_processor2.0.json](n8n_workflow/SiteBoS-App-Hook/catalog/Advanced_processor2.0.json)
  - [certificator_hub.json](n8n_workflow/SiteBoS-App-Hook/catalog/certificator_hub.json)
  - [editBlueprint.json](n8n_workflow/SiteBoS-App-Hook/catalog/editBlueprint.json)
* **Database e Collezioni:**
  - `process_blueprints`
  - `honeypots`
  - `owner_sessions`
  - `knowledge_fragments`
  - `advanced`
  - `service_catalog`
  - `compliance_docs`
  - `evidence_docs`

---

### Modifica Articolo / Post Promozionale AI
* **Descrizione Funzionale:** Permette di modificare articoli e post promozionali. Consente il caricamento di immagini da analizzare tramite visione artificiale (AI Vision) per arricchire automaticamente il testo dell'articolo e salvarlo nella knowledge base o pubblicarlo.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica l'articolo o la scheda promozionale"
  - "fai analizzare la foto dell'articolo con l'AI"
  - "salva le modifiche apportate al post"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [edit-post.html](telegram_control/gestione/edit-post.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [editProduct.json](n8n_workflow/SiteBoS-App-Hook/catalog/editProduct.json)
* **Database e Collezioni:**
  - `process_blueprints`
  - `owner_sessions`
  - `service_catalog`
  - `knowledge_fragments`

---

### Modifica Articolo di Blog
* **Descrizione Funzionale:** Pagina per la scrittura e modifica manuale o assistita dei post del blog dell'azienda. Il backend si occupa della formattazione e della distribuzione sul sito vetrina (website board).
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica il testo del post del blog"
  - "cambia i dettagli dell'articolo pubblicato online"
  - "aggiorna la pagina di gestione degli articoli del blog"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [edit-blog.html](telegram_control/gestione/edit-blog.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [deploy_blog.json](n8n_workflow/SiteBoS-App-Hook/knowledge_Marketing/deploy_blog.json)
* **Database e Collezioni:**
  - `process_blueprints`
  - `owner_sessions`
  - `knowledge_fragments`
  - `service_catalog`
  - `website_board`
  - `honeypots`

---

### Modifica Blueprint Operativo (SOP)
* **Descrizione Funzionale:** Interfaccia per modificare la sequenza di passi (blueprint) di erogazione di un servizio. Permette di effettuare una verifica automatica di conformità a leggi o regolamenti (compliance check) effettuando ricerche web in background guidate da Gemini.
* **Come ne parla l'utente (Frasi Tipo):**
  - "cambia la sequenza o il blueprint del processo operativo"
  - "modifica i passi di erogazione del servizio"
  - "avvia il controllo di conformità legale sulla procedura"
  - "salva le modifiche al diagramma del processo"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [edit-blueprint.html](telegram_control/gestione/edit-blueprint.html)
  - [edit-blueprint-product.html](telegram_control/gestione/edit-blueprint-product.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [Advanced_processor2.0.json](n8n_workflow/SiteBoS-App-Hook/catalog/Advanced_processor2.0.json)
  - [certificator_hub.json](n8n_workflow/SiteBoS-App-Hook/catalog/certificator_hub.json)
  - [editBlueprint.json](n8n_workflow/SiteBoS-App-Hook/catalog/editBlueprint.json)
* **Database e Collezioni:**
  - `process_blueprints`
  - `honeypots`
  - `owner_sessions`
  - `knowledge_fragments`
  - `advanced`
  - `service_catalog`
  - `compliance_docs`
  - `evidence_docs`

---

### Modifica Base di Conoscenza (Knowledge Base)
* **Descrizione Funzionale:** Consente di modificare e inserire manuali aziendali, regole del negozio o informazioni commerciali (knowledge fragments) utilizzate dall'AI per rispondere autonomamente alle domande dei clienti.
* **Come ne parla l'utente (Frasi Tipo):**
  - "aggiorna le informazioni della base di conoscenza"
  - "modifica la knowledge base per il bot"
  - "aggiungi risposte o dettagli sui nostri servizi"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [edit-knowledge.html](telegram_control/gestione/edit-knowledge.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [knowledge.json](n8n_workflow/SiteBoS-App-Hook/knowledge_Marketing/knowledge.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `knowledge_fragments`
  - `website_board`
  - `service_catalog`

---

### Modifica Prodotto / Servizio (Pannello Edit)
* **Descrizione Funzionale:** Consente di modificare tutti i parametri di un prodotto o servizio nel catalogo, con la possibilità di generare una bozza di blueprint (passaggi operativi) delegando la stesura iniziale all'intelligenza artificiale. Include il flag 'show_in_security_assistant' per gestire la visibilità nell'Assistente Sicurezza.
* **Come ne parla l'utente (Frasi Tipo):**
  - "cambia il prezzo o la descrizione del servizio nel catalogo"
  - "modifica il prodotto registrato"
  - "fai scrivere all'AI i passaggi per eseguire questo servizio"
  - "abilita questo servizio nell'assistente sicurezza"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [edit-product.html](telegram_control/gestione/edit-product.html)
  - [catalog.html](telegram_control/gestione/catalog.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [editProduct.json](n8n_workflow/SiteBoS-App-Hook/catalog/editProduct.json)
  - [saveProduct_processor.json](n8n_workflow/SiteBoS-App-Hook/catalog/saveProduct_processor.json)
  - [Advanced_processor2.0.json](n8n_workflow/SiteBoS-App-Hook/catalog/Advanced_processor2.0.json)
  - [certificator_hub.json](n8n_workflow/SiteBoS-App-Hook/catalog/certificator_hub.json)
  - [editBlueprint.json](n8n_workflow/SiteBoS-App-Hook/catalog/editBlueprint.json)
* **Database e Collezioni:**
  - `service_catalog` (campo `operations.show_in_security_assistant`)
  - `process_blueprints`
  - `knowledge_fragments`
  - `owner_sessions`
  - `honeypots`
  - `advanced`
  - `compliance_docs`
  - `evidence_docs`

---

### Modifica Semilavorati e Materie Prime
* **Descrizione Funzionale:** Interfaccia dedicata alla creazione e catalogazione autonoma di semilavorati e materie prime. Configura nomi, SKU, categorie, costi unitari e il collegamento diretto alle SOP di assemblaggio.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica le materie prime del prodotto"
  - "cambia i componenti dei nostri semilavorati"
  - "gestisci i prodotti intermedi collegati al catalogo"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [edit-semilavorati.html](telegram_control/gestione/edit-semilavorati.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [editProduct.json](n8n_workflow/SiteBoS-App-Hook/catalog/editProduct.json)
* **Database e Collezioni:**
  - `process_blueprints`
  - `owner_sessions`
  - `service_catalog`
  - `knowledge_fragments`

---

### Modifica Profilo Proprietario (Owner)
* **Descrizione Funzionale:** Consente al proprietario del business di inserire i propri dati anagrafici, associare il token del bot Telegram cliente all'applicazione e richiedere un'analisi strategica del proprio business basata sull'AI.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica il profilo del proprietario"
  - "cambia il token del bot Telegram nell'app"
  - "avvia l'analisi del profilo aziendale tramite AI"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [edit_owner.html](telegram_control/identity/edit_owner.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [edit_owner.json](n8n_workflow/SiteBoS-App-Hook/edit_owner.json)
* **Database e Collezioni:**
  - `owner_sessions`

---

### Passaggio a Operatore Umano (Handover Chat)
* **Descrizione Funzionale:** Pagina utilizzata per deviare la chat utente dal risponditore AI automatico a un operatore di supporto reale (operatore umano). Il backend inibisce il bot per la sessione corrente per consentire la chat diretta.
* **Come ne parla l'utente (Frasi Tipo):**
  - "disattiva il bot e passa a operatore umano"
  - "modifica la logica di handover della chat"
  - "gestisci il passaggio alla chat con operatore"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [handover.html](telegram_control/customer_bot/handover.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [Comunication_hub.json](n8n_workflow/SiteBoS-App-Hook/knowledge_Marketing/Comunication_hub.json)
  - [telegram_customerBot.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `active_sessions`
  - `orders`
  - `stakeholders`

---

### Dashboard e Identity Hub (Verticalizzazione Settore)
* **Descrizione Funzionale:** Gestisce l'identificazione e la definizione della categoria merceologica e del settore dell'azienda in un'architettura multiverticale per caricare il modulo di configurazione avanzata corrispondente.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica la pagina di selezione del settore aziendale"
  - "cambia la verticalizzazione dell'identità aziendale"
  - "configura la schermata iniziale di identity hub"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [dashboard.html](telegram_control/dashboard/dashboard.html)
  - [identity_logic.js](telegram_control/dashboard/identity_logic.js)
  - [advanced-setup.html](telegram_control/identity/advanced-setup.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [advanced-setup.json](n8n_workflow/SiteBoS-App-Hook/advanced-setup.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `stakeholders`

---

### Magazzino Intelligente (Warehouse)
* **Descrizione Funzionale:** Interfaccia per il monitoraggio dell'inventario, delle scorte e delle bolle di carico/scarico per ottimizzare la catena di fornitura dell'azienda.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica il magazzino intelligente"
  - "gestisci le giacenze o le scorte dei prodotti"
  - "aggiorna l'inventario dei materiali aziendali"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [intelligent-warehouse.html](telegram_control/agents/intelligent-warehouse.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [intelligent_warehouse.json](n8n_workflow/SiteBoS-App-Hook/intelligence/intelligent_warehouse.json)
* **Database e Collezioni:**
  - `owner_sessions`

---

### Creazione Commessa / Job
* **Descrizione Funzionale:** Questa interfaccia consente ai supervisori di inserire e avviare una nuova commessa operativa. Consente la ricerca e convalida dei dati cliente da associare a un servizio specifico definito nel catalogo.
* **Come ne parla l'utente (Frasi Tipo):**
  - "crea una nuova commessa lavorativa"
  - "associa un lavoro a un cliente specifico"
  - "modifica la schermata per avviare le commesse"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [job-create.html](telegram_control/operativita/job-create.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [supervisor.json](n8n_workflow/SiteBoS-App-Hook/operators/supervisor.json)
  - [tasks.json](n8n_workflow/SiteBoS-App-Hook/operators/tasks.json)
  - [service_catalog.json](n8n_workflow/SiteBoS-App-Hook/catalog/service_catalog.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `stakeholders`
  - `process_blueprints`
  - `honeypots`
  - `service_catalog`
  - `projects`
  - `social_posts`
  - `website_board`

---

### Pianificazione Itinerari e Trasporti
* **Descrizione Funzionale:** Gestisce l'organizzazione dei percorsi di consegna, la pianificazione degli itinerari per gli operatori e la logistica degli spostamenti sul territorio.
* **Come ne parla l'utente (Frasi Tipo):**
  - "pianifica le tappe o gli itinerari degli operatori"
  - "modifica la schermata dei percorsi di consegna"
  - "riorganizza il calendario delle uscite o trasporti"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [pianificazione_itinerari.html](telegram_control/operativita/pianificazione_itinerari.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [tasks.json](n8n_workflow/SiteBoS-App-Hook/operators/tasks.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `projects`

---

### Catalogo Riservato Operatori
* **Descrizione Funzionale:** Visualizzazione del catalogo prodotti e servizi ottimizzata e filtrata per gli operatori aziendali, per consentire loro di selezionare i compiti da avviare.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica la visualizzazione del catalogo per i dipendenti"
  - "mostra i servizi erogabili dello staff"
  - "cambia il catalogo degli operatori"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [catalog.html](telegram_control/operators/catalog.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [supervisor.json](n8n_workflow/SiteBoS-App-Hook/operators/supervisor.json)
  - [tasks.json](n8n_workflow/SiteBoS-App-Hook/operators/tasks.json)
  - [service_catalog.json](n8n_workflow/SiteBoS-App-Hook/catalog/service_catalog.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `service_catalog`
  - `stakeholders`
  - `projects`
  - `process_blueprints`
  - `honeypots`

---

### Logica di Modifica Operatore
* **Descrizione Funzionale:** Gestisce la logica di invio dei dati anagrafici dell'operatore, l'aggiornamento del proprio profilo e il caricamento delle statistiche di rendimento all'interno della dashboard dipendente.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica i dati anagrafici dell'operatore"
  - "aggiorna la logica di salvataggio del dipendente"
  - "cambia il recupero delle statistiche del collaboratore"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [edit_operator.html](telegram_control/operators/edit_operator.html)
  - [edit_operator_logic.js](telegram_control/operators/edit_operator_logic.js)
* **Componenti Backend Coinvolti (Path Estese):**
  - *Mappatura Euristica* (Utilizza workflow di aggiornamento stakeholder)
* **Database e Collezioni:**
  - `stakeholders`
  - `owner_sessions`

---

### Dashboard Operatore (Pannello & Logica)
* **Descrizione Funzionale:** Gestisce le chiamate al database e ai workflow di backend per popolare la dashboard dell'operatore con l'elenco dei progetti assegnati e i pulsanti rapidi di gestione. Include il meccanismo di semaforo (lock) per le generazioni AI: il frontend implementa 'setAIGenerationLock' e interroga lo stato tramite polling su 'owner_sessions' (flag 'ai_generation_lock'). Il backend gestisce i lock tramite nodi MongoDB dedicati nei flussi di generazione.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica il caricamento della dashboard del dipendente"
  - "cambia la logica dei pulsanti di stato dell'operatore"
  - "gestisci il blocco (lock) durante la generazione AI"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [operator_dashboard.html](telegram_control/operators/operator_dashboard.html)
  - [operator_dashboard_logic.js](telegram_control/operators/operator_dashboard_logic.js)
  - [supervisor_hub.html](telegram_control/gestione/supervisor_hub.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [dashboard.json](n8n_workflow/SiteBoS-App-Hook/dashboard/dashboard.json)
  - [dashboard_confirmBlueprintbuild.json](n8n_workflow/SiteBoS-App-Hook/dashboard/dashboard_confirmBlueprintbuild.json)
  - [dashboard_confirmAssistant.json](n8n_workflow/SiteBoS-App-Hook/dashboard/dashboard_confirmAssistant.json)
* **Database e Collezioni:**
  - `owner_sessions` (campi `ai_generation_lock`, `ai_lock_timestamp`, `ai_lock_reason`)
  - `honeypots`
  - `service_catalog`

---

### Onboarding Nuovo Operatore
* **Descrizione Funzionale:** Form di ingresso per i nuovi collaboratori invitati nel sistema. Supporta il caricamento del Curriculum Vitae, che viene analizzato con AI (Gemini) per popolarne le competenze (parse_cv), valida la chiave AI inserita e completa l'accreditamento.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica la registrazione (onboarding) del personale"
  - "cambia la funzione di lettura del CV con l'AI"
  - "imposta la verifica della chiave API di Gemini all'onboarding operatori"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [operator_onboarding.html](telegram_control/operators/operator_onboarding.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [Billing-Balance.json](n8n_workflow/Billing-Balance.json)
  - [operator_onboarding.json](n8n_workflow/SiteBoS-App-Hook/operators/operator_onboarding.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `stakeholders`

---

### Modifica Commesse/Progetti Operatore (Project Editor)
* **Descrizione Funzionale:** File HTML e script JavaScript che gestiscono l'aggiornamento dei dettagli operativi delle commesse in corso e l'avanzamento dei lavori comunicando lo stato al backend.
* **Come ne parla l'utente (Frasi Tipo):**
  - "cambia l'aggiornamento di stato del progetto dell'operatore"
  - "modifica come lo staff aggiorna i progetti dal pannello"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [operator_project_editor.html](telegram_control/operators/operator_project_editor.html)
  - [operator_project_editor_logic.js](telegram_control/operators/operator_project_editor_logic.js)
* **Componenti Backend Coinvolti (Path Estese):**
  - [tasks.json](n8n_workflow/SiteBoS-App-Hook/operators/tasks.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `stakeholders`
  - `projects`

---

### Creazione Attività da Operatore (Task Create)
* **Descrizione Funzionale:** Gestisce la compilazione di nuove commesse, la ricerca dei clienti e la generazione di report o preventivi direttamente da parte del dipendente operativo.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica la creazione dei lavori esposta allo staff"
  - "cambia la logica di generazione del preventivo operatore"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [operator_task_create.html](telegram_control/operators/operator_task_create.html)
  - [operator_task_create_logic.js](telegram_control/operators/operator_task_create_logic.js)
* **Componenti Backend Coinvolti (Path Estese):**
  - [supervisor.json](n8n_workflow/SiteBoS-App-Hook/operators/supervisor.json)
  - [tasks.json](n8n_workflow/SiteBoS-App-Hook/operators/tasks.json)
  - [service_catalog.json](n8n_workflow/SiteBoS-App-Hook/catalog/service_catalog.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `stakeholders`
  - `projects`
  - `service_catalog`

---

### Elenco Task Operatore (Operator Tasks)
* **Descrizione Funzionale:** Interfaccia e script per richiedere e visualizzare l'elenco completo delle attività assegnate e non completate dell'operatore loggato.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica il recupero della lista dei compiti operatore"
  - "cambia come mostrare i compiti della giornata"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [operator_tasks.html](telegram_control/operators/operator_tasks.html)
  - [operator_tasks_logic.js](telegram_control/operators/operator_tasks_logic.js)
* **Componenti Backend Coinvolti (Path Estese):**
  - [tasks.json](n8n_workflow/SiteBoS-App-Hook/operators/tasks.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `stakeholders`
  - `projects`

---

### Gestione Elenco Ordini E-commerce
* **Descrizione Funzionale:** Tabella, lista ed esecuzione riassuntiva di tutti gli ordini generati all'interno della WebApp o del Bot. Consente di estrarre e ordinare l'elenco degli ordini e dei dettagli d'acquisto.
* **Come ne parla l'utente (Frasi Tipo):**
  - "mostra l'elenco delle vendite o degli ordini"
  - "modifica la griglia degli ordini nel pannello admin"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [orders-manager.html](telegram_control/operativita/orders-manager.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [oreder_execution.json](n8n_workflow/SiteBoS-App-Hook/intelligence/oreder_execution.json)
  - [Commerce_Engine.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json)
* **Database e Collezioni:**
  - `orders`
  - `honeypots`
  - `service_catalog`
  - `owner_sessions`

---

### Calcolo e Generazione Preventivo
* **Descrizione Funzionale:** Interfaccia per comporre preventivi personalizzati basati sui prezzi del catalogo, permettendone il calcolo, la formattazione e il salvataggio diretto associato a una sessione cliente.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica il form di compilazione preventivo"
  - "ricalcola o salva il preventivo del cliente"
  - "cambia i dettagli del modulo di preventivazione"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [preventivi.html](telegram_control/customer_bot/preventivi.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [Commerce_Engine.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json)
  - [telegram_customerBot.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)
  - [Preventivi_engine.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/Preventivi_engine.json)
* **Database e Collezioni:**
  - `orders`
  - `honeypots`
  - `service_catalog`
  - `owner_sessions`
  - `stakeholders`

---

### Completamento Profilo Soft Skill
* **Descrizione Funzionale:** Schermata in cui l'utente esamina i risultati complessivi dell'analisi attitudinale (soft skill), visualizzando la propria mappa di adeguatezza al ruolo.
* **Come ne parla l'utente (Frasi Tipo):**
  - "mostra i risultati del test delle soft skill"
  - "modifica la scheda riassuntiva del profilo attitudinale"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [complete-profile.html](telegram_control/softskill/complete-profile.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [only_test.json](n8n_workflow/SiteBoS-App-Hook/teams/only_test.json)
  - [soft_skill_selector.json](n8n_workflow/SiteBoS-App-Hook/teams/soft_skill_selector.json)
* **Database e Collezioni:**
  - `stakeholders`
  - `honeypots`
  - `owner_sessions`

---

### Onboarding Percorso Soft Skill
* **Descrizione Funzionale:** Interfaccia iniziale per registrare il candidato al percorso di inserimento lavorativo con test comportamentali e soft skill.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica l'iscrizione al percorso soft skill"
  - "cambia la pagina iniziale di onboarding soft skill"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [onboarding.html](telegram_control/softskill/onboarding.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [only_test.json](n8n_workflow/SiteBoS-App-Hook/teams/only_test.json)
* **Database e Collezioni:**
  - `stakeholders`

---

### Logica Avanzamento Soft Skill
* **Descrizione Funzionale:** Script JavaScript per calcolare ed estrarre lo stato dei moduli di test superati e gestire il passaggio dell'utente tra le varie fasi di selezione.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica la logica di scorrimento dei test attitudinali"
  - "cambia il caricamento del profilo del candidato soft skill"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [profile_logic.js](telegram_control/softskill/profile_logic.js)
* **Componenti Backend Coinvolti (Path Estese):**
  - [soft_skill_selector.json](n8n_workflow/SiteBoS-App-Hook/teams/soft_skill_selector.json)
  - [team_manager.json](n8n_workflow/SiteBoS-App-Hook/teams/team_manager.json)
* **Database e Collezioni:**
  - `stakeholders`
  - `owner_sessions`
  - `honeypots`

---

### Video Player Formativo Soft Skill
* **Descrizione Funzionale:** Schermata per la visione dei video didattici collegati ai test. Monitora il tempo di riproduzione ed invia la notifica di completamento (track video completion) per abilitare il modulo di quiz successivo.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica la riproduzione del video del corso"
  - "traccia la fine del video per sbloccare le domande"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [video-player.html](telegram_control/softskill/video-player.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [only_test.json](n8n_workflow/SiteBoS-App-Hook/teams/only_test.json)
  - [soft_skill_selector.json](n8n_workflow/SiteBoS-App-Hook/teams/soft_skill_selector.json)
* **Database e Collezioni:**
  - `stakeholders`
  - `owner_sessions`
  - `honeypots`

---

### Gestione Risposte Moduli Soft Skill (Webhook Handler)
* **Descrizione Funzionale:** Gestisce la trasmissione asincrona delle risposte fornite ai quiz attitudinali, salvando il progresso complessivo.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica il webhook o il salvataggio dei quiz delle soft skill"
  - "cambia come memorizzare le risposte del modulo formativo"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [webhook-handler.js](telegram_control/softskill/webhook-handler.js)
* **Componenti Backend Coinvolti (Path Estese):**
  - [only_test.json](n8n_workflow/SiteBoS-App-Hook/teams/only_test.json)
  - [soft_skill_selector.json](n8n_workflow/SiteBoS-App-Hook/teams/soft_skill_selector.json)
* **Database e Collezioni:**
  - `stakeholders`
  - `owner_sessions`
  - `honeypots`

---

### Dashboard Supervisor (Supervisor Hub)
* **Descrizione Funzionale:** Hub direzionale riservato al manager per l'esame e la validazione finale dello stato di avanzamento delle commesse, delle autocertificazioni e della compliance complessiva.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica l'hub dei controlli del supervisore"
  - "cambia il cruscotto di supervisione delle commesse"
  - "approva le autocertificazioni dal supervisor"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [supervisor_hub.html](telegram_control/gestione/supervisor_hub.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [certificator_hub.json](n8n_workflow/SiteBoS-App-Hook/catalog/certificator_hub.json)
* **Database e Collezioni:**
  - `process_blueprints`
  - `owner_sessions`
  - `service_catalog`
  - `evidence_docs`

---

### Hub Assistenza Clienti & Supporto (Support Hub)
* **Descrizione Funzionale:** Gestisce la inbox del supporto clienti, consentendo al team di rispondere a ticket, confermare proposte di prenotazione o visualizzare la chat da prendere in carico (handover).
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica la inbox dell'assistenza clienti"
  - "cambia l'inbox del supporto clienti"
  - "gestisci i messaggi o le risposte del team ai ticket"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [support_hub.html](telegram_control/supporto/support_hub.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [Comunication_hub.json](n8n_workflow/SiteBoS-App-Hook/knowledge_Marketing/Comunication_hub.json)
  - [telegram_customerBot.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `active_sessions`
  - `orders`
  - `stakeholders`

---

### Apertura Ticket Assistenza
* **Descrizione Funzionale:** Modulo esposto ai clienti per richiedere assistenza compilando un ticket descrittivo del problema che viene instradato verso il bot.
* **Come ne parla l'utente (Frasi Tipo):**
  - "modifica il form di inserimento ticket clienti"
  - "cambia la pagina per segnalare un problema"
  - "aggiorna l'invio dei ticket di supporto"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [ticket.html](telegram_control/customer_bot/ticket.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [telegram_customerBot.json](n8n_workflow/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)
* **Database e Collezioni:**
  - `owner_sessions`
  - `stakeholders`

---

### Analisi di Mercato (Competitor Intelligence)
* **Descrizione Funzionale:** Consente di analizzare i concorrenti territoriali ed eseguire analisi competitive di mercato per posizionare i prezzi e le prestazioni. Il backend esegue scansioni basate sulle coordinate geografiche del tenant e memorizza i dati nella sessione del titolare.
* **Come ne parla l'utente (Frasi Tipo):**
  - "fai un'analisi di mercato o dei concorrenti"
  - "cerca i listini prezzi degli altri studi o negozi vicini"
  - "mostra i report di competitor intelligence"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [analisi-mercato.html](telegram_control/agents/analisi-mercato.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - [MarketAnalisy.json](n8n_workflow/SiteBoS-App-Hook/intelligence/MarketAnalisy.json)
* **Database e Collezioni:**
  - `owner_sessions`

---

### Assistente Sicurezza (Salute e Sicurezza 81/08)
* **Descrizione Funzionale:** Assistente conversazionale intelligente focalizzato sulla conformità normativa alle leggi sulla salute e sicurezza sul lavoro (D.Lgs. 81/08). Consente di redigere o verificare il DVR (Documento Valutazione Rischi), analizzare i rischi aziendali, stampare/generare la documentazione tramite motore di stampa e caricare documenti di conformità. Filtra automaticamente i servizi e le relative SOP basandosi sul flag di configurazione `operations.show_in_security_assistant`.
* **Come ne parla l'utente (Frasi Tipo):**
  - "apri l'assistente per la sicurezza sul lavoro o 81/08"
  - "genera o compila il DVR per l'azienda"
  - "controlla i rischi legati alle nostre procedure"
  - "stampa o esporta la valutazione dei rischi"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [assistente-sicurezza.html](telegram_control/agents/assistente-sicurezza.html)
  - [dizionario8108.js](telegram_control/agents/dizionario8108.js)
  - [dvr-print-engine.js](telegram_control/agents/dvr-print-engine.js)
* **Componenti Backend Coinvolti (Path Estese):**
  - [Secure_Assistant.json](n8n_workflow/SiteBoS-App-Hook/intelligence/Secure_Assistant.json)
* **Database e Collezioni:**
  - `service_catalog` (filtro `operations.show_in_security_assistant`)
  - `process_blueprints` (filtro relazionale `service_sku`)
  - `risk_managment`
  - `compliance_docs`
  - `owner_sessions`

---

### Controllo di Gestione (Operations Sourcing)
* **Descrizione Funzionale:** Visualizzatore statico e cruscotto per monitorare la distinta base (BOM), le tariffe delle risorse/macchinari e il controllo complessivo di gestione per determinare il costo orario effettivo e la marginalità.
* **Come ne parla l'utente (Frasi Tipo):**
  - "mostra il controllo di gestione delle risorse"
  - "visualizza il costo orario della poltrona o del personale"
  - "controlla il cruscotto di operations e sourcing"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [controllo_gestione.html](telegram_control/agents/controllo_gestione.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - *Mappatura Euristica*
* **Database e Collezioni:**
  - `owner_sessions`

---

### Agent Intelligence (Dossiers & Research)
* **Descrizione Funzionale:** Interfaccia segnaposto per visualizzare i dossier di ricerca generati sul business del proprietario e per il benchmark dei risultati commerciali/marketing.
* **Come ne parla l'utente (Frasi Tipo):**
  - "apri l'intelligence dossier"
  - "mostra i benchmark dei risultati o dossier storici"
* **Componenti Frontend Coinvolti (Path Estese):**
  - [agent_intelligence.html](telegram_control/agents/agent_intelligence.html)
* **Componenti Backend Coinvolti (Path Estese):**
  - *Mappatura Euristica*
* **Database e Collezioni:**
  - `owner_sessions`