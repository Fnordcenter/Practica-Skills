---
name: webpage-maker
description: Creates a beautifully designed, modern, and responsive webpage using HTML, CSS, and JavaScript.
---

# Webpage Maker Skill

Use this skill whenever a user requests a new frontend interface built optimally with standard web technologies. This establishes a fully functional, aesthetic, and responsive foundation.

## When to use this skill
- Whenever a user asks to "build a webpage," "make a website," or "create a frontend application."
- When creating a user interface that specifically requires standard structural (HTML), presentation (CSS), and behavior (JavaScript) layers.
- When generating landing pages, dashboards, or any UI where raw web technologies are preferred.

## Core Principles
- **Agnosticism:** While this relies on web standard technologies, avoid forcing specific heavy frameworks (like React or Angular) or utility classes (like TailwindCSS) unless explicitly mandated. Focus on Vanilla capabilities.
- **Robustness:** Assume varying screen sizes, missing image assets, and missing data. Build flex/grid layouts that degrade gracefully.
- **Design Excellence:** Prioritize a visually stunning, responsive, and modern design (e.g., using curated color palettes, dark modes, gradients, shadows, and modern typography).

## How to use it (Step-by-Step)

### Phase 1: Analysis & Gathering
1. **Analyze Requirements:** Clarify the user's requirements, target audience, and the intended look and feel.
2. **Contextualize Assets:** Determine if specific brand colors, fonts, or placeholder assets (e.g., via Unsplash) are required.

### Phase 2: Scaffolding & Execution
1. **Structure (`index.html`):** Set up a standard HTML5 boilerplate.
    - Organize the content semantically (`<header>`, `<main>`, `<section>`, `<footer>`).
    - Link to external CSS and defer JavaScript.
2. **Presentation (`styles.css`):** Implement the core design system natively.
    - Set up CSS variables for theme consistency (`:root`).
    - Implement responsive layouts using Flexbox and Grid.
    - Include smooth hover effects, micro-animations, and transitions.
3. **Behavior (`script.js`):** Implement required interaction.
    - Select DOM elements robustly via IDs or specific classes.
    - Implement interactive features such as mobile menus, form handling, or theme toggling.

### Phase 3: Validation & Review
1. **Responsive Check:** Verify that the layout CSS covers mobile, tablet, and desktop breakpoints securely.
2. **Accessibility Check:** Ensure basic contrast ratios, semantic hierarchy, and ARIA labels on interactable elements.
3. **Delivery:** Provide clear instructions to the user on how to run or view the created webpage (e.g., opening the HTML file in a browser).

## Contingencies & Edge Cases
- **Missing Specifications:** If the user just says "Make a page," assume a modern dark-theme landing page layout with dummy text to demonstrate capability.
- **Complex Interactivity Requests:** If the user requests highly complex state management or routing, pause and suggest upgrading the technology stack to a framework (like Next.js/React) instead of continuing with raw HTML/JS.

## Specifications & Constraints
- Must use separate files for HTML, CSS, and JS unless the user specifically demands an inline single-file solution.
- Must not use `alert()` for standard UI interactions; use custom DOM modals or notifications instead.
