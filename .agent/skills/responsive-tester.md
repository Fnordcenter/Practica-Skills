---
name: responsive-tester
description: Systematically evaluates a webpage's layout and styling across multiple viewport breakpoints (mobile, tablet, desktop) to ensure graceful responsiveness.
---

# Responsive Tester Skill

Use this skill whenever a webpage's layout needs to be validated against varying screen sizes to guarantee a seamless user experience on all devices.

## When to use this skill
- Whenever a user asks to "check if my page is responsive," "test the mobile layout," or "fix breakpoints."
- Immediately after styling a new complex component (like a navigation bar, grid framework, or hero section).
- When resolving user bug reports related to overlapping content or horizontal scrolling.

## Core Principles
- **Agnosticism:** Ensure testing applies regardless of the underlying styling framework (Vanilla CSS, Tailwind, Bootstrap, etc.). Focus on the resulting DOM and CSSOM pixel rendering.
- **Robustness:** A truly responsive design is fluid, not just "snapping" between 3 rigid fixed sizes. Look for percentage-based widths, flexible grids, and min/max constraints.
- **Clarity:** Breakpoint evaluations should use standard industry metrics (e.g., Mobile < 768px, Tablet 768px-1024px, Desktop > 1024px) unless otherwise specified.

## How to use it (Step-by-Step)

### Phase 1: Analysis & Gathering
1. **Identify Breakpoints:** Inspect the target CSS files to identifying existing `@media` queries used by the developer.
2. **Review Structure:** Evaluate the HTML structure to ensure the `viewport` meta tag is present (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`).

### Phase 2: Scaffolding & Execution
1. **Mobile-First Evaluation (< 768px):** 
    - Check if elements stack vertically rather than causing horizontal scroll overflow.
    - Ensure touch targets (buttons, links) have adequate spacing (minimum target size of 44x44 CSS pixels).
    - Verify font sizes remain legible without aggressive zooming.
2. **Tablet Evaluation (768px - 1024px):**
    - Check transitions from stacked to alongside layouts (e.g., 2-column grids acting as structural bridges).
    - Verify interactive components like "hamburger" menus transition gracefully.
3. **Desktop Evaluation (> 1024px):**
    - Ensure the layout is not stretched unnaturally wide (look for `max-width` containers locking the core content in the center).
    - Check horizontal spacing, multi-column reading flow, and hover states (which do not exist on touch devices).

### Phase 3: Validation & Review
1. **Generate Feedback:** Output a structured report (`responsive-report.md`) detailing:
    - Elements that overlap or break out of bounds.
    - Missing or redundant media queries.
    - Specific CSS recommendations to resolve the issues (e.g., "Change `width: 800px` to `max-width: 100%` on `.hero-image`").
2. **Delivery:** Provide the report to the user along with a code diff if explicit solutions are requested.

## Contingencies & Edge Cases
- **No Responsive CSS Present:** If the site lacks responsive design entirely, prioritize providing structural CSS rules (like adding Flexbox rows that wrap to columns) instead of micro-adjustments.
- **Horizontal Scrolling Required:** If a specific component *should* scroll horizontally (e.g., a data table or image carousel), ensure the overflow is intentionally managed (e.g., `overflow-x: auto`) rather than breaking the entire page body.

## Specifications & Constraints
- Recommendations must prioritize standard CSS features (Flexbox, Grid, Clamp) over complex JavaScript window sizing calculations.
- Must verify that `box-sizing: border-box` is globally applied to prevent padding/border issues from breaking 100% width calculations.
