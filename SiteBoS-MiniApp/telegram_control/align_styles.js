const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/garof/Desktop/TrinAi/SiteBoS-MiniApp/telegram_control';

const universalCSS = `
/* SiteBoS Architect Alignment */
body { background-color: #fafafa !important; color: #000000 !important; }
.card, .section-card, .dark-card, .upload-box { 
    background: white !important; 
    border: 1px solid #eeeeee !important; 
    box-shadow: none !important; 
}
input:focus, textarea:focus, select:focus { 
    border-color: #000000 !important; 
    box-shadow: none !important; 
    outline: none !important;
}
.text-primary, .text-blue-500, .text-blue-600, .text-[#007bff] { color: #000000 !important; }
.bg-primary, .bg-blue-500, .bg-blue-600, .bg-[#007bff] { background-color: #000000 !important; color: #ffffff !important; }
.border-primary, .border-blue-500, .border-blue-600, .border-[#007bff] { border-color: #000000 !important; }
.spinner { border-top-color: #000 !important; }
input[type="checkbox"]:checked { background-color: #000 !important; border-color: #000 !important; }
/* Forza icone pesanti */
.fas, .far, .fal { font-weight: 900 !important; font-family: "Font Awesome 6 Free" !important; }
`;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // 1. Insert universal CSS
    if (!content.includes('/* SiteBoS Architect Alignment */')) {
        content = content.replace(/<style>/i, `<style>\n${universalCSS}\n`);
    }

    // 2. Regex replacements for Tailwind classes
    content = content.replace(/focus:border-blue-500/g, 'focus:border-black');
    content = content.replace(/focus:ring-blue-500/g, 'focus:ring-0');
    content = content.replace(/bg-blue-600/g, 'bg-black');
    content = content.replace(/bg-blue-500/g, 'bg-black');
    content = content.replace(/text-blue-500/g, 'text-black');
    content = content.replace(/border-blue-500/g, 'border-black');
    content = content.replace(/bg-\[\#007bff\]/g, 'bg-black');
    content = content.replace(/text-\[\#007bff\]/g, 'text-black');
    content = content.replace(/border-\[\#007bff\]/g, 'border-black');
    
    // 3. Icons
    content = content.replace(/far fa-/g, 'fas fa-');
    content = content.replace(/fal fa-/g, 'fas fa-');
    content = content.replace(/fat fa-/g, 'fas fa-');
    
    // 4. Shadows (Flat Look) - only remove if it's not a FAB/fixed. 
    // It's safer to let the universal CSS handle .card shadows, but we can replace some tailwind classes.
    content = content.replace(/shadow-lg/g, 'shadow-sm'); // Reduce shadows instead of breaking fab placement
    content = content.replace(/shadow-xl/g, 'shadow-sm');

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
    console.log(`Processed: ${file}`);
});
