# Forensic UX & Conversion Audit — Freyer International Logistics Pvt. Ltd.

**Date**: August 25, 2026  
**Auditor**: Senior UX Auditor & Digital Product Strategist

---

## 1. First-Impression B2B Evaluation (5–10 Second Test)

| Assessment Criteria | Forensic Observation | Score (1-10) | Severity |
|---|---|---|---|
| **What does Freyer do?** | Headline reads "Logistics Beyond Boundaries". Vague carousel images (airplane, vessel, truck) convey freight forwarding, but specific core competencies are not immediately clear above the fold. | 5/10 | **MEDIUM** |
| **Who does it serve?** | No mention of target industries (Automotive, Pharma, Aerospace, Engineering, Retail) or client profiles. First-time B2B buyers cannot self-identify. | 3/10 | **HIGH** |
| **Why should I trust it?** | Network logos (WCA, SCN, IATA) are tucked away on separate subpages rather than highlighted prominently on the homepage header/hero. | 4/10 | **HIGH** |
| **What should I do next?** | No prominent primary CTA (e.g., "Request a Quote", "Track Shipment", "Speak to a Freight Expert"). Only generic "Read More" links. | 2/10 | **CRITICAL** |

---

## 2. Prioritized UX Defect Log

### 1. [CRITICAL] Total Absence of a Request-for-Quote (RFQ) Workflow
- **Issue**: The primary conversion objective for an international logistics enterprise website is generating qualified inbound freight inquiries. The current website possesses **zero RFQ forms** across all 17 pages.
- **Impact**: B2B freight buyers looking to ship cargo are forced to hunt for a general email address or place a cold phone call. This results in massive lead leakage.

### 2. [CRITICAL] Completely Broken Careers Application Form
- **Issue**: On `/careers`, the job application form specifies `<form action="#" method="POST">`. The form has two inputs sharing the exact same `name="Name"`, an unstyled file picker that fails silently, and no confirmation state.
- **Impact**: Candidates submitting their CVs lose their input without receiving any submission receipt or error notification.

### 3. [HIGH] Contact Us Page Lacks an Interactive Contact Form
- **Issue**: On `/contact-us`, there is no form element. Shippers are presented only with raw office phone numbers and an `info@` email.
- **Impact**: Substantial barrier to entry on mobile devices where copying email addresses or initiating phone calls is cumbersome.

### 4. [HIGH] Unstructured Masonry Image Gallery in Projects
- **Issue**: On `/project`, 35 heavy-lift and breakbulk operations are dumped into an unfilterable image wall without captions, metrics, cargo descriptions, or client outcomes.
- **Impact**: High-value engineering accomplishments look like amateur photo uploads rather than professional case studies.

### 5. [MEDIUM] Multi-Branch Network Obscured in Static Text
- **Issue**: On `/locations`, office branches across India (Chennai, Mumbai, New Delhi, Bengaluru, Hyderabad, Kolkata, Kochi, Tuticorin, Ahmedabad, Tirupur) are presented in a plain list of text cards alongside a non-interactive Google map iframe.
- **Impact**: Shippers cannot filter branches by service capabilities (Air, Ocean, Customs, Warehouse) or click to initiate a branch-specific inquiry.

### 6. [MEDIUM] Header Navigation Flaws & Redundancies
- **Issue**: The top navigation contains 9 top-level links, including standalone pages for "Gallery", "Awards", "CSR", and "Network Partners", crowding the primary revenue-driving service links.
- **Impact**: Visual clutter; cognitive overload for decision-makers.
