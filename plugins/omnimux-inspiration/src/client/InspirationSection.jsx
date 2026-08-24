import { useEffect, useMemo, useRef, useState } from 'react'
import { hostMediaSrc } from './api.js'
import { injectInspirationStyles } from './styles.js'
import { useInspiration } from './use-inspiration.js'

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
        <select className="omnimux-inspiration-select" value={type} aria-label={t('filter.type')} onChange={(event) => { setType(event.currentTarget.value) }}>
          <option value="">{t('filter.all')}</option>
          <option value="video">{t('type.video')}</option>
          <option value="image">{t('type.image')}</option>
          <option value="link">{t('type.link')}</option>
        </select>
        <select className="omnimux-inspiration-select" value={sort} aria-label={t('filter.sort')} onChange={(event) => { setSort(event.currentTarget.value) }}>
          <option value="hot">{t('sort.hot')}</option>
          <option value="new">{t('sort.new')}</option>
          <option value="fav">{t('sort.fav')}</option>
        </select>
        <select className="omnimux-inspiration-select" value={favorite} aria-label={t('filter.favorite')} onChange={(event) => { setFavorite(event.currentTarget.value) }}>
          <option value="">{t('favorite.off')}</option>
          <option value="true">{t('favorite.on')}</option>
        </select>
        <span className="omnimux-inspiration-count">{t('count').replace('{n}', String(total))}</span>
      </div>
      {phase === 'loading' ? (
        <div className="omnimux-inspiration-skeleton" aria-busy="true">
          {Array.from({ length: 6 }, (_, i) => <div key={i} className="omnimux-inspiration-skel" />)}
        </div>
      ) : null}
      {phase === 'need-login' ? <LoginGate t={t} /> : null}
      {phase === 'ready' && error ? (
        <div className="omnimux-inspiration-error">
          <p className="omnimux-inspiration-empty-text">{error === 'disabled' ? t('error.disabled') : error || t('error.generic')}</p>
        </div>
      ) : null}
      {phase === 'ready' && !error && items.length === 0 ? <EmptyState t={t} /> : null}
      {phase === 'ready' && items.length > 0 ? (
        <div className="omnimux-inspiration-grid">
          {items.map((row) => {
            const id = String(row.id)
            const title = String(row.title || row.source_url || id)
            const cover = hostMediaSrc(row.cover_url)
            const source = typeof row.source_url === 'string' ? row.source_url : ''
            return (
              <article key={id} className="omnimux-inspiration-card">
                {cover
                  ? <img className="omnimux-inspiration-cover" src={cover} alt="" />
                  : <div className="omnimux-inspiration-cover-empty">{t('noCover')}</div>}
                <div className="omnimux-inspiration-body">
                  <h3 className="omnimux-inspiration-title">{title}</h3>
                  <div className="omnimux-inspiration-meta">
                    <span>{t(`type.${row.type}`) === `type.${row.type}` ? String(row.type || '') : t(`type.${row.type}`)}</span>
                    {row.is_favorite ? <span>{t('filter.favorite')}</span> : null}
                  </div>
                  {source ? (
                    <a className="omnimux-inspiration-link" href={source} target="_blank" rel="noreferrer">{t('openSource')}</a>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
