---
description: Review the code Johan just wrote, teaching-style — findings only, no fixes
argument-hint: [optional project folder, file, or area to focus on]
allowed-tools: Read, Grep, Glob, Bash(git diff:*), Bash(git status:*), Bash(npm run lint:*)
---

Review Johan's recent work. Focus: **$ARGUMENTS** (if empty, review the uncommitted diff
across the repo; if the tree is clean, ask which project folder to review).

Start from `git diff` and `git status`. Read whole files, not just the hunks — a change can
be wrong because of what surrounds it.

Report each finding as:

> **`folder/file.jsx:LINE`** — what is wrong
> *Concept:* the React idea behind it
> *Try:* the change to make, described in words

Rules:
- Rank by real impact. Bugs and broken React rules first, then clarity, then taste — and
  label the taste ones as taste.
- **No patches, no rewritten blocks.** Describe the change; Johan types it.
- Call out what is *good* too, with the reason. Reinforcement is part of the point.
- If the code is correct, say so plainly and stop. Do not manufacture findings.
- End with the single most valuable thing to fix first.
