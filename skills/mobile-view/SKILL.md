---
name: mobile-view
description: Comprehensive mobile web view, responsive layout, touch target optimization, and mobile-first UX guidelines for modern web applications. Use when auditing mobile view, fixing mobile layouts, touch ergonomics, mobile navigation, fluid typography, or mobile drawer systems.
---

# Mobile View & Mobile-First UX Guidelines

This skill provides comprehensive rules, patterns, and audit checklists for delivering state-of-the-art mobile web experiences.

## Core Mobile View Principles

### 1. Viewport & Layout Bounds
- Always ensure `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">` is present.
- Prevent horizontal scrollbars (`overflow-x: clip` or `overflow-x: hidden` on root containers where appropriate). Never allow items with fixed pixel widths (`width: 500px`) to exceed screen width.
- Use `width: 100%` and `max-width: 100%` instead of hardcoded pixel widths.
- Use `100dvh` (dynamic viewport height) for full-screen modals, drawers, and mobile hero sections to prevent mobile browser URL bar clipping.
- Account for safe area insets: `padding-bottom: max(1rem, env(safe-area-inset-bottom))`.

### 2. Touch Targets & Ergonomics (Fitts's Law)
- Minimum touch target size for interactive elements (buttons, links, tab items, dropdown items) is **44x44px** (or 48x48px recommended).
- Ensure sufficient spacing between adjacent tap targets (at least 8px to 12px) to prevent accidental mis-taps.
- Place primary actions in the thumb zone (bottom sheet, floating action button, sticky bottom bar on mobile).

### 3. Typography & Text Scaling
- Body font size on mobile should be at least `14px` to `16px` to prevent automatic zoom on iOS input focus.
- Headings should scale gracefully using `clamp()` or mobile-specific font sizes (e.g., `clamp(1.5rem, 5vw, 2.75rem)` instead of desktop `3.5rem`).
- Respect typography rules: in Kurdish/Arabic layouts, maintain required font families (e.g. `Zain`) and strictly follow weight rules (`font-weight: normal`).
- Ensure line breaks and word wrapping (`overflow-wrap: break-word`, `word-break: break-word`) so long Kurdish/English strings never blow out card containers.

### 4. Navigation & Modals on Mobile
- Replace desktop horizontal navbars with an ergonomic mobile hamburger drawer or slide-over menu with smooth backdrop blur.
- On mobile, slide-in drawers (cart, filter, menu) must occupy `100%` or `min(400px, 92vw)` of the screen with clear close buttons and touch-friendly dismissal.
- Sticky navigation headers should be compact (`h-14` to `h-16`), keeping screen real estate open for content.

### 5. Grids, Cards & Data Layout
- Switch multi-column desktop grids (`grid-cols-3`, `grid-cols-4`) to `grid-cols-1` or `grid-cols-2` on mobile (`sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`).
- Product cards on mobile:
  - If 2-column: optimize padding (`p-2.5` to `p-3`), reduce badge sizes, make action buttons compact yet easy to tap.
  - If 1-column: horizontal card layout or generous vertical card with high quality imagery.
- Filter panels: convert desktop sidebar filters into a slide-up bottom sheet or slide-in filter drawer with a "Show Results" sticky button.

### 6. Forms & Inputs
- Set form input font-size to `16px` minimum on mobile to prevent iOS Safari auto-zoom on focus.
- Full-width submit buttons on mobile screens with visible active states.
- Clean spacing around input fields (`mb-4`) with clear, legible labels.

### 7. Bidirectional (RTL / LTR) Mobile Adaptation
- Use logical CSS properties (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`, `text-align: start`) or explicit RTL class overrides (`rtl:...`).
- Verify swipe directions, drawer slide origins (from right in RTL, from left in LTR), and arrow icon directions.

## Mobile Audit Checklist

| Check | Pass Criteria |
|-------|---------------|
| Horizontal Overflow | Page width equals viewport width (320px–430px) without horizontal scroll |
| Tap Targets | All buttons, icons, filters >= 44x44px hit area |
| Hero Section | Title, subtitle, and CTA fit comfortably above the fold or scroll naturally |
| Product Grid | 1 or 2 columns cleanly aligned without overflowing text or squished badges |
| Filter System | Accessible via mobile filter button opening full-screen or bottom drawer |
| Cart Drawer | Opens smoothly, lists items with easy quantity adjustments, checkout button sticky at bottom |
| Search & Modals | Full-width, dismissible with tap outside or clear close button |
| Footer | Collapsed or stacked vertically with easy-to-read links and contact info |
