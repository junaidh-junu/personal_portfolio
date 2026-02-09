# Pitfalls Research

**Domain:** Immersive scroll interactions with Lenis, GSAP ScrollTrigger, and 3D CSS transforms in React portfolios
**Researched:** 2026-01-28
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: React Memory Leaks from Improper Cleanup

**What goes wrong:**
GSAP ScrollTrigger instances and Lenis RAF loops persist after component unmount, causing memory leaks and performance degradation. Multiple ScrollTrigger instances accumulate when routes change or components re-render, eventually causing the browser to slow down or crash.

**Why it happens:**
React's component lifecycle doesn't automatically clean up third-party animation libraries. Developers use `useEffect` without proper cleanup functions, or create ScrollTriggers in event handlers that execute after the `useGSAP()` hook runs (making them non-context-safe).

**How to avoid:**
1. Use the `@gsap/react` package's `useGSAP()` hook instead of `useEffect`—it automatically handles cleanup via `gsap.context()`
2. If using standard `useEffect`, always return a cleanup function that kills all ScrollTriggers:
```javascript
return () => {
  ScrollTrigger.getAll().forEach(st => st.kill());
};
```
3. For Lenis, store the instance in a ref and call `lenis.destroy()` in cleanup:
```javascript
useEffect(() => {
  const lenis = new Lenis({ /* options */ });
  return () => lenis.destroy();
}, []);
```
4. CRITICAL: Animations created after the hook executes (click handlers, setTimeout, delayed callbacks) won't be context-safe—manually track and clean them up

**Warning signs:**
- ScrollTrigger console warnings about existing instances
- Browser memory usage increasing over time in DevTools
- Animations triggering multiple times on scroll
- Page lag after route changes or component updates
- "Maximum update depth exceeded" React errors

**Phase to address:**
Phase 1 (Lenis Integration) and Phase 2 (GSAP ScrollTrigger Setup)—establish cleanup patterns from the start before building complex animations

---

### Pitfall 2: Mobile Scroll Hijacking and Touch Behavior Conflicts

**What goes wrong:**
Lenis disrupts native mobile touch scrolling. On Android, the built-in momentum scrolling (where screen continues scrolling after finger lift) stops working—scrolling stops abruptly when finger is raised. On iOS (iPhone 13+, iOS 17+), scrolling stops randomly mid-scroll, or the page jumps to top on load. The `scrollTo` function with `lock: true` doesn't prevent ongoing touch-move scrolling, causing scroll conflicts.

**Why it happens:**
Lenis by default only smooths wheel events, but when `syncTouch` is enabled to mimic touch device scroll, it conflicts with native mobile scroll implementations. iOS < 16 has known instability with `syncTouch`. Mobile browsers have optimized native scroll behaviors that Lenis overrides, causing unexpected interactions.

**How to avoid:**
1. Disable Lenis on mobile devices entirely:
```javascript
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const lenis = new Lenis({
  ...options,
  touchMultiplier: isMobile ? 0 : 2, // Disable on mobile
});
```
2. For iOS < 16, never enable `syncTouch`
3. Test on real devices (not just browser DevTools)—emulators don't replicate native scroll physics accurately
4. Provide a vertical-scroll fallback for horizontal sections on mobile
5. Add explicit touch-action CSS to prevent conflicts:
```css
.smooth-scroll-container {
  touch-action: pan-y;
}
```

**Warning signs:**
- QA reports scroll "feels broken" on mobile
- Scroll stops immediately after finger lift (no momentum)
- Scroll position jumps or stutters on iOS Safari
- User complaints about scroll not working on specific devices
- Touch gestures interfering with page navigation

**Phase to address:**
Phase 1 (Lenis Integration)—implement mobile detection and fallback strategy before building scroll-dependent features. Add to Phase 5 (Mobile Responsiveness) testing checklist.

---

### Pitfall 3: Accessibility Violations with Smooth Scroll and Animations

**What goes wrong:**
Smooth scroll causes motion sickness and vestibular disorders (dizziness, nausea, headaches) for users with motion sensitivity. Keyboard navigation breaks—skip links become nonfunctional, focus management fails when scrolling to anchors. Screen readers can't track position changes. Users who enabled `prefers-reduced-motion` still experience animated scrolling.

**Why it happens:**
Developers focus on visual polish without testing accessibility. JavaScript-controlled scrolling bypasses browser's native focus management. Long-page smooth scrolls move very fast, triggering motion sickness. `prefers-reduced-motion` isn't checked before initializing Lenis or GSAP animations.

**How to avoid:**
1. Respect `prefers-reduced-motion` by disabling smooth scroll and animations:
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  // Initialize Lenis and GSAP
} else {
  // Use instant scroll
}
```
2. Manage focus manually when scrolling to non-focusable elements:
```javascript
const target = document.querySelector(hash);
target.setAttribute('tabindex', '-1');
target.focus();
lenis.scrollTo(target);
```
3. Provide keyboard navigation alternatives:
   - Ensure Tab key navigation works
   - Test arrow keys for horizontal sections
   - Verify Home/End/Page Up/Page Down keys function
4. Add ARIA live regions for scroll position changes:
```html
<div aria-live="polite" aria-atomic="true" class="sr-only">
  Section: {currentSection}
</div>
```
5. Provide a "Disable Animations" toggle in settings as fallback

**Warning signs:**
- Screen reader announces wrong section
- Pressing Tab doesn't move focus predictably
- Skip links appear to scroll but focus stays at top
- Users report feeling dizzy or nauseous
- WCAG AA compliance tools flag motion violations

**Phase to address:**
Phase 1 (Lenis Integration) for `prefers-reduced-motion` check. Phase 4 (Accessibility & Polish) for comprehensive keyboard/screen reader testing.

---

### Pitfall 4: GPU Memory Exhaustion from Over-Promotion

**What goes wrong:**
Excessive use of `will-change`, 3D transforms, or GPU-accelerated properties causes memory to spike from ~26MB to 2.56GB, crashing mobile browsers. Each layer consumes ~50MB of GPU memory. Page becomes unresponsive, scrolling stutters, or device overheats.

**Why it happens:**
Developers apply `will-change: transform` to every animated element or leave it on permanently. Using 3D transforms (even `translateZ(0)`) creates a new compositing layer that the GPU must store. Mobile devices have limited GPU memory compared to desktops. Browser stores a full image in GPU memory for every promoted layer.

**How to avoid:**
1. Apply `will-change` sparingly and remove it after animation completes:
```javascript
element.style.willChange = 'transform';
// Animate...
element.addEventListener('animationend', () => {
  element.style.willChange = 'auto';
});
```
2. Limit 3D transforms to actively animating elements only
3. Avoid promoting large areas (full-screen backgrounds, hero sections)
4. Monitor GPU memory in Chrome DevTools Performance tab:
   - Target < 100MB total GPU memory
   - Watch for sudden spikes during scroll
5. Test on low-end mobile devices (not just flagship phones)
6. Use CSS containment to limit layer creation:
```css
.section {
  contain: layout style paint;
}
```

**Warning signs:**
- DevTools Performance tab shows GPU memory > 200MB
- Mobile browser crashes during scroll
- Scrolling FPS drops below 30
- Device gets hot during normal browsing
- Memory usage increases over time (doesn't garbage collect)

**Phase to address:**
Phase 3 (3D Transforms & Parallax)—establish GPU budget before implementing effects. Include in Phase 5 (Performance Optimization) monitoring.

---

### Pitfall 5: React Effect Dependency Errors Causing Infinite Loops

**What goes wrong:**
Including Lenis/GSAP options objects directly in `useEffect` dependency arrays causes "Maximum update depth exceeded" errors. Effect runs infinitely because options object is recreated on every render, triggering the effect again.

**Why it happens:**
JavaScript object comparison is by reference, not value. `{ duration: 1 }` !== `{ duration: 1 }` in dependency checks. Developers don't understand React's dependency array mechanism or copy-paste code without adapting it.

**How to avoid:**
1. Use `useRef` to store options with empty dependency array:
```javascript
const optionsRef = useRef({ duration: 1.2, easing: t => t });
useEffect(() => {
  const lenis = new Lenis(optionsRef.current);
  // ...
}, []); // Empty array—options never change
```
2. Extract primitive values from options:
```javascript
const duration = 1.2;
useEffect(() => {
  const lenis = new Lenis({ duration });
}, [duration]); // Primitive, safe to include
```
3. Use `useGSAP()` hook which handles this automatically
4. If options must be dynamic, use `useMemo`:
```javascript
const options = useMemo(() => ({
  duration: props.duration,
  easing: easingFunc,
}), [props.duration]); // Only recreate when duration changes
```

**Warning signs:**
- React error: "Maximum update depth exceeded"
- Console logs showing effect running repeatedly
- Animations initializing multiple times on mount
- Performance degradation on component render
- Scroll becoming unresponsive

**Phase to address:**
Phase 1 (Lenis Integration)—establish correct React patterns from the start. Document in setup phase to prevent copy-paste errors.

---

### Pitfall 6: Performance Degradation from Animating Layout Properties

**What goes wrong:**
Animating `width`, `height`, `top`, `left`, `margin`, or `padding` causes 60fps scroll to drop to 15-30fps. Every scroll frame triggers layout recalculation for the entire page, causing visible jank and stuttering.

**Why it happens:**
Layout properties force browser to recalculate positions of all elements on the page (reflow), then repaint, then composite. This happens on every animation frame. Developers don't understand the CSS rendering pipeline or see animations work smoothly on powerful dev machines but fail on user devices.

**How to avoid:**
1. Only animate `transform` and `opacity`—these are GPU-accelerated and skip layout/paint:
```javascript
// BAD
gsap.to(element, { width: 200, left: 100 });

// GOOD
gsap.to(element, { x: 100, scaleX: 2, opacity: 0.5 });
```
2. Use `transform: translate()` instead of `top/left`
3. Use `transform: scale()` instead of `width/height`
4. For layout changes, use CSS classes that transition on idle frames, not scroll frames
5. Enable Chrome DevTools "Rendering > Frame Rendering Stats" to monitor FPS

**Warning signs:**
- DevTools Performance tab shows heavy "Layout" and "Paint" times
- FPS counter drops below 30 during scroll
- Scroll feels laggy or stutters
- "Forced reflow" warnings in console
- Animations smooth on desktop but janky on laptop

**Phase to address:**
Phase 2 (GSAP ScrollTrigger Setup)—establish animation property guidelines before building scroll animations. Include in Phase 5 (Performance Optimization) audit.

---

### Pitfall 7: Bundle Size Bloat from GSAP and Lenis

**What goes wrong:**
Including full GSAP library and all plugins inflates bundle to 150-200KB (minified), far exceeding the 500KB total budget. CSSPlugin gets bundled even when not directly used. Tree shaking fails to remove unused GSAP functionality.

**Why it happens:**
GSAP's modular architecture makes tree shaking challenging. Plugins auto-register on import. Developers import entire `gsap` package instead of specific plugins. Build tools don't optimize GSAP effectively with CommonJS modules.

**How to avoid:**
1. Import only needed GSAP plugins:
```javascript
// BAD
import gsap from 'gsap';

// GOOD
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```
2. Bundle analysis with `vite-plugin-bundle-analyzer`:
```bash
npm install -D rollup-plugin-visualizer
```
3. Consider lazy loading GSAP for non-critical animations:
```javascript
const loadGSAP = async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
  return gsap;
};
```
4. Monitor bundle size on every build:
   - Lenis: ~8KB gzipped
   - GSAP core: ~30-40KB gzipped
   - ScrollTrigger: ~15KB gzipped
   - Total target: <100KB for animation libraries

**Warning signs:**
- Bundle size report shows GSAP > 60KB gzipped
- Lighthouse performance score drops due to JavaScript size
- Initial page load > 3 seconds on 3G
- Multiple GSAP plugin imports in different files
- Bundle includes unused animation features

**Phase to address:**
Phase 0 (Foundation Setup)—configure build optimization before adding libraries. Audit after Phase 3 (3D Transforms) and Phase 5 (Performance Optimization).

---

### Pitfall 8: Browser Compatibility Issues with Modern Features

**What goes wrong:**
Lenis requires Safari > 17.3, Chrome > 116, Firefox > 128 for full functionality. Portfolio breaks on slightly older browsers (Safari 16, Firefox 120) that are still in active use. CSS `transition-behavior` and other modern features cause fallback failures.

**Why it happens:**
Lenis relies on bleeding-edge CSS features. Corporate environments and users on older devices don't update browsers frequently. Developer tests on latest browser versions only. No graceful degradation strategy.

**How to avoid:**
1. Feature detection and fallbacks:
```javascript
const supportsModernFeatures = 'transitionBehavior' in document.body.style;
if (supportsModernFeatures) {
  // Initialize Lenis
} else {
  // Use native smooth scroll or instant scroll
  document.documentElement.style.scrollBehavior = 'smooth';
}
```
2. Test on minimum supported versions:
   - Safari 17.3+ (March 2024)
   - Chrome 116+ (August 2023)
   - Firefox 128+ (July 2024)
3. Use Browserslist in package.json to target browsers:
```json
"browserslist": [
  "Safari >= 17.3",
  "Chrome >= 116",
  "Firefox >= 128"
]
```
4. Add polyfills only when necessary (not by default)
5. Firefox mouse wheel can cause throttling/lagging with Lenis—test specifically

**Warning signs:**
- User reports "scroll doesn't work" on Safari
- Console errors about unsupported features on Firefox
- Portfolio works on Chrome but breaks on Safari 16
- Corporate users (often on older browsers) report issues
- Analytics show high bounce rate from older browser versions

**Phase to address:**
Phase 1 (Lenis Integration)—implement browser detection and fallback. Test on minimum versions in Phase 6 (Testing & QA).

---

## Technical Debt Patterns

Shortcuts that seem reasonable but create long-term problems.

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Using `useEffect` instead of `useGSAP()` hook | Faster to implement, no new dependency | Memory leaks, complex cleanup logic, context safety issues | Never—useGSAP() is drop-in replacement |
| Enabling Lenis on mobile | Consistent scroll behavior across devices | Touch conflicts, performance issues, user frustration | Never—mobile native scroll is superior |
| Applying `will-change` to all animated elements | Ensures smooth animations | GPU memory exhaustion, crashes on mobile | Never—apply selectively and temporarily |
| Skipping `prefers-reduced-motion` check | Fewer code paths, simpler logic | WCAG AA violations, motion sickness, user complaints | Never—accessibility is non-negotiable |
| Using `width`/`height` in scroll animations | Easier to understand than `scale()` | 30fps jank, poor performance, bad UX | Never—always use `transform` and `opacity` |
| Loading full GSAP library | No need to think about which plugins needed | 150KB+ bundle bloat, slow initial load | Only acceptable in early prototype phase |
| Not testing on real mobile devices | Faster testing cycle, no device lab needed | Miss critical touch issues, poor mobile UX | Only acceptable in early development—must test on real devices before ship |
| Using inline options objects in `useEffect` deps | Looks clean, straightforward | Infinite loops, "Maximum update depth" errors | Never—use `useRef` or extract primitives |

---

## Integration Gotchas

Common mistakes when connecting Lenis, GSAP, and React.

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Lenis + React Router | Initializing Lenis on every route change, causes multiple instances | Initialize once at app root, use `lenis.scrollTo(0)` on route change |
| GSAP + Framer Motion | Using both for same element causes conflicts | Choose one: GSAP for scroll-triggered, Framer Motion for mount/route transitions |
| ScrollTrigger + Horizontal Scroll | Not updating ScrollTrigger on container size change | Call `ScrollTrigger.refresh()` after layout changes, window resize, font load |
| Lenis + Anchor Links | Hash changes scroll but Lenis doesn't animate | Add click handler: `lenis.scrollTo(target, { offset: -100 })` |
| GSAP + Tailwind | Tailwind's utility classes overriding GSAP inline styles | Use `!important` in GSAP: `gsap.to(el, { x: 100, force3D: true })` or remove Tailwind class before animating |
| Lenis + Fixed Navigation | Fixed nav jitters during smooth scroll | Use CSS `position: sticky` instead, or transform-based fixed positioning |
| ScrollTrigger + Dynamic Content | Triggers don't update when content loads (images, fonts) | Call `ScrollTrigger.refresh()` after images load: `window.addEventListener('load', () => ScrollTrigger.refresh())` |
| Lenis + Lazy Load Images | Scroll position jumps when images load (height changes) | Set explicit `width`/`height` attributes or use aspect-ratio CSS, refresh Lenis after load |

---

## Performance Traps

Patterns that work at small scale but fail as usage grows.

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Creating ScrollTrigger for every project card (14 instances) | FPS drops to 30-40 during scroll, scroll feels heavy | Batch animations: use one ScrollTrigger with timeline that animates multiple elements | > 10 ScrollTriggers on page |
| Not debouncing Lenis RAF loop | High CPU usage on scroll, battery drain on mobile | Use Lenis's built-in `autoRaf: true`, or throttle custom RAF | Continuous scrolling for > 30 seconds |
| Animating all parallax layers independently | 5-10 separate RAF loops, 100% CPU on one core | Use single GSAP timeline with staggered parallax values | > 5 parallax layers |
| High-resolution images in horizontal carousel | Scroll stutters loading 14 images (3840x2561 each) | Optimize to 1920x1280 max, use WebP, lazy load off-screen cards | > 10 high-res images |
| Deep React component nesting with scroll listeners | Re-renders propagate, sluggish scroll response | Hoist scroll state to context, memoize components | > 3 levels of scroll-dependent components |
| Not cleaning up ScrollTriggers on unmount | Memory grows by ~10MB per route change | Always use `useGSAP()` or manual `ScrollTrigger.getAll().forEach(st => st.kill())` | After 5-10 route changes |
| Using CSS filters (blur, backdrop-filter) on scroll | FPS drops to 15-20, visible stuttering | Avoid filters on scroll, use static filters or toggle on idle | Any filter on scroll-animated element |
| Not virtualizing horizontal carousel | All 14 project cards render at once, slow initial render | Render visible cards + 1 buffer on each side (3-5 total) | > 10 carousel items |

---

## UX Pitfalls

Common user experience mistakes in immersive scroll portfolios.

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Hijacking scroll too much (slow momentum) | Users feel loss of control, frustrated scrolling | Use Lenis's default `lerp: 0.1` (or 0.15 max), don't over-smooth |
| No loading state for scroll initialization | Page jumps after 1-2 second delay when Lenis initializes | Show loading overlay, or initialize Lenis before showing content |
| Horizontal carousel without visual indicators | Users don't know section scrolls horizontally, miss content | Add arrows, scroll hint animation, progress dots |
| 3D transforms too aggressive | Motion sickness, unprofessional appearance | Subtle rotations (5-15 degrees), test with non-technical users |
| Parallax too fast/aggressive | Disorienting, makes reading difficult | Slower parallax (0.5x - 0.8x scroll speed), limit to decorative elements |
| Scroll-jacking entire portfolio | Users can't navigate naturally, feels gimmicky | Only horizontal scroll the projects section, keep rest normal |
| Custom cursor not visible on dark backgrounds | Users lose track of cursor, can't click effectively | Add outline/glow to cursor, ensure contrast on all backgrounds |
| No scroll indicator on landing | Users don't know to scroll, bounce immediately | Add animated "scroll down" indicator, or auto-scroll hint after 3 seconds |
| Animations block content visibility | Users wait for animations instead of reading content | Animate decorative elements only, keep text/images immediately visible |
| Mobile gets broken desktop experience | Horizontal scroll doesn't work on touch, 3D transforms lag | Graceful degradation: vertical scroll on mobile, no 3D transforms |

---

## "Looks Done But Isn't" Checklist

Things that appear complete but are missing critical pieces.

- [ ] **Lenis smooth scroll:** Often missing `destroy()` call in cleanup — verify no memory leaks after route changes
- [ ] **GSAP ScrollTrigger:** Often missing `ScrollTrigger.refresh()` after dynamic content loads — verify triggers update on window resize, font load, image load
- [ ] **Keyboard navigation:** Often missing focus management for anchor links — verify Tab, Arrow keys, Home/End work correctly
- [ ] **Reduced motion:** Often missing `prefers-reduced-motion` check — verify animations disable when system setting enabled
- [ ] **Mobile fallback:** Often missing touch detection — verify Lenis disabled on mobile, vertical scroll fallback works
- [ ] **3D transforms:** Often missing GPU memory monitoring — verify total GPU memory < 100MB on mobile
- [ ] **Performance monitoring:** Often missing FPS counter in dev mode — verify 60fps during scroll on target devices
- [ ] **Browser compatibility:** Often only tested on Chrome — verify Safari 17.3+, Firefox 128+ work correctly
- [ ] **Loading states:** Often missing initialization delay handling — verify no content jump when Lenis initializes
- [ ] **Cleanup functions:** Often missing `lenis.destroy()` or `ScrollTrigger.kill()` — verify no console errors on unmount
- [ ] **Bundle size:** Often not checked after adding libraries — verify total JS bundle < 500KB
- [ ] **Anchor links:** Often broken after adding smooth scroll — verify hash navigation works with Lenis
- [ ] **Fixed elements:** Often jitter during scroll — verify sticky nav/footer don't conflict with Lenis
- [ ] **Image optimization:** Often using full-resolution images — verify images optimized (WebP, correct dimensions)
- [ ] **Error boundaries:** Often missing error handling for GSAP/Lenis failures — verify graceful fallback if libraries fail to load

---

## Recovery Strategies

When pitfalls occur despite prevention, how to recover.

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Memory leaks from missing cleanup | LOW | 1. Add `useGSAP()` hook or cleanup functions<br>2. Test route changes<br>3. Monitor memory in DevTools |
| Mobile scroll broken | MEDIUM | 1. Disable Lenis on mobile: `if (isMobile) return;`<br>2. Add vertical scroll fallback for horizontal sections<br>3. Test on real iOS/Android devices |
| Accessibility violations | MEDIUM | 1. Add `prefers-reduced-motion` check<br>2. Implement keyboard navigation<br>3. Run axe DevTools audit |
| GPU memory exhaustion | MEDIUM | 1. Remove `will-change` from all elements<br>2. Apply selectively and temporarily<br>3. Test on low-end device |
| Infinite React loops | LOW | 1. Move options to `useRef`<br>2. Remove object from dependency array<br>3. Verify effect runs once per mount |
| Layout property animations (jank) | LOW | 1. Replace `width`/`height` with `scale()`<br>2. Replace `top`/`left` with `translate()`<br>3. Verify 60fps in DevTools |
| Bundle size bloat | LOW | 1. Import only needed plugins<br>2. Run bundle analyzer<br>3. Consider lazy loading |
| Browser compatibility | MEDIUM | 1. Add feature detection<br>2. Implement fallback to native scroll<br>3. Test on minimum versions |
| Horizontal scroll not intuitive | LOW | 1. Add visual indicators (arrows, hints)<br>2. Add progress dots<br>3. Test with non-technical users |
| Custom cursor invisible | LOW | 1. Add outline/glow to cursor<br>2. Test on all backgrounds<br>3. Provide fallback on mobile |
| Scroll-jacking frustrates users | MEDIUM | 1. Reduce momentum (increase `lerp`)<br>2. Only apply to specific sections<br>3. Provide skip navigation |
| Images cause scroll jumps | LOW | 1. Set explicit width/height<br>2. Use aspect-ratio CSS<br>3. Call `ScrollTrigger.refresh()` after load |

---

## Pitfall-to-Phase Mapping

How roadmap phases should address these pitfalls.

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| React memory leaks | Phase 1: Lenis Integration | No console errors on route change, DevTools memory stable |
| Mobile scroll hijacking | Phase 1: Lenis Integration | Test on iPhone/Android, touch scroll feels native |
| Accessibility violations | Phase 1: Lenis Integration (reduced motion), Phase 4: Accessibility | axe DevTools passes, keyboard nav works |
| GPU memory exhaustion | Phase 3: 3D Transforms | DevTools GPU memory < 100MB, no mobile crashes |
| React infinite loops | Phase 1: Lenis Integration | No "Maximum update depth" errors, effects run once |
| Layout property jank | Phase 2: GSAP ScrollTrigger | DevTools FPS counter stays at 60fps during scroll |
| Bundle size bloat | Phase 0: Foundation Setup | Bundle analyzer shows total < 500KB |
| Browser compatibility | Phase 1: Lenis Integration | Test on Safari 17.3, Firefox 128 minimum |
| Scroll-jacking UX issues | Phase 6: Testing & QA | User testing with non-technical users |
| Horizontal scroll confusion | Phase 3: 3D Transforms (carousel), Phase 4: Accessibility | Visual indicators present, users understand pattern |
| Image loading scroll jumps | Phase 5: Performance Optimization | No visible position jumps when images load |
| Fixed element jitter | Phase 2: GSAP ScrollTrigger | Navigation doesn't jitter during scroll |

---

## Testing Strategies

How to detect and prevent pitfalls during development.

### Performance Testing
1. **FPS Monitoring:**
   - Enable Chrome DevTools > Rendering > Frame Rendering Stats
   - Target: 60fps during scroll on desktop, 30fps minimum on mobile
   - Test: Scroll continuously for 30 seconds, monitor for drops

2. **Memory Testing:**
   - Chrome DevTools > Memory > Heap snapshot before/after route changes
   - Target: < 10MB increase per route change
   - Test: Change routes 10 times, check for memory leaks

3. **GPU Memory:**
   - Chrome DevTools > Performance > Enable "Advanced paint instrumentation"
   - Target: < 100MB total GPU memory
   - Test: Scroll entire page, monitor GPU memory usage

4. **Bundle Size:**
   - Run `npm run build` and check `dist/` folder size
   - Target: < 500KB total JavaScript
   - Tool: `rollup-plugin-visualizer` for bundle breakdown

### Mobile Testing
1. **Real Device Testing (Required):**
   - Test on iPhone 13+ (iOS 17+)
   - Test on Android phone (Chrome/Samsung Internet)
   - Verify: Touch scroll feels natural, no conflicts

2. **Scroll Behavior:**
   - Verify momentum scrolling works on Android
   - Verify no random stops on iOS
   - Verify no scroll-to-top jumps

3. **Performance:**
   - Test on mid-range device (not flagship)
   - Monitor battery usage during 5-minute scroll session
   - Verify no overheating

### Accessibility Testing
1. **Keyboard Navigation:**
   - Test Tab key through all interactive elements
   - Test Home/End/Page Up/Down keys
   - Test arrow keys on horizontal sections
   - Verify skip links work correctly

2. **Screen Reader:**
   - Test with VoiceOver (macOS/iOS) or NVDA (Windows)
   - Verify section announcements
   - Verify focus position tracking

3. **Reduced Motion:**
   - Enable OS setting: System Settings > Accessibility > Display > Reduce motion (macOS)
   - Verify all animations disabled
   - Verify instant scroll (no Lenis)

4. **Automated Tools:**
   - Run axe DevTools on every page
   - Run Lighthouse accessibility audit
   - Target: WCAG AA compliance (score 90+)

### Browser Compatibility Testing
1. **Minimum Versions:**
   - Safari 17.3 (March 2024)
   - Chrome 116 (August 2023)
   - Firefox 128 (July 2024)

2. **Feature Detection:**
   - Test with `transitionBehavior` unavailable
   - Verify fallback to native scroll works

3. **Cross-browser:**
   - Test mouse wheel on Firefox (known throttling issues)
   - Test Safari low power mode
   - Test Edge (Chromium-based)

### Integration Testing
1. **Route Changes:**
   - Change routes 10 times rapidly
   - Verify no console errors
   - Verify scroll position resets to top

2. **Dynamic Content:**
   - Load images after mount
   - Verify ScrollTrigger.refresh() called
   - Verify no scroll position jumps

3. **Resize:**
   - Resize browser window while scrolling
   - Verify ScrollTriggers update correctly
   - Verify horizontal carousel repositions

### User Testing
1. **First-time User:**
   - Can they understand horizontal scroll?
   - Do they find navigation intuitive?
   - Do they experience motion discomfort?

2. **Non-technical User:**
   - Test on family/friends (not developers)
   - Observe without instruction
   - Ask: "Does anything feel broken or confusing?"

---

## Sources

### High Confidence (Official Documentation & GitHub Issues)
- [GSAP React Integration](https://gsap.com/resources/React/) — Official GSAP React guide
- [GSAP useGSAP Hook](https://github.com/greensock/react) — Official React hook with automatic cleanup
- [GSAP ScrollTrigger Cleanup in React](https://gsap.com/community/forums/topic/24933-cleanup-scrolltrigger-matchmedia-in-react/) — Official forum guidance
- [Lenis GitHub Repository](https://github.com/darkroomengineering/lenis) — Official library repo
- [Lenis Mobile Touch Issues](https://github.com/darkroomengineering/lenis/discussions/322) — Official discussion on mobile
- [Lenis Android Scroll Issue](https://github.com/darkroomengineering/lenis/issues/341) — Reported stuttering on mobile
- [Lenis iOS Scroll Problem](https://github.com/darkroomengineering/lenis/issues/288) — Scroll-to-top bug
- [CSS will-change Property Guide](https://dev.opera.com/articles/css-will-change-property/) — Official Opera Dev guide
- [GPU Animation Best Practices](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) — Authoritative performance guide
- [prefers-reduced-motion MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — Official MDN reference
- [WCAG Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html) — Official W3C guidelines

### Medium Confidence (Verified Community Resources)
- [Lenis Image Performance Discussion](https://github.com/darkroomengineering/lenis/discussions/307) — Performance with many images
- [GSAP ScrollTrigger FPS Issues](https://gsap.com/community/forums/topic/43245-scrolltrigger-fps-drop/) — Performance optimization forum
- [GSAP Tree Shaking Discussion](https://gsap.com/community/forums/topic/28599-gsap-imports-tree-shaking-reduce-bundle-size/) — Bundle size optimization
- [Smooth Scrolling Accessibility](https://css-tricks.com/smooth-scrolling-accessibility/) — CSS-Tricks guide
- [Focus Management with Smooth Scroll](https://www.yanandcoffee.com/2020/05/08/accessible-smooth-scrolling-and-focus-management-solutions/) — Accessibility implementation
- [3D Portfolio Performance](https://discourse.threejs.org/t/3d-portfolio-tutorial-made-with-react-three-fiber/53794) — Three.js forum (60fps/100MB targets)
- [Lenis Browser Compatibility](https://medium.com/@nattupi/why-lenis-smooth-scroll-needs-to-become-a-browser-standard-62bed416c987) — Version requirements

### Low Confidence (Requires Validation)
- WebSearch results on bundle optimization techniques — general guidance, not library-specific
- WebSearch results on mobile optimization patterns — need testing on real devices
- Community forum anecdotes about specific device issues — need reproduction

---

*Pitfalls research for: Immersive scroll with Lenis, GSAP, 3D CSS in React portfolio*
*Researched: 2026-01-28*
*Recommended next step: Use this research to structure Phase 1 (Lenis Integration) with pitfall prevention from the start*
