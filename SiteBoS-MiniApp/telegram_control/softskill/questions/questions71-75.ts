import { Question } from "../types";

export const questions71to75: Question[] = [
  {
    num: 71,
    scenario: "Quale immagine associ al tuo percorso nella vita?",
    instructions: [
      "Immagine di un'autostrada dritta e soleggiata,  percorso chiaro e senza ostacoli,  sicurezza di sé.",
      "Immagine di una strada di campagna con qualche curva,  percorso generalmente agevole ma con imprevisti gestibili.",
      "Immagine di un sentiero di montagna con salite e discese,  percorso impegnativo e altalenante.",
      "Immagine di un labirinto intricato e buio,  percorso confuso e pieno di incertezze,  senso di inadeguatezza."
    ],
    captions: [
      "Autostrada Spianata",
      "Strada di Campagna",
      "Sentiero di Montagna",
      "Labirinto Buio"
    ],    options: [
      {
        value: "Autostrada Spianata",
        text: "(Positivo: elevata fiducia nelle proprie capacità di navigazione e senso di controllo sulla propria evoluzione professionale, orientamento al risultato lineare) (Negativo: rischio di bias di ottimismo ingenuo e scarsa preparazione agli imprevisti sistemici, potenziale mancanza di profondità nella gestione delle crisi)."
      },
      {
        value: "Strada di Campagna",
        text: "(Positivo: approccio pragmatico e realistico alla complessità, eccellente adattabilità tattica di fronte a deviazioni impreviste del percorso) (Negativo: potenziale mancanza di ambizione verso obiettivi di scala globale, rischio di accontentarsi di un progresso incrementale senza picchi di eccellenza)."
      },
      {
        value: "Sentiero di Montagna",
        text: "(Positivo: spiccata resilienza e attitudine alla crescita attraverso il superamento di sfide ardue, mentalità orientata allo sforzo e alla conquista) (Negativo: esposizione a stress cronico per percezione di lotta costante, rischio di trascurare il benessere psicofisico per eccesso di focalizzazione sulla meta)."
      },
      {
        value: "Labirinto Buio",
        text: "(Positivo: attivazione di processi introspettivi profondi e ricerca di nuovi paradigmi di senso, disponibilità a richiedere supporto esterno specializzato) (Negativo: senso critico di smarrimento e paralisi decisionale per mancanza di orientamento, rischio di auto-percezione di inadeguatezza cronica)."
      }
    ],
    softSkill: "FiduciaInSeStessi, Autocritica",
    characteristics: "Autostima, Percezione di Sé, Livelli di Fiducia"
  },
  {
    num: 72,
    scenario: "Vedi un incendio. Come reagisci?",
    instructions: [
      "Immagine di una persona che urla scompostamente agitando le braccia,  reazione isterica e  inefficace.",
      "Immagine di una persona che cerca freneticamente una bottiglia d'acqua,  azione immediata e  istintiva per \"spegnere subito\".",
      "Immagine di una persona che compone rapidamente il numero di emergenza al telefono,  ricerca di aiuto esterno e  delegato.",
      "Immagine di una persona che si addentra tra le fiamme per cercare persone da salvare,  azione empatica e  focalizzata sulle \"vittime\"."
    ],
    captions: [
      "Comincio ad Urlare",
      "Cerco Subito Acqua",
      "Chiamo i Pompieri",
      "Cerco Superstiti"
    ],
    options: [
      {
        value: "Comincio ad Urlare",
        text: "(Positivo: immediata segnalazione acustica del pericolo e allerta tempestiva del sistema sociale circostante, attivazione dell'allarme collettivo) (Negativo: reazione iper-emotiva priva di coordinamento operativo, rischio di incrementare il panico generale e ostacolare le procedure di evacuazione)."
      },
      {
        value: "Cerco Subito Acqua",
        text: "(Positivo: forte orientamento all'azione risolutiva immediata e attitudine al problem-solving pratico in prima persona) (Negativo: rischio di intervento inefficace o pericoloso per mancanza di analisi della portata del rischio, potenziale esposizione a pericoli evitabili)."
      },
      {
        value: "Chiamo i Pompieri",
        text: "(Positivo: eccellente lucidità procedurale e capacità di delega strategica a specialisti competenti, gestione razionale dell'emergenza) (Negativo: potenziale distacco emotivo percepito come mancanza di iniziativa diretta, rischio di apparire eccessivamente burocratici in situazioni che richiederebbero coraggio fisico)."
      },
      {
        value: "Cerco Superstiti",
        text: "(Positivo: leadership empatica orientata alla salvaguardia delle persone, coraggio altruistico e priorità assoluta alla tutela della vita umana) (Negativo: rischio di trascurare la risoluzione tecnica del problema alla radice, potenziale messa in pericolo della propria incolumità per eccesso di eroismo emotivo)."
      }
    ],
    softSkill: "RelazioniInterpersonali, GestioneDeiConflitti",
    characteristics: "Stile di Conflitto, Approccio Interpersonale, Empatia"
  },
  {
    num: 73,
    scenario: "Pensa al tuo ritmo abituale nello svolgere un compito.  Ti senti più...?",
    instructions: [
      "Immagine di un'autostrada deserta e rettilinea,  flusso libero e veloce,  senza intoppi.",
      "Immagine di una strada scorrevole con traffico fluido,  ritmo regolare e senza fretta.",
      "Immagine di traffico cittadino intenso ma ancora in movimento,  ritmo variabile e a volte affannoso.",
      "Immagine di un ingorgo stradale completamente bloccato,  ritmo caotico e stressante,  senza controllo."
    ],
    captions: [
      "Autostrada Deserta",
      "Strada Scorrevole",
      "Traffico Cittadino",
      "Ingorgo Totale"
    ],
    options: [
      {
        value: "Autostrada Deserta",
        text: "(Positivo: eccellente efficienza operativa e capacità di raggiungere alti volumi di output in tempi record, fluidità d'esecuzione senza intoppi) (Negativo: rischio di scarsa attenzione ai dettagli critici per eccesso di velocità, potenziale insofferenza verso contesti che richiedono pause o verifiche rigorose)."
      },
      {
        value: "Strada Scorrevole",
        text: "(Positivo: equilibrio ottimale tra velocità e qualità, gestione del tempo sostenibile e metodica nel lungo periodo) (Negativo: potenziale mancanza di reattività estrema in situazioni di urgenza critica, rischio di non performare sotto picchi di pressione eccezionali)."
      },
      {
        value: "Traffico Cittadino",
        text: "(Positivo: alta versatilità e capacità di navigare in ambienti di lavoro dinamici e imprevedibili, adattamento rapido ai cambi di priorità) (Negativo: percezione di affanno e stress intermittente, rischio di frammentazione del focus operativo per eccessiva variabilità dei ritmi)."
      },
      {
        value: "Ingorgo Totale",
        text: "(Positivo: capacità di gestire situazioni di crisi estrema attraverso l'improvvisazione creativa e il problem-solving reattivo in condizioni di caos) (Negativo: inefficienza sistemica e disorganizzazione cronica, rischio di perdita di controllo sulle scadenze e alto livello di frustrazione percepita)."
      }
    ],
    softSkill: "GestioneDelTempo, PianificazioneEOrganizzazione",
    characteristics: "Ritmo di Lavoro, Gestione della Pressione, Efficienza"
  },
  {
    num: 74,
    scenario: "Quale immagine descrive meglio il tuo stile di vendita?",
    instructions: [
      "Immagine di un giardiniere che cura amorevolmente una pianta,  focus sulla relazione con il cliente.",
      "Immagine di un artista che mostra con orgoglio la sua opera,  focus sul valore del prodotto.",
      "Immagine di un cacciatore che punta la preda con decisione,  focus sul risultato di vendita.",
      "Immagine di un sarto che adatta un vestito su misura,  focus sulle esigenze del cliente."
    ],
    captions: [
      "Giardiniere",
      "Artista",
      "Cacciatore",
      "Sarto"
    ],
    options: [
      {
        value: "Giardiniere",
        text: "(Positivo: eccellente orientamento alla fidelizzazione e alla costruzione di relazioni di fiducia durature, approccio consulenziale di alto valore) (Negativo: potenziale scarsa incisività commerciale nel breve termine, rischio di non capitalizzare le opportunità immediate per eccessiva lentezza)."
      },
      {
        value: "Artista",
        text: "(Positivo: forte convinzione della qualità del prodotto e capacità di comunicarne il valore con passione persuasiva e competenza tecnica) (Negativo: rischio di autoreferenzialità e scarsa attitudine all'ascolto delle esigenze specifiche del mercato, potenziale rigidità nell'offerta)."
      },
      {
        value: "Cacciatore",
        text: "(Positivo: massimo orientamento al risultato e determinazione eccezionale nel raggiungimento dei target di vendita più sfidanti) (Negativo: approccio potenzialmente aggressivo che può erodere la fiducia del cliente nel lungo periodo, rischio di trascurare l'etica relazionale)."
      },
      {
        value: "Sarto",
        text: "(Positivo: approccio iper-personalizzato volto alla soddisfazione totale del cliente attraverso soluzioni su misura di altissima precisione) (Negativo: inefficienza in termini di scalabilità del servizio, rischio di disperdere eccessive risorse e tempo in dettagli marginali non remunerativi)."
      }
    ],
    softSkill: "ServizioAlCliente, OrientamentoAlCliente",
    characteristics: "Approccio alla Vendita, Orientamento al Cliente, Stile di Persuasione"
  },
  {
    num: 75,
    scenario: "Quale immagine descrive meglio il tuo paesaggio emotivo?",
    instructions: [
      "Immagine di una barchetta di carta che affonda in un bicchiere d'acqua agitata,  fragilità e sopraffazione anche per piccole difficoltà.",
      "Immagine di una casa con le finestre che sbattono durante un temporale,  turbamento e difficoltà, ma la struttura regge.",
      "Immagine di un faro che svetta nella tempesta,  luce ferma e rassicurante nel caos,  calma interiore nonostante tutto.",
      "Immagine di una lastra di ghiaccio immobile e insensibile sotto una tormenta di neve,  distacco emotivo e nessuna reazione apparente."
    ],
    captions: [
      "Barchetta",
      "Casa",
      "Faro",
      "Ghiaccio"
    ],
    options: [
      {
        value: "Barchetta",
        text: "(Positivo: estrema sensibilità interpersonale e capacità di cogliere le sfumature emotive più sottili negli altri, alta empatia ricettiva) (Negativo: vulnerabilità critica allo stress e tendenza alla sopraffazione emotiva, scarsa resilienza di fronte a pressioni esterne anche lievi)."
      },
      {
        value: "Casa",
        text: "(Positivo: resilienza equilibrata e attitudine a resistere alle turbolenze senza perdere la propria integrità identitaria e professionale) (Negativo: potenziale accumulo di tensione non elaborata, rischio di somatizzazione o di esplosioni emotive differite per mancanza di sfogo)."
      },
      {
        value: "Faro",
        text: "(Positivo: eccezionale stabilità emotiva e capacità di essere un punto di riferimento saldo per il team in situazioni di crisi profonda) (Negativo: potenziale percezione di eccessivo distacco o mancanza di vulnerabilità, rischio di apparire algidi e inaccessibili sul piano umano)."
      },
      {
        value: "Ghiaccio",
        text: "(Positivo: massimo controllo razionale e imperturbabilità assoluta in contesti ad alta criticità operativa, protezione totale dall'interferenza emotiva) (Negativo: rigidità affettiva e incapacità di connettersi empaticamente con gli altri, rischio di isolamento e di cecità relazionale)."
      }
    ],
    softSkill: "Resilienza, GestioneDelloStress",
    characteristics: "Resilienza, Tolleranza allo Stress, Reattività Emotiva"
  }
];
