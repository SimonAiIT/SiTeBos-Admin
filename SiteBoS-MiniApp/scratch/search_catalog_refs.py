import os
import json

directory = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\n8n_workflows"
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(".json") or file.endswith(".md"):
            path = os.path.join(root, file)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                if "service_catalog_setup" in content:
                    print(f"Found in: {path}")
            except Exception as e:
                pass
