import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))

describe('market workbench seat (sidebar must not claim overlay)', () => {
  it('plaza action uses the workbench open, not the product stage claim', () => {
    const source = readFileSync(join(here, 'plaza-shell.js'), 'utf8')
    assert.match(source, /__omnimuxWorkbench/)
    assert.match(source, /omnimux-market:plaza/)
    assert.doesNotMatch(source, /__omnimuxStage\.claim/)
  })

  it('client apply registers plaza tab on betterSidebar', () => {
    const source = readFileSync(join(here, 'apply.js'), 'utf8')
    assert.match(source, /PLAZA_TAB_ID/)
    assert.match(source, /registerPlazaTab/)
    assert.doesNotMatch(source, /slots\.inject\('shell\.overlay'/)
  })

  it('plaza shell has no in-tab FocusBar and does not claim overlay', () => {
    const shell = readFileSync(join(here, 'plaza-shell.js'), 'utf8')
    assert.doesNotMatch(shell, /PlazaFocusBar/)
    assert.doesNotMatch(shell, /data-omnimux-workbench-focus/)
    assert.doesNotMatch(shell, /omnimux-workbench-focus/)
    assert.match(shell, /__omnimuxWorkbench/)
    assert.doesNotMatch(shell, /__omnimuxStage\.claim/)
  })
})
