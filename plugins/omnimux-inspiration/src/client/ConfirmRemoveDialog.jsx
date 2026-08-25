import { ConfirmModal } from 'dsh-ui-kit'

/**
 * Confirm deletion of local inspirations (files move to system Trash).
 * @param {{
 *   t: (key: string) => string,
 *   count: number,
 *   busy: boolean,
 *   onCancel: () => void,
 *   onConfirm: () => void,
 * }} props
 */
export function ConfirmRemoveDialog({ t, count, busy, onCancel, onConfirm }) {
  return (
    <ConfirmModal
      open
      onClose={onCancel}
      title={t('confirmRemove.title').replace('{n}', String(count))}
      message={t('confirmRemove.description')}
      confirmLabel={busy ? t('confirmRemove.deleting') : t('confirmRemove.confirm')}
      cancelLabel={t('confirmRemove.cancel')}
      confirmVariant="danger"
      confirmLoading={busy}
      onConfirm={onConfirm}
    />
  )
}
