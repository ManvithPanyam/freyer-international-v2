# Security Design & Governance Specification

---

## 1. Core Security Policies

1. **Strict No-Secret Policy in Code**:
   - Zero API keys, private keys, service account JSON files, or database credentials committed to Git.
   - All server-side secrets injected via Vercel Environment Variables.
2. **Server-Side Zod Validation**:
   - Every form and RFQ payload validated against strict Zod schemas on the server before database write.
3. **Firestore Security Rules (Principle of Least Privilege)**:
   - Client SDK direct writes disabled on `rfqs` and `inquiries`. All writes executed via authenticated Server Actions using `firebase-admin`.
4. **File Upload Restrictions**:
   - Allowed MIME types: `application/pdf`, `image/jpeg`, `image/png`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`.
   - Maximum file size: **10 MB**.
5. **HTTP Security Headers**:
   - Enforce `Strict-Transport-Security` (HSTS), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and disable `X-Powered-By`.
