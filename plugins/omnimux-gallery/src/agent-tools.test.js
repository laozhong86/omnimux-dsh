import { existsSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createAgentTools } from './agent-tools.js'

function fixture() {
  const home = mkdtempSync(join(tmpdir(), 'esc-tools-'))
  mkdirSync(join(home, 'profiles', 'omnimux'), { recursive: true })
  writeFileSync(join(home, 'profiles', 'omnimux', 'cordis.patch.yml'), '[]\n')
  const catalog = {
    items: [
      {
        id: 'esc-demo-skill', tab: 'skills', kind: 'skill', title: '演示技能',
        summary: 'A demo bundled skill', category: 'sk-office', tags: ['demo'],
        skill: 'esc-demo-note', source: { type: 'bundled', path: 'catalog/skills/esc-demo-note/SKILL.md' },
      },
      {
        id: 'sk-pdf-ocr', tab: 'skills', kind: 'skill', title: 'PDF OCR',
        summary: 'Convert scanned PDFs to editable text', category: 'sk-dev', tags: ['pdf'],
        skill: 'pdf-ocr', hub: { slug: 'pdf-ocr', name: 'PDF OCR' },
        source: { type: 'git', repo: 'a/b', path: 'skills/pdf-ocr', ref: 'main' },
      },
      {
        id: 'exp-ai-expert', tab: 'experts', kind: 'expert', title: 'AI 专家',
        summary: 'An AI expert', category: 'exp-engineering', tags: [],
        skill: 'ai-expert', source: { type: 'git', repo: 'a/b', path: 'experts/x', ref: 'main' },
      },
      {
        id: 'cn-github', tab: 'connectors', kind: 'connector', title: 'GitHub',
        summary: 'GitHub MCP', category: 'dev', tags: [],
        serverName: 'github', source: { type: 'mcp', transport: 'stdio', command: 'npx' },
      },
    ],
    categories: [],
    featured: [],
    schema: 1,
    generated_at: 'x',
    tabs: ['experts', 'skills', 'connectors'],
  }
  const roots = () => ({ home, profileDir: join(home, 'profiles', 'omnimux'), packageRoot: join(import.meta.dirname, '..') })
  const tools = {}
  for (const tool of createAgentTools(roots, () => catalog)) {
    tools[tool.name] = tool
  }
  return { home, catalog, roots, tools }
}

test('esc_search filters by tab and query', async () => {
  const { tools } = fixture()
  const result = await tools.esc_search.execute({ query: 'pdf', tab: 'skills', hub: false })
  assert.equal(result.source, 'gallery')
  assert.ok(result.items.length >= 1)
  assert.ok(result.items.every((item) => item.tab === 'skills'))
  const pdf = result.items.find((item) => item.id === 'sk-pdf-ocr')
  assert.ok(pdf)
  assert.equal(pdf.installed, false)
  assert.equal(pdf.hubDuplicate, true)
})

test('esc_search with hub:true merges or reports hubError', async () => {
  const { tools } = fixture()
  const result = await tools.esc_search.execute({ query: 'pdf', tab: 'skills', hub: true })
  assert.equal(result.source, 'gallery+hub')
  assert.ok(Array.isArray(result.hubItems) || result.hubError)
})

test('esc_install installs a bundled skill once', async () => {
  const { tools, home } = fixture()
  const first = await tools.esc_install.execute({ id: 'esc-demo-skill' })
  assert.equal(first.installed, true)
  assert.equal(existsSync(join(home, 'skills', 'esc-demo-note', 'SKILL.md')), true)
  const second = await tools.esc_install.execute({ id: 'esc-demo-skill' })
  assert.equal(second.already, true)
})

test('esc_list sees the installed skill', async () => {
  const { tools, home } = fixture()
  await tools.esc_install.execute({ id: 'esc-demo-skill' })
  const result = await tools.esc_list.execute({})
  assert.equal(result.home, home)
  assert.ok(result.skills.some((s) => s.slug === 'esc-demo-note'))
})

test('esc_uninstall removes only SKILL.md dirs', async () => {
  const { tools, home } = fixture()
  await tools.esc_install.execute({ id: 'esc-demo-skill' })
  const done = await tools.esc_uninstall.execute({ slug: 'esc-demo-note' })
  assert.equal(done.slug, 'esc-demo-note')
  assert.equal(existsSync(join(home, 'skills', 'esc-demo-note')), false)
})

test('esc_uninstall rejects missing skills', async () => {
  const { tools } = fixture()
  await assert.rejects(() => tools.esc_uninstall.execute({ slug: 'no-such' }), /未安装/)
})

test('esc_summon returns a gesture for experts', async () => {
  const { tools, home } = fixture()
  // pre-install so summon skips the git clone path
  mkdirSync(join(home, 'skills', 'ai-expert'), { recursive: true })
  writeFileSync(join(home, 'skills', 'ai-expert', 'SKILL.md'), '# ai-expert\n')
  const result = await tools.esc_summon.execute({ id: 'exp-ai-expert' })
  assert.equal(result.gesture, '/ai-expert')
})

test('esc_summon rejects connectors', async () => {
  const { tools } = fixture()
  await assert.rejects(() => tools.esc_summon.execute({ id: 'cn-github' }), /专家/)
})

test('esc_install rejects unknown ids', async () => {
  const { tools } = fixture()
  await assert.rejects(() => tools.esc_install.execute({ id: 'nope' }), /unknown item/)
})