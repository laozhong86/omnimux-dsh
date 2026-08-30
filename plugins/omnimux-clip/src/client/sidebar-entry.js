/**
 * 视频剪辑 row under 新会话, placed by the single sidebar coordinator.
 * Consumes standardized createSidebarEntry from dsh-ui-kit with idempotent activation.
 */
import { createSidebarEntry } from 'dsh-ui-kit'

export const ENTRY_SELECTOR = '[data-omnimux-clip-entry]'

const ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
  <rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1.75" stroke="currentColor" stroke-width="1.5"/>
  <path d="M6.4 5.6v4.8L10.6 8 6.4 5.6Z" fill="currentColor"/>
</svg>`

export function mountSidebarEntry(stage, t, locale) {
  return createSidebarEntry({
    id: 'omnimux-clip-entry',
    rank: 8.2,
    label: () => t('tab.title'),
    iconSvg: ICON,
    stageStore: stage,
    locale,
    access: 'offline',
    customClassName: 'omnimux-clip-entry',
    datasetKey: 'data-omnimux-clip-entry',
  })
}
