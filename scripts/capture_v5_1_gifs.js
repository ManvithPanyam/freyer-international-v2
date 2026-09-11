const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const BASE_URL = "http://localhost:3000";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_V5_1 = path.join(__dirname, "../screenshots/v5-1");
const TEMP_DIR = path.join(__dirname, "../.tmp_frames");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_V5_1, { recursive: true });
fs.mkdirSync(TEMP_DIR, { recursive: true });

function cleanTemp() {
  const files = fs.readdirSync(TEMP_DIR);
  for (const f of files) {
    fs.unlinkSync(path.join(TEMP_DIR, f));
  }
}

function saveFileToTargets(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_V5_1, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved file: ${filename}`);
}

function compileGif(outputFilename, fps = 12, scaleWidth = 960) {
  const outPath = path.join(SCREENSHOTS_V5_1, outputFilename);
  const inputPattern = path.join(TEMP_DIR, "frame_%03d.png");
  console.log(`Compiling GIF ${outputFilename} with ffmpeg...`);
  
  try {
    const cmd = `ffmpeg -y -framerate ${fps} -i "${inputPattern}" -vf "fps=${fps},scale=${scaleWidth}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 "${outPath}"`;
    execSync(cmd, { stdio: "ignore" });
    const gifBuffer = fs.readFileSync(outPath);
    fs.writeFileSync(path.join(SCREENSHOTS_ROOT, outputFilename), gifBuffer);
    fs.writeFileSync(path.join(ARTIFACTS_DIR, outputFilename), gifBuffer);
    console.log(`Successfully compiled and distributed: ${outputFilename}`);
  } catch (err) {
    console.error(`Error compiling GIF ${outputFilename}:`, err.message);
  }
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });

  console.log("==================================================");
  console.log("   PASS 5.1 — MOTION DEMONSTRATIONS & GIF SUITE   ");
  console.log("==================================================");

  // ----------------------------------------------------
  // CLIP A: Map 7-Stage Cartography Construction
  // ----------------------------------------------------
  console.log("\n[1/5] Recording Clip A: Map Cartography Construction...");
  cleanTemp();
  const pageMap = await browser.newPage();
  await pageMap.setViewport({ width: 1280, height: 820 });
  await pageMap.goto(`${BASE_URL}/experiments/map-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 600));

  // Find replay button
  const replayBtn = await pageMap.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("Replay"));
  });

  if (replayBtn && replayBtn.asElement()) {
    await replayBtn.asElement().click();
  }

  // Capture 34 frames across 3.4 seconds (~10 fps)
  for (let i = 0; i < 34; i++) {
    const frameNumber = String(i + 1).padStart(3, "0");
    await pageMap.screenshot({
      path: path.join(TEMP_DIR, `frame_${frameNumber}.png`),
      type: "png",
    });
    await new Promise((r) => setTimeout(r, 100));
  }
  compileGif("v5_1_motion_a_map_construction.gif", 10, 880);
  await pageMap.close();

  // ----------------------------------------------------
  // CLIP B: Cargo Record 1 -> Record 2 Transition (Directional Displacement)
  // ----------------------------------------------------
  console.log("\n[2/5] Recording Clip B: Cargo Record 1 -> Record 2 Displacement...");
  cleanTemp();
  const pageCargoB = await browser.newPage();
  await pageCargoB.setViewport({ width: 1280, height: 800 });
  await pageCargoB.goto(`${BASE_URL}/experiments/cargo-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));

  // Capture initial state (3 frames)
  for (let i = 0; i < 3; i++) {
    const frameNumber = String(i + 1).padStart(3, "0");
    await pageCargoB.screenshot({
      path: path.join(TEMP_DIR, `frame_${frameNumber}.png`),
      type: "png",
    });
    await new Promise((r) => setTimeout(r, 80));
  }

  // Click Record 2 button (482 MT)
  const cargo2Btn = await pageCargoB.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("482 MT"));
  });
  if (cargo2Btn && cargo2Btn.asElement()) {
    await cargo2Btn.asElement().click();
  }

  // Capture transition burst (22 frames over ~1.6s)
  for (let i = 3; i < 25; i++) {
    const frameNumber = String(i + 1).padStart(3, "0");
    await pageCargoB.screenshot({
      path: path.join(TEMP_DIR, `frame_${frameNumber}.png`),
      type: "png",
    });
    await new Promise((r) => setTimeout(r, 70));
  }
  compileGif("v5_1_motion_b_cargo_trans_1_to_2.gif", 12, 920);
  await pageCargoB.close();

  // ----------------------------------------------------
  // CLIP C: Cargo Record 2 -> Record 3 Transition
  // ----------------------------------------------------
  console.log("\n[3/5] Recording Clip C: Cargo Record 2 -> Record 3 Displacement...");
  cleanTemp();
  const pageCargoC = await browser.newPage();
  await pageCargoC.setViewport({ width: 1280, height: 800 });
  await pageCargoC.goto(`${BASE_URL}/experiments/cargo-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 600));

  // Pre-select 482 MT
  const preBtn = await pageCargoC.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("482 MT"));
  });
  if (preBtn && preBtn.asElement()) {
    await preBtn.asElement().click();
    await new Promise((r) => setTimeout(r, 800));
  }

  // Capture 3 pre-transition frames
  for (let i = 0; i < 3; i++) {
    const frameNumber = String(i + 1).padStart(3, "0");
    await pageCargoC.screenshot({
      path: path.join(TEMP_DIR, `frame_${frameNumber}.png`),
      type: "png",
    });
    await new Promise((r) => setTimeout(r, 80));
  }

  // Click Record 3 (2 x 148 MT)
  const cargo3Btn = await pageCargoC.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("2 × 148 MT"));
  });
  if (cargo3Btn && cargo3Btn.asElement()) {
    await cargo3Btn.asElement().click();
  }

  // Capture displacement burst
  for (let i = 3; i < 25; i++) {
    const frameNumber = String(i + 1).padStart(3, "0");
    await pageCargoC.screenshot({
      path: path.join(TEMP_DIR, `frame_${frameNumber}.png`),
      type: "png",
    });
    await new Promise((r) => setTimeout(r, 70));
  }
  compileGif("v5_1_motion_c_cargo_trans_2_to_3.gif", 12, 920);
  await pageCargoC.close();

  // ----------------------------------------------------
  // CLIP D: Services Medium-Tailored Transitions (Air -> Ocean -> Customs)
  // ----------------------------------------------------
  console.log("\n[4/5] Recording Clip D: Services Choreography (Air -> Ocean -> Customs)...");
  cleanTemp();
  const pageServ = await browser.newPage();
  await pageServ.setViewport({ width: 1280, height: 800 });
  await pageServ.goto(`${BASE_URL}/experiments/services-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));

  let frameIdx = 1;
  // Capture Air initial
  for (let i = 0; i < 4; i++) {
    const frameNumber = String(frameIdx++).padStart(3, "0");
    await pageServ.screenshot({ path: path.join(TEMP_DIR, `frame_${frameNumber}.png`), type: "png" });
    await new Promise((r) => setTimeout(r, 80));
  }

  // Click Ocean Services (horizon drift)
  const oceanBtn = await pageServ.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("Ocean Services"));
  });
  if (oceanBtn && oceanBtn.asElement()) {
    await oceanBtn.asElement().click();
  }
  for (let i = 0; i < 14; i++) {
    const frameNumber = String(frameIdx++).padStart(3, "0");
    await pageServ.screenshot({ path: path.join(TEMP_DIR, `frame_${frameNumber}.png`), type: "png" });
    await new Promise((r) => setTimeout(r, 70));
  }

  // Click Customs Services (aperture reveal)
  const customsBtn = await pageServ.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((b) => b.textContent && b.textContent.includes("Customs Services"));
  });
  if (customsBtn && customsBtn.asElement()) {
    await customsBtn.asElement().click();
  }
  for (let i = 0; i < 14; i++) {
    const frameNumber = String(frameIdx++).padStart(3, "0");
    await pageServ.screenshot({ path: path.join(TEMP_DIR, `frame_${frameNumber}.png`), type: "png" });
    await new Promise((r) => setTimeout(r, 70));
  }
  compileGif("v5_1_motion_d_services_transitions.gif", 12, 920);
  await pageServ.close();

  // ----------------------------------------------------
  // CLIP E: Global Transition (Project Cargo -> Continuous Vector -> Services)
  // ----------------------------------------------------
  console.log("\n[5/5] Recording Clip E: Global Cargo -> Services Transition...");
  cleanTemp();
  const pageGlobal = await browser.newPage();
  await pageGlobal.setViewport({ width: 1280, height: 820 });
  await pageGlobal.goto(`${BASE_URL}/experiments/homepage-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1000));

  // Scroll to bottom of cargo section
  await pageGlobal.evaluate(() => {
    const cargo = document.getElementById("cargo");
    if (cargo) {
      const rect = cargo.getBoundingClientRect();
      window.scrollTo(0, window.scrollY + rect.bottom - 400);
    }
  });
  await new Promise((r) => setTimeout(r, 500));

  // Smoothly scroll down across the connecting vector line into services
  for (let i = 0; i < 26; i++) {
    const frameNumber = String(i + 1).padStart(3, "0");
    await pageGlobal.screenshot({ path: path.join(TEMP_DIR, `frame_${frameNumber}.png`), type: "png" });
    await pageGlobal.evaluate(() => window.scrollBy(0, 35));
    await new Promise((r) => setTimeout(r, 60));
  }
  compileGif("v5_1_motion_e_global_cargo_to_services.gif", 12, 920);
  await pageGlobal.close();

  // ----------------------------------------------------
  // Static Captures: Master Homepage V5.1 (Desktop 100%, Desktop 75%, Mobile)
  // ----------------------------------------------------
  console.log("\n[Static] Capturing Full Page V5.1 Master Experience...");
  const pageFull = await browser.newPage();
  await pageFull.setViewport({ width: 1440, height: 900 });
  await pageFull.goto(`${BASE_URL}/experiments/homepage-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));

  const fullDesktop100 = await pageFull.screenshot({ type: "jpeg", quality: 85, fullPage: true });
  saveFileToTargets("v5_1_full_page_desktop_100.jpg", fullDesktop100);

  // Desktop 75%
  await pageFull.setViewport({ width: 1920, height: 1080 });
  await new Promise((r) => setTimeout(r, 600));
  const fullDesktop75 = await pageFull.screenshot({ type: "jpeg", quality: 85, fullPage: true });
  saveFileToTargets("v5_1_full_page_desktop_75.jpg", fullDesktop75);

  // Mobile iPhone 14
  await pageFull.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await pageFull.goto(`${BASE_URL}/experiments/homepage-v5`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1200));
  const fullMobile = await pageFull.screenshot({ type: "jpeg", quality: 85, fullPage: true });
  saveFileToTargets("v5_1_full_page_mobile.jpg", fullMobile);

  await pageFull.close();
  await browser.close();

  // Clean temp frames directory
  try {
    cleanTemp();
    fs.rmdirSync(TEMP_DIR);
  } catch (e) {}

  console.log("\n==================================================");
  console.log("   ALL PASS 5.1 ANIMATED GIFS & CAPTURES READY    ");
  console.log("==================================================");
})();
