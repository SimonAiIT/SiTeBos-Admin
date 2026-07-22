import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 1,
    scenario: "Quando punti a un traguardo importante, come gestisci la scelta tra avere un vantaggio subito o costruire nel tempo?",
    instructions: [
      "Immagine di un seme che viene piantato.",
      "Immagine di una bilancia in equilibrio",
      "Immagine di una persona che si gode il sole",
      "Immagine di una mano che afferra con forza un mazzetta di denaro."
    ],
    captions: [
      "Investimento",
      "Compromesso",
      "Breve Termine",
      "Ricompensa Immediata"
    ],
    options: [
      {
        value: "Investimento",
        text: "(Positivo: eccellente visione strategica e capacità di pianificazione differita, forte orientamento al risultato di lungo periodo, autodisciplina elevata e costanza nel perseguire obiettivi ambiziosi) (Negativo: potenziale rigidità operativa di fronte a opportunità immediate, rischio di demotivazione nel breve periodo per mancanza di gratificazione tangibile, possibile distacco dalle necessità contingenti)."
      },
      {
        value: "Compromesso",
        text: "(Positivo: equilibrio pragmatico tra visione futura e godimento del presente, alta flessibilità adattiva e capacità di mediazione tra diverse priorità temporali, approccio versatile orientato al realismo operativo) (Negativo: rischio di mediocrità prestazionale non eccellendo in nessuna delle due direzioni, potenziale percezione di mancanza di visione radicale o di indecisione strategica)."
      },
      {
        value: "Breve Termine",
        text: "(Positivo: massima capacità di cogliere opportunità immediate e 'carpe diem', forte intelligenza emotiva orientata al benessere presente, entusiasmo e spontaneità che favoriscono la reattività immediata) (Negativo: scarsa visione prospettica e imprevidenza gestionale, rischio di trascuratezza delle conseguenze sistemiche a lungo termine, percezione di instabilità e bassa affidabilità in progetti complessi)."
      },
      {
        value: "Ricompensa Immediata",
        text: "(Positivo: dinamismo operativo estremo e focus sul risultato concreto e palpabile, approccio istintivo efficace in contesti di emergenza, valorizzazione dell'azione rapida rispetto alla teoria) (Negativo: impulsività decisionale elevata e mancanza di pianificazione oculata, rischio di compromettere la sostenibilità futura per un vantaggio momentaneo, tendenza a sottovalutare i rischi complessi)."
      }
    ],
    softSkill: "Autodisciplina, GestioneDelTempo",
    characteristics: "Impulsività vs. Pianificazione, Preferenza Temporale, Pensiero a Lungo Termine"
  },
  {
    num: 2,
    scenario: "Quando le persone o l'ambiente di lavoro generano forte stress, quale parola descrive meglio la tua reazione?",
    instructions: [
      "Immagine di un uomo in meditazione in un lago paradisiaco",
      "Immagine di una barca a largo con un cielo leggermente nuvoloso.",
      "Immagine di un uomo with un ombrello in un temporale",
      "Immagine di una tempesta furiosa."
    ],
    captions: [
      "Sereno",
      "Impassibile",
      "Preparato",
      "Tempestoso"
    ],
    options: [
      {
        value: "Sereno",
        text: "(Positivo: resilienza emotiva superiore e stabilità interiore incrollabile, distacco zen che previene il burnout, totale fiducia nelle proprie capacità di gestione ambientale) (Negativo: rischio di distacco empatico eccessivo, percezione di freddezza o indifferenza verso il disagio altrui, possibile sottovalutazione della gravità oggettiva delle situazioni stressanti)."
      },
      {
        value: "Impassibile",
        text: "(Positivo: lucidità analitica sotto pressione e controllo razionale delle emozioni, capacità di mantenere l'efficacia operativa anche in contesti ostili, affidabilità granitica in situazioni critiche) (Negativo: potenziale negazione del segnale emotivo utile, rischio di apparire poco coinvolto nelle dinamiche di team, mancanza di calore umano in contesti che richiederebbero supporto emotivo)."
      },
      {
        value: "Preparato",
        text: "(Positivo: approccio proattivo e orientato alla prevenzione dei rischi, vigilanza strategica e capacità di anticipare le criticità ambientali, senso di responsabilità elevato) (Negativo: tendenza all'iper-vigilanza e allo stress anticipatorio, rischio di ansia cronica dovuta al monitoraggio costante dei pericoli, percezione di persona apprensiva o pessimista)."
      },
      {
        value: "Tempestoso",
        text: "(Positivo: alta sensibilità e intelligenza emotiva, capacità di denunciare dinamiche tossiche o problematiche, autenticità nelle reazioni e trasparenza comunicativa) (Negativo: elevata vulnerabilità allo stress esterno e reattività impulsiva, rischio di instabilità relazionale in contesti difficili, scarsa resilienza di fronte a fattori di pressione prolungati)."
      }
    ],
    softSkill: "GestioneDelloStress, Resilienza",
    characteristics: "Livelli di Ansia, Resilienza Emotiva, Comfort Sociale"
  },
  {
    num: 3,
    scenario: "Assisti a una scena in cui una valida proposta di una collega donna viene sminuita con sufficienza da un collega uomo. Qual è la tua reazione?",
    instructions: [
      "Immagine di un placido fiume.",
      "Immagine di qualcuno che fa \"un like\" su un social",
      "Immagine di qualcuno che si complimenta con una collega donna.",
      "Immagine di qualcuno che rimprovera un collega uomo."
    ],
    captions: [
      "Faccio Finta di Niente",
      "Le dò un Like veloce",
      "Riprendo l'Idea e Apro la Discussione",
      "Difendo la Collega e Condanno il Gesto"
    ],
    options: [
      {
        value: "Faccio Finta di Niente",
        text: "(Positivo: massima conservazione dell'energia personale ed evitamento del conflitto diretto, mantenimento di un'apparente neutralità diplomatica in contesti rischiosi) (Negativo: collusione passiva con dinamiche tossiche o discriminatorie, mancanza di assunzione di responsabilità sociale, percezione di persona poco integra o indifferente ai valori dell'equità)."
      },
      {
        value: "Le dò un Like veloce",
        text: "(Positivo: supporto diplomatico moderato e tentativo di validazione senza escalation del conflitto, approccio cauto orientato alla preservazione del clima lavorativo) (Negativo: supporto insufficiente per cambiare dinamiche strutturali, rischio di apparire tiepido o inefficace di fronte a ingiustizie manifeste, mancata presa di posizione netta contro il sessismo)."
      },
      {
        value: "Riprendo l'Idea e Apro la Discussione",
        text: "(Positivo: promozione attiva dell'inclusione e del merito, capacità di reindirizzare il focus sul valore professionale ignorando le provocazioni personali, leadership orientata al team) (Negativo: mancata denuncia diretta del comportamento irrispettoso (approccio indiretto), rischio di non fare definitiva la dinamica patriarcale alla radice, percezione di eccessiva diplomazia)."
      },
      {
        value: "Difendo la Collega e Condanno il Gesto",
        text: "(Positivo: integrità morale superiore e coraggio assertivo, difesa dei valori etici e dell'equità di genere a ogni costo, leadership carismatica e paladina della giustizia) (Negativo: rischio di generare conflitti aperti e polarizzazioni nel team, percezione di eccessiva aggressività o rigidità morale, potenziale inefficacia tattica se l'obiettivo è la mediazione a lungo termine)."
      }
    ],
    softSkill: "TematicheSociali, DiversitaEInclusione",
    characteristics: "Affrontare Comportamenti Patriarcali, Promuovere Inclusione, Assertività"
  },
  {
    num: 4,
    scenario: "In Azienda cambia tutto, e alcuni dei tuoi colleghi non vogliono saperne. Come ti comporti?",
    instructions: [
      "Immagine di un rullo compressore che schiaccia i sassi.",
      "Immagine di un uomo che fa un \"ok\" mentre si allontana.",
      "Immagine di un professore che spiega.",
      "Immagine di uno leader politico in un comizio."
    ],
    captions: [
      "Impongo le scelte Aziendali",
      "Io Vado Avanti da Solo",
      "Cerco di Spiegargli",
      "Portavoce del Dissenso"
    ],
    options: [
      {
        value: "Impongo le scelte Aziendali",
        text: "(Positivo: decisionismo incisivo e rapidità operativa in situazioni di crisi, leadership direttiva capace di imporre una direzione chiara quando il tempo è critico) (Negativo: rischio di autoritarismo e alienazione del team, mancanza di ascolto che genera resistenza passiva, possibile danno irreparabile alla cultura collaborativa aziendale)."
      },
      {
        value: "Io Vado Avanti da Solo",
        text: "(Positivo: fermezza decisionale e indipendenza d'azione, capacità di agire come motore del cambiamento senza farsi rallentare dalle inerzie del gruppo) (Negativo: isolamento professionale e incapacità di delegare o coinvolgere, rischio di boicottaggio da parte del team, percezione di leadership poco inclusiva e non partecipativa)."
      },
      {
        value: "Cerco di Spiegargli",
        text: "(Positivo: leadership supportiva e attenzione al benessere del team durante le transizioni, approccio rassicurante che mira a minimizzare lo stress da cambiamento) (Negativo: potenziale lentezza decisionale e dispersione di energie nel cercare il consenso, rischio di inefficienza operativa se il cambiamento richiede tempi stretti e azioni risolutive)."
      },
      {
        value: "Portavoce del Dissenso",
        text: "(Positivo: promozione della democrazia partecipativa e ricerca di soluzioni condivise, massima valorizzazione del feedback del team e della coesione di gruppo) (Negativo: rischio di paralisi decisionale per eccesso di democrazia, compromessi al ribasso che annacquano l'efficacia del cambiamento, percezione di leadership debole di fronte alle sfide strategiche)."
      }
    ],
    softSkill: "GestioneDelCambiamento, Leadership",
    characteristics: "Leadership del Cambiamento, Gestione della Resistenza, Coinvolgimento del Team"
  },
  {
    num: 5,
    scenario: "Ti scontri spesso con un collega che vuole avere sempre ragione a tutti i costi. Come reagisci per non farti logorare?",
    instructions: [
      "Immagine di una bandiera bianca.",
      "Immagine di una persona che si allontana sbuffando.",
      "Immagine di un bodybuilder che solleva un peso enorme.",
      "Immagine di una macchina da F1 che sfreccia via."
    ],
    captions: [
      "Lo Ignoro",
      "Mi lamento, ma evito lo scontro",
      "Testa Bassa e Vado Avanti",
      "Imparo e Riparto"
    ],
    options: [
      {
        value: "Lo Ignoro",
        text: "(Positivo: economia delle energie e preservazione dello stress personale, pragmatismo nell'evitare battaglie improduttive o ego-riferite) (Negativo: scarsa resilienza e tendenza alla fuga di fronte alle sfide interpersonali, percezione di fragilità caratteriale e mancanza di assertività nella difesa delle proprie idee)."
      },
      {
        value: "Mi lamento, ma evito lo scontro",
        text: "(Positivo: capacità di sfogare la tensione mantenendo formalmente la pace operativa, resilienza passiva che permette di sopravvivere in ambienti ostili) (Negativo: accumulo di stress represso e tossicità latente, mancata risoluzione del conflitto alla radice, percezione di persona non assertiva e tendente al vittimismo passivo)."
      },
      {
        value: "Testa Bassa e Vado Avanti",
        text: "(Positivo: perseveranza incrollabile e determinazione nel raggiungere gli obiettivi nonostante le ostilità, alta tolleranza allo stress relazionale e tenacia operativa) (Negativo: rischio elevato di burnout e cecità relazionale, tendenza alla rigidità che impedisce di trovare soluzioni win-win, percezione di eccessiva durezza o mancanza di intelligenza emotiva)."
      },
      {
        value: "Imparo e Riparto",
        text: "(Positivo: resilienza costruttiva e capacità di apprendimento dai conflitti, orientamento alla crescita personale e alla trasformazione degli ostacoli in opportunità) (Negativo: focus eccessivo sulla performance individuale a discapito della cura della relazione, rischio di apparire autocentrati o di ignorare l'impatto emotivo del conflitto sul clima di team)."
      }
    ],
    softSkill: "Resilienza, GestioneDelloStress",
    characteristics: "Resilienza, Perseveranza, Ottimismo, Approccio alla Risoluzione dei Problemi"
  }
];
