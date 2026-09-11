const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const URL = "http://localhost:3000/experiments/homepage-v4";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_V4 = path.join(__dirname, "../screenshots/v4");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_V4, { recursive: true });

function saveToTargets(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_V4, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved: ${filename}`);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const viewports = [
    { label: "desktop_100", width: 1440, height: 900, dpr: 1 },
    { label: "desktop_75", width: 1920, height: 1080, dpr: 1 },
    { label: "mobile", width: 390, height: 844, dpr: 2 },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: vp.dpr });

    console.log(`Loading ${URL} for ${vp.label}...`);
    await page.goto(URL, { waitUntil: "networkidle0", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 1200));

    // Full page screenshot
    const fullBuf = await page.screenshot({ fullPage: true, type: "jpeg", quality: 90 });
    saveToTargets(`v4_full_page_${vp.label}.jpg`, fullBuf);

    // Section screenshots by element selector
    const sections = [
      { id: "#hero-scene", name: "hero" },
      { id: "#network-scene", name: "network" },
      { id: "#cargo-scene", name: "project_cargo" },
      { id: "#services-scene", name: "services" },
      { id: "#contact-scene", name: "contact" },
    ];

    for (const sec of sections) {
      const el = await page.$(sec.id);
      if (el) {
        await el.scrollIntoView();
        await new Promise((r) => setTimeout(r, 400));
        const secBuf = await el.screenshot({ type: "jpeg", quality: 90 });
        saveToTargets(`v4_${sec.name}_${vp.label}.jpg`, secBuf);
      }
    }

    await page.close();
  }

  await browser.close();
  console.log("All Pass 4 screenshots captured successfully!");
})();
