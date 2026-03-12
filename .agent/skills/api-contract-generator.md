---
name: api-contract-generator
description: Generates strict JSON schemas or OpenAPI (Swagger) specifications to standardize the data handshake between frontend clients and backend servers.
---

# API Contract Generator Skill

Use this skill whenever building a detached frontend and backend to ensure both sides agree on exactly what data shapes are being sent and received, preventing unexpected `undefined` errors or missing data crashes.

## When to use
- A user asks to "define the API," "create a swagger file," or "standardize the JSON responses."
- You are bridging a frontend making `fetch()` calls to a backend and need to guarantee the data structures align.
- Adding a new integration that requires a strict request/response pattern.

## Core Principles
- **Agnosticism:** The contract must be language-agnostic (pure JSON/YAML). Do not write the contract in TypeScript types or Python Pydantic models; generate those *from* the agnostic contract if needed.
- **Robustness:** A contract must explicitly define `required` fields vs `optional` fields, and include data types (string, int, boolean) for every property.
- **Structure:** Adhere strictly to OpenAPI 3.0+ standards or standard JSON Schema specifications.

## Workflow Structure
### 1. Frontmatter
Ensure the file is saved as `.json` or `.yaml` if generating a raw spec, or inline markdown if proposing a design.

### 2. Title & Overview
Start with determining the overarching Domain of the contract (e.g., "User Management API", "Checkout Flow").

### 3. "How to use" (Phases)
- **Phase 1 (Analysis):** Identify the REST verbs (`GET`, `POST`, `PUT`, `DELETE`) or GraphQL mutations required. Identify the exact objects the frontend needs to render.
- **Phase 2 (Execution):** 
  - Define the `Endpoint` path (e.g., `/api/v1/users`).
  - Draft the `Request Body` schema (what the backend expects from the frontend).
  - Draft the `Response Body` schema (what the frontend expects to receive back, including standard 200, 400, and 500 status codes).
- **Phase 3 (Validation):** Confirm that the frontend UI components actually have fields to consume every `required` piece of data returning from the backend.

### 4. Contingencies & Edge Cases
- **Missing Inputs:** If the user doesn't specify data types (e.g., "just send the user data"), ask clarifying questions about whether timestamps should be ISO-8601 strings or Unix integers.
- **Failures:** If an endpoint errors, the contract must dictate a standardized error object shape (e.g., `{ "error": "code", "message": "human readable" }`) so the frontend can reliably parse it.
- **Scope Limits:** Do not handle database-level configurations (like SQL foreign keys) in the API contract. The contract is purely the data *transportation* layer.

### 5. Specifications
- Must include HTTP status codes for success (200/201) and failure (400/401/403/404/500).
- Must utilize JSON valid schemas.

## Final Review
Verify: Does the frontend know exactly what it's receiving? Does the backend know exactly what it must validate? Are error states standardized?
