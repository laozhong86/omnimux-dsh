import { useEffect, useLayoutEffect, useState, useSyncExternalStore } from 'react'
import { IconDownloadOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { IconButton, PageHeader } from 'dsh-ui-kit'
import { injectAnalyticsStyles } from './styles.js'
import { useAnalyticsStore } from './store.js'
import { buildDashboardCsv, downloadCsv } from './csv.js'
import { ActionNavRow } from './components/ActionNavRow.jsx'
import { FilterBar } from './components/FilterBar.jsx'
import { KpiGrid } from './components/KpiGrid.jsx'
import { BasicCharts } from './components/BasicCharts.jsx'
import { EngagementChart } from './components/EngagementChart.jsx'
import { HeatmapChart } from './components/HeatmapChart.jsx'
import { FollowerEvolution } from './components/FollowerEvolution.jsx'
import { PlatformTable } from './components/PlatformTable.jsx'
import { TopPostsTable } from './components/TopPostsTable.jsx'
import { StrategyCharts } from './components/StrategyCharts.jsx'
import { Banner, EmptyState, InboxPlaceholder, LoadingState } from './components/EmptyState.jsx'

function readLocale() {
  if (typeof document === 'undefined') return 'zh-CN'
  const lang = document.documentElement.lang || ''
  return lang.toLowerCase().startsWith('en') ? 'en-US' : 'zh-CN'
}

function openAccounts() {
  try {
    const stage = window.__omnimuxStage
    if (stage && typeof stage.claim === 'function') {
      stage.claim('omnimux-accounts')
      return
    }
  } catch {}
  window.dispatchEvent(new CustomEvent('dsh-product-stage', { detail: { id: 'omnimux-accounts' } }))
}

/**
 * Social analytics first-level page.
 *
 * After the first open the subtree stays mounted and is hidden with
 * `display:none` + `aria-hidden` so filters / chart zoom survive a close.
 * Wrap method refs — useSyncExternalStore calls subscribe/getSnapshot bare.
 * @param {{ t: (key: string) => string, stage: { getSnapshot: () => boolean, subscribe: Function, set: Function, readBox: () => { top: number, left: number, width: number, height: number } } }} props
 */
export function AnalyticsStage({ t, stage }) {
  useEffect(() => { injectAnalyticsStyles() }, [])

  const open = useSyncExternalStore(
    stage ? (onStoreChange) => stage.subscribe(onStoreChange) : () => () => {},
    stage ? () => stage.getSnapshot() : () => false,
  )
  const [everOpened, setEverOpened] = useState(false)
  const [box, setBox] = useState(() => (stage ? stage.readBox() : { top: 0, left: 0, width: 0, height: 0 }))
  const [now, setNow] = useState(() => Date.now())
  const store = useAnalyticsStore()

  if (open && !everOpened) setEverOpened(true)

  useLayoutEffect(() => {
    if (!open || !stage) return undefined
    const update = () => { setBox(stage.readBox()) }
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
  }, [open, stage])

  useEffect(() => {
    if (!open) return undefined
    void store.load()
    setNow(Date.now())
    const timer = setInterval(() => setNow(Date.now()), 30_000)
    return () => clearInterval(timer)
  }, [open, store.load])

  const handleAction = (action) => {
    if (action === 'open_accounts' || action === 'reauth') openAccounts()
    else if (action === 'retry') void store.refresh()
    else if (action === 'login') {
      const gate = window.__omnimuxAuth
      if (gate && typeof gate.ensureLogin === 'function') gate.ensureLogin({ kind: 'explicit', onSuccess: () => { void store.refresh() } })
    }
  }

  const handleExport = () => {
    const csv = buildDashboardCsv(store.payload)
    downloadCsv(csv, `omnimux-analytics-${store.query.timeRange}.csv`)
  }

  if (!stage || !everOpened) return null

  const payload = store.payload
  const empty = payload?.emptyState
  const blockingEmpty = empty?.code === 'no_accounts' || empty?.code === 'unauthorized' || empty?.code === 'fetch_failed'
  const locale = readLocale()

  return (
    <div
      role="region"
      aria-label={t('title')}
      aria-hidden={open ? undefined : 'true'}
      className="omnimux-analytics-stage"
      data-visible={open ? 'true' : 'false'}
      style={{
        display: open ? undefined : 'none',
        '--stage-top': `${box.top}px`,
        '--stage-left': `${box.left}px`,
        '--stage-width': `${box.width}px`,
        '--stage-height': `${box.height}px`,
      }}
    >
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        actions={(
          <IconButton
            variant="ghost"
            size="sm"
            aria-label={t('export')}
            title={t('export')}
            onClick={handleExport}
          >
            <IconDownloadOutline16 />
          </IconButton>
        )}
        onRefresh={() => { void store.refresh() }}
        refreshing={store.phase === 'loading'}
        refreshTitle={t('refresh')}
        onClose={() => { stage.set(false) }}
        closeTitle={t('close')}
      />
      <ActionNavRow
        t={t}
        tab={store.query.tab}
        syncStatus={payload?.syncStatus}
        syncing={store.syncing}
        now={now}
        onTabChange={(tab) => store.setQuery({ tab })}
        onSync={() => { void store.syncNow() }}
      />
      <FilterBar
        t={t}
        query={store.query}
        accounts={payload?.meta?.filterAccounts}
        disabled={store.syncing}
        onChange={(patch) => store.setQuery(patch)}
      />
      <div className="omnimux-analytics-stage-body">
        {store.phase === 'loading' && !payload ? (
          <LoadingState t={t} />
        ) : store.query.tab === 'inbox' ? (
          <InboxPlaceholder t={t} />
        ) : blockingEmpty ? (
          <EmptyState t={t} hint={empty} onAction={handleAction} />
        ) : !payload ? (
          <EmptyState t={t} hint={{ code: 'fetch_failed', action: 'retry' }} onAction={handleAction} />
        ) : (
          <>
            {empty && empty.code !== 'no_accounts' ? <Banner t={t} hint={empty} onAction={handleAction} /> : null}
            {store.lastError && empty?.code !== 'network_error' ? (
              <Banner t={t} hint={{ code: 'network_error', action: 'retry', detail: store.lastError }} onAction={handleAction} />
            ) : null}
            <KpiGrid t={t} kpi={payload.kpi} timeRange={store.query.timeRange} />
            <BasicCharts t={t} basicCharts={payload.basicCharts} timeRange={store.query.timeRange} />
            <EngagementChart t={t} block={payload.engagementOverTime} locale={locale} />
            <section className="omnimux-analytics-grid-2">
              <HeatmapChart t={t} heatmap={payload.heatmap} locale={locale} />
              <FollowerEvolution t={t} block={payload.followerEvolution} />
            </section>
            <PlatformTable t={t} rows={payload.platformBreakdown} />
            <TopPostsTable t={t} rows={payload.topPosts} />
            <StrategyCharts t={t} strategy={payload.strategy} locale={locale} />
          </>
        )}
      </div>
    </div>
  )
}
