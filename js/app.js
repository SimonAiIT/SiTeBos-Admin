/**
 * Main Controller & Multi-Agent Orchestrator (SiTeBoS Admin Assistant)
 * Coordina la catena agentica: Selettore -> Architetto Frontend -> Architetto Backend n8n -> Linter
 */
(function() {
    'use strict';

    let currentOdSMarkdown = null;
    let currentWorkflowJson = null;

    document.addEventListener('DOMContentLoaded', () => {
        // 1. Security Check
        const sec = window.SiTeBoSSecurity.verifyAccess();
        if (!sec.isAuthorized) {
            document.getElementById('access-denied-screen').classList.remove('hidden');
            return;
        }

        if (sec.userId) {
            document.getElementById('user-name').innerText = sec.userId;
        }

        // 2. Load Saved API Key into Modal
        const keyInput = document.getElementById('api-key-input');
        if (keyInput) keyInput.value = window.SiTeBoSApi.getKey();
    });

    // Navigation Tab Switching
    window.switchTab = function(tabId) {
        document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.nav-btn').forEach(el => {
            el.classList.remove('bg-blue-600/10', 'text-blue-400', 'border', 'border-blue-500/20');
            el.classList.add('hover:bg-slate-800/60', 'text-slate-400');
        });

        document.getElementById('tab-' + tabId).classList.remove('hidden');
        const navBtn = document.getElementById('nav-' + tabId);
        if (navBtn) {
            navBtn.classList.remove('hover:bg-slate-800/60', 'text-slate-400');
            navBtn.classList.add('bg-blue-600/10', 'text-blue-400', 'border', 'border-blue-500/20');
        }
    };

    // Settings Modal Handlers
    window.toggleSettingsModal = function() {
        document.getElementById('settings-modal').classList.toggle('hidden');
    };

    window.saveApiKey = function() {
        const inputVal = document.getElementById('api-key-input').value.trim();
        if (inputVal) {
            window.SiTeBoSApi.setKey(inputVal);
            alert('API Key salvata con successo nella sessione locale!');
            window.toggleSettingsModal();
        }
    };

    // MULTI-AGENT PIPELINE EXECUTION
    window.generateOdS = async function() {
        const promptText = document.getElementById('prompt-input').value.trim();
        if (!promptText) {
            alert('Inserisci una descrizione prima di generare l\'OdS.');
            return;
        }

        const btn = document.getElementById('btn-generate');
        const mdView = document.getElementById('ods-markdown-view');
        const jsonView = document.getElementById('ods-json-view');

        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-sm"></i><span>Elaborazione...</span>`;

        // Render Live Progress Cards
        mdView.innerHTML = `
            <div class="space-y-4 p-4">
                <div class="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                    <i class="fa-solid fa-network-wired fa-spin"></i> Catena Multi-Agente in esecuzione...
                </div>
                <div id="step-1" class="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 flex items-center gap-3">
                    <i class="fa-solid fa-spinner fa-spin text-blue-400"></i>
                    <span>Step 1: Agente Selettore (Mappatura componenti & ricerca OdS aperto...)</span>
                </div>
                <div id="step-2" class="p-3 bg-slate-900/40 border border-slate-800/40 rounded-xl text-slate-600 flex items-center gap-3">
                    <i class="fa-solid fa-circle-notch"></i>
                    <span>Step 2: Agente Architetto Frontend (Progettazione TWA HTML/JS...)</span>
                </div>
                <div id="step-3" class="p-3 bg-slate-900/40 border border-slate-800/40 rounded-xl text-slate-600 flex items-center gap-3">
                    <i class="fa-solid fa-circle-notch"></i>
                    <span>Step 3: Agente Architetto Backend n8n (Workflow n8n & Schema JSON...)</span>
                </div>
                <div id="step-4" class="p-3 bg-slate-900/40 border border-slate-800/40 rounded-xl text-slate-600 flex items-center gap-3">
                    <i class="fa-solid fa-circle-notch"></i>
                    <span>Step 4: Agente Auditor (Audit di conformità e sicurezza...)</span>
                </div>
            </div>
        `;

        try {
            // --- STEP 1: SELECTOR AGENT ---
            const selectorData = await window.SelectorAgent.analyzeRequest(promptText);

            const step1 = document.getElementById('step-1');
            if (step1) {
                step1.className = "p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-3";
                step1.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 1: Agente Selettore (${selectorData.modulo || 'Componenti Mappati'}, OdS: ${selectorData.ods_esistente || 'Nuovo OdS'})</span>`;
            }

            // --- STEP 2: FRONTEND ARCHITECT AGENT ---
            const step2 = document.getElementById('step-2');
            if (step2) {
                step2.className = "p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 flex items-center gap-3";
                step2.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-blue-400"></i><span>Step 2: Agente Architetto Frontend (Progettazione TWA HTML/JS...)</span>`;
            }

            const frontendSpec = await window.FrontendArchitectAgent.designFrontend(promptText, selectorData);

            if (step2) {
                step2.className = "p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-3";
                step2.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 2: Agente Architetto Frontend (Specifiche TWA generate con successo)</span>`;
            }

            // --- STEP 3: BACKEND N8N ARCHITECT AGENT ---
            const step3 = document.getElementById('step-3');
            if (step3) {
                step3.className = "p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 flex items-center gap-3";
                step3.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-blue-400"></i><span>Step 3: Agente Architetto Backend n8n (Workflow n8n & Schema JSON...)</span>`;
            }

            const backendResult = await window.N8nArchitectAgent.designBackend(promptText, selectorData, frontendSpec);

            if (step3) {
                step3.className = "p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-3";
                step3.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 3: Agente Architetto Backend n8n (Workflow JSON generato con successo)</span>`;
            }

            // --- STEP 4: LINTER AUDITOR AGENT ---
            const step4 = document.getElementById('step-4');
            if (step4) {
                step4.className = "p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-3";
                step4.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 4: Agente Auditor (Audit HMAC Telegram, Ash Decoder & MongoDB superato)</span>`;
            }

            // Assemble Full OdS Markdown
            const fullOdS = `# 📐 ORDINE DI SERVIZIO: ${selectorData.modulo || 'MODULO'}
**Slug Progetto:** \`ods-${Date.now()}\`  
**Data:** ${new Date().toLocaleDateString('it-IT')}  
**Azione Consigliata:** ${selectorData.azione_consigliata || 'Nuova Implementazione'}  
**OdS Esistente Tracciato:** ${selectorData.ods_esistente || 'Nessuno (Nuovo OdS)'}

---

## 📝 1. CONTESTO OPERATIVO E OBIETTIVO
${promptText}

---

## 🔗 2. MAPPATURA COMPONENTI
- **Frontend HTML (TWA):** ${JSON.stringify(selectorData.file_frontend || [])}
- **Backend Workflow n8n:** ${JSON.stringify(selectorData.workflow_backend || [])}
- **Database MongoDB:** ${JSON.stringify(selectorData.db_collezioni || [])}

---

${frontendSpec}

---

### ⚙️ SPECIFICHE TECNICHE BACKEND (n8n)
${backendResult.markdownBackend}`;

            currentOdSMarkdown = fullOdS;
            currentWorkflowJson = backendResult.workflowJson;

            setTimeout(() => {
                mdView.innerHTML = window.marked ? window.marked.parse(fullOdS) : `<pre class="whitespace-pre-wrap">${fullOdS}</pre>`;
                jsonView.textContent = JSON.stringify(currentWorkflowJson, null, 2);
            }, 600);

        } catch (err) {
            mdView.innerHTML = `<div class="text-red-400 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">Errore nella catena agentica: ${err.message}</div>`;
        } finally {
            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-paper-plane text-sm"></i><span>Genera OdS</span>`;
        }
    };

    // Linter Tab Execution
    window.runLinter = function() {
        const inputVal = document.getElementById('linter-input').value.trim();
        const view = document.getElementById('linter-result-view');
        if (!inputVal) {
            alert('Incolla un JSON di un workflow n8n per l\'analisi.');
            return;
        }

        view.innerHTML = `<div class="text-center py-8 text-emerald-400"><i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i><div>Audit di conformità in corso...</div></div>`;

        setTimeout(() => {
            const audit = window.LinterAgent.auditWorkflow(inputVal);

            let html = `
                <div class="space-y-4">
                    <div class="flex items-center justify-between p-3 ${audit.isValid ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'} border rounded-xl">
                        <span class="font-bold">${audit.isValid ? '✓ Audit di Conformità n8n Superato' : '⚠️ Rilevate Violazioni agli Standard n8n'}</span>
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded ${audit.isValid ? 'bg-emerald-500/20' : 'bg-amber-500/20'}">${audit.nodeCount} Nodi Analizzati</span>
                    </div>

                    <div class="space-y-2">
                        <div class="font-bold text-slate-200">Verifiche Superate:</div>
                        ${audit.passed.map(p => `<div class="p-2 bg-slate-950/60 rounded-lg font-mono text-[11px] text-emerald-400/90">✓ ${p}</div>`).join('')}
                    </div>
            `;

            if (audit.violations.length > 0) {
                html += `
                    <div class="space-y-2 pt-2">
                        <div class="font-bold text-red-400">Violazioni da Correggere:</div>
                        ${audit.violations.map(v => `<div class="p-2 bg-red-500/10 border border-red-500/20 rounded-lg font-mono text-[11px] text-red-400">❌ ${v}</div>`).join('')}
                    </div>
                `;
            }

            html += `</div>`;
            view.innerHTML = html;
        }, 500);
    };

    // Download Handlers
    window.downloadMarkdown = function() {
        if (!currentOdSMarkdown) { alert('Nessun OdS da scaricare.'); return; }
        const blob = new Blob([currentOdSMarkdown], { type: 'text/markdown' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `OdS_${Date.now()}.md`;
        a.click();
    };

    window.downloadJson = function() {
        if (!currentWorkflowJson) { alert('Nessun workflow JSON da scaricare.'); return; }
        const blob = new Blob([JSON.stringify(currentWorkflowJson, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `workflow_${Date.now()}.json`;
        a.click();
    };

})();
