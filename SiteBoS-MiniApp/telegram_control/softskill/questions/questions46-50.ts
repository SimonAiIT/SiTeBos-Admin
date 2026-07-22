import { Question } from "../types";

export const questions46to50: Question[] = [
  {
    num: 46,
    scenario: "Quanto spesso si rivolgono proprio a te per un consiglio?",
    instructions: [
      "Immagine di un libro polveroso e dimenticato su uno scaffale, nessuno lo nota.",
      "Immagine di una lampada semi-illuminata in una stanza, notata solo a volte.",
      "Immagine di una lampada luminosa e accesa in una stanza, usata frequentemente.",
      "Immagine di un guru o una figura saggia seduta in cima a una montagna, circondata da persone che cercano consiglio."
    ],
    captions: [
      "Non Mi Chiede Mai Nessuno",
      "Qualcuno Ogni Tanto",
      "Spesso Chiedono a Me",
      "Punto di Riferimento per Tutti"
    ],
    options: [
      {
        value: "Non Mi Chiede Mai Nessuno",
        text: "(Positivo: massima focalizzazione sui propri output operativi ed efficienza nella gestione del tempo senza interferenze esterne, autonomia decisionale completa) (Negativo: isolamento professionale critico e mancanza di visibilità, potenziale percezione di scarsa competenza o inaffidabilità nel fornire supporto decisionale)."
      },
      {
        value: "Qualcuno Ogni Tanto",
        text: "(Positivo: equilibrio tra disponibilità collaborativa e tutela delle proprie priorità, approccio non invasivo che favorisce l'autonomia altrui) (Negativo: influenza limitata nelle dinamiche strategiche del team, rischio di non essere pienamente valorizzati come esperti o punti di riferimento autorevoli)."
      },
      {
        value: "Spesso Chiedono a Me",
        text: "(Positivo: eccellente autorevolezza tecnica e relazionale, capacità di influenzare positivamente il team attraverso una mentorship naturale e riconosciuta) (Negativo: elevato rischio di sovraccarico da richieste altrui, potenziale dispersione energetica che può penalizzare i propri obiettivi individuali prioritari)."
      },
      {
        value: "Punto di Riferimento per Tutti",
        text: "(Positivo: leadership carismatica superiore e ruolo di guida riconosciuto a tutti i livelli, massima fiducia e ascendente sulle decisioni strategiche del gruppo) (Negativo: rischio di accentramento decisionale eccessivo, potenziale creazione di dipendenza del team dalla propria figura ('single point of failure'), difficoltà nella delega)."
      }
    ],
    softSkill: "ProblemSolving, ComunicazioneEfficace",
    characteristics: "Potenziale di Leadership, Risoluzione dei Problemi, Competenza"
  },
  {
    num: 47,
    scenario: "Pensa al tragitto che compi ogni giorno per andare al lavoro. Come vivi abitualmente quel tempo di spostamento?",
    instructions: [
      "Immagine di una persona che medita pacificamente su un treno con un paesaggio rilassante che scorre fuori dal finestrino.",
      "Immagine di una persona che pedala con costanza su una bicicletta lungo una strada dritta e infinita.",
      "Immagine di un'auto bloccata in un ingorgo stradale, circondata da altre auto e gas di scarico.",
      "Immagine di una persona stipata in una carrozza della metropolitana sovraffollata durante l'ora di punta, con persone che spingono e si accalcano."
    ],
    captions: [
      "Relax e Concentrazione",
      "Lungo, Ma Si Fa",
      "Tempo Perso e Stress",
      "Un Incubo Insopportabile"
    ],
    options: [
      {
        value: "Relax e Concentrazione",
        text: "(Positivo: eccellente capacità di trasformare i tempi morti in opportunità di 'mindfulness' o pianificazione mentale, resilienza allo stress ambientale superiore) (Negativo: potenziale isolamento relazionale eccessivo, rischio di apparire distaccati dalle dinamiche sociali informali che si sviluppano durante gli spostamenti)."
      },
      {
        value: "Lungo, Ma Si Fa",
        text: "(Positivo: pragmatismo operativo e sana tolleranza alla routine inevitabile, capacità di adattamento e accettazione dei vincoli logistici con equilibrio emotivo) (Negativo: tendenza alla rassegnazione passiva, rischio di non cercare attivamente soluzioni per ottimizzare la qualità della vita extra-lavorativa)."
      },
      {
        value: "Tempo Perso e Stress",
        text: "(Positivo: consapevolezza lucida dell'impatto ambientale sul proprio benessere e orientamento all'efficienza temporale, stimolo proattivo al cambiamento migliorativo) (Negativo: accumulo di stress quotidiano che può logorare la pazienza e la concentrazione, percezione di frustrazione cronica per l'inefficienza logistica)."
      },
      {
        value: "Un Incubo Insopportabile",
        text: "(Positivo: estrema sensibilità alle condizioni ambientali indice di una ricerca di standard elevati di qualità della vita, urgenza di trasformazione radicale) (Negativo: vulnerabilità critica allo stress cronico con elevato rischio di burnout precoce, incapacità di gestire le frizioni ambientali ordinarie, forte malessere psicofisico)."
      }
    ],
    softSkill: "GestioneDelloStress, Resilienza",
    characteristics: "Preferenza per la Routine, Sensibilità allo Stress, Valori Equilibrio Vita-Lavoro"
  },
  {
    num: 48,
    scenario: "Ti offrono il lavoro della tua vita, ma devi cambiare città e prendere meno soldi. Che fai?",
    instructions: [
      "Immagine di una fortezza inamovibile e ben difesa.",
      "Immagine di una bussola che indica direzioni diverse in modo incerto.",
      "Immagine di una freccia che punta decisa verso un orizzonte lontano.",
      "Immagine di un mappamondo aperto e illuminato, che mostra diverse città del mondo."
    ],
    captions: [
      "Resto",
      "Ci Penso",
      "Parto",
      "Nessun confine mi ferma"
    ],
    options: [
      {
        value: "Resto",
        text: "(Positivo: massima valorizzazione della stabilità relazionale e della continuità territoriale, priorità assoluta alla sicurezza affettiva e al radicamento sociale) (Negativo: potenziale rinuncia a una crescita professionale dirompente, rischio di stagnazione in una 'comfort zone' limitante per l'autorealizzazione a lungo termine)."
      },
      {
        value: "Ci Penso",
        text: "(Positivo: approccio razionale e ponderato basato sull'analisi costi-benefici, attitudine alla decisione consapevole che tutela sia la carriera che gli affetti) (Negativo: rischio di immobilismo decisionale e procrastinazione, potenziale perdita dell'opportunità per eccesso di cautela o indecisione strategica)."
      },
      {
        value: "Parto",
        text: "(Positivo: forte orientamento all'autorealizzazione e coraggio nel perseguire la propria missione professionale, adattabilità superiore e spirito d'iniziativa) (Negativo: rischio di squilibrio vita-lavoro, potenziale sradicamento affettivo forzato e stress da ricollocamento in contesti con minore stabilità finanziaria immediata)."
      },
      {
        value: "Nessun confine mi ferma",
        text: "(Positivo: mentalità cosmopolita e apertura globale senza confini, estrema flessibilità e visione 'world-wide' della propria carriera e identità) (Negativo: mancanza di radici e stabilità territoriale, rischio di superficialità nelle relazioni a lungo termine, percezione di un nomadismo professionale potenzialmente alienante)."
      }
    ],
    softSkill: "Adattabilita, PropensioneAlRischio",
    characteristics: "Adattabilità, Preferenza Geografica, Priorità di Carriera"
  },
  {
    num: 49,
    scenario: "Un nuovo collega di diversa cultura entra nel team. Come lo accogli?",
    instructions: [
      "Immagine di un muro di mattoni che separa due spazi.",
      "Immagine di una stretta di mano frettolosa e distaccata.",
      "Immagine di una porta aperta che invita ad entrare.",
      "Immagine di un cerchio di persone che si tengono per mano, includendo una nuova persona nel cerchio."
    ],
    captions: [
      "Deve rispettare le nostre abitudini",
      "Mantengo un rapporto formale",
      "Lo guido nei primi passi tecnici",
      "Lo aiuto a sentirsi uno di noi"
    ],
    options: [
      {
        value: "Deve rispettare le nostre abitudini",
        text: "(Positivo: massima tutela delle procedure e delle routine consolidate del team, orientamento al mantenimento dell'efficienza senza deviazioni esterne) (Negativo: chiusura culturale critica e mancanza di inclusività, approccio etnocentrico che ostacola l'integrazione e demotiva i nuovi talenti internazionali)."
      },
      {
        value: "Mantengo un rapporto formale",
        text: "(Positivo: rispetto delle norme di cortesia professionale con un approccio non invasivo che lascia autonomia al nuovo arrivato, neutralità operativa) (Negativo: accoglienza superficiale e freddezza relazionale, rischio di mancata integrazione profonda, incapacità di cogliere il valore aggiunto della diversità culturale)."
      },
      {
        value: "Lo guido nei primi passi tecnici",
        text: "(Positivo: proattività nell'onboarding e sensibilità verso le necessità di orientamento del nuovo collega, attitudine collaborativa e inclusiva) (Negativo: rischio di fermarsi a un livello di integrazione puramente tecnico-informativo senza approfondire la comprensione delle specificità culturali individuali)."
      },
      {
        value: "Lo aiuto a sentirsi uno di noi",
        text: "(Positivo: eccellente intelligenza culturale (CQ) e impegno attivo nella costruzione di un team autenticamente inclusivo, valorizzazione della diversità come risorsa strategica) (Negativo: potenziale eccesso di attenzione alla dimensione relazionale a scapito dell'operatività immediata, rischio di forzare l'integrazione in modo non spontaneo)."
      }
    ],
    softSkill: "DiversitaEInclusione, RelazioniInterpersonali",
    characteristics: "Inclusività, Empatia, Apertura Culturale"
  },
  {
    num: 50,
    scenario: "Durante una riunione, un collega fa una battuta chiaramente razzista. Qual è la tua reazione immediata?",
    instructions: [
      "Immagine di una maschera che ride, nascondendo la vera reazione.",
      "Immagine di una statua di sale che si scioglie lentamente.",
      "Immagine di un interruttore della luce che viene spento bruscamente.",
      "Immagine di un megafono che amplifica una voce decisa e ferma."
    ],
    captions: [
      "Risata di Circostanza",
      "Silenzio Imbarazzato",
      "Cambio Discorso, Evito Problemi",
      "Non lo sopporto, Lo Dico Chiaro e Tondo"
    ],
    options: [
      {
        value: "Risata di Circostanza",
        text: "(Positivo: preservazione formale dell'armonia superficiale del gruppo ed evitamento dello scontro diretto in contesti pubblici) (Negativo: collusione implicita con comportamenti discriminatori, mancanza totale di coraggio civile e integrità etica, percezione di debolezza di carattere)."
      },
      {
        value: "Silenzio Imbarazzato",
        text: "(Positivo: chiara segnalazione non verbale di disagio e disapprovazione etica pur mantenendo un profilo non conflittuale, consapevolezza del problema) (Negativo: passività e omissione di intervento necessario, incapacità di difendere i valori aziendali di inclusione, mancanza di assertività etica)."
      },
      {
        value: "Cambio Discorso, Evito Problemi",
        text: "(Positivo: diplomazia comunicativa volta a neutralizzare la tensione e riportare il focus sull'operatività professionale, mediazione cauta) (Negativo: inefficacia nel contrastare il comportamento scorretto alla radice, rischio di legittimare indirettamente l'offesa per mancanza di una condanna esplicita)."
      },
      {
        value: "Non lo sopporto, Lo Dico Chiaro e Tondo",
        text: "(Positivo: integrità morale superiore e coraggio civile, difesa attiva dei valori di rispetto e inclusione senza compromessi, leadership etica assertiva) (Negativo: rischio di innescare conflitti frontali polarizzanti, potenziale percezione di rigidità moralizzatrice se non gestita con estrema intelligenza emotiva)."
      }
    ],
    softSkill: "DiversitaEInclusione, CoraggioCivile",
    characteristics: "Consapevolezza Diversità, Condotta Etica, Assertività"
  }
];
