/**
 * 数据分析 row under 新会话, placed by the single sidebar coordinator.
 * Consumes standardized createSidebarEntry from dsh-ui-kit with idempotent activation.
 */
import { createSidebarEntry } from 'dsh-ui-kit'
import { SIDEBAR_RANK } from './defaults.js'

export const ENTRY_SELECTOR = '[data-omnimux-analytics-entry]'

const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7v-7zm4 3h2v4h-2v-4zm4 5h2v-2h-2v2z"/></svg>'

export function mountSidebarEntry(stage, t, locale) {
  return createSidebarEntry({
    id: 'omnimux-analytics',
    rank: SIDEBAR_RANK,
    label: () => t('nav'),
    iconSvg: ICON,
    stageStore: stage,
    locale,
    access: 'cloud',
    customClassName: 'omnimux-analytics-entry',
    datasetKey: 'data-omnimux-analytics-entry',
  })
}
