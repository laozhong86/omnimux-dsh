import { createElement } from 'react'
import { OpenReelStudioTab } from './OpenReelStudioTab.jsx'
import { createStageStore } from './stage-store.js'
import { mountSidebarEntry } from './sidebar-entry.js'
import { ClipStage } from './ClipStage.jsx'

export const name = 'omnimux-clip'
export const inject = ['slots', 'locale']

const NS = 'omnimux.clip'

const zh = {
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

const en = {
  'tab.title': 'Video Clip',
  'tab.untitled': 'Untitled clip',
  'tab.createTitle': 'New clip project',
  'tab.nameLabel': 'Project name',
  'tab.namePlaceholder': 'My video',
  'tab.sizeLabel': 'Resolution',
  'tab.fpsLabel': 'Frame rate',
  'tab.create': 'Create and open editor',
  'tab.openOfficial': 'Open official welcome',
  'tab.save': 'Save',
  'tab.saved': 'Saved',
  'tab.saving': 'Saving…',
  'tab.saveFailed': 'Save failed',
}

function renderClipIcon(size = 16) {
  return createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  }, [
    createElement('rect', {
      key: 'frame',
      x: '1.75',
      y: '3.25',
      width: '12.5',
      height: '9.5',
      rx: '1.75',
      stroke: 'currentColor',
      strokeWidth: '1.5',
    }),
    createElement('path', {
      key: 'play',
      d: 'M6.4 5.6v4.8L10.6 8 6.4 5.6Z',
      fill: 'currentColor',
    }),
  ])
}

/**
 * OmniMux Clip client entry.
 * Mounts:
 * 1. Locale dictionaries (NS: omnimux.clip)
 * 2. Left sidebar extra entry (rank 8.2 under 新会话)
 * 3. First-level Stage on `shell.overlay` (ClipStage)
 * 4. Better Sidebar Tab (`omnimux-clip:studio`)
 *
 * @param {{
 *   locale?: { bind?: Function, register?: Function },
 *   slots?: { inject: Function, register: Function },
 *   inject?: Function,
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  if (ctx.locale && typeof ctx.locale.register === 'function') {
    const register = () => ctx.locale.register(NS, { zh, en })
    if (typeof ctx.effect === 'function') ctx.effect(register, 'omnimux-clip: dictionaries')
    else register()
  }

  const t = ctx.locale && typeof ctx.locale.bind === 'function'
    ? ctx.locale.bind(NS)
    : (key) => zh[key] || key

  const stage = createStageStore(() => window.__omnimuxStage)
  const stageFace = () => ({ t, stage })

  if (typeof ctx.effect === 'function') {
    ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), 'omnimux-clip: sidebar entry')
  } else {
    mountSidebarEntry(stage, t, ctx.locale)
  }

  if (ctx.slots && typeof ctx.slots.inject === 'function') {
    ctx.slots.inject('shell.overlay', () => ctx.slots.register({
      name: 'shell.overlay',
      id: 'omnimux-clip-stage',
      order: 35,
      locale: NS,
      inject: stageFace,
    }, ClipStage))
  }

  const registerStudio = (sidebar) => {
    if (!sidebar || typeof sidebar.registerTab !== 'function') return () => {}
    return sidebar.registerTab({
      id: 'omnimux-clip:studio',
      title: () => {
        try {
          const value = t('tab.title')
          if (value && value !== 'tab.title') return value
        } catch { /* fall through */ }
        return '视频剪辑'
      },
      icon: renderClipIcon,
      order: 10,
      hidden: false,
      single: true,
      component: (props) => createElement(OpenReelStudioTab, { ...props, t }),
    })
  }

  if (typeof ctx.inject === 'function') {
    ctx.inject(['betterSidebar'], (inner) => {
      const sidebar = inner.betterSidebar ?? inner.get?.('betterSidebar')
      if (typeof ctx.effect === 'function') {
        ctx.effect(() => registerStudio(sidebar), 'omnimux-clip: studio tab')
      } else {
        registerStudio(sidebar)
      }
    })
  }
}
