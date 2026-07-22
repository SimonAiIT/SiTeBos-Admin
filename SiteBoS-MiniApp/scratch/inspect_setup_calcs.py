import re

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\advanced-setup.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's search for calculations or formulas using financials mapping
for m in re.finditer(r"(financials|costo|ora|sedia|tariffa|calcolo|bep|break_even)", content, re.IGNORECASE):
    start = max(0, m.start() - 50)
    end = min(len(content), m.end() + 100)
    print(f"Match: {m.group()} -> Context: {repr(content[start:end])}")
