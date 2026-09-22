const puppeteer = require("puppeteer");
const path = require("path");

const ARTIFACT_DIR = "C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10";
const URLS = [
  { name: "live_home_midpage_darkgrey", url: "https://freyer-international-v2.vercel.app", scrollY: 1800 },
  { name: "live_locations_map_darkgrey", url: "https://freyer-international-v2.vercel.app/locations", scrollY: 420 },
  { name: "live_projects_darkgrey", url: "https://freyer-international-v2.vercel.app/projects", scrollY: 0 },
  { name: "live_about_darkgrey", url: "https://freyer-international-v2.vercel.app/about", scrollY: 0 },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const item of URLS) {
    console.log(`Capturing ${item.name}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await page.goto(item.url, { waitUntil: "networkidle2", timeout: 30000 });
    if (item.scrollY > 0) {
      await page.evaluate((y) => window.scrollTo(0, y), item.scrollY);
    }
    await new Promise((r) => setTimeout(r, 1500));
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, `${item.name}.png`),
      fullPage: false,
    });
    console.log(`Saved ${item.name}.png`);
    await page.close();
  }

  await browser.close();
  console.log("Done capturing dark grey detail verification screenshots.");
})();
