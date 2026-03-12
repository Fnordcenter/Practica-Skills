---
name: state-sync-manager
description: Generates logic for optimistic UI updates and real-time state synchronization between a client interface and server database.
---

# State Sync Manager Skill

Use this skill whenever there is a complex temporal relationship between UI interactions on the frontend and database writes on the backend, ensuring a snappy user experience without sacrificing data integrity.

## When to use
- A user asks to implement "real-time updates," "optimistic rendering," or a "loading skeleton."
- A user is concerned about the delay between clicking a button (frontend) and the database confirming the save (backend).
- Setting up caching, polling, or WebSocket data pipelines.

## Core Principles
- **Agnosticism:** The pattern of "Mutate UI -> Send Request -> Revert on Failure" applies across vanilla JS, React, Vue, and all backends.
- **Robustness:** The UI must never lie to the user permanently. If an optimistic backend request fails, the frontend must catch the error, revert the UI state, and display an error toast.
- **Structure:** Separate local state management from server synchronization logic.

## Workflow Structure
### 1. Frontmatter
Standard YAML definition.

### 2. Title & Overview
H1 `# State Synchronization Logic` explaining the chosen pattern (Optimistic vs Pessimistic vs Real-time).

### 3. "How to use" (Phases)
- **Phase 1 (Analysis):** Determine the risk of the action. (e.g., "Liking" a post is low-risk so use Optimistic UI; "Processing a Payment" is high-risk so use Pessimistic UI/Loading Spinners).
- **Phase 2 (Execution):** 
  - **Optimistic UI:** Immediately update the DOM/Client-State when the user clicks. Send the async network `fetch()` request in the background. Ensure a `.catch()` block exists to undo the DOM update if the server replies with a 400/500 error.
  - **Pessimistic UI:** Disable the button, show a loading spinner, wait for the `await fetch()` to resolve perfectly, then update the DOM to show success.
- **Phase 3 (Validation):** Test a successful network request *and* artificially trigger a failed network request (e.g., blocking it in the dev tools) to ensure the UI handles the rollback gracefully.

### 4. Contingencies & Edge Cases
- **Missing Inputs:** If a user asks for "live data" without specifying volume, default to standard REST polling every X seconds. Only escalate to WebSockets/Server-Sent Events if explicitly required for high-frequency data (like a chat app).
- **Failures:** If the network disconnects entirely, the frontend must detect `navigator.onLine === false` and queue mutations locally until the connection is restored.
- **Scope Limits:** Do not handle backend database transacting/locking here; this skill is focused entirely on the UX/UI synchronization bridge.

### 5. Specifications
- Must include explicit visual feedback states (Loading, Success, Error).
- Revert logic must be atomic (restore the exact state the object was in before the click).

## Final Review
Verify: Does the interface feel immediately responsive? Is there a foolproof mechanism to handle network failure without leaving the UI stranded in an invalid state?
