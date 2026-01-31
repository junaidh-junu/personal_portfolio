# Personal Portfolio

## What This Is

A professional portfolio website showcasing Junaidh Haneefa's work as a Full Stack Developer specializing in Flutter, MERN stack, and Kotlin. Currently features 14 projects (mobile apps, web applications, IoT systems, npm modules, and plugins), experience timeline, education, skills, and contact information. Built with React, Framer Motion, and Tailwind CSS.

## Current Milestone: v2.0 Minimalistic Classic Redesign

**Goal:** Create a sophisticated, minimalistic portfolio with Apple-inspired design principles - generous whitespace, perfect typography, subtle refined animations, and high attention to detail. Dark theme with slate blue accents, classic serif + sans pairing, and clean project grid with filtering.

**Design Philosophy:**
- Minimalistic & refined (not flashy or neon)
- Classic typography (serif + sans pairing)
- Apple minimalism (generous whitespace, subtle depth)
- High standards, not rushed
- Professional & timeless

## Requirements

### Validated

<!-- Existing portfolio functionality that works and must be preserved -->

- ✓ 14 projects displayed with title, description, technologies, and dates — v1.0
- ✓ Experience timeline with job history and responsibilities — v1.0
- ✓ Education section with degrees and institutions — v1.0
- ✓ Skills categorized and displayed — v1.0
- ✓ Contact information and form — v1.0
- ✓ Responsive design for mobile/tablet/desktop — v1.0
- ✓ SEO optimization with meta tags and structured data — v1.0
- ✓ Navigation with smooth scroll to sections — v1.0
- ✓ Framer Motion animations for entrance effects — v1.0

### Active

<!-- v2.0 Minimalistic Classic Redesign scope -->

**Design System:**
- [ ] Color palette: Dark background + slate blue accent (professional, not neon)
- [ ] Typography: Classic serif (headings) + sans-serif (body) pairing
- [ ] Generous whitespace and breathing room (Apple-inspired)
- [ ] Subtle refined animations (quality over flash)
- [ ] Reduced motion support (prefers-reduced-motion)

**Layout & Structure:**
- [ ] Clean navigation with smooth scroll
- [ ] Hero section with elegant typography and subtle parallax
- [ ] About section with professional photo and refined copy
- [ ] Projects grid with category filtering (Mobile, Web, IoT, Tools)
- [ ] Project cards with hover states and clean imagery
- [ ] Experience timeline (vertical, clean layout)
- [ ] Skills organized by category (minimalistic presentation)
- [ ] Contact section with clear CTAs

**Interactions:**
- [ ] Smooth scroll behavior (Lenis for refined physics)
- [ ] Fade-in on scroll (subtle, not jarring)
- [ ] Hover micro-interactions on cards
- [ ] Project filtering with smooth transitions
- [ ] Mobile-responsive with touch-friendly interactions

### Out of Scope

- Neon colors (cyan, hot pink, purple) — Want classic, not flashy
- Heavy 3D animations or horizontal carousels — Prefer minimalistic
- Three.js/WebGL — Unnecessary complexity
- Custom magnetic cursor — Too gimmicky for classic aesthetic
- Video backgrounds — Performance and aesthetic concerns
- Blog/CMS integration — Focus is on project showcase
- Backend API — Static portfolio sufficient
- Dark/light mode toggle — Committed to dark theme

## Context

**Current Stack:**
- React 18 with TypeScript
- Vite build tool
- Framer Motion (already installed)
- Tailwind CSS
- React Router (if used)
- ESLint + TypeScript config

**Codebase Structure:**
- `src/components/` — React components for each section
- `src/data/portfolio.ts` — Project data, experience, education, skills
- `src/index.css` — Global styles and Tailwind imports
- `tailwind.config.js` — Tailwind configuration
- Modern React patterns with hooks

**User Environment:**
- Working on macOS
- Node.js and npm available
- Git repository initialized
- Currently on `production` branch

**Design Inspiration:**
- Apple's minimalism (generous whitespace, perfect typography, subtle depth)
- Linear.app (clean, refined, professional dark theme)
- Stripe.com (sophisticated, elegant, restrained)
- Medium's editorial layout (typography-first, breathing room)
- Classic Swiss design (grid-based, hierarchy, precision)

## Constraints

- **Bundle Size**: Keep under 500KB total — No Three.js, use CSS 3D transforms
- **Performance**: 60fps scrolling on desktop, smooth on mobile — Lazy load images, debounce animations
- **Browser Support**: Modern browsers only (Chrome, Firefox, Safari, Edge latest) — No IE11
- **Accessibility**: WCAG AA compliant — Keyboard navigation, reduced motion support, screen reader friendly
- **Mobile Experience**: Must work on mobile with graceful degradation — Vertical scroll fallback, no 3D on mobile
- **Timeline**: Implement in phases, ship incrementally — Foundation → Core interactions → Polish

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Complete redesign over refinement | Current design doesn't match minimalistic vision, fresh start needed | — Pending |
| Dark theme + slate blue accent | Professional, tech-forward, not neon or flashy | — Pending |
| Classic serif + sans pairing | Timeless typography (Crimson/Playfair + Inter/Work Sans) | — Pending |
| Apple minimalism aesthetic | Generous whitespace, subtle animations, perfect typography | — Pending |
| Projects grid with filtering | Clean organization of 14 projects by category (Mobile/Web/IoT/Tools) | — Pending |
| Lenis for smooth scroll | Modern, lightweight, refined scroll physics | — Pending |
| Framer Motion for animations | Already installed, perfect for subtle refined interactions | — Pending |
| No heavy 3D/horizontal scrolling | Prefer classic, minimalistic over flashy | — Pending |

---
*Last updated: 2026-01-31 after v2.0 redesign pivot to minimalistic classic*
