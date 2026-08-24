import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import {
  batchDeleteLocalInspirations,
  coverGlyph,
  deleteLocalInspiration,
  extractTikTokVideoId,
  getInspirationCache,
  importLocalInspiration,
  triggerAnalyzeInspiration,
  isUsableCoverSize,
  loadInspirationsAtomic,
  pickCoverSrc,
  resolveTikTokEmbedUrl,
  setInspirationCache,
  whenAuthReady,
} from './api.js'
import { ConfirmRemoveDialog } from './ConfirmRemoveDialog.jsx'
import { injectInspirationStyles } from './styles.js'

function LoginGate({ t }) {
  const login = () => {
    const gate = typeof window !== 'undefined' ? window.__omnimuxAuth : undefined
    if (gate && typeof gate.ensureLogin === 'function') gate.ensureLogin({})
  }
  return (
    <div className="omnimux-inspiration-gate">
      <h2 className="omnimux-inspiration-empty-title">{t('needLogin')}</h2>
      <p className="omnimux-inspiration-empty-text">{t('needLoginHint')}</p>
      <button type="button" className="omnimux-inspiration-btn" onClick={login}>{t('login')}</button>
    </div>
  )
}

function PureCoverCard({ row, t, onSelect, selected, onToggleSelect, selecting }) {
  const title = String(row.title || row.source_url || row.id)
  const cover = pickCoverSrc(row)
  const [broken, setBroken] = useState(!cover)
  useEffect(() => { setBroken(!cover) }, [cover])

  const platform = (row.source_platform || (row.is_local ? 'local' : 'tiktok')).toUpperCase()
  const isLocal = Boolean(row.is_local)

  const handleClick = (e) => {
    if (selecting && isLocal && onToggleSelect) {
      onToggleSelect(row)
      return
    }
    onSelect(row)
  }

  return (
    <article
      className="omnimux-inspiration-card-pure"
      aria-selected={selected ? 'true' : 'false'}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (selecting && isLocal && onToggleSelect) onToggleSelect(row)
          else onSelect(row)
        }
      }}
    >
      {/* 悬停/多选复选框 Checkbox */}
      {isLocal && onToggleSelect ? (
        <button
          type="button"
          className="omnimux-inspiration-card-check"
          data-selected={selected ? 'true' : 'false'}
          aria-label={t('select.toggle')}
          aria-pressed={selected ? 'true' : 'false'}
          onClick={(e) => {
            e.stopPropagation()
            onToggleSelect(row)
          }}
        >
          {selected ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : null}
        </button>
      ) : null}

      {/* 右上角平台/本地角标 */}
      <span className={`omnimux-inspiration-badge-platform ${isLocal ? 'local' : ''}`}>
        {isLocal ? '本地' : platform}
      </span>

      {broken ? (
        <div className="omnimux-inspiration-cover-fallback" aria-hidden="true">
          <div className="omnimux-inspiration-fallback-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <div className="omnimux-inspiration-fallback-title">
            {title.replace(/^https?:\/\/(www\.)?/, '')}
          </div>
        </div>
      ) : (
        <img
          className="omnimux-inspiration-cover-img"
          src={cover}
          alt={title}
          loading="lazy"
          decoding="async"
          onError={() => setBroken(true)}
          onLoad={(event) => {
            const node = event.currentTarget
            if (!isUsableCoverSize(node.naturalWidth, node.naturalHeight)) setBroken(true)
          }}
        />
      )}
      <div className="omnimux-inspiration-card-overlay">
        <div className="omnimux-inspiration-overlay-play">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="omnimux-inspiration-overlay-footer">
          {title.length > 32 ? `${title.slice(0, 32)}…` : title}
        </div>
      </div>
    </article>
  )
}

function InspirationModal({ row, t, onClose, onItemUpdated }) {
  if (!row) return null
  const [item, setItem] = useState(row)
  const [viewMode, setViewMode] = useState('player') // 'player' | 'deconstruct'
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzeError, setAnalyzeError] = useState(null)

  useEffect(() => {
    setItem(row)
  }, [row])

  const title = String(item.title || '灵感详情')
  const analysis = item.analysis && typeof item.analysis === 'object' ? item.analysis : (item.deconstruction || {})
  const rawEmbed = analysis.embed_player_url || item.source_url
  const embedUrl = resolveTikTokEmbedUrl(rawEmbed) || (item.source_url ? resolveTikTokEmbedUrl(item.source_url) : null)
  const cover = pickCoverSrc(item)
  const tags = Array.isArray(item.tags) ? item.tags : []
  const creator = analysis.creator || item.author || { name: 'Creator', handle: item.source_platform || 'social' }

  const localVideoUrl = item.local_paths?.video ? `/omnimux/inspiration/local/media/${encodeURIComponent(item.id)}/video.mp4` : null

  const hook = analysis.hook_highlight || analysis.hook || analysis['3s_hook'] || ''
  const targetGoal = analysis.target_goal || analysis.goal || ''
  const narrative = analysis.narrative_strategy || analysis.narrative || ''
  const breakdown = analysis.visual_breakdown || analysis.breakdown || analysis.content_breakdown || ''
  const replication = analysis.replication_action || analysis.replication_guide || ''
  const rawMarkdown = analysis.markdown || analysis.raw_markdown || (typeof item.deconstruction === 'string' ? item.deconstruction : '')

  const hasDeconstruction = Boolean(hook || targetGoal || narrative || breakdown || replication || rawMarkdown)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleTriggerAnalyze = async () => {
    if (analyzing || !item.id) return
    setAnalyzing(true)
    setAnalyzeError(null)
    try {
      const res = await triggerAnalyzeInspiration(item.id)
      if (res.ok && res.body?.data) {
        setItem(res.body.data)
        if (onItemUpdated) onItemUpdated(res.body.data)
        setViewMode('deconstruct')
      } else {
        setAnalyzeError(res.body?.error || '解析服务暂时不可用')
      }
    } catch (err) {
      setAnalyzeError(String(err.message || err))
    } finally {
      setAnalyzing(false)
    }
  }

  return (
    <div className="omnimux-inspiration-modal-backdrop" onClick={onClose}>
      <div className="omnimux-inspiration-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="omnimux-inspiration-modal-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="omnimux-inspiration-modal-container">
          {/* 左侧：大画幅视窗（作品 ↔ 作品解析） */}
          <div className="omnimux-inspiration-modal-left">
          {/* 模式切换 Header */}
          <div className="omnimux-inspiration-preview-switch">
            <div className="omnimux-inspiration-switch-group">
              <button
                type="button"
                className={`omnimux-inspiration-switch-btn ${viewMode === 'player' ? 'active' : ''}`}
                onClick={() => setViewMode('player')}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>{t('view.player')}</span>
              </button>
              <button
                type="button"
                className={`omnimux-inspiration-switch-btn ${viewMode === 'deconstruct' ? 'active' : ''}`}
                onClick={() => setViewMode('deconstruct')}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <span>{t('view.deconstruct')}</span>
              </button>
            </div>

            {hasDeconstruction ? (
              <span className="omnimux-inspiration-status-badge done">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{t('status.breakdownReady')}</span>
              </span>
            ) : analyzing ? (
              <span className="omnimux-inspiration-status-badge pending">
                <div className="omnimux-inspiration-spinner" style={{ width: '10px', height: '10px' }} />
                <span>{t('status.breakdownGenerating')}</span>
              </span>
            ) : null}
          </div>

          {/* 视窗内容 A：作品播放器 */}
          {viewMode === 'player' ? (
            <div className="omnimux-inspiration-preview-player">
              <div className="omnimux-inspiration-modal-player-box">
                {embedUrl ? (
                  <iframe
                    title={title}
                    src={embedUrl}
                    className="omnimux-inspiration-player-frame"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : localVideoUrl ? (
                  <video
                    src={localVideoUrl}
                    controls
                    autoPlay
                    className="omnimux-inspiration-player-frame"
                  />
                ) : cover ? (
                  <img src={cover} alt={title} className="omnimux-inspiration-modal-cover-bg" />
                ) : (
                  <div className="omnimux-inspiration-cover-fallback">
                    {coverGlyph(title)}
                  </div>
                )}
              </div>
            </div>
          ) : null}

          {/* 视窗内容 B：作品解析看板 */}
          {viewMode === 'deconstruct' ? (
            <div className="omnimux-inspiration-deconstruct-view">
              {hasDeconstruction ? (
                <div className="omnimux-inspiration-dim-content">
                  {hook ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.hook')}</h3>
                      </div>
                      <div className="omnimux-inspiration-dim-body">{hook}</div>
                    </div>
                  ) : null}

                  {targetGoal ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.goal')}</h3>
                      </div>
                      <div className="omnimux-inspiration-dim-body">{targetGoal}</div>
                    </div>
                  ) : null}

                  {narrative ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.narrative')}</h3>
                      </div>
                      <div className="omnimux-inspiration-dim-body">{narrative}</div>
                    </div>
                  ) : null}

                  {breakdown ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.visual')}</h3>
                      </div>
                      <div className="omnimux-inspiration-dim-body">{breakdown}</div>
                    </div>
                  ) : null}

                  {replication ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.replication')}</h3>
                      </div>
                      <div className="omnimux-inspiration-dim-body">{replication}</div>
                    </div>
                  ) : null}

                  {rawMarkdown && !hook && !targetGoal && !narrative && !breakdown && !replication ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.raw')}</h3>
                      </div>
                      <pre className="omnimux-inspiration-dim-code">{rawMarkdown}</pre>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="omnimux-inspiration-deconstruct-empty">
                  <div className="omnimux-inspiration-fallback-icon" style={{ width: '56px', height: '56px' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#ffffff' }}>
                      {analyzing ? t('empty.breakdownAnalyzing') : t('empty.breakdownTitle')}
                    </h3>
                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--omx-color-muted, #7c7c7c)' }}>
                      {t('empty.breakdownDesc')}
                    </p>
                  </div>
                  {analyzeError ? (
                    <div style={{ color: '#ef4444', fontSize: '12px' }}>{analyzeError}</div>
                  ) : null}
                  <button
                    type="button"
                    className="omnimux-inspiration-trigger-btn"
                    onClick={handleTriggerAnalyze}
                    disabled={analyzing}
                  >
                    {analyzing ? (
                      <>
                        <div className="omnimux-inspiration-spinner" style={{ width: '12px', height: '12px', borderTopColor: '#000' }} />
                        <span>正在解析…</span>
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        <span>立即解析</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>

        {/* 右侧：元数据信息面板（创作者、原帖链接、数据指标、标签） */}
        <div className="omnimux-inspiration-modal-right">
          {/* 创作者卡片 */}
          <div className="omnimux-inspiration-creator-card">
            <div className="omnimux-inspiration-creator-left">
              <div className="omnimux-inspiration-modal-avatar">
                {(creator.name || creator.handle || 'U').slice(0, 1).toUpperCase()}
              </div>
              <div>
                <div className="omnimux-inspiration-modal-handle">{creator.name || creator.handle || 'Creator'}</div>
                {creator.handle ? <div style={{ fontSize: '11px', color: 'var(--omx-color-muted, #7c7c7c)' }}>@{creator.handle}</div> : null}
              </div>
            </div>

            {item.source_url ? (
              <a
                href={item.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="omnimux-inspiration-modal-link"
              >
                <span>{t('openSource')}</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            ) : null}
          </div>

          {/* 互动数据 Stats 矩阵 */}
          {item.stats && Object.keys(item.stats).length > 0 ? (
            <div className="omnimux-inspiration-stats-grid">
              <div className="omnimux-inspiration-stat-item">
                <span className="omnimux-inspiration-stat-label">点赞</span>
                <span className="omnimux-inspiration-stat-val">{item.stats.likes ?? item.stats.digg_count ?? '-'}</span>
              </div>
              <div className="omnimux-inspiration-stat-item">
                <span className="omnimux-inspiration-stat-label">评论</span>
                <span className="omnimux-inspiration-stat-val">{item.stats.comments ?? item.stats.comment_count ?? '-'}</span>
              </div>
              <div className="omnimux-inspiration-stat-item">
                <span className="omnimux-inspiration-stat-label">分享</span>
                <span className="omnimux-inspiration-stat-val">{item.stats.shares ?? item.stats.share_count ?? '-'}</span>
              </div>
            </div>
          ) : null}

          {/* 标签 Tags */}
          {tags.length > 0 ? (
            <div className="omnimux-inspiration-modal-tags">
              {tags.map((tag) => (
                <span key={tag} className="omnimux-inspiration-modal-tag">#{tag}</span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      </div>
    </div>
  )
}

function ImportDialog({ open, t, onClose, onImported }) {
  const [url, setUrl] = useState('')
  const [tags, setTags] = useState('')
  const [autoAnalyze, setAutoAnalyze] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!open) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!url.trim()) return
    setLoading(true)
    setError(null)
    try {
      const tagList = tags.split(/[,，\s]+/).filter(Boolean)
      const res = await importLocalInspiration({
        url: url.trim(),
        tags: tagList,
        auto_analyze: autoAnalyze,
      })
      if (res.ok && res.body?.data) {
        onImported(res.body.data)
        onClose()
      } else if (res.status === 409 && res.body?.data) {
        // Anti-duplicate: navigate directly to existing item
        onImported(res.body.data)
        onClose()
      } else {
        setError(res.body?.error || t('add.error'))
      }
    } catch (err) {
      setError(String(err.message || err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="omnimux-inspiration-modal-backdrop" onClick={onClose}>
      <div className="omnimux-inspiration-import-modal" onClick={(e) => e.stopPropagation()}>
        <div className="omnimux-inspiration-import-header">
          <h2>{t('add.dialogTitle')}</h2>
          <button type="button" className="omnimux-inspiration-modal-close" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="omnimux-inspiration-import-body">
            {error ? <div style={{ color: '#ef4444', fontSize: '13px' }}>{error}</div> : null}
            <div>
              <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', color: 'var(--omx-color-muted, #7c7c7c)' }}>
                {t('add.urlLabel')}
              </label>
              <input
                type="url"
                required
                className="omnimux-inspiration-search"
                style={{ width: '100%' }}
                placeholder={t('add.urlPlaceholder')}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', color: 'var(--omx-color-muted, #7c7c7c)' }}>
                {t('add.tagsLabel')}
              </label>
              <input
                type="text"
                className="omnimux-inspiration-search"
                style={{ width: '100%' }}
                placeholder={t('add.tagsPlaceholder')}
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={autoAnalyze}
                onChange={(e) => setAutoAnalyze(e.target.checked)}
              />
              <span>{t('add.autoAnalyze')}</span>
            </label>
          </div>
          <div className="omnimux-inspiration-import-footer">
            <button type="button" className="omnimux-inspiration-select" onClick={onClose} disabled={loading}>
              {t('close')}
            </button>
            <button type="submit" className="omnimux-inspiration-btn" disabled={loading}>
              {loading ? t('add.importing') : t('add.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function EmptyState({ t, onOpenAdd }) {
  return (
    <div className="omnimux-inspiration-empty">
      <h2 className="omnimux-inspiration-empty-title">{t('empty.title')}</h2>
      <p className="omnimux-inspiration-empty-text">{t('empty.description')}</p>
      {onOpenAdd ? (
        <button type="button" className="omnimux-inspiration-btn" onClick={onOpenAdd} style={{ marginTop: '12px' }}>
          {t('add.btn')}
        </button>
      ) : null}
    </div>
  )
}

export function InspirationSection({ t, active }) {
  const [tab, setTab] = useState('all') // 'all' | 'local' | 'public'
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
  const sentinelRef = useRef(null)

  useEffect(() => {
    injectInspirationStyles()
  }, [])

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

  // SWR Atomic Data Loader
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

  // Initial load / Filter change
  useEffect(() => {
    if (!active) return
    loadData(false)
  }, [active, tab, q, type, sort, favorite])

  // Auth ready re-check
  useEffect(() => {
    return whenAuthReady(() => {
      loadData(false)
    })
  }, [])

  // Infinite Scroll Trigger via IntersectionObserver
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

  return (
    <div className="omnimux-inspiration-root">
      {/* 顶部 Tab 切换与操作 */}
      <div className="omnimux-inspiration-header">
        <div className="omnimux-inspiration-tabs">
          <button
            type="button"
            className={`omnimux-inspiration-tab ${tab === 'all' ? 'active' : ''}`}
            onClick={() => setTab('all')}
          >
            {t('tab.all')}
          </button>
          <button
            type="button"
            className={`omnimux-inspiration-tab ${tab === 'local' ? 'active' : ''}`}
            onClick={() => setTab('local')}
          >
            {t('tab.local')}
          </button>
          <button
            type="button"
            className={`omnimux-inspiration-tab ${tab === 'public' ? 'active' : ''}`}
            onClick={() => setTab('public')}
          >
            {t('tab.public')}
          </button>
        </div>

        <button
          type="button"
          className="omnimux-inspiration-btn-add"
          onClick={() => setImportOpen(true)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <span>{t('add.btn')}</span>
        </button>
      </div>

      {/* 极简发丝线工具栏 */}
      <div className="omnimux-inspiration-toolbar">
        <div className="omnimux-inspiration-search-box">
          <div className="omnimux-inspiration-search-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <input
            type="search"
            className="omnimux-inspiration-search"
            placeholder={t('filter.search')}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <div className="omnimux-inspiration-filters">
          <select
            className="omnimux-inspiration-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">{t('filter.type')} ({t('filter.all')})</option>
            <option value="video">{t('type.video')}</option>
            <option value="image">{t('type.image')}</option>
            <option value="link">{t('type.link')}</option>
          </select>
          <select
            className="omnimux-inspiration-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="hot">{t('sort.hot')}</option>
            <option value="new">{t('sort.new')}</option>
            <option value="fav">{t('sort.fav')}</option>
          </select>
          <select
            className="omnimux-inspiration-select"
            value={favorite}
            onChange={(e) => setFavorite(e.target.value)}
          >
            <option value="0">{t('favorite.off')}</option>
            <option value="1">{t('favorite.on')}</option>
          </select>

          <span className="omnimux-inspiration-count">
            {t('count', { n: items.length })}
          </span>
        </div>
      </div>

      {/* 多选批量操作悬浮条 */}
      {selecting ? (
        <div className="omnimux-inspiration-selection-bar">
          <div className="omnimux-inspiration-selection-count">
            <span>{t('select.count').replace('{n}', String(selectedCount))}</span>
          </div>
          <div className="omnimux-inspiration-selection-actions">
            <button
              type="button"
              className="omnimux-inspiration-btn-ghost"
              onClick={selectAllLocal}
            >
              {t('select.selectAll')}
            </button>
            <button
              type="button"
              className="omnimux-inspiration-btn-ghost"
              onClick={clearSelection}
            >
              {t('select.clear')}
            </button>
            <button
              type="button"
              disabled={removing}
              className="omnimux-inspiration-btn-danger"
              onClick={() => setPendingRemove({ ids: [...selectedIds], count: selectedCount })}
            >
              {t('select.delete').replace('{n}', String(selectedCount))}
            </button>
          </div>
        </div>
      ) : null}

      {/* 内容展示区：原子化骨架屏 / 登录门 / 空态 / 统一网格 */}
      {loading && items.length === 0 ? (
        <div className="omnimux-inspiration-skeleton">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="omnimux-inspiration-skel" />
          ))}
        </div>
      ) : null}

      {phase === 'need-login' && tab === 'public' ? <LoginGate t={t} /> : null}

      {phase === 'ready' && error && items.length === 0 ? (
        <div className="omnimux-inspiration-error">
          <p className="omnimux-inspiration-empty-text">
            {error === 'disabled' ? t('error.disabled') : error || t('error.generic')}
          </p>
        </div>
      ) : null}

      {!loading && items.length === 0 && (!error || tab === 'local') ? (
        <EmptyState t={t} onOpenAdd={() => setImportOpen(true)} />
      ) : null}

      {items.length > 0 ? (
        <div className={`omnimux-inspiration-grid ${selecting ? 'selecting' : ''}`}>
          {items.map((row) => (
            <PureCoverCard
              key={String(row.id)}
              row={row}
              t={t}
              selected={selectedIds.has(row.id)}
              selecting={selecting}
              onToggleSelect={toggleSelect}
              onSelect={(item) => setSelectedItem(item)}
            />
          ))}
        </div>
      ) : null}

      {/* 滚动触底加载器与探测哨兵 */}
      <div ref={sentinelRef} />
      {loadingMore ? (
        <div className="omnimux-inspiration-scroll-loader">
          <div className="omnimux-inspiration-spinner" />
          <span>正在加载更多灵感…</span>
        </div>
      ) : null}

      {/* 详情弹窗与对话框 */}
      {selectedItem ? (
        <InspirationModal
          row={selectedItem}
          t={t}
          onClose={() => setSelectedItem(null)}
          onItemUpdated={handleItemUpdated}
        />
      ) : null}

      {pendingRemove ? (
        <ConfirmRemoveDialog
          t={t}
          count={pendingRemove.count}
          busy={removing}
          onCancel={() => setPendingRemove(null)}
          onConfirm={handleConfirmBatchRemove}
        />
      ) : null}

      <ImportDialog
        open={importOpen}
        t={t}
        onClose={() => setImportOpen(false)}
        onImported={handleImportSuccess}
      />
    </div>
  )
}
