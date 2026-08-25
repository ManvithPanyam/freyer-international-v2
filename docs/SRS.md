# Software Requirements Specification (SRS)
## Freyer International Logistics Website Modernization
**Document Version**: 2.0  
**Phase**: Phase 2 — Build Preparation & Architecture  
**Target Delivery Stack**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Firebase + Motion

---

## 1. Product Overview & Problem Statement
Freyer International Logistics Pvt. Ltd. (incorporated 2018) is an established Indian freight forwarding and project logistics company with a 10-hub domestic network and AEO/IATA accreditations.

### The Problem:
The legacy website (built on PHP 7.4.33, jQuery 1.12.4, Bootstrap 3.4.1) suffers from:
1. **Severe Mobile Latency & Layout Instability**: Lighthouse 38/100, LCP 5.5s, CLS 0.461 on mobile.
2. **Zero Lead-Generation Infrastructure**: Complete absence of an online Request-for-Quote (RFQ) flow and broken contact forms (`action="#"`).
3. **Severe SEO Invisibility**: 100% duplicate title tags, universal duplicate `<h1>`, 404 `robots.txt` / `sitemap.xml`, and zero Schema.org structured data.
4. **193 Accessibility Violations (497 affected nodes)**: Disabled mobile zoom (`user-scalable=no`), missing form labels, missing alt text.

---

## 2. Project Goals & Non-Goals

### Goals:
- Deliver an enterprise-grade digital flagship reflecting genuine operational scale.
- Implement a guided 5-step Request-for-Quote (RFQ) wizard with instant Firestore storage and email alerts to sales.
- Achieve verified Core Web Vitals targets: Mobile LCP < 2.5s, CLS < 0.10, TBT < 200ms.
- Achieve 90+ Lighthouse Performance and 95+ Accessibility / SEO / Best Practices scores.
- Present 10 verified Indian branch hubs with direct one-tap communications.
- Structure authentic heavy-lift project photography into technical case studies.

### Non-Goals (Phase 2 & Phase 3 Baseline):
- Building an authenticated customer portal or live GPS shipment tracking (reserved for Phase 4).
- Creating multiple database backends or complex multi-cloud infrastructure.
- Fabricating unverified company statistics, employee counts, revenue claims, or SLA guarantees.

---

## 3. User Personas & User Journeys

### Personas:
1. **Enterprise Supply Chain Director / Freight Buyer**: Seeks reliable international air/ocean forwarding capacity, verified compliance credentials (AEO), and an instant rate inquiry mechanism.
2. **Project Cargo Engineering Manager**: Needs specialized heavy-lift, multi-axle, over-dimensional cargo (ODC) transport proof and route survey expertise.
3. **Import / Export Logistics Executive**: Needs fast customs clearance assistance (CHA), tariff advisory, and localized port branch contacts.
4. **Logistics Job Candidate**: Looking for corporate culture insights (Great Place to Work certification) and a functional job application portal.
5. **Internal Freyer Sales Desk (Arun Sharma & Team)**: Needs clean, structured inbound RFQ leads with cargo parameters and attachments delivered in real time.

---

## 4. Functional Requirements

### 4.1 Global Navigation & Discovery
- Responsive header with mega-menu dropdowns for Services and Branch Network.
- Prominent persistent **"Request a Quote"** primary CTA button.
- Clean semantic routing: `/about`, `/services/[slug]`, `/projects`, `/locations`, `/careers`, `/contact`, `/quote`.

### 4.2 Guided 5-Step RFQ Engine
- **Step 1: Service Selection** (Air Freight, Ocean FCL, Ocean LCL, Project Cargo, Customs, Warehousing).
- **Step 2: Route Parameters** (Origin City/Port, Destination City/Port, Incoterms: EXW/FOB/CIF/DDP).
- **Step 3: Cargo Specifications** (Nature: General/Hazardous/Cold-Chain, Weight in KG/MT, Dimensions, Document Upload).
- **Step 4: Shipper Information** (Company Name, Contact Person, Corporate Email, Phone/WhatsApp).
- **Step 5: Submission & Verification** (Zod server-side validation, Firestore document creation, Resend email dispatch, instant on-screen receipt).

### 4.3 Interactive Pan-India Branch Directory
- Directory of 10 verified hubs: Bengaluru, Chennai, Chennai Airport, Delhi/Gurugram, Mumbai, Hyderabad, Visakhapatnam, Coimbatore, Tuticorin, Ahmedabad.
- Direct `tel:`, `mailto:`, and WhatsApp click-to-contact actions.

### 4.4 Technical Project Cargo Showcase
- Structured case study grid featuring verified photography of heavy-lift machinery, transformers, and industrial plant transports.

---

## 5. Non-Functional & Acceptance Criteria

| Criteria | Target |
|---|---|
| **Mobile Lighthouse Performance** | **≥ 90 / 100** |
| **Accessibility (WCAG 2.2 AA)** | **≥ 95 / 100** (Zero critical/serious Axe violations) |
| **SEO & Best Practices** | **≥ 95 / 100** |
| **Largest Contentful Paint (LCP)**| **< 2.5 s** |
| **Cumulative Layout Shift (CLS)** | **< 0.10** |
| **Total Blocking Time (TBT)** | **< 200 ms** |
