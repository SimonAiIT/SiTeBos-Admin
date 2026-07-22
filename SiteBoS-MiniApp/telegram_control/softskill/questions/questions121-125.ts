import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 121,
    scenario: "Rifiutano qualcosa che ti eri impegnato a fare con tanto impegno, cosa vedi?",
    instructions: [
      "Immagine di un vaso rotto in mille pezzi,  sforzo inutile,  impegno \"frantumato\" dal rifiuto.",
      "Immagine di un vaso crepato ma ancora integro,  sforzo \"intaccato\" dal rifiuto,  ma resilienza parziale.",
      "Immagine di un vaso scheggiato ma ancora utilizzabile,  sforzo \"provato\" dal rifiuto,  ma volontà di riparare e riprovare.",
      "Immagine di un vaso integro e perfetto su una base solida,  rifiuto percepito come irrilevante,  fiducia incrollabile nel proprio valore e impegno."
    ],
    captions: [
      "Vaso Rotto",
      "Vaso Crepato",
      "Vaso Scheggiato",
      "Vaso Intatto"
    ],
    options: [
      {
        value: "Vaso Rotto",
        text: "(Positivo: profonda onestà emotiva e capacità di elaborare autenticamente l'impatto del fallimento senza negazioni superficiali) (Negativo: grave crollo della resilienza cognitiva e paralisi operativa di fronte al rifiuto, difficoltà nel ripristinare l'auto-efficacia professionale)."
      },
      {
        value: "Vaso Crepato",
        text: "(Positivo: resilienza adattiva e volontà di mantenere l'integrità operativa nonostante le ferite reputazionali o professionali subite) (Negativo: persistenza di un senso di vulnerabilità residua che può condizionare le performance future, rischio di insicurezza latente)."
      },
      {
        value: "Vaso Scheggiato",
        text: "(Positivo: eccellente orientamento alla riparazione e al superamento diagnostico dell'errore, trasformando il rifiuto in un'opportunità di miglioramento) (Negativo: potenziale dipendenza eccessiva dal feedback esterno per definire il proprio valore, rischio di non agire con piena autonomia decisionale)."
      },
      {
        value: "Vaso Intatto",
        text: "(Positivo: massima auto-efficacia e fiducia incrollabile nel proprio valore intrinseco indipendentemente dalle validazioni esterne) (Negativo: rischio di impermeabilità ai feedback costruttivi e potenziale distacco dalla realtà operativa per eccesso di sicurezza)."
      }
    ],
    softSkill: "SviluppoPersonale,GestioneDelleObiezioni",
    characteristics: "Resilienza,Reazione al Rifiuto,Fiducia in Sé"
  },
  {
    num: 122,
    scenario: "Il tuo partner deve trasferirsi lontano per lavoro che strada scegli?",
    instructions: [
      "Immagine di un bivio con due strade separate,  scelta di strade separate,  priorità allo sviluppo personale \"separato\".",
      "Immagine di due strade parallele che proseguono affiancate ma distanti,  scelta di mantenere una \"distanza\" ma con una certa \"vicinanza\" parallela.",
      "Immagine di due strade che convergono in un'unica strada,  ricerca di un \"punto di incontro\" tra sviluppo personale e relazione,  convergenza graduale.",
      "Immagine di grande svincolo stradale dove più strade sifondono completamente in un'unica strada ampia e condivisa,  priorità assoluta alla relazione,  sviluppo personale \"integrato\" nella coppia."
    ],
    captions: [
      "Strade Separate",
      "Strade Parallele",
      "Strade Convergenti",
      "Strada Comune"
    ],
    options: [
      {
        value: "Strade Separate",
        text: "(Positivo: rigorosa focalizzazione sugli obiettivi di carriera e ottimizzazione delle risorse individuali nel contesto geografico attuale) (Negativo: totale rinuncia alla continuità relazionale strategica, incapacità di gestire la complessità dei rapporti a distanza)."
      },
      {
        value: "Strade Parallele",
        text: "(Positivo: eccellente flessibilità operativa e adozione di modelli di collaborazione remota per preservare il valore della relazione) (Negativo: rischio di erosione della qualità del legame per mancanza di presenza fisica costante, potenziale inefficacia dei soli canali digitali)."
      },
      {
        value: "Strade Convergenti",
        text: "(Positivo: spiccata adattabilità al cambiamento e proattività nella ricerca di soluzioni ibride che armonizzino ambizione e legame) (Negativo: elevato carico di negoziazione e stress adattivo, rischio di non raggiungere una piena stabilità in nessuno dei due ambiti)."
      },
      {
        value: "Strada Comune",
        text: "(Positivo: suprema dedizione alla stabilità del capitale relazionale e coraggio nell'affrontare trasformazioni radicali per la coesione) (Negativo: rischio di autosabotaggio professionale e perdita di autonomia strategica, potenziale dipendenza eccessiva dal contesto altrui)."
      }
    ],
    softSkill: "FidelizzazioneDelCliente,GestioneDelCambiamento",
    characteristics: "Fidelizzazione del Cliente,Adattabilità,Orientamento al Servizio"
  },
  {
    num: 123,
    scenario: "Sei al ristorante, ordini un piatto costoso e decantato da tutti, ma non ti piace. Come reagisci?",
    instructions: [
      "Immagine di una persona che indossa una maschera sorridente mentre mangia,  sopporta in silenzio la delusione,  pazienza \"forzata\".",
      "Immagine di un piatto elegantemente \"abbandonato\" intonso sul tavolo,  rifiuto silenzioso e \"distaccato\",  non consuma e basta.",
      "Immagine di una campanella da tavolo per chiamare il cameriere,  richiesta di attenzione e  interazione \"controllata\" per esprimere il problema.",
      "Immagine di una \"bomba\" fumante con miccia accesa sopra il piatto,  protesta eclatante e \"distruttiva\",  recensione negativa \"esplosiva\"."
    ],
    captions: [
      "Lo Finisco Ugualmente",
      "Non lo Mangio",
      "Chiedo la Sostituzione",
      "Recensione Negativa"
    ],
    options: [
      {
        value: "Lo Finisco Ugualmente",
        text: "(Positivo: massima eleganza relazionale e capacità di gestire il disappunto personale senza generare frizioni nel contesto circostante) (Negativo: rinuncia passiva alla tutela dei propri diritti di consumatore e mancata condivisione di un feedback utile al miglioramento del servizio)."
      },
      {
        value: "Non lo Mangio",
        text: "(Positivo: comunicazione non verbale sobria e assertiva della propria insoddisfazione senza scadere in lamentele plateali) (Negativo: mancanza di una gestione proattiva del problema, rischio di lasciare l'interlocutore privo di informazioni chiare sulla causa del disservizio)."
      },
      {
        value: "Chiedo la Sostituzione",
        text: "(Positivo: eccellente assertività professionale e orientamento alla risoluzione costruttiva di un'esperienza non in linea con le aspettative) (Negativo: potenziale rischio di essere percepito come esigente o difficile da soddisfare, necessità di gestire un momento di frizione relazionale)."
      },
      {
        value: "Recensione Negativa",
        text: "(Positivo: massima trasparenza pubblica e impegno nel segnalare criticità a tutela del mercato e della qualità generale del settore) (Negativo: approccio punitivo e non collaborativo, rischio di arrecare un danno sproporzionato senza aver tentato una risoluzione privata preventiva)."
      }
    ],
    softSkill: "SoddisfazioneDelCliente,FidelizzazioneDelCliente",
    characteristics: "Gestione della Insoddisfazione,Stile di Feedback,Approccio alla Critica"
  },
  {
    num: 124,
    scenario: "Hai un evento importante da organizzare, come lo pubblicizzi?",
    instructions: [
      "Immagine di un segnale radio che trasmette a onde larghe a tutti,  pubblicità massiccia e indiscriminata.",
      "Immagine di un gruppo di persone impegnate sui social,  campagna mirata su piattaforme social (Meta).",
      "Immagine di una letterina sigillata con ceralacca,  inviti privati via email,  comunicazione riservata e \"one-to-one\".",
      "Immagine di persone che si passano un segreto sussurrando all'orecchio,  passaparola esclusivo e \"underground\"."
    ],
    captions: [
      "Agenzia di Marketing",
      "Campagna Social",
      "Email Private",
      "Passaparola"
    ],
    options: [
      {
        value: "Agenzia di Marketing",
        text: "(Positivo: massimizzazione della portata democratica e visibilità di massa per garantire la massima partecipazione quantitativa) (Negativo: totale perdita di esclusività e diluizione del posizionamento premium, rischio di attrarre un pubblico non qualificato o incoerente)."
      },
      {
        value: "Campagna Social",
        text: "(Positivo: eccellente equilibrio tra visibilità scalabile e targetizzazione precisa dei segmenti di mercato rilevanti) (Negativo: percezione di evento standardizzato e commerciale, mancanza di quell'aura di unicità e privilegio necessaria per iniziative di alto profilo)."
      },
      {
        value: "Email Private",
        text: "(Positivo: straordinario posizionamento premium e valorizzazione del senso di appartenenza attraverso un networking selettivo e personalizzato) (Negativo: portata limitata e rischio di mancata saturazione dell'evento per eccessiva chiusura dei canali di comunicazione)."
      },
      {
        value: "Passaparola",
        text: "(Positivo: suprema esclusività e costruzione di un brand mitico basato sulla scarsità e sul valore relazionale puro) (Negativo: estrema vulnerabilità al fallimento quantitativo e assenza di controllo sistematico sui flussi di partecipazione, mancanza di scalabilità)."
      }
    ],
    softSkill: "Presentazione,SicurezzaDigitale",
    characteristics: "Stile di Promozione,Gestione della Privacy,Portata vs. Esclusività"
  },
  {
    num: 125,
    scenario: "Vedi un nuovo modello innovativo di cellulare, che fai?",
    instructions: [
      "Immagine di un cellulare come una fortezza medievale inespugnabile,  chiusura totale all'innovazione esterna,  \"noi siamo i migliori così\".",
      "Immagine di una persona che guarda di sfuggita un nuovo cellulare con aria distratta,  attenzione superficiale all'innovazione,  minimo adattamento.",
      "Immagine di un architetto che rivede i progetti alla luce di nuove tendenze,  rielaborazione moderata e adattamento parziale all'innovazione.",
      "Immagine di un camaleonte che cambia colore per mimetizzarsi perfettamente nel nuovo ambiente,  adattamento radicale e completo all'innovazione,  \"tabula rasa\" e ripartenza da zero."
    ],
    captions: [
      "Tengo il Mio",
      "Sguardo di Sfuggita",
      "Studio le Caratteristiche",
      "Entro a Provarlo"
    ],
    options: [
      {
        value: "Tengo il Mio",
        text: "(Positivo: solida fedeltà alle proprie radici identitarie e difesa della stabilità operativa contro mode tecnologiche effimere) (Negativo: grave rischio di obsolescenza e perdita di competitività per incapacità di recepire i cambiamenti dirompenti del mercato)."
      },
      {
        value: "Sguardo di Sfuggita",
        text: "(Positivo: prudenza strategica volta a monitorare l'innovazione senza lasciarsi distrarre dal proprio core business consolidato) (Negativo: adattamento tardivo e superficiale che impedisce di cogliere i vantaggi competitivi legati alla precocità dell'adozione tecnologica)."
      },
      {
        value: "Studio le Caratteristiche",
        text: "(Positivo: eccellente approccio metodico e analitico volto a integrare l'innovazione in modo coerente e ragionato nel proprio modello) (Negativo: rischio di eccessivo cautelismo analitico che può rallentare la capacità di reazione in mercati iper-competitivi e rapidi)."
      },
      {
        value: "Entro a Provarlo",
        text: "(Positivo: straordinaria apertura al cambiamento radicale e coraggio nella sperimentazione di nuovi paradigmi innovativi) (Negativo: potenziale perdita di coerenza identitaria e rischio di inseguire acriticamente ogni novità tecnologica senza una base solida)."
      }
    ],
    softSkill: "FidelizzazioneDelCliente,MenteAperta",
    characteristics: "Adattabilità al Cambiamento,Apertura Mentale,Prontezza Innovativa"
  }
];