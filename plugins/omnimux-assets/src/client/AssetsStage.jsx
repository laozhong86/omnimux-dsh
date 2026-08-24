import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { FOCUS_CSS } from './a11y.js'
import { CloseIcon, PlusIcon, RefreshIcon } from './icons.jsx'
import { createAsset, deleteAsset, getState, pickPath, updateAsset } from './api.js'
import { AddAssetDialog, ASSET_TYPE_KEYS } from './AddAssetDialog.jsx'
import { AssetBrowse } from './AssetBrowse.jsx'
import { AssetGrid } from './AssetGrid.jsx'
import { AssetDetail } from './AssetDetail.jsx'
import { ConfirmRemoveDialog } from './ConfirmRemoveDialog.jsx'

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

const chromeButton = {
  border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 999,
  cursor: 'pointer',
  fontSize: 13,
  lineHeight: '20px',
  padding: '6px 12px',
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
      style={{
        position: 'fixed',
        top: box.top,
        left: box.left,
        width: box.width,
        height: box.height,
        zIndex: 200,
        pointerEvents: open ? 'auto' : 'none',
        display: open ? 'flex' : 'none',
        flexDirection: 'column',
        background: 'var(--dsw-alias-bg-base, var(--dsw-bg, inherit))',
        color: 'var(--dsw-alias-label-primary, inherit)',
        overflow: 'hidden',
      }}
    >
      <style>{FOCUS_CSS}</style>
      <div style={{
        flex: 'none',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        padding: '12px 20px 12px',
        WebkitAppRegion: 'no-drag',
      }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '32px' }}>{t('stage.title')}</h1>
          <p style={{ margin: 0, fontSize: 13, lineHeight: '20px', color: 'var(--dsw-alias-label-secondary, inherit)' }}>{t('stage.subtitle')}</p>
        </div>
        <button
          type="button"
          style={{ ...chromeButton, display: 'inline-flex', alignItems: 'center', gap: 5, ...(busy ? { opacity: 0.5, cursor: 'default' } : {}) }}
          disabled={busy}
          onClick={() => {
            setBusy(true)
            void refreshState(true).finally(() => { setBusy(false) })
          }}
        >
          <RefreshIcon />
          {busy ? t('stage.refreshing') : t('stage.refresh')}
        </button>
        <button
          type="button"
          aria-label={t('stage.close')}
          onClick={() => { stage.set(false) }}
          style={{
            border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer',
            width: 28, height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6,
          }}
        >
          <CloseIcon size={16} />
        </button>
      </div>

      <div style={{ flex: 'none', display: 'flex', gap: 8, padding: '0 20px 16px' }}>
        <button
          type="button"
          onClick={() => { setCreating(filterType || 'character'); setFormError('') }}
          style={{
            border: 'none',
            background: 'var(--dsw-alias-button-primary-fill, var(--dsw-alias-label-primary, currentColor))',
            color: 'var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #fff))',
            borderRadius: 999,
            padding: '8px 16px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <PlusIcon />
          {t('add.button')}
        </button>
      </div>

      <div style={{
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
        padding: '0 20px 12px',
        borderBottom: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
      }}
      >
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {[{ key: '', label: t('chip.all') }, ...ASSET_TYPE_KEYS.map((key) => ({ key, label: t(`type.${key}`) }))].map((chip) => {
            const active = filterType === chip.key
            return (
              <button
                key={chip.key || 'all'}
                type="button"
                onClick={() => { setFilterType(chip.key); setDetail(null); clearSelection() }}
                style={{
                  border: 'none',
                  background: active ? 'var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18))' : 'transparent',
                  color: active ? 'inherit' : 'var(--dsw-alias-label-secondary, inherit)',
                  borderRadius: 999,
                  padding: '4px 10px',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: active ? 500 : 400,
                }}
              >
                {chip.label}
              </button>
            )
          })}
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
          <input
            value={query}
            placeholder={t('search.placeholder')}
            onChange={(event) => { setQuery(event.target.value) }}
            style={{
              border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
              borderRadius: 999,
              padding: '6px 12px',
              fontSize: 13,
              minWidth: 180,
              background: 'transparent',
              color: 'inherit',
            }}
          />
          <span style={{ fontSize: 12, color: 'var(--dsw-alias-label-tertiary, inherit)' }}>{t('sort.updated')}</span>
        </div>
      </div>

      {selecting ? (
        <div style={{
          flex: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 20px',
          borderBottom: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
        }}
        >
          <span style={{ fontSize: 13 }}>{t('select.count').replace('{n}', String(selectedCount))}</span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              type="button"
              onClick={clearSelection}
              style={{
                border: 'none',
                background: 'transparent',
                color: 'inherit',
                cursor: 'pointer',
                fontSize: 13,
                padding: '4px 8px',
              }}
            >
              {t('select.clear')}
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={() => {
                const names = assets.filter((row) => selectedIds.has(row.id)).map((row) => row.name)
                setPendingRemove({ ids: [...selectedIds], names })
              }}
              style={{
                border: 'none',
                background: 'var(--dsw-alias-state-error-tertiary, var(--dsw-alias-interactive-bg-hover-danger, transparent))',
                color: 'var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))',
                borderRadius: 999,
                padding: '6px 12px',
                cursor: busy ? 'default' : 'pointer',
                fontSize: 13,
                fontWeight: 500,
                opacity: busy ? 0.5 : 1,
              }}
            >
              {t('select.delete').replace('{n}', String(selectedCount))}
            </button>
          </div>
        </div>
      ) : null}

      {error !== '' ? (
        <p style={{ margin: 0, padding: '6px 20px', fontSize: 12, color: 'var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))' }}>{error}</p>
      ) : null}

      <div style={{ flex: 1, minHeight: 0, display: 'flex', overflow: 'hidden' }}>
        <div style={{ flex: 1, minWidth: 0, overflow: 'auto', padding: 16 }}>
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
