# Phase 1: Design System Foundation - Research

**Researched:** 2026-01-31
**Domain:** Design tokens, typography, color system, spacing, elevation (Tailwind CSS v4)
**Confidence:** HIGH

## Summary

This phase establishes the core design system for a minimalistic, Apple-inspired portfolio using Tailwind CSS v4's new CSS-first configuration. The project already uses Tailwind v4.1.18, Framer Motion 11, and Lenis for smooth scrolling, providing a solid foundation.

The key changes involve replacing the current neon/cyberpunk color scheme (electric cyan `#00F5FF`, hot pink `#FF0080`) with a sophisticated dark theme using the Tailwind slate palette as the accent color (`#64748b` range). Typography shifts from Space Grotesk/Syne to a classic serif + sans pairing (Crimson Pro for headings, Inter for body, JetBrains Mono for code).

**Primary recommendation:** Use Tailwind CSS v4's `@theme` directive in `src/index.css` to define all design tokens as CSS variables. This enables utility class generation while keeping the design system centralized and maintainable.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Tailwind CSS | 4.1.18 | Utility-first CSS with design tokens | Already installed; v4 uses CSS-first `@theme` directive |
| Framer Motion | 11.0.5 | Animations with accessibility support | Already installed; has `useReducedMotion` and `MotionConfig` |
| Lenis | 1.3.17 | Smooth scroll physics | Already installed; decision locked in PROJECT.md |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Google Fonts | N/A | Web fonts (Crimson Pro, Inter, JetBrains Mono) | Typography via `@import` in CSS |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Crimson Pro | Playfair Display, Lora | Playfair is bolder/more dramatic; Lora is softer; Crimson Pro is most versatile |
| Inter | Work Sans, DM Sans | Inter has best variable font support and widest weight range (100-900) |
| Custom color palette | Full custom OKLCH | Tailwind's slate palette is professionally designed and already tested |

**Installation:**
No new packages needed. Fonts added via CSS import:
```css
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

## Architecture Patterns

### Recommended Project Structure
Design tokens centralized in CSS:
```
src/
├── index.css              # Design tokens via @theme, base styles, utilities
├── App.tsx                # MotionConfig wrapper for reduced motion
├── components/
│   ├── ui/                # Reusable design system components (Button, Card, etc.)
│   └── ...
└── ...
```

### Pattern 1: CSS-First Design Tokens with @theme
**What:** Define all design tokens in `src/index.css` using Tailwind v4's `@theme` directive
**When to use:** All color, typography, spacing, shadow, and breakpoint definitions
**Example:**
```css
/* Source: https://tailwindcss.com/docs/theme */
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

@theme {
  /* Colors - Dark theme with slate blue accent */
  --color-background: #0a0a0a;
  --color-surface: #141414;
  --color-surface-elevated: #1a1a1a;
  --color-border: #2a2a2a;
  --color-border-light: #3a3a3a;

  /* Slate accent palette (professional, not neon) */
  --color-accent-50: #f8fafc;
  --color-accent-100: #f1f5f9;
  --color-accent-200: #e2e8f0;
  --color-accent-300: #cbd5e1;
  --color-accent-400: #94a3b8;
  --color-accent-500: #64748b;
  --color-accent-600: #475569;
  --color-accent-700: #334155;
  --color-accent-800: #1e293b;
  --color-accent-900: #0f172a;

  /* Typography - Classic serif + modern sans */
  --font-heading: "Crimson Pro", ui-serif, Georgia, serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* Spacing scale (4px base) */
  --spacing: 0.25rem;

  /* Breakpoints */
  --breakpoint-sm: 40rem;   /* 640px - mobile */
  --breakpoint-md: 48rem;   /* 768px - tablet */
  --breakpoint-lg: 64rem;   /* 1024px - desktop */
  --breakpoint-xl: 80rem;   /* 1280px - wide */
}
```

### Pattern 2: Layered Shadow System for Dark Theme
**What:** Multiple stacked shadows with reduced opacity for subtle depth
**When to use:** Cards, overlays, elevated surfaces
**Example:**
```css
/* Source: https://www.joshwcomeau.com/css/designing-shadows/ */
@theme {
  /* Elevation shadows for dark theme */
  --shadow-sm:
    0 1px 2px 0 rgb(0 0 0 / 0.3);

  --shadow-md:
    0 4px 6px -1px rgb(0 0 0 / 0.3),
    0 2px 4px -2px rgb(0 0 0 / 0.2);

  --shadow-lg:
    0 10px 15px -3px rgb(0 0 0 / 0.4),
    0 4px 6px -4px rgb(0 0 0 / 0.2);

  --shadow-xl:
    0 20px 25px -5px rgb(0 0 0 / 0.4),
    0 8px 10px -6px rgb(0 0 0 / 0.3);
}
```

### Pattern 3: MotionConfig for Accessible Animations
**What:** Wrap app in MotionConfig with `reducedMotion="user"` to respect OS preferences
**When to use:** Root App component
**Example:**
```tsx
/* Source: https://www.framer.com/motion/motion-config/ */
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* App content */}
    </MotionConfig>
  );
}
```

### Anti-Patterns to Avoid
- **Mixing @theme and tailwind.config.js:** Tailwind v4 uses CSS-first config; don't maintain parallel JS config for design tokens
- **Using hex colors without semantic names:** Always alias colors to semantic names (`--color-accent-*` not just raw hex)
- **Pure black shadows on dark backgrounds:** They disappear; use slightly lighter shadows with reduced opacity
- **Animating layout properties:** Prefer `transform` and `opacity` for 60fps performance

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Smooth scrolling | Custom scroll physics | Lenis (already installed) | Handles momentum, touch, accessibility, edge cases |
| Reduced motion detection | Manual media query checks | Framer Motion `useReducedMotion` / `MotionConfig` | Handles SSR, reactive updates, integration with animations |
| Color palette generation | Manual hex picking | Tailwind's slate palette | Perceptually uniform, tested across contrast ratios |
| Responsive breakpoints | Ad-hoc media queries | Tailwind's breakpoint system | Consistent, mobile-first, tested patterns |
| Typography scale | Manual font sizes | Tailwind's text utilities with custom fonts | Maintains visual hierarchy, responsive |

**Key insight:** The design system should configure existing primitives, not replace them. Tailwind v4's `@theme` directive provides the customization layer.

## Common Pitfalls

### Pitfall 1: Forgetting to Remove Old Config
**What goes wrong:** Both `tailwind.config.js` and `@theme` in CSS define the same tokens, causing conflicts
**Why it happens:** Migration from v3 patterns leaves JS config in place
**How to avoid:** Remove color/font/spacing overrides from `tailwind.config.js`; use `@theme` exclusively
**Warning signs:** Duplicate utility classes, unexpected color values

### Pitfall 2: Font Loading Performance
**What goes wrong:** FOUT (Flash of Unstyled Text) or layout shift when fonts load
**Why it happens:** Google Fonts load asynchronously without preloading
**How to avoid:**
1. Add `&display=swap` to Google Fonts URL (already included in recommended import)
2. Specify fallback fonts that match metrics: `"Crimson Pro", ui-serif, Georgia, serif`
3. Consider preloading critical fonts in `index.html`
**Warning signs:** Text visibly changes after page load

### Pitfall 3: Inconsistent Spacing Application
**What goes wrong:** Mix of Tailwind utilities and arbitrary values creates visual inconsistency
**Why it happens:** Developers reach for `p-[17px]` instead of nearest scale value
**How to avoid:** Stick to the spacing scale (4px increments); document which values map to requirements
**Warning signs:** Arbitrary values (`p-[23px]`) appearing in code

### Pitfall 4: Shadow Invisibility on Dark Backgrounds
**What goes wrong:** Shadows using pure black disappear against dark backgrounds
**Why it happens:** No contrast between shadow and background
**How to avoid:** Use layered shadows with higher opacity (0.3-0.4) or add subtle ambient light effect
**Warning signs:** Elevated elements appear flat

### Pitfall 5: Missing Reduced Motion Support
**What goes wrong:** Vestibular-sensitive users experience discomfort
**Why it happens:** Animations not wrapped in reduced motion checks
**How to avoid:** Use `MotionConfig reducedMotion="user"` at root; verify with OS settings
**Warning signs:** No `prefers-reduced-motion` styles in CSS output

## Code Examples

Verified patterns from official sources:

### Complete @theme Block for Design System
```css
/* Source: https://tailwindcss.com/docs/theme */
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

@theme {
  /* === COLORS === */
  /* Dark theme backgrounds */
  --color-background: #0a0a0a;
  --color-surface: #141414;
  --color-surface-elevated: #1a1a1a;
  --color-border: #2a2a2a;
  --color-border-light: #3a3a3a;

  /* Slate blue accent (professional, not neon) - DESIGN-01 */
  --color-accent-50: #f8fafc;
  --color-accent-100: #f1f5f9;
  --color-accent-200: #e2e8f0;
  --color-accent-300: #cbd5e1;
  --color-accent-400: #94a3b8;
  --color-accent-500: #64748b;
  --color-accent-600: #475569;
  --color-accent-700: #334155;
  --color-accent-800: #1e293b;
  --color-accent-900: #0f172a;

  /* Text colors */
  --color-text-primary: #ffffff;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;

  /* === TYPOGRAPHY === */
  /* DESIGN-02: Classic serif for headings */
  --font-heading: "Crimson Pro", ui-serif, Georgia, serif;
  /* DESIGN-03: Modern sans-serif for body */
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  /* DESIGN-04: Monospace for code/tech tags */
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* === SPACING === */
  /* DESIGN-06: 4px base scale */
  --spacing: 0.25rem;
  /* Custom spacing tokens for generous whitespace (DESIGN-05) */
  --spacing-section: 6rem;   /* 96px - between sections */
  --spacing-container: 2rem; /* 32px - container padding */

  /* === BREAKPOINTS === */
  /* DESIGN-07: Responsive breakpoints */
  --breakpoint-sm: 40rem;   /* 640px - mobile */
  --breakpoint-md: 48rem;   /* 768px - tablet */
  --breakpoint-lg: 64rem;   /* 1024px - desktop */
  --breakpoint-xl: 80rem;   /* 1280px - wide */

  /* === ELEVATION / SHADOWS === */
  /* DESIGN-08: Subtle elevation system for dark theme */
  --shadow-sm:
    0 1px 2px 0 rgb(0 0 0 / 0.3);

  --shadow-md:
    0 4px 6px -1px rgb(0 0 0 / 0.3),
    0 2px 4px -2px rgb(0 0 0 / 0.2);

  --shadow-lg:
    0 10px 15px -3px rgb(0 0 0 / 0.4),
    0 4px 6px -4px rgb(0 0 0 / 0.2);

  --shadow-xl:
    0 20px 25px -5px rgb(0 0 0 / 0.4),
    0 8px 10px -6px rgb(0 0 0 / 0.3);

  /* Elevation via surface color gradient */
  --shadow-elevated:
    0 0 0 1px rgb(255 255 255 / 0.05),
    0 8px 16px -4px rgb(0 0 0 / 0.3);
}

@layer base {
  html {
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text-primary);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  code, pre {
    font-family: var(--font-mono);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Accessible Animation with useReducedMotion
```tsx
/* Source: https://www.framer.com/motion/use-reduced-motion/ */
import { motion, useReducedMotion } from 'framer-motion';

function FadeInSection({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

### Card Component with Elevation
```tsx
function Card({ children, elevated = false }: { children: React.ReactNode; elevated?: boolean }) {
  return (
    <div className={`
      rounded-xl border border-border
      ${elevated
        ? 'bg-surface-elevated shadow-elevated'
        : 'bg-surface shadow-sm'
      }
      transition-shadow duration-300 hover:shadow-md
    `}>
      {children}
    </div>
  );
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `tailwind.config.js` for theme | `@theme` directive in CSS | Tailwind v4.0 (Jan 2024) | Design tokens in CSS, not JS |
| Hex colors | OKLCH color space | Tailwind v4.0 | More vibrant colors, better gradients |
| `@apply` heavy styles | Direct utility classes | Ongoing recommendation | Better maintainability, smaller bundles |
| Manual reduced motion | `MotionConfig reducedMotion="user"` | Framer Motion 10+ | Automatic accessibility support |

**Deprecated/outdated:**
- `tailwind.config.js` `theme.extend.colors`: Use `@theme { --color-*: ... }` instead
- Space Grotesk / Syne fonts: Current design spec calls for Crimson Pro + Inter
- Neon colors (`#00F5FF`, `#FF0080`): Replaced by slate palette per PROJECT.md decisions

## Open Questions

Things that couldn't be fully resolved:

1. **Font preloading strategy**
   - What we know: `display=swap` prevents invisible text; fallbacks help
   - What's unclear: Whether to preload fonts in `index.html` or rely on CSS import
   - Recommendation: Start with CSS import; add preload if FOUT is noticeable in production

2. **Exact heading font weights**
   - What we know: Crimson Pro available in 400-700
   - What's unclear: Optimal weights for h1 vs h2 vs h3 in the final design
   - Recommendation: Use 600 for h1-h2, 500 for h3-h4; adjust based on visual review

## Sources

### Primary (HIGH confidence)
- [Tailwind CSS Theme Variables](https://tailwindcss.com/docs/theme) - @theme directive, namespaces, CSS variables
- [Tailwind CSS Colors](https://tailwindcss.com/docs/colors) - Slate palette values
- [Tailwind CSS Customizing Spacing](https://tailwindcss.com/docs/customizing-spacing) - Spacing scale configuration
- [Framer Motion MotionConfig](https://www.framer.com/motion/motion-config/) - reducedMotion prop
- [Framer Motion useReducedMotion](https://www.framer.com/motion/use-reduced-motion/) - Accessibility hook

### Secondary (MEDIUM confidence)
- [Josh Comeau - Designing Shadows](https://www.joshwcomeau.com/css/designing-shadows/) - Layered shadow technique
- [Google Fonts CSS2 API](https://developers.google.com/fonts/docs/css2) - Font import patterns
- [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) - Accessibility standard

### Tertiary (LOW confidence)
- Typography pairing recommendations (community sources, validated against official font specimens)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All libraries already installed and verified
- Architecture: HIGH - Tailwind v4 patterns from official documentation
- Typography: MEDIUM - Font pairings validated but weights need visual tuning
- Colors: HIGH - Using Tailwind's built-in slate palette (hex values verified)
- Shadows: MEDIUM - Josh Comeau approach adapted for dark theme
- Accessibility: HIGH - Framer Motion APIs well-documented
- Pitfalls: HIGH - Common issues from Tailwind GitHub discussions

**Research date:** 2026-01-31
**Valid until:** 2026-03-01 (30 days - stable domain)
