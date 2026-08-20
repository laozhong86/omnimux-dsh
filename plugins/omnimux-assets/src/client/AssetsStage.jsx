import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { FOCUS_CSS } from './a11y.js'
import { CloseIcon, RefreshIcon } from './icons.jsx'
import {
  addMapping,
  deleteMapping,
  getState,
  listArtifacts,
  listFiles,
  pickPath,
  renameMapping,
  rescanMapping,
} from './api.js'
import { MappingNav } from './MappingNav.jsx'
import { ArtifactNav } from './ArtifactNav.jsx'
import { FileTable } from './FileTable.jsx'
import { ArtifactTable } from './ArtifactTable.jsx'
import { DetailPanel } from './DetailPanel.jsx'
import { ConfirmRemoveDialog } from './ConfirmRemoveDialog.jsx'

const POLL_MS = 5000

/**
 * @param {{ ok: boolean, status: number, body: any }} result
 * @param {(key: string) => string} t
 */
function messageOf(result, t) {
  return String(result.body?.message || result.body?.error || `HTTP ${String(result.status)}` || t('error.generic'))
}

/**
 * @param {unknown} caught
 */
function errText(caught) {
  return caught instanceof Error ? caught.message : String(caught)
}

/**
 * Map a failed pick result to a localized hint.
 * @param {{ status: number, body: any }} result
 * @param {(key: string) => string} t
 */
function pickErrorText(result, t) {
  const code = String(result.body?.error ?? '')
  if (code === 'picker-unsupported') return t('error.pickerUnsupported')
  if (code === 'picker-failed') return t('error.pickerFailed')
  return messageOf(result, t)
}

const chromeButton = {
  border: '1px solid var(--dsw-alias-border, var(--dsw-border, currentColor))',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 12,
  lineHeight: '20px',
  padding: '2px 10px',
}

/**
 * Breadcrumb segment: quiet link for ancestors, solid label for the current
 * directory.
 * @param {boolean} isCurrent
 */
function breadcrumbButton(isCurrent) {
  return {
    border: 'none',
    background: 'transparent',
    cursor: isCurrent ? 'default' : 'pointer',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '20px',
    padding: '0 2px',
    borderRadius: 4,
    color: isCurrent
      ? 'inherit'
      : 'var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))',
  }
}

/**
 * First-level assets page: top chrome over a left-nav + main layout,
 * revision-polled while open.
 * @param {{
 *   t: (key: string) => string,
 *   stage: { getSnapshot: () => boolean, subscribe: Function, set: Function },
 * }} props
 */
export function AssetsStage({ t, stage }) {
  const open = useSyncExternalStore(
    stage ? stage.subscribe : () => () => {},
    stage ? stage.getSnapshot : () => false,
  )
  const [box, setBox] = useState(() => ({ top: 0, left: 0, width: 0, height: 0 }))

  useLayoutEffect(() => {
    if (!open) return undefined
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
  }, [open])

  const [mappings, setMappings] = useState([])
  const [allArtifacts, setAllArtifacts] = useState([])
  const [files, setFiles] = useState([])
  const [view, setView] = useState({ kind: 'artifacts', type: '', subPath: '' })
  const [detail, setDetail] = useState(null)
  const [pendingRemove, setPendingRemove] = useState(null)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [revisions, setRevisions] = useState({ mrev: null, arev: null })
  const revisionsRef = useRef(revisions)

  const refreshState = useCallback((force = false) => {
    const current = revisionsRef.current
    const useRevs = !force && current.mrev !== null && current.arev !== null
    return getState(useRevs ? current.mrev : undefined, useRevs ? current.arev : undefined).then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t))
        return
      }
      setError('')
      const next = { mrev: Number(result.body.mrev) || 0, arev: Number(result.body.arev) || 0 }
      revisionsRef.current = next
      setRevisions(next)
      if (result.body.unchanged) return
      setMappings(Array.isArray(result.body.mappings) ? result.body.mappings : [])
    }).catch((caught) => {
      setError(errText(caught))
    })
  }, [t])

  const reloadArtifacts = useCallback(() => {
    return listArtifacts().then((result) => {
      if (result.ok) setAllArtifacts(Array.isArray(result.body.artifacts) ? result.body.artifacts : [])
      else setError(messageOf(result, t))
    }).catch((caught) => {
      setError(errText(caught))
    })
  }, [t])

  const reloadFiles = useCallback(() => {
    if (view.kind !== 'mapping' || !view.id) {
      setFiles([])
      return Promise.resolve()
    }
    return listFiles(view.id, view.subPath ?? '').then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t))
        return
      }
      setError('')
      setFiles(Array.isArray(result.body.files) ? result.body.files : [])
      const mapping = result.body.mapping
      if (mapping && typeof mapping.id === 'string') {
        setMappings((prev) => prev.map((row) => (row.id === mapping.id ? { ...row, ...mapping } : row)))
      }
    }).catch((caught) => {
      setError(errText(caught))
    })
  }, [t, view.kind, view.id, view.subPath])

  useEffect(() => {
    if (!open) return undefined
    void refreshState(true)
  }, [open, refreshState])

  useEffect(() => {
    if (!open) return undefined
    void reloadArtifacts()
  }, [open, revisions.arev, reloadArtifacts])

  useEffect(() => {
    if (!open) return undefined
    void reloadFiles()
  }, [open, reloadFiles])

  useEffect(() => {
    if (!open) return undefined
    const timer = setInterval(() => { void refreshState() }, POLL_MS)
    return () => { clearInterval(timer) }
  }, [open, refreshState])

  /**
   * @param {() => Promise<{ ok: boolean, status: number, body: any }>} work
   * @param {(result: { ok: boolean, status: number, body: any }) => void} [after]
   */
  const run = (work, after) => {
    setBusy(true)
    setError('')
    void Promise.resolve(work()).then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t))
        return
      }
      if (after) after(result)
      return refreshState(true)
    }).catch((caught) => {
      setError(errText(caught))
    }).finally(() => {
      setBusy(false)
    })
  }

  /**
   * Pick-then-add flow: the OS chooser returns a path; the mapping inherits
   * the basename as its initial display name (rename is one menu away).
   * @param {'file' | 'directory'} kind
   */
  const handleAddPicked = (kind) => {
    setBusy(true)
    setError('')
    void pickPath(kind).then((result) => {
      if (!result.ok) {
        setError(pickErrorText(result, t))
        return
      }
      const path = typeof result.body?.path === 'string' ? result.body.path : null
      if (path === null) return // user cancelled the OS chooser
      const clean = path.replace(/\/+$/, '')
      const base = clean.split('/').pop() || clean
      return run(() => addMapping(clean, base), (addedResult) => {
        const mapping = addedResult.body?.mapping
        if (mapping && typeof mapping.id === 'string') {
          setView({ kind: 'mapping', id: mapping.id, subPath: '' })
          setDetail(null)
          setFiles([])
        }
      })
    }).catch((caught) => {
      setError(errText(caught))
    }).finally(() => {
      setBusy(false)
    })
  }

  const handleRename = (id, name) => {
    run(() => renameMapping(id, name))
  }

  const handleConfirmRemove = (mapping) => {
    run(() => deleteMapping(mapping.id), () => {
      setPendingRemove(null)
      if (view.kind === 'mapping' && view.id === mapping.id) {
        setView({ kind: 'artifacts', type: '' })
        setFiles([])
        setDetail(null)
      }
    })
  }

  const handleRescan = (id) => {
    run(() => rescanMapping(id), (result) => {
      setFiles(Array.isArray(result.body?.files) ? result.body.files : [])
    })
  }

  const handleManualRefresh = () => {
    void refreshState(true)
    void reloadArtifacts()
    void reloadFiles()
  }

  /** Drill one level deeper into the current mapping. */
  const handleEnterDir = (file) => {
    if (view.kind !== 'mapping') return
    const next = view.subPath ? `${view.subPath}/${file.name}` : String(file.name)
    setView({ ...view, subPath: next })
    setDetail(null)
  }

  /** Breadcrumb jump: '' = mapping root. */
  const handleBreadcrumb = (subPath) => {
    if (view.kind !== 'mapping') return
    setView({ ...view, subPath })
    setDetail(null)
  }

  if (!open || !stage) return null

  const currentMapping = view.kind === 'mapping' ? mappings.find((row) => row.id === view.id) : undefined
  const visibleArtifacts = view.kind === 'artifacts'
    ? allArtifacts.filter((row) => !view.type || row.type === view.type)
    : []

  return (
    <div
      role="region"
      aria-label={t('stage.title')}
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
        overflow: 'auto',
      }}
    >
      <style>{FOCUS_CSS}</style>
      <div style={{
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 32,
        padding: '12px 20px 12px',
        WebkitAppRegion: 'no-drag',
      }}
      >
        <h1 style={{
          margin: 0,
          flex: 1,
          minWidth: 0,
          fontSize: 16,
          fontWeight: 600,
          lineHeight: '32px',
        }}
        >
          {t('stage.title')}
        </h1>
        <button
          type="button"
          style={{ ...chromeButton, display: 'inline-flex', alignItems: 'center', gap: 5 }}
          onClick={handleManualRefresh}
        >
          <RefreshIcon />
          {t('stage.refresh')}
        </button>
        <button
          type="button"
          aria-label={t('stage.close')}
          onClick={() => { stage.set(false) }}
          style={{
            WebkitAppRegion: 'no-drag',
            border: 'none',
            background: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            width: 28,
            height: 28,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            padding: 0,
          }}
        >
          <CloseIcon size={16} />
        </button>
      </div>
      <div style={{ flex: 1, minHeight: 0, display: 'flex', overflow: 'hidden' }}>
        <nav style={{
          flex: 'none',
          width: 220,
          overflow: 'auto',
          padding: '8px 0',
          borderRight: '1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.25)))',
        }}
        >
          <MappingNav
            t={t}
            mappings={mappings}
            activeId={view.kind === 'mapping' ? view.id : ''}
            busy={busy}
            onSelect={(id) => { setView({ kind: 'mapping', id, subPath: '' }); setDetail(null) }}
            onAddFile={() => { handleAddPicked('file') }}
            onAddDir={() => { handleAddPicked('directory') }}
            onRename={handleRename}
            onRemove={(mapping) => { setPendingRemove(mapping) }}
          />
          <ArtifactNav
            t={t}
            artifacts={allArtifacts}
            activeType={view.kind === 'artifacts' ? view.type : null}
            onSelect={(type) => { setView({ kind: 'artifacts', type }); setDetail(null) }}
          />
        </nav>
        <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{
            flex: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap',
            padding: '10px 16px',
            borderBottom: '1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.25)))',
          }}
          >
            {view.kind === 'mapping' && currentMapping
              ? (
                <nav aria-label="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', minWidth: 0 }}>
                  <button
                    type="button"
                    style={breadcrumbButton(!(view.subPath))}
                    onClick={() => { handleBreadcrumb('') }}
                  >
                    {currentMapping.display_name}
                  </button>
                  {(view.subPath ? view.subPath.split('/') : []).map((segment, index, all) => {
                    const prefix = all.slice(0, index + 1).join('/')
                    const isLast = index === all.length - 1
                    return (
                      <span key={prefix} style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
                        <span style={{ color: 'var(--dsw-alias-label-secondary, rgba(128,128,128,.9))', fontSize: 12 }}>/</span>
                        <button
                          type="button"
                          style={breadcrumbButton(isLast)}
                          onClick={() => { handleBreadcrumb(prefix) }}
                        >
                          {segment}
                        </button>
                      </span>
                    )
                  })}
                </nav>
              )
              : (
                <h2 style={{ margin: 0, fontSize: 14, fontWeight: 600, lineHeight: '20px' }}>
                  {view.type ? t(`type.${view.type}`) : t('artifact.all')}
                </h2>
              )}
            {view.kind === 'mapping' && currentMapping && currentMapping.status !== 'ok'
              ? <span style={{ fontSize: 12, color: 'var(--dsw-alias-label-warning, #d48806)' }}>⚠ {t('mapping.invalid')}</span>
              : null}
            {view.kind === 'mapping' && currentMapping
              ? (
                <button
                  type="button"
                  style={chromeButton}
                  disabled={busy || currentMapping.status !== 'ok'}
                  onClick={() => { handleRescan(currentMapping.id) }}
                >
                  {t('mapping.rescan')}
                </button>
              )
              : null}
            {view.kind === 'artifacts'
              ? (
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['image', 'video', 'audio', 'document', 'html', 'json'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      style={{
                        ...chromeButton,
                        ...(view.type === type ? { fontWeight: 600 } : {}),
                      }}
                      onClick={() => { setView({ kind: 'artifacts', type: view.type === type ? '' : type }); setDetail(null) }}
                    >
                      {t(`type.${type}`)}
                    </button>
                  ))}
                </div>
              )
              : null}
          </div>
          {error !== '' ? (
            <p style={{ margin: 0, padding: '6px 16px', fontSize: 12, color: 'var(--dsw-alias-label-danger, #d45656)' }}>
              {error}
            </p>
          ) : null}
          <div style={{ flex: 1, minHeight: 0, display: 'flex', overflow: 'hidden' }}>
            <div style={{ flex: 1, minWidth: 0, overflow: 'auto', padding: '8px 16px' }}>
              {view.kind === 'mapping'
                ? (
                  <FileTable
                    t={t}
                    mapping={currentMapping}
                    files={files}
                    onOpenFile={(file) => { setDetail({ kind: 'file', file, mapping: currentMapping }) }}
                    onEnterDir={handleEnterDir}
                  />
                )
                : (
                  <ArtifactTable
                    t={t}
                    artifacts={visibleArtifacts}
                    onOpen={(artifact) => { setDetail({ kind: 'artifact', artifact }) }}
                  />
                )}
            </div>
            {detail ? <DetailPanel t={t} detail={detail} onClose={() => { setDetail(null) }} /> : null}
          </div>
        </main>
      </div>
      {pendingRemove ? (
        <ConfirmRemoveDialog
          t={t}
          name={String(pendingRemove.display_name)}
          busy={busy}
          onCancel={() => { setPendingRemove(null) }}
          onConfirm={() => { handleConfirmRemove(pendingRemove) }}
        />
      ) : null}
    </div>
  )
}
