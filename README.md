# @stackline/git-spawned-stream

Independent maintenance fork of `git-spawned-stream@1.0.1`. Original API, module format, runtime dependency ranges, and supported Node.js engines are preserved.

```sh
npm install @stackline/git-spawned-stream
# Preserve existing imports with an npm alias:
npm install git-spawned-stream@npm:@stackline/git-spawned-stream@1.0.0
```

See [UPSTREAM.md](UPSTREAM.md) for the exact source and issue review, and [CHANGELOG.md](CHANGELOG.md) for focused maintenance changes. Development and release tooling runs on Node.js 24; that does not change the library runtime requirement.

Maintained by [Stackline](https://alexandro.net/). [Issues](https://github.com/alexandroit/stackline-git-spawned-stream/issues) · [npm](https://www.npmjs.com/package/@stackline/git-spawned-stream).

## Upstream documentation

# git-spawned-stream

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
var gitSpawnedStream = require('git-spawned-stream');
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
