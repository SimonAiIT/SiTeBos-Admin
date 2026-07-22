# TrinAI Minisite File API (N8N Integration)

Questa API permette a N8N di gestire i contenuti dei minisiti dinamici (P.IVA based).  
Ogni minisito è standalone, supporta asset locali e routing pulito degli URL.

> [!NOTE]
> **DUE SISTEMI IN PARALLELO** — Il sistema è in migrazione verso il Motore JSON v2.0.
> - **Sistema Legacy (HTML)**: Endpoint `POST /api/n8n/minisite` — N8N invia HTML grezzo. Scrive in `public/minisite/old/{VAT}/`.
> - **Nuovo Sistema (JSON Engine v2.0)**: Endpoint `POST /api/n8n/json/minisite` — N8N invia uno schema JSON strutturato. PHP inietta `window.MINISITE_DATA` nel template HTML scelto da `public/minisite/_templates/`. Scrive in `public/minisite/{VAT}/`.
> 
> Il router globale `minisite.trinai.it` gestisce entrambi: se esiste `{VAT}/minisite.json` → nuovo sistema; se esiste `old/{VAT}/` → sistema legacy.

---

## Sistema Legacy (HTML Engine) — deprecato

Il vecchio sistema HTML è ancora presente per retrocompatibilità, ma è **deprecato**. Le azioni legacy che generano HTML completo lato N8N non sono più il flusso raccomandato.

Nota rapida:
- Endpoint legacy: `POST /api/n8n/minisite` (mantiene `save_image`, `get_status`, `get_posts` per retrocompatibilità)
- Raccomandazione: usare il nuovo JSON Engine (`/api/n8n/json/minisite`) per tutti i nuovi workflow.

> [!NOTE]
> **Conserviamo `save_image`**: l'upload immagini rimane attivamente usato dal flusso JSON. Per questo motivo `save_image` è documentato di seguito e rimane supportato.

### Salvataggio immagini (legacy & required per JSON flow)
**Azione**: `save_image` (rimane valida)

```json
{
  "action": "save_image",
  "vat_number": "IT12345678901",
  "asset_type": "photo",
  "file_name": "pizza_margherita.jpg",
  "file_data": "data:image/jpeg;base64,...",
  "mime_type": "image/jpeg"
}
```

*   **Parametri chiave**:
    *   `asset_type`: `logo`, `photo` o stringa custom.
    *   `file_name`: Nome fisico del file (es. `nome_foto.jpg`).
    *   `file_data`: Stringa Base64 dell'immagine (con o senza prefisso `data:image/...`).
*   **Accesso nel codice**: l'immagine sarà salvata in `public/minisite/old/{VAT}/images/` per il legacy, e in `public/minisite/{VAT}/images/` per i nuovi minisite; il path restituito deve essere usato nel `minisite_json` o `post_json`.

---

### Recupera Stato & Asset (legacy)
Le azioni `get_status` e `get_posts` esistono ancora per il sistema legacy e restituiscono lo stato delle cartelle in `public/minisite/old/{VAT}`.

**Esempio `get_status`**:

```json
{
  "action": "get_status",
  "vat_number": "IT12345678901"
}
```

**Esempio `get_posts` (legacy)**:

```json
{
  "action": "get_posts",
  "vat_number": "IT12345678901",
  "post_path": "prodotti/pizze"
}
```

---

## Nuovo Sistema — JSON Engine v2.0

**Endpoint**: `POST /api/n8n/json/minisite`  
**Header**: `Authorization: Bearer <N8N_MINISITE_TOKEN>`

> [!IMPORTANT]
> Con il Motore JSON, N8N **non genera più HTML**. Invia uno schema JSON strutturato; è il template PHP lato server a fare il rendering leggendo `window.MINISITE_DATA`.

### Workflow consigliato per N8N

1. Per ogni asset (logo, foto, ecc.): `POST /api/n8n/minisite` con `action: save_image` (sistema legacy) → ottieni URL locale `/{VAT}/images/nome_file.jpg`
2. Assembla lo schema `minisite_json` usando i path locali ottenuti nel campo `assets.*`
3. `POST /api/n8n/json/minisite` con `action: save_json_theme` → minisite online

### Azione: `save_json_theme`

#### Parametro `theme` — valori accettati

| Valore | Comportamento |
|--------|---------------|
| Nome template (es. `"classic"`, `"zen"`) | Aggiorna i dati **e** cambia il tema applicato |
| `"unchanged"` | Aggiorna **solo i dati** (`minisite.json`), il tema precedente rimane invariato |

> [!NOTE]
> `minisite_json` viene **sempre** riscritto, indipendentemente dal valore di `theme`.  
> La response JSON include sempre il campo `"theme"` con il tema **effettivamente attivo** dopo la chiamata.

---

#### Esempio — Aggiornamento dati + cambio tema

```json
{
  "action": "save_json_theme",
  "vat_number": "CLADDM85E03G273A",
  "theme": "classic",
  "minisite_json": {
    "business": {
      "name": "Pizzeria Roma",
      "tagline": "La vera pizza napoletana",
      "description": "Dal 1980 nel cuore di Roma"
    },
    "contact": {
      "phone": "+39 06 123456",
      "email": "info@pizzeriaroma.it",
      "address": "Via Roma 1, 00100 Roma",
      "city": "Roma"
    },
    "assets": {
      "logo": "/CLADDM85E03G273A/images/logo.png",
      "hero_image": "/CLADDM85E03G273A/images/hero.jpg"
    },
    "brand": {
      "primary_color": "#e63946",
      "font": "Inter"
    },
    "seo": {
      "title": "Pizzeria Roma — La vera pizza napoletana",
      "description": "Dal 1980 nel cuore di Roma. Ingredienti freschi ogni giorno."
    },
    "hero": {
      "headline": "La pizza più buona di Roma",
      "subheadline": "Impasto 48h, forno a legna, ingredienti DOP",
      "cta_text": "Prenota un tavolo",
      "cta_url": "#contatti"
    },
    "availability": {
      "monday": "12:00-15:00, 19:00-23:00",
      "tuesday": "Chiuso",
      "wednesday": "12:00-15:00, 19:00-23:00"
    },
    "sections": {
      "services": [
        {"title": "Pizza al Forno", "description": "30 varietà di pizza", "icon": "🍕"},
        {"title": "Consegna a Domicilio", "description": "In 30 minuti", "icon": "🚗"}
      ],
      "faq": [
        {"question": "Fate consegne?", "answer": "Sì, dalle 19:00 alle 22:30."}
      ]
    }
  }
}
```

**Campi `minisite_json`**:

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| `business.*` | object | Nome, tagline, descrizione azienda |
| `contact.*` | object | Telefono, email, indirizzo, città |
| `assets.*` | object | Path locali logo e immagini (da `save_image`) |
| `brand.*` | object | Colori primari, font |
| `seo.*` | object | Title e description per meta tag |
| `hero.*` | object | Headline, subheadline, CTA button |
| `availability.*` | object | Orari apertura per giorno della settimana |
| `sections.*` | object | Array di services, faq, ecc. |

**Risposta successo**:
```json
{"success": true, "url": "/minisite/CLADDM85E03G273A/", "theme": "classic"}
```

---

#### Esempio — Aggiornamento solo dati (tema invariato)

Usa `"theme": "unchanged"` quando vuoi aggiornare i contenuti del minisite senza cambiare il template grafico già selezionato.

```json
{
  "action": "save_json_theme",
  "vat_number": "CLADDM85E03G273A",
  "theme": "unchanged",
  "minisite_json": {
    "business": {
      "name": "Pizzeria Roma",
      "tagline": "Nuova tagline aggiornata"
    }
  }
}
```

**Risposta** (il tema rimane quello salvato precedentemente, es. `"zen"`):
```json
{"success": true, "url": "/minisite/CLADDM85E03G273A/", "theme": "zen"}
```

> [!NOTE]
> Se `"unchanged"` viene inviato come primo salvataggio (nessun `config.json` esistente), il sistema imposta automaticamente il tema di default `"classic"`.

---

**Template disponibili**: `bento`, `classic`, `creative`, `cyber`, `darktech`, `editorial`, `executive`, `stream`, `tailwind`, `zen`.

**File generati** in `public/minisite/{VAT}/`:
- `minisite.json` — schema dati
- `config.json` — `{"theme": "classic", "engine_version": "2.0", "updated_at": "..."}`
- `index.php` — motore autogenerato che inietta `window.MINISITE_DATA` nel template
- `.htaccess` — blocca accesso diretto a `minisite.json` e `config.json`

---

### Azione: `save_json_post`

Salva un post come JSON nel minisite dell'utente. Il rendering usa lo stesso tema attivo del minisite (da `config.json` del VAT).

#### Parametro `theme` nei post
I post **non hanno un proprio tema** — ereditano sempre il tema corrente del minisite. Per aggiornare il tema del minisite senza toccare i dati, usa `save_json_theme` con `"theme": "unchanged"`.

```json
{
  "action": "save_json_post",
  "vat_number": "CLADDM85E03G273A",
  "post_path": "servizi",
  "slug": "consulenza-fiscale",
  "file_name": "SVC_KH3MCNO3.html",
  "post_json": {
    "title": "Consulenza Fiscale",
    "description": "Ottimizza la tua situazione fiscale con i nostri esperti."
  }
}
```

**Parametri**:

| Campo | Tipo | Obbligatorio | Note |
|-------|------|:---:|------|
| `vat_number` | string | ✅ | P.IVA o CF, 8-16 caratteri alfanumerici |
| `post_path` | string | ✅ | Sottocartella del post (es. `"servizi"`, `"blog/2026"`). Solo `[a-z0-9/_-]` |
| `slug` | string | ✅ | Parte finale dell'URL (es. `"consulenza-fiscale"`). Solo `[a-z0-9_-]` |
| `file_name` | string | ✅ | Nome identificativo da N8N (es. `"SVC_KH3MCNO3.html"`). L'estensione `.html` viene sostituita con `.json` in automatico |
| `post_json` | object | ✅ | Dati del post — struttura libera, definita dal template |

**File generati** in `public/minisite/{VAT}/{post_path}/`:
- `SVC_KH3MCNO3.json` — dati del post
- `config.json` — mapping slug → file (accumulativo: nuovi post si aggiungono senza sovrascrivere i precedenti)

**URL risultante**: `https://minisite.trinai.it/CLADDM85E03G273A/servizi/consulenza-fiscale`

**Risposta successo**:
```json
{"success": true, "url": "https://minisite.trinai.it/CLADDM85E03G273A/servizi/consulenza-fiscale", "file": "SVC_KH3MCNO3.json"}
```

---

#### Struttura consigliata per `post_json`
Per ridurre errori e standardizzare i contenuti, consigliamo il seguente shape minimo per `post_json`. È solo una raccomandazione: il template può accettare campi diversi ma è utile concordare uno schema comune con il collega N8N.

Esempio consigliato:

```json
{
  "title": "Consulenza Fiscale",
  "summary": "Breve descrizione SEO-friendly",
  "content": "<p>HTML o Markdown del post. Inserire immagini con path relativi/assoluti come descritto sotto.</p>",
  "images": [
    "/CLADDM85E03G273A/images/hero.jpg",
    "/CLADDM85E03G273A/images/office-1.jpg"
  ],
  "author": "Studio Rossi",
  "published_at": "2026-05-18 12:00"
}
```

Note:
- `content` può contenere HTML o Markdown (deciso dal template). Se contiene HTML, usa percorsi relativi come `../images/foo.jpg` o path assoluti `/VAT/images/foo.jpg` per garantire portabilità.
- `images` è un array di path già disponibili sul server (ottenuti da `save_image`).
- `published_at` è opzionale ma utile per template che ordinano o mostrano la data.

---

#### Sequenza raccomandata (curl) — upload immagini + salvataggio post JSON
1) Carica le immagini (per ogni immagine):

```bash
curl -X POST https://dashboard.trinai.it/api/n8n/minisite \
  -H 'Authorization: Bearer <N8N_MINISITE_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "action": "save_image",
    "vat_number": "CLADDM85E03G273A",
    "asset_type": "photo",
    "file_name": "hero.jpg",
    "file_data": "data:image/jpeg;base64,/9j/4AAQ...",
    "mime_type": "image/jpeg"
  }'
```

Risposta attesa: `{"success": true, "url": "/CLADDM85E03G273A/images/hero.jpg", "backup": null}`

2) Salva il post come JSON (usa i path restituiti da `save_image`):

```bash
curl -X POST https://dashboard.trinai.it/api/n8n/json/minisite \
  -H 'Authorization: Bearer <N8N_MINISITE_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "action": "save_json_post",
    "vat_number": "CLADDM85E03G273A",
    "post_path": "servizi",
    "slug": "consulenza-fiscale",
    "file_name": "SVC_KH3MCNO3.html",
    "post_json": {
      "title": "Consulenza Fiscale",
      "summary": "Descrizione breve",
      "content": "<p>Testo del post con immagine <img src=\"/CLADDM85E03G273A/images/hero.jpg\"/></p>",
      "images": ["/CLADDM85E03G273A/images/hero.jpg"]
    }
  }'
```

Risposta attesa: `{"success": true, "url": "/minisite/CLADDM85E03G273A/servizi/consulenza-fiscale", "file": "SVC_KH3MCNO3.json"}`

---

#### Note operative
- `file_name`: se il valore inviato è `SVC_KH3MCNO3.html` il controller salverà `SVC_KH3MCNO3.json` (stesso identificatore, diversa estensione).
- Backup: se esiste già un file con lo stesso nome viene creato un backup con suffisso `.backup.YYYYMMDD-HHMMSS` e il sistema mantiene gli ultimi 5 backup.
- `config.json` della sezione viene aggiornato in modo accumulativo (non sovrascrive mappe esistenti, aggiunge/aggiorna lo slug corrente).
- Percorsi immagini: preferire path assoluti di forma `/VAT/images/filename.ext` per chiarezza; nei contenuti HTML interni al post usare percorsi relativi adeguati (`../images/foo.jpg`) in funzione della profondità della sezione.

---

#### Come il template riceve i dati

Quando l'utente visita la pagina del post, `index.php` inietta **due variabili** prima di `</head>`:

```html
<script>
  window.MINISITE_DATA = { "business": {...}, "brand": {...}, ... }; // dati del sito (sempre presente)
  window.POST_DATA     = { "title": "...", "description": "..." };   // dati del post (null sulla home)
</script>
```
| Variabile | Home page | Pagina post |
|-----------|:---------:|:-----------:|
| `window.MINISITE_DATA` | ✅ dati sito | ✅ dati sito |
| `window.POST_DATA` | `null` | ✅ dati post |

Il template JS controlla: `if (window.POST_DATA) { renderPost() } else { renderHome() }`

> [!NOTE]
> `MINISITE_DATA` è sempre disponibile anche nelle pagine post — il template può usarlo per header, footer, colori brand e logo coerenti con il resto del sito.

---
1.  **Immagini nei Post**: All'interno del `html_content` dei post, usa percorsi relativi per puntare alle immagini:
    *   Se il post è in root: `images/foto.jpg`
    *   Se il post è in una sezione (es. `/prodotti/`): `../images/foto.jpg`
    *   Se il post è in due sezioni (es. `/prodotti/pizze/`): `../../images/foto.jpg`
2.  **Backup**: Il sistema mantiene automaticamente gli ultimi 5 backup di ogni file (HTML o Immagine) caricato.
3.  **Case Sensitivity**: La `vat_number` viene sempre convertita in MAIUSCOLO. Il `post_path` e lo `slug` devono essere minuscoli.
