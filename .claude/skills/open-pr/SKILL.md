---
name: open-pr
description: MANDATORY skill for ALL pull requests. Must be used EVERY TIME before creating any pull request. No exceptions.
---

# Generating Pull Requests

## Mandatory Process

**`--auto`** (caller runs autonomously): skip step 0 sign-off and any push/PR approval wait — proceed directly. Still fix push-hook errors, still `--draft`.

0. **ALWAYS** ensure the change was verified before opening the PR. For core changes this means the affected unit tests pass (`npx nx run <package>:test`); for UI/behavioral changes, confirm it in a test app (`apps/toolbox` for quick checks, `apps/automated` for e2e). Propose the scenarios to verify.
1. **ALWAYS** run `git push` and check for errors returned by the git hooks (commitlint, lint-staged)
2. **ALWAYS** fix any errors — autofixup into the relevant commits, or create a new commit if autofixup does not apply
3. **ALWAYS** create the PR as **draft** following the template:
   1. Read `.github/PULL_REQUEST_TEMPLATE.md` first and use its structure in the `--body` flag
   2. **CRITICAL**: `--template` and `--body` are **mutually exclusive** in `gh pr create`. Always use `--body` with an inline multiline string, never `--template`:
      ```sh
      gh pr create --draft --title "fix(scroll-view): ..." --body "$(cat <<'EOF'
      ## PR Checklist
      ...content following PULL_REQUEST_TEMPLATE.md structure...
      EOF
      )"
      ```
   3. **ALWAYS** use `--draft` — only the user decides when a PR is ready for review
   4. The PR title **ALWAYS** follows the Conventional Commits header (`<type>(<scope>): <subject>`) — same convention as the [commit](../commit/SKILL.md) skill. The squash-merge uses this title as the changelog entry, so it must be a valid conventional commit
   5. **ALWAYS** reference the tracking issue in the body: `Fixes #<issue>` / `Closes #<issue>`

## Writing the description

The description is for a human reviewer who needs to grasp _what this PR does_ at a glance. Write the kind of summary you'd write by hand.

- Summarize the **main changes only** — the meaningful, functional changes a reviewer needs to know about. A few clear bullet points or short sentences is enough.
- **NEVER dump commit details** — do not paste commit messages, do not write a commit-by-commit breakdown. The git history already holds that; repeating it just adds noise.
- **Skip non-important changes** — small refactors, formatting, renames, lint fixes. They dilute the signal; leave them out.
- If the description reads like a changelog of every diff, it's wrong. Clear, concise, high-level — that's the bar.

## Filling the template

The `<!-- ... -->` HTML comments in `.github/PULL_REQUEST_TEMPLATE.md` are **instructions to the author**, not content. Strip every one of them out — they must never appear in the final PR body.

- **PR Checklist** — keep it, and check (`[x]`) only the boxes that genuinely hold (title follows the guidelines, an issue exists, tests pass, tests for the change are included). Leave the rest unchecked; never check a box that isn't true.
- **What is the current behavior?** — describe the behavior being changed, or link the relevant issue.
- **What is the new behavior?** — describe the changes, then add the `Fixes/Implements/Closes #<issue>` line.
- **Breaking changes** — keep this section **only** if the PR actually contains a breaking change, and fill in the impact and migration path. Otherwise remove it entirely so the PR stays clean.
