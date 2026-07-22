file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\advanced-setup.html"
with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "function checkManualFieldsFilled" in line:
        print(f"checkManualFieldsFilled starts at line {idx+1}")
    if "function populateFinancialsGrid" in line:
        print(f"populateFinancialsGrid starts at line {idx+1}")
