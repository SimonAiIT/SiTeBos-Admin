# Mappatura Frontend-Backend (SiteBoS Project)

Questo documento fornisce un'associazione completa e dettagliata tra le interfacce utente (Telegram WebApp) contenute in `telegram_control` e i corrispondenti workflow n8n (backend) contenuti in `n8n_workflows`.

---

## 1. Tabella Riassuntiva di Associazione

| File Frontend (TWA) | Webhook Target / URL | Azione (body.action) | Workflow Backend Associato |
| :--- | :--- | :--- | :--- |
| [add-category.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/add-category.html) | `5e225cf6-76bb-4e19-8657-35cac49fd399`, `https://prod.workflow.trinai.it/webhook/5e225cf6-76bb-4e19-8657-35cac49fd399`, `7da6f424-dc2a-4476-a0bd-a3bfd21270fb`, `https://prod.workflow.trinai.it/webhook/7da6f424-dc2a-4476-a0bd-a3bfd21270fb` | N/D | [product_category.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/product_category.json), [saveCategory.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/saveCategory.json) |
| [add-product.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/add-product.html) | `31f89350-4d7f-44b7-9aaf-e7d9e3655b6c`, `20fd95c0-4218-400e-ae2a-cd881a757b80` | N/D | [saveProduct_processor.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/saveProduct_processor.json), [newProduct.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/newProduct.json) |
| [advanced-setup-dental.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/advanced-setup-dental.html) | `https://prod.workflow.trinai.it/webhook/5a58b38d-dfe5-44c2-9d58-34309585c057`, `5a58b38d-dfe5-44c2-9d58-34309585c057` | `get_dental_setup`, `generate_operator_invite`, `execute_financial_decomposition`, `save_dental_setup` | [advanced-setup.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/advanced-setup.json), [dental-advanced-setup.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dental-advanced-setup.json) |
| [advanced-setup.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/advanced-setup.html) | `958dc50f-87c8-496c-85e4-29ca7d87f2fc`, `https://prod.workflow.trinai.it/webhook/958dc50f-87c8-496c-85e4-29ca7d87f2fc` | `generate_operator_invite`, `get_business_setup`, `save_business_setup`, `execute_decomposition` | [advanced-setup.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/advanced-setup.json), [dental-advanced-setup.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dental-advanced-setup.json) |
| [agenda.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/agenda.html) | `https://prod.workflow.trinai.it/webhook/8f148592-cbb9-4c72-96e8-73c08fccee43`, `8f148592-cbb9-4c72-96e8-73c08fccee43` | N/D | *Heuristic Mapping: Check name* |
| [assistant.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/assistant.html) | `81ab5292-43c3-4f93-afaf-7411b95fc010` | `npl_chat` | [Telegram_teamAssistant.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/Telegram_teamAssistant.json), [dashboard_confirmAssistant.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard_confirmAssistant.json) |
| [booking.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/booking.html) | `https://prod.workflow.trinai.it/webhook/0a62e876-7bb1-4d74-a8bc-a8828606a0e7`, `0a62e876-7bb1-4d74-a8bc-a8828606a0e7` | `get_booking_config`, `submit_booking_proposal` | [booking_engine.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/booking_engine.json) |
| [bot_config.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/bot_config.html) | `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`, `8eb69e84-d20d-486e-a70e-9acf31c3da9e` | `save_bot_config`, `get_bot_config` | [telegram_customerBot.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json) |
| [catalog.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/catalog.html) | `https://prod.workflow.trinai.it/webhook/0fff7fa2-bcb2-4b50-a26b-589b7054952e`, `8fc050ca-41cd-4469-989c-269a113a00f9`, `0fff7fa2-bcb2-4b50-a26b-589b7054952e`, `914bd78e-8a41-46d7-8935-7eb73cbbae66`, `7d09d946-95e6-4efa-baee-00c458c82e9e` | `get_catalog`, `generate_video`, `get_ghost_info`, `generate_image`, `delete_category`, `update_product`, `update_social_prompts`, `update_category`, `delete_product` | [createPost.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/createPost.json), [tasks.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json), [service_catalog.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/service_catalog.json), [supervisor.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/supervisor.json), [deploy_blog.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/deploy_blog.json), [videoProd.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/videoProd.json) |
| [certificator.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/certificator.html) | `ef4aece4-9ec0-4026-a7a7-328562bcbdf6`, `https://prod.workflow.trinai.it/webhook/ef4aece4-9ec0-4026-a7a7-328562bcbdf6` | `certificator` | [dashboard.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard.json) |
| [ecommerce.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/ecommerce.html) | `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`, `8eb69e84-d20d-486e-a70e-9acf31c3da9e` | `u_calc_ecom_get`, `u_calc_ecom_save` | [Commerce_Engine.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json), [telegram_customerBot.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json) |
| [edit-advanced-dental.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-advanced-dental.html) | `6333dff0-d886-499c-8000-f3e0266845ed` | `RECALCULATE_ADVISORY`, `GET`, `SAVE` | [Advanced_processor.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/Advanced_processor.json), [certificator_hub.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json), [editBlueprint.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editBlueprint.json) |
| [edit-advanced.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-advanced.html) | `6333dff0-d886-499c-8000-f3e0266845ed` | `RECALCULATE_ADVISORY`, `GET`, `SAVE` | [Advanced_processor.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/Advanced_processor.json), [certificator_hub.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json), [editBlueprint.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editBlueprint.json) |
| [edit-article.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-article.html) | `2c6416b1-32c6-4661-bd8f-b175d24fd035`, `https://prod.workflow.trinai.it/webhook/2c6416b1-32c6-4661-bd8f-b175d24fd035` | `ENTITY_CREATED`, `VISION_ARTICLE_ANALYSIS`, `SAVE_ARTICLE` | [editProduct.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editProduct.json) |
| [edit-asset.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-asset.html) | `https://prod.workflow.trinai.it/webhook/asset_handler`, `asset` | N/D | *Heuristic Mapping: Check name* |
| [edit-blog.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-blog.html) | `914bd78e-8a41-46d7-8935-7eb73cbbae66`, `https://prod.workflow.trinai.it/webhook/914bd78e-8a41-46d7-8935-7eb73cbbae66` | `get_blog` | [deploy_blog.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/deploy_blog.json) |
| [edit-blueprint.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-blueprint.html) | `https://prod.workflow.trinai.it/webhook/e742c7c8-107e-4328-882e-c13459413424`, `e742c7c8-107e-4328-882e-c13459413424` | `GET`, `COMPLIANCE_CHECK`, `SAVE` | [Advanced_processor.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/Advanced_processor.json), [certificator_hub.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json), [editBlueprint.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editBlueprint.json) |
| [edit-knowledge.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-knowledge.html) | `0ca76af1-8c02-47f4-a3a4-fd19ad495afe`, `https://prod.workflow.trinai.it/webhook/0ca76af1-8c02-47f4-a3a4-fd19ad495afe` | `save_kb`, `get_kb_details` | [knowledge.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/knowledge.json) |
| [edit-location.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-location.html) | `https://prod.workflow.trinai.it/webhook/location_handler`, `location` | N/D | *Heuristic Mapping: Check name* |
| [edit-product.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-product.html) | `2c6416b1-32c6-4661-bd8f-b175d24fd035`, `https://prod.workflow.trinai.it/webhook/2c6416b1-32c6-4661-bd8f-b175d24fd035`, `6333dff0-d886-499c-8000-f3e0266845ed` | `GET`, `GENERATE_ADVANCED_DRAFT`, `SAVE` | [editProduct.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editProduct.json), [Advanced_processor.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/Advanced_processor.json), [certificator_hub.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json), [editBlueprint.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editBlueprint.json) |
| [edit-semilavorati.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-semilavorati.html) | `2c6416b1-32c6-4661-bd8f-b175d24fd035`, `https://prod.workflow.trinai.it/webhook/2c6416b1-32c6-4661-bd8f-b175d24fd035` | `SAVE_SEMI` | [editProduct.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editProduct.json) |
| [edit_owner.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit_owner.html) | `83acc670-15ae-4da0-ae0e-3587c85bd5f4`, `https://prod.workflow.trinai.it/webhook/83acc670-15ae-4da0-ae0e-3587c85bd5f4` | `analyze`, `save_owner_data`, `associate_bot`, `get_owner_data` | [edit_owner.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/edit_owner.json) |
| [handover.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/handover.html) | `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`, `8eb69e84-d20d-486e-a70e-9acf31c3da9e` | `handover` | [Comunication_hub.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/Comunication_hub.json), [telegram_customerBot.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json) |
| [identity_hub.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/identity_hub.html) | `5a58b38d-dfe5-44c2-9d58-34309585c057` | `get_business_vertical` | [advanced-setup.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/advanced-setup.json), [dental-advanced-setup.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dental-advanced-setup.json) |
| [intelligent-warehouse.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/intelligent-warehouse.html) | `19efc8b9-5579-4d01-8856-54deb0f3d294`, `https://prod.workflow.trinai.it/webhook/19efc8b9-5579-4d01-8856-54deb0f3d294` | N/D | *Heuristic Mapping: Check name* |
| [job-create.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/job-create.html) | `https://trinai.api.workflow.dcmake.it/webhook/d253f855-ce1a-43ee-81aa-38fa11a9d639` | `get_catalog`, `create_job`, `search_clients`, `check_customer` | [supervisor.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/supervisor.json), [tasks.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json), [service_catalog.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/service_catalog.json) |
| [minisite.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/minisite.html) | `50891655-84c8-4213-90e8-26ebbc3d6c4c`, `https://prod.workflow.trinai.it/webhook/50891655-84c8-4213-90e8-26ebbc3d6c4c` | `PUBLISH_MINISITE`, `PREVIEW_MINISITE`, `Generate_Offer`, `GET_MINISITE_DATA` | [edit_minisite.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/edit_minisite.json) |
| [catalog.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/catalog.html) | `https://prod.workflow.trinai.it/webhook/0cedacd4-f0d3-49b6-b113-fa503b5993f4`, `0cedacd4-f0d3-49b6-b113-fa503b5993f4` | `get_catalog` | [supervisor.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/supervisor.json), [tasks.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json), [service_catalog.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/service_catalog.json) |
| [edit_operator_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/edit_operator_logic.js) | `https://trinai.api.workflow.dcmake.it/webhook/2e3376d7-6a5a-4fc1-a908-4b8b9501c583` | `save_stakeholder_data`, `get_operator_dashboard` | *Heuristic Mapping: Check name* |
| [operator_dashboard_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/operator_dashboard_logic.js) | `https://trinai.api.workflow.dcmake.it/webhook/2e3376d7-6a5a-4fc1-a908-4b8b9501c583` | `get_operator_dashboard` | [dashboard.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard.json) |
| [operator_onboarding.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/operator_onboarding.html) | `771638a1-7a79-4cb0-a36e-29b03901cc4a`, `https://prod.workflow.trinai.it/webhook/771638a1-7a79-4cb0-a36e-29b03901cc4a` | `complete_onboarding`, `analyze_skills`, `verify_gemini_key`, `get`, `parse_cv` | [Billing-Balance.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/Billing-Balance.json), [operator_onboarding.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/operator_onboarding.json) |
| [operator_project_editor_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/operator_project_editor_logic.js) | `https://trinai.api.workflow.dcmake.it/webhook/d253f855-ce1a-43ee-81aa-38fa11a9d639` | `send_project_to_app`, `get_project`, `update_project` | [tasks.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json) |
| [operator_task_create_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/operator_task_create_logic.js) | `https://trinai.api.workflow.dcmake.it/webhook/d253f855-ce1a-43ee-81aa-38fa11a9d639` | `get_catalog`, `search_clients`, `generate_quote`, `generate_report`, `check_customer` | [supervisor.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/supervisor.json), [tasks.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json), [service_catalog.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/service_catalog.json) |
| [operator_tasks_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/operator_tasks_logic.js) | `https://trinai.api.workflow.dcmake.it/webhook/d253f855-ce1a-43ee-81aa-38fa11a9d639` | `get_tasks` | [tasks.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json) |
| [order-viewer.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/order-viewer.html) | `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`, `8eb69e84-d20d-486e-a70e-9acf31c3da9e` | `u_calc_get_order`, `u_calc_evade_order` | [Commerce_Engine.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json), [telegram_customerBot.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json) |
| [orders-manager.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/orders-manager.html) | `5ea527d5-b0e7-44dc-b7ca-626f1c6176f0`, `https://prod.workflow.trinai.it/webhook/5ea527d5-b0e7-44dc-b7ca-626f1c6176f0` | `u_calc_evade_order`, `u_calc_get_orders_list` | [Commerce_Engine.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json) |
| [preventivi.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/preventivi.html) | `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`, `8eb69e84-d20d-486e-a70e-9acf31c3da9e` | `u_calc_prev_save`, `u_calc_prev_get` | [Commerce_Engine.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json), [telegram_customerBot.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json), [Preventivi_engine.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Preventivi_engine.json) |
| [complete-profile.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/softskill/complete-profile.html) | N/D | `get_analysis` | [only_test.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/only_test.json), [soft_skill_selector.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/soft_skill_selector.json) |
| [onboarding.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/softskill/onboarding.html) | `e34e22de-0725-4410-a882-75e87e359376` | `save_stakeholder` | [only_test.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/only_test.json) |
| [profile_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/softskill/profile_logic.js) | `80d663ea-be4b-4d42-8cc1-05f4ada52ced` | `get_single_operator` | [soft_skill_selector.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/soft_skill_selector.json), [team_manager.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/team_manager.json) |
| [video-player.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/softskill/video-player.html) | N/D | `track_video_completion` | [only_test.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/only_test.json), [soft_skill_selector.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/soft_skill_selector.json) |
| [webhook-handler.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/softskill/webhook-handler.js) | `80d663ea-be4b-4d42-8cc1-05f4ada52ced`, `e34e22de-0725-4410-a882-75e87e359376` | `save_module`, `get_progress` | [only_test.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/only_test.json), [soft_skill_selector.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/soft_skill_selector.json) |
| [solver.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/solver.html) | `https://prod.workflow.trinai.it/webhook/26237ccb-3621-4dc7-b15f-fe8a50be3a6f`, `26237ccb-3621-4dc7-b15f-fe8a50be3a6f` | N/D | *Heuristic Mapping: Check name* |
| [supervisor_hub.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/supervisor_hub.html) | `https://prod.workflow.trinai.it/webhook/6f0037a3-3f47-49af-bfa2-0e40a05e49bf`, `6f0037a3-3f47-49af-bfa2-0e40a05e49bf` | N/D | [certificator_hub.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json) |
| [support_hub.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/support_hub.html) | `f9ff7847-db13-41eb-bc27-216c6a732aca`, `https://prod.workflow.trinai.it/webhook/f9ff7847-db13-41eb-bc27-216c6a732aca` | `confirm_booking`, `handover`, `get_support_inbox`, `get_handover_details` | [Comunication_hub.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/Comunication_hub.json), [telegram_customerBot.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json) |
| [ticket.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/ticket.html) | `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`, `8eb69e84-d20d-486e-a70e-9acf31c3da9e` | `submit_ticket` | [telegram_customerBot.json](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json) |

---

## 2. Analisi Dettagliata per Pagina Frontend

### 🖥️ [add-category.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/add-category.html)
- **Percorso Relativo**: `add-category.html`
- **Webhook URL rilevati**:
  - `5e225cf6-76bb-4e19-8657-35cac49fd399`
  - `https://prod.workflow.trinai.it/webhook/5e225cf6-76bb-4e19-8657-35cac49fd399`
  - `7da6f424-dc2a-4476-a0bd-a3bfd21270fb`
  - `https://prod.workflow.trinai.it/webhook/7da6f424-dc2a-4476-a0bd-a3bfd21270fb`
- **Workflow di Backend Correlati**:
  - **[product_category](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/product_category.json)** (`SiteBoS-App-Hook\catalog\product_category.json`):
    - Tipo corrispondenza: *webhook match* (['5e225cf6-76bb-4e19-8657-35cac49fd399'])
    - Database/Collezioni coinvolte: `honeypots` (aggregate), `owner_sessions` (aggregate)
    - Misure di Sicurezza: Webhook Auth Filter
  - **[saveCategory](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/saveCategory.json)** (`SiteBoS-App-Hook\catalog\saveCategory.json`):
    - Tipo corrispondenza: *webhook match* (['7da6f424-dc2a-4476-a0bd-a3bfd21270fb'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `service_catalog` (aggregate)
    - Misure di Sicurezza: Webhook Auth Filter

### 🖥️ [add-product.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/add-product.html)
- **Percorso Relativo**: `add-product.html`
- **Webhook URL rilevati**:
  - `31f89350-4d7f-44b7-9aaf-e7d9e3655b6c`
  - `20fd95c0-4218-400e-ae2a-cd881a757b80`
- **Workflow di Backend Correlati**:
  - **[newProduct](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/newProduct.json)** (`SiteBoS-App-Hook\catalog\newProduct.json`):
    - Tipo corrispondenza: *webhook match* (['31f89350-4d7f-44b7-9aaf-e7d9e3655b6c'])
    - Database/Collezioni coinvolte: `honeypots` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[saveProduct_processor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/saveProduct_processor.json)** (`SiteBoS-App-Hook\catalog\saveProduct_processor.json`):
    - Tipo corrispondenza: *webhook match* (['20fd95c0-4218-400e-ae2a-cd881a757b80'])

### 🖥️ [advanced-setup-dental.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/advanced-setup-dental.html)
- **Percorso Relativo**: `advanced-setup-dental.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/5a58b38d-dfe5-44c2-9d58-34309585c057`
  - `5a58b38d-dfe5-44c2-9d58-34309585c057`
- **Azioni/Comandi inviati**:
  - `get_dental_setup`
  - `generate_operator_invite`
  - `execute_financial_decomposition`
  - `save_dental_setup`
- **Workflow di Backend Correlati**:
  - **[advanced-setup](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/advanced-setup.json)** (`SiteBoS-App-Hook\advanced-setup.json`):
    - Tipo corrispondenza: *action match* (['generate_operator_invite'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[dental-advanced-setup](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dental-advanced-setup.json)** (`SiteBoS-App-Hook\dental-advanced-setup.json`):
    - Tipo corrispondenza: *action match* (['save_dental_setup', 'generate_operator_invite', 'get_dental_setup', 'execute_financial_decomposition'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [advanced-setup.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/advanced-setup.html)
- **Percorso Relativo**: `advanced-setup.html`
- **Webhook URL rilevati**:
  - `958dc50f-87c8-496c-85e4-29ca7d87f2fc`
  - `https://prod.workflow.trinai.it/webhook/958dc50f-87c8-496c-85e4-29ca7d87f2fc`
- **Azioni/Comandi inviati**:
  - `generate_operator_invite`
  - `get_business_setup`
  - `save_business_setup`
  - `execute_decomposition`
- **Workflow di Backend Correlati**:
  - **[advanced-setup](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/advanced-setup.json)** (`SiteBoS-App-Hook\advanced-setup.json`):
    - Tipo corrispondenza: *action match* (['get_business_setup', 'execute_decomposition', 'generate_operator_invite', 'save_business_setup'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[dental-advanced-setup](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dental-advanced-setup.json)** (`SiteBoS-App-Hook\dental-advanced-setup.json`):
    - Tipo corrispondenza: *action match* (['generate_operator_invite'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [agenda.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/agenda.html)
- **Percorso Relativo**: `agenda.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/8f148592-cbb9-4c72-96e8-73c08fccee43`
  - `8f148592-cbb9-4c72-96e8-73c08fccee43`
- **Workflow di Backend Correlati**: Nessuna associazione diretta automatica trovata. Controllare i trigger per corrispondenza euristica.

### 🖥️ [assistant.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/assistant.html)
- **Percorso Relativo**: `assistant.html`
- **Webhook URL rilevati**:
  - `81ab5292-43c3-4f93-afaf-7411b95fc010`
- **Azioni/Comandi inviati**:
  - `npl_chat`
- **Workflow di Backend Correlati**: Nessuna associazione diretta automatica trovata. Controllare i trigger per corrispondenza euristica.

### 🖥️ [booking.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/booking.html)
- **Percorso Relativo**: `booking.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/0a62e876-7bb1-4d74-a8bc-a8828606a0e7`
  - `0a62e876-7bb1-4d74-a8bc-a8828606a0e7`
- **Azioni/Comandi inviati**:
  - `get_booking_config`
  - `submit_booking_proposal`
- **Workflow di Backend Correlati**:
  - **[booking_engine](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/booking_engine.json)** (`SiteBoS-App-Hook\Telegram_customerBot\booking_engine.json`):
    - Tipo corrispondenza: *webhook match* (['0a62e876-7bb1-4d74-a8bc-a8828606a0e7'])

### 🖥️ [bot_config.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/bot_config.html)
- **Percorso Relativo**: `bot_config.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`
  - `8eb69e84-d20d-486e-a70e-9acf31c3da9e`
- **Azioni/Comandi inviati**:
  - `save_bot_config`
  - `get_bot_config`
- **Workflow di Backend Correlati**:
  - **[telegram_customerBot](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)** (`SiteBoS-App-Hook\Telegram_customerBot\telegram_customerBot.json`):
    - Tipo corrispondenza: *action match* (['get_bot_config'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [catalog.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/catalog.html)
- **Percorso Relativo**: `catalog.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/0fff7fa2-bcb2-4b50-a26b-589b7054952e`
  - `8fc050ca-41cd-4469-989c-269a113a00f9`
  - `0fff7fa2-bcb2-4b50-a26b-589b7054952e`
  - `914bd78e-8a41-46d7-8935-7eb73cbbae66`
  - `7d09d946-95e6-4efa-baee-00c458c82e9e`
- **Azioni/Comandi inviati**:
  - `get_catalog`
  - `generate_video`
  - `get_ghost_info`
  - `generate_image`
  - `delete_category`
  - `update_product`
  - `update_social_prompts`
  - `update_category`
  - `delete_product`
- **Workflow di Backend Correlati**:
  - **[service_catalog](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/service_catalog.json)** (`SiteBoS-App-Hook\catalog\service_catalog.json`):
    - Tipo corrispondenza: *action match* (['delete_category', 'update_category', 'get_catalog', 'delete_product', 'get_ghost_info', 'update_product'])
    - Database/Collezioni coinvolte: `social_posts` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `website_board` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[createPost](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/createPost.json)** (`SiteBoS-App-Hook\knowledge_Marketing\createPost.json`):
    - Tipo corrispondenza: *webhook match* (['8fc050ca-41cd-4469-989c-269a113a00f9'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `knowledge_fragments` (aggregate), `service_catalog` (aggregate), `honeypots` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[deploy_blog](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/deploy_blog.json)** (`SiteBoS-App-Hook\knowledge_Marketing\deploy_blog.json`):
    - Tipo corrispondenza: *webhook match* (['914bd78e-8a41-46d7-8935-7eb73cbbae66'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `knowledge_fragments` (aggregate), `service_catalog` (aggregate), `website_board` (aggregate), `honeypots` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[videoProd](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/videoProd.json)** (`SiteBoS-App-Hook\knowledge_Marketing\videoProd.json`):
    - Tipo corrispondenza: *webhook match* (['7d09d946-95e6-4efa-baee-00c458c82e9e'])
    - Database/Collezioni coinvolte: `service_catalog` (aggregate), `honeypots` (aggregate), `social_posts` (aggregate), `owner_sessions` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[supervisor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/supervisor.json)** (`SiteBoS-App-Hook\operators\supervisor.json`):
    - Tipo corrispondenza: *action match* (['get_catalog', 'get_ghost_info'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `service_catalog` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[tasks](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json)** (`SiteBoS-App-Hook\operators\tasks.json`):
    - Tipo corrispondenza: *action match* (['get_catalog'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (), `process_blueprints` (), `honeypots` (), `service_catalog` (), `stakeholders` (aggregate), `projects` (aggregate)
    - Misure di Sicurezza: Webhook Auth Filter

### 🖥️ [certificator.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/certificator.html)
- **Percorso Relativo**: `certificator.html`
- **Webhook URL rilevati**:
  - `ef4aece4-9ec0-4026-a7a7-328562bcbdf6`
  - `https://prod.workflow.trinai.it/webhook/ef4aece4-9ec0-4026-a7a7-328562bcbdf6`
- **Azioni/Comandi inviati**:
  - `certificator`
- **Workflow di Backend Correlati**:
  - **[dashboard](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard.json)** (`SiteBoS-App-Hook\dashboard\dashboard.json`):
    - Tipo corrispondenza: *action match* (['certificator'])
    - Database/Collezioni coinvolte: `honeypots` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter

### 🖥️ [ecommerce.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/ecommerce.html)
- **Percorso Relativo**: `ecommerce.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`
  - `8eb69e84-d20d-486e-a70e-9acf31c3da9e`
- **Azioni/Comandi inviati**:
  - `u_calc_ecom_get`
  - `u_calc_ecom_save`
- **Workflow di Backend Correlati**:
  - **[Commerce_Engine](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json)** (`SiteBoS-App-Hook\Telegram_customerBot\Commerce_Engine.json`):
    - Tipo corrispondenza: *action match* (['u_calc_ecom_save', 'u_calc_ecom_get'])
    - Database/Collezioni coinvolte: `orders` (aggregate), `honeypots` (aggregate), `service_catalog` (aggregate)
  - **[telegram_customerBot](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)** (`SiteBoS-App-Hook\Telegram_customerBot\telegram_customerBot.json`):
    - Tipo corrispondenza: *webhook match* (['8eb69e84-d20d-486e-a70e-9acf31c3da9e'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [edit-advanced-dental.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-advanced-dental.html)
- **Percorso Relativo**: `edit-advanced-dental.html`
- **Webhook URL rilevati**:
  - `6333dff0-d886-499c-8000-f3e0266845ed`
- **Azioni/Comandi inviati**:
  - `RECALCULATE_ADVISORY`
  - `GET`
  - `SAVE`
- **Workflow di Backend Correlati**:
  - **[Advanced_processor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/Advanced_processor.json)** (`SiteBoS-App-Hook\catalog\Advanced_processor.json`):
    - Tipo corrispondenza: *action match* (['RECALCULATE_ADVISORY', 'SAVE', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `honeypots` (aggregate), `owner_sessions` (aggregate), `knowledge_fragments` (aggregate), `advanced` (aggregate), `service_catalog` (aggregate), `compliance_docs` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[certificator_hub](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json)** (`SiteBoS-App-Hook\catalog\certificator_hub.json`):
    - Tipo corrispondenza: *action match* (['SAVE', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `evidence_docs` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[editBlueprint](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editBlueprint.json)** (`SiteBoS-App-Hook\catalog\editBlueprint.json`):
    - Tipo corrispondenza: *action match* (['SAVE', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `knowledge_fragments` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter

### 🖥️ [edit-advanced.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-advanced.html)
- **Percorso Relativo**: `edit-advanced.html`
- **Webhook URL rilevati**:
  - `6333dff0-d886-499c-8000-f3e0266845ed`
- **Azioni/Comandi inviati**:
  - `RECALCULATE_ADVISORY`
  - `GET`
  - `SAVE`
- **Workflow di Backend Correlati**:
  - **[Advanced_processor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/Advanced_processor.json)** (`SiteBoS-App-Hook\catalog\Advanced_processor.json`):
    - Tipo corrispondenza: *action match* (['RECALCULATE_ADVISORY', 'SAVE', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `honeypots` (aggregate), `owner_sessions` (aggregate), `knowledge_fragments` (aggregate), `advanced` (aggregate), `service_catalog` (aggregate), `compliance_docs` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[certificator_hub](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json)** (`SiteBoS-App-Hook\catalog\certificator_hub.json`):
    - Tipo corrispondenza: *action match* (['SAVE', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `evidence_docs` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[editBlueprint](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editBlueprint.json)** (`SiteBoS-App-Hook\catalog\editBlueprint.json`):
    - Tipo corrispondenza: *action match* (['SAVE', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `knowledge_fragments` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter

### 🖥️ [edit-article.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-article.html)
- **Percorso Relativo**: `edit-article.html`
- **Webhook URL rilevati**:
  - `2c6416b1-32c6-4661-bd8f-b175d24fd035`
  - `https://prod.workflow.trinai.it/webhook/2c6416b1-32c6-4661-bd8f-b175d24fd035`
- **Azioni/Comandi inviati**:
  - `ENTITY_CREATED`
  - `VISION_ARTICLE_ANALYSIS`
  - `SAVE_ARTICLE`
- **Workflow di Backend Correlati**:
  - **[editProduct](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editProduct.json)** (`SiteBoS-App-Hook\catalog\editProduct.json`):
    - Tipo corrispondenza: *webhook match* (['2c6416b1-32c6-4661-bd8f-b175d24fd035'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `knowledge_fragments` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter

### 🖥️ [edit-asset.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-asset.html)
- **Percorso Relativo**: `edit-asset.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/asset_handler`
  - `asset`
- **Workflow di Backend Correlati**: Nessuna associazione diretta automatica trovata. Controllare i trigger per corrispondenza euristica.

### 🖥️ [edit-blog.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-blog.html)
- **Percorso Relativo**: `edit-blog.html`
- **Webhook URL rilevati**:
  - `914bd78e-8a41-46d7-8935-7eb73cbbae66`
  - `https://prod.workflow.trinai.it/webhook/914bd78e-8a41-46d7-8935-7eb73cbbae66`
- **Azioni/Comandi inviati**:
  - `get_blog`
- **Workflow di Backend Correlati**:
  - **[deploy_blog](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/deploy_blog.json)** (`SiteBoS-App-Hook\knowledge_Marketing\deploy_blog.json`):
    - Tipo corrispondenza: *action match* (['get_blog'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `knowledge_fragments` (aggregate), `service_catalog` (aggregate), `website_board` (aggregate), `honeypots` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [edit-blueprint.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-blueprint.html)
- **Percorso Relativo**: `edit-blueprint.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/e742c7c8-107e-4328-882e-c13459413424`
  - `e742c7c8-107e-4328-882e-c13459413424`
- **Azioni/Comandi inviati**:
  - `GET`
  - `COMPLIANCE_CHECK`
  - `SAVE`
- **Workflow di Backend Correlati**:
  - **[Advanced_processor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/Advanced_processor.json)** (`SiteBoS-App-Hook\catalog\Advanced_processor.json`):
    - Tipo corrispondenza: *action match* (['SAVE', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `honeypots` (aggregate), `owner_sessions` (aggregate), `knowledge_fragments` (aggregate), `advanced` (aggregate), `service_catalog` (aggregate), `compliance_docs` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[certificator_hub](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json)** (`SiteBoS-App-Hook\catalog\certificator_hub.json`):
    - Tipo corrispondenza: *action match* (['SAVE', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `evidence_docs` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[editBlueprint](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editBlueprint.json)** (`SiteBoS-App-Hook\catalog\editBlueprint.json`):
    - Tipo corrispondenza: *action match* (['SAVE', 'COMPLIANCE_CHECK', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `knowledge_fragments` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter

### 🖥️ [edit-knowledge.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-knowledge.html)
- **Percorso Relativo**: `edit-knowledge.html`
- **Webhook URL rilevati**:
  - `0ca76af1-8c02-47f4-a3a4-fd19ad495afe`
  - `https://prod.workflow.trinai.it/webhook/0ca76af1-8c02-47f4-a3a4-fd19ad495afe`
- **Azioni/Comandi inviati**:
  - `save_kb`
  - `get_kb_details`
- **Workflow di Backend Correlati**:
  - **[knowledge](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/knowledge.json)** (`SiteBoS-App-Hook\knowledge_Marketing\knowledge.json`):
    - Tipo corrispondenza: *action match* (['save_kb', 'get_kb_details'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `knowledge_fragments` (aggregate), `knowledge_fragments` (), `website_board` (), `service_catalog` (aggregate), `website_board` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter

### 🖥️ [edit-location.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-location.html)
- **Percorso Relativo**: `edit-location.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/location_handler`
  - `location`
- **Workflow di Backend Correlati**: Nessuna associazione diretta automatica trovata. Controllare i trigger per corrispondenza euristica.

### 🖥️ [edit-product.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-product.html)
- **Percorso Relativo**: `edit-product.html`
- **Webhook URL rilevati**:
  - `2c6416b1-32c6-4661-bd8f-b175d24fd035`
  - `https://prod.workflow.trinai.it/webhook/2c6416b1-32c6-4661-bd8f-b175d24fd035`
  - `6333dff0-d886-499c-8000-f3e0266845ed`
- **Azioni/Comandi inviati**:
  - `GET`
  - `GENERATE_ADVANCED_DRAFT`
  - `SAVE`
- **Workflow di Backend Correlati**:
  - **[Advanced_processor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/Advanced_processor.json)** (`SiteBoS-App-Hook\catalog\Advanced_processor.json`):
    - Tipo corrispondenza: *action match* (['SAVE', 'GENERATE_ADVANCED_DRAFT', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `honeypots` (aggregate), `owner_sessions` (aggregate), `knowledge_fragments` (aggregate), `advanced` (aggregate), `service_catalog` (aggregate), `compliance_docs` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[certificator_hub](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json)** (`SiteBoS-App-Hook\catalog\certificator_hub.json`):
    - Tipo corrispondenza: *action match* (['SAVE', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `evidence_docs` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[editBlueprint](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editBlueprint.json)** (`SiteBoS-App-Hook\catalog\editBlueprint.json`):
    - Tipo corrispondenza: *action match* (['SAVE', 'GET'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `knowledge_fragments` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter
  - **[editProduct](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editProduct.json)** (`SiteBoS-App-Hook\catalog\editProduct.json`):
    - Tipo corrispondenza: *webhook match* (['2c6416b1-32c6-4661-bd8f-b175d24fd035'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `knowledge_fragments` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter

### 🖥️ [edit-semilavorati.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit-semilavorati.html)
- **Percorso Relativo**: `edit-semilavorati.html`
- **Webhook URL rilevati**:
  - `2c6416b1-32c6-4661-bd8f-b175d24fd035`
  - `https://prod.workflow.trinai.it/webhook/2c6416b1-32c6-4661-bd8f-b175d24fd035`
- **Azioni/Comandi inviati**:
  - `SAVE_SEMI`
- **Workflow di Backend Correlati**:
  - **[editProduct](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editProduct.json)** (`SiteBoS-App-Hook\catalog\editProduct.json`):
    - Tipo corrispondenza: *webhook match* (['2c6416b1-32c6-4661-bd8f-b175d24fd035'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `knowledge_fragments` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter

### 🖥️ [edit_owner.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/edit_owner.html)
- **Percorso Relativo**: `edit_owner.html`
- **Webhook URL rilevati**:
  - `83acc670-15ae-4da0-ae0e-3587c85bd5f4`
  - `https://prod.workflow.trinai.it/webhook/83acc670-15ae-4da0-ae0e-3587c85bd5f4`
- **Azioni/Comandi inviati**:
  - `analyze`
  - `save_owner_data`
  - `associate_bot`
  - `get_owner_data`
- **Workflow di Backend Correlati**:
  - **[edit_owner](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/edit_owner.json)** (`SiteBoS-App-Hook\edit_owner.json`):
    - Tipo corrispondenza: *action match* (['analyze', 'get_owner_data', 'save_owner_data', 'associate_bot'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [handover.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/handover.html)
- **Percorso Relativo**: `handover.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`
  - `8eb69e84-d20d-486e-a70e-9acf31c3da9e`
- **Azioni/Comandi inviati**:
  - `handover`
- **Workflow di Backend Correlati**:
  - **[Comunication_hub](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/Comunication_hub.json)** (`SiteBoS-App-Hook\knowledge_Marketing\Comunication_hub.json`):
    - Tipo corrispondenza: *action match* (['handover'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `active_sessions` (aggregate), `orders` (), `active_sessions` (), `stakeholders` (aggregate), `active_sessions` (update)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[telegram_customerBot](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)** (`SiteBoS-App-Hook\Telegram_customerBot\telegram_customerBot.json`):
    - Tipo corrispondenza: *action match* (['handover'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [identity_hub.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/identity_hub.html)
- **Percorso Relativo**: `identity_hub.html`
- **Webhook URL rilevati**:
  - `5a58b38d-dfe5-44c2-9d58-34309585c057`
- **Azioni/Comandi inviati**:
  - `get_business_vertical`
- **Workflow di Backend Correlati**:
  - **[advanced-setup](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/advanced-setup.json)** (`SiteBoS-App-Hook\advanced-setup.json`):
    - Tipo corrispondenza: *action match* (['get_business_vertical'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[dental-advanced-setup](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dental-advanced-setup.json)** (`SiteBoS-App-Hook\dental-advanced-setup.json`):
    - Tipo corrispondenza: *action match* (['get_business_vertical'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [intelligent-warehouse.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/intelligent-warehouse.html)
- **Percorso Relativo**: `intelligent-warehouse.html`
- **Webhook URL rilevati**:
  - `19efc8b9-5579-4d01-8856-54deb0f3d294`
  - `https://prod.workflow.trinai.it/webhook/19efc8b9-5579-4d01-8856-54deb0f3d294`
- **Workflow di Backend Correlati**: Nessuna associazione diretta automatica trovata. Controllare i trigger per corrispondenza euristica.

### 🖥️ [job-create.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/job-create.html)
- **Percorso Relativo**: `job-create.html`
- **Webhook URL rilevati**:
  - `https://trinai.api.workflow.dcmake.it/webhook/d253f855-ce1a-43ee-81aa-38fa11a9d639`
- **Azioni/Comandi inviati**:
  - `get_catalog`
  - `create_job`
  - `search_clients`
  - `check_customer`
- **Workflow di Backend Correlati**:
  - **[service_catalog](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/service_catalog.json)** (`SiteBoS-App-Hook\catalog\service_catalog.json`):
    - Tipo corrispondenza: *action match* (['get_catalog'])
    - Database/Collezioni coinvolte: `social_posts` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `website_board` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[supervisor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/supervisor.json)** (`SiteBoS-App-Hook\operators\supervisor.json`):
    - Tipo corrispondenza: *action match* (['get_catalog'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `service_catalog` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[tasks](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json)** (`SiteBoS-App-Hook\operators\tasks.json`):
    - Tipo corrispondenza: *action match* (['get_catalog', 'check_customer'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (), `process_blueprints` (), `honeypots` (), `service_catalog` (), `stakeholders` (aggregate), `projects` (aggregate)
    - Misure di Sicurezza: Webhook Auth Filter

### 🖥️ [minisite.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/minisite.html)
- **Percorso Relativo**: `minisite.html`
- **Webhook URL rilevati**:
  - `50891655-84c8-4213-90e8-26ebbc3d6c4c`
  - `https://prod.workflow.trinai.it/webhook/50891655-84c8-4213-90e8-26ebbc3d6c4c`
- **Azioni/Comandi inviati**:
  - `PUBLISH_MINISITE`
  - `PREVIEW_MINISITE`
  - `Generate_Offer`
  - `GET_MINISITE_DATA`
- **Workflow di Backend Correlati**:
  - **[edit_minisite](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/edit_minisite.json)** (`SiteBoS-App-Hook\knowledge_Marketing\edit_minisite.json`):
    - Tipo corrispondenza: *action match* (['PUBLISH_MINISITE', 'GET_MINISITE_DATA', 'PREVIEW_MINISITE'])
    - Database/Collezioni coinvolte: `honeypots` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `website_board` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter

### 🖥️ [catalog.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/catalog.html)
- **Percorso Relativo**: `operators\catalog.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/0cedacd4-f0d3-49b6-b113-fa503b5993f4`
  - `0cedacd4-f0d3-49b6-b113-fa503b5993f4`
- **Azioni/Comandi inviati**:
  - `get_catalog`
- **Workflow di Backend Correlati**:
  - **[service_catalog](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/service_catalog.json)** (`SiteBoS-App-Hook\catalog\service_catalog.json`):
    - Tipo corrispondenza: *action match* (['get_catalog'])
    - Database/Collezioni coinvolte: `social_posts` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `website_board` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[supervisor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/supervisor.json)** (`SiteBoS-App-Hook\operators\supervisor.json`):
    - Tipo corrispondenza: *action match* (['get_catalog'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `service_catalog` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[tasks](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json)** (`SiteBoS-App-Hook\operators\tasks.json`):
    - Tipo corrispondenza: *action match* (['get_catalog'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (), `process_blueprints` (), `honeypots` (), `service_catalog` (), `stakeholders` (aggregate), `projects` (aggregate)
    - Misure di Sicurezza: Webhook Auth Filter

### 🖥️ [edit_operator_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/edit_operator_logic.js)
- **Percorso Relativo**: `operators\edit_operator_logic.js`
- **Webhook URL rilevati**:
  - `https://trinai.api.workflow.dcmake.it/webhook/2e3376d7-6a5a-4fc1-a908-4b8b9501c583`
- **Azioni/Comandi inviati**:
  - `save_stakeholder_data`
  - `get_operator_dashboard`
- **Workflow di Backend Correlati**: Nessuna associazione diretta automatica trovata. Controllare i trigger per corrispondenza euristica.

### 🖥️ [operator_dashboard_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/operator_dashboard_logic.js)
- **Percorso Relativo**: `operators\operator_dashboard_logic.js`
- **Webhook URL rilevati**:
  - `https://trinai.api.workflow.dcmake.it/webhook/2e3376d7-6a5a-4fc1-a908-4b8b9501c583`
- **Azioni/Comandi inviati**:
  - `get_operator_dashboard`
- **Workflow di Backend Correlati**: Nessuna associazione diretta automatica trovata. Controllare i trigger per corrispondenza euristica.

### 🖥️ [operator_onboarding.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/operator_onboarding.html)
- **Percorso Relativo**: `operators\operator_onboarding.html`
- **Webhook URL rilevati**:
  - `771638a1-7a79-4cb0-a36e-29b03901cc4a`
  - `https://prod.workflow.trinai.it/webhook/771638a1-7a79-4cb0-a36e-29b03901cc4a`
- **Azioni/Comandi inviati**:
  - `complete_onboarding`
  - `analyze_skills`
  - `verify_gemini_key`
  - `get`
  - `parse_cv`
- **Workflow di Backend Correlati**:
  - **[Billing-Balance](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/Billing-Balance.json)** (`Billing-Balance.json`):
    - Tipo corrispondenza: *action match* (['get'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Webhook Auth Filter
  - **[operator_onboarding](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/operator_onboarding.json)** (`SiteBoS-App-Hook\operators\operator_onboarding.json`):
    - Tipo corrispondenza: *action match* (['complete_onboarding', 'parse_cv', 'verify_gemini_key', 'get'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [operator_project_editor_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/operator_project_editor_logic.js)
- **Percorso Relativo**: `operators\operator_project_editor_logic.js`
- **Webhook URL rilevati**:
  - `https://trinai.api.workflow.dcmake.it/webhook/d253f855-ce1a-43ee-81aa-38fa11a9d639`
- **Azioni/Comandi inviati**:
  - `send_project_to_app`
  - `get_project`
  - `update_project`
- **Workflow di Backend Correlati**:
  - **[tasks](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json)** (`SiteBoS-App-Hook\operators\tasks.json`):
    - Tipo corrispondenza: *action match* (['send_project_to_app', 'get_project'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (), `process_blueprints` (), `honeypots` (), `service_catalog` (), `stakeholders` (aggregate), `projects` (aggregate)
    - Misure di Sicurezza: Webhook Auth Filter

### 🖥️ [operator_task_create_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/operator_task_create_logic.js)
- **Percorso Relativo**: `operators\operator_task_create_logic.js`
- **Webhook URL rilevati**:
  - `https://trinai.api.workflow.dcmake.it/webhook/d253f855-ce1a-43ee-81aa-38fa11a9d639`
- **Azioni/Comandi inviati**:
  - `get_catalog`
  - `search_clients`
  - `generate_quote`
  - `generate_report`
  - `check_customer`
- **Workflow di Backend Correlati**:
  - **[service_catalog](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/service_catalog.json)** (`SiteBoS-App-Hook\catalog\service_catalog.json`):
    - Tipo corrispondenza: *action match* (['get_catalog'])
    - Database/Collezioni coinvolte: `social_posts` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `website_board` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[supervisor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/supervisor.json)** (`SiteBoS-App-Hook\operators\supervisor.json`):
    - Tipo corrispondenza: *action match* (['get_catalog'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `service_catalog` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[tasks](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json)** (`SiteBoS-App-Hook\operators\tasks.json`):
    - Tipo corrispondenza: *action match* (['get_catalog', 'generate_quote', 'check_customer'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (), `process_blueprints` (), `honeypots` (), `service_catalog` (), `stakeholders` (aggregate), `projects` (aggregate)
    - Misure di Sicurezza: Webhook Auth Filter

### 🖥️ [operator_tasks_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/operators/operator_tasks_logic.js)
- **Percorso Relativo**: `operators\operator_tasks_logic.js`
- **Webhook URL rilevati**:
  - `https://trinai.api.workflow.dcmake.it/webhook/d253f855-ce1a-43ee-81aa-38fa11a9d639`
- **Azioni/Comandi inviati**:
  - `get_tasks`
- **Workflow di Backend Correlati**:
  - **[tasks](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json)** (`SiteBoS-App-Hook\operators\tasks.json`):
    - Tipo corrispondenza: *action match* (['get_tasks'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (), `process_blueprints` (), `honeypots` (), `service_catalog` (), `stakeholders` (aggregate), `projects` (aggregate)
    - Misure di Sicurezza: Webhook Auth Filter

### 🖥️ [order-viewer.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/order-viewer.html)
- **Percorso Relativo**: `order-viewer.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`
  - `8eb69e84-d20d-486e-a70e-9acf31c3da9e`
- **Azioni/Comandi inviati**:
  - `u_calc_get_order`
  - `u_calc_evade_order`
- **Workflow di Backend Correlati**:
  - **[Commerce_Engine](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json)** (`SiteBoS-App-Hook\Telegram_customerBot\Commerce_Engine.json`):
    - Tipo corrispondenza: *action match* (['u_calc_get_order', 'u_calc_evade_order'])
    - Database/Collezioni coinvolte: `orders` (aggregate), `honeypots` (aggregate), `service_catalog` (aggregate)
  - **[telegram_customerBot](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)** (`SiteBoS-App-Hook\Telegram_customerBot\telegram_customerBot.json`):
    - Tipo corrispondenza: *webhook match* (['8eb69e84-d20d-486e-a70e-9acf31c3da9e'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [orders-manager.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/orders-manager.html)
- **Percorso Relativo**: `orders-manager.html`
- **Webhook URL rilevati**:
  - `5ea527d5-b0e7-44dc-b7ca-626f1c6176f0`
  - `https://prod.workflow.trinai.it/webhook/5ea527d5-b0e7-44dc-b7ca-626f1c6176f0`
- **Azioni/Comandi inviati**:
  - `u_calc_evade_order`
  - `u_calc_get_orders_list`
- **Workflow di Backend Correlati**:
  - **[Commerce_Engine](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json)** (`SiteBoS-App-Hook\Telegram_customerBot\Commerce_Engine.json`):
    - Tipo corrispondenza: *action match* (['u_calc_evade_order'])
    - Database/Collezioni coinvolte: `orders` (aggregate), `honeypots` (aggregate), `service_catalog` (aggregate)

### 🖥️ [preventivi.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/preventivi.html)
- **Percorso Relativo**: `preventivi.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`
  - `8eb69e84-d20d-486e-a70e-9acf31c3da9e`
- **Azioni/Comandi inviati**:
  - `u_calc_prev_save`
  - `u_calc_prev_get`
- **Workflow di Backend Correlati**:
  - **[Commerce_Engine](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json)** (`SiteBoS-App-Hook\Telegram_customerBot\Commerce_Engine.json`):
    - Tipo corrispondenza: *action match* (['u_calc_prev_save', 'u_calc_prev_get'])
    - Database/Collezioni coinvolte: `orders` (aggregate), `honeypots` (aggregate), `service_catalog` (aggregate)
  - **[Preventivi_engine](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Preventivi_engine.json)** (`SiteBoS-App-Hook\Telegram_customerBot\Preventivi_engine.json`):
    - Tipo corrispondenza: *action match* (['u_calc_prev_get', 'u_calc_prev_save'])
  - **[telegram_customerBot](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)** (`SiteBoS-App-Hook\Telegram_customerBot\telegram_customerBot.json`):
    - Tipo corrispondenza: *webhook match* (['8eb69e84-d20d-486e-a70e-9acf31c3da9e'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [complete-profile.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/softskill/complete-profile.html)
- **Percorso Relativo**: `softskill\complete-profile.html`
- **Azioni/Comandi inviati**:
  - `get_analysis`
- **Workflow di Backend Correlati**:
  - **[only_test](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/only_test.json)** (`SiteBoS-App-Hook\teams\only_test.json`):
    - Tipo corrispondenza: *action match* (['get_analysis'])
    - Database/Collezioni coinvolte: `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[soft_skill_selector](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/soft_skill_selector.json)** (`SiteBoS-App-Hook\teams\soft_skill_selector.json`):
    - Tipo corrispondenza: *action match* (['get_analysis'])
    - Database/Collezioni coinvolte: `honeypots` (aggregate), `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [onboarding.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/softskill/onboarding.html)
- **Percorso Relativo**: `softskill\onboarding.html`
- **Webhook URL rilevati**:
  - `e34e22de-0725-4410-a882-75e87e359376`
- **Azioni/Comandi inviati**:
  - `save_stakeholder`
- **Workflow di Backend Correlati**:
  - **[only_test](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/only_test.json)** (`SiteBoS-App-Hook\teams\only_test.json`):
    - Tipo corrispondenza: *webhook match* (['e34e22de-0725-4410-a882-75e87e359376'])
    - Database/Collezioni coinvolte: `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [profile_logic.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/softskill/profile_logic.js)
- **Percorso Relativo**: `softskill\profile_logic.js`
- **Webhook URL rilevati**:
  - `80d663ea-be4b-4d42-8cc1-05f4ada52ced`
- **Azioni/Comandi inviati**:
  - `get_single_operator`
- **Workflow di Backend Correlati**:
  - **[soft_skill_selector](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/soft_skill_selector.json)** (`SiteBoS-App-Hook\teams\soft_skill_selector.json`):
    - Tipo corrispondenza: *webhook match* (['80d663ea-be4b-4d42-8cc1-05f4ada52ced'])
    - Database/Collezioni coinvolte: `honeypots` (aggregate), `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[team_manager](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/team_manager.json)** (`SiteBoS-App-Hook\teams\team_manager.json`):
    - Tipo corrispondenza: *action match* (['get_single_operator'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Webhook Auth Filter

### 🖥️ [video-player.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/softskill/video-player.html)
- **Percorso Relativo**: `softskill\video-player.html`
- **Azioni/Comandi inviati**:
  - `track_video_completion`
- **Workflow di Backend Correlati**:
  - **[only_test](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/only_test.json)** (`SiteBoS-App-Hook\teams\only_test.json`):
    - Tipo corrispondenza: *action match* (['track_video_completion'])
    - Database/Collezioni coinvolte: `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[soft_skill_selector](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/soft_skill_selector.json)** (`SiteBoS-App-Hook\teams\soft_skill_selector.json`):
    - Tipo corrispondenza: *action match* (['track_video_completion'])
    - Database/Collezioni coinvolte: `honeypots` (aggregate), `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [webhook-handler.js](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/softskill/webhook-handler.js)
- **Percorso Relativo**: `softskill\webhook-handler.js`
- **Webhook URL rilevati**:
  - `80d663ea-be4b-4d42-8cc1-05f4ada52ced`
  - `e34e22de-0725-4410-a882-75e87e359376`
- **Azioni/Comandi inviati**:
  - `save_module`
  - `get_progress`
- **Workflow di Backend Correlati**:
  - **[only_test](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/only_test.json)** (`SiteBoS-App-Hook\teams\only_test.json`):
    - Tipo corrispondenza: *action match* (['get_progress', 'save_module'])
    - Database/Collezioni coinvolte: `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[soft_skill_selector](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/soft_skill_selector.json)** (`SiteBoS-App-Hook\teams\soft_skill_selector.json`):
    - Tipo corrispondenza: *action match* (['get_progress', 'save_module'])
    - Database/Collezioni coinvolte: `honeypots` (aggregate), `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [solver.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/solver.html)
- **Percorso Relativo**: `solver.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/26237ccb-3621-4dc7-b15f-fe8a50be3a6f`
  - `26237ccb-3621-4dc7-b15f-fe8a50be3a6f`
- **Workflow di Backend Correlati**: Nessuna associazione diretta automatica trovata. Controllare i trigger per corrispondenza euristica.

### 🖥️ [supervisor_hub.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/supervisor_hub.html)
- **Percorso Relativo**: `supervisor_hub.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/6f0037a3-3f47-49af-bfa2-0e40a05e49bf`
  - `6f0037a3-3f47-49af-bfa2-0e40a05e49bf`
- **Workflow di Backend Correlati**:
  - **[certificator_hub](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json)** (`SiteBoS-App-Hook\catalog\certificator_hub.json`):
    - Tipo corrispondenza: *webhook match* (['6f0037a3-3f47-49af-bfa2-0e40a05e49bf'])
    - Database/Collezioni coinvolte: `process_blueprints` (aggregate), `owner_sessions` (aggregate), `service_catalog` (aggregate), `evidence_docs` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [support_hub.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/support_hub.html)
- **Percorso Relativo**: `support_hub.html`
- **Webhook URL rilevati**:
  - `f9ff7847-db13-41eb-bc27-216c6a732aca`
  - `https://prod.workflow.trinai.it/webhook/f9ff7847-db13-41eb-bc27-216c6a732aca`
- **Azioni/Comandi inviati**:
  - `confirm_booking`
  - `handover`
  - `get_support_inbox`
  - `get_handover_details`
- **Workflow di Backend Correlati**:
  - **[Comunication_hub](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/Comunication_hub.json)** (`SiteBoS-App-Hook\knowledge_Marketing\Comunication_hub.json`):
    - Tipo corrispondenza: *action match* (['get_handover_details', 'handover', 'get_support_inbox'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `active_sessions` (aggregate), `orders` (), `active_sessions` (), `stakeholders` (aggregate), `active_sessions` (update)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder
  - **[telegram_customerBot](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)** (`SiteBoS-App-Hook\Telegram_customerBot\telegram_customerBot.json`):
    - Tipo corrispondenza: *action match* (['handover'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder

### 🖥️ [ticket.html](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control/ticket.html)
- **Percorso Relativo**: `ticket.html`
- **Webhook URL rilevati**:
  - `https://prod.workflow.trinai.it/webhook/8eb69e84-d20d-486e-a70e-9acf31c3da9e`
  - `8eb69e84-d20d-486e-a70e-9acf31c3da9e`
- **Azioni/Comandi inviati**:
  - `submit_ticket`
- **Workflow di Backend Correlati**:
  - **[telegram_customerBot](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)** (`SiteBoS-App-Hook\Telegram_customerBot\telegram_customerBot.json`):
    - Tipo corrispondenza: *webhook match* (['8eb69e84-d20d-486e-a70e-9acf31c3da9e'])
    - Database/Collezioni coinvolte: `owner_sessions` (aggregate), `stakeholders` (aggregate)
    - Misure di Sicurezza: Telegram Validator (CryptoJS), Webhook Auth Filter, Ash Decoder


---

## 3. Analisi Dettagliata dei Workflow Backend (n8n)

### Directory: `Root`

#### ⚙️ [Billing-Balance](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/Billing-Balance.json)
- **Percorso File**: `Billing-Balance.json`
- **ID Workflow**: `l7x52TmwwPmoAh1dRNayL`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `e353fd8a-62fb-4203-a2a7-20369d832e00`
- **Azioni gestite (Switch)**: `add`, `get`, `use`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)

#### ⚙️ [Standard_AcCredit](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/Standard_AcCredit.json)
- **Percorso File**: `Standard_AcCredit.json`
- **ID Workflow**: `4O56BKsRFw321LD7`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `billing_buffers`, Operazione: `aggregate` (Credenziale: `MemoryManager`)

#### ⚙️ [dinamic_google_pricing](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/dinamic_google_pricing.json)
- **Percorso File**: `dinamic_google_pricing.json`
- **ID Workflow**: `vgBwLk5GzsmWtlVX`
- **Stato**: `Attivo`

#### ⚙️ [stakeholder_Session_Draft](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/stakeholder_Session_Draft.json)
- **Percorso File**: `stakeholder_Session_Draft.json`
- **ID Workflow**: `q_2W-egXUScuMJ_A3vs3t`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `b9fa460d-6abd-4868-80ae-ba3985d249af`
- **Azioni gestite (Switch)**: `lookup`, `delete`, `edit`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call Sanified Honeypot` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)

### Directory: `SiteBoS-App-Hook`

#### ⚙️ [advanced-setup](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/advanced-setup.json)
- **Percorso File**: `SiteBoS-App-Hook\advanced-setup.json`
- **ID Workflow**: `4vFrgSBXH8uifQ5v`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `958dc50f-87c8-496c-85e4-29ca7d87f2fc`
- **Azioni gestite (Switch)**: `societa_capitali`, `societa_persone`, `execute_decomposition`, `save_business_setup`, `get_business_vertical`, `get_business_setup`, `generate_operator_invite`, `professionista`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call Gemini Rec1` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call Gemini Fiscal` (ID: `{'__rl': True, 'value': 'i6kSWyKrKQytzwQlFs92T', 'mode': 'list', 'cachedResultUrl': '/workflow/i6kSWyKrKQytzwQlFs92T', 'cachedResultName': 'GeminiGoogleSerch'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [dental-advanced-setup](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dental-advanced-setup.json)
- **Percorso File**: `SiteBoS-App-Hook\dental-advanced-setup.json`
- **ID Workflow**: `JhqpmKVQJ24oSIWc`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `5a58b38d-dfe5-44c2-9d58-34309585c057`
- **Azioni gestite (Switch)**: `societa_capitali`, `societa_persone`, `save_dental_setup`, `get_dental_setup`, `professionista`, `get_business_vertical`, `generate_operator_invite`, `execute_financial_decomposition`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call Gemini Rec1` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call Gemini Fiscal` (ID: `{'__rl': True, 'value': 'i6kSWyKrKQytzwQlFs92T', 'mode': 'list', 'cachedResultUrl': '/workflow/i6kSWyKrKQytzwQlFs92T', 'cachedResultName': 'GeminiGoogleSerch'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [edit_owner](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/edit_owner.json)
- **Percorso File**: `SiteBoS-App-Hook\edit_owner.json`
- **ID Workflow**: `7PFFfXAYlCPjWFeJ`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `83acc670-15ae-4da0-ae0e-3587c85bd5f4`
- **Azioni gestite (Switch)**: `save_owner_data`, `associate_bot`, `get_owner_data`, `analyze`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [honeypot_editor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/honeypot_editor.json)
- **Percorso File**: `SiteBoS-App-Hook\honeypot_editor.json`
- **ID Workflow**: `6z1pb0pllJmuZacp`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `48ee3cba-99dc-407a-98af-624e97b1e888`
- **Azioni gestite (Switch)**: `analyze_image_asset`, `save_honeypot_data`, `generate_offer_html`, `link_telegram_bot`, `=get_honeypot_data`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'GeminiCall'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call Gemini` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call GeminiOffer` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'GeminiCall'1` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'Standard_AcCredit'` (ID: `{'__rl': True, 'value': '4O56BKsRFw321LD7', 'mode': 'list', 'cachedResultUrl': '/workflow/4O56BKsRFw321LD7', 'cachedResultName': 'Standard_AcCredit'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)

#### ⚙️ [onboarding](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/onboarding.json)
- **Percorso File**: `SiteBoS-App-Hook\onboarding.json`
- **ID Workflow**: `SmjVZASzoJmmySu0`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `1211a23e-ff91-4d3c-8938-aa273555bd8e`
- **Azioni gestite (Switch)**: `save_step_1`, `analyze_id`, `get_owner_data_by_token`, `save_owner_data_by_token`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call TlgmCustomGemini` (ID: `{'__rl': True, 'value': 'vKhXqHUBCY2RlwlE', 'mode': 'list', 'cachedResultUrl': '/workflow/vKhXqHUBCY2RlwlE', 'cachedResultName': 'TlgmCustomGemini'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)

#### ⚙️ [processor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/processor.json)
- **Percorso File**: `SiteBoS-App-Hook\processor.json`
- **ID Workflow**: `kSn5sBgmPGVgTsaX`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `35667aed-ee1c-4074-92df-d4334967a1b3`
- **Azioni gestite (Switch)**: `onboarding`, `honeypot_build_trigger`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `website_board`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Owner_Resrch` (ID: `{'__rl': True, 'value': 'i6kSWyKrKQytzwQlFs92T', 'mode': 'list', 'cachedResultUrl': '/workflow/i6kSWyKrKQytzwQlFs92T', 'cachedResultName': 'GeminiGoogleSerch'}`, Origine: ``)
  - `Honeypot Structure` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'GeminiCall'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'GeminiCall' Labeling` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)

### Directory: `SiteBoS-App-Hook\Telegram_customerBot`

#### ⚙️ [Commerce_Engine](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Commerce_Engine.json)
- **Percorso File**: `SiteBoS-App-Hook\Telegram_customerBot\Commerce_Engine.json`
- **ID Workflow**: `jnH1bR1I5w25S3aw`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `u_calc_ecom_save`, `u_calc_prev_get`, `u_calc_evade_order`, `u_calc_prev_save`, `u_calc_get_order`, `u_calc_ecom_get`
- **Operazioni MongoDB**:
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `orders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `orders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `orders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)

#### ⚙️ [Multi_Input_Gate](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Multi_Input_Gate.json)
- **Percorso File**: `SiteBoS-App-Hook\Telegram_customerBot\Multi_Input_Gate.json`
- **ID Workflow**: `tjUloHdAa9cXXiIp`
- **Stato**: `Attivo`

#### ⚙️ [Preventivi_engine](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Preventivi_engine.json)
- **Percorso File**: `SiteBoS-App-Hook\Telegram_customerBot\Preventivi_engine.json`
- **ID Workflow**: `E9MizIH9ZcjBJlZY`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `u_calc_prev_save`, `u_calc_prev_get`

#### ⚙️ [Tlgm_bot NplGate](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/Tlgm_bot NplGate.json)
- **Percorso File**: `SiteBoS-App-Hook\Telegram_customerBot\Tlgm_bot NplGate.json`
- **ID Workflow**: `5gd6YujFW82uNOZC`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `Direct_Response`, `BAN_HANDLER`, `oHODOR`
- **Operazioni MongoDB**:
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'TBoS_Serch&Think'3` (ID: `{'__rl': True, 'value': 'vKhXqHUBCY2RlwlE', 'mode': 'list', 'cachedResultUrl': '/workflow/vKhXqHUBCY2RlwlE', 'cachedResultName': 'TlgmCustomGemini'}`, Origine: ``)
  - `Call 'Multi_Input_Gate'1` (ID: `{'__rl': True, 'value': 'tjUloHdAa9cXXiIp', 'mode': 'list', 'cachedResultUrl': '/workflow/tjUloHdAa9cXXiIp', 'cachedResultName': 'Multi_Input_Gate'}`, Origine: ``)
  - `Call 'TlgmCustomGemini'` (ID: `{'__rl': True, 'value': 'vKhXqHUBCY2RlwlE', 'mode': 'list', 'cachedResultUrl': '/workflow/vKhXqHUBCY2RlwlE', 'cachedResultName': 'TlgmCustomGemini'}`, Origine: ``)

#### ⚙️ [booking_engine](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/booking_engine.json)
- **Percorso File**: `SiteBoS-App-Hook\Telegram_customerBot\booking_engine.json`
- **ID Workflow**: `x4BuftUEkjn67QAu`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `0a62e876-7bb1-4d74-a8bc-a8828606a0e7`

#### ⚙️ [telegramUser_@customerbot](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegramUser_@customerbot.json)
- **Percorso File**: `SiteBoS-App-Hook\Telegram_customerBot\telegramUser_@customerbot.json`
- **ID Workflow**: `zSaxay9LieuBlGP3`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `g_PRO_DET_`, `re_start`, `u_CALC`, `g_CCall`, `g_CCare`, `u_RESET_SESSION`, `g_SER_DET_`, `m_c_start`, `g_SER`, `g_PRO`, `u_TOGGLE_OFFERS`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `active_sessions`, Operazione: `aggregate` (Credenziale: `Telegram_owner_bot`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'Tlgm_bot NplGate'` (ID: `{'__rl': True, 'value': '5gd6YujFW82uNOZC', 'mode': 'list', 'cachedResultUrl': '/workflow/5gd6YujFW82uNOZC', 'cachedResultName': 'Tlgm_bot NplGate'}`, Origine: ``)

#### ⚙️ [telegram_customerBot](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/Telegram_customerBot/telegram_customerBot.json)
- **Percorso File**: `SiteBoS-App-Hook\Telegram_customerBot\telegram_customerBot.json`
- **ID Workflow**: `E87mNulHplu4Nmcl`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `8eb69e84-d20d-486e-a70e-9acf31c3da9e`
- **Azioni gestite (Switch)**: `=submit_ticket`, `u_calc`, `get_bot_config`, `=m_vault_activate_commit`, `handover`, `=save_bot_config`, `m_vault_accept_terms`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'telegramUser_customebot'` (ID: `{'__rl': True, 'value': 'zSaxay9LieuBlGP3', 'mode': 'list', 'cachedResultUrl': '/workflow/zSaxay9LieuBlGP3', 'cachedResultName': 'telegramUser_@customerbot'}`, Origine: ``)
  - `Call 'ecommerce'` (ID: `{'__rl': True, 'value': 'jnH1bR1I5w25S3aw', 'mode': 'list', 'cachedResultUrl': '/workflow/jnH1bR1I5w25S3aw', 'cachedResultName': 'Commerce_Engine'}`, Origine: ``)
  - `Call 'Standard_AcCredit'` (ID: `{'__rl': True, 'value': '4O56BKsRFw321LD7', 'mode': 'list', 'cachedResultUrl': '/workflow/4O56BKsRFw321LD7', 'cachedResultName': 'Standard_AcCredit'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)

### Directory: `SiteBoS-App-Hook\catalog`

#### ⚙️ [Advanced_processor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/Advanced_processor.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\Advanced_processor.json`
- **ID Workflow**: `MFftsv83zKI1t3HV`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `6333dff0-d886-499c-8000-f3e0266845ed`
- **Azioni gestite (Switch)**: `RECALCULATE_ADVISORY`, `SAVE`, `GENERATE_ADVANCED_DRAFT`, `GET`, `dental`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `compliance_docs`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `advanced`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `advanced`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
- **Workflow figli richiamati**:
  - `Call 'Dental_Advanced_processor'` (ID: `{'__rl': True, 'value': 'KpUUW85wzBsnT9jZ', 'mode': 'list', 'cachedResultUrl': '/workflow/KpUUW85wzBsnT9jZ', 'cachedResultName': 'Dental_Advanced_processor'}`, Origine: ``)
  - `Call 'General_Advanced_processor'` (ID: `{'__rl': True, 'value': 'XODXIDcdDHY0zmvl', 'mode': 'list', 'cachedResultUrl': '/workflow/XODXIDcdDHY0zmvl', 'cachedResultName': 'General_Advanced_processor'}`, Origine: ``)
  - `Call Gemini Rec` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'geminiCall'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [Dental_Advanced_processor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/Dental_Advanced_processor.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\Dental_Advanced_processor.json`
- **ID Workflow**: `KpUUW85wzBsnT9jZ`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `advanced_service_catalog_step`, Operazione: `delete` (Credenziale: `AssetLake`)
- **Workflow figli richiamati**:
  - `Call GeminiExSup` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call GeminiBoM` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call GeminiExBOM` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Serch_Official_KPI` (ID: `{'__rl': True, 'value': '9lGMYeT0qbY7cCUa', 'mode': 'list', 'cachedResultUrl': '/workflow/9lGMYeT0qbY7cCUa', 'cachedResultName': 'Gemini_Step_CallerSerch'}`, Origine: ``)
  - `Call Gemini Reconciler` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call SerchSupplyer` (ID: `{'__rl': True, 'value': 'aR9B9WOdhjcJcUS7', 'mode': 'list', 'cachedResultUrl': '/workflow/aR9B9WOdhjcJcUS7', 'cachedResultName': 'Gemini_Step_CallerMaps'}`, Origine: ``)
  - `Call Supply_Price` (ID: `{'__rl': True, 'value': '9lGMYeT0qbY7cCUa', 'mode': 'list', 'cachedResultUrl': '/workflow/9lGMYeT0qbY7cCUa', 'cachedResultName': 'Gemini_Step_CallerSerch'}`, Origine: ``)
  - `Call Gemini ParseSuppliers` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call Gemini Location` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call Gemini Asset` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call Gemini Orchestra` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call Serch Competitor` (ID: `{'__rl': True, 'value': 'aR9B9WOdhjcJcUS7', 'mode': 'list', 'cachedResultUrl': '/workflow/aR9B9WOdhjcJcUS7', 'cachedResultName': 'Gemini_Step_CallerMaps'}`, Origine: ``)
  - `Call Gemini Fiscal` (ID: `{'__rl': True, 'value': '9lGMYeT0qbY7cCUa', 'mode': 'list', 'cachedResultUrl': '/workflow/9lGMYeT0qbY7cCUa', 'cachedResultName': 'Gemini_Step_CallerSerch'}`, Origine: ``)
  - `Call Gemini Qualitative` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call Gemini FinancialRefiner` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)

#### ⚙️ [General_Advanced_processor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/General_Advanced_processor.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\General_Advanced_processor.json`
- **ID Workflow**: `XODXIDcdDHY0zmvl`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `advanced_service_catalog_step`, Operazione: `delete` (Credenziale: `AssetLake`)
- **Workflow figli richiamati**:
  - `Call GeminiExSup` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call GeminiBoM` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call GeminiExBOM` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Serch_Official_KPI` (ID: `{'__rl': True, 'value': '9lGMYeT0qbY7cCUa', 'mode': 'list', 'cachedResultUrl': '/workflow/9lGMYeT0qbY7cCUa', 'cachedResultName': 'Gemini_Step_CallerSerch'}`, Origine: ``)
  - `Call Gemini Reconciler` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call SerchSupplyer` (ID: `{'__rl': True, 'value': 'aR9B9WOdhjcJcUS7', 'mode': 'list', 'cachedResultUrl': '/workflow/aR9B9WOdhjcJcUS7', 'cachedResultName': 'Gemini_Step_CallerMaps'}`, Origine: ``)
  - `Call Supply_Price` (ID: `{'__rl': True, 'value': '9lGMYeT0qbY7cCUa', 'mode': 'list', 'cachedResultUrl': '/workflow/9lGMYeT0qbY7cCUa', 'cachedResultName': 'Gemini_Step_CallerSerch'}`, Origine: ``)
  - `Call Gemini ParseSuppliers` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call Gemini Location` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call Gemini Asset` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call Gemini Orchestra` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call Serch Competitor` (ID: `{'__rl': True, 'value': 'aR9B9WOdhjcJcUS7', 'mode': 'list', 'cachedResultUrl': '/workflow/aR9B9WOdhjcJcUS7', 'cachedResultName': 'Gemini_Step_CallerMaps'}`, Origine: ``)
  - `Call Gemini Fiscal` (ID: `{'__rl': True, 'value': '9lGMYeT0qbY7cCUa', 'mode': 'list', 'cachedResultUrl': '/workflow/9lGMYeT0qbY7cCUa', 'cachedResultName': 'Gemini_Step_CallerSerch'}`, Origine: ``)
  - `Call Gemini Qualitative` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)
  - `Call Gemini FinancialRefiner` (ID: `{'__rl': True, 'value': 'ZcpZo5vqVB6TFgc8', 'mode': 'list', 'cachedResultUrl': '/workflow/ZcpZo5vqVB6TFgc8', 'cachedResultName': 'Gemini_Step_Caller'}`, Origine: ``)

#### ⚙️ [analize_evidence](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/analize_evidence.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\analize_evidence.json`
- **ID Workflow**: `QQksskE7M7LzKkd9`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `SKIP`, `FILE`, `TEXT`, `SIGNATURE`, `VISION`
- **Operazioni MongoDB**:
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `compliance_docs`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `GeminiCallCert` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)

#### ⚙️ [certificator_hub](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/certificator_hub.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\certificator_hub.json`
- **ID Workflow**: `4zPxQjpx744YGtDn`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `6f0037a3-3f47-49af-bfa2-0e40a05e49bf`
- **Azioni gestite (Switch)**: `SAVE_CERT_FINISH`, `SAVE`, `SAVE_LOG_STEP`, `GET`, `SAVE_CERT_UPDATE`, `GET_CERT_STATE`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `evidence_docs`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `evidence_docs`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `evidence_docs`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `evidence_docs`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'analize_evidence'` (ID: `{'__rl': True, 'value': 'QQksskE7M7LzKkd9', 'mode': 'list', 'cachedResultUrl': '/workflow/QQksskE7M7LzKkd9', 'cachedResultName': 'analize_evidence'}`, Origine: ``)
  - `Call 'analize_evidence'1` (ID: `{'__rl': True, 'value': 'QQksskE7M7LzKkd9', 'mode': 'list', 'cachedResultUrl': '/workflow/QQksskE7M7LzKkd9', 'cachedResultName': 'analize_evidence'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [editBlueprint](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editBlueprint.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\editBlueprint.json`
- **ID Workflow**: `wHxmJQJABLFLqLo2`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `e742c7c8-107e-4328-882e-c13459413424`
- **Azioni gestite (Switch)**: `SAVE`, `COMPLIANCE_CHECK`, `GET`
- **Operazioni MongoDB**:
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
- **Workflow figli richiamati**:
  - `Call 'geminiCall'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call GoogleSerch - Compliance` (ID: `{'__rl': True, 'value': 'i6kSWyKrKQytzwQlFs92T', 'mode': 'list', 'cachedResultUrl': '/workflow/i6kSWyKrKQytzwQlFs92T', 'cachedResultName': 'GeminiGoogleSerch'}`, Origine: ``)
  - `Call 'geminiCall'1` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)

#### ⚙️ [editProduct](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/editProduct.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\editProduct.json`
- **ID Workflow**: `cbmkIcfgWhcTBPYt`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `2c6416b1-32c6-4661-bd8f-b175d24fd035`
- **Operazioni MongoDB**:
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'geminiCall'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)

#### ⚙️ [newProduct](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/newProduct.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\newProduct.json`
- **ID Workflow**: `7Cp0fW2um6mCy2AR`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `31f89350-4d7f-44b7-9aaf-e7d9e3655b6c`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'Gemini'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)

#### ⚙️ [product_category](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/product_category.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\product_category.json`
- **ID Workflow**: `zDWz2YPW5dDEldcz`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `5e225cf6-76bb-4e19-8657-35cac49fd399`
- **Operazioni MongoDB**:
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'GeminiCall'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'GoogleSerch'` (ID: `{'__rl': True, 'value': 'i6kSWyKrKQytzwQlFs92T', 'mode': 'list', 'cachedResultUrl': '/workflow/i6kSWyKrKQytzwQlFs92T', 'cachedResultName': 'GeminiGoogleSerch'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)

#### ⚙️ [saveCategory](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/saveCategory.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\saveCategory.json`
- **ID Workflow**: `LKHXtqBfDq73Bq2m`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `7da6f424-dc2a-4476-a0bd-a3bfd21270fb`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)

#### ⚙️ [saveProduct_processor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/saveProduct_processor.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\saveProduct_processor.json`
- **ID Workflow**: `q89w7G5LlTHKyACV`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `20fd95c0-4218-400e-ae2a-cd881a757b80`
- **Workflow figli richiamati**:
  - `Call 'GeminiCall'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call GoogleSerch - Compliance` (ID: `{'__rl': True, 'value': 'i6kSWyKrKQytzwQlFs92T', 'mode': 'list', 'cachedResultUrl': '/workflow/i6kSWyKrKQytzwQlFs92T', 'cachedResultName': 'GeminiGoogleSerch'}`, Origine: ``)
  - `Call GoogleSerch - MarketAnalisys` (ID: `{'__rl': True, 'value': 'i6kSWyKrKQytzwQlFs92T', 'mode': 'list', 'cachedResultUrl': '/workflow/i6kSWyKrKQytzwQlFs92T', 'cachedResultName': 'GeminiGoogleSerch'}`, Origine: ``)
  - `Call GeminiCall` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'saveProduct_processor_init'` (ID: `{'__rl': True, 'value': 'RxcwXGoI6270owQK', 'mode': 'list', 'cachedResultUrl': '/workflow/RxcwXGoI6270owQK', 'cachedResultName': 'saveProduct_processor_init'}`, Origine: ``)
  - `Call 'Standard_AcCredit'` (ID: `{'__rl': True, 'value': '4O56BKsRFw321LD7', 'mode': 'list', 'cachedResultUrl': '/workflow/4O56BKsRFw321LD7', 'cachedResultName': 'Standard_AcCredit'}`, Origine: ``)

#### ⚙️ [saveProduct_processor_init](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/saveProduct_processor_init.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\saveProduct_processor_init.json`
- **ID Workflow**: `RxcwXGoI6270owQK`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [service_catalog](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/catalog/service_catalog.json)
- **Percorso File**: `SiteBoS-App-Hook\catalog\service_catalog.json`
- **ID Workflow**: `39pEmUduCYQizh6F`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `0fff7fa2-bcb2-4b50-a26b-589b7054952e`
- **Azioni gestite (Switch)**: `delete_category`, `update_category`, `get_catalog`, `delete_product`, `get_ghost_info`, `update_product`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `website_board`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `social_posts`, Operazione: `aggregate` (Credenziale: `AssetLake`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

### Directory: `SiteBoS-App-Hook\dashboard`

#### ⚙️ [dashboard](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard.json)
- **Percorso File**: `SiteBoS-App-Hook\dashboard\dashboard.json`
- **ID Workflow**: `pgSNlVJF2Qxy74g5`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `ef4aece4-9ec0-4026-a7a7-328562bcbdf6`
- **Azioni gestite (Switch)**: `confirm_activation_certifier`, `open_agent_control_center`, `certificator`, `m_mkt`, `agent_selection`, `open_blueprint_build_`, `get_active`, `tm_menu`, `m_assets`, `confirm_blueprint_build`, `activate_certifier`, `int_`, `ge_si=`, `m_team`, `ge_close`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'dashboard_assetManager'` (ID: `{'__rl': True, 'value': '2YcTIjCOBtVveIjAludJQ', 'mode': 'list', 'cachedResultUrl': '/workflow/2YcTIjCOBtVveIjAludJQ', 'cachedResultName': 'dashboard_assetManager'}`, Origine: ``)
  - `Call 'dashboard_teamManager'` (ID: `{'__rl': True, 'value': 'mxcpAv5DPKtCPcHPbzCNF', 'mode': 'list', 'cachedResultUrl': '/workflow/mxcpAv5DPKtCPcHPbzCNF', 'cachedResultName': 'dashboard_teamManager'}`, Origine: ``)
  - `Call 'dashboard_confirmCert'` (ID: `{'__rl': True, 'value': 'tDDmAQ45WRWWyM9T', 'mode': 'list', 'cachedResultUrl': '/workflow/tDDmAQ45WRWWyM9T', 'cachedResultName': 'dashboard_confirmCert'}`, Origine: ``)
  - `Call 'dashboard_getSOP'` (ID: `{'__rl': True, 'value': 'vT4ngm8nky0V8pgE', 'mode': 'list', 'cachedResultUrl': '/workflow/vT4ngm8nky0V8pgE', 'cachedResultName': 'dashboard_getSOP'}`, Origine: ``)
  - `Call 'dashboard_confirmBlueprintbuild'` (ID: `{'__rl': True, 'value': 'ogVN4IpYgn0ib5Et', 'mode': 'list', 'cachedResultUrl': '/workflow/ogVN4IpYgn0ib5Et', 'cachedResultName': 'dashboard_confirmBlueprintbuild'}`, Origine: ``)
  - `Call 'dashboard_certFromButton'` (ID: `{'__rl': True, 'value': 'nHVfm7OMLZRI5813', 'mode': 'list', 'cachedResultUrl': '/workflow/nHVfm7OMLZRI5813', 'cachedResultName': 'dashboard_certFromButton'}`, Origine: ``)
  - `Call 'dashboard_cert'` (ID: `{'__rl': True, 'value': 'VCKvEMTrlpHiO4Pw', 'mode': 'list', 'cachedResultUrl': '/workflow/VCKvEMTrlpHiO4Pw', 'cachedResultName': 'dashboard_cert'}`, Origine: ``)
  - `Call Marketing` (ID: `{'__rl': True, 'value': 'bKMOCD059KqYmAkD', 'mode': 'list', 'cachedResultUrl': '/workflow/bKMOCD059KqYmAkD', 'cachedResultName': 'dashboard_marketingBroadcast'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)

#### ⚙️ [dashboard_cert](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard_cert.json)
- **Percorso File**: `SiteBoS-App-Hook\dashboard\dashboard_cert.json`
- **ID Workflow**: `VCKvEMTrlpHiO4Pw`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `SIGNATURE`, `FILE`, `VISION`, `TEXT`
- **Operazioni MongoDB**:
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `compliance_docs`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `GeminiCallCert` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'dashboard_certFromApp'` (ID: `{'__rl': True, 'value': 'YcqSQFWjr6eieC4u', 'mode': 'list', 'cachedResultUrl': '/workflow/YcqSQFWjr6eieC4u', 'cachedResultName': 'dashboard_certFromApp'}`, Origine: ``)

#### ⚙️ [dashboard_certFromApp](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard_certFromApp.json)
- **Percorso File**: `SiteBoS-App-Hook\dashboard\dashboard_certFromApp.json`
- **ID Workflow**: `YcqSQFWjr6eieC4u`
- **Stato**: `Attivo`

#### ⚙️ [dashboard_certFromButton](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard_certFromButton.json)
- **Percorso File**: `SiteBoS-App-Hook\dashboard\dashboard_certFromButton.json`
- **ID Workflow**: `nHVfm7OMLZRI5813`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)

#### ⚙️ [dashboard_confirmAssistant](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard_confirmAssistant.json)
- **Percorso File**: `SiteBoS-App-Hook\dashboard\dashboard_confirmAssistant.json`
- **ID Workflow**: `VRM5XUYi0Ztw4Hyj`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)

#### ⚙️ [dashboard_confirmBlueprintbuild](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard_confirmBlueprintbuild.json)
- **Percorso File**: `SiteBoS-App-Hook\dashboard\dashboard_confirmBlueprintbuild.json`
- **ID Workflow**: `ogVN4IpYgn0ib5Et`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
- **Workflow figli richiamati**:
  - `Call 'newProduct'` (ID: `{'__rl': True, 'value': '7Cp0fW2um6mCy2AR', 'mode': 'list', 'cachedResultUrl': '/workflow/7Cp0fW2um6mCy2AR', 'cachedResultName': 'newProduct'}`, Origine: ``)
  - `Call 'saveProduct_processor'` (ID: `{'__rl': True, 'value': 'q89w7G5LlTHKyACV', 'mode': 'list', 'cachedResultUrl': '/workflow/q89w7G5LlTHKyACV', 'cachedResultName': 'saveProduct_processor'}`, Origine: ``)

#### ⚙️ [dashboard_confirmCert](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard_confirmCert.json)
- **Percorso File**: `SiteBoS-App-Hook\dashboard\dashboard_confirmCert.json`
- **ID Workflow**: `tDDmAQ45WRWWyM9T`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)

#### ⚙️ [dashboard_getSOP](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard_getSOP.json)
- **Percorso File**: `SiteBoS-App-Hook\dashboard\dashboard_getSOP.json`
- **ID Workflow**: `vT4ngm8nky0V8pgE`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)

#### ⚙️ [dashboard_marketingBroadcast](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard_marketingBroadcast.json)
- **Percorso File**: `SiteBoS-App-Hook\dashboard\dashboard_marketingBroadcast.json`
- **ID Workflow**: `bKMOCD059KqYmAkD`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `_f_`, `vid`, `forgeMS`, `m_mkt_ms_menu`, `forge`, `sap`, `_i_`, `m_mkt_id_`, `_l_`, `broad`, `m_mkt_mac_`, `m_mkt_ask_`, `_t_`, `m_mkt`, `_r_`, `m_mkt_do_`, `post`, `m_mkt_list_`, `_x_`
- **Operazioni MongoDB**:
  - Collezione: `website_board`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `social_posts`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `social_posts`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `website_board`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'honeypot_blog'` (ID: `{'__rl': True, 'value': 'hmHqc3dPQaaGYX43', 'mode': 'list', 'cachedResultUrl': '/workflow/hmHqc3dPQaaGYX43', 'cachedResultName': 'deploy_minisite'}`, Origine: ``)
  - `Call 'ConfirmBlueprintBuild'` (ID: `{'__rl': True, 'value': 'ogVN4IpYgn0ib5Et', 'mode': 'list', 'cachedResultUrl': '/workflow/ogVN4IpYgn0ib5Et', 'cachedResultName': 'dashboard_confirmBlueprintbuild'}`, Origine: ``)
  - `Call 'createPost'` (ID: `{'__rl': True, 'value': 'kWgIENWVFYhK5OAq', 'mode': 'list', 'cachedResultUrl': '/workflow/kWgIENWVFYhK5OAq', 'cachedResultName': 'createPost'}`, Origine: ``)
  - `Call 'videoProd'` (ID: `{'__rl': True, 'value': 'o1ZVxgbMsq7uAVuA', 'mode': 'list', 'cachedResultUrl': '/workflow/o1ZVxgbMsq7uAVuA', 'cachedResultName': 'videoProd'}`, Origine: ``)
  - `Call 'broadcast_Tbot'` (ID: `{'__rl': True, 'value': 'M98xrtEUElevHTIJ', 'mode': 'list', 'cachedResultUrl': '/workflow/M98xrtEUElevHTIJ', 'cachedResultName': 'broadcast_@Tlgm_bot'}`, Origine: ``)
  - `Call 'deploy_blog_create'` (ID: `{'__rl': True, 'value': '5oxVy3V0tOmDihKE', 'mode': 'list', 'cachedResultUrl': '/workflow/5oxVy3V0tOmDihKE', 'cachedResultName': 'deploy_blog_create'}`, Origine: ``)

#### ⚙️ [dashboard_teamManager](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/dashboard/dashboard_teamManager.json)
- **Percorso File**: `SiteBoS-App-Hook\dashboard\dashboard_teamManager.json`
- **ID Workflow**: `mxcpAv5DPKtCPcHPbzCNF`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `m_team_invite_`, `m_team_add_commit`, `m_team_add`, `m_team`, `m_team_del_`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)

### Directory: `SiteBoS-App-Hook\knowledge_Marketing`

#### ⚙️ [Comunication_hub](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/Comunication_hub.json)
- **Percorso File**: `SiteBoS-App-Hook\knowledge_Marketing\Comunication_hub.json`
- **ID Workflow**: `i8NzKU5ka21w1VUy`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `f9ff7847-db13-41eb-bc27-216c6a732aca`
- **Azioni gestite (Switch)**: `get_handover_details`, `handover`, `get_support_inbox`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `active_sessions`, Operazione: `` (Credenziale: `Telegram_owner_bot`)
  - Collezione: `active_sessions`, Operazione: `aggregate` (Credenziale: `Telegram_owner_bot`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `orders`, Operazione: `` (Credenziale: `MemoryManager`)
  - Collezione: `active_sessions`, Operazione: `update` (Credenziale: `Telegram_owner_bot`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [broadcast_@Tlgm_bot](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/broadcast_@Tlgm_bot.json)
- **Percorso File**: `SiteBoS-App-Hook\knowledge_Marketing\broadcast_@Tlgm_bot.json`
- **ID Workflow**: `M98xrtEUElevHTIJ`
- **Stato**: `Attivo`

#### ⚙️ [createPost](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/createPost.json)
- **Percorso File**: `SiteBoS-App-Hook\knowledge_Marketing\createPost.json`
- **ID Workflow**: `kWgIENWVFYhK5OAq`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `8fc050ca-41cd-4469-989c-269a113a00f9`
- **Operazioni MongoDB**:
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'GeminiCallPrompt'1` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'Standard_AcCredit'` (ID: `{'__rl': True, 'value': '4O56BKsRFw321LD7', 'mode': 'list', 'cachedResultUrl': '/workflow/4O56BKsRFw321LD7', 'cachedResultName': 'Standard_AcCredit'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [deploy_blog](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/deploy_blog.json)
- **Percorso File**: `SiteBoS-App-Hook\knowledge_Marketing\deploy_blog.json`
- **ID Workflow**: `ZJSzbXBZyRyTpuHr`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `914bd78e-8a41-46d7-8935-7eb73cbbae66`
- **Azioni gestite (Switch)**: `create`, `save_blog`, `publish_blog`, `get_blog`, `delete_blog`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `website_board`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'deploy_blog_create'` (ID: `{'__rl': True, 'value': '5oxVy3V0tOmDihKE', 'mode': 'list', 'cachedResultUrl': '/workflow/5oxVy3V0tOmDihKE', 'cachedResultName': 'deploy_blog_create'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [deploy_blog_create](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/deploy_blog_create.json)
- **Percorso File**: `SiteBoS-App-Hook\knowledge_Marketing\deploy_blog_create.json`
- **ID Workflow**: `5oxVy3V0tOmDihKE`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `process_blueprints`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `website_board`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call GeminiBlog` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call GeminiPrompt` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call GeminiHtml` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'Standard_AcCredit'` (ID: `{'__rl': True, 'value': '4O56BKsRFw321LD7', 'mode': 'list', 'cachedResultUrl': '/workflow/4O56BKsRFw321LD7', 'cachedResultName': 'Standard_AcCredit'}`, Origine: ``)

#### ⚙️ [deploy_minisite](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/deploy_minisite.json)
- **Percorso File**: `SiteBoS-App-Hook\knowledge_Marketing\deploy_minisite.json`
- **ID Workflow**: `hmHqc3dPQaaGYX43`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `website_board`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'GeminiCallPrompt'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'GeminiCallPrompt'1` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'Standard_AcCredit'` (ID: `{'__rl': True, 'value': '4O56BKsRFw321LD7', 'mode': 'list', 'cachedResultUrl': '/workflow/4O56BKsRFw321LD7', 'cachedResultName': 'Standard_AcCredit'}`, Origine: ``)

#### ⚙️ [edit_minisite](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/edit_minisite.json)
- **Percorso File**: `SiteBoS-App-Hook\knowledge_Marketing\edit_minisite.json`
- **ID Workflow**: `6RzrNoR84Q-mS4E0EkZi7`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `50891655-84c8-4213-90e8-26ebbc3d6c4c`
- **Azioni gestite (Switch)**: `PREVIEW_MINISITE`, `generate`, `PUBLISH_MINISITE`, `GET_MINISITE_DATA`, `REGENERATE_ASSET`
- **Operazioni MongoDB**:
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `website_board`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'deploy_minisite'` (ID: `{'__rl': True, 'value': 'hmHqc3dPQaaGYX43', 'mode': 'list', 'cachedResultUrl': '/workflow/hmHqc3dPQaaGYX43', 'cachedResultName': 'deploy_minisite'}`, Origine: ``)
  - `Call 'GeminiCallPrompt'1` (ID: `{'__rl': True, 'value': '0JycCgUdifzfoaJK', 'mode': 'list', 'cachedResultUrl': '/workflow/0JycCgUdifzfoaJK', 'cachedResultName': 'GeminiCallCertificator'}`, Origine: ``)
  - `Call 'Standard_AcCredit'` (ID: `{'__rl': True, 'value': '4O56BKsRFw321LD7', 'mode': 'list', 'cachedResultUrl': '/workflow/4O56BKsRFw321LD7', 'cachedResultName': 'Standard_AcCredit'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)

#### ⚙️ [knowledge](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/knowledge.json)
- **Percorso File**: `SiteBoS-App-Hook\knowledge_Marketing\knowledge.json`
- **ID Workflow**: `jdDceqLxTfzvLMz8`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `0ca76af1-8c02-47f4-a3a4-fd19ad495afe`
- **Azioni gestite (Switch)**: `save_kb`, `get_kb_details`, `get_kb`
- **Operazioni MongoDB**:
  - Collezione: `knowledge_fragments`, Operazione: `` (Credenziale: `AssetLake`)
  - Collezione: `knowledge_fragments`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `website_board`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `website_board`, Operazione: `` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)

#### ⚙️ [videoProd](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/knowledge_Marketing/videoProd.json)
- **Percorso File**: `SiteBoS-App-Hook\knowledge_Marketing\videoProd.json`
- **ID Workflow**: `o1ZVxgbMsq7uAVuA`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `7d09d946-95e6-4efa-baee-00c458c82e9e`
- **Operazioni MongoDB**:
  - Collezione: `social_posts`, Operazione: `aggregate` (Credenziale: `AssetLake`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'Standard_AcCredit'` (ID: `{'__rl': True, 'value': '4O56BKsRFw321LD7', 'mode': 'list', 'cachedResultUrl': '/workflow/4O56BKsRFw321LD7', 'cachedResultName': 'Standard_AcCredit'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

### Directory: `SiteBoS-App-Hook\operators`

#### ⚙️ [Telegram_teamAssistant](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/Telegram_teamAssistant.json)
- **Percorso File**: `SiteBoS-App-Hook\operators\Telegram_teamAssistant.json`
- **ID Workflow**: `iH3cymWHalb6rQ9Bk9e53`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `59114f1a-213c-44f5-a9a2-20c0ac7395dd`
- **Azioni gestite (Switch)**: `confirm_activation_certifier`, `open_agent_control_center`, `agent_selection`, `get_active`, `confirm_blueprint_build`, `activate_certifier`, `int_`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)

#### ⚙️ [operator_onboarding](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/operator_onboarding.json)
- **Percorso File**: `SiteBoS-App-Hook\operators\operator_onboarding.json`
- **ID Workflow**: `YMUa7y3iKmxSHwNJ`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `771638a1-7a79-4cb0-a36e-29b03901cc4a`
- **Azioni gestite (Switch)**: `get`, `parse_cv`, `verify_gemini_key`, `complete_onboarding`, `validate_invitation`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'GeminiCall'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)

#### ⚙️ [supervisor](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/supervisor.json)
- **Percorso File**: `SiteBoS-App-Hook\operators\supervisor.json`
- **ID Workflow**: `LurxAwoEi0cSzdGI`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `0cedacd4-f0d3-49b6-b113-fa503b5993f4`
- **Azioni gestite (Switch)**: `get_catalog`, `get_ghost_info`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [tasks](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/operators/tasks.json)
- **Percorso File**: `SiteBoS-App-Hook\operators\tasks.json`
- **ID Workflow**: `8mT1FXgIbJ324z8D`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `d253f855-ce1a-43ee-81aa-38fa11a9d639`
- **Azioni gestite (Switch)**: `get_project`, `get_catalog`, `get_tasks`, `check_customer`, `generate_quote`, `send_project_to_app`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `process_blueprints`, Operazione: `` (Credenziale: `MemoryManager`)
  - Collezione: `service_catalog`, Operazione: `` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `projects`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)

### Directory: `SiteBoS-App-Hook\teams`

#### ⚙️ [only_test](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/only_test.json)
- **Percorso File**: `SiteBoS-App-Hook\teams\only_test.json`
- **ID Workflow**: `oHM2uAWPYUBzP9XR`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `e34e22de-0725-4410-a882-75e87e359376`
- **Azioni gestite (Switch)**: `modulo1`, `get_analysis`, `gen_scenario`, `get_progress`, `track_video_completion`, `save_module`, `modulo3`, `modulo4`, `reset_scenario`, `modulo2`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `BeEmploy`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `BeEmploy`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `BeEmploy`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `BeEmploy`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `BeEmploy`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `BeEmploy`)
- **Workflow figli richiamati**:
  - `Call 'GeminiCall'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'GeminiCall'1` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'GeminiCall'2` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'GeminiCall'3` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
  - `Call 'GeminiCall'4` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)

#### ⚙️ [soft_skill_selector](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/soft_skill_selector.json)
- **Percorso File**: `SiteBoS-App-Hook\teams\soft_skill_selector.json`
- **ID Workflow**: `UJnb2IPiaqB8cwcK`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `80d663ea-be4b-4d42-8cc1-05f4ada52ced`
- **Azioni gestite (Switch)**: `modulo1`, `get_analysis`, `get_progress`, `track_video_completion`, `save_module`, `modulo3`, `modulo4`, `modulo2`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `honeypots`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Workflow figli richiamati**:
  - `Call 'TBoS_Serch&Think'1` (ID: `{'__rl': True, 'value': 'drtRj1F1hOdZXEgN', 'mode': 'list', 'cachedResultUrl': '/workflow/drtRj1F1hOdZXEgN', 'cachedResultName': 'TBoS_Serch&Think'}`, Origine: ``)
  - `Call 'TBoS_Serch&Think'2` (ID: `{'__rl': True, 'value': 'drtRj1F1hOdZXEgN', 'mode': 'list', 'cachedResultUrl': '/workflow/drtRj1F1hOdZXEgN', 'cachedResultName': 'TBoS_Serch&Think'}`, Origine: ``)
  - `Call 'GeminiCall'` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)
  - `Ash Decoder` (Decodifica e validazione token transazionale ash)
  - `telegram_validator` (Validazione firma CryptoJS di Telegram WebApp)

#### ⚙️ [team_manager](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS-App-Hook/teams/team_manager.json)
- **Percorso File**: `SiteBoS-App-Hook\teams\team_manager.json`
- **ID Workflow**: `s9cmoec3SwaFEaSL`
- **Stato**: `Attivo`
- **Endpoint Webhook pubblici esposti**:
  - Nome nodo: `Webhook`, Metodo: `POST`, Percorso: `502d2019-b5ee-4c9b-a14d-8d6545fbb05e`
- **Azioni gestite (Switch)**: `get_single_operator`, `get_team_data`
- **Operazioni MongoDB**:
  - Collezione: `owner_sessions`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
- **Misure di Sicurezza Implementate**:
  - `Autorize` (Controllo corrispondenza webhookUrl per bloccare scansioni esterne)

### Directory: `SiteBoS_Caller`

#### ⚙️ [GeminiCall](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS_Caller/GeminiCall.json)
- **Percorso File**: `SiteBoS_Caller\GeminiCall.json`
- **ID Workflow**: `Gllwt1kRS2qIgtg-USUnD`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `ECONNREFUSED`, `429`, `timeout`, `Expression failed`, `400`, `401`, `403`, `500`, `503`, `properties of undefined`, `ENOTFOUND`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `billing_buffers`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `billing_buffers`, Operazione: `aggregate` (Credenziale: `MemoryManager`)

#### ⚙️ [GeminiGoogleMaps](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS_Caller/GeminiGoogleMaps.json)
- **Percorso File**: `SiteBoS_Caller\GeminiGoogleMaps.json`
- **ID Workflow**: `2GeG8JG0V3kA9EyJ`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `ECONNREFUSED`, `429`, `timeout`, `Expression failed`, `400`, `401`, `403`, `500`, `503`, `properties of undefined`, `ENOTFOUND`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `billing_buffers`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `billing_buffers`, Operazione: `aggregate` (Credenziale: `MemoryManager`)

#### ⚙️ [GeminiGoogleSerch](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS_Caller/GeminiGoogleSerch.json)
- **Percorso File**: `SiteBoS_Caller\GeminiGoogleSerch.json`
- **ID Workflow**: `i6kSWyKrKQytzwQlFs92T`
- **Stato**: `Attivo`
- **Azioni gestite (Switch)**: `ECONNREFUSED`, `429`, `timeout`, `Expression failed`, `400`, `401`, `403`, `500`, `503`, `properties of undefined`, `ENOTFOUND`
- **Operazioni MongoDB**:
  - Collezione: `stakeholders`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `billing_buffers`, Operazione: `aggregate` (Credenziale: `MemoryManager`)
  - Collezione: `billing_buffers`, Operazione: `aggregate` (Credenziale: `MemoryManager`)

#### ⚙️ [Gemini_Step_Caller](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS_Caller/Gemini_Step_Caller.json)
- **Percorso File**: `SiteBoS_Caller\Gemini_Step_Caller.json`
- **ID Workflow**: `ZcpZo5vqVB6TFgc8`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `advanced_service_catalog_step`, Operazione: `aggregate` (Credenziale: `AssetLake`)
- **Workflow figli richiamati**:
  - `Call GeminiExSup2` (ID: `{'__rl': True, 'value': 'Gllwt1kRS2qIgtg-USUnD', 'mode': 'list', 'cachedResultUrl': '/workflow/Gllwt1kRS2qIgtg-USUnD', 'cachedResultName': 'GeminiCall'}`, Origine: ``)

#### ⚙️ [Gemini_Step_CallerMaps](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS_Caller/Gemini_Step_CallerMaps.json)
- **Percorso File**: `SiteBoS_Caller\Gemini_Step_CallerMaps.json`
- **ID Workflow**: `aR9B9WOdhjcJcUS7`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `advanced_service_catalog_step`, Operazione: `aggregate` (Credenziale: `AssetLake`)
- **Workflow figli richiamati**:
  - `Call GeminiExSup2` (ID: `{'__rl': True, 'value': '2GeG8JG0V3kA9EyJ', 'mode': 'list', 'cachedResultUrl': '/workflow/2GeG8JG0V3kA9EyJ', 'cachedResultName': 'GeminiGoogleMaps'}`, Origine: ``)

#### ⚙️ [Gemini_Step_CallerSerch](file:///c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/n8n_workflows/SiteBoS_Caller/Gemini_Step_CallerSerch.json)
- **Percorso File**: `SiteBoS_Caller\Gemini_Step_CallerSerch.json`
- **ID Workflow**: `9lGMYeT0qbY7cCUa`
- **Stato**: `Attivo`
- **Operazioni MongoDB**:
  - Collezione: `advanced_service_catalog_step`, Operazione: `aggregate` (Credenziale: `AssetLake`)
- **Workflow figli richiamati**:
  - `Call GeminiSerch` (ID: `{'__rl': True, 'value': 'i6kSWyKrKQytzwQlFs92T', 'mode': 'list', 'cachedResultUrl': '/workflow/i6kSWyKrKQytzwQlFs92T', 'cachedResultName': 'GeminiGoogleSerch'}`, Origine: ``)
