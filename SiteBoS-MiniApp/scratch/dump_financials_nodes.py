import json

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows\SiteBoS-App-Hook\advanced-setup.json"
with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

nodes_to_dump = ["CalculateCapital", "CalculatePersone", "CalculateProfessionisti", "Edit Fields6", "Edit Fields7"]

for node in data.get("nodes", []):
    name = node.get("name")
    if name in nodes_to_dump:
        print("====================================")
        print(f"NODE: {name}")
        print("====================================")
        val = json.dumps(node.get("parameters", {}), indent=2, ensure_ascii=False)
        print(val.encode('ascii', 'ignore').decode()[:1500])
