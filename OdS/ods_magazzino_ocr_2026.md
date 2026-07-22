# 📐 ORDINE DI SERVIZIO: Magazzino Intelligente OCR
**Slug Progetto:** `ods_magazzino_ocr_2026`  
**Data:** 22/07/2026  
**Azione Consigliata:** Scansione Bolle di Carico con Vision AI

---

## 🗣️ 1. RICHIESTA UTENTE ORIGINALE
> "Integra l'OCR per la scansione delle bolle di carico e l'aggiornamento automatico delle giacenze di magazzino."

---

## 🔍 2. ANALISI ED ELEMENTI PRESI IN ESAME
- **File Frontend:** `SiteBoS-MiniApp/telegram_control/agents/intelligent-warehouse.html`
- **Workflow Backend:** `n8n_workflow/SiteBoS-App-Hook/intelligence/intelligent_warehouse.json`
- **Collezioni MongoDB:** `warehouse_inventory`, `inventory_logs`

---

## 📐 3. SPECIFICHE TECNICHE FRONTEND (TWA)
- Componente fotocamera per scatto bolle di carico.
- Visualizzazione tabellare articoli estratti in tempo reale.

---

## ⚙️ 4. SPECIFICHE TECNICHE BACKEND (n8n)
- Integrazione Vision AI REST API.
- Aggiornamento atomico delle giacenze su MongoDB.
