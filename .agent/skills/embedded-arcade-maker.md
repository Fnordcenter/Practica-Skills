---
name: embedded-arcade-maker
description: Generates and embeds performant, hidden, "easter egg" JavaScript arcade games directly into existing webpages.
---

# Embedded Arcade Maker Skill

Use this skill whenever a user requests adding a hidden or secondary interactive minigame (like Pong, Snake, or a browser dinosaur clone) into a website structure as an easter egg or a gamified 404 page.

## When to use this skill
- Whenever a user asks to "put a game in my footer," "make an easter egg," or "add a 404 minigame."
- When standard UI interactivity needs to escalate into a full `requestAnimationFrame` render loop without relying on heavy external game engines (like Unity or Godot).
- When resolving user requests to gamify existing web elements.

## Core Principles
- **Agnosticism:** Rely completely on the native HTML5 `<canvas>` API and Vanilla JavaScript. Do not use external libraries (like Phaser or Three.js) unless explicitly requested to minimize page bloat for an easter egg.
- **Robustness:** A hidden game must not interfere with the primary webpage's accessibility, scrolling, or performance until it is explicitly activated (e.g., via a Konami Code or specific button click).
- **Clarity:** Ensure the game loop logic (Update, Draw, Loop) is cleanly separated from the DOM event listeners to maintain readable, modular code.

## How to use it (Step-by-Step)

### Phase 1: Analysis & Gathering
1. **Game Concept:** Determine the type of game requested (e.g., Snake, Space Invaders, Brick Breaker) and evaluate its feasibility via standard `<canvas>` 2D rendering.
2. **Activation Trigger:** Determine how the user will discover or launch the game (e.g., typing a secret phrase on the keyboard, clicking a specific logo 5 times, landing on a 404 page).
3. **Environment:** Identify where the `<canvas>` element should be injected or revealed within the current DOM structure.

### Phase 2: Scaffolding & Execution
1. **DOM Scaffolding:** 
    - Inject an initially hidden `<canvas>` CSS overlay via absolute or fixed positioning.
    - Provide a prominent "Close Game" button to allow users to return to normal site navigation.
2. **Game Architecture (`game.js`):**
    - **State Management:** Define initial variables (score, player coordinates, entity lists, game over state).
    - **Event Listeners:** Attach keyboard or touch controls (`keydown`, `keyup`), ensuring they prevent default scrolling behavior *only* when the game is active.
    - **The Loop:** Create the core Game Engine using `window.requestAnimationFrame`.
        - `update()`: Calculate physics, movement, boundaries, and collisions.
        - `draw()`: Clear the canvas (`ctx.clearRect`) and render all entities using the 2D context (`fillRect`, `arc`, etc.).
3. **Trigger Logic:** Implement the observer or listener for the easter egg (e.g., tracking sequential keystrokes for a secret code array).

### Phase 3: Validation & Review
1. **Performance Check:** Ensure the game runs at a smooth 60fps and doesn't leak memory (e.g., properly cancel `requestAnimationFrame` and remove event listeners when the user closes the game).
2. **Interference Check:** Verify that normal scrolling and form inputs still work perfectly on the parent webpage when the game is *not* active.
3. **Delivery:** Prompt the user to test the activation trigger and play the game within their browser.

## Contingencies & Edge Cases
- **Mobile Devices:** If standard keyboard controls (WASD/Arrows) are defined, you must provide fallback on-screen touch D-Pads or tap-to-jump logic for mobile users, or disable the game on mobile entirely if not feasible.
- **Window Resizing:** If the user resizes their browser while the game is active, ensure the canvas logically re-scales or pauses the game, rather than stretching/skewing the 2D context.

## Specifications & Constraints
- Must aggressively use `const` and `let` inside a closure/module or IIFE (Immediately Invoked Function Expression) to prevent polluting the global window space of the host webpage.
- Must ensure the game respects the user's system Dark Mode preferences or inherits the host webpage's CSS variable accent colors to feel integrated.
