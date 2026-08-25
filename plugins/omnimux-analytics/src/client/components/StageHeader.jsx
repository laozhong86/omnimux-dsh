import {
  IconCloseOutline16,
  IconDarkOutline16,
  IconDownloadOutline16,
  IconLightOutline16,
  IconRefreshOutline16,
} from '@deepseek-ai/dsh-client-ui-primitives'
import { IconButton } from 'dsh-ui-kit'

/**
 * Layer 1: 22px title + 13px subtitle + refresh / theme / export / close.
 * Theme toggles a stage-local data-theme; host tokens still win unless the
 * document itself follows data-theme (prototype parity).
 */
export function StageHeader({ t, theme, refreshing, onRefresh, onToggleTheme, onExport, onClose }) {
  const dark = theme === 'dark'
  return (
    <header className="omnimux-analytics-stage-header">
      <div className="omnimux-analytics-stage-heading">
        <h1 className="omnimux-analytics-stage-title">{t('title')}</h1>
        <p className="omnimux-analytics-stage-subtitle">{t('subtitle')}</p>
      </div>
      <div className="omnimux-analytics-stage-header-actions">
        <IconButton
          aria-label={t('refresh')}
          title={refreshing ? t('refreshing') : t('refresh')}
          variant="ghost"
          disabled={refreshing}
          onClick={onRefresh}
        >
          <IconRefreshOutline16 />
        </IconButton>
        <IconButton
          aria-label={t('theme.toggle')}
          title={t('theme.toggle')}
          variant="ghost"
          aria-pressed={dark}
          onClick={onToggleTheme}
        >
          {dark ? <IconLightOutline16 /> : <IconDarkOutline16 />}
        </IconButton>
        <IconButton
          aria-label={t('export')}
          title={t('export')}
          variant="ghost"
          onClick={onExport}
        >
          <IconDownloadOutline16 />
        </IconButton>
        <IconButton
          aria-label={t('close')}
          variant="ghost"
          onClick={onClose}
        >
          <IconCloseOutline16 />
        </IconButton>
      </div>
    </header>
  )
}
