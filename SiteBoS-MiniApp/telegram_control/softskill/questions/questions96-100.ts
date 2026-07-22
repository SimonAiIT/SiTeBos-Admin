import { Question } from "../types";

export const questions96to100: Question[] = [
  {
    num: 96,
    scenario: "Ti senti bravo a \"sciogliere il ghiaccio\" con una battuta?",
    instructions: [
      "Immagine di un blocco di ghiaccio monolitico e immobile,  tensione congelata.",
      "Immagine di un blocco di ghiaccio con una crepa,   effetto minimo.",
      "Immagine di ghiaccio che si scioglie a sole.",
      "Immagine di un torrente di acqua limpida con ghiaccio a bordi,  ghiaccio sciolto dal calore."
    ],
    captions: [
      "Ghiaccio Intatto",
      "Crepa nel Ghiaccio",
      "Ghiaccio che Si Scioglie",
      "Ghiaccio Fuso"
    ],
    options: [
      {
        value: "Ghiaccio Intatto",
        text: "(Positivo: eccellente rigore professionale e affidabilità percepita in contesti di alta criticità, focalizzazione esclusiva sulla sostanza operativa) (Negativo: mancanza di flessibilità relazionale e difficoltà nello stemperare le tensioni, rischio di apparire eccessivamente rigido o formale)."
      },
      {
        value: "Crepa nel Ghiaccio",
        text: "(Positivo: approccio sobrio e misurato che privilegia la competenza tecnica rispetto alla pura abilità relazionale, tentativo di distensione controllata) (Negativo: limitata efficacia comunicativa nel disinnescare conflitti complessi, potenziale percezione di scarsa naturalezza o carisma sociale)."
      },
      {
        value: "Ghiaccio che Si Scioglie",
        text: "(Positivo: ottimo equilibrio tra professionalità e intelligenza emotiva, utilizzo strategico dell'umorismo per facilitare la cooperazione e il clima di team) (Negativo: efficacia situazionale non garantita e rischio di incomprensione comunicativa con interlocutori particolarmente formali o rigidi)."
      },
      {
        value: "Ghiaccio Fuso",
        text: "(Positivo: straordinaria grazia sociale e tempismo comico brillante, capacità innata di trasformare tensioni critiche in opportunità di connessione autentica) (Negativo: rischio di eccessiva spensieratezza in contesti solenni e potenziale percezione di scarsa gravità professionale o eccessivo protagonismo)."
      }
    ],
    softSkill: "GestioneDeiConflitti, ComunicazioneEfficace",
    characteristics: "Stile Umoristico, Stile di Risoluzione dei Conflitti, Capacità di Gestire la Tensione"
  },
  {
    num: 97,
    scenario: "Pensa a come preferisci essere pagato?",
    instructions: [
      "Immagine di una cassaforte blindata chiusa con un lucchetto,  sicurezza e garanzia di guadagno fisso.",
      "Immagine (inquadratura aerea) di due fiumi che si uniscono in un corso unico,  preferenza per il fisso ma apertura al variabile.",
      "Immagine di una bilancia in equilibrio perfetto,  apertura sia al fisso che al variabile,  equilibrio tra sicurezza e rischio.",
      "Immagine di una slot machine che eroga una cascata di monete d'oro,  entusiasmo per il potenziale di guadagno illimitato delle provvigioni."
    ],
    captions: [
      "Cassaforte",
      "Fiume con Affluente",
      "Bilancia Equilibrata",
      "Slot Machine"
    ],
    options: [
      {
        value: "Cassaforte",
        text: "(Positivo: massima ricerca di stabilità finanziaria e orientamento alla pianificazione patrimoniale sicura a lungo termine) (Negativo: bassa propensione al rischio e potenziale rinuncia a guadagni incrementali legati alla performance, scarsa ambizione economica competitiva)."
      },
      {
        value: "Fiume con Affluente",
        text: "(Positivo: approccio pragmatico che garantisce una base di sicurezza solida pur mantenendo una moderata apertura agli incentivi per obiettivi) (Negativo: rischio di limitata spinta motivazionale intrinseca legata ai risultati estremi, preferenza per la comfort zone retributiva)."
      },
      {
        value: "Bilancia Equilibrata",
        text: "(Positivo: eccellente flessibilità retributiva e capacità di gestire l'incertezza economica bilanciandola con l'ambizione orientata ai risultati) (Negativo: potenziale dispersione di focus tra il bisogno di sicurezza e la ricerca del premio, mancanza di una scelta direzionale netta)."
      },
      {
        value: "Slot Machine",
        text: "(Positivo: massima orientamento al risultato e fame di successo economico illimitato, straordinaria motivazione guidata dalla performance pura) (Negativo: elevata instabilità finanziaria e rischio di stress da performance insostenibile nel lungo periodo, vulnerabilità ai cali di mercato)."
      }
    ],
    softSkill: "FinanzaPersonale, Autodisciplina",
    characteristics: "Propensione al Rischio, Motivazione Finanziaria, Bisogno di Sicurezza Lavorativa"
  },
  {
    num: 98,
    scenario: "Hai finito un prodotto di uso quotidiano in casa. Qual è la tua reazione?",
    instructions: [
      "Immagine di un paesaggio zen con un cerchio di sabbia perfettamente rastrellato e vuoto al centro,  serenità di fronte all' \"assenza\".",
      "Immagine di un rubinetto che gocciola lentamente,  leggero fastidio,  piccola perdita ma gestibile.",
      "Immagine di una segnaletica di allarme,  forte fastidio,  segnale di allarme e urgenza.",
      "Immagine di una sirena di allarme che suona a volume massimo in una stanza buia,  panico totale di fronte alla mancanza."
    ],
    captions: [
      "Nessun Problema",
      "Leggero Fastidio",
      "Vero Fastidio",
      "Panico Totale"
    ],
    options: [
      {
        value: "Nessun Problema",
        text: "(Positivo: eccellente adattabilità minimalista e capacità di distacco dalle necessità materiali non urgenti, approccio zen alla quotidianità) (Negativo: potenziale mancanza di organizzazione preventiva e rischio di trascuratezza nelle necessità pratiche essenziali)."
      },
      {
        value: "Leggero Fastidio",
        text: "(Positivo: gestione equilibrata e realistica degli inconvenienti domestici, capacità di risolvere le mancanze senza generare stress disfunzionale) (Negativo: rischio di inefficienze ricorrenti per mancata ottimizzazione dei processi di approvvigionamento e pianificazione)."
      },
      {
        value: "Vero Fastidio",
        text: "(Positivo: spiccato senso dell'organizzazione e orientamento alla prevenzione metodica degli imprevisti per garantire la continuità operativa) (Negativo: tendenza alla rigidità e rischio di reazioni emotive eccessive di fronte a mancanze banali, bisogno di controllo iper-vigile)."
      },
      {
        value: "Panico Totale",
        text: "(Positivo: monitoraggio ossessivo e impeccabile di ogni risorsa, garanzia di una logistica domestica priva di interruzioni attraverso la massima previdenza) (Negativo: bias di ansia da controllo e vulnerabilità estrema allo stress per micro-variazioni dell'ordine prestabilito)."
      }
    ],
    softSkill: "PianificazioneEOrganizzazione, GestioneDelTempo",
    characteristics: "Organizzazione, Bisogno di Ordine, Sensibilità allo Stress"
  },
  {
    num: 99,
    scenario: "Qualcosa di prezioso per te vuole allontanarsi. Cosa fai?",
    instructions: [
      "Immagine di una mano completamente aperta e vuota,  uccellino vola via libero,  nessun tentativo di trattenere.",
      "Immagine di una mano che si protende,  per trattenere qualcuno,  tentativo minimo e incerto.",
      "Immagine di una mano che tira una fune solida,  tentativo moderato e direzionato.",
      "Immagine di qualcuno che costruisce un ponte elaborato e personalizzato per collegare due sponde."
    ],
    captions: [
      "Lascio Volare Via",
      "Tendo la Mano",
      "Cerco di portare Indietro",
      "Ponte Su Misura"
    ],
    options: [
      {
        value: "Lascio Volare Via",
        text: "(Positivo: massima efficienza operativa nel distacco e capacità di accettazione dei flussi evolutivi senza spreco di risorse in retention improduttiva) (Negativo: mancanza totale di orientamento alla fidelizzazione e rischio di perdere asset strategici per eccesso di indifferenza relazionale)."
      },
      {
        value: "Tendo la Mano",
        text: "(Positivo: approccio di recupero cauto e standardizzato che bilancia lo sforzo di retention con la sostenibilità dei costi operativi) (Negativo: scarsa incisività nel comunicare valore aggiunto, rischio di perdere relazioni chiave per mancanza di un impegno proattivo e differenziato)."
      },
      {
        value: "Cerco di Portare Indietro",
        text: "(Positivo: determinazione pragmatica nella difesa delle relazioni di valore e capacità di negoziare incentivi ragionevoli per la stabilità del legame) (Negativo: rischio di percezione di una retention meccanica e non personalizzata, potenziale inefficacia di fronte a bisogni emotivi complessi)."
      },
      {
        value: "Ponte Su Misura",
        text: "(Positivo: eccellente customer centricity e capacità di costruire soluzioni iper-personalizzate per garantire la massima fidelizzazione degli asset critici) (Negativo: elevato investimento di tempo e risorse, rischio di non scalabilità e potenziale creazione di dipendenze relazionali eccessive)."
      }
    ],
    softSkill: "FidelizzazioneDelCliente, Negoziazione",
    characteristics: "Fidelizzazione del Cliente, Comunicazione del Valore, Negoziazione"
  },
  {
    num: 100,
    scenario: "Hai sospetti su un tuo collega. Che fai indaghi?",
    instructions: [
      "Immagine di una porta chiusa e sigillata,  nessun tentativo di indagare,  rispetto totale della privacy.",
      "Immagine di qualcuno che guarda di nascosto da una finestra socchiusa,  osservazione indiretta e discreta.",
      "Immagine di un occhio che spia da un buco della serratura,  indagine segreta e mirata.",
      "Immagine di una porta divelta con i nastri scena del crimine,  indagine diretta."
    ],
    captions: [
      "Porta Sigillata",
      "Guardi dalla Finestra",
      "Guardi dal Buco della Serratura",
      "Porta Forzata"
    ],
    options: [
      {
        value: "Porta Sigillata",
        text: "(Positivo: massimo rispetto della privacy altrui e integrità etica nel mantenere i confini professionali inviolati, discrezione assoluta) (Negativo: potenziale indifferenza verso anomalie organizzative critiche e rischio di non rilevare comportamenti dannosi per il team per eccesso di riserbo)."
      },
      {
        value: "Guardi dalla Finestra",
        text: "(Positivo: vigilanza etica moderata e attenzione discreta alle dinamiche di gruppo senza violare apertamente i confini individuali) (Negativo: rischio di superficialità analitica e potenziale inefficacia nel prevenire criticità reali per mancanza di un'indagine proattiva e diretta)."
      },
      {
        value: "Guardi dal Buco della Serratura",
        text: "(Positivo: perspicacia investigativa e capacità di cogliere segnali latenti o nascosti per tutelare l'integrità del contesto lavorativo) (Negativo: approccio eticamente ambiguo e rischio di essere percepito come intrusivo o sleale, potenziale erosione del clima di fiducia reciproca)."
      },
      {
        value: "Porta Forzata",
        text: "(Positivo: determinazione assoluta nella ricerca della verità e capacità di affrontare frontalmente situazioni di sospetta irregolarità senza compromessi) (Negativo: totale violazione della privacy e delle norme deontologiche, approccio aggressivo che può generare danni relazionali irreparabili e caos nel team)."
      }
    ],
    softSkill: "RelazioniImproprie, RelazioniInterpersonali",
    characteristics: "Curiosità, Confini Sociali, Abilità Interpersonali"
  }
];