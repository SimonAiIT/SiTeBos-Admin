import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 126,
    scenario: "Immagina che la tua \"tazza di caffè\" preferita cambi sapore all'improvviso. Come reagisci?",
    instructions: [
      "Immagine di una tazza di caffè intatta e abbandonata sul tavolo,  rifiuto netto del cambiamento,  \"non bevo questa roba\".",
      "Immagine di una persona che beve il caffè nuovo con una smorfia di disappunto,  accettazione passiva e silenziosa del cambiamento.",
      "Immagine di una persona che assaggia il caffè nuovo con attenzione e  chiede al barista \"cosa è cambiato?\",  analisi e  dialogo per capire il cambiamento.",
      "Immagine di una persona che aggiunge zucchero, latte e aromi al caffè nuovo per \"aggiustarlo\" a suo gusto,  adattamento attivo e  \"personalizzazione\" per rendere accettabile il cambiamento."
    ],
    captions: [
      "Non la Bevo",
      "Bevo e Non Dico Niente",
      "Chiedo Cosa è Cambiato",
      "Cambio Caffetteria"
    ],
    options: [
      {
        value: "Non la Bevo",
        text: "(Positivo: rigorosa coerenza con i propri standard di qualità e rifiuto di compromessi su parametri prestabiliti) (Negativo: eccessiva rigidità cognitiva e resistenza al cambiamento, incapacità di esplorare nuove configurazioni del valore o del servizio)."
      },
      {
        value: "Bevo e Non Dico Niente",
        text: "(Positivo: eccellente resilienza relazionale e capacità di mantenere l'armonia nel contesto evitando conflitti non necessari) (Negativo: rinuncia sistematica al feedback costruttivo, favorendo una stagnazione qualitativa dovuta all'insoddisfazione inespressa)."
      },
      {
        value: "Chiedo Cosa è Cambiato",
        text: "(Positivo: eccellente capacità di analisi diagnostica del cambiamento e orientamento alla comprensione razionale delle nuove dinamiche) (Negativo: rischio di eccessiva cerebralità che può rallentare l'adattamento emotivo immediato, approccio che potrebbe mancare di spontaneità)."
      },
      {
        value: "Cambio Caffetteria",
        text: "(Positivo: decisionismo rapido e orientamento radicale alla massimizzazione della propria soddisfazione attraverso scelte di mercato nette) (Negativo: scarsa tolleranza all'errore e mancanza di visione a lungo termine nella costruzione di una relazione di fiducia con il fornitore)."
      }
    ],
    softSkill: "GestioneDelCambiamento, SoddisfazioneDelCliente",
    characteristics: "Adattabilità al Cambiamento, Soddisfazione, Approccio alla Novità"
  },
  {
    num: 127,
    scenario: "Devi preparare la cena a casa",
    instructions: [
      "Immagine di uno chef che crea un piatto elaborato e sofisticato seguendo solo la sua ispirazione,  priorità all'espressione artistica personale.",
      "Immagine di un rider in scooter che consegna cibo pronto,  delega a \"fornitori esterni\" per massimizzare la comodità.",
      "Immagine di un tavolo imbandito con un piatto \"classico\" e rassicurante,  piacere ai commensali con una scelta \"sicura\" e collaudata.",
      "Immagine di un tavolo imbandito con un menu gourmet a più portate,  impegno massimo per sorprendere e deliziare i commensali con una \"esperienza\" culinaria unica."
    ],
    captions: [
      "Io non Cucino, Creo",
      "Telefono e Ordino",
      "Classico Imbattibile",
      "Menu Degustazione"
    ],
    options: [
      {
        value: "Io non Cucino, Creo",
        text: "(Positivo: straordinaria espressione del talento individuale e audacia nel proporre visioni originali e distintive) (Negativo: potenziale disallineamento strategico rispetto ai bisogni reali dell'interlocutore per eccessiva focalizzazione sulla propria auto-espressione)."
      },
      {
        value: "Telefono e Ordino",
        text: "(Positivo: massima efficienza operativa attraverso la delega di attività non core, ottimizzazione del tempo per la gestione delle relazioni sociali) (Negativo: rischio di percepita mancanza di personalizzazione e scarso investimento emotivo nella creazione di valore diretto)."
      },
      {
        value: "Classico Imbattibile",
        text: "(Positivo: approccio orientato al consenso e alla stabilità del risultato, garantendo un'esperienza rassicurante e collaudata per tutti) (Negativo: limitata propensione all'innovazione e rischio di non generare quell'effetto sorpresa necessario per differenziarsi nel lungo periodo)."
      },
      {
        value: "Menu Degustazione",
        text: "(Positivo: suprema dedizione all'eccellenza e alla creazione di una customer experience memorabile e multisensoriale) (Negativo: elevato assorbimento di risorse per singola interazione, rischio di sovra-progettazione non sempre richiesta dal contesto situazionale)."
      }
    ],
    softSkill: "OrientamentoAlCliente, SviluppoPersonale",
    characteristics: "Orientamento al Cliente, Ambizione, Creatività, Stili di Cucina"
  },
  {
    num: 128,
    scenario: "Ti accorgi in lontananza di un crimine potenzialmente violento. Cosa fai?",
    instructions: [
      "Immagine di una persona che devia rapidamente il proprio percorso,  cambia strada per evitare ogni coinvolgimento.",
      "Immagine di una persona che urla a distanza verso l'orizzonte,  intervento simbolico ma a distanza di sicurezza.",
      "Immagine di una persona che compone rapidamente un numero di emergenza sul cellulare,  richiesta di aiuto esterno e \"formale\".",
      "Immagine di un eroe dei fumetti che corre a gran velocità verso il pericolo,  intervento eroico e  diretto,  senza esitazione."
    ],
    captions: [
      "Cambio Strada",
      "Urlo e Filmo",
      "Telefono Aiuto",
      "Corro Verso l'Azione"
    ],
    options: [
      {
        value: "Cambio Strada",
        text: "(Positivo: prioritizzazione rigorosa dell'integrità personale e gestione razionale del rischio attraverso l'evitamento preventivo) (Negativo: totale assenza di responsabilità sociale e omissione di supporto sistemico, percezione di passività assoluta di fronte all'ingiustizia)."
      },
      {
        value: "Urlo e Filmo",
        text: "(Positivo: tentativo di deterrenza attraverso la segnalazione senza esposizione diretta a minacce fisiche, monitoraggio passivo) (Negativo: inefficacia operativa dell'azione simbolica, mancanza di un reale contributo alla risoluzione della crisi e al supporto della vittima)."
      },
      {
        value: "Telefono Aiuto",
        text: "(Positivo: attivazione professionale dei canali istituzionali garantendo una gestione strutturata e competente dell'emergenza) (Negativo: rischio di ritardo nell'intervento immediato per eccessiva dipendenza da protocolli esterni, approccio che delega la responsabilità dell'azione)."
      },
      {
        value: "Corro Verso l'Azione",
        text: "(Positivo: suprema leadership morale e coraggio nel proteggere attivamente l'integrità altrui attraverso un'azione risolutiva istantanea) (Negativo: grave sottovalutazione del rischio per l'incolumità propria e altrui, approccio impulsivo che potrebbe aggravare la situazione critica)."
      }
    ],
    softSkill: "TematicheSociali, SviluppoDellePersone",
    characteristics: "Coraggio Civile, Responsabilità Sociale, Impulsività vs. Cautela"
  },
  {
    num: 129,
    scenario: "Il vicino ti chiede un attrezzo, come rispondi?",
    instructions: [
      "Immagine di una mano che porge un martello standard,  offerta di uno strumento \"standard\" senza approfondire le esigenze.",
      "Immagine di una cassetta degli attrezzi stracolma di ogni tipo di strumento,  mostra tutte le opzioni disponibili in modo generico.",
      "Immagine di una persona che ascolta attentamente il cliente con metro e notes alla mano,  approccio consultivo basato sull'ascolto e l'analisi dei bisogni.",
      "Immagine di una casetta per le bambole perfettamente costruita e rifinita,  offre la \"soluzione completa\" già pronta,  servizio \"chiavi in mano\"."
    ],
    captions: [
      "Ho un Martello",
      "Tieni la Mia Cassetta",
      "Cosa Devi Fare?",
      "Lo Faccio Io"
    ],
    options: [
      {
        value: "Ho un Martello",
        text: "(Positivo: massima efficienza transazionale e rapidità nella risposta a una richiesta specifica, approccio asciutto e orientato al compito) (Negativo: totale mancanza di orientamento consultivo, rischio di fornire una soluzione inadeguata per mancanza di analisi dei bisogni reali)."
      },
      {
        value: "Tieni la Mia Cassetta",
        text: "(Positivo: generosità nell'offerta e trasparenza totale sulle risorse disponibili, garantendo autonomia decisionale all'interlocutore) (Negativo: approccio dispersivo che trasferisce la complessità della scelta sul richiedente senza fornire la necessaria guida esperta)."
      },
      {
        value: "Cosa Devi Fare?",
        text: "(Positivo: eccellente mindset consultivo focalizzato sull'ascolto attivo e sulla diagnosi accurata delle necessità per una soluzione tailored) (Negativo: potenziale dilatazione dei tempi di risposta dovuta alla fase analitica, approccio che potrebbe essere percepito come eccessivamente indagatorio)."
      },
      {
        value: "Lo Faccio Io",
        text: "(Positivo: straordinario orientamento al problem-solving e offerta di una soluzione chiavi in mano volta a sollevare l'interlocutore da ogni onere) (Negativo: rischio di limitare l'empowerment del richiedente e potenziale percezione di paternalismo operativo eccessivo)."
      }
    ],
    softSkill: "VenditaConsultiva, ServizioAlCliente",
    characteristics: "Approccio alla Vendita, Orientamento al Cliente, Stile di Consulenza"
  },
  {
    num: 130,
    scenario: "Un collega fa una gaffe veramente imbarazzante . Come reagisci?",
    instructions: [
      "Immagine di una statua di cera perfettamente immobile e inespressiva,  reazione assente,  ignora la gaffe.",
      "Immagine di qualcuno che sussurra discretamente all'orecchio del collega,  intervento laterale e \"privato\".",
      "Immagine di un prestigiatore che distrae il pubblico con un gesto ampio,  cambio di discorso per \"coprire\" la gaffe e  deviare l'attenzione.",
      "Immagine di un fulmine che incenerisce una figura stilizzata,  reazione \"fulminante\" e  giudicante,  sguardo di disapprovazione \"mortificante\"."
    ],
    captions: [
      "Statua di Cera",
      "Sussurro all'Orecchio",
      "Cambio Discorso",
      "Lo Fulmini con lo Sguardo"
    ],
    options: [
      {
        value: "Statua di Cera",
        text: "(Positivo: assoluta discrezione e neutralità formale volta a non enfatizzare l'errore altrui, mantenendo una postura professionale imperturbabile) (Negativo: mancanza di intelligenza sociale riparativa e percezione di distacco emotivo glaciale di fronte a una difficoltà relazionale evidente)."
      },
      {
        value: "Sussurro all'Orecchio",
        text: "(Positivo: supporto solidale privato volto a preservare l'immagine del collega attraverso una segnalazione discreta e rispettosa della sensibilità) (Negativo: efficacia limitata nel mitigare l'impatto pubblico della gaffe, rischio di ambiguità nella gestione del momento critico collettivo)."
      },
      {
        value: "Cambio Discorso",
        text: "(Positivo: straordinaria capacità di gestione situazionale e prontezza nel deviare l'attenzione collettiva per proteggere il clima relazionale) (Negativo: rischio di apparire artificioso o manipolatorio, approccio che evita il confronto diretto con la realtà dell'errore commesso)."
      },
      {
        value: "Lo Fulmini con lo Sguardo",
        text: "(Positivo: difesa intransigente degli standard di condotta attraverso una sanzione non verbale immediata e inequivocabile) (Negativo: approccio punitivo e mortificante che mina la fiducia e la coesione del team, mancanza di empatia e di supporto riparativo)."
      }
    ],
    softSkill: "RelazioniImproprie, Presentazione",
    characteristics: "Gestione dell'Imbarazzo, Empatia, Stile di Comunicazione Non Verbale"
  }
];