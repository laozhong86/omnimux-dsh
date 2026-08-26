import { useState, useMemo } from 'react'
import { Button, InputField, ModalDialog } from 'dsh-ui-kit'
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
    <ModalDialog
      open
      onClose={onClose}
      title={t('add.dialogTitle')}
      closeLabel={t('close')}
      footer={(
        <>
          <Button variant="outline" onClick={onClose} disabled={loading}>{t('close')}</Button>
          <Button
            variant="primary"
            loading={loading}
            disabled={loading || !url.trim()}
            onClick={(event) => { void handleSubmit(event) }}
          >
            {loading ? t('add.importing') : t('add.submit')}
          </Button>
        </>
      )}
    >
      <form className="omnimux-inspiration-import-body" onSubmit={handleSubmit}>
        {error ? <div className="omnimux-inspiration-error-text" role="alert">{error}</div> : null}
        {success ? <div className="omnimux-inspiration-success-text">{t('add.success')}</div> : null}

        <InputField
          type="url"
          required
          label={t('add.urlLabel')}
          placeholder={t('add.urlPlaceholder')}
          value={url}
          disabled={loading}
          onChange={(e) => setUrl(e.target.value)}
        />

        {platformName ? (
          <div className="omnimux-inspiration-field">
            <span className="omnimux-inspiration-field-label">{t('add.platformLabel')}</span>
            <div className="omnimux-inspiration-platform-name">{platformName}</div>
          </div>
        ) : null}

        <InputField
          type="text"
          label={t('add.tagsLabel')}
          placeholder={t('add.tagsPlaceholder')}
          value={tags}
          disabled={loading}
          onChange={(e) => setTags(e.target.value)}
        />

        <label className="omnimux-inspiration-check">
          <input
            type="checkbox"
            id="autoAnalyzeCheck"
            checked={autoAnalyze}
            onChange={(e) => setAutoAnalyze(e.target.checked)}
            disabled={loading}
          />
          <span>{t('add.autoAnalyze')}</span>
        </label>
      </form>
    </ModalDialog>
  )
}
