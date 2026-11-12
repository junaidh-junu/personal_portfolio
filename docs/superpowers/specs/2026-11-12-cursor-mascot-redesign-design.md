# Cursor mascot redesign — design

Date: 2026-11-12. Status: approved by Junaidh on 2026-11-12 and built.

## Intent and why

The current site ("The Listing") was built from scratch, but its surface (flat near-black, one sans typeface, green accent, hairline rows, a stats band) is the same recipe most developer templates use, and Junaidh reads it as "taken from a template". He asked for something else entirely: minimal, cute and liked by all.

The new idea: the text cursor at the end of the JH logo becomes a small character. It is the only decoration on the site. Everything else is a calm, warm, single-column page, so the character carries the personality and the work stays easy to find.

## Goals

- Someone landing on the page smiles within the first screen and still finds who, what, proof and contact in a few seconds.
- The site no longer looks like a template: the character is drawn for this site and comes from Junaidh's own logo.
- Minimal: one column, few colours, one typeface, no cards-in-cards.
- Dark stays the default (his stated preference), with a light theme behind the existing toggle.

## Non-goals

- No new pages, routes, CMS or dependencies.
- No change to the CV, the SEO components' logic, or the content facts in `src/data/site.ts` beyond the strings listed under "Copy".
- No re-export of the brand kit files in `public/brand/` (see "Calls made" 6).

## Anti-goals (a failure even if it works)

- Full kawaii: pastel everything, sparkles, puffy components, emoji.
- A bento grid or any other layout that reads as this year's template.
- The character getting in the way: more than four appearances, covering content, or moving while someone reads.
- Any number, rating or claim that is not real and checkable.

## Constraints

- Stack stays as is: Vite, React 18, TypeScript, Tailwind 4 with tokens in the `@theme` block of `src/index.css`.
- `npm run build` and `npm run lint` (zero warnings) must pass.
- Text contrast at least 4.5:1 in both themes; focus stays visible; all motion off under `prefers-reduced-motion`.
- Works from 360px wide upward.

## Approaches considered

| | Idea | Trade-off |
|---|---|---|
| A. Cursor mascot (picked) | The logo's cursor becomes a character on a calm warm-dark page | Unique to him and the cutest; the drawings need care |
| B. Sticker sheet | Apps and projects as rounded stickers on a soft surface | Playful, but closest to the bento look that is everywhere |
| C. Soft letter | Cream letter-like page with doodles in the margins | Safest and most minimal, least cute, leaves dark behind |

Junaidh picked A on 2026-11-12. Research behind the choice: cute works best for a wide audience as one accent layer on a restrained layout; soft pastel UI and bento grids now read as generated sameness; recruiters decide in seconds, so the cute layer must never slow the page down.

## The character

- Shape: the cursor bar from the logo, upright, with softly rounded corners, two dot eyes, a small smile, thin stick arms and legs. Body in the accent colour, face in the ground colour. No outline, no shading.
- Proportions: about 1 wide to 3.3 tall (the header sketch shown on 2026-11-12 was 26 by 92), wider than the logo's 1 to 6 cursor so the face reads. The four poses are built first on their own and shown to Junaidh before the page is built around them.
- It is a mascot, not the logo. The JH monogram stays exactly as it is (flat-ended cursor) in the masthead and favicon.
- One component, `src/components/Mascot.tsx`, inline SVG, `aria-hidden`, with a `pose` prop. Colours come from tokens so both themes work.
- Four appearances, no more:

| Pose | Where | Motion |
|---|---|---|
| `wave` | Header, beside the name | Waves once on load; blinks every few seconds; eyes drift a little toward the pointer |
| `phone` | Apps section heading | Blinks |
| `point` | Work section heading, pointing at the first project | None |
| `sleep` | Say hello (the footer), lying down | Two small "z" marks drift up slowly |

- Under `prefers-reduced-motion` every pose is still.

## Page

One column, max width about 760px, generous vertical space, sections separated by space rather than lines.

1. **Masthead** — logo, three or four nav links, theme toggle. Same sticky behaviour as today.
2. **Hello** — the waving character, name, role and city, one line on availability, "Say hello" (filled pill, mailto) and "Download CV" (ghost pill).
3. **Now** — the current `whatsNew.text` as one short paragraph. The store-style version number is dropped.
4. **Numbers** — the five `facts` as one quiet row of rounded chips (value plus label), wrapping on phones.
5. **Work** — the five `featured` projects stacked one per row: large screenshot with 20px corners, then title, role, one-line description, stack. `moreWork` follows as simple text rows.
6. **Apps** — the 13 app icons in a rounded icon grid with the name under each; description and stack show below the grid for the hovered or focused app, and are always listed on touch screens.
7. **About** — portrait, the `about` text, the `stack` list, languages.
8. **Research** — the two `research` items as plain blocks.
9. **Path** — roles then education, date on the left, content on the right, stacking on phones.
10. **Say hello** — this is the footer. The sleeping character, email, GitHub, LinkedIn, phone and the CV link, then one small closing line (name and year). There is no separate footer below it.

Where today's extra content goes: each fact keeps its `note` inside its chip (so "30,000+" still says Tafheem ul Quran); the published-paper link sits with its item in Research; "Shipping since 2023" and languages go in About; the CV link is in Hello and in Say hello. Nothing checkable is dropped.

Apps on desktop: the detail line under the grid always shows one app, starting with the first, and changes on hover or focus. It has a fixed height so the page never jumps.

## Look

Colours (dark is default; exact values may shift a little to meet contrast):

| Role | Dark | Light |
|---|---|---|
| Ground | `#1b1920` | `#fbf6ee` |
| Surface | `#24212b` | `#ffffff` |
| Ink | `#f4efe6` | `#26222b` |
| Muted text | `#b3aca3` | `#655f6b` |
| Subtle text | `#8f8996` | `#716b77` |
| Rule | `#2e2b36` | `#ebe4d8` |
| Accent (mint) | `#7fdcb0` | `#1f7a57` |
| Blush (props only) | `#f6b89a` | `#e58f6a` |

- Blush is used only on things the character holds or points at and on the hovered app. It is never a text or button colour.
- Type: Nunito only (400, 600, 800), replacing Manrope. Tabular numerals for figures.
- Shapes: radii 12 / 20 / 28px, pill buttons, no shadows, no gradients, no glass.
- Motion beyond the character: 150ms colour transitions and a 2px lift on project and app hover.

## Voice

First person, warm, plain, sentence case. "Say hello" instead of "Get in touch". Store words ("listing", "version history", "More by this developer") go. Still no emoji, and every figure stays real.

## Copy

Only these strings change; `about`, `whatsNew.text`, project, app, role and research text stay word for word.

- Hello: name; "Full-stack and mobile developer in Dublin"; "Open to full-stack and mobile roles, in Dublin or remote."; small line "I ship to the App Store, Google Play and the web."
- Buttons: "Say hello", "Download CV".
- Nav: Work (`#work`), Apps (`#apps`), About (`#about`), Say hello (`#hello`).
- Section titles: Now, Work, Apps, About, Research, Path, Say hello.

## Files

- New: `src/components/Mascot.tsx`.
- Rewritten: `src/index.css` tokens and component classes, `DESIGN.md`, and the section components. `Listing`, `Facts`, `Screenshots` and `History` are replaced by `Hello`, `Numbers`, `Work` and `Path`; `Information` is removed and its content rehomed as above; `Footer` becomes the Say hello section; `Apps`, `About`, `Research` and `Masthead` are restyled.
- Edited: `src/data/site.ts` (`listing`, `nav`, drop `whatsNew.version`), `index.html` (font link, `theme-color`), `Logo.tsx` only if the accent token name changes.
- Untouched: `src/components/SEO/*`, `src/config/seo.ts`, `public/` assets, `cv/`.

## Calls made (mine, not yet agreed)

1. The character has softly rounded corners even though the logo's cursor is flat-ended; the two are separate things.
2. Nunito replaces Manrope, for its rounded letter ends.
3. The accent moves from `#2fbf7f` to a softer mint, and a second colour (blush) is allowed for props only.
4. Section order and names as listed under "Page".
5. Work happens on a new branch, `redesign/cursor-mascot`, off `production`; nothing is pushed or deployed without being asked.
6. The exported brand kit in `public/brand/` keeps the old green for now, so the kit and the site's accent will differ slightly until the kit is re-exported.
7. The character is not given a name on the page.
8. The new copy strings under "Copy", and where the old Information content moves.

## Left to the builder

Exact spacing and type scale, final mascot path coordinates, the timing curves, how the eye-follow is throttled, and component class names.

## Done looks like

- Build and lint pass.
- Checked in the browser in both themes at 375px and 1280px, with and without reduced motion, with no console errors.
- All four character poses render, and the page reads top to bottom without the character covering anything.
