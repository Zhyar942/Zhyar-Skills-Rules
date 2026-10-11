---
name: design-motion-hq
description: Senior UX/UI design engineering reasoning and pattern library from Design Motion HQ (UX Engine 2.0). Enforces intent-first design over database-shaped schema browsers, 6-state completeness (loading, empty, partial, error, success, offline), information hierarchy, destructive action safety, and anti-AI-slop visual character. Use when designing, building, or auditing dashboards, forms, landing pages, or complex web applications.
---

# Design Motion HQ — UX Engine 2.0 Skill

A senior-designer reasoning system based on **[Design Motion HQ](https://www.designmotionhq.com/)** and the **UX Engine 2.0** architecture.

> **The Core Rule**: Stop shipping database-shaped interfaces. AI coding agents naturally default to dumping a 12-column table with Edit and Delete side-by-side and calling it a dashboard. That is not a product; it is a database browser. UX Engine forces intent discovery, information hierarchy, and state completeness before code is written.

---

## The 8 Pillars of Senior-Designer Reasoning

### 1. Intent Discovery (Ask Before Building)
Before writing any screen, answer three questions:
1. **Who** uses this screen day-to-day?
2. **What** is their single primary goal when they arrive?
3. **What is the worst mistake** they could make here (e.g., deleting a live customer, posting irreversible accounting, wiping unsaved state)?
*If the user says "skip questions", proceed with stated, explicit assumptions rather than silent defaults.*

### 2. Information Hierarchy (Primary / Secondary / Tertiary)
- **Primary Action (Max 1 per view)**: High contrast, prominent placement (e.g. "+ New Order", "Invite Team").
- **Secondary Actions**: Ghost, outline, or muted buttons for supporting workflows.
- **Tertiary & Destructive**: Place destructive actions (Delete, Void, Archive) into an overflow menu (`···`) or require typed confirmation (`type "DELETE" to confirm`). Never place a raw red Delete button adjacent to Edit on every table row.

### 3. State Completeness (The 6 Mandatory UI States)
Every interface must specify all 6 states—never leave the screen stuck on a blank white box:
1. **Loading State**: Layout-matching skeleton or progress bar (never a generic spinner centered in an empty void).
2. **Empty State**: Friendly illustration/icon + clear explanation + immediate actionable primary CTA (e.g., "No orders yet · Create your first order").
3. **Partial / Searching State**: Specific feedback for 0 results (e.g., "No customers matching 'Alex' · Clear filter").
4. **Error State**: Actionable recovery message with a Retry button and fallback contact, not an unhandled stack trace or raw 500 error.
5. **Success State**: Clear, non-blocking toast or banner confirmation with undo option when applicable.
6. **Offline State**: Non-intrusive banner indicating offline cache status and pending sync queue.

### 4. Form UX & Progressive Disclosure
- **Grouping**: Group related fields into logical cards/sections (e.g., General Info, Billing, Security).
- **Labels**: Always visible labels above inputs; never rely on placeholder text as the sole label.
- **Inline Validation**: Validate on blur or debounced typing (300ms); never shock the user with a wall of red text on the first keystroke.
- **Smart Defaults**: Pre-fill currency, locale, phone prefixes, and dates where known.
- **Autosave & Unsaved Changes Guard**: Debounced autosave with subtle "Saved" status indicator; warn if user attempts to leave dirty forms.

### 5. Feedback & Affordances (Doherty Threshold < 400ms)
- **Immediate Response**: Buttons must show active/depressed state within 50ms.
- **Optimistic UI**: Reflect list updates immediately; roll back gracefully with a toast notification if the API call fails.
- **Behind the Button**: Disable multiple clicks, display loading spinner inside the button without shifting layout dimensions.
- **Disabled Buttons**: Never disable a button without explaining *why* (use a tooltip or helper text explaining missing prerequisites).

### 6. Visual Character (Anti-AI-Slop Principle)
Avoid the "statistically safest" AI look (generic slate-900 dark mode, plain purple gradient, standard Inter font, uniform 12-column tables). Make one deliberate choice per axis:
- **Typography**: Editorial tracking, optical sizing, distinctive display weights.
- **Color**: Tailored brand hues with calibrated contrast ratios (APCA / WCAG AAA).
- **Space & Grid**: Varied density—compact operational data tables vs spacious executive summaries.
- **Finish & Elevation**: Soft ambient occlusion shadows (`rgba(0,0,0,0.06)`), subtle 1px border grounding (`rgba(255,255,255,0.08)` in dark mode).

### 7. Design System Enforcement (`DESIGN.md`)
- Consolidate existing Tailwind config and CSS variables into `DESIGN.md`.
- Off-system hex codes or arbitrary padding values (`p-[23px]`) are forbidden unless declared as specific exceptions.

### 8. UX Auditor & RESTYLE Workflow
Audit any existing component with a severity-ranked rubric:
- **P0 Blockers**: Broken state, destructive action without confirmation, missing validation.
- **P1 Usability**: Cluttered 12-column tables, hidden search, sluggish feedback (>400ms).
- **P2 Polish**: Bad corner radii alignment, inconsistent spacing, ungrounded shadows.

---

## Quick Slash Commands

| Command | Action |
| :--- | :--- |
| `/ux-design [screen]` | Runs intent discovery, information hierarchy, and specs all 6 UI states before coding. |
| `/ux-audit [path]` | Scans target component/page and returns a prioritized, shippable fix list. |
| `/ux-states [path]` | Validates and generates loading, empty, error, and partial states for a component. |
| `/restyle [path]` | Applies visual character and design tokens without altering business logic or structure. |

---

## Detailed References
- Complete UX pattern breakdowns (Reverse-Engineered Linear, De-AI Landing Hero, etc.): [PATTERNS.md](./PATTERNS.md)
- Pre-flight delivery checklist: [CHECKLIST.md](./CHECKLIST.md)
