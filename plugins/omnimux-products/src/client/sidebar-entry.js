/**
 * 产品库 row under 新会话, placed by the single sidebar coordinator.
 * Consumes standardized createSidebarEntry from dsh-ui-kit with idempotent activation.
 */
import { createSidebarEntry } from 'dsh-ui-kit'

export const ENTRY_SELECTOR = '[data-omnimux-products-entry]'

const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" d="M12.841 15.1L12 13l-.841 2.1L9 15.292l1.64 1.489L10.146 19L12 17.821L13.854 19l-.494-2.219L15 15.292zM6 2h12v2H6zM4 6h16v2H4z"/><path fill="currentColor" d="M20 12v8H4v-8zm0-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2"/></svg>'

export function mountSidebarEntry(stage, t, locale) {
  return createSidebarEntry({
    id: 'omnimux-products',
    rank: 8,
    label: () => t('nav'),
    iconSvg: ICON,
    stageStore: stage,
    locale,
    access: 'offline',
    customClassName: 'omnimux-products-entry',
    datasetKey: 'data-omnimux-products-entry',
  })
}
