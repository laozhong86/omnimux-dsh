import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))

describe('accounts workbench seat (sidebar must not claim overlay)', () => {
  it('sidebar entry uses the workbench store, not the product stage', () => {
    const source = readFileSync(join(here, 'sidebar-entry.js'), 'utf8')
    assert.match(source, /createAccountsWorkbenchStore/)
    assert.match(source, /omnimux-accounts:library/)
    assert.doesNotMatch(source, /claimProductStage/)
  })

  it('client apply mounts the sidebar with a null product stage and registers tab', () => {
    const source = readFileSync(join(here, 'index.js'), 'utf8')
    assert.match(source, /mountSidebarEntry\(null, t, ctx\.locale\)/)
    assert.match(source, /id: ACCOUNTS_TAB_ID/)
    assert.match(source, /registerAccountsTab/)
    assert.doesNotMatch(source, /slots\.inject\('shell\.overlay'/)
  })

  it('stage component hosts the workbench focus switch without claiming overlay', () => {
    const stage = readFileSync(join(here, 'AccountsStage.jsx'), 'utf8')
    const bar = readFileSync(join(here, 'WorkbenchFocusBar.jsx'), 'utf8')
    assert.match(stage, /WorkbenchFocusBar/)
    assert.match(bar, /data-omnimux-workbench-focus/)
    assert.match(bar, /__omnimuxWorkbench/)
    assert.doesNotMatch(stage, /claimProductStage/)
    assert.doesNotMatch(bar, /from ['"]omnimux/)
  })
})
