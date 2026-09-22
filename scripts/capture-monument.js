const puppeteer = require('puppeteer');

async function testMonument() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1200));

  const section = await page.$('#cargo-monument');
  if (section) {
    await section.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/cargo_monument_fixed_check.png' });
  }

  await browser.close();
  console.log('CARGO MONUMENT SCREENSHOT CAPTURED');
}

testMonument().catch(err => {
  console.error(err);
  process.exit(1);
});
