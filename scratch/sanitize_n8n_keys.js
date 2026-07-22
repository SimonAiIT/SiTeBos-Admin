const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

const targetDir = path.join(__dirname, '..', 'n8n_workflow');

let updatedCount = 0;
walkDir(targetDir, (filePath) => {
    if (filePath.endsWith('.json')) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('AIzaSy')) {
            // Replace hardcoded AIzaSy keys with placeholder
            let cleaned = content.replace(/AIzaSy[A-Za-z0-9_\-]{30,60}/g, 'YOUR_GEMINI_API_KEY');
            fs.writeFileSync(filePath, cleaned, 'utf8');
            console.log(`Pulito: ${filePath}`);
            updatedCount++;
        }
    }
});

console.log(`Finito! Sanitizzati ${updatedCount} file JSON di n8n_workflow.`);
