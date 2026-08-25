# Technical Architecture & Infrastructure Specification

---

## 1. System Architecture Diagram

```
[Client Browser]
      │
      ▼
[Vercel Global Edge Network]
      │ (Next.js 16 App Router + React 19)
      ├── Static Pages (SSG / ISR for <1.0s LCP)
      └── Server Actions (Type-safe Zod Form Processing)
            │
            ├──► Firebase Cloud Firestore (Store RFQ & Inquiries)
            ├──► Firebase Storage (Secure Attachment Uploads)
            └──► Resend API (Transactional Email to Sales Desk)
```

---

## 2. Core Architectural Decisions

### 2.1 Next.js 16 App Router (React 19 + TypeScript)
- **Rationale**: Delivers server-first rendering by default, zero client-side JavaScript bloat on static pages, and type-safe Server Actions for form submissions without needing an Express/Node backend.

### 2.2 Tailwind CSS 4.x
- **Rationale**: Pure CSS build with zero runtime overhead, unified color tokens, and full responsive support.

### 2.3 Firebase Integration (Firestore, Storage, App Check)
- **Project ID**: `freyer-international-logistics`
- **Firestore**: Stores structured RFQs, general inquiries, branch data, and project case studies.
- **Storage**: Secure bucket for shipper-provided documents (packing lists, commercial invoices).
- **App Check**: Enabled on production domain to prevent bot submission attacks.

### 2.4 Transactional Email via Resend
- **Rationale**: Instant notification to the sales desk (`sales@freyerinternational.com` / Arun Sharma) upon RFQ submission with structured cargo parameters.
