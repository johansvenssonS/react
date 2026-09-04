---
description: Turn a dropped PowerPoint into a concept briefing, gap analysis, and next-step suggestion
argument-hint: <filename in slides/inbox/, e.g. "week3-hooks.pptx">
allowed-tools: Read, Grep, Glob, Bash(python scripts/extract_pptx.py:*), Bash(python3 scripts/extract_pptx.py:*), Bash(git status:*)
---

Process the slide deck: **$ARGUMENTS** (look for it under `slides/inbox/` if a bare
filename is given).

1. If `slides/notes/<basename>.md` doesn't exist yet, or is older than the `.pptx`, extract it:
   `python3 scripts/extract_pptx.py slides/inbox/<file>.pptx`
   (fall back to `python scripts/extract_pptx.py ...` if `python3` isn't found).
2. Read the resulting notes file in full.
3. Report, in this order:
   - **Concepts on these slides** — the React ideas covered, in the order they're taught,
     named precisely ("the dependency array in `useEffect`", not just "hooks").
   - **Where this already lives in the repo** — check `CLAUDE.md`'s Project folders list
     and grep the codebase; note briefly where each concept already appears, if anywhere.
   - **Gaps** — concepts on the slides that don't appear in any project folder yet.
   - **Recommended next step** — one concept to practice next (usually the earliest
     untouched one), phrased as a `/drill <topic>` suggestion for Johan to run himself.

Do not run `/drill` automatically — this produces a briefing, Johan decides what to
practice and when. Do not write to any `src/` directory.
