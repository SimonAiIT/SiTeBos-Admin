/**
 * SiTeBoS API Service Layer (Gemini REST + GitHub REST API)
 * Direct communication with Gemini AI and GitHub repository commits.
 * Zero hardcoded keys in repository.
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

    callGemini: async function(prompt, systemInstruction, isJsonMode = false) {
        const apiKey = this.getKey();
        if (!apiKey) {
            throw new Error('API Key Gemini mancante. Sblocca con il link cifrato #token=... o inseriscila nelle Impostazioni.');
        }

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined,
            generationConfig: isJsonMode ? { responseMimeType: "application/json" } : undefined
        };

        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            throw new Error(`Errore API Gemini (${res.status}): ${res.statusText}`);
        }

        const data = await res.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        
        // Extract token usage metadata from Gemini response
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
            usage: usage
        };
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
