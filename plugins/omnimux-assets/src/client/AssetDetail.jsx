import { useEffect, useState } from 'react'
import { CloseIcon, FileIcon, FolderIcon } from './icons.jsx'
import { listAssetFiles } from './api.js'
import { ASSET_TYPE_KEYS } from './AddAssetDialog.jsx'
import { activateRowKeydown } from './a11y.js'

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
          <select value={type} onChange={(event) => { setType(event.target.value) }} style={{ width: '100%', border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))', borderRadius: 8, padding: '6px 8px', color: 'inherit', background: 'inherit' }}>
            {ASSET_TYPE_KEYS.map((key) => (
              <option key={key} value={key}>{t(`type.${key}`)}</option>
            ))}
          </select>
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
