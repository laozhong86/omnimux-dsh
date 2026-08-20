import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loadCatalog } from './catalog.js'
import { formatMcpRow, installItem, spliceManaged } from './install.js'

function roots() {
  const home = mkdtempSync(join(tmpdir(), 'esc-ins-'))
  const profile = join(home, 'profiles', 'omnimux')
  mkdirSync(profile, { recursive: true })
  return { home, profileDir: profile, packageRoot: join(import.meta.dirname, '..') }
}

test('installs a bundled skill once', () => {
  const env = roots()
  const catalog = loadCatalog()
  const first = installItem({ catalog, id: 'esc-demo-skill', ...env })
  const second = installItem({ catalog, id: 'esc-demo-skill', ...env })
  assert.equal(first.already, undefined)
  assert.equal(second.already, true)
  assert.equal(existsSync(join(env.home, 'skills', 'esc-demo-note', 'SKILL.md')), true)
})

test('writes an mcp managed block', () => {
  const env = roots()
  writeFileSync(join(env.profileDir, 'cordis.patch.yml'), '[]\n')
  const catalog = loadCatalog()
  installItem({ catalog, id: 'cn-tencent-docs', ...env })
  const text = readFileSync(join(env.profileDir, 'cordis.patch.yml'), 'utf8')
  assert.match(text, /omnimux-gallery managed/)
  assert.match(text, /id: esc-mcp-cn-tencent-docs/)
  assert.match(text, /serverName: tencent-docs/)
})

test('spliceManaged is idempotent for the same row', () => {
  const row = formatMcpRow({
    id: 'github-mcp',
    serverName: 'github',
    source: { type: 'mcp', transport: 'stdio', command: 'npx', args: ['-y', 'x'] },
  })
  const once = spliceManaged('[]\n', row)
  const twice = spliceManaged(once, row)
  assert.equal(once, twice)
})

test('rejects unknown ids', () => {
  const env = roots()
  assert.throws(() => installItem({ catalog: loadCatalog(), id: 'nope', ...env }), /unknown item/)
})

test('installs a local WorkBuddy expert pack without git clone', () => {
  const env = roots()
  const catalog = loadCatalog()
  const result = installItem({ catalog, id: 'exp-ad-creative-strategist', ...env })
  assert.equal(result.installed, true)
  assert.equal(existsSync(join(env.home, 'skills', 'ad-creative-strategist', 'SKILL.md')), true)
  assert.equal(existsSync(join(env.home, 'skills', 'ad-creative-strategist', 'agents', 'ad-creative-strategist.md')), true)
})
