const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:3000/experiments/world-class-audit-final";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_FINAL = path.join(__dirname, "../screenshots/final");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_FINAL, { recursive: true });

function saveFile(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_FINAL, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved screenshot: ${filename}`);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  console.log("==================================================");
  console.log("   CAPTURING THE 3 ADVERSARIAL FINALISTS          ");
  console.log("==================================================");

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  await page.goto(BASE_URL, { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1500));

  // 1. Full Desktop
  console.log("Capturing full desktop...");
  const fullBuf = await page.screenshot({ fullPage: true, type: "jpeg", quality: 85 });
  saveFile("finalist_master_full_desktop.jpg", fullBuf);

  // 2. Finalist 1: Clean Hero Desktop
  console.log("Capturing Finalist 1: Clean Hero...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  const heroBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("finalist_hero_desktop.jpg", heroBuf);

  // 3. Finalist 2: 482 MT Cargo Scale Desktop (482 MT & 37.6 MT)
  console.log("Capturing Finalist 2: 482 MT Scale...");
  await page.evaluate(() => {
    const el = document.getElementById("cargo-finalist");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  const cargo482Buf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("finalist_cargo_482mt_desktop.jpg", cargo482Buf);

  // Switch to 37.6 MT Boom Crane
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("#cargo-finalist button"));
    const b37 = btns.find(b => b.textContent && b.textContent.includes("37.6"));
    if (b37) b37.click();
  });
  await new Promise(r => setTimeout(r, 600));
  const cargo37Buf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("finalist_cargo_37mt_desktop.jpg", cargo37Buf);

  // 4. Finalist 3: Truthful Network Desktop
  console.log("Capturing Finalist 3: Truthful Network...");
  await page.evaluate(() => {
    const el = document.getElementById("network-finalist");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  const netBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("finalist_network_desktop.jpg", netBuf);

  // 5. Mobile Captures (390 x 844)
  console.log("Capturing Mobile Viewports...");
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(BASE_URL, { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1200));

  await page.evaluate(() => window.scrollTo(0, 0));
  const mobHero = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("finalist_hero_mobile.jpg", mobHero);

  await page.evaluate(() => {
    const el = document.getElementById("cargo-finalist");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));
  const mobCargo = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("finalist_cargo_mobile.jpg", mobCargo);

  await page.evaluate(() => {
    const el = document.getElementById("network-finalist");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));
  const mobNet = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("finalist_network_mobile.jpg", mobNet);

  await browser.close();
  console.log("Finalist captures complete.");
})();
