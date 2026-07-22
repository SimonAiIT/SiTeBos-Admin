// Telegram WebApp Guard + ASH helper (operators only)
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

  function getUrlParams() {
    return new URLSearchParams(window.location.search || '');
  }

  function getAsh() {
    return getUrlParams().get('ash');
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

  function cleanupUrl(allowedKeys = ['ash']) {
    try {
      const url = new URL(window.location.href);
      const next = new URLSearchParams();
      allowedKeys.forEach((k) => {
        const v = url.searchParams.get(k);
        if (v !== null && v !== undefined && v !== '') next.set(k, v);
      });
      const nextUrl = `${url.pathname}${next.toString() ? '?' + next.toString() : ''}${url.hash || ''}`;
      window.history.replaceState({}, '', nextUrl);
    } catch (_) {}
  }

  function authPayload(extra = {}) {
    const tg = requireTelegramWebApp();
    const ash = getAsh();
    return {
      _auth: tg ? tg.initData : undefined,
      ...(ash ? { ash } : {}),
      ...extra
    };
  }

  function patchFetchJson(extra = {}) {
    const _fetch = window.fetch;
    window.fetch = async function (input, init = {}) {
      const method = (init.method || 'GET').toUpperCase();
      const isJson = init.headers && (
        (init.headers['Content-Type'] || init.headers['content-type']) === 'application/json'
      );
      if (method !== 'POST' || !isJson || !init.body || typeof init.body !== 'string') {
        return _fetch(input, init);
      }
      try {
        const parsed = JSON.parse(init.body);
        const next = { ...authPayload(extra), ...parsed };
        return _fetch(input, { ...init, body: JSON.stringify(next) });
      } catch (_) {
        return _fetch(input, init);
      }
    };
  }

  window.TwaGuard = {
    getTg,
    requireTelegramWebApp,
    getAsh,
    requireAsh,
    cleanupUrl,
    authPayload,
    patchFetchJson
  };
})();

