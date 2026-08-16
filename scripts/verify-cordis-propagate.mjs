#!/usr/bin/env node
// Cordis-level proof that dsh-omnimux provides videoGenerate and dsh-drama
// reads it with ctx.get (optional). One command:
//   DSH_SRC=/Users/x/Desktop/Project/Github/deepseek-harness node scripts/verify-cordis-propagate.mjs
// Resolves the same @deepseek-ai/cordis as DSH_SRC (vendor/cordis). Does not
// boot the full dsh profile and does not call OmniMux.
import assert from 'node:assert/strict'
import { cpSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import * as omnimux from '../plugins/dsh-omnimux/src/index.js'
import * as drama from '../plugins/dsh-drama/src/index.js'
import { generateShot, initProject, upsertShot } from '../plugins/dsh-drama/src/domain.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dshSrc = process.env.DSH_SRC ?? '/Users/x/Desktop/Project/Github/deepseek-harness'
const cordisHref = pathToFileURL(join(dshSrc, 'vendor/cordis/lib/index.js')).href
const { Context } = await import(cordisHref)

delete process.env.OMNIMUX_API_KEY
delete process.env.OMNIMUX_TOKEN

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

assert.equal(typeof ctx.get('videoGenerate')?.execute, 'function', 'drama host must see provided videoGenerate')
assert.equal(typeof ctx.get('imageGenerate')?.execute, 'function', 'drama host must see provided imageGenerate')
assert.equal(typeof ctx.get('identity')?.status, 'function', 'drama host must see provided identity')
assert.equal(ctx.get('jobs'), undefined, 'jobs stays optional')
assert.ok(tools.has('drama_generate_shot'))
assert.ok(tools.has('omnimux_video_submit'))
assert.ok(tools.has('omnimux_image_submit'))
assert.ok(tools.has('omnimux_social_data'))
assert.ok(tools.has('omnimux_accounts_list'))

const liveRoot = mkdtempSync(join(tmpdir(), 'drama-live-'))
const stubRoot = mkdtempSync(join(tmpdir(), 'drama-stub-'))
const emptyRoot = mkdtempSync(join(tmpdir(), 'drama-empty-'))
cpSync(join(root, 'fixtures/demo-series'), liveRoot, { recursive: true })
cpSync(join(root, 'fixtures/demo-series'), stubRoot, { recursive: true })
const exec = (cwd) => ({ agent: { session: { header: { cwd } } } })

try {
  await tools.get('drama_generate_shot').execute({ shot_id: 'e01-s01' }, exec(liveRoot))
  throw new Error('expected live branch to throw without a key')
} catch (error) {
  assert.equal(error?.code, 'omnimux-unconfigured', 'mounted videoGenerate takes the live branch')
}

await omniFiber.dispose()
assert.equal(ctx.get('videoGenerate'), undefined, 'dispose unregisters videoGenerate')
assert.equal(ctx.get('imageGenerate'), undefined, 'dispose unregisters imageGenerate')
assert.equal(ctx.get('identity'), undefined, 'dispose unregisters identity')

const stub = await tools.get('drama_generate_shot').execute({ shot_id: 'e01-s01' }, exec(stubRoot))
assert.equal(stub.mode, 'stub', 'unmounted videoGenerate with explicit stub copies')

initProject(emptyRoot, { id: 'empty-series' })
writeFileSync(join(emptyRoot, 'series/bible.yaml'), [
  'characters:',
  '  - id: hero',
  '    name: Hero',
  '    confirmed: true',
  'scenes: []',
  'voice: ""',
  '',
].join('\n'))
upsertShot(emptyRoot, {
  shot_id: 'e01-s01',
  episode_id: 'e01',
  character_ids: ['hero'],
  status: 'confirmed',
  visual_description: 'a face in torchlight',
})
try {
  await generateShot(emptyRoot, 'e01-s01')
  throw new Error('expected needs-provider without seam or stub')
} catch (error) {
  assert.equal(error?.code, 'needs-provider', 'no seam and no stub throws needs-provider')
}

rmSync(liveRoot, { recursive: true, force: true })
rmSync(stubRoot, { recursive: true, force: true })
rmSync(emptyRoot, { recursive: true, force: true })
await ctx.fiber.dispose()
process.stdout.write('verify-cordis-propagate: videoGenerate provided, live branch seen, stub after unload, needs-provider without stub\n')
