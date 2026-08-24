import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { FOCUS_CSS } from './a11y.js'
import { createProduct, deleteProduct, getState, pickPath, updateProduct } from './api.js'
import { ConfirmRemoveDialog } from './ConfirmRemoveDialog.jsx'
import { CloseIcon, PlusIcon, RefreshIcon } from './icons.jsx'
import { ProductFormDialog } from './ProductFormDialog.jsx'
import { ProductGrid } from './ProductGrid.jsx'

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

const chromeButton = {
  border: '1px solid var(--dsw-alias-border-l2)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 999,
  cursor: 'pointer',
  fontSize: 13,
  lineHeight: '20px',
  padding: '6px 12px',
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

  if (!stage || !everOpened) return null

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
        background: 'var(--dsw-alias-bg-base)',
        color: 'var(--dsw-alias-label-primary)',
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
          <p style={{ margin: 0, fontSize: 13, lineHeight: '20px', color: 'var(--dsw-alias-label-secondary)' }}>{t('stage.subtitle')}</p>
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
          onClick={() => { setCreating(true); setFormError(''); setEditing(null); setEditingDirty(false) }}
          style={{
            border: 'none',
            background: 'var(--dsw-alias-button-primary-fill)',
            color: 'var(--dsw-alias-label-primary-foreground)',
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
        padding: '0 20px 12px',
        borderBottom: '1px solid var(--dsw-alias-border-l2)',
      }}
      >
        <input
          value={query}
          placeholder={t('search.placeholder')}
          onChange={(event) => { setQuery(event.target.value) }}
          style={{
            border: '1px solid var(--dsw-alias-border-l2)',
            borderRadius: 999,
            padding: '6px 12px',
            fontSize: 13,
            minWidth: 220,
            background: 'transparent',
            color: 'inherit',
          }}
        />
        <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--dsw-alias-label-tertiary)' }}>{t('sort.updated')}</span>
      </div>

      {error !== '' ? (
        <p style={{ margin: 0, padding: '6px 20px', fontSize: 12, color: 'var(--dsw-alias-label-error)' }}>{error}</p>
      ) : null}

      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: 16 }}>
        <ProductGrid
          t={t}
          products={visible}
          emptyLabel={t('empty.all')}
          emptyActionLabel={t('add.button')}
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
          onRemove={(product) => { setPendingRemove(product) }}
          copiedId={copiedId}
        />
      </div>

      {creating ? (
        <ProductFormDialog
          t={t}
          mode="create"
          busy={busy}
          error={formError}
          onCancel={() => { setCreating(false); setFormError('') }}
          onPick={handlePick}
          onSubmit={(payload) => {
            run(() => createProduct(payload), () => {
              setCreating(false)
            })
          }}
        />
      ) : null}

      {editing ? (
        <ProductFormDialog
          t={t}
          mode="edit"
          busy={busy}
          error={formError}
          dirty={editingDirty}
          initial={editing}
          onCancel={() => { setEditing(null); setEditingDirty(false); setFormError('') }}
          onPick={handlePick}
          onReload={() => {
            if (editing._fresh) {
              setEditing(editing._fresh)
              setEditingDirty(false)
            }
          }}
          onSubmit={(payload) => {
            run(() => updateProduct(editing.id, payload), (result) => {
              const product = result.body?.product
              setEditing(product ?? null)
              setEditingDirty(false)
            })
          }}
        />
      ) : null}

      {pendingRemove ? (
        <ConfirmRemoveDialog
          t={t}
          name={String(pendingRemove.name ?? '')}
          busy={busy}
          onCancel={() => { setPendingRemove(null) }}
          onConfirm={() => {
            const id = pendingRemove.id
            run(() => deleteProduct(id), () => {
              setPendingRemove(null)
              if (editing?.id === id) {
                setEditing(null)
                setEditingDirty(false)
              }
            })
          }}
        />
      ) : null}
    </div>
  )
}
