import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { SelectorResult, OdsDocument } from '../types';

interface StudioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeModule: 'ods' | 'n8n' | 'index';
  onGenerateOdS: (prompt: string) => Promise<void>;
  isGenerating: boolean;
  selectorResult: SelectorResult | null;
  currentDocument: OdsDocument | null;
  onUpdateMarkdown: (newContent: string) => void;
  onCommit: () => Promise<void>;
  isCommitting: boolean;
  generatedWorkflowJson: any;
}

export const StudioDrawer: React.FC<StudioDrawerProps> = ({
  isOpen,
  onClose,
  activeModule,
  onGenerateOdS,
  isGenerating,
  selectorResult,
  currentDocument,
  onUpdateMarkdown,
  onCommit,
  isCommitting,
  generatedWorkflowJson,
}) => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'editor' | 'preview'>('prompt');
  const [userPrompt, setUserPrompt] = useState(
    "Aggiungi un booleano nel catalogo per filtrare le SOP per l'assistente sicurezza nel frontend edit-product.html e nel workflow n8n editProduct.json."
  );
  const [renderedHtml, setRenderedHtml] = useState('');

  // Update rendered HTML when preview tab or markdown changes
  useEffect(() => {
    if (currentDocument?.markdownContent) {
      try {
        const parsed = marked.parse(currentDocument.markdownContent);
        if (typeof parsed === 'string') {
          setRenderedHtml(parsed);
        } else {
          parsed.then((res) => setRenderedHtml(res));
        }
      } catch (err) {
        setRenderedHtml('<p class="text-red-500">Errore nel rendering del Markdown</p>');
      }
    } else {
      setRenderedHtml(
        '<p class="text-slate-400 text-xs italic">Nessun documento OdS generato. Inserisci un prompt per iniziare.</p>'
      );
    }
  }, [currentDocument?.markdownContent]);

  if (!isOpen) return null;

  const handleRunPipeline = async () => {
    if (!userPrompt.trim()) return;
    await onGenerateOdS(userPrompt);
    setActiveTab('preview');
  };

  const handleCopyMarkdown = () => {
    if (currentDocument?.markdownContent) {
      navigator.clipboard.writeText(currentDocument.markdownContent);
      alert('Sorgente Markdown OdS copiata negli appunti!');
    }
  };

  const handleCopyWorkflowJson = () => {
    if (!generatedWorkflowJson) {
      alert('Nessun workflow n8n generato per questa sessione.');
      return;
    }
    navigator.clipboard.writeText(JSON.stringify(generatedWorkflowJson, null, 2));
    alert('JSON del Workflow n8n copiato! Ora puoi incollarlo (Ctrl+V) sul Canvas di n8n.');
  };

  return (
    <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex flex-col justify-end transition-opacity duration-300">
      <div
        className="w-full h-[94dvh] max-w-6xl mx-auto bg-white border-t md:border border-slate-200 rounded-t-3xl md:rounded-3xl flex flex-col justify-between shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300"
        id="studio-drawer-container"
      >
        {/* STUDIO HEADER */}
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-white shrink-0 select-none">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-950 flex items-center justify-center rounded-lg text-white font-black text-xs">
              SB
            </div>
            <div>
              <h2 className="text-xs font-black uppercase tracking-tight text-slate-950 flex items-center gap-2">
                STUDIO ASSISTANT
                <span className="text-[8px] bg-slate-100 text-slate-800 border border-slate-200 px-2 py-0.5 rounded-full font-bold">
                  {currentDocument?.slug || 'PRONTO'}
                </span>
              </h2>
              <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">
                GENERATORE ODS & WORKFLOW ENGINE
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 bg-white hover:bg-slate-100 active:scale-95 transition cursor-pointer"
            id="btn-close-studio"
          >
            <i className="fas fa-times text-xs"></i>
          </button>
        </div>

        {/* MOBILE SUB-NAV TAB SELECTOR */}
        <div className="flex md:hidden border-b border-slate-200 bg-white shrink-0 select-none">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`flex-1 py-3 text-[9px] font-black uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'prompt'
                ? 'text-slate-950 border-slate-950 bg-slate-50'
                : 'text-slate-400 border-transparent'
            }`}
          >
            1. Prompt
          </button>
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex-1 py-3 text-[9px] font-black uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'editor'
                ? 'text-slate-950 border-slate-950 bg-slate-50'
                : 'text-slate-400 border-transparent'
            }`}
          >
            2. Sorgente
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-3 text-[9px] font-black uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'preview'
                ? 'text-slate-950 border-slate-950 bg-slate-50'
                : 'text-slate-400 border-transparent'
            }`}
          >
            3. Anteprima
          </button>
        </div>

        {/* WORKSPACE AREA: DESKTOP GRID OR MOBILE TABS */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-slate-50/50">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT COLUMN: INPUT BUFFER & PROMPT DESIGNER */}
            <div
              className={`flex-col gap-4 ${
                activeTab === 'prompt' || activeTab === 'editor' ? 'flex' : 'hidden md:flex'
              }`}
            >
              <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-5 shadow-xs flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    Input Buffer
                  </span>
                  <span className="text-[8px] bg-slate-100 px-2.5 py-1 rounded-md font-bold uppercase text-slate-600 border border-slate-200">
                    Drafting
                  </span>
                </div>

                <div className="space-y-3 flex-1 flex flex-col">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-600 block">
                    Richiesta di Sviluppo / Specifiche Operative
                  </label>
                  <textarea
                    id="user-prompt-input"
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    rows={5}
                    className="w-full flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-950 font-mono focus:outline-none focus:border-slate-950 leading-relaxed resize-none"
                    placeholder="Enter your development request..."
                  ></textarea>

                  {/* QUICK SUGGESTIONS */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[
                      'Aggiungi booleano filtro sicurezza nel catalogo',
                      'Integra controllo token ASH per Telegram WebApp',
                      'Genera guida passo-passo per nuovo nodo MongoDB',
                    ].map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => setUserPrompt(sug)}
                        className="text-[8px] font-bold uppercase bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg hover:border-slate-900 transition cursor-pointer"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SELECTOR AGENT RESULT PREVIEW */}
                {selectorResult && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5 text-[10px]">
                    <span className="text-[8px] font-black uppercase text-slate-400 block">
                      Target Identified
                    </span>
                    <p className="font-bold text-slate-950">
                      {selectorResult.funzionalita_identificata}
                    </p>
                  </div>
                )}

                <button
                  onClick={handleRunPipeline}
                  disabled={isGenerating || !userPrompt.trim()}
                  className="h-14 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] shadow-lg shadow-slate-200 hover:bg-slate-900 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer w-full"
                >
                  {isGenerating ? (
                    <>
                      <i className="fas fa-spinner fa-spin text-xs"></i>
                      Generazione OdS in corso...
                    </>
                  ) : (
                    'Generate Service Order (OdS)'
                  )}
                </button>
              </div>

              {/* MARKDOWN EDITABLE SOURCE */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs flex flex-col space-y-2">
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-[9px] font-black uppercase text-slate-400">
                    Sorgente Markdown
                  </span>
                  <button
                    onClick={handleCopyMarkdown}
                    className="text-[8px] font-bold uppercase bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md text-slate-900 hover:bg-slate-200 transition cursor-pointer"
                  >
                    <i className="fas fa-copy mr-1"></i> Copia MD
                  </button>
                </div>
                <textarea
                  value={currentDocument?.markdownContent || ''}
                  onChange={(e) => onUpdateMarkdown(e.target.value)}
                  className="w-full h-32 bg-slate-950 text-slate-100 font-mono text-[10px] p-3 rounded-2xl border border-slate-800 focus:outline-none resize-none leading-relaxed"
                  placeholder="Nessun sorgente generato."
                ></textarea>
              </div>
            </div>

            {/* RIGHT COLUMN: LIVE PREVIEW & WORKFLOW ACTION CARD */}
            <div
              className={`flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs ${
                activeTab === 'preview' ? 'flex' : 'hidden md:flex'
              }`}
            >
              <div className="px-6 py-3.5 border-b border-slate-100 flex justify-between items-center shrink-0 bg-slate-50/50">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                  Rendered Preview
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyWorkflowJson}
                    className="text-[8px] font-black bg-white border border-slate-200 px-3 py-1.5 rounded-md uppercase text-slate-900 hover:bg-slate-50 transition cursor-pointer"
                  >
                    Copy JSON
                  </button>
                  <button
                    onClick={onCommit}
                    disabled={isCommitting || !currentDocument}
                    className="text-[8px] font-black bg-slate-950 text-white px-3 py-1.5 rounded-md uppercase tracking-wider hover:bg-slate-800 transition disabled:opacity-50 cursor-pointer flex items-center gap-1"
                  >
                    {isCommitting ? (
                      <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                      'Approve & Commit'
                    )}
                  </button>
                </div>
              </div>

              {/* RENDERED ODS DOCUMENT AREA */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <div
                  id="ods-rendered-view"
                  className="prose-ods text-slate-700 text-xs leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderedHtml }}
                />

                {/* WORKFLOW N8N GENERATED CARD */}
                {generatedWorkflowJson && (
                  <div className="p-4 bg-slate-950 text-white rounded-2xl space-y-2.5 border border-slate-900 mt-6 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 flex items-center gap-2">
                        <i className="fas fa-diagram-project text-white"></i>
                        Workflow n8n Ready ({generatedWorkflowJson.nodes?.length || 0} nodi)
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400">
                      Standard SiteBoS applicati: Ash Decoder, alwaysOutputData: true, Merge combineAll.
                    </p>
                    <button
                      onClick={handleCopyWorkflowJson}
                      className="w-full bg-white text-slate-950 font-black py-2.5 rounded-xl text-[9px] uppercase tracking-wider hover:bg-slate-100 active:scale-95 transition cursor-pointer"
                    >
                      <i className="fas fa-paste text-xs mr-1"></i> Copia JSON per Canvas n8n
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-slate-400 shrink-0">
          <span>SiTeBoS Studio // Gemini 3.6 Flash</span>
          <span>Status: Active</span>
        </div>
      </div>
    </div>
  );
};

