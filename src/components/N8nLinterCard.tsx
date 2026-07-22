import React, { useState } from 'react';
import { N8nLintReport } from '../types';

interface N8nLinterCardProps {
  onRunLinter: (workflowJson: any) => Promise<void>;
  isLinting: boolean;
  lintReport: N8nLintReport | null;
}

export const N8nLinterCard: React.FC<N8nLinterCardProps> = ({
  onRunLinter,
  isLinting,
  lintReport,
}) => {
  const [inputJsonText, setInputJsonText] = useState('');
  const [jsonError, setJsonError] = useState('');

  const handleLintClick = () => {
    setJsonError('');
    if (!inputJsonText.trim()) {
      setJsonError('Inserisci un JSON valido di un workflow n8n.');
      return;
    }
    try {
      const parsed = JSON.parse(inputJsonText);
      onRunLinter(parsed);
    } catch (err: any) {
      setJsonError(`Sintassi JSON non valida: ${err.message}`);
    }
  };

  const handlePasteSample = () => {
    const sampleWorkflow = {
      name: "Sample Catalog Update",
      nodes: [
        {
          id: "webhook-node",
          name: "Webhook",
          type: "n8n-nodes-base.webhook",
          position: [100, 200]
        },
        {
          id: "mongo-node",
          name: "MongoDB Update",
          type: "n8n-nodes-base.mongoDb",
          parameters: {
            collection: "service_catalog"
          },
          position: [350, 200]
        }
      ],
      connections: {
        "Webhook": {
          main: [[{ node: "MongoDB Update", type: "main", index: 0 }]]
        }
      }
    };
    setInputJsonText(JSON.stringify(sampleWorkflow, null, 2));
    setJsonError('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-4">
      <div className="flex justify-between items-center border-b border-slate-200 pb-3 select-none">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-slate-950 text-white flex items-center justify-center">
            <i className="fas fa-diagram-project text-xs"></i>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase text-slate-950">
              LINTER N8N WORKFLOW
            </h2>
            <p className="text-[9px] font-bold uppercase text-slate-500">
              VERIFICA STANDARD n8n_development_standards.md
            </p>
          </div>
        </div>
        <button
          onClick={handlePasteSample}
          className="text-[8px] font-bold uppercase bg-slate-100 text-slate-900 border border-slate-200 px-2.5 py-1 rounded-lg hover:bg-slate-200 transition cursor-pointer"
        >
          Carica Esempio
        </button>
      </div>

      <div className="space-y-2">
        <label className="text-[9px] font-black uppercase tracking-widest text-slate-600 block">
          Incolla o Carica il JSON del Workflow n8n
        </label>
        <textarea
          rows={6}
          value={inputJsonText}
          onChange={(e) => setInputJsonText(e.target.value)}
          placeholder={`{\n  "nodes": [...],\n  "connections": {...}\n}`}
          className="w-full bg-slate-950 text-slate-100 font-mono text-[10px] p-3 rounded-2xl border border-slate-800 focus:outline-none leading-relaxed resize-none"
        ></textarea>
        {jsonError && (
          <p className="text-[9px] font-bold text-red-600 uppercase flex items-center gap-1">
            <i className="fas fa-circle-exclamation"></i> {jsonError}
          </p>
        )}
      </div>

      <button
        onClick={handleLintClick}
        disabled={isLinting || !inputJsonText.trim()}
        className="w-full bg-slate-950 text-white font-black py-3 rounded-2xl text-[9px] uppercase tracking-widest shadow-md active:scale-95 transition disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
      >
        {isLinting ? (
          <>
            <i className="fas fa-spinner fa-spin text-xs"></i>
            VERIFICA STANDARD N8N IN CORSO...
          </>
        ) : (
          <>
            <i className="fas fa-microscope text-xs"></i>
            ANALIZZA WORKFLOW CON N8N ENGINEER
          </>
        )}
      </button>

      {/* LINTER REPORT RESULT */}
      {lintReport && (
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 animate-in fade-in duration-200">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-950">
              ESITO ANALISI STANDARD N8N
            </span>
            <span
              className={`text-[8px] font-black uppercase px-2.5 py-1 rounded-full ${
                lintReport.isValid
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              {lintReport.isValid ? 'CONFORME AL 100%' : 'ATTENZIONE: VIOLAZIONI RILEVATE'}
            </span>
          </div>

          {/* STANDARDS CHECKED PILLS */}
          <div className="flex flex-wrap gap-1">
            {lintReport.standardsChecked?.map((std, i) => (
              <span
                key={i}
                className="text-[7px] font-bold uppercase bg-white border border-slate-200 px-2 py-0.5 rounded-md text-slate-700"
              >
                ✓ {std}
              </span>
            ))}
          </div>

          {/* VIOLATIONS LIST */}
          <div className="space-y-2">
            {lintReport.violations?.map((v, i) => (
              <div
                key={i}
                className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 text-[10px]"
              >
                <div className="flex justify-between items-center">
                  <span className="font-extrabold uppercase text-slate-900 flex items-center gap-1">
                    <i
                      className={`fas ${
                        v.severity === 'error' ? 'fa-triangle-exclamation text-red-500' : 'fa-circle-info text-amber-500'
                      }`}
                    ></i>
                    {v.nodeName ? `Nodo [${v.nodeName}]` : 'Standard Architetturale'}
                  </span>
                  <span className="text-[8px] font-mono bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded">
                    {v.ruleId}
                  </span>
                </div>
                <p className="text-slate-700 font-medium">{v.message}</p>
                <p className="text-slate-500 text-[9px] font-mono bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                  <strong className="text-slate-900 uppercase">Suggerimento:</strong> {v.fixSuggestion}
                </p>
              </div>
            ))}
          </div>

          {/* REFACTORED JSON BUTTON */}
          {lintReport.refactoredWorkflowJson && (
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  JSON.stringify(lintReport.refactoredWorkflowJson, null, 2)
                );
                alert('Workflow n8n Refactored copiato negli appunti! Puoi incollarlo su n8n.');
              }}
              className="w-full bg-slate-950 text-white font-black py-2.5 rounded-xl text-[8px] uppercase tracking-wider active:scale-95 transition cursor-pointer"
            >
              <i className="fas fa-wand-magic-sparkles text-xs mr-1"></i> Copia Workflow
              Refactored per Canvas n8n
            </button>
          )}
        </div>
      )}
    </div>
  );
};
