import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  inferKindFromExtension,
  inferKindFromName,
  remainingQuota,
  toggleSelect,
} from './kind.js'

describe('composer-add picker quota', () => {
  it('allows one more selection when 7 of 8 seats are occupied', () => {
    const first = toggleSelect({
      selected: new Set(),
      id: 'ast_new',
      occupied: 7,
      alreadyIds: [],
    })
    assert.equal(first.blocked, null)
    assert.equal(first.selected.has('ast_new'), true)
    const second = toggleSelect({
      selected: first.selected,
      id: 'ast_two',
      occupied: 7,
      alreadyIds: [],
    })
    assert.equal(second.blocked, 'quota-exceeded')
    assert.equal(second.selected.has('ast_two'), false)
  })

  it('does not re-select already-added assets', () => {
    const next = toggleSelect({
      selected: new Set(),
      id: 'ast_old',
      occupied: 1,
      alreadyIds: ['ast_old'],
    })
    assert.equal(next.blocked, 'already-added')
    assert.equal(next.selected.size, 0)
  })

  it('remaining is 0 at capacity but browsing is still allowed', () => {
    const quota = remainingQuota({ occupied: 8, selectedCount: 0 })
    assert.equal(quota.remaining, 0)
    assert.equal(quota.canSelectMore, false)
  })
})

describe('kind inference', () => {
  it('maps common extensions', () => {
    assert.equal(inferKindFromExtension('PNG'), 'image')
    assert.equal(inferKindFromName('clip.mov'), 'video')
    assert.equal(inferKindFromName('voice.m4a'), 'audio')
    assert.equal(inferKindFromName('sheet.csv'), 'table')
    assert.equal(inferKindFromName('brief.pdf'), 'document')
  })
})
