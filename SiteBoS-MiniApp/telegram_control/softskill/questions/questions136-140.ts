import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 136,
    scenario: "Sei in gruppo con amici, ti allontani un attimo e Trovi una Banconota. Come la dividi?",
    instructions: [
      "Immagine di una persona che si \"spazza via\" tutto il bottino senza lasciare niente all'altro,  massima priorità al guadagno personale,  negoziazione \"predatoria\".",
      "Immagine di una bilancia che pesa i due lati del bottino in modo da dividerlo perfettamente a metà,  divisione equa e  paritaria,  negoziazione \"bilanciata\".",
      "Immagine di una persona che offre la parte più grande e preziosa del bottino all'altro,  generosità e  priorità alla soddisfazione altrui nella divisione,  negoziazione \"altruista\".",
      "Immagine di due persone che rinunciano al bottino e si allontanano insieme,  rinuncia al guadagno materiale per preservare la relazione,  non negoziazione e  priorità alla relazione stessa."
    ],
    captions: [
      "Prendo Tutto Io",
      "A Tutti una Parte Uguale",
      "La Spendo per Tutti",
      "La Dono in Beneficenza"
    ],
    options: [
      {
        value: "Prendo Tutto Io",
        text: "(Positivo: massima efficacia nella cattura immediata del valore in contesti competitivi e determinazione nel perseguire il profitto individuale) (Negativo: totale assenza di etica della reciprocità e grave danno al capitale relazionale, percezione di inaffidabilità cronica)."
      },
      {
        value: "A Tutti una Parte Uguale",
        text: "(Positivo: eccellente promozione dell'equità e della giustizia distributiva, consolidando la fiducia reciproca e la coesione del gruppo) (Negativo: rinuncia sistematica a margini di profitto superiori, approccio che potrebbe mancare di incisività in trattative ad alto coefficiente competitivo)."
      },
      {
        value: "La Spendo per Tutti",
        text: "(Positivo: straordinaria capacità di trasformare un guadagno individuale in un asset collettivo, rafforzando i legami attraverso la generosità proattiva) (Negativo: rischio di percezione di eccessiva prodigalità o mancanza di una gestione oculata delle risorse personali)."
      },
      {
        value: "La Dono in Beneficenza",
        text: "(Positivo: suprema integrità morale e orientamento a valori altruistici superiori, anteponendo l'impatto sociale al guadagno materiale) (Negativo: approccio potenzialmente percepito come idealistico o distaccato dalle necessità pragmatiche del contesto operativo)."
      }
    ],
    softSkill: "Negoziazione, OrientamentoAlCliente",
    characteristics: "Stile di Negoziazione, Orientamento al Guadagno, Priorità Relazionali vs. Economiche"
  },
  {
    num: 137,
    scenario: "Il tuo team ha vinto un premio aziendale: una giornata libera e un budget per un'attività di team building. Cosa decidi fare?",
    instructions: [
      "Immagine di una persona che decide per tutti senza consultare il gruppo,  scelta unilaterale e autocratica.",
      "Immagine di persone che votano separatamente per schede,  voto democratico e  maggioranza decide.",
      "Immagine di persone che discutono insieme animatamente per trovare un accordo,  vengono elencate diverse opzioni",
      "Immagine di una persona che cede il premio al team e si mette da parte,  rinuncia al premio a beneficio altrui,  generosità e  altruismo."
    ],
    captions: [
      "Propongo Subito un'Iniziativa",
      "Vince la Maggioranza",
      "Offro Opzioni",
      "Fate Vobis"
    ],
    options: [
      {
        value: "Propongo Subito un'Iniziativa",
        text: "(Positivo: massima efficienza decisionale e capacità di fornire una direzione chiara e tempestiva in situazioni di incertezza) (Negativo: grave deficit di leadership partecipativa, rischio di generare demotivazione per mancanza di coinvolgimento del team)."
      },
      {
        value: "Vince la Maggioranza",
        text: "(Positivo: implementazione di un processo di equità formale basato sul consenso democratico e sulla trasparenza delle scelte) (Negativo: potenziale frustrazione delle minoranze e mancanza di una vera mediazione qualitativa volta all'armonia collettiva)."
      },
      {
        value: "Offro Opzioni",
        text: "(Positivo: eccellente orientamento alla negoziazione inclusiva e alla ricerca di un accordo di sintesi che valorizzi le diverse prospettive) (Negativo: rischio di rallentamenti operativi e potenziale stallo decisionale per eccessiva enfasi sulla ricerca del consenso unanime)."
      },
      {
        value: "Fate Vobis",
        text: "(Positivo: massimo empowerment del gruppo attraverso la delega totale dell'autonomia decisionale, favorendo la responsabilizzazione dei membri) (Negativo: potenziale abdicazione dal ruolo di guida e rischio di deriva caotica in assenza di un coordinamento strategico superiore)."
      }
    ],
    softSkill: "Negoziazione, OrientamentoAlCliente",
    characteristics: "Stile di Negoziazione, Orientamento al Cliente (Gruppo), Equità, Generosità"
  },
  {
    num: 138,
    scenario: "Hai un \"extra\" inaspettato che potresti investire ma hai un debito, che fai?",
    instructions: [
      "Immagine di una persona che taglia una pesante catena,  priorità assoluta all'eliminazione del debito,  liberazione dal fardello finanziario.",
      "Immagine di una bilancia che pesa da un lato il debito e dall'altro un investimento,  equilibrio tra riduzione del debito e  investimento per il futuro.",
      "Immagine di una cassaforte aperta per metà con una parte dei soldi depositatie l'altra parte pronta per essere investita,  equilibrio tra risparmio \"sicuro\" e  investimento \"rischioso\" per il futuro.",
      "Immagine di una cassaforte chiusa,  massima priorità all'accumulo e alla conservazione,  avversione totale al debito e al rischio."
    ],
    captions: [
      "Taglio del Debito",
      "Bilancia Perfetta",
      "Investo e Conservo",
      "Cassaforte Chiusa"
    ],
    options: [
      {
        value: "Taglio del Debito",
        text: "(Positivo: eccellente responsabilità finanziaria e prioritizzazione della solidità patrimoniale attraverso l'eliminazione dei fardelli passivi) (Negativo: rinuncia a opportunità di crescita esponenziale e mancata ottimizzazione del costo opportunità del capitale)."
      },
      {
        value: "Bilancia Perfetta",
        text: "(Positivo: approccio analitico e bilanciato volto a mitigare il rischio garantendo al contempo una proiezione di crescita futura) (Negativo: rischio di non eccellere né nella sicurezza estrema né nella massimizzazione dei profitti per un'eccessiva mediazione tra le due strategie)."
      },
      {
        value: "Investo e Conservo",
        text: "(Positivo: spiccata dinamicità finanziaria e visione orientata alla costruzione di ricchezza attraverso la diversificazione del rischio) (Negativo: potenziale sottovalutazione della sostenibilità del debito esistente, rischio di sovraesposizione finanziaria)."
      },
      {
        value: "Cassaforte Chiusa",
        text: "(Positivo: massima cautela e protezione dell'integrità del capitale contro la volatilità del mercato e l'incertezza economica) (Negativo: stagnazione patrimoniale per eccessiva avversione al rischio, incapacità di sfruttare il valore tempo del denaro)."
      }
    ],
    softSkill: "FinanzaPersonale, ResponsabilitaSociale",
    characteristics: "Prudenza Finanziaria, Gestione del Debito, Propensione al Rischio, Orientamento alla Sicurezza"
  },
  {
    num: 139,
    scenario: "Un collega usa la chat aziendale in modo \"troppo personale\". Come reagisci?",
    instructions: [
      "Immagine di una persona che spegne il computer con gesto deciso,  ignora completamente il messaggio inappropriato,  \"disconnessione\" totale.",
      "Immagine di un \"semaforo giallo\" acceso,  risposta \"tiepida\" e  ambigua,  segnalazione indiretta di \"disagio\" senza affrontare il problema apertamente.",
      "Immagine di una \"bolla di sapone\" che allontana il messaggio inappropriato con delicatezza,  risposta ferma ma \"soft\" e  \"non aggressiva\" per \"respingere\" l'avance.",
      "Immagine di un \"firewall\" invalicabile che blocca il messaggio inappropriato,  segnalazione formale e blocco immediato del comportamento,  tolleranza zero."
    ],
    captions: [
      "Disconnetto e Ignoro",
      "Semaforo Giallo",
      "Bolla di Sapone",
      "Blocco Immediato"
    ],
    options: [
      {
        value: "Disconnetto e Ignoro",
        text: "(Positivo: rigorosa difesa della propria integrità professionale attraverso il distacco immediato da dinamiche improprie) (Negativo: mancanza di feedback riparativo, rischio di lasciare irrisolta una criticità relazionale che potrebbe reiterarsi)."
      },
      {
        value: "Semaforo Giallo",
        text: "(Positivo: diplomazia relazionale volta a segnalare un disagio senza innescare conflitti diretti, mantenendo l'operatività del team) (Negativo: ambiguità comunicativa che potrebbe essere interpretata come incertezza o tacita tolleranza del comportamento)."
      },
      {
        value: "Bolla di Sapone",
        text: "(Positivo: eccellente assertività empatica capace di ripristinare i confini professionali con fermezza e decoro senza alienare l'interlocutore) (Negativo: potenziale rischio di inefficacia contro soggetti che richiedono comunicazioni più esplicite e perentorie)."
      },
      {
        value: "Blocco Immediato",
        text: "(Positivo: suprema integrità perimetrale e adozione di una politica di tolleranza zero contro ogni forma di condotta non professionale) (Negativo: rischio di escalation della tensione nel team per mancanza di una fase intermedia di mediazione o dialogo)."
      }
    ],
    softSkill: "RelazioniImproprie, SicurezzaDigitale",
    characteristics: "Gestione di Relazioni Inappropriate, Confini Professionali, Assertività"
  },
  {
    num: 140,
    scenario: "Un cliente ti chiede esplicitamente uno strumento \"sbagliato\" per il lavoro che deve fare. Che fai?",
    instructions: [
      "Immagine di una pacco di consegna anonimo,  asseconda la richiesta senza obiezioni,  servizio \"passivo\".",
      "Immagine di una mano che porge un punto interrogativo,  dubbio sull'attrezzo giusto,  servizio \"incerto\".",
      "Immagine di un venditore che mostra diversi attrezzi \"spiegando\" quale sarebbe il migliore per quel lavoro,  guida il cliente verso la scelta \"giusta\",  servizio \"consultivo\".",
      "Immagine di una mano che prende un l'attrezzo dalle mani del cliente,  \"corregge\" attivamente l'errore del cliente,  servizio \"proattivo\" e  \"correttivo\"."
    ],
    captions: [
      "Accontento e Consegno",
      "Consegno, Ma Ho Dubbi",
      "Ti Guardo e Ti Spiego",
      "Correggo l'Errore"
    ],
    options: [
      {
        value: "Accontento e Consegno",
        text: "(Positivo: massima velocità operativa nel soddisfare una richiesta esplicita, rispettando l'autonomia decisionale dichiarata dal cliente) (Negativo: totale abdicazione dal ruolo consultivo, rischio di fallimento della performance finale per inadeguatezza dello strumento)."
      },
      {
        value: "Consegno, Ma Ho Dubbi",
        text: "(Positivo: approccio prudente volto a manifestare una riserva professionale senza imporre la propria visione sul processo d'acquisto) (Negativo: inefficacia della segnalazione per mancanza di assertività, approccio che non garantisce la reale tutela del cliente)."
      },
      {
        value: "Ti Guardo e Ti Spiego",
        text: "(Positivo: eccellente expertise consulenziale volta a proteggere il cliente da scelte sub-ottimali attraverso una guida personalizzata e formativa) (Negativo: potenziale allungamento dei tempi transazionali, rischio di essere percepiti come eccessivamente tecnici da clienti sbrigativi)."
      },
      {
        value: "Correggo l'Errore",
        text: "(Positivo: suprema proattività nel garantire il miglior risultato possibile attraverso un intervento correttivo risolutivo e competente) (Negativo: rischio di percezione di paternalismo o invadenza, potenziale frizione dovuta alla rimozione del controllo decisionale del cliente)."
      }
    ],
    softSkill: "VenditaConsultiva, ServizioAlCliente",
    characteristics: "Stile di Vendita, Orientamento al Cliente, Capacità di Guida, Autonomia vs. Paternalismo"
  }
];