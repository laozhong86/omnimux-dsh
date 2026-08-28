import test from 'node:test'
import assert from 'node:assert/strict'
import { createStageStore } from './stage-store.js'
import {
  createAndMountCanvasBridge,
  notifyCanvasSave,
  notifyCanvasProgress,
  notifyCanvasClose,
} from './CanvasBridge.js'
import {
  OMNIMUX_CLIP_OPEN,
  OMNIMUX_CLIP_SAVE,
  OMNIMUX_CLIP_CLOSE,
  OMNIMUX_CLIP_PROGRESS,
  isOpenClipEditorPayload,
  isSaveClipEditorPayload,
  isCloseClipEditorPayload,
  isProgressClipEditorPayload,
} from './clip-events.js'

test('stage-store: openFromCanvas does not claim stage, set(false) does not release stage', () => {
  let claimed = null
  let released = null
  const mockGetStage = () => ({
    claim: (id) => { claimed = id },
    release: (id) => { released = id },
    readBox: () => ({ top: 0, left: 0, width: 800, height: 600 }),
    PRODUCT_STAGE_EVENT: 'dsh-product-stage',
  })

  const store = createStageStore(mockGetStage)
  assert.equal(store.getSnapshot(), false)
  assert.equal(store.getSessionSnapshot(), null)

  // 1. openFromCanvas 仅将 open 设为 true 并保留 session，不调用 mockStage.claim
  store.openFromCanvas({
    nodeId: 'node_123',
    nodeTitle: '测试视频合成',
    projectId: 'proj_456',
    upstreamInputs: {
      videos: [{ path: '/tmp/video.mp4', name: 'shot1.mp4' }],
    },
  })

  assert.equal(store.getSnapshot(), true)
  assert.equal(claimed, null, 'openFromCanvas must NOT claim product stage')
  const session = store.getSessionSnapshot()
  assert.equal(session.source, 'canvas')
  assert.equal(session.nodeId, 'node_123')
  assert.equal(session.nodeTitle, '测试视频合成')
  assert.equal(session.projectId, 'proj_456')
  assert.equal(session.upstreamInputs.videos.length, 1)

  // 2. stage.set(false) 在画布模式下关闭浮层，清理 session，且不调用 mockStage.release
  store.set(false)
  assert.equal(store.getSnapshot(), false)
  assert.equal(store.getSessionSnapshot(), null)
  assert.equal(released, null, 'set(false) in canvas mode must NOT release product stage')

  store.dispose()
})

test('stage-store: standalone mode properly claims and releases product stage', () => {
  let claimed = null
  let released = null
  const mockGetStage = () => ({
    claim: (id) => { claimed = id },
    release: (id) => { released = id },
    readBox: () => ({ top: 0, left: 0, width: 800, height: 600 }),
    PRODUCT_STAGE_EVENT: 'dsh-product-stage',
  })

  const store = createStageStore(mockGetStage)

  // 3. 独立模式下 stage.set(true) 正常调用 mockStage.claim
  store.set(true)
  assert.equal(store.getSnapshot(), true)
  assert.equal(claimed, 'omnimux-clip')
  assert.equal(store.getSessionSnapshot(), null)

  // 独立模式下 stage.set(false) 正常调用 mockStage.release
  store.set(false)
  assert.equal(store.getSnapshot(), false)
  assert.equal(released, 'omnimux-clip')
  assert.equal(store.getSessionSnapshot(), null)

  store.dispose()
})

test('stage-store: external switch to another stage exits canvas mode', () => {
  if (typeof globalThis.window === 'undefined') {
    globalThis.window = new EventTarget()
  }

  const mockGetStage = () => ({
    claim: () => {},
    release: () => {},
    readBox: () => ({ top: 0, left: 0, width: 800, height: 600 }),
    PRODUCT_STAGE_EVENT: 'dsh-product-stage',
  })

  const store = createStageStore(mockGetStage)
  store.openFromCanvas({
    nodeId: 'node_canvas_1',
    nodeTitle: 'Canvas Video',
  })
  assert.equal(store.getSnapshot(), true)
  assert.equal(store.getSessionSnapshot()?.source, 'canvas')

  // 4. 外部派发切换到其他 stageId
  globalThis.window.dispatchEvent(new CustomEvent('dsh-product-stage', {
    detail: { id: 'omnimux-assets' },
  }))

  assert.equal(store.getSnapshot(), false, 'Canvas mode must close on external stage switch')
  assert.equal(store.getSessionSnapshot(), null, 'Session must be cleared on external stage switch')

  store.dispose()
})

test('stage-store: external switch to omnimux-clip activates standalone mode', () => {
  if (typeof globalThis.window === 'undefined') {
    globalThis.window = new EventTarget()
  }

  const mockGetStage = () => ({
    claim: () => {},
    release: () => {},
    readBox: () => ({ top: 0, left: 0, width: 800, height: 600 }),
    PRODUCT_STAGE_EVENT: 'dsh-product-stage',
  })

  const store = createStageStore(mockGetStage)
  assert.equal(store.getSnapshot(), false)

  globalThis.window.dispatchEvent(new CustomEvent('dsh-product-stage', {
    detail: { id: 'omnimux-clip' },
  }))

  assert.equal(store.getSnapshot(), true, 'Must activate when id matches STAGE_ID')
  assert.equal(store.getSessionSnapshot(), null, 'Standalone mode has no session')

  store.dispose()
})

test('CanvasBridge: mounts and routes OMNIMUX_CLIP_OPEN / CLOSE', () => {
  const target = new EventTarget()
  let openedPayload = null
  let isClosed = false

  const mockStage = {
    openFromCanvas: (p) => { openedPayload = p },
    set: (val) => { if (!val) isClosed = true },
    getSessionSnapshot: () => ({ nodeId: 'target_node_1' }),
  }

  const cleanup = createAndMountCanvasBridge({ stage: mockStage, target })

  // Dispatch open event
  target.dispatchEvent(new CustomEvent(OMNIMUX_CLIP_OPEN, {
    detail: {
      source: 'canvas',
      nodeId: 'target_node_1',
      nodeTitle: 'Canvas Composition',
    },
  }))

  assert.ok(openedPayload)
  assert.equal(openedPayload.nodeId, 'target_node_1')

  // Dispatch close event with matching nodeId
  target.dispatchEvent(new CustomEvent(OMNIMUX_CLIP_CLOSE, {
    detail: { nodeId: 'target_node_1' },
  }))
  assert.equal(isClosed, true)

  cleanup()
})

test('clip-events payload validators', () => {
  assert.equal(isOpenClipEditorPayload({ source: 'canvas', nodeId: 'node_1' }), true)
  assert.equal(isOpenClipEditorPayload({ source: 'invalid' }), false)
  assert.equal(isOpenClipEditorPayload('non-object'), false)

  assert.equal(isSaveClipEditorPayload({ nodeId: 'n1', output: { videoPath: '/tmp/a.mp4' } }), true)
  assert.equal(isSaveClipEditorPayload({ output: { videoPath: 123 } }), false)
  assert.equal(isSaveClipEditorPayload('non-object'), false)

  assert.equal(isCloseClipEditorPayload({ nodeId: 'n1' }), true)
  assert.equal(isCloseClipEditorPayload('non-object'), false)

  assert.equal(isProgressClipEditorPayload({ nodeId: 'n1', renderProgress: 50 }), true)
  assert.equal(isProgressClipEditorPayload({ renderProgress: 'not-number' }), false)
})
