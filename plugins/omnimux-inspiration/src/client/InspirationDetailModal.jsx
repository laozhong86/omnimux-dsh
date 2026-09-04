import { useState, useCallback } from 'react'
import { Target, Clapperboard } from 'lucide-react'
import { Button, ModalDialog } from 'dsh-ui-kit'
import { hostMediaSrc } from './api.js'

const ICON_REPLICATE = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M4 16V6a2 2 0 0 1 2-2h10" />
  </svg>
)

/**
 * @param {{ t: (k: string) => string, item: any, onClose: () => void, onReplicate?: (row: any) => void, replicateBusy?: boolean }} props
 */
export function InspirationDetailModal({ t, item, onClose, onReplicate, replicateBusy }) {
  const [copied, setCopied] = useState(false)

  const handleReplicate = useCallback(() => {
    if (!item) return
    if (typeof onReplicate === 'function') onReplicate(item)
    onClose()
  }, [item, onClose, onReplicate])

  if (!item) return null

  const videoUrl = item.media_urls?.[0] ? hostMediaSrc(item.media_urls[0]) : null
  const coverUrl = hostMediaSrc(item.cover_url)
  const breakdown = item.deconstruction
  const markdown = typeof breakdown === 'string' ? breakdown : breakdown?.markdown

  const handleCopy = () => {
    if (markdown) {
      navigator.clipboard?.writeText(markdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <ModalDialog
      open
      onClose={onClose}
      title={item.title || t('detail.title')}
      closeLabel={t('close')}
      size="lg"
      footer={(
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', width: '100%' }}>
          <Button
            variant="primary"
            aria-label={t('card.cta.tryFull')}
            disabled={Boolean(replicateBusy)}
            onClick={handleReplicate}
          >
            {ICON_REPLICATE}
            {t('card.cta.try')}
          </Button>
          <Button variant="outline" onClick={onClose}>{t('close')}</Button>
        </div>
      )}
    >
      <div className="omnimux-inspiration-detail-body">
        {videoUrl ? (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="omnimux-inspiration-detail-media"
          />
        ) : (
          coverUrl ? <img src={coverUrl} alt="" className="omnimux-inspiration-detail-cover" /> : null
        )}

        {breakdown?.hook ? (
          <div className="omnimux-inspiration-hook-card">
            <div className="omnimux-inspiration-hook-title">
              <Target size={14} aria-hidden="true" />
              <span>{t('detail.hook')}</span>
            </div>
            <div className="omnimux-inspiration-hook-body">
              {breakdown.hook}
            </div>
          </div>
        ) : null}

        {markdown ? (
          <div className="omnimux-inspiration-field">
            <div className="omnimux-inspiration-field-head">
              <label className="omnimux-inspiration-field-label">
                <Clapperboard size={14} aria-hidden="true" />
                <span>{t('detail.breakdown')}</span>
              </label>
              <Button variant="outline" size="xs" onClick={handleCopy}>
                {copied ? t('detail.copied') : t('detail.copyMarkdown')}
              </Button>
            </div>
            <div className="omnimux-inspiration-breakdown-box">
              {markdown}
            </div>
          </div>
        ) : (
          item.content ? (
            <div className="omnimux-inspiration-field">
              <label>{t('meta.originalText')}</label>
              <div className="omnimux-inspiration-content-box">
                {item.content}
              </div>
            </div>
          ) : null
        )}

        <div className="omnimux-inspiration-meta-row">
          {item.source_platform ? <span>{t('meta.platform').replace('{platform}', item.source_platform)}</span> : null}
          {item.author?.name ? <span>{t('meta.author').replace('{author}', item.author.name)}</span> : null}
          {item.source_url ? (
            <a href={item.source_url} target="_blank" rel="noreferrer" className="omnimux-inspiration-source-link">
              {t('openSource')}
            </a>
          ) : null}
        </div>
      </div>
    </ModalDialog>
  )
}
