const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function run() {
  const outDir = path.join(__dirname, '../docs/projects/screenshots_prototype');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  console.log('Navigating to cargo-in-motion experiment on 127.0.0.1:3007...');
  await page.goto('http://127.0.0.1:3007/experiments/cargo-in-motion', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  // Wait for Three.js canvas to mount and render
  await page.waitForSelector('canvas', { timeout: 10000 });
  await new Promise(r => setTimeout(r, 2000));

  // 1. SHANGHAI DESKTOP (Record #09)
  console.log('Capturing 01_shanghai_desktop...');
  // Click Record #09 tab
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('09'));
    if (b) b.click();
  });
  // Jump to Phase 3 (Manifest & Cargo Inspection) so cargo and manifest are fully visible
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('MANIFEST'));
    if (b) b.click();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, '01_shanghai_desktop.png'), fullPage: false });

  // 2. GENOA DESKTOP (Record #07 - Repeated heavy units)
  console.log('Capturing 02_genoa_desktop...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('07'));
    if (b) b.click();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('MANIFEST'));
    if (b) b.click();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, '02_genoa_desktop.png'), fullPage: false });

  // 3. VENICE DESKTOP (Record #11 - Elongated boom crane)
  console.log('Capturing 03_venice_desktop...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('11'));
    if (b) b.click();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('MANIFEST'));
    if (b) b.click();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, '03_venice_desktop.png'), fullPage: false });

  // 4. MANIFEST STATE (Record #09 close-up / dedicated manifest reveal)
  console.log('Capturing 06_manifest_state...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('09'));
    if (b) b.click();
  });
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('MANIFEST'));
    if (b) b.click();
  });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(outDir, '06_manifest_state.png'), fullPage: false });

  // 5. FULL SEQUENCE (Touchdown & Movement Phase 2)
  console.log('Capturing 05_full_sequence_touchdown...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('TOUCHDOWN'));
    if (b) b.click();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, '05_full_sequence_touchdown.png'), fullPage: false });

  // 6. SHANGHAI MOBILE (393 x 852 viewport)
  console.log('Capturing 04_shanghai_mobile...');
  await page.setViewport({ width: 393, height: 852, deviceScaleFactor: 2 });
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('09'));
    if (b) b.click();
  });
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('MANIFEST'));
    if (b) b.click();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, '04_shanghai_mobile.png'), fullPage: true });

  await browser.close();
  console.log('All 6 requested captures completed successfully!');
}

run().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
