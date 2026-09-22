const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const OUT_DIR = 'C:\\Users\\abc\\.gemini\\antigravity\\brain\\2f03e65b-dc1a-48a2-ab1e-249e6016aa10';
const URL = 'http://localhost:3000/experiments/editorial-industrial-theme';

async function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

(async () => {
  console.log('Launching browser for Variant A / B / C capture...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // 1. DESKTOP CAPTURES (1440x900)
  const pageDesk = await browser.newPage();
  await pageDesk.setViewport({ width: 1440, height: 900 });
  await pageDesk.goto(URL, { waitUntil: 'networkidle2', timeout: 35000 });
  await wait(1500);

  const variants = ['A', 'B', 'C'];
  for (const v of variants) {
    console.log(`Setting Variant ${v}...`);
    await pageDesk.evaluate((varId) => {
      const btns = Array.from(document.querySelectorAll('button'));
      const target = btns.find(b => b.textContent.includes('Variant ' + varId));
      if (target) target.click();
    }, v);
    await wait(800);

    // Capture Desktop Full Page
    const deskFull = path.join(OUT_DIR, `theme_variant_${v}_desktop_fullpage.png`);
    await pageDesk.screenshot({ path: deskFull, fullPage: true });
    console.log(`Saved: ${deskFull}`);

    // Capture Hero
    const heroEl = await pageDesk.$('section[aria-label="Freyer International Logistics"]');
    if (heroEl) {
      const heroPath = path.join(OUT_DIR, `theme_variant_${v}_hero.png`);
      await heroEl.screenshot({ path: heroPath });
      console.log(`Saved: ${heroPath}`);
    }

    // Capture Cargo section
    const cargoEl = await pageDesk.$('#cargo');
    if (cargoEl) {
      const cargoPath = path.join(OUT_DIR, `theme_variant_${v}_cargo.png`);
      await cargoEl.screenshot({ path: cargoPath });
      console.log(`Saved: ${cargoPath}`);
    }

    // Capture Services section
    const srvEl = await pageDesk.$('#services');
    if (srvEl) {
      const srvPath = path.join(OUT_DIR, `theme_variant_${v}_services.png`);
      await srvEl.screenshot({ path: srvPath });
      console.log(`Saved: ${srvPath}`);
    }

    // Capture Network section
    const netEl = await pageDesk.$('#network');
    if (netEl) {
      const netPath = path.join(OUT_DIR, `theme_variant_${v}_network.png`);
      await netEl.screenshot({ path: netPath });
      console.log(`Saved: ${netPath}`);
    }

    // Capture Contact section
    const conEl = await pageDesk.$('#contact');
    if (conEl) {
      const conPath = path.join(OUT_DIR, `theme_variant_${v}_contact.png`);
      await conEl.screenshot({ path: conPath });
      console.log(`Saved: ${conPath}`);
    }
  }

  // 2. MOBILE CAPTURES (390x844 - iPhone 14)
  const pageMob = await browser.newPage();
  await pageMob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await pageMob.goto(URL, { waitUntil: 'networkidle2', timeout: 35000 });
  await wait(1500);

  for (const v of variants) {
    console.log(`Setting Mobile Variant ${v}...`);
    await pageMob.evaluate((varId) => {
      const btns = Array.from(document.querySelectorAll('button'));
      const target = btns.find(b => b.textContent.trim() === varId);
      if (target) target.click();
    }, v);
    await wait(800);

    const mobFull = path.join(OUT_DIR, `theme_variant_${v}_mobile_fullpage.png`);
    await pageMob.screenshot({ path: mobFull, fullPage: true });
    console.log(`Saved: ${mobFull}`);
  }

  console.log('All variant screenshots captured successfully!');
  await browser.close();
  process.exit(0);
})();
