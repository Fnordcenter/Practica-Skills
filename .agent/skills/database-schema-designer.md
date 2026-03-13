---
name: database-schema-designer
description: Designs optimized, normalized, and scalable database schemas.
---

# Database Schema Designer Skill

Designs optimized, normalized, and scalable database schemas for relational and NoSQL databases. Ensures that the data model supports the application's read/write patterns, performance requirements, and scalability goals.

## When to use
- User explicitly requests designing a new database schema.
- User needs to refactor or normalize an existing database schema.
- You identify that the current data model is creating bottlenecks or redundancy.
- A new feature requires significant changes to data storage.

## How to use
- **Phase 1 (Analysis):** 
  - Gather business requirements, entities, and relationships.
  - Identify read vs. write heavy operations, data volume, and peak load expectations.
  - Determine the appropriate database paradigm (Relational, Document, Key-Value, Graph).
- **Phase 2 (Execution):** 
  - Draft Entity-Relationship (ER) diagrams or document models.
  - Apply normalization up to 3NF (for relational) or denormalization strategies (for NoSQL/performance).
  - Define primary keys, foreign keys, indexes, and constraints.
- **Phase 3 (Validation):** 
  - Verify that the schema supports all required application queries efficiently.
  - Confirm that naming conventions are consistent and descriptive.
  - Present the schema structure to the user for approval.

## Contingencies & Edge Cases
- **Missing Inputs:** If access patterns are unknown, ask the user clarifying questions about expected usage. Default to a normalized relational structure if no preference is given.
- **Failures:** If strict normalization hurts performance requirements, suggest and justify denormalization or caching strategies.
- **Scope Limits:** For extremely large-scale distributed databases (e.g., global sharding), explicitly state the boundaries of the design and recommend consulting specific distributed systems patterns.

## Specifications
- Outputs should include schema definitions (e.g., SQL `CREATE TABLE` scripts, Prisma models, or MongoDB schema validators).
- Use clear markdown tables or Mermaid ER diagrams to visualize the relationships.
