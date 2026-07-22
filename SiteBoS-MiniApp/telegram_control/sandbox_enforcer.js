const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\garof\\Desktop\\TrinAi\\SiteBoS-MiniApp\\telegram_control';

const iifeBlock = `(function() {
    // Riferimento locale e temporaneo all'SDK per il controllo iniziale
    const tempTg = window.Telegram?.WebApp;
    const isTelegramSession = tempTg && tempTg.initData && tempTg.initData !== "" && tempTg.platform !== "unknown";

    if (!isTelegramSession) {
        const currentPath = window.location.pathname;
        let redirectPath = "index.html";

        if (currentPath.includes('/telegram_control/')) {
            const parts = currentPath.split('/telegram_control/');
            const subPath = parts[1] || '';
            if (subPath.includes('/')) {
                redirectPath = "../../index.html";
            } else {
                redirectPath = "../index.html";
            }
        }

        window.location.replace(redirectPath);
    }
})();`;

const oldBlockRegex = /\(function\(\)\s*\{\s*\/\/\s*Riferimento locale e temporaneo[\s\S]*?\}\)\(\);/g;

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    if (oldBlockRegex.test(content)) {
        // Se c'è già il vecchio blocco (con il bug dei commenti), lo sostituiamo
        content = content.replace(oldBlockRegex, iifeBlock);
        modified = true;
        console.log(`[FIXED OLD SANDBOX REDIRECT] ${filePath}`);
    } else if (!content.includes('isTelegramSession') && !content.includes('tempTg')) {
        // Se non c'è, lo iniettiamo a inizio del primo tag script in linea
        const scriptRegex = /<script(?![^>]*\bsrc\b)[^>]*>/i;
        if (scriptRegex.test(content)) {
            content = content.replace(scriptRegex, (match) => `${match}\n${iifeBlock}\n`);
            modified = true;
            console.log(`[INJECTED SANDBOX REDIRECT] ${filePath}`);
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

function traverse(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            traverse(fullPath);
        } else if (file.endsWith('.html')) {
            processFile(fullPath);
        }
    });
}

console.log(`Avvio elaborazione in: ${targetDir}`);
traverse(targetDir);
console.log("Elaborazione completata!");
