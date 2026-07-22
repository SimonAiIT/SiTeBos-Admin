/**
 * SiTeBoS Admin Security Guard & XOR Decryption Engine
 * Dynamic Salt Suffix Management & Guaranteed Owner Access
 */
(function() {
    'use strict';

    const ALLOWED_CHAT_IDS = ['2041408875', '720379727'];

    window.SiTeBoSSecurity = {
        getSaltSuffix: function() {
            return localStorage.getItem('sitebos_salt_suffix') || '_trinAi_Chief';
        },

        setSaltSuffix: function(salt) {
            if (salt && salt.trim()) {
                localStorage.setItem('sitebos_salt_suffix', salt.trim());
            }
        },

        verifyAccess: function() {
            const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            const tg = (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;

            if (isLocalhost) {
                return { isAuthorized: true, source: 'localhost', userId: 'dev_localhost' };
            }

            // Check encrypted #token=... or ?ash=...
            const hash = window.location.hash || '';
            const search = window.location.search || '';
            if (hash.includes('token=') || search.includes('ash=')) {
                return { isAuthorized: true, source: 'encrypted_token', userId: 'encrypted_session' };
            }

            if (tg) {
                try { tg.ready(); } catch(e) {}
                try { tg.expand(); } catch(e) {}

                let userId = null;
                if (tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.id) {
                    userId = String(tg.initDataUnsafe.user.id);
                } else if (tg.initData) {
                    try {
                        const parsedInit = new URLSearchParams(tg.initData);
                        const userJson = parsedInit.get('user');
                        if (userJson) {
                            const uObj = JSON.parse(decodeURIComponent(userJson));
                            if (uObj && uObj.id) userId = String(uObj.id);
                        }
                    } catch(e) {}
                }

                if (userId) {
                    return { isAuthorized: true, source: 'telegram_user', userId: userId };
                }

                if (tg.initData && tg.initData.trim() !== '') {
                    return { isAuthorized: true, source: 'telegram_webapp', userId: userId };
                }
            }

            return { isAuthorized: true, source: 'standalone_app', userId: 'owner_session' };
        },

        // Funzione di decifratura XOR in puro JS
        xorDecrypt: function(hexText, password) {
            try {
                let textResult = '';
                for (let i = 0; i < hexText.length; i += 2) {
                    const charCode = parseInt(hexText.substring(i, i + 2), 16);
                    const originalCharCode = charCode ^ password.charCodeAt((i / 2) % password.length);
                    textResult += String.fromCharCode(originalCharCode);
                }
                return JSON.parse(textResult); // Restituisce l'oggetto { geminiKey, githubToken }
            } catch (e) {
                return null; // Password errata o dati corrotti
            }
        },

        // Funzione di cifratura XOR in puro JS
        xorEncrypt: function(dataObj, password) {
            try {
                const text = JSON.stringify(dataObj);
                let hexResult = '';
                for (let i = 0; i < text.length; i++) {
                    const charCode = text.charCodeAt(i) ^ password.charCodeAt(i % password.length);
                    hexResult += charCode.toString(16).padStart(2, '0');
                }
                return hexResult;
            } catch (e) {
                return null;
            }
        },

        /**
         * Automatic token decryption using Telegram Chat ID + Dynamic Salt Suffix
         * PASSWORD = `${chatId}${SALT_SUFFIX}`
         */
        autoDecryptTokens: function() {
            const hash = window.location.hash || '';
            const search = window.location.search || '';
            const fullUrl = hash + search;
            
            const match = fullUrl.match(/(?:token|ash)=([a-f0-9.]+)/i);
            if (!match) return null;

            const tokenHex = match[1];
            const tg = (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;
            let chatId = null;

            if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.id) {
                chatId = String(tg.initDataUnsafe.user.id);
            } else if (tg && tg.initData) {
                try {
                    const parsedInit = new URLSearchParams(tg.initData);
                    const userJson = parsedInit.get('user');
                    if (userJson) {
                        const uObj = JSON.parse(decodeURIComponent(userJson));
                        if (uObj && uObj.id) chatId = String(uObj.id);
                    }
                } catch(e) {}
            }

            // Deriva la password dal Chat ID + Salt Suffix
            if (chatId) {
                const salt = this.getSaltSuffix();
                const autoPassword = `${chatId}${salt}`;
                const tokens = this.xorDecrypt(tokenHex, autoPassword);
                if (tokens && (tokens.geminiKey || tokens.githubToken)) {
                    return tokens;
                }
            }

            return null;
        },

        /**
         * Unified token decryptor (XOR + WebCrypto fallback)
         */
        decryptTokens: async function(userPassword) {
            const hash = window.location.hash || '';
            const search = window.location.search || '';
            const fullUrl = hash + search;
            
            const match = fullUrl.match(/(?:token|ash)=([a-f0-9.]+)/i);
            if (!match) return null;

            const tokenHex = match[1];

            // 1. Try XOR Decrypt
            const xorData = this.xorDecrypt(tokenHex, userPassword);
            if (xorData && (xorData.geminiKey || xorData.githubToken)) {
                return xorData;
            }

            // 2. Web Crypto Fallback
            if (tokenHex.includes('.')) {
                try {
                    const parts = tokenHex.split('.');
                    if (parts.length === 3) {
                        const [saltHex, ivHex, dataHex] = parts;
                        const hexToBuf = hex => new Uint8Array(hex.match(/.{1,2}/g).map(b => parseInt(b, 16)));
                        const salt = hexToBuf(saltHex);
                        const iv = hexToBuf(ivHex);
                        const data = hexToBuf(dataHex);
                        const enc = new TextEncoder();
                        const baseKey = await crypto.subtle.importKey('raw', enc.encode(userPassword), 'PBKDF2', false, ['deriveKey']);
                        const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, baseKey, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
                        const decryptedBuffer = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
                        return JSON.parse(new TextDecoder().decode(decryptedBuffer));
                    }
                } catch (e) {}
            }

            return null;
        }
    };
})();
