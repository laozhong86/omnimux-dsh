import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Button, FilterBar, IconButton, SearchField } from 'dsh-ui-kit'
import { createProduct, deleteProduct, getState, pickPath, updateProduct } from './api.js'
import { ConfirmRemoveDialog } from './ConfirmRemoveDialog.jsx'
import { CloseIcon, PlusIcon, RefreshIcon } from './icons.jsx'
import { ProductFormDialog } from './ProductFormDialog.jsx'
import { ProductGrid } from './ProductGrid.jsx'
import { injectProductsStyles } from './styles.js'

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

function citeOf(product) {
  return product.cite || `@产品/${product.name}`
}

/**
 * Product library first-level page.
 * After first open, keep the subtree with display:none — never `if (!open) return null`.
 * @param {{
 *   t: (key: string) => string,
 *   stage: { getSnapshot: () => boolean, subscribe: Function, set: Function, readBox: Function },
 * }} props
 */
export function ProductsStage({ t, stage }) {
  useEffect(() => { injectProductsStyles() }, [])
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

  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [creating, setCreating] = useState(false)
  const [editing, setEditing] = useState(null)
  const [editingDirty, setEditingDirty] = useState(false)
  const [pendingRemove, setPendingRemove] = useState(null)
  const [selectedIds, setSelectedIds] = useState(() => new Set())
  const [error, setError] = useState('')
  const [formError, setFormError] = useState('')
  const [busy, setBusy] = useState(false)
  const [copiedId, setCopiedId] = useState('')
  const [revision, setRevision] = useState(null)
  const revisionRef = useRef(revision)
  const editingRef = useRef(editing)
  editingRef.current = editing

  const refreshState = useCallback((force = false) => {
    const current = revisionRef.current
    const usePrev = !force && current !== null
    return getState(usePrev ? current : undefined).then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t))
        return
      }
      setError('')
      const nextRev = Number(result.body.revision) || 0
      revisionRef.current = nextRev
      setRevision(nextRev)
      if (result.body.unchanged) return
      const nextProducts = Array.isArray(result.body.products) ? result.body.products : []
      setProducts(nextProducts)
      const live = new Set(nextProducts.map((row) => row.id))
      setSelectedIds((prev) => {
        const kept = [...prev].filter((id) => live.has(id))
        if (kept.length === prev.size) return prev
        return new Set(kept)
      })
      const openEdit = editingRef.current
      if (openEdit) {
        const fresh = nextProducts.find((row) => row.id === openEdit.id)
        if (fresh && fresh.updated_at !== openEdit.updated_at) {
          setEditingDirty(true)
          setEditing((currentEdit) => (currentEdit ? { ...currentEdit, _fresh: fresh } : currentEdit))
        }
      }
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

  const visible = products.filter((product) => {
    if (!query.trim()) return true
    const hay = `${product.name}\n${product.handle}\n${product.selling_points}\n${product.brand}\n${product.sku}\n${product.link}\n${(product.categories || []).join('\n')}`.toLowerCase()
    return hay.includes(query.trim().toLowerCase())
  })

  const selectedCount = selectedIds.size
  const selecting = selectedCount > 0

  const toggleSelect = (product) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(product.id)) next.delete(product.id)
      else next.add(product.id)
      return next
    })
  }

  const clearSelection = () => { setSelectedIds(new Set()) }

  if (!stage || !everOpened) return null

  return (
    <div
      role="region"
      aria-label={t('stage.title')}
      aria-hidden={open ? undefined : 'true'}
      className="omnimux-products-stage"
      data-visible={open ? 'true' : 'false'}
      style={{
        display: open ? undefined : 'none',
        '--stage-top': `${box.top}px`,
        '--stage-left': `${box.left}px`,
        '--stage-width': `${box.width}px`,
        '--stage-height': `${box.height}px`,
      }}
    >
      <div className="omnimux-products-stage-header">
        <div className="omnimux-products-stage-heading">
          <h1 className="omnimux-products-stage-title">{t('stage.title')}</h1>
          <p className="omnimux-products-stage-subtitle">{t('stage.subtitle')}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          leadingIcon={<RefreshIcon />}
          disabled={busy}
          onClick={() => {
            setBusy(true)
            void refreshState(true).finally(() => { setBusy(false) })
          }}
        >
          {busy ? t('stage.refreshing') : t('stage.refresh')}
        </Button>
        <IconButton
          aria-label={t('stage.close')}
          variant="ghost"
          onClick={() => { stage.set(false) }}
        >
          <CloseIcon size={16} />
        </IconButton>
      </div>

      <FilterBar
        className="omnimux-products-stage-toolbar"
        compact
        search={(
          <SearchField
            value={query}
            placeholder={t('search.placeholder')}
            aria-label={t('search.placeholder')}
            debounceMs={0}
            stretch
            onValueChange={setQuery}
          />
        )}
        filters={<span className="omnimux-products-label">{t('sort.updated')}</span>}
        actions={(
          <Button
            variant="primary"
            leadingIcon={<PlusIcon />}
            onClick={() => { setCreating(true); setFormError(''); setEditing(null); setEditingDirty(false) }}
          >
            {t('add.button')}
          </Button>
        )}
      />

      {selecting ? (
        <div className="omnimux-products-selection">
          <span>{t('select.count').replace('{n}', String(selectedCount))}</span>
          <div className="omnimux-products-selection-actions">
            <Button variant="ghost" size="sm" onClick={clearSelection}>
              {t('select.clear')}
            </Button>
            <Button
              variant="danger"
              size="sm"
              disabled={busy}
              onClick={() => {
                const names = products.filter((row) => selectedIds.has(row.id)).map((row) => row.name)
                setPendingRemove({ ids: [...selectedIds], names })
              }}
            >
              {t('select.delete').replace('{n}', String(selectedCount))}
            </Button>
          </div>
        </div>
      ) : null}

      {error !== '' ? <p className="omnimux-products-error">{error}</p> : null}

      <div className="omnimux-products-body">
        <ProductGrid
          t={t}
          products={visible}
          emptyLabel={query.trim() ? t('empty.noMatch') : t('empty.all')}
          emptyActionLabel={t('add.button')}
          showEmptyAction={!query.trim()}
          onEmptyAction={() => { setCreating(true); setFormError('') }}
          onOpen={(product) => {
            setCreating(false)
            setEditingDirty(false)
            setFormError('')
            setEditing(product)
          }}
          onCopy={(product) => {
            const text = citeOf(product)
            if (navigator.clipboard?.writeText) void navigator.clipboard.writeText(text)
            setCopiedId(product.id)
            window.setTimeout(() => { setCopiedId('') }, 1500)
          }}
          onRemove={(product) => { setPendingRemove({ ids: [product.id], names: [product.name] }) }}
          copiedId={copiedId}
          selectedIds={selectedIds}
          onToggleSelect={toggleSelect}
        />
      </div>

      {creating ? (
        <ProductFormDialog
          t={t}
          data={{ mode: 'create', busy, error: formError }}
          onAction={{
            onCancel: () => { setCreating(false); setFormError('') },
            onPick: handlePick,
            onSubmit: (payload) => {
              run(() => createProduct(payload), () => {
                setCreating(false)
              })
            },
          }}
        />
      ) : null}

      {editing ? (
        <ProductFormDialog
          t={t}
          data={{ mode: 'edit', busy, error: formError, dirty: editingDirty, initial: editing }}
          onAction={{
            onCancel: () => { setEditing(null); setEditingDirty(false); setFormError('') },
            onPick: handlePick,
            onReload: () => {
              if (!editing._fresh) return
              setEditing(editing._fresh)
              setEditingDirty(false)
            },
            onSubmit: (payload) => {
              run(() => updateProduct(editing.id, payload), (result) => {
                const product = result.body?.product
                setEditing(product ?? null)
                setEditingDirty(false)
              })
            },
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
                last = await deleteProduct(id)
                if (!last.ok) return last
              }
              return last
            }, () => {
              setPendingRemove(null)
              if (ids.includes(editing?.id)) {
                setEditing(null)
                setEditingDirty(false)
              }
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
