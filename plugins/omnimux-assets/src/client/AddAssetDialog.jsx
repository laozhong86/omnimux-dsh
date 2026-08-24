import { useEffect, useRef, useState } from 'react'
import { FileIcon, FolderIcon } from './icons.jsx'

export const ASSET_TYPE_KEYS = ['character', 'scene', 'style', 'prop', 'knowledge', 'custom']

const overlay = {
  position: 'fixed',
  inset: 0,
  zIndex: 320,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--dsw-alias-bg-mask-1, rgba(0,0,0,.40))',
}

const sheet = {
  width: 560,
  maxWidth: 'calc(100vw - 48px)',
  maxHeight: 'calc(100vh - 48px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  background: 'var(--dsw-alias-bg-base, var(--dsw-bg, inherit))',
  color: 'var(--dsw-alias-label-primary, inherit)',
  borderRadius: 16,
  border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
}

const inputBare = {
  border: 'none',
  outline: 'none',
  background: 'transparent',
  color: 'inherit',
  font: 'inherit',
  width: '100%',
}

function AssetTypeDropdown({ value, onChange, t }) {
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
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={() => { setOpen((prev) => !prev) }}
        style={{
          border: '1px solid var(--dsw-alias-border-l2, rgba(255,255,255,0.12))',
          background: 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.06))',
          borderRadius: 8,
          padding: '4px 10px 4px 12px',
          fontSize: 13,
          color: 'inherit',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
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
            zIndex: 350,
            minWidth: 140,
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
 * Create-asset sheet: name + type + description + path refs + optional tags.
 * @param {{
 *   t: (key: string) => string,
 *   busy: boolean,
 *   presetType?: string,
 *   error?: string,
 *   onCancel: () => void,
 *   onPick: (kind: 'file' | 'directory') => Promise<string[]>,
 *   onSubmit: (payload: { name: string, type: string, description: string, tags: string[], files: { real_path: string }[] }) => void,
 * }} props
 */
export function AddAssetDialog({ t, busy, presetType = 'character', error, onCancel, onPick, onSubmit }) {
  const nameRef = useRef(null)
  const [name, setName] = useState('')
  const [type, setType] = useState(ASSET_TYPE_KEYS.includes(presetType) ? presetType : 'character')
  const [description, setDescription] = useState('')
  const [tagsOpen, setTagsOpen] = useState(false)
  const [tagDraft, setTagDraft] = useState('')
  const [tags, setTags] = useState([])
  const [files, setFiles] = useState([])

  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  const addTag = () => {
    const next = tagDraft.trim()
    if (!next) return
    if (tags.some((tag) => tag.toLowerCase() === next.toLowerCase())) {
      setTagDraft('')
      return
    }
    setTags([...tags, next])
    setTagDraft('')
  }

  const addPaths = (paths) => {
    const next = Array.isArray(paths) ? paths.filter((path) => typeof path === 'string' && path !== '') : []
    if (next.length === 0) return
    setFiles((current) => {
      const seen = new Set(current.map((file) => file.real_path))
      const extra = []
      for (const path of next) {
        if (seen.has(path)) continue
        seen.add(path)
        extra.push({ real_path: path })
      }
      return extra.length === 0 ? current : [...current, ...extra]
    })
  }

  const looksLikeFolder = (path) => typeof path === 'string' && /\/$/.test(path)

  const canSubmit = name.trim() !== '' && !busy

  return (
    <div
      style={overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onCancel()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('add.title')}
        style={sheet}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onCancel()
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 20px 8px' }}>
          <span style={{ color: 'var(--dsw-alias-label-tertiary, inherit)', fontSize: 18 }}>@</span>
          <input
            ref={nameRef}
            value={name}
            placeholder={t('add.namePlaceholder')}
            onChange={(event) => { setName(event.target.value) }}
            style={{ ...inputBare, fontSize: 18, fontWeight: 500, lineHeight: '28px' }}
          />
          <button
            type="button"
            aria-label={t('stage.close')}
            onClick={onCancel}
            style={{
              border: 'none', background: 'transparent', cursor: 'pointer',
              width: 28, height: 28, borderRadius: 8, color: 'inherit',
            }}
          >
            ×
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 20px 12px' }}>
          <AssetTypeDropdown value={type} onChange={setType} t={t} />
          <span style={{ color: 'var(--dsw-alias-border-l2, var(--dsw-border, currentColor))' }}>|</span>
          <input
            value={description}
            placeholder={t('add.descriptionPlaceholder')}
            onChange={(event) => { setDescription(event.target.value) }}
            style={{ ...inputBare, fontSize: 13, color: 'var(--dsw-alias-label-secondary, inherit)' }}
          />
        </div>
        <div style={{ borderTop: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))', padding: 16 }}>
          <div
            onDragOver={(event) => { event.preventDefault() }}
            onDrop={(event) => {
              event.preventDefault()
              const dropped = Array.from(event.dataTransfer?.files ?? [])
              addPaths(dropped.map((file) => (typeof file.path === 'string' ? file.path : '')).filter(Boolean))
            }}
            style={{
              width: '100%',
              minHeight: 128,
              border: '1px dashed var(--dsw-alias-border-l4, var(--dsw-alias-border-l3, currentColor))',
              borderRadius: 12,
              background: 'transparent',
              color: 'var(--dsw-alias-label-tertiary, inherit)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              fontSize: 13,
              padding: 16,
              boxSizing: 'border-box',
            }}
          >
            <FileIcon size={22} />
            {t('add.drop')}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => { void onPick('file').then(addPaths) }}
                style={{
                  border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
                  background: 'transparent',
                  color: 'inherit',
                  borderRadius: 999,
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: 12,
                }}
              >
                {t('add.pickFiles')}
              </button>
              <button
                type="button"
                onClick={() => { void onPick('directory').then(addPaths) }}
                style={{
                  border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
                  background: 'transparent',
                  color: 'inherit',
                  borderRadius: 999,
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: 12,
                }}
              >
                {t('add.pickFolders')}
              </button>
            </div>
          </div>
          {files.length > 0 ? (
            <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {files.map((file) => (
                <li key={file.real_path} style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--dsw-alias-label-secondary, inherit)', alignItems: 'center' }}>
                  {looksLikeFolder(file.real_path) ? <FolderIcon size={14} /> : <FileIcon size={14} />}
                  <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.real_path}</span>
                  {looksLikeFolder(file.real_path) ? (
                    <span style={{ fontSize: 11, color: 'var(--dsw-alias-label-tertiary, inherit)' }}>{t('add.folderBadge')}</span>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => { setFiles((current) => current.filter((row) => row.real_path !== file.real_path)) }}
                    style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'inherit' }}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div style={{ borderTop: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))', padding: '10px 16px 16px' }}>
          <button
            type="button"
            onClick={() => { setTagsOpen(!tagsOpen) }}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--dsw-alias-label-secondary, inherit)', fontSize: 13, padding: 0 }}
          >
            {tagsOpen ? '▾' : '▸'} {t('add.tags')}
          </button>
          {tagsOpen ? (
            <div style={{ marginTop: 8 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
                {tags.map((tag) => (
                  <span key={tag} style={{ fontSize: 12, padding: '2px 8px', borderRadius: 999, background: 'var(--dsw-alias-bg-module-platform, var(--dsw-alias-interactive-bg-hover-solid, inherit))' }}>
                    {tag}
                    <button
                      type="button"
                      onClick={() => { setTags(tags.filter((item) => item !== tag)) }}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', marginLeft: 4 }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                value={tagDraft}
                placeholder={t('add.tagsPlaceholder')}
                onChange={(event) => { setTagDraft(event.target.value) }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    addTag()
                  }
                }}
                style={{
                  ...inputBare,
                  border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
                  borderRadius: 8,
                  padding: '6px 10px',
                  fontSize: 13,
                }}
              />
            </div>
          ) : null}
          {error ? (
            <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))' }}>{error}</p>
          ) : null}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
            <button
              type="button"
              disabled={!canSubmit}
              onClick={() => {
                onSubmit({
                  name: name.trim(),
                  type,
                  description,
                  tags,
                  files,
                })
              }}
              style={{
                border: 'none',
                background: canSubmit ? 'var(--dsw-alias-button-primary-fill, var(--dsw-alias-label-primary, currentColor))' : 'var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
                color: 'var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #fff))',
                borderRadius: 999,
                padding: '8px 16px',
                fontSize: 14,
                fontWeight: 500,
                cursor: canSubmit ? 'pointer' : 'default',
              }}
            >
              {t('add.submit')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
