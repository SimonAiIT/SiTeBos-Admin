# Collezione: owner_sessions

Il documento master di configurazione dell'istanza SiteBoS. Contiene l'identità dell'azienda, le chiavi di accesso, il bilancio crediti e le policy di comportamento dell'assistente.

## Identificativi
- **Database**: `MemoryManager`
- **Chiave Primaria**: `vat_number` (P.IVA)

## Schema Tecnico Completo (Canonical JSON)

```json
{
  "_id": "ObjectId",
  "sessionId": "String (P.IVA)",
  "messages": [
    {
      "type": "system",
      "data": {
        "user_id": "String",
        "chat_id": "Number (Telegram ID dell'Owner)",
        "access_token": "UUID (Dashboard Auth)",
        "name": "String",
        "surname": "String",
        "email": "String",
        "phone": "String",
        "ragione_sociale": "String",
        "vat_number": "String",
        "fiscal_code": "String",
        "sdi_pec": "String (Codice SDI)",
        "site": "String (URL)",
        "business_description": "String (Narrativa core)",
        "kyc_details": {
          "professional_questionnaire": {
            "role": "String",
            "years_experience": "String",
            "hard_skills": ["Array[String]"],
            "digital_tools": ["Array[String]"],
            "pain_points": ["Array[String]"],
            "main_goal": "String"
          }
        },
        "subscription_plan": "String (es. 'pioneer_free_trial')",
        "subscription_status": "String (es. 'ACTIVE')",
        "credits_balance": "Number (Bilancio Crediti Totali)",
        "model_choice": "URL (Endpoint API Gemini)",
        "operators": [
          {
            "OperatorName": "String",
            "OperatorChatID": "Number",
            "Role": "String (Owner/Operator)",
            "FreeHandOperator": "Boolean",
            "status": "String (ACTIVE/PENDING)"
          }
        ],
        "customer_bot_config": {
          "status": "String (ACTIVE/PAUSED)",
          "identity": {
            "agent_name": "String (Nome Assistente)",
            "role_persona": "String"
          },
          "personality": {
            "tone": "String",
            "vibe": "String",
            "emoji_usage": "String"
          },
          "system_safety_limits": {
            "max_daily_messages_per_user": "Number",
            "max_tokens_per_chat": "Number"
          }
        }
      }
    }
  ]
}
```

---

## Logiche di Governance

### 1. Multi-Operator Management (`operators`)
SiteBoS permette la collaborazione. Ogni istanza può avere un Owner e multipli Operatori. Gli operatori pendenti vengono invitati tramite un `invitation_code` univoco che lega il loro ChatID all'istanza della P.IVA.

### 2. Personalità dell'Assistente (`customer_bot_config`)
Questa sezione definisce il "carattere" del bot pubblico. Campi come `agent_name` e `tone` vengono iniettati dinamicamente nel System Prompt di Gemini per garantire che l'assistente si comporti secondo i desideri dell'owner (es. amichevole, professionale, con molte emoji).

### 3. Sicurezza e Rate Limiting
Sotto `system_safety_limits`, l'owner può definire soglie di protezione per evitare abusi delle API, limitando il numero di messaggi giornalieri per singolo utente e il consumo di token per sessione.

---
> [!IMPORTANT]
> Il campo `credits_balance` viene decurtato in tempo reale ogni volta che un record viene scritto in `billing_buffers`. È il serbatoio energetico dell'intera istanza.
