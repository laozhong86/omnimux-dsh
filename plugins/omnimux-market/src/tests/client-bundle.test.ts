import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const client = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '../client.js'), 'utf8')

test('client bundle is a single ModuleLoader factory', () => {
  assert.match(client, /^window\.__ModuleLoader__\.load\(\{/)
  assert.match(client, /id: "omnimux-market"/)
  assert.match(client, /return module\.exports/)
  assert.match(client, /inject/)
  assert.match(client, /function apply/)
})

test('client bundle inlines dsh-ui-kit and externalizes host modules', () => {
  assert.doesNotMatch(client, /require\(["']dsh-ui-kit["']\)/)
  assert.match(client, /require\(["']react["']\)/)
  assert.match(client, /require\(["']@deepseek-ai\/dsh-client-ui-primitives["']\)/)
  assert.match(client, /SearchField|dshUk-SearchField/)
  assert.match(client, /dshUk-Button/)
})

test('client bundle keeps public slot keys and keep-alive', () => {
  for (const needle of [
    'key: "skillhub_search"',
    'key: "plaza_search"',
    'key: "skillhub_list"',
    'key: "omnimux-market"',
    'id: "omnimux-market-plaza"',
    'sidebar.footer.action',
    'settings.plugin.item',
    'plazaKeepAlive',
    'everOpened',
    'sh-plaza-view',
    'data-active',
  ]) {
    assert.ok(client.includes(needle), `missing ${needle}`)
  }
  assert.match(client, /"data-active":\s*open\s*\?\s*["']true["']\s*:\s*["']false["']/)
  assert.match(client, /\.sh-plaza-view\[data-active=["']false["']\]\{display:none/)
})

test('plaza footer trigger stays a native left-aligned button like Settings', () => {
  assert.match(client, /h\(\s*"button",\s*\{\s*type:\s*"button",\s*className:\s*"sh-plaza-trigger"/)
  assert.doesNotMatch(client, /leadingIcon:\s*h\(PlazaIcon\)/)
  assert.match(client, /\.sh-plaza-wrap:not\(\.rail\) \.sh-plaza-trigger\{justify-content:flex-start;text-align:left\}/)
  assert.match(client, /\.sh-plaza-wrap\.rail \.sh-plaza-trigger\{[^}]*justify-content:center/)
})

test('client bundle recognizes Skills search fallback without library total', () => {
  for (const needle of [
    'search.fallback',
    '没有匹配结果，以下是热门技能推荐',
    'No matches — showing popular skills instead',
    'const isFallback = !!d.fallback',
    'setHasMore(isFallback ? false : !!d.hasMore)',
  ]) {
    assert.ok(client.includes(needle), `missing ${needle}`)
  }
  assert.match(client, /summaryText = fallback\s*\n?\s*\? tr\("search\.fallback"\)/)
})
