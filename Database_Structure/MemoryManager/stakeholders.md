# Collezione: stakeholders

Il profilo "Centralizzato" di ogni entità (Persona o Lead) che interagisce con l'ecosistema SiteBoS. Funge da CRM Intelligente che traccia competenze, progressi formativi e stato comportamentale.

## Identificativi
- **Database**: `MemoryManager`
- **Chiave Primaria**: `sessionId` (Pattern: `Email del soggetto`)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (Email)",
  "messages": [
    {
      "type": "system",
      "data": {
        "document_type": "String (es. 'STAKEHOLDER_PROFILE')",
        "owner_data_ref": {
          "vat_number": "String",
          "ragioneSociale": "String",
          "chat_id": "Number"
        },
        "user_ref": {
          "nome": "String",
          "cognome": "String",
          "email": "String",
          "telefono": "String",
          "status": "String (ACTIVE/INACTIVE)",
          "profileCompleted": "Boolean"
        },
        "professional_profile": {
          "soft_skills_modules": {
            "modulo1": { "completed": "Boolean", "results": "Object", "timestamp": "Date" },
            "modulo2": "...", "modulo3": "...", "modulo4": "..."
          },
          "role": "String",
          "hard_skills": ["Array[String]"],
          "certifications": "String (Narrativa delle certificazioni)",
          "current_challenges": ["Array[String]"],
          "main_goal": "String"
        },
        "commercial_profile": {
          "customer_since": "ISO Date String",
          "tags": ["Array[String] (es. 'manager', 'owner')"],
          "credit_balance": {
            "available_credits": "Number",
            "lifetime_value": "Number"
          }
        },
        "behavioral_profile": {
          "current_stance": {
            "stance_id": "String (es. 'ONBOARDED_MANAGER')",
            "rationale": "String (Motivazione dello stato set di sistema)"
          }
        },
        "booking_summary": {
          "total_bookings": "Number",
          "historical_booking_ids": ["Array[ID]"]
        }
      }
    }
  ]
}
```

---

## Logiche di Intelligence CRM

### 1. Assessment HR (`soft_skills_modules`)
Questa sezione è il cuore del modulo Risorse Umane di SiteBoS. Traccia il completamento di moduli di test o formazione. L'IA può interrogare questo profilo per capire se uno stakeholder è pronto per un determinato compito o se necessita di ulteriore formazione.

### 2. Funnel Comportamentale (`behavioral_profile`)
Il campo `current_stance` indica dove si trova lo stakeholder nel ciclo di vita aziendale (es. `LEAD`, `ONBOARDED`, `MANAGER`). Questo permette ai workflow n8n di personalizzare le risposte e le azioni in base alla "posizione" dell'utente.

### 3. Cross-Reference con l'Owner (`owner_data_ref`)
Ogni stakeholder è ancorato a un'istanza SiteBoS tramite la P.IVA dell'owner. Questo garantisce la multi-tenancy: le informazioni di un lead o collaboratore sono isolate e protette all'interno del perimetro dell'owner di riferimento.

---
> [!TIP]
> Il `sessionId` essendo l'email permette di unificare le interazioni provenienti da canali diversi (Email, Telegram, WebApp) sotto un unico profilo stakeholder coerente.
