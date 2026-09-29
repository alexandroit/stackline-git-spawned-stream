var assert = require('assert');
var fs = require('fs');
var os = require('os');
var path = require('path');
var cp = require('child_process');
var root=process.env.STACKLINE_TEST_PACKAGE || path.resolve(__dirname,'..');
var streamGit=require(root);
var dir=fs.mkdtempSync(path.join(os.tmpdir(),'stackline-git-stream-'));
cp.execFileSync('git',['init','--bare',dir],{stdio:'ignore'});
function collect(args,limit,binary){return new Promise(function(resolve,reject){var chunks=[];var stream=streamGit(dir,args,limit,binary);stream.on('data',function(c){chunks.push(c)});stream.on('error',reject);stream.on('end',function(){resolve(Buffer.concat(chunks).toString())});});}
(async function(){try {
 assert.strictEqual((await collect(['rev-parse','--is-bare-repository'])).trim(),'true');
 var args=['rev-parse','--is-bare-repository'];await collect(args);assert.deepStrictEqual(args,['rev-parse','--is-bare-repository']);
 assert.strictEqual((await collect(['rev-parse','--is-bare-repository'],'git')).trim(),'true');
 assert.strictEqual((await collect(['rev-parse','--is-bare-repository'],undefined,'git')).trim(),'true');
 var failed=false;try{await collect(['not-a-real-git-command'])}catch(e){failed=true;assert(e instanceof Error)}assert(failed);
 failed=false;try{await collect(['status'],undefined,'stackline-nonexistent-git-command')}catch(e){failed=true;assert(e instanceof Error)}assert(failed);
 console.log('Real git streaming, argument preservation, binary overload and error propagation passed.');
}finally{fs.rmSync(dir,{recursive:true,force:true});}})().catch(function(e){console.error(e);process.exitCode=1});
