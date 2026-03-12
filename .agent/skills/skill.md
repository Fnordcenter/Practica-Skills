---
name: skillmaker
description: Generates standardized, generic, and robust skill templates.
---

# Skillmaker Skill

Use this skill whenever a user requests the creation, definition, or modification of a new or existing skill for the agent's repertoire. This skill ensures that the resulting templates are comprehensive, technology-agnostic, and capable of handling edge cases gracefully.

## When to use
- User explicitly requests creating or modifying a skill.
- You identify a recurring complex workflow that needs formalizing.

## Core Principles
- **Agnosticism:** Avoid tying skills to specific tech/OS unless required. Use generic terms (e.g., "Data Layer").
- **Robustness:** Account for failures, missing data, and edge cases.
- **Structure:** Adhere strictly to markdown formatting and metadata.

## Workflow Structure
### 1. Frontmatter
Define using YAML (default) or JSON:
```yaml
---
name: [concise-identifier]
description: [1-2 sentence trigger summary]
---
```
*(JSON Alternative allowed for complex configs or strict data generation).*

### 2. Title & Overview
H1 `# [Name] Skill` followed by the overarching goal.

### 3. "When to use"
Bulleted list of specific conditions/triggers.

### 4. "How to use" (Phases)
- **Phase 1 (Analysis):** What info is needed before acting?
- **Phase 2 (Execution):** What primary actions (steps, formats) apply?
- **Phase 3 (Validation):** How to confirm success before returning to user?

### 5. Contingencies & Edge Cases
Define explicit fallbacks for:
- **Missing Inputs:** Required clarifying questions or defaults.
- **Failures:** Troubleshooting steps for tool/environment errors.
- **Scope Limits:** Handling overly complex or out-of-scope requests.

### 6. Specifications
- Formalize required output formats (e.g., Markdown tables, JSON schemas).
- Highlight strict security, limit, or performance constraints.

## Final Review
Verify: Is it generic? Are failure states handled?