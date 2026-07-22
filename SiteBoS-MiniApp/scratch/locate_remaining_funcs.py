import re

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\advanced-setup.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

for m in re.finditer(r"async function loadData|function renderOperators|function renderMachinery|function openOperatorDrawer|function saveOperatorFromDrawer|function openMachineryDrawer|function saveMachineryFromDrawer|function checkManualFieldsFilled|function refreshStep3UI|function initFinancialsInputsHTML|function populateFinancialsGrid|function updateFinancialsTotal|async function saveStepData|async function saveAndFinish", content):
    line_no = content[:m.start()].count('\n') + 1
    print(f"Method: {m.group()} starts at line {line_no}")
