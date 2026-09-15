const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const BASE_URL = "http://localhost:3000/experiments/world-class-audit";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_AUDIT = path.join(__dirname, "../screenshots/audit");
const TEMP_DIR = path.join(__dirname, "../.tmp_frames_audit");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_AUDIT, { recursive: true });
fs.mkdirSync(TEMP_DIR, { recursive: true });

function cleanTemp() {
  const files = fs.readdirSync(TEMP_DIR);
  for (const f of files) {
    fs.unlinkSync(path.join(TEMP_DIR, f));
  }
}

function saveFileToTargets(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_AUDIT, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved screenshot: ${filename}`);
}

function compileGif(outputFilename, fps = 10, scaleWidth = 960) {
  const outPath = path.join(SCREENSHOTS_AUDIT, outputFilename);
  const inputPattern = path.join(TEMP_DIR, "frame_%03d.png");
  console.log(`Compiling GIF ${outputFilename} with ffmpeg...`);

  try {
    const cmd = `ffmpeg -y -framerate ${fps} -i "${inputPattern}" -vf "fps=${fps},scale=${scaleWidth}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 "${outPath}"`;
    execSync(cmd, { stdio: "ignore" });
    const gifBuffer = fs.readFileSync(outPath);
    fs.writeFileSync(path.join(SCREENSHOTS_ROOT, outputFilename), gifBuffer);
    fs.writeFileSync(path.join(ARTIFACTS_DIR, outputFilename), gifBuffer);
    console.log(`Successfully compiled GIF: ${outputFilename}`);
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
  console.log("   FREYER WORLD-CLASS AUDIT EXPERIMENT CAPTURE    ");
  console.log("==================================================");

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  console.log(`Navigating to ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: "networkidle2", timeout: 45000 });
  await new Promise(r => setTimeout(r, 2000));

  // 1. Full Page Desktop
  console.log("Capturing full page desktop...");
  const fullPageBuf = await page.screenshot({ fullPage: true, type: "jpeg", quality: 85 });
  saveFileToTargets("audit_master_full_desktop.jpg", fullPageBuf);

  // 2. Experiment 1: Hero Viewport
  console.log("Capturing Exp 1: Hero Desktop...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  const heroBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp1_hero_desktop.jpg", heroBuf);

  // 3. Experiment 2: Project Cargo Stage (Initial & Phase 3)
  console.log("Capturing Exp 2: Project Cargo...");
  await page.evaluate(() => {
    const el = document.getElementById("project-cargo-experiment");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  const cargo1Buf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp2_cargo_displacement_desktop.jpg", cargo1Buf);

  // Click Phase 3 button
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("#project-cargo-experiment button"));
    const p3Btn = btns.find(b => b.textContent && b.textContent.includes("03."));
    if (p3Btn) p3Btn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  const cargo3Buf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp2_cargo_displacement_phase3.jpg", cargo3Buf);

  // 4. Experiment 3: India Cartographic Terminal (Chennai & Mumbai)
  console.log("Capturing Exp 3: Cartographic Terminal...");
  await page.evaluate(() => {
    const el = document.getElementById("cartographic-experiment");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  const mapHqBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp3_cartographic_desktop.jpg", mapHqBuf);

  // Click Mumbai button
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("#cartographic-experiment button"));
    const mumbaiBtn = btns.find(b => b.textContent && b.textContent.includes("Mumbai"));
    if (mumbaiBtn) mumbaiBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  const mapMumbaiBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp3_cartographic_mumbai.jpg", mapMumbaiBuf);

  // 5. Experiment 4: Services Horizon (Ocean & Air)
  console.log("Capturing Exp 4: Services Horizon...");
  await page.evaluate(() => {
    const el = document.getElementById("services-experiment");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));

  // Click Ocean Services
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("#services-experiment button"));
    const oceanBtn = btns.find(b => b.textContent && b.textContent.includes("Ocean"));
    if (oceanBtn) oceanBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  const srvOceanBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp4_services_ocean.jpg", srvOceanBuf);

  // Click Air Services
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("#services-experiment button"));
    const airBtn = btns.find(b => b.textContent && b.textContent.includes("Air"));
    if (airBtn) airBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  const srvAirBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp4_services_air.jpg", srvAirBuf);

  // 6. Experiment 5: Cargo Clearance Caliper
  console.log("Capturing Exp 5: Cargo Caliper...");
  await page.evaluate(() => {
    const el = document.getElementById("caliper-experiment");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  const calCraneBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp5_caliper_boomcrane.jpg", calCraneBuf);

  // Click Qingdao unit
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("#caliper-experiment button"));
    const qingdaoBtn = btns.find(b => b.textContent && b.textContent.includes("Qingdao"));
    if (qingdaoBtn) qingdaoBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  const calQingdaoBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp5_caliper_qingdao.jpg", calQingdaoBuf);

  // 7. Mobile Viewport Captures (390 x 844 iPhone 14 Pro standard)
  console.log("Switching to mobile viewport (390 x 844)...");
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(BASE_URL, { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1500));

  // Mobile Hero
  console.log("Capturing Mobile Hero...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  const mobHeroBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp1_hero_mobile.jpg", mobHeroBuf);

  // Mobile Cargo
  console.log("Capturing Mobile Cargo...");
  await page.evaluate(() => {
    const el = document.getElementById("project-cargo-experiment");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  const mobCargoBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp2_cargo_mobile.jpg", mobCargoBuf);

  // Mobile Cartography
  console.log("Capturing Mobile Cartography...");
  await page.evaluate(() => {
    const el = document.getElementById("cartographic-experiment");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  const mobMapBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp3_cartographic_mobile.jpg", mobMapBuf);

  // Mobile Services
  console.log("Capturing Mobile Services...");
  await page.evaluate(() => {
    const el = document.getElementById("services-experiment");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  const mobSrvBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp4_services_mobile.jpg", mobSrvBuf);

  // Mobile Caliper
  console.log("Capturing Mobile Caliper...");
  await page.evaluate(() => {
    const el = document.getElementById("caliper-experiment");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  const mobCalBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFileToTargets("audit_exp5_caliper_mobile.jpg", mobCalBuf);

  // 8. Capture Motion GIFs (Desktop Viewport)
  console.log("Preparing motion frames for Cargo Displacement GIF...");
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  await page.goto(BASE_URL, { waitUntil: "networkidle2" });
  await page.evaluate(() => {
    const el = document.getElementById("project-cargo-experiment");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));

  cleanTemp();
  let frameIdx = 0;

  // Capture Cargo Phase transitions
  for (let phase = 0; phase < 3; phase++) {
    await page.evaluate((p) => {
      const btns = Array.from(document.querySelectorAll("#project-cargo-experiment button"));
      const pBtn = btns.find(b => b.textContent && b.textContent.includes(`0${p + 1}.`));
      if (pBtn) pBtn.click();
    }, phase);

    for (let f = 0; f < 8; f++) {
      const framePath = path.join(TEMP_DIR, `frame_${String(frameIdx++).padStart(3, "0")}.png`);
      await page.screenshot({ path: framePath });
      await new Promise(r => setTimeout(r, 80));
    }
  }
  compileGif("audit_motion_cargo_displacement.gif", 10, 800);

  // Capture Caliper Adjustment GIF
  console.log("Preparing motion frames for Caliper Adjustment GIF...");
  await page.evaluate(() => {
    const el = document.getElementById("caliper-experiment");
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));

  cleanTemp();
  frameIdx = 0;

  const loads = ["boom-crane", "qingdao-unit", "kobe-roro"];
  for (const l of loads) {
    await page.evaluate((loadKey) => {
      const btns = Array.from(document.querySelectorAll("#caliper-experiment button"));
      const b = btns.find(btn => {
        if (loadKey === "boom-crane") return btn.textContent.includes("Boom Crane");
        if (loadKey === "qingdao-unit") return btn.textContent.includes("Wide BBK");
        if (loadKey === "kobe-roro") return btn.textContent.includes("RORO");
        return false;
      });
      if (b) b.click();
    }, l);

    for (let f = 0; f < 8; f++) {
      const framePath = path.join(TEMP_DIR, `frame_${String(frameIdx++).padStart(3, "0")}.png`);
      await page.screenshot({ path: framePath });
      await new Promise(r => setTimeout(r, 80));
    }
  }
  compileGif("audit_motion_caliper_adjustment.gif", 10, 800);

  await browser.close();
  console.log("==================================================");
  console.log("   AUDIT VISUAL CAPTURE COMPLETED SUCCESSFULLY    ");
  console.log("==================================================");
})();
