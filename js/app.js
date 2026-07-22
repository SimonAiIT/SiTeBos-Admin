/**
 * Main Controller & Multi-Agent Orchestrator (SiTeBoS Admin Assistant)
 * Catena agentica: Selettore -> Architetto Frontend -> Architetto Backend n8n -> Auditor
 * Gestione Discussione OdS & Selezione OdS Esistenti da Repository.
 */
(function() {
    'use strict';

    let currentOdSMarkdown = null;
    let currentWorkflowJson = null;
    let currentSlug = null;
    let odsFilesMap = {};

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

        // 2. Try Automatic Token Decryption (Silent & Zero Popups)
        const autoTokens = window.SiTeBoSSecurity.autoDecryptTokens();
        if (autoTokens) {
            if (autoTokens.geminiKey) window.SiTeBoSApi.setKey(autoTokens.geminiKey);
            if (autoTokens.githubToken) window.SiTeBoSApi.setGitHubToken(autoTokens.githubToken);

            const badge = document.getElementById('key-badge');
            if (badge) {
                badge.innerText = "⚡ Sblocco Automatico";
                badge.className = "px-1.5 py-0.5 text-[9px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full shrink-0";
            }
        }

        // Load OdS Files for Discussion Tab
        loadOdSList();
    });

    // Navigation Tab Switching
    window.switchTab = function(tabId) {
        document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
        
        document.querySelectorAll('.nav-btn-dt').forEach(el => {
            el.classList.remove('bg-blue-600/10', 'text-blue-400', 'border', 'border-blue-500/20');
            el.classList.add('hover:bg-slate-800/60', 'text-slate-400');
        });

        document.querySelectorAll('.nav-btn-mob').forEach(el => {
            el.classList.remove('text-blue-400');
            el.classList.add('text-slate-400');
        });

        document.getElementById('tab-' + tabId).classList.remove('hidden');
        
        const dtBtn = document.getElementById('nav-' + tabId + '-desktop');
        if (dtBtn) {
            dtBtn.classList.remove('hover:bg-slate-800/60', 'text-slate-400');
            dtBtn.classList.add('bg-blue-600/10', 'text-blue-400', 'border', 'border-blue-500/20');
        }

        const mobBtn = document.getElementById('nav-' + tabId + '-mob');
        if (mobBtn) {
            mobBtn.classList.remove('text-slate-400');
            mobBtn.classList.add('text-blue-400');
        }

        if (tabId === 'discuss') {
            loadOdSList();
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
            document.getElementById('key-badge').className = "px-1.5 py-0.5 text-[9px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full shrink-0";

            alert('🔒 Credenziali decifrate con successo!');
            toggleUnlockModal(false);
            loadOdSList();
        } else {
            alert('❌ Password errata o token non valido.');
        }
    };

    // Settings Modal (Readonly Inspection)
    window.toggleSettingsModal = function() {
        const modal = document.getElementById('settings-modal');
        if (modal) {
            const isHidden = modal.classList.contains('hidden');
            if (isHidden) {
                const keyInput = document.getElementById('api-key-input');
                const ghInput = document.getElementById('gh-token-input');
                if (keyInput) keyInput.value = window.SiTeBoSApi.getKey();
                if (ghInput) ghInput.value = window.SiTeBoSApi.getGitHubToken();
                modal.classList.remove('hidden');
            } else {
                modal.classList.add('hidden');
            }
        }
    };

    window.toggleKeyVisibility = function() {
        const keyInput = document.getElementById('api-key-input');
        const ghInput = document.getElementById('gh-token-input');
        const btn = document.getElementById('btn-toggle-key-vis');

        if (keyInput && ghInput) {
            const isPassword = keyInput.type === 'password';
            keyInput.type = isPassword ? 'text' : 'password';
            ghInput.type = isPassword ? 'text' : 'password';
            if (btn) {
                btn.innerHTML = isPassword ? `<i class="fa-solid fa-eye-slash"></i> Nascondi in Chiaro` : `<i class="fa-solid fa-eye"></i> Mostra in Chiaro`;
            }
        }
    };

    // FETCH COMMITTED ODS FILES FROM REPOSITORY
    window.loadOdSList = async function() {
        const select = document.getElementById('ods-file-select');
        if (!select) return;

        select.innerHTML = '<option value="">Caricamento OdS dalla repository GitHub...</option>';

        try {
            const files = await window.SiTeBoSApi.listOdSFiles();
            odsFilesMap = {};

            if (files.length === 0) {
                select.innerHTML = '<option value="">Nessun OdS trovato in OdS/ (Generane uno nuovo)</option>';
                return;
            }

            select.innerHTML = '<option value="">-- Seleziona un OdS dalla Repository --</option>';
            files.forEach(f => {
                odsFilesMap[f.name] = f;
                const opt = document.createElement('option');
                opt.value = f.name;
                opt.innerText = `📄 ${f.name} (${Math.round(f.size / 1024)} KB)`;
                select.appendChild(opt);
            });
        } catch (e) {
            select.innerHTML = '<option value="">Errore nel caricamento OdS</option>';
        }
    };

    // DISPLAY SELECTED ODS CONTENT
    window.onOdSSelected = async function() {
        const select = document.getElementById('ods-file-select');
        const view = document.getElementById('selected-ods-content');
        const title = document.getElementById('selected-ods-title');
        const fileName = select ? select.value : '';

        if (!fileName) {
            view.innerHTML = `<div class="text-center py-10 text-slate-600"><i class="fa-solid fa-folder-open text-3xl mb-2 block opacity-40"></i>Seleziona un Ordine di Servizio.</div>`;
            return;
        }

        title.innerHTML = `<i class="fa-regular fa-file-code text-amber-400"></i> ${fileName}`;
        view.innerHTML = `<div class="text-center py-8 text-amber-400"><i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i><div>Caricamento OdS locale...</div></div>`;

        const fileObj = odsFilesMap[fileName];
        const targetUrl = (fileObj && fileObj.download_url) ? fileObj.download_url : fileName;
        const mdText = await window.SiTeBoSApi.getOdSContent(targetUrl);

        view.innerHTML = window.marked ? window.marked.parse(mdText) : `<pre class="whitespace-pre-wrap">${mdText}</pre>`;
    };

    // DELETE SELECTED ODS
    window.deleteSelectedOdS = async function() {
        const select = document.getElementById('ods-file-select');
        const fileName = select ? select.value : '';

        if (!fileName) {
            alert('Seleziona un OdS da eliminare.');
            return;
        }

        const confirmDel = confirm(`Sei sicuro di voler eliminare l'OdS: ${fileName}?`);
        if (!confirmDel) return;

        try {
            await window.SiTeBoSApi.deleteOdSFile(fileName);
            alert(`🗑️ OdS ${fileName} eliminato con successo.`);

            delete odsFilesMap[fileName];
            loadOdSList();
            onOdSSelected();
        } catch(err) {
            alert(`Errore durante l'eliminazione: ${err.message}`);
        }
    };

    // EXTEND SELECTED ODS (DISCUSS & UPDATE)
    window.extendSelectedOdS = async function() {
        const select = document.getElementById('ods-file-select');
        const extendPrompt = document.getElementById('extend-prompt-input').value.trim();
        const selectedFileName = select ? select.value : '';

        if (!selectedFileName) {
            alert('Seleziona un OdS esistente dalla lista in alto.');
            return;
        }

        if (!extendPrompt) {
            alert('Inserisci le istruzioni o la modifica da apportare a questo OdS.');
            return;
        }

        const fullPrompt = `STAI AGGIORNANDO L'ODS ESISTENTE: ${selectedFileName}.\n\nMODIFICHE/DISCUSSIONE RICHIESTA DALL'UTENTE:\n${extendPrompt}`;
        document.getElementById('prompt-input').value = fullPrompt;
        
        switchTab('ods');
        generateOdS();
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

        mdView.innerHTML = `
            <div class="space-y-3 p-2 sm:p-4">
                <div class="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                    <i class="fa-solid fa-network-wired fa-spin"></i> Catena Multi-Agente in esecuzione...
                </div>
                <div id="step-1" class="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 flex items-center gap-2.5 text-xs">
                    <i class="fa-solid fa-spinner fa-spin text-blue-400"></i>
                    <span>Step 1: Agente Selettore (MINIMAL thinking)...</span>
                </div>
                <div id="step-2" class="p-2.5 bg-slate-900/40 border border-slate-800/40 rounded-xl text-slate-600 flex items-center gap-2.5 text-xs">
                    <i class="fa-solid fa-circle-notch"></i>
                    <span>Step 2: Agente Architetto Frontend (HIGH thinking UI TWA)...</span>
                </div>
                <div id="step-3" class="p-2.5 bg-slate-900/40 border border-slate-800/40 rounded-xl text-slate-600 flex items-center gap-2.5 text-xs">
                    <i class="fa-solid fa-circle-notch"></i>
                    <span>Step 3: Agente Architetto Backend n8n (HIGH thinking Workflow)...</span>
                </div>
                <div id="step-4" class="p-2.5 bg-slate-900/40 border border-slate-800/40 rounded-xl text-slate-600 flex items-center gap-2.5 text-xs">
                    <i class="fa-solid fa-circle-notch"></i>
                    <span>Step 4: Agente Auditor & Token Counter...</span>
                </div>
            </div>
        `;

        let totalPromptTokens = 0;
        let totalCandidatesTokens = 0;

        try {
            // --- STEP 1: SELECTOR AGENT (MINIMAL) ---
            const selectorResult = await window.SelectorAgent.analyzeRequest(promptText);
            const selectorData = selectorResult.data;
            const selectorUsage = selectorResult.usage;

            totalPromptTokens += selectorUsage.promptTokens || 0;
            totalCandidatesTokens += selectorUsage.candidatesTokens || 0;

            const step1 = document.getElementById('step-1');
            if (step1) {
                step1.className = "p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-2.5 text-xs";
                step1.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 1: Selettore (${selectorData.modulo || 'Componenti Mappati'}) • ${selectorUsage.totalTokens || 0} t</span>`;
            }

            // --- STEP 2: FRONTEND ARCHITECT AGENT (HIGH) ---
            await new Promise(r => setTimeout(r, 350));
            const step2 = document.getElementById('step-2');
            if (step2) {
                step2.className = "p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 flex items-center gap-2.5 text-xs";
                step2.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-blue-400"></i><span>Step 2: Architetto Frontend (HIGH thinking UI TWA...)...</span>`;
            }

            const frontendResult = await window.FrontendArchitectAgent.designFrontend(promptText, selectorData);
            const frontendSpecText = frontendResult.specText;
            const frontendUsage = frontendResult.usage;

            totalPromptTokens += frontendUsage.promptTokens || 0;
            totalCandidatesTokens += frontendUsage.candidatesTokens || 0;

            if (step2) {
                step2.className = "p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-2.5 text-xs";
                step2.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 2: Architetto Frontend (Bozza UI TWA generata) • ${frontendUsage.totalTokens || 0} t</span>`;
            }

            // --- STEP 3: BACKEND N8N ARCHITECT AGENT (HIGH) ---
            await new Promise(r => setTimeout(r, 350));
            const step3 = document.getElementById('step-3');
            if (step3) {
                step3.className = "p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 flex items-center gap-2.5 text-xs";
                step3.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-blue-400"></i><span>Step 3: Architetto Backend n8n (HIGH thinking Workflow...)...</span>`;
            }

            const backendResult = await window.N8nArchitectAgent.designBackend(promptText, selectorData, frontendSpecText);
            const backendUsage = backendResult.usage;

            totalPromptTokens += backendUsage.promptTokens || 0;
            totalCandidatesTokens += backendUsage.candidatesTokens || 0;

            if (step3) {
                step3.className = "p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-2.5 text-xs";
                step3.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 3: Architetto Backend n8n (Workflow JSON generato) • ${backendUsage.totalTokens || 0} t</span>`;
            }

            // Total Token Calculation
            const grandTotalTokens = totalPromptTokens + totalCandidatesTokens;

            // --- STEP 4: AUDITOR ---
            const step4 = document.getElementById('step-4');
            if (step4) {
                step4.className = "p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-2.5 text-xs";
                step4.innerHTML = `<i class="fa-solid fa-check-circle"></i><span>Step 4: Auditor & Token Counter (Totale: ${grandTotalTokens} token)</span>`;
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
            mdView.innerHTML = `<div class="text-red-400 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-xs">Errore nella catena agentica: ${err.message}</div>`;
        } finally {
            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i><span>Genera OdS</span>`;
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
            const mdPath = `OdS/${currentSlug}.md`;
            await window.SiTeBoSApi.commitFileToGitHub(
                mdPath,
                currentOdSMarkdown,
                `feat(ods): salva ordine di servizio ${currentSlug}.md`
            );

            const jsonPath = `n8n_workflow/${currentSlug}.json`;
            await window.SiTeBoSApi.commitFileToGitHub(
                jsonPath,
                JSON.stringify(currentWorkflowJson, null, 2),
                `feat(n8n): salva workflow n8n ${currentSlug}.json`
            );

            alert(`🚀 OdS e Workflow n8n salvati con successo sulla repository GitHub!\n- ${mdPath}\n- ${jsonPath}`);
            loadOdSList();
        } catch (err) {
            alert(`Errore durante il commit su GitHub: ${err.message}`);
        }
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
