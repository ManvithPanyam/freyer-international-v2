const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://freyer-international-logistics.vercel.app";

const ROUTES = [
  "/",
  "/services",
  "/services/project-cargo",
  "/projects",
  "/about",
  "/locations",
  "/network-partners",
  "/careers",
  "/contact",
  "/csr",
  "/privacy",
  "/terms",
  "/this-page-does-not-exist", // 404 test
];

const VIEWPORTS = [
  { name: "desktop_1920", width: 1920, height: 1080 },
  { name: "mobile_390", width: 390, height: 844 },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const results = [];

  for (const vp of VIEWPORTS) {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height });

      const url = `${BASE_URL}${route}`;
      const errors = [];
      page.on("pageerror", (err) => errors.push(err.message));

      try {
        const response = await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
        const status = response.status();
        const title = await page.title();

        // Check horizontal overflow
        const hasHorizontalScroll = await page.evaluate(() => {
          return document.documentElement.scrollWidth > window.innerWidth;
        });

        // Check header and footer existence
        const hasHeader = await page.evaluate(() => !!document.querySelector("header"));
        const hasFooter = await page.evaluate(() => !!document.querySelector("footer"));

        const isOkStatus = route === "/this-page-does-not-exist" ? status === 404 : [200, 304].includes(status);
        results.push({
          viewport: vp.name,
          route,
          status,
          title,
          hasHeader,
          hasFooter,
          hasHorizontalScroll,
          pageErrors: errors,
          success: isOkStatus && !hasHorizontalScroll && errors.length === 0,
        });

        console.log(`[${vp.name}] ${route} -> Status: ${status}, Title: "${title}", Overflow: ${hasHorizontalScroll}, Header: ${hasHeader}, Footer: ${hasFooter}`);
      } catch (e) {
        results.push({
          viewport: vp.name,
          route,
          status: "ERROR",
          error: e.message,
          success: false,
        });
        console.error(`[${vp.name}] ${route} -> Failed: ${e.message}`);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();

  const allPassed = results.every((r) => r.success);
  console.log(`\n==================================================`);
  console.log(`LIVE PRODUCTION VERIFICATION SUMMARY: ${allPassed ? "ALL 26 TESTS PASSED ✓" : "FAILURES DETECTED ✗"}`);
  console.log(`==================================================`);

  if (!allPassed) {
    process.exit(1);
  }
})();
