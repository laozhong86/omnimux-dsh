import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loadCatalog } from './catalog.js'
import { formatMcpRow, installItem, removeMcpRow, spliceManaged, withConnectorPatchLock } from './install.js'

const PACKAGE_ROOT = join(import.meta.dirname, '..', '..')

function roots() {
  const home = mkdtempSync(join(tmpdir(), 'omx-ins-'))
  const profile = join(home, 'profiles', 'omnimux')
  mkdirSync(profile, { recursive: true })
  return { home, profileDir: profile, packageRoot: PACKAGE_ROOT }
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
  assert.match(text, /omnimux-market managed/)
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

test('spliceManaged idempotency survives id prefix collisions', () => {
  // cn-tencent-docs 是 cn-tencent-docs-oa 的 id 前缀：子串匹配会把
  // "写入 docs 行"误判为"docs 行已存在"而跳过
  const rowOa = formatMcpRow({
    id: 'cn-tencent-docs-oa',
    serverName: 'oa',
    source: { type: 'mcp', transport: 'stdio', command: 'npx', args: ['-y', 'x'] },
  })
  const rowDocs = formatMcpRow({
    id: 'cn-tencent-docs',
    serverName: 'docs',
    source: { type: 'mcp', transport: 'stdio', command: 'npx', args: ['-y', 'x'] },
  })
  const withOa = spliceManaged('[]\n', rowOa)
  const withBoth = spliceManaged(withOa, rowDocs)
  assert.notEqual(withBoth, withOa)
  assert.match(withBoth, /id: esc-mcp-cn-tencent-docs\n/)
  assert.match(withBoth, /id: esc-mcp-cn-tencent-docs-oa/)
  // 同一行重复写入仍然幂等
  assert.equal(spliceManaged(withBoth, rowDocs), withBoth)
  assert.equal(spliceManaged(withBoth, rowOa), withBoth)
})

test('installing a shorter id is not short-circuited by its longer sibling', () => {
  const env = roots()
  writeFileSync(join(env.profileDir, 'cordis.patch.yml'), '[]\n')
  const catalog = loadCatalog()
  installItem({ catalog, id: 'cn-tencent-docs-oa', ...env })
  // docs 不能因 oa 已装（前缀子串误中）被 already 短路
  const docs = installItem({ catalog, id: 'cn-tencent-docs', ...env })
  assert.equal(docs.installed, true)
  assert.equal(docs.already, undefined)
  const text = readFileSync(join(env.profileDir, 'cordis.patch.yml'), 'utf8')
  assert.match(text, /id: esc-mcp-cn-tencent-docs\n/)
  assert.match(text, /id: esc-mcp-cn-tencent-docs-oa/)
  // 各自可独立卸载，互不影响
  removeMcpRow(env.profileDir, { id: 'cn-tencent-docs' })
  const after = readFileSync(join(env.profileDir, 'cordis.patch.yml'), 'utf8')
  assert.doesNotMatch(after, /id: esc-mcp-cn-tencent-docs\n/)
  assert.match(after, /id: esc-mcp-cn-tencent-docs-oa/)
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

test('removeMcpRow keeps other managed rows, the marker pair, and user content', () => {
  const env = roots()
  // 用户手编段（非托管 insert）
  writeFileSync(join(env.profileDir, 'cordis.patch.yml'),
    '- insert:\n    - id: my-local-plugin\n      name: my-local-plugin\n')
  const catalog = loadCatalog()
  installItem({ catalog, id: 'cn-tencent-docs', ...env })
  installItem({ catalog, id: 'cn-notion', ...env })
  const patch = join(env.profileDir, 'cordis.patch.yml')
  assert.match(readFileSync(patch, 'utf8'), /id: esc-mcp-cn-tencent-docs/)
  assert.match(readFileSync(patch, 'utf8'), /id: esc-mcp-cn-notion/)
  // 卸载其中一个：另一行保留，标记对保留，用户段原样
  removeMcpRow(env.profileDir, { id: 'cn-tencent-docs' })
  const once = readFileSync(patch, 'utf8')
  assert.doesNotMatch(once, /esc-mcp-cn-tencent-docs/)
  assert.match(once, /id: esc-mcp-cn-notion/)
  assert.match(once, /omnimux-market managed/)
  assert.match(once, /id: my-local-plugin/)
  assert.match(once, /name: my-local-plugin/)
})

test('removeMcpRow drops the marker pair and orphan insert header once the managed section is empty', () => {
  const env = roots()
  // 用户手编段 + catalogInstall 写入的托管段
  const initial = '- insert:\n    - id: my-local-plugin\n      name: my-local-plugin\n'
  writeFileSync(join(env.profileDir, 'cordis.patch.yml'), initial)
  const catalog = loadCatalog()
  installItem({ catalog, id: 'cn-tencent-docs', ...env })
  const patch = join(env.profileDir, 'cordis.patch.yml')
  removeMcpRow(env.profileDir, { id: 'cn-tencent-docs' })
  const once = readFileSync(patch, 'utf8')
  // esc-mcp 行消失、标记对与孤立 `- insert:` 行头删除、用户手编段原样：逐字节回到初始内容
  assert.doesNotMatch(once, /esc-mcp-/)
  assert.doesNotMatch(once, /omnimux-market managed/)
  assert.equal(once, initial)
  // 再次调用幂等：文件逐字节不变
  removeMcpRow(env.profileDir, { id: 'cn-tencent-docs' })
  assert.equal(readFileSync(patch, 'utf8'), once)
  // 文件里不存在的 id 也幂等
  removeMcpRow(env.profileDir, { id: 'cn-notion' })
  assert.equal(readFileSync(patch, 'utf8'), once)
})

test('uninstalling every installed connector restores the patch byte-for-byte', () => {
  const env = roots()
  const initial = '- insert:\n    - id: my-local-plugin\n      name: my-local-plugin\n'
  writeFileSync(join(env.profileDir, 'cordis.patch.yml'), initial)
  const catalog = loadCatalog()
  installItem({ catalog, id: 'cn-tencent-docs', ...env })
  installItem({ catalog, id: 'cn-notion', ...env })
  const patch = join(env.profileDir, 'cordis.patch.yml')
  const installed = readFileSync(patch, 'utf8')
  assert.match(installed, /id: esc-mcp-cn-tencent-docs/)
  assert.match(installed, /id: esc-mcp-cn-notion/)
  removeMcpRow(env.profileDir, { id: 'cn-tencent-docs' })
  // 删一个：另一个还在，标记对还在
  const partial = readFileSync(patch, 'utf8')
  assert.doesNotMatch(partial, /esc-mcp-cn-tencent-docs/)
  assert.match(partial, /id: esc-mcp-cn-notion/)
  assert.match(partial, /omnimux-market managed/)
  removeMcpRow(env.profileDir, { id: 'cn-notion' })
  // 删空：与初始内容逐字节一致
  assert.equal(readFileSync(patch, 'utf8'), initial)
})

test('reinstalling after a full uninstall does not accumulate insert headers', () => {
  const env = roots()
  writeFileSync(join(env.profileDir, 'cordis.patch.yml'), '[]\n')
  const catalog = loadCatalog()
  const patch = join(env.profileDir, 'cordis.patch.yml')
  installItem({ catalog, id: 'cn-tencent-docs', ...env })
  removeMcpRow(env.profileDir, { id: 'cn-tencent-docs' })
  // 空文件场景还原为 spliceManaged 的默认空形态
  assert.equal(readFileSync(patch, 'utf8'), '[]\n')
  installItem({ catalog, id: 'cn-tencent-docs', ...env })
  // 再装回来：`- insert:` 行头只有一个，无累积
  const reinstalled = readFileSync(patch, 'utf8')
  assert.equal((reinstalled.match(/^- insert:$/gm) || []).length, 1)
  assert.match(reinstalled, /id: esc-mcp-cn-tencent-docs/)
  removeMcpRow(env.profileDir, { id: 'cn-tencent-docs' })
  assert.equal(readFileSync(patch, 'utf8'), '[]\n')
})

test('withConnectorPatchLock serializes concurrent MCP writes', async () => {
  const env = roots()
  writeFileSync(join(env.profileDir, 'cordis.patch.yml'), '[]\n')
  const catalog = loadCatalog()
  await Promise.all([
    withConnectorPatchLock(async () => installItem({ catalog, id: 'cn-tencent-docs', ...env })),
    withConnectorPatchLock(async () => installItem({ catalog, id: 'cn-notion', ...env })),
  ])
  const text = readFileSync(join(env.profileDir, 'cordis.patch.yml'), 'utf8')
  assert.match(text, /id: esc-mcp-cn-tencent-docs/)
  assert.match(text, /id: esc-mcp-cn-notion/)
  assert.equal((text.match(/^# --- omnimux-market managed ---$/gm) || []).length, 1)
})

test('removeMcpRow is a no-op without a patch file or without the managed block', () => {
  const env = roots()
  // 文件不存在：无操作、不创建文件
  removeMcpRow(env.profileDir, { id: 'cn-tencent-docs' })
  assert.equal(existsSync(join(env.profileDir, 'cordis.patch.yml')), false)
  // 只有用户段、没有托管标记对：一个字节都不能动
  const userOnly = '- insert:\n    - id: my-local-plugin\n      name: my-local-plugin\n'
  writeFileSync(join(env.profileDir, 'cordis.patch.yml'), userOnly)
  removeMcpRow(env.profileDir, { id: 'cn-tencent-docs' })
  assert.equal(readFileSync(join(env.profileDir, 'cordis.patch.yml'), 'utf8'), userOnly)
})
