# junaidh.me — Style Reference

Dark-first, type-led single page. Flat surfaces separated by hairlines, one blue accent, and project screenshots supplying all the colour. Tokens live in the `@theme` block of `src/index.css`.

## Tokens — Colors

| Role | Token | Dark (default) | Light (`data-theme="light"`) | Use |
|---|---|---|---|---|
| Page background | `--color-ground` | `#0b0b0b` | `#fafaf8` | `html`, masthead |
| Card/panel | `--color-surface` | `#141414` | `#ffffff` | Cards, chips, row hover |
| Raised | `--color-surface-raised` | `#1b1b1b` | `#f3f3f0` | Image wells |
| Text | `--color-ink` | `#f4f4f1` | `#141414` | Headings, links, primary text |
| Secondary text | `--color-ink-muted` | `#a3a39d` | `#5c5c57` | Lede, body, descriptions |
| Meta text | `--color-ink-subtle` | `#86867f` | `#6d6d67` | Years, stacks, captions (12px mono) |
| Hairline | `--color-rule` | `#232323` | `#e5e5e0` | Section borders, list dividers |
| Strong hairline | `--color-rule-strong` | `#343434` | `#cfcfc9` | Ghost button, image frames, hover borders |
| Accent | `--color-accent` | `#7c9cff` | `#2a56d8` | Primary button, section labels, links on hover, availability dot |
| Accent text | `--color-accent-ink` | `#0b0b0b` | `#ffffff` | Text on accent fills |
| Accent wash | `--color-accent-soft` | 12% accent | 10% accent | Availability pill background |

Contrast (computed): dark muted 7.76:1, dark subtle 5.37:1, dark accent 7.55:1; light muted 6.43:1, light subtle 4.98:1, light accent 5.87:1.

## Tokens — Typography

- **Geist** (400, 500): all headings and body. **Geist Mono** (400): labels, years, stacks, meta.
- Scale: display `clamp(40px, 5.4vw, 72px)` / 1.02 / -0.035em; heading 36px/40px (30px/36px on mobile); lede 18px/28px; title 17px/24px weight 500; body 15px/24px; small 13px/20px; meta 12px/18px mono.
- Classes: `.t-display .t-heading .t-lede .t-title .t-body .t-small .t-meta .t-label`.

## Tokens — Spacing & Shapes

- Page width `--spacing-page` 1200px (+80px gutters); gutters 24px, 40px from 768px.
- Section padding 96px, 128px from 768px; sections separated by a 1px `--color-rule` top border.
- Radii: `--radius-sm` 6px (row hover), `--radius-md` 12px (images), `--radius-lg` 20px (cards); buttons, pills and chips are fully rounded.
- Borders are 1px. Depth comes from hairlines and surface contrast, not shadows.

## Components

- **Button primary** `.btn .btn-primary`: accent fill, 44px high, pill. Hover lifts 1px. One per screen.
- **Button ghost** `.btn .btn-ghost`: transparent, 1px `--color-rule-strong`; hover border becomes `--color-ink`.
- **Pill** `.pill`: availability status with a pulsing accent dot.
- **Chip** `.chip`: 34px, surface fill, 1px rule border, used for tags.
- **Project card** `.card`: framed screenshot (`.card-frame`, `.card-shot`) with year tag; title, description and `role · stack` below. Hover: border strengthens, screenshot scrolls to bottom.
- **Work index rows**: year, title and description, stack; 1px divider; used for secondary projects.
- **Timeline** `.timeline`: 1px rail with dots; the current role's dot uses the accent.
- **Masthead** `.masthead`: sticky, 80% ground with blur, 1px bottom rule.
- States: every interactive element has a 2px accent `:focus-visible` outline with 3px offset.

## Layout

Hero is a 7/5 split on `lg`, single column below. Work is a 2-column card grid (first card spans both), then the index list. Text widths: lede 54ch, descriptions 60–70ch.

## Do's and Don'ts

### Do
- Use `--color-accent` for the primary button, section labels and hover states only.
- Separate content with 1px `--color-rule` lines.
- Let project screenshots carry colour and imagery.
- Keep one primary button per screen; make secondary actions ghost buttons or text links.
- Respect `prefers-reduced-motion`; use the `rise` and `data-reveal` animations only.
- Give every project image real alt text and explicit width and height.

### Don't
- Don't add box shadows or glows to cards, buttons or images.
- Don't use floating, tilted or looping animated decorations.
- Don't set text below 12px or use `--color-ink-subtle` for body copy.
- Don't introduce a second accent colour.
- Don't add new font families or weights beyond Geist 400/500 and Geist Mono 400.

## Agent Prompt Guide

Read this file before changing any UI. The site is dark by default with a light theme switch. Use the tokens above through Tailwind classes (`text-ink-muted`, `border-rule`) or the component classes in `src/index.css`. Flat surfaces, hairlines, one accent. Check both themes after any colour change.

## Open questions

- `--shadow-card` and `--shadow-card-hover` are still defined in `@theme`; they are no longer used after this refactor and can be deleted.
- The hero uses a fixed 520px image well on small screens; confirm on a real phone.
- `public/images/profile.png` is 2.0 MB; used by structured data in `src/config/seo.ts`.
