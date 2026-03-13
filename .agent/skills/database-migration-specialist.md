---
name: database-migration-specialist
description: Generates robust, reversible, and zero-downtime database migration scripts.
---

# Database Migration Specialist Skill

Generates robust, reversible, and zero-downtime database migration scripts for evolving database schemas safely across environments.

## When to use
- User needs to add, modify, or drop columns, tables, or constraints in an existing live database.
- A new application feature requires schema changes.
- User is implementing an ORM migration system (e.g., Alembic, Flyway, Prisma, TypeORM).

## How to use
- **Phase 1 (Analysis):**
  - Identify the target database engine and the migration tool/ORM.
  - Understand the current schema state and the desired future state.
  - Assess potential data loss or locking risks during the transition.
- **Phase 2 (Execution):**
  - Write the `UP` migration script incorporating the desired changes.
  - Write the exact `DOWN` migration script to revert the changes cleanly.
  - Implement concurrent indexing or non-locking operations if supporting zero-downtime requirements.
- **Phase 3 (Validation):**
  - Synthesize a dry-run explanation of how the data transitions.
  - Ensure the `DOWN` script exactly restores the state prior to the `UP` script.

## Contingencies & Edge Cases
- **Missing Inputs:** If the migration tool is not specified, generate standard SQL scripts. If data transformation is complex, ask for data-mapping rules.
- **Failures:** If a migration requires dropping columns with existing data, explicitly warn the user and suggest multi-phase deployments (e.g., expand/contract pattern).
- **Scope Limits:** Focuses strictly on schema evolution; does not perform the actual migration execution on production infrastructure.

## Specifications
- Code blocks must contain clearly segregated `UP` and `DOWN` logic.
- Highlight any destructive actions (e.g., `DROP TABLE`) with explicit warnings.
