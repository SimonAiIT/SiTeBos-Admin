import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 141,
    scenario: "Devi comprare un elettrodomestico nuovo ma è rimasto solo quello in esposizione, Come reagisci?",
    instructions: [
      "Immagine di una mano che prende l'elettrodomestico \"esposto\" senza esitare,  accettazione immediata dello \"status quo\" e  della \"seconda scelta\".",
      "Immagine di una persona che osserva attentamente l'elettrodomestico esposto cercando \"difetti\",  esitazione e  verifica \"minuziosa\" prima di accettare.",
      "Immagine di una persona che indica un cartello \"SCONTO\" al venditore,  negoziazione attiva per ottenere un \"vantaggio\" economico in cambio dell' \"usato garantito\".",
      "Immagine di una persona che esce dal negozio lasciando l'elettrodomestico esposto \"al suo posto\",  rifiuto netto e ricerca di un prodotto \"nuovo\" \"altrove\"."
    ],
    captions: [
      "Prendo Quello Che C'è",
      "Controllo Bene i Graffi",
      "Voglio un Prezzo Speciale",
      "Cerco il Nuovo Perfetto"
    ],    options: [
      {
        value: "Prendo Quello Che C'è",
        text: "(Positivo: spiccata rapidità decisionale e orientamento al risultato immediato, massimizzando l'efficienza temporale nell'acquisizione del bene) (Negativo: potenziale trascuratezza dei parametri qualitativi a lungo termine, approccio che sacrifica la valutazione del valore intrinseco per la comodità)."
      },
      {
        value: "Controllo Bene i Graffi",
        text: "(Positivo: approccio analitico e meticoloso volto alla tutela dell'investimento attraverso una verifica rigorosa degli standard qualitativi) (Negativo: rischio di eccessivo perfezionismo che può rallentare il processo d'acquisto e generare frizioni nella relazione commerciale)."
      },
      {
        value: "Voglio un Prezzo Speciale",
        text: "(Positivo: eccellente capacità negoziale e determinazione nel riallineare il prezzo al valore reale percepito dell'asset) (Negativo: focalizzazione esclusiva sul vantaggio economico immediato, rischio di compromettere la relazione con il fornitore per eccessiva pressione sul margine)."
      },
      {
        value: "Cerco il Nuovo Perfetto",
        text: "(Positivo: integrità assoluta rispetto ai propri standard di eccellenza e rifiuto del compromesso qualitativo a favore del valore pieno) (Negativo: elevato costo opportunità in termini di tempo e risorse per la ricerca della perfezione formale, potenziale inefficienza nel problem-solving pratico)."
      }
    ],
    softSkill: "SoddisfazioneDelCliente, GestioneDelleObiezioni",
    characteristics: "Stile di Acquisto, Negoziazione, Attenzione al Dettaglio, Ricerca della Perfezione"
  },
  {
    num: 142,
    scenario: "Come fai crescere il tuo giardino?",
    instructions: [
      "Immagine di un giardino selvaggio e incolto,  \"lascia fare alla natura\",  minimo intervento,  leadership \"laissez-faire\".",
      "Immagine di un giardino curato con \"tutori\" di supporto per le piante,  fornisce un \"supporto essenziale\" ma lascia autonomia di crescita.",
      "Immagine di un giardiniere che \"potatura\" e \"guida\" la crescita di ogni pianta individualmente,  guida personalizzata e mentoring attivo.",
      "Immagine di un giardino geometrico e rigidamente \"controllato\" in ogni dettaglio,  controllo totale e direttivo sulla crescita,  leadership autoritaria."
    ],
    captions: [
      "Lascio Fare alla Natura",
      "Supporto Essenziale",
      "Guida Personalizzata",
      "Controllo Totale"
    ],
    options: [
      {
        value: "Lascio Fare alla Natura",
        text: "(Positivo: eccellente promozione dell'auto-responsabilizzazione e della self-leadership, garantendo totale autonomia e libertà di espressione individuale) (Negativo: grave rischio di dispersione del potenziale e mancanza di coordinamento strategico, percepita come assenza di guida nei momenti critici)."
      },
      {
        value: "Supporto Essenziale",
        text: "(Positivo: approccio abilitante bilanciato che fornisce le risorse necessarie senza soffocare l'iniziativa e l'autonomia decisionale dei singoli) (Negativo: rischio di supporto insufficiente per profili che richiedono una guida più strutturata, potenziale mancanza di una direzione univoca forte)."
      },
      {
        value: "Guida Personalizzata",
        text: "(Positivo: straordinaria dedizione allo sviluppo del capitale umano attraverso un mentoring capacitante e un coaching tailored sui bisogni individuali) (Negativo: elevato assorbimento di risorse temporali del leader e rischio di creare dipendenza operativa, limitando la scalabilità della gestione)."
      },
      {
        value: "Controllo Totale",
        text: "(Positivo: massima garanzia di conformità agli standard e controllo assoluto sulla traiettoria di crescita per obiettivi critici e predefiniti) (Negativo: soffocamento sistemico della creatività e dell'empowerment, rischio di demotivazione per eccessivo micromanagement e rigidità formale)."
      }
    ],
    softSkill: "SviluppoDellePersone, Leadership",
    characteristics: "Stili di Leadership, Approccio allo Sviluppo del Team, Delega vs. Controllo"
  },
  {
    num: 143,
    scenario: "Ti sei Perso in una foresta piena di rumori, come trovi la strada per uscire?",
    instructions: [
      "Immagine di una persona persa e confusa in un bosco fitto,  ignora le \"voci\" intorno,  navigazione \"a caso\" senza ascolto.",
      "Immagine di una persona che segue un sentiero tracciato ignorando i suoni della foresta,  ascolto \"selettivo\" e  focalizzato solo sulla \"direzione\" predefinita.",
      "Immagine di una persona che si orienta con una bussola e ascolta i suoni della foresta,  ascolto attivo e  orientamento \"consapevole\" e  \"multisensoriale\".",
      "Immagine di una persona che paralizzata e bloccata dall'eccessiva analisi di ogni singolo suono della foresta,  iper-analisi e \"paralisi da ascolto\" eccessivo."
    ],
    captions: [
      "Chiamo i Soccorsi",
      "Cerco il Sentiero",
      "Riferimenti e Orecchio",
      "Focalizzato sui Suoni"
    ],
    options: [
      {
        value: "Chiamo i Soccorsi",
        text: "(Positivo: pragmatismo razionale nel riconoscere i propri limiti operativi e attivare tempestivamente risorse esterne specializzate per la risoluzione della crisi) (Negativo: deficit di autonomia e self-reliance, tendenza a delegare la responsabilità della soluzione anziché esplorare capacità personali)."
      },
      {
        value: "Seguo il Sentiero",
        text: "(Positivo: ferma determinazione nel perseguire percorsi consolidati e sicuri per raggiungere l'obiettivo in modo efficiente e lineare) (Negativo: visione a tunnel e scarsa sensibilità ai segnali deboli dell'ambiente, rischio di ignorare opportunità o minacce fuori dal tracciato prestabilito)."
      },
      {
        value: "Riferimenti e Orecchio",
        text: "(Positivo: eccellente orientamento multisensoriale e capacità di integrare strumenti tecnici con l'ascolto attivo dell'ambiente circostante) (Negativo: elevata complessità del processo di integrazione dei dati, potenziale rallentamento della velocità di esecuzione per eccesso di input)."
      },
      {
        value: "Focalizzato sui Suoni",
        text: "(Positivo: straordinaria sensibilità al feedback ambientale e volontà di non trascurare alcun segnale per una comprensione totale del contesto) (Negativo: rischio di paralisi da iper-analisi e perdita della direzione strategica per eccessiva focalizzazione su dettagli contingenti)."
      }
    ],
    softSkill: "SviluppoPersonale, AscoltoAttivo",
    characteristics: "Ascolto Attivo, Stile di Apprendimento, Approccio al Feedback"
  },
  {
    num: 144,
    scenario: "Stai giocando con i tuoi amici e scopri una \"scorciatoia\" per vincere. Che fai?",
    instructions: [
      "Immagine di un atleta che taglia il traguardo con una scorciatoia nascosta,  vittoria \"solitaria\" e ottenuta con mezzi \"sleali\",  priorità assoluta al vincere \"a ogni costo\".",
      "Immagine di un bivio con un cartello \"scorciatoia\" che indica una strada laterale \"tentatrice\",  tentazione di usare la scorciatoia ma esitazione etica.",
      "Immagine di una persona che indica la scorciatoia scoperta a tutti gli altri amici giocatori,  condivisione della \"scorciatoia\" per rendere il gioco \"equo\" per tutti.",
      "Immagine di una persona che sorride mentre segue il percorso \"lungo\" e \"difficile\" ma \"corretto\",  rinuncia alla scorciatoia per rispetto delle regole e del \"fair play\",  priorità all'integrità del gioco e alla \"partecipazione\" \"leale\"."
    ],
    captions: [
      "Solo la Vittoria Conta",
      "Scorciatoia Tentatrice",
      "Scorciatoia per Tutti",
      "Gusto della Sfida"
    ],
    options: [
      {
        value: "Solo la Vittoria Conta",
        text: "(Positivo: orientamento aggressivo al risultato e capacità di individuare e sfruttare asimmetrie informative per ottenere un vantaggio competitivo) (Negativo: totale collasso dell'integrità competitiva e grave danno reputazionale, approccio che mina la fiducia e la coesione sociale)."
      },
      {
        value: "Scorciatoia Tentatrice",
        text: "(Positivo: consapevolezza acuta delle opportunità non convenzionali e analisi critica del dilemma etico tra efficienza e correttezza) (Negativo: ambivalenza morale e mancanza di una ferma postura deontologica, rischio di scivolamento verso condotte opportunistiche non trasparenti)."
      },
      {
        value: "Scorciatoia per Tutti",
        text: "(Positivo: eccellente etica della reciprocità e leadership orientata al fair play collettivo, trasformando un vantaggio privato in un beneficio comune) (Negativo: rinuncia alla differenziazione competitiva individuale, approccio che potrebbe essere percepito come eccessivamente collettivista in contesti agonistici)."
      },
      {
        value: "Gusto della Sfida",
        text: "(Positivo: suprema integrità professionale e valorizzazione del merito attraverso il rispetto rigoroso delle regole e dello spirito della competizione) (Negativo: potenziale inefficienza pragmatica per eccessivo purismo formale, rischio di non capitalizzare innovazioni di processo lecite ma complesse)."
      }
    ],
    softSkill: "DecisionMakingStrategico, Integrita",
    characteristics: "Etica, Fair Play, Integrità, Stile Competitivo, Pragmatismo"
  },
  {
    num: 145,
    scenario: "Ti perdi in un labirinto intricato. Come trovi la via d'uscita?",
    instructions: [
      "Immagine di una persona che corre nel labirinto,  azione impulsiva e  \"testa bassa\",  approccio \"trial and error\" senza metodo.",
      "Immagine di una persona che segue la folla sperando che qualcuno conosca la strada,  affidamento passivo al \"gregge\",  mancanza di pensiero critico autonomo.",
      "Immagine di una persona che consulta una bussola per orientarsi nel labirinto,  approccio metodico e  pianificato,  pensiero critico \"strumentale\".",
      "Immagine di una persona che sale su una torre per avere una \"visione d'insieme\" del labirinto dall'alto,  pensiero critico \"strategico\" e  \"olistico\",  analisi \"panoramica\" del problema."
    ],
    captions: [
      "Vado da Solo",
      "Seguo la Folla",
      "Uso la Bussola",
      "Mi Arrampico"
    ],
    options: [
      {
        value: "Vado da Solo",
        text: "(Positivo: spiccata propensione all'azione immediata e coraggio nel testare soluzioni attraverso un approccio dinamico di trial-and-error) (Negativo: grave carenza di pianificazione strategica e inefficienza operativa per mancanza di metodo, rischio di dispersione energetica in percorsi ciechi)."
      },
      {
        value: "Seguo la Folla",
        text: "(Positivo: capacità di conformità sociale e orientamento alla sicurezza del gruppo per minimizzare il rischio di errore individuale isolato) (Negativo: totale abdicazione dal pensiero critico autonomo e dipendenza passiva da decisioni altrui potenzialmente errate o non ottimizzate)."
      },
      {
        value: "Uso la Bussola",
        text: "(Positivo: approccio metodico e razionale basato sull'utilizzo di strumenti oggettivi per garantire una progressione sicura e verificabile) (Negativo: rischio di eccessiva dipendenza da framework esterni, potenziale difficoltà nel gestire situazioni che richiedono improvvisazione creativa o intuito situazionale)."
      },
      {
        value: "Mi Arrampico",
        text: "(Positivo: straordinaria capacità di visione d'insieme olistica e analisi di scenario superiore, individuando pattern risolutivi non visibili dal basso) (Negativo: potenziale distacco dalla dimensione operativa immediata, rischio di eccessiva astrazione che può ritardare l'implementazione pratica della soluzione)."
      }
    ],
    softSkill: "ProblemSolving, PensieroCritico",
    characteristics: "Problem Solving, Pensiero Critico, Approccio alla Risoluzione dei Problemi, Stili Cognitivi"
  }
];