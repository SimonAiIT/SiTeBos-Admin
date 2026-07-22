# Collezione: social_posts

La "Fabbrica del Marketing" di SiteBoS. Questa collezione contiene l'output strategico per il lancio multicanale di un prodotto o servizio, derivato dall'analisi psicologica del target e pronto per la distribuzione automatizzata.

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
        "psycological_analysis": {
          "emotional_drivers": "String (Levette emotive: paura, sollievo, controllo)",
          "logical_drivers": "String (Giustificazione razionale: ROI, tempo)",
          "cognitive_biases_used": "String (es. Authority Bias, Framing Effect)"
        },
        "linkedin": "String (Copy ottimizzato)",
        "facebook": "String (Copy ottimizzato)",
        "instagram": "String (Copy ottimizzato)",
        "x": "String (Copy ottimizzato)",
        "tiktok": "String (Script/Copy ottimizzato)",
        "veo_master_prompt_8s": "String (Prompt avanzato per Google Veo - Video 8s)",
        "prompt": "String (Prompt immagine 1:1, estetica corporate)",
        "cta_secret_weapon": "String (URL/Messaggio di chiusura)"
      }
    }
  ]
}
```

---

## Logiche di Marketing Strategico

### 1. Ingegneria Psicologica (`psycological_analysis`)
SiteBoS non genera testi a caso. Prima del copy, l'IA esegue un'analisi del profilo psicologico dello stakeholder per identificare i **bias cognitivi** più efficaci. Questo assicura che il messaggio superi la resistenza naturale al cambiamento del cliente.

### 2. Omnicanalità Coerente
Il sistema genera varianti specifiche per ogni social platform mantenendo l'identità di brand (`dark-tech`) e il messaggio core. La struttura permette a workflow di distribuzione automatizzata di pescare il testo corretto per la piattaforma di destinazione.

### 3. Generazione Asset Visivi (`veo_master_prompt`)
La collezione include i prompt pronti per i modelli generativi video (Veo) e immagine. Questi prompt incorporano i colori del design system (`#212D67`, `#895FE0`), garantendo che il materiale promozionale sia esteticamente allineato alla MiniApp e al MiniSito.

---
> [!IMPORTANT]
> Questa collezione rappresenta l'ultimo miglio della "Trasformazione Strutturale": la capacità dell'azienda di comunicare il proprio valore in modo autonomo, persuasivo e visivamente impeccabile.
