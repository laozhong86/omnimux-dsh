import assert from 'node:assert/strict'
import { test } from 'node:test'
import { assertBrandConfig, Config, parseBrandConfig } from './config.js'
import { DEFAULT_CONFIG } from './defaults.js'

test('parseBrandConfig fills OmniMux defaults', () => {
  const parsed = parseBrandConfig({})
  assert.equal(parsed.productName, DEFAULT_CONFIG.productName)
  assert.equal(parsed.wordmarkText, DEFAULT_CONFIG.wordmarkText)
  assert.equal(parsed.replaceHeroMark, true)
  assert.equal(parsed.hidePreviewBadge, true)
  assert.equal(parsed.rewriteWelcome, true)
  assert.ok(parsed.logoSvg.includes('<svg'))
})

test('Config Standard Schema accepts empty input', () => {
  const result = Config['~standard'].validate({})
  assert.ok('value' in result)
  assert.equal(result.value.productName, 'OmniMux')
})

test('Config Standard Schema rejects a non-svg logo', () => {
  const result = Config['~standard'].validate({ logoSvg: 'not-a-mark' })
  assert.ok('issues' in result)
  assert.match(result.issues[0]?.message ?? '', /logoSvg must contain an <svg> document/)
})

test('assertBrandConfig rejects an empty product name', () => {
  assert.throws(
    () => assertBrandConfig({ ...DEFAULT_CONFIG, productName: '   ' }),
    /productName must be a non-empty string/,
  )
})
