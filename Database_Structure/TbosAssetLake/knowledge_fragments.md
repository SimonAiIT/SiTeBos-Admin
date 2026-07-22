# Collezione: knowledge_fragments

La base di conoscenza "Persuasiva" e atomica. Questa collezione trasforma i dati grezzi degli `honeypots` in frammenti di conversazione pronti per l'uso, completi di trigger semantici e tecniche di storytelling (analogie).

## Identificativi
- **Database**: `TbosAssetLake`
- **Chiave Primaria**: `sessionId` (Pattern: `[P.IVA]-[SKU]`)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (P.IVA-SKU)",
  "messages": [
    {
      "type": "system",
      "data": {
        "fragment_id": "String",
        "title": "String",
        "user_utterances": [
          "Array di stringhe (Domande tipo dell'utente per semantic matching)"
        ],
        "answer_fragment": "String (Risposta sintetica ed esecutiva)",
        "summary": "String (Riassunto del frammento)",
        "sections": [
          {
            "question": "String",
            "answer": "String",
            "analogy": "String (Metaphora/Analogia per spiegazione semplificata)"
          }
        ],
        "path": "null or String"
      }
    }
  ]
}
```

---

## Logiche di Intelligenza Conversazionale

### 1. Semantic Triggers (`user_utterances`)
Questa collezione è ottimizzata per la ricerca semantica (RAG). Le `user_utterances` servono a mappare le domande reali degli utenti sul frammento di conoscenza corretto, permettendo all'IA di recuperare la risposta più pertinente anche se la domanda non è identica al titolo.

### 2. Storytelling & Persuasione (`analogy`)
Ogni sezione non fornisce solo dati tecnici, ma include una **analogia**. Questa è una skill specifica di SiteBoS: tradurre concetti complessi (es. Prompt Engineering, Human-in-the-Loop) in immagini quotidiane (il Falegname, lo Chef) per aumentare la fiducia del cliente e facilitare la vendita.

### 3. Struttura Atomica
Il frammento è auto-contenuto. Contiene tutto ciò che serve al bot per rispondere a un'obiezione specifica (es. il prezzo, il controllo umano) senza dover ri-analizzare l'intero dossier aziendale ogni volta.

---
> [!TIP]
> Questi frammenti sono i "mattoncini Lego" con cui l'IA costruisce le risposte nel bot Customer. Se un'obiezione si ripete spesso, basta aggiungere un nuovo frammento qui per istruire tutti i bot del sistema su come gestirla.
