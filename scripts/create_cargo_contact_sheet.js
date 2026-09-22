const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function createContactSheet() {
  const dir = path.join(__dirname, '../docs/projects/screenshots_prototype');
  const shots = [
    { file: '01_shanghai_desktop.png', title: '01. Shanghai Desktop (Record #09: 482 MT • 796 CBM • 29 PKG • Heavy Industrial Cargo Mass)' },
    { file: '02_genoa_desktop.png', title: '02. Genoa Desktop (Record #07: 17 Units • 68,000 KG each • Repeated Modular Units)' },
    { file: '03_venice_desktop.png', title: '03. Venice Desktop (Record #11: 37,600 KG • 2,700 × 400 × 455 cm • Elongated Boom Crane)' },
    { file: '06_manifest_state.png', title: '04. Manifest State (Clean Editorial Swiss Typography & Source-Truth Metrics)' },
    { file: '05_full_sequence_touchdown.png', title: '05. Full Sequence Motion (Mechanical Descent & Settling on Timber Dunnage)' },
    { file: '04_shanghai_mobile.png', title: '06. Shanghai Mobile Viewport (393 × 852 High-DPI Editorial Layout)' },
  ];

  const imagesBase64 = shots.map(s => {
    const p = path.join(dir, s.file);
    if (fs.existsSync(p)) {
      const data = fs.readFileSync(p).toString('base64');
      return { ...s, dataUrl: `data:image/png;base64,${data}` };
    }
    return null;
  }).filter(Boolean);

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          margin: 0;
          padding: 40px;
          background: #07090d;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
          color: #f8fafc;
        }
        .header {
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          padding-bottom: 20px;
        }
        .badge {
          display: inline-block;
          background: rgba(225, 57, 15, 0.15);
          color: #e1390f;
          border: 1px solid rgba(225, 57, 15, 0.4);
          font-size: 11px;
          letter-spacing: 0.25em;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 700;
          text-transform: uppercase;
        }
        h1 {
          font-size: 32px;
          margin: 12px 0 6px 0;
          font-weight: 900;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        p {
          margin: 0;
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.5;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .card {
          background: #0f131a;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }
        .card-header {
          padding: 12px 16px;
          font-size: 12px;
          font-weight: 700;
          color: #f1f5f9;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.4);
        }
        .card-body {
          position: relative;
          width: 100%;
          background: #000;
        }
        .card-body img {
          width: 100%;
          height: auto;
          display: block;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="badge">PROJECT ARCHIVE / CARGO IN MOTION • 3-PROJECT PROTOTYPE</div>
        <h1>Physical Cargo Engine • Editorial Refinement Pass</h1>
        <p>Verified against literal project records in <code>freyer-forensics-v2/raw/html/project.html</code>. Zero speculative HUD styling. Pure industrial documentary typography.</p>
      </div>
      <div class="grid">
        ${imagesBase64.map(s => `
          <div class="card">
            <div class="card-header">${s.title}</div>
            <div class="card-body">
              <img src="${s.dataUrl}" alt="${s.title}" />
            </div>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 2400, height: 1800, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const outPath = path.join(dir, '00_contact_sheet.png');
  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();

  console.log('Contact sheet generated at:', outPath);
}

createContactSheet().catch(console.error);
