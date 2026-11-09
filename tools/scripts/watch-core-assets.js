#!/usr/bin/env node
/**
 * Keeps the non-TypeScript assets of packages/core in sync with dist/packages/core while
 * `npm run core:build.watch` is running (tsc -w only handles the .ts files).
 *
 * Watched (relative to packages/core): platforms/, js-libs/, cli-hooks/ and the non-.ts files of css/, css-value/, fetch/.
 * Changed files are copied, deleted files are removed from dist.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const srcRoot = path.join(root, 'packages', 'core');
const distRoot = path.join(root, 'dist', 'packages', 'core');

// directory (relative to packages/core) -> only copy files matching `filter`
const WATCHED = [
	{ dir: 'platforms' },
	{ dir: 'js-libs' },
	{ dir: 'cli-hooks' },
	{ dir: 'css', filter: (file) => !file.endsWith('.ts') },
	{ dir: 'css-value', filter: (file) => !file.endsWith('.ts') },
	{ dir: 'fetch', filter: (file) => !file.endsWith('.ts') },
];
const IGNORED = /(^|[\\/])(\.DS_Store|node_modules|__tests__)([\\/]|$)/;

function log(message) {
	console.log(`[core-assets] ${message}`);
}

function sync(rel, filter) {
	if (IGNORED.test(rel) || (filter && !filter(rel))) {
		return;
	}
	const src = path.join(srcRoot, rel);
	const dest = path.join(distRoot, rel);
	let stat = null;
	try {
		stat = fs.statSync(src);
	} catch {
		// deleted
	}
	try {
		if (!stat) {
			if (fs.existsSync(dest)) {
				fs.rmSync(dest, { recursive: true, force: true });
				log(`removed ${rel}`);
			}
		} else if (stat.isFile()) {
			fs.mkdirSync(path.dirname(dest), { recursive: true });
			fs.copyFileSync(src, dest);
			log(`copied ${rel}`);
		}
	} catch (err) {
		console.error(`[core-assets] failed to sync ${rel}: ${err.message}`);
	}
}

const pending = new Map();
function schedule(rel, filter) {
	clearTimeout(pending.get(rel));
	pending.set(
		rel,
		setTimeout(() => {
			pending.delete(rel);
			sync(rel, filter);
		}, 50),
	);
}

for (const { dir, filter } of WATCHED) {
	const abs = path.join(srcRoot, dir);
	if (!fs.existsSync(abs)) {
		continue;
	}
	try {
		fs.watch(abs, { recursive: true }, (_event, filename) => {
			if (filename) {
				schedule(path.join(dir, filename.toString()), filter);
			}
		});
	} catch (err) {
		// recursive watching needs macOS, Windows or Node >= 20 on Linux
		console.error(`[core-assets] cannot watch ${dir}: ${err.message}`);
	}
}
log(`watching ${WATCHED.map((w) => w.dir).join(', ')}`);

// When started in the background of an npm script, exit once the script (our parent) is gone.
const parent = process.ppid;
setInterval(() => {
	if (process.ppid !== parent) {
		process.exit(0);
	}
}, 2000).unref();
// fs.watch handles keep the event loop alive
