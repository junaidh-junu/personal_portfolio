# Personal Portfolio

## What This Is

A professional portfolio website showcasing Junaidh Haneefa's work as a Full Stack Developer specializing in Flutter, MERN stack, and Kotlin. Currently features 14 projects (mobile apps, web applications, IoT systems, npm modules, and plugins), experience timeline, education, skills, and contact information. Built with React, Framer Motion, and Tailwind CSS.

## Current Milestone: v2.0 Immersive Flow Experience

**Goal:** Transform the static scrolling portfolio into a modern, immersive experience with smooth scroll physics, horizontal sections, 3D depth, and dynamic transitions that makes the portfolio memorable, demonstrates technical mastery, and increases visitor engagement.

**Target features:**
- Lenis smooth scroll with momentum physics
- Horizontal projects carousel with 3D perspective (showcase 14 projects cinematically)
- Parallax layers and depth throughout all sections
- Custom magnetic cursor for premium feel
- GSAP scroll-triggered animations
- Dynamic navigation with progress indicators
- Responsive design with graceful degradation

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

<!-- v2.0 Immersive Flow Experience scope -->

- [ ] Lenis smooth scroll integration with momentum physics
- [ ] Horizontal projects carousel (vertical scroll triggers horizontal movement)
- [ ] 3D transforms on project cards (rotateY, scale based on position)
- [ ] Custom magnetic cursor (desktop only)
- [ ] Parallax layers in Hero section
- [ ] GSAP ScrollTrigger animations throughout
- [ ] Progress bar showing scroll depth
- [ ] Position-aware navigation (highlights current section)
- [ ] Hero text scale/fade on scroll
- [ ] Skills as 3D rotating cards with hover effects
- [ ] Experience timeline horizontal scroll
- [ ] Mobile-friendly fallbacks (vertical scroll for projects, no 3D)
- [ ] Reduced motion support (prefers-reduced-motion)
- [ ] New typography system (Syne, Outfit, JetBrains Mono)
- [ ] Updated color palette (electric cyan, hot pink, vivid purple accents)

### Out of Scope

- Three.js 3D scenes — Too heavy, CSS 3D transforms sufficient
- WebGL shaders — Unnecessary complexity for portfolio
- Video backgrounds — Performance concerns
- Real-time multiplayer/collaboration — Not relevant to portfolio
- Blog/CMS integration — Focus is on project showcase
- Backend API — Static portfolio sufficient

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
- Apple product pages (smooth scroll, 3D)
- awwwards.com winners (horizontal sections)
- Lenis demo site (smooth physics)
- Contemporary flow-based portfolios (2024-2026)

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
| Lenis over Locomotive Scroll | Lenis is modern, lighter, better maintained (2024-2026) | — Pending |
| GSAP for scroll animations | Industry standard, powerful ScrollTrigger plugin, better than CSS alone | — Pending |
| No Three.js | Bundle size concern, CSS 3D transforms sufficient for portfolio | — Pending |
| Horizontal projects carousel | Best way to showcase 14 projects cinematically, modern pattern | — Pending |
| Custom cursor | Premium feel, demonstrates attention to detail, easy to implement | — Pending |
| Syne + Outfit fonts | Distinctive, not overused (avoid Inter/Space Grotesk), bold and modern | — Pending |
| Dark theme with vibrant accents | High contrast, modern, makes accents pop (cyan, pink, purple) | — Pending |

---
*Last updated: 2026-01-28 after milestone v2.0 initialization*
