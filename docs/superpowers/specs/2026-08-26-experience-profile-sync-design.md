# Experience & Profile Sync Design

> Approved approach: **C — Full profile sync** | 2026-08-26

## Goal

Bring the portfolio site in line with current employment reality: Appetite Studio ended May 2026; New Leaf School IT Coordinator (part-time, remote, Jul 2024–Present) is the ongoing role; bio/SEO/Hero location reflect open-to-work + Dublin.

## Source of truth

User-provided update (2026-08-26), mirrored into Obsidian CV Master v7 / User Data.

## Changes

### `src/data/portfolio.ts`

1. **Insert** New Leaf experience at top of `experiences`:
   - Title: IT Coordinator
   - Company: New Leaf School For Quran And English
   - Location: Remote (Puthucode, Palakkad, Kerala, India)
   - Period: Jul 2024 - Present
   - Type: Part-time
   - `current: true`
   - Description bullets: teacher digital support; ERP training/support; internal tools (event manager) + school website; building new school ERP
   - Skills: React, Supabase, PostgreSQL, Prisma, Training, ERP, Next.js (or subset that fits existing skill tags)

2. **Update** Appetite Studio: period `Nov 2025 - May 2026`, `current: false`; keep existing bullets.

3. **Renumber** experience `id`s as needed for stable ordering (1 = New Leaf, 2 = Appetite, …).

4. **Update** `contactInfo.bio`: 2+ years; note part-time New Leaf IT Coordinator role and availability for full-stack/mobile roles; no “currently at Appetite”.

5. Keep `siteStats` Years Experience at `2+`.

### `src/config/seo.ts`

- `worksFor` → New Leaf School For Quran And English / IT Coordinator
- Keep `seeks` (open-to-work signal)
- Person `description` may mention MSc + open to opportunities; no Appetite as current employer

### `src/components/Hero.tsx`

- Photo caption location: Dublin, Ireland (was Kozhikode, India)

## Out of scope

- Layout / animation redesign
- Obsidian cover-letter templates
- Legacy `src/constants/index.js` exp cards (if unused by App.tsx, leave; if still imported, fix Present dates)
- PDF resume file contents

## Success criteria

- Experience UI shows New Leaf as current, Appetite as ended May 2026
- Structured data does not claim Appetite employment
- Bio and Hero location match Dublin / open-to-work framing
