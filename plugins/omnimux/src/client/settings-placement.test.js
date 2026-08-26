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

  it('registers accounts as a pinned first-level page, not a Settings seat', () => {
    const source = readFileSync(accountsClient, 'utf8')
    assert.deepEqual(sectionIds(source), [])
    assert.deepEqual(pluginsTabIds(source), [])
    assert.ok(!source.includes('settings.section'))
    assert.ok(!source.includes('settings.plugins.tab'))
    assert.match(source, /ctx\.slots\.inject\(\s*'shell\.overlay'[\s\S]*?id:\s*'omnimux-accounts-stage'/)
    assert.ok(source.includes("mountSidebarEntry(stage"), 'mounts its own pinned sidebar row')
  })

  it('AccountsStage reads open state from the stage store, not the hub app-open event', () => {
    const source = readFileSync(accountsStage, 'utf8')
    assert.ok(!source.includes("'omnimux-app-open'"), 'no longer listens for the hub APP_OPEN_EVENT literal')
    assert.ok(source.includes('useSyncExternalStore'), 'reads open state from the stage store')
    assert.ok(source.includes('stage.set(false)'), 'closes through the stage store, not a local claim copy')
    assert.ok(!/function claimProductStage|function readStageBox|PRODUCT_STAGE_CHROME/.test(source), 'does not duplicate the stage-claim protocol')
    assert.ok(!/import[^\n]*omnimux/.test(source), 'must not import the hub package')
  })

  it('AccountsStage keeps the page mounted after the first open', () => {
    const source = readFileSync(accountsStage, 'utf8')
    const section = readFileSync(join(here, '../../../omnimux-accounts/src/client/AccountsSection.jsx'), 'utf8')
    const hook = readFileSync(join(here, '../../../omnimux-accounts/src/client/use-accounts.js'), 'utf8')
    assert.ok(source.includes('everOpened'), 'remembers first open so the subtree can stay mounted')
    assert.ok(source.includes("data-visible={open ? 'true' : 'false'}"), 'hides via data-visible instead of unmounting')
    assert.ok(source.includes("if (!stage || !everOpened) return null"), 'returns null only before the first open')
    assert.ok(!/if \(!open \|\| !stage\) return null/.test(source), 'must not unmount the overlay on close')
    assert.ok(section.includes('active'), 'section receives overlay visibility')
    assert.ok(hook.includes('sessionCache'), 'list hook rehydrates from a session cache')
  })
})
