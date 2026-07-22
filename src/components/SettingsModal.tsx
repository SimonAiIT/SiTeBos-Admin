import React from 'react';
import { OwnerSession } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  session: OwnerSession | null;
  onRefreshKeys: () => Promise<void>;
  isRefreshing: boolean;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  session,
  onRefreshKeys,
  isRefreshing,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-slate-950 text-white flex items-center justify-center">
              <i className="fas fa-key text-xs"></i>
            </div>
            <div>
              <h2 className="text-xs font-black uppercase text-slate-950">
                CONFIGURAZIONE SESSIONE TWA
              </h2>
              <p className="text-[9px] font-bold uppercase text-slate-500">
                IN-MEMORY CREDENTIAL MANAGER
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 bg-white hover:bg-slate-100 transition cursor-pointer"
          >
            <i className="fas fa-times text-xs"></i>
          </button>
        </div>

        {/* SECURITY ARCHITECTURE INFO */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-[10px] space-y-1.5">
          <span className="font-extrabold uppercase text-slate-900 block flex items-center gap-1">
            <i className="fas fa-shield-halved text-emerald-600"></i>
            Architettura Zero-Hardcoding
          </span>
          <p className="text-slate-600 leading-relaxed">
            Le credenziali API (<code className="bg-slate-200 px-1 rounded text-slate-900 font-mono">gemini_key</code> e <code className="bg-slate-200 px-1 rounded text-slate-900 font-mono">github_token</code>) risiedono esclusivamente nella RAM JS della sessione attiva.
          </p>
        </div>

        {/* ACTIVE SESSION DETAILS */}
        <div className="space-y-2 text-[10px]">
          <div className="flex justify-between items-center p-2.5 bg-white border border-slate-200 rounded-xl">
            <span className="font-extrabold uppercase text-slate-500">Stato Autenticazione:</span>
            <span className="font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              {session?.isAuthenticated ? 'AUTENTICATO' : 'IN ATTESA'}
            </span>
          </div>

          <div className="flex justify-between items-center p-2.5 bg-white border border-slate-200 rounded-xl">
            <span className="font-extrabold uppercase text-slate-500">Sorgente Chiavi:</span>
            <span className="font-mono text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">
              {session?.source === 'n8n_webhook' ? 'n8n Webhook Auth' : 'Environment Vault'}
            </span>
          </div>

          <div className="flex justify-between items-center p-2.5 bg-white border border-slate-200 rounded-xl">
            <span className="font-extrabold uppercase text-slate-500">ID Owner Telegram:</span>
            <span className="font-mono text-slate-900">{session?.ownerId || 'owner_sitebos_01'}</span>
          </div>
        </div>

        <button
          onClick={onRefreshKeys}
          disabled={isRefreshing}
          className="w-full bg-slate-950 text-white font-black py-3 rounded-2xl text-[9px] uppercase tracking-widest shadow-md active:scale-95 transition disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isRefreshing ? (
            <>
              <i className="fas fa-spinner fa-spin text-xs"></i>
              RI-SINCRONIZZAZIONE IN CORSO...
            </>
          ) : (
            <>
              <i className="fas fa-rotate text-xs"></i>
              RI-SINCRONIZZA CHIAVI DA WEBHOOK N8N
            </>
          )}
        </button>
      </div>
    </div>
  );
};
