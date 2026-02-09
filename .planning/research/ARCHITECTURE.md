# Architecture Research: Immersive Flow Integration

**Domain:** React Portfolio with Lenis + GSAP + 3D Transforms
**Researched:** 2026-01-28
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                         App Component                                │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │              SmoothScrollProvider (Lenis)                      │  │
│  │  ┌──────────────────────────────────────────────────────────┐  │  │
│  │  │                    Navigation                             │  │  │
│  │  ├──────────────────────────────────────────────────────────┤  │  │
│  │  │           Main Content (Scroll Sections)                  │  │  │
│  │  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │  │  │
│  │  │  │    Hero     │  │  Projects   │  │  Skills     │       │  │  │
│  │  │  │  (3D Text)  │  │ (Horizontal │  │ (3D Cards)  │       │  │  │
│  │  │  │             │  │   Scroll)   │  │             │       │  │  │
│  │  │  └─────────────┘  └─────────────┘  └─────────────┘       │  │  │
│  │  │            ↓ useGSAP hooks ↓                              │  │  │
│  │  │        GSAP ScrollTrigger Instances                       │  │  │
│  │  └──────────────────────────────────────────────────────────┘  │  │
│  │                  ↓ Lenis scroll events ↓                        │  │
│  │              ScrollTrigger.update() sync                        │  │
│  └────────────────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │              CustomCursor (RAF-based tracking)                 │  │
│  └────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **SmoothScrollProvider** | Initializes Lenis, syncs with GSAP ticker, provides scroll context | Wrapper component using useLayoutEffect, provides Lenis instance via Context API |
| **Scroll-Enhanced Sections** | Apply GSAP ScrollTrigger animations, 3D transforms | Standard section components with useGSAP hook for animations |
| **HorizontalScroll** | Container for horizontal scrolling sections using ScrollTrigger | Pin wrapper, animate xPercent based on vertical scroll |
| **3DCard/3DText** | Apply CSS 3D transforms with perspective | Components with transform-style: preserve-3d, perspective properties |
| **CustomCursor** | Track mouse position, animate cursor with RAF | Separate component using mouse event listeners + RAF loop |
| **ScrollProgress** | Track and display scroll progress | Hook-based state management with Lenis scroll events |

## Recommended Project Structure

```
src/
├── components/
│   ├── scroll/                    # Scroll-related components
│   │   ├── SmoothScrollProvider.tsx   # Lenis wrapper component
│   │   ├── HorizontalScroll.tsx       # Horizontal scroll container
│   │   └── ScrollProgress.tsx         # Progress indicator
│   ├── interactive/               # Interactive elements
│   │   ├── CustomCursor.tsx           # Custom cursor component
│   │   ├── 3DCard.tsx                 # 3D card component
│   │   └── 3DText.tsx                 # 3D text component
│   ├── sections/                  # Enhanced existing sections
│   │   ├── Hero.tsx                   # Already exists (enhanced)
│   │   ├── Projects.tsx               # Already exists (enhanced)
│   │   └── Skills.tsx                 # Already exists (enhanced)
│   └── SEO/                       # Already exists (no changes)
├── hooks/
│   ├── useLenis.ts                # Hook to access Lenis context
│   ├── useScrollProgress.ts       # Track scroll position/progress
│   └── use3DParallax.ts           # Reusable 3D parallax effect hook
├── utils/
│   └── scroll.ts                  # Scroll utilities (smooth scroll to section, etc.)
└── data/                          # Already exists (no changes)
```

### Structure Rationale

- **components/scroll/:** Isolates scroll-related architecture, making it easy to toggle or debug Lenis integration
- **components/interactive/:** Groups interactive elements with complex animation logic separate from content sections
- **hooks/:** Custom hooks for accessing scroll context and creating reusable animation patterns
- **components/sections/:** Existing section components remain in place, enhanced with scroll triggers in-place

## Architectural Patterns

### Pattern 1: SmoothScrollProvider Wrapper

**What:** Top-level wrapper component that initializes Lenis and syncs with GSAP ScrollTrigger

**When to use:** Required once at app root level to enable smooth scrolling throughout the application

**Trade-offs:**
- ✅ Centralizes scroll management
- ✅ Automatic cleanup on unmount
- ✅ Provides Lenis instance via Context
- ⚠️ Adds wrapper layer (minimal performance impact)
- ⚠️ Must be outside components using ScrollTrigger

**Example:**
```typescript
import { useLayoutEffect, useRef, createContext } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LenisContext = createContext<Lenis | null>(null);

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.05,        // Smoothness factor (0.05-0.1 recommended)
      duration: 1.2,     // Animation duration
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Sync with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add to GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert seconds to milliseconds
    });

    gsap.ticker.lagSmoothing(0); // Prevent lag smoothing interference

    // Cleanup
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};
```

### Pattern 2: useGSAP Hook for ScrollTrigger Animations

**What:** Official GSAP hook that automatically handles cleanup and React Strict Mode compatibility

**When to use:** Every component that creates GSAP animations or ScrollTriggers

**Trade-offs:**
- ✅ Automatic cleanup with gsap.context()
- ✅ Handles React 18 Strict Mode double mounting
- ✅ Drop-in replacement for useLayoutEffect
- ✅ Scopes all GSAP instances to component lifecycle
- ⚠️ Requires @gsap/react package

**Example:**
```typescript
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AnimatedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // All GSAP animations created here are automatically cleaned up
    gsap.from('.fade-in', {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        markers: false, // Only for debugging
      },
    });
  }, { scope: containerRef }); // Scope queries to container

  return <div ref={containerRef}>{/* content */}</div>;
};
```

### Pattern 3: Horizontal Scroll Container

**What:** Pin container vertically while animating content horizontally based on scroll progress

**When to use:** Gallery-style sections, project showcases, timeline views

**Trade-offs:**
- ✅ Creates engaging scroll experience
- ✅ Works well with mouse wheel and trackpad
- ⚠️ Requires careful mobile adaptation
- ⚠️ Can confuse users if not clearly indicated
- ⚠️ Increases ScrollTrigger complexity

**Example:**
```typescript
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scroller = scrollerRef.current;
    const container = containerRef.current;

    if (!scroller || !container) return;

    // Calculate scroll distance
    const scrollWidth = scroller.scrollWidth;
    const containerWidth = container.offsetWidth;

    gsap.to(scroller, {
      x: -(scrollWidth - containerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth - containerWidth}`,
        invalidateOnRefresh: true, // Recalculate on resize
      },
    });
  }, { scope: containerRef, dependencies: [] });

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={scrollerRef} className="flex gap-8">
        {children}
      </div>
    </div>
  );
};
```

### Pattern 4: 3D Card with Parallax Hover

**What:** Apply CSS 3D transforms with perspective for depth effect on hover

**When to use:** Project cards, skill badges, interactive elements

**Trade-offs:**
- ✅ GPU-accelerated (transform, perspective)
- ✅ No JavaScript required for basic version
- ✅ Works well with existing Framer Motion
- ⚠️ Requires careful perspective tuning
- ⚠️ Can cause motion sickness if overused

**Example:**
```typescript
import { motion } from 'framer-motion';

const Card3D = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="perspective-1000">
      <motion.div
        className="preserve-3d"
        whileHover={{
          rotateX: -5,
          rotateY: 5,
          scale: 1.05,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Tailwind config for perspective utilities
// theme: {
//   extend: {
//     perspective: {
//       '1000': '1000px',
//     },
//   },
// }
```

### Pattern 5: Custom Cursor with RAF

**What:** Track mouse position and animate cursor element with RequestAnimationFrame

**When to use:** Portfolio sites wanting premium feel, creative showcases

**Trade-offs:**
- ✅ Smooth 60fps animation
- ✅ Can show contextual cursor states
- ⚠️ Accessibility concern (hides native cursor)
- ⚠️ Doesn't work on touch devices
- ⚠️ Requires careful state management to avoid re-renders

**Example:**
```typescript
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth lerp toward target
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.15;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
};
```

## Data Flow

### Scroll Event Flow

```
User Scroll Input
    ↓
Lenis intercepts native scroll
    ↓
Lenis smooths with lerp/duration
    ↓
lenis.on('scroll', ScrollTrigger.update) → Updates all ScrollTrigger instances
    ↓
gsap.ticker.add(lenis.raf) → RAF loop updates Lenis
    ↓
ScrollTrigger callbacks fire → Trigger GSAP animations
    ↓
GSAP applies transforms → DOM updates
    ↓
Browser paints frame
```

### State Management for Scroll

```
Lenis Instance (ref, not state)
    ↓
LenisContext (provides instance)
    ↓
Custom Hooks (useLenis, useScrollProgress)
    ↓
Components subscribe → useEffect listeners on Lenis events
    ↓
State updates (progress, active section)
    ↓
Re-render with new state
```

### Key Data Flows

1. **Smooth Scroll:** Native scroll → Lenis smoothing → GSAP ticker → ScrollTrigger update → Animations
2. **Progress Tracking:** Lenis scroll event → Calculate progress (scrollY / maxScroll) → Update state → Progress bar renders
3. **3D Transforms:** Mouse move → Update CSS custom properties → GPU applies transform → No re-render needed
4. **Horizontal Scroll:** Vertical scroll → ScrollTrigger scrub → GSAP tweens xPercent → Container translates horizontally

## Integration Points

### Lenis + GSAP ScrollTrigger Synchronization

| Integration Step | Implementation | Notes |
|------------------|----------------|-------|
| Register plugin | `gsap.registerPlugin(ScrollTrigger)` | Before any ScrollTrigger use |
| Initialize Lenis | `new Lenis({ lerp: 0.05, smoothWheel: true })` | In useLayoutEffect at root |
| Sync scroll events | `lenis.on('scroll', ScrollTrigger.update)` | Updates ScrollTrigger on Lenis scroll |
| Add to ticker | `gsap.ticker.add((time) => lenis.raf(time * 1000))` | RAF loop for Lenis |
| Disable lag smoothing | `gsap.ticker.lagSmoothing(0)` | Prevents GSAP from interfering with Lenis timing |
| Cleanup | `gsap.ticker.remove(lenis.raf); lenis.destroy()` | In useLayoutEffect cleanup |

### Framer Motion + GSAP Coexistence

| Scenario | Approach | Notes |
|----------|----------|-------|
| **Entrance animations** | Use Framer Motion | Already implemented, works well with variants |
| **Scroll-triggered animations** | Use GSAP ScrollTrigger | More powerful scroll control than Framer |
| **Hover/interaction** | Prefer Framer Motion | Simpler API for component interactions |
| **Complex timelines** | Use GSAP | Timeline sequences, stagger, etc. |
| **3D transforms** | Either works | Framer for simple hover, GSAP for scroll-linked |

### React Lifecycle Integration

| Hook | Use Case | Pattern |
|------|----------|---------|
| **useLayoutEffect** | Initialize Lenis, ScrollTrigger setup | Runs before browser paint, prevents flicker |
| **useGSAP** | All GSAP animations (preferred) | Automatic cleanup, React Strict Mode safe |
| **useEffect** | Subscribe to Lenis events (progress tracking) | Standard side effect |
| **useRef** | Store Lenis instance, DOM references | Non-state values that don't trigger re-renders |
| **Context API** | Provide Lenis instance to child components | Avoid prop drilling |

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| **Initial (current)** | All scroll effects on single page, Lenis wraps entire app |
| **Medium (10-20 sections)** | Consider lazy-loading ScrollTrigger instances, use `once: true` for one-time animations |
| **Large (multi-page)** | Move Lenis to Layout component, cleanup ScrollTriggers on route change, consider code-splitting scroll effects |

### Performance Priorities

1. **First bottleneck: Too many ScrollTriggers**
   - **What breaks:** Scroll performance degrades with 20+ active ScrollTriggers
   - **How to fix:** Use `ScrollTrigger.batch()` for similar elements, set `once: true` for entrance animations, lazy-load non-critical effects

2. **Second bottleneck: Heavy 3D transforms on low-end devices**
   - **What breaks:** Janky scroll on mobile, low FPS
   - **How to fix:** Use `matchMedia` to disable effects below certain viewport sizes, reduce perspective values, use `will-change: transform` sparingly

3. **Third bottleneck: Custom cursor re-renders**
   - **What breaks:** Entire app re-renders on mouse move if using Context/State
   - **How to fix:** Use refs only (no state), use atomic state library (Jotai, Zustand) outside React, or external library like @yhattav/react-component-cursor

## Anti-Patterns

### Anti-Pattern 1: Using useState for Lenis Instance

**What people do:** Store Lenis instance in state: `const [lenis, setLenis] = useState<Lenis | null>(null)`

**Why it's wrong:** Triggers unnecessary re-renders when Lenis instance is set, and Lenis instance doesn't need to trigger re-renders

**Do this instead:** Use useRef: `const lenisRef = useRef<Lenis | null>(null)` and provide via Context if needed

### Anti-Pattern 2: Creating ScrollTriggers Without Cleanup

**What people do:** Use plain useEffect/useLayoutEffect without returning cleanup function

**Why it's wrong:** ScrollTrigger instances persist after component unmount, causing memory leaks and duplicate animations in React Strict Mode

**Do this instead:** Use `useGSAP` hook which handles cleanup automatically, or manually return `() => ScrollTrigger.getAll().forEach(st => st.kill())` in cleanup

### Anti-Pattern 3: Animating Trigger Elements

**What people do:** Animate the same element used as the ScrollTrigger trigger

**Why it's wrong:** ScrollTrigger calculates positions based on trigger element, animating it causes position recalculations and janky behavior

**Do this instead:** Nest content inside trigger element and animate the children: `trigger: containerRef.current` then animate `.child-class`

### Anti-Pattern 4: Using scrollerProxy with Lenis

**What people do:** Set up `ScrollTrigger.scrollerProxy()` when using Lenis

**Why it's wrong:** Lenis already syncs with ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`, scrollerProxy is for other smooth scroll libraries

**Do this instead:** Use the ticker integration pattern: `gsap.ticker.add((time) => lenis.raf(time * 1000))`

### Anti-Pattern 5: Perspective on Transform Element

**What people do:** Apply both `perspective` and `transform` to same element

**Why it's wrong:** Perspective should be on parent, transforms on child, otherwise depth effect doesn't work correctly

**Do this instead:** Parent: `perspective: 1000px`, Child: `transform-style: preserve-3d; transform: rotateX(10deg)`

## Build Order (Phase Dependencies)

### Phase 1: Foundation Layer
**Objective:** Smooth scroll without breaking existing functionality

1. Install dependencies: `lenis`, `@gsap/react`
2. Create SmoothScrollProvider component
3. Wrap App in SmoothScrollProvider
4. Test existing Framer Motion animations still work
5. Verify responsive behavior, SEO unaffected

**Success criteria:** Smooth scroll active, no visual regressions

### Phase 2: ScrollTrigger Integration
**Objective:** Add scroll-triggered animations to existing sections

1. Convert existing Framer Motion entrance animations to GSAP (optional, can coexist)
2. Add ScrollTrigger animations to Hero (3D text on scroll)
3. Add fade-in/slide-in to Experience, Education sections
4. Create reusable `use3DParallax` hook
5. Test cleanup in React DevTools (no duplicate ScrollTriggers)

**Success criteria:** Sections animate on scroll, smooth performance

### Phase 3: Advanced Interactions
**Objective:** Horizontal scroll, 3D cards, custom cursor

1. Create HorizontalScroll component
2. Refactor Projects section to use horizontal scroll
3. Create 3DCard component with hover effects
4. Apply 3DCard to Skills/Projects items
5. Add CustomCursor component (optional, can be skipped)
6. Add ScrollProgress indicator

**Success criteria:** All immersive effects working, 60fps scroll

### Phase 4: Polish & Optimization
**Objective:** Performance tuning, accessibility, mobile adaptation

1. Add `matchMedia` to disable heavy effects on mobile
2. Optimize ScrollTrigger with `once: true` where appropriate
3. Add reduced-motion media query support
4. Test accessibility (keyboard nav still works)
5. Performance audit with Lighthouse

**Success criteria:** 90+ Lighthouse performance, accessible

## Sources

### Official Documentation
- [GSAP ScrollTrigger Documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [GSAP React Integration Guide](https://gsap.com/resources/React/)
- [Lenis GitHub Repository](https://github.com/darkroomengineering/lenis)
- [Lenis Official Site](https://lenis.darkroom.engineering/)
- [GSAP useGSAP Hook](https://github.com/greensock/react)

### Implementation Guides
- [Lenis + GSAP Integration Pattern (GSAP Forums)](https://gsap.com/community/forums/topic/40426-patterns-for-synchronizing-scrolltrigger-and-lenis-in-reactnext/)
- [GSAP ScrollTrigger Complete Guide (GSAPify)](https://gsapify.com/gsap-scrolltrigger)
- [Horizontal Scroll with GSAP (Medium)](https://medium.com/@nandinpao/react-gsap-horizontal-scroll-trigger-3e634d868b4d)
- [React Smooth Scrolling with Lenis (Medium)](https://javascript.plainenglish.io/smooth-scrolling-in-react-js-a-step-by-step-guide-for-lenis-smooth-scroll-9aa9d1c24c78)

### Performance & Best Practices
- [CSS 3D Transforms Guide (CSS-Tricks)](https://css-tricks.com/how-css-perspective-works/)
- [3D Transforms with React (Design+Code)](https://designcode.io/react-hooks-perspective-3d-transforms/)
- [Custom Cursor Performance (MagicUI)](https://magicui.design/docs/components/smooth-cursor)
- [React Scroll Progress Tracking (DEV)](https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj)

### React Patterns
- [useLayoutEffect vs useEffect (Kent C. Dodds)](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)
- [GSAP Context Cleanup (Medium)](https://medium.com/@hello.kweku/gsap-context-a-react-developers-guide-to-smoother-animations-4135680fe523)
- [React forwardRef Guide (Refine)](https://refine.dev/blog/react-forwardref/)

---
*Architecture research for: Immersive Flow Integration*
*Researched: 2026-01-28*
