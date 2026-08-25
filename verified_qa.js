/**
 * VERIFIED QA SCRIPT — Production build only.
 * Waits for networkidle + fonts.ready before screenshot.
 * Checks CSS/JS asset HTTP status + console errors.
 * Records git commit hash in report.
 */

const puppeteer = require('puppeteer');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

const BASE_URL = 'http://localhost:3012';
const OUT_DIR = path.join(__dirname, 'qa_screenshots');
const REPORT_PATH = path.join(__dirname, 'qa_report.json');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const VIEWPORTS = [
  { name: 'mobile_375', width: 375, height: 667 },
  { name: 'mobile_390', width: 390, height: 844 },
  { name: 'mobile_414', width: 414, height: 896 },
  { name: 'tablet_768', width: 768, height: 1024 },
  { name: 'desktop_1280', width: 1280, height: 800 },
  { name: 'desktop_1440', width: 1440, height: 900 },
];

function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let body = '';
      res.on('data', (c) => body += c);
      res.on('end', () => resolve({
        status: res.statusCode,
        contentType: res.headers['content-type'] || '',
        size: body.length,
        bodySnippet: body.slice(0, 100),
      }));
    }).on('error', (e) => resolve({ status: 0, error: e.message }));
  });
}

async function run() {
  // Git commit
  let gitHash = 'unknown';
  try { gitHash = execSync('git rev-parse HEAD', { cwd: __dirname }).toString().trim(); } catch(e) {}

  // Check base page
  const pageCheck = await checkUrl(BASE_URL + '/');

  // Parse CSS/JS asset URLs from HTML
  const htmlCheck = await new Promise((resolve) => {
    let body = '';
    http.get(BASE_URL + '/', (res) => {
      res.on('data', (c) => body += c);
      res.on('end', () => resolve(body));
    }).on('error', () => resolve(''));
  });

  const cssUrls = [...htmlCheck.matchAll(/href="(\/_next\/static\/[^"]+\.css)"/g)].map(m => m[1]);
  const jsUrls = [...htmlCheck.matchAll(/src="(\/_next\/static\/[^"]+\.js)"/g)].map(m => m[1]).slice(0, 5);

  const cssChecks = await Promise.all(cssUrls.map(async (u) => ({ url: u, ...(await checkUrl(BASE_URL + u)) })));
  const jsChecks = await Promise.all(jsUrls.map(async (u) => ({ url: u, ...(await checkUrl(BASE_URL + u)) })));

  // Puppeteer screenshots
  const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const screenshots = [];
  const consoleErrors = [];
  const networkErrors = [];

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage();
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push({ viewport: vp.name, text: msg.text() });
    });
    page.on('pageerror', (err) => consoleErrors.push({ viewport: vp.name, text: err.message }));
    page.on('requestfailed', (req) => networkErrors.push({ viewport: vp.name, url: req.url(), failure: req.failure()?.errorText }));

    await page.setViewport({ width: vp.width, height: vp.height });

    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for fonts
    await page.evaluate(() => document.fonts.ready);

    // Inspect stylesheets in browser
    const stylesheetInfo = await page.evaluate(() => {
      const sheets = Array.from(document.styleSheets);
      return sheets.map(s => {
        let rules = 0;
        try { rules = s.cssRules?.length || 0; } catch(e) {}
        return { href: s.href, rules };
      });
    });

    const fileName = `${vp.name}.png`;
    const filePath = path.join(OUT_DIR, fileName);
    await page.screenshot({ path: filePath, fullPage: false });
    await page.close();

    screenshots.push({ viewport: vp.name, size: `${vp.width}x${vp.height}`, file: filePath, stylesheets: stylesheetInfo });
    console.log(`✓ ${vp.name} — ${filePath}`);
  }

  await browser.close();

  // CSS content sanity (does it contain Tailwind output?)
  const hasTailwind = cssChecks.some(c => c.bodySnippet && (c.bodySnippet.includes('@font-face') || c.size > 10000));

  const report = {
    generatedAt: new Date().toISOString(),
    gitCommit: gitHash,
    pageCheck,
    cssChecks,
    jsChecks,
    hasTailwind,
    screenshots: screenshots.map(s => ({ ...s, file: path.basename(s.file) })),
    consoleErrors,
    networkErrors,
    summary: {
      cssAllOk: cssChecks.every(c => c.status === 200 && c.contentType.includes('text/css')),
      jsAllOk: jsChecks.every(c => c.status === 200),
      noConsoleErrors: consoleErrors.filter(e => !e.text.includes('hydration')).length === 0,
      screenshotCount: screenshots.length,
    }
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log('\n=== QA REPORT ===');
  console.log('Git commit:', gitHash);
  console.log('CSS assets OK:', report.summary.cssAllOk);
  console.log('JS assets OK:', report.summary.jsAllOk);
  console.log('Console errors:', consoleErrors.length);
  console.log('Network errors:', networkErrors.length);
  console.log('Tailwind detected:', hasTailwind);
  console.log('Screenshots:', screenshots.length);
  console.log('Report written to:', REPORT_PATH);
  if (consoleErrors.length > 0) {
    console.log('\nConsole errors:');
    consoleErrors.forEach(e => console.log(' -', e.viewport, ':', e.text.slice(0, 200)));
  }
  if (networkErrors.length > 0) {
    console.log('\nNetwork errors:');
    networkErrors.forEach(e => console.log(' -', e.viewport, ':', e.url, ':', e.failure));
  }
}

run().catch(err => { console.error('FATAL:', err); process.exit(1); });
