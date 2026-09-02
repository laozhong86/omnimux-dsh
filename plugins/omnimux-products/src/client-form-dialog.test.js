import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const dialogPath = join(here, 'client', 'ProductFormDialog.jsx')
const stagePath = join(here, 'client', 'ProductsStage.jsx')
const stylesPath = join(here, 'client', 'styles.js')
const iconsPath = join(here, 'client', 'icons.jsx')
const dialogJsx = readFileSync(dialogPath, 'utf8')
const stageJsx = readFileSync(stagePath, 'utf8')
const stylesJs = readFileSync(stylesPath, 'utf8')
const iconsJsx = readFileSync(iconsPath, 'utf8')

const REQUIRED_MODAL_CLASSES = [
  'omnimux-products-modal-backdrop',
  'omnimux-products-modal-wrapper',
  'omnimux-products-modal-close',
  'omnimux-products-modal-container',
  'omnimux-products-modal-header',
  'omnimux-products-modal-title',
  'omnimux-products-modal-body',
  'omnimux-products-modal-footer',
]

describe('OmniMux Products self-drawn form modal contract', () => {
  it('styles.js declares every modal class and fade-in keyframes', () => {
    for (const className of REQUIRED_MODAL_CLASSES) {
      assert.match(stylesJs, new RegExp(`\\.${className}\\b`))
    }
    assert.match(stylesJs, /@keyframes omnimux-products-fade-in/)
  })

  it('places the close button outside the top-right corner, with a narrow-screen fallback', () => {
    const closeBlock = stylesJs.match(/\.omnimux-products-modal-close \{[\s\S]*?\n\}/)
    assert.ok(closeBlock, 'missing .omnimux-products-modal-close rule')
    assert.match(closeBlock[0], /top:\s*-10px;/)
    assert.match(closeBlock[0], /right:\s*-48px;/)

    const narrow = stylesJs.match(/@media \(max-width:\s*1160px\) \{[\s\S]*?\}/)
    assert.ok(narrow, 'missing @media (max-width: 1160px) close-button fallback')
    assert.match(narrow[0], /top:\s*-44px;/)
    assert.match(narrow[0], /right:\s*4px;/)
  })

  it('wraps every color/hex/rgba literal in var(--dsw-alias-*, fallback)', () => {
    const css = stylesJs.match(/export const PRODUCTS_CSS = `([\s\S]*)`/)?.[1] ?? ''
    assert.notEqual(css, '')
    const bareColor = /(?:^|[^{;])\s*(?:background|color|border(?:-[a-z]+)?|box-shadow|outline|fill|stroke)\s*:[^;]*?(?:#[0-9a-fA-F]{3,8}|rgba?\()/m
    const offenders = css
      .split('\n')
      .filter((line) => bareColor.test(line) && !line.includes('var(--dsw-alias-'))
    assert.deepEqual(offenders, [], `bare color literals: ${offenders.join(' | ')}`)
  })

  it('ProductFormDialog drops ModalDialog and paints the self-drawn shell', () => {
    assert.doesNotMatch(dialogJsx, /ModalDialog/)
    assert.match(dialogJsx, /from 'dsh-ui-kit'/)
    assert.match(dialogJsx, /\bIconButton\b/)
    assert.match(dialogJsx, /\bButton\b/)
    assert.match(dialogJsx, /import \{ CloseIcon, FileIcon \} from '\.\/icons\.jsx'/)
    assert.match(iconsJsx, /export function CloseIcon/)

    for (const className of REQUIRED_MODAL_CLASSES) {
      assert.match(dialogJsx, new RegExp(`className="${className}"`))
    }
  })

  it('closes on Esc, backdrop click, and keep-open on wrapper click', () => {
    assert.match(dialogJsx, /if \(event\.key === 'Escape'\) onCancel\(\)/)
    assert.match(dialogJsx, /window\.addEventListener\('keydown', handleKeyDown\)/)
    assert.match(dialogJsx, /window\.removeEventListener\('keydown', handleKeyDown\)/)
    assert.match(dialogJsx, /className="omnimux-products-modal-backdrop" onClick=\{onCancel\}/)
    assert.match(dialogJsx, /onClick=\{\(event\) => \{ event\.stopPropagation\(\) \}\}/)
  })

  it('keeps form submit / cancel wiring and forbids raw visible controls', () => {
    assert.match(dialogJsx, /onClick=\{\(\) => \{ onSubmit\(payload\(\)\) \}\}/)
    assert.match(dialogJsx, /export function ProductFormDialog\(\{ t, data, onAction \}\)/)
    assert.match(dialogJsx, /<CloseIcon size=\{14\} \/>/)
    assert.doesNotMatch(dialogJsx, /<button\b/)
    assert.doesNotMatch(dialogJsx, /<select\b/)
    assert.doesNotMatch(dialogJsx, /style=\{\{/)
  })

  it('ProductsStage wires both ProductFormDialog calls with data/onAction (not flat props)', () => {
    const callBlocks = [...stageJsx.matchAll(/<ProductFormDialog[\s\S]*?\/>/g)].map((m) => m[0])
    assert.equal(callBlocks.length, 2, `expected 2 ProductFormDialog calls, got ${String(callBlocks.length)}`)
    for (const block of callBlocks) {
      assert.match(block, /data=\{\{/)
      assert.match(block, /onAction=\{\{/)
      assert.match(block, /onPick:\s*handlePick/)
      assert.doesNotMatch(block, /onPickPath=/)
      assert.doesNotMatch(block, /onSave=/)
      assert.doesNotMatch(block, /onClose=/)
      assert.doesNotMatch(block, /\bproduct=\{/)
    }
    assert.match(stageJsx, /mode:\s*'create'/)
    assert.match(stageJsx, /mode:\s*'edit'/)
  })
})
