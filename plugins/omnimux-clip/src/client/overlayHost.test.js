import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readClipHostBox, sizableBox } from './overlayHost.js'

const here = dirname(fileURLToPath(import.meta.url))

describe('clip overlay host box', () => {
  it('returns a degenerate box without a document (node tests)', () => {
    assert.deepEqual(readClipHostBox(), { top: 0, left: 0, width: 0, height: 0 })
  })

  it('rejects tiny rects', () => {
    assert.equal(sizableBox(null), null)
    assert.equal(sizableBox({ getBoundingClientRect: () => ({ top: 0, left: 0, width: 4, height: 100 }) }), null)
    assert.deepEqual(
      sizableBox({ getBoundingClientRect: () => ({ top: 10, left: 20, width: 800, height: 600 }) }),
      { top: 10, left: 20, width: 800, height: 600 },
    )
  })
})

describe('clip overlay layout contract', () => {
  it('portals onto document.body and measures the canvas tab', () => {
    const overlay = readFileSync(join(here, 'ClipOverlay.jsx'), 'utf8')
    assert.match(overlay, /createPortal/)
    assert.match(overlay, /from 'react-dom'/)
    assert.match(overlay, /readClipHostBox|watchClipHostBox/)
    assert.match(overlay, /--clip-overlay-top/)
    assert.match(overlay, /--clip-overlay-left/)
    assert.match(overlay, /--clip-overlay-width/)
    assert.match(overlay, /--clip-overlay-height/)
    assert.doesNotMatch(overlay, /omx-clip-stage/)
  })

  it('preview pane class does not match host [class$="-stage"] traps', () => {
    const stage = readFileSync(join(here, 'components/CenterStage.jsx'), 'utf8')
    const styles = readFileSync(join(here, 'styles.js'), 'utf8')
    assert.match(stage, /omx-clip-preview/)
    assert.doesNotMatch(stage, /omx-clip-stage/)
    assert.match(styles, /\.omx-clip-preview \{/)
    assert.doesNotMatch(styles, /\.omx-clip-stage[^-]/)
    assert.match(styles, /top:\s*var\(--clip-overlay-top/)
    assert.match(styles, /left:\s*var\(--clip-overlay-left/)
  })
})
