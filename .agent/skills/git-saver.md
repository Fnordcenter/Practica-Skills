---
name: git-saver
description: Safely and systematically stages, commits, and pushes changes to a Git repository following standard conventions.
---

# Git Saver Skill

Use this skill whenever a user requests to track, save, or distribute code changes via version control. It enforces a systematic review of changes before committing to prevent mistakes.

## When to use this skill
- Whenever a user asks to "save changes to git," "commit my work," "push this to the repo," or "version control this."
- After completing a significant feature block, bug fix, or documentation update and the user confirms it's ready to be saved.
- When generating conventional commits or structured commit messages based on recent repository changes.

## Core Principles
- **Robustness:** Never blindly stage all files (`git add .`) without first verifying exactly what has changed to prevent sensitive files (like `.env`) from leaking.
- **Clarity:** Ensure commit messages adhere strictly to the Conventional Commits specification, allowing automated changelog generation.
- **Agnosticism:** Assume a standard Git CLI environment, avoiding reliance on specific GUI wrappers unless requested.

## How to use it (Step-by-Step)

### Phase 1: Analysis & Gathering
1. **Assess State:** Use `git status` to identify modified, untracked, or deleted files.
2. **Review Diffs:** Use `git diff` or `git diff --staged` to review the actual code changes. Ensure you understand the holistic scope of the work to be committed.

### Phase 2: Scaffolding & Execution
1. **Stage Changes:** 
    - Use `git add <file>` to cautiously stage specific intended files.
    - Only use `git add .` if you have verified that no sensitive or temporary files are untracked and lacking a `.gitignore` entry.
2. **Draft Message:** Formulate the message using the Conventional Commits format (`type(scope): subject`).
    - **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
    - **Subject:** A brief summary (under 50 characters), imperative mood, no capitalization at the start, no period at the end.
3. **Commit:** Execute `git commit -m "type(scope): subject" -m "Optional detailed body explaining why."`
4. **Push (If appropriate):** Execute `git push origin <branch_name>` or `git push -u origin <branch_name>` if tracking is missing.

### Phase 3: Validation & Review
1. **Verification:** Execute `git log -1` to confirm the commit was recorded accurately in the local history.
2. **Delivery:** Briefly summarize to the user what was staged, the commit message applied, and if it was successfully pushed.

## Contingencies & Edge Cases
- **Merge Conflicts:** If a `git push` fails due to remote changes, immediately stop the workflow, fetch the latest changes, and inform the user that a pull/rebase is required to resolve conflicts before proceeding.
- **Accidental Staging:** If you notice an `.env` or temporary file was accidentally added during `git status`, use `git restore --staged <file>` to unstage it before committing.
- **Detached HEAD:** If the repository is in a detached HEAD state, stop and warn the user. Ask if they want to create a new branch containing the commit.

## Specifications & Constraints
- Commit summaries must not exceed 50 characters.
- Must not bypass pre-commit hooks unless explicitly instructed by the user using `--no-verify`.
