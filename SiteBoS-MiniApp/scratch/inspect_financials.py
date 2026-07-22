import json

def inspect_file(file_path):
    print(f"=== Inspecting {file_path} ===")
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    for node in data.get("nodes", []):
        params_str = json.dumps(node.get("parameters", {}))
        if "financials" in params_str:
            print(f"- Node: {node.get('name')} ({node.get('type')}) contains 'financials'")

inspect_file(r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows\SiteBoS-App-Hook\processor.json")
inspect_file(r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows\SiteBoS-App-Hook\advanced-setup.json")
