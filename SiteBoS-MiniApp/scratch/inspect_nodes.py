import json

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows\SiteBoS-App-Hook\processor.json"
with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

for node in data.get("nodes", []):
    if node.get("name") == "Global_ID_Rewriter":
        print(json.dumps(node, indent=2, ensure_ascii=False)[:3000].encode('ascii', 'ignore').decode())
