import { useCallback, useEffect, useRef, useState } from 'react'
import {
  batchDeleteLocalInspirations,
  getInspirationCache,
  loadInspirationsAtomic,
  setInspirationCache,
  whenAuthReady,
} from './api.js'
import { replicateInspirationToChat } from './replicate-to-chat.js'

/**
 * Pagination, tab/filter loading, selection and replicate busy state
 * for the inspiration grid. Extracted from InspirationSection.
 */
export function useInspirationFeed({ active }) {
  const [tab, setTab] = useState('all')
  const [q, setQ] = useState('')
  const [type, setType] = useState('')
  const [sort, setSort] = useState('hot')
  const [favorite, setFavorite] = useState('0')

  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [phase, setPhase] = useState('loading')
  const [error, setError] = useState(null)

  const [selectedItem, setSelectedItem] = useState(null)
  const [importOpen, setImportOpen] = useState(false)
  const [selectedIds, setSelectedIds] = useState(() => new Set())
  const [pendingRemove, setPendingRemove] = useState(null)
  const [removing, setRemoving] = useState(false)
  const [replicateBusy, setReplicateBusy] = useState(null)
  const [ctaStatus, setCtaStatus] = useState(null)
  const ctaStatusTimer = useRef(null)
  const replicateBusyRef = useRef(null)
  const sentinelRef = useRef(null)

  useEffect(() => () => {
    if (ctaStatusTimer.current) clearTimeout(ctaStatusTimer.current)
  }, [])

  const flashCtaStatus = useCallback((key) => {
    if (ctaStatusTimer.current) clearTimeout(ctaStatusTimer.current)
    setCtaStatus(key)
    if (key) {
      ctaStatusTimer.current = setTimeout(() => setCtaStatus(null), 2000)
    }
  }, [])

  const handleReplicate = useCallback((row) => {
    if (replicateBusyRef.current) return
    const ticket = row.id
    replicateBusyRef.current = ticket
    setReplicateBusy(ticket)
    void replicateInspirationToChat(row, {
      onStatus(key) {
        if (key && key !== 'card.cta.replicating') flashCtaStatus(key)
        if (key === 'card.cta.replicating') setCtaStatus(key)
        if (key == null) setCtaStatus(null)
      },
    }).finally(() => {
      if (replicateBusyRef.current === ticket) {
        replicateBusyRef.current = null
        setReplicateBusy(null)
      }
    })
  }, [flashCtaStatus])

  const selectedCount = selectedIds.size
  const selecting = selectedCount > 0

  const toggleSelect = useCallback((row) => {
    if (!row.is_local) return
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(row.id)) next.delete(row.id)
      else next.add(row.id)
      return next
    })
  }, [])

  const selectAllLocal = useCallback(() => {
    const localIds = items.filter((it) => it.is_local).map((it) => it.id)
    setSelectedIds(new Set(localIds))
  }, [items])

  const clearSelection = useCallback(() => {
    setSelectedIds(new Set())
  }, [])

  const handleConfirmBatchRemove = async () => {
    if (!pendingRemove || !pendingRemove.ids.length) return
    setRemoving(true)
    try {
      await batchDeleteLocalInspirations(pendingRemove.ids)
      const removedSet = new Set(pendingRemove.ids)
      setItems((prev) => prev.filter((it) => !removedSet.has(it.id)))
      setSelectedIds((prev) => {
        const next = new Set(prev)
        for (const id of removedSet) next.delete(id)
        return next
      })
      if (selectedItem && removedSet.has(selectedItem.id)) {
        setSelectedItem(null)
      }
      setPendingRemove(null)
    } catch (err) {
      console.error('Failed to delete local inspirations:', err)
    } finally {
      setRemoving(false)
    }
  }

  const loadData = useCallback(async (isNextPage = false) => {
    const targetPage = isNextPage ? page + 1 : 1
    const cacheKey = `insp:${tab}:${q}:${type}:${sort}:${favorite}`

    if (!isNextPage) {
      const cached = getInspirationCache(cacheKey)
      if (cached) {
        setItems(cached.data.items)
        setHasMore(cached.data.hasMore)
        setPhase(cached.data.phase)
        setLoading(false)
        if (!cached.isStale) return
      } else {
        setLoading(true)
      }
    } else {
      setLoadingMore(true)
    }

    try {
      const result = await loadInspirationsAtomic({
        tab,
        q,
        type,
        sort,
        favorite,
        page: targetPage,
        pageSize: 20,
      })

      if (isNextPage) {
        setItems((prev) => [...prev, ...result.items])
        setPage(targetPage)
        setHasMore(result.hasMore)
      } else {
        setItems(result.items)
        setPage(1)
        setHasMore(result.hasMore)
        setPhase(result.phase)
        setInspirationCache(cacheKey, result)
      }
      setError(null)
    } catch (err) {
      setError(String(err.message || err))
      if (!isNextPage && items.length === 0) setPhase('ready')
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [tab, q, type, sort, favorite, page, items.length])

  useEffect(() => {
    if (!active) return
    loadData(false)
  }, [active, tab, q, type, sort, favorite])

  useEffect(() => {
    return whenAuthReady(() => {
      loadData(false)
    })
  }, [])

  useEffect(() => {
    if (!sentinelRef.current || !hasMore || loading || loadingMore) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading && !loadingMore) {
        loadData(true)
      }
    }, { rootMargin: '200px' })

    observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [hasMore, loading, loadingMore, loadData])

  const handleImportSuccess = (newItem) => {
    setItems((prev) => [newItem, ...prev])
    setSelectedItem(newItem)
  }

  const handleItemUpdated = (updatedItem) => {
    setItems((prev) => prev.map((it) => (it.id === updatedItem.id ? updatedItem : it)))
    setSelectedItem(updatedItem)
  }

  return {
    tab, setTab,
    q, setQ,
    type, setType,
    sort, setSort,
    favorite, setFavorite,
    items,
    hasMore,
    loading,
    loadingMore,
    phase,
    error,
    selectedItem, setSelectedItem,
    importOpen, setImportOpen,
    selectedIds,
    pendingRemove, setPendingRemove,
    removing,
    replicateBusy,
    ctaStatus,
    sentinelRef,
    selectedCount,
    selecting,
    handleReplicate,
    toggleSelect,
    selectAllLocal,
    clearSelection,
    handleConfirmBatchRemove,
    handleImportSuccess,
    handleItemUpdated,
  }
}
