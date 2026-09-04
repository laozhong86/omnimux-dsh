import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { INSPIRATION_CSS } from './styles.js'
import { en, zh } from './locales.js'

const here = dirname(fileURLToPath(import.meta.url))

/**
 * Pull one CSS rule body (inner declarations only) for an exact selector.
 * @param {string} css
 * @param {string} selector
 */
function ruleBody(css, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const match = css.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`))
  assert.ok(match, `missing selector ${selector}`)
  return match[1]
}

/**
 * @param {string} body
 * @param {string} property
 */
function decl(body, property) {
  const match = body.match(new RegExp(`${property}\\s*:\\s*([^;]+);`))
  assert.ok(match, `missing ${property} in ${body}`)
  return match[1].trim()
}

describe('inspiration modal segmented switch', () => {
  it('keeps the track at 32px with overflow clipping so the inner pill cannot burst', () => {
    const body = ruleBody(INSPIRATION_CSS, '.omnimux-inspiration-switch-group')
    assert.equal(decl(body, 'display'), 'inline-flex')
    assert.equal(decl(body, 'height'), '32px')
    assert.equal(decl(body, 'overflow'), 'hidden')
    assert.equal(decl(body, 'border-radius'), '9999px')
    assert.equal(decl(body, 'padding'), '1px')
  })

  it('locks inner tabs to the 28px compact variant inside the track', () => {
    const body = ruleBody(
      INSPIRATION_CSS,
      '.omnimux-inspiration-switch-group > .omnimux-inspiration-switch-btn',
    )
    assert.equal(decl(body, 'height'), '28px')
    assert.equal(decl(body, 'min-height'), '28px')
    assert.equal(decl(body, 'max-height'), '28px')
    assert.equal(decl(body, 'border-radius'), '9999px')
    assert.equal(decl(body, 'border'), 'none')
    assert.equal(decl(body, 'transform'), 'none')
  })

  it('does not use the illegal 26px height that used to overflow the capsule', () => {
    const body = ruleBody(
      INSPIRATION_CSS,
      '.omnimux-inspiration-switch-group > .omnimux-inspiration-switch-btn',
    )
    assert.notEqual(decl(body, 'height'), '26px')
  })

  it('renders native tab buttons instead of dsh-ui-kit Button so kit geometry cannot win', () => {
    const section = readFileSync(join(here, 'InspirationPreviewModal.jsx'), 'utf8')
    const switchBlock = section.slice(
      section.indexOf('omnimux-inspiration-preview-switch'),
      section.indexOf('omnimux-inspiration-preview-player'),
    )
    assert.match(switchBlock, /role="tablist"/)
    assert.match(switchBlock, /role="tab"/)
    assert.match(switchBlock, /<button\s+type="button"/)
    assert.doesNotMatch(switchBlock, /<Button[\s\S]*omnimux-inspiration-switch-btn/)
  })

  it('uses 16px glyphs and forbids the 13px lucide layers polyline blob', () => {
    const section = readFileSync(join(here, 'InspirationPreviewModal.jsx'), 'utf8')
    const switchBlock = section.slice(
      section.indexOf('omnimux-inspiration-preview-switch'),
      section.indexOf('omnimux-inspiration-preview-player'),
    )
    assert.doesNotMatch(switchBlock, /polyline points="2 17"/)
    assert.doesNotMatch(switchBlock, /polygon points="12 2/)
    assert.doesNotMatch(switchBlock, /strokeWidth="2"/)
    assert.doesNotMatch(switchBlock, /width="13"/)
    assert.match(switchBlock, /width="16"/)
    assert.match(switchBlock, /d="M2 5 8 2\.2 14 5"/)
    const svgRule = ruleBody(
      INSPIRATION_CSS,
      '.omnimux-inspiration-switch-group > .omnimux-inspiration-switch-btn svg',
    )
    assert.equal(decl(svgRule, 'width'), '16px')
    assert.equal(decl(svgRule, 'height'), '16px')
  })
})

describe('locale dictionaries', () => {
  it('keeps zh/en key sets aligned including the switch aria-label', () => {
    assert.deepEqual(Object.keys(zh).sort(), Object.keys(en).sort())
    assert.ok(zh['view.switch'] && en['view.switch'])
    assert.equal(zh['view.player'], '作品')
    assert.equal(zh['view.deconstruct'], '作品解析')
    assert.equal(zh['card.cta.try'], '一键复刻')
    assert.equal(zh['card.cta.tryFull'], '一键复刻')
    assert.equal(zh['card.cta.detail'], '查看')
    assert.equal(en['card.cta.try'], 'Replicate')
    assert.equal(en['card.cta.tryFull'], 'One-click replicate')
    assert.equal(zh['card.cta.noSession'], '请先新建或打开一个会话')
    assert.doesNotMatch(zh['card.cta.try'], /加会话/)
    assert.doesNotMatch(en['card.cta.try'], /Add to chat/)
    assert.doesNotMatch(zh['card.cta.addToConversation'], /添加到会话/)
  })
})

describe('hover overlay CTA', () => {
  it('lets the CTA row receive pointer events and uses 28px / pill geometry', () => {
    const row = ruleBody(INSPIRATION_CSS, '.omnimux-inspiration-overlay-cta')
    assert.equal(decl(row, 'pointer-events'), 'auto')
    assert.equal(decl(row, 'width'), '100%')
    assert.equal(decl(row, 'gap'), '6px')
    assert.equal(decl(row, 'flex-wrap'), 'nowrap')
    const btn = ruleBody(INSPIRATION_CSS, '.omnimux-inspiration-overlay-cta-btn')
    assert.equal(decl(btn, 'flex'), '1 1 0')
    assert.equal(decl(btn, 'height'), '28px')
    assert.equal(decl(btn, 'padding'), '0 6px')
    assert.equal(decl(btn, 'border-radius'), '9999px')
    assert.equal(decl(btn, 'font'), '550 12px/16px inherit')
    assert.doesNotMatch(INSPIRATION_CSS, /👁|💬/)
  })

  it('locks CoverCard to onReplicate only with replicate SVG and tryFull aria', () => {
    const cover = readFileSync(join(here, 'InspirationCoverCard.jsx'), 'utf8')
    assert.doesNotMatch(cover, /omnimux:add-to-conversation/)
    assert.doesNotMatch(cover, /clipboard/)
    assert.doesNotMatch(cover, /加会话/)
    assert.doesNotMatch(cover, /添加到会话/)
    assert.match(cover, /ICON_REPLICATE/)
    assert.match(cover, /t\('card\.cta\.tryFull'\)/)
    assert.match(cover, /t\('card\.cta\.try'\)/)
    assert.match(cover, /<rect x="8" y="8"/)
  })
})

describe('one-click replicate source isolation', () => {
  const files = [
    'replicate-to-chat.js',
    'InspirationCoverCard.jsx',
    'InspirationPreviewModal.jsx',
    'InspirationDetailModal.jsx',
    'use-inspiration-feed.js',
    'InspirationSection.jsx',
  ]

  it('forbids startReplicationProject / waitForWorkflowGlobal / workflow import / runNewProject', () => {
    for (const name of files) {
      const src = readFileSync(join(here, name), 'utf8')
      assert.doesNotMatch(src, /startReplicationProject/, name)
      assert.doesNotMatch(src, /waitForWorkflowGlobal/, name)
      assert.doesNotMatch(src, /omnimux-workflow/, name)
      assert.doesNotMatch(src, /runNewProject/, name)
    }
  })

  it('forbids this-CTA clipboard.writeText on CoverCard / Preview / orchestrator', () => {
    for (const name of ['replicate-to-chat.js', 'InspirationCoverCard.jsx', 'InspirationPreviewModal.jsx']) {
      const src = readFileSync(join(here, name), 'utf8')
      assert.doesNotMatch(src, /clipboard\.writeText/, name)
    }
  })

  it('keeps Preview/Detail primary CTA on card.cta.try and does not fallback 添加到会话', () => {
    const preview = readFileSync(join(here, 'InspirationPreviewModal.jsx'), 'utf8')
    const detail = readFileSync(join(here, 'InspirationDetailModal.jsx'), 'utf8')
    const section = readFileSync(join(here, 'InspirationSection.jsx'), 'utf8')
    assert.match(preview, /t\('card\.cta\.try'\)/)
    assert.match(preview, /onReplicate/)
    assert.match(detail, /t\('card\.cta\.try'\)/)
    assert.doesNotMatch(detail, /添加到会话/)
    assert.doesNotMatch(detail, /MessageSquarePlus/)
    assert.match(section, /onReplicate=\{handleReplicate\}/)
  })
})
