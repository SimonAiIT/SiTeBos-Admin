import os
import json

dir_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows"
targets = [
  "advanced-setup.json",
  "dental-advanced-setup.json",
  "edit_owner.json",
  "Advanced_processor.json",
  "certificator_hub.json",
  "newProduct.json",
  "saveProduct_processor_init.json",
  "service_catalog.json",
  "dashboard.json",
  "intelligent_warehouse.json",
  "MarketAnalisy.json",
  "Comunication_hub.json",
  "createPost.json",
  "deploy_blog.json",
  "videoProd.json",
  "operator_onboarding.json",
  "supervisor.json",
  "only_test.json",
  "soft_skill_selector.json",
  "booking_engine.json",
  "telegram_customerBot.json",
  "Agenda-Manager.json"
]

results = {}

for name in targets:
    # Find file path
    found_path = None
    for root, dirs, files in os.walk(dir_path):
        if name in files:
            found_path = os.path.join(root, name)
            break
            
    if not found_path:
        continue
        
    try:
        with open(found_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            nodes = data.get('nodes', [])
            security_nodes = []
            for n in nodes:
                node_name = n.get('name', '')
                node_type = n.get('type', '')
                pos = n.get('position', [])
                if any(kw in node_name.lower() or kw in node_type.lower() for kw in ["validator", "ash", "decoder", "owner_data", "403", "forbidden"]):
                    security_nodes.append({
                        "name": node_name,
                        "type": node_type,
                        "position": pos
                    })
            results[name] = security_nodes
    except Exception as e:
        results[name] = str(e)

print(json.dumps(results, indent=2))
