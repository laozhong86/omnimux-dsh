import { useState } from 'react'
import { IconCloseOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { Target, Clapperboard } from 'lucide-react'
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
    <div className="omnimux-inspiration-modal-overlay" onClick={onClose}>
      <div className="omnimux-inspiration-modal omnimux-inspiration-modal-detail" onClick={(e) => e.stopPropagation()}>
        <div className="omnimux-inspiration-modal-header">
          <h2>{item.title || t('detail.title')}</h2>
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

        <div className="omnimux-inspiration-modal-body">
          {videoUrl ? (
            <video
              src={videoUrl}
              controls
              autoPlay
              style={{
                width: '100%',
                maxHeight: 320,
                borderRadius: 8,
                background: '#000',
              }}
            />
          ) : (
            coverUrl ? <img src={coverUrl} alt="" style={{ width: '100%', maxHeight: 280, objectFit: 'contain', borderRadius: 8 }} /> : null
          )}

          {breakdown?.hook ? (
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: 8, padding: 12 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#60a5fa', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Target size={14} aria-hidden="true" />
                <span>{t('detail.hook')}</span>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.5 }}>
                {breakdown.hook}
              </div>
            </div>
          ) : null}

          {markdown ? (
            <div className="omnimux-inspiration-field">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Clapperboard size={14} aria-hidden="true" />
                  <span>{t('detail.breakdown')}</span>
                </label>
                <button type="button" className="omnimux-inspiration-btn-secondary" style={{ fontSize: 11, padding: '2px 8px', height: 'auto' }} onClick={handleCopy}>
                  {copied ? t('detail.copied') : t('detail.copyMarkdown')}
                </button>
              </div>
              <div className="omnimux-inspiration-breakdown-box">
                {markdown}
              </div>
            </div>
          ) : (
            item.content ? (
              <div className="omnimux-inspiration-field">
                <label>原帖文案</label>
                <div style={{ fontSize: 13, lineHeight: 1.5, background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 6 }}>
                  {item.content}
                </div>
              </div>
            ) : null
          )}

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: 12, color: '#888' }}>
            {item.source_platform ? <span>平台: {item.source_platform}</span> : null}
            {item.author?.name ? <span>作者: {item.author.name}</span> : null}
            {item.source_url ? (
              <a href={item.source_url} target="_blank" rel="noreferrer" style={{ color: 'var(--dsw-alias-accent, #3b82f6)' }}>
                {t('openSource')}
              </a>
            ) : null}
          </div>
        </div>

        <div className="omnimux-inspiration-modal-footer">
          <button type="button" className="omnimux-inspiration-btn-secondary" onClick={onClose}>
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  )
}
