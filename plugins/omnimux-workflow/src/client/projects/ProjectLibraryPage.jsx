/**
 * 项目库列表页（一级页，shell.overlay）。Phase 0 只留核心：标题+副标题、
 * +新建项目、本地项目 tab、搜索、最近更新排序、项目卡片（标题/日期）+ 空态。
 * 点项目 → 打开绑定会话 + 项目画布 tab（better-sidebar，不走官方 details）。
 *
 * 顶栏 chrome 遵循 sidebar-extra-entries.md 一级页规范（12px 20px 12px）。
 * 控件消费 dsh-ui-kit；颜色 100% --dsw-alias-* token。
 */
import { useCallback, useEffect, useLayoutEffect, useState, useSyncExternalStore } from 'react'
import {
  IconCloseOutline16,
  IconEditOutline16,
  IconPlusOutline16,
  IconTrashOutline16,
} from '@deepseek-ai/dsh-client-ui-primitives'
import { Button, ConfirmModal, FilterBar, IconButton, SearchField } from 'dsh-ui-kit'
import { listProjects, renameProject, deleteProject, bindProjectSession } from '../api.js'
import { injectWorkflowStyles } from '../styles.js'
import { NewLocalProjectDialog } from './NewLocalProjectDialog.jsx'
import { createProjectSession, dismissProductStage, runNewProject } from './newProject.js'
import { activateProjectCanvas } from './projectCanvas.js'

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
  useEffect(() => { injectWorkflowStyles() }, [])
  const open = useSyncExternalStore(
    stage ? (onStoreChange) => stage.subscribe(onStoreChange) : () => () => {},
    stage ? () => stage.getSnapshot() : () => false,
  )
  const [everOpened, setEverOpened] = useState(false)
  const [box, setBox] = useState(() => ({ top: 0, left: 0, width: 0, height: 0 }))
  const [projects, setProjects] = useState([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [pendingDelete, setPendingDelete] = useState(null)

  if (open && !everOpened) setEverOpened(true)

  useLayoutEffect(() => {
    if (!open || !stage) return undefined
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

  const handleDialogSubmit = useCallback(async (payload) => {
    const title = typeof payload === 'string' ? payload : payload?.title
    const projectRoot = typeof payload === 'object' && payload && typeof payload.projectRoot === 'string'
      ? payload.projectRoot
      : undefined
    setBusy(true)
    setError('')
    const result = await runNewProject(
      { sessions, workspaces, layout, betterSidebar, t, stage },
      { title, ...(projectRoot ? { projectRoot } : {}) },
    )
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

  const confirmDelete = useCallback(async () => {
    if (!pendingDelete) return
    const result = await deleteProject(pendingDelete.id)
    if (!result.ok) {
      setError(errText(result, t))
      setPendingDelete(null)
      return
    }
    setError('')
    setPendingDelete(null)
    void refresh()
  }, [pendingDelete, t, refresh])

  if (!stage || !everOpened) return null

  const visible = projects.filter((project) => {
    if (!query.trim()) return true
    return String(project.title).toLowerCase().includes(query.trim().toLowerCase())
  })

  return (
    <div
      role="region"
      aria-label={t('projects.title')}
      aria-hidden={open ? undefined : 'true'}
      className="omnimux-workflow-stage"
      data-visible={open ? 'true' : 'false'}
      style={{
        '--stage-top': `${box.top}px`,
        '--stage-left': `${box.left}px`,
        '--stage-width': `${box.width}px`,
        '--stage-height': `${box.height}px`,
      }}
    >
      <div className="omnimux-workflow-stage-header">
        <div className="omnimux-workflow-stage-heading">
          <h1 className="omnimux-workflow-stage-title">{t('projects.title')}</h1>
          <p className="omnimux-workflow-stage-subtitle">{t('projects.subtitle')}</p>
        </div>
        <Button
          variant="primary"
          size="sm"
          leadingIcon={<IconPlusOutline16 />}
          disabled={busy}
          onClick={handleNew}
        >
          {t('projects.newProject')}
        </Button>
        <IconButton
          aria-label={t('projects.close')}
          variant="ghost"
          onClick={() => { stage.set(false) }}
        >
          <IconCloseOutline16 />
        </IconButton>
      </div>

      <FilterBar
        className="omnimux-workflow-stage-toolbar"
        compact
        search={(
          <SearchField
            value={query}
            placeholder={t('projects.searchPlaceholder')}
            aria-label={t('projects.searchPlaceholder')}
            debounceMs={0}
            stretch
            onValueChange={setQuery}
          />
        )}
        filters={(
          <>
            <span className="omnimux-workflow-chip">{t('projects.localTab')}</span>
            <span className="omnimux-workflow-muted">{t('projects.sortUpdated')}</span>
          </>
        )}
      />

      {error !== '' && !dialogOpen ? (
        <p className="omnimux-workflow-error">{error}</p>
      ) : null}

      <div className="omnimux-workflow-body">
        {visible.length === 0 ? (
          <div className="omnimux-workflow-empty">
            <p>{query.trim() ? t('projects.emptySearch') : t('projects.empty')}</p>
            {!query.trim() ? (
              <Button variant="primary" size="sm" disabled={busy} onClick={handleNew}>
                {t('projects.newProject')}
              </Button>
            ) : null}
          </div>
        ) : (
          <div className="omnimux-workflow-grid">
            {visible.map((project) => (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                className="omnimux-workflow-card"
                onClick={() => { void openProject(project) }}
                onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') void openProject(project) }}
              >
                <div className="omnimux-workflow-card-main">
                  <div className="omnimux-workflow-card-title">{project.title}</div>
                  <div className="omnimux-workflow-card-meta">{String(project.updatedAt).slice(0, 10)}</div>
                </div>
                <div
                  className="omnimux-workflow-card-actions"
                  onClick={(event) => { event.stopPropagation() }}
                >
                  <IconButton
                    variant="ghost"
                    size="xs"
                    title={t('projects.rename')}
                    aria-label={t('projects.rename')}
                    onClick={() => { void handleRename(project) }}
                  >
                    <IconEditOutline16 size={14} />
                  </IconButton>
                  <IconButton
                    variant="ghost"
                    size="xs"
                    title={t('projects.delete')}
                    aria-label={t('projects.delete')}
                    onClick={() => { setPendingDelete(project) }}
                  >
                    <IconTrashOutline16 size={14} />
                  </IconButton>
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
          onSubmit={(payload) => { void handleDialogSubmit(payload) }}
        />
      ) : null}
      {pendingDelete ? (
        <ConfirmModal
          open
          onClose={() => { setPendingDelete(null) }}
          title={t('projects.delete')}
          message={t('projects.deleteConfirm').replace('{title}', pendingDelete.title)}
          confirmLabel={t('projects.delete')}
          cancelLabel={t('projects.dialog.cancel')}
          confirmVariant="danger"
          onConfirm={() => { void confirmDelete() }}
        />
      ) : null}
    </div>
  )
}
