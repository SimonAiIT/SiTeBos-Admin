// webhook-handler.js
// Gestisce comunicazione con Make.com webhook per salvare dati moduli

class WebhookHandler {
  constructor() {
    const alone = this.getUrlParam('alone');
    if (alone === 'true') {
      this.webhookUrl = 'https://prod.workflow.trinai.it/webhook/e34e22de-0725-4410-a882-75e87e359376';
    } else {
      this.webhookUrl = 'https://prod.workflow.trinai.it/webhook/80d663ea-be4b-4d42-8cc1-05f4ada52ced';
    }
    this.ash = this.getUrlParam('ash');
    this.msgId = this.getUrlParam('msg_id');
    this._auth = window.Telegram?.WebApp?.initData || '';
  }

  getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  /**
   * 🆕 RECUPERA PROGRESSO UTENTE DAL SERVER
   * Chiamato all'inizio per sincronizzare dati
   * @returns {Promise<Object>} Dati progresso utente con evaluation
   */
  async getProgress() {
    const payload = {
      action: "get_progress",
      ash: this.ash,
      msg_id: this.msgId,
      _auth: this._auth,
      timestamp: new Date().toISOString()
    };

    console.log('📡 Recupero progresso da server:', payload);

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        let errorMsg = `Webhook failed: ${response.status}`;
        try {
          const errorBody = await response.json();
          if (errorBody && errorBody.error) {
            errorMsg = `Errore Server: ${errorBody.error}`;
          }
        } catch (e) {}
        throw new Error(errorMsg);
      }
      
      const result = await response.json();
      
      console.log('✅ Progresso recuperato:', result);
      
      // 🔥 Salva in localStorage come cache (NUOVA STRUTTURA)
      if (result.modules_completed) {
        const key = `modules_${this.ash}`;
        localStorage.setItem(key, JSON.stringify(result.modules_completed));
      }
      
      return result;
      
    } catch (error) {
      console.error('⚠️ Errore recupero progresso:', error);
      // Se è un errore del server (4xx, 5xx), NON usiamo il fallback locale ma blocchiamo
      if (error.message.includes('Errore Server') || error.message.includes('Webhook failed')) {
        throw error;
      }
      
      // Fallback: usa localStorage solo se è un errore di rete puro
      return {
        modules_completed: this.loadModulesData(),
        completion_percentage: this.getCompletionPercentage()
      };
    }
  }

  /**
   * Salva modulo completato su webhook Make.com
   * @param {Object} moduleData - Dati del modulo completato
   * @returns {Promise} Response del webhook con evaluation
   */
  async saveModule(moduleData) {
    const payload = {
      action: "save_module",
      ash: this.ash,
      msg_id: this.msgId,
      _auth: this._auth,
      timestamp: new Date().toISOString(),
      ...moduleData
    };

    console.log('📡 Invio dati a webhook:', payload);

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        let errorMsg = `Webhook failed: ${response.status} ${response.statusText}`;
        try {
          const errorBody = await response.json();
          if (errorBody && errorBody.error) {
            errorMsg = `Errore Server: ${errorBody.error}`;
          }
        } catch (e) {}
        throw new Error(errorMsg);
      }
      
      const result = await response.json();
      
      console.log('✅ Modulo salvato con successo!', result);
      
      // 🔥 SALVA LA NUOVA STRUTTURA CON EVALUATION IN LOCALSTORAGE
      if (result.success && result.evaluation) {
        this.saveModuleToLocalStorage(result.module_id, {
          completed: true,
          completion_date: result.completion_date,
          evaluation: result.evaluation
        });
      }
      
      return result;
      
    } catch (error) {
      console.error('❌ Errore webhook:', error);
      // Fallback: salva locale se webhook fallisce
      this.saveToLocalStorageBackup(payload);
      throw error;
    }
  }

  /**
   * 🔥 AGGIORNATO: Salva dati completamento modulo in localStorage (NUOVA STRUTTURA)
   * @param {string} moduleId - ID del modulo (modulo1, modulo2, etc)
   * @param {Object} data - Dati da salvare con evaluation
   */
  saveModuleToLocalStorage(moduleId, data) {
    const key = `modules_${this.ash}`;
    let stored = JSON.parse(localStorage.getItem(key) || '{}');
    
    // 🔥 NUOVA STRUTTURA CON EVALUATION
    stored[moduleId] = {
      completed: true,
      completion_date: data.completion_date || new Date().toISOString(),
      evaluation: data.evaluation || null
    };
    
    localStorage.setItem(key, JSON.stringify(stored));
    console.log('💾 Salvato in localStorage:', moduleId);
  }

  /**
   * Recupera dati moduli da localStorage
   * @returns {Object} Dati moduli salvati con evaluation
   */
  loadModulesData() {
    const key = `modules_${this.ash}`;
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  /**
   * 🆕 AGGIORNATO: Recupera evaluation di un modulo specifico
   * @param {string} moduleId - ID del modulo
   * @returns {Object|null} Evaluation data
   */
  getModuleEvaluation(moduleId) {
    const data = this.loadModulesData();
    return data[moduleId]?.evaluation || null;
  }

  /**
   * Calcola percentuale completamento (quanti moduli fatti su 4)
   * @returns {number} Percentuale 0-100
   */
  getCompletionPercentage() {
    const data = this.loadModulesData();
    const completedCount = Object.values(data).filter(m => m.completed).length;
    return (completedCount / 4) * 100;
  }

  /**
   * Verifica se un modulo specifico è stato completato
   * @param {string} moduleId - ID del modulo
   * @returns {boolean}
   */
  isModuleCompleted(moduleId) {
    const data = this.loadModulesData();
    return data[moduleId] && data[moduleId].completed === true;
  }

  /**
   * Conta quanti moduli sono stati completati
   * @returns {number} Numero moduli completati (0-4)
   */
  getCompletedModulesCount() {
    const data = this.loadModulesData();
    return Object.values(data).filter(m => m.completed).length;
  }

  /**
   * Backup locale se webhook fallisce
   * @param {Object} payload - Dati da salvare
   */
  saveToLocalStorageBackup(payload) {
    const backupKey = `backup_${this.ash}`;
    let backups = JSON.parse(localStorage.getItem(backupKey) || '[]');
    backups.push({
      ...payload,
      backup_timestamp: new Date().toISOString()
    });
    localStorage.setItem(backupKey, JSON.stringify(backups));
    console.log('💾 Salvato backup locale (webhook non disponibile)');
  }

  /**
   * Recupera backup non sincronizzati
   * @returns {Array} Lista backup
   */
  getPendingBackups() {
    const backupKey = `backup_${this.ash}`;
    return JSON.parse(localStorage.getItem(backupKey) || '[]');
  }

  /**
   * Cancella backup dopo sincronizzazione
   */
  clearBackups() {
    const backupKey = `backup_${this.ash}`;
    localStorage.removeItem(backupKey);
  }
}

// Export per uso in altri file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WebhookHandler };
}