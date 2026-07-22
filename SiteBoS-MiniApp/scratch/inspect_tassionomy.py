import json

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows\SiteBoS-App-Hook\processor.json"
with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

for node in data.get("nodes", []):
    name = node.get("name")
    if name in ["Tassionomy", "Label", "Call 'GeminiCall' Labeling"]:
        print("====================================")
        print(f"NODE: {name} ({node.get('type')})")
        print("====================================")
        print(json.dumps(node.get("parameters", {}), indent=2, ensure_ascii=False)[:3000].encode('ascii', 'ignore').decode())
