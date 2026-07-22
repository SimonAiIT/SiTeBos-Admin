# Collezione: website_board

Il "Dossier di Intelligence" dell'azienda. Contiene i report estesi frutto di ricerche semantiche sul web, analisi competitive e audit strategici eseguiti dall'IA durante l'onboarding.

## Identificativi
- **Database**: `MemoryManager`
- **Chiave Primaria**: `sessionId` (Pattern: `[P.IVA]_reserch`)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (P.IVA_reserch)",
  "messages": [
    {
      "type": "system",
      "data": {
        "content": "String (Markdown strutturato del Dossier)",
        "additional_kwargs": "Object",
        "response_metadata": "Object"
      }
    }
  ]
}
```

---

## Logica di Intelligence: Comparazione Temporale

Una caratteristica unica di questa collezione è la sua natura bipolare:
- **Passato (Online Presence Research)**: Contiene i dati estratti dal web prima dell'intervento di SiteBoS.
- **Futuro (Draft Pages)**: Contiene i draft delle nuove pagine e dei blog post generati dall'IA.

### Perché questa struttura?
Il sistema è progettato per permettere una singola chiamata a **Gemini Google Search** che utilizzi sia il dossier di ricerca che le bozze future. Questo consente all'IA di:
1.  **Valutare il Gap**: Capire cosa manca alla presenza online del cliente per raggiungere gli obiettivi.
2.  **Benchmark dei Risultati**: Misurare l'impatto della trasformazione SiteBoS confrontando l'immagine passata con le nuove "marketing_nodes" in bozza.
3.  **Ottimizzazione della Comunicazione**: Assicurarsi che le nuove pagine correggano i "pain points" rilevati nella ricerca iniziale.

---

## Struttura del Dossier di Intelligence (`content`)
Il report è diviso in sezioni standardizzate per fornire una visione a 360° dell'azienda:

### 1. Executive Summary
Sintesi del posizionamento di mercato, punti di forza e aree di rischio rilevate dall'analisi.

### 2. Company Intelligence
- **Identità Legale & Commerciale**: P.IVA, sede, sito web, settore ATECO.
- **Mission & USP**: La promessa di valore e ciò che distingue l'azienda dai competitor.
- **Operations & Offerings**: Mappatura dei servizi reali estratti dal sito o dai documenti.

### 3. Stakeholder Intelligence
Analisi del profilo professionale del titolare o dei key-manager (Competenze verificate, autorevolezza, background).

### 4. Strategic Analysis & Onboarding Choreography
- **Mappatura Pain Points**: Analisi dei problemi reali risolti dall'azienda (es. disorganizzazione, costi, scaling).
- **Onboarding Recommendations**: Consigli dell'IA su come ottimizzare la "productization" e il marketing basandosi sui dati emersi.

---
> [!TIP]
> Questo documento funge da "manuale di istruzioni" per SiteBoS. L'IA legge questo dossier per capire il contesto profondo del cliente, permettendo di rispondere a domande complesse su mission e posizionamento con la stessa autorità del fondatore.
