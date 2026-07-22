import os
import json
import re

dir_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows"
tokens = {}

for root, dirs, files in os.walk(dir_path):
    for f in files:
        if f.endswith('.json'):
            fp = os.path.join(root, f)
            try:
                with open(fp, 'r', encoding='utf-8') as file:
                    data = json.load(file)
                    nodes = data.get('nodes', [])
                    if isinstance(nodes, list):
                        for node in nodes:
                            if node.get('type') == 'n8n-nodes-base.code':
                                js = node.get('parameters', {}).get('jsCode', '')
                                if 'BOT_TOKEN' in js or '_auth' in js:
                                    # Extract BOT_TOKEN declarations
                                    found = re.findall(r'BOT_TOKEN\s*=\s*["\']([^"\']+)["\']', js)
                                    for t in found:
                                        tokens[t] = tokens.get(t, []) + [f"{f} -> {node.get('name', '')}"]
                                    if 'owner_data' in js and 'bot_key' in js:
                                        tokens['dynamic (owner_data.bot_key)'] = tokens.get('dynamic (owner_data.bot_key)', []) + [f"{f} -> {node.get('name', '')}"]
            except Exception as e:
                pass

print(json.dumps(tokens, indent=2))
