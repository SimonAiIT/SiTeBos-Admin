# 📄 VERSIONE AGGIORNATA: `compliance_docs.md`

```markdown
# Collezione: compliance_docs

La collezione `compliance_docs` custodisce gli audit legali, la conformità normativa (GDPR, EU AI Act, D.Lgs 81/08), i dati fiscali locali (TARI, CCIAA, RENTRI) e i dossier di intelligenza aziendale e coesistenza commerciale.

---

## 🗄️ Identificativi e Posizionamento
* **Database**: `MemoryManager`
* **Collezione**: `compliance_docs`
* **Pattern Chiave Primaria (`sessionId`)**:
  * **Variante A (Report Servizio/Asset)**: `[P.IVA]-[ID_SERVIZIO]` (es. `IT06988830821-SVC_KH3MCNO3`)
  * **Variante B1 (Company Research)**: `[P.IVA]_Company_Reserch` (es. `IT02564250849_Company_Reserch`)
  * **Variante B2 (Fiscal Compliance)**: `[P.IVA]_Fiscal_Compliance` (es. `IT02564250849_Fiscal_Compliance`)
  * **Variante B3 (Coexistence / SCIA)**: `[P.IVA]_Reserch_Add_[VERTICAL]` (es. `IT02564250849_Reserch_Add_beauty`)

---

## 📐 Schemi Tecnici Nativi (Polymorphic JSON)

Poiché la collezione adotta il wrapper di memoria Langchain, i dati effettivi sono contenuti nell'oggetto `messages[0].data`.

### 1. VARIANTE A: Report Testuale di Conformità Servizio (`content`)
Utilizzata per audit legali specifici su un singolo servizio o prodotto a catalogo.

```json
{
  "_id": { "$oid": "String" },
  "sessionId": "String (P.IVA-SVC_ID)",
  "messages": [
    {
      "type": "system",
      "data": {
        "content": "String (Markdown strutturato del report legale e normativo)",
        "additional_kwargs": {},
        "response_metadata": {}
      }
    }
  ]
}
```

#### Struttura del campo `content` (Markdown):
1. **Intestazione & Asset**: Titolo, Data, Sede Operativa e Oggetto.
2. **Inquadramento Normativo & Privacy**: Riferimenti al GDPR (Art. 28, DPA), Codice del Consumo, D.Lgs 81/08 e EU AI Act.
3. **Analisi dei Rischi Operativi**: Rischi di data breach, responsabilità civile/professionale (Art. 2222 c.c.) e limiti di garanzia.
4. **Piano d'Azione Operativo**: Tabella riassuntiva (`| Area | Azione Pratica | Responsabile |`).
5. **Note e Disclaimer**: Raccomandazioni territoriali o di settore.

---

### 2. VARIANTE B: Dossier Aziendale & Compliance Fiscale (`enterprise_dossier`)
Utilizzata per archiviare la scheda di intelligenza aziendale, i tributi locali, gli obblighi ambientali e la fattibilità SCIA.

```json
{
  "_id": { "$oid": "String" },
  "sessionId": "String (es. P.IVA_Company_Reserch | P.IVA_Fiscal_Compliance | P.IVA_Reserch_Add_beauty)",
  "messages": [
    {
      "type": "system",
      "data": {
        "enterprise_dossier": {
          "metadata": {
            "vat_number": "String (es. IT02564250849)",
            "legal_name": "String (Ragione Sociale)",
            "dba_name": "String | Null (Nome Commerciale)",
            "location": "String (Indirizzo Completo)",
            "last_updated": "String (ISO Date)"
          },
          "MODULE_1_COMPANY_INTELLIGENCE": {
            "financial_profile": {
              "incorporation_date": "String | Null",
              "legal_form": "String (es. S.r.l., Ditta Individuale)",
              "estimated_turnover": "String | Null",
              "employee_count": "String | Null",
              "ateco_code": "String | Null",
              "net_profit_2024": "String | Null"
            },
            "brand_reputation": {
              "website": "String | Null",
              "digital_rating": "String | Null",
              "reputation_summary": "String | Null"
            },
            "usp_and_mission": {
              "mission_statement": "String | Null",
              "differentiators": ["Array of Strings"]
            }
          },
          "MODULE_2_STAKEHOLDER_INTELLIGENCE": {
            "profile": {
              "name": "String | Null (Nome Titolare/CEO)",
              "role": "String | Null",
              "years_experience": "String | Null",
              "specializations": ["Array of Strings"]
            },
            "brand_authority": {
              "social_leadership": "String | Null",
              "community_impact": "String | Null",
              "managerial_skills": "String | Null"
            }
          },
          "MODULE_3_COEXISTENCE_PAIRING": {
            "feasibility_status": "String | Null (es. Fattibile)",
            "risk_level": "String (LOW | MEDIUM | HIGH | CRITICAL)",
            "regulatory_pairing": {
              "coexistence_scia": "String | Null (Requisiti SCIA SUAP)",
              "sanitary_rules": "String | Null (Norme ASP / Direttore Tecnico)"
            },
            "structural_requirements": {
              "physical_space": "String | Null (Requisiti stanze/lavabi/riuniti)",
              "waste_impact": "String | Null (Gestione rifiuti speciali)"
            },
            "local_fiscal_data": {
              "ires_rate": "String | Null (es. 24,00%)",
              "irap_rate": "String | Null (es. 3,90%)",
              "tari": {
                "quota_fissa": "String | Null",
                "quota_variabile": "String | Null",
                "tefa_rate": "String | Null",
                "total_estimated_per_sqm": "String | Null"
              },
              "cciaa_fee": {
                "amount": "String | Null",
                "due_date": "String | Null"
              },
              "environmental_obligations": {
                "rentri_status": "String | Null (es. Obbligatorio)",
                "rentri_annual_fee": "String | Null",
                "special_waste_codes": ["Array di Codici CER/EER (es. 18.01.03*)"],
                "environmental_rules": "String | Null"
              },
              "regional_tariffs_permits": {
                "concessione_governativa": "String | Null",
                "asp_inspection_fee": "String | Null"
              }
            }
          },
          "MODULE_4_PRODUCT_SERVICE_COMPLIANCE": {
            "service_id": "String | Null",
            "item_name": "String | Null",
            "target_price": "String | Null",
            "positioning": "String | Null",
            "market_positioning": {
              "target_buyer": "String | Null",
              "usp_context": "String | Null",
              "communication_strategy": "String | Null"
            },
            "regulatory_framework": {
              "medical_device_directive": "String | Null",
              "professional_liability": "String | Null",
              "deontology_marketing_rules": "String | Null",
              "gdpr_compliance": "String | Null"
            },
            "compliance_checklist": [
              {
                "id": "String (es. CHK_01)",
                "area": "String (es. Ambientale | Sanitaria | HR | Amministrativa)",
                "action": "String (Azione pratica da eseguire)",
                "owner": "String (Responsabile)"
              }
            ],
            "regional_specifications": {
              "local_authority_notes": "String | Null (Note ASP / Comune)",
              "waste_disposal": "String | Null (Procedure FIR / RENTRI)"
            },
            "risk_warnings": ["Array of Strings"]
          }
        },
        "additional_kwargs": {},
        "response_metadata": {}
      }
    }
  ]
}
```

---

## 💡 Istruzioni per gli Agenti AI (Selector / Architect)

1. **Lettura del Report di un Servizio**:
   * Per estrarre i vincoli legali di un servizio, cercare con query `sessionId`: `"[P.IVA]-[SVC_ID]"`.
   * Leggere il testo Markdown dentro `messages.0.data.content`.

2. **Lettura dei Dati Fiscali e Ambientali (TARI, RENTRI, Diritto Annuale)**:
   * Cercare con query `sessionId`: `"[P.IVA]_Fiscal_Compliance"`.
   * Estrarre i valori sotto `messages.0.data.enterprise_dossier.MODULE_3_COEXISTENCE_PAIRING.local_fiscal_data`.

3. **Verifica Coesistenza e SCIA (Nuove Linee di Business)**:
   * Cercare con query `sessionId`: `"[P.IVA]_Reserch_Add_[NOME_MODULO]"`.
   * Verificare i requisiti strutturali e la checklist in `MODULE_3` e `MODULE_4`.
```