# Struttura della Repository SiteBoS-MiniApp

Questo documento illustra l'albero delle directory della repository **SiteBoS-MiniApp**, applicando le regole di esclusione definite nel file [.gitignore](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/.gitignore) con un focus specifico sulla cartella **[telegram_control](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control)**.


---

## 📁 Albero Generale del Progetto

```text
SiteBoS-MiniApp/
├── .gitignore
├── index.html
├── OdS/
│   ├── CompleteBP.html
│   ├── allineamento-back-end-prodotti-sicurezza.md
│   ├── flusso-creazione-guida-ai-asset-digitali.md
│   ├── guarda-come-stampiamo-il-dvr_1784028871300.md
│   ├── newdashboard.md
│   └── quando-genero-un-prodotto-digitale_1784029834667.md
└── telegram_control/  [Dettagliata di seguito]
```

---

## 🤖 Struttura Dettagliata: `telegram_control/`

```text
telegram_control/
├── README.md
├── align_styles.js
├── color_scheme_aligner.js
├── index.html
├── sandbox_enforcer.js
├── style.css
│
├── agents/                           # Agenti AI e Moduli Specialistici
│   ├── agenda-ocr-helper.js
│   ├── agenda.html
│   ├── agent_intelligence.html
│   ├── analisi-mercato.html
│   ├── assistente-sicurezza.html
│   ├── controllo_gestione.html
│   ├── dizionario8108.js
│   ├── dvr-print-engine.js
│   ├── intelligent-warehouse.html
│   └── risorse_umane.html
│
├── customer_bot/                     # Interfaccia Bot / MiniApp per Clienti
│   ├── assistant.html
│   ├── booking.html
│   ├── client_dashboard.html
│   ├── ecommerce.html
│   ├── handover.html
│   ├── legal.html
│   ├── preventivi.html
│   └── ticket.html
│
├── dashboard/                        # Dashboard Principale e Logica Identità
│   ├── TrinAi_Logo.jpg
│   ├── dashboard.html
│   ├── dashboard.wav
│   ├── identity.wav
│   └── identity_logic.js
│
├── fine-tuning/                      # Modulo di Personalizzazione & Fine-Tuning
│   ├── fine-tuning.html
│   └── fine-tuning.wav
│
├── gestione/                         # Gestione Catalogo, Prodotti e Contenuti
│   ├── add-category.html
│   ├── add-category.wav
│   ├── add-product.html
│   ├── add-product.wav
│   ├── advanced_dizionario.js
│   ├── catalog-print-engine.js
│   ├── catalog.html
│   ├── catalog.wav
│   ├── catalog_add-product.wav
│   ├── catalog_edit-product.wav
│   ├── edit-advanced-crafted.wav
│   ├── edit-advanced-draft.wav
│   ├── edit-advanced-product.html
│   ├── edit-advanced-product.js
│   ├── edit-advanced.html
│   ├── edit-advanced.js
│   ├── edit-blog.html
│   ├── edit-blog.wav
│   ├── edit-blueprint-product.html
│   ├── edit-blueprint.html
│   ├── edit-bluprint-product.wav
│   ├── edit-bluprint.wav
│   ├── edit-knowledge.html
│   ├── edit-post.html
│   ├── edit-product.html
│   ├── edit-semilavorati.html
│   ├── edit-semilavorati.wav
│   └── supervisor_hub.html
│
├── identity/                         # Configurazione Bot e Modifica Owner
│   ├── advanced-setup.html
│   ├── advanced_setup_dashboard.wav
│   ├── advanced_setup_wizard.wav
│   ├── bot_config.html
│   ├── bot_config.wav
│   ├── edit_owner.html
│   └── edit_owner.wav
│
├── operativita/                      # Gestione Operativa (Job, Ordini, Itinerari)
│   ├── job-create.html
│   ├── orders-manager.html
│   └── pianificazione_itinerari.html
│
├── operators/                        # Interfacce e Logica per gli Operatori
│   ├── catalog.html
│   ├── edit_operator.html
│   ├── edit_operator_logic.js
│   ├── legal.html
│   ├── operator_dashboard.html
│   ├── operator_dashboard_logic.js
│   ├── operator_onboarding.html
│   ├── operator_project_editor.html
│   ├── operator_project_editor_logic.js
│   ├── operator_session_utils.js
│   ├── operator_task_create.html
│   ├── operator_task_create_logic.js
│   ├── operator_tasks.html
│   ├── operator_tasks_logic.js
│   ├── operators.css
│   └── twa_guard.js
│
├── softskill/                        # Moduli Valutazione Soft Skill e Domande
│   ├── README.md
│   ├── complete-profile.html
│   ├── index.html
│   ├── modules-mapping.js
│   ├── onboarding.html
│   ├── profile_logic.js
│   ├── questions-loader.js
│   ├── softskill.js
│   ├── test.html
│   ├── twa_guard.js
│   ├── video-player.html
│   ├── webhook-handler.js
│   └── questions/                    # File TS per set di domande (1-150)
│       ├── questions1-5.ts ... questions146-150.ts
│       └── questions_list.md
│
├── supporto/                         # Hub di Supporto
│   └── support_hub.html
│
└── userguide/                        # Manualistica e Documentazione Utente HTML
    ├── 01_intro.html
    ├── 02_onboarding.html
    ├── 03_catalog.html
    ├── 04_online.html
    ├── 05_customer.html
    ├── 06_team.html
    ├── 07_magazzino_logistica.html
    ├── 08_security.html
    ├── 09_controllo_gestione.html
    ├── 10_agenda_radar.html
    ├── 11_agente_sicurezza.html
    ├── 12_fine_tuning.html
    ├── blog_cover_example.jpg
    ├── index.html
    └── pricing.html
```
