import re

file_path = r"c:\Users\garof\Desktop\TrinAi\SiteBoS-MiniApp\telegram_control\advanced-setup.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's find lines from saveStepData to loadData
m1 = re.search(r"async function saveStepData", content)
m2 = re.search(r"async function loadData", content)
if m1 and m2:
    print("=== saveStepData block ===")
    print(content[m1.start():m2.start()])

# Let's find lines from saveAndFinish to end of script (before </body>)
m3 = re.search(r"async function saveAndFinish", content)
if m3:
    print("=== saveAndFinish block ===")
    print(content[m3.start():m3.start()+1500])
