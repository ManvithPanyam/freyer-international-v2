const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const URL = "http://localhost:3000/experiments/homepage-v4-1";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_V4_1 = path.join(__dirname, "../screenshots/v4-1");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_V4_1, { recursive: true });

function saveToTargets(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_V4_1, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved: ${filename}`);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  console.log("=== BEGINNING INTERACTIVE QA SUITE ===");

  // 1. Desktop Interactive QA
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log("1. Loading Desktop Experience...");
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 30000 });

  // Verify all images loaded
  const brokenImages = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("img")).filter((img) => !img.complete || img.naturalWidth === 0).map(img => img.src);
  });
  console.log("Initial image check (broken count):", brokenImages.length, brokenImages);

  // Test Hero -> Network scroll
  console.log("2. Testing Hero -> Network smooth scroll...");
  await page.evaluate(() => window.scrollTo({ top: 900, behavior: "smooth" }));
  await new Promise((r) => setTimeout(r, 800));

  // Test Project Cargo scroll progression
  console.log("3. Testing Project Cargo scroll progression...");
  const cargoEl = await page.$("#cargo-scene");
  if (cargoEl) {
    const box = await cargoEl.boundingBox();
    console.log("Cargo scene top:", box.y);
    // Scroll into cargo sequence and step down
    await page.evaluate((top) => window.scrollTo({ top: top + 400, behavior: "smooth" }), box.y);
    await new Promise((r) => setTimeout(r, 600));
    await page.evaluate((top) => window.scrollTo({ top: top + 1000, behavior: "smooth" }), box.y);
    await new Promise((r) => setTimeout(r, 600));
  }

  // Test Services environmental interaction
  console.log("4. Testing Services environmental switching...");
  const serviceButtons = await page.$$("#services-scene button");
  console.log(`Found ${serviceButtons.length} service selector buttons.`);
  for (let i = 0; i < Math.min(serviceButtons.length, 6); i++) {
    await serviceButtons[i].click();
    await new Promise((r) => setTimeout(r, 400));
  }

  // Refresh test
  console.log("5. Testing Hard Refresh...");
  await page.reload({ waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1000));
  const postRefreshBroken = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("img")).filter((img) => !img.complete || img.naturalWidth === 0).map(img => img.src);
  });
  console.log("Post-refresh broken images:", postRefreshBroken.length);

  // 2. Mobile Interactive QA
  console.log("6. Testing Mobile Viewport (390x844)...");
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await mobilePage.goto(URL, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1000));

  // Verify sticky overlay obstruction check
  const isNavObstructing = await mobilePage.evaluate(() => {
    const nav = document.querySelector("nav");
    const style = window.getComputedStyle(nav);
    return style.position === "fixed" && nav.offsetHeight > 80;
  });
  console.log("Mobile navigation obstruction check (isObstructing):", isNavObstructing);

  // 3. Capture Screenshots
  console.log("7. Capturing Screenshots across viewports...");
  const viewports = [
    { label: "desktop_100", width: 1440, height: 900, dpr: 1 },
    { label: "desktop_75", width: 1920, height: 1080, dpr: 1 },
    { label: "mobile", width: 390, height: 844, dpr: 2 },
  ];

  for (const vp of viewports) {
    const capPage = await browser.newPage();
    await capPage.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: vp.dpr });
    await capPage.goto(URL, { waitUntil: "networkidle0", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 1200));

    // Full page capture
    const fullBuf = await capPage.screenshot({ fullPage: true, type: "jpeg", quality: 90 });
    saveToTargets(`v4_1_full_page_${vp.label}.jpg`, fullBuf);

    // Section captures
    const sections = [
      { id: "#hero-scene", name: "hero" },
      { id: "#network-scene", name: "network" },
      { id: "#cargo-scene", name: "project_cargo" },
      { id: "#services-scene", name: "services" },
      { id: "#contact-scene", name: "contact" },
    ];

    for (const sec of sections) {
      const el = await capPage.$(sec.id);
      if (el) {
        await el.scrollIntoView();
        await new Promise((r) => setTimeout(r, 400));
        const secBuf = await el.screenshot({ type: "jpeg", quality: 90 });
        saveToTargets(`v4_1_${sec.name}_${vp.label}.jpg`, secBuf);
      }
    }

    await capPage.close();
  }

  await page.close();
  await mobilePage.close();
  await browser.close();
  console.log("=== PASS 4.1 QA & SCREENSHOT CAPTURE COMPLETE ===");
})();
