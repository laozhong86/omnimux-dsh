import { useState, useMemo } from 'react'
import { IconCloseOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { importLocalInspiration } from './api.js'

function detectPlatform(url) {
  if (!url) return ''
  const u = url.toLowerCase()
  if (u.includes('tiktok.com')) return 'TikTok'
  if (u.includes('instagram.com')) return 'Instagram'
  if (u.includes('youtube.com') || u.includes('youtu.be')) return 'YouTube'
  if (u.includes('twitter.com') || u.includes('x.com')) return 'X (Twitter)'
  return 'Web / Other'
}

/**
 * @param {{ t: (k: string) => string, onClose: () => void, onSuccess: () => void }} props
 */
export function InspirationImportDialog({ t, onClose, onSuccess }) {
  const [url, setUrl] = useState('')
  const [tags, setTags] = useState('')
  const [autoAnalyze, setAutoAnalyze] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const platformName = useMemo(() => detectPlatform(url), [url])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!url.trim()) return
    setLoading(true)
    setError('')
    try {
      const tagList = tags.split(',').map((s) => s.trim()).filter(Boolean)
      const res = await importLocalInspiration({
        url: url.trim(),
        tags: tagList,
        auto_analyze: autoAnalyze,
      })
      if (res.ok && res.body?.data) {
        setSuccess(true)
        setTimeout(() => {
          onSuccess()
          onClose()
        }, 800)
      } else {
        setError(res.body?.error || t('add.error'))
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t('add.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="omnimux-inspiration-modal-overlay" onClick={onClose}>
      <div className="omnimux-inspiration-modal" onClick={(e) => e.stopPropagation()}>
        <div className="omnimux-inspiration-modal-header">
          <h2>{t('add.dialogTitle')}</h2>
          <button
            type="button"
            className="omnimux-inspiration-btn-secondary"
            style={{ padding: 4, height: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={onClose}
            aria-label={t('close')}
          >
            <IconCloseOutline16 size={16} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="omnimux-inspiration-modal-body">
            {error ? <div style={{ color: '#ef4444', fontSize: 13 }}>{error}</div> : null}
            {success ? <div style={{ color: '#10b981', fontSize: 13 }}>{t('add.success')}</div> : null}

            <div className="omnimux-inspiration-field">
              <label>{t('add.urlLabel')}</label>
              <input
                type="url"
                required
                className="omnimux-inspiration-input"
                placeholder={t('add.urlPlaceholder')}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={loading}
              />
            </div>

            {platformName ? (
              <div className="omnimux-inspiration-field">
                <label>{t('add.platformLabel')}</label>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--dsw-alias-accent, #3b82f6)' }}>
                  {platformName}
                </div>
              </div>
            ) : null}

            <div className="omnimux-inspiration-field">
              <label>{t('add.tagsLabel')}</label>
              <input
                type="text"
                className="omnimux-inspiration-input"
                placeholder={t('add.tagsPlaceholder')}
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                disabled={loading}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
              <input
                type="checkbox"
                id="autoAnalyzeCheck"
                checked={autoAnalyze}
                onChange={(e) => setAutoAnalyze(e.target.checked)}
                disabled={loading}
              />
              <label htmlFor="autoAnalyzeCheck" style={{ fontSize: 13, cursor: 'pointer' }}>
                {t('add.autoAnalyze')}
              </label>
            </div>
          </div>
          <div className="omnimux-inspiration-modal-footer">
            <button type="button" className="omnimux-inspiration-btn-secondary" onClick={onClose} disabled={loading}>
              {t('close')}
            </button>
            <button type="submit" className="omnimux-inspiration-btn" disabled={loading || !url.trim()}>
              {loading ? t('add.importing') : t('add.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
