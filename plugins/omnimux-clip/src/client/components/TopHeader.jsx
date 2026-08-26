import {
  IconChevronLeftOutline14,
  IconChevronRightOutline14,
  IconCloseOutline16,
} from '@deepseek-ai/dsh-client-ui-primitives'
import { Button, DropdownSelect, IconButton, InputField } from 'dsh-ui-kit'
import { timelineStore, useTimelineStore } from '../store/useTimelineStore.js'
import { formatTimecode } from '../store/timelineTypes.js'

const ASPECT_OPTIONS = [
  { value: '16:9', label: '16:9' },
  { value: '9:16', label: '9:16' },
  { value: '1:1', label: '1:1' },
]

const ZOOM_OPTIONS = [
  { value: '0.5', label: '50%' },
  { value: '1', label: '100%' },
  { value: '2', label: '200%' },
  { value: '4', label: '400%' },
]

/**
 * Single-row 48px NLE chrome. Controls come from dsh-ui-kit.
 */
export function TopHeader({ onSave, onClose, onExport, exporting }) {
  const projectName = useTimelineStore((s) => s.projectName)
  const aspectRatio = useTimelineStore((s) => s.schema.canvasConfig.aspectRatio)
  const zoomLevel = useTimelineStore((s) => s.zoomLevel)
  const canUndo = useTimelineStore((s) => s.past.length > 0)
  const canRedo = useTimelineStore((s) => s.future.length > 0)
  const durationMs = useTimelineStore((s) => s.schema.canvasConfig.durationMs)

  return (
    <header className="omnimux-clip-overlay-header">
      <div className="omnimux-clip-overlay-heading omnimux-clip-overlay-heading--editor">
        <InputField
          aria-label="工程名称"
          value={projectName}
          onChange={(event) => timelineStore.setProjectName(event.target.value)}
        />
        <p className="omnimux-clip-overlay-subtitle">
          多轨剪辑 · {formatTimecode(durationMs)}
        </p>
      </div>
      <div className="omnimux-clip-overlay-actions">
        <DropdownSelect
          aria-label="画幅"
          value={aspectRatio}
          options={ASPECT_OPTIONS}
          onChange={(value) => timelineStore.setAspectRatio(value)}
        />
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="撤销"
          title="撤销"
          disabled={!canUndo}
          onClick={() => timelineStore.undo()}
        >
          <IconChevronLeftOutline14 size={14} />
        </IconButton>
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="重做"
          title="重做"
          disabled={!canRedo}
          onClick={() => timelineStore.redo()}
        >
          <IconChevronRightOutline14 size={14} />
        </IconButton>
        <DropdownSelect
          aria-label="缩放"
          value={String(zoomLevel)}
          options={ZOOM_OPTIONS}
          onChange={(value) => timelineStore.setZoom(Number(value))}
        />
        <Button variant="outline" size="sm" onClick={onSave}>
          保存并返回画布
        </Button>
        <Button variant="primary" size="sm" loading={exporting} onClick={onExport}>
          导出成片
        </Button>
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="关闭"
          title="关闭"
          onClick={onClose}
        >
          <IconCloseOutline16 size={16} />
        </IconButton>
      </div>
    </header>
  )
}
