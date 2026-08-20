import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'

const here = dirname(fileURLToPath(import.meta.url))
const accountsClient = join(here, '../../../omnimux-accounts/src/client/index.js')
const accountsStage = join(here, '../../../omnimux-accounts/src/client/AccountsStage.jsx')

/**
 * @param {string} source
 * @returns {string[]}
 */
function sectionIds(source) {
  const ids = []
  const inject = /ctx\.slots\.inject\(\s*'settings\.section'[\s\S]*?id:\s*'([^']+)'/g
  for (const match of source.matchAll(inject)) ids.push(match[1])
  return ids
}

/**
 * @param {string} source
 * @returns {string[]}
 */
function pluginsTabIds(source) {
  const ids = []
  const inject = /ctx\.slots\.inject\(\s*'settings\.plugins\.tab'[\s\S]*?id:\s*'([^']+)'/g
  for (const match of source.matchAll(inject)) ids.push(match[1])
  return ids
}

describe('settings placement', () => {
  it('keeps only product chrome on the first-level Settings nav', () => {
    const hub = readFileSync(join(here, 'index.js'), 'utf8')
    assert.deepEqual(sectionIds(hub), ['omnimux-profile'])
    assert.deepEqual(pluginsTabIds(hub), ['omnimux-dsh-plugins'])
  })

  it('registers accounts as an app stage, not a Settings seat', () => {
    const source = readFileSync(accountsClient, 'utf8')
    assert.deepEqual(sectionIds(source), [])
    assert.deepEqual(pluginsTabIds(source), [])
    assert.ok(!source.includes('settings.section'))
    assert.ok(!source.includes('settings.plugins.tab'))
    assert.match(source, /ctx\.slots\.inject\(\s*'shell\.overlay'[\s\S]*?id:\s*'omnimux-app-accounts'/)
  })

  it('AccountsStage claims the product stage on the hub app-open event', () => {
    const source = readFileSync(accountsStage, 'utf8')
    assert.ok(source.includes("'omnimux-app-open'"), 'listens for the hub APP_OPEN_EVENT literal')
    assert.ok(source.includes("'accounts'"), 'matches its catalog id')
    assert.ok(source.includes("'omnimux-app-accounts'"), 'claims stage id omnimux-app-accounts')
    assert.match(source, /function claimProductStage/, 'implements the stage-claim protocol locally')
    assert.ok(!/import[^\n]*omnimux/.test(source), 'must not import the hub package')
  })
})
