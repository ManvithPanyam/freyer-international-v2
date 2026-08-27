const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:3000";

const VIEWPORTS = [
  { name: "desktop_1920", width: 1920, height: 1080 },
  { name: "desktop_1440", width: 1440, height: 900 },
  { name: "desktop_1366", width: 1366, height: 768 },
  { name: "mobile_430", width: 430, height: 932 },
  { name: "mobile_390", width: 390, height: 844 },
];

const OUT_DIR = path.join(__dirname, "../qa_home_screenshots");
fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });

    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0", timeout: 35000 });
    await new Promise((r) => setTimeout(r, 600));

    // Full-page capture
    await page.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__fullpage.png`), fullPage: true });

    // Section 01: Hero Fold
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__01_hero.png`) });

    // Section 02: Scale
    await page.evaluate(() => {
      const el = document.getElementById("scale");
      if (el) window.scrollTo(0, el.offsetTop);
    });
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__02_scale.png`) });

    // Section 03: Documented Movement
    await page.evaluate(() => {
      const el = document.getElementById("journey");
      if (el) window.scrollTo(0, el.offsetTop - 700);
    });
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__03_proof.png`) });

    // Section 04: Journey Stage 1 & Stage 4
    await page.evaluate(() => {
      const el = document.getElementById("journey");
      if (el) window.scrollTo(0, el.offsetTop + 100);
    });
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__04_journey_s1.png`) });

    await page.evaluate(() => {
      const el = document.getElementById("journey");
      if (el) window.scrollTo(0, el.offsetTop + el.offsetHeight * 0.7);
    });
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__04_journey_s4.png`) });

    // Section 05: Disciplines
    await page.evaluate(() => {
      const el = document.getElementById("disciplines");
      if (el) window.scrollTo(0, el.offsetTop + 100);
    });
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__05_disciplines.png`) });

    // Section 06: Trust & Section 07: Quote
    await page.evaluate(() => {
      const el = document.getElementById("quote");
      if (el) window.scrollTo(0, el.offsetTop - 500);
    });
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__06_trust.png`) });

    await page.evaluate(() => {
      const el = document.getElementById("quote");
      if (el) window.scrollTo(0, el.offsetTop);
    });
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__07_quote_configurator.png`) });

    console.log(`✓ QA screenshots captured for ${vp.name}`);
    await page.close();
  }

  await browser.close();
  console.log("Home Editorial QA Capture complete!");
})();
