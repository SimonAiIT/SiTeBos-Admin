export interface OwnerSession {
  geminiKey: string;
  githubToken: string;
  githubTokenStructure?: string;
  githubTokenAdmin?: string;
  mongoUri?: string;
  ownerId: string;
  vatNumber?: string;
  isAuthenticated: boolean;
  source: 'n8n_webhook' | 'environment' | 'manual';
}


export interface SelectorResult {
  funzionalita_identificata: string;
  frontend_paths: string[];
  backend_paths: string[];
  database_collections: string[];
  ods_esistente?: string | null;
  azione_consigliata?: 'continua_implementazione_ods_esistente' | 'crea_nuovo_ods';
  rationale?: string;
}

export interface OdsDocument {
  id: string;
  slug: string;
  title: string;
  createdAt: string;
  markdownContent: string;
  targetFilesContext?: string;
  workflowJson?: any;
  status: 'draft' | 'approved' | 'committed';
}

export interface N8nLintViolation {
  ruleId: string;
  severity: 'error' | 'warning' | 'info';
  nodeName?: string;
  message: string;
  fixSuggestion: string;
}

export interface N8nLintReport {
  isValid: boolean;
  violations: N8nLintViolation[];
  standardsChecked: string[];
  refactoredWorkflowJson?: any;
}

export interface SemanticIndexEntry {
  category: string;
  phrases: string[];
  frontendFiles: string[];
  backendFiles: string[];
  collections: string[];
}
