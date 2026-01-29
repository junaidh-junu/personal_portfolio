# Feature Research

**Domain:** Immersive Flow Portfolio with 3D Interactions
**Researched:** 2026-01-28
**Confidence:** MEDIUM

*Note: Research based on 2024-2026 portfolio design trends, smooth scroll libraries, and accessibility best practices. Confidence is MEDIUM due to reliance on WebSearch for trend analysis and community patterns. Technical implementation details verified through multiple sources.*

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist. Missing these = portfolio feels incomplete or broken.

| Feature | Why Expected | Complexity | Mobile Considerations | Accessibility Notes |
|---------|--------------|------------|----------------------|---------------------|
| **Smooth scroll physics** | Standard in modern portfolios since 2024; users expect fluid navigation not abrupt jumps | MEDIUM | Must work on mobile; disable on `prefers-reduced-motion` | Critical for motion-sensitive users; provide fallback |
| **Responsive layout** | 60%+ of traffic is mobile in 2024 | LOW | Essential; mobile-first approach required | Core functionality must work everywhere |
| **Fast initial paint (<2.5s LCP)** | Core Web Vitals requirement; users bounce on slow sites | MEDIUM | More critical on mobile; skeleton screens help | Affects all users; particularly important for assistive tech |
| **Case study navigation** | Users need to browse projects easily without excessive clicking | LOW | Horizontal scroll works well on mobile with visual hints | Must support keyboard navigation |
| **Visual loading states** | Users expect feedback during load; blank screens feel broken | LOW | Essential on mobile (slower connections) | Screen readers need loading announcements |
| **Basic contact method** | Portfolio without contact feels incomplete | LOW | Mobile-optimized form or email link | Form must be fully accessible |
| **Clear navigation** | Users need orientation and ability to jump sections | LOW | Sticky nav or hamburger menu | Skip links required for accessibility |
| **Project showcase structure** | Users expect to see work, role, problem, solution | LOW | Must be scannable on small screens | Proper heading hierarchy for screen readers |

### Differentiators (Competitive Advantage)

Features that set portfolio apart. Not required, but create memorable experiences.

| Feature | Value Proposition | Complexity | Mobile Considerations | Accessibility Notes |
|---------|-------------------|------------|----------------------|---------------------|
| **Horizontal carousel with scroll physics** | Creates unique exploration pattern; trend in 2024; visitors remember the experience | HIGH | Works well with touch gestures; need visual peek hints | Ensure keyboard scrolling works; announce section changes |
| **3D card interactions** | Technical showcase; demonstrates WebGL/Three.js skills; increases session time by 22% (2024 data) | HIGH | Provide 2D fallback; heavy battery drain; consider progressive enhancement | Must not block content access; provide reduced motion alternative |
| **Parallax depth effects** | Creates immersive multi-dimensional experience; industry trend 2024-2026 | MEDIUM | Auto-disable on mobile (performance); relies on mouse position | Disable for `prefers-reduced-motion`; ensure content readable |
| **Interactive custom cursor** | Adds personality; guides user attention; contextual feedback | MEDIUM | Desktop-only; irrelevant on touch devices | Major accessibility concern; must not override OS cursor settings |
| **Micro-interactions on hover/focus** | Provides tactile feedback; polish and attention to detail | LOW | Touch alternatives needed; long-press or tap | Focus states required; must work without hover |
| **Animated section transitions** | Creates flow between sections; storytelling through motion | MEDIUM | Lighter animations on mobile; watch performance | Respect `prefers-reduced-motion`; don't block content |
| **Project detail modal/overlay** | Deep dive without navigation; maintains context | MEDIUM | Full-screen on mobile; swipeable | Trap focus; ESC to close; announce state change |
| **Scroll-triggered reveals** | Progressive disclosure; guides attention | MEDIUM | Works well on mobile; intersection observer performant | Don't hide critical content; ensure keyboard accessible |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem good but create problems in immersive portfolios.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| **Auto-playing video backgrounds** | Looks premium; adds motion | Distracts from content; massive performance hit; accessibility nightmare for screen readers; eats mobile data; tanks Web Vitals (LCP/CLS) | Use high-quality static images with subtle CSS animations; video on user interaction only |
| **Excessive animation on every element** | "Animations are cool, more is better" thinking | Animation overload overwhelms users; slow page load; violates "simplicity" golden rule 2024; causes visual fatigue and confusion | Purposeful animation on key interactions only (buttons, cards, transitions); rest stays calm |
| **Custom cursor that completely replaces OS cursor** | Unique personality; memorable | Breaks accessibility for users who rely on OS cursor modifications (size, contrast, high-visibility); vanity at odds with user needs; unusable for low-vision users | Subtle cursor enhancement (ring/trail) that works WITH system cursor, or desktop-only decoration |
| **Horizontal-only navigation with no vertical fallback** | Unique interaction model | Confuses users expecting vertical scroll; poor mobile UX without visual hints; hard for voice control users | Hybrid approach: vertical storytelling with horizontal project carousel sections |
| **3D effects without fallbacks** | Technical showcase; impressive visuals | Excludes users on older devices; battery drain; WebGL not supported everywhere; can be performance nightmare | Progressive enhancement: solid 2D experience that works everywhere, enhanced with 3D when supported |
| **Infinite parallax/scroll jacking** | Immersive experience | Users lose orientation; breaks browser back button; causes nausea for motion-sensitive; violates usability best practice 2024 | Gentle parallax in sections; maintain normal scroll behavior; never hijack control |
| **Sound effects on interactions** | Multi-sensory experience | Startles users; accessibility issue; auto-play problematic; professional contexts require silence | Skip entirely or user-controlled audio toggle with clear indicator |
| **Complex navigation with >7 main items** | Show everything upfront | Overwhelms users; best practice is ≤7 items | Limit to core sections (Work, About, Skills, Contact); sub-navigation within sections |

## Feature Dependencies

```
[Smooth Scroll Library (Lenis)]
    ├──required by──> [Parallax Effects]
    ├──required by──> [Scroll-triggered Reveals]
    └──required by──> [Horizontal Carousel Scroll]

[3D Card Interactions]
    ├──requires──> [WebGL/Three.js Setup]
    ├──requires──> [2D Fallback System]
    └──enhances──> [Project Showcase]

[Skeleton Loading States]
    └──improves──> [LCP Performance]

[Responsive Layout]
    ├──required by──> [ALL Features]
    └──conflicts with──> [Desktop-only 3D without fallback]

[Accessibility Foundation]
    ├──requires──> [prefers-reduced-motion checks]
    ├──requires──> [Keyboard navigation]
    ├──requires──> [Focus management]
    └──conflicts with──> [Custom cursor override]
                         [Auto-playing content]
                         [Scroll jacking]
```

### Dependency Notes

- **Smooth Scroll Library required first:** All scroll-based features (parallax, reveals, carousel) depend on Lenis or similar. Must be implemented and tested before dependent features.
- **3D requires fallback system:** Cannot add 3D cards without progressive enhancement strategy. 2D version must exist first, then enhance.
- **Skeleton screens improve LCP:** Implementing skeleton loading before heavy content significantly improves perceived performance (0.8s vs 2.2s FCP in studies).
- **Accessibility conflicts with custom cursors:** Complete cursor override breaks OS-level accessibility features. Subtle enhancement only, or skip.
- **Horizontal scroll requires vertical wrapper:** Cannot do horizontal-only portfolio. Vertical sections contain horizontal galleries.
- **Animation features must check prefers-reduced-motion:** All animation features (parallax, transitions, 3D, reveals) must disable when user prefers reduced motion.

## MVP Definition

### Launch With (v1) - Core Immersive Experience

Minimum viable immersive portfolio - what's needed to validate the concept and be memorable.

- [x] **Responsive layout with mobile-first approach** - Already built; table stakes
- [x] **Basic navigation** - Already built; enhance with skip links
- [x] **Project grid display** - Already built; will transform to carousel
- [ ] **Smooth scroll with Lenis** - Foundation for all scroll-based immersion; must be first new feature
- [ ] **Horizontal project carousel (one section)** - Key differentiator; creates unique experience; test with 14 projects
- [ ] **Skeleton loading states** - Critical for performance (LCP); must have before launching heavy interactions
- [ ] **Scroll-triggered reveals** - Low complexity, high impact; guides user attention through content
- [ ] **Basic parallax on hero section** - Introduces depth concept without overwhelming; test ground for technique
- [ ] **Prefers-reduced-motion support** - Accessibility requirement; disables animations for sensitive users
- [ ] **Keyboard navigation support** - Accessibility requirement; must work without mouse

**Rationale:** This MVP creates a memorable immersive experience (horizontal carousel + smooth scroll + reveals) while maintaining accessibility and performance. Tests the core concept before adding expensive 3D features.

### Add After Validation (v1.x)

Features to add once core is working and users are engaged.

- [ ] **3D card interactions with fallback** - High complexity; add after carousel proves engaging; demonstrate WebGL skills
- [ ] **Parallax across multiple sections** - Expand technique once hero parallax is stable
- [ ] **Micro-interactions on project cards** - Polish; add when core experience is solid
- [ ] **Custom cursor (subtle enhancement)** - Desktop-only; low priority; add if time permits
- [ ] **Animated section transitions** - Polish; requires performance testing first
- [ ] **Project detail modal** - Better UX than navigation; add when project count justifies it

**Trigger for v1.x:** Core carousel experience is stable, performance metrics are green (LCP <2.5s, CLS <0.1), accessibility audit passes.

### Future Consideration (v2+)

Features to defer until portfolio proves effective.

- [ ] **Advanced 3D scene (not just cards)** - Complex; high maintenance; wait for WebGPU maturity
- [ ] **Collaborative/social features** - Out of scope for portfolio
- [ ] **Blog with immersive reading** - Content first; immersion second
- [ ] **AI-powered project recommendations** - Over-engineering for portfolio context

**Why defer:** Focus on core portfolio goal (showcase work memorably). These features don't directly serve that goal or require maintenance effort disproportionate to value.

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Performance Impact | Accessibility Risk | Priority |
|---------|------------|---------------------|-------------------|-------------------|----------|
| Smooth scroll (Lenis) | HIGH | LOW | Low (compositor-thread) | Low (with fallback) | **P1** |
| Skeleton loading | HIGH | LOW | Positive (improves LCP) | None | **P1** |
| Prefers-reduced-motion | HIGH | LOW | None | Critical (enables access) | **P1** |
| Keyboard navigation | HIGH | LOW | None | Critical (enables access) | **P1** |
| Horizontal carousel | HIGH | MEDIUM | Medium (13 images) | Medium (needs keyboard support) | **P1** |
| Scroll-triggered reveals | MEDIUM | LOW | Low (IntersectionObserver) | Low (progressive) | **P1** |
| Basic parallax (hero) | MEDIUM | LOW | Low (transform) | Low (with motion check) | **P1** |
| 3D card interactions | HIGH | HIGH | High (WebGL) | High (needs fallback) | **P2** |
| Parallax (multiple sections) | MEDIUM | MEDIUM | Medium (many transforms) | Medium (motion check) | **P2** |
| Micro-interactions | MEDIUM | LOW | Low | Low | **P2** |
| Project detail modal | MEDIUM | MEDIUM | Low | Medium (focus trap) | **P2** |
| Animated transitions | LOW | MEDIUM | Medium | Medium (motion check) | **P2** |
| Custom cursor | LOW | MEDIUM | Low | High (override risk) | **P3** |

**Priority key:**
- **P1: Must have for launch** - Creates immersive experience while maintaining accessibility and performance
- **P2: Should have, add when possible** - Enhances experience after core is stable
- **P3: Nice to have, future consideration** - Polish features that don't justify complexity

**Prioritization rationale:**
- Accessibility features are P1 non-negotiable
- Performance features (skeleton, smooth scroll) are P1 because they enable immersion
- Core immersive feature (horizontal carousel) is P1 as the main differentiator
- 3D is P2 despite high value because complexity and risk require stable foundation first
- Custom cursor is P3 due to high accessibility risk and low actual UX value

## Implementation Strategy for Milestone

**Context:** This is a subsequent milestone adding immersive flow to an existing portfolio with basic animations (Framer Motion), navigation, and project grid.

### Phase 1: Foundation (Week 1)
1. **Add Lenis smooth scroll** - Replace default scroll behavior
2. **Implement prefers-reduced-motion checks** - Create global detection and disable flags
3. **Add skeleton screens** - Create skeleton versions of project cards and hero
4. **Audit keyboard navigation** - Ensure existing features work without mouse

**Success criteria:** Smooth scroll feels natural, animations disable for sensitive users, initial paint is fast, keyboard navigation works.

### Phase 2: Core Immersion (Week 2)
1. **Transform project grid to horizontal carousel** - One section with 14 projects, scroll physics, visual peek hints
2. **Add scroll-triggered reveals** - Fade-in sections as user scrolls (IntersectionObserver)
3. **Implement hero parallax** - Background/foreground layer movement on scroll

**Success criteria:** Horizontal carousel is smooth on desktop and mobile, reveals feel natural, parallax adds depth without distraction.

### Phase 3: Enhancement (Week 3+)
1. **Add 3D card interactions with fallback** - Three.js/R3F setup, progressive enhancement, 2D fallback
2. **Expand parallax to other sections** - About, skills sections get subtle depth
3. **Add micro-interactions** - Hover states on cards (desktop), focus states (all)
4. **Polish and performance optimization** - Lazy loading, intersection observer tuning

**Success criteria:** 3D works on capable devices with graceful fallback, performance metrics stay green, site feels polished.

### Testing Gates
- **After Phase 1:** Lighthouse score >90, accessibility audit passes, motion preferences respected
- **After Phase 2:** Core Web Vitals green (LCP <2.5s, CLS <0.1, INP <200ms), carousel usable on mobile
- **After Phase 3:** 3D fallback works, battery drain acceptable, no accessibility regressions

## Mobile-Specific Considerations

**Critical for 60%+ mobile traffic in 2024:**

| Feature | Desktop Implementation | Mobile Adaptation | Rationale |
|---------|----------------------|-------------------|-----------|
| Horizontal carousel | Mouse wheel + scroll physics | Touch swipe + visual peek | Touch is more intuitive for horizontal; peek hint essential for discoverability |
| 3D card interactions | WebGL with full effects | 2D with subtle CSS transform OR low-poly 3D | Battery drain and performance; progressive enhancement |
| Parallax effects | Multi-layer, mouse-position aware | Disabled or scroll-only, simplified | Performance and battery; mouse position not applicable |
| Custom cursor | Cursor decoration/trail | Disabled entirely | No cursor on touch devices |
| Hover micro-interactions | Hover state changes | Tap state changes; no long-press | Hover doesn't exist on touch |
| Complex animations | Full animation sets | Reduced animation complexity | Performance and battery constraints |
| Skeleton screens | Important | Critical | Slower connections; manages expectations |
| Scroll-triggered reveals | IntersectionObserver | IntersectionObserver (same) | Works well on mobile; performant |

**Mobile testing requirements:**
- Test on actual devices (not just browser DevTools)
- Test on older Android devices (performance bottleneck)
- Monitor battery drain during 3D interactions
- Verify touch gestures feel natural
- Ensure content is readable without interactions

## Accessibility Checklist

**Non-negotiable for immersive portfolios:**

- [ ] **Motion preferences respected** - Check `prefers-reduced-motion` and disable ALL animations, parallax, 3D effects
- [ ] **Keyboard navigation works** - Tab through all interactive elements, horizontal carousel keyboard-scrollable
- [ ] **Focus indicators visible** - High contrast focus rings on all interactive elements
- [ ] **Skip links provided** - Skip to main content, skip to navigation
- [ ] **Semantic HTML maintained** - Proper heading hierarchy, landmarks, lists
- [ ] **Color contrast** - 4.5:1 minimum for text; don't rely on color alone for information
- [ ] **Alt text for images** - All project images have descriptive alt text
- [ ] **ARIA labels where needed** - Screen reader announcements for dynamic content, loading states
- [ ] **No content hidden from screen readers** - Decorative 3D doesn't hide actual content
- [ ] **Custom cursor doesn't override OS** - If implemented, works with system cursor, not replaces
- [ ] **Focus trap in modals** - If modal used, focus management and ESC to close
- [ ] **Touch targets 44x44px minimum** - Mobile tap targets large enough

**Testing:**
- Screen reader testing (NVDA/JAWS/VoiceOver)
- Keyboard-only navigation testing
- Automated accessibility audit (axe DevTools, Lighthouse)
- Motion-sensitivity testing (enable prefers-reduced-motion)

## Performance Budget

**Core Web Vitals targets for immersive portfolio:**

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP (Largest Contentful Paint)** | <2.5s | Skeleton screens, optimized images, preload hero image, avoid layout-triggering animations |
| **INP (Interaction to Next Paint)** | <200ms | Use `transform` and `opacity` for animations, avoid layout recalculations, debounce scroll handlers |
| **CLS (Cumulative Layout Shift)** | <0.1 | Reserve space for images, avoid animating width/height/margin, use aspect-ratio CSS |
| **FCP (First Contentful Paint)** | <1.8s | Minimal JS on initial load, defer 3D library loading, critical CSS inline |
| **Bundle size** | <300KB initial | Code splitting, lazy load 3D, tree-shaking, Lenis is lightweight (~5KB) |
| **Image optimization** | WebP/AVIF, lazy load | Next.js Image component, responsive images, lazy load below fold |

**Animation performance rules:**
- **ONLY animate transform and opacity** - These are GPU-accelerated and don't trigger layout
- **Avoid animating:** width, height, top, left, right, bottom, margin, padding
- **Use will-change sparingly** - Only on actively animating elements
- **Monitor with DevTools** - Check for layout thrashing, jank, dropped frames

## Competitor Feature Analysis

**Note:** Analysis based on 2024-2026 portfolio trend research, not specific competitor portfolios.

| Feature Category | Industry Trend 2024 | Common Approaches | Our Approach |
|-----------------|-------------------|-------------------|--------------|
| **Project showcase** | Horizontal galleries, split-screen, full-bleed case studies | Grid → horizontal scroll → detail view | Horizontal carousel with scroll physics; cards transform to 3D on hover (P2) |
| **Navigation** | Minimal sticky nav, side nav, hamburger on mobile | Clear menu, ≤7 items, smooth anchor links | Enhance existing nav with skip links, sticky on scroll, smooth scroll |
| **Animations** | Scroll-triggered, parallax, micro-interactions | GSAP, Framer Motion, scroll libraries | Lenis + Framer Motion (already in use); purposeful, not excessive |
| **Loading states** | Skeleton screens, progress bars, animated loaders | Skeleton screens winning in 2024 studies | Skeleton screens (0.8s FCP vs 2.2s) |
| **3D integration** | Three.js showcases, 3D product displays | Often desktop-only, high-end portfolios | Progressive enhancement; 2D first, 3D enhancement with fallback |
| **Mobile experience** | Mobile-first, touch-optimized, simplified | Lighter animations, touch gestures, performance focus | Mobile-first implementation; 3D disabled on mobile; touch-optimized carousel |
| **Accessibility** | Growing focus; motion toggles, keyboard support | prefers-reduced-motion, keyboard nav, ARIA | Priority from start; motion preferences, keyboard support, semantic HTML |
| **Personality** | Custom cursors, bold typography, dark mode | Custom cursors popular but accessibility concerns | Subtle cursor enhancement (P3) or skip; focus on interaction quality |

**Differentiation strategy:** Combine horizontal carousel (memorable) + 3D cards (technical showcase) + accessibility-first (professional) + performance optimization (skilled). Avoid "cool but unusable" trap many immersive portfolios fall into.

## Sources

**Portfolio Design Trends (2024-2026):**
- [19 Best Portfolio Design Trends (In 2026) - Colorlib](https://colorlib.com/wp/portfolio-design-trends/)
- [10 cutting-edge portfolio design trends for 2024 - Envato](https://elements.envato.com/learn/portfolio-trends)
- [Top Portfolio Design Trends to Elevate Your Showcase in 2024 - Nestify](https://nestify.io/blog/top-portfolio-design-trends/)
- [The 10 Portfolio Trends for 2024 That Will Leave You Breathless - Medium](https://medium.com/@designgrapes/the-10-portfolio-trends-for-2024-that-will-leave-you-breathless-ae1a65c40ead)

**Smooth Scroll & 3D Best Practices:**
- [Building portfolio with scroll-triggered animations giving a 3D effect - Medium](https://medium.com/@amruta0303/building-my-portfolio-website-with-scroll-triggered-animations-giving-a-3d-effect-f85a83cce598)
- [What's a parallax effect? + examples - Webflow Blog](https://webflow.com/blog/parallax-scrolling)
- [30 Totally Awesome Scrolling Website Examples - RGD](https://reallygooddesigns.com/scrolling-website-examples/)
- [Interactive 3D Portfolio - An Immersive Scroll Experience - three.js forum](https://discourse.threejs.org/t/interactive-3d-portfolio-an-immersive-scroll-experience/44520)
- [Best 3d Scroll Websites - Webflow](https://webflow.com/made-in-webflow/3d-scroll)

**Performance & Accessibility:**
- [3D Artist Portfolio in 2025: Best Platforms for Your Artwork - The Lagging Dad](https://thelaggingdad.blog/3d-artist-portfolio-best-platforms-for-artwork/)
- [How to Design Accessible Portfolio Layouts - Scale](https://scale.jobs/blog/how-to-design-accessible-portfolio-layouts)
- [From Inspiration to Creation: How I Built My 3D Interactive Portfolio - Medium](https://medium.com/@ida-lindgren/from-inspiration-to-creation-how-i-built-my-3d-interactive-portfolio-856182f255c9)
- [Portfolio redesign with accessibility as a top priority - Medium](https://medium.com/design-bootcamp/portfolio-redesign-with-accessibility-as-a-top-priority-6b19d94b28d3)
- [Making a Portfolio Website Accessible - Towards Data Science](https://towardsdatascience.com/making-a-portfolio-website-accessible-668380658f43/)

**Custom Cursor UX Problems:**
- [Don't use custom CSS mouse cursors - Eric Bailey](https://ericwbailey.website/published/dont-use-custom-css-mouse-cursors/)
- [Custom Cursor Accessibility - David Bushell](https://dbushell.com/2025/10/27/custom-cursor-accessibility/)
- [The Comeback of Custom Cursors: Enhancing UI/UX - Yellow Ball](https://weareyellowball.com/guides/should-i-be-using-custom-cursors/)

**Horizontal Scroll Mobile Usability:**
- [Horizontal Scrolling Lists in Mobile - Best Practices](https://blog.iamsuleiman.com/horizontal-scrolling-lists-mobile-best-practices/)
- [Consider accessibility when using horizontally scrollable regions - Bogdan on A11y](https://cerovac.com/a11y/2024/02/consider-accessibility-when-using-horizontally-scrollable-regions-in-webpages-and-apps/)
- [Horizontal Scrolling in Web: The Ultimate Guide for 2025](https://www.hirecorewebvitalsconsultant.com/blog/horizontal-scrolling-in-web-the-ultimate-guide-for-2025/)
- [Horizontal Scrolling and User Experience: Best Practices - Usability Geek](https://usabilitygeek.com/horizontal-scrolling-user-experience-best-practices/)

**Core Web Vitals & Animation Performance:**
- [Optimizing Core Web Vitals in 2024 - Vercel](https://vercel.com/kb/guide/optimizing-core-web-vitals-in-2024)
- [The most effective ways to improve Core Web Vitals - web.dev](https://web.dev/articles/top-cwv)
- [Largest Contentful Paint (LCP) - web.dev](https://web.dev/articles/lcp)
- [10+ New Optimizations For Your 2025 Core Web Vitals Strategy - NitroPack](https://nitropack.io/blog/core-web-vitals-strategy/)
- [How to Improve Core Web Vitals (LCP, INP, CLS) in Modern Web Apps - Ableneo](https://www.ableneo.com/core-web-vitals/)

**Portfolio Common Mistakes:**
- [5 Common Portfolio Mistakes to Avoid - EU Global](https://www.euglobal.edu.eu/2024/10/19/5-common-portfolio-mistakes-to-avoid-a-practical-guide/)
- [5 Portfolio mistakes designers make - Yes I'm a Designer](https://yesimadesigner.com/5-portfolio-mistakes-designers-make/)
- [7 Design Portfolio Mistakes That Are Costing You Jobs - IxDF](https://www.interaction-design.org/literature/article/avoid-design-portfolio-mistakes-costing-jobs)

**Animation Overload:**
- [Web Interface Animation Mistakes to Avoid - Pixel Free Studio](https://blog.pixelfreestudio.com/web-interface-animation-mistakes-to-avoid/)
- [Stop Gratuitous UI Animation - Medium](https://medium.com/@sophie_paxtonUX/stop-gratuitous-ui-animation-9ece9aa9eb97)
- [Mastering Web Animations: Common Mistakes and Best Practices - OpenReplay](https://blog.openreplay.com/mastering-web-animations/)
- [Do's and Don'ts of UI Animation for the Web - OpenReplay](https://blog.openreplay.com/dos-and-donts-of-ui-animation-for-the-web/)

**Case Study Best Practices:**
- [How to Write UX/UI Design Case Studies That Boost Your Portfolio - IxDF](https://www.interaction-design.org/literature/article/how-to-write-great-case-studies-for-your-ux-design-portfolio)
- [10 Exceptional Product Design Portfolios with Case Study Breakdowns - DesignerUp](https://designerup.co/blog/10-exceptional-product-design-portfolios-with-case-study-breakdowns/)
- [The only Product Design Case Study Structure you need in 2024 - Medium](https://medium.com/@noushbizlixilix/the-only-product-design-case-study-structure-you-need-in-2024-to-land-job-interviews-d1dbf771f24c)

**Loading States & Skeleton Screens:**
- [Skeleton loading screen design - LogRocket](https://blog.logrocket.com/ux-design/skeleton-loading-screen-design/)
- [Skeleton Screens 101 - Nielsen Norman Group](https://www.nngroup.com/articles/skeleton-screens/)
- [Skeleton Screens implementation for first load - GitHub](https://github.com/dimitrinicolas/skeleton-screens-concept)
- [Skeleton UI Design: Best practices - Mobbin](https://mobbin.com/glossary/skeleton)

**Progressive Enhancement & Mobile:**
- [From HTML to 3D: Why I Rebuild My Portfolio - DEV Community](https://dev.to/rtnjt_bot/from-html-to-3d-why-i-rebuild-my-portfolio-with-react-vite-tailwind-frontql-a4m)
- [What is Progressive Enhancement - Shopify](https://www.shopify.com/partners/blog/what-is-progressive-enhancement-and-why-should-you-care)
- [How Important Is Mobile-First Design - Medium](https://medium.com/@uidesign0005/how-important-is-mobile-first-design-in-todays-digital-world-81a075fec3ae)

**Smooth Scroll Library Comparison:**
- [Smooth Scrolling Libraries Comparison: Locomotive vs GSAP vs Lenis - Born Digital](https://www.borndigital.be/blog/our-smooth-scrolling-libraries)
- [Lenis vs. Locomotive Scroll Usage Comparison - WMTips](https://www.wmtips.com/technologies/compare/lenis-vs-locomotive-scroll/)
- [Smooth Scrolling using Lenis in Webflow - Medium](https://medium.com/waveshape-collective/smooth-scrolling-using-lenis-and-native-scroll-animations-in-webflow-c57045bd1376)
- [GitHub - Lenis: Smooth scroll at it should be](https://github.com/darkroomengineering/lenis)

**Navigation Best Practices:**
- [Website Navigation Best Practices for 2025 - Connect Media](https://www.connectmediaagency.com/website-navigation-best-practices-2024/)
- [Can User Experience Be Beautiful? Navigation In Portfolio Websites - Smashing Magazine](https://www.smashingmagazine.com/2012/03/an-analysis-navigation-portfolio-websites/)

---

*Feature research for: Immersive Flow Portfolio with 3D Interactions*
*Researched: 2026-01-28*
*Confidence Level: MEDIUM (WebSearch-based trend analysis verified across multiple sources)*
