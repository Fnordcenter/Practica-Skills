---
name: debugging-ui-inspector
description: Troubleshoots DOM rendering issues, CSS styling conflicts, and frontend reactivity bugs.
---

# Debugging UI Inspector Skill

Troubleshoots visual discrepancies, DOM rendering issues, CSS styling conflicts, and unexpected frontend reactivity or state-management bugs in web applications.

## When to use
- User reports that an interface element is hidden, misaligned, or overflowing its container.
- Frontend state updates do not trigger the corresponding visual changes (e.g., React, Vue, or Vanilla JS reactivity bugs).
- Z-index, flexbox, or grid layout conflicts exist.
- Event listeners are firing multiple times or not firing at all.

## How to use
- **Phase 1 (Analysis):**
  - Request the relevant HTML, CSS, and JS logic associated with the broken component.
  - Ask for details on the browser being used and the expected vs. actual visual outcome.
  - Determine if the issue is purely stylistic (CSS) or logical (JS state/DOM manipulation).
- **Phase 2 (Execution):**
  - Trace CSS specificity conflicts, inherited styles, or invalid CSS properties.
  - Analyze DOM event bubbling/capturing chains, identifying `stopPropagation` or `preventDefault` misuse.
  - Review state mutation logic to ensure immutability paradigms are respected in modern frameworks.
  - Refactor the code to fix layout structures or state hooks.
- **Phase 3 (Validation):**
  - Provide the corrected code snippets.
  - Clearly explain the root cause (e.g., "The parent container lacked `position: relative`, causing the absolute child to escape").

## Contingencies & Edge Cases
- **Missing Inputs:** If the user only describes the visual glitch ("the button is too far left"), request the wrapping HTML and the applied CSS classes.
- **Failures:** If a CSS fix drastically alters surrounding layouts, warn the user and suggest isolated scoping (e.g., CSS Modules, BEM methodology).
- **Scope Limits:** Cannot visually "see" the screen. Relies on accurate textual descriptions of the DOM tree and applied styles.

## Specifications
- When resolving CSS issues, provide the exact properties to add, remove, or change, along with standard semantic HTML.
- For reactivity bugs, focus on the lifecycle of the component (e.g., `useEffect` dependencies, mutating state directly).
