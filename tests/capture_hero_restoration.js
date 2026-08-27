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

const OUT_DIR = path.join(__dirname, "../restored_hero_screenshots");
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

    // Capture the top Hero fold
    await page.screenshot({ path: path.join(OUT_DIR, `restored_hero_${vp.name}.png`) });

    console.log(`✓ Restored hero screenshot captured for ${vp.name}`);
    await page.close();
  }

  await browser.close();
  console.log("Hero restoration QA capture complete!");
})();
