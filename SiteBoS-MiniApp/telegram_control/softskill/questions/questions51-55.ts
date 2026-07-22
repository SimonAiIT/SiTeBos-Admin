import { Question } from "../types";

export const questions51to55: Question[] = [
  {
    num: 51,
    scenario: "Scegli un ristorante per la pausa pranzo con tutti i tuoi colleghi",
    instructions: [
      "Immagine di un ristorante di lusso, elegante e con prezzi elevati, magari con una sola persona seduta.",
      "Immagine di un fast food anonimo e standardizzato,  con poca atmosfera.",
      "Immagine di un ristorantino familiare accogliente e informale,  con tavoli apparecchiati in modo semplice.",
      "Immagine di un ristorante vegano/vegetariano luminoso e accogliente,  con un menu che indica opzioni senza glutine e per diverse intolleranze."
    ],
    captions: [
      "Ristorante Stellato",
      "Fast Food",
      "Ristorantino Familiare",
      "Vegano/Vegetariano"
    ],
    options: [
      {
        value: "Ristorante Stellato",
        text: "(Positivo: orientamento all'eccellenza e al prestigio, attitudine a elevare gli standard qualitativi delle occasioni conviviali del team) (Negativo: rischio di bias di prestigio ed esclusività socio-economica, scarsa sensibilità verso la diversità di budget e gusti dei collaboratori)."
      },
      {
        value: "Fast Food",
        text: "(Positivo: massima efficienza operativa e ottimizzazione dei tempi, approccio pragmatico focalizzato sulla rapidità e sulla linearità dei processi) (Negativo: trascuratezza della dimensione conviviale e del team building informale, percezione di scarsa attenzione alla qualità della vita lavorativa)."
      },
      {
        value: "Ristorantino Familiare",
        text: "(Positivo: promozione di un clima conviviale autentico e inclusivo nella sua semplicità, valorizzazione della spontaneità relazionale e del comfort psicologico) (Negativo: potenziale mancanza di innovazione e scarsa attenzione a specifiche necessità alimentari o dietetiche complesse del gruppo)."
      },
      {
        value: "Vegano/Vegetariano",
        text: "(Positivo: eccellente sensibilità inclusiva verso scelte etiche e restrizioni alimentari, attitudine proattiva alla creazione di un ambiente accogliente per ogni diversità) (Negativo: rischio di percepita militanza ideologica che potrebbe limitare la libertà di scelta o il gradimento dei membri più tradizionalisti del team)."
      }
    ],
    softSkill: "RelazioniInterpersonali, Empatia",
    characteristics: "Lavoro di Squadra, Empatia, Inclusività, Stile Decisionale"
  },
  {
    num: 52,
    scenario: "Una collega subisce molestie verbali pesanti da un altro collega. Come reagisci?",
    instructions: [
      "Immagine di una mano tesa, pronta ad afferrare un'altra mano in difficoltà.",
      "Immagine di una mano che porge una spazzola per \"spazzare via\" lo sporco, minimizzando il problema.",
      "Immagine di due mani che si stringono di nascosto sotto un tavolo,  accordo informale.",
      "Immagine di una mano che alza un cartello di \"stop\" con forza,  segnalazione formale."
    ],
    captions: [
      "Scelgo di Aiutare",
      "Scelgo di Minimizzare",
      "Scelgo la Gestione Informale",
      "Scelgo la Segnalazione Formale"
    ],
    options: [
      {
        value: "Scelgo di Aiutare",
        text: "(Positivo: spiccata empatia e solidarietà attiva, prontezza nel fornire supporto emotivo immediato e vicinanza umana in situazioni di crisi) (Negativo: rischio di intervento puramente reattivo e non strategico, mancanza di un approccio strutturato volto alla risoluzione sistemica della problematica)."
      },
      {
        value: "Scelgo di Minimizzare",
        text: "(Positivo: mantenimento di una neutralità apparente finalizzata alla tutela della propria tranquillità immediata e all'evitamento di complicazioni) (Negativo: grave omissione etica e complicità silenziosa con dinamiche tossiche, totale mancanza di integrità e coraggio civile)."
      },
      {
        value: "Scelgo la Gestione Informale",
        text: "(Positivo: attitudine alla mediazione diplomatica volta a risolvere il conflitto con discrezione e rapidità, ricerca di armonia relazionale) (Negativo: rischio di inefficacia protettiva per la vittima, potenziale sottovalutazione della gravità oggettiva delle molestie per eccesso di prudenza)."
      },
      {
        value: "Scelgo la Segnalazione Formale",
        text: "(Positivo: massimo rispetto delle procedure di 'compliance' e tolleranza zero verso le condotte improprie, attivazione dei protocolli di tutela professionale) (Negativo: potenziale irrigidimento delle relazioni interne, rischio di essere percepiti come eccessivamente burocratici se non accompagnato da supporto umano)."
      }
    ],
    softSkill: "TematicheSociali, RelazioniImproprie",
    characteristics: "Scelta Etica, Affrontare Molestie, Assertività"
  },
  {
    num: 53,
    scenario: "Quanto ti senti osservato e \"sotto esame\" dagli altri, di solito?",
    instructions: [
      "Immagine di mani che piantano un seme con gesto sicuro e determinato, ignorando l'ambiente circostante.",
      "Immagine di mani che lavorano a maglia in modo fluido e regolare,  con un'occhiata occasionale all'esterno.",
      "Immagine di mani che si stringono nervosamente e si nascondono sotto un tavolo.",
      "Immagine di mani completamente bloccate e immobili,  come statue di cera."
    ],
    captions: [
      "Scelgo di Ignorare gli Sguardi",
      "Scelgo di Essere Consapevole, Ma Non Ossessionato",
      "Scelgo di Nascondermi dal Giudizio",
      "Scelgo la Paralisi Totale"
    ],
    options: [
      {
        value: "Scelgo di Ignorare gli Sguardi",
        text: "(Positivo: totale autonomia dal giudizio esterno e incrollabile fiducia nelle proprie direttrici d'azione, indipendenza cognitiva superiore) (Negativo: potenziale insensibilità ai feedback ambientali e alle dinamiche di contesto, rischio di apparire autoreferenziali o distaccati)."
      },
      {
        value: "Scelgo di Essere Consapevole, Ma Non Ossessionato",
        text: "(Positivo: equilibrio ottimale tra autoconsapevolezza sociale e sicurezza interiore, capacità di gestire l'immagine pubblica con naturalezza e professionalità) (Negativo: rischio di sottile conformismo per eccessiva preoccupazione di mantenere un'immagine sempre impeccabile e socialmente accettata)."
      },
      {
        value: "Scelgo di Nascondermi dal Giudizio",
        text: "(Positivo: elevata tutela della propria 'privacy' e ricerca di contesti lavorativi protetti, attitudine alla riflessione introspettiva discreta) (Negativo: auto-limitazione del proprio potenziale di visibilità e leadership, insicurezza sociale che può frenare le opportunità di networking)."
      },
      {
        value: "Scelgo la Paralisi Totale",
        text: "(Positivo: estrema lucidità nel riconoscere i propri limiti emotivi, punto di partenza per un'analisi profonda delle proprie barriere psicologiche) (Negativo: ansia sociale paralizzante e blocco operativo critico, totale vulnerabilità al giudizio altrui che impedisce ogni iniziativa autonoma)."
      }
    ],
    softSkill: "FiduciaInSeStessi, Autocritica",
    characteristics: "Scelta Emotiva, Gestione dell'Ansia Sociale, Fiducia in Sé"
  },
  {
    num: 54,
    scenario: "Lavoro da sogno o stabilità affettiva?",
    instructions: [
      "Immagine di una casa accogliente e familiare, interni rassicuranti.",
      "Immagine di una persona pensierosa che guarda un orizzonte lontano, indecisa.",
      "Immagine di un biglietto del treno pronto per essere timbrato, simbolo di partenza.",
      "Immagine di una bussola che indica tutte le direzioni cardinali contemporaneamente, libertà totale."
    ],
    captions: [
      "Casa è Casa",
      "Ci Penso Su",
      "Nuove Avventure",
      "Il Mondo Mi Aspetta"
    ],
    options: [
      {
        value: "Casa è Casa",
        text: "(Positivo: massima priorità alla stabilità emotiva e al radicamento territoriale come pilastri del benessere individuale, lealtà ai legami affettivi) (Negativo: rinuncia a sfide professionali evolutive, potenziale stagnazione delle ambizioni di carriera per eccessivo attaccamento alla sicurezza)."
      },
      {
        value: "Ci Penso Su",
        text: "(Positivo: approccio analitico e ponderato basato sulla ricerca di una sintesi sostenibile tra vita privata e ambizioni professionali, cautela strategica) (Negativo: rischio di immobilismo decisionale e perdita dell'opportunità per eccesso di ponderazione, insicurezza nella definizione delle proprie priorità reali)."
      },
      {
        value: "Nuove Avventure",
        text: "(Positivo: forte orientamento alla crescita e determinazione nel cogliere sfide professionali stimolanti, spirito di esplorazione superiore) (Negativo: potenziale sottovalutazione dei costi emotivi e dello stress da sradicamento, rischio di agire impulsivamente trascurando i legami significativi)."
      },
      {
        value: "Il Mondo Mi Aspetta",
        text: "(Positivo: visione cosmopolita e indipendenza geografica radicale, massima flessibilità e adattamento a contesti internazionali e multiculturali) (Negativo: mancanza di stabilità relazionale e territoriale a lungo termine, percezione di un distacco affettivo potenzialmente alienante o superficiale)."
      }
    ],
    softSkill: "Adattabilita, PropensioneAlRischio",
    characteristics: "Adattabilità, Preferenza Geografica, Priorità di Carriera"
  },
  {
    num: 55,
    scenario: "Che \"stagione\" ti sembra di vivere?",
    instructions: [
      "Immagine di un campo di grano dorato e rigoglioso al sole,  simbolo di abbondanza e prosperità.",
      "Immagine di un cielo sereno e limpido,  senza nuvole,  calma e stabilità.",
      "Immagine di un cielo leggermente nuvoloso,  qualche nube passeggera,  incertezza moderata.",
      "Immagine di un cielo tempestoso e scuro,  fulmini e tempesta in arrivo,  difficoltà e crisi."
    ],
    captions: [
      "Estate",
      "Primavera",
      "Autunno",
      "Inverno"
    ],
    options: [
      {
        value: "Estate",
        text: "(Positivo: massimo ottimismo e fiducia nella fase di espansione e successo corrente, percezione di autorealizzazione e pienezza professionale) (Negativo: rischio di eccessiva autocompiacenza o ingenuità strategica, mancanza di pianificazione per fasi di mercato o carriere meno favorevoli)."
      },
      {
        value: "Primavera",
        text: "(Positivo: equilibrio emotivo e stabilità rassicurante, focalizzazione costruttiva sul presente e sulla crescita incrementale controllata) (Negativo: potenziale mancanza di slancio ambizioso e spinta verso traguardi dirompenti, rischio di adagiarsi in una routine troppo conservativa)."
      },
      {
        value: "Autunno",
        text: "(Positivo: realismo lucido e capacità di gestire l'incertezza con pragmatismo preparatorio, attitudine alla prevenzione dei rischi futuri) (Negativo: accumulo di ansia anticipatoria e ipervigilanza, visione potenzialmente limitata dalle preoccupazioni per le sfide imminenti)."
      },
      {
        value: "Inverno",
        text: "(Positivo: estrema consapevolezza della criticità e opportunità di trasformazione radicale ('rinascita'), resilienza forgiata dalle difficoltà) (Negativo: pessimismo cronico e percezione di vulnerabilità paralizzante, blocco dell'iniziativa per timore di esiti catastrofici o crisi insuperabili)."
      }
    ],
    softSkill: "FinanzaPersonale, GestioneDelTempo",
    characteristics: "Stabilità Finanziaria, Prospettive Economiche, Capacità di Gestione Finanziaria"
  }
];
