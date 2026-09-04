---
description: Explain a concept or a piece of this codebase, grounded in the real files
argument-hint: <concept, file, or file:line — e.g. "useEffect" or "demo/src/App.jsx:14">
---

Explain: **$ARGUMENTS**

Read the relevant files in this repo first (check which project folder is relevant — see
`CLAUDE.md`'s Project folders list). Then:

1. **Where it shows up here** — cite `folder/file:line` from this project. If the concept
   does not appear in this codebase yet, say so and name the closest thing that does.
2. **The mental model** — the one idea that makes the rest follow. Not a feature list.
3. **A minimal illustration** — under 5 lines, about the concept in isolation. Not a
   drop-in solution for whatever Johan is currently building.
4. **The trap** — what breaks, when, and what the error looks like.
5. **One thing to try** — a small experiment in this repo that makes the behavior visible.

Do not write to any `src/` directory. Do not hand over finished code.
