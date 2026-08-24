/**
 * 项目库列表页（一级页，shell.overlay）。Phase 0 只留核心：标题+副标题、
 * +新建项目、本地项目 tab、搜索、最近更新排序、项目卡片（标题/日期）+ 空态。
 * 点项目 → 打开绑定会话 + 项目画布 tab（better-sidebar，不走官方 details）。
 *
 * 顶栏 chrome 遵循 sidebar-extra-entries.md 一级页规范（12px 20px 12px）。
 * 全部样式消费官方 --dsw-alias-* token（design.md 硬规则）。
 */
import { useCallback, useEffect, useLayoutEffect, useState, useSyncExternalStore } from 'react'
import { IconEditOutline16, IconTrashOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { listProjects, renameProject, deleteProject, bindProjectSession } from '../api.js'
import { NewLocalProjectDialog } from './NewLocalProjectDialog.jsx'
import { createProjectSession, dismissProductStage, runNewProject } from './newProject.js'
import { activateProjectCanvas } from './projectCanvas.js'

const chromeButton = {
  border: '1px solid var(--dsw-alias-border, currentColor)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: 13,
  lineHeight: '20px',
  padding: '5px 12px',
}

function errText(result, t) {
  const code = String(result?.body?.error ?? '')
  if (code === 'no-workspace') return t('projects.noWorkspace')
  return String(result?.body?.message || result?.body?.error || result?.status || t('projects.genericError'))
}

/**
 * @param {{
 *   t: (key: string) => string,
 *   stage: { getSnapshot: () => boolean, subscribe: Function, set: Function, readBox: Function },
 *   locale?: { subscribe: (fn: () => void) => () => void, getLocale: () => { active: string } },
 *   sessions: { create: Function, open: Function },
 *   workspaces?: object,
 *   layout?: { closeDetails?: () => void },
 *   betterSidebar?: object,
 * }} props
 */
export function ProjectLibraryPage({ t, stage, locale, sessions, workspaces, layout, betterSidebar }) {
  const open = useSyncExternalStore(
    stage ? stage.subscribe : () => () => {},
    stage ? stage.getSnapshot : () => false,
  )
  const [box, setBox] = useState(() => ({ top: 0, left: 0, width: 0, height: 0 }))
  const [projects, setProjects] = useState([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  useLayoutEffect(() => {
    if (!open) return undefined
    const update = () => { setBox(stage.readBox()) }
    update()
    const scroll = document.querySelector('[data-conversation-scroll]')
    const target = scroll instanceof HTMLElement
      ? scroll
      : document.querySelector('[data-slot="conversation"]')?.parentElement
    const observer = typeof ResizeObserver === 'function' && target ? new ResizeObserver(update) : null
    if (target && observer) observer.observe(target)
    window.addEventListener('resize', update)
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [open, stage])

  const refresh = useCallback(async () => {
    const result = await listProjects()
    if (!result.ok) {
      setError(errText(result, t))
      return
    }
    setError('')
    setProjects(Array.isArray(result.body?.projects) ? result.body.projects : [])
  }, [t])

  useEffect(() => {
    if (!open) return undefined
    void refresh()
  }, [open, refresh])

  const openProject = useCallback(async (project) => {
    const projectRoot = typeof project.path === 'string' ? project.path : ''
    if (!projectRoot) {
      setError(t('projects.genericError'))
      return
    }
    if (project.sessionId) {
      dismissProductStage(stage)
      sessions.open(project.sessionId)
      await activateProjectCanvas({ layout, betterSidebar, t }, { sessionId: project.sessionId, cwd: projectRoot })
      return
    }
    const created = await createProjectSession(sessions, workspaces, projectRoot)
    if (!created.ok) {
      setError(t('projects.noWorkspace'))
      return
    }
    await bindProjectSession(project.id, created.sessionId)
    dismissProductStage(stage)
    sessions.open(created.sessionId)
    await activateProjectCanvas({ layout, betterSidebar, t }, { sessionId: created.sessionId, cwd: created.cwd })
  }, [sessions, workspaces, layout, betterSidebar, t, stage])

  const handleNew = useCallback(() => {
    setError('')
    setDialogOpen(true)
  }, [])

  const handleDialogSubmit = useCallback(async (title) => {
    setBusy(true)
    setError('')
    const result = await runNewProject({ sessions, workspaces, layout, betterSidebar, t, stage }, { title })
    setBusy(false)
    if (!result.ok) {
      setError(result.error === 'no-workspace' ? t('projects.noWorkspace') : (result.error || t('projects.genericError')))
      return
    }
    setDialogOpen(false)
  }, [sessions, workspaces, layout, betterSidebar, t, stage])

  const handleRename = useCallback(async (project) => {
    const next = window.prompt(t('projects.renamePrompt'), project.title)
    if (next === null || next.trim() === '') return
    const result = await renameProject(project.id, next)
    if (!result.ok) {
      setError(errText(result, t))
      return
    }
    setError('')
    void refresh()
  }, [t, refresh])

  const handleDelete = useCallback(async (project) => {
    if (!window.confirm(t('projects.deleteConfirm').replace('{title}', project.title))) return
    const result = await deleteProject(project.id)
    if (!result.ok) {
      setError(errText(result, t))
      return
    }
    setError('')
    void refresh()
  }, [t, refresh])

  if (!open || !stage) return null

  const visible = projects.filter((project) => {
    if (!query.trim()) return true
    return String(project.title).toLowerCase().includes(query.trim().toLowerCase())
  })

  return (
    <div
      role="region"
      aria-label={t('projects.title')}
      style={{
        position: 'fixed', top: box.top, left: box.left, width: box.width, height: box.height,
        zIndex: 200, pointerEvents: 'auto', display: 'flex', flexDirection: 'column',
        background: 'var(--dsw-alias-bg-primary, var(--dsw-bg, #111))',
        color: 'var(--dsw-alias-label-primary, inherit)', overflow: 'hidden',
      }}
    >
      <div style={{ flex: 'none', display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 20px 12px', WebkitAppRegion: 'no-drag' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '32px' }}>{t('projects.title')}</h1>
          <p style={{ margin: 0, fontSize: 13, lineHeight: '20px', color: 'var(--dsw-alias-label-secondary, inherit)' }}>{t('projects.subtitle')}</p>
        </div>
        <button type="button" style={{ ...chromeButton, display: 'inline-flex', alignItems: 'center', gap: 6, ...(busy ? { opacity: 0.5, cursor: 'default' } : {}) }} disabled={busy} onClick={handleNew}>
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M8 3v10M3 8h10" /></svg>
          {t('projects.newProject')}
        </button>
        <button type="button" aria-label={t('projects.close')} onClick={() => { stage.set(false) }} style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', width: 28, height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, fontSize: 20, lineHeight: 1, padding: 4 }}>×</button>
      </div>

      <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px 12px', borderBottom: '1px solid var(--dsw-alias-border, rgba(128,128,128,.2))' }}>
        <span style={{ fontSize: 13, fontWeight: 500, lineHeight: '20px', padding: '4px 12px', borderRadius: 999, background: 'var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18))' }}>{t('projects.localTab')}</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
          <input
            value={query}
            placeholder={t('projects.searchPlaceholder')}
            onChange={(event) => { setQuery(event.target.value) }}
            style={{ border: '1px solid var(--dsw-alias-border, rgba(128,128,128,.3))', borderRadius: 8, padding: '6px 12px', fontSize: 13, minWidth: 180, background: 'transparent', color: 'inherit' }}
          />
          <span style={{ fontSize: 12, color: 'var(--dsw-alias-label-secondary, inherit)' }}>{t('projects.sortUpdated')}</span>
        </div>
      </div>

      {error !== '' ? (
        <p style={{ margin: 0, padding: '6px 20px', fontSize: 12, color: 'var(--dsw-alias-label-secondary, inherit)' }}>{error}</p>
      ) : null}

      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: 20 }}>
        {visible.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, height: '100%', color: 'var(--dsw-alias-label-secondary, inherit)', fontSize: 13 }}>
            <span>{query.trim() ? t('projects.emptySearch') : t('projects.empty')}</span>
            {!query.trim() ? (
              <button type="button" style={chromeButton} onClick={handleNew}>{t('projects.newProject')}</button>
            ) : null}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
            {visible.map((project) => (
              <div key={project.id} role="button" tabIndex={0} onClick={() => { void openProject(project) }} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') void openProject(project) }} style={{ border: '1px solid var(--dsw-alias-border, rgba(128,128,128,.2))', borderRadius: 12, padding: 14, cursor: 'pointer', background: 'transparent', minHeight: 96, display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, lineHeight: '20px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{project.title}</div>
                  <div style={{ fontSize: 12, lineHeight: '18px', color: 'var(--dsw-alias-label-secondary, inherit)', marginTop: 4 }}>{String(project.updatedAt).slice(0, 10)}</div>
                </div>
                <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end', alignItems: 'center' }} onClick={(event) => { event.stopPropagation() }}>
                  <button
                    type="button"
                    title={t('projects.rename')}
                    aria-label={t('projects.rename')}
                    onClick={() => { void handleRename(project) }}
                    style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', padding: 4, opacity: 0.7, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <IconEditOutline16 size={14} />
                  </button>
                  <button
                    type="button"
                    title={t('projects.delete')}
                    aria-label={t('projects.delete')}
                    onClick={() => { void handleDelete(project) }}
                    style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', padding: 4, opacity: 0.7, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <IconTrashOutline16 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {dialogOpen ? (
        <NewLocalProjectDialog
          t={t}
          busy={busy}
          error={error}
          onCancel={() => { if (!busy) setDialogOpen(false) }}
          onSubmit={(title) => { void handleDialogSubmit(title) }}
        />
      ) : null}
    </div>
  )
}
