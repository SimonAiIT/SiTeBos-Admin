// --- GLOBAL CALCULATION LOGIC & STATE SYNCHRONISATION ---

function getDecomposedEnvironmentRate(loc) {
    if (!loc) return 0.00;
    const ob = currentData.operating_benchmarks || {};
    const dec = ob.decomposed_environments_costs || {};

    // 1. Try match by clean name
    const cleanName = loc.loc_name.replace(/\s+/g, '_');
    if (dec[cleanName] !== undefined) return parseFloat(dec[cleanName]);

    // 2. Try fuzzy/substring match
    const cleanSearchName = loc.loc_name.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let key in dec) {
        const cleanKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (cleanSearchName.includes(cleanKey) || cleanKey.includes(cleanSearchName)) {
            return parseFloat(dec[key]);
        }
    }

    // 3. Try matching parts of the words (e.g. "Studio")
    const words = loc.loc_name.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    for (let key in dec) {
        const cleanKey = key.toLowerCase();
        if (words.some(word => cleanKey.includes(word))) {
            return parseFloat(dec[key]);
        }
    }

    // Fallback
    return parseFloat(loc.estimated_internal_cost_rate) || 0.00;
}

function getDecomposedAssetRate(ast) {
    if (!ast) return 0.00;
    const ob = currentData.operating_benchmarks || {};
    const dmc = ob.decomposed_machinery_costs || {};

    // 1. Try match by clean name
    const cleanName = ast.asset_name.replace(/\s+/g, '_');
    if (dmc[cleanName] !== undefined) return parseFloat(dmc[cleanName]);

    // 2. Try match by sku
    if (ast.asset_sku && dmc[ast.asset_sku] !== undefined) return parseFloat(dmc[ast.asset_sku]);

    // 3. Try fuzzy/substring match
    const cleanSearchName = ast.asset_name.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let key in dmc) {
        const cleanKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (cleanSearchName.includes(cleanKey) || cleanKey.includes(cleanSearchName)) {
            return parseFloat(dmc[key]);
        }
    }

    // 4. Try matching parts of the words (e.g. "Riunito")
    const words = ast.asset_name.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    for (let key in dmc) {
        const cleanKey = key.toLowerCase();
        if (words.some(word => cleanKey.includes(word))) {
            return parseFloat(dmc[key]);
        }
    }

    // Fallback
    return parseFloat(ast.estimated_internal_cost_rate) || 0.00;
}

function isPrimaryOperatorSkill(skill, vertical) {
    const sk = (skill || "").toLowerCase();
    const vert = (vertical || "generic").toLowerCase().trim();

    if (vert === 'dental') return sk.includes("medico") || sk.includes("odontoiatra") || sk.includes("chirurgo");
    if (vert === 'beauty') return sk.includes("estetista") || sk.includes("terapista");
    if (vert === 'health') return sk.includes("terapista") || sk.includes("specialista") || sk.includes("medico") || sk.includes("fisioterapista");
    if (vert === 'food') return sk.includes("chef") || sk.includes("cuoco");
    if (vert === 'hospitality') return sk.includes("responsabile") || sk.includes("direttore") || sk.includes("receptionist");
    if (vert === 'professional') return sk.includes("consulente") || sk.includes("avvocato") || sk.includes("commercialista") || sk.includes("professionista");
    if (vert === 'workshop') return sk.includes("meccanico") || sk.includes("tecnico") || sk.includes("artigiano");
    if (vert === 'construction') return sk.includes("capo") || sk.includes("capocantiere") || sk.includes("ingegnere");

    return sk.includes("primary") || sk.includes("esecutore") || sk.includes("specialista");
}

function calculateSubprocessStaffCosts(sub) {
    const staffCostTotal = sub.calculation_breakdown?.staff_cost || 0;
    const stages = sub.stages || [];
    
    let hasSteps = false;
    let primaryCalc = 0;
    let secondaryCalc = 0;
    
    const rates = currentData.operating_benchmarks?.operators_hourly_rates || {};
    const vertical = (currentData.vertical || 'generic').toLowerCase();
    
    stages.forEach(stg => {
        (stg.steps || []).forEach(step => {
            const time = parseFloat(step.estimated_time_minutes) || 0;
            if (time > 0) {
                const skills = step.required_skills || [];
                skills.forEach(skill => {
                    hasSteps = true;
                    let rate = parseFloat(rates[skill]) || parseFloat(rates['primary_operator']) || 0;
                    const stepCost = (rate / 60) * time;
                    
                    if (isPrimaryOperatorSkill(skill, vertical)) {
                        primaryCalc += stepCost;
                    } else {
                        secondaryCalc += stepCost;
                    }
                });
            }
        });
    });
    
    const totalCalc = primaryCalc + secondaryCalc;
    if (hasSteps && totalCalc > 0) {
        return {
            primaryOperator: staffCostTotal * (primaryCalc / totalCalc),
            secondaryOperator: staffCostTotal * (secondaryCalc / totalCalc)
        };
    }
    
    const name = (sub.subprocess_name || "").toLowerCase();
    const sku = (sub.subprocess_sku || "").toLowerCase();
    const isSecondary = name.includes("accoglienza") || name.includes("accettazione") || 
                        name.includes("sanificazione") || name.includes("setup") || 
                        name.includes("pulizia") || sku.includes("adm") || sku.includes("prep");
                        
    if (isSecondary) {
        return { primaryOperator: 0, secondaryOperator: staffCostTotal };
    } else {
        return { primaryOperator: staffCostTotal, secondaryOperator: 0 };
    }
}

function getMinutesForSkus(skus) {
    if (!skus || !Array.isArray(skus)) return 0;
    const steps = currentData.bill_of_materials?.bom_steps || [];
    let total = 0;
    steps.forEach(step => {
        if (skus.includes(step.subprocess_sku)) {
            total += step.calculation_breakdown?.workstation_time_mins || step.calculation_breakdown?.chair_time_mins || 0;
        }
    });
    return total;
}

function updatePercentageStaffCosts() {
    if (!currentData || !currentData.bill_of_materials) return;
    const vertical = (currentData.vertical || 'generic').toLowerCase();
    const ricalibrazioneEl = document.getElementById('in-ricalibrazione-pct');
    if (!ricalibrazioneEl) return; // Only apply if commission is active
    
    const ricalibrazionePct = parseFloat(ricalibrazioneEl.value) || 20.0;
    const tariffa = parseFloat(document.getElementById('in-tariffa').value) || 0;
    const totalCommission = (tariffa * ricalibrazionePct) / 100;
    
    // Calculate the total time where the primary operator is active
    const steps = currentData.bill_of_materials.bom_steps || [];
    let totalPrimaryMins = 0;
    
    steps.forEach(sub => {
        let hasPrimary = false;
        (sub.stages || []).forEach(stg => {
            (stg.steps || []).forEach(step => {
                const skills = step.required_skills || [];
                if (skills.some(skill => isPrimaryOperatorSkill(skill, vertical))) {
                    hasPrimary = true;
                }
            });
        });
        
        // Fallback to name/sku classification
        if (!hasPrimary) {
            const name = (sub.subprocess_name || "").toLowerCase();
            const sku = (sub.subprocess_sku || "").toLowerCase();
            const isSecondary = name.includes("accoglienza") || name.includes("accettazione") || 
                                name.includes("sanificazione") || name.includes("setup") || 
                                name.includes("pulizia") || sku.includes("adm") || sku.includes("prep");
            if (!isSecondary) {
                hasPrimary = true;
            }
        }
        if (hasPrimary) {
            totalPrimaryMins += sub.estimated_total_time_minutes || 0;
        }
    });
    
    if (totalPrimaryMins === 0) return;
    
    // Calculate equivalent hourly rate for the primary operator
    const primaryHourlyRate = (totalCommission / (totalPrimaryMins / 60));
    
    // Update primary operator rates in operating_benchmarks
    if (!currentData.operating_benchmarks) currentData.operating_benchmarks = {};
    if (!currentData.operating_benchmarks.operators_hourly_rates) {
        currentData.operating_benchmarks.operators_hourly_rates = {};
    }
    
    currentData.operating_benchmarks.operators_hourly_rates['primary_operator'] = primaryHourlyRate;
    
    // Update step staff costs and UI elements
    steps.forEach((sub, idx) => {
        let hasPrimary = false;
        (sub.stages || []).forEach(stg => {
            (stg.steps || []).forEach(step => {
                const skills = step.required_skills || [];
                if (skills.some(skill => isPrimaryOperatorSkill(skill, vertical))) {
                    hasPrimary = true;
                }
            });
        });
        
        if (!hasPrimary) {
            const name = (sub.subprocess_name || "").toLowerCase();
            const sku = (sub.subprocess_sku || "").toLowerCase();
            const isSecondary = name.includes("accoglienza") || name.includes("accettazione") || 
                                name.includes("sanificazione") || name.includes("setup") || 
                                name.includes("pulizia") || sku.includes("adm") || sku.includes("prep");
            if (!isSecondary) {
                hasPrimary = true;
            }
        }
        
        if (hasPrimary) {
            const primaryCost = (primaryHourlyRate / 60) * (sub.estimated_total_time_minutes || 0);
            const split = calculateSubprocessStaffCosts(sub);
            const secondaryCost = split.secondaryOperator || 0;
            const newStaffCost = parseFloat((primaryCost + secondaryCost).toFixed(2));
            
            if (sub.calculation_breakdown) {
                sub.calculation_breakdown.staff_cost = newStaffCost;
            }
            sub.estimated_internal_cost = (sub.calculation_breakdown?.consumables || 0) + 
                                          (sub.calculation_breakdown?.depreciation || 0) + 
                                          newStaffCost;
                                          
            // Update UI elements if rendered
            const staffInput = document.getElementById(`input-bom-staff-${idx}`);
            if (staffInput) {
                staffInput.value = newStaffCost.toFixed(2);
            }
            const labelCostEl = document.getElementById(`label-bom-cost-${idx}`);
            if (labelCostEl) {
                labelCostEl.innerText = `€ ${sub.estimated_internal_cost.toFixed(2)}`;
            }
        }
    });
}

function getAnalyticalPrimaryOperatorFee() {
    if (!currentData) return 0;
    const steps = currentData.bill_of_materials?.bom_steps || [];
    let totalPrimaryOperator = 0;
    steps.forEach(sub => {
        const split = calculateSubprocessStaffCosts(sub);
        totalPrimaryOperator += split.primaryOperator;
    });
    return totalPrimaryOperator;
}

// Retrocompatibility alias
function getAnalyticalMedicoFee() {
    return getAnalyticalPrimaryOperatorFee();
}

function updateCompensoFromPct() {
    const tariffaEl = document.getElementById('in-tariffa');
    const pctEl = document.getElementById('in-compenso-pct');
    const compEl = document.getElementById('in-compenso');
    if (!tariffaEl || !pctEl || !compEl) return;

    unit_tariffa = parseFloat(tariffaEl.value) || 0;
    const pct = parseFloat(pctEl.value) || 0;
    compEl.value = ((unit_tariffa * pct) / 100).toFixed(2);
    recalculateAll();
}

function updateCompensoFromEuro() {
    const tariffaEl = document.getElementById('in-tariffa');
    const compEl = document.getElementById('in-compenso');
    const pctEl = document.getElementById('in-compenso-pct');
    if (!tariffaEl || !compEl || !pctEl) return;

    unit_tariffa = parseFloat(tariffaEl.value) || 0;
    const compenso = parseFloat(compEl.value) || 0;
    pctEl.value = unit_tariffa > 0 ? ((compenso / unit_tariffa) * 100).toFixed(2) : 0;
    recalculateAll(true);
}

function updateENPAMFromSelect() {
    recalculateAll();
}

// --- MOTORE DI CALCOLO DINAMICO REATTIVO ---
function recalculateAll(drivenByEuro = false) {
    updatePercentageStaffCosts();
    unit_tariffa = parseFloat(document.getElementById('in-tariffa').value) || 0;

    let compenso = 0;
    const ricalibrazioneEl = document.getElementById('in-ricalibrazione-pct');
    if (ricalibrazioneEl) {
        let ricalibrazionePct = parseFloat(ricalibrazioneEl.value);
        if (isNaN(ricalibrazionePct)) {
            ricalibrazionePct = 20.0;
        } else {
            ricalibrazionePct = Math.round(ricalibrazionePct);
        }
        compenso = (unit_tariffa * ricalibrazionePct) / 100;
        const labelCompensoVal = document.getElementById('label-compenso-val');
        if (labelCompensoVal) {
            labelCompensoVal.value = currFmt.format(compenso);
        }

        // Aggiorna il compenso clinico analitico calcolato dal backend/BOM
        const clinicoValEl = document.getElementById('label-compenso-clinico-val');
        const clinicoPctEl = document.getElementById('label-compenso-clinico-pct');
        if (clinicoValEl || clinicoPctEl) {
            const analyticalPrimaryOperator = getAnalyticalPrimaryOperatorFee();
            if (clinicoValEl) {
                clinicoValEl.value = currFmt.format(analyticalPrimaryOperator);
            }
            if (clinicoPctEl) {
                clinicoPctEl.value = unit_tariffa > 0 ? ((analyticalPrimaryOperator / unit_tariffa) * 100).toFixed(1) + '%' : '0.0%';
            }
        }
    } else {
        const compensoEl = document.getElementById('in-compenso');
        compenso = compensoEl 
            ? (parseFloat(compensoEl.value) || 0)
            : (currentData?.financial_simulations?.cost_breakdown_unit?.primary_operator_fee || 0);
        if (!drivenByEuro) {
            const pctEl = document.getElementById('in-compenso-pct');
            if (pctEl) {
                const pct = parseFloat(pctEl.value) || 0;
                compenso = (unit_tariffa * pct) / 100;
                if (compensoEl) {
                    compensoEl.value = compenso.toFixed(2);
                }
            }
        }
    }

    const costoAso = parseFloat(document.getElementById('in-costo-aso').value) || 0;
    const materiali = parseFloat(document.getElementById('in-materiali').value) || 0;
    const lab = parseFloat(document.getElementById('in-lab').value) || 0;

    // --- INTEGRATION: Rischio Garanzia/Insuccesso Clinico ---
    const garanziaEl = document.getElementById('in-garanzia-pct');
    const garanziaPct = garanziaEl ? parseFloat(garanziaEl.value) : 0;
    const costoAccantonamentoGaranzia = (unit_tariffa * garanziaPct) / 100;

    // --- INTEGRATION: Saturazione Agenda su Costo Orario Sedia ---
    const workstationHourlyRateBaseline = parseFloat(document.getElementById('in-poltrona').value) || 0;
    const saturazioneEl = document.getElementById('in-saturazione-pct');
    const saturazionePct = saturazioneEl ? parseFloat(saturazioneEl.value) : 100;
    // Se lo studio è saturo al 70%, il costo orario reale della sedia attiva sale
    const workstationHourlyRateSaturated = saturazionePct > 0 ? (workstationHourlyRateBaseline / (saturazionePct / 100)) : workstationHourlyRateBaseline;

    // --- INTEGRATION: Tempo Sedia Lordo (Tempo Clinico + Tempo Setup) ---
    const tempoClinico = parseFloat(document.getElementById('in-tempo').value) || 0;
    const setupEl = document.getElementById('in-setup-tempo');
    const tempoSetup = setupEl ? parseFloat(setupEl.value) : 0;
    const grossWorkstationTime = tempoClinico + tempoSetup;

    const localBurdenHourly = parseFloat(currentData.market_and_fiscal_intelligence?.fiscal_analysis?.local_compliance_overhead_hourly) || 0.00;
    const workstationTotalHourlyRate = workstationHourlyRateSaturated + localBurdenHourly;

    // Costi Variabili Diretti inclusivi di accantonamento rischio clinico
    const varCosts = compenso + costoAso + materiali + lab + costoAccantonamentoGaranzia;
    unit_mdc = unit_tariffa - varCosts;

    // Costo Fisso sedia allocato calcolato sul Tempo Sedia Lordo
    unit_costofisso = (workstationTotalHourlyRate / 60) * grossWorkstationTime;
    const reddito = unit_mdc - unit_costofisso;

    // Tassazione & ENPAM
    const tasseP = parseFloat(document.getElementById('in-tasse').value) || 0;
    const enpamEl = document.getElementById('select-enpam-rate');
    const enpamRate = enpamEl 
        ? parseFloat(enpamEl.value) 
        : ((currentData?.market_and_fiscal_intelligence?.fiscal_analysis?.social_security_rate * 100) || 2.0);
    const aliquotaTotale = tasseP + enpamRate;

    let prelievoTotale = 0;
    const regimeLower = (currentData.market_and_fiscal_intelligence?.fiscal_analysis?.regime_name || "").toLowerCase();
    const detectedVertical = (currentData.vertical || 'generic').toLowerCase();

    if (detectedVertical === 'dental') {
        const isSocietario = regimeLower.includes("s.r.l.") || regimeLower.includes("srl") || regimeLower.includes("stp");
        if (isSocietario) {
            const tasseVal = reddito > 0 ? (reddito * (tasseP / 100)) : 0;
            const enpamVal = unit_tariffa * (enpamRate / 100);
            prelievoTotale = tasseVal + enpamVal;
        } else {
            prelievoTotale = (unit_tariffa * 0.78) * (aliquotaTotale / 100);
        }
    } else {
        prelievoTotale = reddito > 0 ? (reddito * (tasseP / 100)) : 0;
    }

    unit_utile = reddito - prelievoTotale;

    // --- COEFFICIENTE DI REDDITIVITÀ REALE & FISCO ---
    const formatter = typeof currFmt !== 'undefined' ? currFmt : new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' });
    const coeffReale = unit_tariffa > 0 ? ((reddito / unit_tariffa) * 100) : 0;
    const coeffEl = document.getElementById('fiscal-coeff');
    if (coeffEl) {
        if (detectedVertical === 'dental') {
            const isSocietario = regimeLower.includes("s.r.l.") || regimeLower.includes("srl") || regimeLower.includes("stp");
            if (isSocietario) {
                coeffEl.innerHTML = `<span class="text-green-600 font-bold">${coeffReale.toFixed(1)}%</span><span class="text-[7px] text-gray-400 block font-bold uppercase tracking-wider mt-0.5">Margine Reale (ROS)</span>`;
            } else {
                coeffEl.innerHTML = `<span>78.0%</span><span class="text-[7px] text-gray-400 block font-bold uppercase tracking-wider mt-0.5">Forfettario Legale</span>`;
            }
        } else {
            coeffEl.innerHTML = `<span class="text-green-600 font-bold">${coeffReale.toFixed(1)}%</span><span class="text-[7px] text-gray-400 block font-bold uppercase tracking-wider mt-0.5">Margine Reale (ROS)</span>`;
        }
    }

    const enpamLabelEl = document.getElementById('fiscal-enpam-label');
    if (enpamLabelEl) {
        enpamLabelEl.innerText = enpamRate.toFixed(2) + "%";
    }
    const taxRateEl = document.getElementById('fiscal-tax-rate');
    if (taxRateEl) {
        taxRateEl.innerText = tasseP.toFixed(1) + "%";
    }

    const regimeName = enpamRate === 2.0 ? "S.r.l. Ordinaria Commerciale" : (enpamRate === 0.5 ? "S.r.l. STP" : "Regime Esente");
    const regimeNameEl = document.getElementById('fiscal-regime-name');
    if (regimeNameEl) {
        if (detectedVertical === 'dental') {
            regimeNameEl.innerText = regimeName + " (con quota ENPAM " + enpamRate.toFixed(1) + "%)";
        } else {
            regimeNameEl.innerText = currentData.market_and_fiscal_intelligence?.fiscal_analysis?.regime_name || 'Standard';
        }
    }

    // --- CALCOLO AFFIDABILITÀ FISCALE (ISA MODELLO DK21U) / SALUTE AZIENDALE ---
    const isaBadge = document.getElementById('isa-badge');
    if (isaBadge) {
        if (unit_tariffa > 0) {
            const ros = reddito / unit_tariffa;
            if (ros >= 0.40) {
                if (detectedVertical === 'dental') {
                    isaBadge.innerText = "CONGRUO (PREMIALE)";
                } else {
                    isaBadge.innerText = "ECCELLENTE";
                }
                isaBadge.className = "px-3 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-xl bg-green-100 text-green-700 transition-colors duration-200";
            } else if (ros >= 0.25) {
                if (detectedVertical === 'dental') {
                    isaBadge.innerText = "CONGRUO (COERENTE)";
                } else {
                    isaBadge.innerText = "COERENTE";
                }
                isaBadge.className = "px-3 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-xl bg-amber-100 text-amber-700 transition-colors duration-200";
            } else {
                if (detectedVertical === 'dental') {
                    isaBadge.innerText = "RISCHIO ACCERTAMENTO";
                } else {
                    isaBadge.innerText = "RISCHIOSO";
                }
                isaBadge.className = "px-3 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-xl bg-red-100 text-red-700 transition-colors duration-200";
            }
        } else {
            isaBadge.innerText = "VERIFICA...";
            isaBadge.className = "px-3 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-xl bg-gray-100 text-gray-500 transition-colors duration-200";
        }
    }



    // Aggiornamento DOM elementi Sidebar
    document.getElementById('out-ricavi').innerText = currFmt.format(unit_tariffa);
    document.getElementById('out-costi-var').innerText = currFmt.format(varCosts);
    document.getElementById('out-mdc').innerText = currFmt.format(unit_mdc);
    document.getElementById('out-costo-fisso').innerText = currFmt.format(unit_costofisso);
    document.getElementById('out-reddito').innerText = currFmt.format(reddito);
    document.getElementById('out-tasse').innerText = currFmt.format(prelievoTotale);
    document.getElementById('out-utile').innerText = currFmt.format(unit_utile);

    // Mostra il dettaglio del costo opportunità orario effettivo ricalcolato
    const localBurdenRateEl = document.getElementById('local-burden-rate');
    if (localBurdenRateEl) {
        if (detectedVertical === 'dental') {
            localBurdenRateEl.innerText = `+ ${currFmt.format(localBurdenHourly)} / h sedia (Saturata: ${currFmt.format(workstationTotalHourlyRate)}/h)`;
        } else {
            localBurdenRateEl.innerText = `+ ${currFmt.format(localBurdenHourly)} / ora postazione`;
        }
    }

    // Aggiornamento Header
    document.getElementById('header-mdc').innerText = currFmt.format(unit_mdc);
    if (detectedVertical === 'dental') {
        document.getElementById('header-time').innerText = grossWorkstationTime + ' min (lordi)';
    } else {
        document.getElementById('header-time').innerText = tempoClinico + ' min';
    }

    // Aggiornamento Barra Margine e Indicatori visivi
    const utileEl = document.getElementById('out-utile');
    if (unit_utile < 0) {
        utileEl.className = 'text-xl font-black text-red-500';
        document.getElementById('margin-bar').className = 'h-full bg-red-500 transition-all duration-300';
    } else {
        utileEl.className = 'text-xl font-black text-green-600';
        document.getElementById('margin-bar').className = 'h-full bg-green-500 transition-all duration-300';
    }
    const mdcPct = unit_tariffa > 0 ? (unit_mdc / unit_tariffa) * 100 : 0;
    document.getElementById('margin-bar').style.width = Math.max(0, Math.min(100, mdcPct)) + '%';

    // Break-Even Point Dinamico
    const fixedCostsInput = parseFloat(document.getElementById('in-fissi-annui').value) || 50000;
    const bepAllocation = parseFloat(document.getElementById('select-bep-allocation').value) || 0.60;
    const allocatedFixedCosts = fixedCostsInput * bepAllocation;

    const bepUnitsEl = document.getElementById('bep-units');
    const bepRationaleEl = document.getElementById('bep-rationale');
    if (unit_mdc > 0) {
        const bepVal = Math.ceil(allocatedFixedCosts / unit_mdc);
        bepUnitsEl.innerText = bepVal + " prestazioni / anno";
        if (detectedVertical === 'dental') {
            bepRationaleEl.innerHTML = `Con un Margine di Contribuzione unitario di <strong>${currFmt.format(unit_mdc)}</strong>, lo studio raggiunge il pareggio finanziario alla <strong>${bepVal}ª esecuzione annua</strong> per coprire la quota allocata del <strong>${(bepAllocation * 100).toFixed(0)}%</strong> dei costi fissi strutturali allocati (${currFmt.format(allocatedFixedCosts)} su ${currFmt.format(fixedCostsInput)}).`;
        } else {
            bepRationaleEl.innerHTML = `Con un Margine di Contribuzione unitario di <strong>${currFmt.format(unit_mdc)}</strong>, l'attività raggiunge il pareggio finanziario alla <strong>${bepVal}ª esecuzione annua</strong> per coprire la quota allocata del <strong>${(bepAllocation * 100).toFixed(0)}%</strong> delle spese fisse operative associate...`;
        }
    } else {
        bepUnitsEl.innerText = "Non Raggiungibile";
        if (detectedVertical === 'dental') {
            bepRationaleEl.innerHTML = "L'MDC è economico negativo. Aumenta la tariffa o abbassa i costi variabili clinici per poter ammortizzare la struttura.";
        } else {
            bepRationaleEl.innerHTML = "L'MDC è negativo. Aumenta la tariffa o abbassa i costi variabili per poter ammortizzare la struttura.";
        }
    }

    // Aggiornamento Health Badge
    const healthBadge = document.getElementById('label-health');
    const healthDesc = document.getElementById('label-health-desc');
    const healthCard = document.getElementById('cfo-health-card');
    if (unit_utile > 20) {
        healthBadge.className = 'px-4 py-2 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-md';
        healthBadge.innerText = 'PROFITTEVOLE';
        if (detectedVertical === 'dental') {
            healthDesc.innerText = "La prestazione copre i costi strutturali sbilanciati sulla reale saturazione d'agenda.";
        } else {
            healthDesc.innerText = "Ottimo. La prestazione copre i costi strutturali e garantisce utile.";
        }
        healthCard.style.borderColor = '#22c55e';
    } else if (unit_utile >= 0) {
        healthBadge.className = 'px-4 py-2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-md';
        healthBadge.innerText = 'MARGINI BASSI';
        if (detectedVertical === 'dental') {
            healthDesc.innerText = "Utile netto risicato. Monitorare l'indice di saturazione per non andare in perdita.";
        } else {
            healthDesc.innerText = "Utile netto risicato. Utilizzare prevalentemente come servizio gancio.";
        }
        healthCard.style.borderColor = '#f59e0b';
    } else {
        healthBadge.className = 'px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-md';
        healthBadge.innerText = 'IN PERDITA';
        if (detectedVertical === 'dental') {
            healthDesc.innerText = "Critico. La tariffa non sostiene il tempo poltrona lordo o risente della scarsa saturazione.";
        } else {
            healthDesc.innerText = "Critico. La tariffa NON sostiene il costo di struttura e il prelievo fiscale.";
        }
        healthCard.style.borderColor = '#ef4444';
    }

    updateSimulation(workstationTotalHourlyRate, grossWorkstationTime, varCosts);
}

function recalculateConsolidatedWorkstationRate() { 
    const ob = currentData.operating_benchmarks || {}; 
    if (!ob.decomposed_environments_costs) ob.decomposed_environments_costs = {}; 
    if (!ob.decomposed_machinery_costs) ob.decomposed_machinery_costs = {};

    // Aggiorna decomposed_environments_costs dagli input degli ambienti
    const locations = currentData.environments || [];
    locations.forEach((loc, idx) => {
        const inputEl = document.getElementById(`input-loc-rate-${idx}`);
        const rate = inputEl ? parseFloat(inputEl.value) : getDecomposedEnvironmentRate(loc);
        if (loc.loc_name) {
            const key = loc.loc_name.replace(/\s+/g, '_');
            ob.decomposed_environments_costs[key] = rate;
            ob.decomposed_environments_costs[loc.loc_name] = rate;
        }
    });

    // Aggiorna decomposed_machinery_costs dagli input degli asset
    const assets = currentData.assets || [];
    assets.forEach((ast, idx) => {
        const inputEl = document.getElementById(`input-ast-cost-${idx}`);
        const rate = inputEl ? parseFloat(inputEl.value) : getDecomposedAssetRate(ast);
        if (ast.asset_name) {
            const key = ast.asset_name.replace(/\s+/g, '_');
            ob.decomposed_machinery_costs[key] = rate;
            ob.decomposed_machinery_costs[ast.asset_name] = rate;
        }
    });

    // Somma algebrica dei costi orari destrutturati
    const totalEnv = Object.values(ob.decomposed_environments_costs).reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
    const totalMach = Object.values(ob.decomposed_machinery_costs).reduce((sum, val) => sum + (parseFloat(val) || 0), 0);

    // Aggiornamento del costo fisso orario consolidato
    ob.workstation_hourly_rate_consolidated = parseFloat((totalEnv + totalMach).toFixed(2));
    ob.chair_hourly_rate_consolidated = ob.workstation_hourly_rate_consolidated;

    // Sincronizzazione con il DOM, se il campo è visibile all'utente
    const wsInput = document.getElementById('in-poltrona');
    if (wsInput && !wsInput.disabled) {
        wsInput.value = ob.workstation_hourly_rate_consolidated;
    }

    return ob.workstation_hourly_rate_consolidated;
}

// Retrocompatibility alias
function recalculateConsolidatedChairRate() {
    return recalculateConsolidatedWorkstationRate();
}

function updateBOMFromInputs() {
    let totalPrimaryFee = 0;
    let totalSecondaryFee = 0;
    let totalConsumables = 0;
    let totalWorkstationTime = 0;

    const rates = currentData.operating_benchmarks?.operators_hourly_rates || {};
    const defaultRates = {
        "Medico_Chirurgo_Odontoiatra": 62.4,
        "Assistente_ASO": 16.9,
        "Segretaria_Amministrativa": 14.95
    };
    const vertical = (currentData.vertical || 'generic').toLowerCase();

    const steps = currentData.bill_of_materials?.bom_steps || [];
    steps.forEach((sub, idx) => {
        let stepSum = 0;
        let calculatedStaffCost = 0;

        // 1. Ricalcola le durate e i costi del personale partendo dai singoli step operativi
        (sub.stages || []).forEach((stg, stageIdx) => {
            (stg.steps || []).forEach((step, stepIdx) => {
                const el = document.getElementById(`input-bom-step-time-${idx}-${stageIdx}-${stepIdx}`);
                if (el) {
                    const stepTime = parseFloat(el.value) || 0;
                    step.estimated_time_minutes = stepTime;
                    stepSum += stepTime;

                    // Calcolo del costo del personale dello step in base alle tariffe orarie
                    const skills = step.required_skills || [];
                    skills.forEach(skill => {
                        let rate = parseFloat(rates[skill]) || parseFloat(defaultRates[skill]);
                        if (isNaN(rate)) {
                            rate = isPrimaryOperatorSkill(skill, vertical) ? 62.4 : 16.9;
                        }
                        calculatedStaffCost += (rate / 60) * stepTime;
                    });
                }
            });
        });

        // Aggiorna l'input di durata totale del sottoprocesso
        const timeInput = document.getElementById(`input-bom-time-${idx}`);
        if (timeInput) {
            timeInput.value = stepSum;
            sub.estimated_total_time_minutes = stepSum;
        }

        // Se sono stati modificati i singoli step, adegua dinamicamente l'input del costo operatore della fase
        const staffInput = document.getElementById(`input-bom-staff-${idx}`);
        if (staffInput && stepSum > 0) {
            staffInput.value = calculatedStaffCost.toFixed(2);
        }

        // Lettura delle altre componenti economiche della fase
        const consumables = parseFloat(document.getElementById(`input-bom-consumables-${idx}`).value) || 0;
        const depr = parseFloat(document.getElementById(`input-bom-depr-${idx}`).value) || 0;
        const staff = parseFloat(document.getElementById(`input-bom-staff-${idx}`).value) || 0;
        const time = parseFloat(document.getElementById(`input-bom-time-${idx}`).value) || 0;
        const workstationTime = parseFloat(document.getElementById(`input-bom-chair-time-${idx}`).value) || 0;

        if (!sub.calculation_breakdown) sub.calculation_breakdown = {};
        sub.calculation_breakdown.consumables = consumables;
        sub.calculation_breakdown.depreciation = depr;
        sub.calculation_breakdown.staff_cost = staff;
        sub.calculation_breakdown.workstation_time_mins = workstationTime;
        sub.estimated_total_time_minutes = time;

        const singleCost = consumables + depr + staff;
        sub.estimated_internal_cost = singleCost;

        const labelCostEl = document.getElementById(`label-bom-cost-${idx}`);
        if (labelCostEl) {
            labelCostEl.innerText = `€ ${singleCost.toFixed(2)}`;
        }

        // Calcolo della ripartizione operatore primario / secondario
        const split = calculateSubprocessStaffCosts(sub);
        totalPrimaryFee += split.primaryOperator;
        totalSecondaryFee += split.secondaryOperator;

        totalConsumables += consumables;
        totalWorkstationTime += workstationTime;
    });

    // Se non sono presenti sottoprocessi, verifica se esistono contributi dai meta-operatori
    if (totalSecondaryFee === 0) {
        const metaList = currentData.market_and_fiscal_intelligence?.meta_operators_overhead || currentData.qualitative_parser_output?.meta_operators_overhead || [];
        metaList.forEach(op => {
            const role = (op.role || "").toLowerCase();
            if (!isPrimaryOperatorSkill(role, vertical)) {
                totalSecondaryFee += op.allocated_cost || 0;
            }
        });
    }

    // 2. Propaga i nuovi valori aggregati agli input della sidebar
    const compensoEl = document.getElementById('in-compenso');
    if (compensoEl) {
        compensoEl.value = totalPrimaryFee.toFixed(2);
    }
    const compensoPctEl = document.getElementById('in-compenso-pct');
    if (compensoPctEl) {
        const currentTariffa = parseFloat(document.getElementById('in-tariffa').value) || 0;
        compensoPctEl.value = currentTariffa > 0 ? ((totalPrimaryFee / currentTariffa) * 100).toFixed(2) : 0;
    }
    document.getElementById('in-costo-aso').value = totalSecondaryFee.toFixed(2);
    document.getElementById('in-tempo').value = totalWorkstationTime;

    recalculateAll();
    checkDirty();
}

function updateSuppliersFromInputs() {
    const suppliersList = currentData.market_and_fiscal_intelligence?.suppliers || currentData.suppliers_output?.suppliers || currentData.suppliers || [];

    // Check if flat format
    if (suppliersList.length > 0 && !suppliersList[0].required_material) {
        updateFlatSuppliersFromInputs();
        return;
    }

    let totalSuppliersCost = 0;
    let totalLabCost = 0;

    suppliersList.forEach((mat, matIdx) => {
        const selectedName = selectedSuppliers[mat.required_material];
        (mat.providers || []).forEach((prov, provIdx) => {
            const el = document.getElementById(`input-supplier-cost-${matIdx}-${provIdx}`);
            if (el) {
                prov.cost = parseFloat(el.value) || 0;
            }
            if (prov.supp_name === selectedName) {
                if (mat.required_material.toLowerCase().includes("laboratorio")) {
                    totalLabCost += prov.cost;
                } else {
                    totalSuppliersCost += prov.cost;
                }
            }
        });
    });

    const bomConsumables = (currentData.bill_of_materials?.bom_steps || []).reduce((acc, curr) => acc + (curr.calculation_breakdown?.consumables || 0), 0);

    document.getElementById('in-materiali').value = (bomConsumables + totalSuppliersCost).toFixed(2);
    document.getElementById('in-lab').value = totalLabCost.toFixed(2);

    recalculateAll();
    checkDirty();
}

function updateFlatSuppliersFromInputs() {
    const suppliersList = currentData.market_and_fiscal_intelligence?.suppliers || currentData.suppliers_output?.suppliers || currentData.suppliers || [];
    let totalSuppliersCost = 0;
    suppliersList.forEach((s, idx) => {
        const el = document.getElementById(`input-supplier-flat-cost-${idx}`);
        if (el) {
            const val = parseFloat(el.value) || 0;
            if (s.cost_of_goods !== undefined) s.cost_of_goods = val;
            else s.cost = val;
            totalSuppliersCost += val;
        }
    });

    const bomConsumables = (currentData.bill_of_materials?.bom_steps || []).reduce((acc, curr) => acc + (curr.calculation_breakdown?.consumables || 0), 0);
    document.getElementById('in-materiali').value = (bomConsumables + totalSuppliersCost).toFixed(2);

    recalculateAll();
    checkDirty();
}

function updateLocationsFromInputs() {
    const locations = currentData.environments || [];
    locations.forEach((loc, idx) => {
        const rate = parseFloat(document.getElementById(`input-loc-rate-${idx}`).value) || 0;
        const time = parseFloat(document.getElementById(`input-loc-time-${idx}`).value) || 0;

        loc.estimated_internal_cost_rate = rate;
        loc.estimated_internal_cost = (rate / 60) * time;
        document.getElementById(`label-loc-cost-${idx}`).innerText = `€ ${loc.estimated_internal_cost.toFixed(2)}`;
    });

    recalculateConsolidatedWorkstationRate();

    recalculateAll();
    checkDirty();
}

function updateAssetsFromInputs() { 
    const assets = currentData.assets || []; 
    const ob = currentData.operating_benchmarks || {};
    if (!ob.decomposed_machinery_costs) ob.decomposed_machinery_costs = {};

    assets.forEach((ast, idx) => { 
        const elRate = document.getElementById(`input-ast-cost-${idx}`); 
        if (elRate) { 
            const newHourlyRate = parseFloat(elRate.value) || 0; 
            
            // 1. Aggiorna l'oggetto di raccordo per il backend
            if (ast.asset_name) {
                ob.decomposed_machinery_costs[ast.asset_name] = newHourlyRate;
                const cleanKey = ast.asset_name.replace(/\s+/g, '_');
                ob.decomposed_machinery_costs[cleanKey] = newHourlyRate;
            }

            // 2. Calcola i minuti totali associati (recuperando gli step dalla BOM)
            let totalMinutes = 0;
            if (ast.associated_subprocess_skus && Array.isArray(ast.associated_subprocess_skus)) {
                totalMinutes = getMinutesForSkus(ast.associated_subprocess_skus); 
            }

            // 3. Aggiorna il costo interno stimato (rigorosamente a 2 decimali)
            ast.estimated_internal_cost_rate = newHourlyRate;
            ast.estimated_internal_cost = parseFloat(((newHourlyRate / 60) * totalMinutes).toFixed(2));
            
            // Aggiorna anche il label del costo orario nella UI
            const labelAstCost = document.getElementById(`label-ast-cost-${idx}`);
            if (labelAstCost) {
                labelAstCost.innerText = `€ ${newHourlyRate.toFixed(2)} /h`;
            }
        } 
    });

    // 4. Forza il ricalcolo della postazione consolidata per prevenire disallineamenti
    recalculateConsolidatedWorkstationRate();
    recalculateAll();
    checkDirty();
}

function updateMetaFromInputs() {
    const metaList = currentData.market_and_fiscal_intelligence?.meta_operators_overhead || currentData.qualitative_parser_output?.meta_operators_overhead || [];
    metaList.forEach((op, idx) => {
        const el = document.getElementById(`input-meta-cost-${idx}`);
        if (el) {
            op.allocated_cost = parseFloat(el.value) || 0;
        }
        document.getElementById(`label-meta-cost-${idx}`).innerText = `€ ${op.allocated_cost.toFixed(2)}`;
    });

    // If BOM has no steps/subprocesses or ASO cost is 0, we can update in-costo-aso from metaList
    const steps = currentData.bill_of_materials?.bom_steps || [];
    if (steps.length === 0) {
        let fallbackASO = 0;
        const vertical = (currentData.vertical || 'generic').toLowerCase();
        metaList.forEach(op => {
            const role = (op.role || "").toLowerCase();
            if (!isPrimaryOperatorSkill(role, vertical)) {
                fallbackASO += op.allocated_cost || 0;
            }
        });
        document.getElementById('in-costo-aso').value = fallbackASO.toFixed(2);
    }

    recalculateAll();
    checkDirty();
}

function updateSimulation(workstationTotalHourlyRate, grossWorkstationTime, varCosts) {
    const volume = parseInt(document.getElementById('volume-slider').value);
    document.getElementById('slider-val').innerText = volume;

    document.getElementById('sim-fatturato').innerText = currFmt.format(volume * unit_tariffa);
    document.getElementById('sim-margine').innerText = currFmt.format(volume * unit_mdc);
    document.getElementById('sim-costi').innerText = currFmt.format(volume * unit_costofisso);

    const totUtile = volume * unit_utile;
    const valUtile = document.getElementById('sim-utile');
    valUtile.innerText = currFmt.format(totUtile);

    const cardUtile = document.getElementById('sim-utile-card');
    const labelUtile = document.getElementById('sim-utile-label');
    if (totUtile < 0) {
        cardUtile.className = 'bg-red-50 border border-red-200 p-3 rounded-2xl';
        labelUtile.className = 'block text-[8px] font-black text-red-500 uppercase tracking-widest mb-1';
        valUtile.className = 'text-base font-black text-red-700';
    } else {
        cardUtile.className = 'bg-green-50 border border-green-200 p-3 rounded-2xl';
        labelUtile.className = 'block text-[8px] font-black text-green-600 uppercase tracking-widest mb-1';
        valUtile.className = 'text-base font-black text-green-700';
    }

    // Ricalcolo dinamico della sensibilità No-Show con Costo Opportunità
    const loss5El = document.getElementById('no-show-5-loss');
    const loss10El = document.getElementById('no-show-10-loss');
    if (loss5El || loss10El) {
        const baseCost = workstationTotalHourlyRate !== undefined ? workstationTotalHourlyRate : 0;
        const totalTime = grossWorkstationTime !== undefined ? grossWorkstationTime : 0;
        const noShowRate5Loss = volume * 0.05 * (unit_mdc + ((baseCost / 60) * totalTime));
        const noShowRate10Loss = volume * 0.10 * (unit_mdc + ((baseCost / 60) * totalTime));
        if (loss5El) loss5El.innerText = currFmt.format(noShowRate5Loss);
        if (loss10El) loss10El.innerText = currFmt.format(noShowRate10Loss);
    }
}

function updateBalanceSheetFromInputs() {
    const ob = currentData.operating_benchmarks || {};
    const raccordo = ob.balance_sheet_raccordo || {};

    // Funzioni helper di classificazione dinamica dei conti reali
    const isFacilityAccount = (key) => key.startsWith('606') || key.startsWith('621') || key === '631.00103';
    const isEquipmentAccount = (key) => key.startsWith('601') || key.startsWith('605');

    // 1. Calcola i totali originari prima della modifica
    let originalFacilityTot = 0;
    let originalEquipmentTot = 0;
    for (let key in raccordo) {
        const val = parseFloat(raccordo[key]) || 0;
        if (isFacilityAccount(key)) originalFacilityTot += val;
        if (isEquipmentAccount(key)) originalEquipmentTot += val;
    }

    // 2. Legge i nuovi valori digitati dall'utente nella tabella e aggiorna la memoria
    for (let key in raccordo) {
        const inputEl = document.getElementById(`input-raccordo-${key}`);
        if (inputEl) {
            raccordo[key] = parseFloat(inputEl.value) || 0;
        }
    }

    // 3. Calcola i nuovi totali modificati
    let newFacilityTot = 0;
    let newEquipmentTot = 0;
    let newTotalOverhead = 0;

    for (let key in raccordo) {
        const val = parseFloat(raccordo[key]) || 0;
        if (isFacilityAccount(key)) newFacilityTot += val;
        if (isEquipmentAccount(key)) newEquipmentTot += val;

        // L'overhead strutturale annuo totale esclude i costi degli ammortamenti e del personale
        if (!isEquipmentAccount(key) && !key.startsWith('610')) {
            newTotalOverhead += val;
        }
    }

    // 4. Ricalibra proporzionalmente i costi orari degli ambienti (Variazione Gestione Mura/Utenze)
    if (originalFacilityTot > 0) {
        const facilityRatio = newFacilityTot / originalFacilityTot;
        const locations = currentData.environments || [];
        locations.forEach((loc, idx) => {
            const inputEl = document.getElementById(`input-loc-rate-${idx}`);
            if (inputEl) {
                const originalRate = loc.estimated_internal_cost_rate || 0;
                const newRate = originalRate * facilityRatio;
                inputEl.value = newRate.toFixed(2);

                loc.estimated_internal_cost_rate = newRate;
                const timeEl = document.getElementById(`input-loc-time-${idx}`);
                const time = timeEl ? parseFloat(timeEl.value) : 0;
                loc.estimated_internal_cost = (newRate / 60) * time;

                const labelLocCost = document.getElementById(`label-loc-cost-${idx}`);
                if (labelLocCost) {
                    labelLocCost.innerText = `€ ${loc.estimated_internal_cost.toFixed(2)}`;
                }
            }
        });
    }

    // 5. Ricalibra proporzionalmente gli ammortamenti degli asset (Variazione Leasing/Ammortamenti)
    if (originalEquipmentTot > 0) {
        const equipmentRatio = newEquipmentTot / originalEquipmentTot;
        const assets = currentData.assets || [];
        assets.forEach((ast, idx) => {
            const inputEl = document.getElementById(`input-ast-cost-${idx}`);
            if (inputEl) {
                const originalRate = ast.estimated_internal_cost || 0;
                const newRate = originalRate * equipmentRatio;
                inputEl.value = newRate.toFixed(2);

                ast.estimated_internal_cost = newRate;
                const labelAstCost = document.getElementById(`label-ast-cost-${idx}`);
                if (labelAstCost) {
                    labelAstCost.innerText = `€ ${newRate.toFixed(2)} /h`;
                }
            }
        });
    }

    // 6. Aggiorna l'input dei Costi Fissi Strutturali Annui nella barra laterale
    document.getElementById('in-fissi-annui').value = newTotalOverhead.toFixed(2);

    // 7. Ricalcola la tariffa oraria consolidata della postazione principale
    recalculateConsolidatedWorkstationRate();

    // 8. Esegue il ricalcolo generale dei margini, BEP e tasse
    recalculateAll();
    checkDirty();
}

function safeReadFloat(elementId, fallbackValue) {
    const el = document.getElementById(elementId);
    if (!el) return fallbackValue; // Preserva il dato originale se il DOM element manca
    const parsed = parseFloat(el.value);
    return isNaN(parsed) ? fallbackValue : parsed;
}

function getPayloadToSave() {
    if (!currentData) return null;

    let payload = JSON.parse(JSON.stringify(currentData)); // Deep copy per evitare corruzione in caso di errori a runtime

    // Inizializza i blocchi della struttura se mancanti
    if (!payload.operating_benchmarks) payload.operating_benchmarks = {};
    if (!payload.financial_simulations) payload.financial_simulations = {};
    if (!payload.financial_simulations.pricing_summary) payload.financial_simulations.pricing_summary = {};
    if (!payload.financial_simulations.cost_breakdown_unit) payload.financial_simulations.cost_breakdown_unit = {};
    if (!payload.financial_simulations.fiscal_and_previdential_impact) payload.financial_simulations.fiscal_and_previdential_impact = {};
    if (!payload.financial_simulations.predictive_volume_simulation) payload.financial_simulations.predictive_volume_simulation = {};
    if (!payload.financial_simulations.predictive_volume_simulation.break_even_point_metrics) {
        payload.financial_simulations.predictive_volume_simulation.break_even_point_metrics = {};
    }

    // Lettura sicura parametri operativi ed efficienza (Task 2)
    const tempoSetup = safeReadFloat('in-setup-tempo', (payload.operating_benchmarks.workstation_setup_turnover_minutes || 0));
    const saturazionePct = safeReadFloat('in-saturazione-pct', ((payload.operating_benchmarks.agenda_saturation_target * 100) || 100));
    const garanziaPct = safeReadFloat('in-garanzia-pct', ((payload.operating_benchmarks.clinical_failure_provision_rate * 100) || 0));

    payload.operating_benchmarks.agenda_saturation_target = saturazionePct / 100;
    payload.operating_benchmarks.workstation_setup_turnover_minutes = tempoSetup;
    payload.operating_benchmarks.clinical_failure_provision_rate = garanziaPct / 100;

    // Sidebar values
    const tariffa = safeReadFloat('in-tariffa', (payload.financial_simulations.pricing_summary.catalog_price || 0));
    payload.financial_simulations.pricing_summary.catalog_price = tariffa;

    let compenso = 0;
    const ricalibrazioneEl = document.getElementById('in-ricalibrazione-pct');
    if (ricalibrazioneEl) {
        let recalibrationVal = safeReadFloat('in-ricalibrazione-pct', payload.operating_benchmarks.recalibration_percentage || 20);
        recalibrationVal = Math.round(recalibrationVal);
        payload.operating_benchmarks.recalibration_percentage = recalibrationVal;
        compenso = (tariffa * recalibrationVal) / 100;
    } else {
        compenso = safeReadFloat('in-compenso', (payload.financial_simulations.cost_breakdown_unit.primary_operator_fee || 0));
    }

    const costoAso = safeReadFloat('in-costo-aso', (payload.financial_simulations.cost_breakdown_unit.secondary_operator_fee || 0));
    const materiali = safeReadFloat('in-materiali', (payload.financial_simulations.cost_breakdown_unit.direct_materials_cost || 0));
    const lab = safeReadFloat('in-lab', (payload.financial_simulations.cost_breakdown_unit.external_processing_cost || 0));
    const tempo = safeReadFloat('in-tempo', (payload.financial_simulations.cost_breakdown_unit.workstation_time_mins || 0));
    const poltrona = safeReadFloat('in-poltrona', (payload.operating_benchmarks.workstation_hourly_rate_consolidated || 0));
    const tasse = safeReadFloat('in-tasse', ((payload.market_and_fiscal_intelligence?.fiscal_analysis?.income_tax_rate * 100) || 0));
    const enpam = safeReadFloat('select-enpam-rate', ((payload.market_and_fiscal_intelligence?.fiscal_analysis?.social_security_rate * 100) || 0));
    const fissiAnnui = safeReadFloat('in-fissi-annui', (payload.financial_simulations.predictive_volume_simulation.break_even_point_metrics.allocated_overhead_value || 0));

    // Sincronizzazione breakdown costi standard
    payload.financial_simulations.cost_breakdown_unit.primary_operator_fee = compenso;
    payload.financial_simulations.cost_breakdown_unit.secondary_operator_fee = costoAso;
    payload.financial_simulations.cost_breakdown_unit.external_processing_cost = lab;
    payload.financial_simulations.cost_breakdown_unit.direct_materials_cost = materiali;

    const detectedVertical = (payload.vertical || 'generic').toLowerCase();
    const localBurdenHourly = parseFloat(payload.market_and_fiscal_intelligence?.fiscal_analysis?.local_compliance_overhead_hourly) || 0.00;

    const costoOraSaturata = saturazionePct > 0 ? (poltrona / (saturazionePct / 100)) : poltrona;
    const tempoSediaLordo = tempo + tempoSetup;
    const costoSediaTotaleOrario = costoOraSaturata + localBurdenHourly;
    const costOfPostazioneFixed = parseFloat(((costoSediaTotaleOrario / 60) * tempoSediaLordo).toFixed(2));

    payload.financial_simulations.cost_breakdown_unit.workstation_time_cost_fixed = costOfPostazioneFixed;

    const costoAccantonamentoGaranzia = parseFloat(((tariffa * garanziaPct) / 100).toFixed(2));
    payload.financial_simulations.cost_breakdown_unit.clinical_failure_provision_value = costoAccantonamentoGaranzia;

    payload.financial_simulations.cost_breakdown_unit.total_direct_variable_costs_unit = 
        parseFloat((compenso + costoAso + materiali + lab + costoAccantonamentoGaranzia).toFixed(2));
    payload.financial_simulations.cost_breakdown_unit.contribution_margin_unit = 
        parseFloat((tariffa - (compenso + costoAso + materiali + lab + costoAccantonamentoGaranzia)).toFixed(2));

    payload.financial_simulations.cost_breakdown_unit.total_operating_cost_unit = 
        parseFloat(((compenso + costoAso + materiali + lab + costoAccantonamentoGaranzia) + costOfPostazioneFixed).toFixed(2));

    const operatingIncome = parseFloat((tariffa - ((compenso + costoAso + materiali + lab + costoAccantonamentoGaranzia) + costOfPostazioneFixed)).toFixed(2));
    payload.financial_simulations.cost_breakdown_unit.operating_income_unit = operatingIncome;

    payload.financial_simulations.fiscal_and_previdential_impact.enpam_previdential_rate = enpam / 100;
    payload.financial_simulations.fiscal_and_previdential_impact.estimated_tax_burden_ratio_on_revenue = tasse / 100;

    let taxesVal = 0;
    if (detectedVertical === 'dental') {
        taxesVal = parseFloat((tariffa * ((tasse + enpam) / 100)).toFixed(2));
    } else {
        taxesVal = operatingIncome > 0 ? parseFloat((operatingIncome * (tasse / 100)).toFixed(2)) : 0;
    }
    payload.financial_simulations.fiscal_and_previdential_impact.estimated_tax_and_previdential_burden_value = taxesVal;

    const bepAllocation = safeReadFloat('select-bep-allocation', (payload.financial_simulations.predictive_volume_simulation.break_even_point_metrics.allocated_budget_percentage || 1.00));
    payload.financial_simulations.predictive_volume_simulation.break_even_point_metrics.allocated_overhead_value = fissiAnnui * bepAllocation;
    payload.financial_simulations.predictive_volume_simulation.break_even_point_metrics.allocated_budget_percentage = bepAllocation;

    // Aggiornamento benchmark operativi
    payload.operating_benchmarks.workstation_hourly_rate_consolidated = poltrona;
    payload.operating_benchmarks.active_workstations_count = payload.operating_benchmarks.active_workstations_count || payload.operating_benchmarks.number_of_chairs || 3;

    // 2. Tab: BOM (Preserve values if inputs are not currently rendered in DOM)
    const steps = payload.bill_of_materials?.bom_steps || [];
    if (Array.isArray(steps)) {
        steps.forEach((sub, idx) => {
            (sub.stages || []).forEach((stg, stageIdx) => {
                (stg.steps || []).forEach((step, stepIdx) => {
                    step.estimated_time_minutes = safeReadFloat(`input-bom-step-time-${idx}-${stageIdx}-${stepIdx}`, step.estimated_time_minutes || 0);
                });
            });

            if (!sub.calculation_breakdown) sub.calculation_breakdown = {};
            
            sub.calculation_breakdown.consumables = safeReadFloat(`input-bom-consumables-${idx}`, sub.calculation_breakdown.consumables || 0);
            sub.calculation_breakdown.depreciation = safeReadFloat(`input-bom-depr-${idx}`, sub.calculation_breakdown.depreciation || 0);
            sub.calculation_breakdown.staff_cost = safeReadFloat(`input-bom-staff-${idx}`, sub.calculation_breakdown.staff_cost || 0);
            
            const workstationTime = safeReadFloat(`input-bom-chair-time-${idx}`, sub.calculation_breakdown.workstation_time_mins || 0);
            sub.calculation_breakdown.workstation_time_mins = workstationTime;
            
            sub.estimated_total_time_minutes = safeReadFloat(`input-bom-time-${idx}`, sub.estimated_total_time_minutes || 0);
            
            sub.estimated_internal_cost = (sub.calculation_breakdown.consumables || 0) + 
                                          (sub.calculation_breakdown.depreciation || 0) + 
                                          (sub.calculation_breakdown.staff_cost || 0);
        });
    }

    // 3. Tab: Suppliers (Preserve values if inputs are not currently rendered in DOM)
    const suppliersList = payload.market_and_fiscal_intelligence?.suppliers || payload.suppliers_output?.suppliers || payload.suppliers || [];
    if (Array.isArray(suppliersList) && suppliersList.length > 0) {
        if (!suppliersList[0].required_material) {
            suppliersList.forEach((s, idx) => {
                const originalCost = s.cost_of_goods !== undefined ? s.cost_of_goods : (s.cost || 0);
                const val = safeReadFloat(`input-supplier-flat-cost-${idx}`, originalCost);
                if (s.cost_of_goods !== undefined) s.cost_of_goods = val;
                else s.cost = val;
            });
        } else {
            suppliersList.forEach((mat, matIdx) => {
                (mat.providers || []).forEach((prov, provIdx) => {
                    prov.cost = safeReadFloat(`input-supplier-cost-${matIdx}-${provIdx}`, prov.cost || 0);
                });
            });
        }
    }

    // 4. Tab: Locations (Preserve values if inputs are not currently rendered in DOM)
    const locations = payload.environments || [];
    if (Array.isArray(locations)) {
        locations.forEach((loc, idx) => {
            const originalRate = loc.estimated_internal_cost_rate || 0;
            const originalTime = loc.estimated_internal_cost ? (loc.estimated_internal_cost / ((originalRate || 1) / 60)) : 0;
            
            const rate = safeReadFloat(`input-loc-rate-${idx}`, originalRate);
            const time = safeReadFloat(`input-loc-time-${idx}`, originalTime);
            
            loc.estimated_internal_cost_rate = rate;
            loc.estimated_internal_cost = (rate / 60) * time;
        });
    }

    // 5. Tab: Assets (Preserve values if inputs are not currently rendered in DOM)
    const assets = payload.assets || [];
    if (Array.isArray(assets)) {
        assets.forEach((ast, idx) => {
            const originalRate = ast.estimated_internal_cost_rate || 0;
            const rate = safeReadFloat(`input-ast-cost-${idx}`, originalRate);
            const associatedSkus = ast.associated_subprocess_skus || [];
            let totalTime = 0;
            const bomStepsList = payload.bill_of_materials?.bom_steps || [];
            bomStepsList.forEach(step => {
                if (associatedSkus.includes(step.subprocess_sku)) {
                    totalTime += step.calculation_breakdown?.workstation_time_mins || step.calculation_breakdown?.chair_time_mins || 0;
                }
            });
            ast.estimated_internal_cost_rate = rate;
            ast.estimated_internal_cost = (rate / 60) * totalTime;
        });
    }

    // 6. Tab: Meta Operators (Preserve values if inputs are not currently rendered in DOM)
    const metaList = payload.market_and_fiscal_intelligence?.meta_operators_overhead || payload.qualitative_parser_output?.meta_operators_overhead || [];
    if (Array.isArray(metaList)) {
        metaList.forEach((op, idx) => {
            op.allocated_cost = safeReadFloat(`input-meta-cost-${idx}`, op.allocated_cost || 0);
        });
    }

    // 7. Fiscal Analysis regime/tax
    if (payload.market_and_fiscal_intelligence && payload.market_and_fiscal_intelligence.fiscal_analysis) {
        payload.market_and_fiscal_intelligence.fiscal_analysis.income_tax_rate = tasse / 100;
        payload.market_and_fiscal_intelligence.fiscal_analysis.social_security_rate = enpam / 100;
        payload.market_and_fiscal_intelligence.fiscal_analysis.total_estimated_tax_burden_ratio = (tasse + enpam) / 100;
    }

    // 8. Synchronize strategic analysis keys (polymorphic NoSQL fields)
    const stratClin = payload.strategic_clinical_analysis || {};
    if (!payload.strategic_operations_analysis) {
        payload.strategic_operations_analysis = {};
    }
    const stratOps = payload.strategic_operations_analysis;

    stratOps.operations_financial_health_rating = stratOps.operations_financial_health_rating || stratClin.clinical_financial_health_rating || "MODERATE_MARGINS";
    stratOps.pricing_and_tariff_strategy_advisory = stratClin.pricing_and_tariff_strategy_advisory || stratOps.pricing_and_tariff_strategy_advisory || "";
    stratOps.extra_options_operations_evaluation = stratOps.extra_options_operations_evaluation || stratClin.extra_options_clinical_evaluation || [];
    stratOps.operations_cost_optimization_recommendations = stratClin.clinical_cost_optimization_recommendations || stratOps.operations_cost_optimization_recommendations || [];

    stratClin.clinical_financial_health_rating = stratOps.operations_financial_health_rating;
    stratClin.pricing_and_tariff_strategy_advisory = stratOps.pricing_and_tariff_strategy_advisory;
    stratClin.extra_options_clinical_evaluation = stratOps.extra_options_operations_evaluation;
    stratClin.clinical_cost_optimization_recommendations = stratOps.operations_cost_optimization_recommendations;

    payload.strategic_clinical_analysis = stratClin;
    payload.strategic_operations_analysis = stratOps;

    currentData = payload; // Riassegna in sicurezza al modello globale

    return currentData;
}

function isDirty() {
    if (!currentData) return false;
    try {
        return JSON.stringify(getPayloadToSave()) !== originalDataStr;
    } catch (e) {
        console.error("Error in isDirty:", e);
        return false;
    }
}

function checkDirty() {
    const dirty = isDirty();
    const saveBtn = document.getElementById('save-btn');
    const aiBtn = document.getElementById('ai-recalc-btn');

    // Gestione Bottone Salva
    if (saveBtn) {
        saveBtn.disabled = !dirty;
        if (dirty) saveBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        else saveBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }

    // Gestione Bottone IA (Si accende quando i dati sono stati modificati)
    if (aiBtn) {
        aiBtn.disabled = !dirty;
        if (dirty) {
            aiBtn.className = "w-full py-2.5 mb-3 bg-black text-white hover:opacity-90 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer shadow-md";
        } else {
            aiBtn.className = "w-full py-2.5 mb-3 bg-zinc-100 text-zinc-400 border border-zinc-200 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-200 cursor-not-allowed";
        }
    }
}

function showRationale(title, text) {
    if (!text || text.trim() === "") return;
    const modal = document.getElementById('rationale-modal');
    if (!modal) return;
    const box = modal.querySelector('div');

    document.getElementById('rationale-modal-title').innerText = title;
    document.getElementById('rationale-modal-text').innerText = text;

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        if (box) box.classList.remove('scale-95');
    }, 10);
}

function closeRationaleModal() {
    const modal = document.getElementById('rationale-modal');
    if (!modal) return;
    const box = modal.querySelector('div');

    modal.classList.add('opacity-0');
    if (box) box.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 200);
}
