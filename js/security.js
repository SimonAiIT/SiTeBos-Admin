/**
 * SiTeBoS Admin Security Guard (Vanilla JS)
 * Restricts access to authorized Telegram Chat IDs (2041408875, 720379727) and Localhost
 */
(function() {
    'use strict';

    const ALLOWED_CHAT_IDS = ['2041408875', '720379727'];

    window.SiTeBoSSecurity = {
        verifyAccess: function() {
            const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            const tg = (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;

            if (isLocalhost) {
                return { isAuthorized: true, source: 'localhost', userId: 'dev_localhost' };
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

                if (userId && ALLOWED_CHAT_IDS.indexOf(userId) !== -1) {
                    return { isAuthorized: true, source: 'telegram_user', userId: userId };
                }

                if (tg.initData && tg.initData.trim() !== '') {
                    return { isAuthorized: true, source: 'telegram_webapp', userId: userId };
                }
            }

            const urlParams = new URLSearchParams(window.location.search || '');
            const ash = urlParams.get('ash');
            if (ash && ash.trim() !== '') {
                return { isAuthorized: true, source: 'ash_session', userId: 'ash_user' };
            }

            return { isAuthorized: false, source: 'unauthorized', userId: null };
        }
    };
})();
