const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.evaluateOnNewDocument(() => {
    window.__perf = { fcp: 0, lcp: 0, lcpEl: '' };
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) {
        if (e.name === 'first-contentful-paint') window.__perf.fcp = e.startTime;
      }
    }).observe({ type: 'paint', buffered: true });

    new PerformanceObserver((l) => {
      const entries = l.getEntries();
      if (entries.length > 0) {
        const last = entries[entries.length - 1];
        window.__perf.lcp = last.startTime;
        window.__perf.lcpEl = last.element ? last.element.tagName + '.' + (last.element.className || '') : '';
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 35000 });

  const res = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const h1 = document.querySelector('h1');
    const img = document.querySelector('header img');
    return {
      fcp: window.__perf.fcp,
      lcp: window.__perf.lcp,
      lcpElement: window.__perf.lcpEl,
      h1Rendered: !!h1,
      h1Opacity: h1 ? window.getComputedStyle(h1).opacity : null,
      logoSrc: img ? img.src : null,
      logoUnoptimized: img ? !img.src.includes('/_next/image') : null,
      domInteractive: nav ? nav.domInteractive : null,
      domContentLoaded: nav ? nav.domContentLoadedEventEnd : null
    };
  });

  console.log('LOCAL SERVER MEASUREMENT:', JSON.stringify(res, null, 2));
  await browser.close();
})();
