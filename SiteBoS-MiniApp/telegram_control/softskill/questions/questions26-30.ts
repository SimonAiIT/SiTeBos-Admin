
import { Question } from "../types";

export const questions26to30: Question[] = [
  {
    num: 26,
    scenario: "Guardando al tuo percorso fino ad oggi, come descriveresti le occasioni che hai incontrato?",
    instructions: [
      "Immagine di una porta chiusa.",
      "Immagine di una porta socchiusa.",
      "Immagine di una porta aperta.",
      "Immagine di tante porte aperte e corridoi luminosi."
    ],
    captions: [
      "Porte Chiuse",
      "Pochi Spiragli",
      "Porte Aperte",
      "Molte Opportunità"
    ],    options: [
      {
        value: "Porte Chiuse",
        text: "(Positivo: alta resilienza psicologica e capacità di sviluppare 'grit' (tenacia) in contesti avversi, attitudine al superamento degli ostacoli attraverso la forza di volontà individuale) (Negativo: rischio di deriva verso il vittimismo e un locus of control esterno, percezione limitante delle opportunità che può generare immobilismo e rassegnazione)."
      },
      {
        value: "Pochi Spiragli",
        text: "(Positivo: realismo pragmatico e gestione equilibrata delle aspettative, capacità di muoversi con cautela in contesti complessi senza farsi influenzare da facili entusiasmi) (Negativo: potenziale mancanza di proattività nel creare nuove opportunità, rischio di accontentarsi dello status quo per timore di fallire, ambizione contenuta)."
      },
      {
        value: "Porte Aperte",
        text: "(Positivo: eccellente equilibrio emotivo e soddisfazione per il percorso compiuto, capacità di valorizzare le risorse disponibili mantenendo una stabilità psicologica rassicurante) (Negativo: potenziale stagnazione professionale per mancanza di stimoli evolutivi, rischio di perdita di competitività in contesti dinamici, ambizione moderata)."
      },
      {
        value: "Molte Opportunità",
        text: "(Positivo: ottimismo proattivo superiore e mentalità orientata all'abbondanza ('abundance mindset'), capacità di trasformare ogni criticità in opportunità di crescita) (Negativo: rischio di sottovalutazione dei pericoli reali e ingenuità strategica, potenziale dispersione di energie su troppi fronti, tendenza a ignorare i segnali d'allarme)."
      }
    ],
    softSkill: "Innovazione, MenteAperta",
    characteristics: "Ottimismo, Proattività, Prospettiva sulla Vita"
  },
  {
    num: 27,
    scenario: "Quanto fai fatica di solito a fare nuove amicizie?",
    instructions: [
      "Immagine di un cane cool con occhiali da sole, rilassato su una sdraio, completamente solo su una piccola isola deserta paradisiaca.",
      "Immagine di una porta socchiusa, appena aperta.",
      "Immagine di un ponte che si estende verso l'orizzonte, che collega due sponde.",
      "Immagine di fuochi d'artificio che esplodono in mille colori e luci, illuminando la notte."
    ],
    captions: [
      "Sto Meglio da Solo",
      "Ci Metto un Po'",
      "Faccio Amicizia, Ma Non Subito",
      "Amici Al Volo"
    ],
    options: [
      {
        value: "Sto Meglio da Solo",
        text: "(Positivo: forte indipendenza emotiva e autonomia sociale ('self-reliance'), capacità di operare con efficacia senza dipendere dal riconoscimento o dalla compagnia altrui) (Negativo: rischio di isolamento e chiusura autoreferenziale, potenziale difficoltà nel networking e nella collaborazione di team, percezione di distacco sociale)."
      },
      {
        value: "Ci Metto un Po'",
        text: "(Positivo: prudenza relazionale e capacità di costruire legami profondi basati sulla fiducia e sulla selettività qualitativa, affidabilità e lealtà nel lungo periodo) (Negativo: lentezza nell'integrazione sociale immediata, potenziale perdita di opportunità di networking rapido, percezione iniziale di eccessiva riservatezza o timidezza)."
      },
      {
        value: "Faccio Amicizia, Ma Non Subito",
        text: "(Positivo: socievolezza equilibrata e gradualità nell'apertura relazionale, capacità di gestire il contatto sociale con misura e rispetto dei tempi altrui) (Negativo: rischio di non essere percepiti come immediatamente accessibili in contesti dinamici, potenziale minor impatto comunicativo al primo incontro)."
      },
      {
        value: "Amici Al Volo",
        text: "(Positivo: estroversione superiore e agilità nel creare connessioni immediate, carisma sociale spiccato e facilità nel rompere il ghiaccio in ogni contesto) (Negativo: potenziale superficialità relazionale e difficoltà nell'approfondire i legami, rischio di percezione di invadenza o inautenticità, dispersione energetica sociale)."
      }
    ],
    softSkill: "RelazioniInterpersonali, ComunicazioneEfficace",
    characteristics: "Introversione vs. Estroversione, Adattabilità Sociale, Apertura"
  },
  {
    num: 28,
    scenario: "Quanto senti che gli altri, riconoscano davvero il tuo impegno?",
    instructions: [
      "Immagine di un Piatto stellato di alta cucina",
      "Immagine di un Piatto casalingo di lasagna.",
      "Immagine di un Piatto di minestra.",
      "Immagine di una Tovaglia da tavola sporca e macchiata alla fine del pasto."
    ],
    captions: [
      "Apprezzato al Massimo",
      "Apprezzato Abbastanza",
      "Poco Apprezzato",
      "Invisibile"
    ],
    options: [
      {
        value: "Apprezzato al Massimo",
        text: "(Positivo: solida autostima e percezione di un alto valore sociale/professionale, sicurezza personale che irradia carisma e competenza riconosciuta) (Negativo: potenziale dipendenza narcisistica dalla validazione esterna, rischio di fragilità emotiva in caso di calo del consenso, eccessiva focalizzazione sull'immagine)."
      },
      {
        value: "Apprezzato Abbastanza",
        text: "(Positivo: autonomia emotiva e sano realismo, capacità di trarre soddisfazione dal proprio operato indipendentemente dal riconoscimento pubblico costante, stabilità interna) (Negativo: potenziale mancanza di ambizione nel ricercare posizioni di maggiore prestigio, rischio di autosvalutazione latente o eccessiva modestia)."
      },
      {
        value: "Poco Apprezzato",
        text: "(Positivo: resilienza superiore e motivazione intrinseca, capacità di perseverarse negli obiettivi nonostante la mancanza di feedback positivi, indipendenza dal giudizio altrui) (Negativo: frustrazione accumulata e potenziale calo della motivazione estrinseca, rischio di isolamento professionale e percezione di ingiustizia)."
      },
      {
        value: "Invisibile",
        text: "(Positivo: massima indipendenza operativa e libertà d'azione radicale da ogni condizionamento sociale, attitudine al lavoro 'dietro le quinte' senza ricerca di protagonismo) (Negativo: profonda alienazione e crisi di senso, rischio di disimpegno totale per percezione di inutilità del proprio contributo, bassissima autostima percepita)."
      }
    ],
    softSkill: "FiduciaInSeStessi, Autocritica",
    characteristics: "Autostima, Sensibilità Sociale, Livelli di Fiducia"
  },
  {
    num: 29,
    scenario: "Il lavoro è bloccato ma tu non sei il responsabile. Qual è la tua reazione istintiva per sbloccare la situazione?",
    instructions: [
      "Immagine di un fiume che scorre placido e tranquillo",
      "Immagine qualcuno che se prepara a fare rafting sul fiume.",
      "Immagine di un salmone che salta una piccola cascata.",
      "Immagine di una diga enorme."
    ],
    captions: [
      "Aspetto e Rispetto i Ruoli",
      "Ogni Tanto Do una Spinta",
      "Mi Carico del Lavoro degli Altri",
      "Faccio Tutto da Solo"
    ],
    options: [
      {
        value: "Aspetto e Rispetto i Ruoli",
        text: "(Positivo: rigoroso rispetto della gerarchia e dei ruoli formali, fiducia nei processi di delega e attesa dell'intervento dell'autorità preposta per non generare caos organizzativo) (Negativo: passività operativa e mancanza di leadership informale, rischio di indifferenza verso il fallimento collettivo per eccessivo ossequio burocratico)."
      },
      {
        value: "Ogni Tanto Do una Spinta",
        text: "(Positivo: leadership informale equilibrata e supporto proattivo mirato, capacità di intervenire nei colli di bottiglia operativi senza prevaricare il responsabile formale) (Negativo: potenziale inefficacia in situazioni di crisi strutturale, mancanza di una visione di coordinamento complessiva, intervento frammentario)."
      },
      {
        value: "Mi Carico del Lavoro degli Altri",
        text: "(Positivo: eccezionale senso di 'ownership' e dedizione totale al successo del progetto, affidabilità estrema e spirito di sacrificio orientato alla salvaguardia dell'output comune) (Negativo: elevato rischio di burnout individuale, potenziale deresponsabilizzazione del team e creazione di dipendenze disfunzionali, inefficienza gestionale)."
      },
      {
        value: "Faccio Tutto da Solo",
        text: "(Positivo: massima efficienza esecutiva individuale e controllo totale sulla qualità a breve termine, attitudine al 'problem-solving' radicale in contesti d'emergenza) (Negativo: totale fallimento nella gestione del team e nella delega, incapacità di costruire processi scalabili, rischio di isolamento e collasso per sovraccarico informativo)."
      }
    ],
    softSkill: "GestioneDelTeam, PianificazioneEOrganizzazione",
    characteristics: "Esperienza di Lavoro in Team, Equilibrio del Carico di Lavoro, Assertività"
  },
  {
    num: 30,
    scenario: "Come ti comporti di solito quando parli con le persone?",
    instructions: [
      "Immagine di un trombone che suona a festa.",
      "Immagine di un equalizzatore grafico con cursori bilanciati.",
      "Immagine di un megafono abbassato e non utilizzato, inattivo.",
      "Immagine dell'icona \"offline\" di un dispositivo digitale."
    ],
    captions: [
      "Dico Tutto Quel Che Penso",
      "Dico Quasi Tutto",
      "Parole Scelte con Cura",
      "Parlo Poco, Solo se Devo"
    ],
    options: [
      {
        value: "Dico Tutto Quel Che Penso",
        text: "(Positivo: massima trasparenza e integrità comunicativa, approccio autentico che riduce al minimo le ambiguità relazionali e favorisce la fiducia immediata) (Negativo: rischio di scarsa diplomazia e insensibilità verso il contesto, potenziale aggressività verbale non intenzionale, vulnerabilità ai conflitti interpersonali)."
      },
      {
        value: "Dico Quasi Tutto",
        text: "(Positivo: eccellente equilibrio tra onestà comunicativa e intelligenza sociale, capacità di modulare il messaggio preservando sia la verità che l'armonia relazionale) (Negativo: potenziale percezione di calcolo comunicativo o scarsa spontaneità in contesti informali, rischio di omissioni strategiche percepite)."
      },
      {
        value: "Parole Scelte con Cura",
        text: "(Positivo: alta diplomazia e sensibilità verso la 'face' dell'interlocutore, capacità di navigare in situazioni delicate con estrema prudenza e rispetto dei confini emotivi) (Negativo: rischio di inautenticità o eccessiva cautela che annacqua il messaggio, potenziale mancanza di trasparenza, percezione di distacco o controllo eccessivo)."
      },
      {
        value: "Parlo Poco, Solo se Devo",
        text: "(Positivo: eccellente autocontrollo e capacità di ascolto analitico, approccio riflessivo che minimizza il rischio di errori comunicativi o conflitti non necessari) (Negativo: percezione di chiusura sociale o reticenza, mancanza di iniziativa relazionale, potenziale isolamento informativo e difficoltà nel networking)."
      }
    ],
    softSkill: "ComunicazioneEfficace, Empatia",
    characteristics: "Stile di Comunicazione, Sensibilità, Evitamento del Conflitto"
  }
];
