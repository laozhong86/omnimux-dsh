import { useCallback, useEffect, useState } from 'react'
import { listInspirationsGuarded, whenAuthReady } from './api.js'
import { errorMessage, pickList } from '../view.js'

const CACHE_KEY = 'omnimux_inspiration_cache_v1'

/**
 * Read persistent cache from localStorage if available
 */
function readPersistentCache() {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { items: [], total: 0 }
  }
  try {
    const raw = window.localStorage.getItem(CACHE_KEY)
    if (!raw) return { items: [], total: 0 }
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed.items) && typeof parsed.total === 'number') {
      return { items: parsed.items, total: parsed.total }
    }
  } catch {
    // ignore corrupted cache
  }
  return { items: [], total: 0 }
}

/**
 * Write cache to localStorage
 */
function writePersistentCache(items, total) {
  if (typeof window === 'undefined' || !window.localStorage) return
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify({ items, total, time: Date.now() }))
  } catch {
    // ignore quota errors
  }
}

const initialCache = readPersistentCache()

/** @type {{ phase: 'loading' | 'ready' | 'need-login', items: Array<Record<string, unknown>>, total: number }} */
const sessionCache = {
  phase: initialCache.items.length > 0 ? 'ready' : 'loading',
  items: initialCache.items,
  total: initialCache.total,
}

/**
 * @param {{ type?: string, q?: string, is_favorite?: string, sort?: string }} filters
 */
export function useInspiration(filters) {
  const [phase, setPhase] = useState(sessionCache.phase)
  const [items, setItems] = useState(sessionCache.items)
  const [total, setTotal] = useState(sessionCache.total)
  const [error, setError] = useState('')

  const apply = useCallback((result) => {
    if (result.status === 401) {
      sessionCache.phase = 'need-login'
      sessionCache.items = []
      sessionCache.total = 0
      setPhase('need-login')
      setItems([])
      setTotal(0)
      return
    }
    if (!result.ok) {
      setError(errorMessage(result.body, result.status))
      sessionCache.phase = 'ready'
      setPhase('ready')
      return
    }
    const picked = pickList(result.body)
    setError('')
    sessionCache.phase = 'ready'
    sessionCache.items = picked.items
    sessionCache.total = picked.total
    setPhase('ready')
    setItems(picked.items)
    setTotal(picked.total)
    writePersistentCache(picked.items, picked.total)
  }, [])

  const refresh = useCallback(() => {
    return listInspirationsGuarded(filters).then(apply).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
      sessionCache.phase = 'ready'
      setPhase('ready')
    })
  }, [apply, filters])

  useEffect(() => {
    void refresh()
  }, [refresh])

  useEffect(() => whenAuthReady(() => { void refresh() }), [refresh])

  return { phase, items, total, error, refresh }
}
