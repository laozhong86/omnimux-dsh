import { useEffect, useMemo, useRef, useState } from 'react'
import { coverGlyph, isUsableCoverSize, pickCoverSrc, resolveTikTokEmbedUrl } from './api.js'
import { injectInspirationStyles } from './styles.js'
import { useInspiration } from './use-inspiration.js'

function LoginGate({ t, onSuccess }) {
  const login = () => {
    const gate = typeof window !== 'undefined' ? window.__omnimuxAuth : undefined
    if (gate && typeof gate.ensureLogin === 'function') {
      // forceVerify: this page only reaches need-login after a Host 401, so the
      // cached logged_in bit is not trustworthy and must not short-circuit.
      gate.ensureLogin({
        reason: t('needLogin'),
        forceVerify: true,
        onSuccess: () => {
          if (typeof onSuccess === 'function') onSuccess()
        },
      })
      return
    }
    if (typeof onSuccess === 'function') onSuccess()
  }
  return (
    <div className="omnimux-inspiration-gate">
      <h2 className="omnimux-inspiration-empty-title">{t('needLogin')}</h2>
      <p className="omnimux-inspiration-empty-text">{t('needLoginHint')}</p>
      <button type="button" className="omnimux-inspiration-btn" onClick={login}>{t('login')}</button>
    </div>
  )
}

function PureCoverCard({ row, t, onSelect }) {
  const title = String(row.title || row.source_url || row.id)
  const cover = pickCoverSrc(row)
  const [broken, setBroken] = useState(!cover)
  useEffect(() => { setBroken(!cover) }, [cover])

  return (
    <article
      className="omnimux-inspiration-card-pure"
      onClick={() => onSelect(row)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(row) }}
    >
      {broken ? (
        <div className="omnimux-inspiration-cover-fallback" aria-hidden="true">
          {coverGlyph(title)}
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
        <span className="omnimux-inspiration-badge-platform">TikTok</span>
        <div className="omnimux-inspiration-overlay-play">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div />
      </div>
    </article>
  )
}

function InspirationModal({ row, t, onClose }) {
  if (!row) return null
  const title = String(row.title || 'TikTok 灵感')
  const analysis = row.analysis && typeof row.analysis === 'object' ? row.analysis : {}
  const rawEmbed = analysis.embed_player_url || row.source_url
  const embedUrl = resolveTikTokEmbedUrl(rawEmbed) || (row.source_url ? resolveTikTokEmbedUrl(row.source_url) : null)
  const cover = pickCoverSrc(row)
  const tags = Array.isArray(row.tags) ? row.tags : []
  const creator = analysis.creator || { name: 'TikTok Creator', handle: 'tiktok' }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="omnimux-inspiration-modal-backdrop" onClick={onClose}>
      <div className="omnimux-inspiration-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="omnimux-inspiration-modal-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* 左侧：TikTok 官方 Embed 原生播放器（居中 9:16 容器） */}
        <div className="omnimux-inspiration-modal-left">
          <div className="omnimux-inspiration-modal-player-box">
            {embedUrl ? (
              <iframe
                title={title}
                src={embedUrl}
                className="omnimux-inspiration-player-frame"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
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

        {/* 右侧：详细内容与 AI 拆解面板 */}
        <div className="omnimux-inspiration-modal-right">
          <div className="omnimux-inspiration-modal-creator">
            <div className="omnimux-inspiration-modal-avatar">
              {(creator.name || creator.handle || 'T').charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="omnimux-inspiration-modal-handle">@{creator.handle || creator.name}</div>
            </div>
          </div>

          <h2 className="omnimux-inspiration-modal-title">{title}</h2>

          {tags.length > 0 ? (
            <div className="omnimux-inspiration-modal-tags">
              {tags.map((tag, idx) => (
                <span key={idx} className="omnimux-inspiration-modal-tag">#{tag}</span>
              ))}
            </div>
          ) : null}

          {row.source_url ? (
            <a
              className="omnimux-inspiration-modal-link"
              href={row.source_url}
              target="_blank"
              rel="noreferrer"
            >
              <span>{t('openSource') || '查看 TikTok 原文'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          ) : null}

          {/* AI 内容结构拆解 */}
          <div className="omnimux-inspiration-modal-analysis">
            {analysis.hook ? (
              <div className="omnimux-inspiration-analysis-item">
                <span className="omnimux-inspiration-analysis-label">Hook 黄金 3 秒钩子</span>
                <span className="omnimux-inspiration-analysis-val">{analysis.hook}</span>
              </div>
            ) : null}

            {Array.isArray(analysis.structure) && analysis.structure.length > 0 ? (
              <div className="omnimux-inspiration-analysis-item">
                <span className="omnimux-inspiration-analysis-label">脚本结构拆解</span>
                <span className="omnimux-inspiration-analysis-val">{analysis.structure.join(' → ')}</span>
              </div>
            ) : null}

            {analysis.cta ? (
              <div className="omnimux-inspiration-analysis-item">
                <span className="omnimux-inspiration-analysis-label">CTA 转化引导</span>
                <span className="omnimux-inspiration-analysis-val">{analysis.cta}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

function EmptyState({ t }) {
  return (
    <div className="omnimux-inspiration-empty">
      <h2 className="omnimux-inspiration-empty-title">{t('empty.title')}</h2>
      <p className="omnimux-inspiration-empty-text">{t('empty.description')}</p>
    </div>
  )
}

/**
 * @param {{ t: (key: string) => string, active?: boolean }} props
 */
export function InspirationSection({ t, active = true }) {
  useEffect(() => { injectInspirationStyles() }, [])

  const [type, setType] = useState('')
  const [sort, setSort] = useState('hot')
  const [favorite, setFavorite] = useState('')
  const [query, setQuery] = useState('')
  const [q, setQ] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const wasActive = useRef(active)

  useEffect(() => {
    const timer = window.setTimeout(() => { setQ(query.trim()) }, 250)
    return () => { window.clearTimeout(timer) }
  }, [query])

  const filters = useMemo(() => ({
    type,
    sort,
    is_favorite: favorite,
    q,
  }), [type, sort, favorite, q])

  const { phase, items, total, error, refresh } = useInspiration(filters)

  // 严格过滤：当前阶段只展示有真实 TikTok 来源的素材
  const tiktokItems = useMemo(() => {
    return items.filter((row) => {
      const sUrl = typeof row.source_url === 'string' ? row.source_url : ''
      const hasId = Boolean(resolveTikTokEmbedUrl(sUrl))
      return hasId || sUrl.includes('tiktok.com')
    })
  }, [items])

  useEffect(() => {
    const returning = active && !wasActive.current
    wasActive.current = active
    if (returning) void refresh()
  }, [active, refresh])

  return (
    <div className="omnimux-inspiration-root">
      <div className="omnimux-inspiration-toolbar">
        <input
          type="search"
          className="omnimux-inspiration-search"
          value={query}
          placeholder={t('filter.search')}
          aria-label={t('filter.search')}
          onChange={(event) => { setQuery(event.currentTarget.value) }}
        />
        <select className="omnimux-inspiration-select" value={sort} aria-label={t('filter.sort')} onChange={(event) => { setSort(event.currentTarget.value) }}>
          <option value="hot">{t('sort.hot')}</option>
          <option value="new">{t('sort.new')}</option>
          <option value="fav">{t('sort.fav')}</option>
        </select>
        <span className="omnimux-inspiration-count">
          {t('count').replace('{n}', String(tiktokItems.length))}
        </span>
      </div>

      {phase === 'loading' && tiktokItems.length === 0 ? (
        <div className="omnimux-inspiration-skeleton" aria-busy="true">
          {Array.from({ length: 8 }, (_, i) => <div key={i} className="omnimux-inspiration-skel" />)}
        </div>
      ) : null}
      {phase === 'need-login' ? <LoginGate t={t} onSuccess={() => { void refresh() }} /> : null}

      {phase === 'ready' && error && tiktokItems.length === 0 ? (
        <div className="omnimux-inspiration-error">
          <p className="omnimux-inspiration-empty-text">{error === 'disabled' ? t('error.disabled') : error || t('error.generic')}</p>
        </div>
      ) : null}

      {phase === 'ready' && !error && tiktokItems.length === 0 ? <EmptyState t={t} /> : null}

      {tiktokItems.length > 0 ? (
        <div className="omnimux-inspiration-masonry">
          {tiktokItems.map((row) => (
            <PureCoverCard
              key={String(row.id)}
              row={row}
              t={t}
              onSelect={(item) => setSelectedItem(item)}
            />
          ))}
        </div>
      ) : null}

      {selectedItem ? (
        <InspirationModal
          row={selectedItem}
          t={t}
          onClose={() => setSelectedItem(null)}
        />
      ) : null}
    </div>
  )
}
