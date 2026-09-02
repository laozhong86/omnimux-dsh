import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))

describe('clip workbench seat (sidebar must not claim overlay)', () => {
  it('sidebar entry uses the workbench store, not the product stage', () => {
    const source = readFileSync(join(here, 'sidebar-entry.js'), 'utf8')
    assert.match(source, /createClipWorkbenchStore/)
    assert.match(source, /stageStore: createClipWorkbenchStore\(t\)/)
    const storeSource = readFileSync(join(here, 'workbench-store.js'), 'utf8')
    assert.match(storeSource, /createSidebarStore/)
    assert.doesNotMatch(storeSource, /closePanel/)
    assert.doesNotMatch(source, /stageStore: stage/)
    assert.doesNotMatch(source, /claimProductStage/)
  })

  it('client apply mounts the sidebar with a null product stage', () => {
    const source = readFileSync(join(here, 'index.js'), 'utf8')
    assert.match(source, /mountSidebarEntry\(null, t, ctx\.locale\)/)
    assert.match(source, /id: 'omnimux-clip:studio'/)
    assert.match(source, /__omnimuxWorkbench/)
  })

  it('stage store no longer restores a leftover product-stage claim', () => {
    const source = readFileSync(join(here, 'stage-store.js'), 'utf8')
    assert.doesNotMatch(source, /omnimux_active_product_stage/)
  })

  it('studio tab hosts the workbench focus switch without claiming overlay', () => {
    const tab = readFileSync(join(here, 'OpenReelStudioTab.jsx'), 'utf8')
    const bar = readFileSync(join(here, 'WorkbenchFocusBar.jsx'), 'utf8')
    assert.match(tab, /WorkbenchFocusBar/)
    assert.match(bar, /data-omnimux-workbench-focus/)
    assert.match(bar, /__omnimuxWorkbench/)
    assert.doesNotMatch(tab, /claimProductStage/)
    assert.doesNotMatch(bar, /from ['"]omnimux/)
  })
})
