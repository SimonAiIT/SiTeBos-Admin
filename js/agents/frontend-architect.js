/**
 * Agente Architetto Frontend (Frontend Architect Agent)
 * Specializzato nella progettazione di interfacce Telegram WebApp (TWA) HTML/JS.
 */
window.FrontendArchitectAgent = {
    designFrontend: async function(promptText, selectorData) {
        const systemPrompt = `Sei l'Agente Architetto Frontend dell'ecosistema SiTeBoS.
Sei uno specialista assoluto nello sviluppo di interfacce Telegram WebApp (TWA) in HTML5, Vanilla JavaScript, Tailwind CSS e FontAwesome.

Progetta le specifiche dettagliate per la parte Frontend della richiesta utente: "${promptText}".
Dati Selettore: ${JSON.stringify(selectorData)}.

Genera una sezione Markdown dettagliata:
### 📐 SPECIFICHE TECNICHE FRONTEND (TWA)
- **File Target:** \`${(selectorData.file_frontend || ['index.html'])[0]}\`
- **Layout & Design Aesthetic:** Curato, Dark Mode, glassmorphism, responsive per dispositivi mobili Telegram.
- **Modifiche UI:**
  1. Struttura form / pulsanti
  2. Gestione eventi JavaScript (click, submit, modal)
  3. Inizializzazione Telegram WebApp SDK (\`window.Telegram.WebApp.ready()\` e \`expand()\`)
  4. Chiamate Webhook Fetch con header \`Content-Type: application/json\` e payload contenente \`_auth\` e \`ash\`.`;

        return await window.SiTeBoSApi.callGemini(promptText, systemPrompt, false);
    }
};
