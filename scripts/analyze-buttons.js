const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('scripts/button-audit.json', 'utf8'));

// Filter out hamburger toggles (p-2 w-6 h-6 with no text or pure icon buttons) or map pins
const detailed = raw.map(item => {
  const cls = item.className;
  
  // Extract padding
  const pxMatch = cls.match(/\bpx-([^\s]+)/);
  const pyMatch = cls.match(/\bpy-([^\s]+)/);
  const pMatch = cls.match(/\bp-([^\s]+)/);
  const px = pxMatch ? pxMatch[0] : (pMatch ? pMatch[0] : '-');
  const py = pyMatch ? pyMatch[0] : (pMatch ? pMatch[0] : '-');

  // Font
  let font = 'system/inherit';
  if (cls.includes('font-mono')) font = 'font-mono';
  else if (cls.includes('font-sans') || cls.includes('font-poppins')) font = 'font-poppins';
  else if (cls.includes('font-display') || cls.includes('font-barlow-condensed')) font = 'Barlow Condensed';

  // Radius
  let radius = '4px (rounded)';
  if (cls.includes('rounded-lg')) radius = '8px (rounded-lg)';
  else if (cls.includes('rounded-xl')) radius = '12px (rounded-xl)';
  else if (cls.includes('rounded-2xl')) radius = '16px (rounded-2xl)';
  else if (cls.includes('rounded-full')) radius = 'full';
  else if (cls.includes('rounded-md')) radius = '6px (rounded-md)';
  else if (cls.includes('rounded-none')) radius = '0px';

  // Height estimation from py and text size
  let estimatedHeight = '36px';
  if (py === 'py-4' || py === 'py-3.5') estimatedHeight = '48px (lg)';
  else if (py === 'py-3' || py === 'py-2.5') estimatedHeight = '42px (md)';
  else if (py === 'py-2' || py === 'py-1.5') estimatedHeight = '36px (sm)';
  else if (py === 'py-1') estimatedHeight = '30px';

  // Context / Variant estimation
  let context = 'secondary';
  if (cls.includes('bg-[#e1390f]') || cls.includes('bg-[#c42f0b]')) {
    context = 'primary CTA';
  } else if (cls.includes('bg-white/[0.08]') || cls.includes('bg-white/[0.05]') || cls.includes('border-white') || cls.includes('border')) {
    context = 'secondary (outlined/glass)';
  } else if (cls.includes('bg-transparent') || cls.includes('hover:text-white')) {
    context = 'ghost / text';
  }

  return {
    file: item.file,
    line: item.line,
    tag: item.tag,
    classes: cls.length > 80 ? cls.substring(0, 77) + '...' : cls,
    height: estimatedHeight,
    radius,
    font,
    padding: `${px} ${py}`,
    context
  };
});

fs.writeFileSync('scripts/button-audit-detailed.json', JSON.stringify(detailed, null, 2));

console.log(`Generated detailed audit for ${detailed.length} instances.`);
