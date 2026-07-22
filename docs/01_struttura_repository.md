# Mappa e Albero della Repository (SiTeBos-Admin)

Questo documento fornisce la mappa strutturale aggiornata e rigorosa dell'intera repository **SiTeBos-Admin**.

---

## 📂 Struttura dell'Albero della Repository

```text
SiTeBos-Admin/
├── index.html                           # Standalone Admin MiniApp (Vanilla HTML5 + JS, Zero Build)
├── server.ts                            # Server backend Express / Gemini Proxy
├── .env                                 # Variabili d'ambiente private (GEMINI_API_KEY, ecc.)
├── .nojekyll                            # Disabilita il parser Jekyll su GitHub Pages
│
├── docs/                                # Knowledge Base dell'AI & Documentazione Viva
│   ├── 01_struttura_repository.md       # Albero repository e mappa dei componenti
│   ├── 02_conversational_semantic_index.md # Indice semantico frasi/intenti utente vs file
│   ├── 03_backend_frontend_mapping.md   # Mappatura chiamate Frontend TWA vs Webhook n8n
│   ├── 04_n8n_development_standards.md   # Standard obbligatori di sviluppo n8n (HMAC, Lock, etc.)
│   ├── 05_stato_sistema_e_produzione.md # Registro rilascio workflow e storico modifiche
│   ├── 06_api_esterne_e_integrazioni.md # API Minisite JSON Engine & OpenAPI Company Bridge
│   └── archive/                         # Archivio bozze e vecchi documenti storici
│
├── OdS/                                 # Ordini di Servizio generati (.md & .json)
├── n8n_workflow/                        # Workflow n8n di produzione (JSON)
├── Database_Structure/                  # Schemi delle collezioni MongoDB
│
└── SiteBoS-MiniApp/                     # Pagine TWA statiche per Telegram (SOLO LETTURA)
    ├── telegram_control/                # Interfacce HTML dei vari moduli
    └── n8n_workflows/                   # Workflow di supporto
```

---

## 🔒 Regole di Accesso e Architettura
1. **`index.html`**: MiniApp Amministrativa Standalone in **Vanilla HTML5/JS** senza dipendenze o comandi di build. Funziona istantaneamente sia in locale che su GitHub Pages e Telegram.
2. **Sicurezza Telegram**: Accesso riservato esclusivamente ai Chat ID autorizzati (`2041408875` e `720379727`) con bypass per lo sviluppo locale (`localhost`).
3. **Cartella `SiteBoS-MiniApp/`**: In SOLA LETTURA. Non deve essere mai modificata.
