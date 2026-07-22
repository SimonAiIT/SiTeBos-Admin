import { Question } from "../types";

export const questions56to60: Question[] = [
  {
    num: 56,
    scenario: "Come cambia il tuo modo di lavorare e la tua concentrazione quando sai di essere osservato da colleghi o superiori?",
    instructions: [
      "Immagine di un artista che si esibisce sicuro sul palco,  ama essere al centro dell'attenzione.",
      "Immagine di una persona concentrata al microscopio,  ignora totalmente chi la guarda,  focus totale.",
      "Immagine di una persona che si aggiusta nervosamente la cravatta sentendosi osservata,  leggero disagio.",
      "Immagine di una persona che si copre il volto con le mani,  esasperata dagli sguardi,  forte disagio."
    ],
    captions: [
      "Mi Sento Stimolato",
      "Resto Indifferente",
      "Mi Sento Sotto Esame",
      "Perdo il Focus"
    ],
    options: [
      {
        value: "Mi Sento Stimolato",
        text: "(Positivo: carisma naturale e propensione alla leadership visibile, capacità di capitalizzare l'attenzione esterna per motivare e influenzare il team) (Negativo: rischio di egocentrismo e dipendenza eccessiva dal consenso pubblico, potenziale percezione di scarsa autenticità o teatralità)."
      },
      {
        value: "Resto Indifferente",
        text: "(Positivo: eccezionale capacità di concentrazione e impermeabilità alle distrazioni ambientali, alta efficienza operativa in contesti ad alta densità sociale) (Negativo: rischio di isolamento relazionale e scarsa ricettività ai feedback esterni, percezione di distacco o mancanza di spirito di squadra)."
      },
      {
        value: "Mi Sento Sotto Esame",
        text: "(Positivo: sensibilità sociale equilibrata che permette di mantenere alti standard di performance pur restando vigili sul contesto esterno) (Negativo: potenziale calo di efficacia in situazioni di stress espositivo prolungato, insicurezza latente che può frenare l'assertività pubblica)."
      },
      {
        value: "Perdo il Focus",
        text: "(Positivo: forte attitudine al lavoro di analisi 'dietro le quinte' e alla tutela rigorosa della privacy, ricerca di ambienti protetti ad alta concentrazione) (Negativo: vulnerabilità critica allo stress espositivo e ansia sociale paralizzante, incapacità di gestire ruoli che richiedano visibilità o rappresentanza)."
      }
    ],
    softSkill: "Autocritica, GestioneDelloStress",
    characteristics: "Introversione vs. Estroversione, Sensibilità all'Osservazione, Livelli di Concentrazione"
  },
  {
    num: 57,
    scenario: "Pensa alla tua attuale sensazione di prosperità nella vita.",
    instructions: [
      "Immagine di un giardino lussureggiante e rigoglioso, pieno di fiori e frutti.",
      "Immagine di un campo coltivato e ordinato,  raccolto stabile e sicuro.",
      "Immagine di un campo un po' secco e spoglio,  raccolto incerto,  leggera difficoltà.",
      "Immagine di un deserto desolato e senza vita,  aridità e mancanza totale."
    ],
    captions: [
      "Giardino Rigoglioso",
      "Campo Ben Coltivato",
      "Campo Un Po' Arido",
      "Deserto Desolato"
    ],
    options: [
      {
        value: "Giardino Rigoglioso",
        text: "(Positivo: percezione di abbondanza e autorealizzazione superiore, attitudine ottimistica che favorisce l'investimento in nuove opportunità e la crescita) (Negativo: rischio di bias di eccessivo ottimismo e sottovalutazione dei rischi sistemici, mancanza di preparazione a potenziali fasi di contrazione)."
      },
      {
        value: "Campo Ben Coltivato",
        text: "(Positivo: stabilità economica e metodica gestione delle risorse, orientamento alla sicurezza e alla continuità dei risultati nel lungo periodo) (Negativo: potenziale scarsa ambizione o resistenza a cambiamenti disruptivi che potrebbero elevare ulteriormente il livello di prosperità)."
      },
      {
        value: "Campo Un Po' Arido",
        text: "(Positivo: realismo lucido e consapevolezza delle criticità attuali, attitudine alla prudenza e alla gestione oculata delle risorse limitate) (Negativo: accumulo di stress finanziario e ansia per il futuro, rischio di visione limitata dal bisogno immediato che preclude investimenti strategici)."
      },
      {
        value: "Deserto Desolato",
        text: "(Positivo: riconoscimento onesto di una fase di crisi profonda, spinta potenziale verso una trasformazione radicale e ricerca di nuovi paradigmi esistenziali) (Negativo: percezione di impotenza appresa e rassegnazione critica, blocco dell'iniziativa per senso di desolazione e mancanza di prospettive)."
      }
    ],
    softSkill: "FinanzaPersonale, GestioneDelTempo",
    characteristics: "Stabilità Finanziaria Percepita, Prospettive Personali, Benessere Soggettivo"
  },
  {
    num: 58,
    scenario: "Pensa al tuo \"meteo interiore\".",
    instructions: [
      "Immagine di un cielo azzurro terso e senza nuvole,  serenità costante.",
      "Immagine di un cielo con nuvole bianche che vanno e vengono,  leggera variabilità.",
      "Immagine di un cielo con alternanza di sole e pioggia,  variabilità moderata e frequente.",
      "Immagine di una tempesta con fulmini e cielo nero,  estrema variabilità e intensità emotiva."
    ],
    captions: [
      "Cielo Sempre Sereno",
      "Cielo con Nuvole Passeggere",
      "Cielo a Volte Nuvoloso, A Volte Sereno",
      "Cielo Tempestoso"
    ],
    options: [
      {
        value: "Cielo Sempre Sereno",
        text: "(Positivo: eccellente stabilità emotiva e temperamento costante, alta affidabilità e prevedibilità nelle reazioni sotto pressione) (Negativo: potenziale appiattimento affettivo e ridotta reattività empatica verso dinamiche emotive intense altrui)."
      },
      {
        value: "Cielo con Nuvole Passeggere",
        text: "(Positivo: equilibrio emotivo ottimale e plasticità affettiva, capacità di integrare le variazioni dell'umore senza perdere il focus operativo) (Negativo: rischio di eccessiva moderazione che può essere percepita come mancanza di slancio o di passione autentica)."
      },
      {
        value: "Cielo a Volte Nuvoloso, A Volte Sereno",
        text: "(Positivo: ricchezza emotiva e spiccata sensibilità interiore, capacità di sperimentare e comprendere una vasta gamma di sfumature affettive) (Negativo: vulnerabilità a sbalzi d'umore che possono inficiare la costanza della performance e la prevedibilità relazionale)."
      },
      {
        value: "Cielo Tempestoso",
        text: "(Positivo: passionalità intensa e profonda risonanza emotiva, potenziale spinta creativa alimentata da un mondo interiore vibrante e non convenzionale) (Negativo: instabilità emotiva critica e difficoltà nella regolazione degli impulsi, rischio di imprevedibilità che destabilizza il clima del team)."
      }
    ],
    softSkill: "GestioneDelloStress, Resilienza",
    characteristics: "Stabilità Emotiva, Variabilità dell'Umore, Regolazione Emotiva"
  },
  {
    num: 59,
    scenario: "Quanto spesso ti fai un'opinione sulle persone che incontri?",
    instructions: [
      "Immagine di un occhio di falco che scruta dall'alto, sguardo penetrante e giudicante.",
      "Immagine di una lente d'ingrandimento che esamina attentamente i dettagli,  analisi frequente.",
      "Immagine di uno sguardo fugace attraverso un vetro appannato,  giudizio occasionale e superficiale.",
      "Immagine di una figura che guarda l'orizzonte aperto,  visione ampia e senza preconcetti,  assenza di giudizio."
    ],
    captions: [
      "Sguardo Penetrante",
      "Analisi Dettagliata",
      "Sguardo Sfuggente",
      "Visione Ampia"
    ],
    options: [
      {
        value: "Sguardo Penetrante",
        text: "(Positivo: rapidità di valutazione e intuito spiccato nel cogliere i tratti salienti della personalità, velocità decisionale in ambito relazionale) (Negativo: elevata tendenza al pregiudizio e rigidità di giudizio, rischio di chiusura mentale basata su prime impressioni potenzialmente fallaci)."
      },
      {
        value: "Analisi Dettagliata",
        text: "(Positivo: capacità analitica rigorosa e attenzione ai dettagli comportamentali, attitudine alla valutazione critica ponderata e accurata) (Negativo: rischio di ipercriticismo e lentezza nelle interazioni sociali per eccesso di scrutinio, potenziale percezione di freddezza valutativa)."
      },
      {
        value: "Sguardo Sfuggente",
        text: "(Positivo: moderazione nel giudizio e approccio pragmatico flessibile, attitudine a non etichettare le persone favorendo relazioni meno condizionate) (Negativo: potenziale superficialità nel cogliere segnali di allarme o rischi relazionali, rischio di sottovalutazione di dinamiche interpersonali rilevanti)."
      },
      {
        value: "Visione Ampia",
        text: "(Positivo: eccellente tolleranza e apertura mentale incondizionata, capacità di accogliere la diversità senza filtri giudicanti favorendo un clima inclusivo) (Negativo: vulnerabilità a manipolazioni o a condotte negative altrui per eccessiva fiducia o mancanza di filtri critici protettivi)."
      }
    ],
    softSkill: "Empatia, Equita",
    characteristics: "Tendenza al Giudizio, Tolleranza, Empatia"
  },
  {
    num: 60,
    scenario: "Quando hai un'idea, la tieni per te o la condividi volentieri?",
    instructions: [
      "Immagine di un seme tenuto chiuso nel pugno,  idea custodita gelosamente.",
      "Immagine di un seme mostrato a pochi,  condivisione selezionata.",
      "Immagine di un seme piantato in un piccolo vaso,  condivisione moderata.",
      "Immagine di semi sparsi al vento,  condivisione totale e aperta."
    ],
    captions: [
      "Segreto Strategico",
      "Solo a Pochi Fidati",
      "Condivisione Mirata",
      "Diffusione Aperta"
    ],
    options: [
      {
        value: "Segreto Strategico",
        text: "(Positivo: massima tutela della riservatezza e della proprietà intellettuale individuale, controllo totale sullo sviluppo e la qualità degli output) (Negativo: isolamento professionale e chiusura autoreferenziale, rinuncia ai benefici del confronto e della contaminazione creativa del team)."
      },
      {
        value: "Solo a Pochi Fidati",
        text: "(Positivo: condivisione strategica e selettiva volta a costruire relazioni di fiducia e lealtà con collaboratori scelti, protezione del valore dell'idea) (Negativo: limitazione del potenziale di diffusione e rallentamento dell'innovazione per eccessiva cautela nella circolazione delle informazioni)."
      },
      {
        value: "Condivisione Mirata",
        text: "(Positivo: approccio equilibrato tra protezione e apertura, attitudine a scegliere i contesti e i tempi più appropriati per massimizzare l'impatto dell'idea) (Negativo: potenziale perdita di opportunità di networking spontaneo o virale per eccessiva selettività o moderazione nella condivisione)."
      },
      {
        value: "Diffusione Aperta",
        text: "(Positivo: massima apertura alla collaborazione e allo scambio di idee indiscriminato, attitudine a favorire l'innovazione aperta e il progresso collettivo) (Negativo: rischio di perdita del controllo sulla paternità dell'idea e potenziale sfruttamento altrui, mancanza di riservatezza strategica su concetti sensibili)."
      }
    ],
    softSkill: "ComunicazioneEfficace, MenteAperta",
    characteristics: "Apertura, Stile di Comunicazione, Preferenza per la Collaborazione"
  }
];
