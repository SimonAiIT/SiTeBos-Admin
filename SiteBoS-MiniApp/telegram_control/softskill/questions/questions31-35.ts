import { Question } from "../types";

export const questions31to35: Question[] = [
  {
    num: 31,
    scenario: "Immagina di essere al centro dell'attenzione. Come ti senti di solito in queste situazioni?",
    instructions: [
      "Immagine di un attore che si gode il palco.",
      "Immagine di un oratore che parla davanti a un pubblico.",
      "Immagine di qualcuno che canta ad un karaoke",
      "Immagine di qualcuno che scappa via dal palcoscenico."
    ],
    captions: [
      "Star del Palco",
      "Attenzione ok, Ma Non Troppa",
      "Un Poco di Imbarazzo",
      "Panico da Palcoscenico"
    ],
    options: [
      {
        value: "Star del Palco",
        text: "(Positivo: eccellente sicurezza di sé e naturalezza nell'esposizione pubblica, carisma scenico superiore che facilita la leadership visibile e l'influenza sociale) (Negativo: rischio di deriva egocentrica e ricerca compulsiva di validazione esterna, potenziale percezione di narcisismo, difficoltà in ruoli che richiedono discrezione)."
      },
      {
        value: "Attenzione ok, Ma Non Troppa",
        text: "(Positivo: equilibrio ottimale tra presenza scenica e sobrietà professionale, capacità di gestire la visibilità con misura senza bisogno di protagonismo, affidabilità riconosciuta) (Negativo: potenziale sottoutilizzo del proprio potenziale di influenza su grandi gruppi, rischio di rimanere in ombra in contesti iper-competitivi)."
      },
      {
        value: "Un Poco di Imbarazzo",
        text: "(Positivo: orientamento alla sostanza e al contenuto piuttosto che alla forma, umiltà intellettuale e preferenza per profili operativi concreti e non autoreferenziali) (Negativo: rischio di auto-limitazione della carriera per evitamento delle occasioni di visibilità, potenziale difficoltà nella comunicazione persuasiva pubblica)."
      },
      {
        value: "Panico da Palcoscenico",
        text: "(Positivo: eccellenza potenziale in ruoli tecnici o analitici di alta precisione che richiedono concentrazione solitaria e distacco dalle dinamiche di ribalta) (Negativo: ansia sociale paralizzante e blocco comunicativo in pubblico, incapacità di sostenere ruoli di rappresentanza o leadership visibile)."
      }
    ],
    softSkill: "FiduciaInSeStessi, Autocritica",
    characteristics: "Introversione vs. Estroversione, Ansia Sociale, Fiducia in Sé"
  },
  {
    num: 32,
    scenario: "Quando proponi una nuova idea o un cambiamento, quanto è facile per te ottenere il consenso degli altri?",
    instructions: [
      "Immagine di semi di tarassaco che volano leggeri nel vento.",
      "Immagine di una mano che accoglie delicatamente un uccellino.",
      "Immagine di una persona che spinge con forza una porta pesante per aprirla.",
      "Immagine di una palla che rimbalza contro un muro di gomma e torna indietro."
    ],
    captions: [
      "Le mie Idee Volano",
      "Mi Ascoltano con Qualche Riserva",
      "Devo Spingere per Farle Passare",
      "Trovo sempre un Muro di Gomma"
    ],
    options: [
      {
        value: "Le mie Idee Volano",
        text: "(Positivo: carisma persuasivo superiore e naturale ascendente sugli altri, capacità di generare consenso immediato attraverso una comunicazione visionaria e coinvolgente) (Negativo: rischio di eccessiva sicurezza che sfocia nell'arroganza, potenziale sottovalutazione del feedback critico, percezione di uno stile impositivo)."
      },
      {
        value: "Mi Ascoltano con Qualche Riserva",
        text: "(Positivo: approccio dialettico e razionale basato sull'argomentazione logica, attitudine alla negoziazione costruttiva e alla ricerca di un consenso ponderato) (Negativo: potenziale lentezza nel processo decisionale collettivo, rischio di inefficacia con interlocutori guidati da spinte emotive o irrazionali)."
      },
      {
        value: "Devo Spingere per Farle Passare",
        text: "(Positivo: resilienza e tenacia incrollabile nella difesa delle proprie visioni, capacità di superare resistenze ambientali attraverso la determinazione e la forza di volontà) (Negativo: elevato rischio di conflittualità interpersonale, percezione di rigidità cognitiva o testardaggine, possibile logoramento del clima di team)."
      },
      {
        value: "Trovo sempre un Muro di Gomma",
        text: "(Positivo: attitudine all'adattamento flessibile in contesti ostili, capacità di preservare l'integrità delle proprie idee evitando scontri frontali logoranti e improduttivi) (Negativo: percezione di impotenza relazionale e frustrazione, mancanza di assertività persuasiva, rischio di rinuncia sistematica all'influenza sociale)."
      }
    ],
    softSkill: "Negoziazione, ComunicazioneEfficace",
    characteristics: "Capacità di Persuasione, Influence, Efficacia Comunicativa"
  },
  {
    num: 33,
    scenario: "A che punto della tua vita hai raggiunto la piena indipendenza economica, senza più contare sull'aiuto della tua famiglia?",
    instructions: [
      "Immagine di un ragazzino che cammina sicuro.",
      "Immagine di un giovane adulto che sorride.",
      "Immagine di una persona adulta, nel pieno delle sue forze.",
      "Immagine di una persona anziana che guarda lontano."
    ],
    captions: [
      "Adolescente",
      "Giovane",
      "Adulto ",
      "Troppo Tardi"
    ],
    options: [
      {
        value: "Adolescente",
        text: "(Positivo: precocità nell'assunzione di responsabilità e forte orientamento all'autonomia ('early-bloomer'), spirito d'iniziativa eccezionale e resilienza economica) (Negativo: potenziale accelerazione forzata dei processi maturativi con sacrificio di fasi esplorative, rischio di eccessiva focalizzazione sulla dimensione utilitaristica)."
      },
      {
        value: "Giovane",
        text: "(Positivo: allineamento ottimale alle tappe evolutive sociali e corretto bilanciamento tra formazione e autonomia, integrazione fluida nel mondo del lavoro) (Negativo: rischio di eccessivo conformismo ai percorsi standardizzati, potenziale mancanza di sperimentazione fuori dagli schemi convenzionali)."
      },
      {
        value: "Adulto ",
        text: "(Positivo: approccio ponderato e consolidamento delle competenze prima del salto nell'autonomia totale, crescita strutturata e metodica delle risorse personali) (Negativo: potenziale ritardo nell'acquisizione di piena ownership decisionale, rischio di dipendenza prolungata da sistemi di supporto esterni)."
      },
      {
        value: "Troppo Tardi",
        text: "(Positivo: focalizzazione estrema sulla preparazione e sulla solidità delle basi prima dell'indipendenza, maturazione profonda dei processi interni) (Negativo: vulnerabilità prolungata e possibile percezione di inadeguatezza sociale, mancanza di esperienza diretta nella gestione proattiva del rischio economico in giovane età)."
      }
    ],
    softSkill: "Autodisciplina, Autocritica",
    characteristics: "Indipendenza, Responsabilità, Livello di Maturità"
  },
  {
    num: 34,
    scenario: "Ti viene assegnato un compito estremamente noioso e ripetitivo. Qual è la tua strategia per portarlo a termine?",
    instructions: [
      "Immagine di una sedia vuota davanti a una scrivania ingombra di scartoffie.",
      "Immagine di una catena di montaggio veloce e ripetitiva",
      "Immagine di una persona che sgranocchia snack e beve bibite mentre lavora.",
      "Immagine di un Monaco che medita pazientemente in un giardino zen."
    ],
    captions: [
      "Rimando a Domani ",
      "Faccio il Compitino e Via",
      "Mi Distraggo e Cerco di Farlo Passare",
      "Trovo un Senso Anche nella Noia"
    ],
    options: [
      {
        value: "Rimando a Domani ",
        text: "(Positivo: capacità di gestire il carico emotivo immediato evitando l'avversione totale verso il compito, flessibilità nella pianificazione del lavoro in base allo stato d'animo) (Negativo: elevata tendenza alla procrastinazione disfunzionale, scarsa tolleranza alla frustrazione operativa, rischio di accumulo di scadenze critiche)."
      },
      {
        value: "Faccio il Compitino e Via",
        text: "(Positivo: pragmatismo ed efficienza esecutiva focalizzata sull'essenziale, capacità di chiudere processi noiosi con il minimo dispendio di energia cognitiva) (Negativo: orientamento alla mediocrità prestazionale in compiti non stimolanti, mancanza di attenzione ai dettagli, percezione di disimpegno qualitativo)."
      },
      {
        value: "Mi Distraggo e Cerco di Farlo Passare",
        text: "(Positivo: creatività nella gestione del disagio e attitudine al multitasking compensativo per mantenere alto il morale durante la routine) (Negativo: calo drastico della concentrazione e della precisione, rischio elevato di errori dovuti alla superficialità, inefficienza operativa causata dalla frammentazione dell'attenzione)."
      },
      {
        value: "Trovo un Senso Anche nella Noia",
        text: "(Positivo: autodisciplina superiore e forte etica del dovere ('conscientiousness'), capacità di trasformare la routine in un esercizio di precisione e padronanza) (Negativo: rischio di eccessiva rigidità e perfezionismo improduttivo, potenziale stress da iper-responsabilizzazione in attività a basso valore aggiunto)."
      }
    ],
    softSkill: "Autodisciplina, PianificazioneEOrganizzazione",
    characteristics: "Gestione della Noia, Autodisciplina, Motivazione Intrinseca, Resilienza alla Routine"
  },
  {
    num: 35,
    scenario: "Ricevi una critica dura che ritieni profondamente ingiusta e non meritata. Qual è la tua reazione interiore?",
    instructions: [
      "Immagine di un diamante splendente e intatto.",
      "Immagine di un fiume che scorre placido e continua il suo corso.",
      "Immagine di una persona seduta in posa pensierosa con degli ingranaggi che girano nella testa.",
      "Immagine di una scultura di vetro fragile che si frantuma in mille pezzi."
    ],
    captions: [
      "Non Mi Tocca Proprio",
      "Non me ne curo e Passo Oltre",
      "Ci Penso Su, Rifletto e Analizzo",
      "Mi Sento Ferito e mi Infrango"
    ],
    options: [
      {
        value: "Non Mi Tocca Proprio",
        text: "(Positivo: incrollabile fiducia in sé e resilienza ai giudizi ingiusti, capacità di mantenere un'immagine di sé integra nonostante le pressioni esterne negative) (Negativo: potenziale cecità verso il feedback correttivo, rischio di arroganza percepita, chiusura verso il miglioramento continuo)."
      },
      {
        value: "Non me ne curo e Passo Oltre",
        text: "(Positivo: eccellente pragmatismo emotivo e rapidità di elaborazione del feedback, attitudine a superare i conflitti senza rimuginazioni improduttive) (Negativo: rischio di superficialità nell'analisi delle proprie aree di miglioramento, potenziale percezione di indifferenza o scarsa sensibilità relazionale)."
      },
      {
        value: "Ci Penso Su, Rifletto e Analizzo",
        text: "(Positivo: alta capacità riflessiva e orientamento alla crescita personale attraverso l'autocritica costruttiva, umiltà e apertura all'apprendimento) (Negativo: vulnerabilità alla rimuginazione eccessiva e perdita di sicurezza di sé per sovraccarico analitico, rischio di farsi condizionare troppo dal giudizio altrui)."
      },
      {
        value: "Mi Sento Ferito e mi Infrango",
        text: "(Positivo: estrema sensibilità interpersonale e desiderio profondo di armonia e riconoscimento, attitudine a vivere con intensità le dinamiche relazionali) (Negativo: fragilità emotiva critica e bassa resilienza, paralisi operativa di fronte al giudizio negativo, dipendenza totale dall'approvazione esterna per l'equilibrio psicologico)."
      }
    ],
    softSkill: "Resilienza, Autocritica",
    characteristics: "Resilienza Emotiva, Sensibilità alla Critica, Autostima"
  }
];
