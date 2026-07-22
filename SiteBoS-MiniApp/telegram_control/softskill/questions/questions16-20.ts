import { Question } from "../types";

export const questions16to20: Question[] = [
  {
    num: 16,
    scenario: "L'azienda cambia software, e tutti devono imparare ad usarlo. Tu come ti comporti?",
    instructions: [
      "Immagine di una roccia inamovibile.",
      "Immagine di uno studente di scuola guida.",
      "Immagine di uno studente che studia sotto un albero.",
      "Immagine di un softhware developer concentrato a programmare."
    ],
    captions: [
      "Software Nuovo? No Grazie",
      "Il Minimo Indispensabile",
      "Imparo le Basi, Poi Piano Piano",
      "Divento Subito Esperto"
    ],
    options: [
      {
        value: "Software Nuovo? No Grazie",
        text: "(Positivo: eccellente padronanza dei processi consolidati e massima sicurezza operativa nel sistema attuale, approccio conservativo che garantisce stabilità e riduce il rischio di errori in fase di transizione) (Negativo: elevata resistenza al cambiamento e chiusura verso l'innovazione tecnologica, rischio di obsolescenza delle competenze, percezione di rigidità cognitiva che ostacola l'evoluzione aziendale)."
      },
      {
        value: "Il Minimo Indispensabile",
        text: "(Positivo: gestione pragmatica dello stress da cambiamento attraverso un adattamento focalizzato sull'essenziale, capacità di preservare energie cognitive per altre priorità operative) (Negativo: approccio minimalista che limita il potenziale dell'innovazione, mancanza di proattività nell'esplorare nuove funzionalità, rischio di rimanere in una posizione di svantaggio competitivo)."
      },
      {
        value: "Imparo le Basi, Poi Piano Piano",
        text: "(Positivo: apertura al cambiamento mediata da un apprendimento graduale e pianificato, gestione equilibrata della transizione che minimizza l'impatto ansioso, volontà di adeguamento sostenibile) (Negativo: potenziale lentezza nel raggiungere l'efficacia operativa piena, rischio di subire il cambiamento invece di guidarlo, percezione di scarsa agilità nell'apprendimento ('learning agility'))."
      },
      {
        value: "Divento Subito Esperto",
        text: "(Positivo: massimo entusiasmo per l'innovazione e rapidità d'apprendimento superiore, approccio sfidante orientato all'eccellenza tecnologica e alla leadership tecnica immediata) (Negativo: rischio di sovraccarico da performance e stress acuto, potenziale superficialità dovuta alla fretta esecutiva, possibile trascuratezza delle dinamiche di team per eccessivo focus sulla competenza individuale)."
      }
    ],
    softSkill: "GestioneDelCambiamento, Adattabilita",
    characteristics: "Adattabilità ai Nuovi Sistemi, Prontezza al Cambiamento, Proattività"
  },
  {
    num: 17,
    scenario: "Parli al telefono con qualcuno. Quanto ti viene naturale far capire come ti senti, solo con la voce?",
    instructions: [
      "Immagine di giocatore di poker durante una partita.",
      "Immagine di una faccia con una piccola smorfia, appena accennata.",
      "Immagine di una faccia espressiva ma non esagerata.",
      "Immagine di una attore sul palco."
    ],
    captions: [
      "Tono Sempre Neutro.",
      "Emozioni Minime.",
      "Emozioni Misurate.",
      "Faccio Teatro, come sempre."
    ],
    options: [
      {
        value: "Tono Sempre Neutro.",
        text: "(Positivo: controllo totale del linguaggio para-verbale e massima razionalità comunicativa, capacità di separare nettamente l'emozione dal contenuto oggettivo del messaggio, eccellente self-control) (Negativo: rischio di percezione di freddezza o distacco empatico, mancanza di calore umano nella comunicazione telefonica, potenziale difficoltà nel creare una connessione relazionale autentica)."
      },
      {
        value: "Emozioni Minime.",
        text: "(Positivo: discrezione e riservatezza professionale, approccio misurato che evita l'invasività emotiva in contesti formali, mantenimento di un tono sobrio e controllato) (Negativo: rischio di ambiguità emotiva e scarsa espressività, possibile incomprensione degli stati d'animo da parte dell'interlocutore, percezione di una comunicazione poco coinvolgente o piatta)."
      },
      {
        value: "Emozioni Misurate.",
        text: "(Positivo: comunicazione para-verbale naturale ed efficace, capacità di trasmettere autenticità ed empatia attraverso la voce, eccellente equilibrio tra controllo professionale ed espressività umana) (Negativo: potenziale vulnerabilità in situazioni di altissima tensione dove l'emozione potrebbe trapelare eccessivamente, rischio di minor distacco analitico in contesti puramente razionali)."
      },
      {
        value: "Faccio Teatro, come sempre.",
        text: "(Positivo: carisma comunicativo superiore e capacità di coinvolgimento emotivo totale, attitudine a trasmettere passione ed entusiasmo influenzando positivamente l'interlocutore) (Negativo: rischio di percezione di inautenticità o eccessiva drammatizzazione, reazioni emotive potenzialmente sproporzionate rispetto al contesto, possibile invasività emotiva percepita come manipolatoria)."
      }
    ],
    softSkill: "ComunicazioneEfficace, Empatia",
    characteristics: "Espressività Emotiva, Stile di Comunicazione, Consapevolezza Emotiva"
  },
  {
    num: 18,
    scenario: "Quanto pensi di essere capace di ispirare e guidare le persone?",
    instructions: [
      "Immagine di lupo che cammina da solo, nessuno lo segue.",
      "Immagine di un gruppetto di lupi che cammina insieme, senza una guida chiara.",
      "Immagine di un gruppo branco di lupi che segue uno.",
      "Immagine di una folla oceanica di lupi che ulula al leader sulla rupe, con entusiasmo."
    ],
    captions: [
      "Io sono un Lupo Solitario",
      "Siamo una Piccola Banda",
      "Seguito Quel Tanto che Basta",
      "Voglio essere Acclamato dalla Folla"
    ],
    options: [
      {
        value: "Io sono un Lupo Solitario",
        text: "(Positivo: massima autonomia decisionale e indipendenza operativa ('self-reliance'), capacità di operare efficacemente senza bisogno di validazione esterna o seguito, focus totale sul risultato individuale) (Negativo: mancanza di propensione alla leadership e tendenza all'isolamento professionale, difficoltà nel lavoro di squadra e nell'influenzare positivamente gli altri, percezione di individualismo spinto)."
      },
      {
        value: "Siamo una Piccola Banda",
        text: "(Positivo: leadership informale efficace in cerchie ristrette, capacità di creare legami fiduciari profondi e personali, approccio collaborativo non gerarchico basato sulla stima reciproca) (Negativo: limitata ambizione di leadership su vasta scala, potenziale difficoltà a emergere in contesti complessi e competitivi, percezione di influenza circoscritta a contesti 'micro')."
      },
      {
        value: "Seguito Quel Tanto che Basta",
        text: "(Positivo: leadership funzionale e pragmatica orientata al risultato concreto, capacità di guidare team operativi con equilibrio senza eccessi di protagonismo, affidabilità gestionale) (Negativo: mancanza di carisma ispirazionale e slancio visionario, potenziale difficoltà nel motivare il personale in fasi di crisi o cambiamento profondo, percezione di leadership solida ma non trascinante)."
      },
      {
        value: "Voglio essere Acclamato dalla Folla",
        text: "(Positivo: leadership carismatica superiore e visione trascinante, capacità innata di ispirare e muovere grandi gruppi verso obiettivi ambiziosi, massima fiducia nel proprio ascendente sociale) (Negativo: rischio di narcisismo ipertrofico e autoritarismo, potenziale tendenza alla creazione di un culto della personalità, difficoltà nella gestione della delega e nel riconoscimento del valore altrui)."
      }
    ],
    softSkill: "Leadership, GestioneDelTeam",
    characteristics: "Potenziale di Leadership, Carisma, Influence Sociale"
  },
  {
    num: 19,
    scenario: "Assisti a una scena in cui un collega tratta male o prende in giro un collaboratore più giovane. Come reagisci?",
    instructions: [
      "Immagine di uno struzzo con la testa sotto la sabbia.",
      "Immagine di una persona di schiena, che dà le spalle alla scena.",
      "Immagine di una mano che passa di nascosto un biglietto di supporto a un'altra mano.",
      "Immagine di un pugno chiuso che si alza in segno di protesta."
    ],
    captions: [
      "Non sono Affari Miei",
      "Disapprovo in Silenzio",
      "Supporto in Privato",
      "Rimprovero il Collega Anziano"
    ],
    options: [
      {
        value: "Non sono Affari Miei",
        text: "(Positivo: massima conservazione dell'energia personale ed evitamento di conflitti interpersonali altrui, pragmatismo focalizzato esclusivamente sui propri obiettivi operativi) (Negativo: indifferenza etica e collusione passiva con comportamenti inaccettabili, mancanza di coraggio civile e solidarietà, percezione di scarsa integrità morale in contesti di team)."
      },
      {
        value: "Disapprovo in Silenzio",
        text: "(Positivo: consapevolezza critica del problema e disapprovazione interna, approccio cauto che evita rischi personali immediati pur riconoscendo la scorrettezza dell'azione) (Negativo: omissione di soccorso relazionale e mancanza di assertività, incapacità di tradurre il disagio in azione risolutiva, percezione di fragilità caratteriale di fronte all'ingiustizia)."
      },
      {
        value: "Supporto in Privato",
        text: "(Positivo: supporto empatico concreto verso la vittima e approccio orientato alla cura della relazione in modo discreto, solidarietà umana efficace nel breve periodo) (Negativo: mancata denuncia pubblica del comportamento deviante, inefficacia nel prevenire future molestie da parte dell'aggressore, percezione di un intervento parziale che non affronta il problema alla radice)."
      },
      {
        value: "Rimprovero il Collega Anziano",
        text: "(Positivo: integrità etica superiore e coraggio assertivo nella difesa dei più deboli, affermazione pubblica di valori non negoziabili di rispetto e professionalità, leadership morale) (Negativo: rischio di escalation conflittuale immediata e polarizzazione dell'ambiente, percezione di aggressività o giustizialismo, potenziale difficoltà diplomatica se non gestito con intelligenza emotiva)."
      }
    ],
    softSkill: "TematicheSociali, DiversitaEInclusione",
    characteristics: "Affrontare Molestie, Condotta Etica, Assertività"
  },
  {
    num: 20,
    scenario: "Sei al ristorante, bar, o un posto simile. Come ti comporti di solito con il Personale?",
    instructions: [
      "Immagine di una persona stilizzata, seduta ad un tavolino di un bar.",
      "Immagine di due sagome stilizzate che si passano un pacco, transazione veloce.",
      "Immagine di tre sagome stilizzate che parlano amichevolmente,  cerchio sociale ristretto.",
      "Immagine di tante sagome stilizzate che fanno festa insieme,  integrazione totale."
    ],
    captions: [
      "Cliente Fantasma",
      "Solo per il Servizio",
      "Cordiale e Socievole",
      "Faccio Festa con Tutti"
    ],
    options: [
      {
        value: "Cliente Fantasma",
        text: "(Positivo: massimo rispetto della privacy altrui e discrezione assoluta, approccio ultra-efficiente focalizzato sulla transazione economica pura, indipendenza relazionale) (Negativo: chiusura sociale e percezione di freddezza o distacco, opportunità relazionali perse, mancanza di calore umano e di connessione minima con l'ambiente circostante)."
      },
      {
        value: "Solo per il Servizio",
        text: "(Positivo: efficienza operativa e rispetto dei ruoli professionali, approccio formale ed educato orientato alla rapidità, linearità nell'interazione di servizio) (Negativo: percezione di comunicazione puramente utilitaristica, mancanza di empatia relazionale spontanea, scarsa propensione a creare un clima di benessere sociale diffuso)."
      },
      {
        value: "Cordiale e Socievole",
        text: "(Positivo: socievolezza equilibrata e cortesia relazionale, capacità di creare un clima piacevole e cordiale senza risultare invadenti, gestione corretta della 'socialità casuale') (Negativo: interazione potenzialmente superficiale, rischio di rimanere in una zona di comfort relazionale limitata, possibile mancanza di approfondimento nel networking spontaneo)."
      },
      {
        value: "Faccio Festa con Tutti",
        text: "(Positivo: estroversione superiore e facilità estrema nel creare nuove connessioni, approccio carismatico ed entusiasta che valorizza l'interazione umana come risorsa prioritaria) (Negativo: rischio di invadenza e difficoltà nel percepire i confini e lo spazio personale altrui, potenziale percezione di eccessiva espansività inappropriata al contesto, mancanza di discrezione)."
      }
    ],
    softSkill: "RelazioniInterpersonali, ComunicazioneEfficace",
    characteristics: "Introversione vs. Estroversione, Comfort Sociale, Apertura"
  }
];
