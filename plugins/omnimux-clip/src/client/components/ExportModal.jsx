import { ModalDialog, Button } from 'dsh-ui-kit'

/**
 * Export progress dialog. Uses ui-kit ModalDialog, not a raw overlay.
 */
export function ExportModal({ open, progress, status, error, onCancel, onClose }) {
  const ratio = Math.max(0, Math.min(1, Number(progress) || 0))
  return (
    <ModalDialog
      open={open}
      onClose={error ? onClose : onCancel}
      title="导出成片"
      description={error ? '编码失败' : 'WebCodecs 硬件加速合成中'}
      footer={error ? (
        <Button variant="primary" size="sm" onClick={onClose}>关闭</Button>
      ) : (
        <Button variant="outline" size="sm" onClick={onCancel}>取消</Button>
      )}
    >
      <div className="omx-clip-export">
        <div
          className="omx-clip-export__bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(ratio * 100)}
          style={{ '--export-ratio': String(ratio) }}
        >
          <span className="omx-clip-export__fill" />
        </div>
        <p className="omx-clip-export__status">
          {error || status || '准备编码器…'}
        </p>
      </div>
    </ModalDialog>
  )
}
