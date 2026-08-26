# Experience Profile Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sync portfolio experience, bio, SEO, and Hero caption with New Leaf (current part-time) and Appetite Studio (ended May 2026).

**Architecture:** Content-only updates in existing data/config/Hero files. No new components.

**Tech Stack:** React/TypeScript portfolio (`portfolio.ts`, `seo.ts`, `Hero.tsx`)

## Global Constraints

- Copy must match CV Master v7 New Leaf bullets (support, training, tools, ERP).
- Appetite period: Nov 2025 - May 2026; not current.
- New Leaf is the only `current: true` experience.
- No layout redesign.

---

## File map

| File | Responsibility |
|------|----------------|
| `src/data/portfolio.ts` | experiences array, contactInfo.bio |
| `src/config/seo.ts` | worksFor + person description |
| `src/components/Hero.tsx` | photo location caption |

---

### Task 1: Update experiences + bio in portfolio.ts

**Files:** `src/data/portfolio.ts`

- [ ] Insert New Leaf experience as first item (`current: true`, Part-time, Jul 2024 - Present)
- [ ] Set Appetite to Nov 2025 - May 2026, `current: false`
- [ ] Renumber ids 1…n
- [ ] Update `contactInfo.bio` to 2+ years + New Leaf + open to opportunities
- [ ] Verify Experience/Journey components still render (they read `exp.current`)

### Task 2: Update SEO structured data

**Files:** `src/config/seo.ts`

- [ ] Change `worksFor` to New Leaf School For Quran And English / IT Coordinator
- [ ] Soften person description if it implies Appetite employment
- [ ] Keep `seeks` JobPosting

### Task 3: Hero caption + smoke check

**Files:** `src/components/Hero.tsx`

- [ ] Change photo caption from Kozhikode, India → Dublin, Ireland
- [ ] Grep for leftover "Appetite" as Present / current employer claims
- [ ] Run `npm run build` (or typecheck) to confirm no TS errors
