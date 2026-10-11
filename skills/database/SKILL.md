---
name: database
description: "Use when designing schemas, Supabase queries, Row Level Security (RLS) policies, migrations, or data integrity for BASED Suli."
---

# Database Skill — BASED Suli

## When to use
- Schema changes for `products`, `orders`, and `reviews` tables
- Row Level Security (RLS) policy design (e.g. public insert on orders for guest checkout, public select on products)
- Index creation and query performance optimization
- Updating and versioning `supabase/schema.sql`

## Standards
- Keep `supabase/schema.sql` completely idempotent (`create table if not exists`, `alter table ... add column if not exists`).
- RLS must allow public users to insert orders and read products without breaking anonymous checkout.
- Maintain UUIDs or timestamp-based IDs (`order_group_id`) for grouping multiple items per order.
- Ensure all queries are efficient and order by `sort_order` or `created_at desc`.
