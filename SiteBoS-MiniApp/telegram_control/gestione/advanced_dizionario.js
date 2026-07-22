// advanced_dizionario.js
// Strategy Pattern per la localizzazione semantica dell'interfaccia utente (UI) per i 9 verticali.

const VerticalDictionaries = {
    generic: {
        ui_labels: {
            primary_workstation: "Postazione Operativa",
            primary_operator: "Compenso Professionista",
            secondary_operator: "Staff di Supporto",
            workstation_time: "Tempo Postazione",
            external_lab: "Fornitori Esterni"
        }
    },
    dental: {
        ui_labels: {
            primary_workstation: "Riunito Odontoiatrico",
            primary_operator: "Compenso Medico",
            secondary_operator: "Costo ASO",
            workstation_time: "Tempo Sedia",
            external_lab: "Costo Laboratorio Dentale"
        }
    },
    health: {
        ui_labels: {
            primary_workstation: "Box Terapeutico",
            primary_operator: "Compenso Specialista",
            secondary_operator: "Costo Assistente/Infermiere",
            workstation_time: "Tempo Box/Studio",
            external_lab: "Laboratorio Esterno"
        }
    },
    beauty: {
        ui_labels: {
            primary_workstation: "Cabina Estetica",
            primary_operator: "Compenso Estetista",
            secondary_operator: "Costo Assistente Cabina",
            workstation_time: "Tempo Cabina",
            external_lab: "Trattamenti Esterni"
        }
    },
    food: {
        ui_labels: {
            primary_workstation: "Tavolo / Cucina",
            primary_operator: "Compenso Chef",
            secondary_operator: "Costo Commis/Cameriere",
            workstation_time: "Tempo Tavolo",
            external_lab: "Analisi HACCP / Terzi"
        }
    },
    hospitality: {
        ui_labels: {
            primary_workstation: "Camera / Accoglienza",
            primary_operator: "Compenso Responsabile",
            secondary_operator: "Costo Staff Servizio",
            workstation_time: "Tempo Camera/Servizio",
            external_lab: "Servizi Esterni Logistica"
        }
    },
    professional: {
        ui_labels: {
            primary_workstation: "Studio / Scrivania",
            primary_operator: "Compenso Consulente",
            secondary_operator: "Costo Supporto Tecnico",
            workstation_time: "Tempo Studio/Incontro",
            external_lab: "Collaborazioni Esterne"
        }
    },
    workshop: {
        ui_labels: {
            primary_workstation: "Ponte Sollevatore",
            primary_operator: "Compenso Meccanico",
            secondary_operator: "Aiuto Meccanico",
            workstation_time: "Tempo Ponte",
            external_lab: "Costo Rettifica Esterna"
        }
    },
    construction: {
        ui_labels: {
            primary_workstation: "Cantiere / Area Lavoro",
            primary_operator: "Compenso Capo Cantiere",
            secondary_operator: "Costo Operaio Specializzato",
            workstation_time: "Tempo Cantiere",
            external_lab: "Costo Subappalti"
        }
    }
};

// Funzione di iniezione a runtime
function getDictionary(vertical) {
    if (!vertical) return VerticalDictionaries['generic'];
    const normalized = vertical.toLowerCase().trim();
    return VerticalDictionaries[normalized] || VerticalDictionaries['generic'];
}

// Dizionario dei conti analitici standard geocalibrato e adattato per i verticali
const AccountLedgerLabels = {
    // 606: Locazioni e Affitti
    "606.00001": {
        dental: "Locazione Mura Studio Clinico",
        beauty: "Locazione Mura Cabina",
        food: "Canone d'Affitto Locale / Ristorante",
        workshop: "Canone d'Affitto Officina / Laboratorio",
        generic: "Locazione Mura Ufficio / Sede"
    },
    "606.00005": { generic: "Spese Riscaldamento e Condizionamento" },
    "606.00007": { generic: "Consumo Acqua Sanitaria" },
    "606.00010": { generic: "Spese Condominiali e di Gestione Immobile" },

    // 621: Utenze
    "621.00001": { generic: "Utenza Gas / Riscaldamento" },
    "621.00002": { generic: "Utenza Idrica Struttura" },
    "621.00005": { generic: "Utenza Telefonia e Connessione Fibra" },
    "621.00031": { generic: "Utenza Energia Elettrica / Forza Motrice" },

    // 612: Servizi e collaboratori professionali
    "612.00001": { generic: "Spese di Tenuta Contabilità / Commercialista" },
    "612.00005": {
        dental: "Compensi Medici Odontoiatri Collaboratori",
        beauty: "Compensi Medici Estetici / Specialistici Esterni",
        health: "Compensi Medici e Specialisti in Convenzione",
        generic: "Collaborazioni Professionali e Consulenze Esterne"
    },

    // 601: Ammortamenti e Beni Patrimoniali
    "601.00001": { generic: "Ammortamento Fabbricati e Mura" },
    "601.00004": {
        dental: "Ammortamento Riuniti e Attrezzature Cliniche",
        beauty: "Ammortamento Tecnologie e Laser Estetici",
        health: "Ammortamento Dispositivi Elettromedicali",
        food: "Ammortamento Attrezzature Cucina e Forni",
        workshop: "Ammortamento Ponti e Attrezzature d'Officina",
        generic: "Ammortamento Macchinari e Strumenti di Lavoro"
    },
    "601.00007": { generic: "Ammortamento Hardware, Computer e Server" },
    "601.00010": { generic: "Ammortamento Mobili e Arredi per Ufficio" },
    "601.00101": { generic: "Ammortamento Altre Immobilizzazioni Strumentali" },

    // 631: Servizi vari e manutenzioni
    "631.00002": { generic: "Spese Postali, Bolli e Spedizioni" },
    "631.00005": { generic: "Spese di Cancelleria e Stampati" },
    "631.00007": { generic: "Spese di Pulizia Locali Terzi" },
    "631.00008": { generic: "Spese di Rappresentanza e Omologazione" },
    "631.00009": { generic: "Spese di Pubblicità, Promozione e Social" },
    "631.00011": { generic: "Spese Tenuta Conto e Commissioni Bancarie" },
    "631.00017": { generic: "Canone e Assistenza Software Gestionale" },
    "631.00020": { generic: "Abbonamenti a Riviste e Banche Dati" },
    "631.00101": { generic: "Spese di Trasporto e Consegna" },
    "631.00103": {
        dental: "Manutenzione e Verifiche Riunito/Autoclave",
        beauty: "Manutenzione e Taratura Macchinari Epilazione/Radiofrequenza",
        health: "Verifiche Elettriche Obbligatorie Dispositivi",
        generic: "Manutenzioni e Tarature Attrezzature Strumentali"
    },
    "631.00111": { generic: "Spese di Formazione e Aggiornamento Personale" },
    "631.00121": { generic: "Manutenzione e Riparazione Autoveicoli Aziendali" },
    "631.00201": { generic: "Spese RC Professionale e Assicurazioni Struttura" },
    "631.00251": { generic: "Spese di Pulizia Locali e Materiali Igiene" },
    "631.01005": { generic: "Oneri per la Sicurezza sul Lavoro (D.Lgs. 81/08)" },

    // 632: Imposte e Rifiuti
    "632.00005": { generic: "Imposta di Concessione Governativa e SCIA" },
    "632.00015": {
        dental: "Tassa Rifiuti TARI locali medici speciali",
        beauty: "Tassa Rifiuti TARI cabine e locali estetici",
        generic: "Tassa Rifiuti TARI locali commerciali/ufficio"
    },

    // 635 & 610: Altri oneri e materiali di consumo
    "635.00001": { generic: "Altri Oneri e Spese Generali non Deducibili" },
    "631.01000": {
        dental: "Materiali di Consumo Clinici, Monouso e DPI",
        beauty: "Prodotti Cosmetici, Cere e Monouso Cabina",
        health: "Lenzuolini Medici, Aghi e Dispositivi Monouso",
        generic: "Materiali e Consumabili di Produzione"
    },
    "631.01001": { generic: "Materiale di Consumo per Ufficio e Cancelleria" },
    "631.01002": {
        dental: "Lavorazioni Odontotecniche Esterne (Protesi)",
        generic: "Lavorazioni Esterne in Subappalto Conto Terzi"
    }
};

function getAccountLabel(accountCode, vertical) { 
    const code = String(accountCode || "").trim(); 
    const vert = String(vertical || "generic").toLowerCase().trim();
    
    if (!AccountLedgerLabels[code]) return `Conto ${code}`; // Fallback se il conto non esiste
    
    // Tenta di prendere la label del verticale, altrimenti usa la 'generic'
    return AccountLedgerLabels[code][vert] || AccountLedgerLabels[code]['generic'] || `Conto ${code}`;
}