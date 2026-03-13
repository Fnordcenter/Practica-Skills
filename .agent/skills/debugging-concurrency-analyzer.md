---
name: debugging-concurrency-analyzer
description: Diagnoses and resolves race conditions, deadlocks, and thread-safety issues.
---

# Debugging Concurrency Analyzer Skill

Diagnoses and resolves issues related to asynchronous programming, multithreading, and multiprocessing, including race conditions, deadlocks, and thread-safety violations.

## When to use
- User reports intermittent, non-deterministic bugs that are hard to reproduce.
- Application hangs indefinitely or freezes during concurrent operations (deadlocks).
- Data corruption occurs when multiple users or processes access the same resource simultaneously.
- Promises, futures, or async/await chains are not executing in the expected order.

## How to use
- **Phase 1 (Analysis):**
  - Determine the concurrency model being used (e.g., Event Loop, OS Threads, Goroutines, Actor Model).
  - Request thread dumps, stack traces of hanging processes, or code snippets involving shared state.
  - Identify the shared resources (variables, files, database rows) being accessed concurrently.
- **Phase 2 (Execution):**
  - Trace the execution paths of multiple concurrent workers over time.
  - Identify missing locks, improper use of mutexes/semaphores, or unawaited asynchronous calls.
  - Refactor the code to ensure atomic operations, implement appropriate synchronization primitives, or transition to a stateless/message-passing architecture.
- **Phase 3 (Validation):**
  - Explain the timeline of the race condition or deadlock (e.g., "Thread A acquired Lock 1, Thread B acquired Lock 2...").
  - Provide code that guarantees the correct execution order or safely isolates state.

## Contingencies & Edge Cases
- **Missing Inputs:** If the issue is intermittent and no logs are provided, ask the user to add detailed timestamped logging around the suspected concurrent operations.
- **Failures:** Resolving deadlocks might require architectural changes (like enforcing lock ordering). Warn the user if the fix significantly alters the system design.
- **Scope Limits:** Cannot simulate massive concurrent loads in isolation; relies on local reasoning and logical execution tracing.

## Specifications
- Provide clear, chronological explanations of how the concurrent flaw manifests.
- Ensure that proposed locking mechanisms do not inadvertently introduce new deadlocks or significant performance bottlenecks.
