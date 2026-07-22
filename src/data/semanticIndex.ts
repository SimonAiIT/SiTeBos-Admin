import { SemanticIndexEntry } from '../types';

export const INITIAL_SEMANTIC_INDEX: SemanticIndexEntry[] = [
  {
    category: "Gestione Prodotti e Catalogo SOP",
    phrases: [
      "Aggiungi un booleano per filtrare i servizi",
      "Mostra o nascondi servizio nel catalogo",
      "Modifica prezzo o durata prestazione",
      "Inserisci attributi visibilità sicurezza"
    ],
    frontendFiles: [
      "telegram_control/gestione/edit-product.html",
      "telegram_control/gestione/catalog-list.html"
    ],
    backendFiles: [
      "n8n_workflow/SiteBoS-App-Hook/catalog/editProduct.json",
      "n8n_workflow/SiteBoS-App-Hook/catalog/getCatalog.json"
    ],
    collections: ["service_catalog", "owner_settings"]
  },
  {
    category: "Assistente Sicurezza & SOP Operative",
    phrases: [
      "Filtra servizi nell'assistente sicurezza",
      "Genera documento di valutazione rischi",
      "Assegna DPI ad operatore",
      "Aggiungi checklist controllo cantiere"
    ],
    frontendFiles: [
      "telegram_control/security/security-assistant.html",
      "telegram_control/security/sop-viewer.html"
    ],
    backendFiles: [
      "n8n_workflow/SiteBoS-App-Hook/security/Secure_Assistant.json",
      "n8n_workflow/SiteBoS-App-Hook/security/generateSOP.json"
    ],
    collections: ["security_assistants", "sop_templates", "operator_logs"]
  },
  {
    category: "Autenticazione Telegram & Token ASH",
    phrases: [
      "Verifica initData Telegram WebApp",
      "Genera token ASH per transazioni",
      "Controlla permessi operatore",
      "Recupera chiavi dinamiche Owner"
    ],
    frontendFiles: [
      "telegram_control/common/telegram-auth.js",
      "telegram_control/dev_assistant/authService.js"
    ],
    backendFiles: [
      "n8n_workflow/SiteBoS-App-Hook/auth/Unified-Authentication.json",
      "n8n_workflow/SiteBoS-App-Hook/auth/GetOwnerKeys.json"
    ],
    collections: ["owner_sessions", "telegram_users"]
  },
  {
    category: "Ordini di Servizio & Revisioni Codebase",
    phrases: [
      "Crea un nuovo ordine di servizio",
      "Aggiorna indice semantico conversazionale",
      "Genera workflow n8n da specifiche",
      "Esegui commit OdS su GitHub"
    ],
    frontendFiles: [
      "telegram_control/dev_assistant/index.html",
      "telegram_control/dev_assistant/studio.js"
    ],
    backendFiles: [
      "n8n_workflow/SiteBoS-App-Hook/dev_assistant/generateOdS.json",
      "n8n_workflow/SiteBoS-App-Hook/dev_assistant/commitToGit.json"
    ],
    collections: ["service_orders", "conversational_index"]
  }
];

export const RAW_SEMANTIC_INDEX_MARKDOWN = `# 📚 INDICE SEMANTICO CONVERSAZIONALE - SITEBOS

L'Indice Semantico mappa le intensioni espresse dall'utente in linguaggio naturale direttamente sui file HTML di frontend, i workflow n8n di backend e le collezioni MongoDB corrispondenti.

## 1. Gestione Prodotti e Catalogo SOP
- **Frasi Tipo**: "Aggiungi un booleano per filtrare i servizi", "Mostra o nascondi servizio nel catalogo", "Modifica prezzo o durata prestazione"
- **Frontend**: \`telegram_control/gestione/edit-product.html\`, \`telegram_control/gestione/catalog-list.html\`
- **Backend**: \`n8n_workflow/SiteBoS-App-Hook/catalog/editProduct.json\`, \`n8n_workflow/SiteBoS-App-Hook/catalog/getCatalog.json\`
- **Collezioni DB**: \`service_catalog\`, \`owner_settings\`

## 2. Assistente Sicurezza & SOP Operative
- **Frasi Tipo**: "Filtra servizi nell'assistente sicurezza", "Genera documento valutazione rischi", "Assegna DPI ad operatore"
- **Frontend**: \`telegram_control/security/security-assistant.html\`, \`telegram_control/security/sop-viewer.html\`
- **Backend**: \`n8n_workflow/SiteBoS-App-Hook/security/Secure_Assistant.json\`, \`n8n_workflow/SiteBoS-App-Hook/security/generateSOP.json\`
- **Collezioni DB**: \`security_assistants\`, \`sop_templates\`

## 3. Autenticazione Telegram & Token ASH
- **Frasi Tipo**: "Verifica initData Telegram WebApp", "Genera token ASH", "Recupera chiavi dinamiche Owner"
- **Frontend**: \`telegram_control/common/telegram-auth.js\`
- **Backend**: \`n8n_workflow/SiteBoS-App-Hook/auth/Unified-Authentication.json\`
- **Collezioni DB**: \`owner_sessions\`
`;
