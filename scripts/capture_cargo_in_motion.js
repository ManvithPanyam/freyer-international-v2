const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function capture() {
  const outDir = path.join(__dirname, '../docs/projects/screenshots_prototype');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1.5 });

  console.log('Navigating to cargo-in-motion experiment on 127.0.0.1:3007...');
  await page.goto('http://127.0.0.1:3007/experiments/cargo-in-motion', { waitUntil: 'networkidle0', timeout: 30000 });

  await new Promise(r => setTimeout(r, 2500));

  // 1. Capture Overall Page & Establishing Shot (Phase 1/2)
  console.log('Capturing 01_establishing_stage...');
  await page.screenshot({ path: path.join(outDir, '01_establishing_stage.png') });

  // 2. Click Phase 3 (Manifest Projection, ~15s)
  console.log('Jumping to Phase 3: Manifest Projection...');
  const buttons = await page.$$('button');
  for (const b of buttons) {
    const text = await page.evaluate(el => el.innerText, b);
    if (text && text.includes('03') && text.includes('MANIFEST')) {
      await b.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1200));

  console.log('Capturing 02_phase3_manifest_inspection...');
  await page.screenshot({ path: path.join(outDir, '02_phase3_manifest_inspection.png') });

  // 3. Open Authentic Photograph Modal (Photo 9.1 / 9.2)
  console.log('Opening Photo 9.1 Inspection...');
  for (const b of buttons) {
    const text = await page.evaluate(el => el.innerText, b);
    if (text && text.includes('Photo 9.1')) {
      await b.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 800));

  console.log('Capturing 03_photo_9_1_modal...');
  await page.screenshot({ path: path.join(outDir, '03_photo_9_1_modal.png') });

  // 4. Open Photo 9.2 Modal
  console.log('Opening Photo 9.2 Inspection...');
  for (const b of buttons) {
    const text = await page.evaluate(el => el.innerText, b);
    if (text && text.includes('Photo 9.2')) {
      await b.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 800));

  console.log('Capturing 04_photo_9_2_modal...');
  await page.screenshot({ path: path.join(outDir, '04_photo_9_2_modal.png') });

  // 5. Jump to Phase 5: Next Assignment Cue (~28s)
  console.log('Jumping to Phase 5: Next Assignment Cue...');
  for (const b of buttons) {
    const text = await page.evaluate(el => el.innerText, b);
    if (text && text.includes('05') && text.includes('NEXT RECORD')) {
      await b.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1000));

  console.log('Capturing 05_phase5_next_record_cue...');
  await page.screenshot({ path: path.join(outDir, '05_phase5_next_record_cue.png') });

  // 6. Mobile Viewport (iPhone 14 Pro: 393 x 852)
  console.log('Capturing Mobile Viewport...');
  await page.setViewport({ width: 393, height: 852, deviceScaleFactor: 2 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, '06_mobile_cargo_in_motion.png') });

  await browser.close();
  console.log('All QA captures completed successfully!');
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
