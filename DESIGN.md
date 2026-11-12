# junaidh.me — Style Reference

**The cursor's page.** One calm column on a warm dark ground. The only decoration is a small character made from the cursor at the end of the JH logo. It carries the personality; everything else stays plain so the work is easy to find. Dark is the default, with a light theme switch. Tokens live in the `@theme` block of `src/index.css`.

## Tokens — Colors

| Role | Token | Dark (default) | Light (`data-theme="light"`) | Use |
|---|---|---|---|---|
| Page background | `--color-ground` | `#1b1920` | `#fbf6ee` | `html`, masthead, the character's face |
| Surface | `--color-surface` | `#24212b` | `#ffffff` | Number chips, app detail line, screenshot frames |
| Raised | `--color-surface-raised` | `#2c2934` | `#f3ecdf` | Reserved |
| Text | `--color-ink` | `#f4efe6` | `#26222b` | Headings, titles, row values |
| Secondary text | `--color-ink-muted` | `#b3aca3` | `#655f6b` | Body copy |
| Meta text | `--color-ink-subtle` | `#8f8996` | `#716b77` | Dates, stack lines, asides |
| Hairline | `--color-rule` | `#2e2b36` | `#ebe4d8` | Row dividers, frame borders |
| Strong hairline | `--color-rule-strong` | `#4a4654` | `#cfc6b6` | Ghost button border, quiet underlines |
| Accent (mint) | `--color-accent` | `#7fdcb0` | `#1f7a57` | The filled button, status line, links, logo cursor, focus |
| Accent text | `--color-accent-ink` | `#1b1920` | `#ffffff` | Text on the filled button |
| Blush | `--color-blush` | `#f6b89a` | `#e58f6a` | Things the character holds or points at, and the selected app's ring. Never text or buttons |
| Character | `--color-mascot` | `#7fdcb0` | `#3fae82` | The character's body and limbs |

Contrast on ground: dark muted 7.8:1, subtle 5.1:1, accent 10.6:1; light muted 5.7:1, subtle 4.8:1, accent 4.9:1.

## Tokens — Typography

- **Nunito** only: 400 body, 600 nav and links, 800 headings, titles and the filled button. Tabular numerals everywhere.
- Scale: display `clamp(36px, 6vw, 52px)` / 1.05 weight 800; heading 26/32 weight 800; lede 20/30 (18/27 on phones); title 17/24 weight 800; body 16/26; small 14/21; stat 22/26 weight 800.
- Classes: `.t-display .t-heading .t-lede .t-title .t-body .t-small .t-meta .t-stat`.

## Tokens — Spacing & Shapes

- Page width `--spacing-page` 760px (+80px gutters); gutters 20px, 40px from 768px.
- Sections are separated by space (40px top and bottom, 56px from 768px), not lines.
- Radii: `--radius-sm` 12px, `--radius-md` 20px (chips, frames, portrait), `--radius-lg` 28px. App icons 16px. Buttons are pills.
- No shadows, glows, gradients or glass.

## The character

`src/components/Mascot.tsx`, one inline SVG with a `pose` prop. It is the logo's cursor standing up: a mint bar about 1 wide to 3.3 tall with softly rounded corners, two dot eyes, a small smile, and stick arms and legs. No outline, no shading.

- It is not the logo. The JH mark keeps its flat-ended cursor and is never given a face.
- It appears exactly four times: `wave` beside the name, `point` beside the Work heading, `phone` beside the Apps heading, `sleep` above Say hello. Do not add a fifth.
- Motion: the wave arm waves once on load; the eyes blink every four seconds; on `wave` the eyes drift up to 1.3 units toward the pointer; the "z" marks drift up over three seconds. All of it is off under `prefers-reduced-motion`.
- It is `aria-hidden` and never carries information.

## Components

- **Logo** `Logo.tsx`: the JH monogram. Letters follow the text colour; the cursor stroke is the accent. Rules and files in `public/brand/README.md`. The exported kit still uses the earlier green `#2fbf7f`.
- **Button primary** `.btn .btn-primary`: accent fill, 46px pill, weight 800. One per page: "Say hello" in the header.
- **Button ghost** `.btn .btn-ghost`: 1px `rule-strong` border. "Download CV".
- **Chip** `.chip`: a number, its label and its note on `surface`, 20px radius. Five in one wrapping row.
- **Frame** `.frame`: a project screenshot, 16:10 from the top, 20px radius, hairline border.
- **App grid** `.app-grid .app`: 64px icons with the name beneath, each a button. With a pointer, `.app-detail` under the grid shows the selected app and follows hover and focus; it has a fixed minimum height so the page does not jump. On touch screens (`hover: none`) the detail line is replaced by `.app-list`, which lists every description.
- **Row** `.row`: a label column and a value, hairline below. Used for "What I work with".
- **Section heading** `SectionHeading.tsx`: title, optional aside, optional character (`phone` or `point`).
- **Masthead** `.masthead`: sticky, 56px (64px from 768px), 88% ground with blur, no line. Nav links hide below 640px.
- States: `:focus-visible` is a 2px accent outline with 3px offset. Project frames, app icons and the filled button lift 2px on hover, and not at all under reduced motion.

## Layout

One column: Hello (character, name, role, status, two buttons, tagline, then Now), Numbers, Work, Apps, About, Research, Path, Say hello. Say hello is the footer; nothing follows it but the name and year.

## Voice

First person, warm, plain, sentence case. "Say hello" rather than "Get in touch". No store words. No emoji. Every number is real and checkable, and each figure keeps the note that makes it checkable.

## Do's and Don'ts

### Do
- Keep one filled button on the page and make it the email.
- Let the character and the screenshots carry the colour; keep the rest to ink, mint and a little blush.
- Check both themes and a 375px screen after any change.

### Don't
- Don't add a second character, more poses on the page, sparkles, emoji or pastel fills.
- Don't turn sections into a card grid or bento layout.
- Don't use blush for text, links or buttons.
- Don't add shadows, gradients, glass or a second typeface.
- Don't let the character overlap or move over text someone is reading.

## Agent Prompt Guide

Read this file before changing any UI. Use the tokens through Tailwind classes (`text-ink-muted`, `border-rule`, `bg-accent`) or the component classes in `src/index.css`. New content belongs in a section that already exists; if a new section is truly needed, give it a `SectionHeading` without the character and plain blocks or rows beneath.
