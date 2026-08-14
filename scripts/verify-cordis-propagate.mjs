#!/usr/bin/env node
// Cordis-level proof that dsh-omnimux provides omnimuxVideo and dsh-drama
// reads it with ctx.get (optional). One command:
//   DSH_SRC=/Users/x/Desktop/Project/Github/deepseek-harness node scripts/verify-cordis-propagate.mjs
// Resolves the same @deepseek-ai/cordis as DSH_SRC (vendor/cordis). Does not
// boot the full dsh profile and does not call OmniMux.
import assert from 'node:assert/strict'
import { cpSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import * as omnimux from '../plugins/dsh-omnimux/src/index.js'
import * as drama from '../plugins/dsh-drama/src/index.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dshSrc = process.env.DSH_SRC ?? '/Users/x/Desktop/Project/Github/deepseek-harness'
const cordisHref = pathToFileURL(join(dshSrc, 'vendor/cordis/lib/index.js')).href
const { Context } = await import(cordisHref)

const tools = new Map()
const ctx = new Context()
ctx.provide('tools', {
  register(tool) {
    tools.set(tool.name, tool)
  },
})
ctx.provide('systemPrompt', { section() {} })

const omniFiber = await ctx.plugin(omnimux)
await ctx.plugin(drama)

assert.equal(typeof ctx.get('omnimuxVideo')?.execute, 'function', 'drama host must see provided omnimuxVideo')
assert.equal(ctx.get('jobs'), undefined, 'jobs stays optional')
assert.ok(tools.has('drama_generate_shot'))
assert.ok(tools.has('omnimux_video_submit'))

const liveRoot = mkdtempSync(join(tmpdir(), 'drama-live-'))
const stubRoot = mkdtempSync(join(tmpdir(), 'drama-stub-'))
cpSync(join(root, 'fixtures/demo-series'), liveRoot, { recursive: true })
cpSync(join(root, 'fixtures/demo-series'), stubRoot, { recursive: true })
const exec = (cwd) => ({ agent: { session: { header: { cwd } } } })

try {
  await tools.get('drama_generate_shot').execute({ shot_id: 'e01-s01' }, exec(liveRoot))
  throw new Error('expected live branch to throw without a key')
} catch (error) {
  assert.equal(error?.code, 'omnimux-unconfigured', 'mounted omnimuxVideo takes the live branch')
}

await omniFiber.dispose()
assert.equal(ctx.get('omnimuxVideo'), undefined, 'dispose unregisters omnimuxVideo')

const stub = await tools.get('drama_generate_shot').execute({ shot_id: 'e01-s01' }, exec(stubRoot))
assert.equal(stub.mode, 'stub', 'unmounted omnimuxVideo falls back to stub')

rmSync(liveRoot, { recursive: true, force: true })
rmSync(stubRoot, { recursive: true, force: true })
await ctx.fiber.dispose()
process.stdout.write('verify-cordis-propagate: omnimuxVideo provided, live branch seen, stub after unload\n')
