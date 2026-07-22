import re

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\advanced-setup.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's find occurrences of fetch or axios or webhook calls
for m in re.finditer(r"(fetch|WEBHOOK_URL|axios|save|draft|xmlhttp|ajax)", content, re.IGNORECASE):
    start = max(0, m.start() - 50)
    end = min(len(content), m.end() + 100)
    print(f"Match: {m.group()} -> Context: {repr(content[start:end])}")
