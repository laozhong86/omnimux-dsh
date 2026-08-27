import { useEffect, useState } from 'react'
import {
  IconChevronLeftOutline14,
  IconChevronRightOutline14,
  IconCloseOutline16,
} from '@deepseek-ai/dsh-client-ui-primitives'
import { Button, DropdownSelect, IconButton, InputField } from 'dsh-ui-kit'
import { timelineStore, useTimelineStore } from '../store/useTimelineStore.js'
import { formatTimecode } from '../store/timelineTypes.js'
import { CLIP_API_PREFIX } from '../engine/exportEngine.js'

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
export function TopHeader({
  source = 'canvas',
  onSave,
  onClose,
  onExport,
  onSwitchProject,
  onNewProject,
  exporting,
  saveNotice = '',
}) {
  const projectName = useTimelineStore((s) => s.projectName)
  const currentProjectId = useTimelineStore((s) => s.schema.projectId)
  const aspectRatio = useTimelineStore((s) => s.schema.canvasConfig.aspectRatio)
  const zoomLevel = useTimelineStore((s) => s.zoomLevel)
  const canUndo = useTimelineStore((s) => s.past.length > 0)
  const canRedo = useTimelineStore((s) => s.future.length > 0)
  const durationMs = useTimelineStore((s) => s.schema.canvasConfig.durationMs)

  const [projectOptions, setProjectOptions] = useState([])

  useEffect(() => {
    fetch(`${CLIP_API_PREFIX}/projects`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data?.projects)) {
          const opts = [
            { value: '__current__', label: `当前: ${projectName || currentProjectId}` },
            { value: '__new__', label: '➕ 新建空白工程' },
            ...data.projects.map((p) => ({
              value: p.id,
              label: `📁 ${p.projectName || p.id} (${formatTimecode(p.durationMs).slice(0, 5)})`,
            })),
          ]
          setProjectOptions(opts)
        }
      })
      .catch(() => {})
  }, [currentProjectId, projectName])

  function handleProjectSelect(value) {
    if (!value || value === '__current__') return
    if (value === '__new__') {
      if (typeof onNewProject === 'function') onNewProject()
    } else if (typeof onSwitchProject === 'function') {
      onSwitchProject(value)
    }
  }

  const isCanvasMode = source === 'canvas'

  return (
    <header className="omnimux-clip-overlay-header">
      <div className="omnimux-clip-overlay-heading omnimux-clip-overlay-heading--editor">
        <InputField
          aria-label="工程名称"
          value={projectName}
          onChange={(event) => timelineStore.setProjectName(event.target.value)}
        />
        {projectOptions.length > 1 ? (
          <DropdownSelect
            aria-label="切换工程"
            value="__current__"
            options={projectOptions}
            onChange={handleProjectSelect}
          />
        ) : null}
        <p className="omnimux-clip-overlay-subtitle">
          多轨剪辑 · {formatTimecode(durationMs)}
          {saveNotice ? <span style={{ marginLeft: 8, color: 'var(--dsw-alias-success, #34d399)' }}>✓ {saveNotice}</span> : null}
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
          {isCanvasMode ? '保存并返回画布' : '💾 保存工程'}
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
