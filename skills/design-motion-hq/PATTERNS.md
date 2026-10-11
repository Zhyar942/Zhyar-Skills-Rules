# Design Motion HQ — Core UX & Motion Patterns

A detailed guide to the signature patterns documented by **[Design Motion HQ](https://www.designmotionhq.com/patterns)**.

---

## 1. De-AI Landing Hero
**The Problem**: AI models generate predictable landing pages with 5 classic "tells":
1. Purple/violet glowing radial gradient behind a center hero.
2. Identical oversized headline with 3 words wrapped onto a 4th line awkwardly.
3. Two equal-weight CTA buttons ("Get Started" and "Book a Demo") fighting each other.
4. Floating cards with arbitrary random stats ("+140% growth").
5. Stock mockups floating in a generic tilted 3D perspective with no realistic interface.

**The Fix**:
- **Anchor with Real Narrative**: Start with a concrete user problem, not vague marketing adjectives.
- **Single Dominant CTA**: Primary button receives solid brand fill; secondary action is an inline text link with subtle hover underline.
- **Realistic Grounded Mockup**: Use flat or authentic 2.5D device frames (LS Graphics standard) displaying genuine product workflows and legible text.
- **Asymmetric Balance**: Shift headline left, anchor high-fidelity live demo or interactive component right.

---

## 2. Reverse-Engineered Linear (Why Linear Feels Expensive)
Five invisible decisions that give Linear its trademark polish:
1. **Zero Layout Shifts**: Heights and widths are hard-reserved. Loading skeletons match the exact dimensions of final loaded rows down to the pixel.
2. **Keyboard-First Navigation**: Global shortcuts (`⌘K`, `C` to create, `J/K` or `↑/↓` for row traversal) make power users fly.
3. **Subtle Depth Over Flat Borders**: Semi-transparent 1px borders (`rgba(255,255,255,0.08)`) with tiny dark ambient shadows rather than harsh solid borders.
4. **Instant Optimistic UI**: When an issue is moved or created, it moves on screen immediately; background sync happens silently.
5. **Micro-Typography**: Reduced base font sizes (13px/14px) with tighter letter spacing (`tracking-[-0.01em]`) and high contrast labels create an ultra-crisp desktop density.

---

## 3. Destructive Actions as a Design Language
- **Never rely solely on color**: A red button alone is not a safeguard.
- **Two-Tier Protection**:
  1. Low-Risk Destructive (Remove from view, unassign): Placed in `···` overflow menu with a single confirmation modal or instant undo toast.
  2. High-Risk Irreversible (Delete database record, wipe project, revoke access):
     - Require explicit typed confirmation (`Please type the project name to confirm`).
     - Display exact blast radius ("This will permanently delete 14 tables and 320 records").
     - Disable the confirm button until the exact phrase is entered.

---

## 4. Behind the Button (The Submit Pipeline)
When a user clicks a primary action button:
1. **0ms**: Button triggers active press depression (`scale(0.98)`).
2. **50ms**: Button enters loading state. Dimensions remain locked (width and height do not jump when text changes to a spinner).
3. **Debounce**: Subsequent clicks are ignored to prevent double-submits.
4. **Optimistic Paint**: If creating a list item, append to the DOM immediately with an opacity fade.
5. **Network Return**: If success, trigger confirmation toast. If failure, gracefully revert the optimistic item and present an inline error with a "Retry" button.

---

## 5. Loading States System (Spinners vs Skeletons vs Optimistic)
- **Use Spinners**: Only inside buttons or for small localized inline refreshes (<1 second).
- **Use Skeletons**: For initial page loads, data tables, and card grids. The skeleton must mimic the exact layout, column count, and heights of the incoming data.
- **Use Optimistic Updates**: For frequent CRUD actions (toggling a checkbox, reordering a Kanban card, liking, assigning).

---

## 6. Form Field States & Inline Validation
Every form input must explicitly handle 6 field states:
1. **Default**: Subtle neutral border, readable placeholder (or empty with floating label).
2. **Hover**: Slight border contrast increase to indicate clickable affordance.
3. **Focus**: Distinct focus ring (`ring-2 ring-primary/20`) with keyboard tab accessibility.
4. **Filled / Valid**: Clean text, optional subtle green check or neutral state.
5. **Error**: Red accent border + clear error text positioned directly underneath the field (never alert boxes at the top of the page).
6. **Disabled**: Reduced opacity (50%), `cursor-not-allowed`, and a tooltip explaining why it cannot be edited.
