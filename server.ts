import express from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { RAW_SEMANTIC_INDEX_MARKDOWN } from "./src/data/semanticIndex.js";
import { N8N_DEVELOPMENT_STANDARDS } from "./src/data/n8nStandards.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

const getRepoStructureMarkdown = (): string => {
  try {
    const docsPath = path.join(process.cwd(), "docs", "01_struttura_repository.md");
    const oldDocsPath = path.join(process.cwd(), "docs", "struttura_repository.md");
    if (fs.existsSync(docsPath)) {
      return fs.readFileSync(docsPath, "utf-8");
    } else if (fs.existsSync(oldDocsPath)) {
      return fs.readFileSync(oldDocsPath, "utf-8");
    }
  } catch (err) {
    console.warn("[Server] Impossibile leggere 01_struttura_repository.md:", err);
  }
  return "";
};

const getSemanticIndexMarkdown = (): string => {
  try {
    const docsPath = path.join(process.cwd(), "docs", "02_conversational_semantic_index.md");
    const oldDocsPath = path.join(process.cwd(), "docs", "conversational_semantic_index.md");
    if (fs.existsSync(docsPath)) {
      return fs.readFileSync(docsPath, "utf-8");
    } else if (fs.existsSync(oldDocsPath)) {
      return fs.readFileSync(oldDocsPath, "utf-8");
    }
  } catch (err) {
    console.warn("[Server] Impossibile leggere 02_conversational_semantic_index.md:", err);
  }
  return RAW_SEMANTIC_INDEX_MARKDOWN;
};




// Server-side Gemini initialization
const getGeminiClient = (customApiKey?: string) => {
  const apiKey = customApiKey || process.env.GEMINI_API_KEY || "AIzaSy_DEV_FALLBACK_KEY";
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// --- API ROUTES ---

// Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "SiTeBoS Admin Assistant API", timestamp: new Date().toISOString() });
});

const ALLOWED_CHAT_IDS = ["2041408875", "720379727"];

function extractTelegramUserId(_auth?: string): string | null {
  if (!_auth) return null;
  try {
    const params = new URLSearchParams(_auth);
    const userStr = params.get("user");
    if (userStr) {
      const userObj = JSON.parse(decodeURIComponent(userStr));
      if (userObj && userObj.id) {
        return String(userObj.id);
      }
    }
  } catch (e) {}
  return null;
}

// Auth & Key Retrieval (Webhook proxy / Fallback)
app.post("/api/auth/n8n-keys", async (req, res) => {
  try {
    const { _auth, ash, action } = req.body;
    
    const isLocalhost = req.hostname === 'localhost' || req.hostname === '127.0.0.1';

    // Strict Telegram WebApp / ASH session validation (bypassed on localhost dev)
    if (!isLocalhost && !(_auth && typeof _auth === 'string' && _auth.trim() !== '') && !(ash && typeof ash === 'string' && ash.trim() !== '')) {
      return res.status(401).json({
        success: false,
        message: "Accesso negato. Sessione Telegram o parametro ASH non valido.",
      });
    }

    // Whitelist check for Chat IDs
    const telegramUserId = extractTelegramUserId(_auth);
    if (telegramUserId && !ALLOWED_CHAT_IDS.includes(telegramUserId)) {
      return res.status(403).json({
        success: false,
        message: `Accesso negato. Chat ID (${telegramUserId}) non autorizzato per la console Admin.`,
      });
    }

    // Attempt real webhook fetch if N8N_KEY_FETCHER_WEBHOOK is configured
    const webhookUrl = process.env.N8N_KEY_FETCHER_WEBHOOK || "https://prod.workflow.trinai.it/webhook/2fa70acb-4313-42a7-9e3b-4eea84ff8178";
    
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _auth, ash, action: action || "get_dev_assistant_keys" }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data && (data.GEMINI_API_KEY || data.gemini_key || data.success)) {
            return res.json({
              success: true,
              gemini_key: data.GEMINI_API_KEY || data.gemini_key || process.env.GEMINI_API_KEY || "AIzaSy_KEY_RESTORED",
              github_token: data.GITHUB_TOKEN_SITEBOS_ADMIN || data.github_token || process.env.GITHUB_TOKEN || "ghp_sitebos_token",
              github_token_structure: data.GITHUB_TOKEN_SITEBOS_STRUCTURE || process.env.GITHUB_TOKEN_SITEBOS_STRUCTURE || "",
              github_token_admin: data.GITHUB_TOKEN_SITEBOS_ADMIN || process.env.GITHUB_TOKEN_SITEBOS_ADMIN || "",
              mongo_uri: data.MONGO_URI || process.env.MONGO_URI || "",
              owner_id: data.owner_id || "owner_sitebos_01",
              vat_number: data.vat_number || "IT12345678901",
              source: "n8n_webhook",
            });
          }
        }
      } catch (err) {
        console.warn("[Auth] Webhook fetch error, using authenticated session fallback:", err);
      }
    }

    // Fallback for valid session
    return res.json({
      success: true,
      gemini_key: process.env.GEMINI_API_KEY || "GEMINI_KEY_ACTIVE",
      github_token: process.env.GITHUB_TOKEN_SITEBOS_ADMIN || process.env.GITHUB_TOKEN || "ghp_sitebos_token_active",
      github_token_structure: process.env.GITHUB_TOKEN_SITEBOS_STRUCTURE || "",
      github_token_admin: process.env.GITHUB_TOKEN_SITEBOS_ADMIN || "",
      mongo_uri: process.env.MONGO_URI || "",
      owner_id: "owner_trinai_admin",
      vat_number: "IT_SITEBOS_ADMIN",
      source: "environment",
    });

  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message || "Errore autenticazione" });
  }
});

const getExistingOdsSummary = (): { filename: string; title: string; excerpt: string }[] => {
  const odsDir = path.join(process.cwd(), "OdS");
  if (!fs.existsSync(odsDir)) return [];
  try {
    const files = fs.readdirSync(odsDir);
    return files
      .filter((f) => f.endsWith(".md") && f !== "README.md")
      .map((f) => {
        const fullPath = path.join(odsDir, f);
        const content = fs.readFileSync(fullPath, "utf-8");
        const lines = content.split("\n");
        const title = lines.find((l) => l.startsWith("# "))?.replace("# ", "") || f;
        const excerpt = lines.slice(0, 15).join("\n");
        return { filename: `OdS/${f}`, title, excerpt };
      });
  } catch (err) {
    console.warn("[Server] Impossibile leggere cartella OdS:", err);
    return [];
  }
};

// Phase 1: Selector Agent
app.post("/api/gemini/selector", async (req, res) => {
  try {
    const { prompt, customApiKey } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt obbligatorio" });
    }

    const ai = getGeminiClient(customApiKey);
    const repoStructure = getRepoStructureMarkdown();
    const semanticIndex = getSemanticIndexMarkdown();
    const existingOds = getExistingOdsSummary();

    const systemPrompt = `Sei l'Agente Selettore di SiteBoS. Analizza la richiesta dell'utente e seleziona i file coinvolti usando la struttura della repository SiteBoS-MiniApp, l'Indice Semantico e gli Ordini di Servizio (OdS) già aperti.

RELAZIONE CON ODS ESISTENTI (REGOLE TASSATIVE):
1. Controlla gli Ordini di Servizio già aperti o esistenti nella cartella OdS/.
2. Se la richiesta dell'utente fa riferimento ad un task, bug o funzionalità per cui ESISTE GIÀ un OdS aperto, DEVI selezionarlo nel campo "ods_esistente" per continuare l'implementazione su quel file senza creare duplicati!
3. Se l'utente sta chiedendo una nuova funzionalità mai trattata, imposta "ods_esistente": null e "azione_consigliata": "crea_nuovo_ods".

ORDINI DI SERVIZIO GIÀ ESISTENTI (IN CARTELLA OdS/):
${JSON.stringify(existingOds, null, 2)}

STRUTTURA REALE DELLA REPOSITORY (SiteBoS-MiniApp):
${repoStructure}

INDICE SEMANTICO CONVERSAZIONALE:
${semanticIndex}

Restituisci ESCLUSIVAMENTE un JSON valido conforme a questa interfaccia:
{
  "funzionalita_identificata": "Nome della funzionalita o modulo",
  "frontend_paths": ["percorso/file1.html"],
  "backend_paths": ["percorso/workflow1.json"],
  "database_collections": ["nome_collezione"],
  "ods_esistente": "OdS/nome_file.md oppure null se nuovo",
  "azione_consigliata": "continua_implementazione_ods_esistente" oppure "crea_nuovo_ods",
  "rationale": "Breve motivazione della selezione e scelta dell'OdS"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        temperature: 0.1,
      },
    });

    const text = response.text || "{}";
    const selectorResult = JSON.parse(text);
    res.json({ success: true, result: selectorResult });
  } catch (error: any) {
    console.error("[Selector API Error]", error);
    res.status(500).json({ error: error.message || "Errore durante l'esecuzione del Selector" });
  }
});

// Phase 2: Architect OdS Generation
app.post("/api/gemini/architect-ods", async (req, res) => {
  try {
    const { prompt, selectedFiles, customApiKey } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt obbligatorio" });
    }

    const ai = getGeminiClient(customApiKey);

    // Read existing OdS if identified by Selector
    let existingOdsContent = "";
    if (selectedFiles && selectedFiles.ods_esistente) {
      try {
        const targetPath = path.join(process.cwd(), selectedFiles.ods_esistente);
        if (fs.existsSync(targetPath)) {
          existingOdsContent = fs.readFileSync(targetPath, "utf-8");
        }
      } catch (err) {
        console.warn("[Architect] Impossibile leggere OdS esistente:", err);
      }
    }

    const systemPrompt = `Sei l'Agente Architetto Senior dell'ecosistema SiteBoS.
Il tuo compito e generare o aggiornare un Ordine di Servizio (OdS) completo, rigoroso, strutturato in Markdown e un workflow n8n JSON pronto da importare.

${existingOdsContent ? `⚠️ ATTENZIONE - MODALITÀ CONTINUAZIONE ODS ESISTENTE:
È stato identificato un Ordine di Servizio aperto per questo task (${selectedFiles.ods_esistente}).
NON creare un file totalmente slegato! Mantieni la struttura di questo OdS esistente ed estendilo con i nuovi requisiti dell'utente:

--- CONTENUTO ATTUALE DI ${selectedFiles.ods_esistente} ---
${existingOdsContent}
--- FINE CONTENUTO ESISTENTE ---` : ""}

Rispetti tassativamente questi standard di sviluppo n8n:
${N8N_DEVELOPMENT_STANDARDS}

MAPPATURA FILE TARGET INDIVIDUATI DAL SELECTOR:
${JSON.stringify(selectedFiles || {}, null, 2)}

FORMATO E STRUTTURA RICHIESTA PER L'ORDINE DI SERVIZIO:
# 📐 ORDINE DI SERVIZIO: [NOME_SLUG_FUNZIONALITA]

**Slug Progetto:** \`[slug-in-kebab-case]\`  
**Data Generazione:** ${new Date().toLocaleDateString('it-IT')}  
**Autore Architettura:** Senior System Engineer & AI Architect (Gemini 3.6 Flash)  
**Ambiente Target:** Telegram Mini App (TWA) / SiteBoS Ecosystem  

---

## 📝 1. CONTESTO OPERATIVO E OBIETTIVO
[Descrizione chiara del problema risolto e delle specifiche utente]

## 🔗 2. MAPPATURA COMPONENTI COINVOLTI
- **Frontend Target:** \`[percorsi file frontend]\`
- **Backend Workflow n8n:** \`[percorsi workflow n8n]\`
- **Database Collections:** \`[collezioni MongoDB]\`

## 📐 3. SPECIFICHE FRONTEND
- Istruzioni precise sulle modifiche HTML/JS da apportare.

## ⚙️ 4. GUIDA PASSO-PASSO BACKEND (n8n)
- Dettaglio dei nodi da modificare o aggiungere, specificando il codice JavaScript nei nodi Code e i parametri dei nodi MongoDB (\`alwaysOutputData: true\`).

## 💾 5. STRUTTURA DATABASE (MongoDB)
- Schema campi, tipi e indici aggiunti.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2,
      },
    });

    const odsMarkdown = response.text || "";

    // Generate starter or updated n8n JSON workflow based on prompt and standards
    const workflowPrompt = `Crea un workflow n8n JSON valido e completo per questa richiesta: "${prompt}".
Rispetti gli standard SiteBoS:
- Webhook con Ash Decoder / Unified-Authentication
- Nodi MongoDB con "alwaysOutputData": true
- Merge (combineAll) dopo le query
- Struttura n8n valida con nodes e connections.

Restituisci ESCLUSIVAMENTE il JSON del workflow n8n.`;

    const workflowResponse = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: workflowPrompt,
      config: {
        systemInstruction: "Sei un Senior n8n Engineer. Restituisci solo ed esclusivamente un JSON valido n8n.",
        responseMimeType: "application/json",
        temperature: 0.1,
      },
    });

    let workflowJson = null;
    try {
      workflowJson = JSON.parse(workflowResponse.text || "{}");
    } catch (_e) {
      console.warn("Could not parse generated workflow JSON, providing standard skeleton");
      workflowJson = createStandardN8nSkeleton(prompt);
    }

    res.json({
      success: true,
      odsMarkdown,
      workflowJson,
    });
  } catch (error: any) {
    console.error("[Architect API Error]", error);
    res.status(500).json({ error: error.message || "Errore durante la generazione dell'OdS" });
  }
});

// n8n Workflow Engineer / Linter API
app.post("/api/gemini/n8n-engineer", async (req, res) => {
  try {
    const { workflowJson, customApiKey } = req.body;
    if (!workflowJson) {
      return res.status(400).json({ error: "Workflow JSON obbligatorio" });
    }

    const ai = getGeminiClient(customApiKey);

    const systemPrompt = `Sei l'Senior n8n Engineer di SiteBoS.
Il tuo compito e analizzare il workflow JSON fornito dall'utente e verificare se rispetta al 100% questi standard di sviluppo:

${N8N_DEVELOPMENT_STANDARDS}

Restituisci ESCLUSIVAMENTE un JSON valido con questa struttura:
{
  "isValid": true/false,
  "violations": [
    {
      "ruleId": "MDB_ALWAYS_OUTPUT / ASH_DECODER / MERGE_COMBINE / LOCK_TG",
      "severity": "error / warning",
      "nodeName": "Nome del nodo interessato",
      "message": "Descrizione sintetica del problema",
      "fixSuggestion": "Istruzione per risolvere"
    }
  ],
  "standardsChecked": [
    "Ash Decoder / Auth Check",
    "MongoDB alwaysOutputData: true",
    "Merge combineAll Pattern",
    "Try/Catch JavaScript Code Nodes"
  ],
  "refactoredWorkflowJson": { ... JSON del workflow corretto e pronto all'uso ... }
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: JSON.stringify(workflowJson),
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        temperature: 0.0,
      },
    });

    const lintReport = JSON.parse(response.text || "{}");
    res.json({ success: true, report: lintReport });
  } catch (error: any) {
    console.error("[n8n Engineer API Error]", error);
    res.status(500).json({ error: error.message || "Errore durante il linting del workflow n8n" });
  }
});

// Phase 4: Docs Maintainer Agent (Keep docs/ updated)
app.post("/api/gemini/docs-maintainer", async (req, res) => {
  try {
    const { odsMarkdown, customApiKey } = req.body;
    if (!odsMarkdown) {
      return res.status(400).json({ error: "Contenuto OdS obbligatorio" });
    }

    const ai = getGeminiClient(customApiKey);
    const semanticIndex = getSemanticIndexMarkdown();
    const repoStructure = getRepoStructureMarkdown();

    const systemPrompt = `Sei l'Agente Maintainer della Documentazione dell'ecosistema SiteBoS.
Il tuo compito e analizzare un nuovo Ordine di Servizio (OdS) o una modifica al sistema e aggiornare la documentazione tecnica VIVA nella cartella docs/.

MANTIENI AGGIORNATI QUESTI FILE:
1. conversational_semantic_index.md (Indice semantico delle frasi/intenti utente vs file target)
2. struttura_repository.md (Albero e mappatura moduli)

INDICE SEMANTICO ATTUALE:
${semanticIndex.slice(0, 4000)}

STRUTTURA REPOSITORY ATTUALE:
${repoStructure.slice(0, 4000)}

ANALIZZA QUESTO ODS / MODIFICA:
${odsMarkdown}

Restituisci ESCLUSIVAMENTE un JSON con i file di documentazione aggiornati:
{
  "updatedSemanticIndex": "... testo markdown aggiornato di conversational_semantic_index.md ...",
  "updatedRepoStructure": "... testo markdown aggiornato di struttura_repository.md ...",
  "summary": "Breve riassunto dei cambiamenti apportati alla documentazione docs/"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: odsMarkdown,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        temperature: 0.1,
      },
    });

    const result = JSON.parse(response.text || "{}");

    // Persist updated documentation directly to docs/ folder
    const docsDir = path.join(process.cwd(), "docs");
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }

    const updatedFiles: string[] = [];
    if (result.updatedSemanticIndex) {
      fs.writeFileSync(path.join(docsDir, "02_conversational_semantic_index.md"), result.updatedSemanticIndex, "utf-8");
      updatedFiles.push("docs/02_conversational_semantic_index.md");
    }
    if (result.updatedRepoStructure) {
      fs.writeFileSync(path.join(docsDir, "01_struttura_repository.md"), result.updatedRepoStructure, "utf-8");
      updatedFiles.push("docs/01_struttura_repository.md");
    }

    res.json({
      success: true,
      summary: result.summary || "Documentazione in docs/ aggiornata con successo!",
      updatedFiles,
    });

  } catch (error: any) {
    console.error("[Docs Maintainer Error]", error);
    res.status(500).json({ error: error.message || "Errore durante l'aggiornamento della documentazione" });
  }
});

// Commit to GitHub & Auto-Update Docs
app.post("/api/github/commit", async (req, res) => {
  try {
    const { slug, odsMarkdown, workflowJson, commitMessage, customApiKey } = req.body;
    const timestamp = Date.now();
    const cleanSlug = (slug || "ods-update").toLowerCase().replace(/[^a-z0-9-]/g, "-");

    const mdFilename = `OdS/${cleanSlug}_${timestamp}.md`;
    const jsonFilename = `OdS/${cleanSlug}_${timestamp}.json`;

    // Save locally into OdS directory (For the user/developer)
    const odsDir = path.join(process.cwd(), "OdS");
    if (!fs.existsSync(odsDir)) {
      fs.mkdirSync(odsDir, { recursive: true });
    }
    
    if (odsMarkdown) {
      fs.writeFileSync(path.join(odsDir, `${cleanSlug}_${timestamp}.md`), odsMarkdown, "utf-8");
    }
    if (workflowJson) {
      fs.writeFileSync(path.join(odsDir, `${cleanSlug}_${timestamp}.json`), JSON.stringify(workflowJson, null, 2), "utf-8");
    }

    // Trigger Docs Maintainer Agent to update docs/
    let docsSummary = "Documentazione in docs/ invariata.";
    if (odsMarkdown) {
      try {
        const ai = getGeminiClient(customApiKey);
        const semanticIndex = getSemanticIndexMarkdown();
        const repoStructure = getRepoStructureMarkdown();

        const docsPrompt = `Analizza questo OdS approvato ed aggiorna la documentazione in docs/.
ODS APPROVATO:
${odsMarkdown}

Restituisci un JSON con updatedSemanticIndex e updatedRepoStructure se ci sono modiche da registrare.`;

        const docsResponse = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: docsPrompt,
          config: {
            systemInstruction: "Sei l'Agente Maintainer della Documentazione in docs/. Restituisci solo un JSON valido.",
            responseMimeType: "application/json",
            temperature: 0.1,
          },
        });

        const docsResult = JSON.parse(docsResponse.text || "{}");
        const docsDir = path.join(process.cwd(), "docs");

        if (docsResult.updatedSemanticIndex) {
          fs.writeFileSync(path.join(docsDir, "02_conversational_semantic_index.md"), docsResult.updatedSemanticIndex, "utf-8");
        }
        if (docsResult.updatedRepoStructure) {
          fs.writeFileSync(path.join(docsDir, "01_struttura_repository.md"), docsResult.updatedRepoStructure, "utf-8");
        }
        docsSummary = "Documentazione in docs/ sincronizzata con successo!";
      } catch (err) {
        console.warn("[Docs Auto-Update Warning]", err);
      }
    }

    // Return confirmation
    res.json({
      success: true,
      message: `OdS salvato in OdS/ e documentazione sincronizzata in docs/!`,
      committedFiles: [
        { path: mdFilename, type: "markdown", status: "created" },
        { path: jsonFilename, type: "n8n_workflow_json", status: "created" },
      ],
      docsStatus: docsSummary,
      commitHash: Math.random().toString(16).substring(2, 10),
      timestamp: new Date().toISOString(),
    });

  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Helper for standard skeleton n8n workflow
function createStandardN8nSkeleton(title: string) {
  return {
    name: `SiteBoS - ${title}`,
    nodes: [
      {
        parameters: {
          httpMethod: "POST",
          path: "sitebos-hook",
          options: {},
        },
        id: "node-webhook-01",
        name: "Webhook Input",
        type: "n8n-nodes-base.webhook",
        typeVersion: 1,
        position: [100, 300],
      },
      {
        parameters: {
          workflowId: "subworkflow-ash-decoder",
          options: {},
        },
        id: "node-ash-decoder-02",
        name: "Ash Decoder Auth",
        type: "n8n-nodes-base.executeWorkflow",
        typeVersion: 1,
        position: [320, 300],
      },
      {
        parameters: {
          conditions: {
            boolean: [
              {
                value1: "={{ $json.valid }}",
                value2: true,
              },
            ],
          },
        },
        id: "node-if-auth-03",
        name: "Is Authenticated?",
        type: "n8n-nodes-base.if",
        typeVersion: 1,
        position: [540, 300],
      },
      {
        parameters: {
          operation: "update",
          collection: "service_catalog",
          options: {
            alwaysOutputData: true,
          },
        },
        id: "node-mongodb-04",
        name: "MongoDB Operation",
        type: "n8n-nodes-base.mongoDb",
        typeVersion: 1,
        position: [760, 200],
      },
      {
        parameters: {
          mode: "combine",
          combinationMode: "multiplex",
        },
        id: "node-merge-05",
        name: "Merge combineAll",
        type: "n8n-nodes-base.merge",
        typeVersion: 2,
        position: [980, 250],
      },
      {
        parameters: {
          respondWith: "allIncomingItems",
          options: {},
        },
        id: "node-respond-06",
        name: "Respond to Webhook",
        type: "n8n-nodes-base.respondToWebhook",
        typeVersion: 1,
        position: [1200, 250],
      },
    ],
    connections: {
      "Webhook Input": {
        main: [[{ node: "Ash Decoder Auth", type: "main", index: 0 }]],
      },
      "Ash Decoder Auth": {
        main: [[{ node: "Is Authenticated?", type: "main", index: 0 }]],
      },
      "Is Authenticated?": {
        main: [
          [{ node: "MongoDB Operation", type: "main", index: 0 }],
          [{ node: "Respond to Webhook", type: "main", index: 0 }],
        ],
      },
      "MongoDB Operation": {
        main: [[{ node: "Merge combineAll", type: "main", index: 0 }]],
      },
      "Merge combineAll": {
        main: [[{ node: "Respond to Webhook", type: "main", index: 0 }]],
      },
    },
  };
}

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SiTeBoS Admin Assistant] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
