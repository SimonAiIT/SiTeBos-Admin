# Struttura Ufficiale della Repository SiTeBos-Admin

Questo documento illustra l'albero delle directory dell'unica repository **SiTeBos-Admin**, che raccoglie tutti i macro-componenti dell'ecosistema SiteBoS.

---

## 📁 Albero Generale del Progetto

```text
SiTeBos-Admin/
├── index.html                    # Entry point HTML dell'App Admin
├── server.ts                     # Server Express & API Gemini / Auth / GitHub
├── package.json                  # Dipendenze Node.js / Vite / React / Gemini SDK
├── tsconfig.json                 # Configurazione TypeScript
├── vite.config.ts                # Configurazione Vite dev/build
├── .env                          # Variabili di ambiente private (API Keys, Webhooks, DB)
│
├── src/                          # Sorgenti React dell'App Admin
│   ├── main.tsx                  # Bootstrap React
│   ├── App.tsx                   # Layout Principale Dashboard Admin & State
│   ├── types.ts                  # Interfaccie TypeScript (OwnerSession, SelectorResult, OdS, Linter)
│   ├── index.css                 # Design System & Utility Tailwind
│   ├── components/               # Componenti UI (Header, OrbitNav, StudioDrawer, N8nLinter, ecc.)
│   └── data/                     # Data Stores e Standard (semanticIndex.ts, n8nStandards.ts)
│
├── docs/                         # Documentazione Tecnica Viva del Sistema (per l'AI)
│   ├── 01_struttura_repository.md
│   ├── 02_conversational_semantic_index.md
│   ├── 03_backend_frontend_mapping.md
│   ├── 04_n8n_development_standards.md
│   ├── 05_stato_sistema_e_produzione.md
│   ├── 06_api_esterne_e_integrazioni.md
│   └── archive/                  # Archivio storico bozze e vecchi log
│
├── OdS/                          # Ordini di Servizio Operativi (per lo Sviluppatore/Utente)
│   ├── [slug]_[timestamp].md     # Specifiche tecniche Markdown OdS
│   └── [slug]_[timestamp].json   # Workflow n8n JSON pronto all'importazione
│
├── n8n_workflow/                 # Repository di Workflow n8n di Backend (Pronti per Prod)
│   ├── Unified-Authentication.json
│   ├── Lock-Manager.json
│   ├── Standard_AcCredit.json
│   ├── Billing-Balance.json
│   ├── SiteBoS-App-Hook/         # Hooks di comunicazione MiniApp -> n8n
│   └── SiteBoS_Caller/           # Wrapper centralizzati Gemini AI
│
├── Database_Structure/           # Schemi e Collezioni MongoDB
│   ├── MemoryManager/            # Collezioni sessioni, proposte e memoria agenti
│   ├── TbosAssetLake/            # Collezioni asset digitali e risorse
│   └── Telegram_owner_bot/       # Collezioni impostazioni e profilo owner
│
└── SiteBoS-MiniApp/              # Interfacce Telegram Mini App (In sola lettura per l'Agente)
    └── telegram_control/
        ├── agents/               # Magazzino Intelligente, Sicurezza 81/08, HR, Agenda
        ├── customer_bot/         # Booking, Preventivi, E-commerce, FAQ Assistant
        ├── dashboard/            # Identity & Main Dashboard Utenti
        ├── gestione/             # Catalogo Prodotti, Blog Editor, Blueprint
        ├── identity/             # Bot Config & Advanced Setup
        ├── operativita/          # Gestione Job, Ordini, Itinerari Operatori
        ├── operators/            # Dashboard Operatori sul Campo
        ├── softskill/            # Valutazione Soft Skill utente
        └── userguide/            # Manuale Utente HTML integrato
```
