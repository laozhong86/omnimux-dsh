#!/usr/bin/env node
/**
 * scripts/verify-plugin-inject-contract.mjs
 *
 * Guard against the R1 crash class where a plugin reads a Cordis host service
 * at apply() top-level without declaring that service in its `inject` list.
 *
 * Cordis's `ctx` is a Proxy: reading a service that is NOT in `inject` throws
 *   "cannot get property \"<name>\" without inject"
 * at property-read time. Optional chaining (`?.`) cannot intercept a Proxy get
 * that throws — `ctx.skills?.` where `skills` is undeclared still bites. A single
 * unguarded read of an undeclared service aborts the whole Host plugin tree at
 * load time (this is what happened in the 2026-08-29 R1 incident, see #146/#159).
 *
 * This verifier scans a plugin's Host-side source tree (everything under `src/`
 * EXCEPT `src/client/`, whose `ctx` is the client runtime, not Cordis) and flags
 * any read of a curated Cordis host service (`WATCHED_SERVICES`) that is neither:
 *   (a) declared in that plugin's `export const inject = [...]`, nor
 *   (b) declared via a `ctx.inject([...], cb)` callback, nor
 *   (c) wrapped in a `try { ... } catch` block (deliberate fallback).
 *
 * Known Cordis lifecycle methods / non-service keys are whitelisted so the
 * checker stays low-false-positive. Runs as part of `pnpm verify:gates`.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve, join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(here, '..')
const pluginsDir = resolve(repoRoot, 'plugins')

/** Cordis host services whose undeclared read crashes the Host at load time.
 *  Narrow to the DSH host services consumed via `inject` (the exact crash class
 *  from the 2026-08-29 R1 incident). Locally-provided services (`ctx.provide`)
 *  and client-runtime keys (Canvas `measureText`, client `llm`/`attachments`)
 *  are intentionally excluded to keep the checker low-false-positive. */
const WATCHED_SERVICES = new Set([
  'skills', 'tools', 'agents', 'settings', 'webServer', 'systemPrompt',
])

/** `ctx.<name>` where <name> is a Cordis method / non-service, never flagged. */
const NON_SERVICE_KEYS = new Set([
  'inject', 'registry', 'tools', 'on', 'off', 'once', 'emit', 'provide', 'get',
  'set', 'config', 'logger', 'log', 'state', 'reflect', 'fiber', 'plugin',
  'hot', 'runtime', 'schema', 'middleware', 'dispose', 'call', 'serialize',
  'cancel', 'deepEqual', 'effect', 'locale', 'slots', 'scope', 'model', 'fs',
])

/** Host entry files (the `apply` entry that declares `export const inject`). */
function hostEntryFiles(pluginRoot) {
  const candidates = [
    join(pluginRoot, 'src', 'host.ts'),
    join(pluginRoot, 'src', 'host.js'),
    join(pluginRoot, 'src', 'index.ts'),
    join(pluginRoot, 'src', 'index.js'),
    join(pluginRoot, 'src', 'host', 'index.js'),
    join(pluginRoot, 'src', 'host', 'index.ts'),
    join(pluginRoot, 'src', 'host', 'apply.js'),
  ]
  return candidates.filter((f) => existsSync(f))
}

/** Host-side source files: everything under `src/` except `client/` (browser ctx). */
function findHostSourceFiles(dir) {
  const files = []
  if (!existsSync(dir)) return files
  const skipDirs = new Set(['node_modules', 'dist', 'lib', '.git', 'tests', '__tests__', 'client'])
  function walk(current) {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name)
      if (entry.isDirectory()) {
        if (skipDirs.has(entry.name)) continue
        walk(full)
      } else if (entry.isFile() && ['.js', '.jsx', '.ts', '.tsx', '.mjs'].includes(extname(entry.name))) {
        if (entry.name.endsWith('.test.js') || entry.name.endsWith('.test.ts') || entry.name.endsWith('.test.mjs')) continue
        files.push(full)
      }
    }
  }
  walk(dir)
  return files
}

/** Parse `export const inject = [...]` (or `const inject = [...]`) array of string keys. */
function parseInjectArray(content) {
  const match = content.match(/export\s+const\s+inject\s*=\s*(\[[\s\S]*?\])\s*;?/)
  if (!match) return []
  const arr = match[1]
  const keys = []
  const re = /['"]([^'"]+)['"]/g
  let m
  while ((m = re.exec(arr)) !== null) keys.push(m[1])
  return keys
}

/** Strip block (`/* ... *\/`) and line (`// ...`) comments so matched `ctx.<key>`
 *  reads come only from real code, not explanatory prose. */
function stripComments(content) {
  return content
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:"'\\])\/\/[^\n]*/g, '$1')
}

/** Is the given 0-based line index inside a `try { ... } catch` block? */
function isInsideTry(bodyLines, index) {
  for (let i = 0; i <= index; i++) {
    if (/\btry\b/.test(bodyLines[i]) && /\{/.test(bodyLines[i])) {
      let d = 0
      for (let j = i; j < bodyLines.length; j++) {
        const l = bodyLines[j]
        d += (l.match(/\{/g) || []).length - (l.match(/\}/g) || []).length
        if (/\bcatch\b|\bfinally\b/.test(l)) return true
        if (d <= 0 && j > i) break
      }
    }
  }
  return false
}

const errors = []
let scannedPlugins = 0
let scannedFiles = 0

if (existsSync(pluginsDir)) {
  const pluginFolders = readdirSync(pluginsDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)

  for (const plugin of pluginFolders) {
    const pluginRoot = join(pluginsDir, plugin)
    const entries = hostEntryFiles(pluginRoot)
    if (entries.length === 0) continue
    scannedPlugins++

    const sources = findHostSourceFiles(join(pluginRoot, 'src'))

    // (a) declared via `export const inject = [...]` on any host entry
    const declared = new Set()
    for (const entry of entries) {
      for (const k of parseInjectArray(readFileSync(entry, 'utf8'))) declared.add(k)
    }

    // (b) declared via `ctx.inject([...], cb)` anywhere in host-side sources
    for (const file of sources) {
      const content = stripComments(readFileSync(file, 'utf8'))
      const injectCallRe = /ctx\.inject\(\s*(\[[\s\S]*?\])/g
      let m
      while ((m = injectCallRe.exec(content)) !== null) {
        const re = /['"]([^'"]+)['"]/g
        let k
        while ((k = re.exec(m[1])) !== null) declared.add(k[1])
      }
    }

    // Deliberate-fallback declarations (try/catch guards) are tracked separately
    // per access line below, so no global allowlist here.

    for (const file of sources) {
      scannedFiles++
      const rel = file.startsWith(repoRoot) ? file.slice(repoRoot.length + 1) : file
      const content = stripComments(readFileSync(file, 'utf8'))
      const lines = content.split('\n')
      const ctxReadRe = /\bctx\.([A-Za-z_$][\w$]*)\b/g
      let m
      while ((m = ctxReadRe.exec(content)) !== null) {
        const key = m[1]
        if (!WATCHED_SERVICES.has(key)) continue
        if (NON_SERVICE_KEYS.has(key)) continue
        if (declared.has(key)) continue
        const lineNo = content.slice(0, m.index).split('\n').length
        if (isInsideTry(lines, lineNo - 1)) continue
        errors.push(
          `inject contract violation in ${rel}: plugin reads "ctx.${key}" without declaring it in "export const inject" (or wrapping the read in try/catch). ` +
          `Cordis throws "cannot get property "${key}" without inject" at Host load time. ` +
          `Add "${key}" to the plugin inject list (preferred) or guard the read with try/catch.`
        )
      }
    }
  }
}

if (errors.length === 0) {
  console.log(`✅ verify-plugin-inject-contract: ${scannedPlugins} plugin(s) / ${scannedFiles} host-side source file(s) verified; every watched ctx.<service> read is either inject-declared or try/catch-guarded.`)
  process.exit(0)
}

console.error('❌ verify-plugin-inject-contract: contract violations found:')
for (const e of errors) {
  console.error(`  - ${e}`)
}
process.exit(1)
