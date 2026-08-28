/** Client half: locale dictionaries, sidebar「项目」row + 「新建项目」inline
 *  button, the project library first-level page (shell.overlay), and the
 *  project-session canvas tab on dsh-better-sidebar. */
import { createElement } from 'react'
import { NS, en, zh } from './locales.js'
import { createStageStore } from './stage-store.js'
import { mountSidebarEntry } from './sidebar-entry.js'
import { mountNewProjectEntry } from './projects/sidebar-new-project.js'
import { ProjectLibraryPage } from './projects/ProjectLibraryPage.jsx'
import { CanvasTab } from './projects/CanvasTab.jsx'
import { bindBetterSidebar, CANVAS_TAB_ID } from './projects/projectCanvas.js'
import { installWorkflowGlobal } from './projects/workflow-global.js'

export const name = 'omnimux-workflow'
export const inject = ['slots', 'locale', 'sessions', 'workspaces', 'layout']

/**
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   sessions: { create: Function, open: Function, list: { getSnapshot: Function } },
 *   workspaces?: { list: { getSnapshot: Function } },
 *   layout: { openDetails: Function, closeDetails: Function },
 *   betterSidebar?: { registerTab: Function },
 *   inject?: Function,
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux-workflow: dictionaries')
  const t = ctx.locale.bind(NS)
  const stage = createStageStore(() => window.__omnimuxStage)

  // 侧栏：项目 row（rank 5）+ 新建项目 inline 并排按钮（kind:'inline'）。
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), 'omnimux-workflow: sidebar entry')
  // 不要把未 inject 的 betterSidebar 塞进闭包：Cordis Proxy 会直接 throw。
  // 画布服务走 bindBetterSidebar（下面 inject 回调里绑），activateProjectCanvas 会等。
  ctx.effect(
    () => mountNewProjectEntry({ sessions: ctx.sessions, workspaces: ctx.workspaces, layout: ctx.layout, stage }, t, ctx.locale),
    'omnimux-workflow: new-project entry',
  )

  // Cross-plugin seam: inspiration (and future callers) create a project
  // without importing this package. Disposer deletes window.__omnimuxWorkflow.
  const seamDeps = {
    sessions: ctx.sessions,
    workspaces: ctx.workspaces,
    layout: ctx.layout,
    stage,
    t,
  }
  ctx.effect(
    () => installWorkflowGlobal(typeof window !== 'undefined' ? window : undefined, seamDeps),
    'omnimux-workflow: global seam',
  )

  // 一级页：项目列表页（shell.overlay）。依赖 face 透传 sessions/workspaces/layout。
  const stageFace = () => ({
    t,
    stage,
    locale: ctx.locale,
    sessions: ctx.sessions,
    workspaces: ctx.workspaces,
    layout: ctx.layout,
  })
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-workflow-stage',
    order: 40,
    locale: NS,
    inject: stageFace,
  }, ProjectLibraryPage))

  // 画布挂到 dsh-better-sidebar，不 shadow 官方 details。
  // betterSidebar 由第三方插件 provide；未装时降级（项目仍可建，只是没有宽栏画布）。
  // 可选依赖只能走 ctx.inject：顶层读未声明服务会炸整个 loader。
  const renderCanvasIcon = (size = 16) => createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  }, [
    createElement('rect', {
      key: 'frame',
      x: '1.75',
      y: '1.75',
      width: '12.5',
      height: '12.5',
      rx: '2.5',
      stroke: 'currentColor',
      strokeWidth: '1.5',
    }),
    createElement('circle', {
      key: 'dot-1',
      cx: '5.5',
      cy: '5.5',
      r: '1.25',
      fill: 'currentColor',
    }),
    createElement('circle', {
      key: 'dot-2',
      cx: '10.5',
      cy: '10.5',
      r: '1.25',
      fill: 'currentColor',
    }),
    createElement('path', {
      key: 'edge',
      d: 'M6.75 5.5h1.75a2 2 0 0 1 2 2v1.75',
      stroke: 'currentColor',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
    }),
  ])

  const registerCanvas = (sidebar) => {
    if (!sidebar || typeof sidebar.registerTab !== 'function') return () => {}
    bindBetterSidebar(sidebar)
    return sidebar.registerTab({
      id: CANVAS_TAB_ID,
      title: () => t('details.canvasTab'),
      icon: renderCanvasIcon,
      order: 5,
      hidden: false,
      single: true,
      component: (props) => createElement(CanvasTab, { ...props, t }),
    })
  }
  if (typeof ctx.inject === 'function') {
    ctx.inject(['betterSidebar'], (inner) => {
      ctx.effect(() => registerCanvas(inner.betterSidebar), 'omnimux-workflow: canvas tab')
    })
  }
}
