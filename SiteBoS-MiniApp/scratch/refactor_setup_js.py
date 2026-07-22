import re

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\advanced-setup.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Helper list of target JS code replacements

# 1. Replace goToStep and changeChairsCount (starts at line 543ish)
# We replace goToStep, changeChairsCount, initializeDefaultEquipment, initializeDefaultStaff, synchronizeBaseEquipment
# Let's inspect where initializeDefaultStaff ends: it ends around line 674.
# Let's target the exact code from "function goToStep" to the end of "synchronizeBaseEquipment()" or similar.
# Wait! Let's check lines 543 to 710 in the original file to see where it ends.
# The original code has:
# function goToStep(step) { ... }
# function changeChairsCount(delta) { ... }
# function initializeDefaultEquipment() { ... }
# function initializeDefaultStaff() { ... }
# function synchronizeBaseEquipment() { ... }
# let's target from "function goToStep" to the end of "synchronizeBaseEquipment" block.
# The synchronizeBaseEquipment ends with:
#             renderMachinery();
#         }
# let's search and replace this block using regex

step_block_pattern = r"function goToStep\(step\).*?renderMachinery\(\)\;\s*\}"

new_step_block = """function goToStep(step) {
            currentStep = step;
            
            // Hide all steps
            document.getElementById('section-step-1').classList.add('hidden');
            document.getElementById('section-step-2').classList.add('hidden');
            document.getElementById('section-step-3').classList.add('hidden');
            
            // Show target step
            document.getElementById(`section-step-${step}`).classList.remove('hidden');
            
            // Update dots
            document.getElementById('dot-step-1').className = `w-2.5 h-2.5 rounded-full ${step >= 1 ? 'bg-black' : 'bg-gray-200'}`;
            document.getElementById('dot-step-2').className = `w-2.5 h-2.5 rounded-full ${step >= 2 ? 'bg-black' : 'bg-gray-200'}`;
            document.getElementById('dot-step-3').className = `w-2.5 h-2.5 rounded-full ${step >= 3 ? 'bg-black' : 'bg-gray-200'}`;
            
            // Update indicator
            document.getElementById('step-indicator').innerText = step;
            document.getElementById('step-desc-micro').innerText = `Fase ${step} di 3`;
            
            // Update titles
            const titles = ["", "Operatori e Staff", "Attrezzature e Asset", "Bilancio"];
            document.getElementById('step-title').innerText = titles[step];
            
            // Render vertical switcher
            renderVerticalSwitcher(step);
            
            if (step === 3) {
                refreshStep3UI();
            }
        }

        // New Segmented Pill Switcher Helpers
        function renderVerticalSwitcher(step) {
            const container = document.getElementById('vertical-switcher-container');
            if (!container) return;
            
            // Hide switcher if single vertical
            if (activeVerticals.length <= 1) {
                container.classList.add('hidden');
                return;
            }
            
            container.classList.remove('hidden');
            container.innerHTML = '';
            
            // Determine active tab variable based on step
            let activeTab;
            if (step === 1) activeTab = activeStaffTab;
            else if (step === 2) activeTab = activeMachineryTab;
            else if (step === 3) activeTab = activeFinancialsTab;
            else return;
            
            // Show active verticals + common tab
            const tabsToShow = [...activeVerticals, 'common'];
            
            tabsToShow.forEach(v => {
                const meta = verticalsMeta[v] || verticalsMeta.generic;
                let displayLabel = meta.label;
                if (step === 1) displayLabel = meta.staffLabel;
                else if (step === 3) displayLabel = meta.financialsLabel;
                
                const isActive = (v === activeTab);
                container.innerHTML += `
                    <button onclick="handleVerticalTabChange('${v}', ${step})" class="flex-1 py-2 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all duration-200 ${isActive ? 'bg-black text-white shadow-sm' : 'text-gray-400 hover:text-black bg-transparent'}">
                        ${meta.emoji} ${displayLabel}
                    </button>
                `;
            });
        }
        
        function handleVerticalTabChange(v, step) {
            if (step === 1) {
                activeStaffTab = v;
                renderOperators();
            } else if (step === 2) {
                activeMachineryTab = v;
                renderMachinery();
            } else if (step === 3) {
                // Save current financials tab before changing
                saveCurrentTabFinancials(activeFinancialsTab);
                activeFinancialsTab = v;
                refreshStep3UI();
            }
            renderVerticalSwitcher(step);
            if (tg.HapticFeedback) {
                tg.HapticFeedback.impactOccurred('light');
            }
        }

        function renderOperationalUnitsCounters() {
            const container = document.getElementById('operational-units-container');
            if (!container) return;
            container.innerHTML = '';
            
            operationalUnits.forEach((unit, idx) => {
                const meta = verticalsMeta[unit.vertical] || verticalsMeta.generic;
                container.innerHTML += `
                    <div class="card-noir p-4 flex flex-col gap-3">
                        <div class="flex items-center justify-between gap-4">
                            <div class="flex-1">
                                <span class="text-[8px] font-black text-gray-400 uppercase tracking-widest block">${meta.emoji} ${meta.name}</span>
                                <h4 class="font-black text-xs uppercase tracking-tight text-black mt-0.5">
                                    ${unit.label} Attivi
                                </h4>
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0 bg-gray-50 border border-border p-1 rounded-xl">
                                <button type="button" onclick="changeUnitCount(${idx}, -1)" class="w-7 h-7 bg-white text-black border border-border rounded-lg flex items-center justify-center font-bold text-xs active:scale-95 transition hover:bg-black hover:text-white">-</button>
                                <input type="number" value="${unit.count}" min="1" readonly class="w-8 text-center bg-transparent border-none text-xs font-black focus:outline-none select-none pointer-events-none">
                                <button type="button" onclick="changeUnitCount(${idx}, 1)" class="w-7 h-7 bg-white text-black border border-border rounded-lg flex items-center justify-center font-bold text-xs active:scale-95 transition hover:bg-black hover:text-white">+</button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        function changeUnitCount(idx, delta) {
            let unit = operationalUnits[idx];
            if (!unit) return;
            unit.count += delta;
            if (unit.count < 1) unit.count = 1;
            
            renderOperationalUnitsCounters();
            
            // Sync flat variables for backward compatibility
            if (unit.vertical === 'dental') {
                reunitiCount = unit.count;
            } else if (unit.vertical === primaryVertical) {
                chairsCount = unit.count;
                numberOfChairs = unit.count;
            }
            
            synchronizeBaseEquipment();
        }

        function initializeDefaultEquipment() {
            machinery = [];
            // Add PC & desks based on unit counts
            operationalUnits.forEach(unit => {
                const count = unit.count;
                const v = unit.vertical;
                
                if (v === 'dental') {
                    for (let i = 0; i < count; i++) {
                        machinery.push({
                            type: 'Riunito Odontoiatrico (Fascia Media)',
                            year: new Date().getFullYear(),
                            ownership: 'Proprietà',
                            value: 18500,
                            useful_life: 10,
                            vertical: 'dental'
                        });
                    }
                    machinery.push({
                        type: "Compressore d'Aria Medicale con Essiccatore",
                        year: new Date().getFullYear(),
                        ownership: 'Proprietà',
                        value: 1600,
                        useful_life: 8,
                        vertical: 'dental'
                    });
                } else if (v === 'beauty') {
                    for (let i = 0; i < count; i++) {
                        machinery.push({
                            type: 'Lettino Estetica / Massaggio Elettrico',
                            year: new Date().getFullYear(),
                            ownership: 'Proprietà',
                            value: 1500,
                            useful_life: 10,
                            vertical: 'beauty'
                        });
                    }
                } else if (v === 'construction') {
                    for (let i = 0; i < count; i++) {
                        machinery.push({
                            type: 'Furgone Attrezzato (Officina Mobile)',
                            year: new Date().getFullYear(),
                            ownership: 'Proprietà',
                            value: 25000,
                            useful_life: 5,
                            vertical: 'construction'
                        });
                    }
                } else if (v === 'hospitality') {
                    for (let i = 0; i < count; i++) {
                        machinery.push({
                            type: 'Letto Matrimoniale con Materasso Orthopedic',
                            year: new Date().getFullYear(),
                            ownership: 'Proprietà',
                            value: 800,
                            useful_life: 10,
                            vertical: 'hospitality'
                        });
                    }
                } else {
                    // generic / professional
                    for (let i = 0; i < count; i++) {
                        machinery.push({
                            type: 'PC Workstation / Notebook Ufficio',
                            year: new Date().getFullYear(),
                            ownership: 'Proprietà',
                            value: 1200,
                            useful_life: 5,
                            vertical: v
                        });
                    }
                }
            });

            // Add common infrastructure presets
            machinery.push({
                type: 'Licenza Software ERP / Gestionale Centrale',
                year: new Date().getFullYear(),
                ownership: 'Proprietà',
                value: 5000,
                useful_life: 5,
                vertical: 'common'
            });
            machinery.push({
                type: "Arredo Reception / Sala d'Attesa",
                year: new Date().getFullYear(),
                ownership: 'Proprietà',
                value: 3500,
                useful_life: 10,
                vertical: 'common'
            });
        }

        function initializeDefaultStaff() {
            const owner = operators.find(op => op.isOwner);
            operators = [];
            if (owner) {
                owner.vertical = 'common';
                operators.push(owner);
            }
            
            // 1. Add Common admin assistant
            operators.push({
                id: 'def-amministrativo',
                name: 'Amministrativo / Segreteria',
                role: 'Amministrativo / Segreteria',
                contract: 'Dipendente (CCNL)',
                level: '4° Livello',
                hours: 40,
                salary: 1614.12,
                vertical: 'common',
                specialization: 'Amministrazione'
            });
            
            // 2. Add vertical operators based on active verticals
            activeVerticals.forEach(v => {
                if (v === 'dental') {
                    operators.push({
                        id: 'def-odontoiatra',
                        name: 'Collaboratore Odontoiatra',
                        role: 'Consulente Professionista',
                        contract: 'Partita IVA',
                        rate_type: 'percentage',
                        rate: 40,
                        vertical: 'dental',
                        specialization: 'Odontoiatria Clinica'
                    });
                } else {
                    const meta = verticalsMeta[v] || verticalsMeta.generic;
                    operators.push({
                        id: `def-operatore-${v}`,
                        name: `Operatore ${meta.name}`,
                        role: 'Tecnico / Specialista Operativo',
                        contract: 'Partita IVA',
                        rate_type: 'percentage',
                        rate: 100,
                        vertical: v,
                        specialization: meta.name
                    });
                }
            });
        }

        function scalePresetItem(name, targetCount, template) {
            const indices = [];
            machinery.forEach((m, idx) => {
                if ((m.type || '').toLowerCase() === name.toLowerCase()) {
                    indices.push(idx);
                }
            });
            
            const currentCount = indices.length;
            if (currentCount < targetCount) {
                const diff = targetCount - currentCount;
                for (let i = 0; i < diff; i++) {
                    machinery.push({ ...template });
                }
            } else if (currentCount > targetCount) {
                const diff = currentCount - targetCount;
                for (let i = 0; i < diff; i++) {
                    const targetIdx = indices[indices.length - 1 - i];
                    machinery.splice(targetIdx, 1);
                }
            }
        }

        function synchronizeBaseEquipment() {
            operationalUnits.forEach(unit => {
                const count = unit.count;
                const v = unit.vertical;
                
                if (v === 'dental') {
                    scalePresetItem('Riunito Odontoiatrico (Fascia Media)', count, {
                        type: 'Riunito Odontoiatrico (Fascia Media)',
                        year: new Date().getFullYear(),
                        ownership: 'Proprietà',
                        value: 18500,
                        useful_life: 10,
                        vertical: 'dental'
                    });
                } else if (v === 'beauty') {
                    scalePresetItem('Lettino Estetica / Massaggio Elettrico', count, {
                        type: 'Lettino Estetica / Massaggio Elettrico',
                        year: new Date().getFullYear(),
                        ownership: 'Proprietà',
                        value: 1500,
                        useful_life: 10,
                        vertical: 'beauty'
                    });
                } else if (v === 'hospitality') {
                    scalePresetItem('Letto Matrimoniale con Materasso Orthopedic', count, {
                        type: 'Letto Matrimoniale con Materasso Orthopedic',
                        year: new Date().getFullYear(),
                        ownership: 'Proprietà',
                        value: 800,
                        useful_life: 10,
                        vertical: 'hospitality'
                    });
                } else if (v === 'professional' || v === 'generic') {
                    scalePresetItem('PC Workstation / Notebook Ufficio', count, {
                        type: 'PC Workstation / Notebook Ufficio',
                        year: new Date().getFullYear(),
                        ownership: 'Proprietà',
                        value: 1200,
                        useful_life: 5,
                        vertical: v
                    });
                } else if (v === 'construction') {
                    scalePresetItem('Furgone Attrezzato (Officina Mobile)', count, {
                        type: 'Furgone Attrezzato (Officina Mobile)',
                        year: new Date().getFullYear(),
                        ownership: 'Proprietà',
                        value: 25000,
                        useful_life: 5,
                        vertical: 'construction'
                    });
                } else if (v === 'workshop') {
                    scalePresetItem('Ponte Sollevatore Elettroidraulico 2 Colonne', count, {
                        type: 'Ponte Sollevatore Elettroidraulico 2 Colonne',
                        year: new Date().getFullYear(),
                        ownership: 'Proprietà',
                        value: 3500,
                        useful_life: 10,
                        vertical: 'workshop'
                    });
                }
            });
            renderMachinery();
        }"""

content = re.sub(step_block_pattern, new_step_block, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Part 2 - JS step helpers replacement completed!")
