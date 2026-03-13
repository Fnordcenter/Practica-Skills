---
name: debugging-memory-profiler
description: Identifies, traces, and resolves memory leaks and excessive memory consumption issues.
---

# Debugging Memory Profiler Skill

Identifies, traces, and resolves memory leaks, excessive memory consumption, and inefficient object lifecycles across various application environments.

## When to use
- User reports that the application gradually consumes more memory over time until it crashes (Out of Memory - OOM).
- The application experiences severe garbage collection pauses resulting in UI stuttering or delayed server responses.
- User needs to analyze a memory dump, heap snapshot, or allocation profile.

## How to use
- **Phase 1 (Analysis):**
  - Identify the environment (e.g., Node.js, Python, JVM, Browser).
  - Request necessary diagnostic data: heap snapshots, allocation timelines, or garbage collection logs.
  - Understand the typical workload or user actions that trigger the memory spike.
- **Phase 2 (Execution):**
  - Analyze the provided memory summaries to identify retained sizes, un-garbage-collected roots (like global variables, undeclared event listeners, or closures).
  - Pinpoint the exact objects or classes consuming the most memory.
  - Suggest code modifications to release references (e.g., weak references, clearing arrays, removing event listeners on component unmount).
- **Phase 3 (Validation):**
  - Detail the specific lines of code contributing to the leak and explain why they hold references.
  - Propose a strategy to verify the fix (e.g., "Take a heap snapshot before and after running this operation 100 times to ensure flat memory growth").

## Contingencies & Edge Cases
- **Missing Inputs:** If no heap snapshot is available, instruct the user on how to generate one using their specific runtime tools (e.g., `node --inspect`, Chrome DevTools, `valgrind`, `jmap`).
- **Failures:** If a memory leak cannot be identified purely through snapshots, advise on implementing manual memory lifecycle logging or investigating native module leaks.
- **Scope Limits:** This skill does not automatically attach debuggers to remote production instances; it relies on the user providing textual logs, snapshot telemetry, or the source code causing the issue.

## Specifications
- Outputs should focus heavily on code changes that manage object lifecycles correctly.
- When generating code, ensure explanations clearly outline how garbage collection handles the new approach vs. the old one.
