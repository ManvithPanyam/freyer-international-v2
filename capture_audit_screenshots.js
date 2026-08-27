const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://freyer-international-logistics.vercel.app";

const ROUTES = [
  { slug: "home", path: "/" },
  { slug: "services", path: "/services" },
  { slug: "project-cargo", path: "/services/project-cargo" },
  { slug: "projects", path: "/projects" },
  { slug: "about", path: "/about" },
  { slug: "locations", path: "/locations" },
  { slug: "network-partners", path: "/network-partners" },
  { slug: "careers", path: "/careers" },
  { slug: "contact", path: "/contact" },
  { slug: "csr", path: "/csr" },
  { slug: "privacy", path: "/privacy" },
  { slug: "terms", path: "/terms" },
];

const VIEWPORTS = [
  { name: "desktop_1920", width: 1920, height: 1080 },
  { name: "desktop_1440", width: 1440, height: 900 },
  { name: "desktop_1366", width: 1366, height: 768 },
  { name: "mobile_390", width: 390, height: 844 },
  { name: "mobile_430", width: 430, height: 932 },
];

const OUT_DIR = path.join(__dirname, "audit_production_screenshots");
fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  for (const vp of VIEWPORTS) {
    for (const r of ROUTES) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height });

      const url = `${BASE_URL}${r.path}`;
      try {
        await page.goto(url, { waitUntil: "networkidle0", timeout: 35000 });
        await new Promise((resolve) => setTimeout(resolve, 600));

        const fileName = `${r.slug}__${vp.name}.png`;
        const filePath = path.join(OUT_DIR, fileName);

        await page.screenshot({ path: filePath, fullPage: true });
        console.log(`[AUDIT] Saved: ${fileName}`);
      } catch (err) {
        console.error(`[AUDIT ERROR] ${r.slug} (${vp.name}): ${err.message}`);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
  console.log("Visual baseline audit captures complete!");
})();
