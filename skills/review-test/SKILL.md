---
name: review-test
description: "Use when reviewing implementation quality, testing animations, UI responsiveness, running TypeScript build verification, and checking regressions for BASED Suli."
---

# Review & Test Skill — BASED Suli

## When to use
- Type checking (`npx tsc --noEmit`) and Next.js build verification (`npm run build`)
- Animation auditing: testing Framer Motion spring physics, modal slide-ins, gesture swipes, layoutId transitions
- UI responsiveness verification: testing across mobile (375-430px), tablet (768px), and desktop (1024px+)
- Bilingual verification: Kurdish Sorani (RTL) vs English (LTR) layout alignment and text wrapping
- Console warning audits (e.g. Next.js image `sizes` warnings, hydration errors)

## Standards
- Never consider a change complete without running `tsc --noEmit`.
- Verify animations feel snappy, natural, and never cause jank or layout jumping.
- Check both dark and light modes for contrast and readability.
- Validate that guest users and authenticated users can both complete checkout.
