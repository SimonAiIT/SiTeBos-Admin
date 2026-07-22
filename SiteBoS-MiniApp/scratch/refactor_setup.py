import re

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\advanced-setup.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Replace Vertical Switcher markup
old_switcher_target = """    <!-- MAIN CONTAINER -->
    <main class="flex-1 max-w-md w-full mx-auto p-6 space-y-6 fade-in-up">
        
        <!-- STEP 1: OPERATORI -->"""

new_switcher_replacement = """    <!-- MAIN CONTAINER -->
    <main class="flex-1 max-w-md w-full mx-auto p-6 space-y-6 fade-in-up">
        
        <!-- VERTICAL SWITCHER (PILL SEGMENTED CONTROL) -->
        <div id="vertical-switcher-container" class="card-noir p-1.5 flex gap-1 bg-gray-50/50 border border-border rounded-2xl hidden">
            <!-- Populated dynamically -->
        </div>

        <!-- STEP 1: OPERATORI -->"""

content = content.replace(old_switcher_target, new_switcher_replacement)

# 2. Replace Capacity Check in Step 2
old_capacity_target = """            <!-- Capacity Check: Postazioni Operative Attive -->
            <div class="card-noir p-4 flex items-center justify-between gap-4">
                <div class="flex-1">
                    <h4 class="font-black text-xs uppercase tracking-tight text-black">
                        Postazioni Operative Attive
                    </h4>
                </div>
                <div class="flex items-center gap-1.5 shrink-0 bg-gray-50 border border-border p-1 rounded-xl">
                    <button type="button" onclick="changeChairsCount(-1)" class="w-7 h-7 bg-white text-black border border-border rounded-lg flex items-center justify-center font-bold text-xs active:scale-95 transition hover:bg-black hover:text-white">-</button>
                    <input type="number" id="op-chairs-num" value="2" min="1" readonly class="w-8 text-center bg-transparent border-none text-xs font-black focus:outline-none select-none pointer-events-none">
                    <button type="button" onclick="changeChairsCount(1)" class="w-7 h-7 bg-white text-black border border-border rounded-lg flex items-center justify-center font-bold text-xs active:scale-95 transition hover:bg-black hover:text-white">+</button>
                </div>
            </div>"""

new_capacity_replacement = """            <!-- Dynamic Operational Units counters -->
            <div id="operational-units-container" class="space-y-3">
                <!-- Populated dynamically -->
            </div>"""

content = content.replace(old_capacity_target, new_capacity_replacement)

# 3. Replace Global Variables, verticalsMeta, and attrezzaturePreset
# Let's target from "// Global State variables" to just before "let financials = {};" or similar
# Let's inspect what is between them.
# The original:
#         // Global State variables
#         let currentStep = 1;
#         ...
#         const attrezzaturePreset = {
#           ...
#         };
# Let's replace the whole chunk using regex from '// Global State variables' to 'let financials = {};'

globals_pattern = r"// Global State variables.*?let financials = \{\};"

new_globals_and_presets = """// Global State variables
        let currentStep = 1;
        let tenantType = 'Società';
        let taxRegime = 'Ordinario';
        let isForfettario = false;
        let operators = [];
        let machinery = [];
        let numberOfChairs = 2;
        let profileType = 'societa_capitali';
        let apiBalance = null;
        let isManualInsertionActive = false;
        let financialsSnapshot = "";

        // Multi-vertical State
        let activeVerticals = ['generic'];
        let primaryVertical = 'generic';
        let activeStaffTab = 'common';
        let activeMachineryTab = 'common';
        let activeFinancialsTab = 'common';
        let operationalUnits = [];
        let reunitiCount = 0;
        let reunitiLabel = 'Riuniti Dentistici';
        let chairsCount = 2;
        let chairsLabel = 'Postazioni Operative';

        const verticalsMeta = {
          "dental": { emoji: "🦷", name: "Odontoiatria", label: "Clinico", staffLabel: "Odontoiatria", financialsLabel: "Costi Clinici", presetCategory: "Odontoiatria (Clinico)" },
          "beauty": { emoji: "💆", name: "Estetica", label: "Estetica", staffLabel: "Estetica", financialsLabel: "Costi Estetica", presetCategory: "Estetica & Benessere" },
          "food": { emoji: "🍕", name: "Ristorazione", label: "Ristorazione", staffLabel: "Ristorazione", financialsLabel: "Costi Ristorazione", presetCategory: "Ristorazione & Food" },
          "hospitality": { emoji: "🛌", name: "Ospitalità", label: "Ospitalità", staffLabel: "Ospitalità", financialsLabel: "Costi Ospitalità", presetCategory: "Ospitalità & B&B" },
          "professional": { emoji: "⚖️", name: "Servizi Prof.", label: "Servizi", staffLabel: "Ufficio", financialsLabel: "Costi Servizi", presetCategory: "Ufficio & Consulenza" },
          "workshop": { emoji: "🔧", name: "Artigianato", label: "Artigianato", staffLabel: "Officina", financialsLabel: "Costi Artigianato", presetCategory: "Artigianato & Officine" },
          "construction": { emoji: "🚧", name: "Edilizia/Impianti", label: "Cantiere", staffLabel: "Cantiere", financialsLabel: "Costi Impianti", presetCategory: "Impianti & Edilizia" },
          "generic": { emoji: "💼", name: "Generico", label: "Generico", staffLabel: "Generico", financialsLabel: "Costi Generici", presetCategory: "Ufficio & Consulenza" },
          "common": { emoji: "🏠", name: "Comune", label: "Comune", staffLabel: "Staff Comune", financialsLabel: "Costi Comuni", presetCategory: "Comune & Infrastruttura IT" }
        };

        const attrezzaturePreset = {
          "Odontoiatria (Clinico)": [
            { name: "Riunito Odontoiatrico (Fascia Media)", defaultPrice: 18500, usefulLife: 10 },
            { name: "Compressore d'Aria Medicale con Essiccatore", defaultPrice: 1600, usefulLife: 8 },
            { name: "Sistema di Aspirazione Chirurgica Chirurgica", defaultPrice: 2000, usefulLife: 8 },
            { name: "Radiografico Endorale a Parete (Generatore RX)", defaultPrice: 3000, usefulLife: 8 },
            { name: "Autoclave di Classe B 23 L (Sterilizzazione)", defaultPrice: 2800, usefulLife: 5 },
            { name: "Turbina ad Alta Velocità con Fibra Ottica", defaultPrice: 600, usefulLife: 4 },
            { name: "Scanner Intraorale 3D Dentale (Mid-Range)", defaultPrice: 12000, usefulLife: 5 }
          ],
          "Estetica & Benessere": [
            { name: "Lettino Estetica / Massaggio Elettrico", defaultPrice: 1500, usefulLife: 10 },
            { name: "Macchinario Epilazione Laser Diodo", defaultPrice: 12000, usefulLife: 5 },
            { name: "Vapozono Professionale su Stativo", defaultPrice: 450, usefulLife: 5 },
            { name: "Sterilizzatore al Quarzo / UV Cabina", defaultPrice: 350, usefulLife: 5 },
            { name: "Pressoterapia Professionale (Corpo)", defaultPrice: 3500, usefulLife: 6 },
            { name: "Radiofrequenza Estetica Viso/Corpo", defaultPrice: 5000, usefulLife: 6 }
          ],
          "Ristorazione & Food": [
            { name: "Cucina Industriale 4 Fuochi con Forno", defaultPrice: 4500, usefulLife: 10 },
            { name: "Friggitrice Professionale Doppia Vasca", defaultPrice: 1500, usefulLife: 8 },
            { name: "Abbattitore di Temperatura (3 teglie)", defaultPrice: 2200, usefulLife: 8 },
            { name: "Cappa Aspirante Industriale a Parete", defaultPrice: 1800, usefulLife: 10 },
            { name: "Lavastoviglie Professionale a Capotta", defaultPrice: 2800, usefulLife: 8 },
            { name: "Banco Frigo Bar ed Espositore", defaultPrice: 3500, usefulLife: 10 }
          ],
          "Ospitalità & B&B": [
            { name: "Letto Matrimoniale con Materasso Orthopedic", defaultPrice: 800, usefulLife: 10 },
            { name: "Smart TV LED 43\\\" per Camera", defaultPrice: 350, usefulLife: 5 },
            { name: "Cassaforte Elettronica di Sicurezza Hotel", defaultPrice: 150, usefulLife: 10 },
            { name: "Frigobar Silenzioso per Camera", defaultPrice: 200, usefulLife: 8 },
            { name: "Climatizzatore Split Inverter 9000 BTU", defaultPrice: 600, usefulLife: 8 }
          ],
          "Ufficio & Consulenza": [
            { name: "Scrivania Operativa e Sedia Ergonomica", defaultPrice: 800, usefulLife: 8 },
            { name: "PC Workstation / Notebook Ufficio", defaultPrice: 1200, usefulLife: 5 },
            { name: "Stampante / Copiatrice Multifunzione A3", defaultPrice: 1500, usefulLife: 6 },
            { name: "Allestimento Sala Riunioni (Tavolo e Schermo)", defaultPrice: 4000, usefulLife: 8 }
          ],
          "Artigianato & Officine": [
            { name: "Ponte Sollevatore Elettroidraulico 2 Colonne", defaultPrice: 3500, usefulLife: 10 },
            { name: "Kit Diagnosi Elettronica Professionale OBD", defaultPrice: 2500, usefulLife: 5 },
            { name: "Compressore d'Aria Industriale 200L", defaultPrice: 1200, usefulLife: 8 },
            { name: "Carrello Utensili da Lavoro Completo (150pz)", defaultPrice: 800, usefulLife: 8 },
            { name: "Saldatrice a Filo Professionale MIG/MAG", defaultPrice: 1100, usefulLife: 8 }
          ],
          "Impianti & Edilizia": [
            { name: "Furgone Attrezzato (Officina Mobile)", defaultPrice: 25000, usefulLife: 5 },
            { name: "Kit Strumentazione Professionale (Rilevatori/Analisi)", defaultPrice: 3500, usefulLife: 5 },
            { name: "Betoniera Elettrica 130L Professionale", defaultPrice: 1800, usefulLife: 8 },
            { name: "Ponteggio Mobile / Trabattello Alluminio", defaultPrice: 1200, usefulLife: 8 },
            { name: "Trapano Demolitore / Carotatrice Professionale", defaultPrice: 1500, usefulLife: 5 }
          ],
          "Comune & Infrastruttura IT": [
            { name: "Server Aziendale / Centralino Cloud", defaultPrice: 2500, usefulLife: 5 },
            { name: "Licenza Software ERP / Gestionale Centrale", defaultPrice: 5000, usefulLife: 5 },
            { name: "Arredo Reception / Sala d'Attesa", defaultPrice: 3500, usefulLife: 10 },
            { name: "Videosorveglianza & Sistema Allarme", defaultPrice: 3000, usefulLife: 8 }
          ]
        };

        let financials = {};"""

content = re.sub(globals_pattern, new_globals_and_presets, content, flags=re.DOTALL)

# 4. Replace financialsMapping
# The pattern targets from 'const financialsMapping = {' to 'let uploadedFileData = null;' or 'window.onload = async () => {'
# Let's inspect where it ends:
# The original:
#         const financialsMapping = {
#             a: [ ... ],
#             b: [ ... ],
#             c: [ ... ],
#             d: [ ... ]
#         };
#         let uploadedFileData = null;
# Let's replace the whole financialsMapping using regex

mapping_pattern = r"const financialsMapping = \{.*?\}\;\s*let uploadedFileData = null\;"

new_financials_mappings_and_vars = """// Financial mapping segmented lists
        const commonAccountsGroupA = [
            { code: "631.00002", label: "631.00002 - ASSICURAZIONI AZIENDALI NON OBBLIGATORIE", help: "Polizze incendio, furto dei locali o della struttura." },
            { code: "631.00005", label: "631.00005 - PUBBLICITA' E MARKETING", help: "Spese di marketing, campagne online, SEO o materiale cartaceo." },
            { code: "631.00007", label: "631.00007 - SPESE LEGALI E SOCIETARIE", help: "Spese per consulenza legale, contrattualistica o societaria." },
            { code: "631.00008", label: "631.00008 - SPESE POSTALI E SPEDIZIONI", help: "Costi di corrieri, francobolli, raccomandate e spedizioni." },
            { code: "631.00009", label: "631.00009 - RICERCA, ADDESTRAMENTO E SICUREZZA LAVORO", help: "Corsi per la sicurezza sul lavoro, RSPP o addestramento dipendenti." },
            { code: "631.00011", label: "631.00011 - SPESE E COMMISSIONI SERVIZI BANCARI", help: "Commissioni POS, tenuta conto e canoni bancari vari." },
            { code: "631.00020", label: "631.00020 - CANCELLERIA E STAMPATI", help: "Carta, cartucce stampanti e cancelleria d'ufficio." },
            { code: "631.00201", label: "631.00201 - ALTRE SPESE DOCUMENTATE", help: "Spese di gestione generiche varie e documentate." },
            { code: "631.00251", label: "631.00251 - ALTRI COSTI INDEDUCIBILI", help: "Spese e costi vari non deducibili fiscalmente." }
        ];

        const commonAccountsGroupB = [
            { code: "610.00001", label: "610.00001 - SALARI E STIPENDI DIPENDENTI", help: "Retribuzioni nette mensili e lordi base per i dipendenti subordinati." },
            { code: "610.00021", label: "610.00021 - ONERI SOCIALI INPS", help: "Contributi previdenziali INPS a carico dell'azienda." },
            { code: "610.00031", label: "610.00031 - ONERI SOCIALI INAIL", help: "Premi INAIL per l'assicurazione contro gli infortuni sul lavoro." },
            { code: "610.01001", label: "610.00101 - TFR ACCANTONATO", help: "Quota annuale accantonata per il Trattamento di Fine Rapporto (TFR)." },
            { code: "610.00201", label: "610.00201 - ALTRI COSTI DEL PERSONALE", help: "Visite mediche del lavoro, divise dipendenti o welfare." },
            { code: "610.01000", label: "610.01000 - SALARI E STIPENDI INDEDUCIBILI", help: "Quote di retribuzioni non deducibili fiscalmente." },
            { code: "612.00001", label: "612.00001 - COMPENSI A TERZI PER PRESTAZIONI DI SERVIZIO", help: "Compensi a commercialista, consulente del lavoro, RSPP." },
            { code: "612.00005", label: "612.00005 - COMPEN. PROFESSIONISTI E CONSULENTI A PROGETTO", help: "Fatture di collaboratori esterni e consulenti con P.IVA." }
        ];

        const commonAccountsGroupC = [
            { code: "606.00001", label: "606.00001 - LOCAZIONE IMMOBILI STRUMENTALI", help: "Canone d'affitto mensile o annuale dei locali aziendali." },
            { code: "606.00005", label: "606.00005 - RISCALDAMENTO IMMOBILI STRUMENTALI", help: "Spese per riscaldamento o quota riscaldamento condominiale." },
            { code: "606.00007", label: "606.00007 - UTENZA ACQUA LOCALI STRUMENTALI", help: "Bollette dell'acqua per i locali aziendali." },
            { code: "606.00010", label: "606.00010 - SPESE CONDOMINIALI ORDINARIE", help: "Quote condominiali ordinarie a carico del conduttore." },
            { code: "621.00001", label: "621.00001 - SPESE TELEFONIA FISSA E CONNETTIVITA' (80%)", help: "Internet fibra e linea telefonica fissa degli uffici." },
            { code: "621.00002", label: "621.00002 - SPESE TELEFONIA MOBILE (80%)", help: "Costi per telefoni cellulari aziendali o SIM operative." },
            { code: "621.00005", label: "621.00005 - CARBURANTI E LOGISTICA AUTO AZIENDALI", help: "Costi di carburante o ricariche per vetture aziendali non assegnate." },
            { code: "621.00031", label: "621.00031 - ENERGIA ELETTRICA UFFICI E STRUTTURA", help: "Bollette dell'energia elettrica dei locali di lavoro." },
            { code: "631.00017", label: "631.00017 - SPESE AGGIORNAMENTO E MANUTENZIONE SOFTWARE", help: "Canoni software SaaS, ERP, CRM, licenze cloud aziendali." },
            { code: "626.00201", label: "626.00201 - SPESE AGGIORNAMENTO PROFESSIONALE / TRASFERTE", help: "Corsi di formazione professionale, congressi ed eventi di settore." },
            { code: "626.00202", label: "626.00202 - PASTI E SOGGIORNI DI TRASFERTA (75%)", help: "Costi di vitto e alloggio legati a trasferte e aggiornamento." },
            { code: "632.00001", label: "632.00001 - IMPOSTA DI BOLLO", help: "Imposte di bollo applicate a contratti o fatture." },
            { code: "632.00002", label: "632.00002 - IMPOSTA DI REGISTRO", help: "Imposte di registro per la locazione dei locali o atti societari." },
            { code: "632.00005", label: "632.00005 - TASSA RIFIUTI (TARI)", help: "TARI annuale applicata alle superfici operative o uffici." },
            { code: "632.00015", label: "632.00015 - VALORI BOLLATI", help: "Marche da bollo cartacee o digitali." }
        ];

        const commonAccountsGroupD = [
            { code: "601.00001", label: "601.00001 - AMM.TO ORDINARIO IMPIANTI GENERICI", help: "Ammortamento degli impianti tecnologici, elettrici e idraulici stabili." },
            { code: "601.00007", label: "601.00007 - AMM.TO ORD. MACCHINE UFFICIO E COMPUTER", help: "Ammortamento PC, stampanti, notebook e server aziendali." },
            { code: "601.00008", label: "601.00008 - AMM.TO ORDINARIO AUTOVETTURE E VEICOLI", help: "Quota annua di ammortamento auto aziendali o furgoni." },
            { code: "601.00010", label: "601.00010 - AMM.TO ORDINARIO ARREDI E ALLESTIMENTI", help: "Ammortamento mobili da ufficio, postazioni di lavoro e sale riunioni." },
            { code: "601.00012", label: "601.00012 - AMM.TO BENI STRUMENTALI INFERIORI A €516,46", help: "Ammortamento immediato di piccoli beni strumentali e accessori." },
            { code: "601.00013", label: "601.00013 - AMM.TO ORDINARIO TELEFONIA E CONNETTIVITA'", help: "Ammortamento di router, modem o telefoni aziendali fisici." },
            { code: "601.00101", label: "601.00101 - AMMORTAMENTI INDEDUCIBILI", help: "Quote di ammortamento non deducibili fiscalmente." },
            { code: "605.00001", label: "605.00001 - CANONI LEASING BENI MOBILI STRUMENTALI", help: "Canoni leasing mensili per auto aziendali, macchinari o server." },
            { code: "605.00061", label: "605.00061 - INTERESSI LEASING BENI MOBILI", help: "Quota di interessi passivi inclusa nei canoni di leasing." },
            { code: "631.00016", label: "631.00016 - ASSICURAZIONI R.C. PROFESSIONALI ED AZIENDALI", help: "Premi assicurativi per responsabilità civile terzi o professionale aziendale." },
            { code: "631.00101", label: "631.00101 - MANUTENZIONE E RIPARAZIONE AUTO VEICOLI", help: "Costi di manutenzione ordinaria e straordinaria dei veicoli aziendali." },
            { code: "631.00103", label: "631.00103 - MANUTENZIONI E RIPARAZIONI IMPIANTI / STRUTTURA", help: "Manutenzioni periodiche impianti, antincendio e locali." },
            { code: "631.00111", label: "631.00111 - PEDAGGI AUTOSTRADALI E MOBILITA'", help: "Telepass, pedaggi e spese autostradali aziendali." },
            { code: "631.00121", label: "631.00121 - ASSICURAZIONI RCA VEICOLI AZIENDALI", help: "Premi assicurativi RCA obbligatori dei veicoli." },
            { code: "635.00001", label: "635.00001 - ABBUONI ED ARROTONDAMENTI PASSIVI", help: "Piccole differenze di pagamento, arrotondamenti passivi." }
        ];

        let uploadedFileData = null;"""

content = re.sub(mapping_pattern, new_financials_mappings_and_vars, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Replacements 1-4 completed successfully!")
