# Slide deck pipeline

1. Drop a `.pptx` into `slides/inbox/`.
2. In Claude Code (from the repo root), run `/slides <filename>`.
3. Claude extracts the slide text to `slides/notes/<filename>.md` and reports:
   concepts covered → where they already exist in this repo → gaps → a suggested
   next `/drill` topic.

Raw `.pptx` files are gitignored — only the extracted `.md` notes get committed.

Requires the `python-pptx` package (`pip install python-pptx`) — already installed
for this machine as of 2026-08-31.
