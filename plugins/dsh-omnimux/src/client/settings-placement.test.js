import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'

const here = dirname(fileURLToPath(import.meta.url))
const accountsClient = join(here, '../../../dsh-omnimux-accounts/src/client/index.js')

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

describe('settings placement', () => {
  it('keeps only product chrome on the first-level Settings nav', () => {
    const hub = readFileSync(join(here, 'index.js'), 'utf8')
    assert.deepEqual(sectionIds(hub), ['omnimux-profile'])
    assert.match(hub, /settings\.plugins\.tab[\s\S]*id: 'omnimux-dsh-plugins'/)
  })

  it('registers accounts as a Plugins tab, not a Settings page', () => {
    const source = readFileSync(accountsClient, 'utf8')
    assert.deepEqual(sectionIds(source), [])
    assert.match(source, /settings\.plugins\.tab[\s\S]*id: 'omnimux-accounts'/)
  })
})
