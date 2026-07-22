import os
import json

dir_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows"
targets = []

for root, dirs, files in os.walk(dir_path):
    for f in files:
        if f.endswith('.json'):
            fp = os.path.join(root, f)
            try:
                with open(fp, 'r', encoding='utf-8') as file:
                    data = json.load(file)
                    nodes = data.get('nodes', [])
                    if isinstance(nodes, list):
                        names = [n.get('name') for n in nodes]
                        has_ash = any("ash" in str(n).lower() for n in names)
                        has_val = any("validator" in str(n).lower() for n in names)
                        if has_ash and has_val:
                            targets.append(f)
            except Exception as e:
                pass

print("Workflows containing both ASH and Validator nodes:")
print(json.dumps(targets, indent=2))
