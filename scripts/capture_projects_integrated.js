const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });
  
  await page.goto('https://freyer-international-v2.vercel.app/projects', {
    waitUntil: 'networkidle2',
  });
  await new Promise((r) => setTimeout(r, 2000));

  // Scroll slightly to frame the new kinetic hero stage perfectly
  await page.evaluate(() => {
    window.scrollTo(0, 360);
  });
  await new Promise((r) => setTimeout(r, 1200));

  await page.screenshot({
    path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/live_projects_integrated_stage.png',
  });
  console.log('Live projects integrated stage captured');

  await browser.close();
})();
