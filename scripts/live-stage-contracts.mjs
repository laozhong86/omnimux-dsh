import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join } from 'node:path'

// Only published sidebar surfaces belong to `all`; canvas and clip have no
// independent visible sidebar row. Selectors identify content, not page chrome.
export const STAGE_CONTENT = Object.freeze({
  accounts: '.omnimux-accounts-stage-body',
  workflow: '.omnimux-workflow-library-body',
  assets: '.omnimux-assets-body',
  products: '.omnimux-products-body',
  inspiration: '.omnimux-inspiration-stage-body',
  publish: '.omnimux-publish-viewport',
  analytics: '.omnimux-analytics-stage-body',
  market: '.sh-plaza-body',
})

export function selectStages(stage) {
  assert.ok(stage === 'all' || Object.hasOwn(STAGE_CONTENT, stage), `Unknown stage: ${stage}`)
  return stage === 'all' ? Object.keys(STAGE_CONTENT) : [stage]
}

/** Execute the production client entry against controlled Host and kit seats.
 * No retired stage-store wrapper participates in this check.
 */
export async function captureStageContract(root, stage) {
  const plugin = `omnimux-${stage}`
  const hubRequire = createRequire(join(root, 'plugins/omnimux/package.json'))
  const require = createRequire(join(root, 'plugins', plugin, 'package.json'))
  const { build } = hubRequire('esbuild')
  const { JSDOM } = hubRequire('jsdom')
  const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>', {
    url: 'http://127.0.0.1:45120/', runScripts: 'outside-only', pretendToBeVisual: true,
  })
  const win = dom.window
  const entries = []
  const slots = []
  const tabs = new Map()
  const disposers = []
  const stateListeners = new Set()
  const states = new Map()
  let sessionId = 'qa-session-a'
  const blank = () => ({ panelOpen: false, width: 640, activePane: 'main', splits: { kind: 'leaf', id: 'main', tabs: [] } })
  const state = () => {
    if (!states.has(sessionId)) states.set(sessionId, blank())
    return states.get(sessionId)
  }
  const emit = () => { for (const listener of stateListeners) listener() }
  const store = {
    getSnapshot: () => ({ sessionId, state: state() }),
    reduce(fn) { states.set(sessionId, fn(state())); emit() },
    subscribe(listener) { stateListeners.add(listener); return () => stateListeners.delete(listener) },
  }
  const sidebar = {
    getSnapshot: () => ({ sessionId, state: state() }),
    subscribeState: store.subscribe,
    registerTab(tab) { tabs.set(tab.id, tab); return () => tabs.delete(tab.id) },
    getTab: (id) => tabs.get(id),
    openTab(tab) {
      store.reduce((s) => ({ ...s, panelOpen: true, splits: {
        ...s.splits, active: tab.id,
        tabs: [...s.splits.tabs.filter((t) => t.id !== tab.id), tab],
      } }))
    },
    closeTab(id) {
      store.reduce((s) => {
        const remaining = s.splits.tabs.filter((tab) => tab.id !== id)
        return { ...s, splits: { ...s.splits, tabs: remaining, active: remaining.at(-1)?.id } }
      })
    },
  }
  const ctx = {
    betterSidebar: sidebar,
    sessions: { list: { getSnapshot: () => ({ current: sessionId }), subscribe: store.subscribe } },
    workspaces: { list: { getSnapshot: () => ({ workspaces: [] }), subscribe: () => () => {} } },
    layout: { closeDetails() {}, openDetails() {} },
    locale: { register: () => () => {}, bind: () => (key) => key, subscribe: () => () => {}, getSnapshot: () => 'en' },
    slots: {
      inject(_name, fn) { const dispose = fn(); if (typeof dispose === 'function') disposers.push(dispose) },
      register(options, component) { slots.push({ options, component }); return () => {} },
    },
    effect(fn) { const dispose = fn(); if (typeof dispose === 'function') disposers.push(dispose) },
    inject(_names, fn) { return fn(ctx) },
  }
  win.__omnimuxSidebar = { register: () => () => {} }
  const react = require('react')
  const marketReact = { ...react, useState: (value) => [value, () => {}], useEffect() {}, useLayoutEffect() {} }
  win.require = (name) => name === 'react' && stage === 'market' ? marketReact : name === 'dsh-ui-kit'
    ? { createSidebarEntry(options) { entries.push(options); return () => {} } }
    : name === '@deepseek-ai/dsh-client-ui-primitives' ? {} : require(name)
  const compile = async (entry) => (await build({
    absWorkingDir: root, entryPoints: [entry], bundle: true, packages: 'external',
    platform: 'browser', format: 'cjs', jsx: 'automatic', write: false, logLevel: 'silent',
  })).outputFiles[0].text
  const evaluate = (code) => {
    win.module = { exports: {} }
    win.eval(code)
    return win.module.exports
  }
  try {
    const wb = evaluate(await compile('plugins/omnimux/src/client/workbench.js'))
    const api = wb.installWorkbenchGlobal(win)
    api.bind(ctx)
    api.attachStore(store, { sessionId })
    if (stage === 'market') {
      execFileSync(process.execPath, ['scripts/concat-client.mjs'], { cwd: join(root, 'plugins', plugin), stdio: 'pipe' })
      let client
      win.__ModuleLoader__ = { load: ({ factory }) => { client = factory(win.require) } }
      win.eval(readFileSync(join(root, 'plugins', plugin, 'lib/client.js'), 'utf8'))
      client.apply(ctx)
      // Execute the actual footer action; its marker and click payload are
      // captured from the registered React element, not copied from source text.
      const footer = slots.filter((slot) => slot.options.name === 'sidebar.footer.action')
      assert.equal(footer.length, 1, 'Market must register one footer action')
      const element = footer[0].component({ wide: true })
      const tree = element.type(element.props)
      const elements = (node) => !node || typeof node !== 'object' ? [] : [node, ...react.Children.toArray(node.props?.children).flatMap(elements)]
      const action = elements(tree).find((node) => node.type === 'button' && Object.keys(node.props).some((key) => /^data-[\w-]+-entry$/.test(key)))
      assert.ok(action, 'Market footer is missing its sidebar marker')
      const datasetKey = Object.keys(action.props).find((key) => /^data-[\w-]+-entry$/.test(key))
      action.props.onClick({ preventDefault() {} })
      for (let i = 0; i < 12; i++) await Promise.resolve()
      const tabId = state().splits.active
      assert.ok(tabs.has(tabId) && api.isActive(tabId), 'Market action must activate its registered Tab')
      return { stage, plugin, selector: `[${datasetKey}]`, tabId, content: STAGE_CONTENT[stage], adapter: 'footer-slot' }
    }
    const client = evaluate(await compile(`plugins/${plugin}/src/client/index.js`))
    client.apply(ctx)
    assert.equal(entries.length, 1, `${plugin}: expected one actual kit sidebar entry`)
    const { stageStore: adapter, datasetKey } = entries[0]
    assert.match(datasetKey, /^data-[\w-]+-entry$/)
    for (const method of ['getSnapshot', 'subscribe', 'open', 'close', 'set', 'readBox']) {
      assert.equal(typeof adapter?.[method], 'function', `${plugin}: missing ${method}`)
    }
    assert.equal(adapter.getSnapshot(), false)
    let notifications = 0
    const unsubscribe = adapter.subscribe(() => notifications++)
    assert.equal(typeof unsubscribe, 'function', `${plugin}: subscribe must return disposer`)
    const settle = async () => { for (let i = 0; i < 12; i++) await Promise.resolve() }
    adapter.open()
    await settle()
    assert.equal(adapter.getSnapshot(), true, `${plugin}: open must activate the registered Tab`)
    const tabId = state().splits.active
    assert.ok(tabs.has(tabId), `${plugin}: opened an unregistered Tab ${tabId}`)
    assert.ok(notifications > 0, `${plugin}: subscription did not observe open`)
    assert.ok(!win.document.documentElement.dataset.dshProductStage, 'sidebar must not claim an overlay')
    api.closePanel()
    assert.equal(adapter.getSnapshot(), false)
    adapter.open()
    await settle()
    assert.equal(adapter.getSnapshot(), true, `${plugin}: explicit open must restore a collapsed panel`)
    const box = adapter.readBox()
    for (const key of ['top', 'left', 'width', 'height']) assert.ok(Number.isFinite(box[key]), `${plugin}: invalid readBox.${key}`)
    adapter.set(false)
    assert.equal(adapter.getSnapshot(), false)
    adapter.set(true)
    await settle()
    assert.equal(adapter.getSnapshot(), true)
    sessionId = 'qa-session-b'
    emit()
    assert.equal(adapter.getSnapshot(), false, `${plugin}: active Tab leaked across sessions`)
    assert.equal(api.getUiContext().sessionId, sessionId)
    assert.equal(api.getUiContext().surface.openedTabs.length, 0, `${plugin}: viewport leaked across sessions`)
    sessionId = 'qa-session-a'
    emit()
    assert.equal(adapter.getSnapshot(), true, `${plugin}: failed to restore session A`)
    unsubscribe()
    const afterUnsubscribe = notifications
    adapter.close()
    assert.equal(adapter.getSnapshot(), false)
    assert.equal(notifications, afterUnsubscribe, `${plugin}: listener survived unsubscribe`)
    return { stage, plugin, selector: `[${datasetKey}]`, tabId, content: STAGE_CONTENT[stage], adapter: 'six-methods-and-disposer' }
  } finally {
    for (const dispose of disposers.reverse()) dispose()
    win.close()
  }
}

export async function captureStageContracts(root, stages = Object.keys(STAGE_CONTENT)) {
  assert.ok(stages.length > 0, 'Zero stage targets')
  const targets = []
  for (const stage of stages) targets.push(await captureStageContract(root, stage))
  return targets
}
