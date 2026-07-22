/**
 * SiTeBoS Gemini API Service
 * Direct REST communication layer with Gemini AI models
 */
window.SiTeBoSApi = {
    getKey: function() {
        return localStorage.getItem('sitebos_gemini_key') || 'AIzaSyAsJnrkSleTbvGRZgpZ_Tyla0IsJvALa5w';
    },

    setKey: function(key) {
        if (key && key.trim()) {
            localStorage.setItem('sitebos_gemini_key', key.trim());
        }
    },

    callGemini: async function(prompt, systemInstruction, isJsonMode = false) {
        const apiKey = this.getKey();
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

        if (isJsonMode) {
            try {
                return JSON.parse(rawText);
            } catch (err) {
                console.warn('[Gemini API] Impossibile parsare JSON:', rawText);
                return { raw: rawText };
            }
        }

        return rawText;
    }
};
