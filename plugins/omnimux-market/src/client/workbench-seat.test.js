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
    assert.match(source, /icon:\s*renderPlazaIcon/)
    assert.doesNotMatch(source, /slots\.inject\(['"]shell\.overlay['"]/)
    assert.doesNotMatch(source, /mountSidebarEntry/)
  })

  it('plaza entry sits on sidebar.footer.action above Settings', () => {
    const source = readFileSync(join(here, 'apply.js'), 'utf8')
    assert.match(source, /sidebar\.footer\.action/)
    assert.match(source, /omnimux-market-plaza/)
    assert.match(source, /PlazaAction/)
  })

  it('registers the composer Skill picker on conversation.input.left', () => {
    const source = readFileSync(join(here, 'apply.js'), 'utf8')
    assert.match(source, /conversation\.input\.left/)
    assert.match(source, /omnimux-market-skill-picker/)
    assert.match(source, /SkillPickerButton/)
  })

  it('Skill trigger uses a puzzle icon and has no border', () => {
    const picker = readFileSync(join(here, 'skill-picker.js'), 'utf8')
    const css = readFileSync(join(here, 'css.js'), 'utf8')
    assert.match(picker, /function renderPuzzleIcon/)
    assert.match(picker, /renderPuzzleIcon\(16\)/)
    assert.doesNotMatch(picker, /renderPlazaIcon\(16\)/)
    assert.match(css, /\.sh-picker-trigger\{[^}]*border:0/)
    assert.match(picker, /peekPickerCache/)
    assert.match(picker, /pickerSearchCache/)
  })

  it('plaza view consumes a one-shot skills tab intent', () => {
    const source = readFileSync(join(here, 'plaza-shell.js'), 'utf8')
    assert.match(source, /omnimux-market:plaza-intent/)
    assert.match(source, /function consumePlazaIntent/)
    assert.match(source, /setTab\(intent\)/)
  })

  it('plaza icon SVG carries explicit square width and height', () => {
    const source = readFileSync(join(here, 'skill-plaza.js'), 'utf8')
    assert.match(source, /function renderPlazaIcon/)
    assert.match(source, /width:\s*px/)
    assert.match(source, /height:\s*px/)
    assert.match(source, /preserveAspectRatio:\s*"xMidYMid meet"/)
  })

  it('plaza title is 插件市场 / Plugin Market', () => {
    const source = readFileSync(join(here, 'i18n.js'), 'utf8')
    assert.match(source, /"plaza.title": "插件市场"/)
    assert.match(source, /"plaza.title": "Plugin Market"/)
    assert.doesNotMatch(source, /扩展市场/)
    assert.doesNotMatch(source, /Extension Market/)
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
