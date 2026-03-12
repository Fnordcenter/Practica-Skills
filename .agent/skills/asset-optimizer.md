---
name: asset-optimizer
description: Analyzes and compresses webpage assets (images, SVGs, CSS, JS) to drastically reduce initial load times and improve Lighthouse performance scores.
---

# Asset Optimizer Skill

Use this skill whenever a webpage is functionally complete but suffers from slow loading speeds, oversized media files, or bloated text assets.

## When to use this skill
- Whenever a user asks to "make my site load faster," "optimize images," or "minify CSS and JS."
- Before deploying a production-ready application to ensure minimal bandwidth usage.
- When generating a high volume of media assets that heavily impact network performance.

## Core Principles
- **Agnosticism:** Ensure recommendations apply practically to any static site generator, bundler (Webpack/Vite), or native HTML setup, focusing on the raw output of the files.
- **Robustness:** A purely optimized site shouldn't break functionality. Do not aggressively minify JavaScript if it strips required global variables, and don't reduce image fidelity to the point of pixelation.
- **Clarity:** Clearly state the difference in byte size (Before vs. After) to scientifically prove the value of the optimization.

## How to use it (Step-by-Step)

### Phase 1: Analysis & Gathering
1. **Analyze File Payload:** Review the working directory to locate all media (`.jpg`, `.png`, `.gif`, `.svg`) and unminified text assets (`.css`, `.js`).
2. **Determine Target Performance:** Understand if the user requires maximum visual fidelity (e.g., a photography portfolio) or maximum speed (e.g., a high-traffic news site).

### Phase 2: Scaffolding & Execution
1. **Image Compression (Raster):** 
    - Convert legacy formats (PNG/JPEG) to modern formats (WebP or AVIF) for equivalent quality at half the filesize.
    - Export variations for responsive `srcset` (e.g., `image-800w.webp`, `image-400w.webp`) if the user requests full responsive optimization.
2. **SVG Optimization (Vector):**
    - Strip unnecessary XML metadata, comments, and empty `<g>` (group) tags from SVG files.
    - Check if simple paths can be simplified or if hidden layers can be deleted.
3. **Text Minification (CSS/JS):**
    - Strip all whitespace, comments, and line breaks from `.css` and `.js` files.
    - Provide `.min.css` or `.min.js` counterparts while explicitly advising the user to retain the unminified versions for future development.

### Phase 3: Validation & Review
1. **Reporting:** Output an automated report (`optimization-report.md`) detailing:
    - Original file sizes vs. Optimized file sizes securely.
    - Total percentage of byte savings achieved (e.g., "Total payload reduced by 64%").
    - Examples of code updates required to link the new assets (e.g., "Change `<img src='image.png'>` to `<picture><source srcset='image.webp'></picture>`).
2. **Delivery:** Provide the report and the newly generated optimized files to the user safely in their directory.

## Contingencies & Edge Cases
- **Missing CLI Tools/Executables:** If the system lacks image manipulation libraries (like ImageMagick or Node sharp), pivot and provide a detailed markdown guide outlining *how* the user can use an online optimizer (like TinyPNG) themselves, before proceeding to optimize the text-based files (CSS/JS) manually instead.
- **Already Minified Files:** If a target file is already minified (e.g., a React production bundle), explicitly skip it to prevent double-processing bugs.

## Specifications & Constraints
- Recommendations must prioritize zero-dependency Native optimizations before suggesting heavy build-tool configurations.
- Ensure all WebP or AVIF image implementations include standard `<img src="fallback.jpg">` fallbacks for older browsers without support.
