import os
import json

dir_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows"

# Target expression
unified_expression = """={{ 
  (() => {
    const userId = $json.body?.data?.owner_id || 
                   $json.body?.data?.chat_id || 
                   $json.body?.callback_query?.from?.id || 
                   $json.body?.message?.from?.id ||
                   $json.body?.owner_id ||
                   $json.user?.id ||
                   $json.ids?.owner_id ||
                   $json.owner_data?.chat_id;
                   
    // Array degli ID abilitati all'ambiente di test (GitHub Pages)
    const testers = ["2041408875", "8305126267"];
                   
    return testers.includes(String(userId)) \n      ? "https://trinaibusinessoperatingsystem.github.io/SiteBoS-MiniApp/telegram_control/" \n      : "https://telegram.trinai.it/";
  })()
}}"""

updated_files = []

for root, dirs, files in os.walk(dir_path):
    for f in files:
        if f.endswith('.json'):
            fp = os.path.join(root, f)
            try:
                modified = False
                with open(fp, 'r', encoding='utf-8') as file:
                    data = json.load(file)
                
                nodes = data.get('nodes', [])
                if isinstance(nodes, list):
                    for node in nodes:
                        if node.get('name') == 'appUrl' and node.get('type') == 'n8n-nodes-base.set':
                            # Found appUrl node, update urlMiniApp value
                            assignments = node.get('parameters', {}).get('assignments', {}).get('assignments', [])
                            for assignment in assignments:
                                if assignment.get('name') == 'urlMiniApp':
                                    assignment['value'] = unified_expression
                                    modified = True
                
                if modified:
                    with open(fp, 'w', encoding='utf-8') as file:
                        json.dump(data, file, indent=2)
                    updated_files.append(f)
            except Exception as e:
                print(f"Error in {f}: {e}")

print("Updated appUrl expression in files:")
print(json.dumps(updated_files, indent=2))
