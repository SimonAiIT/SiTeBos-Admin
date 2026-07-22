// radar-ocr-helper.js
(function (global) {
    'use strict';

    async function loadTesseract() {
        if (global.Tesseract) return global.Tesseract;
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
            script.onload = () => {
                if (global.Tesseract) {
                    resolve(global.Tesseract);
                } else {
                    reject(new Error("Tesseract failed to load"));
                }
            };
            script.onerror = (err) => reject(err);
            document.head.appendChild(script);
        });
    }

    const MONTHS_MAP = {
        "gennaio": 1, "gen": 1,
        "febbraio": 2, "feb": 2,
        "marzo": 3, "mar": 3,
        "aprile": 4, "apr": 4,
        "maggio": 5, "mag": 5,
        "giugno": 6, "giu": 6,
        "luglio": 7, "lug": 7,
        "agosto": 8, "ago": 8,
        "settembre": 9, "set": 9,
        "ottobre": 10, "ott": 10,
        "novembre": 11, "nov": 11,
        "dicembre": 12, "dic": 12
    };

    global.RadarOCR = {
        async detectDateContext(imageSrc) {
            try {
                const Tesseract = await loadTesseract();
                // Recognize text using lightweight 'eng' data (month names use latin alphabet)
                const result = await Tesseract.recognize(imageSrc, 'eng');
                const text = result.data.text || "";
                
                const textLower = text.toLowerCase();
                let detectedMonth = null;
                let minIndex = Infinity;

                for (const [monthStr, monthNum] of Object.entries(MONTHS_MAP)) {
                    const idx = textLower.indexOf(monthStr);
                    if (idx !== -1 && idx < minIndex) {
                        minIndex = idx;
                        detectedMonth = monthNum;
                    }
                }

                // Look for year (e.g. 2026, 2027)
                const yearMatch = textLower.match(/\b(202[5-9]|203[0-5])\b/);
                let detectedYear = null;
                if (yearMatch) {
                    detectedYear = parseInt(yearMatch[1], 10);
                }

                return {
                    month: detectedMonth,
                    year: detectedYear,
                    rawText: text
                };
            } catch (e) {
                console.warn("OCR context detection failed:", e);
                return { month: null, year: null, rawText: "" };
            }
        }
    };
})(window);
