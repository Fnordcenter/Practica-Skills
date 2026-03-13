---
name: database-seeder
description: Creates realistic, comprehensive seed data and generation scripts for testing and development.
---

# Database Seeder Skill

Creates realistic, comprehensive seed data and generation scripts to populate databases for testing, development, or initial setup purposes.

## When to use
- User needs to populate a new database with test data.
- User is writing automated tests and requires mock data setup.
- Designing realistic demonstration environments for applications.

## How to use
- **Phase 1 (Analysis):**
  - Identify the target schema, data types, and necessary constraints (foreign keys, unique fields).
  - Determine the volume of required seed data.
  - Check for specific tools in use (e.g., Faker, FactoryBot, pure SQL).
- **Phase 2 (Execution):**
  - Build seed generation scripts leveraging randomization libraries to produce realistic values (names, addresses, dates).
  - Ensure referential integrity by ordering data insertion properly (parents before children).
  - Handle password hashing or other specific transformations required by the application.
- **Phase 3 (Validation):**
  - Verify that the volume and structure avoid violating database constraints.
  - Provide instructions on how to run or integrate the seeder.

## Contingencies & Edge Cases
- **Missing Inputs:** If relationships are vague, assume standard cardinality or ask the user. If no language is specified, default to generic SQL `INSERT` statements or Python fake data scripts.
- **Failures:** Detect circular dependencies in the schema and prioritize resolving insertion order.
- **Scope Limits:** Does not extract or anonymize live production data; relies purely on synthetic generation.

## Specifications
- Export generation commands in the appropriate language (SQL, JS/TS, Python, etc.).
- The generated data should be deterministic if testing requires stability (use specific random seeds).
