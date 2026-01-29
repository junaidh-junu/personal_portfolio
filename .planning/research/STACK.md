# Stack Research

**Domain:** Immersive Flow Portfolio Experience
**Researched:** 2026-01-28
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **lenis** | ^1.3.17 | Smooth momentum scroll | Industry standard for buttery smooth scrolling. 2KB gzipped, zero dependencies. Replaced deprecated @studio-freight/lenis. Handles momentum physics better than alternatives. |
| **gsap** | ^3.14.2 | Animation engine | Now 100% free (Webflow acquisition). Industry-leading performance. 69KB minified (~30KB gzipped). GSAP core provides timeline control and advanced tweening. |
| **@gsap/react** | ^2.1.2 | GSAP React integration | Official React bindings with useGSAP() hook. Automatic cleanup via gsap.context(). Drop-in replacement for useEffect with animation-specific lifecycle management. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **gsap/ScrollTrigger** | Included in gsap@3.14.2 | Scroll-triggered animations | For horizontal sections, pinning, scrubbing animations. Syncs with Lenis via ticker integration. Essential for scroll-based interactions. |
| **@yhattav/react-component-cursor** | Latest | Custom cursor component | For interactive cursor. <10KB, zero dependencies. Use any React component as cursor. Configurable smoothing matches Lenis feel. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| **Vite bundle analyzer** | Track bundle size | Critical to maintain <500KB target. Use `rollup-plugin-visualizer` to monitor GSAP plugin imports. |
| **TypeScript** | Type safety | Both lenis and gsap include native TypeScript definitions. No @types packages needed. |

## Installation

```bash
# Core immersive flow dependencies
npm install lenis gsap @gsap/react

# Custom cursor (optional)
npm install @yhattav/react-component-cursor

# Dev tools for bundle monitoring
npm install -D rollup-plugin-visualizer
```

## Integration Pattern

### 1. Lenis + GSAP Synchronization

The standard pattern for synchronizing Lenis smooth scroll with GSAP ScrollTrigger:

```typescript
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false, // Disable on touch devices for performance
      syncTouch: false,   // Better mobile performance
    });

    // Sync Lenis scroll with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis to GSAP ticker (converts seconds to milliseconds)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP lag smoothing for smooth animations
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <YourComponents />;
}
```

### 2. Mobile Graceful Degradation

```typescript
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const lenis = new Lenis({
  duration: isMobile ? 1.0 : 1.5,  // Faster on mobile
  smoothTouch: false,               // Never smooth touch
  syncTouch: false,                 // Prevent iOS issues
  touchMultiplier: isMobile ? 0 : 2, // Disable touch on mobile
});
```

### 3. CSS 3D Transforms for Parallax

Use CSS transforms with `will-change` for GPU-accelerated performance:

```typescript
// Apply transforms via GSAP for parallax
gsap.to(element, {
  y: scrollProgress * 100,
  force3D: true, // GSAP will use translate3d
  ease: 'none',
  scrollTrigger: {
    trigger: section,
    scrub: true,
  },
});
```

```css
/* Apply will-change for GPU optimization */
.parallax-element {
  will-change: transform;
  transform: translate3d(0, 0, 0); /* Create compositing layer */
}
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| **Lenis** | Locomotive Scroll | If you need data-scroll attributes for declarative animations. However, Lenis is lighter and more performant. |
| **Lenis** | GSAP ScrollSmoother | If already using GSAP Club plugins. But Lenis is free and equally smooth. |
| **@yhattav/react-component-cursor** | Custom CSS cursor | If cursor needs are simple (just visual change). Use CSS for <5KB savings. |
| **CSS 3D transforms** | Three.js | If you need true 3D rendering (models, lighting). Your constraint is bundle size, so CSS is correct choice. |
| **Native scroll** | Lenis | For mobile-only experiences. Native scroll performs better on touch devices. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| **@studio-freight/lenis** | Package deprecated and renamed | **lenis** (new package name) |
| **@studio-freight/react-lenis** | Deprecated wrapper | Direct Lenis integration with useGSAP hook |
| **@types/gsap** | GSAP includes native types | No separate types package needed |
| **Framer Motion + Lenis** | Redundant animation libraries. Conflicts in scroll handling. | GSAP for scroll animations, keep Framer Motion for page transitions only |
| **react-scroll-parallax** | Additional abstraction layer. Adds 15KB+ when you have GSAP. | Direct GSAP ScrollTrigger with transforms |
| **jQuery smooth scroll** | Ancient, bloated, conflicts with React. | Lenis (modern, lightweight, framework-agnostic) |
| **background-position for parallax** | Triggers repaints, not GPU-accelerated | CSS transform: translateY() |

## Stack Patterns by Variant

**If targeting mobile-first:**
- Set `smoothTouch: false` and `syncTouch: false` in Lenis config
- Use `touchMultiplier: 0` to fully disable Lenis touch handling
- Consider skipping Lenis entirely on mobile (native scroll is fastest)
- Reduce GSAP animations on mobile (use `matchMedia` for responsive animations)

**If bundle size is critical (<300KB):**
- Import only needed GSAP plugins: `import { ScrollTrigger } from 'gsap/ScrollTrigger'`
- Skip custom cursor library, use CSS cursor changes
- Tree-shake GSAP by importing specific features
- Use Vite's code splitting to lazy-load GSAP for scroll sections

**If performance is critical (60fps minimum):**
- Use GSAP's `force3D: true` for all transforms
- Apply `will-change: transform` to animated elements
- Use ScrollTrigger's `fastScrollEnd` event to pause heavy animations
- Keep GSAP ticker integration for consistent frame timing

## Performance Considerations

### Bundle Size Impact

| Library | Minified | Gzipped | Notes |
|---------|----------|---------|-------|
| lenis | ~4.5 KB | ~2 KB | Ultra-lightweight |
| gsap (core) | ~69 KB | ~30 KB | Required for animations |
| ScrollTrigger | Included | Included | Plugin within GSAP |
| @gsap/react | ~2 KB | ~1 KB | Minimal wrapper |
| **Total** | **~75.5 KB** | **~33 KB** | Well under 500KB target |

**Remaining budget:** ~425KB for application code, assets, other dependencies.

### Runtime Performance

- **Lenis**: Runs on RAF (requestAnimationFrame), ~0.1ms per frame
- **GSAP**: GPU-accelerated via CSS transforms, composited separately from layout
- **ScrollTrigger**: Optimized calculations, batches reads to prevent layout thrashing
- **Target**: 60fps (16.67ms per frame) achieved with proper `will-change` hints

### Mobile Performance

- Lenis with `smoothTouch: false` avoids janky momentum on iOS
- GSAP ScrollTrigger works on mobile, but reduce scrub animation complexity
- CSS 3D transforms work on all modern mobile browsers
- Use `@media (hover: none)` to disable custom cursor on touch devices

## Version Compatibility

| Package | Compatible With | Notes |
|---------|-----------------|-------|
| lenis@1.3.17 | React 18.x | Framework-agnostic, works with any React version |
| gsap@3.14.2 | All modern browsers | No IE11 support (per project constraints) |
| @gsap/react@2.1.2 | React 18.x, gsap@3.12+ | Requires GSAP 3.12 or later |
| ScrollTrigger | lenis@1.x | Requires ticker sync pattern (see Integration) |

### Known Issues

- **Lenis + GSAP**: Must disable lag smoothing (`gsap.ticker.lagSmoothing(0)`) to prevent scroll stuttering
- **Mobile iOS <16**: `syncTouch` can be unstable, always set to `false`
- **Framer Motion conflicts**: Don't animate scroll with both Framer Motion and GSAP simultaneously
- **SSR**: Lenis must initialize client-side only (wrap in `useEffect` or `useGSAP`)

## TypeScript Support

All libraries include native TypeScript definitions:

- **lenis**: Full TypeScript support as of v1.3.x
- **gsap**: Native types included (no @types/gsap needed)
- **@gsap/react**: Fully typed useGSAP hook

```typescript
import Lenis from 'lenis';
import type { LenisOptions } from 'lenis';

const options: LenisOptions = {
  duration: 1.5,
  easing: (t: number) => t,
  smoothTouch: false,
};

const lenis = new Lenis(options);
```

## Sources

- [lenis npm package](https://www.npmjs.com/package/lenis) - Version 1.3.17, bundle size, deprecation notice
- [GSAP npm package](https://www.npmjs.com/package/gsap) - Version 3.14.2, free licensing announcement
- [@gsap/react GitHub](https://github.com/greensock/react) - useGSAP hook documentation
- [GSAP ScrollTrigger + Lenis integration pattern](https://gsap.com/community/forums/topic/40426-patterns-for-synchronizing-scrolltrigger-and-lenis-in-reactnext/) - Official synchronization pattern (2026)
- [Lenis mobile performance discussion](https://github.com/darkroomengineering/lenis/discussions/322) - Disabling touch on mobile devices
- [GSAP TypeScript support](https://gsap.com/community/forums/topic/19861-usage-with-typescript/) - Native types confirmation
- [CSS 3D transforms performance](https://developer.chrome.com/blog/performant-parallaxing) - GPU acceleration best practices
- [GSAP bundle size analysis](https://bundlephobia.com/package/gsap) - Minified and gzipped sizes
- [React performance with GSAP 2026](https://xpertlab.com/react-js-latest-features-and-best-practices-in-2026/) - useTransition and modern patterns

---
*Stack research for: Immersive Flow Portfolio Experience*
*Researched: 2026-01-28*
*Confidence: HIGH - All versions verified via WebSearch, official discussions, and npm package data*
