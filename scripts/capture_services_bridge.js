const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:3000/experiments/services-bridge-workbench";
const ARTIFACTS_DIR = "C:\\Users\\abc\\.gemini\\antigravity\\brain\\9e76d7fd-fe66-4437-bb47-6d1d9c749a01";
const SCREENSHOTS_ROOT = path.join(__dirname, "../screenshots");
const SCREENSHOTS_SERVICES = path.join(__dirname, "../screenshots/services");

fs.mkdirSync(SCREENSHOTS_ROOT, { recursive: true });
fs.mkdirSync(SCREENSHOTS_SERVICES, { recursive: true });

function saveFile(filename, buffer) {
  fs.writeFileSync(path.join(SCREENSHOTS_ROOT, filename), buffer);
  fs.writeFileSync(path.join(SCREENSHOTS_SERVICES, filename), buffer);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, filename), buffer);
  console.log(`Saved screenshot: ${filename}`);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  console.log("==================================================");
  console.log("   PRECISE CAPTURES OF CONCEPTS A, B, C           ");
  console.log("==================================================");

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  await page.goto(BASE_URL, { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1200));

  // 1. Bridge In-Context
  console.log("1. Capturing Cargo-to-Services Bridge...");
  await page.evaluate(() => {
    const bridge = document.getElementById("cargo-bridge-heading");
    if (bridge) bridge.scrollIntoView({ block: "center" });
  });
  await new Promise(r => setTimeout(r, 600));
  const bridgeBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("services_bridge_desktop.jpg", bridgeBuf);

  // 2. Concept A Desktop (Editorial View)
  console.log("2. Capturing Concept A (Editorial)...");
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const btnA = btns.find(b => b.textContent.includes("Concept A"));
    if (btnA) btnA.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.evaluate(() => {
    const sec = document.getElementById("concept-a-heading");
    if (sec) sec.scrollIntoView({ block: "start" });
  });
  await new Promise(r => setTimeout(r, 600));
  const conceptABuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("services_concept_a_desktop.jpg", conceptABuf);

  // 3. Concept B Desktop (Physical Domains Grid)
  console.log("3. Capturing Concept B (Physical Domains)...");
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const btnB = btns.find(b => b.textContent.includes("Concept B"));
    if (btnB) btnB.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.evaluate(() => {
    const sec = document.getElementById("concept-b-heading");
    if (sec) sec.scrollIntoView({ block: "start" });
  });
  await new Promise(r => setTimeout(r, 600));
  const conceptBBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("services_concept_b_desktop.jpg", conceptBBuf);

  // 4. Concept C Desktop (Sequential Flow)
  console.log("4. Capturing Concept C (Sequential Flow)...");
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const btnC = btns.find(b => b.textContent.includes("Concept C"));
    if (btnC) btnC.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.evaluate(() => {
    const sec = document.getElementById("concept-c-heading");
    if (sec) sec.scrollIntoView({ block: "start" });
  });
  await new Promise(r => setTimeout(r, 600));
  const conceptCBuf = await page.screenshot({ type: "jpeg", quality: 90 });
  saveFile("services_concept_c_desktop.jpg", conceptCBuf);

  // 5. Mobile Captures (390 x 844)
  console.log("5. Switching to Mobile Viewport...");
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });

  // Mobile Concept A
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const btnA = btns.find(b => b.textContent.includes("Concept A"));
    if (btnA) btnA.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.evaluate(() => {
    const sec = document.getElementById("concept-a-heading");
    if (sec) sec.scrollIntoView({ block: "start" });
  });
  await new Promise(r => setTimeout(r, 600));
  const mobABuf = await page.screenshot({ type: "jpeg", quality: 85 });
  saveFile("services_concept_a_mobile.jpg", mobABuf);

  // Mobile Concept B
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const btnB = btns.find(b => b.textContent.includes("Concept B"));
    if (btnB) btnB.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.evaluate(() => {
    const sec = document.getElementById("concept-b-heading");
    if (sec) sec.scrollIntoView({ block: "start" });
  });
  await new Promise(r => setTimeout(r, 600));
  const mobBBuf = await page.screenshot({ type: "jpeg", quality: 85 });
  saveFile("services_concept_b_mobile.jpg", mobBBuf);

  // Mobile Concept C
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button"));
    const btnC = btns.find(b => b.textContent.includes("Concept C"));
    if (btnC) btnC.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.evaluate(() => {
    const sec = document.getElementById("concept-c-heading");
    if (sec) sec.scrollIntoView({ block: "start" });
  });
  await new Promise(r => setTimeout(r, 600));
  const mobCBuf = await page.screenshot({ type: "jpeg", quality: 85 });
  saveFile("services_concept_c_mobile.jpg", mobCBuf);

  await browser.close();
  console.log("Finished capturing all detailed services views.");
})();
