const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const OUT_DIR = path.join(__dirname, "..", "docs", "network", "screenshots_final");
fs.mkdirSync(OUT_DIR, { recursive: true });

const BASE_URL = "http://localhost:3005/experiments/global-movement-atlas";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    // 01 Desktop Default (1440 x 920)
    console.log("[1/6] Capturing 01_desktop_default.png...");
    const pDesktop = await browser.newPage();
    await pDesktop.setViewport({ width: 1440, height: 920, deviceScaleFactor: 2 });
    await pDesktop.goto(BASE_URL, { waitUntil: "networkidle0", timeout: 20000 });
    await new Promise((r) => setTimeout(r, 1200));
    await pDesktop.screenshot({
      path: path.join(OUT_DIR, "01_desktop_default.png"),
      fullPage: false,
    });
    console.log("  -> Saved 01_desktop_default.png");

    // 02 Desktop Selected Route (MV-11 Venice to Mundra Boom Crane)
    console.log("[2/6] Capturing 02_desktop_selected_route.png (MV-11)...");
    const buttons = await pDesktop.$$("button");
    for (const b of buttons) {
      const text = await pDesktop.evaluate((el) => el.innerText, b);
      if (text && text.includes("MV-11")) {
        await b.click();
        break;
      }
    }
    await new Promise((r) => setTimeout(r, 800));
    await pDesktop.screenshot({
      path: path.join(OUT_DIR, "02_desktop_selected_route.png"),
      fullPage: false,
    });
    console.log("  -> Saved 02_desktop_selected_route.png");

    // 06 World -> India Narrative Transition
    console.log("[3/6] Capturing 06_world_to_india_transition.png...");
    // Scroll down to the narrative transition handoff section
    await pDesktop.evaluate(() => {
      window.scrollTo(0, 780);
    });
    await new Promise((r) => setTimeout(r, 800));
    await pDesktop.screenshot({
      path: path.join(OUT_DIR, "06_world_to_india_transition.png"),
      fullPage: false,
    });
    console.log("  -> Saved 06_world_to_india_transition.png");

    // 05 India Map section
    console.log("[4/6] Capturing 05_india_map.png...");
    await pDesktop.evaluate(() => {
      const el = document.getElementById("where-freyer-is");
      if (el) el.scrollIntoView();
    });
    await new Promise((r) => setTimeout(r, 1000));
    await pDesktop.screenshot({
      path: path.join(OUT_DIR, "05_india_map.png"),
      fullPage: false,
    });
    console.log("  -> Saved 05_india_map.png");
    await pDesktop.close();

    // 03 Mobile Default (390 x 844)
    console.log("[5/6] Capturing 03_mobile_default.png...");
    const pMobile = await browser.newPage();
    await pMobile.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await pMobile.goto(BASE_URL, { waitUntil: "networkidle0", timeout: 20000 });
    await new Promise((r) => setTimeout(r, 1000));
    await pMobile.screenshot({
      path: path.join(OUT_DIR, "03_mobile_default.png"),
      fullPage: false,
    });
    console.log("  -> Saved 03_mobile_default.png");

    // 04 Mobile Selected Route (Tapping MV-09 to pop dossier)
    console.log("[6/6] Capturing 04_mobile_selected_route.png...");
    const mButtons = await pMobile.$$("button");
    for (const b of mButtons) {
      const text = await pMobile.evaluate((el) => el.innerText, b);
      if (text && text.includes("MV-09")) {
        await b.click();
        break;
      }
    }
    await new Promise((r) => setTimeout(r, 800));
    await pMobile.screenshot({
      path: path.join(OUT_DIR, "04_mobile_selected_route.png"),
      fullPage: false,
    });
    console.log("  -> Saved 04_mobile_selected_route.png");
    await pMobile.close();

    console.log("[COMPLETE] All 6 refined screenshots captured successfully in docs/network/screenshots_final/!");
  } catch (err) {
    console.error("Puppeteer capture error:", err);
  } finally {
    await browser.close();
  }
})();
