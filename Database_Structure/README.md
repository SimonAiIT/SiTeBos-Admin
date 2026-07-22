# SiteBoS Data Architecture: Indice Modulare

Benvenuti nel dizionario dei dati granulare di SiteBoS. La persistenza è organizzata per Database e singola Collezione.

## 🧠 Database: [MemoryManager](MemoryManager/)
Il cuore strategico e anagrafico del sistema.

- **Identità & Contratti**
    - [owner_sessions](MemoryManager/owner_sessions.md): Dati di istanza e chiavi API.
    - [stakeholders](MemoryManager/stakeholders.md): Profili clienti e lead CRM.
    - [compliance_docs](MemoryManager/compliance_docs.md): Legal & GDPR.
- **Conoscenza & Assets**
    - [honeypots](MemoryManager/honeypots.md): Knowledge Base per il RAG.
    - [service_catalog](MemoryManager/service_catalog.md): Catalogo prodotti/servizi.
    - [process_blueprints](MemoryManager/process_blueprints.md): Procedure operative (BOM).
- **Intelligence & Billing**
    - [billing_buffers](MemoryManager/billing_buffers.md): Registro transazionale dei consumi AI.
    - [website_board](MemoryManager/website_board.md): Dossier di ricerca web.
    - [marketing_nodes](MemoryManager/marketing_nodes.md): Content manifest per MiniApp e siti web.
    - [orders](MemoryManager/orders.md): Liste della spesa e ordini on-demand (Ecommerce).

## ⚡ Database: [Telegram_owner_bot](Telegram_owner_bot/)
Il sistema nervoso di runtime per la gestione della messaggistica.

- [active_sessions](Telegram_owner_bot/active_sessions.md): Stato live e sicurezza.
- [ingestion_buffers](Telegram_owner_bot/ingestion_buffers.md): Atomic lock e protezione burst.

## 📊 Database: [TbosAssetLake](TbosAssetLake/)
L'archivio storico degli asset generati, dei log e delle evidenze legali.

- [evidence_docs](TbosAssetLake/evidence_docs.md): Audit Trail delle certificazioni (SOP).
- [evidence_logs](TbosAssetLake/evidence_logs.md): Log granulari delle operazioni.
- [knowledge_fragments](TbosAssetLake/knowledge_fragments.md): Frammenti di memoria granulari.
- [social_posts](TbosAssetLake/social_posts.md): Archivio dei contenuti generati per i social.

---
> [!TIP]
> Questa struttura modulare permette di analizzare ogni componente dati indipendentemente, facilitando il debug dei workflow n8n correlati.
