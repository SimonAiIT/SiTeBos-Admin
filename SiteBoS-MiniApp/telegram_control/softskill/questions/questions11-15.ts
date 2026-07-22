import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 11,
    scenario: "Un cliente si lamenta per un piccolo errore, subito risolto, ma è ancora irritato. Cosa fai per calmarlo?",
    instructions: [
      "Immagine di un giudice che sentenzia dall'alto di un trono.",
      "Immagine di un cameriere che porge sbrigativamente uno scontrino senza guardare il cliente negli occhi.",
      "Immagine di un medico che ausculta attentamente il paziente.",
      "Immagine di un tappeto rosso srotolato fino ai piedi del cliente, con tanto di valletto che porge un cuscino di velluto."
    ],
    captions: [
      "Niente, Tutti possiamo sbagliare",
      "Porgi le tue Scuse",
      "Mi Scuso, Spiego e Rassicuro",
      "Super-Scuse e Omaggio"
    ],    options: [
      {
        value: "Niente, Tutti possiamo sbagliare",
        text: "(Positivo: eccellente assertività professionale e mantenimento dell'autostima operativa, approccio basato sul realismo che evita l'autocolpevolizzazione tossica, rassicurazione pragmatica sulla risoluzione del problema) (Negativo: rischio di distacco empatico percepito come indifferenza, potenziale alienazione del cliente per mancanza di validazione emotiva, scarsa attitudine al 'service recovery' relazionale)."
      },
      {
        value: "Porgi le tue Scuse",
        text: "(Positivo: massima efficienza nella gestione del protocollo di scuse, orientamento alla rapidità operativa e alla chiusura immediata della contestazione, approccio formale inappuntabile) (Negativo: rischio di percezione di insincerità o approccio sbrigativo, mancanza di approfondimento empatico sulle cause del disagio, potenziale inefficacia nel recupero della fiducia del cliente a lungo termine)."
      },
      {
        value: "Mi Scuso, Spiego e Rassicuro",
        text: "(Positivo: alta intelligenza emotiva e orientamento alla fidelizzazione proattiva, capacità di trasformare un errore in un'opportunità di consolidamento della relazione, approccio analitico e rassicurante) (Negativo: potenziale inefficienza temporale in contesti ad alto volume, rischio di eccessivo focus sulla singola contestazione a scapito di altre priorità, possibile percezione di eccessiva giustificazione)."
      },
      {
        value: "Super-Scuse e Omaggio",
        text: "(Positivo: orientamento estremo alla 'Customer Obsession' e creazione di un 'effetto wow' memorabile, investimento strategico sulla 'Lifetime Value' del cliente attraverso la sovra-compensazione) (Negativo: rischio di creare aspettative insostenibili nel lungo periodo, mancanza di pragmatismo nel rapporto costo/beneficio, potenziale vulnerabilità a comportamenti opportunistici della clientela)."
      }
    ],
    softSkill: "SoddisfazioneDelCliente, RelazioniInterpersonali",
    characteristics: "Soddisfazione del Cliente, Gestione della Frustrazione, Recupero Proattivo del Servizio"
  },
  {
    num: 12,
    scenario: "Guardando al tuo percorso professionale, quale di queste visioni descrive meglio la tua ambizione per i prossimi anni?",
    instructions: [
      "Immagine di uno in ufficio, tranquillo e sistemato.",
      "Immagine di un trasloco ben Organizzato.",
      "Immagine di un piccolo negozio con il proprietario orgoglioso",
      "Immagine di un paracadutista, senza paura."
    ],
    captions: [
      "Nello Stesso Posto Tutta la Vita",
      "Un Posto Fisso anche con un Cambiamento",
      "Mi Impegno per Fare Qualcosa di Mio",
      "Mi Lancio in nuove avventure Senza Paura"
    ],
    options: [
      {
        value: "Nello Stesso Posto Tutta la Vita",
        text: "(Positivo: massima affidabilità e fedeltà istituzionale, valorizzazione della stabilità come base per l'eccellenza in un ruolo consolidato, affidabilità granitica nei processi routinari) (Negativo: potenziale resistenza al cambiamento e scarsa flessibilità cognitiva, rischio di obsolescenza professionale per mancanza di stimoli evolutivi, limitata ambizione imprenditoriale)."
      },
      {
        value: "Un Posto Fisso anche con un Cambiamento",
        text: "(Positivo: approccio equilibrato tra sicurezza contrattuale e mobilità professionale, gestione prudente e pianificata della carriera, capacità di conciliare stabilità e adattamento ambientale) (Negativo: potenziale eccesso di cautela che frena la realizzazione del pieno potenziale, rischio di rimanere in una 'comfort zone' limitante, possibile timore del rischio calcolato)."
      },
      {
        value: "Mi Impegno per Fare Qualcosa di Mio",
        text: "(Positivo: spirito imprenditoriale bilanciato e realismo strategico, capacità di esplorare nuove strade mantenendo una base di sicurezza, orientamento alla costruzione graduale di valore autonomo) (Negativo: potenziale lentezza nel distaccarsi da situazioni consolidate, rischio di dispersione di energie tra due fronti, ambizione imprenditoriale che potrebbe mancare di audacia estrema in momenti critici)."
      },
      {
        value: "Mi Lancio in nuove avventure Senza Paura",
        text: "(Positivo: audacia imprenditoriale superiore e orientamento al successo radicale, forte propensione al rischio strategico e determinazione nel perseguire l'autonomia totale, dinamismo estremo) (Negativo: rischio elevato di instabilità finanziaria per decisioni impulsive, mancanza di prudenza e pianificazione difensiva, potenziale sovrastima delle proprie risorse in contesti volatili)."
      }
    ],
    softSkill: "DecisionMakingStrategico, PianificazioneEOrganizzazione",
    characteristics: "Spirito Imprenditoriale, Propensione al Rischio, Proattività"
  },
  {
    num: 13,
    scenario: "Un cliente ti espone le sue necessità in modo dettagliato. Qual è il tuo metodo per assicurarti di aver compreso tutto?",
    instructions: [
      "Immagine di un blocco notes e una penna abbandonati su una scrivania deserta.",
      "Immagine di un binocolo puntato verso un orizzonte nebbioso e indistinto.",
      "Immagine di una lente di ingrandimento che esamina un testo fitto e complesso.",
      "Immagine di una stanza illuminata da una lampada puntata su un soggetto \"sotto torchio\"."
    ],
    captions: [
      "Annuisco e Scrivo Tutto, Capirò Dopo",
      "Contestualizzo e Cerco di Capire Subito",
      "Chiedo Documentazioni e Spiegazioni.",
      "Molte domande, Devo Capire per Aiutare"
    ],
    options: [
      {
        value: "Annuisco e Scrivo Tutto, Capirò Dopo",
        text: "(Positivo: pragmatismo operativo immediato ed evitamento di attriti in fase di briefing, capacità di utilizzare il team come risorsa di decodifica successiva, mantenimento del flusso comunicativo) (Negativo: scarso impegno cognitivo iniziale e rischio di omissione di dati critici, mancanza di 'ownership' nella comprensione immediata, percezione di scarsa competenza analitica)."
      },
      {
        value: "Contestualizzo e Cerco di Capire Subito",
        text: "(Positivo: rapidità di sintesi e orientamento alla comprensione dell'essenziale, approccio pragmatico che privilegia la velocità operativa senza rallentare il cliente, attitudine all'azione rapida) (Negativo: rischio di comprensione superficiale o imprecisa dei dettagli tecnici, potenziale trascuratezza di clausole complesse per eccessiva focalizzazione sulla visione d'insieme)."
      },
      {
        value: "Chiedo Documentazioni e Spiegazioni.",
        text: "(Positivo: coscienziosità superiore e rigore metodologico nella raccolta dati, impegno concreto per la qualità dell'output finale attraverso la chiarezza totale, orientamento alla precisione) (Negativo: potenziale rallentamento del processo decisionale per eccesso di burocratizzazione, rischio di focalizzarsi su dettagli non prioritari, possibile inefficacia in contesti che richiedono agilità immediata)."
      },
      {
        value: "Molte domande, Devo Capire per Aiutare",
        text: "(Positivo: massima accuratezza analitica e ricerca della verità operativa, impegno totale per l'eccellenza comunicativa ed eliminazione di ogni ambiguità, forte senso di responsabilità verso il cliente) (Negativo: rischio di percezione di aggressività o pedanteria, potenziale paralisi da analisi per eccessivo rigore informativo, inefficacia in contesti che premiano la sintesi e la rapidità esecutiva)."
      }
    ],
    softSkill: "AscoltoAttivo, ComunicazioneEfficace",
    characteristics: "Ascolto Attivo, Capacità di Comunicazione, Comprensione"
  },
  {
    num: 14,
    scenario: "Sulla tua \"bilancia\" delle decisioni, quale di questi piatti ha solitamente il peso maggiore?",
    instructions: [
      "Immagine di una bilancia, che pende dal lato delle persone multietniche.",
      "Immagine di una bilancia, che pende dal lato dei divertimenti, un parco divertimenti sopra il piatto.",
      "Immagine di una bilancia, che pende dal lato delle responsabilità, una casa sopra il piatto",
      "Immagine di una bilancia, che pende dal lato degli sport."
    ],
    captions: [
      "I Rapporti Umani",
      "I Divertimenti",
      "Le Responsabilità",
      "Il mio Benessere"
    ],
    options: [
      {
        value: "I Rapporti Umani",
        text: "(Positivo: spiccata intelligenza emotiva e orientamento umanistico, capacità di costruire relazioni solide e leali come base per ogni successo professionale, empatia profonda) (Negativo: rischio di parzialità nel giudizio dovuta al coinvolgimento emotivo, potenziale difficoltà nel prendere decisioni impopolari o puramente razionali, vulnerabilità alle dinamiche relazionali)."
      },
      {
        value: "I Divertimenti",
        text: "(Positivo: ottimismo contagioso e capacità di 'stress management' attraverso la leggerezza, approccio creativo e non convenzionale alla vita, alta reattività emotiva positiva) (Negativo: rischio di scarsa affidabilità in contesti ad alta pressione e responsabilità, potenziale superficialità gestionale, mancanza di focus sugli obiettivi di lungo periodo)."
      },
      {
        value: "Le Responsabilità",
        text: "(Positivo: affidabilità granitica e forte senso del dovere professionale, orientamento all'impegno costante e alla consegna dei risultati, lealtà istituzionale superiore) (Negativo: rischio elevato di stress da sovraccarico e burnout, potenziale rigidità relazionale per eccesso di rigore, difficoltà a delegare e a concedersi spazi di recupero necessari)."
      },
      {
        value: "Il mio Benessere",
        text: "(Positivo: eccellente gestione dell'equilibrio vita-lavoro e sostenibilità della performance nel tempo, approccio consapevole che preserva le risorse personali come asset strategico) (Negativo: potenziale percezione di scarsa dedizione o ambizione in contesti 'high-performance', rischio di non rispondere adeguatamente a picchi di lavoro straordinari)."
      }
    ],
    softSkill: "Equita , Empatia",
    characteristics: "Equità, Pregiudizio, Lealtà, Obiettività"
  },
  {
    num: 15,
    scenario: "Pensa al futuro, qual è la sensazione che provi più spesso?",
    instructions: [
      "Immagine di qualcuno che cammina dritto senza paura.",
      "Immagine di uno zaino in spalla, pronto a partire.",
      "Immagine di qualcuno che guarda una mappa, un po'perso.",
      "Immagine di qualcuno bloccato dalla paura, paralizzato."
    ],
    captions: [
      "Futuro? Zero Problemi",
      "Pronto ad Ogni Caso",
      "Boh e Chi lo Sa",
      "Futuro? Panico Totale"
    ],
    options: [
      {
        value: "Futuro? Zero Problemi",
        text: "(Positivo: ottimismo resiliente superiore e fiducia proattiva nel proprio futuro, approccio privo di freni inibitori verso l'innovazione e l'ignoto, coraggio operativo spiccato) (Negativo: rischio di imprudenza strategica e sottovalutazione dei rischi sistemici, potenziale mancanza di piani di emergenza per eccesso di sicurezza, scarsa propensione alla pianificazione difensiva)."
      },
      {
        value: "Pronto ad Ogni Caso",
        text: "(Positivo: eccellente capacità di previsione e gestione proattiva del rischio, approccio metodico alla pianificazione del futuro che garantisce sicurezza e controllo in ogni scenario) (Negativo: rischio di ansia anticipatoria e iper-controllo paralizzante, potenziale perdita di spontaneità operativa, eccessivo dispendio di energie cognitive nella preparazione di scenari improbabili)."
      },
      {
        value: "Boh e Chi lo Sa",
        text: "(Positivo: massima flessibilità adattiva e orientamento al presente ('mindfulness'), capacità di navigare nell'incertezza senza stress eccessivo, apertura alla serendipità e alla creatività) (Negativo: imprevidenza gestionale e mancanza di obiettivi di lungo termine, rischio di subire passivamente il cambiamento invece di guidarlo, percezione di scarsa affidabilità strategica)."
      },
      {
        value: "Futuro? Panico Totale",
        text: "(Positivo: alta sensibilità verso le incognite che può fungere da segnale d'allarme per la ricerca di supporto e nuove competenze, consapevolezza critica dei pericoli ambientali) (Negativo: blocco emotivo e paralisi decisionale dovuta al pessimismo sistemico, scarsa autostima e locus of control esterno, incapacità di pianificare azioni costruttive verso il domani)."
      }
    ],
    softSkill: "PianificazioneEOrganizzazione, GestioneDelloStress",
    characteristics: "Livelli di Ansia, Proattività, Orientamento al Futuro"
  }
];
