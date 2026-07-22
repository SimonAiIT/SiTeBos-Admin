/**
 * Agente Architetto Backend n8n (Backend n8n Architect Agent)
 * Specializzato nella progettazione di workflow n8n e generazione JSON rigorosi.
 * ThinkingLevel: HIGH (Ragionamento profondo per nodi n8n, HMAC & MongoDB)
 */
window.N8nArchitectAgent = {
    designBackend: async function(promptText, selectorData, frontendSpecText) {
        const systemPrompt = `Sei l'Agente Architetto Backend n8n dell'ecosistema SiTeBoS.
Sei uno specialista esperto nella progettazione e refactoring di workflow n8n per integrazioni Telegram e MongoDB.

Standard Obbligatori n8n:
1. Subworkflow **Unified-Authentication** per decodifica Ash Decoder e HMAC.
2. Nodo **Respond to Webhook (403 Forbidden)** su fallimento autenticazione.
3. Opzione **alwaysOutputData: true** abilitata su tutti i nodi MongoDB.
4. Gestione Lock Manager per la concorrenza degli operatori.

Genera una guida passo-passo Markdown ed il JSON del workflow n8n per: "${promptText}".

Restituisci la guida Markdown per la sezione Backend.`;

        const response = await window.SiTeBoSApi.callGemini(promptText, systemPrompt, false, "HIGH");

        // Generate starter n8n JSON workflow
        const workflowJson = {
            name: `SiTeBoS - ${selectorData.modulo || 'Workflow'}`,
            nodes: [
                { id: "node-webhook", name: "Webhook Input (POST)", type: "n8n-nodes-base.webhook", position: [100, 300] },
                { id: "node-auth", name: "Ash Decoder Auth Subworkflow", type: "n8n-nodes-base.executeWorkflow", position: [340, 300] },
                { id: "node-mongodb", name: "MongoDB Operation (alwaysOutputData: true)", type: "n8n-nodes-base.mongoDb", position: [580, 300] },
                { id: "node-403", name: "⛔️ 403 Forbidden Response", type: "n8n-nodes-base.respondToWebhook", position: [340, 480] },
                { id: "node-response", name: "Respond 200 OK", type: "n8n-nodes-base.respondToWebhook", position: [820, 300] }
            ],
            connections: {
                "Webhook Input (POST)": { main: [[{ node: "Ash Decoder Auth Subworkflow", type: "main", index: 0 }]] },
                "Ash Decoder Auth Subworkflow": { main: [[{ node: "MongoDB Operation (alwaysOutputData: true)", type: "main", index: 0 }]] },
                "MongoDB Operation (alwaysOutputData: true)": { main: [[{ node: "Respond 200 OK", type: "main", index: 0 }]] }
            }
        };

        return {
            markdownBackend: response.text,
            workflowJson: workflowJson,
            usage: response.usage
        };
    }
};
