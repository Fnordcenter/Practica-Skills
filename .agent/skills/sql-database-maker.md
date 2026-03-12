---
name: sql-database-maker
description: Creates a well-structured SQL database schema and setup guidelines tailored for web applications.
---

# SQL Database Maker Skill

## When to use this skill
- Whenever a user asks to "make an SQL database for a webpage," "create a database schema," or "set up a relational database."
- When creating a backend or full-stack application that requires a robust and normalized data layer using SQL (e.g., PostgreSQL, MySQL, SQLite).

## How to use it
1. **Analyze Requirements & Entities:**
    - Identify the core entities required for the web application based on the user's description (e.g., Users, Posts, Products, Orders).
    - Determine the relationships between these entities (One-to-One, One-to-Many, Many-to-Many).
    - Decide on the most appropriate SQL dialect (e.g., PostgreSQL for general robust web apps, SQLite for local/desktop apps like Electron) if not explicitly stated by the user.

2. **Design the Schema (`schema.sql`):**
    - Write clean, standard SQL Data Definition Language (DDL) statements to create the tables.
    - **Primary Keys:** Ensure every table has a clear primary key (e.g., `id INT AUTO_INCREMENT PRIMARY KEY` or `id UUID PRIMARY KEY DEFAULT gen_random_uuid()`).
    - **Foreign Keys:** Properly define foreign key constraints to enforce referential integrity between tables. Incorporate `ON DELETE CASCADE` or `ON DELETE SET NULL` where appropriate.
    - **Data Types & Constraints:** Choose appropriate data types (e.g., `VARCHAR(255)`, `TEXT`, `BOOLEAN`, `TIMESTAMP`) and add necessary constraints like `NOT NULL`, `UNIQUE`, and `DEFAULT`.
    - **Timestamps:** Frequently include audit columns like `created_at` (defaulting to `CURRENT_TIMESTAMP`) and `updated_at`.

3. **Generate Seed Data (`seed.sql`):**
    - Create a supplementary file containing `INSERT` statements with sample or initial data to help the user test the database immediately.
    - Ensure the seed data covers all tables and respects the foreign key constraints established in the schema.

4. **Provide Documentation/Implementation Guide:**
    - Create a brief markdown document (`database-setup.md` or similar) explaining:
        - The purpose of each table and how they relate.
        - Instructions on how to execute the `.sql` files against their chosen database engine (e.g., using a CLI tool like `psql` or `mysql`, or a GUI tool like DBeaver/TablePlus).
        - Any specific configuration requirements.

5. **Review and Polish:**
    - Double-check the SQL syntax for errors.
    - Verify that the schema supports the expected queries of a typical web application (e.g., fast lookups, aggregations).
    - Ensure naming conventions are consistent (e.g., `snake_case` for table and column names is standard in SQL).
