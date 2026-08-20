import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loadCatalog } from './catalog.js'
import { summonItem } from './summon.js'

function env() {
  const home = mkdtempSync(join(tmpdir(), 'esc-sum-'))
  const profileDir = join(home, 'profiles', 'omnimux')
  mkdirSync(profileDir, { recursive: true })
  return { home, profileDir, packageRoot: join(import.meta.dirname, '..') }
}

test('summon installs then returns a slash gesture', () => {
  const roots = env()
  const result = summonItem({
    catalog: loadCatalog(),
    id: 'esc-demo-skill',
    sessionState: 'locked',
    ...roots,
  })
  assert.equal(result.gesture, '/esc-demo-note')
  assert.equal(result.stagePreset, null)
})

test('blank session stages expert-mode when the preset exists', () => {
  const roots = env()
  mkdirSync(join(roots.home, '.agent-presets', 'expert-mode'), { recursive: true })
  writeFileSync(join(roots.home, '.agent-presets', 'expert-mode', 'agent.cordis.yml'), '- []\n')
  const result = summonItem({
    catalog: loadCatalog(),
    id: 'esc-demo-skill',
    sessionState: 'blank',
    ...roots,
  })
  assert.equal(result.stagePreset, 'expert-mode')
  assert.equal(result.gesture, '/esc-demo-note')
})

test('connectors cannot be summoned', () => {
  const roots = env()
  assert.throws(() => summonItem({
    catalog: loadCatalog(),
    id: 'cn-tencent-docs',
    sessionState: 'blank',
    ...roots,
  }), /not summoned/)
})
