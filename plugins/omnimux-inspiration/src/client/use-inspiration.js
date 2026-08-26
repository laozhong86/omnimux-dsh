import { useCallback, useEffect, useState } from 'react'
import { listInspirationsGuarded, whenAuthReady } from './api.js'
import { errorMessage, pickList } from '../view.js'

/** @type {{ phase: 'loading' | 'ready' | 'need-login', items: Array<Record<string, unknown>>, total: number }} */
const sessionCache = { phase: 'loading', items: [], total: 0 }

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
  }, [])

  const refresh = useCallback(() => {
    return listInspirationsGuarded(filters).then(apply).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
      sessionCache.phase = 'ready'
      setPhase('ready')
    })
  }, [apply, filters.type, filters.q, filters.is_favorite, filters.sort])

  useEffect(() => {
    void refresh()
  }, [refresh])

  useEffect(() => whenAuthReady(() => { void refresh() }), [refresh])

  return { phase, items, total, error, refresh }
}
