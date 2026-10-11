---
name: frontend
description: "Use when building or polishing Next.js 16 (App Router), Tailwind CSS v4, React 19 UI, Framer Motion animations, bilingual Sorani Kurdish RTL / English LTR, and mobile-first e-commerce flows for BASED Suli."
---

# Frontend Skill — BASED Suli

## When to use
- Screen and modal component architecture (`Menu.tsx`, `CartModal.tsx`, `ProductModal.tsx`, `ProductCard.tsx`, etc.)
- Fluid animations with Framer Motion (spring curves, layoutId tab transitions, bottom drawers, gallery swipe)
- Bilingual typography and RTL/LTR layout mirroring (Kurdish Sorani & English)
- Responsive mobile-first design (375px to 1440px)
- Next.js image optimization (responsive `sizes`, priority loading, preventing layout shift)
- Tactile claymorphic UI system (`clay-pill`, `clay-subcard`, `clay-inset`)

## Standards
- Prefer reusable, well-typed React 19 components with Next.js 16 conventions.
- Keep animation springs calibrated (stiffness 340-450, damping 30-35) for snappy, non-sluggish feel.
- Ensure all images have explicit aspect ratios or `fill` with appropriate `sizes` attribute.
- Support dark and light theme seamlessly via `next-themes`.
- Ensure mobile touch targets are at least 44x44px and safe-area padding is respected.
