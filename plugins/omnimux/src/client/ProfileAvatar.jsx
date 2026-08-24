import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { card, tokens } from './profile-styles.js'

/** Hue presets, kept in sync with src/avatar/avatar.js. */
export const HUES = [12, 90, 150, 210, 280, 320]

export function AvatarFace({ uri, initial, size = 44 }) {
  const inner = uri ? (
    <img
      src={uri}
      width={size}
      height={size}
      alt=""
      style={{ width: size, height: size, borderRadius: '50%', display: 'block' }}
    />
  ) : (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size > 60 ? 28 : 18,
      fontWeight: 600,
      background: tokens.primaryFill,
      color: tokens.primaryLabel,
    }}>
      {initial}
    </div>
  )
  return inner
}

export function EditableAvatar({ t, uri, initial, onOpen }) {
  return (
    <div className="omx-avatar" onClick={onOpen} title={t('avatar.edit')}>
      <AvatarFace uri={uri} initial={initial} />
      <div className="omx-avatar-edit">{t('avatar.edit')}</div>
    </div>
  )
}

export function AvatarModal({ t, avatar, initial, busy, error, onApply, onClose }) {
  const fileRef = useRef(null)
  const activeHue = typeof avatar?.opts?.hue === 'number' ? avatar.opts.hue : null

  useEffect(() => {
    function onKey(event) {
      if (event.key !== 'Escape') return
      event.stopPropagation()
      onClose()
    }
    document.addEventListener('keydown', onKey, true)
    return () => document.removeEventListener('keydown', onKey, true)
  }, [onClose])

  function pickFile(event) {
    const file = event.target.files && event.target.files[0]
    event.target.value = ''
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = typeof reader.result === 'string' ? reader.result : ''
      if (dataUrl) void onApply({ upload: dataUrl })
    }
    reader.readAsDataURL(file)
  }

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1100,
        background: 'var(--dsw-alias-bg-mask-1, rgba(0,0,0,.45))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          ...card,
          background: 'var(--dsw-alias-bg-secondary, #1f2128)',
          border: `1px solid ${tokens.border}`,
          borderRadius: 12,
          width: 320,
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{t('avatar.title')}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AvatarFace uri={avatar?.uri} initial={initial} size={96} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: tokens.textSecondary }}>{t('avatar.hue')}</span>
          {HUES.map((hue) => (
            <button
              key={hue}
              type="button"
              aria-label={`${t('avatar.hue')} ${hue}`}
              disabled={busy}
              onClick={() => { void onApply({ hue }) }}
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                padding: 0,
                cursor: busy ? 'default' : 'pointer',
                background: `hsl(${hue} 70% 55%)`,
                border: activeHue === hue ? `2px solid ${tokens.text}` : `1px solid ${tokens.border}`,
                boxSizing: 'border-box',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button type="button" className="omx-btn omx-btn-primary" disabled={busy} onClick={() => { void onApply({ reroll: true }) }}>
            {t('avatar.reroll')}
          </button>
          <button type="button" className="omx-btn omx-btn-ghost" disabled={busy} onClick={() => fileRef.current?.click()}>
            {t('avatar.upload')}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            style={{ display: 'none' }}
            onChange={pickFile}
          />
          <button
            type="button"
            className="omx-btn omx-btn-ghost"
            disabled={busy || avatar?.using_default !== false}
            onClick={() => { void onApply({ reset: true }) }}
          >
            {t('avatar.reset')}
          </button>
        </div>
        <p style={{ margin: 0, fontSize: 11, color: tokens.textSecondary }}>{t('avatar.uploadHint')}</p>
        {error ? <p style={{ margin: 0, fontSize: 12, color: tokens.error, lineHeight: 1.5 }}>{error}</p> : null}

        <button type="button" className="omx-btn omx-btn-ghost" style={{ alignSelf: 'flex-end' }} onClick={onClose}>
          {t('avatar.close')}
        </button>
      </div>
    </div>,
    document.body,
  )
}
