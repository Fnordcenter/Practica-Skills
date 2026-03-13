---
name: database-query-optimizer
description: Analyzes and refactors database queries to improve execution speed and resource efficiency.
---

# Database Query Optimizer Skill

Analyzes and refactors database queries to improve execution speed, reduce resource consumption, and prevent deadlocks. Focuses on index utilization, query planning, and efficient data retrieval.

## When to use
- User reports slow database response times or timeouts.
- A query handles processing large datasets inefficiently.
- The application experiences high CPU/memory usage on the database server.
- Reviewing code for potential N+1 query problems.

## How to use
- **Phase 1 (Analysis):**
  - Obtain the exact slow query and understand its purpose.
  - Request or simulate `EXPLAIN` or execution plan outputs.
  - Identify existing indexes, table sizes, and join complexities.
- **Phase 2 (Execution):**
  - Rewrite the query to eliminate subqueries, optimize joins, or use window functions.
  - Recommend missing indexes (B-tree, Hash, Partial, Covering).
  - Resolve ORM-specific pitfalls (e.g., eager loading vs. lazy loading).
- **Phase 3 (Validation):**
  - Explain the improvements bridging the 'before' and 'after' query structures.
  - Justify the trade-offs of adding new indexes (e.g., write-penalty).

## Contingencies & Edge Cases
- **Missing Inputs:** If index or table structure is not provided, ask the user for the schema metadata before suggesting query alterations.
- **Failures:** If a query cannot be optimized further, suggest application-level caching (Redis/Memcached) or pagination.
- **Scope Limits:** Does not handle complex server-tuning configuration (e.g., `max_connections`, memory allocation) unless directly related to query execution context.

## Specifications
- Provide the rewritten SQL (or ORM code) formatted clearly in code blocks.
- Detail the rationale behind each optimization step.
