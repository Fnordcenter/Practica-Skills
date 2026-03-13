---
name: bot-constructor-scheduler
description: Builds bots focused on scheduling, CRON jobs, and recurring time-based task execution.
---

# Bot Constructor: Scheduler Skill

Builds bots and background workers dedicated to scheduling future events, managing CRON jobs, handling delays, and executing recurring time-based tasks efficiently without blocking main application threads.

## When to use
- User requests a bot that sends daily reminders, weekly reports, or scheduled server maintenance messages.
- User needs a system to delay an action (e.g., "remind me in 3 hours").
- An application requires polling an external API at specific intervals.

## How to use
- **Phase 1 (Analysis):**
  - Determine the precision required (seconds, minutes, days) and the expected volume of scheduled tasks.
  - Choose the appropriate scheduling mechanism: in-memory (`setTimeout`/`setInterval`), CRON-style libraries (e.g., `node-cron`, `APScheduler`), or robust message queues with delayed execution (e.g., Redis + BullMQ, Celery).
  - Identify what action the bot takes when the scheduled time arrives.
- **Phase 2 (Execution):**
  - Implement the scheduling logic according to the chosen mechanism.
  - For recurring tasks, define standard CRON expressions and explain them clearly in comments.
  - Implement persistence if necessary: ensure that if the bot restarts, pending scheduled tasks are not lost.
- **Phase 3 (Validation):**
  - Synthesize a test plan for the user to confirm the scheduler works without waiting for long periods (e.g., trigger the "daily report" every 10 seconds during testing).
  - Verify that recurring tasks do not overlap or execute concurrently if the task duration exceeds the interval.

## Contingencies & Edge Cases
- **Missing Inputs:** If a user says "remind me later", ask for a specific duration or format. If persistence requirements are unspecified, default to warning the user that in-memory schedules are lost on restart.
- **Failures:** Handle scenarios where the system clock changes (Daylight Saving Time) or drifts. Handle failed executions by implementing retry logic for the scheduled task.
- **Scope Limits:** Cannot guarantee millisecond-level precision on non-real-time operating systems or within standard Event Loops.

## Specifications
- Explicitly annotate CRON syntax when used (e.g., `0 9 * * 1-5` -> "Every weekday at 9:00 AM").
- Emphasize thread safety and non-blocking asynchronous execution when tasks fire.
