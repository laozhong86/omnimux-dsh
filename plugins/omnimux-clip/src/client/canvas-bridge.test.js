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

test('stage-store: handles openFromCanvas and session state', () => {
  let claimed = null
  const mockGetStage = () => ({
    claim: (id) => { claimed = id },
    release: () => { claimed = null },
    readBox: () => ({ top: 0, left: 0, width: 800, height: 600 }),
    PRODUCT_STAGE_EVENT: 'dsh-product-stage',
  })

  const store = createStageStore(mockGetStage)
  assert.equal(store.getSnapshot(), false)
  assert.equal(store.getSessionSnapshot(), null)

  store.openFromCanvas({
    nodeId: 'node_123',
    nodeTitle: '测试视频合成',
    projectId: 'proj_456',
    upstreamInputs: {
      videos: [{ path: '/tmp/video.mp4', name: 'shot1.mp4' }],
    },
  })

  assert.equal(store.getSnapshot(), true)
  assert.equal(claimed, 'omnimux-clip')
  const session = store.getSessionSnapshot()
  assert.equal(session.source, 'canvas')
  assert.equal(session.nodeId, 'node_123')
  assert.equal(session.nodeTitle, '测试视频合成')
  assert.equal(session.projectId, 'proj_456')
  assert.equal(session.upstreamInputs.videos.length, 1)

  store.set(false)
  assert.equal(store.getSnapshot(), false)
  assert.equal(store.getSessionSnapshot(), null)
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
