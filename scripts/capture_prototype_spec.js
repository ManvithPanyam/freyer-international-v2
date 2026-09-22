const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('https://freyer-international-v2.vercel.app/experiments/cargo-in-motion/prototype', {
    waitUntil: 'networkidle2',
  });
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({
    path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/prototype_kf0.png',
  });

  // Scrub to KF2 (45%)
  await page.evaluate(() => {
    const slider = document.querySelector('input[type="range"]');
    if (slider) {
      slider.value = '0.45';
      slider.dispatchEvent(new Event('input', { bubbles: true }));
      slider.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({
    path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/prototype_kf2.png',
  });

  // Scrub to KF4 (90%)
  await page.evaluate(() => {
    const slider = document.querySelector('input[type="range"]');
    if (slider) {
      slider.value = '0.90';
      slider.dispatchEvent(new Event('input', { bubbles: true }));
      slider.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({
    path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/prototype_kf4_full_manifest.png',
  });

  await browser.close();
  console.log('Prototype screenshots captured');
})();
