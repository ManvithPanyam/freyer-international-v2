const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const fs = require('fs');

const VIEWPORTS = [
  { name: 'mobile-375x667', width: 375, height: 667 },
  { name: 'mobile-390x844', width: 390, height: 844 },
  { name: 'mobile-414x896', width: 414, height: 896 },
  { name: 'tablet-768x1024', width: 768, height: 1024 },
  { name: 'desktop-1280x800', width: 1280, height: 800 },
  { name: 'desktop-1440x900', width: 1440, height: 900 }
];

(async () => {
  console.log('Launching headless browser for QA screenshots and Axe audit...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3008/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1000));

  // 1. Run Axe-Core Audit
  console.log('Running Axe-Core Accessibility scan...');
  const axeResults = await new AxePuppeteer(page).analyze();
  console.log(`Axe Violations Found: ${axeResults.violations.length}`);
  fs.writeFileSync('docs/qa-screenshots/axe-results.json', JSON.stringify(axeResults.violations, null, 2));

  // 2. Capture Viewport Screenshots
  for (const vp of VIEWPORTS) {
    console.log(`Capturing ${vp.name} (${vp.width}x${vp.height})...`);
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    await new Promise(r => setTimeout(r, 500));
    
    // Above the fold
    await page.screenshot({
      path: `docs/qa-screenshots/homepage-${vp.name}-fold.png`,
      fullPage: false
    });

    // Full page
    await page.screenshot({
      path: `docs/qa-screenshots/homepage-${vp.name}-full.png`,
      fullPage: true
    });
  }

  await browser.close();
  console.log('All QA screenshots and accessibility data saved to docs/qa-screenshots/');
})();
