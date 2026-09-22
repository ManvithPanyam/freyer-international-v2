const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  
  // 1. Capture Option A (Default)
  await page.goto('https://freyer-international-v2.vercel.app/experiments/cargo-in-motion/prototype', {
    waitUntil: 'networkidle2',
  });
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({
    path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/live_comparison_option_a.png',
  });
  console.log('Option A captured');

  // 2. Click Option B tab & scrub to hero keyframe
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const optB = btns.find(b => b.textContent.includes('Option B'));
    if (optB) optB.click();
  });
  await new Promise((r) => setTimeout(r, 1000));

  await page.evaluate(() => {
    const slider = document.querySelector('input[type="range"]');
    if (slider) {
      slider.value = '0.70';
      slider.dispatchEvent(new Event('input', { bubbles: true }));
      slider.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
  await new Promise((r) => setTimeout(r, 1000));

  await page.screenshot({
    path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/live_comparison_option_b.png',
  });
  console.log('Option B captured');

  await browser.close();
})();
