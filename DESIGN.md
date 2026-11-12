# junaidh.me — Style Reference

**The Listing.** The site presents one developer the way an app store presents one of his apps: an icon tile, a title and subtitle, one filled action, a band of real metadata, screenshots, "About this developer", "What's new", an Information table, "More by this developer" and a version history. The idea carries the character; the surface stays flat. Dark is the default, with a light theme switch. Tokens live in the `@theme` block of `src/index.css`.

## Tokens — Colors

| Role | Token | Dark (default) | Light (`data-theme="light"`) | Use |
|---|---|---|---|---|
| Page background | `--color-ground` | `#0e0f11` | `#fbfaf7` | `html`, masthead |
| Panel | `--color-surface` | `#16181b` | `#ffffff` | What's new box, research panels, screenshot frames |
| Raised | `--color-surface-raised` | `#1d2024` | `#f3f1ec` | Reserved for wells inside panels |
| Text | `--color-ink` | `#f2f1ec` | `#111111` | Headings, titles, table values, icon tile fill |
| Secondary text | `--color-ink-muted` | `#a2a39c` | `#5f5f5a` | Subtitle, body, descriptions, table keys |
| Meta text | `--color-ink-subtle` | `#8b8c86` | `#767369` | Uppercase fact labels, stack lines |
| Hairline | `--color-rule` | `#26282c` | `#e6e3dc` | Section tops, rows, facts cells, frames |
| Strong hairline | `--color-rule-strong` | `#3a3d43` | `#c9c5bc` | Ghost button border, quiet underlines |
| Accent | `--color-accent` | `#2fbf7f` | `#0b7a4b` | The filled button, status line, links, logo cursor, current-role dot, focus |
| Accent text | `--color-accent-ink` | `#0e0f11` | `#ffffff` | Text on the filled button |

Contrast: dark muted 8.1:1, dark subtle 5.9:1, dark accent 9.4:1 on ground; light muted 6.6:1, light subtle 4.6:1, light accent 5.0:1.

## Tokens — Typography

- **Manrope** only: 400 body, 500 nav, 600 titles and table values, 800 display, section headings and the filled button. Tabular numerals everywhere (`font-variant-numeric: tabular-nums`). No mono, no serif.
- Scale: display `clamp(34px, 4.2vw, 46px)` / 1.05 / -0.03em weight 800; heading 22px/28px weight 800; lede 20px/30px (18/27 on mobile); title 16px/24px weight 600; prose 16px/26px; body 15px/24px; small 13px/20px; label 11px/16px uppercase 600 tracked 0.04em; stat 24px/28px weight 800.
- Classes: `.t-display .t-heading .t-lede .t-title .t-prose .t-body .t-small .t-label .t-stat`.

## Tokens — Spacing & Shapes

- Page width `--spacing-page` 1120px (+80px gutters); gutters 20px, 40px from 768px.
- Sections are hairline-topped bands with 32px padding, 40px from 768px. The listing header has 40px top padding (56px from 768px) and no rule.
- Radii: `--radius-sm` 9px (app icons at 36px), `--radius-md` 14px (app icons at 56px, portrait), `--radius-lg` 18px (panels, frames), `--radius-tile` 40px (the icon tile; 30px at 128px). Buttons are pills.
- Borders are 1px. No shadows, glows or gradients anywhere.

## Components

- **Icon tile** `.tile`: 176px (128px on mobile) square in `ink` with the JH mark in `ground` and its cursor stroke in the opposite theme's accent. Sits beside the name, never alone.
- **Logo** `Logo.tsx`: a JH monogram where the J and the H share one stem and the last stroke is a flat-ended text cursor in `accent`. A heavier cut is used at 32px and below. Files and rules live in `public/brand/README.md`.
- **Button primary** `.btn .btn-primary`: accent fill, 44px pill, weight 800. One per page: "Get in touch" in the header.
- **Button ghost** `.btn .btn-ghost`: 1px `rule-strong` border, hover to `ink`. "Download CV".
- **Facts band** `.facts .fact`: five centred cells (label, stat, note) divided by hairlines, 2 columns on phones, 3 on tablets, 5 on desktop.
- **Screenshot strip** `.strip` and `.frame`: horizontal scroll with snap, each plate 440px (86vw on phones) in a hairline frame, 16:10 crop from the top, panning to the bottom on hover.
- **Row** `.row`: a key on the left and a right-aligned value, hairline below. Used for Information and Compatibility.
- **App row** `.app-row`: 56px icon, name, two-line description, stack. Three columns on desktop.
- **Panel** `.panel`: `surface` with a `rule` border and 18px radius. What's new, research.
- **Masthead** `.masthead`: sticky, 56px (64px from 768px), 85% ground with blur, hairline below. Nav links hide below 1024px; the Email link always shows.
- States: `:focus-visible` is a 2px accent outline with 3px offset. Links in `accent` underline on hover; quiet links underline in `rule-strong` and darken on hover.

## Layout

Header: tile left, text right, wrapping under 600px. Facts band full width. Screenshots strip, then the remaining web work as rows. About is 7/5 at 1024px+ with Information on the right, stacking below. Apps are a 3-column row grid. Research is two panels. Version history is a 140px date column plus content, roles first, then degrees.

## Voice

Section titles use the store's words where they fit, and never where they would lie: "About this developer", "What's new", "Information", "More by this developer", "Version history". No ratings, reviews or download counts because none exist. Every number is real and checkable. First person, plain, sentence case. No emoji.

## Do's and Don'ts

### Do
- Keep one filled button on the page and make it the email.
- Keep the facts band to real, checkable figures.
- Let screenshots carry the colour; keep chrome achromatic plus one accent.
- Separate content with 1px `--color-rule` lines.
- Check both themes after any colour change.

### Don't
- Don't add stars, ratings, review cards or download counts.
- Don't copy Apple's or Google's store chrome, type or icons; the idea is borrowed, the surface is ours.
- Don't add shadows, gradients, glass or motion beyond the screenshot pan, 150ms hover transitions and the logo cursor's blink in the header tile (1.2s, dims to 25%, off under reduced motion).
- Don't add a second typeface or a second accent.
- Don't set text below 11px, and use `--color-ink-subtle` only for labels and stack lines.

## Agent Prompt Guide

Read this file before changing any UI. Use the tokens through Tailwind classes (`text-ink-muted`, `border-rule`, `bg-accent`) or the component classes in `src/index.css`. New content belongs in a listing section that already exists; if a new section is truly needed, give it a hairline top, a `.t-heading` title with an optional aside, and the row or panel pattern.
