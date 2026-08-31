import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))

function read(name) {
  return readFileSync(join(here, name), 'utf8')
}

function styleBodies(source) {
  return [...source.matchAll(/style=\{\{([\s\S]*?)\}\}/g)].map((match) => match[1])
}

function assertOnlyCustomProperties(source, file) {
  for (const body of styleBodies(source)) {
    const compact = body.replace(/\/\*[\s\S]*?\*\//g, '')
    for (const part of compact.split(',')) {
      const trimmed = part.trim()
      if (!trimmed) continue
      if (/^display\s*:\s*(open\s*\?\s*undefined\s*:\s*['"]none['"]|['"]none['"])/.test(trimmed)) continue
      assert.match(
        trimmed,
        /^['"]?--[A-Za-z0-9-]+['"]?\s*:/,
        `${file} inline style must be a CSS custom property: ${trimmed}`,
      )
    }
  }
}

const FILES = [
  'AppsStage.jsx',
  'LoginGate.jsx',
  'ProfileSection.jsx',
  'ProfileAvatar.jsx',
  'PluginsSection.jsx',
  'plugin-helpers.jsx',
  'SidebarUpdateAction.jsx',
  'ModelsSettingsCard.jsx',
]

describe('hub client UI kit contract (B5 drawer)', () => {
  it('replaces visible native buttons with dsh-ui-kit controls', () => {
    for (const file of FILES) {
      const source = read(file)
      assert.doesNotMatch(source, /<button\b/, `${file} still has a raw <button>`)
      assert.match(source, /from 'dsh-ui-kit'/, `${file} must import dsh-ui-kit`)
    }
  })

  it('keeps inline style objects to CSS custom properties (hidden file input allowed)', () => {
    for (const file of FILES) {
      assertOnlyCustomProperties(read(file), file)
    }
  })

  it('positions AppsStage with --stage-* and kit PageHeader', () => {
    const stage = read('AppsStage.jsx')
    const styles = read('styles.js')
    assert.match(stage, /className="omnimux-apps-stage"/)
    assert.match(stage, /'--stage-top'/)
    assert.match(stage, /'--stage-left'/)
    assert.match(stage, /'--stage-width'/)
    assert.match(stage, /'--stage-height'/)
    assert.match(stage, /<PageHeader/)
    assert.doesNotMatch(stage, /position:\s*['"]fixed['"]/)
    assert.match(styles, /\.omnimux-apps-stage \{/)
    assert.match(styles, /top:\s*var\(--stage-top\)/)
  })

  it('tokenizes the sidebar update action and uses 28px compact height', () => {
    const source = read('SidebarUpdateAction.jsx')
    const styles = read('styles.js')
    assert.doesNotMatch(source, /#DC2626|#2563EB|#1D4ED8|#93C5FD|#FFFFFF/)
    assert.doesNotMatch(source, /height:\s*26/)
    assert.match(source, /size="sm"/)
    assert.match(styles, /height:\s*28px/)
    assert.match(styles, /var\(--dsw-alias-button-primary-fill/)
  })

  it('does not leave a naked hex/rgba as the primary color in hub styles', () => {
    const styles = read('styles.js')
    assert.doesNotMatch(styles, /background:\s*#DC2626/)
    assert.doesNotMatch(styles, /background:\s*#2563EB/)
    assert.doesNotMatch(styles, /background:\s*#1D4ED8/)
    assert.doesNotMatch(styles, /color:\s*#93C5FD/)
  })
})
