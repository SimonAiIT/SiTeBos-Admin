import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 146,
    scenario: "Dopo una lunga attesa allo sportelo, ti accorgi che hai sbagliato fila, che fai?",
    instructions: [
      "Immagine di una persona che sussurra al commesso e gli porge di nascosto una banconota,  tentativo di \"ungere le ruote\" per ottenere un trattamento speciale.",
      "Immagine di una persona che alza la mano timidamente per chiedere informazioni a chi è nella fila giusta,  richiesta di chiarimenti \"formale\" e  \"rispettosa della fila\".",
      "Immagine di una persona che si sposta mestamente in fondo a una fila lunghissima,  accettazione paziente del proprio errore e della \"punizione\" della lunga attesa.",
      "Immagine di una persona che volta le spalle allo sportello e si allontana con rabbia,  rinuncia impulsiva e  \"vendicativa\" al servizio per frustrazione."
    ],
    captions: [
      "Chiedo Un Eccezione al Commesso",
      "Chiedo Se Sono il Prossimo nella Fila Giusta",
      "Cambio Fila Pazienza",
      "Vado Via, Ritorno Domani"
    ],
    options: [
      {
        value: "Chiedo Un Eccezione al Commesso",
        text: "(Positivo: spiccata intraprendenza nel ricercare scorciatoie operative e determinazione nell'ottenere il risultato desiderato oltre i vincoli standard) (Negativo: totale violazione dell'equità procedurale e della deontologia professionale, grave danno alla credibilità etica personale)."
      },
      {
        value: "Chiedo Se Sono il Prossimo nella Fila Giusta",
        text: "(Positivo: eccellente rispetto dei protocolli e della convivenza civile, agendo con trasparenza per risolvere l'errore senza prevaricare gli altri) (Negativo: potenziale eccessiva fiducia nella flessibilità del sistema, rischio di inefficacia nel recupero del tempo perduto per mancanza di assertività)."
      },
      {
        value: "Cambio Fila Pazienza",
        text: "(Positivo: suprema responsabilità individuale e assunzione coscienziosa delle conseguenze dei propri errori nel pieno rispetto del capitale sociale) (Negativo: rischio di auto-penalizzazione improduttiva e mancanza di proattività nel negoziare una soluzione legittima più efficiente)."
      },
      {
        value: "Vado Via, Ritorno Domani",
        text: "(Positivo: affermazione radicale della propria autonomia decisionale e rifiuto di sottostare a dinamiche frustranti non pianificate) (Negativo: grave deficit nella gestione della frustrazione e scarsa resilienza di fronte agli imprevisti, approccio che sacrifica l'obiettivo per reazione emotiva)."
      }
    ],
    softSkill: "Integrita, TematicheSociali",
    characteristics: "Senso Civico, Equità, Rispetto delle Regole, Pazienza"
  },
  {
    num: 147,
    scenario: "Stai Giocando ad Indovina chi è?, quale è la tua prima domanda, è un? (Hai un Biglietto Sulla Fronte con Un Qualsiasi Personaggio)",
    instructions: [
      "Immagine di un pittore rinascimentale che dipinge una rockband.",
      "Immagine di una lente di ingrandimento puntata sul simbolo di \"genere\" maschio e femmina.",
      "Immagine di una lente di ingrandimento puntata sulla \"testa\" di un personaggio calvo,  focalizzazione su una caratteristica \"fisica\"",
      "Immagine di una lapide di cimitero."
    ],
    captions: [
      "Artista",
      "Uomo",
      "Calvo",
      "Vivente"
    ],
    options: [
      {
        value: "Artista",
        text: "(Positivo: spiccato pensiero laterale e audacia nel testare categorie ad alto valore semantico per una profilazione qualitativa immediata) (Negativo: elevata incertezza statistica nella fase iniziale, rischio di non restringere il campo in modo efficiente per eccessiva specificità)."
      },
      {
        value: "Uomo",
        text: "(Positivo: eccellente efficienza statistica e approccio data-driven volto alla massimizzazione della riduzione del campo di ricerca al primo step) (Negativo: approccio convenzionale che potrebbe mancare di quella visione intuitiva necessaria per superare strategie avversarie più sofisticate)."
      },
      {
        value: "Calvo",
        text: "(Positivo: pragmatismo operativo focalizzato su evidenze empiriche indiscutibili per una scrematura rapida e visiva dei dati) (Negativo: limitata portata strategica della domanda, approccio che rischia di essere troppo puntuale e poco sistemico nella risoluzione del problema)."
      },
      {
        value: "Vivente",
        text: "(Positivo: rigore logico-deduttivo nella delimitazione dei perimetri di ricerca attraverso una classificazione ontologica fondamentale) (Negativo: potenziale lentezza nel raggiungimento della soluzione finale per eccessiva cautela metodologica nella fase di apertura)."
      }
    ],
    softSkill: "ProblemSolving, PensieroCritico",
    characteristics: "Pensiero Strategico, Efficacia, Creatività, Originalità"
  },
  {
    num: 148,
    scenario: "Stai appendendo qualcosa e sfortunatamente fori un tubo d'acqua, di corsa chiudi il rubinetto generale e poi?",
    instructions: [
      "Immagine di una persona che telefona frettolosamente ad un contatto in rubrica,  richiesta di aiuto \"informale\" a una \"persona di fiducia\" non esperta.",
      "Immagine di qualcuno che armeggia con nastro adesivo e mastice per bloccare la falla alla \"bell'e meglio\",  improvvisazione \"casalinga\" e soluzione \"temporanea\" \"di fortuna\".",
      "Immagine di un idraulico professionista al telefono,  ricerca di aiuto \"esperto\" e \"qualificato\".",
      "Immagine di una persona china su un manuale di \"idraulica fai da te\" con strumenti in mano,  studio \"autonomo\" e  tentativo di riparazione \"fai da te\" basato sull' \"apprendimento\" \"immediato\"."
    ],
    captions: [
      "Chiamo Subito Mio Cugino",
      "Tappo Alla Meglio",
      "Chiamo un Idraulico",
      "Studio la Riparazione"
    ],
    options: [
      {
        value: "Chiamo Subito Mio Cugino",
        text: "(Positivo: rapidità nell'attivazione del capitale sociale relazionale per un supporto immediato in una situazione di stress emotivo) (Negativo: grave sottovalutazione della complessità tecnica, rischio di soluzioni palliative che potrebbero aggravare il danno strutturale)."
      },
      {
        value: "Tappo Alla Meglio",
        text: "(Positivo: spiccata prontezza operativa e capacità di improvvisazione tecnica per mitigare l'impatto immediato dell'emergenza) (Negativo: approccio reattivo privo di visione sistemica, rischio di trascurare la necessità di un intervento risolutivo professionale e certificato)."
      },
      {
        value: "Chiamo un Idraulico",
        text: "(Positivo: eccellente risk management e prioritizzazione della competenza specialistica per garantire una risoluzione definitiva e sicura della crisi) (Negativo: totale dipendenza da expertise esterne, potenziale mancanza di iniziativa autonoma per interventi di primo soccorso tecnico)."
      },
      {
        value: "Studio la Riparazione",
        text: "(Positivo: straordinaria propensione al learning-by-doing e determinazione nello sviluppare autonomamente le skill necessarie alla risoluzione del problema) (Negativo: rischio di eccessiva dilatazione dei tempi di intervento per eccesso di studio, potenziale inefficacia esecutiva dovuta alla mancanza di esperienza pratica)."
      }
    ],
    softSkill: "ProblemSolving, PensieroCritico",
    characteristics: "Problem Solving, Autonomia, Intraprendenza, Propensione al Fai-da-te"
  },
  {
    num: 149,
    scenario: "Devi creare la tua squadra di tiro alla fune, chi perde va nel fango, hai vinto il sorteggio e cominci tu, che fai?",
    instructions: [
      "Immagine di un gruppo di amici più cari,  priorità ai legami affettivi e alla \"simpatia\" personale nella scelta del team.",
      "Immagine di un gruppo di persone dall'aspetto \"divertente\" o \"simpatico\".",
      "Immagine di un gruppo di persone dall aspetto furbo .",
      "IImmagine di un gruppo di persone muscolose e \"forti\" fisicamente,  priorità assoluta alla \"forza bruta\" e al potenziale di \"vittoria\" \"fisica\" nella selezione del team."
    ],
    captions: [
      "Prendo i Miei Amici",
      "Scelgo Per Divertirmi",
      "Ho il Mio Piano",
      "Scelgo i Forti"
    ],
    options: [
      {
        value: "Prendo i Miei Amici",
        text: "(Positivo: valorizzazione della coesione sinaptica e dell'armonia relazionale come asset per la stabilità e il benessere del gruppo) (Negativo: potenziale disallineamento rispetto ai requisiti tecnici della performance, rischio di insuccesso competitivo per eccessiva focalizzazione affettiva)."
      },
      {
        value: "Scelgo Per Divertirmi",
        text: "(Positivo: approccio orientato all'esperienza e alla creazione di un clima positivo, de-drammatizzando la pressione del risultato agonistico) (Negativo: mancanza di orientamento alla vittoria e scarso impegno nella selezione razionale dei talenti necessari al raggiungimento dell'obiettivo)."
      },
      {
        value: "Ho il Mio Piano",
        text: "(Positivo: audacia nella sperimentazione di modelli di team non convenzionali, puntando sull'effetto sorpresa e sull'originalità della visione) (Negativo: elevata imprevedibilità del risultato e rischio di fallimento per mancanza di parametri di selezione oggettivi e collaudati)."
      },
      {
        value: "Scelgo i Forti",
        text: "(Positivo: rigoroso orientamento alla performance e massimizzazione delle probabilità di successo attraverso una selezione meritocratica basata su parametri oggettivi) (Negativo: potenziale deficit di armonia relazionale, rischio di creare un gruppo focalizzato esclusivamente sul risultato a scapito della coesione umana)."
      }
    ],
    softSkill: "DecisionMakingStrategico, Integrita",
    characteristics: "Decision Making, Strategia, Integrita, Leadership"
  },
  {
    num: 150,
    scenario: "Hai l'opportunità di parlare con un personaggio nella storia chi scegli?",
    instructions: [
      "Immagine di Albert Einstein,  icona della genialità visionaria e della soluzione di problemi tecnologici complessi attraverso l'innovazione radicale.",
      "Immagine di Cristoforo Colombo che scruta l'orizzonte marino con una bussola in mano,  simbolo di esplorazione strategica e  problem-solving orientato alla scoperta e all'ignoto.",
      "Immagine di Gandhi in meditazione pacifica,  icona della leadership etica e della risoluzione non violenta dei problemi sociali complessi.",
      "Immagine di Alessandro Magno che guida l'esercito in battaglia con una spada sguainata,  simbolo di leadership decisionale \"tranchant\" e  problem-solving militare strategico su vasta scala."
    ],
    captions: [
      "Einstein",
      "Colombo",
      "Gandhi",
      "Alessandro"
    ],
    options: [
      {
        value: "Einstein",
        text: "(Positivo: profonda valorizzazione dell'innovazione radicale e della visione olistica applicata alla risoluzione di paradigmi complessi) (Negativo: rischio di eccessivo distacco dalle dinamiche umane e sociali immediate per una focalizzazione estrema sull'astrazione teorica e tecnica)."
      },
      {
        value: "Colombo",
        text: "(Positivo: spiccata propensione all'esplorazione strategica e al risk management in contesti di incertezza assoluta e scoperta dell'ignoto) (Negativo: potenziale sottovalutazione delle implicazioni sistemiche dell'azione esplorativa, rischio di audacia non supportata da sufficiente prudenza preventiva)."
      },
      {
        value: "Gandhi",
        text: "(Positivo: suprema leadership etica e orientamento alla risoluzione non violenta di conflitti sistemici complessi attraverso l'integrità morale) (Negativo: rischio di percepito utopismo operativo, potenziale inefficacia in contesti che richiedono azioni dirette e risolutive immediate)."
      },
      {
        value: "Alessandro",
        text: "(Positivo: eccellente leadership decisionale risolutiva e capacità di guidare l'esecuzione strategica con determinazione e impatto immediato) (Negativo: approccio autoritario che rischia di trascurare la partecipazione e l'empowerment dei livelli intermedi, limitando la sostenibilità democratica del comando)."
      }
    ],
    softSkill: "DecisionMakingStrategico, PensieroCritico",
    characteristics: "Stili Decisionali, Leadership, Approccio al Problem Solving, Visione Strategica"
  }
];