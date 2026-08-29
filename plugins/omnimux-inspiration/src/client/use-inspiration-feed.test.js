import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  applyCachedPage,
  cacheKeyOf,
  checkCacheEarlyReturn,
  createReplicateStatusHandler,
  extractLocalItemIds,
  filterOutItemsByIds,
  mergeFetchResult,
  removeIdsFromSet,
  resetReplicateBusy,
  toggleIdInSet,
  updateItemInList,
} from './feed-helpers.js'

describe('use-inspiration-feed pure helpers', () => {
  describe('cacheKeyOf', () => {
    it('constructs standard cache key from positional arguments', () => {
      const key = cacheKeyOf('all', 'dance', 'video', 'hot', '0')
      assert.equal(key, 'insp:all:dance:video:hot:0')
    })

    it('applies defaults for missing arguments', () => {
      const key = cacheKeyOf()
      assert.equal(key, 'insp:all:::hot:0')
    })

    it('accepts options object parameter', () => {
      const key = cacheKeyOf({
        tab: 'local',
        q: 'fashion',
        type: 'image',
        sort: 'new',
        favorite: '1',
      })
      assert.equal(key, 'insp:local:fashion:image:new:1')
    })
  })

  describe('applyCachedPage', () => {
    it('returns false when cached is null or undefined', () => {
      assert.equal(applyCachedPage(null, {}), false)
      assert.equal(applyCachedPage(undefined, {}), false)
      assert.equal(applyCachedPage({}, {}), false)
    })

    it('applies cached data to setters and returns true for fresh cache', () => {
      let itemsVal = null
      let hasMoreVal = null
      let phaseVal = null
      let loadingVal = null

      const cached = {
        isStale: false,
        data: {
          items: [{ id: '1', title: 'test' }],
          hasMore: true,
          phase: 'ready',
        },
      }

      const isFresh = applyCachedPage(cached, {
        setItems: (val) => { itemsVal = val },
        setHasMore: (val) => { hasMoreVal = val },
        setPhase: (val) => { phaseVal = val },
        setLoading: (val) => { loadingVal = val },
      })

      assert.equal(isFresh, true)
      assert.deepEqual(itemsVal, [{ id: '1', title: 'test' }])
      assert.equal(hasMoreVal, true)
      assert.equal(phaseVal, 'ready')
      assert.equal(loadingVal, false)
    })

    it('returns false for stale cache but still applies cached data', () => {
      let itemsVal = null
      const cached = {
        isStale: true,
        data: {
          items: [{ id: '2' }],
          hasMore: false,
          phase: 'ready',
        },
      }

      const isFresh = applyCachedPage(cached, {
        setItems: (val) => { itemsVal = val },
      })

      assert.equal(isFresh, false)
      assert.deepEqual(itemsVal, [{ id: '2' }])
    })
  })

  describe('mergeFetchResult', () => {
    it('handles first page result and resets error', () => {
      let itemsVal = null
      let pageVal = null
      let hasMoreVal = null
      let phaseVal = null
      let errorVal = 'prior-error'

      const result = {
        items: [{ id: 'a' }, { id: 'b' }],
        hasMore: true,
        phase: 'ready',
      }

      mergeFetchResult({
        isNextPage: false,
        result,
        setters: {
          setItems: (val) => { itemsVal = val },
          setPage: (val) => { pageVal = val },
          setHasMore: (val) => { hasMoreVal = val },
          setPhase: (val) => { phaseVal = val },
          setError: (val) => { errorVal = val },
        },
      })

      assert.deepEqual(itemsVal, [{ id: 'a' }, { id: 'b' }])
      assert.equal(pageVal, 1)
      assert.equal(hasMoreVal, true)
      assert.equal(phaseVal, 'ready')
      assert.equal(errorVal, null)
    })

    it('handles next page result by appending items', () => {
      let itemsUpdater = null
      let pageVal = null
      let hasMoreVal = null
      let errorVal = 'prior-error'

      const result = {
        items: [{ id: 'c' }],
        hasMore: false,
      }

      mergeFetchResult({
        isNextPage: true,
        result,
        targetPage: 3,
        setters: {
          setItems: (fn) => { itemsUpdater = fn },
          setPage: (val) => { pageVal = val },
          setHasMore: (val) => { hasMoreVal = val },
          setError: (val) => { errorVal = val },
        },
      })

      assert.equal(typeof itemsUpdater, 'function')
      assert.deepEqual(itemsUpdater([{ id: 'a' }, { id: 'b' }]), [
        { id: 'a' },
        { id: 'b' },
        { id: 'c' },
      ])
      assert.equal(pageVal, 3)
      assert.equal(hasMoreVal, false)
      assert.equal(errorVal, null)
    })
  })

  describe('selection and list helpers', () => {
    it('toggleIdInSet adds and removes ids immutably', () => {
      const s1 = new Set(['1', '2'])
      const s2 = toggleIdInSet(s1, '3')
      assert.deepEqual(Array.from(s2), ['1', '2', '3'])
      assert.deepEqual(Array.from(s1), ['1', '2'])

      const s3 = toggleIdInSet(s2, '2')
      assert.deepEqual(Array.from(s3), ['1', '3'])
    })

    it('removeIdsFromSet removes multiple ids', () => {
      const initial = new Set(['1', '2', '3', '4'])
      const next = removeIdsFromSet(initial, ['2', '4'])
      assert.deepEqual(Array.from(next), ['1', '3'])
      assert.equal(initial.size, 4)
    })

    it('filterOutItemsByIds filters items by id list', () => {
      const items = [{ id: '1' }, { id: '2' }, { id: '3' }]
      const filtered = filterOutItemsByIds(items, ['2', '3'])
      assert.deepEqual(filtered, [{ id: '1' }])
    })

    it('extractLocalItemIds returns only ids of local items', () => {
      const items = [
        { id: '1', is_local: true },
        { id: '2', is_local: false },
        { id: '3', is_local: true },
      ]
      assert.deepEqual(extractLocalItemIds(items), ['1', '3'])
    })

    it('updateItemInList replaces matched item and leaves others intact', () => {
      const items = [{ id: '1', title: 'old' }, { id: '2', title: 'keep' }]
      const updated = updateItemInList(items, { id: '1', title: 'new' })
      assert.deepEqual(updated, [{ id: '1', title: 'new' }, { id: '2', title: 'keep' }])
    })
  })

  describe('createReplicateStatusHandler', () => {
    it('sets status directly for replicating card action', () => {
      let ctaVal = null
      let flashVal = null
      const handler = createReplicateStatusHandler(
        (key) => { flashVal = key },
        (key) => { ctaVal = key },
      )

      handler('card.cta.replicating')
      assert.equal(ctaVal, 'card.cta.replicating')
      assert.equal(flashVal, null)
    })

    it('resets ctaStatus for null', () => {
      let ctaVal = 'active'
      const handler = createReplicateStatusHandler(
        () => {},
        (key) => { ctaVal = key },
      )

      handler(null)
      assert.equal(ctaVal, null)
    })

    it('flashes status for other keys', () => {
      let flashVal = null
      const handler = createReplicateStatusHandler(
        (key) => { flashVal = key },
        () => {},
      )

      handler('card.cta.copied')
      assert.equal(flashVal, 'card.cta.copied')
    })
  })

  describe('resetReplicateBusy', () => {
    it('resets busy state only when ticket matches current ref', () => {
      const ref = { current: 'ticket-1' }
      let busy = 'ticket-1'
      resetReplicateBusy(ref, (val) => { busy = val }, 'ticket-2')
      assert.equal(ref.current, 'ticket-1')
      assert.equal(busy, 'ticket-1')

      resetReplicateBusy(ref, (val) => { busy = val }, 'ticket-1')
      assert.equal(ref.current, null)
      assert.equal(busy, null)
    })
  })

  describe('checkCacheEarlyReturn', () => {
    it('sets loading true when cache is completely missing', () => {
      let loadingVal = null
      const hit = checkCacheEarlyReturn('insp:test', {
        setLoading: (v) => { loadingVal = v },
      })
      assert.equal(hit, false)
      assert.equal(loadingVal, true)
    })
  })
})
