import { useEffect, useState } from 'react'
import { activateRowKeydown } from './a11y.js'
import { FileIcon, FolderIcon } from './icons.jsx'
import { listAssetFiles, previewUrl } from './api.js'

/**
 * @param {any} file
 */
export function isDirectoryRef(file) {
  return file?.kind === 'directory' || file?.is_dir === true
}

/**
 * One hanging folder → card click opens that folder's first layer.
 * Mixed files/folders stay on the top list.
 * @param {any} asset
 */
function initialStack(asset) {
  const files = Array.isArray(asset.files) ? asset.files : []
  const folders = files.filter(isDirectoryRef)
  if (folders.length === 1 && files.length === 1) return { file: folders[0], path: '' }
  return null
}

const muted = {
  margin: 0,
  fontSize: 13,
  color: 'var(--dsw-alias-label-tertiary, inherit)',
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: 12,
}

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|bmp|ico|avif|heic|tiff)$/i
const VIDEO_EXT = /\.(mp4|mov|avi|mkv|webm|m4v|flv)$/i

function mediaKind(row) {
  if (isDirectoryRef(row) || row?.is_dir) return 'folder'
  const kind = String(row?.kind || row?.type || '')
  if (kind === 'image' || kind === 'video') return kind
  const name = String(row?.name || row?.original_name || row?.real_path || '')
  if (IMAGE_EXT.test(name)) return 'image'
  if (VIDEO_EXT.test(name)) return 'video'
  return 'file'
}

/**
 * Main-pane hierarchical browse after clicking an asset card.
 * Same card grid as the library; images/videos stream from a read-only preview route.
 *
 * @param {{
 *   t: (key: string) => string,
 *   asset: any,
 *   onBack: () => void,
 * }} props
 */
export function AssetBrowse({ t, asset, onBack }) {
  const [stack, setStack] = useState(() => initialStack(asset))
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setStack(initialStack(asset))
    setEntries([])
    setError('')
  }, [asset.id])

  useEffect(() => {
    if (!stack) return undefined
    let cancelled = false
    setLoading(true)
    setError('')
    void listAssetFiles(asset.id, stack.file.id, stack.path).then((result) => {
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
  }, [asset.id, stack?.file?.id, stack?.path])

  const crumbs = stack
    ? [asset.name, stack.file.original_name || stack.file.real_path, ...String(stack.path || '').split('/').filter(Boolean)]
    : [asset.name]

  const goCrumb = (index) => {
    if (index <= 0) {
      onBack()
      return
    }
    if (!stack) return
    if (index === 1) {
      setStack({ file: stack.file, path: '' })
      return
    }
    const parts = String(stack.path || '').split('/').filter(Boolean)
    setStack({ file: stack.file, path: parts.slice(0, index - 1).join('/') })
  }

  const files = Array.isArray(asset.files) ? asset.files : []

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', fontSize: 13 }}>
        <button
          type="button"
          onClick={() => {
            if (!stack) {
              onBack()
              return
            }
            const parts = String(stack.path || '').split('/').filter(Boolean)
            if (parts.length === 0) setStack(null)
            else setStack({ file: stack.file, path: parts.slice(0, -1).join('/') })
          }}
          style={{
            border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
            background: 'transparent',
            color: 'inherit',
            borderRadius: 999,
            padding: '4px 10px',
            cursor: 'pointer',
            fontSize: 12,
          }}
        >
          {t('browse.back')}
        </button>
        {crumbs.map((crumb, index) => (
          <span key={`${crumb}-${index}`} style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
            {index > 0 ? <span style={{ color: 'var(--dsw-alias-label-tertiary, inherit)' }}>/</span> : null}
            <button
              type="button"
              onClick={() => { goCrumb(index) }}
              style={{
                border: 'none',
                background: 'transparent',
                color: index === crumbs.length - 1 ? 'inherit' : 'var(--dsw-alias-label-secondary, inherit)',
                cursor: 'pointer',
                padding: 0,
                fontWeight: index === crumbs.length - 1 ? 500 : 400,
              }}
            >
              {crumb}
            </button>
          </span>
        ))}
      </div>

      {stack ? (
        <>
          {loading ? <p style={muted}>{t('loading')}</p> : null}
          {error ? <p style={{ ...muted, color: 'var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))' }}>{error}</p> : null}
          {!loading && !error && entries.length === 0 ? <p style={muted}>{t('detail.emptyFolder')}</p> : null}
          {!loading && entries.length > 0 ? (
            <div style={grid}>
              {entries.map((entry) => {
                const folder = Boolean(entry.is_dir)
                const kind = mediaKind(entry)
                const src = folder
                  ? ''
                  : previewUrl(asset.id, stack.file.id, entry.relative_path || [stack.path, entry.name].filter(Boolean).join('/'))
                return (
                  <MediaCard
                    key={String(entry.relative_path || entry.name)}
                    t={t}
                    title={entry.name}
                    kind={kind}
                    src={src}
                    onOpen={folder
                      ? () => {
                          setStack({
                            file: stack.file,
                            path: entry.relative_path || [stack.path, entry.name].filter(Boolean).join('/'),
                          })
                        }
                      : undefined}
                  />
                )
              })}
            </div>
          ) : null}
        </>
      ) : (
        files.length === 0
          ? <p style={muted}>{t('browse.empty')}</p>
          : (
            <div style={grid}>
              {files.map((file) => {
                const folder = isDirectoryRef(file)
                const kind = mediaKind(file)
                const src = folder ? '' : previewUrl(asset.id, file.id)
                return (
                  <MediaCard
                    key={file.id}
                    t={t}
                    title={file.original_name || file.real_path}
                    kind={kind}
                    src={src}
                    onOpen={folder ? () => { setStack({ file, path: '' }) } : undefined}
                  />
                )
              })}
            </div>
          )
      )}
    </div>
  )
}

/**
 * @param {{
 *   t: (key: string) => string,
 *   title: string,
 *   kind: 'folder' | 'image' | 'video' | 'file',
 *   src?: string,
 *   onOpen?: () => void,
 * }} props
 */
function MediaCard({ t, title, kind, src, onOpen }) {
  const clickable = typeof onOpen === 'function'
  const activate = clickable ? onOpen : undefined
  const [broken, setBroken] = useState(false)
  const showImage = kind === 'image' && Boolean(src) && !broken
  const showVideo = kind === 'video' && Boolean(src) && !broken
  const badge = kind === 'folder'
    ? t('detail.folder')
    : kind === 'image'
      ? t('media.image')
      : kind === 'video'
        ? t('media.video')
        : t('detail.file')
  return (
    <article
      className="omnimux-assets-focusable"
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      aria-label={title}
      onClick={activate}
      onKeyDown={clickable ? activateRowKeydown(activate) : undefined}
      style={{
        border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
        borderRadius: 12,
        overflow: 'hidden',
        cursor: clickable ? 'pointer' : 'default',
        background: 'var(--dsw-alias-bg-base, var(--dsw-bg, inherit))',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{
        height: 148,
        background: 'var(--dsw-alias-bg-module-platform, var(--dsw-alias-interactive-bg-hover-solid, inherit))',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--dsw-alias-label-tertiary, inherit)',
        overflow: 'hidden',
      }}
      >
        {showImage ? (
          <img
            src={src}
            alt=""
            onError={() => { setBroken(true) }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : null}
        {showVideo ? (
          <video
            src={src}
            muted
            playsInline
            preload="metadata"
            controls
            aria-label={t('browse.previewVideo')}
            onClick={(event) => { event.stopPropagation() }}
            onError={() => { setBroken(true) }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', background: 'black' }}
          />
        ) : null}
        {!showImage && !showVideo ? (kind === 'folder' ? <FolderIcon size={28} /> : <FileIcon size={28} />) : null}
        <span style={{
          position: 'absolute',
          top: 8,
          right: 8,
          fontSize: 11,
          lineHeight: '16px',
          padding: '2px 8px',
          borderRadius: 999,
          background: 'var(--dsw-alias-bg-base, var(--dsw-bg, inherit))',
          border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
        }}
        >
          {badge}
        </span>
      </div>
      <div style={{ padding: '10px 12px 12px', minHeight: 44 }}>
        <div style={{
          fontSize: 13,
          fontWeight: 500,
          lineHeight: '20px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        >
          {title}
        </div>
      </div>
    </article>
  )
}
