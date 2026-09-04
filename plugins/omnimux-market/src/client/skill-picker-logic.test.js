import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  CREATE_SKILL,
  PLAZA_INTENT_KEY,
  appendSkillGesture,
  buildSearchPayload,
  consumePlazaIntent,
  filterPickerItems,
  installPayload,
  skillGesture,
  writePlazaIntent,
  loadPickerSearch,
  peekPickerCache,
  pickerCacheKey,
  writePickerCache,
  PICKER_CACHE_TTL_MS,
} from './skill-picker-logic.js'

describe('skill picker logic', () => {
  it('builds /slug gestures with a trailing space', () => {
    assert.equal(skillGesture({ skill: 'audiobook' }), '/audiobook ')
    assert.equal(skillGesture({ slug: 'storyboard' }), '/storyboard ')
    assert.equal(skillGesture({ skill: '/clip-export' }), '/clip-export ')
    assert.equal(skillGesture({}), '')
  })

  it('appends the gesture after existing draft text', () => {
    assert.equal(appendSkillGesture('', '/audiobook '), '/audiobook ')
    assert.equal(appendSkillGesture('hello', '/audiobook '), 'hello /audiobook ')
    assert.equal(appendSkillGesture('hello ', '/audiobook '), 'hello /audiobook ')
  })

  it('uses custom channel for featured and tag query for domain tabs', () => {
    assert.deepEqual(buildSearchPayload('all', ''), { query: '', limit: 20, offset: 0 })
    assert.deepEqual(buildSearchPayload('featured', '分镜'), {
      query: '分镜',
      limit: 20,
      offset: 0,
      channels: ['custom'],
    })
    assert.deepEqual(buildSearchPayload('短剧漫剧', ''), {
      query: '短剧漫剧',
      limit: 20,
      offset: 0,
    })
    assert.deepEqual(buildSearchPayload('短剧漫剧', '分镜'), {
      query: '分镜 短剧漫剧',
      limit: 20,
      offset: 0,
    })
  })

  it('filters mine / domain tabs without dropping all/featured lists', () => {
    const items = [
      { slug: 'a', installed: true, tags: ['短剧漫剧'] },
      { slug: 'b', installed: false, name: '专业影视配乐', tags: [] },
      { slug: 'c', installed: false, tags: ['动画'] },
    ]
    assert.deepEqual(filterPickerItems(items, 'mine').map((it) => it.slug), ['a'])
    assert.deepEqual(filterPickerItems(items, '短剧漫剧').map((it) => it.slug), ['a'])
    assert.deepEqual(filterPickerItems(items, '专业影视').map((it) => it.slug), ['b'])
    assert.equal(filterPickerItems(items, 'all').length, 3)
  })

  it('installs only when the card is not already installed', () => {
    assert.equal(installPayload({ slug: 'audiobook', installed: true }), null)
    assert.deepEqual(
      installPayload({ slug: 'audiobook', id: 'sk-omx-audiobook', installed: false }),
      { slug: 'audiobook', catalogId: 'sk-omx-audiobook' },
    )
    assert.deepEqual(installPayload({ slug: 'drama-soundtrack' }), { slug: 'drama-soundtrack' })
  })

  it('create-skill identity is sk-omx-skill-creator / skill-creator', () => {
    assert.equal(CREATE_SKILL.id, 'sk-omx-skill-creator')
    assert.equal(skillGesture(CREATE_SKILL), '/skill-creator ')
    assert.notEqual(CREATE_SKILL.id, 'sk-skill-creator')
  })

  it('writes and consumes plaza skills intent once', () => {
    const store = new Map()
    const storage = {
      setItem(k, v) { store.set(k, v) },
      getItem(k) { return store.has(k) ? store.get(k) : null },
      removeItem(k) { store.delete(k) },
    }
    assert.equal(writePlazaIntent('skills', storage), 'skills')
    assert.equal(store.get(PLAZA_INTENT_KEY), JSON.stringify({ tab: 'skills' }))
    assert.equal(consumePlazaIntent(storage), 'skills')
    assert.equal(consumePlazaIntent(storage), null)
  })

  it('picker cache returns hits within TTL and misses after expiry', () => {
    const cache = new Map()
    const key = pickerCacheKey({ query: '', limit: 20 })
    const body = { items: [{ slug: 'audiobook' }] }
    writePickerCache(cache, key, body, 1_000)
    assert.deepEqual(peekPickerCache(cache, key, 1_000 + 1_000), body)
    assert.equal(peekPickerCache(cache, key, 1_000 + PICKER_CACHE_TTL_MS), null)
  })

  it('loadPickerSearch skips fetch on cache hit and dedupes inflight', async () => {
    const cache = new Map()
    const inflight = new Map()
    let calls = 0
    const fetchSearch = async () => {
      calls += 1
      return { items: [{ slug: 'a' }], ok: true }
    }
    const first = loadPickerSearch({ query: '' }, { cache, inflight, fetchSearch, now: 10 })
    const second = loadPickerSearch({ query: '' }, { cache, inflight, fetchSearch, now: 10 })
    const [a, b] = await Promise.all([first, second])
    assert.equal(calls, 1)
    assert.equal(a.fromCache, false)
    assert.equal(b.fromCache, false)
    const cached = await loadPickerSearch({ query: '' }, { cache, inflight, fetchSearch, now: 20 })
    assert.equal(calls, 1)
    assert.equal(cached.fromCache, true)
    assert.equal(cached.body.items[0].slug, 'a')
  })
})
