# junaidh.me

Personal site for Junaidh Haneefa, a full-stack and mobile developer in Dublin.

A single page: intro, selected work, mobile apps, research, experience, education, stack, contact. No animation libraries, no tracking, light and dark themes.

## Stack

React 18, TypeScript, Vite 5, Tailwind CSS 4. Fonts are Geist and Geist Mono from Google Fonts.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run lint
```

## Edit content

Everything on the page comes from `src/data/site.ts`. Images live in `public/work` (web screenshots, 1600px WebP), `public/apps` (192px app icons) and `public/avatar.webp`.

## Design

Tokens, type scale, layout rules and component guidelines are kept in the design system artifact that this site follows. The CSS tokens in `src/index.css` mirror it.
