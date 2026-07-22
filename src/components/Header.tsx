import React from 'react';
import { OwnerSession } from '../types';

interface HeaderProps {
  session: OwnerSession | null;
  onOpenSettings: () => void;
  onOpenDrawer: () => void;
  activeModuleTitle: string;
  activeModule: 'ods' | 'n8n' | 'index';
  onSelectModule: (module: 'ods' | 'n8n' | 'index') => void;
}

export const Header: React.FC<HeaderProps> = ({
  session,
  onOpenSettings,
  onOpenDrawer,
  activeModule,
  onSelectModule,
}) => {
  return (
    <header className="h-16 shrink-0 border-b border-slate-200 bg-white/90 backdrop-blur-md px-4 sm:px-8 flex justify-between items-center z-50 select-none">
      <div className="flex items-center gap-4 sm:gap-6">
        {/* LOGO BADGE */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-slate-950 flex items-center justify-center rounded-lg shadow-xs shrink-0">
            <span className="text-white font-black text-xs tracking-tighter">SB</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xs font-black uppercase tracking-tighter text-slate-950 leading-none">
              SITEBOS_ADMIN_ASSISTANT
            </h1>
            <p
              id="app-status-badge"
              className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 leading-none"
            >
              v3.6.0-flash // {session?.isAuthenticated ? 'kernel_active' : 'connecting'}
            </p>
          </div>
        </div>

        <div className="h-6 w-px bg-slate-200 hidden md:block"></div>

        {/* TOP NAV TABS */}
        <nav className="hidden md:flex gap-6 items-center">
          <button
            onClick={() => onSelectModule('ods')}
            className={`text-[10px] font-black uppercase tracking-widest py-5 cursor-pointer transition-colors ${
              activeModule === 'ods'
                ? 'text-slate-950 border-b-2 border-slate-950'
                : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            Studio OdS
          </button>
          <button
            onClick={() => onSelectModule('n8n')}
            className={`text-[10px] font-black uppercase tracking-widest py-5 cursor-pointer transition-colors ${
              activeModule === 'n8n'
                ? 'text-slate-950 border-b-2 border-slate-950'
                : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            Linter n8n
          </button>
          <button
            onClick={() => onSelectModule('index')}
            className={`text-[10px] font-black uppercase tracking-widest py-5 cursor-pointer transition-colors ${
              activeModule === 'index'
                ? 'text-slate-950 border-b-2 border-slate-950'
                : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            Indice Semantico
          </button>
        </nav>
      </div>

      {/* RIGHT CONTROLS */}
      <div className="flex items-center gap-3">
        {/* AUTHORIZED BADGE */}
        <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-900">
            System: {session?.isAuthenticated ? 'Authorized' : 'Connecting'}
          </span>
        </div>

        {/* DRAWER TRIGGER FOR MOBILE */}
        <button
          onClick={onOpenDrawer}
          className="md:hidden w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center bg-white text-slate-900 active:bg-slate-100 transition shadow-xs cursor-pointer"
          title="Apri Studio Drawer"
          id="btn-open-drawer"
        >
          <i className="fas fa-terminal text-xs"></i>
        </button>

        {/* SETTINGS / AI AVATAR BUTTON */}
        <button
          onClick={onOpenSettings}
          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center bg-white text-slate-950 hover:bg-slate-100 active:scale-95 transition shadow-xs cursor-pointer font-black text-[10px]"
          title="Configurazione Chiavi AI"
          id="btn-open-settings"
        >
          AI
        </button>
      </div>
    </header>
  );
};

