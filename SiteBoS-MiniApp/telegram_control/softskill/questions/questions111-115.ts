import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 111,
    scenario: "Ricevi una email sospetta che ti chiede le credenziali di accesso. Come reagisci?",
    instructions: [
      "Immagine di un aspirapolvere che \"risucchia\" immediatamente l'email sospetta,  eliminazione istantanea e senza esitazione.",
      "Immagine di un buttafuori corpulento che blocca l'accesso all'email,  marchio come spam e blocco proattivo.",
      "Immagine di una detective che esamina la email sospetta con una lente d'ingrandimento e la passa ad un superiore,  inoltro agli esperti per la verifica.",
      "Immagine del vaso di Pandora appena aperto da cui escono fumo e ombre minacciose,  apertura \"cautelativamente curiosa\" ma rischiosa."
    ],
    captions: [
      "Aspirapolvere",
      "Buttafuori",
      "Detective",
      "Apertura Curiosa"
    ],
    options: [
      {
        value: "Aspirapolvere",
        text: "(Positivo: massima integrità perimetrale e prevenzione istantanea di minacce latenti attraverso una policy di tolleranza zero) (Negativo: potenziale perdita di informazioni forensi utili alla comprensione della minaccia, approccio puramente reattivo e privo di analisi critica)."
      },
      {
        value: "Buttafuori",
        text: "(Positivo: proattività nella difesa dei sistemi e implementazione di filtri reputazionali per mitigare attacchi futuri) (Negativo: rischio di eccessiva generalizzazione del pericolo, potenziale inefficacia contro tecniche di social engineering mirate e sofisticate)."
      },
      {
        value: "Detective",
        text: "(Positivo: eccellente conformità ai protocolli di escalation e valorizzazione delle competenze specialistiche per una validazione rigorosa) (Negativo: potenziale rallentamento della risposta immediata per dipendenza da terzi, rischio di inazione in attesa di pareri esterni)."
      },
      {
        value: "Apertura Curiosa",
        text: "(Positivo: spiccata curiosità analitica e desiderio di approfondire i meccanismi delle minacce per scopi di auto-formazione e difesa) (Negativo: esposizione sconsiderata ad attacchi reali e grave imprudenza operativa, rischio elevato di compromettere l'integrità dei sistemi aziendali)."
      }
    ],
    softSkill: "SicurezzaDigitale, SicurezzaSulLavoro",
    characteristics: "Consapevolezza Cybersecurity, Valutazione del Rischio, Proattività"
  },
  {
    num: 112,
    scenario: "Ricevi una richiesta di amicizia sui social da uno sconosciuto con \"amici in comune\". Come ti comporti?",
    instructions: [
      "Immagine di una porta che si apre completamente e senza esitazione,  accettazione immediata senza filtri.",
      "Immagine di una porta socchiusa con una persona che spia da dietro,  accettazione cauta dopo una rapida \"sbirciatina\" al profilo.",
      "Immagine di due persone che parlano sottovoce \"chiedendo referenze\" prima di aprire la porta,  verifica tramite \"amici in comune\" prima di accettare.",
      "Immagine di una porta blindata con catenaccio e spioncino chiuso,  rifiuto netto e priorità assoluta alla privacy."
    ],
    captions: [
      "Porta Sempre Aperta",
      "Sbircio il Profilo",
      "Chiedo Referenze",
      "Porta Blindata"
    ],
    options: [
      {
        value: "Porta Sempre Aperta",
        text: "(Positivo: straordinaria apertura relazionale e propensione naturale al networking espansivo e multiculturale) (Negativo: grave vulnerabilità alle tecniche di ingegneria sociale e scarsa selettività nella tutela dei propri confini digitali e della privacy)."
      },
      {
        value: "Sbircio il Profilo",
        text: "(Positivo: approccio pragmatico e bilanciato che concilia l'esplorazione di nuove opportunità sociali con una prudenza minima necessaria) (Negativo: livello di protezione non ottimale contro profili fake strutturati, rischio residuo di intrusione informativa indesiderata)."
      },
      {
        value: "Chiedo Referenze",
        text: "(Positivo: eccellente rigore nella validazione della propria rete professionale attraverso verifiche reputazionali dirette e affidabili) (Negativo: potenziale percezione di eccessiva diffidenza o burocratizzazione delle relazioni sociali, rischio di perdere connessioni agili)."
      },
      {
        value: "Porta Blindata",
        text: "(Positivo: massima tutela dell'integrità digitale e difesa rigorosa della privacy personale da interferenze esterne non verificate) (Negativo: isolamento relazionale e limitazione drastica delle opportunità di networking strategico, percezione di chiusura preconcetta)."
      }
    ],
    softSkill: "SicurezzaDigitale, RelazioniInterpersonali",
    characteristics: "Consapevolezza Privacy Online, Abitudini di Networking Sociale, Valutazione del Rischio"
  },
  {
    num: 113,
    scenario: "Devi fare un acquisto. Quanto \"tiri sul prezzo\" di solito?",
    instructions: [
      "Immagine di una mano che porge dei soldi senza contrattare,  accetta il prezzo senza discutere.",
      "Immagine di una mano che indica il prezzo con un'espressione interrogativa,  chiede un piccolo sconto con educazione.",
      "Immagine di due mani che si stringono sopra un contratto,  negoziazione moderata e \"win-win\".",
      "Immagine di un avvoltoio che stringe tra gli artigli un sacco di monete,  negoziazione aggressiva e spietata per il prezzo minimo."
    ],
    captions: [
      "Paga e Non Chiede",
      "Chiede un Favore",
      "Stretta di Mano Affare Fatto",
      "Avvoltoio Affamato"
    ],
    options: [
      {
        value: "Paga e Non Chiede",
        text: "(Positivo: massima efficienza nel processo di acquisizione e rispetto del valore dichiarato dal mercato, focus sulla qualità e sul tempo) (Negativo: scarsa attenzione al rapporto value for money e rinuncia passiva a margini di risparmio potenziali)."
      },
      {
        value: "Chiede un Favore",
        text: "(Positivo: cortesia negoziale e approccio non aggressivo volto a testare la flessibilità del venditore senza compromettere il clima relazionale) (Negativo: limitata incisività commerciale e probabile ottenimento di condizioni non ottimali rispetto al potenziale di mercato)."
      },
      {
        value: "Stretta di Mano Affare Fatto",
        text: "(Positivo: eccellente capacità di negoziazione win-win, orientata alla creazione di accordi sostenibili e reciprocamente vantaggiosi) (Negativo: potenziale rinuncia a vantaggi economici estremi in favore della preservazione della relazione commerciale, ambizione moderata)."
      },
      {
        value: "Avvoltoio Affamato",
        text: "(Positivo: straordinaria determinazione nel massimizzare il profitto e ottenere le condizioni economiche più competitive possibili) (Negativo: elevato rischio di erosione della fiducia e dei rapporti a lungo termine, percezione di aggressività tossica o mancanza di etica negoziale)."
      }
    ],
    softSkill: "Negoziazione, VenditaConsultiva",
    characteristics: "Stile di Negoziazione, Assertività, Sensibilità al Prezzo"
  },
  {
    num: 114,
    scenario: "Pensa a come il tuo lavoro genera \"acqua\" per l'azienda.",
    instructions: [
      "Immagine di una sorgente d'acqua nascosta sottoterra,  lavoro interno senza fatturazione diretta,  ruolo di supporto \"invisibile\".",
      "Immagine di un piccolo affluente che si unisce a un fiume più grande,  lavoro connessito indirettamente alla fatturazione,  possibile contributo indiretto.",
      "Immagine del flusso principale di un fiume che alimenta un sistema di irrigazione,  lavoro essenziale per prodotti fatturabili,  contributo diretto alla \"produzione di acqua\".",
      "Immagine di un rubinetto che eroga acqua direttamente in un bicchiere,  lavoro direttamente fatturato al cliente,  generazione diretta di \"acqua\"."
    ],
    captions: [
      "Sorgente Nascosta",
      "Affluente Indiretto",
      "Flusso Principale",
      "Rubinetto Diretto"
    ],
    options: [
      {
        value: "Sorgente Nascosta",
        text: "(Positivo: contributo strutturale e indispensabile alla solidità dei processi interni, garanzia di stabilità fondamentale per le funzioni front-line) (Negativo: scarsa visibilità del valore economico prodotto e potenziale difficoltà nel dimostrare il ROI diretto del proprio operato)."
      },
      {
        value: "Affluente Indiretto",
        text: "(Positivo: orientamento collaborativo alla catena del valore e capacità di supportare attivamente la generazione di revenue stream indiretti) (Negativo: misurabilità della performance economica complessa e legame non immediato con la marginalità aziendale percepita)."
      },
      {
        value: "Flusso Principale",
        text: "(Positivo: ruolo centrale nella produzione di valore tangibile e diretto per il cliente, motore dell'efficienza operativa e della qualità del prodotto) (Negativo: potenziale distacco dalle dinamiche di chiusura commerciale, rischio di focalizzazione puramente produttiva a scapito della vendita)."
      },
      {
        value: "Rubinetto Diretto",
        text: "(Positivo: massima orientamento al business e generazione immediata di flussi di cassa, contributo vitale alla crescita finanziaria aziendale) (Negativo: esposizione costante alla pressione commerciale e rischio di visione a breve termine focalizzata esclusivamente sulla fatturazione immediata)."
      }
    ],
    softSkill: "ServizioAlCliente, VenditaConsultiva",
    characteristics: "Ruolo Lavorativo, Relazione con la Generazione di Entrate, Responsabilità verso il Cliente"
  },
  {
    num: 115,
    scenario: "Un cliente ti fa i complimenti per un ottimo lavoro. Come \"coltivi\" questa soddisfazione?",
    instructions: [
      "Immagine di un vaso di fiori solitario e abbandonato,  nessuna \"cura\" per la relazione,  feedback ignorato.",
      "Immagine di un vaso con un cartellino standard di ringraziamento generico,  cura minima e \"formale\".",
      "Immagine di un giardiniere che annaffia con cura un fiore in un vaso,  cura personalizzata e attenzione specifica al feedback positivo.",
      "Immagine di un giardiniere che trapianta un fiore in un vaso più grande e fertile,  cura proattiva e investimento a lungo termine sulla relazione."
    ],
    captions: [
      "Fiore Abbandonato",
      "Biglietto di Ringraziamento",
      "Annaffiatura Mirata",
      "Trapianto Prezioso"
    ],
    options: [
      {
        value: "Fiore Abbandonato",
        text: "(Positivo: massima umiltà professionale e focalizzazione esclusiva sul lavoro successivo senza necessità di validazione esterna) (Negativo: grave perdita di opportunità per il cross-selling e la fidelizzazione, percezione di indifferenza verso il successo relazionale)."
      },
      {
        value: "Biglietto di Ringraziamento",
        text: "(Positivo: gestione sobria e professionale della cortesia istituzionale, mantenimento di un rapporto equilibrato e privo di eccessi emotivi) (Negativo: approccio impersonale e burocratico che non valorizza il potenziale di advocacy del cliente soddisfatto)."
      },
      {
        value: "Annaffiatura Mirata",
        text: "(Positivo: eccellente capacità di consolidare la fiducia attraverso un riconoscimento personalizzato del valore reciproco, rafforzamento del legame) (Negativo: rischio di limitarsi a una manutenzione passiva della relazione senza trasformare il feedback in nuove opportunità di business)."
      },
      {
        value: "Trapianto Prezioso",
        text: "(Positivo: straordinaria visione strategica della relazione cliente, trasformazione del feedback in un motore proattivo per la crescita e l'advocacy) (Negativo: rischio di eccessivo investimento di risorse in un singolo caso, potenziale creazione di aspettative non scalabili nel lungo periodo)."
      }
    ],
    softSkill: "FidelizzazioneDelCliente, SoddisfazioneDelCliente",
    characteristics: "Fidelizzazione del Cliente, Apprezzamento del Cliente, Costruzione della Relazione"
  }
];
