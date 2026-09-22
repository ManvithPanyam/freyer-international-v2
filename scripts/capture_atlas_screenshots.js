const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "docs", "network", "screenshots");
fs.mkdirSync(OUT_DIR, { recursive: true });

const BASE_URL = "http://localhost:3005/experiments/global-movement-atlas";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    // 1. Desktop Full View (1440 x 960)
    console.log("[1/5] Capturing Desktop Hybrid Atlas...");
    const pageDesktop = await browser.newPage();
    await pageDesktop.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });
    await pageDesktop.goto(BASE_URL, { waitUntil: "networkidle0", timeout: 20000 });
    await new Promise((r) => setTimeout(r, 1200));
    await pageDesktop.screenshot({
      path: path.join(OUT_DIR, "01_atlas_desktop_1440.png"),
      fullPage: false,
    });
    console.log("  -> Saved 01_atlas_desktop_1440.png");

    // 2. Select specific route (e.g. MV-11 Venice to Mundra Boom Crane)
    console.log("[2/5] Capturing Selected Route Detail (MV-11 Venice to Mundra)...");
    // Click MV-11 button
    const buttons = await pageDesktop.$$("button");
    for (const b of buttons) {
      const text = await pageDesktop.evaluate((el) => el.innerText, b);
      if (text && text.includes("MV-11")) {
        await b.click();
        break;
      }
    }
    await new Promise((r) => setTimeout(r, 800));
    await pageDesktop.screenshot({
      path: path.join(OUT_DIR, "02_atlas_selected_route_mv11.png"),
      fullPage: false,
    });
    console.log("  -> Saved 02_atlas_selected_route_mv11.png");

    // 3. Switch to Corridors View (Prototype A)
    console.log("[3/5] Capturing Corridors Mode (Prototype A)...");
    for (const b of buttons) {
      const text = await pageDesktop.evaluate((el) => el.innerText, b);
      if (text && text.includes("Corridors (A)")) {
        await b.click();
        break;
      }
    }
    await new Promise((r) => setTimeout(r, 800));
    await pageDesktop.screenshot({
      path: path.join(OUT_DIR, "03_atlas_corridors_mode.png"),
      fullPage: false,
    });
    console.log("  -> Saved 03_atlas_corridors_mode.png");
    await pageDesktop.close();

    // 4. Mobile View (390 x 844) with open Dossier Bottom Sheet
    console.log("[4/5] Capturing Mobile View (390 x 844)...");
    const pageMobile = await browser.newPage();
    await pageMobile.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await pageMobile.goto(BASE_URL, { waitUntil: "networkidle0", timeout: 20000 });
    await new Promise((r) => setTimeout(r, 1000));
    // Click a route chip to pop bottom sheet
    const mobileButtons = await pageMobile.$$("button");
    for (const b of mobileButtons) {
      const text = await pageMobile.evaluate((el) => el.innerText, b);
      if (text && text.includes("MV-09")) {
        await b.click();
        break;
      }
    }
    await new Promise((r) => setTimeout(r, 800));
    await pageMobile.screenshot({
      path: path.join(OUT_DIR, "04_atlas_mobile_390.png"),
      fullPage: false,
    });
    console.log("  -> Saved 04_atlas_mobile_390.png");
    await pageMobile.close();

    // 5. Dual Comparison View (India Map + World Atlas)
    console.log("[5/5] Capturing Dual Canvas Sequence...");
    const pageDual = await browser.newPage();
    await pageDual.setViewport({ width: 1440, height: 1600, deviceScaleFactor: 1.5 });
    await pageDual.goto(BASE_URL, { waitUntil: "networkidle0", timeout: 20000 });
    await new Promise((r) => setTimeout(r, 800));
    const dualButtons = await pageDual.$$("button");
    for (const b of dualButtons) {
      const text = await pageDual.evaluate((el) => el.innerText, b);
      if (text && text.includes("Dual Sequence")) {
        await b.click();
        break;
      }
    }
    await new Promise((r) => setTimeout(r, 1200));
    await pageDual.screenshot({
      path: path.join(OUT_DIR, "05_atlas_dual_narrative.png"),
      fullPage: false,
    });
    console.log("  -> Saved 05_atlas_dual_narrative.png");
    await pageDual.close();

    console.log("[COMPLETE] All 5 forensic atlas screenshots captured successfully in docs/network/screenshots/!");
  } catch (err) {
    console.error("Puppeteer screenshot error:", err);
  } finally {
    await browser.close();
  }
})();
