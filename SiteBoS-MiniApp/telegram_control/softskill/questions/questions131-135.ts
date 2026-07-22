import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 131,
    scenario: "Devi scegliere chi far \"salire sul palco\" ad un evento per speaker. Come ti orienti?",
    instructions: [
      "Immagine di un palco illuminato da un unico riflettore che punta su un solo oratore \"standard\" e omogeneo,  scelta di un solo oratore \"rappresentativo\" di un unico gruppo dominante.",
      "Immagine di un palco con poche persone,  inclusione simbolica e \"di facciata\" di una minoranza per \"decoro\".",
      "Immagine di un palco con un \"coro\" multiculturale di oratori diversi per genere, etnia, età,  vera inclusione e  rappresentanza \"plurale\" e  \"autentica\" della diversità.",
      "Immagine di un megafono che amplifica le voci \"dal basso\",  priorità a voci \"inaudite\" e  tradizionalmente escluse dal \"palco\",  focus sull'equità \"sostanziale\" e  \"redistributiva\" (e non solo \"formale\")."
    ],
    captions: [
      "Voce Unica",
      "Goccia di Colore",
      "Coro Polifonico",
      "Testimonianze Personali"
    ],
    options: [
      {
        value: "Voce Unica",
        text: "(Positivo: massima coerenza stilistica e garanzia di un messaggio lineare e facilmente decodificabile per il target di riferimento) (Negativo: grave esclusività monoculturale e mancanza di rappresentanza plurale, rischio di alienare segmenti di pubblico diversificati)."
      },
      {
        value: "Goccia di Colore",
        text: "(Positivo: approccio prudente e graduale verso l'integrazione della diversità, garantendo una transizione morbida dai modelli tradizionali) (Negativo: rischio di tokenismo superficiale e inclusione puramente simbolica, percepita come non autentica o opportunistica)."
      },
      {
        value: "Coro Polifonico",
        text: "(Positivo: eccellente valorizzazione della pluralità e promozione di una rappresentanza autentica e paritaria delle diverse identità sociali) (Negativo: elevata complessità nella gestione dei flussi comunicativi, potenziale frammentazione del messaggio centrale dell'evento)."
      },
      {
        value: "Testimonianze Personali",
        text: "(Positivo: suprema leadership inclusiva orientata all'equità sostanziale e all'empowerment di voci tradizionalmente marginalizzate) (Negativo: rischio di polarizzazione del dibattito e potenziale percezione di eccessivo attivismo a scapito dell'equilibrio istituzionale)."
      }
    ],
    softSkill: "DiversitaEInclusione, Equita",
    characteristics: "Inclusività, Equità, Sensibilità Sociale, Approccio alla Diversità"
  },
  {
    num: 132,
    scenario: "Un collega ti chiede una di \"confidenza delicata su un cliente\". Che fai?",
    instructions: [
      "Immagine di un muro di mattoni invalicabile,  rifiuto netto di compromettere l'etica,  confine invalicabile.",
      "Immagine di un muro con una piccola \"crepa\" appena visibile,  esitazione etica,  leggera \"apertura\" al compromesso,  confine \"incrinato\".",
      "Immagine di una porta aperta \"a metà\",  valutazione del \"pro e contro\" del compromesso etico,  equilibrio incerto tra etica e favore al cliente.",
      "Immagine di una porta spalancata che invita ad entrare senza esitazione,  compromesso etico totale per accontentare il cliente,  confine etico \"superato\"."
    ],
    captions: [
      "Mi spiace, non Posso",
      "Lo Conosco, Dai ",
      "Ci Devo Pensare",
      "Ci Sentiamo Dopo"
    ],
    options: [
      {
        value: "Mi spiace, non Posso",
        text: "(Positivo: suprema integrità deontologica e tutela rigorosa degli asset reputazionali attraverso la difesa di confini etici non negoziabili) (Negativo: rischio di frizione relazionale immediata con l'interlocutore, potenziale percezione di eccessiva rigidità burocratica)."
      },
      {
        value: "Lo Conosco, Dai ",
        text: "(Positivo: pragmatismo relazionale volto a preservare il clima di collaborazione interna attraverso una flessibilità controllata) (Negativo: grave incrinatura della postura etica e rischio di esposizione a successivi dilemmi morali per mancanza di fermezza iniziale)."
      },
      {
        value: "Ci Devo Pensare",
        text: "(Positivo: approccio analitico e prudente volto a valutare le implicazioni sistemiche di una scelta delicata prima di agire) (Negativo: percezione di esitazione etica e potenziale perdita di autorevolezza, rischio di apparire calcolatori piuttosto che integri)."
      },
      {
        value: "Ci Sentiamo Dopo",
        text: "(Positivo: massima dedizione alla soddisfazione delle richieste del team e orientamento totale al supporto operativo immediato) (Negativo: totale collasso della condotta etica e violazione dei protocolli di riservatezza, grave danno alla credibilità professionale a lungo termine)."
      }
    ],
    softSkill: "EticaProfessionale, FidelizzazioneDelCliente",
    characteristics: "Etica, Fidelizzazione del Cliente, Processo Decisionale Etico"
  },
  {
    num: 133,
    scenario: "Per dispetto, all'ultimo minuto \"cambiano le regole del gioco\". Come reagisci?",
    instructions: [
      "Immagine di una scacchiera rovesciata con i pezzi sparsi ovunque,  frustrazione e rifiuto del cambiamento improvviso,  tabula rasa rabbiosa.",
      "Immagine di mani che riordinano con cura i pezzi sulla scacchiera,  riorganizzazione \"forzata\" e  un po'ansiosa per adattarsi.",
      "Immagine di una strategia di attacco sulla scacchiera,  adattamento strategico e  flessibile alle nuove regole,  cambiamento come \"sfida\" stimolante.",
      "Immagine di una persona che prende una nuova scacchiera \"innovativa\" e abbandona la vecchia senza rimpianti,  entusiasmo per il cambiamento radicale e  le nuove opportunità."
    ],
    captions: [
      "Mi Ribello",
      "Riorganizzo i Pezzi",
      "Nuova Strategia",
      "Propongo Nuovo Gioco"
    ],
    options: [
      {
        value: "Mi Ribello",
        text: "(Positivo: spiccata assertività e difesa del valore del lavoro pregresso contro alterazioni arbitrarie o non pianificate) (Negativo: grave incapacità di gestire l'imprevisto e resistenza distruttiva al cambiamento, rischio di paralisi operativa per reazione emotiva)."
      },
      {
        value: "Riorganizzo i Pezzi",
        text: "(Positivo: resilienza operativa di base e volontà di ripristinare l'ordine per garantire la continuità del progetto nonostante le avversità) (Negativo: adattamento faticoso e reattivo che potrebbe risentire dello stress accumulato, mancanza di una visione proattiva sulla sfida)."
      },
      {
        value: "Nuova Strategia",
        text: "(Positivo: eccellente flessibilità cognitiva e capacità di riformulare istantaneamente la tattica in funzione dei nuovi vincoli ambientali) (Negativo: rischio di trascurare l'analisi critica delle ragioni del cambiamento per eccessivo orientamento alla soluzione immediata)."
      },
      {
        value: "Propongo Nuovo Gioco",
        text: "(Positivo: straordinaria leadership innovativa e visione orientata al futuro, trasformando l'instabilità in un volano per la disruption positiva) (Negativo: potenziale distacco dalla realtà dei vincoli attuali, rischio di proporre cambiamenti troppo radicali per essere assorbiti dal team)."
      }
    ],
    softSkill: "FiduciaInSeStessi, GestioneDelCambiamento",
    characteristics: "Resilienza, Adattabilità, Ottimismo, Gestione del Cambiamento"
  },
  {
    num: 134,
    scenario: "\"Non mi serviva questo, grazie\". Come reagisci?",
    instructions: [
      "Immagine di una persona che si tappa le orecchie con le mani,  rifiuto totale di ascoltare l'obiezione del cliente,  chiusura difensiva.",
      "Immagine di una persona che parla \"sopra\" la voce del cliente,  interrompendo e  sovrapponendosi per \"contro-battere\" all'obiezione,  non ascolto attivo ma \"contro-replica\" immediata.",
      "Immagine di una persona che si avvicina al cliente con un orecchio teso in avanti,  ascolto attivo e  focalizzato sulla \"voce\" del cliente per capire l'obiezione.",
      "Immagine di una persona che getta via il feedback del cliente in un cestino,  rifiuto totale del feedback \"negativo\",  \"cestinamento\" dell'obiezione."
    ],
    captions: [
      "Ti Serve, Fidati",
      "Pensavo ti Servisse",
      "Spiegami Per Favore",
      "Provalo, Usalo, Casomai lo Riprendo"
    ],
    options: [
      {
        value: "Ti Serve, Fidati",
        text: "(Positivo: ferma convinzione nel valore della propria offerta e determinazione nel difendere la bontà tecnica della soluzione proposta) (Negativo: totale assenza di ascolto attivo e cecità rispetto ai bisogni reali del cliente, approccio percepito come arrogante e autoreferenziale)."
      },
      {
        value: "Pensavo ti Servisse",
        text: "(Positivo: reattività immediata e tentativo di giustificare razionalmente l'operato per proteggere la propria credibilità professionale) (Negativo: approccio difensivo e giustificatorio che impedisce l'apertura a un dialogo riparativo, rischio di alienare l'interlocutore)."
      },
      {
        value: "Spiegami Per Favore",
        text: "(Positivo: eccellente ascolto attivo analitico e umiltà professionale volta alla comprensione profonda della prospettiva dell'altro) (Negativo: potenziale percezione di eccessiva passività o mancanza di una solida convinzione iniziale, rischio di rallentare il processo decisionale)."
      },
      {
        value: "Provalo, Usalo, Casomai lo Riprendo",
        text: "(Positivo: straordinaria padronanza nella gestione delle obiezioni attraverso una strategia di risk-reversal volta alla conversione del feedback) (Negativo: elevato investimento di risorse e rischio di creare aspettative di assistenza non scalabili o eccessivamente onerose)."
      }
    ],
    softSkill: "AscoltoAttivo, GestioneDelleObiezioni",
    characteristics: "Ascolto Attivo, Gestione delle Obiezioni, Reazione al Feedback Negativo"
  },
  {
    num: 135,
    scenario: "Disegno a Mano contro Grafica Computerizzata Schierati",
    instructions: [
      "Immagine di una mano d'artista che traccia un segno intenso e materico con carboncino su carta ruvida,  anima e autenticità del tratto manuale.",
      "Immagine di una mano che digitalizza uno schizzo su uno schermo,  integrazione tra manualità e digitale,  tradizione che si evolve.",
      "Immagine di una tavoletta grafica con uno stilo che crea linee vettoriali nitide e precise,  precisione e versatilità del digitale,  innovazione \"pulita\".",
      "Immagine di un'opera d'arte vettoriale astratta e futuristica con colori vibranti e linee dinamiche,  potenziale illimitato e avanguardia del digitale,  superamento dei \"limiti\" del tratto manuale."
    ],
    captions: [
      "Anima nel Sacrificio",
      "Cuore e Cervello",
      "Precisione Vettoriale",
      "Oltre i Limiti Umani"
    ],
    options: [
      {
        value: "Anima nel Sacrificio",
        text: "(Positivo: profonda valorizzazione dell'autenticità e dell'espressività pura del capitale umano non mediata dalla tecnologia) (Negativo: rischio di obsolescenza e chiusura verso le potenzialità abilitanti dell'innovazione digitale, limitazione della scalabilità creativa)."
      },
      {
        value: "Cuore e Cervello",
        text: "(Positivo: approccio olistico e versatile volto all'integrazione armonica tra patrimonio tradizionale e avanguardia tecnologica) (Negativo: potenziale mancanza di una specializzazione estrema in uno dei due ambiti, rischio di un posizionamento di mercato generalista)."
      },
      {
        value: "Precisione Vettoriale",
        text: "(Positivo: eccellente orientamento all'efficienza e alla perfezione formale garantita dalla padronanza degli strumenti digitali avanzati) (Negativo: rischio di una percezione di eccessiva razionalità o freddezza esecutiva, potenziale perdita del calore e dell'unicità del tocco umano)."
      },
      {
        value: "Oltre i Limiti Umani",
        text: "(Positivo: straordinaria visione avanguardista e determinazione nell'esplorare le nuove frontiere del possibile attraverso la disruption digitale) (Negativo: potenziale distacco dalle basi storiche e artigianali della disciplina, rischio di inseguire la tecnologia come fine anziché come mezzo)."
      }
    ],
    softSkill: "Innovazione, MenteAperta",
    characteristics: "Apertura all'Innovazione, Stile Creativo, Propensione al Digitale"
  }
];