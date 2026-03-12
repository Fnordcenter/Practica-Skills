---
name: sql-database-maker
description: Creates a well-structured, normalized relational database schema and setup guidelines tailored for applications.
---

# SQL Database Maker Skill

Use this skill whenever a user requests an SQL schema creation or relational database modeling. This establishes a robust data layer, prioritizing relational integrity and standardization.

## When to use this skill
- Whenever a user asks to "make an SQL database," "create a database schema," or "set up a relational database."
- When architecting the backend of an application that requires structured, robust, and normalized SQL tables.

## Core Principles
- **Agnosticism:** Ensure the logic defaults to standard SQL (e.g., ANSI SQL) features unless the user specifically demands dialect-specific features (like Postgres' `JSONB` or SQLite's `STRICT` tables).
- **Robustness:** A schema must always account for data integrity: enforce primary keys, strict foreign keys, cascading rules, and `NOT NULL` constraints where applicable.
- **Clarity:** Ensure table and column names use unambiguous, standard conventions (usually `snake_case` in SQL).

## How to use it (Step-by-Step)

### Phase 1: Analysis & Gathering
1. **Analyze Entities:** Identify the core data entities from the user's description (e.g., Users, Invoices, Roles).
2. **Define Relationships:** Map how entities relate to each other (One-to-One, One-to-Many, Many-to-Many) and determine where junction/pivot tables are needed.
3. **Determine Dialect:** Confirm the target database engine (e.g., PostgreSQL, MySQL, SQLite). If none is specified, ask or default to a generic, compatible ANSI SQL standard.

### Phase 2: Scaffolding & Execution
1. **Schema Generation (`schema.sql`):** Write clean SQL Data Definition Language (DDL).
    - **Keys:** Ensure every table has a clear Primary Key.
    - **Foreign Constraints:** Properly define Foreign Key constraints (e.g., `ON DELETE CASCADE` or `ON DELETE SET NULL`).
    - **Data Types:** Choose the most appropriate datatypes (e.g., `VARCHAR(255)`, `TEXT`, `BOOLEAN`, `TIMESTAMP`).
    - **Audit Columns:** Pre-emptively include `created_at` (defaulting to current timestamp) and `updated_at` columns.
2. **Seed Generation (`seed.sql`):** Create sample `INSERT` statements to populate the database for immediate testing, respecting all foreign key constraints defined in the schema.

### Phase 3: Validation & Review
1. **Syntax Verification:** Double-check the SQL syntax for logical errors (e.g., referencing a table before it is created; always create independent tables first).
2. **Delivery:** Create a brief markdown document (`database-setup.md`) explaining the purpose of each table, relationships, and exactly how the user should execute the SQL files in their environment.

## Contingencies & Edge Cases
- **Missing Inputs:** If the user requests a generic "e-commerce database" with no specifics, assume a standard model spanning Users, Products, Orders, and Order_Items.
- **NoSQL Requests:** If the user's requirements or requests fundamentally align better with document stores (NoSQL like MongoDB), politely advise them on the difference before writing SQL schemas.
- **Constraint Conflicts:** If the user demands deletion logic that conflicts with referential integrity (e.g., "Deleting a user shouldn't delete their posts"), ensure the schema implements `ON DELETE SET NULL` or soft-delete flags (a boolean `is_deleted` column) instead of cascade deletion.

## Specifications & Constraints
- Must use `snake_case` for all table names and columns.
- Table names should ideally be pluralized (e.g., `users`, not `user`) to reflect standard ORM conventions.
- Must execute independent tables (those without foreign keys) before dependent tables in the `schema.sql` file.
