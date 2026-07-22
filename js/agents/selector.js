/**
 * Agente Selettore (Selector Agent)
 * Identifica componenti frontend/backend/database e controlla se esiste un OdS aperto.
 */
window.SelectorAgent = {
    analyzeRequest: async function(promptText) {
        const systemPrompt = `Sei l'Agente Selettore Senior dell'ecosistema SiTeBoS.
Il tuo compito è analizzare la richiesta dell'utente ed identificare:
1. Il modulo principale coinvolto.
2. I file HTML Frontend in SiteBoS-MiniApp/telegram_control/.
3. I workflow n8n Backend in n8n_workflow/.
4. Le collezioni MongoDB coinvolte.
5. Verificare se esiste un OdS aperto correlato o se creare un nuovo OdS.

Restituisci ESCLUSIVAMENTE un JSON con questa struttura:
{
  "modulo": "Nome Modulo (es. Gestione Catalogo, Booking Engine, Magazzino OCR)",
  "file_frontend": ["telegram_control/gestione/catalog.html"],
  "workflow_backend": ["n8n_workflow/SiteBoS-App-Hook/catalog/service_catalog.json"],
  "db_collezioni": ["service_catalog", "owner_sessions"],
  "ods_esistente": "ods_catalogo_2026.md o null se nuovo",
  "azione_consigliata": "Descrizione dell'azione (es. Estendere l'OdS esistente per la gestione delle immagini)"
}`;

        const response = await window.SiTeBoSApi.callGemini(promptText, systemPrompt, true);
        return {
            data: response.data || {},
            usage: response.usage
        };
    }
};
