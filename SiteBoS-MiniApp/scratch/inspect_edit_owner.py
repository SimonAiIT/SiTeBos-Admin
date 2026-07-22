import json

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows\SiteBoS-App-Hook\edit_owner.json"
with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

print("Nodes in edit_owner.json:")
for node in data.get("nodes", []):
    print(f"- {node.get('name')} ({node.get('type')})")
