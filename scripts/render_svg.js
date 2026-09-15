const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 1208 });
  const svg = fs.readFileSync("scratch/authoritative_india.svg", "utf8");
  await page.setContent(`<!DOCTYPE html><html><body style="margin:0; background:#040810; display:flex; justify-content:center; align-items:center;">${svg}</body></html>`);
  await page.screenshot({ path: "scratch/authoritative_india_rendered.jpg", type: "jpeg", quality: 90 });
  await page.screenshot({ path: "C:/Users/abc/.gemini/antigravity/brain/9e76d7fd-fe66-4437-bb47-6d1d9c749a01/authoritative_india_rendered.jpg", type: "jpeg", quality: 90 });
  await browser.close();
  console.log("Rendered scratch/authoritative_india_rendered.jpg successfully.");
})();
