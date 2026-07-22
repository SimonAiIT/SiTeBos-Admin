import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 106,
    scenario: "Immagina che suoni l'allarme antincendio in ufficio. Qual è la tua reazione immediata?",
    instructions: [
      "Immagine di una persona che segue un flusso di persone ordinate verso l'uscita di sicurezza,  evacuazione calma e disciplinata.",
      "Immagine di una persona che indica la via d'uscita ad altri colleghi,  guida gli altri verso la salvezza.",
      "Immagine di una persona che alza il telefono per fare una chiamata,  verifica la situazione prima di agire.",
      "Immagine di una persona seduta tranquillamente alla scrivania che ignora la sirena,  indifferenza al pericolo."
    ],
    captions: [
      "Fuga Organizzata",
      "Guida gli Altri",
      "Verifica Prima di Uscire",
      "Resto al Mio Posto"
    ],
    options: [
      {
        value: "Fuga Organizzata",
        text: "(Positivo: eccellente conformità procedurale e capacità di mantenere la disciplina operativa in situazioni di emergenza) (Negativo: potenziale carenza di iniziativa autonoma e tendenza a un comportamento gregario, limitata leadership situazionale in contesti imprevisti)."
      },
      {
        value: "Guarda gli Altri",
        text: "(Positivo: spiccata leadership situazionale e orientamento prioritario alla salvaguardia del capitale umano, alto senso di responsabilità collettiva) (Negativo: potenziale esposizione a rischi individuali non necessari per eccesso di altruismo, rischio di rallentamento dell'evacuazione)."
      },
      {
        value: "Verifica Prima di Uscire",
        text: "(Positivo: straordinario sangue freddo e approccio analitico finalizzato alla validazione delle informazioni prima dell'azione) (Negativo: rischio di perdita di tempo critico in emergenze reali, potenziale paralisi decisionale per eccesso di razionalismo in contesti urgenti)."
      },
      {
        value: "Resto al Mio Posto",
        text: "(Positivo: apparente stoicismo operativo e massima focalizzazione sulla continuità delle attività core anche in condizioni di disturbo) (Negativo: grave sottovalutazione dei protocolli di integrità sistemica e rischio elevato per la sicurezza propria e altrui per eccessiva sicurezza di sé)."
      }
    ],
    softSkill: "SicurezzaSulLavoro, GestioneDelloStress",
    characteristics: "Consapevolezza Sicurezza sul Lavoro, Valutazione del Rischio, Responsabilità"
  },
  {
    num: 107,
    scenario: "Noti un collega che viola le norme di sicurezza sul lavoro. Come reagisci?",
    instructions: [
      "Immagine di uno struzzo che nasconde la testa sotto la sabbia,  ignora la violazione per non intervenire.",
      "Immagine di qualcuno che dà una leggera \"gomitata\" di lato al collega,  segnalazione indiretta e poco invasiva.",
      "Immagine di un vigile urbano che indica la strada con un gesto chiaro e gentile,  richiamo diretto ma educato alle regole.",
      "Immagine di una mano che tira con forza la leva dell'allarme antincendio,  segnalazione immediata e formale ai superiori."
    ],
    captions: [
      "Faccio Finta di Niente",
      "Un Segnale Discreto",
      "Richiamo con Gentilezza",
      "Allarme Immediato"
    ],
    options: [
      {
        value: "Faccio Finta di Niente",
        text: "(Positivo: mantenimento della coesione relazionale immediata e rifiuto di un ruolo inquisitorio non richiesto) (Negativo: grave mancanza di corresponsabilità e negligenza verso la cultura della prevenzione, potenziale complicità tacita in rischi evitabili)."
      },
      {
        value: "Un Segnale Discreto",
        text: "(Positivo: diplomazia relazionale e tentativo di correzione informale volto a tutelare la dignità del collega senza attriti gerarchici) (Negativo: potenziale inefficacia della segnalazione e mancanza di fermezza nel garantire la sicurezza sistemica, rischio di ambiguità comunicativa)."
      },
      {
        value: "Richiamo con Gentilezza",
        text: "(Positivo: eccellente equilibrio tra assertività professionale e rispetto umano, capacità di influenzare positivamente i comportamenti altrui senza ostilità) (Negativo: rischio di non essere sufficientemente incisivo con profili recidivi o in situazioni di pericolo imminente)."
      },
      {
        value: "Allarme Immediato",
        text: "(Positivo: integrità assoluta e rispetto rigoroso dei protocolli di vigilanza proattiva a tutela dell'integrità aziendale) (Negativo: rischio di essere percepito come rigido o eccessivamente burocratico, potenziale deterioramento del clima di fiducia orizzontale nel team)."
      }
    ],
    softSkill: "SicurezzaSulLavoro, ResponsabilitaSociale",
    characteristics: "Consapevolezza Sicurezza sul Lavoro, Responsabilità, Assertività"
  },
  {
    num: 108,
    scenario: "Noti una falla nella sicurezza del tuo posto di lavoro. Come ti muovi?",
    instructions: [
      "Immagine di una persona con gli occhi bendati che cammina oltre la porta aperta,  ignora il problema,  non si sente responsabile.",
      "Immagine di qualcuno che alza le spalle con noncuranza di fronte alla porta aperta,  segnalazione informale ma senza impegno attivo.",
      "Immagine di una persona che chiude la porta e gira la chiave con decisione,  iniziativa personale per risolvere il problema.",
      "Immagine di una mano che suona una sirena d'allarme per segnalare il problema,  segnalazione formale e immediata alle autorità competenti."
    ],
    captions: [
      "Occhi Chiusi",
      "Alzata di Spalle",
      "Chiave in Mano",
      "Sirena di Allarme"
    ],
    options: [
      {
        value: "Occhi Chiusi",
        text: "(Positivo: massima focalizzazione sulle proprie attività core e rifiuto di dispersioni su compiti non esplicitamente assegnati) (Negativo: totale assenza di senso di appartenenza e grave irresponsabilità verso la tutela degli asset aziendali e della sicurezza collettiva)."
      },
      {
        value: "Alzata di Spalle",
        text: "(Positivo: consapevolezza basata sul principio di delega e riconoscimento dei propri limiti operativi rispetto alle funzioni di sicurezza) (Negativo: approccio passivo che non garantisce la risoluzione del problema, rischio di inazione per mancanza di follow-through attivo)."
      },
      {
        value: "Chiave in Mano",
        text: "(Positivo: straordinaria proattività e capacità di problem-solving immediato volto alla messa in sicurezza istantanea del contesto) (Negativo: potenziale violazione involontaria delle procedure di tracciabilità dell'incidente, rischio di non attivare i canali formali necessari)."
      },
      {
        value: "Sirena di Allarme",
        text: "(Positivo: rigoroso orientamento alla trasparenza e attivazione tempestiva dei protocolli formali di gestione del rischio aziendale) (Negativo: potenziale rallentamento della messa in sicurezza pratica per eccesso di formalismo, rischio di burocratizzazione di problemi risolvibili istantaneamente)."
      }
    ],
    softSkill: "SicurezzaSulLavoro, ResponsabilitaSociale",
    characteristics: "Consapevolezza Sicurezza sul Lavoro, Responsabilità, Proattività"
  },
  {
    num: 109,
    scenario: "Quando cammini in città, quanto sei \"in allerta\" per la tua sicurezza personale?",
    instructions: [
      "Immagine di un sonnambulo che cammina ad occhi chiusi,  totale inconsapevolezza del pericolo.",
      "Immagine di un cavallo con i paraocchi che limita la visione laterale,  consapevolezza parziale e limitata.",
      "Immagine di un suricato che scruta l'orizzonte vigile ma sereno,  attenzione vigile ma rilassata.",
      "Immagine di una molla compressa al massimo,  iper-vigilanza e tensione costante."
    ],
    captions: [
      "Sonnambulo Distratto",
      "Paraocchi Sociali",
      "Suricato Sentinella",
      "Molla Tesa"
    ],
    options: [
      {
        value: "Sonnambulo Distratto",
        text: "(Positivo: approccio fiducioso e sereno che favorisce un benessere psicologico immediato e l'assenza di pregiudizi verso l'ambiente) (Negativo: elevata vulnerabilità ai rischi esterni e grave mancanza di consapevolezza situazionale critica, esposizione al pericolo per negligenza)."
      },
      {
        value: "Paraocchi Sociali",
        text: "(Positivo: equilibrio funzionale tra concentrazione sulle proprie attività e vigilanza ambientale minima necessaria) (Negativo: rischio di non intercettare segnali di minaccia latenti a causa di una visione parziale e non olistica del contesto circostante)."
      },
      {
        value: "Suricato Sentinella",
        text: "(Positivo: eccellente consapevolezza situazionale dinamica che garantisce sicurezza senza compromettere la stabilità emotiva o il comfort) (Negativo: potenziale esposizione a pericoli estremamente rapidi o subdoli che richiederebbero uno stato di allerta superiore al normale)."
      },
      {
        value: "Molla Tesa",
        text: "(Positivo: massima prontezza reattiva e iper-sensibilità ai segnali di rischio, garanzia di prevenzione attiva in ogni circostanza) (Negativo: elevato carico di stress e potenziale paranoia disfunzionale che compromette la qualità della vita e la serenità relazionale)."
      }
    ],
    softSkill: "SicurezzaSulLavoro, GestioneDelloStress",
    characteristics: "Consapevolezza Sicurezza, Valutazione del Rischio, Livelli di Stress"
  },
  {
    num: 110,
    scenario: "L'azienda introduce nuove difese sicurezza informatica. Come ti poni?",
    instructions: [
      "Immagine di un cavaliere che indossa subito e con entusiasmo una nuova armatura scintillante,  adozione proattiva e immediata delle nuove difese.",
      "Immagine di un cavaliere che esamina attentamente l'armatura nuova,  leggendo le istruzioni prima di indossarla,  approccio cauto e  ponderato.",
      "Immagine di uno scudiero che veste un calvaliere,  ricerca di supporto esterno per l'implementazione.",
      "Immagine di un cavaliere che rifiuta l'armatura e continua a combattere senza protezioni,  resistenza al cambiamento e rifiuto delle nuove difese."
    ],
    captions: [
      "Armatura Subito Indossata",
      "Armatura Sotto Esame",
      "Aiuto per Indossare",
      "Armatura Rifiutata"
    ],
    options: [
      {
        value: "Armatura Subito Indossata",
        text: "(Positivo: straordinaria agilità nell'adozione di nuove tecnologie protettive e forte allineamento agli obiettivi di sicurezza aziendale) (Negativo: rischio di implementazione acritica o superficiale senza piena comprensione dei cambiamenti operativi introdotti)."
      },
      {
        value: "Armatura Sotto Esame",
        text: "(Positivo: approccio analitico e metodico volto a validare l'efficacia delle nuove misure prima della piena integrazione nei processi) (Negativo: potenziale lentezza nell'adeguamento a minacce urgenti, rischio di creare colli di bottiglia per eccesso di cautela analitica)."
      },
      {
        value: "Aiuto per Indossare",
        text: "(Positivo: riconoscimento intelligente dei propri limiti tecnici e valorizzazione delle competenze specialistiche per un'implementazione sicura) (Negativo: rischio di dipendenza operativa eccessiva e mancato sviluppo di un'autonomia minima necessaria nella gestione dei rischi cyber)."
      },
      {
        value: "Armatura Rifiutata",
        text: "(Positivo: apparente salvaguardia dell'efficienza operativa immediata e mantenimento di routine consolidate prive di attriti tecnologici) (Negativo: grave esposizione a vulnerabilità sistemiche e resistenza disfunzionale all'evoluzione dei protocolli di integrità digitale)."
      }
    ],
    softSkill: "SicurezzaDigitale, Adattabilita",
    characteristics: "Consapevolezza Cybersecurity, Adattabilità a Nuovi Protocolli, Proattività"
  }
];