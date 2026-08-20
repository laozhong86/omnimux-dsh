import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decorateCatalog, loadCatalog, parseCatalog } from './catalog.js'

test('loads bundled catalog', () => {
  const doc = loadCatalog()
  assert.equal(doc.schema, 1)
  const experts = doc.items.filter((item) => item.tab === 'experts')
  const skills = doc.items.filter((item) => item.tab === 'skills')
  const connectors = doc.items.filter((item) => item.tab === 'connectors')
  // 社媒运营四层漏斗（L0 源分类预筛 → L2 黑名单 → L3 人工 → L1 任务重映射）后的数量
  assert.ok(experts.length >= 60)
  assert.ok(skills.length >= 50)
  assert.ok(connectors.length >= 15)
  assert.ok(experts.every((item) => item.source.type === 'git'))
  assert.ok(doc.items.some((item) => item.kind === 'connector'))
  const ui = experts.find((item) => item.id === 'exp-ad-creative-strategist')
  assert.equal(ui?.title, '广告创意策略师')
  assert.equal(ui?.subtitle, '点睛睛')
  assert.match(ui?.avatar || '', /raw\.githubusercontent\.com\/infometa\/workbuddyskills/)
  assert.ok(doc.categories.some((row) => row.tab === 'skills' && row.title === '协作办公'))
  assert.equal(doc.categories.some((row) => row.tab === 'skills' && row.title === 'AI / Agent 工具'), false)
})

test('rejects unknown schema', () => {
  assert.throws(() => parseCatalog({ schema: 2, generated_at: 'x', items: [] }), /unsupported schema/)
})

test('decorate marks missing items uninstalled', () => {
  const home = mkdtempSync(join(tmpdir(), 'esc-cat-'))
  mkdirSync(join(home, 'profiles', 'omnimux'), { recursive: true })
  const doc = decorateCatalog(loadCatalog(), {
    home,
    profileDir: join(home, 'profiles', 'omnimux'),
    packageRoot: join(import.meta.dirname, '..'),
  })
  assert.equal(doc.items.every((item) => item.installed === false), true)
})

test('decorate sees a copied skill as installed', () => {
  const home = mkdtempSync(join(tmpdir(), 'esc-cat-'))
  mkdirSync(join(home, 'skills', 'esc-demo-note'), { recursive: true })
  writeFileSync(join(home, 'skills', 'esc-demo-note', 'SKILL.md'), '# x\n')
  const doc = decorateCatalog(loadCatalog(), {
    home,
    profileDir: join(home, 'profiles', 'omnimux'),
    packageRoot: join(import.meta.dirname, '..'),
  })
  const item = doc.items.find((row) => row.id === 'esc-demo-skill')
  assert.equal(item.installed, true)
})
