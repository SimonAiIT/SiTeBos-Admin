import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 116,
    scenario: "Il tuo partner ha paura che in futuro il vostro rapporto finisca, questo come ti fa sentire?",
    instructions: [
      "Immagine di un disco rotto che salta ripetendo sempre lo stesso punto,  ripetizioneStandard di argomentazioni generiche.",
      "Immagine di una mano che accarezza frettolosamente un oggetto fragile,  rassicurazione superficiale e generica.",
      "Immagine di una pergamena antica sigillata con ceralacca,  prova di valore \"certificato\" e duraturo,  testimonianze e casi studio.",
      "Immagine di un architetto che mostra i solidi pilastri di un edificio destinato a durare nel tempo,  accordo personalizzato e impegno a lungo termine sulla \"solidità\"."
    ],
    captions: [
      "Disco Rotto",
      "Carezza Veloce",
      "Pergamena Sigillata",
      "Pilastri Portanti"
    ],
    options: [
      {
        value: "Disco Rotto",
        text: "(Positivo: massima coerenza nel messaggio e difesa dei termini contrattuali standard senza deviazioni o incertezze) (Negativo: inefficacia rassicurativa dovuta alla mancanza di empatia e personalizzazione, rischio di essere percepito come ripetitivo e poco attento ai bisogni reali)."
      },
      {
        value: "Carezza Veloce",
        text: "(Positivo: abilità nel gestire la tensione relazionale con leggerezza e informalità, mantenendo un clima disteso e non conflittuale) (Negativo: rischio di sminuire la percezione di serietà dell'impegno assunto, rassicurazione superficiale che non affronta le preoccupazioni strutturali del cliente)."
      },
      {
        value: "Pergamena Sigillata",
        text: "(Positivo: straordinaria capacità di fornire prove di valore oggettive e documentate, consolidando la fiducia attraverso la trasparenza dei fatti) (Negativo: rischio di percezione di freddezza burocratica, approccio che potrebbe non soddisfare il bisogno di connessione emotiva dell'interlocutore)."
      },
      {
        value: "Pilastri Portanti",
        text: "(Positivo: eccellente orientamento alla costruzione di una partnership solida e personalizzata basata su impegni reciproci a lungo termine) (Negativo: elevato investimento di tempo e risorse per singola negoziazione, potenziale rigidità nel gestire cambiamenti rapidi o necessità di agilità commerciale)."
      }
    ],
    softSkill: "GestioneDelleObiezioni, FidelizzazioneDelCliente",
    characteristics: "Gestione delle Obiezioni, Costruzione della Fiducia del Cliente, Costanza, Abilità di Vendita"
  },
  {
    num: 117,
    scenario: "Un cliente si lancia in un saluto affettuoso.  Cosa fai?",
    instructions: [
      "Immagine di una mano a indicare alt fermo,  rifiuto netto di ogni approccio \"personale\",  confine etico invalicabile.",
      "Immagine di una mano che resta tesa alla stretta di mano,  esitazione di fronte all'approccio \"personale\",  confine etico vacillante.",
      "Immagine di due persone che si abbracciano,  approccio \"personale\" vigoroso da una parte,  confine etico sfumato.",
      "Immagine di persone che si scambiano un abbraccio affettuoso,  accettazione esplicita dell'approccio \"personale\" per la vendita,  confine etico superato."
    ],
    captions: [
      "Mano in Avanti",
      "Mano Tesa",
      "Subisci il saluto",
      "Ricambi con affetto"
    ],
    options: [
      {
        value: "Mano in Avanti",
        text: "(Positivo: suprema integrità deontologica e assoluta chiarezza nella definizione dei confini professionali, tutela preventiva della reputazione aziendale) (Negativo: potenziale frizione relazionale immediata, rischio di essere percepito come scostante o privo di intelligenza emotiva in contesti informali)."
      },
      {
        value: "Mano Tesa",
        text: "(Positivo: approccio equilibrato volto a mantenere la professionalità senza umiliare l'interlocutore, gestione diplomatica della vicinanza fisica) (Negativo: rischio di inviare messaggi ambigui sui confini relazionali, potenziale esposizione a successive pressioni improprie per mancanza di fermezza iniziale)."
      },
      {
        value: "Subisci il saluto",
        text: "(Positivo: spiccata adattabilità situazionale finalizzata a non compromettere il closing commerciale a scapito del comfort personale) (Negativo: grave indebolimento della postura autorevole e rischio di compromettere l'integrità professionale, vulnerabilità a dinamiche manipolatorie)."
      },
      {
        value: "Ricambi con affetto",
        text: "(Positivo: massimizzazione immediata della connessione empatica e abbattimento di ogni barriera per il raggiungimento degli obiettivi di vendita) (Negativo: totale collasso dell'etica professionale e violazione dei protocolli di condotta, grave danno potenziale all'immagine e alla serietà professionale)."
      }
    ],
    softSkill: "GestioneDelleObiezioni, RelazioniImproprie",
    characteristics: "Etica Professionale, Gestione delle Obiezioni, Integrità"
  },
  {
    num: 118,
    scenario: "Il tuo capo ti risponde per l'ennesima volta \"Non si puo fare!\", come te lo immagini in quel momento.",
    instructions: [
      "Immagine di un seme rinsecchito che non germoglia,  scoraggiamento totale di fronte al primo ostacolo.",
      "Immagine di una Balla di fieno nel deserto,  iniziale difficoltà ma tentativo di crescita nonostante le obiezioni.",
      "Immagine di una pianta che cresce rigogliosa anche in un terreno difficile,  crescita guidata e supportata per superare le obiezioni.",
      "Immagine di un albero maestoso che svetta solitario e forte in cima a una montagna impervia,  crescita autonoma e resiliente che supera ogni obiezione da solo."
    ],
    captions: [
      "Seme Rinsecchito",
      "Balla di Fieno",
      "Terreno Arido",
      "Albero Solitario"
    ],
    options: [
      {
        value: "Seme Rinsecchito",
        text: "(Positivo: realismo operativo e capacità di riconoscere tempestivamente i limiti gerarchici per evitare inutili sprechi di energia emotiva) (Negativo: totale assenza di resilienza e abbandono immediato dell'iniziativa personale, percezione di passività e mancanza di spirito propositivo)."
      },
      {
        value: "Balla di Fieno",
        text: "(Positivo: resilienza adattiva iniziale e capacità di mantenere una spinta residua verso l'obiettivo nonostante i feedback negativi reiterati) (Negativo: crescita faticosa e vulnerabilità agli ostacoli persistenti, rischio di stagnazione per mancanza di una strategia solida di superamento delle obiezioni)."
      },
      {
        value: "Terreno Arido",
        text: "(Positivo: intelligenza relazionale nella ricerca di supporto esperto e mentoring per navigare i vincoli aziendali in modo strategico) (Negativo: rischio di dipendenza eccessiva dal supporto altrui, limitata autonomia nello sviluppo di soluzioni originali per gestire i conflitti gerarchici)."
      },
      {
        value: "Albero Solitario",
        text: "(Positivo: massima auto-efficacia e determinazione ferrea nel perseguire la propria visione indipendentemente dalle resistenze esterne) (Negativo: potenziale isolamento professionale per eccessiva autoreferenzialità, rischio di non valorizzare la saggezza collettiva o i vincoli organizzativi legittimi)."
      }
    ],
    softSkill: "SviluppoPersonale, GestioneDelleObiezioni",
    characteristics: "Resilienza, Approccio alla Crescita Personale, Gestione delle Avversità"
  },
  {
    num: 119,
    scenario: "Vai a vivere in campagna, lasci tutto a cosa ti dedichi?",
    instructions: [
      "Immagine di un campo di fiori di lavanda che sboccia,  priorità assoluta alla crescita personale,  focus sul proprio \"fiorire\".",
      "Immagine di un campo di alberi giovani che iniziano a dare i primi frutti,  crescita personale bilanciata con l'inizio del \"dare frutti\" per gli altri.",
      "Immagine di una Coltivazione di Ortaggi,  crescita personale orientata soprattutto a \"dare frutti\" per gli altri (clienti).",
      "Immagine di un campo arato e pronto per la semina,  rinuncia alla \"fioritura\" personale immediata,  priorità assoluta alla preparazione per \"dare frutti\" futuri per gli altri."
    ],
    captions: [
      "Coltivo Fiori",
      "Coltivo Alberi da Frutta",
      "Coltivo Ortaggi",
      "Coltivo Cereali"
    ],
    options: [
      {
        value: "Coltivo Fiori",
        text: "(Positivo: straordinario investimento nella realizzazione del proprio potenziale unico e nell'eccellenza creativa individuale) (Negativo: rischio di deriva narcisistica e scarsa attenzione alla generazione di valore tangibile per il sistema o per il mercato)."
      },
      {
        value: "Coltivo Alberi da Frutta",
        text: "(Positivo: eccellente integrazione tra auto-realizzazione personale e responsabilità sociale, garantendo uno sviluppo equilibrato e sostenibile) (Negativo: ambizione mediata dalla ricerca di armonia, potenziale mancanza di focalizzazione estrema su un singolo obiettivo di performance)."
      },
      {
        value: "Coltivo Ortaggi",
        text: "(Positivo: spiccata vocazione al servizio e dedizione altruistica alla creazione di valore immediato e concreto per la collettività) (Negativo: elevato rischio di trascurare il proprio benessere e la propria evoluzione specialistica per un eccessivo orientamento alle necessità altrui)."
      },
      {
        value: "Coltivo Cereali",
        text: "(Positivo: visione strategica lungimirante e capacità di investire il presente nella costruzione di un futuro solido e generoso per tutti) (Negativo: potenziale sacrificio eccessivo della gratificazione immediata e rischio di vivere in una costante tensione verso il dovere futuro)."
      }
    ],
    softSkill: "SviluppoPersonale, OrientamentoAlCliente",
    characteristics: "Bilanciamento Sviluppo Personale/Sociale, Altruismo, Proiezione Futuro"
  },
  {
    num: 120,
    scenario: "Un collega fa battute inappropriate ad una collega. Cosa fai?",
    instructions: [
      "Immagine di tre scimmie sagge: \"non vedo, non sento, non parlo\",  ignora completamente la situazione,  non si intromette.",
      "Immagine di una persona che tossisce discretamente per segnalare il problema,  intervento indiretto e \"velato\".",
      "Immagine di una persona che offre un bicchiere d'acqua alla collega \"vittima\" con sguardo di supporto,  aiuto \"discreto\" e supporto silenzioso alla vittima.",
      "Immagine di un cavaliere che si erge in armatura e spada sguainata,  intervento diretto e deciso contro il comportamento inappropriato."
    ],
    captions: [
      "Non Vedo, Non Sento, Non Parlo",
      "Tosse Imbarazzata",
      "Bicchiere d'Acqua",
      "Cavaliere Bianco"
    ],
    options: [
      {
        value: "Non Vedo, Non Sento, Non Parlo",
        text: "(Positivo: massima neutralità formale e protezione della propria serenità operativa evitando coinvolgimenti in dinamiche di conflitto terze) (Negativo: grave complicità tacita nella perpetuazione di un clima tossico e mancanza di senso civico e di responsabilità sociale aziendale)."
      },
      {
        value: "Tosse Imbarazzata",
        text: "(Positivo: diplomazia relazionale volta a segnalare un disagio senza innescare un'escalation aggressiva, tentativo di ripristinare il decoro) (Negativo: inefficacia operativa nel fermare la condotta lesiva e rischio di essere percepito come debole o eccessivamente cauto di fronte a una violazione etica)."
      },
      {
        value: "Bicchiere d'Acqua",
        text: "(Positivo: eccellente alleanza empatica e supporto umano immediato volto alla riparazione emotiva della vittima, solidarietà attiva) (Negativo: approccio puramente riparativo che non agisce sulla causa sistemica del problema, mancando di confrontare l'autore del comportamento)."
      },
      {
        value: "Cavaliere Bianco",
        text: "(Positivo: leadership morale e coraggio nel difendere l'integrità del clima aziendale attraverso un'azione diretta e risolutiva contro le molestie) (Negativo: rischio di essere percepito come eccessivamente assertivo o giustizialista, potenziale inasprimento del conflitto per mancanza di mediazione)."
      }
    ],
    softSkill: "RelazioniImproprie, TematicheSociali",
    characteristics: "Affrontare Molestie, Condotta Etica, Assertività"
  }
];