const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const fs = require('fs');
const path = require('path');

const PAGES = [
  { name: 'home', url: 'https://www.freyerinternational.com/' },
  { name: 'about', url: 'https://www.freyerinternational.com/about' },
  { name: 'services', url: 'https://www.freyerinternational.com/services' },
  { name: 'air-services', url: 'https://www.freyerinternational.com/services/air-services' },
  { name: 'ocean-services', url: 'https://www.freyerinternational.com/services/ocean-services' },
  { name: 'customs-services', url: 'https://www.freyerinternational.com/services/customs-services' },
  { name: 'warehouse', url: 'https://www.freyerinternational.com/services/warehouse' },
  { name: 'risk-management', url: 'https://www.freyerinternational.com/services/risk-management' },
  { name: 'project-cargo', url: 'https://www.freyerinternational.com/services/project-cargo' },
  { name: 'locations', url: 'https://www.freyerinternational.com/locations' },
  { name: 'awards', url: 'https://www.freyerinternational.com/awards' },
  { name: 'project', url: 'https://www.freyerinternational.com/project' },
  { name: 'gallery', url: 'https://www.freyerinternational.com/gallery' },
  { name: 'csr', url: 'https://www.freyerinternational.com/corporate-social-responsibility' },
  { name: 'careers', url: 'https://www.freyerinternational.com/careers' },
  { name: 'network-partners', url: 'https://www.freyerinternational.com/network%20partners' },
  { name: 'contact-us', url: 'https://www.freyerinternational.com/contact-us' }
];

const VIEWPORTS = [
  { label: 'desktop-1440', width: 1440, height: 900, folder: 'desktop' },
  { label: 'desktop-1280', width: 1280, height: 800, folder: 'desktop' },
  { label: 'tablet-1024', width: 1024, height: 768, folder: 'tablet' },
  { label: 'tablet-768', width: 768, height: 1024, folder: 'tablet' },
  { label: 'mobile-414', width: 414, height: 896, folder: 'mobile' },
  { label: 'mobile-390', width: 390, height: 844, folder: 'mobile' },
  { label: 'mobile-375', width: 375, height: 667, folder: 'mobile' }
];

(async () => {
  console.log('Launching browser for screenshots and a11y testing...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    defaultViewport: null
  });

  const a11yResults = {};
  const perfMetrics = {};

  for (const p of PAGES) {
    console.log(`\nProcessing page: ${p.name} (${p.url})`);
    const page = await browser.newPage();
    try {
      await page.goto(p.url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Run Axe Core on desktop view
      console.log(`Running axe-core on ${p.name}...`);
      try {
        const axeResults = await new AxePuppeteer(page).analyze();
        a11yResults[p.name] = {
          violationsCount: axeResults.violations.length,
          violations: axeResults.violations.map(v => ({
            id: v.id,
            impact: v.impact,
            description: v.description,
            help: v.help,
            helpUrl: v.helpUrl,
            nodesCount: v.nodes.length,
            nodesSummary: v.nodes.slice(0, 3).map(n => ({
              html: n.html,
              target: n.target,
              failureSummary: n.failureSummary
            }))
          }))
        };
      } catch (err) {
        console.error(`Axe error on ${p.name}:`, err.message);
      }

      // Collect performance metrics
      const perf = await page.evaluate(() => {
        const timing = window.performance.timing;
        const navEntries = performance.getEntriesByType('navigation');
        const paintEntries = performance.getEntriesByType('paint');
        return {
          loadTime: timing.loadEventEnd - timing.navigationStart,
          domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
          paintEntries: paintEntries.map(e => ({ name: e.name, startTime: e.startTime })),
          nav: navEntries.length > 0 ? {
            transferSize: navEntries[0].transferSize,
            encodedBodySize: navEntries[0].encodedBodySize,
            decodedBodySize: navEntries[0].decodedBodySize,
            duration: navEntries[0].duration
          } : null
        };
      });
      perfMetrics[p.name] = perf;

      // Full page screenshot for default desktop
      const fullPageDesktopPath = path.join('freyer-forensics/screenshots/pages', `${p.name}-full.png`);
      await page.screenshot({ path: fullPageDesktopPath, fullPage: true });

      // Viewports screenshots
      for (const vp of VIEWPORTS) {
        await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
        await new Promise(r => setTimeout(r, 300));
        const outPath = path.join('freyer-forensics/screenshots', vp.folder, `${p.name}-${vp.label}.png`);
        await page.screenshot({ path: outPath, fullPage: false });
      }

    } catch (e) {
      console.error(`Failed capturing ${p.name}:`, e.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  fs.writeFileSync('freyer-forensics/data/a11y_results.json', JSON.stringify(a11yResults, null, 2));
  fs.writeFileSync('freyer-forensics/data/perf_metrics.json', JSON.stringify(perfMetrics, null, 2));
  console.log('All screenshots and accessibility reports generated successfully.');
})();
