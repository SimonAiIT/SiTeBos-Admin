import json

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows\SiteBoS-App-Hook\processor.json"
with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

for node in data.get("nodes", []):
    name = node.get("name", "")
    ntype = node.get("type", "")
    name_l = name.lower()
    if "tassionomy" in name_l or "label" in name_l or "catalog" in name_l or "honeypot" in name_l:
        print(f"- Node: {name} ({ntype})")
