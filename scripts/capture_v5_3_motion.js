const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const BASE_URL = "http://localhost:3000";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_V5_3 = path.join(__dirname, "../screenshots/v5-3");
const TEMP_DIR = path.join(__dirname, "../.tmp_frames_v53");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_V5_3, { recursive: true });
fs.mkdirSync(TEMP_DIR, { recursive: true });

function cleanTemp() {
  const files = fs.readdirSync(TEMP_DIR);
  for (const f of files) {
    fs.unlinkSync(path.join(TEMP_DIR, f));
  }
}

function saveFileToTargets(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_V5_3, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved file: ${filename}`);
}

function compileGif(outputFilename, fps = 10, scaleWidth = 960) {
  const outPath = path.join(SCREENSHOTS_V5_3, outputFilename);
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
  console.log("   PASS 5.3 — THE SIGNATURE CUT MOTION SUITE      ");
  console.log("==================================================");

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  // 1. Static Layout Screenshots
  console.log("\n[1/5] Capturing full page layout screenshots for /experiments/homepage-v5-3...");
  await page.goto(`${BASE_URL}/experiments/homepage-v5-3`, {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  await new Promise((r) => setTimeout(r, 1200));

  // Desktop 100%
  const fullPageDesktop100 = await page.screenshot({ fullPage: true, type: "jpeg", quality: 90 });
  saveFileToTargets("v5_3_full_page_desktop_100.jpg", fullPageDesktop100);

  // Desktop 75% scale
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  const fullPageDesktop75 = await page.screenshot({ fullPage: true, type: "jpeg", quality: 85 });
  saveFileToTargets("v5_3_full_page_desktop_75.jpg", fullPageDesktop75);

  // Mobile 390px
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  const fullPageMobile = await page.screenshot({ fullPage: true, type: "jpeg", quality: 85 });
  saveFileToTargets("v5_3_full_page_mobile.jpg", fullPageMobile);

  // Restore Desktop 1440 Viewport
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  // 2. Motion A: Cargo Record 1 -> 2 (37.6 MT -> 482 MT Explosion)
  console.log("\n[2/5] Recording Motion A: Cargo Record 1 -> 2...");
  await page.goto(`${BASE_URL}/experiments/homepage-v5-3`, { waitUntil: "networkidle2" });
  await page.evaluate(() => {
    const el = document.getElementById("project-cargo-film-section");
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  });
  await new Promise((r) => setTimeout(r, 600));

  cleanTemp();
  let frameA = 0;
  // Frame 0-12: Record 1 (37.6 MT) settled state
  for (let i = 0; i < 12; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(frameA++).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 60, y: 60, width: 1320, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 110));
  }

  // Click Record 2 (482 MT)
  const buttons = await page.$$("button");
  for (const b of buttons) {
    const text = await page.evaluate((el) => el.textContent, b);
    if (text && text.includes("482 MT")) {
      await b.click();
      break;
    }
  }

  // Frame 13-32: Record 2 entry & scale explosion
  for (let i = 0; i < 20; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(frameA++).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 60, y: 60, width: 1320, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 110));
  }
  compileGif("v5_3_motion_a_cargo_1_to_2.gif", 10, 920);

  // 3. Motion B: Cargo Record 2 -> 3 (482 MT -> 2 x 148 MT Tandem)
  console.log("\n[3/5] Recording Motion B: Cargo Record 2 -> 3...");
  cleanTemp();
  let frameB = 0;

  // Click Record 3 (2 x 148 MT)
  for (const b of buttons) {
    const text = await page.evaluate((el) => el.textContent, b);
    if (text && text.includes("2 × 148 MT")) {
      await b.click();
      break;
    }
  }

  for (let i = 0; i < 24; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(frameB++).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 60, y: 60, width: 1320, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 110));
  }
  compileGif("v5_3_motion_b_cargo_2_to_3.gif", 10, 920);

  // 4. Motion C: Cartographic Theatre (Origin-Outward India Reveal)
  console.log("\n[4/5] Recording Motion C: India Cartography Reveal...");
  await page.evaluate(() => {
    const el = document.getElementById("india-cartography-section");
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  });
  await new Promise((r) => setTimeout(r, 600));

  // Trigger Replay
  const replayBtn = await page.$('button[title="Replay sequence"]');
  if (replayBtn) await replayBtn.click();

  cleanTemp();
  for (let i = 0; i < 44; i++) {
    const framePath = path.join(TEMP_DIR, `frame_${String(i).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 80, y: 70, width: 1280, height: 780 },
    });
    await new Promise((r) => setTimeout(r, 120));
  }
  compileGif("v5_3_motion_c_india_reveal.gif", 9, 900);

  // 5. Motion D: Cargo -> Services Scroll Transition Continuum
  console.log("\n[5/5] Recording Motion D: Cargo -> Services Native Scroll Continuum...");
  await page.evaluate(() => {
    const el = document.getElementById("continuous-voyage-transition");
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  });
  await new Promise((r) => setTimeout(r, 500));

  cleanTemp();
  const transitionStartTop = await page.evaluate(() => {
    const el = document.getElementById("continuous-voyage-transition");
    return el ? el.offsetTop : 0;
  });

  // Smooth scroll through the 220vh transition track (capturing 32 steps)
  for (let i = 0; i < 32; i++) {
    const scrollY = transitionStartTop + i * 40;
    await page.evaluate((y) => {
      window.scrollTo({ top: y, behavior: "instant" });
    }, scrollY);
    await new Promise((r) => setTimeout(r, 90));

    const framePath = path.join(TEMP_DIR, `frame_${String(i).padStart(3, "0")}.png`);
    await page.screenshot({
      path: framePath,
      clip: { x: 80, y: 60, width: 1280, height: 780 },
    });
  }
  compileGif("v5_3_motion_d_cargo_to_services.gif", 10, 920);

  await browser.close();
  console.log("\n==================================================");
  console.log("   ALL PASS 5.3 SIGNATURE RECORDINGS COMPLETE     ");
  console.log("==================================================");
})();
