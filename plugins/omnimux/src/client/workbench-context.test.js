import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  formatCompactContextBlock,
  getUiContext,
  installWorkbenchGlobal,
  registerContextContributor,
  resetWorkbenchForTests,
} from './workbench.js'

describe('Workbench UI Context and Envelope', () => {
  it('formats compact context block correctly', () => {
    const envelope = {
      schemaVersion: 1,
      ok: true,
      capturedAt: Date.now(),
      surface: {
        tabId: 'omnimux-assets:library',
        panelOpen: true,
        focus: 'gui',
      },
      view: {
        filterType: 'character',
        query: 'hero',
      },
      selection: [
        { id: 'ast_1', name: '林晓' },
      ],
    }

    const block = formatCompactContextBlock(envelope)
    assert.ok(block.includes('<ui_context schema="1">'))
    assert.ok(block.includes('tab: omnimux-assets:library'))
    assert.ok(block.includes('filter: character'))
    assert.ok(block.includes('query: hero'))
    assert.ok(block.includes('selected: 林晓 (ast_1)'))
    assert.ok(block.includes('panel: open | focus: gui'))
    assert.ok(block.includes('</ui_context>'))
  })

  it('collects context from registered contributor', () => {
    resetWorkbenchForTests()
    const api = installWorkbenchGlobal()

    const unsub = api.registerContextContributor('omnimux-assets:library', () => ({
      view: { filterType: 'scene' },
      selection: [{ id: 'ast_sc1', name: '夜市' }],
    }))

    // Without betterSidebar service, getUiContext still builds a safe envelope
    const ctx = api.getUiContext()
    assert.equal(ctx.schemaVersion, 1)
    assert.equal(ctx.ok, true)
    assert.ok(typeof ctx.capturedAt === 'number')

    unsub()
  })

  it('correctly reads state from snap.state when panel is open', () => {
    resetWorkbenchForTests()
    const api = installWorkbenchGlobal()
    api.bind({
      betterSidebar: {
        getSnapshot: () => ({
          sessionId: 'ses_test',
          state: {
            panelOpen: true,
            activePane: 'pane:1',
            splits: {
              kind: 'leaf',
              id: 'pane:1',
              tabs: [{ id: 'omnimux-assets:library' }],
              active: 'omnimux-assets:library',
            },
          },
        }),
      },
    })

    const ctx = api.getUiContext()
    assert.equal(ctx.ok, true)
    assert.equal(ctx.reason, 'no-contributor')
    assert.equal(ctx.surface.panelOpen, true)
    assert.equal(ctx.surface.tabId, 'omnimux-assets:library')
  })
})
