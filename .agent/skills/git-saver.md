---
name: git-saver
description: Safely and systematically stages, commits, and pushes changes to a Git repository following standard conventions.
---

# Git Saver Skill

## When to use this skill
- Whenever a user asks to "save changes to git," "commit my work," "push this to the repo," or "version control this."
- After completing a significant feature block, bug fix, or documentation update and the user confirms it's ready to be saved.
- When generating conventional commits or structured commit messages based on recent repository changes.

## How to use it
1. **Assess the Current Git State:**
    - Use `git status` to identify modified, untracked, or deleted files.
    - Use `git diff` or `git diff --staged` to review the actual content changes. This ensures the commit message will accurately reflect the work done.

2. **Stage the Changes:**
    - Use `git add <file>` to stage specific files if the user only wants to commit certain changes.
    - Use `git add .` or `git add -A` only if the user explicitly wants to stage *all* modifications in the working directory. Be cautious of staging sensitive files (like `.env` or temporary logs) not included in `.gitignore`.

3. **Generate a Conventional Commit Message:**
    - Analyze the staged changes to determine the nature of the work.
    - Format the commit message according to Conventional Commits standards (e.g., `type(scope): subject`).
    - **Types:**
        - `feat:` A new feature.
        - `fix:` A bug fix.
        - `docs:` Documentation only changes.
        - `style:` Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
        - `refactor:` A code change that neither fixes a bug nor adds a feature.
        - `perf:` A code change that improves performance.
        - `test:` Adding missing tests or correcting existing tests.
        - `chore:` Changes to the build process or auxiliary tools and libraries such as documentation generation.
    - **Subject:** A brief summary (under 50 characters), imperative mood, no capitalization at the start, no period at the end.
    - Optional: Add a detailed body if the changes are complex, explaining the *why* and *how*.

4. **Commit the Changes:**
    - Execute `git commit -m "type(scope): subject" -m "Optional body explaining the details."`
    - Verify the commit was successful using `git log -1`.

5. **Push the Changes (If Requested/Appropriate):**
    - Check the current branch and remote status (`git remote -v`, `git branch -a`).
    - Execute `git push origin <branch_name>`.
    - If the branch is new, use `git push -u origin <branch_name>`.

6. **Provide Feedback:**
    - Briefly summarize to the user what was staged, the commit message used, and whether it was successfully pushed to the remote repository.
