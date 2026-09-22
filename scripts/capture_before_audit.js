const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/project-cargo',
  '/services/ocean-freight',
  '/services/air-freight',
  '/services/customs-brokerage',
  '/services/warehousing',
  '/services/risk-management',
  '/projects',
  '/locations',
  '/network-partners',
  '/careers',
  '/csr',
  '/contact'
];

const OUT_DIR = path.resolve('C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/audit_before');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const r of ROUTES) {
    const slug = r === '/' ? 'home' : r.replace(/\//g, '_').replace(/^_/, '');
    const url = 'http://localhost:3000' + r;
    const page = await browser.newPage();

    // Desktop 1440
    await page.setViewport({ width: 1440, height: 900 });
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });
      await page.screenshot({ path: path.join(OUT_DIR, slug + '_desktop.png'), fullPage: true });
      console.log('Captured desktop:', slug);
    } catch(e) {
      console.error('Error desktop', slug, e.message);
    }

    // Mobile 390
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });
      await page.screenshot({ path: path.join(OUT_DIR, slug + '_mobile.png'), fullPage: true });
      console.log('Captured mobile:', slug);
    } catch(e) {
      console.error('Error mobile', slug, e.message);
    }
    await page.close();
  }

  await browser.close();
  console.log('Finished capturing BEFORE audit screenshots.');
})();
