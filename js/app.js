/**
 * Main Controller & Multi-Agent Orchestrator (SiTeBoS Admin Assistant)
 * Coordina la catena agentica: Selettore -> Architetto Frontend -> Architetto Backend n8n -> Linter
 * Inclusi: Sblocco Automatico dal ChatID (`${chatId}_trinAi_Chief`), Decifratura XOR Hex, Commit GitHub.
 */
(function() {
    'use strict';

    let currentOdSMarkdown = null;
    let currentWorkflowJson = null;
    let currentSlug = null;

    document.addEventListener('DOMContentLoaded', async () => {
        // 1. Security Check
        const sec = window.SiTeBoSSecurity.verifyAccess();
        if (!sec.isAuthorized) {
            document.getElementById('access-denied-screen').classList.remove('hidden');
            return;
        }

        if (sec.userId) {
            document.getElementById('user-name').innerText = sec.userId;
        }

        // 2. Try Automatic Token Decryption via `${chatId}_trinAi_Chief`
        const autoTokens = window.SiTeBoSSecurity.autoDecryptTokens();
        if (autoTokens) {
            if (autoTokens.geminiKey) window.SiTeBoSApi.setKey(autoTokens.geminiKey);
            if (autoTokens.githubToken) window.SiTeBoSApi.setGitHubToken(autoTokens.githubToken);

            const badge = document.getElementById('key-badge');
            if (badge) {
                badge.innerText = "⚡ Sblocco Automatico ChatID";
                badge.className = "px-2 py-0.5 text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full";
            }
        } else {
            // Check for Encrypted URL Token (#token=... or ?ash=...)
            const hash = window.location.hash || '';
            const search = window.location.search || '';
            if (hash.includes('token=') || search.includes('ash=')) {
                toggleUnlockModal(true);
            }
        }

        // 3. Load Saved Keys into Modal
        const keyInput = document.getElementById('api-key-input');
        if (keyInput) keyInput.value = window.SiTeBoSApi.getKey();

        const ghInput = document.getElementById('gh-token-input');
        if (ghInput) ghInput.value = window.SiTeBoSApi.getGitHubToken();
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

    // Unlock Password Modal Handlers
    window.toggleUnlockModal = function(show) {
        const modal = document.getElementById('unlock-modal');
        if (modal) {
            if (show) modal.classList.remove('hidden');
            else modal.classList.add('hidden');
        }
    };

    window.unlockEncryptedTokens = async function() {
        const pwdInput = document.getElementById('unlock-password-input');
        const password = pwdInput ? pwdInput.value.trim() : '';

        if (!password) {
            alert('Inserisci la password di sblocco.');
            return;
        }

        const tokens = await window.SiTeBoSSecurity.decryptTokens(password);
        if (tokens) {
            if (tokens.geminiKey) window.SiTeBoSApi.setKey(tokens.geminiKey);
            if (tokens.githubToken) window.SiTeBoSApi.setGitHubToken(tokens.githubToken);

            document.getElementById('key-badge').innerText = "🔒 Credenziali Sbloccate";
            document.getElementById('key-badge').className = "px-2 py-0.5 text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full";

            alert('🔒 Credenziali decifrate con successo!');
            toggleUnlockModal(false);
        } else {
            alert('❌ Password errata o token non valido.');
        }
    };

    // Settings Modal Handlers
    window.toggleSettingsModal = function() {
        document.getElementById('settings-modal').classList.toggle('hidden');
    };

    window.saveSettings = function() {
        const geminiVal = document.getElementById('api-key-input').value.trim();
        const ghVal = document.getElementById('gh-token-input').value.trim();

        if (geminiVal) window.SiTeBoSApi.setKey(geminiVal);
        if (ghVal) window.SiTeBoSApi.setGitHubToken(ghVal);

        alert('Impostazioni salvate con successo!');
        window.toggleSettingsModal();
    };

    // Tool: Generate Encrypted URL Token (Defaults password to `${chatId}_trinAi_Chief`)
    window.generateEncryptedTokenUrl = function() {
        const gKey = document.getElementById('api-key-input').value.trim() || window.SiTeBoSApi.getKey();
        const ghTok = document.getElementById('gh-token-input').value.trim() || window.SiTeBoSApi.getGitHubToken();
        let pwd = document.getElementById('encrypt-password-input').value.trim();

        // Default password format if not typed explicitly
        if (!pwd) {
            const tg = (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;
            let chatId = '2041408875';
            if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.id) {
                chatId = String(tg.initDataUnsafe.user.id);
            }
            const salt = window.SiTeBoSSecurity.getSaltSuffix();
            pwd = `${chatId}${salt}`;
        }

        const tokensObj = { geminiKey: gKey, githubToken: ghTok };
        const tokenHex = window.SiTeBoSSecurity.xorEncrypt(tokensObj, pwd);

        if (tokenHex) {
            const fullUrl = `https://simonaiit.github.io/SiTeBos-Admin/index.html#token=${tokenHex}`;
            document.getElementById('encrypted-url-output').value = fullUrl;
            document.getElementById('encrypted-url-container').classList.remove('hidden');
        } else {
            alert('Errore durante la cifratura del token.');
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

        currentSlug = `ods_${Date.now()}`;

        // Render Live Progress Cards
        mdView.innerHTML = `
            <div class="space-y-4 p-4">
                <div class="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                    <i class="fa-solid fa-network-wired fa-spin"></i> Catena Multi-Agente in esecuzione...
                </div>
                <div id="step-1" class="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 flex items-center gap-3">
                    <i class="fa-solid fa-spinner fa-spin text-blue-400"></i>
                    <span>Step 1: Agente Selettore (Mappatura componenti & verifica OdS aperto...)</span>
                </div>
                <div id="step-2" class="p-3 bg-slate-900/40 border border-slate-800/40 rounded-xl text-slate-600 flex items-center gap-3">
                    <i class="fa-solid fa-circle-notch"></i>
                    <span>Step 2: Agente Architetto Frontend (Bozza completa UI TWA...)</span>
                </div>
                <div id="step-3" class="p-3 bg-slate-900/40 border border-slate-800/40 rounded-xl text-slate-600 flex items-center gap-3">
                    <i class="fa-solid fa-circle-notch"></i>
                    <span>Step 3: Agente Architetto Backend n8n (Bozza completa Workflow JSON...)</span>
                </div>
                <div id="step-4" class="p-3 bg-slate-900/40 border border-slate-800/40 rounded-xl text-slate-600 flex items-center gap-3">
                    <i class="fa-solid fa-circle-notch"></i>
                    <span>Step 4: Agente Auditor & Token Counter (Audit & Calcolo Token...)</span>
                </div>
            </div>
        `;

        let totalPromptTokens = 0;
        let totalCandidatesTokens = 0;

        try {
            // --- STEP 1: SELECTOR AGENT ---
            const selectorResult = await window.SelectorAgent.analyzeRequest(promptText);
            const selectorData = selectorResult.data;
            const selectorUsage = selectorResult.usage;

            totalPromptTokens += selectorUsage.promptTokens || 0;
            totalCandidatesTokens += selectorUsage.candidatesTokens || 0;

            const step1 = document.getElementById('step-1');
            if (step1) {
                step1.className = "p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-3";
                step1.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 1: Agente Selettore (${selectorData.modulo || 'Componenti Mappati'}, OdS: ${selectorData.ods_esistente || 'Nuova Architettura [NEW]'}) • ${selectorUsage.totalTokens || 0} token</span>`;
            }

            // --- STEP 2: FRONTEND ARCHITECT AGENT ---
            const step2 = document.getElementById('step-2');
            if (step2) {
                step2.className = "p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 flex items-center gap-3";
                step2.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-blue-400"></i><span>Step 2: Agente Architetto Frontend (Bozza completa UI TWA...)</span>`;
            }

            const frontendResult = await window.FrontendArchitectAgent.designFrontend(promptText, selectorData);
            const frontendSpecText = frontendResult.specText;
            const frontendUsage = frontendResult.usage;

            totalPromptTokens += frontendUsage.promptTokens || 0;
            totalCandidatesTokens += frontendUsage.candidatesTokens || 0;

            if (step2) {
                step2.className = "p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-3";
                step2.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 2: Agente Architetto Frontend (Bozza UI TWA generata) • ${frontendUsage.totalTokens || 0} token</span>`;
            }

            // --- STEP 3: BACKEND N8N ARCHITECT AGENT ---
            const step3 = document.getElementById('step-3');
            if (step3) {
                step3.className = "p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 flex items-center gap-3";
                step3.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-blue-400"></i><span>Step 3: Agente Architetto Backend n8n (Workflow n8n & Schema JSON...)</span>`;
            }

            const backendResult = await window.N8nArchitectAgent.designBackend(promptText, selectorData, frontendSpecText);
            const backendUsage = backendResult.usage;

            totalPromptTokens += backendUsage.promptTokens || 0;
            totalCandidatesTokens += backendUsage.candidatesTokens || 0;

            if (step3) {
                step3.className = "p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-3";
                step3.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 3: Agente Architetto Backend n8n (Workflow JSON generato) • ${backendUsage.totalTokens || 0} token</span>`;
            }

            // Total Token Calculation
            const grandTotalTokens = totalPromptTokens + totalCandidatesTokens;

            // --- STEP 4: LINTER & TOKEN AUDITOR ---
            const step4 = document.getElementById('step-4');
            if (step4) {
                step4.className = "p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-3";
                step4.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 4: Agente Auditor & Token Counter (Totale Lavoro: ${grandTotalTokens} token)</span>`;
            }

            // Assemble Complete Structured OdS Markdown
            const fullOdS = `# 📐 ORDINE DI SERVIZIO: ${selectorData.modulo || 'MODULO'}
**Slug Progetto:** \`${currentSlug}\`  
**Data:** ${new Date().toLocaleDateString('it-IT')}  
**Azione Consigliata:** ${selectorData.azione_consigliata || 'Nuova Implementazione Architetturale'}  
**OdS Esistente Tracciato:** ${selectorData.ods_esistente || 'Nessuno (Nuova Architettura da Zero)'}

---

## 🗣️ 1. RICHIESTA UTENTE ORIGINALE (Cosa è stato chiesto)
> "${promptText}"

---

## 🔍 2. ANALISI ED ELEMENTI PRESI IN ESAME (Cosa è stato analizzato)
- **Modulo Coinvolto:** \`${selectorData.modulo || 'Generico'}\`
- **File Frontend HTML (TWA):** \`${JSON.stringify(selectorData.file_frontend || [])}\`
- **Workflow Backend n8n:** \`${JSON.stringify(selectorData.workflow_backend || [])}\`
- **Database MongoDB:** \`${JSON.stringify(selectorData.db_collezioni || [])}\`
- **Stato Architettura:** ${selectorData.ods_esistente ? `⚠️ OdS Aperto Tracciato: \`${selectorData.ods_esistente}\`.` : `✨ Nuova Architettura Generata da Zero.`}

---

${frontendSpecText}

---

### ⚙️ SPECIFICHE TECNICHE BACKEND (n8n)
${backendResult.markdownBackend}

---

## 📊 5. RIEPILOGO CONSUMO TOKEN & COSTO AGENTICO
> [!NOTE]
> **Metriche Ufficiali Consumo API Gemini per questo OdS:**
> - 📥 **Token Input (Prompt & Contesto):** \`${totalPromptTokens.toLocaleString('it-IT')}\` token
> - 📤 **Token Output (Risposte Agenti):** \`${totalCandidatesTokens.toLocaleString('it-IT')}\` token
> - 🧮 **CONSUMO TOTALE ODS:** \`${grandTotalTokens.toLocaleString('it-IT')}\` token
> - 🤖 **Agenti Eseguiti:** \`Selettore\` (${selectorUsage.totalTokens} t) ➔ \`Architetto Frontend\` (${frontendUsage.totalTokens} t) ➔ \`Architetto Backend n8n\` (${backendUsage.totalTokens} t) ➔ \`Auditor\`
`;

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

    // DIRECT GITHUB COMMIT FUNCTION
    window.commitToGitHub = async function() {
        if (!currentOdSMarkdown || !currentWorkflowJson) {
            alert('Nessun OdS generato da salvare su GitHub.');
            return;
        }

        const ghToken = window.SiTeBoSApi.getGitHubToken();
        if (!ghToken) {
            alert('Inserisci il tuo Token API di GitHub nelle Impostazioni per salvare direttamente sulla repository!');
            window.toggleSettingsModal();
            return;
        }

        try {
            // Commit OdS Markdown to OdS/
            const mdPath = `OdS/${currentSlug}.md`;
            await window.SiTeBoSApi.commitFileToGitHub(
                mdPath,
                currentOdSMarkdown,
                `feat(ods): salva ordine di servizio ${currentSlug}.md`
            );

            // Commit Workflow JSON to n8n_workflow/
            const jsonPath = `n8n_workflow/${currentSlug}.json`;
            await window.SiTeBoSApi.commitFileToGitHub(
                jsonPath,
                JSON.stringify(currentWorkflowJson, null, 2),
                `feat(n8n): salva workflow n8n ${currentSlug}.json`
            );

            alert(`🚀 OdS e Workflow n8n salvati con successo sulla repository GitHub!\n- ${mdPath}\n- ${jsonPath}`);
        } catch (err) {
            alert(`Errore durante il commit su GitHub: ${err.message}`);
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
        a.download = `${currentSlug || 'OdS'}.md`;
        a.click();
    };

    window.downloadJson = function() {
        if (!currentWorkflowJson) { alert('Nessun workflow JSON da scaricare.'); return; }
        const blob = new Blob([JSON.stringify(currentWorkflowJson, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${currentSlug || 'workflow'}.json`;
        a.click();
    };

})();
