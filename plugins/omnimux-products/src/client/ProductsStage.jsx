import { useCallback, useEffect, useRef, useState } from 'react'
import { Button, FilterBar, PageHeader, SearchField } from 'dsh-ui-kit'
import { createProduct, deleteProduct, getState, pickPath, updateProduct } from './api.js'
import { ConfirmRemoveDialog } from './ConfirmRemoveDialog.jsx'
import { PlusIcon, RefreshIcon } from './icons.jsx'
import { ProductFormDialog } from './ProductFormDialog.jsx'
import { ProductGrid } from './ProductGrid.jsx'
import { injectProductsStyles } from './styles.js'
import { WorkbenchFocusBar } from './WorkbenchFocusBar.jsx'

const POLL_MS = 5000
const TAB_ID = 'omnimux-products:library'

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
 * Product library workbench tab component in dsh-better-sidebar.
 * @param {{
 *   t: (key: string) => string,
 *   stage?: { getSnapshot: () => boolean, subscribe: Function, set: Function },
 *   store?: { reduce?: Function, getSnapshot?: Function },
 *   visible?: boolean,
 * }} props
 */
export function ProductsStage({ t, stage, store, visible = true }) {
  useEffect(() => { injectProductsStyles() }, [])

  useEffect(() => {
    const api = typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined
    if (!api || typeof api.attachStore !== 'function' || !store) return undefined
    api.attachStore(store)
    return () => { api.detachStore?.(store) }
  }, [store])

  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [creating, setCreating] = useState(false)
  const [editing, setEditing] = useState(null)
  const [formError, setFormError] = useState('')
  const [editingDirty, setEditingDirty] = useState(false)
  const [pendingRemove, setPendingRemove] = useState(null)
  const [copiedId, setCopiedId] = useState(null)
  const [selectedIds, setSelectedIds] = useState(() => new Set())

  const isFirstMount = useRef(true)

  const refreshState = useCallback(async (silent = false) => {
    if (!silent) setBusy(true)
    try {
      const res = await getState()
      if (res.ok && res.body?.state?.products) {
        setProducts(res.body.state.products)
        setError('')
      } else if (!res.ok) {
        setError(messageOf(res, t))
      }
    } catch (e) {
      setError(errText(e))
    } finally {
      if (!silent) setBusy(false)
    }
  }, [t])

  useEffect(() => {
    if (!visible) return undefined
    if (isFirstMount.current) {
      isFirstMount.current = false
      void refreshState(false)
    } else {
      void refreshState(true)
    }
    const timer = setInterval(() => { void refreshState(true) }, POLL_MS)
    return () => { clearInterval(timer) }
  }, [visible, refreshState])

  const handleCopyCite = (product) => {
    const cite = citeOf(product)
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      void navigator.clipboard.writeText(cite).then(() => {
        setCopiedId(product.id)
        setTimeout(() => { setCopiedId(null) }, 2000)
      })
    }
  }

  const handleSaveProduct = (data, id) => {
    setBusy(true)
    setFormError('')
    const action = id ? updateProduct(id, data) : createProduct(data)
    return action.then((result) => {
      if (!result.ok) {
        setFormError(messageOf(result, t))
        return
      }
      setCreating(false)
      setEditing(null)
      setEditingDirty(false)
      return refreshState(true)
    }).catch((caught) => {
      setFormError(errText(caught))
    }).finally(() => {
      setBusy(false)
    })
  }

  const handleConfirmDelete = () => {
    if (!pendingRemove) return
    const ids = pendingRemove.ids || (pendingRemove.product ? [pendingRemove.product.id] : [])
    setBusy(true)
    Promise.all(ids.map((id) => deleteProduct(id))).then((results) => {
      const failed = results.find((r) => !r.ok)
      if (failed) {
        setError(messageOf(failed, t))
        return
      }
      setSelectedIds((prev) => {
        const next = new Set(prev)
        for (const id of ids) next.delete(id)
        return next
      })
      setPendingRemove(null)
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

  const visibleProducts = products.filter((product) => {
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

  const handleClose = () => {
    const api = typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined
    if (api && typeof api.closeTab === 'function') {
      api.closeTab(TAB_ID)
    } else {
      stage?.set?.(false)
    }
  }

  return (
    <div
      role="region"
      aria-label={t('stage.title')}
      aria-hidden={visible ? undefined : 'true'}
      className="omnimux-products-stage"
      data-visible={visible ? 'true' : 'false'}
      style={{
        display: visible ? 'flex' : 'none',
        position: 'relative',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <PageHeader
        title={t('stage.title')}
        subtitle={t('stage.subtitle')}
        actions={<WorkbenchFocusBar t={t} />}
        onRefresh={() => {
          setBusy(true)
          void refreshState(true).finally(() => { setBusy(false) })
        }}
        refreshing={busy}
        refreshTitle={t('stage.refresh')}
        onClose={handleClose}
        closeTitle={t('stage.close')}
      />

      <div className="omnimux-products-action-row">
        <Button
          variant="primary"
          leadingIcon={<PlusIcon />}
          onClick={() => { setCreating(true); setFormError(''); setEditing(null); setEditingDirty(false) }}
        >
          {t('add.button')}
        </Button>
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
      />

      {selecting && (
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
                const names = products.filter((p) => selectedIds.has(p.id)).map((p) => p.name)
                setPendingRemove({ isBatch: true, ids: Array.from(selectedIds), names })
              }}
            >
              {t('select.delete').replace('{n}', String(selectedCount))}
            </Button>
          </div>
        </div>
      )}

      {error !== '' && <p className="omnimux-products-error">{error}</p>}

      <div className="omnimux-products-body">
        <ProductGrid
          products={visibleProducts}
          searching={query.trim() !== ''}
          selectedIds={selectedIds}
          copiedId={copiedId}
          onToggleSelect={toggleSelect}
          onEdit={(p) => { setEditing(p); setEditingDirty(false); setFormError(''); setCreating(false) }}
          onRemove={(p) => { setPendingRemove({ isBatch: false, product: p, names: [p.name] }) }}
          onCopy={handleCopyCite}
          onAdd={() => { setCreating(true); setFormError(''); setEditing(null); setEditingDirty(false) }}
          t={t}
        />
      </div>

      {creating && (
        <ProductFormDialog
          product={null}
          busy={busy}
          error={formError}
          dirty={false}
          onDirtyChange={() => {}}
          onPickPath={handlePick}
          onSave={handleSaveProduct}
          onClose={() => { setCreating(false); setFormError('') }}
          t={t}
        />
      )}

      {editing && (
        <ProductFormDialog
          product={editing}
          busy={busy}
          error={formError}
          dirty={editingDirty}
          onDirtyChange={setEditingDirty}
          onPickPath={handlePick}
          onSave={handleSaveProduct}
          onClose={() => { setEditing(null); setFormError(''); setEditingDirty(false) }}
          t={t}
        />
      )}

      {pendingRemove && (
        <ConfirmRemoveDialog
          t={t}
          name={String(pendingRemove.names[0] ?? '')}
          title={
            pendingRemove.isBatch
              ? t('confirm.deleteSelected').replace('{n}', String(pendingRemove.ids.length))
              : t('confirm.deleteTitle').replace('{name}', String(pendingRemove.names[0] ?? ''))
          }
          busy={busy}
          onCancel={() => { setPendingRemove(null) }}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  )
}
