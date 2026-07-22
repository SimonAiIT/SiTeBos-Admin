import re

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\edit-advanced.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

for m in re.finditer(r"(fetch|action|loadedItem|currentData|owner_data|WEBHOOK_URL)", content, re.IGNORECASE):
    start = max(0, m.start() - 50)
    end = min(len(content), m.end() + 100)
    print(f"Match: {m.group()} -> Context: {repr(content[start:end])}")
