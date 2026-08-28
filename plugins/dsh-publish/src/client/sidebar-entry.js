/**
 * 发布 row under 新会话, placed by the single sidebar coordinator.
 * Consumes standardized createSidebarEntry from dsh-ui-kit with idempotent activation.
 */
import { createSidebarEntry } from 'dsh-ui-kit'

export const ENTRY_SELECTOR = '[data-omnimux-publish-entry]'

const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g><path d="M5.833.833H7.5V2.5h5V.833h1.667V2.5H15A2.5 2.5 0 0 1 17.5 5v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V5A2.5 2.5 0 0 1 5 2.5h.833V.833ZM5 4.167A.833.833 0 0 0 4.167 5v1.667h11.666V5A.833.833 0 0 0 15 4.167H5Zm-.833 4.166V15c0 .46.373.833.833.833h10c.46 0 .833-.373.833-.833V8.333H4.167Z" clip-rule="evenodd" fill-rule="evenodd" fill="currentColor"/></g></svg>'

export function mountSidebarEntry(stage, t, locale) {
  return createSidebarEntry({
    id: 'dsh-publish',
    rank: 4.2,
    label: () => t('nav'),
    iconSvg: ICON,
    stageStore: stage,
    locale,
    customClassName: 'dsh-publish-entry',
    datasetKey: 'data-omnimux-publish-entry',
  })
}
