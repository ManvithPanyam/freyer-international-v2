# Freyer International Logistics — Digital Modernization Platform

> **Current Phase**: Phase 2 — Architecture and Design Preparation  
> **Target Production Stack**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Firebase + Motion  
> **GitHub Repository**: [`RamNarra/freyer-international-logistics`](https://github.com/RamNarra/freyer-international-logistics) (Private)  
> **Firebase Project ID**: `freyer-international-logistics`

---

## 1. Project Purpose
Comprehensive digital modernization of Freyer International Logistics Pvt. Ltd., transforming a legacy 2016-era website into an enterprise-grade digital flagship with a high-converting 5-step Request-for-Quote (RFQ) engine, verified Pan-India branch network, and technical project cargo engineering showcase.

---

## 2. Master Documentation Index

All architectural and engineering specifications are located in the `docs/` directory:

- 📋 [Software Requirements Specification (SRS)](docs/SRS.md)
- 🎨 [Product & Visual Design System](docs/DESIGN-SYSTEM.md)
- 🗺️ [Information Architecture & Sitemap](docs/INFORMATION-ARCHITECTURE.md)
- 🖥️ [Homepage Structural Specification](docs/HOMEPAGE-SPEC.md)
- 🏗️ [Technical Architecture & Infrastructure](docs/ARCHITECTURE.md)
- 🗄️ [Conceptual Data Model & Database Schema](docs/DATA-MODEL.md)
- 🔒 [Security Design & Governance](docs/SECURITY.md)
- 📐 [Engineering Standards & Guidelines](docs/ENGINEERING-STANDARDS.md)
- 🧪 [Testing Strategy & Acceptance Criteria](docs/TESTING.md)
- 💻 [Developer Environment & Toolchain Audit](docs/environment-audit.md)

---

## 3. Local Setup & Verification

```bash
# 1. Install dependencies
npm install

# 2. Run TypeScript typecheck
npm run typecheck

# 3. Run linting
npm run lint

# 4. Run automated test suite
npm test

# 5. Build production bundle
npm run build
```

---

## 4. Security & Compliance
This project strictly enforces a **Zero-Secret Policy in Git**. All credentials must be injected via environment variables defined in `.env.example`.
