import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { OrbitNav, SatelliteItem } from './components/OrbitNav';
import { StudioDrawer } from './components/StudioDrawer';
import { N8nLinterCard } from './components/N8nLinterCard';
import { SemanticIndexViewer } from './components/SemanticIndexViewer';
import { SettingsModal } from './components/SettingsModal';
import {
  OwnerSession,
  SelectorResult,
  OdsDocument,
  N8nLintReport,
  SemanticIndexEntry,
} from './types';
import { INITIAL_SEMANTIC_INDEX } from './data/semanticIndex';

export default function App() {
  const [session, setSession] = useState<OwnerSession | null>(null);
  const [activeSatellite, setActiveSatellite] = useState<'ods' | 'n8n' | 'index' | 'docs'>('ods');
  const [isStudioOpen, setIsStudioOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isCommitting, setIsCommitting] = useState<boolean>(false);
  const [isLinting, setIsLinting] = useState<boolean>(false);
  const [isRefreshingKeys, setIsRefreshingKeys] = useState<boolean>(false);

  const [selectorResult, setSelectorResult] = useState<SelectorResult | null>(null);
  const [currentDocument, setCurrentDocument] = useState<OdsDocument | null>(null);
  const [generatedWorkflowJson, setGeneratedWorkflowJson] = useState<any | null>(null);
  const [lintReport, setLintReport] = useState<N8nLintReport | null>(null);
  const [semanticEntries] = useState<SemanticIndexEntry[]>(INITIAL_SEMANTIC_INDEX);

  const satellites: SatelliteItem[] = [
    {
      id: 'ods',
      label: 'GENERATORE ODS',
      icon: 'fa-file-signature',
      subtitle: 'Crea Ordini di Servizio in Markdown & Workflow n8n',
    },
    {
      id: 'n8n',
      label: 'LINTER N8N WORKFLOW',
      icon: 'fa-diagram-project',
      subtitle: 'Analisi & Refactoring standard n8n_development_standards.md',
    },
    {
      id: 'index',
      label: 'INDICE SEMANTICO',
      icon: 'fa-book-bookmark',
      subtitle: 'Mappatura conversazionale frasi utente ➔ file repo',
    },
    {
      id: 'docs',
      label: 'DOCS MAINTAINER',
      icon: 'fa-folder-tree',
      subtitle: 'Sincronizzazione e aggiornamento della documentazione viva in docs/',
    },
  ];

  // Authenticate session on boot (Reads Telegram initData or ASH)
  useEffect(() => {
    fetchSessionKeys();
  }, []);

  const fetchSessionKeys = async () => {
    setIsRefreshingKeys(true);
    try {
      const tg = (window as any).Telegram?.WebApp;
      if (tg) {
        tg.ready();
        tg.expand();
      }

      const initData = tg?.initData || '';
      const urlParams = new URLSearchParams(window.location.search);
      const ash = urlParams.get('ash') || '';

      const response = await fetch('/api/auth/n8n-keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _auth: initData, ash, action: 'get_dev_assistant_keys' }),
      });

      if (response.ok) {
        const data = await response.json();
        setSession({
          geminiKey: data.gemini_key,
          githubToken: data.github_token,
          githubTokenStructure: data.github_token_structure,
          githubTokenAdmin: data.github_token_admin,
          mongoUri: data.mongo_uri,
          ownerId: data.owner_id || 'owner_sitebos_admin',
          vatNumber: data.vat_number,
          isAuthenticated: true,
          source: data.source || 'environment',
        });
      } else {
        setSession({
          geminiKey: '',
          githubToken: '',
          githubTokenStructure: '',
          githubTokenAdmin: '',
          mongoUri: '',
          ownerId: '',
          isAuthenticated: false,
          source: 'unauthenticated',
        });
      }
    } catch (err) {
      console.warn('Session auth error:', err);
      setSession({
        geminiKey: '',
        githubToken: '',
        githubTokenStructure: '',
        githubTokenAdmin: '',
        mongoUri: '',
        ownerId: '',
        isAuthenticated: false,
        source: 'unauthenticated',
      });
    } finally {
      setIsRefreshingKeys(false);
    }
  };

  // Run Phase 1 (Selector) & Phase 2 (Architect OdS)
  const handleGenerateOdS = async (prompt: string) => {
    setIsGenerating(true);
    setSelectorResult(null);

    try {
      // Step 1: Run Selector
      const selectorRes = await fetch('/api/gemini/selector', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          customApiKey: session?.geminiKey,
        }),
      });

      let selData: SelectorResult | null = null;
      if (selectorRes.ok) {
        const selJson = await selectorRes.json();
        selData = selJson.result;
        setSelectorResult(selData);
      }

      // Step 2: Run Architect OdS Generation
      const architectRes = await fetch('/api/gemini/architect-ods', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          selectedFiles: selData,
          customApiKey: session?.geminiKey,
        }),
      });

      if (architectRes.ok) {
        const archJson = await architectRes.json();
        const slug = (selData?.funzionalita_identificata || prompt)
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '-')
          .slice(0, 30);

        setCurrentDocument({
          id: `ods-${Date.now()}`,
          slug,
          title: prompt,
          createdAt: new Date().toLocaleDateString('it-IT'),
          markdownContent: archJson.odsMarkdown,
          workflowJson: archJson.workflowJson,
          status: 'draft',
        });

        setGeneratedWorkflowJson(archJson.workflowJson);
      }
    } catch (err: any) {
      alert(`Errore generazione OdS: ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Run n8n Linter
  const handleRunLinter = async (workflowJson: any) => {
    setIsLinting(true);
    try {
      const response = await fetch('/api/gemini/n8n-engineer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workflowJson,
          customApiKey: session?.geminiKey,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setLintReport(data.report);
      }
    } catch (err: any) {
      alert(`Errore durante il linting: ${err.message}`);
    } finally {
      setIsLinting(false);
    }
  };

  // Commit OdS & Workflow to GitHub OdS/ folder
  const handleCommitToGitHub = async () => {
    if (!currentDocument) return;
    setIsCommitting(true);
    try {
      const response = await fetch('/api/github/commit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: currentDocument.slug,
          odsMarkdown: currentDocument.markdownContent,
          workflowJson: generatedWorkflowJson,
          commitMessage: `feat(ods): add ${currentDocument.slug} specifications and workflow`,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(
          `✅ Commit registrato con successo!\n\nFile salvati:\n• ${data.committedFiles[0].path}\n• ${data.committedFiles[1].path}`
        );
        setCurrentDocument((prev) => (prev ? { ...prev, status: 'committed' } : null));
        setIsStudioOpen(false);
      }
    } catch (err: any) {
      alert(`Errore commit: ${err.message}`);
    } finally {
      setIsCommitting(false);
    }
  };

  if (session && !session.isAuthenticated) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-950 text-slate-100 p-6">
        <div className="max-w-md w-full p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-center space-y-4">
          <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto text-red-500 text-3xl">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h1 className="text-xl font-bold uppercase tracking-wide text-red-400">Accesso Riservato Admin</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Questa console amministrativa è protetta ed accessibile esclusivamente tramite l'applicazione Telegram autorizzata con sessione verificata.
          </p>
          <div className="pt-2 text-xs font-mono text-slate-500 border-t border-slate-800">
            Sessione non valida • SiTeBoS Security Guard
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* TOP HEADER */}
      <Header
        session={session}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenDrawer={() => setIsStudioOpen(true)}
        activeModuleTitle={
          satellites.find((s) => s.id === activeSatellite)?.label || 'STUDIO'
        }
        activeModule={activeSatellite}
        onSelectModule={(mod) => {
          setActiveSatellite(mod);
          if (mod === 'ods') setIsStudioOpen(true);
        }}
      />

      {/* MAIN SPLIT VIEW (COMMAND ORBIT SIDEBAR + WORKSPACE) */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT COMMAND ORBIT SIDEBAR (DESKTOP) */}
        <aside className="w-72 lg:w-80 shrink-0 border-r border-slate-200 bg-white/50 p-6 flex flex-col justify-between overflow-y-auto hidden md:flex select-none">
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 block">
              Command Orbit Hub
            </span>

            {/* ORBIT GRAPHIC */}
            <div className="relative w-full aspect-square flex items-center justify-center my-2">
              <div className="absolute inset-0 border border-slate-200 border-dashed rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-8 border border-slate-100 rounded-full"></div>

              {/* CORE READY BUTTON */}
              <button
                onClick={() => setIsStudioOpen(true)}
                className="w-20 h-20 rounded-full bg-slate-950 text-white flex flex-col items-center justify-center shadow-xl z-10 border-4 border-white cursor-pointer active:scale-95 transition-transform"
                title="Apri Studio Drawer"
              >
                <span className="text-[10px] font-black uppercase tracking-tight">CORE</span>
                <span className="text-[7px] text-slate-400 font-extrabold uppercase tracking-widest">
                  READY
                </span>
              </button>

              {/* SATELLITE DOT 1 */}
              <button
                onClick={() => {
                  setActiveSatellite('ods');
                  setIsStudioOpen(true);
                }}
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center font-black text-[9px] shadow-xs cursor-pointer ${
                  activeSatellite === 'ods'
                    ? 'bg-slate-950 text-white border-slate-950'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-slate-400'
                }`}
                title="OdS Studio"
              >
                1
              </button>

              {/* SATELLITE DOT 2 */}
              <button
                onClick={() => setActiveSatellite('n8n')}
                className={`absolute bottom-2 left-2 -translate-x-1/2 w-8 h-8 rounded-full border flex items-center justify-center font-black text-[9px] shadow-xs cursor-pointer ${
                  activeSatellite === 'n8n'
                    ? 'bg-slate-950 text-white border-slate-950'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-slate-400'
                }`}
                title="Linter n8n"
              >
                2
              </button>

              {/* SATELLITE DOT 3 */}
              <button
                onClick={() => setActiveSatellite('index')}
                className={`absolute bottom-2 right-2 translate-x-1/2 w-8 h-8 rounded-full border flex items-center justify-center font-black text-[9px] shadow-xs cursor-pointer ${
                  activeSatellite === 'index'
                    ? 'bg-slate-950 text-white border-slate-950'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-slate-400'
                }`}
                title="Indice Semantico"
              >
                3
              </button>
            </div>

            {/* ACTIVE CONTEXT CARD */}
            <div className="p-4 bg-slate-950 rounded-2xl text-white space-y-1.5 mt-4 shadow-xs">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">
                Active Context
              </span>
              <p className="text-[10px] text-slate-200 leading-relaxed font-mono">
                Repo: <strong className="text-white">SiteBoS-MiniApp</strong>
                <br />
                Branch: <strong className="text-white">main</strong>
                <br />
                Engine: <strong className="text-white">Gemini 3.6 Flash</strong>
              </p>
            </div>

            {/* TOKEN USAGE & SESSION STATS */}
            <div className="p-4 border border-slate-200 rounded-2xl bg-white space-y-2 mt-3 shadow-xs">
              <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-wider text-slate-500">
                <span>Quota Usage</span>
                <span>12%</span>
              </div>
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-950 w-[12%]"></div>
              </div>
            </div>
          </div>

          {/* ENDPOINT PILL */}
          <div className="p-3 bg-slate-100 border border-slate-200 rounded-2xl text-[9px] font-bold text-slate-600 truncate mt-3">
            Endpoint: prod.workflow.trinai.it
          </div>
        </aside>

        {/* RIGHT WORKSPACE VIEWPORT */}
        <main className="flex-1 flex flex-col bg-slate-50/50 overflow-hidden">
          {/* SUB-NAVBAR FOR WORKSPACE MODULES */}
          <div className="h-12 bg-white border-b border-slate-200 flex items-center px-6 gap-6 shrink-0 select-none">
            <button
              onClick={() => {
                setActiveSatellite('ods');
                setIsStudioOpen(true);
              }}
              className={`text-[10px] font-black uppercase tracking-wider cursor-pointer ${
                activeSatellite === 'ods' ? 'text-slate-950' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              1. Generatore OdS
            </button>
            <button
              onClick={() => setActiveSatellite('n8n')}
              className={`text-[10px] font-black uppercase tracking-wider cursor-pointer ${
                activeSatellite === 'n8n' ? 'text-slate-950' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              2. Linter n8n
            </button>
            <button
              onClick={() => setActiveSatellite('index')}
              className={`text-[10px] font-black uppercase tracking-wider cursor-pointer ${
                activeSatellite === 'index' ? 'text-slate-950' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              3. Indice Semantico
            </button>
          </div>

          {/* VIEW CONTENT */}
          <div className="flex-1 p-4 md:p-6 overflow-y-auto">
            {activeSatellite === 'ods' && (
              <OrbitNav
                satellites={satellites}
                activeSatelliteId={activeSatellite}
                onSelectSatellite={(id) => {
                  setActiveSatellite(id);
                  if (id === 'ods') setIsStudioOpen(true);
                }}
                onOpenStudio={() => setIsStudioOpen(true)}
              />
            )}

            {activeSatellite === 'n8n' && (
              <div className="max-w-3xl mx-auto space-y-4">
                <N8nLinterCard
                  onRunLinter={handleRunLinter}
                  isLinting={isLinting}
                  lintReport={lintReport}
                />
              </div>
            )}

            {activeSatellite === 'index' && (
              <div className="max-w-3xl mx-auto space-y-4">
                <SemanticIndexViewer entries={semanticEntries} />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* FOOTER STATUS BAR */}
      <footer className="h-10 bg-slate-950 shrink-0 flex items-center px-6 sm:px-8 justify-between z-50 text-slate-400 select-none border-t border-slate-900">
        <div className="flex items-center gap-6 text-[8px] font-bold uppercase tracking-widest text-slate-400">
          <span>Latency: 240ms</span>
          <span className="hidden sm:inline">Mode: Agentic-Flow</span>
          <span className="hidden sm:inline">Repo: SiteBoS-MiniApp</span>
        </div>
        <div className="flex items-center gap-6 text-[8px] font-bold uppercase tracking-widest text-slate-200">
          <span>Session: AC_9942_XRT</span>
          <span className="hidden sm:inline">Keys: In-Memory-Active</span>
        </div>
      </footer>

      {/* FULLSCREEN STUDIO DRAWER */}
      <StudioDrawer
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        activeModule={activeSatellite}
        onGenerateOdS={handleGenerateOdS}
        isGenerating={isGenerating}
        selectorResult={selectorResult}
        currentDocument={currentDocument}
        onUpdateMarkdown={(newContent) =>
          setCurrentDocument((prev) => (prev ? { ...prev, markdownContent: newContent } : null))
        }
        onCommit={handleCommitToGitHub}
        isCommitting={isCommitting}
        generatedWorkflowJson={generatedWorkflowJson}
      />

      {/* SETTINGS / SESSION MODAL */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        session={session}
        onRefreshKeys={fetchSessionKeys}
        isRefreshing={isRefreshingKeys}
      />
    </div>
  );
}

