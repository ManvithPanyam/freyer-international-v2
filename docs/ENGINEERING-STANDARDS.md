# Engineering Standards & Code Quality Guidelines

---

## 1. Architectural & TypeScript Standards

- **Server-First by Default**: Every page and component is a React Server Component (RSC) unless interactive state (`useState`, `useEffect`, `motion`) is explicitly required.
- **Strict TypeScript**: `noImplicitAny: true`, `strict: true`. Zero `any` types permitted.
- **Component Organization**:
  - `app/` — Route handlers, layouts, and page entry points.
  - `components/ui/` — Atomic accessible UI primitives.
  - `components/layout/` — Global Header, Footer, Navigation.
  - `lib/firebase/` — Firebase Client & Admin SDK initializers.
  - `lib/validations/` — Zod data schemas.
  - `types/` — Shared TypeScript interfaces.

---

## 2. Commit & Quality Verification Standards

- **Commit Style**: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`).
- **PR / Build Acceptance**: Every commit must pass `npm run typecheck`, `npm run lint`, and `npm test` cleanly before merging.
