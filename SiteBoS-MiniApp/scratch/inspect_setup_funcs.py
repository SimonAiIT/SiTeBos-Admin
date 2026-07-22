import re

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\advanced-setup.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# find all functions
funcs = re.findall(r"function\s+(\w+)\s*\(", content)
print("Functions in advanced-setup.html:")
for f in funcs:
    print(f"- {f}")
