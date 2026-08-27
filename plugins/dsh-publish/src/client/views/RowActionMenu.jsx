import React, { useState } from 'react'
import { IconEllipsisOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { IconButton } from 'dsh-ui-kit'
import { Menu } from '@deepseek-ai/dsh-client-ui-primitives'
import { displayStatus } from '../status-display.js'

/**
 * 行末操作菜单 (⋮)
 * @param {{
 *   t: (key: string, vars?: Record<string, unknown>) => string,
 *   record: Record<string, unknown>,
 *   onView: (record: Record<string, unknown>) => void,
 *   onEdit: (record: Record<string, unknown>) => void,
 *   onDelete: (record: Record<string, unknown>) => void,
 *   onRetry: (record: Record<string, unknown>) => void,
 * }} props
 */
export function RowActionMenu({ t, record, onView, onEdit, onDelete, onRetry }) {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const status = displayStatus(record)
  const isDraft = status === 'draft' || record.status === 'draft'
  const hasFailedTasks = Array.isArray(record.subtasks) && record.subtasks.some((st) => st.status === 'failed')
  const isRetryable = status === 'failed' || status === 'partial_failed' || hasFailedTasks

  const handleOpen = (e) => {
    e.stopPropagation()
    setAnchorEl(e.currentTarget)
    setOpen((prev) => !prev)
  }

  const handleClose = (e) => {
    if (e && e.stopPropagation) e.stopPropagation()
    setOpen(false)
  }

  const handleAction = (e, actionFn) => {
    e.stopPropagation()
    setOpen(false)
    if (typeof actionFn === 'function') {
      actionFn(record)
    }
  }

  const items = [
    {
      key: 'view',
      label: t('records.action.view'),
      onClick: (e) => handleAction(e, onView),
    },
    isDraft
      ? {
          key: 'edit',
          label: t('records.action.edit'),
          onClick: (e) => handleAction(e, onEdit),
        }
      : null,
    isDraft
      ? {
          key: 'delete',
          label: t('records.action.delete'),
          danger: true,
          onClick: (e) => handleAction(e, onDelete),
        }
      : null,
    isRetryable && !isDraft
      ? {
          key: 'retry',
          label: t('records.action.retry'),
          onClick: (e) => handleAction(e, onRetry),
        }
      : null,
  ].filter(Boolean)

  return (
    <div className="dsh-pub-row-menu-wrap" onClick={(e) => e.stopPropagation()}>
      <IconButton
        variant="ghost"
        size="sm"
        aria-label={t('records.more')}
        onClick={handleOpen}
      >
        <IconEllipsisOutline16 />
      </IconButton>
      {open && anchorEl ? (
        <Menu
          portal
          anchorEl={anchorEl}
          align="end"
          dense
          items={items}
          onClose={handleClose}
        />
      ) : null}
    </div>
  )
}
