// ══════════════════════════════════════════════════════════════════════
// KNOWLEDGE BASE NORMATIVA: DIZIONARIO D.LGS. 81/08 EXTENDED (BOILERPLATES)
// Pattern: Strategy / Template Method per l'iniezione dinamica nel Print Engine
// ══════════════════════════════════════════════════════════════════════

const DVRBoilerplates = {

    "comune": {
        titolo: "PARTE I: MISURE COMUNI, INFRASTRUTTURA E SICUREZZA GENERALE",
        normativa_applicata: "D.Lgs. 81/08 Titolo I (Principi Comuni), Titolo II (Luoghi di Lavoro), D.M. 10/03/98 e D.M. 02/09/2021 (Antincendio), DPR 462/01 (Impianti Elettrici) [1-3].",
        premesse: "Il presente capitolo è redatto in ottemperanza agli Artt. 17 e 28 del D.Lgs. 81/2008 e s.m.i., i quali impongono la valutazione di tutti i rischi per la sicurezza e la salute, specificando i criteri adottati e le misure di prevenzione [4-6]. La valutazione analizza i rischi trasversali legati all'infrastruttura, garantendo che i luoghi di lavoro, gli impianti elettrici, le vie di esodo e i presidi antincendio siano conformi ai requisiti strutturali di legge, a tutela di tutto il personale e degli avventori presenti nella struttura.",
        metodologia: "Il livello di rischio è calcolato tramite matrice semi-quantitativa R = P x D. La valutazione dell'adeguatezza strutturale viene effettuata verificando la presenza e la regolarità delle manutenzioni periodiche sui presidi antincendio (es. UNI 9994-1) [7] e le verifiche di messa a terra [7].",
        misure_obbligatorie: "È fatto obbligo di garantire la viabilità delle vie di fuga, la presenza di illuminazione di emergenza, la regolare tenuta del registro dei controlli antincendio e la designazione, con relativa formazione, degli addetti alla gestione delle emergenze (Primo Soccorso e Lotta Antincendio) [8, 9]."
    },

    "generic": {
        titolo: "PARTE II: SETTORE GENERICO E SERVIZI OPERATIVI",
        normativa_applicata: "D.Lgs. 81/08 Titolo II (Luoghi di lavoro) e Allegato IV (Requisiti dei luoghi di lavoro) [10].",
        premesse: "La valutazione del rischio è effettuata con riferimento alle attività operative standard, non soggette a rischi biologici o chimici complessi, ma caratterizzate da possibili infortuni accidentali, cadute a livello, rischi da movimentazione manuale di entità lieve e rischi ergonomici legati alla postura [10].",
        metodologia: "Si adotta la matrice R = P x D, con un'analisi osservazionale delle postazioni di lavoro e dei percorsi logistici interni all'azienda, mirata all'eliminazione alla fonte dei pericoli di natura meccanica e traumatica.",
        misure_obbligatorie: "Mantenimento dell'ordine e della pulizia degli ambienti, rispetto dei requisiti di cubatura e aerazione previsti dall'Allegato IV del D.Lgs. 81/08 [11], e fornitura di calzature idonee ove la pavimentazione presenti rischi di scivolamento."
    },

    "dental": {
        titolo: "PARTE II: SETTORE ODONTOIATRICO E RISCHIO CLINICO",
        normativa_applicata: "D.Lgs. 81/08 Titolo X (Esposizione ad agenti biologici) e Titolo X-bis (Protezione dalle ferite da taglio e da punta nel settore sanitario) [12, 13]. Regolamento UE 2017/745 (MDR) e L. 24/2017 (Gelli-Bianco) [14, 15].",
        premesse: "L'attività odontoiatrica comporta l'esposizione potenziale dei lavoratori ad agenti biologici (es. HBV, HCV, HIV, M. tuberculosis) tramite contatto con fluidi biologici (sangue, saliva) o inalazione di aerosol generato da strumentazione rotante [13]. Il presente documento individua le misure tecniche, organizzative e procedurali per l'abbattimento del rischio.",
        metodologia: "Per la valutazione specifica del Rischio Biologico, è stato adottato l'algoritmo validato INAIL-CONTARP [16]. L'indice di Danno (D) è posto cautelativamente al valore massimo (Gruppo 3). L'indice di Probabilità (P) è determinato matematicamente analizzando sei Fattori di mitigazione: \nF1: Quantità di esposizione; \nF2: Frequenza di contatto; \nF3: Caratteristiche strutturali; \nF4: Procedure/buone pratiche; \nF5: Utilizzo DPI; \nF6: Formazione [16].",
        misure_obbligatorie: "Ai sensi dell'Art. 286-sexies del D.Lgs. 81/08 [12], sono inderogabili: \n1. Divieto assoluto di reincappucciamento manuale degli aghi. \n2. Smaltimento tempestivo in contenitori rigidi per taglienti. \n3. Cicli rigorosi di sterilizzazione in autoclave (UNI EN 13060) con tracciabilità dei lotti e validazione periodica [17]. \n4. Obbligo di acquisizione del Consenso Informato scritto per ogni piano di cura [18]."
    },

    "health": {
        titolo: "PARTE II: STRUTTURE SANITARIE E POLISPECIALISTICHE",
        normativa_applicata: "D.Lgs. 81/08 Titolo X (Agenti Biologici), Titolo X-bis (Taglienti), Titolo IX (Agenti Chimici) [12, 19]; D.Lgs. 152/2006 (Rifiuti) [19].",
        premesse: "Il documento analizza i rischi connessi all'erogazione di prestazioni sanitarie e ambulatoriali, focalizzandosi sul potenziale rischio di esposizione accidentale ad agenti biologici, gestione sicura degli strumenti acuminati o taglienti, e utilizzo di farmaci, anestetici o preparati chimici sterilizzanti [19].",
        metodologia: "Calcolo del rischio combinato (Matrice PxD) per il rischio clinico e analisi INAIL per l'esposizione biologica accidentale. I protocolli valutano la segregazione dei percorsi (sporco/pulito) e l'adeguatezza della sorveglianza sanitaria preventiva e periodica effettuata dal Medico Competente (Art. 41) [20, 21].",
        misure_obbligatorie: "Gestione rigorosa dei rifiuti sanitari a rischio infettivo (CER 18.01.03*) [22], redazione di procedure specifiche per la gestione dell'emergenza post-esposizione (puntura accidentale) e adozione di DPI di III categoria atti a prevenire il contagio ematogeno o aereo."
    },

    "beauty": {
        titolo: "PARTE II: MEDICINA ESTETICA E BENESSERE",
        normativa_applicata: "D.Lgs. 81/08 Titolo VIII Capo V (Radiazioni Ottiche Artificiali), Titolo IX (Sostanze Pericolose) [23, 24]. Legge 1/90 e D.M. 206/2015 [24].",
        premesse: "Le attività estetiche comportano rischi legati all'uso prolungato di apparecchiature elettromeccaniche, sorgenti ROA (Laser, Luce Pulsata) e prodotti cosmetici/chimici [24]. La valutazione analizza le procedure di prevenzione a tutela delle operatrici e dei clienti.",
        metodologia: "La valutazione si basa sui Valori Limite di Esposizione (VLE) per le radiazioni ottiche, come riportato nell'Allegato XXXVII del D.Lgs. 81/08 [23, 25]. Il calcolo R = P x D tiene conto dell'esposizione cutanea e oculare ai fasci laser e alle sostanze sensibilizzanti.",
        misure_obbligatorie: "Divieto di utilizzo di apparati Laser di Classe 3B e 4 senza specifica formazione ed occhiali protettivi calibrati sulle lunghezze d'onda emesse [26]. Obbligo di sterilizzazione degli strumenti riutilizzabili taglienti (es. tronchesine, pinzette) e sanificazione rigorosa delle superfici di contatto interpersonale."
    },

    "food": {
        titolo: "PARTE II: RISTORAZIONE E HO.RE.CA",
        normativa_applicata: "D.Lgs. 81/08 Titolo III (Attrezzature), Titolo VI (Movimentazione Manuale dei Carichi) [27]. Regolamenti CE 852/2004 e 853/2004 (HACCP) [27].",
        premesse: "L'analisi dei rischi per il comparto alimentare si basa sull'integrazione tra la sicurezza sul lavoro (rischi di natura meccanica da taglio, termica da ustione) e la sicurezza igienico-sanitaria prevista dal sistema di autocontrollo [27].",
        metodologia: "Applicazione della matrice PxD per infortuni sul lavoro, integrata con i parametri di valutazione ergonomica per i movimenti ripetitivi e la movimentazione manuale dei carichi (metodo NIOSH/Snook Ciriello) [27].",
        misure_obbligatorie: "Adozione di calzature antiscivolo (rischio da pavimenti bagnati/unti). Manutenzione periodica e certificata degli impianti di aspirazione (cappe). Conformità delle macchine (affettatrici, impastatrici) ai requisiti di protezione da elementi taglienti in movimento (marcatura CE) [27]."
    },

    "hospitality": {
        titolo: "PARTE II: OSPITALITÀ E STRUTTURE RICETTIVE",
        normativa_applicata: "D.Lgs. 81/08 Titolo VI (Movimentazione Manuale dei Carichi) e Titolo X (Rischio Biologico) [28]. D.M. 09/04/1994 (Prevenzione Incendi Alberghi).",
        premesse: "Il settore ricettivo presenta criticità legate al lavoro notturno, all'ergonomia (disturbi muscolo-scheletrici da riassetto camere e facchinaggio) e al rischio biologico inalatorio (Legionella pneumophila) associato agli impianti idrici e di climatizzazione aeraulica [28].",
        metodologia: "Valutazione dei carichi biomeccanici per il personale ai piani. Valutazione del rischio incendio in base alla capienza (strutture > 100/200 posti letto soggette a controllo VVF) [29, 30].",
        misure_obbligatorie: "Elaborazione e rigorosa applicazione del Protocollo di Autocontrollo per il Rischio Legionellosi (shock termici, clorazione impianti idrici). Formazione del personale addetto ai piani sull'uso corretto di detergenti chimici irritanti (con scheda di sicurezza a disposizione) [28]."
    },

    "professional": {
        titolo: "PARTE II: SERVIZI PROFESSIONALI E AMBIENTI D'UFFICIO",
        normativa_applicata: "D.Lgs. 81/08 Titolo VII (Attrezzature munite di Videoterminali) e Allegato XXXIV [31-33].",
        premesse: "La valutazione nei contesti di tipo intellettuale o d'ufficio si concentra sull'ergonomia delle postazioni, la salubrità del microclima, la protezione dell'apparato visivo (astenia visiva) e la prevenzione dello stress lavoro-correlato [33].",
        metodologia: "Controllo visivo delle postazioni informatiche secondo i dettami dell'Allegato XXXIV. Valutazione dello stress lavoro-correlato (Art. 28, comma 1) tramite check-list documentale INAIL [4].",
        misure_obbligatorie: "I Lavoratori 'Videoterminalisti' (uso di schermi per ≥ 20 ore settimanali) necessitano di postazioni ergonomiche: sedili regolabili a 5 razze, monitor orientabili e antiriflesso [34]. È imposta un'interruzione di 15 minuti ogni 120 minuti di applicazione continuativa al VDT [33]. Esecuzione della sorveglianza sanitaria periodica (visita oftalmica) per i soggetti esposti."
    },

    "workshop": {
        titolo: "PARTE II: OFFICINE, MANIFATTURA E ARTIGIANATO",
        normativa_applicata: "D.Lgs. 81/08 Titolo III (Attrezzature di Lavoro), Titolo IX (Sostanze Pericolose), Titolo VIII Capo II (Rumore) e Capo III (Vibrazioni) [35-38].",
        premesse: "L'ambiente d'officina presenta criticità di natura traumatica severa (schiacciamento, cesoiamento), rischio chimico (inalazione o contatto con solventi, idrocarburi, oli esausti), nonché esposizione protratta a rumore impulsivo e continuo e vibrazioni sistema mano-braccio (HAV) [35, 37, 38].",
        metodologia: "Valutazione strumentale (fonometrie) per il rumore, confrontando i Livelli di Esposizione Giornaliera con i Valori di Azione (LEX > 80/85 dB(A)) [35]. Analisi del rischio chimico basata sulle Schede di Sicurezza (SDS) ai sensi dei Regolamenti REACH e CLP [39].",
        misure_obbligatorie: "Fornitura obbligatoria e controllo sull'uso dei Dispositivi di Protezione Individuale (DPI) di terza categoria (otoprotettori, guanti di derivazione nitrilica, calzature antinfortunistiche). Manutenzione e certificazione periodica dei sistemi di sollevamento (ponti sollevatori, paranchi) e degli impianti di aspirazione localizzata fumi/gas di scarico [38]."
    },

    "construction": {
        titolo: "PARTE II: EDILIZIA, IMPIANTISTICA E CANTIERI TEMPORANEI",
        normativa_applicata: "D.Lgs. 81/08 Titolo IV (Cantieri Temporanei o Mobili) [40-42]. Allegato XV (PSC/POS) [43, 44] e Allegato XXII (Pi.M.U.S.) [45].",
        premesse: "Il settore edile rientra tra le attività ad alto rischio a causa dell'estrema variabilità dell'ambiente di lavoro, delle gravi interferenze spaziali tra ditte esecutrici, della frequenza di lavorazioni in quota e dell'uso di macchine movimento terra [46].",
        metodologia: "La valutazione integra il DVR generale con il Piano Operativo di Sicurezza (POS), analizzando i rischi sito-specifici (Allegato XV) quali: caduta dall'alto, seppellimento in scavi, elettrocuzione, esposizione a polveri cancerogene (silice cristallina) [44, 47].",
        misure_obbligatorie: "Redazione tassativa del Pi.M.U.S. per il montaggio/smontaggio di opere provvisionali (ponteggi) [45]. Uso inderogabile di sistemi di arresto caduta (imbracature) ancorati a linee vita su coperture prive di parapetti collettivi. Abbattimento ad acqua delle polveri durante le demolizioni e uso di DPI respiratori (minimo P3) [46]. Nomina e coordinamento tra Committente, CSP e CSE (Art. 89-92) [40, 43]."
    }
};

// ══════════════════════════════════════════════════════════════════════
// 1. METODOLOGIA UNIVERSALE (ISPESL) - Da stampare nella PARTE I del DVR
// ══════════════════════════════════════════════════════════════════════

const DVRMetodologia = `
<div class="page-break"></div>
<h1>METODOLOGIA E CRITERI ADOTTATI PER LA VALUTAZIONE</h1>

<p>Tutte le attività finalizzate alla valutazione dei rischi ed alla redazione del presente Documento di Valutazione sono state svolte secondo criteri predefiniti derivati dalle <strong>"LINEE GUIDA per la valutazione ed il controllo dei rischi"</strong>, pubblicate dall'ISPESL e definite ed approvate dalle Regioni e Province autonome e dagli Istituti centrali.</p>

<h2>1. Fasi Operative del Processo Valutativo</h2>
<p>Il processo di identificazione e quantificazione si è articolato nelle seguenti fasi propedeutiche:</p>
<ul>
    <li><strong>Fase preliminare:</strong> Ricognizione di tutti gli ambienti di lavoro, analisi dei processi lavorativi ed organizzativi (incluse le attività di servizio come pulizie e manutenzione), e verifica della documentazione disponibile, inclusi dati desunti dal registro infortuni e denunce di malattie professionali.</li>
    <li><strong>Fase di valutazione:</strong> L'identificazione delle fonti di rischio è stata guidata dalle conoscenze disponibili su norme di legge e standard tecnici, nonché dall'esperienza e dal contributo di tutti i soggetti aziendali (Lavoratori, SPP, Medico Competente, RLS). La valutazione ha riguardato tutti i rischi cui potenzialmente sono esposti i lavoratori.</li>
</ul>

<h2>2. Quantificazione del Rischio (Matrice R = P x D)</h2>
<p>In assenza di misurazioni strumentali specifiche, la quantificazione del rischio è stata effettuata in termini analitici attraverso l'assegnazione di valori, su una scala da 1 a 4, per la <strong>Probabilità (P)</strong> del verificarsi di un evento dannoso e per la <strong>Gravità del Danno (D)</strong> atteso.</p>

<table class="matrix-table" style="width:100%; font-size:10pt;">
    <tr>
        <th style="width:50%; background-color:#f2f2f2;">Scala della Probabilità (P)</th>
        <th style="width:50%; background-color:#f2f2f2;">Scala del Danno (D)</th>
    </tr>
    <tr>
        <td><strong>4 - Altamente Probabile:</strong> Correlazione diretta tra mancanza rilevata e verificarsi del danno. Già verificatisi in azienda o situazioni simili.</td>
        <td><strong>4 - Gravissimo:</strong> Infortunio o episodio acuto con effetti letali o di invalidità totale.</td>
    </tr>
    <tr>
        <td><strong>3 - Probabile:</strong> La mancanza rilevata può provocare il danno; non suscita stupore in azienda.</td>
        <td><strong>3 - Grave:</strong> Infortunio o episodio acuto con effetti di invalidità parziale irreversibile.</td>
    </tr>
    <tr>
        <td><strong>2 - Poco Probabile:</strong> La mancanza rilevata può provocare danno solo per concomitanza di più eventi poco probabili.</td>
        <td><strong>2 - Medio:</strong> Infortunio o episodio acuto con inabilità reversibile.</td>
    </tr>
    <tr>
        <td><strong>1 - Improbabile:</strong> La mancanza rilevata può provocare danno solo per concomitanza di eventi eccezionali o indipendenti.</td>
        <td><strong>1 - Lieve:</strong> Infortunio o episodio acuto con inabilità rapidamente reversibile.</td>
    </tr>
</table>

<h2>3. Classificazione del Livello di Rischio e Azioni Conseguenti</h2>
<p>Definiti il danno e la probabilità, il rischio viene graduato mediante la formula <strong>R = P x D</strong>. Sulla base del valore ottenuto, il sistema definisce le priorità e la programmazione temporale degli interventi di protezione e prevenzione da adottare:</p>

<table class="matrix-table" style="width:100%; font-size:10pt;">
    <tr>
        <th>Valore R</th>
        <th>Fascia di Rischio</th>
        <th>Programmazione delle Misure di Prevenzione e Protezione da attuare</th>
    </tr>
    <tr>
        <td class="risk-high" style="background-color:#ff4d4d; color:white;"><strong>R &gt; 8</strong></td>
        <td><strong>INACCETTABILE</strong></td>
        <td>Azioni correttive indilazionabili. Sospensione temporanea dell'attività a rischio e realizzazione immediata degli interventi.</td>
    </tr>
    <tr>
        <td class="risk-med" style="background-color:#ffcc00;"><strong>4 &le; R &le; 8</strong></td>
        <td><strong>MEDIO</strong></td>
        <td>Azioni correttive necessarie da programmare con urgenza. Misure specifiche di prevenzione e protezione.</td>
    </tr>
    <tr>
        <td class="risk-low" style="background-color:#66cc66; color:white;"><strong>2 &le; R &le; 3</strong></td>
        <td><strong>BASSO</strong></td>
        <td>Azioni correttive e/o migliorative da programmare nel breve-medio termine.</td>
    </tr>
    <tr>
        <td style="background-color:#d4edda;"><strong>R = 1</strong></td>
        <td><strong>ACCETTABILE</strong></td>
        <td>Azioni migliorative da valutare in fase di programmazione. Norme igieniche generali.</td>
    </tr>
</table>

<h2>4. Definizioni di Riferimento</h2>
<p style="font-size: 9pt;">
<strong>Prevenzione:</strong> complesso delle disposizioni o misure necessarie per evitare o diminuire i rischi professionali (Art. 2, lett. n, D.Lgs. 81/08).<br>
<strong>Pericolo:</strong> proprietà o qualità intrinseca di un determinato fattore avente il potenziale di causare danni (Art. 2, lett. r, D.Lgs. 81/08).<br>
<strong>Rischio:</strong> probabilità di raggiungimento del livello potenziale di danno nelle condizioni di impiego o di esposizione ad un determinato fattore (Art. 2, lett. s, D.Lgs. 81/08).<br>
<strong>Valutazione dei rischi:</strong> valutazione globale e documentata di tutti i rischi per la salute e sicurezza dei lavoratori, finalizzata ad individuare le adeguate misure di prevenzione e di protezione e ad elaborare il programma delle misure atte a garantire il miglioramento nel tempo (Art. 2, lett. q, D.Lgs. 81/08).
</p>
`;

// ══════════════════════════════════════════════════════════════════════
// KNOWLEDGE BASE: DISPOSIZIONI TECNICHE E ALLEGATI D.LGS. 81/08 PER VERTICALE
// ══════════════════════════════════════════════════════════════════════

const DVRDisposizioniVerticali = {

    "comune": `
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Requisiti dei Luoghi di Lavoro e Segnaletica</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato IV e Allegati XXIV-XXXII</p>
            <p style="font-size: 10pt;">La struttura risponde ai requisiti minimi di stabilità, solidità, aerazione e illuminazione previsti dall'<strong>Allegato IV</strong>. Nei luoghi in cui si presentano rischi non altrimenti controllabili, è installata idonea segnaletica di sicurezza permanente (divieto, avvertimento, salvataggio e antincendio) rispondente alle prescrizioni cromatiche ed intrinseche stabilite dagli <strong>Allegati dal XXIV al XXXII</strong>.</p>
        </div>`,

    "dental": `
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Disposizioni su Agenti Biologici e Contenimento</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato XLVI e Allegato XLVII</p>
            <p style="font-size: 10pt;">In conformità all'<strong>Allegato XLVI</strong>, l'esposizione potenziale in ambito odontoiatrico è classificabile per agenti biologici appartenenti ai Gruppi 2 e 3 (es. Virus Epatitici HBV/HCV, HIV, Mycobacterium tuberculosis). Conseguentemente, sono attuate le misure di contenimento fisico e procedurale previste dall'<strong>Allegato XLVII</strong>, che includono superfici impermeabili e resistenti ai disinfettanti, procedure specifiche di disinfezione e sterilizzazione (autoclavi), e stoccaggio in sicurezza dei rifiuti a rischio infettivo.</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Uso dei Dispositivi di Protezione Individuale (DPI)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato VIII</p>
            <p style="font-size: 10pt;">L'impiego dei DPI è regolamentato dall'<strong>Allegato VIII</strong>. Il personale è dotato di guanti (con resistenza meccanica e chimica/biologica adeguata), dispositivi di protezione degli occhi e del viso (visiere paraschizzi, occhiali) e protezione delle vie respiratorie (facciali filtranti FFP2/FFP3) per la prevenzione del rischio inalatorio da aerosol generato da strumentazione rotante.</p>
        </div>`,

    "health": `
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Classificazione Agenti Biologici e DPI Sanitari</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato VIII e Allegato XLVI</p>
            <p style="font-size: 10pt;">Ai sensi dell'<strong>Allegato XLVI</strong>, l'attività sanitaria comporta potenziale esposizione a patogeni ematogeni e fluidi biologici. È fatto obbligo di applicare le misure di contenimento dell'<strong>Allegato XLVII</strong> e fornire dispositivi medici e DPI conformi allo schema dell'<strong>Allegato VIII</strong> (guanti, mascherine chirurgiche/filtranti, camici idrorepellenti).</p>
        </div>`,

    "beauty": `
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Esposizione a Radiazioni Ottiche Artificiali (ROA)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato XXXVII</p>
            <p style="font-size: 10pt;">In ottemperanza all'<strong>Allegato XXXVII</strong>, l'impiego di apparecchiature estetico-medicali quali Laser o Luce Pulsata (IPL) impone il rigoroso rispetto dei Valori Limite di Esposizione (VLE). È prescritta la limitazione dell'accesso alle cabine operative e la dotazione obbligatoria per gli operatori di occhiali protettivi filtranti calibrati sulle specifiche lunghezze d'onda emesse dai manipoli.</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Agenti Chimici e Cosmetici</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato XLI</p>
            <p style="font-size: 10pt;">La manipolazione di sostanze chimiche, solventi e preparati cosmetici è gestita previa acquisizione delle Schede di Dati di Sicurezza, con idonea ventilazione dei locali atta a prevenire la saturazione dell'aria da Composti Organici Volatili (COV).</p>
        </div>`,

    "construction": `
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Cantieri Temporanei o Mobili e Lavori in Quota</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato X, XV e XVIII</p>
            <p style="font-size: 10pt;">L'attività rientra tra i lavori edili definiti dall'<strong>Allegato X</strong>. È prescritta l'applicazione dei contenuti minimi dei Piani di Sicurezza (PSC e POS) di cui all'<strong>Allegato XV</strong>. Per la viabilità e l'allestimento dei ponteggi si applicano inderogabilmente le disposizioni dell'<strong>Allegato XVIII</strong>.</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Verifiche Opere Provvisionali (Ponteggi Metallici)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato XIX</p>
            <p style="font-size: 10pt;">Come imposto dall'<strong>Allegato XIX</strong>, gli elementi di ponteggio metallico fisso sono soggetti a verifiche prima di ogni montaggio (controllo dello stato di conservazione contro la corrosione, linearità, verticalità dei montanti, spinotti e giunti). L'impiego segue rigidamente il libretto di autorizzazione ministeriale e il Pi.M.U.S.</p>
        </div>`,

    "workshop": `
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Verifiche e Uso Attrezzature di Lavoro</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato VI e Allegato VII</p>
            <p style="font-size: 10pt;">Le macchine utensili, i ponti sollevatori e gli apparecchi in pressione sono assoggettati alle disposizioni sull'uso dell'<strong>Allegato VI</strong>. Gli apparecchi di sollevamento materiali (portata > 200Kg) e recipienti a pressione sono sottoposti a verifiche periodiche (prima installazione e successive) secondo le cadenze temporali rigorosamente fissate dall'<strong>Allegato VII</strong>.</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Agenti Fisici (Rumore e Vibrazioni)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato XXXV</p>
            <p style="font-size: 10pt;">In presenza di macchinari rumorosi o utensili vibranti, la valutazione è condotta conformemente ai Valori di Azione e ai Valori Limite di Esposizione stabiliti dall'<strong>Allegato XXXV</strong>, fornendo dispositivi otoprotettori e guanti antivibrazione ove tecnicamente ed organizzativamente impossibile eliminare il rischio alla fonte.</p>
        </div>`,

    "professional": `
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Attrezzature Munite di Videoterminali (VDT)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato XXXIV</p>
            <p style="font-size: 10pt;">Per il personale impiegatizio e amministrativo, le postazioni informatiche rispettano i requisiti ergonomici minimi dettati dall'<strong>Allegato XXXIV</strong>. Nello specifico: sedili di lavoro stabili e regolabili, schermi orientabili e privi di sfarfallii, tastiere svincolate dal monitor, e un'illuminazione ambientale (naturale e artificiale) idonea ad evitare riflessi e abbagliamenti sullo schermo.</p>
        </div>`,

    "food": `
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Movimentazione Manuale dei Carichi</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato XXXIII</p>
            <p style="font-size: 10pt;">Il sollevamento, lo spostamento e il posizionamento di merci, derrate e fusti sono valutati analizzando i fattori di rischio (caratteristiche del carico, sforzo fisico richiesto, caratteristiche dell'ambiente di lavoro) come definiti nell'<strong>Allegato XXXIII</strong>. Sono previsti ausili meccanici o la movimentazione in team per carichi superiori ai limiti tabellari ergonomici (metodo NIOSH).</p>
        </div>`,

    "hospitality": `
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Movimentazione Manuale e Rischio Microclima</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato IV e Allegato XXXIII</p>
            <p style="font-size: 10pt;">Le attività di riassetto e facchinaggio rispettano l'<strong>Allegato XXXIII</strong> (Movimentazione Carichi). L'infrastruttura alberghiera garantisce i requisiti di aerazione e microclima, associati alla sanificazione periodica dei filtri degli impianti di condizionamento (<strong>Allegato IV</strong>) ai fini della prevenzione del rischio legionellosi.</p>
        </div>`,

    "generic": `
        <div style="margin-bottom: 15px; border-left: 4px solid #0059b3; padding-left: 10px; background-color: #f4f8fc;">
            <h4 style="margin-bottom: 5px; color: #003366;">Uso Dispositivi di Protezione Individuale e Segnaletica</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Allegato VIII e XXIV</p>
            <p style="font-size: 10pt;">Ove i rischi non possano essere evitati mediante misure tecniche collettive, sono impiegati DPI rispondenti alle caratteristiche dell'<strong>Allegato VIII</strong>. L'azienda mantiene la segnaletica di sicurezza aziendale in stato di perfetta efficienza secondo l'<strong>Allegato XXIV</strong>.</p>
        </div>`
};

// ══════════════════════════════════════════════════════════════════════
// KNOWLEDGE BASE: DECRETI ATTUATIVI E ACCORDI STATO-REGIONI (FORMAZIONE E VERIFICHE)
// Fonte: 03TU81Attuazione.pdf - Iniezione dinamica per verticale
// ══════════════════════════════════════════════════════════════════════

const DVRDecretiAttuativi = {

    "comune": `
        <div style="margin-bottom: 15px; border-left: 4px solid #cc5200; padding-left: 10px; background-color: #fffaf5;">
            <h4 style="margin-bottom: 5px; color: #993d00;">Formazione Generale e Specifica dei Lavoratori</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: Accordo Stato-Regioni 21 dicembre 2011 (ex Art. 37 D.Lgs. 81/08)</p>
            <p style="font-size: 10pt;">La formazione in materia di salute e sicurezza dei lavoratori, preposti e dirigenti è erogata in rigorosa ottemperanza all'Accordo Stato-Regioni del 21/12/2011 [1, 2]. Il percorso formativo prevede un modulo di Formazione Generale (4 ore) integrato da un modulo di Formazione Specifica la cui durata è modulata in base all'indice di rischio del settore ATECO aziendale [3, 4], con aggiornamento quinquennale [5].</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #cc5200; padding-left: 10px; background-color: #fffaf5;">
            <h4 style="margin-bottom: 5px; color: #993d00;">Gestione della Sicurezza Antincendio in Esercizio</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.M. 2 settembre 2021 (Criteri gestione luoghi di lavoro)</p>
            <p style="font-size: 10pt;">L'azienda organizza la Gestione della Sicurezza Antincendio (GSA) attuando il controllo periodico e la manutenzione di impianti, attrezzature e sistemi di sicurezza, conformemente al D.M. 2 settembre 2021 [6, 7]. Gli addetti alla prevenzione incendi e lotta antincendio ricevono specifica formazione teorico-pratica commisurata al livello di rischio del luogo di lavoro [8, 9].</p>
        </div>`,

    "dental": `
        <div style="margin-bottom: 15px; border-left: 4px solid #cc5200; padding-left: 10px; background-color: #fffaf5;">
            <h4 style="margin-bottom: 5px; color: #993d00;">Verifiche Periodiche Attrezzature a Pressione (Autoclavi)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.I. 11 aprile 2011 (Attuazione Art. 71, comma 11)</p>
            <p style="font-size: 10pt;">Le autoclavi di sterilizzazione e gli apparecchi in pressione (Gruppo GVR) in dotazione allo studio, rientranti nell'Allegato VII del D.Lgs. 81/08, sono sottoposti alla disciplina delle verifiche periodiche [10, 11]. Il datore di lavoro provvede a richiedere la prima verifica all'INAIL [12] e le successive verifiche periodiche ai soggetti pubblici o privati abilitati (ASL/ARPA o Organismi di Ispezione autorizzati) [13, 14].</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #cc5200; padding-left: 10px; background-color: #fffaf5;">
            <h4 style="margin-bottom: 5px; color: #993d00;">Formazione Settore Sanitario (Rischio Alto)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: Accordo Stato-Regioni 21 dicembre 2011</p>
            <p style="font-size: 10pt;">Il personale esposto a rischio clinico e biologico (es. Odontoiatri, Igienisti, ASO) è assoggettato al regime di Formazione Specifica per la classe di "Rischio Alto" (12 ore aggiuntive) come classificato nella tabella ATECO (Sanità e assistenza sociale - Cod. 86) dell'Accordo Stato-Regioni [3]. È vietato l'utilizzo della modalità e-learning per la formazione specifica [4, 15].</p>
        </div>`,

    "construction": `
        <div style="margin-bottom: 15px; border-left: 4px solid #cc5200; padding-left: 10px; background-color: #fffaf5;">
            <h4 style="margin-bottom: 5px; color: #993d00;">Abilitazione Specifica per Operatori di Macchine Complesse</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: Accordo Stato-Regioni 22 febbraio 2012</p>
            <p style="font-size: 10pt;">In attuazione dell'art. 73, comma 5 del D.Lgs. 81/08, l'utilizzo di specifiche attrezzature di lavoro (es. Piattaforme di Lavoro Elevabili - PLE, gru su autocarro, macchine movimento terra, carrelli elevatori telescopici) è riservato esclusivamente a lavoratori in possesso di specifica abilitazione [16, 17]. Tale abilitazione si consegue mediante corsi di formazione teorico-pratica erogati da soggetti accreditati [18, 19].</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #cc5200; padding-left: 10px; background-color: #fffaf5;">
            <h4 style="margin-bottom: 5px; color: #993d00;">Formazione Lavori in Quota e Sistemi di Accesso su Fune</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: Allegato XXI D.Lgs. 81/08 e Accordo Stato-Regioni</p>
            <p style="font-size: 10pt;">Il personale addetto ai lavori in quota e all'impiego di sistemi di accesso e posizionamento mediante funi è soggetto a un percorso formativo specialistico (Modulo Base teorico-pratico e Moduli Specifici per siti naturali/artificiali), strutturato per garantire l'apprendimento delle tecniche di posizionamento, calata, e procedure di salvataggio/emergenza [20-22].</p>
        </div>`,

    "workshop": `
        <div style="margin-bottom: 15px; border-left: 4px solid #cc5200; padding-left: 10px; background-color: #fffaf5;">
            <h4 style="margin-bottom: 5px; color: #993d00;">Abilitazione Conduzione Carrelli Elevatori</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: Accordo Stato-Regioni 22 febbraio 2012</p>
            <p style="font-size: 10pt;">Ai sensi dell'Accordo Stato-Regioni del 22/02/2012, i lavoratori incaricati della conduzione di carrelli elevatori semoventi con conducente a bordo devono conseguire specifica abilitazione tramite corso teorico-pratico (durata da 12 a 20 ore a seconda della tipologia: frontali, a braccio telescopico, rotativi) e superare la relativa prova di valutazione [23, 24].</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #cc5200; padding-left: 10px; background-color: #fffaf5;">
            <h4 style="margin-bottom: 5px; color: #993d00;">Verifiche Periodiche Ponti Sollevatori e Apparecchi di Sollevamento</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.I. 11 aprile 2011</p>
            <p style="font-size: 10pt;">I ponti sollevatori per veicoli e gli apparecchi di sollevamento materiali con portata superiore a 200 kg (Gruppo SP e SC) sono soggetti alle verifiche periodiche [11, 25]. La prova di funzionamento e la verifica di integrità sono eseguite da soggetti abilitati per accertare il mantenimento dei requisiti di sicurezza previsti dal fabbricante [26].</p>
        </div>`,

    "generic": `
        <div style="margin-bottom: 15px; border-left: 4px solid #cc5200; padding-left: 10px; background-color: #fffaf5;">
            <h4 style="margin-bottom: 5px; color: #993d00;">Valutazione dello Stress Lavoro-Correlato</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: Lettera Circolare 18 novembre 2010 (ex Art. 28, c. 1-bis D.Lgs. 81/08)</p>
            <p style="font-size: 10pt;">L'azienda adempie all'obbligo di valutazione del rischio da stress lavoro-correlato applicando il percorso metodologico approvato dalla Commissione Consultiva Permanente [27]. La valutazione analizza eventi sentinella (infortuni, assenze) e fattori di contesto e di contenuto del lavoro, al fine di individuare eventuali necessità di azioni correttive di natura organizzativa.</p>
        </div>`
};

// ══════════════════════════════════════════════════════════════════════
// KNOWLEDGE BASE: NORMATIVE SPECIALI E ADEMPIMENTI COMPLEMENTARI
// Fonte: 04TU81Speciali.pdf - Iniezione per settori con compliance estesa
// La prima definizione (ridotta) è stata rimossa per evitare il SyntaxError di ridefinizione.
// ══════════════════════════════════════════════════════════════════════
// KNOWLEDGE BASE: NORMATIVE SPECIALI E ADEMPIMENTI COMPLEMENTARI (GDPR / AMBIENTE)
// Pattern: Open/Closed Principle - Estensione orizzontale per tutti i verticali
// ══════════════════════════════════════════════════════════════════════

const DVRNormeSpeciali = {

    "dental": `
        <div class="page-break"></div>
        <h1>3. ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI</h1>
        <p>Il presente capitolo integra il documento di valutazione con gli adempimenti cogenti in materia ambientale e di protezione dei dati, strettamente connessi all'esercizio dell'attività sanitaria.</p>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Gestione Rifiuti Speciali (C.E.R.) e Separatore di Amalgama</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 152/2006 e Regolamento (UE) 2017/852</p>
            <p style="font-size: 10pt;">Ai fini della tutela ambientale, lo studio è dotato di separatore di amalgama con livello di ritenzione non inferiore al 95%. È formalizzato un contratto con azienda autorizzata per il conferimento dei rifiuti sanitari a rischio infettivo (taglienti, aghi, materiale biologico) e dei residui di amalgama (C.E.R. 18.01.10). La tracciabilità è garantita dalla compilazione dei Formulari di Identificazione Rifiuti (FIR) e, ove applicabile, dall'iscrizione al portale RENTRI.</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Protezione dei Dati Personali e Sanitari (GDPR)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: Regolamento UE 2016/679 (GDPR) - Art. 9</p>
            <p style="font-size: 10pt;">Trattando dati rientranti in categorie particolari (dati sanitari, radiografie 3D, piani di cura), lo studio implementa rigide misure tecniche e organizzative. L'acquisizione dei consensi informati avviene tramite procedure sicure (es. firma grafometrica/digitale su tablet), con archiviazione crittografata (es. Cloud o Server locale protetto) e profilazione degli accessi (RBAC) limitata al solo personale sanitario e amministrativo autorizzato.</p>
        </div>`,

    "health": `
        <div class="page-break"></div>
        <h1>3. ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI</h1>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Tracciabilità Rifiuti Sanitari Pericolosi</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 152/2006 (Testo Unico Ambientale) e sistema RENTRI</p>
            <p style="font-size: 10pt;">La struttura assicura la segregazione alla fonte dei rifiuti sanitari pericolosi a rischio infettivo (es. C.E.R. 18.01.03*), stoccandoli in appositi contenitori rigidi omologati (halipack). Lo smaltimento avviene tramite ditte specializzate con tenuta rigorosa dei registri di carico/scarico e dei FIR, garantendo il rispetto dei tempi massimi di deposito temporaneo.</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Privacy Pazienti e Gestione Referti (GDPR)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: Regolamento UE 2016/679 (GDPR) - Art. 9</p>
            <p style="font-size: 10pt;">La gestione delle cartelle cliniche e delle refertazioni mediche soggiace a stringenti protocolli di Data Protection. Il sistema informatico prevede backup ridondati, misure anti-ransomware e segregazione logica dei database per impedire accessi non autorizzati e Data Breach, in conformità alle direttive del Garante Privacy in ambito sanitario.</p>
        </div>`,

    "beauty": `
        <div class="page-break"></div>
        <h1>3. ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI</h1>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Smaltimento Rifiuti Taglienti e Materiale Contaminato</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 152/2006</p>
            <p style="font-size: 10pt;">In relazione alle pratiche estetiche che prevedono l'uso di taglienti monouso (aghi per trucco permanente, sgorbie, lame) o materiale contaminato da fluidi corporei, il centro si dota di contenitori per rifiuti speciali e provvede allo smaltimento documentato tramite ditta autorizzata, precludendo l'immissione di tali materiali nel circuito dei rifiuti urbani.</p>
        </div>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Privacy e Trattamento Dati Sensibili della Clientela</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: Regolamento UE 2016/679 (GDPR)</p>
            <p style="font-size: 10pt;">La compilazione di schede anamnestiche volte ad individuare allergie, incompatibilità a trattamenti o pregresse patologie dermatologiche configura un trattamento di dati relativi alla salute. L'azienda fa sottoscrivere specifica informativa privacy, garantendo che tali dati non siano utilizzati per finalità di marketing aggressivo senza separato ed esplicito consenso.</p>
        </div>`,

    "hospitality": `
        <div class="page-break"></div>
        <h1>3. ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI</h1>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Sicurezza Informatica, Privacy Ospiti e Videosorveglianza</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: GDPR 2016/679, T.U.L.P.S. e Art. 4 Statuto dei Lavoratori</p>
            <p style="font-size: 10pt;">La struttura ricettiva processa quotidianamente moli elevate di dati identificativi e finanziari degli ospiti, trasmessi anche alle Autorità di Pubblica Sicurezza (Portale Alloggiati). Il sistema gestionale e la rete Wi-Fi sono segregati per prevenire intrusioni. L'eventuale installazione di impianti di videosorveglianza nelle aree comuni è conforme all'Art. 4 della L. 300/1970 (Accordo Sindacale o Autorizzazione INL), con idonea cartellonistica e cancellazione delle immagini entro 24/48 ore.</p>
        </div>`,

    "food": `
        <div class="page-break"></div>
        <h1>3. ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI</h1>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Smaltimento Oli Esausti e Sottoprodotti di Origine Animale (SOA)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 152/2006 e Regolamento (CE) 1069/2009</p>
            <p style="font-size: 10pt;">L'azienda osserva le disposizioni in materia di tutela delle acque e dell'ambiente. È fatto assoluto divieto di scarico in fognatura degli oli e grassi vegetali/animali esausti (C.E.R. 20.01.25), i quali vengono stoccati in fusti stagni e conferiti al Consorzio Obbligatorio (CONOE) tramite aziende specializzate. Gli scarti di origine animale sono parimenti gestiti secondo le direttive sanitarie comunitarie.</p>
        </div>`,

    "workshop": `
        <div class="page-break"></div>
        <h1>3. ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI</h1>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Impatto Ambientale e RENTRI (Gestione Rifiuti Pericolosi)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 152/2006 e normative Sistema RENTRI</p>
            <p style="font-size: 10pt;">L'officina/sito produttivo genera rifiuti classificati come speciali pericolosi (oli esausti, solventi, batterie, filtri). L'azienda adotta una rigorosa procedura di deposito temporaneo su bacini di contenimento sversamenti. La tracciabilità è digitalizzata e garantita dall'iscrizione obbligatoria al portale ministeriale RENTRI, con compilazione accurata dei registri di carico/scarico e conservazione dei FIR.</p>
        </div>`,

    "construction": `
        <div class="page-break"></div>
        <h1>3. ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI</h1>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Gestione Terre e Rocce da Scavo e Macerie</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: DPR 120/2017 e D.Lgs. 152/2006</p>
            <p style="font-size: 10pt;">Le attività di demolizione e scavo prevedono una rigorosa classificazione del materiale di risulta. L'azienda predispone il Piano di Utilizzo delle terre e rocce da scavo e assicura il corretto conferimento dei materiali inerti in impianti di recupero o discarica autorizzata, prevenendo reati legati allo smaltimento abusivo di rifiuti edili e all'inquinamento delle falde acquifere.</p>
        </div>`,

    "generic": `
        <div class="page-break"></div>
        <h1>3. ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI</h1>
        <div style="margin-bottom: 15px; border-left: 4px solid #008080; padding-left: 10px; background-color: #f0fdf4;">
            <h4 style="margin-bottom: 5px; color: #004d40;">Sicurezza Informatica e Videosorveglianza nei luoghi di lavoro</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: Regolamento UE 2016/679 (GDPR) e Art. 4 L. 300/1970</p>
            <p style="font-size: 10pt;">Il Datore di Lavoro garantisce la protezione dei dati personali dei dipendenti e dei clienti da accessi illeciti e perdita accidentale (Data Breach) mediante policy informatiche e backup. Qualora ricorrano esigenze organizzative, produttive o di tutela del patrimonio che richiedano l'installazione di impianti audiovisivi (telecamere), l'azienda vi provvede esclusivamente a seguito di accordo collettivo con la RSA/RSU o previa autorizzazione dell'Ispettorato Territoriale del Lavoro (INL).</p>
        </div>`
};

// ══════════════════════════════════════════════════════════════════════
// KNOWLEDGE BASE: INTRODUZIONE E PRINCIPI COMUNI (TITOLO I, D.LGS. 81/08)
// Fonte: 01TU81Introduzione.pdf - Iniezione del perimetro legale aziendale
// ══════════════════════════════════════════════════════════════════════

const DVRIntroduzioneVerticali = {

    "comune": `
        <div class="page-break"></div>
        <h1>1. INTRODUZIONE E CAMPO DI APPLICAZIONE (TITOLO I)</h1>
        <p>Il presente Documento di Valutazione dei Rischi (DVR) costituisce l'adempimento dell'obbligo non delegabile del Datore di Lavoro, sancito dall'Art. 17, comma 1, lett. a) del D.Lgs. 81/2008. Esso rappresenta lo strumento operativo di pianificazione degli interventi aziendali e di prevenzione per la tutela della salute e sicurezza dei lavoratori, elaborato in ottemperanza ai Principi Comuni dettati dal Titolo I del Testo Unico.</p>
        <div style="margin-bottom: 15px; border-left: 4px solid #4CAF50; padding-left: 10px; background-color: #f1f8e9;">
            <h4 style="margin-bottom: 5px; color: #2E7D32;">Misure Generali di Tutela e Modelli Organizzativi</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Artt. 15, 28 e 30</p>
            <p style="font-size: 10pt;">La valutazione abbraccia tutti i rischi associati all'attività lavorativa, nel rispetto delle Misure Generali di Tutela (Art. 15). Il documento formalizza l'organigramma della sicurezza, individuando i ruoli dell'organizzazione aziendale (Datore di Lavoro, RSPP, RLS, Medico Competente, Preposti e Lavoratori) che debbono provvedere all'attuazione delle misure preventive, orientando l'azienda verso l'adozione di buone prassi e di un sistema di gestione della sicurezza (SGSL) conforme all'Art. 30.</p>
        </div>`,

    "dental": `
        <div style="margin-bottom: 15px; border-left: 4px solid #4CAF50; padding-left: 10px; background-color: #f1f8e9;">
            <h4 style="margin-bottom: 5px; color: #2E7D32;">Gestione delle Interferenze in Ambito Sanitario (DUVRI)</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Art. 26</p>
            <p style="font-size: 10pt;">Considerata la natura sanitaria della struttura, l'accesso di ditte esterne (es. manutentori di apparecchiature elettromedicali, servizi di pulizia, ritiro rifiuti speciali) è regolamentato dall'Art. 26. Il Datore di Lavoro committente promuove la cooperazione e il coordinamento, verificando l'idoneità tecnico-professionale degli appaltatori ed elaborando, ove ricorrano i presupposti normativi, il Documento Unico di Valutazione dei Rischi da Interferenze (DUVRI) per l'eliminazione o mitigazione dei rischi derivanti dalle attività congiunte.</p>
        </div>`,

    "health": `
        <div style="margin-bottom: 15px; border-left: 4px solid #4CAF50; padding-left: 10px; background-color: #f1f8e9;">
            <h4 style="margin-bottom: 5px; color: #2E7D32;">Perimetro di Applicazione e Tutela di Terzi</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Artt. 2 e 3</p>
            <p style="font-size: 10pt;">Il presente documento è applicato alla struttura polispecialistica in qualità di "Luogo di Lavoro" aperto all'utenza. Le misure di tutela analizzate nel presente DVR, pur essendo formalmente rivolte ai lavoratori subordinati o ad essi equiparati (tirocinanti, specializzandi), determinano una positiva e fondamentale ricaduta in termini di igiene e sicurezza anche nei confronti dei pazienti e degli avventori presenti all'interno dell'Azienda Sanitaria.</p>
        </div>`,

    "construction": `
        <div style="margin-bottom: 15px; border-left: 4px solid #4CAF50; padding-left: 10px; background-color: #f1f8e9;">
            <h4 style="margin-bottom: 5px; color: #2E7D32;">Idoneità Tecnico-Professionale e Appalti nei Cantieri</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Art. 26 e Art. 90, comma 9</p>
            <p style="font-size: 10pt;">Il settore delle costruzioni è caratterizzato da elevata interferenza spaziale e temporale. In base ai principi del Titolo I e alle direttive del Titolo IV, l'azienda garantisce la verifica rigorosa dell'idoneità tecnico-professionale delle imprese subappaltatrici e dei lavoratori autonomi. L'azienda si impegna altresì ad ottemperare alla stesura dei Piani Operativi di Sicurezza (POS) come piani di dettaglio della presente valutazione generale, armonizzandoli con il Piano di Sicurezza e Coordinamento (PSC) redatto dal Committente.</p>
        </div>`,

    "workshop": `
        <div style="margin-bottom: 15px; border-left: 4px solid #4CAF50; padding-left: 10px; background-color: #f1f8e9;">
            <h4 style="margin-bottom: 5px; color: #2E7D32;">Mantenimento dell'Efficienza di Macchine e Impianti</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Art. 15 e Art. 30</p>
            <p style="font-size: 10pt;">Nella declinazione delle Misure Generali di Tutela (Art. 15), l'azienda a vocazione artigianale o manifatturiera assicura la regolare manutenzione di ambienti, macchine ed impianti. La direzione aziendale persegue l'attuazione di un modello di organizzazione (Art. 30) finalizzato a documentare e storicizzare l'avvenuta effettuazione delle attività di vigilanza sul rispetto delle procedure di sicurezza e dell'utilizzo dei DPI da parte degli operatori.</p>
        </div>`,

    "generic": `
        <div style="margin-bottom: 15px; border-left: 4px solid #4CAF50; padding-left: 10px; background-color: #f1f8e9;">
            <h4 style="margin-bottom: 5px; color: #2E7D32;">Appalti di Servizi, Forniture e DUVRI</h4>
            <p style="font-size: 9pt; font-style: italic; margin-top: 0;">Rif: D.Lgs. 81/08 - Art. 26</p>
            <p style="font-size: 10pt;">Nell'eventualità di affidamento di lavori, servizi e forniture all'interno dell'azienda (es. pulizie, manutenzioni ordinarie), il Datore di Lavoro provvede a fornire alle ditte appaltatrici dettagliate informazioni sui rischi specifici presenti negli ambienti in cui sono destinate ad operare. Tali attività di coordinamento sono formalizzate, laddove ne sussistano i presupposti normativi, nel Documento Unico di Valutazione dei Rischi da Interferenze (DUVRI).</p>
        </div>`
};

// [INIZIO SCRIPT N8N: FRONTESPIZIO]
function buildFullDVRDocument(tenant, vertical) {
    if (!tenant) tenant = {};
    
    // Rileva tutti i verticali attivi, normalizzandoli se necessario
    const activeVerticals = (tenant.activeVerticals && tenant.activeVerticals.length > 0)
        ? tenant.activeVerticals.map(v => {
            const k = (v || '').toLowerCase().trim();
            if (k === 'common' || k === 'comune') return 'comune';
            if (k === 'dental' || k === 'dentale') return 'dental';
            if (k === 'health' || k === 'sanita' || k === 'sanità') return 'health';
            if (k === 'beauty' || k === 'estetica') return 'beauty';
            if (k === 'food' || k === 'ristorazione') return 'food';
            if (k === 'hospitality' || k === 'ospitalita' || k === 'ospitalità') return 'hospitality';
            if (k === 'professional' || k === 'ufficio' || k === 'uffici') return 'professional';
            if (k === 'workshop' || k === 'officina' || k === 'artigianato') return 'workshop';
            if (k === 'construction' || k === 'cantiere' || k === 'edilizia') return 'construction';
            return 'generic';
        })
        : [vertical ? vertical : 'generic'];
    
    const uniqueVerticals = [...new Set(activeVerticals)].filter(v => v !== 'comune');
    const verticalsToProcess = uniqueVerticals.length > 0 ? uniqueVerticals : ['generic'];

    const chunkArray = (arr, size) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    let htmlDocument = typeof buildCoverAndDisclaimer === 'function' ? buildCoverAndDisclaimer(tenant) : '';

    // =========================================================================
    // 1. INTRODUZIONE LEGALE (TITOLO I - Principi Comuni) - IL NUOVO MODULO
    // =========================================================================
    htmlDocument += (DVRIntroduzioneVerticali && DVRIntroduzioneVerticali['comune']) || '';

    // Aggiungiamo le specifiche sull'Art. 26 (Interferenze) o Art. 30 (Modelli) per ciascun vertical senza page-break
    const printedIntros = new Set();
    verticalsToProcess.forEach(v => {
        let keyToPrint = v;
        if (DVRIntroduzioneVerticali) {
            if (!DVRIntroduzioneVerticali[v]) {
                if (['professional', 'hospitality', 'beauty', 'food'].includes(v)) {
                    keyToPrint = 'generic';
                } else {
                    return;
                }
            }
            if (!printedIntros.has(keyToPrint)) {
                printedIntros.add(keyToPrint);
                htmlDocument += DVRIntroduzioneVerticali[keyToPrint].replace(/<div class="page-break"><\/div>/g, '');
            }
        }
    });

    // =========================================================================
    // 2. METODOLOGIA E CRITERI (Linee Guida ISPESL)
    // =========================================================================
    htmlDocument += DVRMetodologia || '';

    // =========================================================================
    // 3. NORMATIVE SPECIFICHE PER IL VERTICALE (La tua "Dottrina" INAIL)
    // =========================================================================
    const boilerplatesToPrint = [];
    const printedBoilerplates = new Set();
    verticalsToProcess.forEach(v => {
        if (typeof DVRBoilerplates !== 'undefined') {
            const b = DVRBoilerplates[v] || DVRBoilerplates['generic'];
            if (b && !printedBoilerplates.has(b.titolo)) {
                printedBoilerplates.add(b.titolo);
                boilerplatesToPrint.push(b);
            }
        }
    });

    const bpChunks = chunkArray(boilerplatesToPrint, 2);
    bpChunks.forEach(chunk => {
        htmlDocument += `<div class="page-break"></div>`;
        chunk.forEach(b => {
            htmlDocument += `
                <div style="margin-bottom: 20px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 10px;">
                    <h2 style="font-size: 11pt; color: #003366; margin-top: 0; margin-bottom: 6px; border-left: 3px solid #0059b3; padding-left: 8px;">${b.titolo}</h2>
                    <p style="margin: 3px 0; font-size: 8.5pt;"><strong>Normativa Applicata:</strong> ${b.normativa_applicata || ''}</p>
                    <p style="margin: 3px 0; font-size: 8.5pt;"><strong>Premesse:</strong> ${b.premesse || ''}</p>
                    <p style="margin: 3px 0; font-size: 8.5pt;"><strong>Metodologia:</strong> ${b.metodologia || ''}</p>
                    <p style="margin: 3px 0; font-size: 8.5pt;"><strong>Misure Obbligatorie:</strong> ${b.misure_obbligatorie || ''}</p>
                </div>`;
        });
    });

    // =========================================================================
    // 4. DISPOSIZIONI TECNICHE STRUTTURALI (Allegati D.Lgs 81/08)
    // =========================================================================
    if (typeof DVRDisposizioniVerticali !== 'undefined') {
        const disposizioniToPrint = [];
        const printedDisposizioni = new Set();
        verticalsToProcess.forEach(v => {
            const keyToPrint = DVRDisposizioniVerticali[v] ? v : 'generic';
            if (!printedDisposizioni.has(keyToPrint)) {
                printedDisposizioni.add(keyToPrint);
                disposizioniToPrint.push(DVRDisposizioniVerticali[keyToPrint]);
            }
        });

        const dispList = [
            DVRDisposizioniVerticali['comune'],
            ...disposizioniToPrint
        ];

        const dispChunks = chunkArray(dispList, 2);
        dispChunks.forEach(chunk => {
            htmlDocument += `<div class="page-break"></div><h1>2.3 QUADRO NORMATIVO TECNICO DI RIFERIMENTO (Allegati D.Lgs. 81/08)</h1>`;
            chunk.forEach(html => {
                htmlDocument += html.replace(/<div class="page-break"><\/div>/g, '');
            });
        });
    }

    // =========================================================================
    // 5. DECRETI ATTUATIVI E FORMAZIONE
    // =========================================================================
    if (typeof DVRDecretiAttuativi !== 'undefined') {
        const decretiToPrint = [];
        const printedDecreti = new Set();
        verticalsToProcess.forEach(v => {
            if (DVRDecretiAttuativi[v]) {
                const keyToPrint = v;
                if (!printedDecreti.has(keyToPrint)) {
                    printedDecreti.add(keyToPrint);
                    decretiToPrint.push(DVRDecretiAttuativi[keyToPrint]);
                }
            }
        });

        const decList = [
            DVRDecretiAttuativi['comune'],
            ...decretiToPrint
        ];

        const decChunks = chunkArray(decList, 2);
        decChunks.forEach(chunk => {
            htmlDocument += `<div class="page-break"></div><h1>DECRETI ATTUATIVI E ACCORDI STATO-REGIONI</h1>`;
            chunk.forEach(html => {
                htmlDocument += html.replace(/<div class="page-break"><\/div>/g, '');
            });
        });
    }

    // =========================================================================
    // 6. NORMATIVE SPECIALI (GDPR, Rifiuti C.E.R.)
    // =========================================================================
    if (typeof DVRNormeSpeciali !== 'undefined') {
        const specialiToPrint = [];
        const printedSpeciali = new Set();
        verticalsToProcess.forEach(v => {
            if (DVRNormeSpeciali[v]) {
                const keyToPrint = v;
                if (!printedSpeciali.has(keyToPrint)) {
                    printedSpeciali.add(keyToPrint);
                    specialiToPrint.push(DVRNormeSpeciali[keyToPrint]);
                }
            }
        });

        const specChunks = chunkArray(specialiToPrint, 2);
        specChunks.forEach(chunk => {
            htmlDocument += `<div class="page-break"></div><h1>ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI</h1>`;
            chunk.forEach(html => {
                htmlDocument += html.replace(/<div class="page-break"><\/div>/g, '')
                                    .replace(/<h1>3. ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI<\/h1>/g, '')
                                    .replace(/<h1>ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI<\/h1>/g, '');
            });
        });
    }

    // =========================================================================
    // 7. ESECUZIONE: VALUTAZIONE RISCHI E BLUEPRINT CALCOLATI (CICLO FOR)
    // =========================================================================
    htmlDocument += `<h1>3. VALUTAZIONE RISCHI INFRASTRUTTURALI E COMUNI</h1>`;
    // ... (stampa json.rischi_comuni)

    htmlDocument += `<h1>4. SCHEDE DI VALUTAZIONE SPECIFICA E PROCEDURE OPERATIVE</h1>`;
    // ... (ciclo for sui json.catalog_active per stampare R=PxD e giustificazioni LLM)

    return [{ json: { html_to_pdf: htmlDocument } }];
}

// Esporta le costanti per ambienti modulo (Node.js/CommonJS)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DVRBoilerplates,
        DVRMetodologia,
        DVRDisposizioniVerticali,
        DVRDecretiAttuativi,
        DVRNormeSpeciali,
        DVRIntroduzioneVerticali,
        buildFullDVRDocument
    };
}