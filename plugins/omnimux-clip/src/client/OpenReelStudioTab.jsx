import { useEffect, useRef, useState } from 'react'
import OpenReelApp from './openreel/web/App.tsx'
import { useProjectStore } from './openreel/web/stores/project-store.ts'
import { useEngineStore } from './openreel/web/stores/engine-store.ts'
import { applyOpenReelTheme } from './openreel/web/stores/theme-store.ts'
import { resetOpenReelRouter } from './openreel/web/hooks/use-router.ts'
import { putClipProject } from './host/projectApi.js'
import './theme/dsw-map.css'
import './openreel/web/index.css'

const PRESET_OPTIONS = [
  { value: '1920x1080', label: '横屏 1920×1080' },
  { value: '1080x1920', label: '竖屏 1080×1920' },
  { value: '1080x1080', label: '方形 1080×1080' },
  { value: '1280x720', label: '横屏 1280×720' },
]

const FPS_OPTIONS = [
  { value: '24', label: '24 fps' },
  { value: '25', label: '25 fps' },
  { value: '30', label: '30 fps' },
  { value: '60', label: '60 fps' },
]

function parsePreset(value) {
  const [width, height] = String(value || '1920x1080').split('x').map((n) => Number(n))
  return {
    width: Number.isFinite(width) ? width : 1920,
    height: Number.isFinite(height) ? height : 1080,
  }
}

function StudioCreateForm({ t, onCreated }) {
  const createNewProject = useProjectStore((state) => state.createNewProject)
  const [name, setName] = useState('')
  const [preset, setPreset] = useState('1920x1080')
  const [fps, setFps] = useState('30')

  const submit = () => {
    const { width, height } = parsePreset(preset)
    const frameRate = Number(fps) || 30
    const title = name.trim() || t('tab.untitled')
    createNewProject(title, { width, height, frameRate })
    resetOpenReelRouter({ route: 'editor', params: {} })
    onCreated?.()
  }

  const inputStyle = {
    width: '100%',
    height: 36,
    padding: '0 12px',
    borderRadius: 8,
    border: '1px solid var(--dsw-alias-border-subtle, rgba(255, 255, 255, 0.12))',
    backgroundColor: 'var(--dsw-alias-bg-control, rgba(255, 255, 255, 0.04))',
    color: 'var(--dsw-alias-label-primary, #ffffff)',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box',
  }

  const btnSecondary = {
    padding: '8px 16px',
    borderRadius: 8,
    border: '1px solid var(--dsw-alias-border-subtle, rgba(255, 255, 255, 0.12))',
    backgroundColor: 'transparent',
    color: 'var(--dsw-alias-label-primary, #ffffff)',
    fontSize: 14,
    cursor: 'pointer',
  }

  const btnPrimary = {
    padding: '8px 16px',
    borderRadius: 8,
    border: 'none',
    backgroundColor: 'var(--dsw-alias-accent-primary, #3b82f6)',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
  }

  return (
    <div className="openreel-studio-fallback" style={{ padding: 24, gap: 16, display: 'flex', flexDirection: 'column', alignItems: 'stretch', maxWidth: 420, margin: '0 auto' }}>
      <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--dsw-alias-label-primary)' }}>
        {t('tab.createTitle')}
      </div>
      <div>
        <div style={{ marginBottom: 6, fontSize: 12, color: 'var(--dsw-alias-label-secondary)' }}>
          {t('tab.nameLabel')}
        </div>
        <input
          id="omnimux-clip-project-name"
          style={inputStyle}
          value={name}
          placeholder={t('tab.namePlaceholder')}
          onChange={(event) => setName(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              submit()
            }
          }}
        />
      </div>
      <div>
        <div style={{ marginBottom: 6, fontSize: 12, color: 'var(--dsw-alias-label-secondary)' }}>
          {t('tab.sizeLabel')}
        </div>
        <select
          id="omnimux-clip-project-preset"
          style={inputStyle}
          value={preset}
          onChange={(e) => setPreset(e.target.value)}
        >
          {PRESET_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ background: 'var(--dsw-alias-bg-layer-2, #1e1e1e)', color: 'var(--dsw-alias-label-primary, #fff)' }}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 6, fontSize: 12, color: 'var(--dsw-alias-label-secondary)' }}>
          {t('tab.fpsLabel')}
        </div>
        <select
          id="omnimux-clip-project-fps"
          style={inputStyle}
          value={fps}
          onChange={(e) => setFps(e.target.value)}
        >
          {FPS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ background: 'var(--dsw-alias-bg-layer-2, #1e1e1e)', color: 'var(--dsw-alias-label-primary, #fff)' }}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 8 }}>
        <button style={btnSecondary} onClick={() => {
          resetOpenReelRouter({ route: 'welcome', params: {} })
          onCreated?.()
        }}>
          {t('tab.openOfficial')}
        </button>
        <button style={btnPrimary} onClick={submit}>
          {t('tab.create')}
        </button>
      </div>
    </div>
  )
}

/**
 * better-sidebar Tab 根。外层 `.openreel-studio-root` 做主题隔离；
 * 内层挂官方 OpenReel App（Welcome + EditorInterface）。
 */
export function OpenReelStudioTab({ t: tProp }) {
  const t = (key) => {
    if (typeof tProp === 'function') {
      try {
        const value = tProp(key)
        if (value && value !== key) return value
      } catch { /* fall through */ }
    }
    const fallback = {
      'tab.title': '视频剪辑',
      'tab.untitled': '未命名剪辑',
      'tab.createTitle': '新建剪辑项目',
      'tab.nameLabel': '项目名称',
      'tab.namePlaceholder': '我的短视频',
      'tab.sizeLabel': '分辨率',
      'tab.fpsLabel': '帧率',
      'tab.create': '创建并进入编辑器',
      'tab.openOfficial': '进入官方欢迎页',
      'tab.save': '保存',
      'tab.saved': '已保存',
      'tab.saving': '保存中…',
      'tab.saveFailed': '保存失败',
    }
    return fallback[key] || key
  }

  const project = useProjectStore((state) => state.project)
  const hasOpenProject = useProjectStore((state) => state.hasOpenProject)
  const [forceWelcome, setForceWelcome] = useState(!hasOpenProject)
  const [saveStatus, setSaveStatus] = useState('')
  const saveTimer = useRef(null)

  useEffect(() => {
    applyOpenReelTheme(true)
    return () => {
      try {
        useEngineStore.getState().dispose?.()
      } catch { /* already torn down */ }
      if (saveTimer.current) clearTimeout(saveTimer.current)
    }
  }, [])

  useEffect(() => {
    if (!hasOpenProject || !project?.id) return
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      setSaveStatus(t('tab.saving'))
      putClipProject(project.id, { title: project.name, openreel: project })
        .then(() => setSaveStatus(t('tab.saved')))
        .catch(() => setSaveStatus(t('tab.saveFailed')))
    }, 1200)
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current)
    }
  }, [hasOpenProject, project])

  const showCreate = forceWelcome && !hasOpenProject

  return (
    <div className="openreel-studio-root dark" data-theme="dark">
      <div className="openreel-studio-hostbar">
        <div className="openreel-studio-hostbar-title">
          {project?.name || t('tab.title')}
        </div>
        <div className="openreel-studio-hostbar-status">{saveStatus}</div>
        <button
          type="button"
          disabled={!hasOpenProject}
          style={{
            padding: '4px 12px',
            height: 24,
            borderRadius: 6,
            border: '1px solid var(--dsw-alias-border-subtle, rgba(255, 255, 255, 0.12))',
            backgroundColor: 'transparent',
            color: 'var(--dsw-alias-label-primary, #ffffff)',
            fontSize: 12,
            cursor: hasOpenProject ? 'pointer' : 'not-allowed',
            opacity: hasOpenProject ? 1 : 0.5,
          }}
          onClick={() => {
            if (!project?.id) return
            setSaveStatus(t('tab.saving'))
            putClipProject(project.id, { title: project.name, openreel: project })
              .then(() => setSaveStatus(t('tab.saved')))
              .catch(() => setSaveStatus(t('tab.saveFailed')))
          }}
        >
          {t('tab.save')}
        </button>
      </div>
      <div className="openreel-studio-body">
        {showCreate ? (
          <StudioCreateForm t={t} onCreated={() => setForceWelcome(false)} />
        ) : (
          <OpenReelApp />
        )}
      </div>
    </div>
  )
}

export default OpenReelStudioTab
