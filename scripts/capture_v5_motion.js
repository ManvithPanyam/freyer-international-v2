const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:3000";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_V5 = path.join(__dirname, "../screenshots/v5");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_V5, { recursive: true });

function saveToTargets(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_V5, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved: ${filename}`);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--enable-webgl",
      "--use-gl=angle",
    ],
  });

  console.log("==================================================");
  console.log("   PASS 5 — CINEMATIC MOTION & EXPERIMENTS QA    ");
  console.log("==================================================");

  // ----------------------------------------------------
  // 1. EXPERIMENT A: India Geographic Map (/experiments/map-v5)
  // ----------------------------------------------------
  console.log("\n[1/6] Capturing Experiment A: Geographic India Map...");
  const pageMap = await browser.newPage();
  await pageMap.setViewport({ width: 1440, height: 900 });
  await pageMap.goto(`${BASE_URL}/experiments/map-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1200)); // wait for entrance animation

  const mapInitial = await pageMap.screenshot({ type: "jpeg", quality: 90 });
  saveToTargets("v5_exp_a_map_initial.jpg", mapInitial);

  // Click on Mumbai station pill to test pan/zoom focus
  const mumbaiBtn = await pageMap.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("Mumbai"));
  });
  if (mumbaiBtn && mumbaiBtn.asElement()) {
    await mumbaiBtn.asElement().click();
    await new Promise((r) => setTimeout(r, 800));
    const mapFocused = await pageMap.screenshot({ type: "jpeg", quality: 90 });
    saveToTargets("v5_exp_a_map_mumbai_focus.jpg", mapFocused);
  }
  await pageMap.close();

  // ----------------------------------------------------
  // 2. EXPERIMENT B: Project Cargo Motion Film (/experiments/cargo-v5)
  // ----------------------------------------------------
  console.log("\n[2/6] Capturing Experiment B: Project Cargo Motion Film...");
  const pageCargo = await browser.newPage();
  await pageCargo.setViewport({ width: 1440, height: 900 });
  await pageCargo.goto(`${BASE_URL}/experiments/cargo-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1000));

  const cargo1 = await pageCargo.screenshot({ type: "jpeg", quality: 90 });
  saveToTargets("v5_exp_b_cargo_record1.jpg", cargo1);

  // Click the 482 MT stepper pill to capture record 2
  const record2Btn = await pageCargo.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("482 MT"));
  });
  if (record2Btn && record2Btn.asElement()) {
    await record2Btn.asElement().click();
    await new Promise((r) => setTimeout(r, 800));
    const cargo2 = await pageCargo.screenshot({ type: "jpeg", quality: 90 });
    saveToTargets("v5_exp_b_cargo_record2_482mt.jpg", cargo2);
  }

  // Click the 2 x 148 MT stepper pill to capture record 3
  const record3Btn = await pageCargo.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("2 × 148 MT"));
  });
  if (record3Btn && record3Btn.asElement()) {
    await record3Btn.asElement().click();
    await new Promise((r) => setTimeout(r, 800));
    const cargo3 = await pageCargo.screenshot({ type: "jpeg", quality: 90 });
    saveToTargets("v5_exp_b_cargo_record3.jpg", cargo3);
  }

  await pageCargo.close();

  // ----------------------------------------------------
  // 3. EXPERIMENT C: Route-Line Motion System (/experiments/routes-v5)
  // ----------------------------------------------------
  console.log("\n[3/6] Capturing Experiment C: Route-Line Motion System...");
  const pageRoutes = await browser.newPage();
  await pageRoutes.setViewport({ width: 1440, height: 900 });
  await pageRoutes.goto(`${BASE_URL}/experiments/routes-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));

  const routesCapture = await pageRoutes.screenshot({ type: "jpeg", quality: 90, fullPage: true });
  saveToTargets("v5_exp_c_route_connectors.jpg", routesCapture);
  await pageRoutes.close();

  // ----------------------------------------------------
  // 4. EXPERIMENT D: Services Directional Transitions (/experiments/services-v5)
  // ----------------------------------------------------
  console.log("\n[4/6] Capturing Experiment D: Services Directional Transitions...");
  const pageServices = await browser.newPage();
  await pageServices.setViewport({ width: 1440, height: 900 });
  await pageServices.goto(`${BASE_URL}/experiments/services-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1000));

  // Service 1 (Air)
  const servAir = await pageServices.screenshot({ type: "jpeg", quality: 90 });
  saveToTargets("v5_exp_d_services_air.jpg", servAir);

  // Click Ocean Services (horizontal oceanic drift)
  const oceanBtn = await pageServices.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("Ocean Services"));
  });
  if (oceanBtn && oceanBtn.asElement()) {
    await oceanBtn.asElement().click();
    await new Promise((r) => setTimeout(r, 600));
    const servOcean = await pageServices.screenshot({ type: "jpeg", quality: 90 });
    saveToTargets("v5_exp_d_services_ocean.jpg", servOcean);
  }

  // Click Customs Services (aperture shutter)
  const customsBtn = await pageServices.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("Customs Services"));
  });
  if (customsBtn && customsBtn.asElement()) {
    await customsBtn.asElement().click();
    await new Promise((r) => setTimeout(r, 600));
    const servCustoms = await pageServices.screenshot({ type: "jpeg", quality: 90 });
    saveToTargets("v5_exp_d_services_customs.jpg", servCustoms);
  }
  await pageServices.close();

  // ----------------------------------------------------
  // 5. EXPERIMENT E: One 3D Signature Intermodal Bay (/experiments/three-v5)
  // ----------------------------------------------------
  console.log("\n[5/6] Capturing Experiment E: 3D Intermodal Bay...");
  const pageThree = await browser.newPage();
  await pageThree.setViewport({ width: 1440, height: 900 });
  await pageThree.goto(`${BASE_URL}/experiments/three-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1200));

  const threeCapture = await pageThree.screenshot({ type: "jpeg", quality: 90 });
  saveToTargets("v5_exp_e_three_intermodal.jpg", threeCapture);
  await pageThree.close();

  // ----------------------------------------------------
  // 6. MASTER COMBINED JOURNEY: /experiments/homepage-v5
  // ----------------------------------------------------
  console.log("\n[6/6] Capturing Master Combined Journey (/experiments/homepage-v5)...");

  // A. Desktop 100% Full Page & Sectionals
  const pageHomeDesktop = await browser.newPage();
  await pageHomeDesktop.setViewport({ width: 1440, height: 900 });
  await pageHomeDesktop.goto(`${BASE_URL}/experiments/homepage-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));

  // Capture Hero Section
  const heroShot = await pageHomeDesktop.screenshot({ type: "jpeg", quality: 90 });
  saveToTargets("v5_hero_desktop_100.jpg", heroShot);

  // Scroll to Network
  await pageHomeDesktop.evaluate(() => {
    const el = document.getElementById("network");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1200));
  const networkShot = await pageHomeDesktop.screenshot({ type: "jpeg", quality: 90 });
  saveToTargets("v5_network_desktop_100.jpg", networkShot);

  // Scroll to Project Cargo
  await pageHomeDesktop.evaluate(() => {
    const el = document.getElementById("cargo");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1200));
  const cargoShot = await pageHomeDesktop.screenshot({ type: "jpeg", quality: 90 });
  saveToTargets("v5_project_cargo_desktop_100.jpg", cargoShot);

  // Scroll to 3D Intermodal Bay
  await pageHomeDesktop.evaluate(() => {
    const el = document.getElementById("intermodal-3d");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1200));
  const threeShot = await pageHomeDesktop.screenshot({ type: "jpeg", quality: 90 });
  saveToTargets("v5_intermodal_3d_desktop_100.jpg", threeShot);

  // Scroll to Services
  await pageHomeDesktop.evaluate(() => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1200));
  const servicesShot = await pageHomeDesktop.screenshot({ type: "jpeg", quality: 90 });
  saveToTargets("v5_services_desktop_100.jpg", servicesShot);

  // Full Page Desktop 100
  const fullDesktop100 = await pageHomeDesktop.screenshot({ type: "jpeg", quality: 85, fullPage: true });
  saveToTargets("v5_full_page_desktop_100.jpg", fullDesktop100);
  await pageHomeDesktop.close();

  // B. Desktop 75% Scale
  const pageHome75 = await browser.newPage();
  await pageHome75.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await pageHome75.goto(`${BASE_URL}/experiments/homepage-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));
  const fullDesktop75 = await pageHome75.screenshot({ type: "jpeg", quality: 85, fullPage: true });
  saveToTargets("v5_full_page_desktop_75.jpg", fullDesktop75);
  await pageHome75.close();

  // C. Mobile Viewport (390 x 844 - iPhone 14)
  const pageHomeMobile = await browser.newPage();
  await pageHomeMobile.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await pageHomeMobile.goto(`${BASE_URL}/experiments/homepage-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));

  const mobileHero = await pageHomeMobile.screenshot({ type: "jpeg", quality: 90 });
  saveToTargets("v5_hero_mobile.jpg", mobileHero);

  const fullMobile = await pageHomeMobile.screenshot({ type: "jpeg", quality: 85, fullPage: true });
  saveToTargets("v5_full_page_mobile.jpg", fullMobile);
  await pageHomeMobile.close();

  await browser.close();
  console.log("\n=== ALL V5 MOTION & EXPERIMENT CAPTURES COMPLETED SUCCESSFULLY! ===");
})();
