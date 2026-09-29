# Upstream and issue review

Base: [alessioalex/git-spawned-stream](https://github.com/alessioalex/git-spawned-stream), npm `git-spawned-stream@1.0.1`, commit `97f1d37151a253296f5b1595a0a9044ba4ae9383`. Full Git history and upstream attribution are retained. Last npm publication: 2018-10-12T10:00:28.003Z. Release inactivity does not by itself prove abandonment.

Review: 2026-09-29T00:21:44.959274+00:00. Source coverage: Most recently updated 100 open and 30 closed issue/PR entries; PRs removed. This is triage evidence, not a claim of exhaustive review.

Open #3 requests custom stdin and #1 remote repository operations; these are feature requests, not confirmed defects in the existing four-argument streaming API. Do not change spawning or argument semantics. Preserve debug/spawn-to-readstream dependency ranges; do not recursively fork them in this task. Added actual git subprocess tests for success, invalid command and executable errors, argument immutability and binary overload. Runtime source is unchanged; the original delegation test also runs.

## Reviewed issue entries

- [alessioalex/git-spawned-stream#3](https://github.com/alessioalex/git-spawned-stream/issues/3) (open): How to add an option for custom stdin to the spawned process.
- [alessioalex/git-spawned-stream#1](https://github.com/alessioalex/git-spawned-stream/issues/1) (open): Support for remote repos
