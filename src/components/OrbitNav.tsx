import React from 'react';

export interface SatelliteItem {
  id: 'ods' | 'n8n' | 'index';
  label: string;
  icon: string;
  subtitle: string;
}

interface OrbitNavProps {
  satellites: SatelliteItem[];
  activeSatelliteId: 'ods' | 'n8n' | 'index';
  onSelectSatellite: (id: 'ods' | 'n8n' | 'index') => void;
  onOpenStudio: () => void;
}

export const OrbitNav: React.FC<OrbitNavProps> = ({
  satellites,
  activeSatelliteId,
  onSelectSatellite,
  onOpenStudio,
}) => {
  return (
    <div
      id="orbit-viewport"
      className="relative flex-1 w-full flex flex-col items-center justify-center select-none overflow-hidden px-4 py-8"
    >
      {/* Background Decorative Dashed Orbit Ring */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
        <div className="absolute inset-0 border border-slate-300 border-dashed rounded-full animate-[spin_60s_linear_infinite] opacity-60"></div>
        <div className="absolute inset-6 border border-slate-200 rounded-full"></div>

        {/* Center Core Button */}
        <button
          onClick={onOpenStudio}
          id="core-trigger"
          className="w-28 h-28 rounded-full bg-slate-950 text-white flex flex-col items-center justify-center shadow-xl z-10 border-4 border-white ring-4 ring-slate-900/10 hover:ring-slate-900/20 active:scale-95 transition-all group cursor-pointer"
          title="Apri Studio Assistant"
        >
          <span className="text-white font-black text-xs uppercase tracking-tighter group-hover:scale-105 transition-transform">
            CORE
          </span>
          <span className="text-slate-400 text-[8px] font-extrabold uppercase tracking-widest mt-0.5">
            READY
          </span>
        </button>

        {/* Orbit Satellites Positioned On Ring */}
        {/* Top Satellite (ODS) */}
        <button
          onClick={() => onSelectSatellite('ods')}
          className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-200 cursor-pointer ${
            activeSatelliteId === 'ods'
              ? 'bg-slate-950 text-white border-2 border-slate-950 scale-110'
              : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-400'
          }`}
          title="Generatore OdS"
        >
          <span className="text-[10px] font-black uppercase tracking-tight">ODS</span>
        </button>

        {/* Bottom Left Satellite (n8n) */}
        <button
          onClick={() => onSelectSatellite('n8n')}
          className={`absolute bottom-6 left-2 -translate-x-1/2 w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-200 cursor-pointer ${
            activeSatelliteId === 'n8n'
              ? 'bg-slate-950 text-white border-2 border-slate-950 scale-110'
              : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-400'
          }`}
          title="Linter n8n"
        >
          <span className="text-[10px] font-black uppercase tracking-tight">n8n</span>
        </button>

        {/* Bottom Right Satellite (Index) */}
        <button
          onClick={() => onSelectSatellite('index')}
          className={`absolute bottom-6 right-2 translate-x-1/2 w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-200 cursor-pointer ${
            activeSatelliteId === 'index'
              ? 'bg-slate-950 text-white border-2 border-slate-950 scale-110'
              : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-400'
          }`}
          title="Indice Semantico"
        >
          <span className="text-[10px] font-black uppercase tracking-tight">IDX</span>
        </button>
      </div>

      {/* ACTIVE SATELLITE QUICK LAUNCH CARD */}
      <div className="mt-10 w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-5 shadow-xs flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-2xl bg-slate-100 text-slate-950 flex items-center justify-center shrink-0">
            <i
              className={`fas ${
                satellites.find((s) => s.id === activeSatelliteId)?.icon || 'fa-sliders'
              } text-xs`}
            ></i>
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-wide text-slate-950 truncate">
              {satellites.find((s) => s.id === activeSatelliteId)?.label}
            </p>
            <p className="text-[9px] text-slate-500 truncate">
              {satellites.find((s) => s.id === activeSatelliteId)?.subtitle}
            </p>
          </div>
        </div>
        <button
          onClick={onOpenStudio}
          className="bg-slate-950 text-white text-[9px] font-black px-4 py-2.5 rounded-2xl uppercase tracking-widest shrink-0 active:scale-95 transition cursor-pointer shadow-xs"
        >
          AVVIA
        </button>
      </div>
    </div>
  );
};

