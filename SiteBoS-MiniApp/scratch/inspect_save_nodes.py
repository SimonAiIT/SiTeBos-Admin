import json

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows\SiteBoS-App-Hook\processor.json"
with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

for node in data.get("nodes", []):
    if node.get("name") in ["service_catalog_setup", "owner1", "Edit Fields9", "Edit Fields8"]:
        print("====================================")
        print(f"NODE: {node.get('name')} ({node.get('type')})")
        print("====================================")
        print(json.dumps(node.get("parameters", {}), indent=2, ensure_ascii=False)[:3500].encode('ascii', 'ignore').decode())
