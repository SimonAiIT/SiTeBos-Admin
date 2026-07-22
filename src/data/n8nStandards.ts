export const N8N_DEVELOPMENT_STANDARDS = `# 📐 n8n DEVELOPMENT STANDARDS - SITEBOS ECOSYSTEM

Tutti i workflow n8n dell'ecosistema SiteBoS DEVONO seguire tassativamente queste regole di architettura e sicurezza.

## 🔒 1. DECODER & AUTENTICAZIONE ASH
- Ogni Webhook esposto deve processare l'header \`ash\` o \`_auth\` di Telegram.
- **Ash Decoder Subworkflow**: Utilizzare sempre il sotto-workflow standard di decodifica crittografica prima di consentire l'accesso ai dati sensibili.
- In caso di firma non valida o token scaduto, il nodo \`If\` deve deviare immediatamente verso \`Respond to Webhook (403 Forbidden)\`.

## 💾 2. REGOLE PER NODI MONGODB
- **Proprietà obbligatoria \`alwaysOutputData: true\`**: Tutti i nodi MongoDB (Find, Update, Insert, Aggregate) devono AVERE impostato \`alwaysOutputData: true\` nelle opzioni. Se una query non trova risultati, il nodo restituisce un oggetto vuoto \`{}\` evitando l'interruzione brutale del workflow.
- **Multiplexing e Merge**: Quando un nodo MongoDB esegue una query su una collezione, il risultato deve passare da un nodo \`Merge (combineAll)\` prima di proseguire, per garantire che i rami non-pass-through mantengano il contesto della sessione utente.

## 🔐 3. LOCKING TELEGRAM & TRINAI AC-CREDIT
- **Telegram Lock Anti-Spam**: Per webhook ad alta frequenza o comandi operatore, applicare il controllo Lock basato su Redis/MongoDB per evitare risposte doppie su Telegram.
- **AcCredit Standard**: Per le transazioni a consumo crediti o invii broadcast, verificare prima la disponibilità di crediti nel wallet dell'Owner mediante la funzione \`Standard_AcCredit\`.

## ⚙️ 4. STRUTTURA ED ESECUZIONE CODICE JAVASCRIPT
- Nelle funzioni all'interno del nodo \`Code in JavaScript\`:
  - Usare sintassi moderna ES6+ (\`const\`, \`let\`, destructuring).
  - Gestire sempre con \`try/catch\` le chiamate JSON.parse o manipolazioni di oggetti.
  - Restituire sempre un array di oggetti nel formato n8n: \`return [{ json: { result, success: true } }];\`.
  - Non usare librerie esterne non supportate da n8n.
`;
