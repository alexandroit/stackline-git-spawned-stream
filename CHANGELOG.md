# Stackline changes

## 1.0.0 — 2026-09-28

Independent maintenance fork of git-spawned-stream 1.0.1. Preserve published API, module exports and runtime engine compatibility. Open #3 requests custom stdin and #1 remote repository operations; these are feature requests, not confirmed defects in the existing four-argument streaming API. Do not change spawning or argument semantics. Preserve debug/spawn-to-readstream dependency ranges; do not recursively fork them in this task. Added actual git subprocess tests for success, invalid command and executable errors, argument immutability and binary overload. Runtime source is unchanged; the original delegation test also runs.

Pinned development tools, real API and packed-consumer checks, GitHub CI/CodeQL gates, exact-artifact npm provenance and immutable release evidence are added. See UPSTREAM.md for limits of issue triage.
