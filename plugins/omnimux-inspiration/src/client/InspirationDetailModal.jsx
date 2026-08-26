import { useState } from 'react'
import { Target, Clapperboard } from 'lucide-react'
import { Button, ModalDialog } from 'dsh-ui-kit'
import { hostMediaSrc } from './api.js'

/**
 * @param {{ t: (k: string) => string, item: any, onClose: () => void }} props
 */
export function InspirationDetailModal({ t, item, onClose }) {
  const [copied, setCopied] = useState(false)

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
      footer={<Button variant="outline" onClick={onClose}>{t('close')}</Button>}
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
