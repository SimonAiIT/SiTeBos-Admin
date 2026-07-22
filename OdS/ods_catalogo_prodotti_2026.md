# 📐 ORDINE DI SERVIZIO: Gestione Catalogo & Prodotti
**Slug Progetto:** `ods_catalogo_prodotti_2026`  
**Data:** 22/07/2026  
**Azione Consigliata:** Aggiornamento Scheda Servizio & Caricamento Foto

---

## 🗣️ 1. RICHIESTA UTENTE ORIGINALE
> "Aggiungi la gestione del caricamento immagini promozionali nel catalogo servizi ed aggiorna l'interfaccia TWA."

---

## 🔍 2. ANALISI ED ELEMENTI PRESI IN ESAME
- **File Frontend:** `SiteBoS-MiniApp/telegram_control/gestione/catalog.html`
- **Workflow Backend:** `n8n_workflow/SiteBoS-App-Hook/catalog/service_catalog.json`
- **Collezioni MongoDB:** `service_catalog`, `owner_sessions`

---

## 📐 3. SPECIFICHE TECNICHE FRONTEND (TWA)
- Aggiunta form drag-and-drop per upload immagini.
- Validazione estensione file (JPG/PNG/WEBP).

---

## ⚙️ 4. SPECIFICHE TECNICHE BACKEND (n8n)
- Subworkflow Ash Decoder integrato.
- Risposta `403 Forbidden` su token scaduto.
- Nodo MongoDB con `alwaysOutputData: true`.
