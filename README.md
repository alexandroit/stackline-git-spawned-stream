# @stackline/git-spawned-stream

> Create a readable stream from a spawned git process.

[![npm version](https://img.shields.io/npm/v/@stackline/git-spawned-stream.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/git-spawned-stream)
[![license](https://img.shields.io/npm/l/@stackline/git-spawned-stream.svg?style=flat-square)](https://github.com/alexandroit/stackline-git-spawned-stream)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-git-spawned-stream-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-git-spawned-stream)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/git-spawned-stream/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/git-spawned-stream/)** | **[npm](https://www.npmjs.com/package/@stackline/git-spawned-stream)** | **[Issues](https://github.com/alexandroit/stackline-git-spawned-stream/issues)** | **[Repository](https://github.com/alexandroit/stackline-git-spawned-stream)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/git-spawned-stream` is the Stackline-maintained distribution of `git-spawned-stream@1.0.1`. It is an independent continuation of [git-spawned-stream](https://github.com/alessioalex/git-spawned-stream); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/git-spawned-stream@1.0.1` |
| API target | `git-spawned-stream@1.0.1` |
| Supported Node.js | `See supported framework requirements` |
| License | `MIT` |
| Main entry | `index.js` |
| Runtime dependencies | `debug, spawn-to-readstream` |

## Installation

```bash
npm install @stackline/git-spawned-stream
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install git-spawned-stream@npm:@stackline/git-spawned-stream
```

## Usage and API reference

### git-spawned-stream

Create a readable stream from a spawned git process.

## Usage

```js
gitSpawnedStream(repoPath, spawnArguments, limitInBytes, gitBinary)
```

Arguments:

- `repoPath` - the path to the repo, ex: /home/alex/node/.git (or the path to the git bare repo)
- `spawnArguments` - the arguments that will be passed to the `child_process.spawn` function
- `limitInBytes` - kill the process if it exceeds the imposed limit (sends more data than allowed)
- `gitBinary` - path to the git binary to use (use the one in `PATH` by default)

Example:

```js
var gitSpawnedStream = require('@stackline/git-spawned-stream');
var path = require('path');
var repoPath = process.env.REPO || path.join(__dirname, '.git');
repoPath = path.resolve(repoPath);
var byteLimit = 5 * 1024 * 1024; // 5 Mb

// sort of a git log -n 2
var stream = gitSpawnedStream(repoPath, [
  'rev-list',
  '--max-count=2',
  '--header',
  'HEAD'
], byteLimit);

stream.on('data', function(data) {
  console.log('DATA', data.toString('utf8'));
}).on('error', function(err) {
  console.error('An error occurred:');
  console.error('-----------------\n');
  console.error(err.message);
  process.exit(1);
}).on('end', function(killed) {
  // when the stream is cut, killed === true
  console.log("\n±±±±±±±±±±±±±±±±±\nThat's all folks!");
});
```

## License

MIT

## Credits and original authors

- Original project: [git-spawned-stream](https://github.com/alessioalex/git-spawned-stream).
- Alexandru Vladutu.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
