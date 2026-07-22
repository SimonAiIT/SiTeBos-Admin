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
            font-size: 22pt;
            font-weight: 900;
            letter-spacing: -0.03em;
            line-height: 1.2;
            color: #0f172a;
            margin-top: 60px;
            text-transform: uppercase;
        }
        
        .cover-subtitle {
            font-size: 11pt;
            color: #475569;
            margin-top: 20px;
            font-weight: 500;
            line-height: 1.5;
            border-top: 2px solid #0f172a;
            padding-top: 20px;
            text-align: justify;
        }

        /* Common Headers & Text */
        .header-doc {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            border-bottom: 2px solid #0f172a;
            padding-bottom: 12px;
            margin-bottom: 20px;
        }
        
        .header-doc h2 {
            font-size: 10pt;
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
            font-size: 13pt;
            font-weight: 900;
            color: #0f172a;
            border-bottom: 2px solid #0f172a;
            padding-bottom: 6px;
            margin-bottom: 16px;
            text-transform: uppercase;
            letter-spacing: -0.01em;
        }
        
        .section-subtitle {
            font-size: 9pt;
            font-weight: 800;
            color: #0f172a;
            margin-top: 16px;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-left: 3px solid #0f172a;
            padding-left: 8px;
        }
        
        p {
            text-align: justify;
            margin-bottom: 10px;
            font-size: 8.5pt;
            color: #334155;
        }
        
        /* Info Box */
        .info-box {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 16px;
            margin: 12px 0;
        }
        
        .info-title {
            font-size: 8pt;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #64748b;
            margin-bottom: 10px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 6px;
        }
        
        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            border-bottom: 1px dashed #e2e8f0;
            font-size: 8pt;
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
            margin: 12px 0;
            font-size: 7.5pt;
            line-height: 1.3;
        }
        
        th, td {
            border: 1px solid #e2e8f0;
            padding: 5px 7px;
            text-align: left;
            vertical-align: top;
        }
        
        th {
            background-color: #f8fafc;
            font-weight: 800;
            text-transform: uppercase;
            color: #0f172a;
            letter-spacing: 0.03em;
            font-size: 7pt;
            border-bottom: 2px solid #e2e8f0;
        }
        
        tbody tr:nth-child(even) {
            background-color: #f8fafc;
        }
        
        .badge {
            display: inline-block;
            padding: 2.5px 5px;
            border-radius: 5px;
            font-size: 7pt;
            font-weight: 800;
            letter-spacing: 0.02em;
            text-transform: uppercase;
        }
        
        .badge-success {
            background: #dcfce7;
            color: #16a34a;
        }
        
        .badge-info {
            background: #e0f2fe;
            color: #0369a1;
        }

        .analogy-box {
            background: #f0f9ff;
            border-left: 3px solid #0284c7;
            padding: 8px 10px;
            font-style: italic;
            font-size: 8pt;
            color: #0369a1;
            margin-top: 4px;
            border-radius: 4px;
        }

        .step-container {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 10px;
            margin-bottom: 10px;
            background: #fdfdfd;
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

        /* Responsive and Layout Helpers */
        .grid-2 {
            display: flex;
            gap: 15px;
            margin: 10px 0;
        }
        .grid-2 > div {
            flex: 1;
            margin: 0;
        }

        .rationale-box {
            background-color: #f8fafc;
            border-left: 3px solid #475569;
            padding: 8px 10px;
            font-style: italic;
            font-size: 7.5pt;
            color: #475569;
            margin-top: 5px;
            border-radius: 4px;
        }
    </style>
`;

const CatalogPrintEngine = {
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

    parametriVerticali: {
        "comune": { D: 2, C: 1, desc_d: "Infortuni o patologie professionali generiche", normativa_rif: "D.Lgs. 81/08 Titolo II" },
        "generic": { D: 2, C: 1, desc_d: "Infortuni lievi (scivolamento, caduta in piano)", normativa_rif: "D.Lgs. 81/08 Titolo II" },
        "dental": { D: 3, C: 2, desc_d: "Patogeni ematogeni e respiratori a danno grave", normativa_rif: "D.Lgs. 81/08 Titolo X" },
        "health": { D: 3, C: 2, desc_d: "Patogeni biologici a danno grave, rischi chimici", normativa_rif: "D.Lgs. 81/08 Titolo X, Legge Gelli-Bianco" },
        "beauty": { D: 2, C: 2, desc_d: "Patogeni a danno moderato, lesioni cutanee", normativa_rif: "D.Lgs. 81/08 Titolo VIII, D.M. 206/2015" },
        "food": { D: 3, C: 2, desc_d: "Tossinfezioni, trasmissione alimentare, tagli, ustioni", normativa_rif: "Regolamento CE 852/2004 (HACCP)" }
    },

    printSingleService: async function (payload) {
        if (!payload) return;
        if (window.showLoader) window.showLoader("Generazione PDF...");

        const now = new Date();
        const dateStr = now.toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });

        const service = payload.service_catalog || {};
        const blueprint = payload.process_blueprints || {};
        const kf = payload.knowledge_fragments || {};
        const adv = payload.advanced || {};

        const sIdentity = service.identity || adv.identity || {};
        const sPricing = service.pricing || adv.pricing || {};
        const sCommercial = service.commercial_setup || adv.commercial_setup || {};

        const rawName = sIdentity.item_name || blueprint.blueprint_name || "Scheda Tecnica";
        const shortDesc = sIdentity.description?.short || blueprint.blueprint_description || "";
        const longDesc = sIdentity.description?.long || "";
        const sku = sIdentity.item_sku || blueprint.service_sku || "N/A";
        const vertical = sIdentity.vertical || "N/A";
        const basePrice = sPricing.base_price !== undefined ? `${sPricing.base_price} ${sPricing.currency || 'EUR'}` : 'N/A';

        // ═════════ DATI DI PROPRIETÀ (OWNER INFO) ═════════
        const owner = payload.owner_data || payload.tenant || {};
        const tenantName = owner.ragioneSociale || owner.company_name || owner.ragione_sociale || "TRINAI SRL";
        const tenantVat = owner.pIva || owner.vat_number || owner.p_iva || "02564250849";

        // Helper per il piè di pagina uniforme su tutte le pagine
        const makeFooter = (pageNum) => `
            <div class="footer-page">
                <span>Proprietà di: ${tenantName} - P.IVA: ${tenantVat}</span>
                <span style="font-size: 6.5pt; color: #ef4444; font-weight: 800; letter-spacing: 0.05em;">[ DOCUMENTO INTERNO RISERVATO - VIETATA LA RIPRODUZIONE ]</span>
                <span>Pagina ${pageNum}</span>
            </div>
        `;

        // ═════════ COSTRUZIONE DELLE PAGINE HTML ═════════
        let html = `
            <!DOCTYPE html>
            <html lang="it">
            <head>
                <meta charset="UTF-8">
                ${dvrCommonStyles}
            </head>
            <body>
        `;

        let currentPageNum = 1;

        // ─── PAGINA 1: COPERTINA ───
        html += `
            <div class="page cover">
                <div class="cover-header">
                    <div style="font-size: 7pt; font-weight: 900; letter-spacing: 0.15em; text-transform: uppercase; color: #64748b;">
                        SiteBoS Documentazione Automatica
                    </div>
                    <div class="cover-title">${rawName}</div>
                    <div class="cover-subtitle">${shortDesc}</div>
                </div>

                <div class="info-box">
                    <div class="info-title">Metadati di Sistema</div>
                    <div class="info-row">
                        <span class="info-label">Identificativo SKU</span>
                        <span class="info-value">${sku}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Tipo Elemento</span>
                        <span class="info-value">${sIdentity.item_type || 'PRODUCT'}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Prezzo Base di Listino</span>
                        <span class="info-value">${basePrice}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Verticalizzazione</span>
                        <span class="info-value" style="text-transform: uppercase;">${vertical}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Data Creazione</span>
                        <span class="info-value">${service.metadata?.created_at ? new Date(service.metadata.created_at).toLocaleDateString('it-IT') : dateStr}</span>
                    </div>
                </div>

                ${makeFooter(currentPageNum)}
            </div>
        `;

        // ─── PAGINA 2: SCHEDA PRODOTTO, OPZIONI ED ADVANCED ───
        currentPageNum++;
        
        const ops = service.operations || adv.operations || {};
        const taxable = sPricing.tax_info?.taxable !== undefined ? sPricing.tax_info.taxable : (sPricing.tax_rate_percentage > 0);
        const taxRate = sPricing.tax_info?.tax_rate_percentage || sPricing.tax_rate_percentage || 22;
        const cogsVal = sPricing.cost_of_goods !== undefined && sPricing.cost_of_goods !== null ? sPricing.cost_of_goods : adv.pricing?.cost_of_goods;
        
        // Calcolo automatico COGS dalla BOM se non presente direttamente
        let computedCogs = 0;
        const bomItems = adv.bom || service.bom || [];
        bomItems.forEach(item => {
            const qty = parseFloat(item.qty || item.usage || 0);
            const unitCost = parseFloat(item.unit_cost || item.cost || 0);
            computedCogs += qty * unitCost;
        });
        const finalCogs = (cogsVal !== undefined && cogsVal !== null) ? cogsVal : computedCogs;

        html += `
            <div class="page">
                <div>
                    <div class="header-doc">
                        <span>SKU: ${sku}</span>
                        <h2>SCHEDA PRODOTTO & COMMERCIALE</h2>
                    </div>
                    <div class="chapter-title">Specifiche Generali</div>
                    
                    ${longDesc ? `
                        <div class="section-subtitle">Descrizione Estesa</div>
                        <p>${longDesc}</p>
                    ` : ''}

                    ${sCommercial.extra_options && sCommercial.extra_options.length > 0 ? `
                        <div class="section-subtitle">Opzioni Commerciali Correlate</div>
                        <table>
                           <thead>
                               <tr>
                                   <th>Nome Opzione / Servizio Integrato</th>
                                   <th style="width: 100px; text-align: right;">Prezzo Extra</th>
                               </tr>
                           </thead>
                           <tbody>
                               ${sCommercial.extra_options.map(opt => `
                                   <tr>
                                       <td><strong>${opt.name}</strong></td>
                                       <td style="text-align: right; font-weight: 700; color: #0284c7;">+ ${opt.price} ${sPricing.currency || 'EUR'}</td>
                                   </tr>
                               `).join('')}
                           </tbody>
                        </table>
                    ` : ''}

                    <!-- Parametri Avanzati (Advanced Management) -->
                    <div class="section-subtitle">Parametri Avanzati & Operativi</div>
                    <div class="info-box" style="margin-top: 5px;">
                        <div class="info-row">
                            <span class="info-label">Costo dei Materiali (COGS)</span>
                            <span class="info-value">${finalCogs > 0 ? `${finalCogs.toFixed(2)} ${sPricing.currency || 'EUR'}` : 'Non Definito / Nullo'}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Regime Fiscale Aliquota IVA</span>
                            <span class="info-value">${taxable ? `Soggetta ad IVA (${taxRate}%)` : 'Esente IVA'}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Richiede Prenotazione Slot</span>
                            <span class="info-value">${ops.requires_booking ? 'Sì (Richiede slot in Agenda)' : 'No'}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Controllo Scorte Magazzino</span>
                            <span class="info-value">${ops.requires_inventory_check ? 'Sì (Check scorte attivo)' : 'No'}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Tempo di Esecuzione (Fulfillment)</span>
                            <span class="info-value">${ops.fulfillment_time?.value || 0} ${ops.fulfillment_time?.unit || 'minuti'}</span>
                        </div>
                        ${ops.provider_info?.required_skill_tags && ops.provider_info.required_skill_tags.length > 0 ? `
                        <div class="info-row">
                            <span class="info-label">Competenze Operatore Richieste</span>
                            <span class="info-value">${ops.provider_info.required_skill_tags.join(', ')}</span>
                        </div>
                        ` : ''}
                    </div>

                    <!-- Rendering BOM se presente -->
                    ${bomItems.length > 0 ? `
                        <div class="section-subtitle" style="margin-top: 15px;">Distinta Base dei Componenti (BOM)</div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Componente / Risorsa</th>
                                    <th style="width: 80px; text-align: center;">Quantità</th>
                                    <th style="width: 100px; text-align: right;">Costo Unitario</th>
                                    <th style="width: 100px; text-align: right;">Totale</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${bomItems.map(item => {
                                    const qty = parseFloat(item.qty || item.usage || 0);
                                    const uCost = parseFloat(item.unit_cost || item.cost || 0);
                                    const tot = qty * uCost;
                                    return `
                                        <tr>
                                            <td><strong>${item.name || item.item_sku || 'Risorsa'}</strong><br/><span style="font-size: 6.5pt; color: #64748b;">SKU: ${item.item_sku || 'N/A'}</span></td>
                                            <td style="text-align: center;">${qty} ${item.unit_of_measure || 'pz'}</td>
                                            <td style="text-align: right;">${uCost.toFixed(2)} ${sPricing.currency || 'EUR'}</td>
                                            <td style="text-align: right; font-weight: 700;">${tot.toFixed(2)} ${sPricing.currency || 'EUR'}</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    ` : ''}

                    ${sIdentity.tags && sIdentity.tags.length > 0 ? `
                        <div style="margin-top: 10px;">
                            <span class="info-label" style="font-size: 7.5pt; font-weight: 800; text-transform: uppercase;">Tag: </span>
                            ${sIdentity.tags.map(t => `<span class="badge badge-info" style="margin-right: 4px; font-size: 6.5pt;">${t}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
                ${makeFooter(currentPageNum)}
            </div>
        `;

        // ─── PAGINA 3: BASE CONOSCENZA AI (KNOWLEDGE BASE) ───
        if (kf && (kf.summary || kf.sections)) {
            currentPageNum++;
            html += `
                <div class="page">
                    <div>
                        <div class="header-doc">
                            <span>SKU: ${sku}</span>
                            <h2>BASE CONOSCENZA AI & FAQ</h2>
                        </div>
                        <div class="chapter-title">Addestramento Modello AI</div>

                        ${kf.summary ? `
                            <div class="section-subtitle">Sintesi Cognitiva</div>
                            <p style="font-weight: 500; color: #0f172a;">${kf.summary}</p>
                        ` : ''}

                        ${kf.answer_fragment ? `
                            <div class="section-subtitle">Risposta Primaria Predefinita</div>
                            <p>${kf.answer_fragment}</p>
                        ` : ''}

                        ${kf.sections && kf.sections.length > 0 ? `
                            <div class="section-subtitle">Sezioni Didattiche & FAQ</div>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                ${kf.sections.slice(0, 3).map(sec => `
                                    <div style="margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
                                        <div style="font-weight: 800; font-size: 8.5pt; color: #0f172a; margin-bottom: 3px;">Q: ${sec.question}</div>
                                        <p style="margin-bottom: 4px; font-size: 8pt;">${sec.answer}</p>
                                        ${sec.analogy ? `<div class="analogy-box">💡 <strong>Analogia:</strong> ${sec.analogy}</div>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    ${makeFooter(currentPageNum)}
                </div>
            `;
        }

        // ─── PAGINA 4: PROCESSO AZIENDALE (SOP) ───
        if (blueprint && blueprint.stages && blueprint.stages.length > 0) {
            currentPageNum++;
            html += `
                <div class="page">
                    <div>
                        <div class="header-doc">
                            <span>SKU: ${sku}</span>
                            <h2>PROCESSO AZIENDALE E SOP</h2>
                        </div>
                        <div class="chapter-title">Mappatura del Flusso Operativo</div>

                        <div class="info-box" style="padding: 10px 14px; margin: 8px 0 16px 0;">
                            <div style="display: flex; justify-content: space-between; font-size: 8pt;">
                                <span><strong>Tempo Stimato Totale:</strong> ${blueprint.summary?.estimated_total_time_minutes || 'N/A'} minuti</span>
                                <span><strong>Costo Stimato Risorse:</strong> ${blueprint.summary?.estimated_total_cost || '0.00 EUR'}</span>
                                <span><strong>Tipo Flusso:</strong> ${blueprint.blueprint_type || 'DIGITAL_FLOW'}</span>
                            </div>
                        </div>

                        <div class="section-subtitle">Fasi del Processo</div>
                        ${blueprint.stages.map(stage => `
                            <div style="margin-bottom: 14px; border-left: 2px solid #0f172a; padding-left: 10px;">
                                <div style="font-weight: 800; font-size: 9pt; color: #0f172a;">
                                    Fase ${stage.stage_order || stage.stage_id}: ${stage.stage_name}
                                </div>
                                <div style="font-size: 7.5pt; color: #64748b; margin-bottom: 6px;">${stage.description || ''}</div>
                                
                                ${stage.steps ? stage.steps.map(step => `
                                    <div class="step-container">
                                        <div style="font-weight: 700; font-size: 8pt; color: #0284c7;">
                                            Step ${step.step_id}: ${step.step_name} (${step.estimated_time_minutes} min)
                                        </div>
                                        <div style="font-size: 8pt; color: #334155; margin-top: 3px;">
                                            <strong>Istruzioni:</strong> ${step.instructions}
                                        </div>
                                        
                                        ${step.quality_check && step.quality_check.is_required ? `
                                            <div style="font-size: 7.5pt; margin-top: 4px; color: #16a34a; background: #f0fdf4; padding: 4px 6px; border-radius: 4px;">
                                                ✔️ <strong>Verifica Qualità (${step.quality_check.evidence_type}):</strong> ${step.quality_check.check_description}
                                            </div>
                                        ` : ''}
                                    </div>
                                `).join('') : ''}
                            </div>
                        `).join('')}
                    </div>
                    ${makeFooter(currentPageNum)}
                </div>
            `;
        }

        // ─── PAGINA 5: ANALISI ECONOMICA E SIMULAZIONI PREDITTIVE ───
        if (adv.financial_simulations) {
            currentPageNum++;
            const sim = adv.financial_simulations;
            const scenarios = sim.predictive_volume_simulation?.scenarios || [];
            const breakEven = sim.predictive_volume_simulation?.break_even_point_metrics || {};
            const noShow = sim.predictive_volume_simulation?.no_show_sensitivity_analysis || {};
 
            html += `
                <div class="page">
                    <div>
                        <div class="header-doc">
                            <span>SKU: ${sku}</span>
                            <h2>ANALISI ECONOMICA E SIMULAZIONI PREDITTIVE</h2>
                        </div>
                        <div class="chapter-title">Sostenibilità Finanziaria & Volumi</div>
 
                        <div class="section-subtitle">Scenari di Volume Mensili</div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Parametro Finanziario</th>
                                    <th style="text-align: center;">Scenario 10 Unità</th>
                                    <th style="text-align: center;">Scenario 50 Unità</th>
                                    <th style="text-align: center;">Scenario 100 Unità</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Ricavi Totali Generati</strong></td>
                                    <td style="text-align: center; font-weight:700;">${scenarios[0]?.total_revenues !== undefined ? scenarios[0].total_revenues + ' EUR' : '0 EUR'}</td>
                                    <td style="text-align: center; font-weight:700;">${scenarios[1]?.total_revenues !== undefined ? scenarios[1].total_revenues + ' EUR' : '0 EUR'}</td>
                                    <td style="text-align: center; font-weight:700;">${scenarios[2]?.total_revenues !== undefined ? scenarios[2].total_revenues + ' EUR' : '0 EUR'}</td>
                                </tr>
                                <tr>
                                    <td>Costi Variabili Diretti</td>
                                    <td style="text-align: center; color: #ef4444;">- ${scenarios[0]?.total_direct_variable_costs !== undefined ? scenarios[0].total_direct_variable_costs + ' EUR' : '0 EUR'}</td>
                                    <td style="text-align: center; color: #ef4444;">- ${scenarios[1]?.total_direct_variable_costs !== undefined ? scenarios[1].total_direct_variable_costs + ' EUR' : '0 EUR'}</td>
                                    <td style="text-align: center; color: #ef4444;">- ${scenarios[2]?.total_direct_variable_costs !== undefined ? scenarios[2].total_direct_variable_costs + ' EUR' : '0 EUR'}</td>
                                </tr>
                                <tr style="background-color: #f0fdf4;">
                                    <td><strong>Margine di Contribuzione</strong></td>
                                    <td style="text-align: center; color: #16a34a; font-weight:700;">${scenarios[0]?.total_contribution_margin !== undefined ? scenarios[0].total_contribution_margin + ' EUR' : '0 EUR'}</td>
                                    <td style="text-align: center; color: #16a34a; font-weight:700;">${scenarios[1]?.total_contribution_margin !== undefined ? scenarios[1].total_contribution_margin + ' EUR' : '0 EUR'}</td>
                                    <td style="text-align: center; color: #16a34a; font-weight:700;">${scenarios[2]?.total_contribution_margin !== undefined ? scenarios[2].total_contribution_margin + ' EUR' : '0 EUR'}</td>
                                </tr>
                                <tr>
                                    <td>Costi Fissi Sedia Allocati</td>
                                    <td style="text-align: center; color: #64748b;">- ${scenarios[0]?.total_fixed_chair_costs_allocated !== undefined ? scenarios[0].total_fixed_chair_costs_allocated + ' EUR' : '0 EUR'}</td>
                                    <td style="text-align: center; color: #64748b;">- ${scenarios[1]?.total_fixed_chair_costs_allocated !== undefined ? scenarios[1].total_fixed_chair_costs_allocated + ' EUR' : '0 EUR'}</td>
                                    <td style="text-align: center; color: #64748b;">- ${scenarios[2]?.total_fixed_chair_costs_allocated !== undefined ? scenarios[2].total_fixed_chair_costs_allocated + ' EUR' : '0 EUR'}</td>
                                </tr>
                                <tr style="background-color: #eff6ff; border-top: 2px solid #3b82f6;">
                                    <td><strong>Utile Operativo Stimato (EBIT)</strong></td>
                                    <td style="text-align: center; color: #1d4ed8; font-weight:900;">${scenarios[0]?.total_projected_operating_income !== undefined ? scenarios[0].total_projected_operating_income + ' EUR' : '0 EUR'}</td>
                                    <td style="text-align: center; color: #1d4ed8; font-weight:900;">${scenarios[1]?.total_projected_operating_income !== undefined ? scenarios[1].total_projected_operating_income + ' EUR' : '0 EUR'}</td>
                                    <td style="text-align: center; color: #1d4ed8; font-weight:900;">${scenarios[2]?.total_projected_operating_income !== undefined ? scenarios[2].total_projected_operating_income + ' EUR' : '0 EUR'}</td>
                                </tr>
                                <tr>
                                    <td>Saturazione dell'Agenda Richiesta</td>
                                    <td style="text-align: center;">${scenarios[0]?.agenda_saturation_percentage || 0}%</td>
                                    <td style="text-align: center;">${scenarios[1]?.agenda_saturation_percentage || 0}%</td>
                                    <td style="text-align: center;">${scenarios[2]?.agenda_saturation_percentage || 0}%</td>
                                </tr>
                            </tbody>
                        </table>
 
                        <div class="section-subtitle">Punto di Pareggio Strutturale (Break-Even)</div>
                        <div class="info-box" style="margin-top: 5px;">
                            <div class="info-row">
                                <span class="info-label">Overhead Strutturale Allocato alla Branca</span>
                                <span class="info-value">${breakEven.allocated_overhead_value || 0} EUR (${breakEven.allocated_budget_percentage !== undefined ? (breakEven.allocated_budget_percentage * 100).toFixed(1) : 0}%)</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Unità Minime Annue di Vendita</span>
                                <span class="info-value" style="color: #1d4ed8; font-weight: 800;">${breakEven.break_even_units_annually || 0} Prestazioni</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Ore Sedia Annue Richieste al Pareggio</span>
                                <span class="info-value">${breakEven.break_even_chair_hours_annually || 0} Ore</span>
                            </div>
                        </div>
                        <div class="rationale-box" style="margin-top: 5px;">
                            <strong>Razionale di Calcolo:</strong> ${breakEven.break_even_calculation_rationale || ''}
                        </div>
 
                        <div class="section-subtitle" style="margin-top: 15px;">Sensibilità e Rischio No-Show (Appuntamenti Mancati)</div>
                        <p>La mancata presentazione del paziente senza preavviso distrugge la marginalità oraria dello studio, lasciando scoperti i costi fissi di gestione.</p>
                        <div style="display: flex; gap: 15px; margin-top: 5px;">
                            <div class="info-box" style="flex: 1; margin: 0; border-left: 3px solid #f97316;">
                                <div style="font-size: 7.5pt; font-weight: 800; color: #f97316;">PERDITA AL 5% NO-SHOW</div>
                                <div style="font-size: 11pt; font-weight: 900; color: #0f172a; margin-top: 3px;">- ${noShow.no_show_rate_5_percent_loss || 0} EUR</div>
                            </div>
                            <div class="info-box" style="flex: 1; margin: 0; border-left: 3px solid #ef4444;">
                                <div style="font-size: 7.5pt; font-weight: 800; color: #ef4444;">PERDITA AL 10% NO-SHOW</div>
                                <div style="font-size: 11pt; font-weight: 900; color: #0f172a; margin-top: 3px;">- ${noShow.no_show_rate_10_percent_loss || 0} EUR</div>
                            </div>
                        </div>
                        <p style="margin-top: 8px; font-style: italic; font-size: 8pt; color: #64748b;">
                            <strong>Nota Strategica:</strong> ${noShow.impact_analysis_comment || ''}
                        </p>
                    </div>
                    ${makeFooter(currentPageNum)}
                </div>
            `;
        }

        // ─── PAGINA 6: DECOMPOSIZIONE ANALITICA DEI COSTI DELLA DISTINTA BASE (BOM) ───
        if (adv.bill_of_materials) {
            currentPageNum++;
            const bom = adv.bill_of_materials;
            const steps = bom.bom_steps || [];
 
            html += `
                <div class="page">
                    <div>
                        <div class="header-doc">
                            <span>SKU: ${sku}</span>
                            <h2>DECOMPOSIZIONE ANALITICA DEI COSTI (BOM)</h2>
                        </div>
                        <div class="chapter-title">Dettaglio Costi per Sotto-Processo Operativo</div>
                        
                        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 5px;">
                            ${steps.map((step, idx) => {
                                const cb = step.calculation_breakdown || {};
                                return `
                                    <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 8px 10px; background-color: #fdfdfd; margin-bottom: 2px;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px; margin-bottom: 6px;">
                                            <span style="font-size: 8pt; font-weight: 900; color: #0f172a;">${idx + 1}. ${step.subprocess_name || 'Sotto-Processo'}</span>
                                            <span style="font-size: 7pt; font-weight: 700; color: #64748b;">SKU: ${step.subprocess_sku || 'N/A'} | Tempo: ${step.estimated_total_time_minutes || 0} min</span>
                                        </div>
                                        
                                        <div class="grid-2">
                                            <div>
                                                <table style="margin: 0; font-size: 7pt; line-height: 1.2;">
                                                    <tbody>
                                                        <tr>
                                                            <td>Costo Consumabili</td>
                                                            <td style="text-align: right; font-weight: 700;">${cb.consumables !== undefined ? cb.consumables : 0} EUR</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Quota Ammortamento Asset</td>
                                                            <td style="text-align: right; font-weight: 700;">${cb.depreciation !== undefined ? cb.depreciation : 0} EUR</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Costo Orario Staff impiegato</td>
                                                            <td style="text-align: right; font-weight: 700;">${cb.staff_cost !== undefined ? cb.staff_cost : 0} EUR</td>
                                                        </tr>
                                                        <tr style="background-color: #f8fafc;">
                                                            <td>Tempo Occupazione Sedia</td>
                                                            <td style="text-align: right; font-weight: 700;">${cb.chair_occupancy_time_minutes || 0} min</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; min-width: 120px;">
                                                <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 6px 10px; text-align: center; width: 100%;">
                                                    <div style="font-size: 6.5pt; font-weight: 800; color: #1d4ed8; text-transform: uppercase;">COSTO INTERNO STIMATO</div>
                                                    <div style="font-size: 11pt; font-weight: 900; color: #1e3a8a; margin-top: 2px;">${step.estimated_internal_cost || 0} EUR</div>
                                                    ${step.estimated_cost_per_100_units ? `
                                                        <div style="font-size: 6pt; color: #64748b; margin-top: 1px;">(${step.estimated_cost_per_100_units} EUR / 100 unità)</div>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        ${step.cost_scaling_rationale ? `
                                            <div class="rationale-box" style="margin-top: 4px;">
                                                <strong>Razionale Operativo:</strong> ${step.cost_scaling_rationale}
                                            </div>
                                        ` : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    ${makeFooter(currentPageNum)}
                </div>
            `;
        }

        // ─── PAGINA 7: ANALISI COMPARATIVA DEI COMPETITOR E CONFORMITÀ FISCALE ───
        if (adv.market_and_fiscal_intelligence) {
            currentPageNum++;
            const intel = adv.market_and_fiscal_intelligence;
            const competitors = intel.competitors || [];
            const fiscal = intel.fiscal_analysis || {};
            const compliance = fiscal.local_compliance_burdens || [];
 
            html += `
                <div class="page">
                    <div>
                        <div class="header-doc">
                            <span>SKU: ${sku}</span>
                            <h2>INTELLIGENCE COMPETITIVA & CONFORMITÀ FISCALE</h2>
                        </div>
                        <div class="chapter-title">Analisi di Mercato e Quadro Regolatorio</div>
 
                        <div class="section-subtitle">Analisi dei Competitor Territoriali</div>
                        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 4px;">
                            ${competitors.map(comp => `
                                <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px; background-color: #fdfdfd;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px; margin-bottom: 6px;">
                                        <strong style="font-size: 8pt; color: #0f172a;">${comp.name || 'Studio Competitor'}</strong>
                                        <span style="font-size: 7.5pt; font-weight: 700; color: #64748b;">Distanza: ${comp.distance_km || 0} km | Prezzo Stimato: ${comp.estimated_price || 0} EUR</span>
                                    </div>
                                    
                                    <div class="grid-2">
                                        <div>
                                            <div style="font-size: 7pt; font-weight: 800; color: #16a34a; text-transform: uppercase;">Punti di Forza (USP Strengths)</div>
                                            <ul style="margin: 3px 0 0 0; padding-left: 12px; font-size: 7pt; color: #475569; line-height:1.3;">
                                                ${(comp.usp_gap_strengths || []).map(s => `<li>${s}</li>`).join('')}
                                            </ul>
                                        </div>
                                        <div>
                                            <div style="font-size: 7pt; font-weight: 800; color: #ef4444; text-transform: uppercase;">Punti di Debolezza (USP Weaknesses)</div>
                                            <ul style="margin: 3px 0 0 0; padding-left: 12px; font-size: 7pt; color: #475569; line-height:1.3;">
                                                ${(comp.usp_gap_weaknesses || []).map(w => `<li>${w}</li>`).join('')}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
 
                        <div class="section-subtitle" style="margin-top: 15px;">Inquadramento Fiscale e Aliquote</div>
                        <div class="info-box" style="margin-top: 4px; padding: 8px 12px;">
                            <div class="info-row">
                                <span class="info-label">Regime Fiscale Applicato</span>
                                <span class="info-value">${fiscal.regime_name || 'N/A'}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Pressione Fiscale Stimata (IRES/IRAP o Eqv.)</span>
                                <span class="info-value" style="color: #ef4444;">${fiscal.total_estimated_tax_burden_ratio !== undefined ? (fiscal.total_estimated_tax_burden_ratio * 100).toFixed(1) + '%' : 'N/A'}</span>
                            </div>
                        </div>
 
                        ${compliance.length > 0 ? `
                            <div class="section-subtitle">Oneri di Conformità Locale</div>
                            <table style="font-size: 7pt; line-height: 1.25;">
                                <thead>
                                    <tr>
                                        <th>Tributo / Adempimento</th>
                                        <th style="width: 100px; text-align: right;">Costo Annuo</th>
                                        <th>Requisito Normativo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${compliance.map(item => `
                                        <tr>
                                            <td><strong>${item.burden_name || 'Onere'}</strong></td>
                                            <td style="text-align: right; font-weight: 700; color: #ef4444;">${item.annual_cost || 0} EUR</td>
                                            <td><span style="font-size: 6.5pt; color: #475569;">${item.requirement_description || ''}</span></td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        ` : ''}
                    </div>
                    ${makeFooter(currentPageNum)}
                </div>
            `;
        }

        // ─── PAGINA 8: REGISTRO MANUTENZIONE ASSET & PROTOCOLLI AMBIENTALI ───
        if (adv.environments || adv.assets) {
            currentPageNum++;
            const envs = adv.environments || [];
            const assets = adv.assets || [];
 
            html += `
                <div class="page">
                    <div>
                        <div class="header-doc">
                            <span>SKU: ${sku}</span>
                            <h2>MANUTENZIONE ASSET & PROTOCOLLI AMBIENTALI</h2>
                        </div>
                        <div class="chapter-title">Conformità Operativa Struttura</div>
 
                        ${envs.length > 0 ? `
                            <div class="section-subtitle">Protocolli Ambientali Clinici / Operativi</div>
                            ${envs.map(env => `
                                <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px; background-color: #fdfdfd; margin-bottom: 8px;">
                                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px; margin-bottom: 6px;">
                                        <strong style="font-size: 8pt; color: #0f172a;">Locale: ${env.name}</strong>
                                        <span style="font-size: 7.5pt; font-weight: 700; color: #64748b;">Temp/Privacy: ${env.temperature || 'N/A'}</span>
                                    </div>
                                    <div class="rationale-box" style="margin: 4px 0 6px 0;">
                                        <strong>Allocazione Oraria:</strong> ${env.cost_scaling_rationale || ''}
                                    </div>
                                    ${env.maintenance_checklist && env.maintenance_checklist.length > 0 ? `
                                        <table style="margin: 4px 0 0 0; font-size: 6.5pt; line-height: 1.2;">
                                            <thead>
                                                <tr>
                                                    <th>Attività Manutenzione Locale</th>
                                                    <th style="width: 70px;">Frequenza</th>
                                                    <th>Istruzioni Operative</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${env.maintenance_checklist.map(chk => `
                                                    <tr>
                                                        <td><strong>${chk.task_name}</strong></td>
                                                        <td><span class="badge ${chk.frequency === 'DAILY' ? 'badge-success' : 'badge-info'}">${chk.frequency}</span></td>
                                                        <td>${chk.instructions}</td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    ` : ''}
                                </div>
                            `).join('')}
                        ` : ''}
 
                        ${assets.length > 0 ? `
                            <div class="section-subtitle" style="margin-top: 10px;">Registro Asset & Apparecchiature Strumentali</div>
                            ${assets.map(asset => `
                                <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px; background-color: #fdfdfd; margin-bottom: 8px;">
                                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px; margin-bottom: 6px;">
                                        <strong style="font-size: 8pt; color: #0f172a;">${asset.name} (${asset.model || 'N/A'})</strong>
                                        <span style="font-size: 7.5pt; font-weight: 700; color: #64748b;">SKU: ${asset.sku || 'N/A'}</span>
                                    </div>
                                    <div style="font-size: 7pt; color: #475569; line-height:1.3; margin-bottom: 4px;">
                                        <strong>Note Conformità:</strong> ${asset.compliance_notes || 'N/A'}
                                    </div>
                                    <div class="rationale-box" style="margin: 4px 0 6px 0;">
                                        <strong>Ammortamento Orario Bilancio:</strong> ${asset.cost_scaling_rationale || ''}
                                    </div>
                                    ${asset.maintenance_checklist && asset.maintenance_checklist.length > 0 ? `
                                        <table style="margin: 4px 0 0 0; font-size: 6.5pt; line-height: 1.2;">
                                            <thead>
                                                <tr>
                                                    <th>Task Tecnico Macchinario</th>
                                                    <th style="width: 70px;">Frequenza</th>
                                                    <th>Istruzioni Tecniche</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${asset.maintenance_checklist.map(chk => `
                                                    <tr>
                                                        <td><strong>${chk.task_name}</strong></td>
                                                        <td><span class="badge ${chk.frequency === 'DAILY' ? 'badge-success' : 'badge-info'}">${chk.frequency}</span></td>
                                                        <td>${chk.instructions}</td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    ` : ''}
                                </div>
                            `).join('')}
                        ` : ''}
                    </div>
                    ${makeFooter(currentPageNum)}
                </div>
            `;
        }
 
        // ─── PAGINA 9: CONSULENZA STRATEGICA E RACCOMANDAZIONI OPERATIVE ───
        if (blueprint && (blueprint.operations_financial_health_rating || blueprint.pricing_and_tariff_strategy_advisory || (blueprint.operations_cost_optimization_recommendations && blueprint.operations_cost_optimization_recommendations.length > 0))) {
            currentPageNum++;
            const hasRecommendations = blueprint.operations_cost_optimization_recommendations && blueprint.operations_cost_optimization_recommendations.length > 0;
            const ratingText = (blueprint.operations_financial_health_rating || "").replace(/_/g, ' ');
            
            html += `
                <div class="page">
                    <div>
                        <div class="header-doc">
                            <span>SKU: ${sku}</span>
                            <h2>ANALISI ECONOMICA & EFFICIENZA</h2>
                        </div>
                        <div class="chapter-title">Sostenibilità & Ottimizzazione Costi</div>
 
                        ${blueprint.operations_financial_health_rating ? `
                            <div style="margin-bottom: 15px;">
                                <span class="badge badge-success" style="font-size: 8.5pt; padding: 4px 8px; font-weight: 900; letter-spacing: 0.05em;">
                                    🏆 Rating Profitto: ${ratingText}
                                </span>
                            </div>
                        ` : ''}
 
                        ${blueprint.pricing_and_tariff_strategy_advisory ? `
                            <div class="section-subtitle">Consulenza Strategica e Tariffaria</div>
                            <p style="font-style: italic; font-weight: 500; color: #1e293b; line-height: 1.5; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px;">
                                "${blueprint.pricing_and_tariff_strategy_advisory}"
                            </p>
                        ` : ''}
 
                        ${hasRecommendations ? `
                            <div class="section-subtitle" style="margin-top: 20px;">Raccomandazioni di Efficienza Operativa</div>
                            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                                ${blueprint.operations_cost_optimization_recommendations.map((rec, rIdx) => `
                                    <div style="display: flex; gap: 8px; font-size: 8.5pt; color: #334155; line-height: 1.45; border-bottom: 1px dashed #f1f5f9; padding-bottom: 6px;">
                                        <span style="font-weight: 900; color: #0284c7;">${rIdx + 1}.</span>
                                        <span>${rec}</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    ${makeFooter(currentPageNum)}
                </div>
            `;
        }

        html += `
            </body>
            </html>
        `;

        // ═════════ COMPILAZIONE PDF VIA HTML2CANVAS & JSPDF ═════════
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
                    const webhookUrl = "https://prod.workflow.trinai.it/webhook/0fff7fa2-bcb2-4b50-a26b-589b7054952e";
                    const sessionAsh = typeof ash !== 'undefined' ? ash : (new URLSearchParams(window.location.search)).get('ash') || 'dev';
                    const initData = tgApp?.initData || '';
                    const pdfBase64Uri = pdf.output('datauristring');
                    const base64Data = pdfBase64Uri.split(',')[1];
                    
                    const cleanShort = (sIdentity.short_name || sIdentity.item_name || 'Scheda').replace(/[^a-zA-Z0-9]/g, '_');
                    const filename = `${cleanShort}_${sku}.pdf`;

                    const webhookPayload = {
                        action: 'print_mobile',
                        base64: base64Data,
                        mimetype: 'application/pdf',
                        filename: filename,
                        ash: sessionAsh,
                        _auth: initData
                    };

                    await fetch(webhookUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(webhookPayload)
                    });

                    if (tgApp && tgApp.showAlert) {
                        tgApp.showAlert("✅ Scheda Tecnica generata in Alta Qualità! In arrivo nella chat.");
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
                const cleanShort = (sIdentity.short_name || sIdentity.item_name || 'Scheda').replace(/[^a-zA-Z0-9]/g, '_');
                a.download = `${cleanShort}_${sku}.pdf`;
                a.click();
                URL.revokeObjectURL(url);
            }
        } catch (e) {
            console.error(e);
        } finally {
            document.body.removeChild(container);
            if (window.hideLoader) window.hideLoader();
        }
    },

    printAiGuide: async function (payload) {
        if (!payload) return null;
        if (window.showLoader) window.showLoader("Generazione Guida AI...");

        const owner = payload.owner_data || payload.tenant || {};
        const tenantName = owner.ragioneSociale || owner.company_name || owner.ragione_sociale || "TRINAI SRL";
        const tenantVat = owner.pIva || owner.vat_number || owner.p_iva || "02564250849";

        let htmlContent = payload.html_content || payload.content || "";
        let title = payload.title || "Guida Generata con AI";

        if (!htmlContent && payload.knowledge_fragments) {
            const kf = payload.knowledge_fragments;
            htmlContent = `
                <div class="chapter-title">${kf.title || title}</div>
                <p style="font-size: 10pt; font-weight: 500; color: #0f172a;">${kf.summary || ''}</p>
                <div style="margin-top: 15px; border-left: 3px solid #0f172a; padding-left: 10px; font-style: italic; color: #334155;">
                    ${kf.answer_fragment || ''}
                </div>
                <div style="margin-top: 20px;">
                    ${kf.sections ? kf.sections.map(sec => `
                        <div style="margin-bottom: 15px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 10px;">
                            <h4 style="font-weight: 800; font-size: 9pt; color: #0f172a; margin-bottom: 4px;">Q: ${sec.question}</h4>
                            <p style="font-size: 8.5pt; color: #334155; text-align: justify;">${sec.answer}</p>
                            ${sec.analogy ? `<div class="analogy-box">💡 <strong>Analogia:</strong> ${sec.analogy}</div>` : ''}
                        </div>
                    `).join('') : ''}
                </div>
            `;
        }

        const html = `
            <!DOCTYPE html>
            <html lang="it">
            <head>
                <meta charset="UTF-8">
                ${dvrCommonStyles}
            </head>
            <body>
                <div class="page">
                    <div>
                        <div class="header-doc">
                            <span>SiteBoS AI Writer</span>
                            <h2>GUIDA INFORMATIVA</h2>
                        </div>
                        <div style="margin-top: 10px;">
                            ${htmlContent}
                        </div>
                    </div>
                    <div class="footer-page">
                        <span>Proprietà di: ${tenantName} - P.IVA: ${tenantVat}</span>
                        <span style="font-size: 6.5pt; color: #ef4444; font-weight: 800; letter-spacing: 0.05em;">[ DOCUMENTO INTERNO RISERVATO - VIETATA LA RIPRODUZIONE ]</span>
                        <span>Pagina 1</span>
                    </div>
                </div>
            </body>
            </html>
        `;

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

            const pdfBase64Uri = pdf.output('datauristring');
            return pdfBase64Uri.split(',')[1];
        } catch (e) {
            console.error("Errore generazione Guida AI:", e);
            return null;
        } finally {
            document.body.removeChild(container);
            if (window.hideLoader) window.hideLoader();
        }
    }
};

window.CatalogPrintEngine = CatalogPrintEngine;
