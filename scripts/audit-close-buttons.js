const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (['node_modules', '.next', '.git', 'public'].includes(entry.name)) continue;
    if (entry.isDirectory()) files = files.concat(walk(full));
    else if (/\.(tsx|jsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const files = walk('.');
const closeButtons = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('<button') && (line.includes('<X') || (lines[i+1] && lines[i+1].includes('<X')) || (lines[i+2] && lines[i+2].includes('<X')))) {
      let block = [lines[i], lines[i+1] || '', lines[i+2] || ''].join(' ');
      
      let classMatch = block.match(/className=(?:\{`([^`]+)`\}|"([^"]+)"|'([^']+)')/);
      let iconMatch = block.match(/<X\s+className=(?:\{`([^`]+)`\}|"([^"]+)"|'([^']+)')/);

      closeButtons.push({
        file: file.replace(/\\/g, '/'),
        line: i + 1,
        buttonClasses: classMatch ? (classMatch[1] || classMatch[2] || classMatch[3] || '').replace(/\s+/g, ' ').trim() : 'none',
        iconClasses: iconMatch ? (iconMatch[1] || iconMatch[2] || iconMatch[3] || '').replace(/\s+/g, ' ').trim() : 'w-4 h-4'
      });
    }
  }
});

fs.writeFileSync('scripts/close-buttons-audit.json', JSON.stringify(closeButtons, null, 2));
console.log('Found close button instances:', closeButtons.length);
