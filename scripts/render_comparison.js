const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 950, deviceScaleFactor: 1 });
  const html = fs.readFileSync("scratch/cartographic_comparison.html", "utf8");
  await page.setContent(html);
  await new Promise(r => setTimeout(r, 600));

  const buf = await page.screenshot({ type: "jpeg", quality: 90 });
  fs.writeFileSync("screenshots/india_map_silhouette_comparison.jpg", buf);
  fs.writeFileSync("screenshots/india_map/india_map_silhouette_comparison.jpg", buf);
  fs.writeFileSync("C:/Users/abc/.gemini/antigravity/brain/9e76d7fd-fe66-4437-bb47-6d1d9c749a01/india_map_silhouette_comparison.jpg", buf);
  
  await browser.close();
  console.log("Rendered india_map_silhouette_comparison.jpg successfully.");
})();
