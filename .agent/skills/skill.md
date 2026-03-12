---
name: skillmaker
description: Generates standardized, generic, and robust skill templates.
---

# Skillmaker Skill

Use this skill whenever a user requests the creation, definition, or modification of a new or existing skill for the agent's repertoire. This skill ensures that the resulting templates are comprehensive, technology-agnostic, and capable of handling edge cases gracefully.

## When to use this skill
- A user explicitly asks to "create a new skill," "make a skill," or "define a skill."
- You recognize a recurring complex workflow that would benefit from being formalized into a repeatable skill.
- A user asks to update or expand an existing skill to cover new use cases or contingencies.

## Core Principles
- **Agnosticism:** Ensure the skill does not stringently tie the agent to a specific programming language, framework, or operating system unless explicitly requested. Use generic structural terms (e.g., "Data Layer" instead of "SQL," "Iteration Mechanism" instead of "For-loop").
- **Robustness:** A skill must guide the agent not just on the "happy path," but also prepare the agent for failures, missing information, and edge cases.
- **Structure:** All skills must strictly adhere to the standard markdown formatting and frontmatter metadata.

## How to use it (Step-by-Step)

### 1. Frontmatter Definition
Define the definition block at the very top of the file using either YAML (default) or JSON (if preferred/required by the context):

**YAML format:**
```yaml
---
name: [concise, lower-case, hyphenated identifier (e.g., api-integrator, error-analyzer)]
description: [1-2 sentence summary explaining exactly what the skill does and the scenarios that trigger it]
---
```

**JSON format (Alternative):**
```json
{
  "name": "[concise, lower-case, hyphenated identifier]",
  "description": "[1-2 sentence summary explaining exactly what the skill does]"
}
```

### 2. Title & Overview
Write an H1 Title (e.g., `# [Skill Name] Skill`) followed by a brief introduction explaining its overarching goal, value, and context.

### 3. "When to use this skill"
Provide a bulleted list of specific conditions, user quotes, or contextual triggers. 
- Example: "When the user asks to summarize a pull request."
- Example: "When encountering a stack trace referencing a memory leak."

### 4. "How to use it" (The Workflow)
Define the step-by-step execution path:
- **Phase 1 (Analysis & Gathering):** What information does the agent need to collect before acting?
- **Phase 2 (Scaffolding/Execution):** What primary actions should the agent take? Be specific about the expected standard of output (e.g., architectural paradigms, formatting patterns).
- **Phase 3 (Validation & Review):** How does the agent confirm the execution was successful or correct before returning execution to the user?

### 5. Contingencies & Edge Cases
Define explicit fallbacks and rules for when execution deviates from the ideal path:
- **Missing Inputs:** If the user request lacks context (e.g., no language specified), instruct the agent on what clarifying questions to ask or what default assumptions to make.
- **Environment/Tool Failures:** If a tool returns an error, define immediate troubleshooting steps or alternative strategies to try before failing.
- **Complex Requests:** If the user request is overwhelmingly broad, provide rules on how the agent should decompose the task or request a task boundary.
- **Out of Scope:** Define what happens if the user asks for something tangentially related to the skill, but beyond its intended capabilities.

### 6. Specifications & Constraints
- Formalize required output formats (e.g., "Must output in a markdown table," "Must return valid JSON").
- Highlight performance limits, boundaries, or security constraints (e.g., "Do not log sensitive PII," "Do not auto-run destructive terminal commands").


## Final Review
Before saving the `.md` file, mentally verify: Is this skill generic enough to apply to multiple environments? Are the failure states and specifications accounted for?