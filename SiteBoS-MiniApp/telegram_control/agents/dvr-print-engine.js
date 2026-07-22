const dvrCommonStyles = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
        
        body {
            font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
            color: #0f172a;
            line-height: 1.5;
            font-size: 9.5pt;
            background: #fff;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
        }
        
        .page {
            width: 210mm;
            height: 297mm;
            padding: 20mm 18mm;
            box-sizing: border-box;
            background: #fff;
            position: relative;
            page-break-after: always;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        /* Cover page style */
        .cover {
            justify-content: space-between;
            padding: 24mm 18mm;
        }
        
        .cover-header {
            text-align: center;
        }
        
        .cover-title {
            font-size: 24pt;
            font-weight: 900;
            letter-spacing: -0.03em;
            line-height: 1.15;
            color: #0f172a;
            margin-top: 50px;
            text-transform: uppercase;
        }
        
        .cover-subtitle {
            font-size: 12pt;
            color: #475569;
            margin-top: 20px;
            font-weight: 500;
            line-height: 1.5;
            border-top: 2px solid #0f172a;
            padding-top: 20px;
        }

        /* Common Headers & Text */
        .header-doc {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            border-bottom: 2px solid #0f172a;
            padding-bottom: 12px;
            margin-bottom: 24px;
        }
        
        .header-doc h2 {
            font-size: 11pt;
            font-weight: 900;
            text-transform: uppercase;
            margin: 0;
            letter-spacing: 0.05em;
            color: #0f172a;
        }
        
        .header-doc span {
            font-size: 8pt;
            color: #64748b;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .chapter-title {
            font-size: 14pt;
            font-weight: 900;
            color: #0f172a;
            border-bottom: 2px solid #0f172a;
            padding-bottom: 6px;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: -0.01em;
        }
        
        .section-subtitle {
            font-size: 9.5pt;
            font-weight: 800;
            color: #0f172a;
            margin-top: 20px;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-left: 3px solid #0f172a;
            padding-left: 8px;
        }
        
        p {
            text-align: justify;
            margin-bottom: 10px;
            font-size: 9pt;
            color: #334155;
        }
        
        /* Info Box */
        .info-box {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 16px;
            margin: 15px 0;
        }
        
        .info-title {
            font-size: 8pt;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #64748b;
            margin-bottom: 12px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 6px;
        }
        
        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px dashed #e2e8f0;
            font-size: 8.5pt;
        }
        
        .info-row:last-child {
            border-bottom: none;
        }
        
        .info-label {
            font-weight: 600;
            color: #64748b;
        }
        
        .info-value {
            font-weight: 700;
            color: #0f172a;
            text-align: right;
            max-width: 65%;
        }
        
        /* Tables */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0;
            font-size: 8.5pt;
        }
        
        th, td {
            border: 1px solid #e2e8f0;
            padding: 8px 10px;
            text-align: left;
            vertical-align: top;
        }
        
        th {
            background-color: #f8fafc;
            font-weight: 800;
            text-transform: uppercase;
            color: #0f172a;
            letter-spacing: 0.03em;
            font-size: 8pt;
            border-bottom: 2px solid #e2e8f0;
        }
        
        tbody tr:nth-child(even) {
            background-color: #f8fafc;
        }
        
        /* Risk Grid & Badges */
        .risk-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin: 14px 0;
        }
        
        .risk-card {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 12px;
        }
        
        .risk-card.initial {
            background: #f8fafc;
            border-left: 4px solid #64748b;
        }
        
        .risk-card.residual {
            border-left: 4px solid;
        }
        
        .risk-card.residual.low {
            background: #f0fdf4;
            border-color: #bbf7d0;
            border-left-color: #16a34a;
            color: #166534;
        }
        
        .risk-card.residual.mid {
            background: #fff7ed;
            border-color: #fed7aa;
            border-left-color: #d97706;
            color: #9a3412;
        }
        
        .risk-card.residual.high {
            background: #fef2f2;
            border-color: #fecdd3;
            border-left-color: #e11d48;
            color: #991b1b;
        }
        
        .risk-val {
            font-size: 16pt;
            font-weight: 900;
            margin: 6px 0 2px 0;
        }
        
        .badge {
            display: inline-block;
            padding: 3px 6px;
            border-radius: 6px;
            font-size: 7.5pt;
            font-weight: 800;
            letter-spacing: 0.02em;
            text-transform: uppercase;
        }
        
        .badge-success {
            background: #dcfce7;
            color: #16a34a;
        }
        
        .badge-danger {
            background: #fee2e2;
            color: #dc2626;
        }
        
        .badge-info {
            background: #e0f2fe;
            color: #0369a1;
        }
        
        .warning-box {
            background: #fff1f2;
            border: 1px solid #fecdd3;
            border-left: 4px solid #e11d48;
            border-radius: 8px;
            padding: 10px 12px;
            font-size: 8.5pt;
            color: #9f1239;
            margin-bottom: 8px;
        }
        
        .justification-box {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            border-left: 4px solid #0284c7;
            border-radius: 8px;
            padding: 12px;
            font-style: italic;
            font-size: 8.5pt;
            color: #0369a1;
            margin-bottom: 16px;
        }
        
        /* Footer & Signatures */
        .signature-area {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 30px;
        }
        
        .signature-box {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 12px;
            min-height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            background: #f8fafc;
        }
        
        .signature-label {
            font-size: 7.5pt;
            font-weight: 800;
            text-transform: uppercase;
            color: #64748b;
            margin-bottom: 30px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 4px;
            letter-spacing: 0.05em;
        }
        
        .footer-page {
            font-size: 7.5pt;
            color: #94a3b8;
            border-top: 1px solid #e2e8f0;
            padding-top: 8px;
            display: flex;
            justify-content: space-between;
            font-weight: 600;
        }
    </style>
`;

const DVRPrintEngine = {
    // ════ HELPER DI BASE ════
    normalizeKey: function (key) {
        const k = (key || '').toLowerCase().trim();
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
    },

    metaLocal: {
        "comune": { name: "Infrastruttura, Impianti e Antincendio" },
        "generic": { name: "Generico / Altro" },
        "dental": { name: "Odontoiatria / Clinico" },
        "health": { name: "Sanità / Studi Medici" },
        "beauty": { name: "Estetica e Benessere" },
        "food": { name: "Ristorazione ed Ho.Re.Ca." },
        "hospitality": { name: "Ospitalità e Hotel" },
        "professional": { name: "Servizi Professionali" },
        "workshop": { name: "Officine e Artigianato" },
        "construction": { name: "Edilizia e Impiantistica" }
    },

    parametriVerticali: {
        "comune": { D: 2, C: 1, desc_d: "Infortuni o patologie professionali generiche", normativa_rif: "D.Lgs. 81/08 Titolo II" },
        "generic": { D: 2, C: 1, desc_d: "Infortuni lievi (scivolamento, caduta in piano)", normativa_rif: "D.Lgs. 81/08 Titolo II" },
        "dental": { D: 3, C: 2, desc_d: "Patogeni ematogeni e respiratori a danno grave", normativa_rif: "D.Lgs. 81/08 Titolo X" },
        "health": { D: 3, C: 2, desc_d: "Patogeni biologici a danno grave, rischi chimici", normativa_rif: "D.Lgs. 81/08 Titolo X, Legge Gelli-Bianco" },
        "beauty": { D: 2, C: 2, desc_d: "Patogeni a danno moderato, lesioni cutanee", normativa_rif: "D.Lgs. 81/08 Titolo VIII, D.M. 206/2015" },
        "food": { D: 3, C: 2, desc_d: "Tossinfezioni, trasmissione alimentare, tagli, ustioni", normativa_rif: "Regolamento CE 852/2004 (HACCP)" }
    },

    chunkArray: function (array, size) {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    },

    renderLegalPage: function (htmlContent, headerText, footerText, pageNumber) {
        return `
            <div class="page">
                <div class="page-content">
                    <div class="header-doc">
                        <span>${headerText}</span>
                        <h2>QUADRO GIURIDICO E DOTTRINALE</h2>
                    </div>
                    <div style="margin-top: 15px; font-size: 9.5pt; line-height: 1.5; color: #1e293b;">
                        ${htmlContent}
                    </div>
                </div>
                <div class="footer-page">
                    <span>${footerText}</span>
                    <span>Pagina ${pageNumber}</span>
                </div>
            </div>
        `;
    },

    // ══════════════════════════════════════════════════════════════════════
    // 1. STAMPA DEL SINGOLO SERVIZIO / CAPITOLO (ALTA QUALITÀ)
    // ══════════════════════════════════════════════════════════════════════
    printSingleService: async function (tenant, service, checklistState, mitigationControls, serverChecklistState) {
        if (window.showLoader) window.showLoader("Generazione PDF Alta Qualità...");

        const now = new Date();
        const dateStr = now.toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });

        const sku = service.service_sku;
        const state = checklistState[sku] || {};

        let serviceDescription = "Servizio clinico-operativo specializzato.";
        let riskWarnings = [];
        let listItems = [];
        let rawLaws = "D.Lgs. 81/08 (T.U. Sicurezza Lavoro), Linee Guida di settore.";

        if (typeof getDossierBySku === 'function') {
            const dossier = getDossierBySku(sku);
            if (dossier && dossier.MODULE_4_PRODUCT_SERVICE_COMPLIANCE) {
                const comp = dossier.MODULE_4_PRODUCT_SERVICE_COMPLIANCE;
                serviceDescription = comp.positioning || "";
                riskWarnings = comp.risk_warnings || [];
                listItems = comp.compliance_checklist || [];
                if (comp.regulatory_framework) {
                    const framework = comp.regulatory_framework;
                    rawLaws = [framework.medical_device_directive, framework.professional_liability, framework.gdpr_compliance].filter(Boolean).join('; ');
                }
            }
        }

        // --- SE È UN COMPARTO MACRO, PRENDE LE DOMANDE DAL REGISTRO VERTICALI ---
        if (listItems.length === 0 && typeof verticalsRegistry !== 'undefined' && verticalsRegistry[sku]) {
            verticalsRegistry[sku].risks.forEach(risk => {
                risk.checklist.forEach(q => {
                    listItems.push({
                        id: q.question_id,
                        area: risk.name,
                        action: q.text,
                        owner: 'Datore di Lavoro'
                    });
                });
            });
            serviceDescription = "Valutazione dei rischi strutturali, impiantistici e operativi del comparto.";
            rawLaws = verticalsRegistry[sku].law_references || rawLaws;
        }

        const vKey = typeof getVerticalForService === 'function' ? DVRPrintEngine.normalizeKey(getVerticalForService(service)) : 'comune';
        const param = DVRPrintEngine.parametriVerticali[vKey] || { D: 2, C: 1 };
        const dPartenza = param.D || 2;
        const rPartenza = 4 * dPartenza;

        // --- LETTURA VALORI DATABASE ---
        const savedSkuData = (serverChecklistState && serverChecklistState[sku]) ? serverChecklistState[sku] : null;
        let dVal = dPartenza; let pVal = 4; let rVal = rPartenza; let justVal = "";

        if (savedSkuData && savedSkuData.D !== undefined) {
            dVal = savedSkuData.D; pVal = savedSkuData.P || 4; rVal = savedSkuData.R || (dVal * pVal); justVal = savedSkuData.overall_justification || "";
        } else {
            const total = listItems.length;
            const checkedCount = listItems.filter(item => state[item.id || item.question_id]).length;
            if (total > 0) pVal = Math.max(1, Math.min(4, Math.round(4 - (3 * (checkedCount / total)))));
            rVal = pVal * dVal;
            justVal = "Valutazione elaborata in tempo reale in base alle spunte applicate dal responsabile.";
        }

        const rLabel = rVal >= 8 ? 'ALTO' : (rVal >= 4 ? 'MEDIO' : 'BASSO');
        const rSeverityClass = rVal >= 8 ? 'high' : (rVal >= 4 ? 'mid' : 'low');

        const mitigationData = (mitigationControls || []).find(m => m.service_sku === sku);
        const operatoriCoinvolti = mitigationData?.operatori_coinvolti || [];
        const attrezzatureCoinvolte = mitigationData?.attrezzature_coinvolte || [];

        let singlePageCount = 1;

        // Costruzione HTML Foglio Singolo (Diviso in Pagine separate per evitare spaginazione)
        let html = `
            <!DOCTYPE html>
            <html lang="it">
            <head>
                <meta charset="utf-8">
                ${dvrCommonStyles}
            </head>
            <body>
                <!-- Pagina 1: Analisi e Rischio -->
                <div class="page">
                    <div class="page-content">
                        <div class="header-doc">
                            <span>Estratto DVR — D.Lgs. 81/08</span>
                            <h2>SCHEDA PROTOCOLLO</h2>
                        </div>
                        
                        <h2 class="chapter-title">${service.service_name.toUpperCase()}</h2>

                        <div class="section-subtitle">1. Inquadramento Operativo e Normativo</div>
                        <div class="info-box" style="margin-top: 0;">
                            <div class="info-row"><span class="info-label">ID Identificativo:</span><span class="info-value" style="font-family: monospace;">${sku}</span></div>
                            <div class="info-row"><span class="info-label">Inquadramento:</span><span class="info-value">${serviceDescription}</span></div>
                            <div class="info-row"><span class="info-label">Riferimenti Normativi:</span><span class="info-value">${rawLaws}</span></div>
                        </div>

                        <div class="section-subtitle">2. Analisi d'Impatto e Mitigazione del Rischio (Matrice INAIL)</div>
                        <div class="risk-grid">
                            <div class="risk-card initial">
                                <div style="font-size: 8pt; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">1. Rischio Potenziale (Senza Misure)</div>
                                <div class="risk-val" style="color: #64748b;">R = ${rPartenza}</div>
                                <div style="font-size: 8.5pt; color: #475569;">Danno (D): <strong>${dPartenza}</strong> &nbsp;|&nbsp; Probabilità (P): <strong>4</strong></div>
                            </div>
                            <div class="risk-card residual ${rSeverityClass}">
                                <div style="font-size: 8pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">2. Rischio Residuo (Con Misure)</div>
                                <div class="risk-val">R = ${rVal} <span style="font-size: 10pt; font-weight: 800;">(${rLabel})</span></div>
                                <div style="font-size: 8.5pt;">Danno (D): <strong>${dVal}</strong> &nbsp;|&nbsp; Probabilità (P): <strong>${pVal}</strong></div>
                            </div>
                        </div>
                        
                        ${justVal ? `<div class="justification-box"><strong>Ratio della Mitigazione:</strong> ${justVal}</div>` : ''}

                        ${riskWarnings.length > 0 ? `
                            <div class="section-subtitle">3. Avvertenze e Pericoli Critici Operativi</div>
                            ${riskWarnings.map(w => `<div class="warning-box">⚠️ ${w}</div>`).join('')}
                        ` : ''}
                    </div>

                    <div class="footer-page">
                        <span>${tenant.ragioneSociale}</span>
                        <span>Estratto DVR — Pagina ${singlePageCount++}</span>
                    </div>
                </div>

                <!-- Pagina Risorse Specifiche del Protocollo (Operatori + Attrezzature) -->
                ${(operatoriCoinvolti.length > 0 || attrezzatureCoinvolte.length > 0) ? `
                <div class="page">
                    <div class="page-content">
                        <div class="header-doc">
                            <span>Estratto DVR — D.Lgs. 81/08</span>
                            <h2>SCHEDA PROTOCOLLO</h2>
                        </div>
                        
                        <h2 class="chapter-title">${service.service_name.toUpperCase()}</h2>
                        
                        <div class="section-subtitle">Risorse Specifiche del Protocollo</div>
                        <p>Elenco delle figure professionali necessarie e delle attrezzature/macchinari di reparto impiegati nello svolgimento delle mansioni associate:</p>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; height: 350px;">
                            <div class="info-box" style="margin: 0; display: flex; flex-direction: column;">
                                <div class="info-title" style="color:#0f172a; border-bottom: 2px solid #0f172a; font-size: 9pt;">👥 Operatori e Figure</div>
                                ${operatoriCoinvolti.length > 0 ? `
                                    <ul style="margin: 0; padding-left: 18px; font-size: 9pt; color: #334155; line-height: 1.6; flex: 1;">
                                        ${operatoriCoinvolti.map(op => `<li style="margin-bottom: 6px;"><strong>${op}</strong></li>`).join('')}
                                    </ul>
                                ` : `
                                    <div style="font-size: 9pt; color: #94a3b8; font-style: italic; padding: 20px 10px;">Nessun operatore specifico.</div>
                                `}
                            </div>
                            <div class="info-box" style="margin: 0; display: flex; flex-direction: column;">
                                <div class="info-title" style="color:#0f172a; border-bottom: 2px solid #0f172a; font-size: 9pt;">⚙️ Attrezzature di Reparto</div>
                                ${attrezzatureCoinvolte.length > 0 ? `
                                    <ul style="margin: 0; padding-left: 18px; font-size: 9pt; color: #334155; line-height: 1.6; flex: 1;">
                                        ${attrezzatureCoinvolte.map(eq => `<li style="margin-bottom: 6px;"><strong>${eq}</strong></li>`).join('')}
                                    </ul>
                                ` : `
                                    <div style="font-size: 9pt; color: #94a3b8; font-style: italic; padding: 20px 10px;">Nessuna attrezzatura specifica.</div>
                                `}
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-page">
                        <span>${tenant.ragioneSociale}</span>
                        <span>Estratto DVR — Pagina ${singlePageCount++}</span>
                    </div>
                </div>
                ` : ''}
        `;

        // Pagine Checklist (Chunked per evitare overflow su capitoli lunghi)
        const checklistChunks = DVRPrintEngine.chunkArray(listItems, 10);
        checklistChunks.forEach((chunk, index) => {
            const isFirst = index === 0;
            html += `
                <!-- Pagina Checklist -->
                <div class="page">
                    <div class="page-content">
                        <div class="header-doc">
                            <span>Estratto DVR — D.Lgs. 81/08</span>
                            <h2>SCHEDA PROTOCOLLO</h2>
                        </div>
                        
                        <h2 class="chapter-title">${service.service_name.toUpperCase()} ${isFirst ? '' : '(Continua)'}</h2>
                        
                        <div class="section-subtitle">4. Stato delle Conformità Strutturali (Checklist) ${isFirst ? '' : '(Continua)'}</div>
                        <table>
                            <thead>
                                <tr>
                                    <th style="width: 15%;">ID</th>
                                    <th style="width: 25%;">Area</th>
                                    <th style="width: 45%;">Azione di Conformità Requisita</th>
                                    <th style="width: 15%; text-align:center;">Stato</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${chunk.map(item => {
                                    const isDone = !!state[item.id || item.question_id];
                                    return `
                                        <tr>
                                            <td style="font-family: monospace; font-size: 8pt; font-weight: bold;">${item.id || item.question_id}</td>
                                            <td><strong>${item.area || 'Compliance'}</strong></td>
                                            <td>${item.action || item.text || ""}</td>
                                            <td style="text-align:center;">
                                                ${isDone
                                                    ? '<span class="badge badge-success">ATTUATA ✓</span>'
                                                    : '<span class="badge badge-danger">IN ATTESA ✗</span>'}
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>

                        <div style="margin-top:30px; border-top:1px solid #e2e8f0; padding-top:12px; font-size:8pt; color:#64748b; text-align:center;">
                            La presente scheda costituisce parte integrante e sostanziale del Documento di Valutazione dei Rischi aziendale.
                        </div>
                    </div>
                    
                    <div class="footer-page">
                        <span>${tenant.ragioneSociale}</span>
                        <span>Estratto DVR — Pagina ${singlePageCount++}</span>
                    </div>
                </div>
            `;
        });

        // Pagine Mitigazione (Chunked per evitare overflow)
        if (mitigationData && mitigationData.controlli_mitigazione && mitigationData.controlli_mitigazione.length > 0) {
            const mitigationChunks = DVRPrintEngine.chunkArray(mitigationData.controlli_mitigazione, 5);
            mitigationChunks.forEach((chunk, index) => {
                const isFirst = index === 0;
                html += `
                    <!-- Pagina Protocollo Specifico di Mitigazione -->
                    <div class="page">
                        <div class="page-content">
                            <div class="header-doc">
                                <span>Estratto DVR — D.Lgs. 81/08</span>
                                <h2>SCHEDA PROTOCOLLO</h2>
                            </div>
                            
                            <h2 class="chapter-title">${service.service_name.toUpperCase()} ${isFirst ? '' : '(Continua)'}</h2>
                            
                            <div class="section-subtitle">5. Protocollo Specifico di Mitigazione Fase per Fase ${isFirst ? '' : '(Continua)'}</div>
                            <table>
                                <thead>
                                    <tr>
                                        <th style="width:25%">Fase Operativa</th>
                                        <th style="width:30%">Check / Evidenza Richiesta</th>
                                        <th style="width:25%">Criterio di Accettazione</th>
                                        <th style="width:20%">Responsabile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${chunk.map(mit => `
                                        <tr>
                                            <td><strong>${mit.fase_operativa}</strong></td>
                                            <td>${mit.check_prestabilito}<br><span class="badge badge-info" style="margin-top:4px;">Tipo: ${mit.tipo_evidenza}</span></td>
                                            <td style="color:#0f172a; font-weight:600;">${mit.criterio_accettazione}</td>
                                            <td>${mit.operatore_responsabile}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                            
                            <div style="margin-top:30px; border-top:1px solid #e2e8f0; padding-top:12px; font-size:8pt; color:#64748b; text-align:center;">
                                La presente scheda costituisce parte integrante e sostanziale del Documento di Valutazione dei Rischi aziendale.
                            </div>
                        </div>
                        
                        <div class="footer-page">
                            <span>${tenant.ragioneSociale}</span>
                            <span>Estratto DVR — Pagina ${singlePageCount++}</span>
                        </div>
                    </div>
                `;
            });
        }

        html += `</body></html>`;

        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.98);z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:sans-serif;';
        overlay.innerHTML = '<div style="width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid #0f172a;border-radius:50%;animation:spin 1s linear infinite;margin-bottom:20px;"></div><div id="pdf-progress" style="font-weight:bold;font-size:14px;color:#0f172a;">Digitalizzazione Alta Definizione...</div><style>@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}</style>';
        document.body.appendChild(overlay);

        const container = document.createElement('div');
        container.style.cssText = 'position:absolute;top:0;left:-9999px;width:794px;opacity:1;z-index:99998;';
        container.innerHTML = html;
        document.body.appendChild(container);

        try {
            await new Promise(r => setTimeout(r, 800));

            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
            const pages = container.querySelectorAll('.page');
            const progressText = document.getElementById('pdf-progress');

            for (let i = 0; i < pages.length; i++) {
                if (progressText) progressText.innerText = `Elaborazione Pagina ${i + 1} di ${pages.length}...`;

                const canvas = await html2canvas(pages[i], {
                    scale: 3,
                    useCORS: true,
                    backgroundColor: '#ffffff',
                    logging: false,
                    windowWidth: 794
                });

                const imgData = canvas.toDataURL('image/jpeg', 0.95);

                if (i > 0) pdf.addPage();
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
            }

            const tgApp = window.Telegram?.WebApp;
            const isMobile = (tgApp && (tgApp.platform === 'android' || tgApp.platform === 'ios')) || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

            if (progressText) progressText.innerText = `Invio in corso...`;

            if (isMobile) {
                try {
                    const webhookUrl = typeof WEBHOOK_URL !== 'undefined' ? WEBHOOK_URL : 'https://prod.workflow.trinai.it/webhook/7f254dec-e28f-452a-afb9-2a2a90206cbb';
                    const sessionAsh = typeof ash !== 'undefined' ? ash : (new URLSearchParams(window.location.search)).get('ash') || 'dev';
                    const initData = tgApp?.initData || '';
                    const pdfBase64Uri = pdf.output('datauristring');
                    const base64Data = pdfBase64Uri.split(',')[1];
                    const filename = `DVR_Scheda_${service.service_name.replace(/\s+/g, '_')}.pdf`;

                    const webhookPayload = {
                        action: 'document_to_valut',
                        base64: base64Data,
                        mimetype: 'application/pdf',
                        filename: filename,
                        ash: sessionAsh,
                        _auth: initData
                    };

                    fetch(webhookUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(webhookPayload)
                    });

                    if (tgApp && tgApp.showAlert) {
                        tgApp.showAlert("✅ Scheda Protocollo generata in Alta Qualità! In arrivo nella chat.");
                    } else {
                        alert("✅ Documento generato e inviato al server.");
                    }
                } catch (err) {
                    console.error('Error mobile single print:', err);
                }
            } else {
                const pdfBytes = pdf.output('arraybuffer');
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `DVR_Scheda_${service.service_name.replace(/\s+/g, '_')}.pdf`;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                setTimeout(() => URL.revokeObjectURL(url), 5000);
            }
        } catch (err) {
            console.error('Single PDF Error:', err);
            alert('Errore generazione capitolo: ' + err.message);
        } finally {
            document.body.removeChild(container);
            document.body.removeChild(overlay);
            if (window.hideLoader) window.hideLoader();
        }
    },


    // ══════════════════════════════════════════════════════════════════════
    // 2. STAMPA DEL LIBRO COMPLETO DVR (ALTA QUALITÀ)
    // ══════════════════════════════════════════════════════════════════════
    generateAndPrint: async function (tenant, catalog, checklistState, ownerData, mitigationControls, serverChecklistState) {
        if (window.showLoader) window.showLoader("Generazione Documento Tecnico...");

        const now = new Date();
        const dateStr = now.toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });

        const operators = ownerData.operators || [];
        const machinery = ownerData.machinery || [];
        let pianoDiMiglioramento = [];

        // Costruzione HTML Libro Intero
        let html = `
            <!DOCTYPE html>
            <html lang="it">
            <head>
                <meta charset="utf-8">
                ${dvrCommonStyles}
            </head>
            <body>
        `;

        const mappedSectorNames = tenant.activeVerticals.map(v => DVRPrintEngine.metaLocal[DVRPrintEngine.normalizeKey(v)]?.name || v).join(', ');

        // Pagina 1: Cover Page
        html += `
            <div class="page cover">
                <div class="cover-header">
                    <span class="badge badge-info" style="font-size: 8pt; padding: 4px 8px; border-radius: 8px;">DOCUMENTO DI VALUTAZIONE DEI RISCHI</span>
                    <div style="font-size: 8pt; font-weight: 800; color: #64748b; margin-top: 8px; letter-spacing: 0.1em; text-transform: uppercase;">EX D.LGS. 81/2008 E S.M.I.</div>
                    
                    <h1 class="cover-title">Documento di Valutazione dei Rischi (D.V.R.)</h1>
                    <p class="cover-subtitle">Valutazione Specialistica dei Rischi Biologici, Meccanici e Strutturali inerenti ai Processi Operativi Aziendali</p>
                </div>

                <div class="info-box">
                    <div class="info-title">Anagrafica Aziendale</div>
                    <div class="info-row"><span class="info-label">Ragione Sociale:</span><span class="info-value">${tenant.ragioneSociale}</span></div>
                    <div class="info-row"><span class="info-label">P.IVA / C.F.:</span><span class="info-value">${tenant.pIva}</span></div>
                    <div class="info-row"><span class="info-label">Sede Operativa:</span><span class="info-value">${tenant.indirizzo}</span></div>
                    <div class="info-row"><span class="info-label">Aree di Rischio Mappate:</span><span class="info-value">${mappedSectorNames}</span></div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div class="info-box" style="margin: 0;">
                        <div class="info-title">Referenti Sicurezza</div>
                        <div style="margin-bottom: 8px; font-size: 8.5pt;"><strong>RSPP:</strong><br>${tenant.generalMetadata?.rspp || '-'}</div>
                        <div style="font-size: 8.5pt;"><strong>RLS:</strong><br>${tenant.generalMetadata?.rls || '-'}</div>
                    </div>
                    <div class="info-box" style="margin: 0;">
                        <div class="info-title">Emergenze & Sorveglianza</div>
                        <div style="margin-bottom: 8px; font-size: 8.5pt;"><strong>Medico Competente:</strong><br>${tenant.generalMetadata?.medicoCompetente || '-'}</div>
                        <div style="font-size: 8.5pt;"><strong>Addetti Emergenze:</strong><br>${tenant.generalMetadata?.addettiEmergenza?.join(', ') || '-'}</div>
                    </div>
                </div>

                <div class="footer-page">
                    <span>Generato digitalmente il ${dateStr}</span>
                    <span>Pagina 1</span>
                </div>
            </div>
        `;

        let pageCount = 2;
        const activeVerticals = (tenant.activeVerticals && tenant.activeVerticals.length > 0)
            ? tenant.activeVerticals.map(v => DVRPrintEngine.normalizeKey(v))
            : ['generic'];
        const uniqueVerticals = [...new Set(activeVerticals)].filter(v => v !== 'comune');
        const verticalsToProcess = uniqueVerticals.length > 0 ? uniqueVerticals : ['generic'];

        // 1. INTRODUZIONE LEGALE (Titolo I)
        let introHtml = (typeof DVRIntroduzioneVerticali !== 'undefined' ? DVRIntroduzioneVerticali['comune'] : '') || '';
        introHtml = introHtml.replace(/<div class="page-break"><\/div>/g, '');

        const printedIntros = new Set();
        let verticalIntrosHtml = '';
        verticalsToProcess.forEach(v => {
            let keyToPrint = v;
            if (typeof DVRIntroduzioneVerticali !== 'undefined') {
                if (!DVRIntroduzioneVerticali[v]) {
                    if (['professional', 'hospitality', 'beauty', 'food'].includes(v)) {
                        keyToPrint = 'generic';
                    } else {
                        return;
                    }
                }
                if (!printedIntros.has(keyToPrint)) {
                    printedIntros.add(keyToPrint);
                    verticalIntrosHtml += DVRIntroduzioneVerticali[keyToPrint].replace(/<div class="page-break"><\/div>/g, '');
                }
            }
        });

        // Combina l'introduzione comune e tutti i verticali attivi sulla stessa pagina
        html += DVRPrintEngine.renderLegalPage(introHtml + verticalIntrosHtml, "I. Misure Generali & Perimetro Legale", tenant.ragioneSociale, pageCount++);

        // 2. METODOLOGIA E CRITERI (ISPESL / Matrice R=PxD)
        const metodologiaPage1 = `
            <h1>METODOLOGIA E CRITERI ADOTTATI PER LA VALUTAZIONE</h1>
            <p>Tutte le attività finalizzate alla valutazione dei rischi ed alla redazione del presente Documento di Valutazione sono state svolte secondo criteri predefiniti derivati dalle <strong>"LINEE GUIDA per la valutazione ed il controllo dei rischi"</strong>, pubblicate dall'ISPESL e definite ed approvate dalle Regioni e Province autonome e dagli Istituti centrali.</p>
            
            <h2>1. Fasi Operative del Processo Valutativo</h2>
            <p>Il processo di identificazione e quantificazione si è articolato nelle seguenti fasi propedeutiche:</p>
            <ul>
                <li><strong>Fase preliminare:</strong> Ricognizione di tutti gli ambienti di lavoro, analisi dei processi lavorativi ed organizzativi (incluse le attività di servizio come pulizie e manutenzione), e verifica della documentazione disponibile, inclusi dati desunti dal registro infortuni e denunce di malattie professionali.</li>
                <li><strong>Fase di valutazione:</strong> L'identificazione delle fonti di rischio è stata guidata dalle conoscenze disponibili su norme di legge e standard tecnici, nonché dall'esperienza e dal contributo di tutti i soggetti aziendali (Lavoratori, SPP, Medico Competente, RLS). La valutazione ha riguardato tutti i rischi cui potenzialmente sono esposti i lavoratori.</li>
            </ul>
            
            <h2>2. Quantificazione del Rischio (Matrice R = P x D)</h2>
            <p>In assenza di misurazioni strumentali specifiche, la quantificazione del rischio è stata effettuata in termini analitici attraverso l'assegnazione di valori, su una scala da 1 a 4, per la <strong>Probabilità (P)</strong> e per la <strong>Gravità del Danno (D)</strong> atteso.</p>
            
            <table style="width:100%; font-size:8pt; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="background:#f1f5f9;">
                        <th style="width:50%; border: 1px solid #cbd5e1; padding: 6px;">Scala della Probabilità (P)</th>
                        <th style="width:50%; border: 1px solid #cbd5e1; padding: 6px;">Scala del Danno (D)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>4 - Altamente Probabile:</strong> Correlazione diretta tra mancanza rilevata e verificarsi del danno. Già verificatisi in azienda o situazioni simili.</td>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>4 - Gravissimo:</strong> Infortunio o episodio acuto con effetti letali o di invalidità totale.</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>3 - Probabile:</strong> La mancanza rilevata può provocare il danno; non suscita stupore in azienda.</td>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>3 - Grave:</strong> Infortunio o episodio acuto con effetti di invalidità parziale irreversibile.</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>2 - Poco Probabile:</strong> La mancanza rilevata può provocare danno solo per concomitanza di più eventi poco probabili.</td>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>2 - Medio:</strong> Infortunio o episodio acuto con inabilità reversibile.</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>1 - Improbabile:</strong> La mancanza rilevata può provocare danno solo per concomitanza di events eccezionali o indipendenti.</td>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>1 - Lieve:</strong> Infortunio o episodio acuto con inabilità rapidamente reversibile.</td>
                    </tr>
                </tbody>
            </table>
        `;
        
        const metodologiaPage2 = `
            <h2>3. Classificazione del Livello di Rischio e Azioni Conseguenti</h2>
            <p>Definiti il danno e la probabilità, il rischio viene graduato mediante la formula <strong>R = P x D</strong>. Sulla base del valore ottenuto, il sistema definisce le priorità e la programmazione temporale degli interventi di prevenzione da adottare:</p>
            
            <table style="width:100%; font-size:8pt; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px;">
                <thead>
                    <tr style="background:#f1f5f9;">
                        <th style="border: 1px solid #cbd5e1; padding: 6px;">Valore R</th>
                        <th style="border: 1px solid #cbd5e1; padding: 6px;">Fascia di Rischio</th>
                        <th style="border: 1px solid #cbd5e1; padding: 6px;">Programmazione delle Misure di Prevenzione</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="background-color:#fee2e2; color:#991b1b; font-weight:bold; border: 1px solid #cbd5e1; padding: 6px;">R &gt; 8</td>
                        <td style="font-weight:bold; border: 1px solid #cbd5e1; padding: 6px;">INACCETTABILE</td>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;">Azioni correttive indilazionabili. Sospensione dell'attività e realizzazione immediata degli interventi.</td>
                    </tr>
                    <tr>
                        <td style="background-color:#ffedd5; color:#9a3412; font-weight:bold; border: 1px solid #cbd5e1; padding: 6px;">4 &le; R &le; 8</td>
                        <td style="font-weight:bold; border: 1px solid #cbd5e1; padding: 6px;">MEDIO</td>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;">Azioni correttive da programmare con urgenza. Misure specifiche di prevenzione.</td>
                    </tr>
                    <tr>
                        <td style="background-color:#f0fdf4; color:#166534; font-weight:bold; border: 1px solid #cbd5e1; padding: 6px;">2 &le; R &le; 3</td>
                        <td style="font-weight:bold; border: 1px solid #cbd5e1; padding: 6px;">BASSO</td>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;">Azioni correttive e/o migliorative da programmare nel breve-medio termine.</td>
                    </tr>
                    <tr>
                        <td style="background-color:#f8fafc; color:#475569; border: 1px solid #cbd5e1; padding: 6px;">R = 1</td>
                        <td style="font-weight:bold; border: 1px solid #cbd5e1; padding: 6px;">ACCETTABILE</td>
                        <td style="border: 1px solid #cbd5e1; padding: 6px;">Azioni migliorative da valutare in fase di programmazione. Norme igieniche generali.</td>
                    </tr>
                </tbody>
            </table>
            
            <h2>4. Definizioni di Riferimento</h2>
            <p style="font-size: 8.5pt; line-height: 1.4; color: #475569;">
                <strong>Prevenzione:</strong> complesso delle disposizioni o misure necessarie per evitare o diminuire i rischi professionali (Art. 2, lett. n, D.Lgs. 81/08).<br>
                <strong>Pericolo:</strong> proprietà o qualità intrinseca di un determinato fattore avente il potenziale di causare danni (Art. 2, lett. r, D.Lgs. 81/08).<br>
                <strong>Rischio:</strong> probabilità di raggiungimento del livello potenziale di danno nelle condizioni di impiego o di esposizione ad un determinato fattore (Art. 2, lett. s, D.Lgs. 81/08).<br>
                <strong>Valutazione dei rischi:</strong> valutazione globale e documentata di tutti i rischi per la salute e sicurezza dei lavoratori, finalizzata ad individuare le adeguate misure di prevenzione e di protezione e ad elaborare il programma delle misure atte a garantire il miglioramento nel tempo (Art. 2, lett. q, D.Lgs. 81/08).
            </p>
        `;
        html += DVRPrintEngine.renderLegalPage(metodologiaPage1, "I. Metodologia di Valutazione (ISPESL)", tenant.ragioneSociale, pageCount++);
        html += DVRPrintEngine.renderLegalPage(metodologiaPage2, "I. Metodologia di Valutazione (ISPESL)", tenant.ragioneSociale, pageCount++);

        // 3. NORMATIVA DEL VERTICALE (Boilerplates)
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

        // Raggruppa i boilerplates: max 2 per pagina
        const bpChunks = DVRPrintEngine.chunkArray(boilerplatesToPrint, 2);
        bpChunks.forEach((chunk, idx) => {
            let chunkHtml = '';
            chunk.forEach(b => {
                chunkHtml += `
                    <div style="margin-bottom: 20px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 10px; font-size: 8.5pt;">
                        <h2 style="font-size: 10.5pt; color: #003366; margin-top: 0; margin-bottom: 6px; border-left: 3px solid #0059b3; padding-left: 8px;">${b.titolo}</h2>
                        <p style="margin: 3px 0;"><strong>Normativa:</strong> ${b.normativa_applicata || ''}</p>
                        <p style="margin: 3px 0;"><strong>Premesse:</strong> ${b.premesse || ''}</p>
                        <p style="margin: 3px 0;"><strong>Metodologia:</strong> ${b.metodologia || ''}</p>
                        <p style="margin: 3px 0;"><strong>Misure Obbligatorie:</strong> ${b.misure_obbligatorie || ''}</p>
                    </div>
                `;
            });
            html += DVRPrintEngine.renderLegalPage(chunkHtml, `II. Quadro Normativo del Settore (Parte ${idx + 1})`, tenant.ragioneSociale, pageCount++);
        });

        // 4. DISPOSIZIONI TECNICHE STRUTTURALI (Allegati)
        if (typeof DVRDisposizioniVerticali !== 'undefined') {
            const disposizioniToPrint = [];
            const printedDisposizioni = new Set();
            verticalsToProcess.forEach(v => {
                const keyToPrint = DVRDisposizioniVerticali[v] ? v : 'generic';
                if (!printedDisposizioni.has(keyToPrint)) {
                    printedDisposizioni.add(keyToPrint);
                    disposizioniToPrint.push({
                        title: DVRPrintEngine.metaLocal[keyToPrint]?.name || keyToPrint,
                        html: DVRDisposizioniVerticali[keyToPrint]
                    });
                }
            });

            // Comune è sempre la prima, seguita dalle altre
            const dispList = [
                { title: "Generale / Comune", html: DVRDisposizioniVerticali['comune'] },
                ...disposizioniToPrint
            ];

            const dispChunks = DVRPrintEngine.chunkArray(dispList, 2);
            dispChunks.forEach((chunk, idx) => {
                let chunkHtml = `
                    <h1 style="margin-top:0; font-size: 13pt;">QUADRO NORMATIVO TECNICO DI RIFERIMENTO</h1>
                    <h3 style="margin-bottom:15px; font-size:9.5pt; color:#64748b;">(Allegati Tecnici D.Lgs. 81/08 - Parte ${idx + 1})</h3>
                `;
                chunk.forEach(item => {
                    chunkHtml += item.html.replace(/<div class="page-break"><\/div>/g, '');
                });
                html += DVRPrintEngine.renderLegalPage(chunkHtml, "III. Disposizioni Tecniche e Allegati", tenant.ragioneSociale, pageCount++);
            });
        }

        // 5. DECRETI ATTUATIVI E FORMAZIONE
        if (typeof DVRDecretiAttuativi !== 'undefined') {
            const decretiToPrint = [];
            const printedDecreti = new Set();
            verticalsToProcess.forEach(v => {
                if (DVRDecretiAttuativi[v]) {
                    const keyToPrint = v;
                    if (!printedDecreti.has(keyToPrint)) {
                        printedDecreti.add(keyToPrint);
                        decretiToPrint.push({
                            title: DVRPrintEngine.metaLocal[keyToPrint]?.name || keyToPrint,
                            html: DVRDecretiAttuativi[keyToPrint]
                        });
                    }
                }
            });

            const decList = [
                { title: "Misure Generali", html: DVRDecretiAttuativi['comune'] },
                ...decretiToPrint
            ];

            const decChunks = DVRPrintEngine.chunkArray(decList, 2);
            decChunks.forEach((chunk, idx) => {
                let chunkHtml = `
                    <h1 style="margin-top:0; font-size: 13pt;">DECRETI ATTUATIVI E ACCORDI STATO-REGIONI</h1>
                    <h3 style="margin-bottom:15px; font-size:9.5pt; color:#64748b;">(Formazione e Verifiche - Parte ${idx + 1})</h3>
                `;
                chunk.forEach(item => {
                    chunkHtml += item.html.replace(/<div class="page-break"><\/div>/g, '');
                });
                html += DVRPrintEngine.renderLegalPage(chunkHtml, "IV. Accordi Stato-Regioni e Decreti", tenant.ragioneSociale, pageCount++);
            });
        }

        // 6. NORME SPECIALI (GDPR, Rifiuti)
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

            const specChunks = DVRPrintEngine.chunkArray(specialiToPrint, 2);
            specChunks.forEach((chunk, idx) => {
                let chunkHtml = `
                    <h1 style="margin-top:0; font-size: 13pt;">ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI</h1>
                    <h3 style="margin-bottom:15px; font-size:9.5pt; color:#64748b;">(GDPR / Rifiuti / Ambiente - Parte ${idx + 1})</h3>
                `;
                chunk.forEach(itemHtml => {
                    chunkHtml += itemHtml.replace(/<div class="page-break"><\/div>/g, '')
                                         .replace(/<h1>3. ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI<\/h1>/g, '')
                                         .replace(/<h1>ADEMPIMENTI COMPLEMENTARI E NORMATIVE SPECIALI<\/h1>/g, '');
                });
                html += DVRPrintEngine.renderLegalPage(chunkHtml, "V. Adempimenti Speciali (GDPR/CER)", tenant.ragioneSociale, pageCount++);
            });
        }

        // Pagine Organigramma (Mansioni Esaminate)
        if (operators.length === 0) {
            html += `
                <div class="page">
                    <div class="page-content">
                        <div class="header-doc">
                            <span>Documento di Valutazione dei Rischi (D.V.R.)</span>
                            <h2>VI. Organigramma Aziendale della Sicurezza</h2>
                        </div>
                        
                        <div class="section-subtitle">1.1 Organigramma Operativo e Mansioni Esaminate</div>
                        <p>Mappatura del personale direttamente coinvolto nelle procedure operative e soggetto a sorveglianza sanitaria/formazione:</p>
                        <table>
                            <thead>
                                <tr>
                                    <th style="width:40%">Nominativo</th>
                                    <th style="width:35%">Qualifica / Ruolo</th>
                                    <th style="width:25%">Contratto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td colspan="3" style="text-align: center; color: #94a3b8; padding: 20px;">Nessun operatore specificato in anagrafica.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="footer-page">
                        <span>${tenant.ragioneSociale}</span>
                        <span>Pagina ${pageCount++}</span>
                    </div>
                </div>
            `;
        } else {
            const operatorChunks = DVRPrintEngine.chunkArray(operators, 7);
            operatorChunks.forEach((chunk, index) => {
                const isFirst = index === 0;
                html += `
                    <div class="page">
                        <div class="page-content">
                            <div class="header-doc">
                                <span>Documento di Valutazione dei Rischi (D.V.R.)</span>
                                <h2>VI. Organigramma Aziendale della Sicurezza ${isFirst ? '' : '(Continua)'}</h2>
                            </div>
                            
                            <div class="section-subtitle">1.1 Organigramma Operativo e Mansioni Esaminate ${isFirst ? '' : '(Continua)'}</div>
                            <p>${isFirst ? 'Mappatura del personale direttamente coinvolto nelle procedure operative e soggetto a sorveglianza sanitaria/formazione:' : 'Prosecuzione dell\'organigramma del personale:'}</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th style="width:40%">Nominativo</th>
                                        <th style="width:35%">Qualifica / Ruolo</th>
                                        <th style="width:25%">Contratto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${chunk.map(op => `
                                        <tr>
                                            <td><strong>${op.OperatorName}</strong></td>
                                            <td>${op.Job} <br><span style="font-size:8pt; color:#64748b">${op.specialization || '-'}</span></td>
                                            <td>${op.contract || '-'}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>

                        <div class="footer-page">
                            <span>${tenant.ragioneSociale}</span>
                            <span>Pagina ${pageCount++}</span>
                        </div>
                    </div>
                `;
            });
        }

        // Pagine Registro Attrezzature
        if (machinery.length === 0) {
            html += `
                <div class="page">
                    <div class="page-content">
                        <div class="header-doc">
                            <span>Documento di Valutazione dei Rischi (D.V.R.)</span>
                            <h2>VII. Registro Attrezzature e Impiantistica</h2>
                        </div>

                        <div class="section-subtitle">1.2 Registro Attrezzature e Impiantistica (D.Lgs. 81/08 Titolo III)</div>
                        <p>Elenco delle attrezzature critiche presenti in struttura, soggette a direttive macchine o protocolli di manutenzione:</p>
                        <table>
                            <thead>
                                <tr>
                                    <th style="width:45%">Tipologia Macchinario / Dispositivo</th>
                                    <th style="width:20%">Reparto d'uso</th>
                                    <th style="width:15%">Acquisizione</th>
                                    <th style="width:20%">Status Giuridico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td colspan="4" style="text-align: center; color: #94a3b8; padding: 20px;">Nessun macchinario rilevante censito.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="footer-page">
                        <span>${tenant.ragioneSociale}</span>
                        <span>Pagina ${pageCount++}</span>
                    </div>
                </div>
            `;
        } else {
            const machineryChunks = DVRPrintEngine.chunkArray(machinery, 10);
            machineryChunks.forEach((chunk, index) => {
                const isFirst = index === 0;
                html += `
                    <div class="page">
                        <div class="page-content">
                            <div class="header-doc">
                                <span>Documento di Valutazione dei Rischi (D.V.R.)</span>
                                <h2>VII. Registro Attrezzature e Impiantistica ${isFirst ? '' : '(Continua)'}</h2>
                            </div>

                            <div class="section-subtitle">1.2 Registro Attrezzature e Impiantistica ${isFirst ? '' : '(Continua)'}</div>
                            <p>${isFirst ? 'Elenco delle attrezzature critiche presenti in struttura, soggette a direttive macchine o protocolli di manutenzione:' : 'Prosecuzione del registro attrezzature ed impiantistica aziendale:'}</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th style="width:45%">Tipologia Macchinario / Dispositivo</th>
                                        <th style="width:20%">Reparto d'uso</th>
                                        <th style="width:15%">Acquisizione</th>
                                        <th style="width:20%">Status Giuridico</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${chunk.map(mac => `
                                        <tr>
                                            <td><strong>${mac.type}</strong></td>
                                            <td><span class="badge" style="background:#e2e8f0; color:#475569; font-size: 7pt;">${(mac.vertical || 'comune').toUpperCase()}</span></td>
                                            <td>${mac.year || '-'}</td>
                                            <td>${mac.ownership || '-'}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>

                        <div class="footer-page">
                            <span>${tenant.ragioneSociale}</span>
                            <span>Pagina ${pageCount++}</span>
                        </div>
                    </div>
                `;
            });
        }

        // Pagine Servizi
        const activeSectors = [...new Set(['comune', ...tenant.activeVerticals.map(v => DVRPrintEngine.normalizeKey(v))])];

        activeSectors.forEach((vKey) => {
            const sectorServices = catalog.filter(s => {
                const normalizedSvcKey = typeof getVerticalForService === 'function' ? DVRPrintEngine.normalizeKey(getVerticalForService(s)) : 'comune';
                return normalizedSvcKey === vKey;
            });

            if (vKey !== 'comune' && sectorServices.length > 0) {
                sectorServices.forEach((service) => {
                    const sSku = service.service_sku;
                    const sState = checklistState[sSku] || {};
                    const sDossier = typeof getDossierBySku === 'function' ? getDossierBySku(sSku) : null;
                    const mitigationData = (mitigationControls || []).find(m => m.service_sku === sSku);

                    let sDescription = "Procedura standard.";
                    let sWarnings = [];
                    let sListItems = [];
                    let rawLaws = "D.Lgs. 81/08 e linee guida di settore.";

                    if (sDossier && sDossier.MODULE_4_PRODUCT_SERVICE_COMPLIANCE) {
                        const comp = sDossier.MODULE_4_PRODUCT_SERVICE_COMPLIANCE;
                        sDescription = comp.positioning || sDescription;
                        sWarnings = comp.risk_warnings || [];
                        sListItems = comp.compliance_checklist || [];
                        if (comp.regulatory_framework) {
                            const framework = comp.regulatory_framework;
                            rawLaws = [framework.medical_device_directive, framework.professional_liability, framework.gdpr_compliance].filter(Boolean).join('; ');
                        }
                    }

                    // --- SE È UN COMPARTO MACRO, PRENDE LE DOMANDE DAL REGISTRO VERTICALI ---
                    if (sListItems.length === 0 && typeof verticalsRegistry !== 'undefined' && verticalsRegistry[sSku]) {
                        verticalsRegistry[sSku].risks.forEach(risk => {
                            risk.checklist.forEach(q => {
                                sListItems.push({
                                    id: q.question_id,
                                    area: risk.name,
                                    action: q.text,
                                    owner: 'Datore di Lavoro'
                                });
                            });
                        });
                        sDescription = "Valutazione dei rischi strutturali, impiantistici e operativi del comparto.";
                        rawLaws = verticalsRegistry[sSku].law_references || rawLaws;
                    }

                    const param = DVRPrintEngine.parametriVerticali[vKey] || { D: 2 };
                    const dPartenza = param.D;
                    const rPartenza = 4 * dPartenza;
                    const savedServiceData = (serverChecklistState && serverChecklistState[sSku]) ? serverChecklistState[sSku] : null;

                    let sd = dPartenza; let sp = 4; let sr = rPartenza; let sJustification = "";

                    if (savedServiceData && savedServiceData.D !== undefined) {
                        sd = savedServiceData.D; sp = savedServiceData.P || 4; sr = savedServiceData.R || (sd * sp); sJustification = savedServiceData.overall_justification || "";
                    } else {
                        const total = sListItems.length;
                        const checkedCount = sListItems.filter(item => sState[item.id || item.question_id]).length;
                        if (total > 0) sp = Math.max(1, Math.min(4, Math.round(4 - (3 * (checkedCount / total)))));
                        sr = sp * sd;
                        sJustification = "Valutazione elaborata in tempo reale in base alle spunte applicate.";
                    }

                    const srLabel = sr >= 8 ? 'ALTO' : (sr >= 4 ? 'MEDIO' : 'BASSO');
                    const srSeverityClass = sr >= 8 ? 'high' : (sr >= 4 ? 'mid' : 'low');

                    sListItems.forEach(item => {
                        if (!sState[item.id || item.question_id]) {
                            pianoDiMiglioramento.push({ serviceName: service.service_name, area: item.area || 'Compliance', action: item.action || item.text, owner: item.owner || 'Non specificato' });
                        }
                    });

                    // --- PAGINA A: INQUADRAMENTO E RISCHIO ---
                    html += `
                        <div class="page">
                            <div class="page-content">
                                <div class="header-doc">
                                    <span>II. Protocolli di Sicurezza</span>
                                    <h2>${service.service_name.toUpperCase()}</h2>
                                </div>
                                
                                <div class="section-subtitle">1. Inquadramento Operativo e Normativo</div>
                                <div class="info-box" style="margin-top:0;">
                                    <div class="info-row"><span class="info-label">ID Protocollo:</span><span class="info-value" style="font-family:monospace;">${sSku}</span></div>
                                    <div class="info-row"><span class="info-label">Inquadramento:</span><span class="info-value">${sDescription}</span></div>
                                    <div class="info-row"><span class="info-label">Normativa Applicata:</span><span class="info-value">${rawLaws}</span></div>
                                </div>

                                <div class="section-subtitle">2. Stima del Rischio Specifico (INAIL)</div>
                                <div class="risk-grid">
                                    <div class="risk-card initial">
                                        <div style="font-size: 8pt; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Rischio Potenziale (Senza Misure)</div>
                                        <div class="risk-val" style="color: #64748b;">R = ${rPartenza}</div>
                                        <div style="font-size: 8.5pt; color: #475569;">Danno (D): <strong>${dPartenza}</strong> &nbsp;|&nbsp; Probabilità (P): <strong>4</strong></div>
                                    </div>
                                    <div class="risk-card residual ${srSeverityClass}">
                                        <div style="font-size: 8pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Rischio Residuo Attuale (Mitigato)</div>
                                        <div class="risk-val">R = ${sr} <span style="font-size:10pt; font-weight:800;">(${srLabel})</span></div>
                                        <div style="font-size: 8.5pt;">Danno (D): <strong>${sd}</strong> &nbsp;|&nbsp; Probabilità (P): <strong>${sp}</strong></div>
                                    </div>
                                </div>
                                
                                ${sJustification ? `<div class="justification-box"><strong>Ratio della Mitigazione:</strong> ${sJustification}</div>` : ''}

                                ${sWarnings.length > 0 ? `
                                    <div class="section-subtitle">Avvertenze Critiche e Vulnerabilità</div>
                                    ${sWarnings.map(w => `<div class="warning-box">⚠️ ${w}</div>`).join('')}
                                ` : ''}
                            </div>
                            
                            <div class="footer-page">
                                <span>${tenant.ragioneSociale}</span>
                                <span>Pagina ${pageCount++}</span>
                            </div>
                        </div>
                    `;

                    // --- PAGINA RISORSE SPECIFICHE (OPERATORI & ATTREZZATURE) ---
                    const sOperatori = mitigationData?.operatori_coinvolti || [];
                    const sAttrezzature = mitigationData?.attrezzature_coinvolte || [];

                    if (sOperatori.length > 0 || sAttrezzature.length > 0) {
                        html += `
                            <div class="page">
                                <div class="page-content">
                                    <div class="header-doc">
                                        <span>II. Protocolli di Sicurezza</span>
                                        <h2>${service.service_name.toUpperCase()}</h2>
                                    </div>
                                    
                                    <div class="section-subtitle">Risorse Specifiche del Protocollo</div>
                                    <p>Elenco delle figure professionali necessarie e delle attrezzature/macchinari di reparto impiegati nello svolgimento delle mansioni associate:</p>

                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; height: 350px;">
                                        <div class="info-box" style="margin: 0; display: flex; flex-direction: column;">
                                            <div class="info-title" style="color:#0f172a; border-bottom: 2px solid #0f172a; font-size: 9pt;">👥 Operatori e Figure</div>
                                            ${sOperatori.length > 0 ? `
                                                <ul style="margin: 0; padding-left: 18px; font-size: 9pt; color: #334155; line-height: 1.6; flex: 1;">
                                                    ${sOperatori.map(op => `<li style="margin-bottom: 6px;"><strong>${op}</strong></li>`).join('')}
                                                </ul>
                                            ` : `
                                                <div style="font-size: 9pt; color: #94a3b8; font-style: italic; padding: 20px 10px;">Nessun operatore specifico.</div>
                                            `}
                                        </div>
                                        <div class="info-box" style="margin: 0; display: flex; flex-direction: column;">
                                            <div class="info-title" style="color:#0f172a; border-bottom: 2px solid #0f172a; font-size: 9pt;">⚙️ Attrezzature di Reparto</div>
                                            ${sAttrezzature.length > 0 ? `
                                                <ul style="margin: 0; padding-left: 18px; font-size: 9pt; color: #334155; line-height: 1.6; flex: 1;">
                                                    ${sAttrezzature.map(eq => `<li style="margin-bottom: 6px;"><strong>${eq}</strong></li>`).join('')}
                                                </ul>
                                            ` : `
                                                <div style="font-size: 9pt; color: #94a3b8; font-style: italic; padding: 20px 10px;">Nessuna attrezzatura specifica.</div>
                                            `}
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="footer-page">
                                    <span>${tenant.ragioneSociale}</span>
                                    <span>Pagina ${pageCount++}</span>
                                </div>
                            </div>
                        `;
                    }

                    // --- PAGINA B: CHECKLIST (Chunked per evitare overflow) ---
                    const checklistChunks = DVRPrintEngine.chunkArray(sListItems, 10);
                    checklistChunks.forEach((chunk, index) => {
                        const isFirst = index === 0;
                        html += `
                            <div class="page">
                                <div class="page-content">
                                    <div class="header-doc">
                                        <span>II. Protocolli di Sicurezza</span>
                                        <h2>${service.service_name.toUpperCase()} ${isFirst ? '' : '(Continua)'}</h2>
                                    </div>
                                    
                                    <div class="section-subtitle">3. Stato Misure di Prevenzione (Checklist) ${isFirst ? '' : '(Continua)'}</div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th style="width:15%">ID</th>
                                                <th style="width:20%">Area</th>
                                                <th style="width:50%">Azione Prescritta</th>
                                                <th style="width:15%; text-align:center;">Stato</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${chunk.map(item => {
                                                const isDone = !!sState[item.id || item.question_id];
                                                return `
                                                    <tr>
                                                        <td style="font-family:monospace; font-weight: bold; font-size:8pt;">${item.id || item.question_id}</td>
                                                        <td><strong>${item.area || 'N/A'}</strong></td>
                                                        <td>${item.action || item.text || ""}</td>
                                                        <td style="text-align:center;">
                                                            ${isDone
                                                                ? '<span class="badge badge-success">ATTUATA ✓</span>'
                                                                : '<span class="badge badge-danger">IN ATTESA ✗</span>'}
                                                        </td>
                                                    </tr>
                                                `;
                                            }).join('')}
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div class="footer-page">
                                    <span>${tenant.ragioneSociale}</span>
                                    <span>Pagina ${pageCount++}</span>
                                </div>
                            </div>
                        `;
                    });

                    // --- PAGINA C: MITIGAZIONE (SE PRESENTE, Chunked) ---
                    if (mitigationData && mitigationData.controlli_mitigazione && mitigationData.controlli_mitigazione.length > 0) {
                        const mitigationChunks = DVRPrintEngine.chunkArray(mitigationData.controlli_mitigazione, 5);
                        mitigationChunks.forEach((chunk, index) => {
                            const isFirst = index === 0;
                            html += `
                                <div class="page">
                                    <div class="page-content">
                                        <div class="header-doc">
                                            <span>II. Protocolli di Sicurezza</span>
                                            <h2>${service.service_name.toUpperCase()} ${isFirst ? '' : '(Continua)'}</h2>
                                        </div>
                                        
                                        <div class="section-subtitle">4. Procedure di Verifica e Mitigazione Fase per Fase ${isFirst ? '' : '(Continua)'}</div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th style="width:25%">Fase Operativa</th>
                                                    <th style="width:30%">Check / Evidenza Richiesta</th>
                                                    <th style="width:30%">Criterio di Accettazione</th>
                                                    <th style="width:15%">Responsabile</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${chunk.map(mit => `
                                                    <tr>
                                                        <td><strong>${mit.fase_operativa}</strong></td>
                                                        <td>${mit.check_prestabilito}<br><span class="badge badge-info" style="margin-top:4px;">Tipo: ${mit.tipo_evidenza}</span></td>
                                                        <td style="color:#0f172a; font-weight:600;">${mit.criterio_accettazione}</td>
                                                        <td>${mit.operatore_responsabile}</td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div class="footer-page">
                                        <span>${tenant.ragioneSociale}</span>
                                        <span>Pagina ${pageCount++}</span>
                                    </div>
                                </div>
                            `;
                        });
                    }
                });
            }
        });

        // Pagina Finale: Piano di miglioramento / Firme (Chunked)
        if (pianoDiMiglioramento.length > 0) {
            const improvementChunks = DVRPrintEngine.chunkArray(pianoDiMiglioramento, 10);
            improvementChunks.forEach((chunk, index) => {
                const isFirst = index === 0;
                html += `
                    <div class="page">
                        <div class="page-content">
                            <div class="header-doc">
                                <span>III. Chiusura Documento</span>
                                <h2>Piano di Miglioramento Aziendale ${isFirst ? '' : '(Continua)'}</h2>
                            </div>
                            
                            <div class="section-subtitle">Azioni Correttive Programmate (Non ancora attuate) ${isFirst ? '' : '(Continua)'}</div>
                            <p>${isFirst ? 'Ai sensi del D.Lgs. 81/08, di seguito si formalizza il piano delle misure di prevenzione identificate ma attualmente non completate. La direzione si impegna a stanziare le risorse per la loro chiusura.' : 'Prosecuzione del piano delle misure di prevenzione programmate:'}</p>
                            
                            <table>
                                <thead>
                                    <tr>
                                        <th style="width:30%">Protocollo / Servizio Affetto</th>
                                        <th style="width:15%">Area</th>
                                        <th style="width:40%">Azione da Attuare</th>
                                        <th style="width:15%">Assegnata A</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${chunk.map(azione => `
                                        <tr>
                                            <td><strong>${azione.serviceName}</strong></td>
                                            <td><span class="badge" style="background:#f1f5f9; color:#475569;">${azione.area}</span></td>
                                            <td style="color:#b91c1c; font-weight:600;">${azione.action}</td>
                                            <td>${azione.owner}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="footer-page">
                            <span>${tenant.ragioneSociale}</span>
                            <span>Pagina ${pageCount++}</span>
                        </div>
                    </div>
                `;
            });
        }

        // Pagina Finale 2 (o unica in caso di nessun miglioramento): Approvazione e Firme
        html += `
            <div class="page">
                <div class="page-content">
                    <div class="header-doc">
                        <span>III. Chiusura Documento</span>
                        <h2>Approvazione Formale e Firme</h2>
                    </div>

                    ${pianoDiMiglioramento.length === 0 ? `
                        <div class="info-box" style="background:#f0fdf4; border-color:#bbf7d0; text-align:center; padding: 24px; margin-bottom: 30px;">
                            <h3 style="color:#16a34a; margin:0; font-size: 11pt; font-weight: 800;">CONFORMITÀ MASSIMA RILEVATA</h3>
                            <p style="margin:8px 0 0 0; color:#15803d; text-align: center;">Tutte le misure di prevenzione previste risultano regolarmente attuate ed operative. Il piano di miglioramento si esaurisce nel mantenimento ordinario e controllo dei protocolli in essere.</p>
                        </div>
                    ` : ''}
                    
                    <div class="section-subtitle">Firme e Approvazione Formale del Documento</div>
                    <p>I sottoscritti attestano di aver collaborato in sinergia all'analisi dei fattori di rischio, all'elaborazione del presente documento e alla definizione del piano di miglioramento, approvandone formalmente i contenuti in conformità al D.Lgs. 81/08.</p>

                    <div class="signature-area">
                        <div class="signature-box">
                            <span class="signature-label">Il Datore di Lavoro (Titolare)</span>
                            <div style="font-size: 9pt; font-weight: bold; text-align: center;">${tenant.ragioneSociale}</div>
                        </div>
                        <div class="signature-box">
                            <span class="signature-label">Il Medico Competente Nominato</span>
                            <div style="font-size: 9pt; font-weight: bold; text-align: center;">${tenant.generalMetadata?.medicoCompetente || '-'}</div>
                        </div>
                    </div>

                    <div class="signature-area" style="margin-top: 20px;">
                        <div class="signature-box">
                            <span class="signature-label">Il Responsabile S.P.P. (RSPP)</span>
                            <div style="font-size: 9pt; font-weight: bold; text-align: center;">${tenant.generalMetadata?.rspp || '-'}</div>
                        </div>
                        <div class="signature-box">
                            <span class="signature-label">Il Rappresentante Lavoratori (RLS)</span>
                            <div style="font-size: 9pt; font-weight: bold; text-align: center;">${tenant.generalMetadata?.rls || '-'}</div>
                        </div>
                    </div>
                </div>
                
                <div class="footer-page">
                    <span>${tenant.ragioneSociale}</span>
                    <span>Pagina ${pageCount}</span>
                </div>
            </div>
        </body></html>`;

        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.98);z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:sans-serif;';
        overlay.innerHTML = '<div style="width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid #0f172a;border-radius:50%;animation:spin 1s linear infinite;margin-bottom:20px;"></div><div id="pdf-progress" style="font-weight:bold;font-size:14px;color:#0f172a;">Compilazione Documento Tecnico...</div><style>@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}</style>';
        document.body.appendChild(overlay);

        const container = document.createElement('div');
        container.style.cssText = 'position:absolute;top:0;left:-9999px;width:794px;opacity:1;z-index:99998;';
        container.innerHTML = html;
        document.body.appendChild(container);

        try {
            await new Promise(r => setTimeout(r, 1200));

            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
            const pages = container.querySelectorAll('.page');
            const progressText = document.getElementById('pdf-progress');

            for (let i = 0; i < pages.length; i++) {
                if (progressText) progressText.innerText = `Elaborazione in Alta Definizione: Pagina ${i + 1} di ${pages.length}...`;

                const canvas = await html2canvas(pages[i], {
                    scale: 3,
                    useCORS: true,
                    backgroundColor: '#ffffff',
                    logging: false,
                    windowWidth: 794
                });

                const imgData = canvas.toDataURL('image/jpeg', 0.95);

                if (i > 0) pdf.addPage();
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
            }

            const tgApp = window.Telegram?.WebApp;
            const isMobile = (tgApp && (tgApp.platform === 'android' || tgApp.platform === 'ios')) || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

            if (progressText) progressText.innerText = `Invio al server in corso...`;

            if (isMobile) {
                try {
                    const webhookUrl = typeof WEBHOOK_URL !== 'undefined' ? WEBHOOK_URL : 'https://prod.workflow.trinai.it/webhook/7f254dec-e28f-452a-afb9-2a2a90206cbb';
                    const sessionAsh = typeof ash !== 'undefined' ? ash : (new URLSearchParams(window.location.search)).get('ash') || 'dev';
                    const initData = tgApp?.initData || '';
                    const pdfBase64Uri = pdf.output('datauristring');
                    const base64Data = pdfBase64Uri.split(',')[1];
                    const filename = `DVR_${tenant.ragioneSociale.replace(/\s+/g, '_')}_${new Date().getTime()}.pdf`;

                    const webhookPayload = {
                        action: 'document_to_valut',
                        base64: base64Data,
                        mimetype: 'application/pdf',
                        filename: filename,
                        ash: sessionAsh,
                        _auth: initData
                    };

                    fetch(webhookUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(webhookPayload)
                    });

                    if (tgApp && tgApp.showAlert) {
                        tgApp.showAlert("✅ Elaborato DVR generato con successo! Lo riceverai a breve in chat.");
                    } else {
                        alert("✅ Documento generato e inviato al server.");
                    }
                } catch (err) {
                    console.error('Mobile upload process error:', err);
                }
            } else {
                const pdfBytes = pdf.output('arraybuffer');
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `DVR_Valutazione_${tenant.ragioneSociale.replace(/\s+/g, '_')}.pdf`;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                setTimeout(() => URL.revokeObjectURL(url), 5000);
            }

        } catch (err) {
            console.error('DVR PDF Error:', err);
            alert('Errore generazione PDF: ' + err.message);
        } finally {
            document.body.removeChild(container);
            document.body.removeChild(overlay);
            if (window.hideLoader) window.hideLoader();
        }
    }
};