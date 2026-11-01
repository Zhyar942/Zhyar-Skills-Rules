---
name: workroom
description: >-
  Workroom (workroom.qaico.ai) enterprise company task tracker integration.
  Use to create, start, stop, track, document, and finish company tasks
  with detailed implementation summaries, git commits, and file lists.
---

# Workroom Company Task Tracker Integration

Workroom (`https://workroom.qaico.ai/mcp`) is the official internal task tracking system for QAI.
This skill instructs the agent on how to interact with Workroom to track, document, and complete company tasks.

---

## 1. Core Operating Principles

Every development task performed by the assistant should be cleanly synchronized with Workroom:
1. **Task Initialization**: When beginning a significant task or milestone, create or identify the task in Workroom.
2. **Lifecycle Tracking**: Transition the task status (`todo` -> `in_progress` -> `review` -> `completed`).
3. **Task Completion Dossier**: When completing a task, write a comprehensive summary directly to Workroom detailing:
   - What was accomplished.
   - Core technical decisions & architectural rationale.
   - Exact files created, updated, or refactored.
   - Git commit hashes and target branch (`zhyar`).
   - Safety checks & verification results (file limits, TypeScript, Vitest).

---

## 2. Standard Task Lifecycle

### A. Creating a Task
When the user asks to start or plan a task:
- **Title**: Clear, imperative noun phrase (e.g., `Design & Elevate Frontier Models Bento Card`).
- **Description**: Concise summary of objectives, requirements, and constraints.
- **Priority**: `P0` (critical bug/outage), `P1` (high priority feature), `P2` (standard enhancement).
- **Assignee**: Current user / team engineer (e.g., Zhyar Nasr).

### B. Starting a Task
- Set the task status to `in_progress`.
- Note the start timestamp and initial context.

### C. Stopping or Pausing a Task
- If blocked or awaiting user feedback, set status to `blocked` or `paused`.
- Record the exact blocker or question for the team.

### D. Finishing a Task
When the user or agent completes a task, generate and record the **Completion Dossier**:

```markdown
### Task Completion Summary: [Task Title]

- **Status**: Completed / Merged
- **Branch**: `zhyar`
- **Commits**:
  - `[hash]`: [commit message]
- **Files Modified**:
  - `path/to/file.tsx`: [Brief description of change]
- **Verification Gates**:
  - File Limit: Passed (0 files > 350 lines)
  - TypeScript: 0 errors
  - Automated Tests: All tests passing
- **Summary**:
  [Detailed paragraph explaining the resolution, UI polish, or backend architecture implemented]
```

---

## 3. MCP Connection & Authentication Details

- **MCP Endpoint**: `https://workroom.qaico.ai/mcp`
- **Auth Provider**: Supabase Edge Runtime (`https://syrwtxnddwkzdyknelma.supabase.co/auth/v1`)
- **Transport**: HTTP / Server-Sent Events (SSE)
- **Authentication**: When calling the MCP endpoint, pass standard Bearer token authorization:
  ```json
  "headers": {
    "Authorization": "Bearer <YOUR_WORKROOM_JWT_TOKEN>"
  }
  ```
  If prompted by the Antigravity or editor interface, sign in via the browser OAuth prompt or set `WORKROOM_TOKEN` in your environment.
