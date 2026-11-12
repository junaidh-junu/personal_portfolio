# Cursor Mascot Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace "The Listing" with a calm single-column page whose only decoration is a small character made from the logo's cursor.

**Architecture:** Same single-page React app. Tokens and component classes in `src/index.css` are rewritten; one new `Mascot` component draws all four poses; section components are replaced or restyled and read the same data from `src/data/site.ts`.

**Tech Stack:** Vite 5, React 18, TypeScript, Tailwind 4 (`@theme` tokens). No new dependencies.

**Spec:** `docs/superpowers/specs/2026-11-12-cursor-mascot-redesign-design.md`

## Global Constraints

- No new dependencies, pages or routes. `src/components/SEO/*`, `src/config/seo.ts`, `public/`, `cv/` untouched.
- `npm run build` and `npm run lint` (zero warnings) pass after every task.
- Dark is default; light via `data-theme="light"`. Text contrast at least 4.5:1 in both.
- All motion off under `prefers-reduced-motion`. Works from 360px wide.
- One typeface: Nunito 400/600/800. No emoji, shadows, gradients or glass.
- The character appears exactly four times. The JH logo is not redrawn.
- Project, app, role, about, research and `whatsNew.text` copy stays word for word.
- Work on branch `redesign/cursor-mascot`. Nothing is pushed.

## Review Focus

1. Light theme: the character's face and the blush props must stay readable on cream.
2. 360px width: the header character must not push the name off screen; chips and the app grid must wrap without horizontal scroll.
3. Reduced motion: no wave, blink, eye drift, "z" drift or hover lift.
4. Touch screens: every app's description is reachable without hover.
5. Keyboard: app grid items are focusable and update the detail line; focus ring visible on mint and on dark.

Each is checked in the browser in Task 5.

---

### Task 1: Tokens, type and the character

**Files:**
- Modify: `src/index.css` (the `@theme` block, light overrides, mascot classes), `index.html` (font link to Nunito 400;600;800, `theme-color` `#1b1920`)
- Create: `src/components/Mascot.tsx`
- Temporary: `src/App.tsx` renders a pose gallery when the URL has `?mascot`

**Interfaces:**
- Produces: `Mascot({ pose, size?, className? })` where `pose: 'wave' | 'phone' | 'point' | 'sleep'`, `size` is the rendered height in px (default 96). Inline SVG, `aria-hidden`.
- Produces tokens: `--color-ground #1b1920`, `--color-surface #24212b`, `--color-surface-raised #2c2934`, `--color-ink #f4efe6`, `--color-ink-muted #b3aca3`, `--color-ink-subtle #8f8996`, `--color-rule #2e2b36`, `--color-rule-strong #4a4654`, `--color-accent #7fdcb0`, `--color-accent-ink #1b1920`, `--color-blush #f6b89a`; light: `#fbf6ee`, `#ffffff`, `#f3ecdf`, `#26222b`, `#655f6b`, `#7a7480`, `#ebe4d8`, `#cfc6b6`, `#1f7a57`, `#ffffff`, `#e58f6a`. Radii `--radius-sm 12px`, `--radius-md 20px`, `--radius-lg 28px`.
- Produces `--color-mascot`: the body colour. Dark `#7fdcb0`, light `#3fae82`; face uses `--color-ground`.

- [ ] Step 1: Create the branch `redesign/cursor-mascot` from `production`.
- [ ] Step 2: Replace tokens and the font; keep existing component classes compiling.
- [ ] Step 3: Write `Mascot.tsx`. Body about 1 wide to 3.3 tall, corner radius about a quarter of the width, dot eyes, smile, stick limbs with round caps. `wave` raises the right arm; `phone` holds a small phone outline; `point` holds the right arm level toward a blush rounded square; `sleep` lies flat with closed eyes and two "z" marks.
- [ ] Step 4: Add CSS motion: `mascot-wave` (arm rotates three times, once, on load), `mascot-blink` (eyes scale to a line for 120ms every 4s), `mascot-z` (marks drift up and fade, 3s loop). Eye drift: a small hook in `Mascot` moves the eyes up to 1.5 units toward the pointer on `wave` only, throttled with `requestAnimationFrame`, skipped when reduced motion is set.
- [ ] Step 5: Add the temporary `?mascot` gallery showing all four poses at 96px and 160px on ground and surface.
- [ ] Step 6: Run `npm run build && npm run lint`. Expected: both pass.
- [ ] Step 7: Open `/?mascot` in both themes and screenshot. **Stop and show Junaidh the poses before Task 2.**
- [ ] Step 8: Commit when asked.

### Task 2: Shell, Hello, Now and Numbers

**Files:**
- Modify: `src/index.css` (`.page` max width 760px plus gutters, `.section` as space only, type classes, `.btn`, `.chip`), `src/components/Masthead.tsx`, `src/components/SectionHeading.tsx`, `src/data/site.ts`, `src/App.tsx`
- Create: `src/components/Hello.tsx`, `src/components/Numbers.tsx`
- Delete: `src/components/Listing.tsx`, `src/components/Facts.tsx`

**Interfaces:**
- `site.ts`: `listing` becomes `hello = { role: 'Full-stack and mobile developer in Dublin', status: 'Open to full-stack and mobile roles, in Dublin or remote.', tagline: 'I ship to the App Store, Google Play and the web.' }`; `whatsNew` loses `version`; `nav` becomes Work `#work`, Apps `#apps`, About `#about`, Say hello `#hello`.
- `SectionHeading({ id, title, aside?, mascot? })` where `mascot?: 'phone' | 'point'` draws the character at 56px beside the title.

- [ ] Step 1: Masthead: `Logo` at 24px plus "junaidh.me", nav, theme toggle. Drop the Email link (the header button covers it).
- [ ] Step 2: `Hello`: `Mascot pose="wave"` at 132px (96px under 600px) left of the name; `h1` name; role; status in accent; "Say hello" (primary, mailto) and "Download CV" (ghost); tagline.
- [ ] Step 3: Now: one paragraph of `whatsNew.text` under a "Now" heading, inside `Hello`'s section file or `App` as a small block.
- [ ] Step 4: `Numbers`: `facts` as chips, each showing value, label and note.
- [ ] Step 5: Build and lint pass.

### Task 3: Work and Apps

**Files:**
- Create: `src/components/Work.tsx` (replaces `Screenshots.tsx`, which is deleted)
- Modify: `src/components/Apps.tsx`, `src/index.css`

- [ ] Step 1: `Work` (`id="work"`, heading with `mascot="point"`): each `featured` item as a full-width screenshot in a 20px-radius frame (16:10, top-anchored), then title with year, description, role and stack. Items with `href` link out. `moreWork` as text rows beneath.
- [ ] Step 2: `Apps` (`id="apps"`, heading with `mascot="phone"`): icon grid, 64px icons with 16px radius, name beneath, each a `button`. State `selected` starts at 0 and changes on hover, focus and click. A fixed-height detail line under the grid shows the selected app's name, description and stack; the selected icon gets a blush ring. On `(hover: none)` the grid is followed by the full list of descriptions instead of the detail line.
- [ ] Step 3: Hover lift of 2px on work frames and app icons.
- [ ] Step 4: Build and lint pass.

### Task 4: About, Research, Path, Say hello

**Files:**
- Modify: `src/components/About.tsx`, `src/components/Research.tsx`, `src/components/Footer.tsx`, `src/App.tsx`
- Create: `src/components/Path.tsx` (replaces `History.tsx`, deleted)
- Delete: `src/components/Information.tsx`

- [ ] Step 1: `About`: portrait (72px, 20px radius), full name, the three paragraphs, then `stack` as label and items rows, then "Languages: …" and "Shipping since 2023".
- [ ] Step 2: `Research`: two plain blocks; the paper keeps its "Read the paper" link.
- [ ] Step 3: `Path`: roles then education, date column 120px, stacking under 768px; current role marked with an accent dot.
- [ ] Step 4: `Footer` becomes Say hello (`id="hello"`): `Mascot pose="sleep"`, heading "Say hello", email as the large link, then phone, GitHub, LinkedIn, CV, then "Junaidh Haneefa Muhammedhaneefa · {year}".
- [ ] Step 5: Remove the `?mascot` gallery from `App.tsx`. Build and lint pass.

### Task 5: DESIGN.md and browser checks

**Files:**
- Rewrite: `DESIGN.md`

- [ ] Step 1: Rewrite `DESIGN.md` for the new system: idea, tokens, type, shapes, the character's rules (four appearances, poses, motion), components, voice, do and don't.
- [ ] Step 2: In the browser at 1280px and 375px, dark and light: no console errors, no horizontal scroll, the five Review Focus items hold.
- [ ] Step 3: Measure contrast of muted, subtle and accent text on ground in both themes; adjust any value under 4.5:1.
- [ ] Step 4: `npm run build && npm run lint` pass. Screenshot for Junaidh.
