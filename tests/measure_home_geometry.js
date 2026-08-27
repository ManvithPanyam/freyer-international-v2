const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:3000";

const VIEWPORTS = [
  { name: "desktop_1920", width: 1920, height: 1080 },
  { name: "desktop_1440", width: 1440, height: 900 },
  { name: "desktop_1366", width: 1366, height: 768 },
  { name: "mobile_430", width: 430, height: 932 },
  { name: "mobile_390", width: 390, height: 844 },
];

const OUT_DIR = path.join(__dirname, "../verified_baseline_screenshots");
fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0", timeout: 35000 });
  await new Promise((r) => setTimeout(r, 800));

  // Measure bounding boxes of all sections inside main
  const sections = await page.evaluate(() => {
    const main = document.querySelector("main");
    if (!main) return [];
    return Array.from(main.children).map((child, index) => {
      const rect = child.getBoundingClientRect();
      const tagName = child.tagName.toLowerCase();
      const id = child.id || `section_${index + 1}`;
      const className = child.className.split(" ").slice(0, 3).join(" ");
      return {
        index: index + 1,
        id,
        tagName,
        className,
        top: Math.round(rect.top + window.scrollY),
        height: Math.round(rect.height),
        bottom: Math.round(rect.top + window.scrollY + rect.height),
      };
    });
  });

  console.log("=== SECTION BOUNDING BOXES ===");
  sections.forEach((s) => {
    console.log(`[Section ${s.index}] (${s.id}) -> Top: ${s.top}px, Height: ${s.height}px, Bottom: ${s.bottom}px`);
  });

  // Capture vertical positions across viewports
  for (const vp of VIEWPORTS) {
    const vpPage = await browser.newPage();
    await vpPage.setViewport({ width: vp.width, height: vp.height });
    await vpPage.goto(`${BASE_URL}/`, { waitUntil: "networkidle0", timeout: 35000 });
    await new Promise((r) => setTimeout(r, 600));

    // Full page
    await vpPage.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__fullpage.png`), fullPage: true });

    // Top / Hero
    await vpPage.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 400));
    await vpPage.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__01_hero.png`) });

    // Immediately below hero
    await vpPage.evaluate(() => window.scrollTo(0, 900));
    await new Promise((r) => setTimeout(r, 400));
    await vpPage.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__02_intro_capabilities.png`) });

    // 1 viewport after hero
    await vpPage.evaluate(() => window.scrollTo(0, 1800));
    await new Promise((r) => setTimeout(r, 400));
    await vpPage.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__03_project_cargo.png`) });

    // Middle of home
    await vpPage.evaluate(() => window.scrollTo(0, 2700));
    await new Promise((r) => setTimeout(r, 400));
    await vpPage.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__04_network_map.png`) });

    // Bottom / RFQ
    await vpPage.evaluate(() => window.scrollTo(0, 3600));
    await new Promise((r) => setTimeout(r, 400));
    await vpPage.screenshot({ path: path.join(OUT_DIR, `home_${vp.name}__05_rfq_configurator.png`) });

    console.log(`✓ Verified baseline screenshots captured for ${vp.name}`);
    await vpPage.close();
  }

  await browser.close();
  console.log("All geometry measurements and QA captures complete!");
})();
