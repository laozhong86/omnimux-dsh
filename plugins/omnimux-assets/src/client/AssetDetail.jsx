import { useEffect, useRef, useState } from 'react'
import { CloseIcon, FileIcon, FolderIcon } from './icons.jsx'
import { listAssetFiles } from './api.js'
import { ASSET_TYPE_KEYS } from './AddAssetDialog.jsx'
import { activateRowKeydown } from './a11y.js'

function DetailTypeSelect({ value, onChange, t }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onPointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <button
        type="button"
        onClick={() => { setOpen((prev) => !prev) }}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid var(--dsw-alias-border-l2, rgba(255,255,255,0.12))',
          borderRadius: 8,
          padding: '6px 10px 6px 12px',
          color: 'inherit',
          background: 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.04))',
          fontSize: 13,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          ...(open ? { borderColor: 'var(--dsw-alias-brand-primary, #3b82f6)', boxShadow: '0 0 0 2px rgba(59,130,246,0.22)' } : {}),
        }}
      >
        <span>{t(`type.${value}`)}</span>
        <svg
          viewBox="0 0 16 16"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.18s ease', opacity: 0.7 }}
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>
      {open ? (
        <div
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            zIndex: 100,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: 4,
            borderRadius: 10,
            border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.14))',
            background: 'var(--dsw-alias-bg-elevated, #1c1c1f)',
            boxShadow: '0 10px 28px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {ASSET_TYPE_KEYS.map((key) => {
            const isSelected = key === value
            return (
              <button
                key={key}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(key)
                  setOpen(false)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                  width: '100%',
                  padding: '6px 10px',
                  border: 'none',
                  borderRadius: 6,
                  background: isSelected ? 'rgba(59,130,246,0.14)' : 'transparent',
                  color: isSelected ? '#60a5fa' : 'inherit',
                  fontSize: 13,
                  fontWeight: isSelected ? 500 : 400,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
                onMouseEnter={(event) => {
                  if (!isSelected) event.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                }}
                onMouseLeave={(event) => {
                  if (!isSelected) event.currentTarget.style.background = 'transparent'
                }}
              >
                <span>{t(`type.${key}`)}</span>
                {isSelected ? (
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3.5 8.5 3 3 6-6" />
                  </svg>
                ) : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

/**
 * @param {{
 *   t: (key: string) => string,
 *   asset: any,
 *   busy: boolean,
 *   onClose: () => void,
 *   onSave: (patch: object) => void,
 * }} props
 */
export function AssetDetail({ t, asset, busy, onClose, onSave }) {
  const [name, setName] = useState(asset.name)
  const [type, setType] = useState(asset.type)
  const [description, setDescription] = useState(asset.description || '')
  const [browse, setBrowse] = useState(null)

  useEffect(() => {
    setName(asset.name)
    setType(asset.type)
    setDescription(asset.description || '')
    setBrowse(null)
  }, [asset.id, asset.name, asset.type, asset.description])

  return (
    <aside style={{
      flex: 'none',
      width: 320,
      overflow: 'auto',
      borderLeft: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
      background: 'var(--dsw-alias-bg-base, var(--dsw-bg, inherit))',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))' }}>
        <h2 style={{ margin: 0, flex: 1, fontSize: 13, fontWeight: 600 }}>{t('detail.title')}</h2>
        <button
          type="button"
          aria-label={t('detail.close')}
          onClick={onClose}
          style={{ border: 'none', background: 'transparent', cursor: 'pointer', width: 24, height: 24 }}
        >
          <CloseIcon size={16} />
        </button>
      </div>
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13 }}>
        <label>
          <div style={{ fontSize: 11, color: 'var(--dsw-alias-label-tertiary, inherit)', marginBottom: 4 }}>{t('detail.name')}</div>
          <input value={name} onChange={(event) => { setName(event.target.value) }} style={{ width: '100%', border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))', borderRadius: 8, padding: '6px 8px', color: 'inherit', background: 'inherit' }} />
        </label>
        <label>
          <div style={{ fontSize: 11, color: 'var(--dsw-alias-label-tertiary, inherit)', marginBottom: 4 }}>{t('detail.type')}</div>
          <DetailTypeSelect value={type} onChange={setType} t={t} />
        </label>
        <label>
          <div style={{ fontSize: 11, color: 'var(--dsw-alias-label-tertiary, inherit)', marginBottom: 4 }}>{t('detail.description')}</div>
          <textarea value={description} onChange={(event) => { setDescription(event.target.value) }} rows={6} style={{ width: '100%', border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))', borderRadius: 8, padding: '6px 8px', resize: 'vertical', color: 'inherit', background: 'inherit' }} />
        </label>
        <div>
          <div style={{ fontSize: 11, color: 'var(--dsw-alias-label-tertiary, inherit)', marginBottom: 4 }}>{t('detail.cite')}</div>
          <code style={{ fontSize: 12 }}>{asset.cite || `@${asset.type}/${asset.name}`}</code>
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'var(--dsw-alias-label-tertiary, inherit)', marginBottom: 4 }}>{t('detail.files')}</div>
          {browse ? (
            <FolderBrowse
              t={t}
              assetId={asset.id}
              file={browse.file}
              onBack={() => { setBrowse(null) }}
            />
          ) : (
            <TopFileList t={t} files={asset.files || []} onOpenFolder={(file) => { setBrowse({ file }) }} />
          )}
        </div>
        <button
          type="button"
          disabled={busy || name.trim() === ''}
          onClick={() => { onSave({ name: name.trim(), type, description }) }}
          style={{
            border: 'none',
            background: 'var(--dsw-alias-button-primary-fill, var(--dsw-alias-label-primary, currentColor))',
            color: 'var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #fff))',
            borderRadius: 999,
            padding: '8px 14px',
            cursor: 'pointer',
          }}
        >
          {t('detail.save')}
        </button>
      </div>
    </aside>
  )
}

function isDirectoryRef(file) {
  return file?.kind === 'directory' || file?.is_dir === true
}

function TopFileList({ t, files, onOpenFolder }) {
  if (files.length === 0) {
    return <p style={{ margin: 0, color: 'var(--dsw-alias-label-tertiary, inherit)' }}>—</p>
  }
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
      {files.map((file) => {
        const folder = isDirectoryRef(file)
        const activate = folder ? () => { onOpenFolder(file) } : undefined
        return (
          <li key={file.id}>
            <button
              type="button"
              className="omnimux-assets-focusable"
              disabled={!folder}
              onClick={activate}
              onKeyDown={folder ? activateRowKeydown(activate) : undefined}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                textAlign: 'left',
                border: 'none',
                background: 'transparent',
                color: 'inherit',
                cursor: folder ? 'pointer' : 'default',
                padding: '4px 0',
                fontSize: 12,
              }}
            >
              {folder ? <FolderIcon size={14} /> : <FileIcon size={14} />}
              <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {file.original_name || file.real_path}
              </span>
              <span style={{ color: 'var(--dsw-alias-label-tertiary, inherit)', fontSize: 11 }}>
                {folder ? t('detail.browse') : t('detail.file')}
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

function FolderBrowse({ t, assetId, file, onBack }) {
  const [path, setPath] = useState('')
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')
    void listAssetFiles(assetId, file.id, path).then((result) => {
      if (cancelled) return
      if (!result.ok) {
        setError(String(result.body?.message || result.body?.error || `HTTP ${String(result.status)}`))
        setEntries([])
        setLoading(false)
        return
      }
      setEntries(Array.isArray(result.body?.entries) ? result.body.entries : [])
      setLoading(false)
    }).catch((caught) => {
      if (cancelled) return
      setError(caught instanceof Error ? caught.message : String(caught))
      setEntries([])
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [assetId, file.id, path])

  const crumbs = path === '' ? [] : path.split('/').filter(Boolean)

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', marginBottom: 8, fontSize: 12 }}>
        <button
          type="button"
          onClick={() => {
            if (path === '') onBack()
            else setPath(crumbs.slice(0, -1).join('/'))
          }}
          style={{
            border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
            background: 'transparent',
            color: 'inherit',
            borderRadius: 999,
            padding: '2px 8px',
            cursor: 'pointer',
            fontSize: 12,
          }}
        >
          {t('detail.back')}
        </button>
        <button
          type="button"
          onClick={() => { setPath('') }}
          style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', padding: 0 }}
        >
          {file.original_name || t('detail.root')}
        </button>
        {crumbs.map((crumb, index) => (
          <span key={`${crumb}-${index}`} style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
            <span style={{ color: 'var(--dsw-alias-label-tertiary, inherit)' }}>/</span>
            <button
              type="button"
              onClick={() => { setPath(crumbs.slice(0, index + 1).join('/')) }}
              style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', padding: 0 }}
            >
              {crumb}
            </button>
          </span>
        ))}
      </div>
      {loading ? <p style={{ margin: 0, color: 'var(--dsw-alias-label-tertiary, inherit)' }}>{t('loading')}</p> : null}
      {error ? <p style={{ margin: 0, color: 'var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))' }}>{error}</p> : null}
      {!loading && !error && entries.length === 0 ? (
        <p style={{ margin: 0, color: 'var(--dsw-alias-label-tertiary, inherit)' }}>{t('detail.emptyFolder')}</p>
      ) : null}
      {!loading && entries.length > 0 ? (
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {entries.map((entry) => {
            const folder = Boolean(entry.is_dir)
            const activate = folder
              ? () => { setPath(entry.relative_path || [path, entry.name].filter(Boolean).join('/')) }
              : undefined
            return (
              <li key={String(entry.relative_path || entry.name)}>
                <button
                  type="button"
                  className="omnimux-assets-focusable"
                  disabled={!folder}
                  onClick={activate}
                  onKeyDown={folder ? activateRowKeydown(activate) : undefined}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    textAlign: 'left',
                    border: 'none',
                    background: 'transparent',
                    color: 'inherit',
                    cursor: folder ? 'pointer' : 'default',
                    padding: '4px 0',
                    fontSize: 12,
                  }}
                >
                  {folder ? <FolderIcon size={14} /> : <FileIcon size={14} />}
                  <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {entry.name}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
