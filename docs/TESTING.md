# Quality Assurance & Testing Strategy

---

## 1. Multi-Tier Testing Pyramid

```
       /  E2E (Playwright)  \       -> Full RFQ Flow, Mobile Navigation, Accessibility
      /──────────────────────     / Integration (Vitest)   \     -> Firebase Server Actions, Zod Validation, Resend
    /──────────────────────────   /    Unit Tests (Vitest)     \   -> Utility Functions, Data Mappers, Schema Parsing
  /──────────────────────────────```

---

## 2. Automated Acceptance Checklist

- **Unit Testing**: Vitest test suites for all Zod schemas and utility functions.
- **Accessibility Testing**: Automated `@axe-core/playwright` test run on all primary routes (Target: 0 critical/serious violations).
- **Performance Verification**: Google Lighthouse CI mobile preset execution (Target: Performance ≥ 90, LCP < 2.5s, CLS < 0.10).
