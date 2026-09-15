const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const MAP_URL = "http://localhost:3000/experiments/india-map-presentation-final";
const HOME_URL = "http://localhost:3000/experiments/world-class-final-home";

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
  console.log("   CAPTURING INDIA MAP PRESENTATION PASS VIEWS    ");
  console.log("==================================================");

  // ----------------------------------------------------
  // 1. Desktop Full Map View (1440 x 1050)
  // ----------------------------------------------------
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1050, deviceScaleFactor: 1 });
  await page.goto(MAP_URL, { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1500));

  console.log("1. Capturing Desktop Full Map (Default Chennai HQ)...");
  await page.evaluate(() => {
    const sec = document.querySelector("#india-network-hero");
    if (sec) sec.scrollIntoView({ block: "start" });
  });
  await new Promise((r) => setTimeout(r, 800));
  const fullDesktopBuf = await page.screenshot({ type: "jpeg", quality: 92 });
  saveFile("india_presentation_desktop_full.jpg", fullDesktopBuf);

  // ----------------------------------------------------
  // 2. Desktop Selected Station (Mumbai / Western Gateway)
  // ----------------------------------------------------
  console.log("2. Capturing Desktop Selected Station (Mumbai)...");
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const mumbaiBtn = btns.find((b) => b.textContent && b.textContent.includes("Mumbai"));
    if (mumbaiBtn) mumbaiBtn.click();
  });
  await new Promise((r) => setTimeout(r, 800));
  const selectedDesktopBuf = await page.screenshot({ type: "jpeg", quality: 92 });
  saveFile("india_presentation_desktop_selected.jpg", selectedDesktopBuf);

  // ----------------------------------------------------
  // 3. Mobile Viewports (390 x 844)
  // ----------------------------------------------------
  console.log("3. Switching to Mobile Viewport (390 x 844)...");
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto(MAP_URL, { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1200));

  console.log("4. Capturing Mobile Full Map View...");
  await page.evaluate(() => {
    const svg = document.querySelector("svg");
    if (svg) svg.scrollIntoView({ block: "center" });
  });
  await new Promise((r) => setTimeout(r, 800));
  const mobileFullBuf = await page.screenshot({ type: "jpeg", quality: 92 });
  saveFile("india_presentation_mobile_full.jpg", mobileFullBuf);

  console.log("5. Capturing Mobile Selected Station Dossier...");
  await page.evaluate(() => {
    // Select Visakhapatnam or Tuticorin
    const btns = Array.from(document.querySelectorAll("button"));
    const visaBtn = btns.find((b) => b.textContent && b.textContent.includes("Visakhapatnam"));
    if (visaBtn) visaBtn.click();
    
    // Scroll down to the station card
    const card = document.querySelector(".rounded-2xl");
    if (card) card.scrollIntoView({ block: "center" });
  });
  await new Promise((r) => setTimeout(r, 800));
  const mobileSelectedBuf = await page.screenshot({ type: "jpeg", quality: 92 });
  saveFile("india_presentation_mobile_selected.jpg", mobileSelectedBuf);

  // ----------------------------------------------------
  // 5. Homepage Integrated Network Section (Desktop 1440 x 1050)
  // ----------------------------------------------------
  console.log("6. Capturing Homepage Integrated Network Section...");
  await page.setViewport({ width: 1440, height: 1050, deviceScaleFactor: 1 });
  await page.goto(HOME_URL, { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1800));

  await page.evaluate(() => {
    const networkSec = document.querySelector("#india-network-hero");
    if (networkSec) networkSec.scrollIntoView({ block: "start" });
  });
  await new Promise((r) => setTimeout(r, 800));
  const homepageIntegratedBuf = await page.screenshot({ type: "jpeg", quality: 92 });
  saveFile("india_presentation_homepage_integrated.jpg", homepageIntegratedBuf);

  await browser.close();
  console.log("==================================================");
  console.log("   ALL 5 PRESENTATION SCREENSHOTS CAPTURED!       ");
  console.log("==================================================");
})();
