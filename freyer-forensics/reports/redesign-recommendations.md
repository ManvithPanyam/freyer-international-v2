# Strategic Rebuild & Modernization Recommendations (Locked Version 2.1)

**Target Enterprise**: Freyer International Logistics Pvt. Ltd.  
**Audience**: Leadership Team (Arun Sharma & Management)  
**Standard**: Disciplined, evidence-grounded blueprint geared for implementation.

---

## 1. Information Architecture (Sitemap Blueprint)

```
[Freyer International Logistics — Verified Information Architecture]
├── 1.0 Home (B2B Flagship Conversion & Trust Hub)
├── 2.0 About Us
│   ├── 2.1 Corporate Overview & Profile
│   ├── 2.2 Leadership & Governance (Arun Sharma & Management Team)
│   ├── 2.3 Accreditations & Compliance (AEO, IATA, WCA, SCN, ISO, AMTOI, ACAAI)
│   └── 2.4 Corporate Social Responsibility (CSR)
├── 3.0 Core Logistics Services
│   ├── 3.1 Air Freight (International Air Cargo, Charters, Express)
│   ├── 3.2 Ocean Freight (FCL, LCL, Breakbulk, Port Operations)
│   ├── 3.3 Customs Brokerage (AEO-Certified Customs House Agent)
│   ├── 3.4 Warehousing & 3PL Distribution (Storage & Inventory Management)
│   ├── 3.5 Project Cargo & Heavy Lift (Over-Dimensional Cargo, Route Surveys)
│   └── 3.6 Cargo Risk Management & Marine Transit Insurance
├── 4.0 Industry Solutions (Automotive, Heavy Engineering, Pharma, Energy, Aerospace)
│   └── *Note: Specific sector case studies require content confirmation from Freyer.*
├── 5.0 Project Cargo Showcase (Filterable Technical Case Studies: Heavy Equipment & Breakbulk)
├── 6.0 Branch Network (Interactive Pan-India Directory: 10 Hubs with Direct Contact Links)
├── 7.0 Careers Portal (Work Culture, Great Place to Work Badge, Live Job Postings, Resume Upload)
├── 8.0 Contact Us (Departmental Routing: Sales, Operations, Careers, Billing)
└── 9.0 Request a Quote (Multi-Step Guided Freight RFQ Engine)
```

---

## 2. Practical Request-for-Quote (RFQ) Flow

```
[Step 1: Service] -> Air Freight | Ocean Freight (FCL/LCL) | Project Cargo | Customs | Warehousing
[Step 2: Route]   -> Origin (City/Port/Country) -> Destination (City/Port/Country) | Incoterms (FOB/CIF/DDP)
[Step 3: Cargo]   -> Cargo Nature (General/DG/Oversized) | Weight (KG/MT) | Dimensions | Doc Upload (Packing List)
[Step 4: Shipper] -> Full Name | Company Name | Corporate Email | Phone Number
[Step 5: Action]  -> Server Action -> Firestore DB -> Resend Transactional Email -> Sales Desk Webhook
```

---

## 3. Production Technology Stack & Development Tooling

| Component | Selected Technology | Strategic Justification |
|---|---|---|
| **Framework** | **Next.js 16 (App Router) + React 19 + TypeScript** | Sub-second Static Site Generation (SSG), fast API Server Actions, robust type safety. |
| **Styling & UI** | **Tailwind CSS v4 + Radix UI Primitives** | Lightweight utility CSS (<30 KB total bundle), full WCAG AA keyboard accessibility. |
| **Animation** | **Motion (`import { motion } from "motion/react"`)** | Surgical, performance-conscious micro-interactions without main-thread bloat. |
| **Backend & DB** | **Firebase (Firestore, Storage, App Check)** | Real-time storage for RFQs, contact inquiries, branch data, and document uploads. |
| **Hosting & Edge** | **Vercel** | Global Edge CDN caching, instant SSL/TLS 1.3, seamless CI/CD Git pipeline. |
| **Email Gateway** | **Resend API** | Reliable transactional email delivery to sales team and instant receipt to shipper. |
