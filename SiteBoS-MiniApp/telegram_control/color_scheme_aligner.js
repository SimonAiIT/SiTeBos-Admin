const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\garof\\Desktop\\TrinAi\\SiteBoS-MiniApp\\telegram_control';

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Allineamento <meta name="color-scheme" content="light">
    const metaRegex = /<meta\s+name=["']color-scheme["']\s+content=["'](.*?)["']\s*\/?>/i;
    const metaMatch = content.match(metaRegex);

    if (metaMatch) {
        if (metaMatch[1].toLowerCase() !== 'light') {
            content = content.replace(metaRegex, '<meta name="color-scheme" content="light">');
            modified = true;
            console.log(`[UPDATED META] ${filePath}`);
        }
    } else {
        const headRegex = /<head[^>]*>/i;
        if (headRegex.test(content)) {
            content = content.replace(headRegex, (match) => `${match}\n    <meta name="color-scheme" content="light">`);
            modified = true;
            console.log(`[ADDED META] ${filePath}`);
        }
    }

    // 2. Iniezione tg.setHeaderColor e tg.setBackgroundColor
    const initRegex = /(const|let|var)\s+tg\s*=\s*(window\.)?Telegram\.WebApp;?/g;
    if (initRegex.test(content)) {
        if (!content.includes('tg.setHeaderColor')) {
            content = content.replace(initRegex, (match) => {
                return `${match}\n        if (tg.setHeaderColor) tg.setHeaderColor('#ffffff');\n        if (tg.setBackgroundColor) tg.setBackgroundColor('#ffffff');`;
            });
            modified = true;
            console.log(`[INJECTED COLORS] ${filePath}`);
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
