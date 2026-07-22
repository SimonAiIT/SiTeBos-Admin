import { Question } from "../types";

export const questions76to80: Question[] = [
  {
    num: 76,
    scenario: "Come rassicuri un cliente?",
    instructions: [
      "Immagine di parole scritte sulla sabbia che vengono spazzate via dal vento,  promesse verbali inconsistenti.",
      "Immagine di una stretta di mano,  accordo verbale generico,  rassicurazione di base.",
      "Immagine di una pila di mattoni,  prova di solidità e costruzione nel tempo,  testimonianze concrete.",
      "Immagine di una chiave che apre un forziere pieno di garanzie,  accordo personalizzato e impegno totale."
    ],
    captions: [
      "Parole",
      "Stretta di Mano",
      "Testimonianze",
      "Garanzie"
    ],    options: [
      {
        value: "Parole",
        text: "(Positivo: massima agilità comunicativa e capacità di gestire la relazione in modo snello e informale, rapidità di interazione senza attriti burocratici) (Negativo: estrema inconsistenza della promessa e rischio critico di percepita inaffidabilità, totale mancanza di commitment tangibile e verificabile)."
      },
      {
        value: "Stretta di Mano",
        text: "(Positivo: valorizzazione dell'integrità personale e della fiducia reciproca come pilastri della relazione, approccio leale basato sull'onore professionale) (Negativo: eccessiva ambiguità contrattuale e mancanza di tutele formali, rischio di incomprensioni sui termini dell'accordo per assenza di documentazione)."
      },
      {
        value: "Testimonianze",
        text: "(Positivo: eccellente utilizzo della social proof e rassicurazione basata su evidenze oggettive e successi pregressi verificabili) (Negativo: approccio potenzialmente impersonale e standardizzato, rischio di trascurare il bisogno di rassicurazione specifica ed emotiva del singolo cliente)."
      },
      {
        value: "Garanzie",
        text: "(Positivo: massimo impegno verso la soddisfazione del cliente attraverso tutele personalizzate e commitment totale sui risultati) (Negativo: elevato impatto sui costi operativi e bassa scalabilità del modello di rassicurazione, rischio di generare aspettative iperboliche difficili da sostenere)."
      }
    ],
    softSkill: "GestioneDelleObiezioni, FidelizzazioneDelCliente",
    characteristics: "Gestione delle Obiezioni, Costruzione della Fiducia del Cliente, Costanza, Abilità di Vendita"
  },
  {
    num: 77,
    scenario: "Stai uscendo di casa dove sono le chiavi?",
    instructions: [
      "Immagine di un Rack Portachiavi futuristico appeso al muro preciso e affidabile.",
      "Immagine di mazzo di chiavi che esce dalla tasca del guibbino,  orientamento rapido e sicuro.",
      "Immagine di un mazzo di chiavi poggiate su uno scaffale dentro un frigorifero,  posizione incerta.",
      "Immagine di un buco nero che inghiotte le chiavi,  scomparsa totale e misteriosa."
    ],
    captions: [
      "Chiavi Sempre al Posto",
      "Sai dove sono",
      "Chiavi Ballerine",
      "Chiavi Introvabili"
    ],
    options: [
      {
        value: "Chiavi Sempre al Posto",
        text: "(Positivo: eccellente autodisciplina e organizzazione meticolosa dei flussi quotidiani, minimizzazione sistematica dei tempi morti e degli errori) (Negativo: potenziale rigidità comportamentale e ansia da controllo, rischio di stress elevato quando l'ordine prestabilito viene turbato)."
      },
      {
        value: "Sai dove sono",
        text: "(Positivo: buona gestione funzionale delle risorse e controllo pragmatico dell'ambiente circostante senza eccessi ossessivi) (Negativo: rischio di inefficienza occasionale in situazioni di forte pressione, potenziale mancanza di ottimizzazione rigorosa dei processi personali)."
      },
      {
        value: "Chiavi Ballerine",
        text: "(Positivo: attitudine flessibile e bassa reattività allo stress da imprevisto, capacità di navigare nell'imperfezione con serenità) (Negativo: tendenza alla disorganizzazione e spreco di energie mentali nel recupero di informazioni o oggetti smarriti, percezione di scarsa affidabilità operativa)."
      },
      {
        value: "Chiavi Introvabili",
        text: "(Positivo: spiccata propensione alla creatività e al pensiero divergente, focus prioritario su stimoli intellettuali rispetto all'ordine materiale) (Negativo: criticità nella gestione delle responsabilità pratiche e forte inefficienza cronica, rischio di essere percepiti come inaffidabili in contesti strutturati)."
      }
    ],
    softSkill: "PianificazioneEOrganizzazione, GestioneDelTempo",
    characteristics: "Organizzazione, Memoria, Coscienziosità"
  },
  {
    num: 78,
    scenario: "Quanto sono chiari e definiti i tuoi piani for il futuro?",
    instructions: [
      "Immagine di un reticolo autostradale perfettamente segnalato e illuminato di notte,  piani chiari e dettagliati per ogni ambito.",
      "Immagine di una strada statale ben asfaltata con indicazioni chiare,  piani definiti per la maggior parte degli ambiti.",
      "Immagine di un sentiero di campagna un po' tortuoso e con indicazioni incerte,  piani vaghi e non sempre definiti.",
      "Immagine di un territorio inesplorato senza strade né sentieri,  assenza totale di piani e direzione chiara."
    ],
    captions: [
      "Autostrade del Futuro",
      "Strade Maestre",
      "Sentieri Incerti",
      "Territorio Inesplorato"
    ],
    options: [
      {
        value: "Autostrade del Futuro",
        text: "(Positivo: visione strategica cristallina e massima chiarezza degli obiettivi a lungo termine, eccellente pianificazione del percorso evolutivo) (Negativo: vulnerabilità ai cigni neri e ai cambiamenti radicali di paradigma, rischio di cecità verso opportunità emergenti fuori piano)."
      },
      {
        value: "Strade Maestre",
        text: "(Positivo: solida pianificazione direzionale accoppiata a una sana flessibilità tattica, buon equilibrio tra controllo e adattabilità) (Negativo: potenziale mancanza di dettaglio analitico in aree non prioritarie, rischio di trascurare variabili di secondo ordine)."
      },
      {
        value: "Sentieri Incerti",
        text: "(Positivo: apertura totale all'esplorazione e capacità di adattare la rotta in base ai feedback dell'ambiente, approccio evolutivo) (Negativo: rischio di dispersione strategica e mancanza di focus sugli obiettivi chiave, percezione di instabilità nella direzione di carriera)."
      },
      {
        value: "Territorio Inesplorato",
        text: "(Positivo: massima libertà creativa e attitudine pionieristica alla scoperta pura, assenza di preconcetti limitanti sul proprio futuro) (Negativo: assenza critica di una bussola strategica e alto rischio di deriva professionale, difficoltà nel costruire una crescita strutturata nel tempo)."
      }
    ],
    softSkill: "PianificazioneEOrganizzazione, GestioneDelTempo",
    characteristics: "Pianificazione, Orientamento agli Obiettivi, Proattività"
  },
  {
    num: 79,
    scenario: "Se qualcuno ti dice: Tranquillo, di me ti puoi fidare! come lo interpreti?",
    instructions: [
      "Immagine di un diamante purissimo e trasparente,  verità assoluta e incorruttibile.",
      "Immagine di uno specchio pulito che riflette fedelmente la realtà,  verità come norma,  lievi eccezioni.",
      "Immagine di una maschera bianca che nasconde il volto,  verità selettiva,  omissioni strategiche.",
      "Immagine di lago torbido che oscura la visione,  verità distorta e manipolata."
    ],
    captions: [
      "Verità Assoluta",
      "Verità Riflessa",
      "Verità Nascosta",
      "Verità Distorta"
    ],
    options: [
      {
        value: "Verità Assoluta",
        text: "(Positivo: integrità morale incrollabile e assoluta trasparenza nelle intenzioni, garanzia di lealtà totale in ogni circostanza) (Negativo: ingenuità relazionale e rischio di esposizione a manipolazioni esterne, mancanza di pragmatismo tattico nelle dinamiche di potere)."
      },
      {
        value: "Verità Riflessa",
        text: "(Positivo: elevata affidabilità professionale mediata da una corretta intelligenza sociale e consapevolezza delle convenzioni) (Negativo: potenziale mancanza di trasparenza radicale in situazioni critiche, rischio di adattare la verità per compiacenza o utilità)."
      },
      {
        value: "Verità Nascosta",
        text: "(Positivo: eccellente capacità diplomatica e gestione strategica delle informazioni per preservare l'armonia relazionale) (Negativo: erosione sistematica della fiducia a causa di omissioni percepite come manipolatorie, rischio di essere etichettati come poco autentici)."
      },
      {
        value: "Verità Distorta",
        text: "(Positivo: eccellente radar analitico per l'identificazione di incongruenze e segnali deboli di inaffidabilità, approccio iper-vigile a tutela degli asset) (Negativo: bias di sospetto sistemico che ostacola la costruzione di partnership basate sulla fiducia, rischio di isolamento per eccessivo cinismo)."
      }
    ],
    softSkill: "Integrita, EticaProfessionale",
    characteristics: "Onestà, Integrità, Bussola Morale"
  },
  {
    num: 80,
    scenario: "Hai Cliente indeciso all'acquisto, che fai?",
    instructions: [
      "Immagine di una persona che apre la mano e lascia andare una farfalla,  nessuna pressione,  libertà di scelta.",
      "Immagine di una persona che indica gentilmente una direzione con la mano aperta,  minimo incoraggiamento,  suggerimento leggero.",
      "Immagine di un faro che illumina intensamente un punto preciso,  incoraggiamento moderato,  focus sui vantaggi.",
      "Immagine di una calamita potente che attrae con forza un oggetto metallico,  forte pressione per chiudere la vendita."
    ],
    captions: [
      "Libera Scelta",
      "Suggerimento Discreto",
      "Faro sui Vantaggi",
      "Forza Magnetica"
    ],
    options: [
      {
        value: "Libera Scelta",
        text: "(Positivo: massimo rispetto dell'autonomia decisionale del cliente e orientamento a una relazione etica di lungo periodo) (Negativo: scarsa assertività commerciale e rischio di perdita di opportunità di vendita per eccessiva passività nella fase conclusiva)."
      },
      {
        value: "Suggerimento Discreto",
        text: "(Positivo: approccio non invasivo volto a facilitare la scelta senza generare reazioni di rifiuto, eccellente ascolto attivo) (Negativo: potenziale mancanza di iniziativa nel guidare il cliente verso la soluzione ottimale, rischio di indecisione prolungata)."
      },
      {
        value: "Faro sui Vantaggi",
        text: "(Positivo: capacità di orientare il focus del cliente sui benefici concreti attraverso una persuasione razionale ed equilibrata) (Negativo: rischio di apparire troppo focalizzati sui punti di forza trascurando le criticità o i dubbi profondi del cliente)."
      },
      {
        value: "Forza Magnetica",
        text: "(Positivo: straordinaria efficacia nel closing e capacità di superare le resistenze finali attraverso una leadership persuasiva dominante) (Negativo: rischio di percepita manipolazione o pressione eccessiva, potenziale rimorso dell'acquirente e danno alla reputazione post-vendita)."
      }
    ],
    softSkill: "ServizioAlCliente, VenditaConsultiva",
    characteristics: "Stile di Vendita, Considerazioni Etiche, Capacità Persuasiva"
  }
];
