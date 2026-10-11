---
trigger: always_on
description: Consult and use the graphify knowledge graph at graphify-out/ for codebase and architecture questions.
---

# Graphify Knowledge Graph Guidance

Graphify is installed globally as an always-on codebase knowledge graph tool.

## Rules
- When `graphify-out/graph.json` exists:
  - For architecture, structure, relationships, or codebase questions, first run `graphify query <question>` (CLI) or inspect the knowledge graph.
  - Use `graphify path <A> <B>` to inspect shortest paths and dependencies between components.
  - Use `graphify explain <concept>` to inspect focused concepts or god nodes.
  - If `graphify-out/wiki/index.md` exists, navigate it instead of reading multiple raw files.
  - Read `graphify-out/GRAPH_REPORT.md` for high-level architecture overviews and community structure.
  - After modifying code files in a session, run `graphify update .` to keep the graph current (AST-only, fast, no API cost).
- When `graphify-out/` does not yet exist and deep codebase analysis or architecture understanding is needed:
  - Run `graphify .` (or /graphify) to generate the knowledge graph (graph.html, GRAPH_REPORT.md, graph.json).