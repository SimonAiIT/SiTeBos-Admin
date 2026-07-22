file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\advanced-setup.html"
with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "function openMachineryDrawer" in line:
        print(f"openMachineryDrawer starts at line {idx+1}")
    if "function populateComboboxDropdown" in line:
        print(f"populateComboboxDropdown starts at line {idx+1}")
