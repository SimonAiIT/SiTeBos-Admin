import { Question } from "../types";

export const questions: Question[] = [
  {
    num: 36,
    scenario: "Osserva il tuo spazio di lavoro o il modo in cui pianifichi la tua giornata: quale di questi scenari ti descrive meglio?",
    instructions: [
      "Immagine di una scrivania nel caos totale.",
      "Immagine di una scrivania un po' in disordine.",
      "Immagine di una scrivania in ordine.",
      "Immagine di un'agenda perfetta."
    ],
    captions: [
      "Non è Disordine è Caos Creativo",
      "Approssimativo? io ho il mio Metodo",
      "Organizzato Sempre",
      "Metodo Millimetrico"
    ],
    options: [
      {
        value: "Non è Disordine è Caos Creativo",
        text: "(Positivo: alta propensione alla spontaneità e flessibilità operativa, capacità di gestire l'imprevisto con creatività e 'thinking outside the box' in situazioni di emergenza) (Negativo: criticità nella pianificazione metodica e disorganizzazione cronica, rischio di inefficienza esecutiva e stress da perdita di controllo sui flussi di lavoro)."
      },
      {
        value: "Approssimativo? io ho il mio Metodo",
        text: "(Positivo: approccio ibrido che bilancia ordine e creatività, capacità di adattarsi a diversi gradi di strutturazione del lavoro senza rigidità eccessiva) (Negativo: potenziale incostanza nel mantenimento degli standard organizzativi, rischio di inaffidabilità in processi che richiedono rigore metodologico assoluto)."
      },
      {
        value: "Organizzato Sempre",
        text: "(Positivo: eccellente organizzazione funzionale e pragmatica, capacità di ottimizzare tempi e risorse attraverso una pianificazione metodica e affidabile, equilibrio tra controllo e flessibilità) (Negativo: potenziale mancanza di attenzione verso i dettagli micro-organizzativi estremi, rischio di sottovalutazione della complessità in contesti iper-strutturati)."
      },
      {
        value: "Metodo Millimetrico",
        text: "(Positivo: massima efficienza operativa e controllo totale sui processi, precisione millimetrica nella pianificazione e affidabilità assoluta nell'esecuzione di progetti complessi) (Negativo: elevato rischio di rigidità cognitiva e stress da controllo, potenziale difficoltà nel gestire cambiamenti repentini non pianificati, percezione di mancanza di spontaneità)."
      }
    ],
    softSkill: "PianificazioneEOrganizzazione, GestioneDelTempo",
    characteristics: "Organizzazione, Pianificazione, Coscienziosità"
  },
  {
    num: 37,
    scenario: "Quando interagisci con gli altri, come descriveresti il \"clima\" abituale delle tue relazioni?",
    instructions: [
      "Immagine di un paesaggio zen con pietre perfettamente bilanciate e acqua calma.",
      "Immagine di un cielo sereno con qualche nuvola bianca sparsa.",
      "Immagine di un termometro che oscilla rapidamente tra caldo e freddo.",
      "Immagine di un vulcano in eruzione con lava incandescente e fumo denso."
    ],
    captions: [
      "Armonia Totale",
      "Relazioni Buone, Ma Non Sempre",
      "Relazioni a Tensione Alterna",
      "Guerra Totale"
    ],
    options: [
      {
        value: "Armonia Totale",
        text: "(Positivo: eccellente intelligenza sociale orientata all'omeostasi relazionale, capacità di mediazione diplomatica superiore e attitudine alla costruzione di climi collaborativi sereni) (Negativo: rischio di evitamento sistematico dei conflitti necessari, tendenza a sacrificare la verità o l'efficacia per una pace superficiale, mancanza di assertività)."
      },
      {
        value: "Relazioni Buone, Ma Non Sempre",
        text: "(Positivo: sano realismo relazionale e accettazione delle fisiologiche fluttuazioni nei rapporti interpersonali, capacità di gestire piccoli dissidi senza compromettere la stabilità complessiva) (Negativo: potenziale superficialità nell'investimento emotivo, rischio di mantenere relazioni tiepide senza perseguire una reale profondità o crescita del legame)."
      },
      {
        value: "Relazioni a Tensione Alterna",
        text: "(Positivo: consapevolezza della dinamicità delle relazioni umane e capacità di navigare in contesti emotivamente complessi, resilienza di fronte alle crisi relazionali passeggere) (Negativo: instabilità relazionale cronica e stress interpersonale elevato, rischio di logoramento emotivo dovuto a frequenti oscillazioni, clima di incertezza costante)."
      },
      {
        value: "Guerra Totale",
        text: "(Positivo: estrema determinazione nel difendere i propri valori e principi anche a costo di rotture radicali, trasparenza totale nelle posizioni antagoniste senza ipocrisie diplomatiche) (Negativo: incapacità di mediazione e gestione distruttiva del conflitto, isolamento sociale critico, clima relazionale tossico e alta dispersione di energia in scontri improduttivi)."
      }
    ],
    softSkill: "GestioneDeiConflitti, ComunicazioneEfficace",
    characteristics: "Evitamento del Conflitto, Stile di Comunicazione, Pazienza"
  },
  {
    num: 38,
    scenario: "Pensando al tuo percorso di carriera, qual è il traguardo che desideri davvero raggiungere?",
    instructions: [
      "Immagine di una comoda poltrona in un angolo accogliente di una stanza.",
      "Immagine di una scala che sale gradualmente, senza essere ripida.",
      "Immagine di un razzo che decolla verso lo spazio, puntando in alto.",
      "Immagine di una corona che poggia su un cuscino di velluto, simbolo di potere raggiunto."
    ],
    captions: [
      "Sto Bene Così",
      "Crescita Tranquilla",
      "Punto in Alto",
      "Sono al Vertice"
    ],
    options: [
      {
        value: "Sto Bene Così",
        text: "(Positivo: eccellente equilibrio vita-lavoro e gratificazione per i risultati attuali, approccio minimalista e sostenibile orientato al benessere personale e alla stabilità emotiva) (Negativo: mancanza di ambizione evolutiva e rischio di obsolescenza professionale, tendenza a non sfruttare appieno il proprio potenziale in contesti competitivi)."
      },
      {
        value: "Crescita Tranquilla",
        text: "(Positivo: ambizione bilanciata e sostenibile nel lungo periodo, orientamento alla crescita graduale che preserva la qualità della vita e l'equilibrio psicofisico, gestione oculata dello stress) (Negativo: progressione di carriera potenzialmente più lenta rispetto ai peer, rischio di perdere opportunità ad alto impatto per eccesso di cautela)."
      },
      {
        value: "Punto in Alto",
        text: "(Positivo: forte orientamento al successo e ambizione verticale superiore, determinazione ferrea nel raggiungimento di posizioni di leadership e massima autorealizzazione professionale) (Negativo: elevato rischio di squilibrio tra vita privata e lavoro, potenziale stress da performance cronico, rischio di logoramento delle relazioni per eccessiva competitività)."
      },
      {
        value: "Sono al Vertice",
        text: "(Positivo: piena autorealizzazione professionale e consolidamento del successo raggiunto, visione strategica di alto livello e capacità di operare con autorità e padronanza del ruolo) (Negativo: rischio di autocompiacimento e perdita di umiltà intellettuale, potenziale difficoltà a rimettersi in gioco in contesti di cambiamento radicale)."
      }
    ],
    softSkill: "Autocritica, SviluppoPersonale",
    characteristics: "Ambizione, Competitività, Motivazione al Successo"
  },
  {
    num: 39,
    scenario: "Sei un capo, Come preferisci dare \"premi\" o riconoscimenti per il buon lavoro?",
    instructions: [
      "Immagine di una cassaforte chiusa a chiave, con fessure per inserire monete solo dopo verifica.",
      "Immagine di un giardino ben curato dove crescono sia fiori che frutti, entrambi apprezzati.",
      "Immagine di un insegnante che incoraggia e applaude calorosamente uno studente che si è impegnato molto, anche se il risultato non è perfetto.",
      "Immagine di una fontana zampillante che spruzza acqua abbondantemente in tutte le direzioni, simbolo di generosità."
    ],
    captions: [
      "Solo per i Risultati",
      "Merito e Fatti, Ma Contano i Fatti",
      "Soprattutto per l'Impegno",
      "Premi a Pioggia, Migliorano il lavoro"
    ],
    options: [
      {
        value: "Solo per i Risultati",
        text: "(Positivo: rigorosa meritocrazia orientata agli output e massima trasparenza nei criteri di premiazione, forte incentivo all'efficienza e al raggiungimento di KPI ambiziosi) (Negativo: rischio di demotivazione per chi si impegna in processi complessi senza risultati immediati, clima eccessivamente competitivo e calcolatore, mancanza di visione sul potenziale futuro)."
      },
      {
        value: "Merito e Fatti, Ma Contano i Fatti",
        text: "(Positivo: approccio pragmatico e bilanciato che riconosce sia il valore del risultato che la qualità del processo, flessibilità manageriale orientata a un'equità sistemica) (Negativo: potenziale ambiguità nella percezione dei criteri di premiazione, rischio di generare confusione se non supportato da una comunicazione estremamente chiara)."
      },
      {
        value: "Soprattutto per l'Impegno",
        text: "(Positivo: forte orientamento allo sviluppo delle persone e alla valorizzazione della motivazione intrinseca, creazione di un clima di sicurezza psicologica che favorisce l'apprendimento) (Negativo: rischio di tollerare performance mediocri o inefficienti, potenziale calo degli standard qualitativi finali, disincentivo per i 'high performers' orientati ai risultati)."
      },
      {
        value: "Premi a Pioggia, Migliorano il lavoro",
        text: "(Positivo: massima enfasi sulla coesione del team e sul clima positivo, leadership basata sulla fiducia incondizionata e sul supporto psicologico collettivo) (Negativo: totale assenza di meritocrazia differenziata, rischio di premiare il disimpegno, potenziale frustrazione dei collaboratori più produttivi che non vedono riconosciuto il loro surplus di valore)."
      }
    ],
    softSkill: "GestioneDelTeam, SviluppoDellePersone",
    characteristics: "Stile di Management, Filosofia della Motivazione, Propensione al Rischio (nel management)"
  },
  {
    num: 40,
    scenario: "Stai svolgendo un compito critico, ma intorno a te ci sono continui rumori e interruzioni. Come reagisce la tua mente?",
    instructions: [
      "Immagine di un faro potente che proietta un fascio di luce attraverso una fitta nebbia.",
      "Immagine di una candela la cui fiamma oscilla leggermente a causa di una leggera brezza.",
      "Immagine di una persona che cerca di leggere un libro mentre una farfalla le svolazza insistentemente intorno alla testa.",
      "Immagine di una palla di vetro con neve scossa violentemente, la scena interna è completamente oscurata dal caos."
    ],
    captions: [
      "Focus Mentale",
      "Concentrato, Ma Non Sempre",
      "Distratto da Tutto",
      "Caos Mentale"
    ],
    options: [
      {
        value: "Focus Mentale",
        text: "(Positivo: eccellente capacità di concentrazione profonda ('deep work') e resistenza ferrea alle interferenze esterne, massima efficienza operativa anche in ambienti caotici) (Negativo: rischio di isolamento autoreferenziale e scarsa consapevolezza del contesto circostante, potenziale percezione di distacco sociale o mancanza di empatia verso il team)."
      },
      {
        value: "Concentrato, Ma Non Sempre",
        text: "(Positivo: buona gestione dell'attenzione focalizzata in condizioni ordinarie, equilibrio funzionale tra concentrazione sul compito e apertura agli stimoli ambientali) (Negativo: vulnerabilità a cali di produttività in contesti di stress estremo o disturbo persistente, mancanza di un focus 'd'acciaio' necessario per compiti ultra-critici)."
      },
      {
        value: "Distratto da Tutto",
        text: "(Positivo: alta sensibilità agli stimoli esterni e potenziale attitudine al pensiero laterale e alla creatività cross-settoriale, apertura a spunti imprevisti dell'ambiente) (Negativo: scarsa persistenza attentiva e inefficienza esecutiva cronica, difficoltà estrema nel portare a termine compiti complessi, forte dipendenza da condizioni ambientali protette)."
      },
      {
        value: "Caos Mentale",
        text: "(Positivo: potenziale ricchezza interiore e ipersensibilità recettiva che può essere canalizzata in attività artistiche o esplorative non strutturate) (Negativo: incapacità critica di focalizzazione e disorganizzazione cognitiva, stress elevato da sovraccarico informativo, inaffidabilità totale in contesti che richiedono precisione e rigore esecutivo)."
      }
    ],
    softSkill: "GestioneDelTempo, PianificazioneEOrganizzazione",
    characteristics: "Focus, Soglia di Attenzione, Coscienziosità (potenziale)"
  }
];
