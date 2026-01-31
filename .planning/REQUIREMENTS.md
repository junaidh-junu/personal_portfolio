# Requirements: Personal Portfolio

**Defined:** 2026-01-31
**Core Value:** A sophisticated, minimalistic portfolio that showcases professional work with Apple-inspired design principles and timeless aesthetic

## v1 Requirements

Requirements for v2.0 Minimalistic Classic Redesign. Each maps to roadmap phases.

### Design System

- [ ] **DESIGN-01**: Dark theme with slate blue accent color (#64748b range - professional, not neon)
- [ ] **DESIGN-02**: Classic serif font for headings (Crimson Pro, Playfair Display, or Lora)
- [ ] **DESIGN-03**: Modern sans-serif for body text (Inter, Work Sans, or DM Sans)
- [ ] **DESIGN-04**: Monospace font for code/tech tags (JetBrains Mono)
- [ ] **DESIGN-05**: Generous whitespace and breathing room throughout
- [ ] **DESIGN-06**: Consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px)
- [ ] **DESIGN-07**: Responsive breakpoints (mobile: 640px, tablet: 768px, desktop: 1024px, wide: 1280px)
- [ ] **DESIGN-08**: Subtle elevation system for cards and overlays

### Navigation

- [ ] **NAV-01**: Clean minimal navigation bar with logo/name
- [ ] **NAV-02**: Section links (About, Projects, Experience, Skills, Contact)
- [ ] **NAV-03**: Smooth scroll to sections on click
- [ ] **NAV-04**: Current section indicator in navigation
- [ ] **NAV-05**: Mobile responsive hamburger menu
- [ ] **NAV-06**: Fixed navigation on scroll (sticky)

### Hero Section

- [ ] **HERO-01**: Large elegant typography for name/title
- [ ] **HERO-02**: Professional tagline/description
- [ ] **HERO-03**: Primary CTA button (View Projects / Contact)
- [ ] **HERO-04**: Subtle parallax effect on background elements
- [ ] **HERO-05**: Fade-in entrance animation
- [ ] **HERO-06**: Responsive typography scaling

### About Section

- [ ] **ABOUT-01**: Professional photo placeholder (circular or square with subtle border)
- [ ] **ABOUT-02**: Bio content (2-3 paragraphs about experience and focus)
- [ ] **ABOUT-03**: Key highlights/stats (years experience, projects completed, etc.)
- [ ] **ABOUT-04**: Current focus/availability status
- [ ] **ABOUT-05**: Fade-in on scroll animation

### Projects Section

- [ ] **PROJ-01**: Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- [ ] **PROJ-02**: Category filter buttons (All, Mobile Apps, Web Apps, IoT Systems, Tools/Plugins)
- [ ] **PROJ-03**: 14 project cards from portfolio data
- [ ] **PROJ-04**: Each card shows title, description, technologies, date
- [ ] **PROJ-05**: Technology tags with clean styling
- [ ] **PROJ-06**: Hover state with subtle elevation and scale
- [ ] **PROJ-07**: Smooth filter transitions when switching categories
- [ ] **PROJ-08**: Staggered fade-in animation on scroll
- [ ] **PROJ-09**: Empty state when filter returns no results
- [ ] **PROJ-10**: Project detail modal or external link (optional enhancement)

### Experience Section

- [ ] **EXP-01**: Vertical timeline layout with connecting line
- [ ] **EXP-02**: 3 experience entries from portfolio data
- [ ] **EXP-03**: Each entry shows company, role, period, location
- [ ] **EXP-04**: Bulleted responsibilities/achievements
- [ ] **EXP-05**: Skills used for each role
- [ ] **EXP-06**: "Current" indicator for active position
- [ ] **EXP-07**: Fade-in animation on scroll
- [ ] **EXP-08**: Hover effect on timeline items

### Education Section

- [ ] **EDU-01**: 2 education entries from portfolio data
- [ ] **EDU-02**: Each entry shows degree, institution, period, location
- [ ] **EDU-03**: "Ongoing" indicator for current studies
- [ ] **EDU-04**: GPA/grade display where applicable
- [ ] **EDU-05**: Description of focus areas
- [ ] **EDU-06**: Clean card-based layout

### Skills Section

- [ ] **SKILL-01**: Skills organized by category (Mobile, Web, Backend, DevOps, Tools)
- [ ] **SKILL-02**: Clean grid or list presentation (no neon boxes)
- [ ] **SKILL-03**: Subtle hover effect on skill items
- [ ] **SKILL-04**: Icons or badges for major technologies (optional)
- [ ] **SKILL-05**: Responsive layout

### Contact Section

- [ ] **CONTACT-01**: Contact information (email, phone, location)
- [ ] **CONTACT-02**: Social links (GitHub, LinkedIn, Twitter if applicable)
- [ ] **CONTACT-03**: Primary CTA button (Email me / Download Resume)
- [ ] **CONTACT-04**: Clean layout with generous spacing
- [ ] **CONTACT-05**: Link hover states
- [ ] **CONTACT-06**: Footer with copyright and attribution

### Interactions & Performance

- [ ] **INTERACT-01**: Lenis smooth scroll integration
- [ ] **INTERACT-02**: Fade-in on scroll for sections
- [ ] **INTERACT-03**: Hover micro-interactions on cards/buttons
- [ ] **INTERACT-04**: Project filter transition animations
- [ ] **INTERACT-05**: Reduced motion support (prefers-reduced-motion media query)
- [ ] **INTERACT-06**: Mobile touch-friendly tap targets (44px minimum)
- [ ] **INTERACT-07**: Smooth scroll behavior fallback for older browsers
- [ ] **INTERACT-08**: Lazy loading for images
- [ ] **INTERACT-09**: 60fps performance on desktop, smooth on mobile

### SEO & Accessibility

- [ ] **SEO-01**: Meta tags (title, description, og:image)
- [ ] **SEO-02**: Semantic HTML (header, nav, main, section, article, footer)
- [ ] **SEO-03**: Alt text for images
- [ ] **SEO-04**: ARIA labels where needed
- [ ] **SEO-05**: Keyboard navigation support
- [ ] **SEO-06**: Focus indicators for interactive elements
- [ ] **SEO-07**: Color contrast meets WCAG AA standards

## v2 Requirements

Deferred enhancements for future iterations.

### Advanced Features

- **FEAT-01**: Blog section with markdown posts
- **FEAT-02**: Dark/light mode toggle
- **FEAT-03**: Project detail pages with full case studies
- **FEAT-04**: Testimonials section
- **FEAT-05**: Contact form with backend integration
- **FEAT-06**: Analytics integration (Vercel Analytics / Google Analytics)
- **FEAT-07**: Resume PDF auto-generation from data
- **FEAT-08**: Multi-language support (English/Arabic if relevant)

### Enhanced Interactions

- **INTERACT-10**: Parallax effects on multiple sections
- **INTERACT-11**: Custom scroll progress indicator
- **INTERACT-12**: Easter egg interactions for engagement
- **INTERACT-13**: Animated SVG illustrations

## Out of Scope

| Feature | Reason |
|---------|--------|
| Neon colors (cyan, hot pink, purple) | Want classic minimalistic aesthetic, not flashy |
| Heavy 3D animations or horizontal scroll carousels | Prefer subtle refined interactions |
| Custom magnetic cursor | Too gimmicky for timeless classic design |
| Three.js/WebGL scenes | Unnecessary complexity and bundle size |
| Video backgrounds | Performance concerns and aesthetic mismatch |
| Real-time chat or collaboration features | Not relevant to portfolio showcase |
| Backend CMS integration | Static content sufficient for v1 |
| Multiple theme options | Committed to dark theme with slate blue |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DESIGN-01 | Phase 1 | Pending |
| DESIGN-02 | Phase 1 | Pending |
| DESIGN-03 | Phase 1 | Pending |
| DESIGN-04 | Phase 1 | Pending |
| DESIGN-05 | Phase 1 | Pending |
| DESIGN-06 | Phase 1 | Pending |
| DESIGN-07 | Phase 1 | Pending |
| DESIGN-08 | Phase 1 | Pending |
| NAV-01 | Phase 2 | Pending |
| NAV-02 | Phase 2 | Pending |
| NAV-03 | Phase 2 | Pending |
| NAV-04 | Phase 2 | Pending |
| NAV-05 | Phase 2 | Pending |
| NAV-06 | Phase 2 | Pending |
| HERO-01 | Phase 2 | Pending |
| HERO-02 | Phase 2 | Pending |
| HERO-03 | Phase 2 | Pending |
| HERO-04 | Phase 2 | Pending |
| HERO-05 | Phase 2 | Pending |
| HERO-06 | Phase 2 | Pending |
| ABOUT-01 | Phase 3 | Pending |
| ABOUT-02 | Phase 3 | Pending |
| ABOUT-03 | Phase 3 | Pending |
| ABOUT-04 | Phase 3 | Pending |
| ABOUT-05 | Phase 3 | Pending |
| CONTACT-01 | Phase 3 | Pending |
| CONTACT-02 | Phase 3 | Pending |
| CONTACT-03 | Phase 3 | Pending |
| CONTACT-04 | Phase 3 | Pending |
| CONTACT-05 | Phase 3 | Pending |
| CONTACT-06 | Phase 3 | Pending |
| PROJ-01 | Phase 4 | Pending |
| PROJ-02 | Phase 4 | Pending |
| PROJ-03 | Phase 4 | Pending |
| PROJ-04 | Phase 4 | Pending |
| PROJ-05 | Phase 4 | Pending |
| PROJ-06 | Phase 4 | Pending |
| PROJ-07 | Phase 4 | Pending |
| PROJ-08 | Phase 4 | Pending |
| PROJ-09 | Phase 4 | Pending |
| PROJ-10 | Phase 4 | Pending |
| EXP-01 | Phase 5 | Pending |
| EXP-02 | Phase 5 | Pending |
| EXP-03 | Phase 5 | Pending |
| EXP-04 | Phase 5 | Pending |
| EXP-05 | Phase 5 | Pending |
| EXP-06 | Phase 5 | Pending |
| EXP-07 | Phase 5 | Pending |
| EXP-08 | Phase 5 | Pending |
| EDU-01 | Phase 5 | Pending |
| EDU-02 | Phase 5 | Pending |
| EDU-03 | Phase 5 | Pending |
| EDU-04 | Phase 5 | Pending |
| EDU-05 | Phase 5 | Pending |
| EDU-06 | Phase 5 | Pending |
| SKILL-01 | Phase 5 | Pending |
| SKILL-02 | Phase 5 | Pending |
| SKILL-03 | Phase 5 | Pending |
| SKILL-04 | Phase 5 | Pending |
| SKILL-05 | Phase 5 | Pending |
| INTERACT-01 | Phase 6 | Pending |
| INTERACT-02 | Phase 6 | Pending |
| INTERACT-03 | Phase 6 | Pending |
| INTERACT-04 | Phase 6 | Pending |
| INTERACT-05 | Phase 6 | Pending |
| INTERACT-06 | Phase 6 | Pending |
| INTERACT-07 | Phase 6 | Pending |
| INTERACT-08 | Phase 6 | Pending |
| INTERACT-09 | Phase 6 | Pending |
| SEO-01 | Phase 7 | Pending |
| SEO-02 | Phase 7 | Pending |
| SEO-03 | Phase 7 | Pending |
| SEO-04 | Phase 7 | Pending |
| SEO-05 | Phase 7 | Pending |
| SEO-06 | Phase 7 | Pending |
| SEO-07 | Phase 7 | Pending |

**Coverage:**
- v1 requirements: 76 total
- Mapped to phases: 76 (100%)
- Unmapped: 0

---
*Requirements defined: 2026-01-31*
*Last updated: 2026-01-31 after roadmap creation*
