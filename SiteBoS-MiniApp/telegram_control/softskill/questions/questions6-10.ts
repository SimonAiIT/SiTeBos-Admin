
import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 6,
    scenario: "Un collega sta spiegando un concetto complicato in modo confuso. Tu che fai?",
    instructions: [
      "Immagine di qualcuno che annuisce.",
      "Immagine di qualcuno che ascolta educatamente ma pensa ad altro.",
      "Immagine di una/uno studente che alza la mano",
      "Immagine di un dibattito tra due candidati"
    ],
    captions: [
      "Va Bene, non Capisco, Me lo Spiega Qualcun Altro",
      "Ascolto, Con Educazione ma Penso ad Altro",
      "Chiedo Chiarimenti, per Capire se Sbaglio Io",
      "Ti Dico Chiaramente, Ma che Stai Dicendo?"
    ],
    options: [
      {
        value: "Va Bene, non Capisco, Me lo Spiega Qualcun Altro",
        text: "(Positivo: eccellente orientamento alla diplomazia relazionale e preservazione del clima di gruppo, capacità di filtrare le inefficienze comunicative altrui senza generare attriti immediati) (Negativo: approccio passivo che compromette l'accuratezza operativa, rischio elevato di errori esecutivi per mancata verifica delle informazioni, rinuncia alla proattività comunicativa)."
      },
      {
        value: "Ascolto, Con Educazione ma Penso ad Altro",
        text: "(Positivo: capacità di mantenimento formale del 'bon ton' aziendale, protezione delle proprie risorse cognitive da comunicazioni inefficienti, evitamento di escalation conflittuali inutili) (Negativo: disimpegno cognitivo e perdita di dati critici, approccio passivo-aggressivo che ostacola la sinergia di team, scarsa affidabilità nel lungo periodo sulla comprensione dei processi)."
      },
      {
        value: "Chiedo Chiarimenti, per Capire se Sbaglio Io",
        text: "(Positivo: forte orientamento alla soluzione e umiltà intellettuale, proattività nel superare le barriere comunicative, impegno concreto per la qualità del lavoro e la chiarezza dei processi) (Negativo: potenziale percezione di insicurezza o eccessiva prudenza, rischio di rimanere in una fase di analisi parziale se non si insiste fino alla comprensione totale, possibile rallentamento del flusso operativo)."
      },
      {
        value: "Ti Dico Chiaramente, Ma che Stai Dicendo?",
        text: "(Positivo: massima integrità comunicativa e ricerca dell'accuratezza assoluta, approccio perfezionista che non ammette ambiguità operative, elevata affidabilità nel garantire la comprensione totale del team) (Negativo: rischio di percepita pedanteria o rigidità relazionale, potenziale generazione di tensioni nel gruppo per l'assertività estrema, possibile inefficienza temporale in contesti che richiedono rapidità rispetto alla perfezione)."
      }
    ],
    softSkill: "AscoltoAttivo, ComunicazioneEfficace",
    characteristics: "Ascolto Attivo, Capacità di Comunicazione, Comprensione"
  },
  {
    num: 7,
    scenario: "Ti viene affidata la responsabilità di un progetto importante con totale libertà decisionale. Qual è il tuo primo istinto?",
    instructions: [
      "Immagine di manager che ascolta una presentazione di un collega",
      "Immagine di un team che fa brainstorming.",
      "Immagine di capitano di calcio che guida in campo .",
      "Immagine di un viaggiatore con un enorme zaino che indossa a fatica."
    ],
    captions: [
      "Relax, ci pensa la mia squadra",
      "Divido il Carico con i colleghi",
      "Mi Prendo la Guida del Gruppo",
      "lo affronto da solo, Devo Finire il Lavoro"
    ],
    options: [
      {
        value: "Relax, ci pensa la mia squadra",
        text: "(Positivo: eccellente capacità di delega e fiducia sistemica nelle risorse umane, orientamento alla leadership strategica e alla responsabilizzazione del team, ottimizzazione del tempo per attività ad alto valore aggiunto) (Negativo: rischio di distacco operativo e perdita di controllo sui dettagli critici, potenziale percezione di leadership assenteista, vulnerabilità a cali di performance non monitorati)."
      },
      {
        value: "Divido il Carico con i colleghi",
        text: "(Positivo: leadership democratica e promozione attiva della collaborazione orizzontale, equità nella distribuzione delle risorse e del carico di lavoro, rafforzamento della coesione di team) (Negativo: potenziale diluizione della responsabilità individuale, rischio di rallentamenti decisionali per eccesso di collegialità, possibile inefficacia in contesti che richiedono una guida verticale e rapida)."
      },
      {
        value: "Mi Prendo la Guida del Gruppo",
        text: "(Positivo: forte assunzione di responsabilità e leadership carismatica, orientamento all'azione guidata dall'esempio, capacità di supervisione attiva e controllo di qualità diretto sui processi) (Negativo: rischio di micromanagement e soffocamento dell'autonomia altrui, potenziale limitazione della crescita professionale dei collaboratori, tendenza all'accentramento decisionale)."
      },
      {
        value: "lo affronto da solo, Devo Finire il Lavoro",
        text: "(Positivo: dedizione estrema al dovere e affidabilità operativa totale, senso di responsabilità ipertrofico che garantisce la consegna dei risultati anche in condizioni avverse) (Negativo: rischio elevatissimo di burnout e scarsa scalabilità della leadership, incapacità di delega che crea colli di bottiglia, potenziale compromissione della salute e del clima di team a lungo termine)."
      }
    ],
    softSkill: "GestioneDelTempo, GestioneDelloStress",
    characteristics: "Responsabilità, Rischio di Burnout, Orientamento al Team"
  },
  {
    num: 8,
    scenario: "Ti accorgi per primo di un problema critico che potrebbe bloccare il lavoroo. Qual è la tua mossa immediata?",
    instructions: [
      "Immagine di qualcuno che chiede aiuto.",
      "Immagine di una squadra di tiro alla fune.",
      "Immagine di una scalatore ad alta quota.",
      "Immagine di vigile urbano sotto la pioggia che dirige il traffico."
    ],
    captions: [
      "Lo faccio notare ad un responsabile",
      "Chiedo aiuto ai colleghi",
      "Se c'è un problema, io lo scalo anche da solo",
      "Lo Affronto, Io Proteggo il mio Team"
    ],
    options: [
      {
        value: "Lo faccio notare ad un responsabile",
        text: "(Positivo: rispetto rigoroso delle gerarchie e dei flussi informativi aziendali, pragmatismo nel coinvolgere le competenze preposte, orientamento all'efficienza burocratica e alla sicurezza dei processi) (Negativo: potenziale deresponsabilizzazione o mancanza di iniziativa diretta, percezione di scarsa propensione a 'sporcarsi le mani', rischio di rallentamenti per eccessiva dipendenza dall'autorità)."
      },
      {
        value: "Chiedo aiuto ai colleghi",
        text: "(Positivo: orientamento alla risoluzione collettiva e al supporto reciproco, valorizzazione dell'intelligenza collettiva per affrontare la complessità, promozione di un clima collaborativo) (Negativo: rischio di diluizione della tempestività operativa, potenziale mancanza di leadership individuale risolutiva, tendenza a dipendere dal consenso del gruppo anche per problemi tecnici semplici)."
      },
      {
        value: "Se c'è un problema, io lo scalo anche da solo",
        text: "(Positivo: proattività assoluta e 'ownership' totale dei problemi, massima autonomia decisionale e orientamento al risultato immediato, percezione di competenza e coraggio operativo) (Negativo: rischio di isolamento e mancata condivisione di 'lesson learned', sovraccarico cognitivo individuale, potenziale arroganza nel non riconoscere il valore del supporto altrui)."
      },
      {
        value: "Lo Affronto, Io Proteggo il mio Team",
        text: "(Positivo: spirito di servizio e altruismo professionale orientato alla protezione del team, leadership naturale basata sulla cura e sul supporto proattivo, alta affidabilità etica) (Negativo: rischio di farsi carico di responsabilità improprie, potenziale esposizione al burnout per eccesso di generosità, possibile creazione di dipendenza nel team che smette di crescere autonomamente)."
      }
    ],
    softSkill: "GestioneDeiConflitti, Negoziazione",
    characteristics: "Assertività, Confini, Equilibrio del Carico di Lavoro"
  },
  {
    num: 9,
    scenario: "Pensando ai tuoi traguardi professionali più ambiziosi, quelli che ti stanno più a cuore. Quanto ti pesa raggiungerli?",
    instructions: [
      "Immagine di una piuma che vola leggera.",
      "Immagine di qualcuno che cammina in salita.",
      "Immagine di uno scalatore appeso su una parete rocciosa, sudato.",
      "Immagine di un muro imponente."
    ],
    captions: [
      "Non sono affaticato",
      "Mi Impegno",
      "Faccio Fatica",
      "Sembrano un Muro"
    ],
    options: [
      {
        value: "Non sono affaticato",
        text: "(Positivo: ottimismo resiliente e fiducia nelle proprie risorse cognitive, approccio leggero che favorisce la creatività e riduce lo stress da performance, percezione di autoefficacia) (Negativo: potenziale sottovalutazione della complessità reale, rischio di scarsa preparazione ai 'worst case scenario', percezione di eccessiva sicurezza o superficialità analitica)."
      },
      {
        value: "Mi Impegno",
        text: "(Positivo: orientamento realistico all'azione e determinazione costante, equilibrio tra sfida e capacità, consapevolezza dell'importanza del processo e dello sforzo focalizzato) (Negativo: rischio di frustrazione se i risultati non sono immediati, potenziale sovraccarico in caso di ostacoli imprevisti, percezione di una sicurezza iniziale che potrebbe vacillare sotto pressione estrema)."
      },
      {
        value: "Faccio Fatica",
        text: "(Positivo: perseveranza eroica e tenacia incrollabile di fronte alle avversità, capacità di operare in condizioni di sforzo estremo senza desistere, forte orientamento al sacrificio per l'obiettivo) (Negativo: elevato rischio di stress cronico e calo della qualità della vita, mancata ottimizzazione del percorso per eccessiva focalizzazione sulla fatica, percezione di una scalata non sostenibile nel lungo periodo)."
      },
      {
        value: "Sembrano un Muro",
        text: "(Positivo: pragmatismo nell'identificare limiti oggettivi e istinto di autoprotezione contro sforzi infruttuosi, onestà intellettuale nel riconoscere la necessità di nuove risorse o competenze) (Negativo: bassa autostima e locus of control esterno, tendenza alla rinuncia precoce e alla paralisi decisionale, rischio di vittimismo e mancanza di proattività nel cercare alternative)."
      }
    ],
    softSkill: "Resilienza, Autocritica",
    characteristics: "Motivazione, Rischio di Burnout, Perseveranza"
  },
  {
    num: 10,
    scenario: "Se dovessi associare il tuo ambiente di lavoro ideale a un paesaggio, in quale di questi ti ritroveresti di più?",
    instructions: [
      "Immagine di una strada trafficata di città.",
      "Immagine di una montagna serena.",
      "Immagine di una spiaggia tranquilla al tramonto.",
      "Immagine di una foresta piena di vita."
    ],
    captions: [
      "Città Viva",
      "Montagna Maestosa",
      "Spiaggia Solitaria",
      "Foresta Misteriosa"
    ],
    options: [
      {
        value: "Città Viva",
        text: "(Positivo: dinamismo energetico e apertura agli stimoli ambientali complessi, attitudine alla vita sociale attiva e alla gestione di contesti multitasking e ad alta densità di informazioni) (Negativo: potenziale dipendenza da stimolazioni esterne, difficoltà nel gestire il silenzio e la riflessione profonda, rischio di sovraccarico sensoriale e dispersione dell'attenzione)."
      },
      {
        value: "Montagna Maestosa",
        text: "(Positivo: orientamento alla riflessività e alla stabilità interiore, apprezzamento per la solidità e i valori duraturi, capacità di trovare ispirazione nel rigore e nella maestosità) (Negativo: tendenza al distacco sociale e all'isolamento emotivo, potenziale rigidità in contesti caotici, rischio di apparire poco flessibile o eccessivamente austero)."
      },
      {
        value: "Spiaggia Solitaria",
        text: "(Positivo: ricerca di equilibrio interiore e rigenerazione consapevole, alta capacità di introspezione e valorizzazione del silenzio come risorsa, attitudine alla calma e alla meditazione) (Negativo: possibile evitamento di interazioni sociali stressanti, rischio di bassa reattività in contesti che richiedono dinamismo e pressione competitiva, tendenza alla passività relazionale)."
      },
      {
        value: "Foresta Misteriosa",
        text: "(Positivo: apertura mentale verso l'ignoto e attrazione per la complessità e l'innovazione, curiosità intellettuale spiccata e capacità di navigare nell'ambiguità) (Negativo: potenziale eccessiva astrazione che allontana dalla concretezza, rischio di sentirsi a disagio in contesti lineari e prevedibili, possibile dispersione in dettagli non prioritari)."
      }
    ],
    softSkill: "MenteAperta, Innovazione",
    characteristics: "Le tue preferenze raccontano qualcosa di te e delle esperienze che cerchi."
  }
];
