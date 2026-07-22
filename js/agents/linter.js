/**
 * Agente Linter n8n (Security & Quality Auditor Agent)
 * Esegue l'audit dei JSON n8n contro gli standard del progetto.
 */
window.LinterAgent = {
    auditWorkflow: function(jsonString) {
        let parsed = null;
        try {
            parsed = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
        } catch (err) {
            return {
                isValid: false,
                errors: ['JSON non valido: ' + err.message],
                suggestions: []
            };
        }

        const nodes = parsed.nodes || [];
        const violations = [];
        const passed = [];

        // 1. Check Webhook & Auth
        const hasWebhook = nodes.some(n => n.type && n.type.includes('webhook'));
        const hasAuth = nodes.some(n => n.name && (n.name.includes('Ash') || n.name.includes('Auth') || n.name.includes('Unified')));
        if (hasWebhook && !hasAuth) {
            violations.push('Mancante il nodo Subworkflow di Autenticazione (Ash Decoder Auth)');
        } else {
            passed.push('Subworkflow Autenticazione Ash Decoder rilevato');
        }

        // 2. Check 403 Forbidden Error Node
        const has403 = nodes.some(n => n.name && (n.name.includes('403') || n.name.includes('Forbidden')));
        if (!has403) {
            violations.push('Mancante il nodo di risposta di errore ⛔️ 403 Forbidden');
        } else {
            passed.push('Nodo ⛔️ 403 Forbidden presente');
        }

        // 3. Check MongoDB alwaysOutputData
        const mongoNodes = nodes.filter(n => n.type && n.type.includes('mongoDb'));
        if (mongoNodes.length > 0) {
            passed.push(`Rilevati ${mongoNodes.length} nodi MongoDB. Verificare alwaysOutputData: true`);
        }

        return {
            isValid: violations.length === 0,
            violations: violations,
            passed: passed,
            nodeCount: nodes.length
        };
    }
};
