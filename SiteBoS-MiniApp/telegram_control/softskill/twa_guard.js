// Telegram WebApp Guard (softskill only)
(function () {
  'use strict';

  function getTg() {
    return (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;
  }

  function renderDenied(msg) {
    document.body.innerHTML = `
      <div style="
        min-height: 100vh; display:flex; align-items:center; justify-content:center;
        background:#000; color:#fff; padding:24px; text-align:center;
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
        <div>
          <div style="font-size:44px; margin-bottom:12px;">🚫</div>
          <div style="font-weight:900; letter-spacing:0.08em; text-transform:uppercase; font-size:12px; opacity:0.85;">
            Accesso negato
          </div>
          <div style="margin-top:10px; font-size:14px; opacity:0.9;">${msg}</div>
        </div>
      </div>
    `;
  }

  function requireTelegramWebApp({ autoExpand = true } = {}) {
    const tg = getTg();
    if (!tg || !tg.initData) {
      renderDenied('Apri questa pagina solo dentro Telegram.');
      try { window.stop(); } catch (_) {}
      return null;
    }
    try { tg.ready(); } catch (_) {}
    try { if (autoExpand) tg.expand(); } catch (_) {}
    return tg;
  }

  function getAsh() {
    return new URLSearchParams(window.location.search || '').get('ash');
  }

  function getMsgId() {
    return new URLSearchParams(window.location.search || '').get('msg_id');
  }

  function requireAsh() {
    const ash = getAsh();
    if (!ash) {
      renderDenied('Parametro di sessione mancante (ash). Avvia la miniapp dal bot.');
      try { window.stop(); } catch (_) {}
      return null;
    }
    return ash;
  }

  function requireMsgId() {
    const msgId = getMsgId();
    if (!msgId) {
      renderDenied('Parametro messaggio mancante (msg_id).');
      try { window.stop(); } catch (_) {}
      return null;
    }
    return msgId;
  }

  function cleanupUrl() {
    try {
      const url = new URL(window.location.href);
      const ash = url.searchParams.get('ash');
      const msgId = url.searchParams.get('msg_id');
      const moduleParam = url.searchParams.get('module');
      const alone = url.searchParams.get('alone'); // Rileva alone

      const params = new URLSearchParams();
      if (ash) params.set('ash', ash);
      if (msgId) params.set('msg_id', msgId);
      if (moduleParam) params.set('module', moduleParam);
      if (alone) params.set('alone', alone); // Preserva alone

      const nextUrl = `${url.pathname}${params.toString() ? `?${params.toString()}` : ''}${url.hash || ''}`;
      window.history.replaceState({}, '', nextUrl);
    } catch (_) {}
  }

  window.TwaSoftskillGuard = { 
    requireTelegramWebApp, 
    getAsh, 
    requireAsh, 
    getMsgId, 
    requireMsgId, 
    cleanupUrl 
  };
})();

