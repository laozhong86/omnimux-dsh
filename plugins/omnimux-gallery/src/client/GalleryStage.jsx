import { useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { installHub, installItem, listHub, loadCatalog, searchHub, summonItem, uninstallHub } from './api.js'
import { readConversationBox } from './conversation-box.js'
import { insertGesture } from './insert-gesture.js'

const TABS = [
  { id: 'experts', key: 'tabExperts' },
  { id: 'skills', key: 'tabSkills' },
  { id: 'connectors', key: 'tabConnectors' },
]

function findComposer() {
  return document.querySelector(
    '[data-composer-card] textarea, [data-composer-seat] textarea, textarea[data-phase], textarea[placeholder]',
  )
}

function isBlankSession() {
  const header = document.querySelector('[data-slot="conversation.session.header"]')
  const title = header?.textContent || ''
  if (/新会话|New session|Untitled/i.test(title)) return true
  const scroll = document.querySelector('[data-conversation-scroll]')
  if (!scroll) return true
  return (scroll.textContent || '').trim().length < 40
}

function clickPreset(id) {
  const chip = document.querySelector('button[title*="Agent"], button[title*="预设"]')
  if (!(chip instanceof HTMLElement)) return false
  chip.click()
  const wanted = id === 'expert-mode' ? /专家模式|Expert Mode/ : null
  if (!wanted) return false
  const items = [...document.querySelectorAll('[role="menuitem"]')]
  const match = items.find((el) => wanted.test(el.textContent || ''))
  if (match instanceof HTMLElement) {
    match.click()
    return true
  }
  chip.click()
  return false
}

/**
 * @param {{
 *   t: (key: string) => string,
 *   gallery: { getSnapshot: () => boolean, subscribe: Function, set: Function },
 *   useSessions?: (select: (state: { current?: string }) => unknown) => unknown,
 * }} props
 */
export function GalleryStage({ t, gallery, useSessions }) {
  const open = useSyncExternalStore(
    gallery ? gallery.subscribe : () => () => {},
    gallery ? gallery.getSnapshot : () => false,
  )
  const readSessions = useSessions ?? ((select) => select({}))
  const currentSession = readSessions((state) => state.current)
  const lastSession = useRef(currentSession)
  const [box, setBox] = useState(() => readConversationBox())
  const [tab, setTab] = useState('experts')
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('default')
  const [catalog, setCatalog] = useState(null)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState('')
  const [notice, setNotice] = useState('')
  const [hubMode, setHubMode] = useState(false)
  const [hubQuery, setHubQuery] = useState('')
  const [hubTotal, setHubTotal] = useState(0)
  const [hubItems, setHubItems] = useState(null)
  const [hubError, setHubError] = useState('')

  useLayoutEffect(() => {
    if (!open) return undefined
    const update = () => { setBox(readConversationBox()) }
    update()
    const scroll = document.querySelector('[data-conversation-scroll]')
    const target = scroll instanceof HTMLElement
      ? scroll
      : document.querySelector('[data-slot="conversation"]')?.parentElement
    const observer = typeof ResizeObserver === 'function' && target ? new ResizeObserver(update) : null
    if (target && observer) observer.observe(target)
    window.addEventListener('resize', update)
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [open])

  useEffect(() => {
    if (open && lastSession.current !== currentSession) gallery?.set(false)
    lastSession.current = currentSession
  }, [gallery, currentSession, open])

  useEffect(() => {
    if (!open) return undefined
    let cancelled = false
    loadCatalog().then((data) => {
      if (!cancelled) {
        setCatalog(data)
        setError('')
      }
    }, (err) => {
      if (!cancelled) setError(err instanceof Error ? err.message : String(err))
    })
    return () => { cancelled = true }
  }, [open])

  const hubSearch = useMemo(() => debounce(async () => {
    try {
      const result = await searchHub({ query: hubQuery })
      setHubItems(result.items || [])
      setHubTotal(result.total || 0)
      setHubError('')
    } catch (err) {
      setHubItems([])
      setHubError(err instanceof Error ? err.message : String(err))
    }
  }, 300), [hubQuery])

  useEffect(() => {
    if (!open || !hubMode) return undefined
    hubSearch()
    return () => hubSearch.cancel()
  }, [open, hubMode, hubQuery, hubSearch])

  const categories = useMemo(() => {
    if (!catalog) return []
    const tabItems = catalog.items.filter((item) => item.tab === tab)
    return catalog.categories
      .filter((row) => row.tab === tab)
      .map((row) => ({ ...row, count: tabItems.filter((item) => item.category === row.id).length }))
      .filter((row) => row.count > 0)
  }, [catalog, tab])

  const items = useMemo(() => {
    if (!catalog) return []
    const q = query.trim().toLowerCase()
    const filtered = catalog.items.filter((item) => {
      if (item.tab !== tab) return false
      if (category !== 'all' && item.category !== category) return false
      if (!q) return true
      return `${item.title} ${item.subtitle || ''} ${item.summary} ${item.tags.join(' ')}`.toLowerCase().includes(q)
    })
    if (sort === 'name') return [...filtered].sort((a, b) => a.title.localeCompare(b.title, 'zh'))
    return filtered
  }, [catalog, tab, category, query, sort])

  const featured = useMemo(() => {
    if (!catalog || tab !== 'experts') return []
    const ids = new Set(catalog.featured || [])
    return catalog.items.filter((item) => item.tab === 'experts' && ids.has(item.id))
  }, [catalog, tab])

  async function onInstall(id) {
    setBusy(id)
    setNotice('')
    try {
      await installItem(id)
      const next = await loadCatalog()
      setCatalog(next)
    } catch (err) {
      setNotice(err instanceof Error ? err.message : String(err))
    } finally {
      setBusy('')
    }
  }

  async function onSummon(id) {
    setBusy(id)
    setNotice('')
    try {
      const blank = isBlankSession()
      const result = await summonItem(id, blank ? 'blank' : 'locked')
      const field = findComposer()
      const wrote = field instanceof HTMLTextAreaElement || field instanceof HTMLInputElement
        ? insertGesture(field, result.gesture)
        : false
      if (result.stagePreset === 'expert-mode') clickPreset('expert-mode')
      if (!wrote) {
        setNotice(`${result.gesture} 已就绪，但没写进输入框。请点一下输入框后重试，或手动输入该手势。`)
        return
      }
      gallery?.set(false)
    } catch (err) {
      setNotice(err instanceof Error ? err.message : String(err))
    } finally {
      setBusy('')
    }
  }

  async function onHubToggle(item) {
    const slug = item.slug
    setBusy(slug)
    setNotice('')
    try {
      if (item.installed) await uninstallHub(slug)
      else await installHub(slug)
      hubSearch()
    } catch (err) {
      const message = err instanceof Error && err.missingPlugin ? t('hubRequiresPlugin') : (err instanceof Error ? err.message : String(err))
      setNotice(message)
    } finally {
      setBusy('')
    }
  }

  if (!open || !gallery) return null

  return (
    <div
      role="region"
      aria-label={t('title')}
      style={{
        position: 'fixed',
        top: box.top,
        left: box.left,
        width: box.width,
        height: box.height,
        zIndex: 200,
        pointerEvents: 'auto',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--dsw-alias-bg-primary, var(--dsw-bg, #111))',
        color: 'var(--dsw-alias-label-primary, inherit)',
        overflow: 'hidden',
      }}
    >
      <div style={{
        padding: '12px 20px 12px',
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        WebkitAppRegion: 'no-drag',
      }}
      >
        <nav style={{ display: 'flex', gap: 8, WebkitAppRegion: 'no-drag' }}>
          {TABS.map((row) => (
            <button
              key={row.id}
              type="button"
              onClick={() => { setTab(row.id); setCategory('all'); setHubMode(false) }}
              style={{ ...tabButton(tab === row.id), WebkitAppRegion: 'no-drag' }}
            >
              {t(row.key)}
            </button>
          ))}
        </nav>
        {tab === 'skills' ? (
          <>
            <input
              value={hubMode ? hubQuery : query}
              onChange={(event) => (hubMode ? setHubQuery(event.target.value) : setQuery(event.target.value))}
              placeholder={hubMode ? t('hubSearch') : t('search')}
              style={{ ...searchStyle, WebkitAppRegion: 'no-drag' }}
            />
            <div style={{ display: 'flex', gap: 4, WebkitAppRegion: 'no-drag' }}>
              <button type="button" onClick={() => setHubMode(false)} style={sortButton(!hubMode)}>{t('localSource')}</button>
              <button type="button" onClick={() => setHubMode(true)} style={sortButton(hubMode)}>{t('hubSource')}</button>
            </div>
          </>
        ) : (
          <>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('search')}
              style={{ ...searchStyle, WebkitAppRegion: 'no-drag' }}
            />
            <div style={{ display: 'flex', gap: 4, WebkitAppRegion: 'no-drag' }}>
              <button type="button" onClick={() => setSort('default')} style={sortButton(sort === 'default')}>{t('sortDefault')}</button>
              <button type="button" onClick={() => setSort('name')} style={sortButton(sort === 'name')}>{t('sortName')}</button>
            </div>
          </>
        )}
        <button type="button" aria-label={t('close')} onClick={() => gallery.set(false)} style={{ ...closeStyle, WebkitAppRegion: 'no-drag' }}>×</button>
      </div>
      <div style={{ padding: '0 20px 12px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Chip active={category === 'all'} onClick={() => setCategory('all')}>{t('all')}</Chip>
        {categories.map((row) => (
          <Chip key={row.id} active={category === row.id} onClick={() => setCategory(row.id)}>
            {row.title} <span style={{ opacity: 0.55 }}>{row.count}</span>
          </Chip>
        ))}
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '0 20px 24px' }}>
        {error && !hubMode && <p style={muted}>{t('loadError')}: {error}</p>}
        {notice && <p style={muted}>{notice}</p>}
        {tab === 'skills' && hubMode ? (
          <HubPanel
            items={hubItems}
            loading={hubItems === null}
            error={hubError}
            busy={busy}
            query={hubQuery}
            total={hubTotal}
            t={t}
            onToggle={onHubToggle}
          />
        ) : (
          <>
            {tab === 'experts' && category === 'all' && !query && featured.length > 0 && (
              <section style={{ marginBottom: 24 }}>
                <h2 style={h2}>{t('featured')}</h2>
                <div style={featuredRow}>
                  {featured.map((item) => (
                    <FeaturedCard key={`f-${item.id}`} item={item} t={t} busy={busy === item.id} onSummon={onSummon} />
                  ))}
                </div>
              </section>
            )}
            {items.length === 0 && !error ? <p style={muted}>{t('empty')}</p> : (
              <div style={grid}>
                {items.map((item) => (
                  <Card key={item.id} item={item} t={t} busy={busy === item.id} onSummon={onSummon} onInstall={onInstall} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function HubPanel({ items, loading, error, busy, query, total, t, onToggle }) {
  if (loading) return <p style={muted}>…</p>
  if (error) return <p style={muted}>{t('hubLoadError')}: {error}</p>
  if (!items || items.length === 0) {
    return <p style={muted}>{query ? t('empty') : t('hubNoQuery')}</p>
  }
  return (
    <>
      <p style={{ ...muted, marginTop: 0 }}>{t('hubSource')} · {t('downloads', { n: formatCount(total) })}</p>
      <div style={grid}>
        {items.map((item) => (
          <HubCard key={item.slug} item={item} t={t} busy={busy === item.slug} onToggle={onToggle} />
        ))}
      </div>
    </>
  )
}

function HubCard({ item, t, busy, onToggle }) {
  return (
    <article style={card}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <div style={hubAvatar} aria-hidden="true">{(item.name || '?').slice(0, 1)}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'flex-start' }}>
            <div style={{ minWidth: 0, display: 'flex', gap: 6, alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{item.name}</h3>
              {item.categoryLabel ? <HubBadge title={item.categoryLabel} /> : null}
            </div>
            <button type="button" disabled={busy} onClick={() => onToggle(item)} style={plusButton}>
              {busy ? '…' : item.installed ? t('installed') : t('hubInstall')}
            </button>
          </div>
          {item.description ? <p style={{ margin: '6px 0 0', fontSize: 12, opacity: 0.72, lineHeight: 1.5 }}>{item.description}</p> : null}
          <p style={{ margin: '6px 0 0', fontSize: 11, opacity: 0.6 }}>
            {t('downloads', { n: formatCount(item.downloads) })}
            {item.version ? ` · ${item.version}` : ''}
          </p>
        </div>
      </div>
    </article>
  )
}

function Avatar({ item }) {
  const [failed, setFailed] = useState(false)
  const initial = (item.title || '?').slice(0, 1)
  if (item.avatar && !failed) {
    return (
      <img
        src={item.avatar}
        alt=""
        width={40}
        height={40}
        loading="lazy"
        onError={() => setFailed(true)}
        style={avatarImg}
      />
    )
  }
  return <div style={avatarFallback} aria-hidden="true">{initial}</div>
}

function Card({ item, t, busy, onSummon, onInstall }) {
  const market = item.kind === 'skill' || item.kind === 'connector'
  const team = item.kind === 'team'
  return (
    <article style={card}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <Avatar item={item} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'flex-start' }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', gap: 6, alignItems: 'baseline', flexWrap: 'wrap' }}>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{item.title}</h3>
                {team ? <span style={teamBadge}>{t('team')}</span> : null}
                {item.hub ? <HubBadge title={t('fromHub')} /> : null}
              </div>
              {item.subtitle ? <p style={{ margin: '2px 0 0', fontSize: 12, opacity: 0.66 }}>{item.subtitle}</p> : null}
            </div>
            {market ? (
              <button type="button" disabled={busy || item.installed} onClick={() => onInstall(item.id)} style={plusButton}>
                {item.installed ? t('installed') : busy ? t('installing') : '+'}
              </button>
            ) : (
              <button type="button" disabled={busy} onClick={() => onSummon(item.id)} style={plusButton}>
                {busy ? '…' : t('summon')}
              </button>
            )}
          </div>
          <p style={{ margin: '6px 0 0', fontSize: 12, opacity: 0.72, lineHeight: 1.5 }}>{item.summary}</p>
        </div>
      </div>
      {item.tags?.length > 0 && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
          {item.tags.map((tag) => <span key={tag} style={tagStyle}>{tag}</span>)}
        </div>
      )}
    </article>
  )
}

function FeaturedCard({ item, t, busy, onSummon }) {
  return (
    <article style={featuredCard}>
      <Avatar item={item} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'baseline', flexWrap: 'wrap' }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>{item.title}</h3>
          {item.kind === 'team' ? <span style={teamBadge}>{t('team')}</span> : null}
        </div>
        {item.subtitle ? <p style={{ margin: '2px 0 0', fontSize: 11, opacity: 0.66 }}>{item.subtitle}</p> : null}
        <p style={{ margin: '6px 0 0', fontSize: 11, opacity: 0.7, lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.summary}</p>
      </div>
      <button type="button" disabled={busy} onClick={() => onSummon(item.id)} style={{ ...plusButton, alignSelf: 'flex-start' }}>
        {busy ? '…' : t('summon')}
      </button>
    </article>
  )
}

function Chip({ active, onClick, children }) {
  return (
    <button type="button" onClick={onClick} style={{
      border: 'none',
      borderRadius: 999,
      padding: '4px 10px',
      font: 'inherit',
      fontSize: 13,
      cursor: 'pointer',
      background: active ? 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))' : 'transparent',
      color: 'inherit',
    }}
    >
      {children}
    </button>
  )
}

const tabButton = (active) => ({
  border: 'none',
  borderRadius: 8,
  padding: '6px 12px',
  font: 'inherit',
  fontSize: 14,
  fontWeight: active ? 600 : 400,
  cursor: 'pointer',
  background: active ? 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))' : 'transparent',
  color: 'inherit',
})

const searchStyle = {
  flex: 1,
  minWidth: 160,
  height: 32,
  borderRadius: 8,
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.12))',
  background: 'transparent',
  color: 'inherit',
  padding: '0 10px',
  font: 'inherit',
}

const closeStyle = {
  border: 'none',
  background: 'transparent',
  color: 'inherit',
  cursor: 'pointer',
  fontSize: 20,
  lineHeight: 1,
  padding: 4,
}

const avatarImg = {
  flex: '0 0 auto',
  width: 40,
  height: 40,
  borderRadius: '50%',
  objectFit: 'cover',
  background: 'var(--dsw-alias-bg-secondary, rgba(255,255,255,0.06))',
}
const avatarFallback = {
  flex: '0 0 auto',
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  fontWeight: 600,
  background: 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.10))',
  color: 'var(--dsw-alias-label-secondary, inherit)',
}
const hubAvatar = {
  flex: '0 0 auto',
  width: 40,
  height: 40,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  fontWeight: 600,
  background: 'var(--dsw-alias-state-business-primary, rgba(120,160,255,0.20))',
  color: 'var(--dsw-alias-label-primary, inherit)',
}
const teamBadge = {
  flex: '0 0 auto',
  fontSize: 10,
  padding: '1px 6px',
  borderRadius: 4,
  fontWeight: 600,
  background: 'var(--dsw-alias-state-business-primary, rgba(120,160,255,0.25))',
  color: 'var(--dsw-alias-label-primary, inherit)',
}
const h2 = { margin: '0 0 12px', fontSize: 16, fontWeight: 600 }
const featuredRow = {
  display: 'flex',
  gap: 12,
  overflowX: 'auto',
  paddingBottom: 4,
}
const featuredCard = {
  flex: '0 0 300px',
  display: 'flex',
  gap: 10,
  alignItems: 'flex-start',
  borderRadius: 12,
  padding: 12,
  background: 'var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04))',
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.08))',
}
const sortButton = (active) => ({
  border: 'none',
  borderRadius: 6,
  padding: '4px 8px',
  font: 'inherit',
  fontSize: 12,
  cursor: 'pointer',
  background: active ? 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))' : 'transparent',
  color: active ? 'inherit' : 'var(--dsw-alias-label-secondary, inherit)',
})
const muted = { opacity: 0.7, fontSize: 13 }
const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }
const card = {
  borderRadius: 12,
  padding: 14,
  background: 'var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04))',
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.08))',
}
const plusButton = {
  flex: '0 0 auto',
  border: 'none',
  borderRadius: 8,
  padding: '4px 8px',
  font: 'inherit',
  fontSize: 13,
  cursor: 'pointer',
  background: 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))',
  color: 'inherit',
}
const tagStyle = {
  fontSize: 11,
  padding: '2px 6px',
  borderRadius: 999,
  background: 'rgba(255,255,255,0.08)',
}

/**
 * @template T
 * @param {(args: T) => void | Promise<void>} fn
 * @param {number} wait
 */
function debounce(fn, wait) {
  let timer = 0
  const debounced = (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => { fn(...args) }, wait)
  }
  debounced.cancel = () => clearTimeout(timer)
  return debounced
}

/**
 * @param {number | undefined} n
 */
function formatCount(n) {
  const v = Number(n) || 0
  if (v >= 100000000) return `${(v / 100000000).toFixed(1)}亿`
  if (v >= 10000) return `${(v / 10000).toFixed(1)}万`
  return String(v)
}

function HubBadge({ title }) {
  return <span style={hubBadge}>{title}</span>
}
const hubBadge = {
  fontSize: 10,
  padding: '1px 6px',
  borderRadius: 4,
  fontWeight: 600,
  background: 'var(--dsw-alias-state-business-primary, rgba(120,160,255,0.25))',
  color: 'var(--dsw-alias-label-primary, inherit)',
}
