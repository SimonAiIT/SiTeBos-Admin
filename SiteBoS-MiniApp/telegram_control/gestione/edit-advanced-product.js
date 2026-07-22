// --- GLOBAL CALCULATION LOGIC & STATE SYNCHRONISATION FOR PRODUCTS ---

const currFmt = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' });


async function loadData() {
    try {
        const res = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                _auth: tg.initData,
                action: 'GET',
                type: 'PRODUCT',
                sop_id: sopId,
                message_id: messageId,
                ash: ash
            })
        });
        const rawData = await res.json();
        console.log("Dati ricevuti dal server:", rawData);
        
        const d = Array.isArray(rawData) ? rawData[0] : rawData;
        if (!d) {
            throw new Error("Dati non validi o vuoti ricevuti dal server");
        }
        
        const doc = d.data || d.advanced_catalog_item || d.catalog_item || d.catalog_item_draft || d;
        let productData = {};

        // Riconoscimento dello schema n8n (ADVANCED_SERVICE_BLUEPRINT)
        const isRawSchema = !doc.bom || !doc.pricing;

        if (isRawSchema) {
            console.log("Rilevato schema avanzato. Avvio normalizzazione...");
            
            // Inizializza con una copia profonda di doc per preservare tutti i campi non modificabili dal frontend
            productData = JSON.parse(JSON.stringify(doc));
            
            const identitySrc = doc.service_identity || doc.identity || {};
            productData.identity = {
                item_name: identitySrc.name || identitySrc.item_name || "Prodotto",
                item_sku: identitySrc.sku || identitySrc.item_sku || sopId,
                item_type: identitySrc.type || identitySrc.item_type || "PRODUCT"
            };

            // Blueprint type (Fondamentale per distinguere fisico da digitale)
            productData.blueprint_type = doc.blueprint_type || "PRODUCT_FLOW";

            // Prezzo di vendita
            productData.pricing = {
                base_price: doc.financial_simulations?.pricing_summary?.catalog_price || doc.pricing?.base_price || 0
            };

            // 1. Mappatura della BOM dei consumabili reali (esclude gli asset fissi)
            productData.bom = [];
            const suppliersList = doc.market_and_fiscal_intelligence?.suppliers || doc.suppliers || [];
            suppliersList.forEach(s => {
                // Esclude i grandi beni strumentali dal calcolo della BOM unitaria
                const isAsset = ["Riunito", "Autoclave", "Imbustatrice", "Server", "Computer", "Tavoletta"].some(keyword => 
                    s.required_material?.toLowerCase().includes(keyword.toLowerCase())
                );
                
                if (!isAsset) {
                    const provider = s.providers?.[0] || {};
                    productData.bom.push({
                        item_sku: provider.supp_sku || s.required_material || "RAW-MAT",
                        name: s.required_material || "Materiale",
                        qty: provider.usage || 1,
                        usage: provider.usage || 1,
                        unit_of_measure: "pz",
                        unit_cost: provider.cost || 0.00,
                        cost: (provider.cost || 0.00) * (provider.usage || 1),
                        relation_type: "materiale",
                        is_semilavorato: false
                    });
                }
            });

            // 2. Mappatura Procurement Suppliers
            productData.procurement = { suppliers: [] };
            suppliersList.forEach(s => {
                (s.providers || []).forEach(p => {
                    productData.procurement.suppliers.push({
                        supplier_name: p.supp_name || "Fornitore",
                        material_sku: p.supp_sku || s.required_material || "RAW-MAT",
                        unit_cost: p.cost || 0
                    });
                });
            });

            // 3. Mappatura Logistica/Locations
            productData.logistics = {
                locations: (doc.environments || []).map(loc => ({
                    loc_name: loc.loc_name || "Area",
                    purpose: loc.loc_name || "Stoccaggio",
                    estimated_internal_cost_rate: loc.estimated_internal_cost || 0
                }))
            };

            // 4. Mappatura Macchinari/Assets (Corretto il bug di estimated_internal_cost_rate)
            productData.assets = (doc.assets || []).map(a => ({
                asset_name: a.asset_name || "Macchinario",
                asset_sku: a.asset_sku || "AST-SKU",
                estimated_internal_cost_rate: a.estimated_internal_cost || 0
            }));

            // 5. Mappatura Competitor
            productData.relations = {
                marketing_info: {
                    competitors: (doc.market_and_fiscal_intelligence?.competitors || doc.relations?.marketing_info?.competitors || []).map(c => ({
                        competitor_name: c.name || c.competitor_name || "Competitor",
                        source_url: c.url || c.source_url || "#",
                        price: c.estimated_price || c.price || 0
                    }))
                }
            };

            // 6. Mappatura Blueprint stages e steps
            productData.blueprint = { stages: [] };
            const stepsList = doc.bill_of_materials?.bom_steps || doc.bom_steps || [];
            stepsList.forEach(sub => {
                (sub.stages || []).forEach(stage => {
                    productData.blueprint.stages.push({
                        stage_order: productData.blueprint.stages.length + 1,
                        stage_name: stage.stage_name || sub.subprocess_name || "Fase",
                        steps: (stage.steps || []).map(step => ({
                            step_name: step.step_name || "Step",
                            estimated_time_minutes: step.estimated_time_minutes || 0,
                            instructions: step.instructions || ""
                        }))
                    });
                });
            });

            // Conserva i parametri di simulazione calcolati dal backend
            productData.financial_simulations = doc.financial_simulations || {};
            productData.strategic_operations_analysis = doc.strategic_operations_analysis || {};
            productData.strategic_clinical_analysis = doc.strategic_clinical_analysis || {};
            
        } else {
            console.log("Rilevato schema semplificato standard.");
            productData = doc;
        }

        currentData = JSON.parse(JSON.stringify(productData));
        originalDataStr = JSON.stringify(collectDataForSaving());

        // Adatta l'interfaccia se il prodotto è un DIGITAL_FLOW
        applyAdaptiveUI();

        // Aggiorna la UI con i dati mappati
        document.getElementById('header-subtitle').innerText = currentData.identity?.item_name || 'Prodotto';
        populateCFO();
        populateBOM();
        populateCompetitors();
        populateSuppliers();
        populateLocations();
        populateAssets();
        populateBlueprint();

        updateCalculations();
        document.getElementById('loader').classList.add('hidden');
    } catch (e) {
        console.error("Error loading product advanced data:", e);
        document.getElementById('loaderText').innerText = "Errore durante il caricamento dei dati.";
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }
}

function applyAdaptiveUI() {
    const isDigital = currentData.blueprint_type === 'DIGITAL_FLOW';
    
    const bomMenu = document.getElementById('menu-tab-bom');
    const locationsMenu = document.getElementById('menu-tab-locations');
    const assetsMenu = document.getElementById('menu-tab-assets');
    const blueprintMenu = document.getElementById('menu-tab-blueprint');

    const bomTitle = document.getElementById('bom-title');
    const bomSubtitle = document.getElementById('bom-subtitle');
    const locationsTitle = document.getElementById('locations-title');
    const assetsTitle = document.getElementById('assets-title');
    const blueprintTitle = document.getElementById('blueprint-title');

    if (isDigital) {
        if (bomMenu) bomMenu.innerHTML = '<i class="fas fa-file-invoice text-sm w-5 text-center"></i> 📦 Risorse & Licenze';
        if (locationsMenu) locationsMenu.innerHTML = '<i class="fas fa-server text-sm w-5 text-center"></i> 📍 Infrastruttura Cloud';
        if (assetsMenu) assetsMenu.innerHTML = '<i class="fas fa-laptop-code text-sm w-5 text-center"></i> 🛠️ Sistemi & Software';
        if (blueprintMenu) blueprintMenu.innerHTML = '<i class="fas fa-paper-plane text-sm w-5 text-center"></i> 📋 Blueprint di Erogazione';

        if (bomTitle) bomTitle.innerText = "📦 Risorse e Licenze Digitali";
        if (bomSubtitle) bomSubtitle.innerText = "Elenco delle licenze, file o risorse software necessarie";
        if (locationsTitle) locationsTitle.innerText = "📍 Infrastruttura Cloud e Consegna";
        if (assetsTitle) assetsTitle.innerText = "🛠️ Sistemi, Software e Integrazioni";
        if (blueprintTitle) blueprintTitle.innerText = "📋 Sequenza di Erogazione Digitale (Blueprint)";
    } else {
        if (bomMenu) bomMenu.innerHTML = '<i class="fas fa-cubes text-sm w-5 text-center"></i> 📦 Distinta Base (BOM)';
        if (locationsMenu) locationsMenu.innerHTML = '<i class="fas fa-map-marker-alt text-sm w-5 text-center"></i> 📍 Aree di Stoccaggio';
        if (assetsMenu) assetsMenu.innerHTML = '<i class="fas fa-tools text-sm w-5 text-center"></i> 🛠️ Asset & Attrezzature';
        if (blueprintMenu) blueprintMenu.innerHTML = '<i class="fas fa-paste text-sm w-5 text-center"></i> 📋 Blueprint Assemblaggio';

        if (bomTitle) bomTitle.innerText = "📦 Distinta Base dei Componenti (BOM)";
        if (bomSubtitle) bomSubtitle.innerText = "Elenco dei semilavorati e delle materie prime che compongono il prodotto";
        if (locationsTitle) locationsTitle.innerText = "📍 Logistica e Aree di Stoccaggio";
        if (assetsTitle) assetsTitle.innerText = "🛠️ Attrezzature e Macchinari di Assemblaggio";
        if (blueprintTitle) blueprintTitle.innerText = "📋 Sequenza di Assemblaggio Finale (Blueprint)";
    }
}

function collectDataForSaving() {
    if (!currentData) return {};
    
    // Assicurati che i campi modificati esistano al livello principale di currentData
    if (!currentData.bom) currentData.bom = [];
    if (!currentData.pricing) currentData.pricing = {};
    if (!currentData.procurement) currentData.procurement = {};
    if (!currentData.logistics) currentData.logistics = {};
    if (!currentData.assets) currentData.assets = [];
    
    // Sincronizza i competitor in market_and_fiscal_intelligence.competitors
    if (!currentData.market_and_fiscal_intelligence) {
        currentData.market_and_fiscal_intelligence = {};
    }
    
    // Mappatura inversa protettiva per preservare lo schema DB originario
    const frontendCompetitors = currentData.relations?.marketing_info?.competitors || [];
    currentData.market_and_fiscal_intelligence.competitors = frontendCompetitors.map(c => ({
        name: c.competitor_name || c.name || "Competitor",
        url: c.source_url || c.url || "#",
        estimated_price: c.price !== undefined ? c.price : (c.estimated_price || 0),
        distance_km: c.distance_km !== undefined ? c.distance_km : null,
        usp_gap_strengths: c.usp_gap_strengths || [],
        usp_gap_weaknesses: c.usp_gap_weaknesses || []
    }));
        
    return currentData;
}

function checkDirty() {
    const currentStr = JSON.stringify(collectDataForSaving());
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
        saveBtn.disabled = currentStr === originalDataStr;
    }
}

function populateCFO() {
    const basePrice = parseFloat(currentData.pricing?.base_price) || 0;
    document.getElementById('cfo-base-price').innerText = currFmt.format(basePrice);

    const stratOps = currentData.strategic_operations_analysis || {};
    const stratClin = currentData.strategic_clinical_analysis || {};

    // 1. Health Rating mapping
    const rating = stratOps.operations_financial_health_rating || stratClin.clinical_financial_health_rating || "MODERATE_MARGINS";
    const healthBadge = document.getElementById('label-health');
    const healthDesc = document.getElementById('label-health-desc');
    const healthCard = document.getElementById('cfo-health-card');

    if (healthBadge && healthDesc && healthCard) {
        if (rating === 'HIGH_PROFITABILITY') {
            healthBadge.className = 'px-4 py-2 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-md';
            healthBadge.innerText = 'PROFITTEVOLE';
            healthDesc.innerText = "Il prodotto garantisce ottimi margini operativi e alta redditività.";
            healthCard.style.borderColor = '#22c55e';
        } else if (rating === 'MODERATE_MARGINS') {
            healthBadge.className = 'px-4 py-2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-md';
            healthBadge.innerText = 'MARGINI MEDI';
            healthDesc.innerText = "I margini sono stabili ma monitorare i costi dei materiali.";
            healthCard.style.borderColor = '#f59e0b';
        } else if (rating === 'WARNING_LOW_MARGINS') {
            healthBadge.className = 'px-4 py-2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-md';
            healthBadge.innerText = 'MARGINI BASSI';
            healthDesc.innerText = "Attenzione: i margini sono risicati. Valutare l'ottimizzazione del procurement.";
            healthCard.style.borderColor = '#f59e0b';
        } else if (rating === 'DANGER_NEGATIVE_NET_PROFIT') {
            healthBadge.className = 'px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-md';
            healthBadge.innerText = 'IN PERDITA';
            healthDesc.innerText = "Il prodotto genera una perdita netta. Rivedere subito i costi o aumentare la tariffa.";
            healthCard.style.borderColor = '#ef4444';
        } else {
            // Default fallback
            healthBadge.className = 'px-4 py-2 bg-zinc-500 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-md';
            healthBadge.innerText = 'NON VALUTATO';
            healthDesc.innerText = "Nessuna valutazione dello stato di salute finanziaria disponibile.";
            healthCard.style.borderColor = '#71717a';
        }
    }

    // 2. Strategy Advisory Text
    const advisoryText = stratOps.pricing_and_tariff_strategy_advisory || 
                         stratClin.pricing_and_tariff_strategy_advisory || 
                         'Nessuna raccomandazione disponibile.';
    const advisoryEl = document.getElementById('pricing-advisory-text');
    if (advisoryEl) {
        advisoryEl.innerHTML = formatMarkdownText(advisoryText);
    }

    // 3. Cost Optimization Recommendations
    const container = document.getElementById('cost-optimization-list');
    if (container) {
        container.innerHTML = '';
        const recs = stratOps.operations_cost_optimization_recommendations || 
                     stratClin.clinical_cost_optimization_recommendations || [];
        if (recs.length === 0) {
            container.innerHTML = `<div class="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-[10px] text-gray-400 italic text-center">Nessuna raccomandazione operativa presente.</div>`;
        } else {
            recs.forEach(r => {
                container.innerHTML += `
                    <div class="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex gap-3">
                        <div class="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-[8px] mt-0.5 font-bold">✔</div>
                        <p class="text-[11px] text-gray-700">${r}</p>
                    </div>`;
            });
        }
    }
}

function updateCalculations() {
    const basePrice = parseFloat(currentData.pricing?.base_price) || 0;

    let totalCogs = 0;
    const bomItems = currentData.bom || [];
    bomItems.forEach(item => {
        const qty = parseFloat(item.qty || item.usage) || 0;
        const unitCost = parseFloat(item.unit_cost || item.cost) || 0;
        totalCogs += qty * unitCost;
    });

    const mdc = basePrice - totalCogs;
    const mdcPercent = basePrice > 0 ? (mdc / basePrice) * 100 : 0;

    // Recupera l'overhead calcolato dal backend se disponibile
    const isDigital = currentData.blueprint_type === 'DIGITAL_FLOW';
    const realOverhead = parseFloat(currentData.financial_simulations?.predictive_volume_simulation?.break_even_point_metrics?.allocated_overhead_value);
    const fixedOverhead = !isNaN(realOverhead) ? realOverhead : (isDigital ? 0 : 2500);

    const breakEvenUnits = mdc > 0 ? Math.ceil(fixedOverhead / mdc) : 0;

    document.getElementById('header-cost').innerText = currFmt.format(totalCogs);
    document.getElementById('header-mdc').innerText = currFmt.format(mdc);
    document.getElementById('cfo-cogs').innerText = currFmt.format(totalCogs);
    document.getElementById('cfo-mdc').innerText = currFmt.format(mdc);
    document.getElementById('cfo-mdc-percent').innerText = mdcPercent.toFixed(1) + "%";
    document.getElementById('cfo-break-even').innerText = (breakEvenUnits > 0 && fixedOverhead > 0) ? breakEvenUnits : "-";

    updateSimulation();
}

function updateSimulation() {
    const val = parseInt(document.getElementById('volume-slider').value) || 0;
    document.getElementById('slider-val').innerText = val;

    const basePrice = parseFloat(currentData.pricing?.base_price) || 0;
    let totalCogs = 0;
    const bomItems = currentData.bom || [];
    bomItems.forEach(item => {
        const qty = parseFloat(item.qty || item.usage) || 0;
        const unitCost = parseFloat(item.unit_cost || item.cost) || 0;
        totalCogs += qty * unitCost;
    });

    const isDigital = currentData.blueprint_type === 'DIGITAL_FLOW';
    const realOverhead = parseFloat(currentData.financial_simulations?.predictive_volume_simulation?.break_even_point_metrics?.allocated_overhead_value);
    const fixedOverhead = !isNaN(realOverhead) ? realOverhead : (isDigital ? 0 : 2500);

    const mdc = basePrice - totalCogs;
    const fatturato = basePrice * val;
    const margineTotale = mdc * val;
    const rendimentoEst = margineTotale - fixedOverhead; 

    document.getElementById('sim-fatturato').innerText = currFmt.format(fatturato);
    document.getElementById('sim-margine').innerText = currFmt.format(margineTotale);
    document.getElementById('sim-rendimento').innerText = currFmt.format(rendimentoEst);
}

// --- BOM ---
function populateBOM() {
    const container = document.getElementById('bom-table-body');
    container.innerHTML = '';
    const bomItems = currentData.bom || [];

    if (bomItems.length === 0) {
        container.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-gray-400 italic">Distinta vuota.</td></tr>`;
        return;
    }

    bomItems.forEach((item, index) => {
        const qty = parseFloat(item.qty || item.usage) || 0;
        const unitCost = parseFloat(item.unit_cost || item.cost) || 0;
        const subtotal = qty * unitCost;

        const row = document.createElement('tr');
        row.className = "border-b border-gray-50 hover:bg-gray-50/50 transition-colors";
        row.innerHTML = `
            <td class="py-3">
                <input type="text" class="w-full bg-transparent border-none text-xs font-bold text-black focus:outline-none" value="${item.name || item.item_sku || ''}" onchange="updateBomItem(${index}, 'name', this.value)">
                <span class="text-[8px] text-gray-400 font-mono block">${item.item_sku || 'SKU ASSENTE'}</span>
            </td>
            <td class="py-3 text-center w-16">
                <input type="number" step="0.01" class="w-full bg-gray-50 border border-transparent rounded-md p-1 text-center font-black text-xs text-black" value="${qty}" onchange="updateBomItem(${index}, 'qty', this.value)">
            </td>
            <td class="py-3 text-center w-12 text-xs font-medium text-gray-400">
                <input type="text" class="w-full bg-transparent border-none text-center focus:outline-none text-xs" value="${item.unit_of_measure || 'pz'}" onchange="updateBomItem(${index}, 'unit_of_measure', this.value)">
            </td>
            <td class="py-3 text-right text-xs text-gray-500 w-24">
                <input type="number" step="0.01" class="w-full bg-gray-50 border border-transparent rounded-md p-1 text-right font-black text-xs text-black" value="${unitCost}" onchange="updateBomItem(${index}, 'unit_cost', this.value)">
            </td>
            <td class="py-3 text-right text-xs text-black w-24">${currFmt.format(subtotal)}</td>
            <td class="py-3 text-center w-12">
                <button onclick="removeBomRow(${index})" class="text-red-500 hover:text-red-700 active:scale-90 transition-transform"><i class="fas fa-trash-alt text-xs"></i></button>
            </td>
        `;
        container.appendChild(row);
    });
}

function updateBomItem(index, field, value) {
    if (!currentData.bom) currentData.bom = [];
    if (field === 'qty') value = parseFloat(value) || 0;
    if (field === 'unit_cost') value = parseFloat(value) || 0;

    currentData.bom[index][field] = value;
    if (field === 'qty') currentData.bom[index].usage = value;
    if (field === 'unit_cost') currentData.bom[index].cost = value;

    updateCalculations();
    populateBOM();
    checkDirty();
}

let flatCatalogItemsForBOM = [];

window.openAddBomModal = () => {
    document.getElementById('add-bom-modal').classList.remove('hidden');
    document.getElementById('add-bom-modal').classList.add('flex');
    document.getElementById('bom-catalog-search').value = "";
    document.getElementById('manual-bom-name').value = "";
    document.getElementById('manual-bom-sku').value = "";

    let catalog = [];
    if (window.parent && window.parent.fullCatalog) {
        catalog = window.parent.fullCatalog;
    }

    flatCatalogItemsForBOM = [];
    catalog.forEach(cat => {
        const subcategories = cat.subcategories || [];
        subcategories.forEach(sub => {
            if (sub.callback_data === sopId) return;

            let macro = (cat.macrocategories || "").toUpperCase().trim();
            if (!macro) {
                const catName = (cat.name || "").toUpperCase();
                if (catName.includes("[SOP]")) macro = "SOP";
                else if (catName.includes("[SER]")) macro = "SER";
                else if (catName.includes("[PRO]")) macro = "PRO";
            }

            flatCatalogItemsForBOM.push({
                sku: sub.callback_data,
                name: sub.name,
                macro: macro || 'SOP'
            });
        });
    });

    renderBomCatalogList(flatCatalogItemsForBOM);
};

window.closeAddBomModal = () => {
    document.getElementById('add-bom-modal').classList.remove('flex');
    document.getElementById('add-bom-modal').classList.add('hidden');
};

function renderBomCatalogList(items) {
    const listContainer = document.getElementById('bom-catalog-list');
    listContainer.innerHTML = "";

    if (items.length === 0) {
        listContainer.innerHTML = `<p class="text-[9px] text-gray-400 italic text-center py-4">Nessun elemento trovato.</p>`;
        return;
    }

    items.forEach(item => {
        const row = document.createElement('div');
        row.className = "flex justify-between items-center py-2 px-1 hover:bg-gray-50 transition cursor-pointer";
        row.onclick = () => addCatalogBomItem(item.sku, item.name, item.macro);

        let typeBadgeColor = "bg-gray-100 text-gray-600";
        if (item.macro === 'PRO') typeBadgeColor = "bg-blue-50 text-blue-600";
        if (item.macro === 'SOP') typeBadgeColor = "bg-green-50 text-green-600";

        row.innerHTML = `
            <div class="flex-1 pr-2">
                <p class="text-[10px] font-bold text-black truncate max-w-[200px]">${item.name}</p>
                <span class="text-[7px] text-gray-400 font-mono block">${item.sku}</span>
            </div>
            <span class="text-[7px] font-black uppercase px-2 py-0.5 rounded-full ${typeBadgeColor}">${item.macro}</span>
        `;
        listContainer.appendChild(row);
    });
}

window.filterBomCatalog = () => {
    const q = document.getElementById('bom-catalog-search').value.toLowerCase().trim();
    if (!q) {
        renderBomCatalogList(flatCatalogItemsForBOM);
        return;
    }
    const filtered = flatCatalogItemsForBOM.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.sku.toLowerCase().includes(q) ||
        item.macro.toLowerCase().includes(q)
    );
    renderBomCatalogList(filtered);
};

window.addCatalogBomItem = (sku, name, macro) => {
    if (!currentData.bom) currentData.bom = [];

    // Check if item is already in BOM
    if (currentData.bom.some(item => item.item_sku === sku)) {
        tg.showAlert("Questo componente è già presente in distinta base.");
        return;
    }

    // A component selected from the catalog (PRO or SOP) is classified as a "semilavorato"
    const relationType = (macro === 'PRO' || macro === 'SOP') ? 'semilavorato' : 'materiale';

    currentData.bom.push({
        item_sku: sku,
        name: name,
        qty: 1,
        usage: 1,
        unit_of_measure: "pz",
        unit_cost: 0.00,
        cost: 0.00,
        relation_type: relationType,
        is_semilavorato: true
    });

    closeAddBomModal();
    populateBOM();
    updateCalculations();
    checkDirty();
    if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
};

window.addManualBomItem = () => {
    const name = document.getElementById('manual-bom-name').value.trim();
    let sku = document.getElementById('manual-bom-sku').value.trim();

    if (!name) {
        tg.showAlert("Inserisci il nome del materiale.");
        return;
    }

    if (!sku) {
        // Generate automatic temporary SKU for raw materials
        sku = "RAW-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    if (!currentData.bom) currentData.bom = [];
    if (currentData.bom.some(item => item.item_sku === sku)) {
        tg.showAlert("Questo SKU è già registrato nella distinta base.");
        return;
    }

    currentData.bom.push({
        item_sku: sku,
        name: name,
        qty: 1,
        usage: 1,
        unit_of_measure: "pz",
        unit_cost: 0.00,
        cost: 0.00,
        relation_type: "materiale",
        is_semilavorato: false
    });

    closeAddBomModal();
    populateBOM();
    updateCalculations();
    checkDirty();
    if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
};

function removeBomRow(index) {
    if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('warning');
    currentData.bom.splice(index, 1);
    populateBOM();
    updateCalculations();
    checkDirty();
}

// --- COMPETITORS ---
function populateCompetitors() {
    const container = document.getElementById('competitors-list-container');
    container.innerHTML = '';
    const compList = currentData.relations?.marketing_info?.competitors || [];

    if (compList.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-400 italic text-center py-4">Nessun competitor mappato dall'AI.</p>`;
        return;
    }

    compList.forEach((c, i) => {
        const el = document.createElement('div');
        el.className = "flex justify-between items-center bg-gray-50 border border-gray-100 p-4 rounded-2xl";
        el.innerHTML = `
            <div>
                <p class="text-xs font-black text-black">${c.competitor_name || 'Competitor'}</p>
                <a href="${c.source_url || '#'}" target="_blank" class="text-[9px] text-blue-500 font-bold hover:underline block truncate max-w-[200px]">${c.source_url || 'Link sorgente'}</a>
            </div>
            <div class="text-right">
                <span class="text-xs font-black text-black">${currFmt.format(c.price || 0)}</span>
                <span class="block text-[8px] font-black uppercase text-gray-400 mt-0.5">Prezzo Stimato</span>
            </div>
        `;
        container.appendChild(el);
    });
}

// --- SUPPLIERS ---
function populateSuppliers() {
    const container = document.getElementById('suppliers-list-container');
    container.innerHTML = '';
    const suppliers = currentData.procurement?.suppliers || [];

    if (suppliers.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-400 italic text-center py-4">Nessun fornitore mappato.</p>`;
        return;
    }

    suppliers.forEach((s, index) => {
        const el = document.createElement('div');
        el.className = "card rounded-2xl p-4 border border-gray-100 space-y-2";
        el.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <h4 class="text-xs font-black text-black">${s.supplier_name || 'Fornitore'}</h4>
                    <p class="text-[9px] font-bold text-gray-400 uppercase mt-0.5">SKU Materiale: ${s.material_sku || 'N/D'}</p>
                </div>
                <div class="text-right">
                    <span class="text-xs font-black text-black">${currFmt.format(s.unit_cost || s.cost || 0)}</span>
                </div>
            </div>
        `;
        container.appendChild(el);
    });
}

// --- LOCATIONS ---
function populateLocations() {
    const container = document.getElementById('locations-list-container');
    container.innerHTML = '';
    const locations = currentData.logistics?.locations || [];

    if (locations.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-400 italic text-center py-4">Nessuna area logistica mappata.</p>`;
        return;
    }

    locations.forEach(l => {
        const el = document.createElement('div');
        el.className = "bg-gray-50 border border-gray-100 p-4 rounded-2xl flex justify-between items-center";
        el.innerHTML = `
            <div>
                <p class="text-xs font-black text-black uppercase">${l.loc_name || 'Area'}</p>
                <span class="text-[8px] font-black text-gray-400 uppercase mt-0.5">${l.purpose || 'Impiego'}</span>
            </div>
            <div class="text-right">
                <span class="text-xs font-black text-black">${l.estimated_internal_cost_rate ? currFmt.format(l.estimated_internal_cost_rate) + '/ora' : '-'}</span>
            </div>
        `;
        container.appendChild(el);
    });
}

// --- ASSETS ---
function populateAssets() {
    const container = document.getElementById('assets-list-container');
    container.innerHTML = '';
    const assets = currentData.assets || [];

    if (assets.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-400 italic text-center py-4">Nessun macchinario o asset mappato.</p>`;
        return;
    }

    assets.forEach(a => {
        const el = document.createElement('div');
        el.className = "bg-gray-50 border border-gray-100 p-4 rounded-2xl flex justify-between items-center";
        el.innerHTML = `
            <div>
                <p class="text-xs font-black text-black uppercase">${a.asset_name || 'Macchinario'}</p>
                <span class="text-[8px] font-black text-gray-400 uppercase mt-0.5">SKU: ${a.asset_sku || 'N/D'}</span>
            </div>
            <div class="text-right">
                <span class="text-xs font-black text-black">${a.estimated_internal_cost_rate ? currFmt.format(a.estimated_internal_cost_rate) + '/ora' : '-'}</span>
            </div>
        `;
        container.appendChild(el);
    });
}

// --- BLUEPRINT REQUISITI (READ-ONLY VISUALIZATION) ---
function populateBlueprint() {
    const container = document.getElementById('blueprint-steps-container');
    container.innerHTML = '';

    const stages = currentData.blueprint?.stages || [];

    if (stages.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-400 italic text-center py-4">Nessuna sequenza di erogazione/assemblaggio disponibile.</p>`;
        return;
    }

    stages.forEach((stage, i) => {
        const stageEl = document.createElement('div');
        stageEl.className = "space-y-2";

        let stepsHTML = "";
        (stage.steps || []).forEach(step => {
            stepsHTML += `
                <div class="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-1.5">
                    <div class="flex justify-between items-start">
                        <h5 class="text-xs font-black text-black uppercase">${step.step_name || 'Step'}</h5>
                        <span class="text-[8px] font-black bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">${step.estimated_time_minutes || 0} min</span>
                    </div>
                    <p class="text-[10px] text-gray-500 font-medium leading-relaxed">${step.instructions || ''}</p>
                </div>
            `;
        });

        stageEl.innerHTML = `
            <div class="border-l-2 border-l-black pl-3 py-1 mb-4">
                <span class="text-[8px] font-black text-gray-400 uppercase">Fase ${stage.stage_order || i + 1}</span>
                <h4 class="text-xs font-black uppercase text-black leading-none mt-0.5">${stage.stage_name || 'Fase'}</h4>
            </div>
            <div class="space-y-2 pl-3">
                ${stepsHTML}
            </div>
        `;
        container.appendChild(stageEl);
    });
}

// --- SAVE FUNCTION ---
async function saveProductAdvancedData() {
    const saveBtn = document.getElementById('saveBtn');
    if (!saveBtn || saveBtn.disabled) return;

    saveBtn.disabled = true;
    const initialText = saveBtn.querySelector('span').innerText;
    saveBtn.querySelector('span').innerText = "Salvataggio in corso...";

    try {
        const payload = {
            _auth: tg.initData,
            action: 'SAVE',
            type: 'PRODUCT',
            sop_id: sopId,
            message_id: messageId,
            ash: ash,
            payload: collectDataForSaving()
        };

        const res = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
            saveBtn.className = saveBtn.className.replace('bg-black', 'bg-green-600');
            saveBtn.querySelector('span').innerText = "Salvato con Successo!";
            originalDataStr = JSON.stringify(collectDataForSaving());
            setTimeout(() => {
                tg.close();
            }, 1200);
        } else {
            throw new Error("Failed response from server");
        }
    } catch (e) {
        console.error("Save product advanced error:", e);
        saveBtn.disabled = false;
        saveBtn.querySelector('span').innerText = initialText;
        tg.showAlert("Errore durante il salvataggio dei dati.");
        if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('error');
    }
}

document.addEventListener('DOMContentLoaded', loadData);

// Helper function for rendering markdown texts
function formatMarkdownText(text) {
    if (!text) return "";
    
    // If the text is a string but represents a JSON object, parse it first
    if (typeof text === 'string') {
        const trimmed = text.trim();
        if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
            try {
                const parsed = JSON.parse(trimmed);
                if (parsed && typeof parsed === 'object') {
                    text = parsed.text_content || parsed.content || parsed.raw_text || text;
                }
            } catch (e) {
                // Ignore parse error, use original text string
            }
        }
    }

    // Guard clause to ensure text is always a string
    if (typeof text !== 'string') {
        if (text && typeof text === 'object') {
            text = text.text_content || text.content || text.raw_text || JSON.stringify(text);
        } else {
            text = String(text);
        }
    }
    
    let clean = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    
    // Convert links
    clean = clean.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-black underline font-semibold">$1</a>');
    
    // Headers
    clean = clean.replace(/^### (.*$)/gim, '<h4 class="text-xs font-black uppercase text-black mt-4 mb-1.5 flex items-center gap-1.5"><span class="w-1.5 h-1.5 bg-black rounded-full"></span>$1</h4>');
    clean = clean.replace(/^## (.*$)/gim, '<h3 class="text-xs font-black uppercase text-gray-800 mt-5 border-b pb-1">$1</h3>');
    clean = clean.replace(/^# (.*$)/gim, '<h2 class="text-sm font-black uppercase text-black mt-6 border-b-2 pb-1.5">$1</h2>');
    
    // Bold
    clean = clean.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Lists
    clean = clean.replace(/^\s*[\-\*]\s+(.*$)/gim, '<div class="flex gap-2 items-start text-xs text-gray-700 pl-2 py-0.5"><span class="text-black">•</span><span>$1</span></div>');
    
    return clean;
}
