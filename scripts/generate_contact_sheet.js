const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ROUTES = [
  { slug: 'home', title: 'Home (/)' },
  { slug: 'about', title: 'About (/about)' },
  { slug: 'services', title: 'Services (/services)' },
  { slug: 'services_project-cargo', title: 'Project Cargo (/services/project-cargo)' },
  { slug: 'services_ocean-freight', title: 'Ocean Freight (/services/ocean-freight)' },
  { slug: 'services_air-freight', title: 'Air Freight (/services/air-freight)' },
  { slug: 'services_customs-brokerage', title: 'Customs Brokerage (/services/customs-brokerage)' },
  { slug: 'services_warehousing', title: 'Warehousing & 3PL (/services/warehousing)' },
  { slug: 'services_risk-management', title: 'Risk Management (/services/risk-management)' },
  { slug: 'projects', title: 'Projects (/projects)' },
  { slug: 'locations', title: 'Locations & Network Map (/locations)' },
  { slug: 'network-partners', title: 'Network Partners (/network-partners)' },
  { slug: 'careers', title: 'Careers (/careers)' },
  { slug: 'csr', title: 'CSR (/csr)' },
  { slug: 'contact', title: 'Contact (/contact)' }
];

const BASE_DIR = path.resolve('C:/Users/abc/.gemini/antigravity/brain/2f03e65b-dc1a-48a2-ab1e-249e6016aa10');
const BEFORE_DIR = path.join(BASE_DIR, 'audit_before');
const AFTER_DIR = path.join(BASE_DIR, 'audit_after');

function getBase64(filePath) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    return 'data:image/png;base64,' + data.toString('base64');
  }
  return '';
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Freyer International — Site-Wide Design System Unification Contact Sheet</title>
  <style>
    body {
      background: #030712;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
      margin: 0;
      padding: 40px 24px;
    }
    .header {
      max-width: 1600px;
      margin: 0 auto 40px auto;
      border-bottom: 1px solid rgba(255,255,255,0.12);
      padding-bottom: 24px;
    }
    h1 {
      font-size: 32px;
      margin: 0 0 8px 0;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #fff;
    }
    .badge {
      display: inline-block;
      background: rgba(225, 57, 15, 0.2);
      color: #e1390f;
      border: 1px solid rgba(225, 57, 15, 0.4);
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    p.lead {
      color: #94a3b8;
      font-size: 15px;
      margin: 0;
      max-width: 900px;
      line-height: 1.6;
    }
    .grid-container {
      max-width: 1600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 60px;
    }
    .route-card {
      background: #091222;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      overflow: hidden;
    }
    .route-header {
      padding: 16px 24px;
      background: rgba(255,255,255,0.02);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .route-title {
      font-size: 18px;
      font-weight: 700;
      font-family: monospace;
      color: #fff;
    }
    .comparison-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      padding: 24px;
    }
    .pane {
      background: #040812;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .pane-title {
      padding: 10px 16px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: space-between;
    }
    .before-label { background: rgba(239, 68, 68, 0.15); color: #f87171; }
    .after-label { background: rgba(34, 197, 94, 0.15); color: #4ade80; }
    .image-viewport {
      max-height: 800px;
      overflow-y: auto;
      background: #02040a;
    }
    .image-viewport img {
      width: 100%;
      height: auto;
      display: block;
    }
    .mobile-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      padding: 0 24px 24px 24px;
    }
    .mobile-pane {
      max-width: 390px;
      margin: 0 auto;
    }
    .tab-bar {
      margin-top: 12px;
      display: flex;
      gap: 10px;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="badge">Forensic Visual Audit · Before / After Contact Sheet</div>
    <h1>Site-Wide Design System Unification</h1>
    <p class="lead">
      Systematic audit comparing legacy fragmented light-mode pages against the unified <strong>Editorial Industrial</strong> design system (Obsidian #030712 / #040812, Freyer International Red #e1390f, Barlow Condensed display typography, authoritative Survey-of-India cartography, and reconciled 10 verified branch stations).
    </p>
  </div>

  <div class="grid-container">
    ${ROUTES.map((r) => {
      const beforeDesktop = getBase64(path.join(BEFORE_DIR, r.slug + '_desktop.png'));
      const afterDesktop = getBase64(path.join(AFTER_DIR, r.slug + '_desktop.png'));
      const beforeMobile = getBase64(path.join(BEFORE_DIR, r.slug + '_mobile.png'));
      const afterMobile = getBase64(path.join(AFTER_DIR, r.slug + '_mobile.png'));

      return `
      <div class="route-card" id="route-${r.slug}">
        <div class="route-header">
          <div class="route-title">${r.title}</div>
          <span style="font-size: 11px; font-family: monospace; color: #94a3b8;">1440px Desktop &middot; 390px Mobile</span>
        </div>

        <div style="padding: 16px 24px 0 24px; font-size: 13px; font-weight: 700; color: #e1390f; text-transform: uppercase; letter-spacing: 0.1em;">
          Desktop Viewport (1440px)
        </div>
        <div class="comparison-row">
          <div class="pane">
            <div class="pane-title before-label">
              <span>BEFORE (Fragmented Legacy)</span>
              <span>1440px</span>
            </div>
            <div class="image-viewport">
              <img src="${beforeDesktop}" alt="${r.slug} before desktop" />
            </div>
          </div>
          <div class="pane">
            <div class="pane-title after-label">
              <span>AFTER (Unified Editorial Industrial)</span>
              <span>1440px</span>
            </div>
            <div class="image-viewport">
              <img src="${afterDesktop}" alt="${r.slug} after desktop" />
            </div>
          </div>
        </div>

        <div style="padding: 8px 24px 0 24px; font-size: 13px; font-weight: 700; color: #e1390f; text-transform: uppercase; letter-spacing: 0.1em;">
          Mobile Viewport (390px)
        </div>
        <div class="comparison-row">
          <div class="pane">
            <div class="pane-title before-label">
              <span>BEFORE Mobile</span>
              <span>390px</span>
            </div>
            <div class="image-viewport" style="max-height: 550px;">
              <img src="${beforeMobile}" alt="${r.slug} before mobile" />
            </div>
          </div>
          <div class="pane">
            <div class="pane-title after-label">
              <span>AFTER Mobile</span>
              <span>390px</span>
            </div>
            <div class="image-viewport" style="max-height: 550px;">
              <img src="${afterMobile}" alt="${r.slug} after mobile" />
            </div>
          </div>
        </div>
      </div>
      `;
    }).join('')}
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(BASE_DIR, 'contact_sheet.html'), html);
console.log('Successfully generated contact_sheet.html');
