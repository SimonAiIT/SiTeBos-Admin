import { Question } from "../types";

export const questions91to95: Question[] = [
  {
    num: 91,
    scenario: "Quale strumento pensi sia più importante per viaggiare?",
    instructions: [
      "Immagine di una strumenti di navigazione digitale,  ogni rotta tracciata con precisione millimetrica,  pianificazione ossessiva.",
      "Immagine di una mappa,  ogni rotta tracciata con precisione,  pianificazione prevalente ma con margini di libertà.",
      "Immagine di una rosa dei venti che indica tutte le direzioni contemporaneamente,  equilibrio tra ragione e intuito,  approccio misto.",
      "Immagine di una bussola,  istinto puro,  assenza di pianificazione."
    ],
    captions: [
      "GPS",
      "Mappa",
      "Bussola",
      "Rosa dei Venti"
    ],
    options: [
      {
        value: "GPS",
        text: "(Positivo: massimo controllo e gestione del rischio attraverso una pianificazione millimetrica del percorso, eccellente riduzione degli imprevisti) (Negativo: eccessiva dipendenza dagli strumenti e vulnerabilità psicologica di fronte al guasto tecnico o all'imprevedibile totale, mancanza di flessibilità)."
      },
      {
        value: "Mappa",
        text: "(Positivo: visione strategica globale e capacità di orientarsi autonomamente mantenendo una direzione chiara ma flessibile) (Negativo: rischio di trascurare dettagli operativi immediati per eccessiva focalizzazione sulla visione d'insieme, potenziale ritardo reattivo)."
      },
      {
        value: "Bussola",
        text: "(Positivo: straordinaria capacità di navigazione intuitiva e resilienza decisionale in contesti di totale incertezza o assenza di dati) (Negativo: mancanza di una pianificazione strutturata a lungo termine, rischio di inefficienza nei percorsi e spreco di risorse per tentativi ed errori)."
      },
      {
        value: "Rosa dei Venti",
        text: "(Positivo: massima apertura alle opportunità e capacità di reagire istantaneamente a stimoli ambientali multiformi, agilità di pensiero) (Negativo: rischio di dispersione e mancanza di un focus direzionale coerente, percezione di instabilità strategica e volubilità nelle scelte)."
      }
    ],
    softSkill: "PianificazioneEOrganizzazione, Autodisciplina",
    characteristics: "Preferenza per la Pianificazione, Livelli di Impulsività, Stile Decisionale"
  },
  {
    num: 92,
    scenario: "Quando ti trovi in un posto affollato come procedi?",
    instructions: [
      "Immagine di un pesce che nuota in un banco di pesci,  movimenti sincronizzati con la massa,  integrazione totale nel gruppo.",
      "Immagine di un pesce che nuota in un banco ma leggermente defilato,  segue la corrente ma con una certa autonomia,  integrazione prevalente.",
      "Immagine di un pesce che nuota in direzione opposta rispetto al banco,  scelta di un percorso diverso ma senza scontro,  bivio consapevole.",
      "Immagine di pesci che si agitano in tutte le direzioni creando un vortice,  movimenti caotici e contrastanti,  caos e conflitto di direzioni."
    ],
    captions: [
      "Seguo la  Fila",
      "Mantengo le Distanza",
      "Mi allontano se Posso",
      "Vado dove Voglio"
    ],
    options: [
      {
        value: "Seguo la  Fila",
        text: "(Positivo: massima sintonia con le dinamiche collettive e capacità di integrazione fluida in contesti sociali complessi, spirito collaborativo) (Negativo: rischio di conformismo passivo e rinuncia alla propria leadership individuale per timore di perturbare l'armonia del gruppo)."
      },
      {
        value: "Mantengo le Distanza",
        text: "(Positivo: eccellente equilibrio tra integrazione sociale e mantenimento della propria identità e autonomia di movimento, discrezione strategica) (Negativo: potenziale percezione di distacco emotivo o freddezza relazionale, rischio di mancata partecipazione alle sinergie di gruppo)."
      },
      {
        value: "Mi allontano se Posso",
        text: "(Positivo: spiccata capacità di discernimento e indipendenza decisionale volta a ottimizzare il proprio percorso senza generare conflitti) (Negativo: tendenza all'individualismo e potenziale difficoltà nel sottomettersi a regole o flussi collettivi necessari in contesti organizzati)."
      },
      {
        value: "Vado dove Voglio",
        text: "(Positivo: straordinaria assertività e determinazione nel perseguire i propri obiettivi anche controcorrente, attitudine pionieristica e forte leadership) (Negativo: elevato rischio di generare attriti relazionali e conflitti per mancanza di considerazione dei flussi comuni, percezione di arroganza)."
      }
    ],
    softSkill: "GestioneDeiConflitti, Negoziazione",
    characteristics: "Assertività, Accondiscendenza, Stile di Conflitto, Stile di Perseguimento degli Obiettivi"
  },
  {
    num: 93,
    scenario: "Come è il terreno su cui fai crescere il tuo futuro?",
    instructions: [
      "Immagine di un campo arato,  lavora per il futuro.",
      "Immagine di un campo con poche piantine appena spuntate,  qualcosa per il futuro ma non molto.",
      "Immagine di un campo coltivato con un buon raccolto maturo,  raccolto sufficiente.",
      "Immagine di un campo di grano che trabocca,  abbondanza per il futuro."
    ],
    captions: [
      "Campo Arato",
      "Poche Piantine",
      "Raccolto Sufficiente",
      "Granaio Pieno"
    ],
    options: [
      {
        value: "Campo Arato",
        text: "(Positivo: massima focalizzazione sul godimento del presente e capacità di vivere intensamente l'attualità senza zavorre di ansia futura) (Negativo: vulnerabilità finanziaria critica di fronte a imprevisti e mancanza di una strategia di accumulo patrimoniale, scarsa previdenza)."
      },
      {
        value: "Poche Piantine",
        text: "(Positivo: primo passo consapevole verso la costruzione di una base finanziaria pur mantenendo uno stile di vita flessibile e dinamico) (Negativo: risparmio inferiore alla media e potenziale insufficienza di capitale per progetti ambiziosi, esposizione a rischi economici medi)."
      },
      {
        value: "Raccolto Sufficiente",
        text: "(Positivo: gestione finanziaria responsabile ed equilibrata che garantisce una sicurezza standard senza sacrifici eccessivi del benessere attuale) (Negativo: potenziale mancanza di visione per una crescita patrimoniale esponenziale, tendenza al conformismo nelle scelte di investimento)."
      },
      {
        value: "Granaio Pieno",
        text: "(Positivo: eccellente disciplina finanziaria orientata alla sicurezza a lungo termine e alla creazione di solidi asset patrimoniali) (Negativo: rischio di eccessivo sacrificio della qualità della vita attuale per un futuro ipotetico, potenziale percezione di eccessiva frugalità)."
      }
    ],
    softSkill: "FinanzaPersonale, PianificazioneEOrganizzazione",
    characteristics: "Prudenza Finanziaria, Pianificazione del Futuro, Orientamento alla Sicurezza"
  },
  {
    num: 94,
    scenario: "Un cliente è stato duro con te, dopo un problema risolto. Che fai?",
    instructions: [
      "Immagine di un paesaggio desertico e desolato,  indifferenza e abbandono della relazione.",
      "Immagine di un robot che consegna un modulo di soddisfazione standardizzato,  follow-up minimo e impersonale.",
      "Immagine di un ramoscello d'ulivo offerto come gesto di pace,  tentativo di conciliazione e distensione.",
      "Immagine di operai che costruiscono un ponte solido e duraturo,  impegno attivo per la riconciliazione e la ricostruzione."
    ],
    captions: [
      "Ignoro e Passo Oltre",
      "Modulo Automatico",
      "Gesto di Pace",
      "Offerta di Riconciliazione"
    ],
    options: [
      {
        value: "Ignoro e Passo Oltre",
        text: "(Positivo: massima efficienza operativa e capacità di preservare il proprio equilibrio emotivo distaccandosi da conflitti improduttivi) (Negativo: perdita certa della relazione con il cliente e danno reputazionale, mancanza totale di attenzione alla customer retention)."
      },
      {
        value: "Modulo Automatico",
        text: "(Positivo: scalabilità e standardizzazione dei processi di feedback, approccio razionale basato su metriche oggettive e gestione efficiente dei flussi) (Negativo: follow-up percepito come freddo e burocratico, rischio di aggravare l'irritazione del cliente per mancanza di empatia umana)."
      },
      {
        value: "Gesto di Pace",
        text: "(Positivo: eccellente intelligenza sociale volta a disinnescare la tensione e ripristinare un clima di dialogo costruttivo e civile) (Negativo: rischio di percezione di una conciliazione solo formale o superficiale, potenziale inefficacia nel risolvere nodi relazionali profondi)."
      },
      {
        value: "Offerta di Riconciliazione",
        text: "(Positivo: commitment totale verso la customer loyalty e capacità di trasformare una crisi in una partnership di valore rinforzata) (Negativo: elevato costo operativo e rischio di sovra-investimento energetico in relazioni non recuperabili o tossiche)."
      }
    ],
    softSkill: "FidelizzazioneDelCliente, GestioneDellaRabbia",
    characteristics: "Recupero del Cliente, Gestione della Frustrazione, Orientamento alla Soluzione"
  },
  {
    num: 95,
    scenario: "Quanto spesso \"accendi la miccia\" per nuove iniziative?",
    instructions: [
      "Immagine di un cielo notturno completamente nero e senza stelle,  assenza totale di \"scintilla\" iniziale.",
      "Immagine di un singolo fiammifero appena acceso che produce una fiammella debole,  iniziativa rara e incerta.",
      "Immagine di un piccolo fuoco di legna che arde in modo controllato,  iniziativa occasionale e misurata.",
      "Immagine di un fuoco d'artificio che esplode in mille scintille luminose,  iniziativa costante ed esplosiva."
    ],
    captions: [
      "Nessuna Scintilla",
      "Scintilla Flebile",
      "Brace Moderata",
      "Fuochi d'Artificio Continui"
    ],
    options: [
      {
        value: "Nessuna Scintilla",
        text: "(Positivo: massima focalizzazione sull'ottimizzazione dell'esistente e sulla continuità operativa senza distrazioni evolutive premature) (Negativo: stagnazione innovativa e rischio di obsolescenza per mancanza di proattività nel cogliere i segnali di cambiamento del mercato)."
      },
      {
        value: "Scintilla Flebile",
        text: "(Positivo: approccio prudente e graduale all'innovazione, volto a consolidare ogni passo prima di procedere, minimizzazione dei rischi di errore) (Negativo: lentezza reattiva e potenziale perdita di vantaggi competitivi dirompenti, mancanza di coraggio imprenditoriale)."
      },
      {
        value: "Brace Moderata",
        text: "(Positivo: eccellente bilanciamento tra mantenimento della routine operativa e proposizione costante di miglioramenti incrementali e sostenibili) (Negativo: rischio di non cogliere opportunità di trasformazione radicale per eccessiva cautela e orientamento alla moderazione)."
      },
      {
        value: "Fuochi d'Artificio Continui",
        text: "(Positivo: straordinaria spinta innovativa e capacità visionaria di generare costantemente nuovi paradigmi e progetti ad alto impatto) (Negativo: rischio elevato di dispersione energetica e mancanza di messa a terra operativa, percezione di instabilità e caos direzionale)."
      }
    ],
    softSkill: "Innovazione, MenteAperta",
    characteristics: "Proattività, Iniziativa, Spinta Innovativa"
  }
];