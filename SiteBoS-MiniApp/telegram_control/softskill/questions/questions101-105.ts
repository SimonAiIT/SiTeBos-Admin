import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 101,
    scenario: "Devi lasciare un \"messaggio\" su WhatsApp a qualcuno. Che \"tono\" usi di solito?",
    instructions: [
      "Immagine di un testo scritto in caratteri piccoli e formali,  tono distaccato e impersonale.",
      "Immagine di emoticon sorridenti e linguaggio semplice e diretto,  tono cordiale ma neutro.",
      "Immagine di emoticon espressive e linguaggio colloquiale e coinvolgente,  tono amichevole e \"vicino\".",
      "Immagine emoji \"esplosive\" e linguaggio iper-entusiasta,  tono enfatico e \"sopra le righe\"."
    ],
    captions: [
      "Messaggio Formale",
      "Messaggio Cordiale",
      "Messaggio Amichevole",
      "Messaggio Entusiasta"
    ],
    options: [
      {
        value: "Messaggio Formale",
        text: "(Positivo: eccellente rigore professionale e rispetto assoluto dei confini gerarchici, garanzia di serietà e precisione documentale) (Negativo: rischio di freddezza relazionale e barriera comunicativa, potenziale inefficacia nel creare ingaggio emotivo o connessione autentica)."
      },
      {
        value: "Messaggio Cordiale",
        text: "(Positivo: approccio pragmatico e funzionale che garantisce una trasmissione chiara e neutra delle informazioni senza ambiguità) (Negativo: tendenza a una comunicazione standardizzata e impersonale, limitata capacità di differenziazione e personalizzazione del messaggio)."
      },
      {
        value: "Messaggio Amichevole",
        text: "(Positivo: straordinaria capacità di creare un clima disteso e di facilitare la cooperazione attraverso la vicinanza empatica) (Negativo: potenziale vulnerabilità del prestigio professionale in contesti formali, rischio di eccessiva confidenzialità non sempre gradita)."
      },
      {
        value: "Messaggio Entusiasta",
        text: "(Positivo: potente forza trascinante e capacità di motivare l'interlocutore attraverso un'energia contagiosa e vitale) (Negativo: rischio di percezione di scarsa autenticità o enfasi manipolatoria, potenziale inefficacia in contesti che richiedono massima sobrietà e analisi razionale)."
      }
    ],
    softSkill: "Presentazione, ComunicazioneEfficace",
    characteristics: "Stile di Presentazione, Stile di Comunicazione, Capacità Persuasiva"
  },
  {
    num: 102,
    scenario: "Devi presentare una soluzione innovativa ad un cliente. Su cosa \"punti\"?",
    instructions: [
      "Immagine di una lavagna piena di formule matematiche complesse e grafici,  focus sulla complessità tecnica.",
      "Immagine di una freccia che indica dritta verso un cartello con scritto \"SOLUZIONE\",  focus diretto e lineare sulla soluzione.",
      "Immagine di un prisma che scompone la luce bianca in un arcobaleno di colori brillanti,  focus sull'attrattiva e la completezza della soluzione.",
      "Immagine di un attore teatrale che recita con passione e gesti enfatici,  focus sulla performance persuasiva e coinvolgente."
    ],
    captions: [
      "Schema Tecnico",
      "Via Diretta",
      "Arcobaleno di Soluzioni",
      "Spettacolo Persuasivo"
    ],
    options: [
      {
        value: "Schema Tecnico",
        text: "(Positivo: dimostrazione inconfutabile di competenza specialistica e rigore metodologico, proiezione di autorità tecnica assoluta) (Negativo: elevata complessità cognitiva per l'interlocutore non tecnico, rischio di alienazione del cliente e mancata comprensione del valore d'uso)."
      },
      {
        value: "Via Diretta",
        text: "(Positivo: massima efficienza comunicativa e orientamento al risultato concreto, trasparenza assoluta sulla finalità del servizio) (Negativo: presentazione potenzialmente piatta e poco memorabile, incapacità di stimolare l'immaginazione o il desiderio del cliente)."
      },
      {
        value: "Arcobaleno di Soluzioni",
        text: "(Positivo: approccio olistico e generoso che valorizza la versatilità della soluzione e la completezza del pacchetto offerto) (Negativo: rischio di dispersione informativa e mancanza di focus sui bisogni prioritari, percezione di offerta troppo generica o poco mirata)."
      },
      {
        value: "Spettacolo Persuasivo",
        text: "(Positivo: eccezionale impatto emotivo e capacità di vendere una visione trasformativa, carisma trascinante e persuasione magnetica) (Negativo: rischio di essere percepito come superficiale o retorico, potenziale scetticismo da parte di interlocutori puramente analitici e razionali)."
      }
    ],
    softSkill: "Presentazione, ComunicazioneEfficace",
    characteristics: "Stile di Presentazione, Stile di Comunicazione, Capacità Persuasiva"
  },
  {
    num: 103,
    scenario: "Devi presentare un prodotto con un \"lato oscuro\" nascosto. Come lo presenti?",
    instructions: [
      "Immagine di un prestigiatore che nasconde un coniglio nel cappello con un sorriso furbo,  nascondere completamente il lato oscuro.",
      "Immagine di un spettacolo di ombre cinesi,  non nascondere del tutto ma \"velare\" il lato oscuro.",
      "Immagine di una bilancia che pesa pregi e difetti di un oggetto,  presentare entrambi i lati in modo equilibrato.",
      "Immagine di un riflettore potente che illumina un'ombra scura proiettata sul muro,  massima trasparenza anche sugli aspetti negativi."
    ],
    captions: [
      "Trucco di Magia",
      "Velo Leggero",
      "Risvolto della Medaglia",
      "Ombra in Piena Luce"
    ],
    options: [
      {
        value: "Trucco di Magia",
        text: "(Positivo: estrema efficacia persuasiva immediata e massimizzazione del tasso di chiusura nel breve termine, focus sul risultato) (Negativo: grave carenza etica e rischio di danni reputazionali irreparabili, approccio manipolatorio che distrugge la fiducia futura)."
      },
      {
        value: "Velo Leggero",
        text: "(Positivo: abilità diplomatica nel gestire la complessità e minimizzare l'attrito commerciale senza negare l'esistenza di limiti) (Negativo: percezione di opacità o reticenza informativa, rischio di essere scoperti in una verità parziale minando la credibilità professionale)."
      },
      {
        value: "Risvolto della Medaglia",
        text: "(Positivo: eccellente trasparenza e costruzione di un rapporto basato sulla fiducia solida e reciproca onestà intellettuale) (Negativo: potenziale indebolimento dell'appeal commerciale immediato, rischio di scoraggiare clienti orientati esclusivamente ai benefici facili)."
      },
      {
        value: "Ombra in Piena Luce",
        text: "(Positivo: massima integrità deontologica e coraggio nella trasparenza radicale, garanzia di un'affidabilità etica inattaccabile) (Negativo: rischio di autosabotaggio operativo per eccesso di realismo, percezione di mancanza di pragmatismo commerciale o scarsa spinta alla vendita)."
      }
    ],
    softSkill: "Presentazione, EticaProfessionale",
    characteristics: "Etica della Presentazione, Stile di Comunicazione, Onestà vs. Persuasività"
  },
  {
    num: 104,
    scenario: "La nave sta affondando.  Come distribuisci le scialuppe di salvataggio?",
    instructions: [
      "Immagine di donne e bambini che vengono aiutati a salire per primi sulle scialuppe,  priorità assoluta ai più vulnerabili.",
      "Immagine di persone che estraggono a sorte dei biglietti per salire sulle scialuppe,  distribuzione casuale ed equa per tutti.",
      "Immagine di persone che corrono e spingono per salire per primi sulle scialuppe,  \"si salvi chi può\",  legge del più forte.",
      "Immagine di membri dell'equipaggio esperti e persone in forma fisica che vengono incaricati di gestire le scialuppe,  priorità a chi può \"fare la differenza\" per la sopravvivenza di più persone."
    ],
    captions: [
      "Prima i Fragili",
      "Sorteggio per Tutti",
      "Si Salvi Chi Può",
      "Ai Più Utili"
    ],
    options: [
      {
        value: "Prima i Fragili",
        text: "(Positivo: suprema nobiltà d'animo e orientamento alla solidarietà incondizionata, difesa dei valori umani fondamentali) (Negativo: rischio di non massimizzare l'efficacia operativa del salvataggio collettivo, approccio guidato dall'emozione più che dalla logica sistemica)."
      },
      {
        value: "Sorteggio per Tutti",
        text: "(Positivo: massima equità procedurale e rifiuto di ogni discriminazione arbitraria, garanzia di imparzialità democratica) (Negativo: potenziale inefficienza decisionale in situazioni di emergenza estrema, rifiuto di assumersi la responsabilità di una scelta meritocratica o funzionale)."
      },
      {
        value: "Si Salvi Chi Può",
        text: "(Positivo: massimizzazione della velocità di reazione individuale e pura efficienza istintiva nel garantire la propria sopravvivenza) (Negativo: totale collasso dell'etica sociale e della responsabilità collettiva, distruzione del legame umano e civico per puro egoismo)."
      },
      {
        value: "Ai Più Utili",
        text: "(Positivo: utilitarismo pragmatico finalizzato alla massimizzazione del tasso di sopravvivenza del gruppo attraverso la valorizzazione delle competenze) (Negativo: rischio di essere percepito come freddo e calcolatore, potenziale violazione del principio di uguaglianza umana universale)."
      }
    ],
    softSkill: "Equita , ResponsabilitaSociale",
    characteristics: "Equità, Responsabilità Sociale, Prioritizzazione Etica"
  },
  {
    num: 105,
    scenario: "Stai scalando una montagna difficoltosa dove tanti falliscono. Cosa vedi?",
    instructions: [
      "Immagine di uno scalatore solitario che procede spedito senza curarsi del sentiero,  solo la vetta conta,  nessuna attenzione all'impatto.",
      "Immagine di uno scalatore che procede con attenzione sul sentiero,  concentrato sulla salita ma attento a non danneggiare l'ambiente,  equilibrio tra vetta e sentiero.",
      "Immagine di uno scalatore che si ferma ad aiutare un altro scalatore in difficoltà,  priorità alla responsabilità sociale e all'aiuto reciproco.",
      "Immagine di uno scalatore che rinuncia a scalare la montagna,  nessun impegno,  nessuna \"traccia\" lasciata,  rinuncia a mettersi in gioco."
    ],
    captions: [
      "Vedo Solo la Vetta",
      "Vedo il Sentiero",
      "Vedo Chi Resta Indietro",
      "Rinuncio alla Salita"
    ],
    options: [
      {
        value: "Vedo Solo la Vetta",
        text: "(Positivo: massima focalizzazione sul successo e straordinaria determinazione nel raggiungimento di obiettivi ambiziosi e sfidanti) (Negativo: scarsa attenzione all'impatto sistemico e agli altri membri del team, rischio di individualismo tossico e danni collaterali)."
      },
      {
        value: "Vedo il Sentiero",
        text: "(Positivo: eccellente equilibrio tra ambizione individuale e responsabilità sistemica, garanzia di una crescita sostenibile nel tempo) (Negativo: potenziale rallentamento della performance estrema per eccesso di cautela, ambizione mediata dalla tutela del contesto)."
      },
      {
        value: "Vedo Chi Resta Indietro",
        text: "(Positivo: suprema responsabilità sociale e leadership servente orientata al supporto del gruppo e alla coesione collettiva) (Negativo: rischio di sacrificare lo sviluppo e il successo personale per l'assistenza continua, potenziale stallo nella crescita individuale)."
      },
      {
        value: "Rinuncio alla Salita",
        text: "(Positivo: approccio prudente e conservativo volto a evitare rischi non necessari e mantenere lo status quo di sicurezza) (Negativo: totale rinuncia al potenziale di crescita e mancanza di iniziativa, stagnazione professionale e assenza di coraggio nel mettersi in gioco)."
      }
    ],
    softSkill: "SviluppoPersonale, ResponsabilitaSociale",
    characteristics: "Sviluppo Personale vs. Impatto Sociale, Responsabilità, Altruismo"
  }
];