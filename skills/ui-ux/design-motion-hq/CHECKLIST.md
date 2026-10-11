# Pre-Flight UX & UI Craft Checklist

Run this checklist before shipping any screen, dashboard, or component to ensure it complies with Design Motion HQ standards.

---

### 1. Intent & Information Architecture
- [ ] Is there exactly ONE dominant primary action on the screen?
- [ ] Is the primary action visually distinct from secondary/cancel actions?
- [ ] Are destructive actions placed in an overflow menu or behind typed confirmations?
- [ ] Does the screen solve the user's intent rather than simply browsing a database table?

### 2. State Completeness (All 6 States Handled)
- [ ] **Loading**: Does it show a skeleton matching the real layout dimensions?
- [ ] **Empty**: Is there an empty state with a helpful illustration and a primary CTA?
- [ ] **Partial / 0 Results**: Does searching/filtering show a clear "0 results" state with a "Reset filters" action?
- [ ] **Error**: Does it provide a human-readable recovery message with a "Retry" button?
- [ ] **Success**: Does completed action trigger non-blocking feedback (toast/banner)?
- [ ] **Offline**: Does the UI degrade gracefully when network connection drops?

### 3. Affordance & Feedback
- [ ] Do clickable elements visibly react on hover and active click?
- [ ] Are disabled buttons paired with a tooltip or message explaining *why*?
- [ ] Do button widths remain stable when loading spinners appear?
- [ ] Are rapid duplicate clicks prevented (debounced)?

### 4. Visual Polish & Character
- [ ] Are all colors, paddings, and font sizes bound to design system tokens?
- [ ] Are text colors checked for contrast accessibility (WCAG AA/AAA)?
- [ ] Are table columns constrained to what the user actually needs (avoiding 12-column dumps)?
- [ ] Does the page pass the Lineup Test (does not look like generic, unstyled AI code)?
