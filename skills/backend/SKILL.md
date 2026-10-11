---
name: backend
description: "Use when implementing service logic, APIs, Supabase Auth, guest checkout, WhatsApp order dispatch, and admin operations for BASED Suli."
---

# Backend Skill — BASED Suli

## When to use
- Supabase client integration, authentication, and session handling
- Guest 1-Click Checkout and Order submission logic
- WhatsApp order message builder (`wa.me/9647701435004`)
- Admin actions: order status lifecycle (`new` -> `contacted` -> `done`), receipts, and product catalog updates
- Profile synchronization between Supabase user metadata and client storage

## Standards
- Ensure orders can be placed both by authenticated users and guests without unnecessary barriers.
- Format prices in Iraqi Dinar (IQD) formatted with comma separators (e.g. "25,000 IQD").
- Sanitize and trim all inputs (customer name, phone, address, notes).
- Handle Supabase errors gracefully with user-friendly bilingual feedback.
- Document any required environment variables in `.env.local.example`.
