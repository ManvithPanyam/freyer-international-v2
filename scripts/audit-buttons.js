const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (['node_modules', '.next', '.git', 'public'].includes(entry.name)) continue;
    if (entry.isDirectory()) {
      files = files.concat(walk(full));
    } else if (/\.(tsx|jsx)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const files = walk('.');
const results = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  // Let's do a multi-line scan or per-line scan
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Look for <button or <Link or <a with button-like patterns
    const isButton = /<button\b/i.test(line);
    const isPotentialButton = /<(Link|a)\b/i.test(line);

    if (isButton || isPotentialButton) {
      // Collect the full tag until > or max 15 lines
      let tagContent = '';
      let endLine = i;
      for (let j = i; j < Math.min(lines.length, i + 15); j++) {
        tagContent += lines[j] + ' ';
        if (lines[j].includes('>')) {
          endLine = j;
          break;
        }
      }

      // Check if it's styled as a button
      const hasButtonStyling = isButton || 
        tagContent.includes('bg-[#e1390f]') || 
        tagContent.includes('bg-[#c42f0b]') ||
        tagContent.includes('bg-white/[0.08]') ||
        tagContent.includes('bg-white/[0.05]') ||
        tagContent.includes('bg-white/10') ||
        tagContent.includes('btn') ||
        (tagContent.includes('rounded') && (tagContent.includes('px-') || tagContent.includes('py-')) && !tagContent.includes('rounded-full'));

      if (hasButtonStyling) {
        // Extract className
        let className = 'unknown';
        const classMatch = tagContent.match(/className=(?:\{`([^`]+)`\}|"([^"]+)"|'([^']+)'|\{([^\}]+)\})/);
        if (classMatch) {
          className = (classMatch[1] || classMatch[2] || classMatch[3] || classMatch[4] || '').trim();
        }

        results.push({
          file: file.replace(/\\/g, '/'),
          line: i + 1,
          tag: isButton ? 'button' : (/^<Link\b/.test(line.trim()) ? 'Link' : 'a'),
          className: className.replace(/\s+/g, ' ')
        });
      }
    }
  }
});

fs.writeFileSync('scripts/button-audit.json', JSON.stringify(results, null, 2));
console.log('Total button candidates identified:', results.length);
