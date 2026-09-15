const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const BASE_URL = "http://localhost:3000";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_V5_2 = path.join(__dirname, "../screenshots/v5-2");
const TEMP_DIR = path.join(__dirname, "../.tmp_frames_v52");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_V5_2, { recursive: true });
fs.mkdirSync(TEMP_DIR, { recursive: true });

function cleanTemp() {
  const files = fs.readdirSync(TEMP_DIR);
  for (const f of files) {
    fs.unlinkSync(path.join(TEMP_DIR, f));
  }
}

function saveFileToTargets(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_V5_2, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved file: ${filename}`);
}

function compileGif(outputFilename, fps = 10, scaleWidth = 960) {
  const outPath = path.join(SCREENSHOTS_V5_2, outputFilename);
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
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  console.log("==================================================");
  console.log("   PASS 5.2 — SIGNATURE MOMENTS MOTION SUITE      ");
  console.log("==================================================");

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  // 1. Full Page Desktop & Mobile Screenshots
  console.log("\n[1/4] Capturing full page layout screenshots for /experiments/homepage-v5-2...");
  await page.goto(`${BASE_URL}/experiments/homepage-v5-2`, {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  await new Promise((r) => setTimeout(r, 1200));

  const fullPageDesktop = await page.screenshot({ fullPage: true, type: "jpeg", quality: 90 });
  saveFileToTargets("v5_2_full_page_desktop_100.jpg", fullPageDesktop);

  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  const fullPageMobile = await page.screenshot({ fullPage: true, type: "jpeg", quality: 85 });
  saveFileToTargets("v5_2_full_page_mobile.jpg", fullPageMobile);

  // Restore Desktop Viewport
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  // 2. SIGNATURE 2: Cartographic Theatre (Origin-Outward India Reveal)
  console.log("\n[2/4] Recording Signature Moment: Cartographic Theatre Sequence...");
  await page.goto(`${BASE_URL}/experiments/homepage-v5-2`, { waitUntil: "networkidle2" });
  await page.evaluate(() => {
    window.scrollTo({ top: 850, behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 600));

  // Trigger Replay Sequence
  const replayBtn = await page.$('button[title="Replay cartographic theatre sequence"]');
  if (replayBtn) {
    await replayBtn.click();
  }

  cleanTemp();
  // Capture 45 frames across 5.5 seconds (approx 120ms per frame)
  for (let i = 0; i < 45; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(i).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 80, y: 70, width: 1280, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 120));
  }
  compileGif("v5_2_motion_cartographic_theatre.gif", 9, 900);

  // 3. SIGNATURE 1: Cargo Centerpiece (Mini-Films: 37.6 MT -> 482 MT Explosion)
  console.log("\n[3/4] Recording Signature Moment: Cargo Centerpiece Mini-Films...");
  await page.evaluate(() => {
    const el = document.getElementById("project-cargo-film-section");
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  });
  await new Promise((r) => setTimeout(r, 600));

  cleanTemp();
  let frameCount = 0;

  // Frame 0-16: Film 1 (37.6 MT) route drawing and caliper measurement
  for (let i = 0; i < 16; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(frameCount++).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 60, y: 60, width: 1320, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 120));
  }

  // Trigger Film 2 (482 MT Explosion)
  const buttons = await page.$$("button");
  for (const b of buttons) {
    const text = await page.evaluate((el) => el.textContent, b);
    if (text && text.includes("482 MT")) {
      await b.click();
      break;
    }
  }

  // Frame 17-38: Capture the 482 MT explosion into scale, perspective shift, and reorganization
  for (let i = 0; i < 22; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(frameCount++).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 60, y: 60, width: 1320, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 110));
  }

  // Trigger Film 3 (2 x 148 MT Dual Tandem Split)
  for (const b of buttons) {
    const text = await page.evaluate((el) => el.textContent, b);
    if (text && text.includes("2 × 148 MT")) {
      await b.click();
      break;
    }
  }

  // Frame 39-55: Capture 2 x 148 MT dual tandem convergence
  for (let i = 0; i < 16; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(frameCount++).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 60, y: 60, width: 1320, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 110));
  }
  compileGif("v5_2_motion_cargo_film.gif", 10, 920);

  // 4. SIGNATURE 3: The Unexpected Transition (Cargo Vector Continuous into Services)
  console.log("\n[4/4] Recording Signature Moment: Unexpected Transition into Services...");
  await page.evaluate(() => {
    const el = document.getElementById("seamless-journey-services");
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  });
  await new Promise((r) => setTimeout(r, 800));

  cleanTemp();
  let transFrameCount = 0;

  // First capture state 0 (37.1 MT Cargo Turbine Rotor)
  const morphButtons = await page.$$("button");
  for (const b of morphButtons) {
    const text = await page.evaluate((el) => el.textContent, b);
    if (text && text.includes("37.1 MT Cargo")) {
      await b.click();
      break;
    }
  }
  for (let i = 0; i < 12; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(transFrameCount++).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 100, y: 70, width: 1240, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 100));
  }

  // Trigger State 1 (Morphing Seam)
  for (const b of morphButtons) {
    const text = await page.evaluate((el) => el.textContent, b);
    if (text && text.includes("Morphing Seam")) {
      await b.click();
      break;
    }
  }
  for (let i = 0; i < 14; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(transFrameCount++).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 100, y: 70, width: 1240, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 100));
  }

  // Trigger State 2 (Locked Air Services)
  for (const b of morphButtons) {
    const text = await page.evaluate((el) => el.textContent, b);
    if (text && text.includes("Air Services")) {
      await b.click();
      break;
    }
  }
  for (let i = 0; i < 16; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(transFrameCount++).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 100, y: 70, width: 1240, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 100));
  }
  compileGif("v5_2_motion_unexpected_transition.gif", 10, 920);

  await browser.close();
  console.log("\n==================================================");
  console.log("   ALL PASS 5.2 SIGNATURE RECORDINGS COMPLETE     ");
  console.log("==================================================");
})();
