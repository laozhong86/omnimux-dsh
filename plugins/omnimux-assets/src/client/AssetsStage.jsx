import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Button, DropdownSelect, FilterBar, IconButton, SearchField } from 'dsh-ui-kit'
import { CloseIcon, GridIcon, ImportIcon, ListIcon, PlusIcon, RefreshIcon } from './icons.jsx'
import { createAsset, deleteAsset, getState, pickPath, updateAsset } from './api.js'
import { AddAssetDialog, ASSET_TYPE_KEYS } from './AddAssetDialog.jsx'
import { AssetBrowse } from './AssetBrowse.jsx'
import { AssetGrid } from './AssetGrid.jsx'
import { AssetDetail } from './AssetDetail.jsx'
import { ConfirmRemoveDialog } from './ConfirmRemoveDialog.jsx'
import { injectAssetsStyles } from './styles.js'

const POLL_MS = 5000

function messageOf(result, t) {
  if (result.body?.error === 'name-conflict') return t('error.nameConflict')
  return String(result.body?.message || result.body?.error || `HTTP ${String(result.status)}` || t('error.generic'))
}

function errText(caught) {
  return caught instanceof Error ? caught.message : String(caught)
}

function pickErrorText(result, t) {
  const code = String(result.body?.error ?? '')
  if (code === 'picker-unsupported') return t('error.pickerUnsupported')
  if (code === 'picker-failed') return t('error.pickerFailed')
  return messageOf(result, t)
}

function citeOf(asset) {
  return asset.cite || `@${asset.type}/${asset.name}`
}

/**
 * Creative asset library first-level page.
 * After first open, keep the subtree with display:none — never `if (!open) return null`.
 * @param {{
 *   t: (key: string) => string,
 *   stage: { getSnapshot: () => boolean, subscribe: Function, set: Function, readBox: Function },
 * }} props
 */
export function AssetsStage({ t, stage }) {
  useEffect(() => { injectAssetsStyles() }, [])
  const open = useSyncExternalStore(
    stage ? (cb) => stage.subscribe(cb) : () => () => {},
    stage ? () => stage.getSnapshot() : () => false,
  )
  const [everOpened, setEverOpened] = useState(false)
  const [box, setBox] = useState(() => ({ top: 0, left: 0, width: 0, height: 0 }))

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

  const [assets, setAssets] = useState([])
  const [filterType, setFilterType] = useState('')
  const [query, setQuery] = useState('')
  const [sortKey, setSortKey] = useState('updated_at')
  const [viewMode, setViewMode] = useState('grid')
  const [detail, setDetail] = useState(null)
  const [creating, setCreating] = useState(null)
  const [pendingRemove, setPendingRemove] = useState(null)
  const [selectedIds, setSelectedIds] = useState(() => new Set())
  const [error, setError] = useState('')
  const [formError, setFormError] = useState('')
  const [busy, setBusy] = useState(false)
  const [copiedId, setCopiedId] = useState('')
  const [revisions, setRevisions] = useState({ lrev: null, arev: null })
  const revisionsRef = useRef(revisions)

  const refreshState = useCallback((force = false) => {
    const current = revisionsRef.current
    const useRevs = !force && current.lrev !== null && current.arev !== null
    return getState(useRevs ? current.lrev : undefined, useRevs ? current.arev : undefined).then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t))
        return
      }
      setError('')
      const next = {
        lrev: Number(result.body.lrev ?? result.body.mrev) || 0,
        arev: Number(result.body.arev) || 0,
      }
      revisionsRef.current = next
      setRevisions(next)
      if (result.body.unchanged) return
      const nextAssets = Array.isArray(result.body.assets) ? result.body.assets : []
      setAssets(nextAssets)
      setDetail((current) => {
        if (!current) return current
        const fresh = nextAssets.find((row) => row.id === current.id)
        return fresh ?? current
      })
      const live = new Set(nextAssets.map((row) => row.id))
      setSelectedIds((prev) => {
        const kept = [...prev].filter((id) => live.has(id))
        if (kept.length === prev.size) return prev
        return new Set(kept)
      })
    }).catch((caught) => {
      setError(errText(caught))
    })
  }, [t])

  useEffect(() => {
    if (!open) return undefined
    void refreshState(true)
  }, [open, refreshState])

  useEffect(() => {
    if (!open) return undefined
    const timer = setInterval(() => { void refreshState() }, POLL_MS)
    return () => { clearInterval(timer) }
  }, [open, refreshState])

  const run = (work, after) => {
    setBusy(true)
    setError('')
    void Promise.resolve(work()).then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t))
        setFormError(messageOf(result, t))
        return
      }
      setFormError('')
      if (after) after(result)
      return refreshState(true)
    }).catch((caught) => {
      setError(errText(caught))
    }).finally(() => {
      setBusy(false)
    })
  }

  const handlePick = async (kind) => {
    const result = await pickPath(kind)
    if (!result.ok) {
      setFormError(pickErrorText(result, t))
      return []
    }
    const paths = Array.isArray(result.body?.paths)
      ? result.body.paths.filter((path) => typeof path === 'string' && path !== '')
      : []
    if (paths.length > 0) return paths
    return typeof result.body?.path === 'string' && result.body.path !== '' ? [result.body.path] : []
  }

  const visible = assets.filter((asset) => {
    if (filterType && asset.type !== filterType) return false
    if (!query.trim()) return true
    const hay = `${asset.name}\n${asset.description}\n${(asset.tags || []).join('\n')}`.toLowerCase()
    return hay.includes(query.trim().toLowerCase())
  }).sort((a, b) => {
    if (sortKey === 'name') {
      return String(a.name || '').localeCompare(String(b.name || ''))
    }
    return String(b.updated_at || '').localeCompare(String(a.updated_at || ''))
  })

  const selectedCount = selectedIds.size
  const selecting = selectedCount > 0

  const toggleSelect = (asset) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(asset.id)) next.delete(asset.id)
      else next.add(asset.id)
      return next
    })
  }

  const clearSelection = () => { setSelectedIds(new Set()) }

  if (!stage || !everOpened) return null

  const searching = Boolean(query.trim())
  const emptyTypeLabel = filterType ? t(`type.${filterType}`) : ''
  const emptyLabel = searching
    ? t('empty.noMatch')
    : (filterType ? t('empty.type').replace('{type}', emptyTypeLabel) : t('empty.all'))
  const emptyActionLabel = searching
    ? undefined
    : (filterType ? t('empty.addType').replace('{type}', emptyTypeLabel) : t('add.button'))

  return (
    <div
      role="region"
      aria-label={t('stage.title')}
      aria-hidden={open ? undefined : 'true'}
      className="omnimux-assets-stage"
      data-visible={open ? 'true' : 'false'}
      style={{
        display: open ? undefined : 'none',
        '--stage-top': `${box.top}px`,
        '--stage-left': `${box.left}px`,
        '--stage-width': `${box.width}px`,
        '--stage-height': `${box.height}px`,
      }}
    >
      <div className="omnimux-assets-stage-header">
        <div className="omnimux-assets-stage-heading">
          <h1 className="omnimux-assets-stage-title">{t('stage.title')}</h1>
          <p className="omnimux-assets-stage-subtitle">{t('stage.subtitle')}</p>
        </div>
        <div className="omnimux-assets-stage-controls">
          <IconButton
            variant="ghost"
            size="sm"
            aria-label={t('stage.refresh')}
            title={t('stage.refresh')}
            disabled={busy}
            onClick={() => {
              setBusy(true)
              void refreshState(true).finally(() => { setBusy(false) })
            }}
          >
            <RefreshIcon size={16} />
          </IconButton>
          <IconButton
            aria-label={t('stage.close')}
            variant="ghost"
            size="sm"
            onClick={() => { stage.set(false) }}
          >
            <CloseIcon size={16} />
          </IconButton>
        </div>
      </div>

      <div className="omnimux-assets-action-row">
        <Button
          variant="primary"
          leadingIcon={<PlusIcon />}
          onClick={() => { setCreating(filterType || 'character'); setFormError('') }}
        >
          {t('add.button')}
        </Button>
        <Button
          variant="outline"
          leadingIcon={<ImportIcon />}
          onClick={() => {
            setError(t('import.notice'))
            setTimeout(() => setError(''), 3000)
          }}
        >
          {t('import.button')}
        </Button>
      </div>

      <FilterBar
        className="omnimux-assets-stage-toolbar"
        compact
        filters={[{ key: '', label: t('chip.all') }, ...ASSET_TYPE_KEYS.map((key) => ({ key, label: t(`type.${key}`) }))].map((chip) => (
          <Button
            key={chip.key || 'all'}
            variant={filterType === chip.key ? 'secondary' : 'ghost'}
            size="sm"
            aria-pressed={filterType === chip.key}
            onClick={() => { setFilterType(chip.key); setDetail(null); clearSelection() }}
          >
            {chip.label}
          </Button>
        ))}
        tools={(
          <div className="omnimux-assets-tools-cluster">
            <div className="omnimux-assets-search-wrap">
              <SearchField
                value={query}
                placeholder={t('search.placeholder')}
                aria-label={t('search.placeholder')}
                debounceMs={0}
                stretch
                onValueChange={setQuery}
              />
            </div>
            <div className="omnimux-assets-sort-wrap">
              <DropdownSelect
                value={sortKey}
                options={[
                  { value: 'updated_at', label: t('sort.updated') },
                  { value: 'name', label: t('sort.name') },
                ]}
                onChange={setSortKey}
              />
            </div>
            <div className="omnimux-assets-view-toggle">
              <IconButton
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                size="xs"
                aria-pressed={viewMode === 'grid'}
                aria-label={t('view.grid')}
                title={t('view.grid')}
                onClick={() => setViewMode('grid')}
              >
                <GridIcon size={14} />
              </IconButton>
              <IconButton
                variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                size="xs"
                aria-pressed={viewMode === 'list'}
                aria-label={t('view.list')}
                title={t('view.list')}
                onClick={() => setViewMode('list')}
              >
                <ListIcon size={14} />
              </IconButton>
            </div>
          </div>
        )}
      />

      {selecting ? (
        <div className="omnimux-assets-selection">
          <span>{t('select.count').replace('{n}', String(selectedCount))}</span>
          <div className="omnimux-assets-selection-actions">
            <Button variant="ghost" size="sm" onClick={clearSelection}>
              {t('select.clear')}
            </Button>
            <Button
              variant="danger"
              size="sm"
              disabled={busy}
              onClick={() => {
                const names = assets.filter((row) => selectedIds.has(row.id)).map((row) => row.name)
                setPendingRemove({ ids: [...selectedIds], names })
              }}
            >
              {t('select.delete').replace('{n}', String(selectedCount))}
            </Button>
          </div>
        </div>
      ) : null}

      {error !== '' ? <p className="omnimux-assets-error">{error}</p> : null}

      <div className="omnimux-assets-body">
        <div className="omnimux-assets-main">
          {detail ? (
            <AssetBrowse
              key={detail.id}
              t={t}
              asset={detail}
              onBack={() => { setDetail(null) }}
            />
          ) : (
            <AssetGrid
              t={t}
              assets={visible}
              viewMode={viewMode}
              emptyLabel={emptyLabel}
              emptyActionLabel={emptyActionLabel}
              showEmptyAction={!searching}
              onEmptyAction={() => { setCreating(filterType || 'character'); setFormError('') }}
              onOpen={(asset) => { setDetail(asset) }}
              onCopy={(asset) => {
                const text = citeOf(asset)
                if (navigator.clipboard?.writeText) void navigator.clipboard.writeText(text)
                setCopiedId(asset.id)
                window.setTimeout(() => { setCopiedId('') }, 1500)
              }}
              onRemove={(asset) => { setPendingRemove({ ids: [asset.id], names: [asset.name] }) }}
              copiedId={copiedId}
              selectedIds={selectedIds}
              onToggleSelect={toggleSelect}
            />
          )}
        </div>
        {detail ? (
          <AssetDetail
            key={detail.id}
            t={t}
            asset={detail}
            busy={busy}
            onClose={() => { setDetail(null) }}
            onSave={(patch) => {
              run(() => updateAsset(detail.id, patch), (result) => {
                setDetail(result.body?.asset ?? { ...detail, ...patch })
              })
            }}
          />
        ) : null}
      </div>

      {creating ? (
        <AddAssetDialog
          t={t}
          busy={busy}
          presetType={creating}
          error={formError}
          onCancel={() => { setCreating(null); setFormError('') }}
          onPick={handlePick}
          onSubmit={(payload) => {
            run(() => createAsset(payload), (result) => {
              const asset = result.body?.asset
              setCreating(null)
              if (asset?.type) setFilterType(asset.type)
              if (asset) setDetail(asset)
            })
          }}
        />
      ) : null}

      {pendingRemove ? (
        <ConfirmRemoveDialog
          t={t}
          name={String(pendingRemove.names[0] ?? '')}
          title={pendingRemove.ids.length > 1
            ? t('select.removeTitle').replace('{n}', String(pendingRemove.ids.length))
            : undefined}
          busy={busy}
          onCancel={() => { setPendingRemove(null) }}
          onConfirm={() => {
            const ids = pendingRemove.ids
            run(async () => {
              let last = { ok: true, status: 200, body: {} }
              for (const id of ids) {
                last = await deleteAsset(id)
                if (!last.ok) return last
              }
              return last
            }, () => {
              setPendingRemove(null)
              if (ids.includes(detail?.id)) setDetail(null)
              setSelectedIds((prev) => {
                const next = new Set(prev)
                for (const id of ids) next.delete(id)
                return next
              })
            })
          }}
        />
      ) : null}
    </div>
  )
}
