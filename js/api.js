/**
 * SiTeBoS API Service Layer (Gemini REST + GitHub REST API)
 * Direct communication with Gemini AI and GitHub repository commits.
 * Zero hardcoded keys in repository. Only LATEST endpoints allowed.
 */
window.SiTeBoSApi = {
    getKey: function() {
        return localStorage.getItem('sitebos_gemini_key') || '';
    },

    setKey: function(key) {
        if (key && key.trim()) {
            localStorage.setItem('sitebos_gemini_key', key.trim());
        }
    },

    getGitHubToken: function() {
        return localStorage.getItem('sitebos_github_token') || '';
    },

    setGitHubToken: function(token) {
        if (token && token.trim()) {
            localStorage.setItem('sitebos_github_token', token.trim());
        }
    },

    callGemini: async function(prompt, systemInstruction, isJsonMode = false, thinkingLevel = "MINIMAL") {
        const apiKey = this.getKey();
        if (!apiKey) {
            throw new Error('API Key Gemini mancante. Sblocca con il link cifrato #token=... o inseriscila nelle Impostazioni.');
        }

        // STRICTLY ONLY LATEST MODELS
        const models = [
            'gemini-flash-latest',
            'gemini-flash-lite-latest',
            'gemini-3.6-flash'
        ];

        let lastError = null;

        for (const model of models) {
            const configsToTry = [];
            if (thinkingLevel) {
                const cfgWithThinking = {};
                if (isJsonMode) cfgWithThinking.responseMimeType = "application/json";
                cfgWithThinking.thinkingConfig = { thinkingLevel: thinkingLevel };
                configsToTry.push(cfgWithThinking);
            }

            const cfgStandard = {};
            if (isJsonMode) cfgStandard.responseMimeType = "application/json";
            configsToTry.push(cfgStandard);

            for (const genConfig of configsToTry) {
                try {
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

                    const payload = {
                        contents: [{ role: "user", parts: [{ text: prompt }] }],
                        systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined,
                        generationConfig: genConfig
                    };

                    let res = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    // If 429 (Rate Limit), wait 1s and retry once
                    if (res.status === 429) {
                        console.warn(`[Gemini API] Rate limit 429 per ${model}. Pausa 1s e riprova...`);
                        await new Promise(r => setTimeout(r, 1000));
                        res = await fetch(apiUrl, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        });
                    }

                    if (!res.ok) {
                        let errMessage = `Errore API Gemini (${model}) HTTP ${res.status}`;
                        try {
                            const errJson = await res.json();
                            if (errJson.error && errJson.error.message) {
                                errMessage = `API Gemini (${model}) [${res.status}]: ${errJson.error.message}`;
                            }
                        } catch(e) {}

                        if (res.status === 400 && genConfig.thinkingConfig) {
                            console.warn(`[Gemini API] thinkingConfig non accettato da ${model}. Riprovo senza thinkingConfig...`);
                            continue;
                        }

                        throw new Error(errMessage);
                    }

                    const data = await res.json();
                    
                    let rawText = '';
                    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                        const parts = data.candidates[0].content.parts || [];
                        rawText = parts.map(p => p.text || '').join('');
                    }

                    const usage = {
                        promptTokens: data.usageMetadata?.promptTokenCount || 0,
                        candidatesTokens: data.usageMetadata?.candidatesTokenCount || 0,
                        totalTokens: data.usageMetadata?.totalTokenCount || 0
                    };

                    let parsedData = null;
                    if (isJsonMode) {
                        try {
                            parsedData = JSON.parse(rawText);
                        } catch (err) {
                            console.warn('[Gemini API] Impossibile parsare JSON:', rawText);
                            parsedData = { raw: rawText };
                        }
                    }

                    return {
                        text: rawText,
                        data: parsedData,
                        usage: usage,
                        activeModel: model
                    };

                } catch (err) {
                    lastError = err;
                }
            }
        }

        throw lastError || new Error('🔑 Errore API Gemini: La tua API Key non è autorizzata o nessun modello risponde. Verifica la chiave nelle Impostazioni.');
    },

    listOdSFiles: async function() {
        // 1. Direct local/relative fetch of OdS/ods_manifest.json
        try {
            const res = await fetch('OdS/ods_manifest.json');
            if (res.ok) {
                const list = await res.json();
                if (Array.isArray(list) && list.length > 0) return list;
            }
        } catch(e) {}

        // 2. Fallback to GitHub REST API
        const ghToken = this.getGitHubToken();
        const owner = 'SimonAiIT';
        const repo = 'SiTeBos-Admin';
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/OdS`;

        const headers = { 'Accept': 'application/vnd.github.v3+json' };
        if (ghToken) headers['Authorization'] = `Bearer ${ghToken}`;

        try {
            const res = await fetch(apiUrl, { headers });
            if (!res.ok) return [];
            const files = await res.json();
            return Array.isArray(files) ? files.filter(f => f.name.endsWith('.md')) : [];
        } catch (e) {
            console.warn('Impossibile recuperare la lista degli OdS:', e);
            return [];
        }
    },

    getOdSContent: async function(fileNameOrUrl) {
        // 1. Direct local relative fetch (OdS/[fileName])
        if (fileNameOrUrl && !fileNameOrUrl.startsWith('http')) {
            try {
                const res = await fetch(`OdS/${fileNameOrUrl}`);
                if (res.ok) return await res.text();
            } catch(e) {}
        }

        // 2. Download via URL
        try {
            const res = await fetch(fileNameOrUrl);
            if (!res.ok) return '';
            return await res.text();
        } catch (e) {
            return '';
        }
    },

    deleteOdSFile: async function(fileName) {
        const ghToken = this.getGitHubToken();
        const owner = 'SimonAiIT';
        const repo = 'SiTeBos-Admin';
        const filePath = `OdS/${fileName}`;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

        if (!ghToken) {
            return { success: true, source: 'local_only' };
        }

        let sha = null;
        try {
            const getRes = await fetch(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${ghToken}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            if (getRes.ok) {
                const getJson = await getRes.json();
                sha = getJson.sha;
            }
        } catch(e) {}

        if (!sha) {
            return { success: true, source: 'local_only' };
        }

        const delRes = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${ghToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `fix(ods): elimina ordine di servizio ${fileName}`,
                sha: sha
            })
        });

        if (!delRes.ok) {
            const errData = await delRes.json();
            throw new Error(errData.message || `Errore eliminazione file (${delRes.status})`);
        }

        return await delRes.json();
    },

    commitFileToGitHub: async function(filePath, contentString, commitMessage) {
        const ghToken = this.getGitHubToken();
        if (!ghToken) {
            throw new Error('Token GitHub non configurato. Sblocca con il link cifrato #token=... o inseriscilo nelle Impostazioni.');
        }

        const owner = 'SimonAiIT';
        const repo = 'SiTeBos-Admin';
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

        // 1. Check if file already exists to get SHA
        let sha = null;
        try {
            const getRes = await fetch(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${ghToken}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            if (getRes.ok) {
                const getJson = await getRes.json();
                sha = getJson.sha;
            }
        } catch (e) {}

        // Encode content to Base64 (UTF-8 safe)
        const bytes = new TextEncoder().encode(contentString);
        let binary = '';
        bytes.forEach((b) => binary += String.fromCharCode(b));
        const base64Content = btoa(binary);

        const body = {
            message: commitMessage || `feat(ods): salva file ${filePath}`,
            content: base64Content,
            sha: sha || undefined
        };

        const putRes = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${ghToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!putRes.ok) {
            const errData = await putRes.json();
            throw new Error(errData.message || `Errore commit GitHub (${putRes.status})`);
        }

        return await putRes.json();
    }
};
