import { useEffect, useRef, useState } from 'react'
import { MAX_PROJECT_TITLE_LENGTH } from './limits.js'

const overlay = {
  position: 'fixed',
  inset: 0,
  zIndex: 320,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--dsw-alias-bg-mask-1)',
}

const sheet = {
  width: 420,
  maxWidth: 'calc(100vw - 48px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  background: 'var(--dsw-alias-bg-base)',
  color: 'var(--dsw-alias-label-primary)',
  borderRadius: 16,
  border: '1px solid var(--dsw-alias-border-l2)',
}

const field = {
  width: '100%',
  border: '1px solid var(--dsw-alias-border-l2)',
  borderRadius: 8,
  padding: '8px 10px',
  fontSize: 13,
  color: 'inherit',
  background: 'transparent',
  boxSizing: 'border-box',
}

const ghostButton = {
  border: '1px solid var(--dsw-alias-border-l2)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 999,
  padding: '8px 16px',
  fontSize: 14,
  cursor: 'pointer',
}

/**
 * 「新建本地项目」overlay。token 走 --dsw-alias-*（抄 ProductFormDialog）。
 * P0 只收名称，不画位置选择器。
 *
 * @param {{
 *   t: (key: string) => string,
 *   busy?: boolean,
 *   error?: string,
 *   onCancel: () => void,
 *   onSubmit: (title: string) => void,
 * }} props
 */
export function NewLocalProjectDialog({ t, busy = false, error, onCancel, onSubmit }) {
  const nameRef = useRef(null)
  const [name, setName] = useState('')

  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  const trimmed = name.trim()
  const canSubmit = trimmed !== '' && trimmed.length <= MAX_PROJECT_TITLE_LENGTH && !busy

  const submit = () => {
    if (!canSubmit) return
    onSubmit(trimmed)
  }

  return (
    <div
      style={overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !busy) onCancel()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="omnimux-new-local-project-title"
        style={sheet}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && !busy) {
            event.preventDefault()
            onCancel()
          }
          if (event.key === 'Enter' && canSubmit) {
            event.preventDefault()
            submit()
          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 20px 8px' }}>
          <h2
            id="omnimux-new-local-project-title"
            style={{ margin: 0, flex: 1, fontSize: 18, fontWeight: 500, lineHeight: '28px' }}
          >
            {t('projects.dialog.title')}
          </h2>
          <button
            type="button"
            aria-label={t('projects.close')}
            onClick={() => { if (!busy) onCancel() }}
            style={{
              border: 'none', background: 'transparent', cursor: busy ? 'default' : 'pointer',
              width: 28, height: 28, borderRadius: 8, color: 'inherit', fontSize: 18,
            }}
          >
            ×
          </button>
        </div>

        <div style={{ padding: '0 20px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label htmlFor="omnimux-new-local-project-name" style={{ fontSize: 13, color: 'var(--dsw-alias-label-secondary)' }}>
            {t('projects.dialog.nameLabel')}
          </label>
          <input
            id="omnimux-new-local-project-name"
            ref={nameRef}
            value={name}
            maxLength={MAX_PROJECT_TITLE_LENGTH}
            placeholder={t('projects.dialog.namePlaceholder')}
            disabled={busy}
            onChange={(event) => { setName(event.target.value) }}
            style={field}
          />
          <p style={{ margin: 0, fontSize: 12, lineHeight: '18px', color: 'var(--dsw-alias-label-tertiary)' }}>
            {t('projects.dialog.hint')}
          </p>
          {error ? (
            <p style={{ margin: 0, fontSize: 12, color: 'var(--dsw-alias-label-error)' }}>{error}</p>
          ) : null}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '10px 20px 16px' }}>
          <button type="button" disabled={busy} onClick={onCancel} style={ghostButton}>
            {t('projects.dialog.cancel')}
          </button>
          <button
            type="button"
            disabled={!canSubmit}
            onClick={submit}
            style={{
              border: 'none',
              background: canSubmit ? 'var(--dsw-alias-button-primary-fill)' : 'var(--dsw-alias-border-l2)',
              color: 'var(--dsw-alias-label-primary-foreground)',
              borderRadius: 999,
              padding: '8px 16px',
              fontSize: 14,
              fontWeight: 500,
              cursor: canSubmit ? 'pointer' : 'default',
            }}
          >
            {t('projects.dialog.submit')}
          </button>
        </div>
      </div>
    </div>
  )
}
