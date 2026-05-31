# Mobile-First Responsive Pass — Design Spec

**Date:** 2026-05-31  
**Status:** Approved  
**Scope:** Fix mobile overflow and layout issues. Desktop layout is unchanged.

---

## Problem

The portfolio renders correctly on desktop but has overflow (content going "out of bounds") on mobile devices, primarily in the Hero section and section kicker bars throughout the site.

Root causes identified by code inspection:

1. **Hero name overflows right edge** — `clamp(3.5rem, 8.4vw, 8.6rem)` clamps to ~60px on small screens; combined with `px-8` container padding (64px total horizontal padding on 375px screen = only 311px content width), "Junaidh Haneefa" at that size is ~390px wide → overflows by ~80px.
2. **Section kicker bars overflow** — Every section has a `flex` row: `[whitespace-nowrap label] [flex-1 divider] [whitespace-nowrap label]`. On narrow screens (~279px effective width after double padding), the two labels together exceed the container width, squeezing the divider out and triggering overflow.
3. **Double padding stacking** — `container px-6` + `section-shell px-6` stacks to 96px total horizontal padding on mobile, leaving only ~279px content width on a 375px phone.
4. **Contact rows cramped** — `flex justify-between gap-8` forces a wide gap between label and value, making long values (email) overflow-risk.
5. **About service rows** — `flex gap-6` with a large decorative number takes space from the description column on narrow screens.

---

## Constraints

- **Desktop (md and above) is NOT touched.** Every fix uses only the base (mobile-first) Tailwind class, letting existing `sm:` / `md:` / `lg:` breakpoints take over.
- No redesign — layout intent is preserved, only spacing and font sizing adjusted.
- Framer Motion animations are unchanged.

---

## Changes by File

### `src/components/Hero.tsx`

| What | From | To |
|------|------|----|
| Container padding (mobile) | `px-8 sm:px-10 lg:px-16` | `px-5 sm:px-10 lg:px-16` |
| Heading font clamp (min) | `clamp(3.5rem, 8.4vw, 8.6rem)` | `clamp(2rem, 9vw, 8.6rem)` |
| Social bar link vertical padding (mobile) | `py-4` | `py-3 sm:py-4` |

**Why font clamp change works:**  
At 375px: `9vw = 33.75px` > `2rem = 34px` → picks ~34px. "Junaidh Haneefa" at 34px in Cormorant Garamond ≈ 270px wide, fits in 335px content area (375 − 40px padding). Scales fluidly at `9vw` from there. Desktop unaffected — at 1200px `9vw = 108px` exceeds `8.6rem ≈ 146px`, so clamp picks `8.6rem` same as before.

### `src/index.css` — `.section-shell` utility

| What | From | To |
|------|------|----|
| Base (mobile) horizontal padding | `px-6` | `px-4` |

The `sm:px-8` and `lg:px-12` remain unchanged. This gains 8px each side on mobile.

### All section components: `About.tsx`, `Skills.tsx`, `Experience.tsx`, `Education.tsx`, `Projects.tsx`, `Publications.tsx`, `Contact.tsx`

**Kicker bar fix** — in each component, the right-side `whitespace-nowrap` span in the section label bar gets `hidden sm:inline` (or `hidden sm:block`) added so it disappears on mobile and the `flex-1` divider line always has room.

Pattern to find and fix:
```tsx
// BEFORE
<span className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase whitespace-nowrap">
  {rightLabel}
</span>

// AFTER
<span className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase whitespace-nowrap hidden sm:inline">
  {rightLabel}
</span>
```

### `src/components/Contact.tsx`

| What | From | To |
|------|------|----|
| Contact row gap | `gap-8` | `gap-3 sm:gap-8` |

### `src/components/About.tsx`

| What | From | To |
|------|------|----|
| Service row gap | `gap-6 md:gap-10` | `gap-4 md:gap-10` |

---

## What Is NOT Changed

- Navigation component (mobile menu already works; desktop nav is correct)
- Any animation or Framer Motion config
- Any `md:`, `lg:`, `xl:` Tailwind classes
- Color scheme, fonts, design tokens
- Desktop layout of any section

---

## Success Criteria

- On a 375px viewport: Hero name fully visible with no horizontal scroll
- On a 375px viewport: No section triggers horizontal overflow (test with `overflow-x: hidden` temporarily removed)
- Section kicker bars show the gold divider line on all screen sizes
- Desktop (1280px+) renders identically to before
