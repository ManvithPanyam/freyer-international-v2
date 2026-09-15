const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:3000/experiments/india-map-final";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_MAP = path.join(__dirname, "../screenshots/india_map");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_MAP, { recursive: true });

function saveFile(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_MAP, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved screenshot: ${filename}`);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  console.log("==================================================");
  console.log("   RE-CAPTURING FRAMED AUTHORITATIVE MAP VIEWS    ");
  console.log("==================================================");

  // 1. Desktop (1440 x 1000)
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
  await page.goto(BASE_URL, { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1200));

  // Desktop Full Map View (Chennai HQ Default)
  console.log("1. Capturing Framed Desktop Full Map...");
  await page.evaluate(() => {
    const svg = document.querySelector("svg");
    if (svg) svg.scrollIntoView({ block: "center" });
  });
  await new Promise(r => setTimeout(r, 600));
  const fullDesktopBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("india_map_authoritative_desktop_full.jpg", fullDesktopBuf);

  // Desktop Selected Station (Mumbai)
  console.log("2. Capturing Desktop Selected Station (Mumbai)...");
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const mumbaiBtn = btns.find(b => b.textContent.includes("Mumbai"));
    if (mumbaiBtn) mumbaiBtn.click();
  });
  await new Promise(r => setTimeout(r, 600));
  const selectedDesktopBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("india_map_authoritative_desktop_selected.jpg", selectedDesktopBuf);

  // 2. Mobile Viewport (390 x 844)
  console.log("3. Switching to Mobile Viewport (390x844)...");
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.evaluate(() => {
    const svg = document.querySelector("svg");
    if (svg) svg.scrollIntoView({ block: "center" });
  });
  await new Promise(r => setTimeout(r, 600));
  const mobileMapBuf = await page.screenshot({ type: "jpeg", quality: 85 });
  saveFile("india_map_authoritative_mobile_full.jpg", mobileMapBuf);

  // Mobile Selected Station (Delhi / NCR) - scroll to dossier card
  console.log("4. Capturing Mobile Selected Station Details...");
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const delhiBtn = btns.find(b => b.textContent.includes("Delhi"));
    if (delhiBtn) delhiBtn.click();
    const card = document.querySelector(".shadow-2xl");
    if (card) card.scrollIntoView({ block: "center" });
  });
  await new Promise(r => setTimeout(r, 600));
  const mobileSelectedBuf = await page.screenshot({ type: "jpeg", quality: 85 });
  saveFile("india_map_authoritative_mobile_selected.jpg", mobileSelectedBuf);

  await browser.close();
  console.log("All framed map screenshots captured successfully.");
})();
