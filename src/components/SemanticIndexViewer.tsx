import React, { useState } from 'react';
import { SemanticIndexEntry } from '../types';

interface SemanticIndexViewerProps {
  entries: SemanticIndexEntry[];
}

export const SemanticIndexViewer: React.FC<SemanticIndexViewerProps> = ({ entries }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEntries = entries.filter((entry) => {
    const query = searchQuery.toLowerCase();
    return (
      entry.category.toLowerCase().includes(query) ||
      entry.phrases.some((p) => p.toLowerCase().includes(query)) ||
      entry.frontendFiles.some((f) => f.toLowerCase().includes(query)) ||
      entry.backendFiles.some((b) => b.toLowerCase().includes(query))
    );
  });

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-4">
      <div className="flex justify-between items-center border-b border-slate-200 pb-3 select-none">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-slate-950 text-white flex items-center justify-center">
            <i className="fas fa-book-bookmark text-xs"></i>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase text-slate-950">
              INDICE SEMANTICO CONVERSAZIONALE
            </h2>
            <p className="text-[9px] font-bold uppercase text-slate-500">
              MAPPATURA RICHIESTE UTENTE ➔ CODEBASE FILE
            </p>
          </div>
        </div>
        <span className="text-[8px] font-mono bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
          {filteredEntries.length} MODULI
        </span>
      </div>

      <div className="relative">
        <i className="fas fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cerca frasi tipo, file HTML o workflow n8n..."
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-9 pr-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-900"
        />
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto no-scrollbar pr-1">
        {filteredEntries.map((entry, idx) => (
          <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-950"></span>
              {entry.category}
            </h3>

            <div>
              <span className="text-[8px] font-black uppercase text-slate-500 block mb-1">
                Frasi Tipo Riconosciute:
              </span>
              <div className="flex flex-wrap gap-1">
                {entry.phrases.map((phrase, pIdx) => (
                  <span
                    key={pIdx}
                    className="text-[8px] font-medium bg-white border border-slate-200 text-slate-800 px-2 py-0.5 rounded-md"
                  >
                    "{phrase}"
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[9px] pt-1 font-mono">
              <div className="bg-white p-2 rounded-xl border border-slate-200">
                <span className="text-[7px] font-black uppercase text-slate-400 block mb-1">
                  Frontend Target
                </span>
                {entry.frontendFiles.map((f, i) => (
                  <p key={i} className="text-slate-900 truncate">
                    • {f}
                  </p>
                ))}
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-200">
                <span className="text-[7px] font-black uppercase text-slate-400 block mb-1">
                  Backend n8n Target
                </span>
                {entry.backendFiles.map((b, i) => (
                  <p key={i} className="text-slate-900 truncate">
                    • {b}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
