---
trigger: always_on
description: Mandatory skill installation and storage path rule.
---

# Skills Storage and Installation Rule

Whenever the user instructs to "add it to my skills", "download this skill", or install/create new skills:

1. **Primary Target Directory**:
   Always save, download, and install the skill in:
   `C:\ProgramData\AI-Skills\skills\<skill-name>\`

2. **Antigravity Customization Sync**:
   To ensure the Antigravity assistant immediately discovers, indexes, and makes the skill available in its active skills catalog across all workspaces, also mirror/sync it to:
   `C:\Users\lenovo\.gemini\config\skills\<skill-name>\`

3. **Format Requirements**:
   Every skill directory must contain a valid `SKILL.md` with standard YAML frontmatter (`name`, `description`) and all accompanying files (e.g. `references/`, `scripts/`).
