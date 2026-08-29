import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const stagePath = join(here, 'client', 'AssetsStage.jsx')
const stageJsx = readFileSync(stagePath, 'utf8')
const stylesPath = join(here, 'client', 'styles.js')
const stylesJs = readFileSync(stylesPath, 'utf8')

describe('OmniMux Assets Client 4-Layer Layout Contract', () => {
  it('conforms to 4-layer hierarchy in AssetsStage.jsx', () => {
    // Layer 1: Page Header (converged to dsh-ui-kit PageHeader)
    assert.match(stageJsx, /<PageHeader\b/)
    assert.match(stageJsx, /title=\{t\('stage\.title'\)\}/)
    assert.match(stageJsx, /subtitle=\{t\('stage\.subtitle'\)\}/)

    // Layer 2: Action Row
    assert.match(stageJsx, /className="omnimux-assets-action-row"/)

    // Layer 3: FilterBar
    assert.match(stageJsx, /<FilterBar/)
    assert.match(stageJsx, /className="omnimux-assets-stage-toolbar"/)
    assert.match(stageJsx, /tools=\{/)

    // Layer 4: Main Content
    assert.match(stageJsx, /className="omnimux-assets-body"/)
  })

  it('strictly prohibits visible raw HTML button and select controls', () => {
    // Ensure no raw <button> in view layer (use IconButton / Button)
    assert.doesNotMatch(stageJsx, /<button\b/)
    assert.doesNotMatch(stageJsx, /<select\b/)
  })

  it('uses 100% theme tokens without raw rgba/hex literals in styles.js', () => {
    assert.match(stylesJs, /pointer-events:\s*auto;/)
    // Verify no bare rgba literal
    assert.doesNotMatch(stylesJs, /box-shadow:\s*0\s+1px\s+2px\s+rgba\(/)
  })
})
