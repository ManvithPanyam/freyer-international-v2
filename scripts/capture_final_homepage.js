const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:3000/experiments/world-class-final-home";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_FINAL_HOME = path.join(__dirname, "../screenshots/final_home");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_FINAL_HOME, { recursive: true });

function saveFile(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_FINAL_HOME, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved screenshot: ${filename}`);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  console.log("==================================================");
  console.log("   CAPTURING MASTER FINAL HOMEPAGE SUITE          ");
  console.log("==================================================");

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  await page.goto(BASE_URL, { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 2000));

  // 1. Desktop Full Homepage
  console.log("1. Capturing Desktop Full Homepage...");
  const fullDesktopBuf = await page.screenshot({ fullPage: true, type: "jpeg", quality: 80 });
  saveFile("final_home_full_desktop.jpg", fullDesktopBuf);

  // 2. Hero Viewport
  console.log("2. Capturing Hero Viewport...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  const heroBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("final_home_hero_desktop.jpg", heroBuf);

  // 3. Project Cargo Monument Viewport
  console.log("3. Capturing Project Cargo Monument Viewport...");
  await page.evaluate(() => {
    const el = document.getElementById("cargo-finalist");
    if (el) el.scrollIntoView({ block: "start" });
  });
  await new Promise(r => setTimeout(r, 600));
  const cargoBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("final_home_cargo_desktop.jpg", cargoBuf);

  // 4. Services (Concept C + Bridge) Viewport
  console.log("4. Capturing Services Viewport...");
  await page.evaluate(() => {
    const el = document.getElementById("concept-c-heading");
    if (el) el.scrollIntoView({ block: "start" });
  });
  await new Promise(r => setTimeout(r, 600));
  const servicesBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("final_home_services_desktop.jpg", servicesBuf);

  // 5. India Network Viewport
  console.log("5. Capturing India Network Viewport...");
  await page.evaluate(() => {
    const el = document.getElementById("network-finalist");
    if (el) el.scrollIntoView({ block: "start" });
  });
  await new Promise(r => setTimeout(r, 600));
  const networkBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("final_home_network_desktop.jpg", networkBuf);

  // 6. Contact / Direct Dispatch Viewport
  console.log("6. Capturing Contact Viewport...");
  await page.evaluate(() => {
    const el = document.getElementById("contact-finalist");
    if (el) el.scrollIntoView({ block: "start" });
  });
  await new Promise(r => setTimeout(r, 600));
  const contactBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("final_home_contact_desktop.jpg", contactBuf);

  // 7. Mobile Full Homepage (390 x 844)
  console.log("7. Capturing Mobile Full Homepage (390x844)...");
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));
  const fullMobileBuf = await page.screenshot({ fullPage: true, type: "jpeg", quality: 75 });
  saveFile("final_home_full_mobile.jpg", fullMobileBuf);

  await browser.close();
  console.log("All Master Final Homepage screenshots saved successfully.");
})();
