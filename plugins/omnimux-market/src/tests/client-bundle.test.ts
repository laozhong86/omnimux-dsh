import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const client = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '../client.js'), 'utf8')

test('client bundle is a single ModuleLoader factory', () => {
  assert.match(client, /^window\.__ModuleLoader__\.load\(\{/)
  assert.match(client, /id: "omnimux-market"/)
  assert.match(client, /return \{ inject, apply \};/)
  assert.match(client, /\n  \},\n\}\);\n$/)
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
    'display: open ? undefined : "none"',
  ]) {
    assert.ok(client.includes(needle), `missing ${needle}`)
  }
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
