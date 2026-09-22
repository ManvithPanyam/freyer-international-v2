const puppeteer = require('puppeteer');

async function capture() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/experiments/about-leadership', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/about_leadership_hero_desktop.png' });
  
  // Full page desktop
  await page.screenshot({ path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/about_leadership_full_desktop.png', fullPage: true });

  // Open drawer test: click 'Read Full Profile Dossier'
  const buttons = await page.$$('button');
  for (const b of buttons) {
    const text = await page.evaluate(el => el.textContent, b);
    if (text && text.includes('Read Full Profile Dossier')) {
      await b.click();
      await new Promise(r => setTimeout(r, 800));
      await page.screenshot({ path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/about_leadership_drawer_open.png' });
      break;
    }
  }

  // Mobile
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/experiments/about-leadership', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/about_leadership_mobile.png' });

  // Verify homepage footer with twitter icon
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1200));
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10/homepage_footer_with_twitter.png' });

  await browser.close();
  console.log('SUCCESSFULLY GENERATED ALL ARTIFACT SCREENSHOTS');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
