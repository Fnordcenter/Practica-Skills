---
name: cors-security-configurator
description: Configures strict Cross-Origin Resource Sharing (CORS) rules to secure and enable communication between decoupled frontends and backends.
---

# CORS Security Configurator Skill

Use this skill whenever a frontend application is hosted on a different domain or port than the backend server, ensuring legitimate requests pass through while blocking unauthorized third-party origins.

## When to use
- A user reports a "CORS error has blocked the request" in their browser console.
- A user asks to "allow the frontend to talk to the backend."
- Setting up a new decoupled architecture (e.g., React on port 3000, Python on port 5000).

## Core Principles
- **Agnosticism:** The concepts of Origins, Methods, and Headers are universal HTTP standards. Apply them regardless of whether the backend is Express, Flask, Spring, or Django.
- **Robustness:** Never use a wildcard `Access-Control-Allow-Origin: *` in a production environment involving credentials or mutations.
- **Structure:** Explicitly define configurations for Origins, Methods, Headers, and preflight `OPTIONS` requests.

## Workflow Structure
### 1. Frontmatter
Standard YAML definition identifying the backend framework being configured.

### 2. Title & Overview
H1 `# CORS Security Configuration` followed by identifying the specific domains involved.

### 3. "How to use" (Phases)
- **Phase 1 (Analysis):** Identify the exact URL, port, and protocol (http vs https) of the Frontend. Identify if the requests include authentication cookies/tokens (`credentials: 'include'`).
- **Phase 2 (Execution):** 
  - Whitelist the exact frontend origin(s) in the backend CORS middleware.
  - Explicitly allow required HTTP methods (e.g., `GET, POST, OPTIONS`).
  - Explicitly allow required custom headers (e.g., `Authorization, Content-Type`).
- **Phase 3 (Validation):** Simulate or trigger a cross-origin `fetch()` from the frontend to ensure the Preflight (`OPTIONS`) request returns a 200/204 with the correct `Access-Control-*` headers.

### 4. Contingencies & Edge Cases
- **Missing Inputs:** If the user asks to "fix CORS" without providing the frontend URL, default to securing it for standard local development (e.g., `http://localhost:3000`) but explicitly warn them to change it for production.
- **Failures:** If a CORS error persists after configuration, instruct the user to check their reverse proxy (Nginx/Apache) or cloud provider (AWS API Gateway) which may be stripping headers before they reach the backend application.
- **Scope Limits:** CORS does not replace proper Authentication; it only prevents browsers from reading data across origins. Remind the user they still need token/session validation.

### 5. Specifications
- Must never configure `Access-Control-Allow-Origin: *` while simultaneously setting `Access-Control-Allow-Credentials: true` (as browsers explicitly block this combination).

## Final Review
Verify: Are the allowed origins scoped to the absolute minimum necessity? Are preflight `OPTIONS` requests being handled efficiently?
