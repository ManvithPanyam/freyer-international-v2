const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
  await page.goto("http://localhost:3005/experiments/global-movement-atlas", { waitUntil: "networkidle0" });
  
  const buttons = await page.$$("button");
  for (const b of buttons) {
    const text = await page.evaluate(el => el.innerText, b);
    if (text && text.includes("Where Freyer Is (India)")) {
      await b.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: "docs/network/screenshots/06_atlas_india_presence.png", fullPage: false });
  console.log("Saved 06_atlas_india_presence.png");
  await browser.close();
})();
