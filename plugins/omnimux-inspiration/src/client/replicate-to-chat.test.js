import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { afterEach, describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import {
  buildInspirationPayload,
  dismissInspirationLibrary,
  isReplicateBusy,
  oneClickReplicate,
  resetReplicateLock,
  runExclusive,
} from './replicate-to-chat.js'

const here = dirname(fileURLToPath(import.meta.url))
const source = readFileSync(join(here, 'replicate-to-chat.js'), 'utf8')
const feedSource = readFileSync(join(here, 'use-inspiration-feed.js'), 'utf8')

afterEach(() => {
  resetReplicateLock()
})

const ROW = {
  id: 'insp-1',
  title: '夏日护肤',
  source_url: 'https://tiktok.com/@x/video/1',
  source_platform: 'tiktok',
  type: 'video',
}

function makeIo(overrides = {}) {
  const clicks = []
  const attaches = []
  const prefills = []
  const closes = []
  const status = []
  const starts = []
  const io = {
    clicks,
    attaches,
    prefills,
    closes,
    status,
    starts,
    hasSession: () => true,
    isBlank: () => true,
    async clickNewSession() {
      clicks.push(1)
      return { ok: true, sessionId: 'sess-new' }
    },
    addAttachment(sessionId, payload) {
      attaches.push({ sessionId, payload })
      return { ok: true }
    },
    async prefillPrompt(text) {
      prefills.push(text)
      return { ok: true, via: 'prefill' }
    },
    dismissLibrary() {
      closes.push(1)
    },
    startReplication() {
      starts.push(1)
      return { ok: true }
    },
    onStatus(key) {
      status.push(key)
    },
    ...overrides,
  }
  return io
}

describe('replicate-to-chat.js isolation', () => {
  it('does not import workflow global or call project/session APIs', () => {
    assert.doesNotMatch(source, /startReplicationProject/)
    assert.doesNotMatch(source, /waitForWorkflowGlobal/)
    assert.doesNotMatch(source, /runNewProject/)
    assert.doesNotMatch(source, /activateProjectCanvas/)
    assert.doesNotMatch(source, /sessions\.create/)
    assert.doesNotMatch(source, /clipboard/)
    assert.doesNotMatch(source, /from ['"].*workflow-global/)
    assert.doesNotMatch(source, /omnimux-workflow/)
    assert.doesNotMatch(source, /replicateInspirationToChat/)
    assert.doesNotMatch(feedSource, /replicateInspirationToChat/)
    assert.match(feedSource, /oneClickReplicate/)
  })
})

describe('buildInspirationPayload', () => {
  it('uses inspiration kind and metadata id', () => {
    const payload = buildInspirationPayload(ROW)
    assert.equal(payload.sourcePlugin, 'omnimux-inspiration')
    assert.equal(payload.kind, 'inspiration')
    assert.equal(payload.entityId, 'insp-1')
    assert.equal(payload.extension, 'INSPIRATION')
    assert.equal(payload.metadata.inspiration_id, 'insp-1')
    assert.doesNotMatch(JSON.stringify(payload), /"kind":"product"/)
  })
})

describe('dismissInspirationLibrary', () => {
  it('calls onDismissModal then closeTab with the library tab id', () => {
    const dismissed = []
    const tabs = []
    dismissInspirationLibrary({
      onDismissModal: () => dismissed.push(1),
      window: {
        __omnimuxWorkbench: {
          closeTab(id) { tabs.push(id) },
        },
      },
    })
    assert.deepEqual(dismissed, [1])
    assert.deepEqual(tabs, ['omnimux-inspiration:library'])
  })

  it('after closeTab unhides the conversation column (split, not collapsed)', () => {
    const order = []
    dismissInspirationLibrary({
      window: {
        __omnimuxWorkbench: {
          closeTab(id) { order.push(`close:${id}`) },
          setConversationCollapsed(next) { order.push(`collapsed:${next}`) },
          setFocus(mode) { order.push(`focus:${mode}`) },
        },
      },
    })
    assert.deepEqual(order, [
      'close:omnimux-inspiration:library',
      'collapsed:false',
      'focus:split',
    ])
  })

  it('falls back to createSidebarStore().close when closeTab is missing', () => {
    const closed = []
    dismissInspirationLibrary({
      window: {
        __omnimuxWorkbench: {
          createSidebarStore({ tabId }) {
            return { close() { closed.push(tabId) } }
          },
        },
      },
    })
    assert.deepEqual(closed, ['omnimux-inspiration:library'])
  })
})

describe('oneClickReplicate', () => {
  it('never invokes startReplication even when io supplies it', async () => {
    const io = makeIo()
    const result = await oneClickReplicate(ROW, io)
    assert.equal(result.ok, true)
    assert.equal(io.starts.length, 0)
  })

  it('noSession never attaches and reports card.cta.noSession', async () => {
    const io = makeIo({ hasSession: () => false })
    const result = await oneClickReplicate(ROW, io)
    assert.deepEqual(result, { ok: false, error: 'noSession' })
    assert.equal(io.attaches.length, 0)
    assert.equal(io.clicks.length, 0)
    assert.equal(io.prefills.length, 0)
    assert.equal(io.closes.length, 0)
    assert.equal(io.status.at(-1), 'card.cta.noSession')
  })

  it('success uses real dismissInspirationLibrary: closeTab then split', async () => {
    const order = []
    const win = {
      __omnimuxWorkbench: {
        closeTab(id) { order.push(`close:${id}`) },
        setConversationCollapsed(v) { order.push(`collapsed:${v}`) },
        setFocus(mode) { order.push(`focus:${mode}`) },
      },
    }
    const io = makeIo({ isBlank: () => true, window: win })
    delete io.dismissLibrary
    const result = await oneClickReplicate(ROW, io)
    assert.equal(result.ok, true)
    assert.equal(order[0], 'close:omnimux-inspiration:library')
    assert.ok(order.includes('collapsed:false'))
    assert.ok(order.includes('focus:split'))
  })

  it('blank reuses the session: 0 clicks, 1 attach, 1 prefill, 1 closeTab', async () => {
    const io = makeIo({ isBlank: () => true })
    const result = await oneClickReplicate(ROW, io)
    assert.equal(result.ok, true)
    assert.equal(result.reused, true)
    assert.equal(result.clickedNewSession, false)
    assert.equal(result.attached, true)
    assert.equal(io.clicks.length, 0)
    assert.equal(io.attaches.length, 1)
    assert.equal(io.prefills.length, 1)
    assert.equal(io.closes.length, 1)
    assert.match(io.prefills[0], /^\/video-deconstruct\n/)
    assert.match(io.prefills[0], /inspiration_id: insp-1/)
    assert.equal(io.status.at(-1), null)
  })

  it('non-blank clicks official new session then attach+prefill+close', async () => {
    const io = makeIo({ isBlank: () => false })
    const result = await oneClickReplicate(ROW, io)
    assert.equal(result.ok, true)
    assert.equal(result.reused, false)
    assert.equal(result.clickedNewSession, true)
    assert.equal(io.clicks.length, 1)
    assert.equal(io.attaches.length, 1)
    assert.equal(io.attaches[0].sessionId, 'sess-new')
    assert.equal(io.prefills.length, 1)
    assert.equal(io.closes.length, 1)
  })

  it('missing new-session button is newSessionFailed and does not attach', async () => {
    const io = makeIo({
      isBlank: () => false,
      async clickNewSession() {
        return { ok: false, error: 'newSessionFailed' }
      },
    })
    const result = await oneClickReplicate(ROW, io)
    assert.deepEqual(result, { ok: false, error: 'newSessionFailed' })
    assert.equal(io.attaches.length, 0)
    assert.equal(io.prefills.length, 0)
    assert.equal(io.status.at(-1), 'card.cta.newSessionFailed')
  })

  it('second concurrent click returns busy and does not queue', async () => {
    let releaseFirst
    const firstGate = new Promise((resolve) => { releaseFirst = resolve })
    const io1 = makeIo({
      async prefillPrompt(text) {
        io1.prefills.push(text)
        await firstGate
        return { ok: true, via: 'prefill' }
      },
    })
    const first = oneClickReplicate(ROW, io1)
    assert.equal(isReplicateBusy(), true)
    const io2 = makeIo()
    const second = await oneClickReplicate({ ...ROW, id: 'insp-2' }, io2)
    assert.deepEqual(second, { ok: false, error: 'busy' })
    assert.deepEqual(io2.status, ['card.cta.busy'])
    assert.equal(io2.attaches.length, 0)
    releaseFirst()
    const firstResult = await first
    assert.equal(firstResult.ok, true)
    assert.equal(isReplicateBusy(), false)
  })

  it('duplicate is treated as attached and continues to prefill', async () => {
    const io = makeIo({
      addAttachment(sessionId, payload) {
        io.attaches.push({ sessionId, payload })
        return { ok: false, reason: 'duplicate' }
      },
    })
    const result = await oneClickReplicate(ROW, io)
    assert.equal(result.ok, true)
    assert.equal(result.duplicate, true)
    assert.equal(result.attached, true)
    assert.equal(io.prefills.length, 1)
    assert.equal(io.closes.length, 1)
  })

  it('quota-exceeded still prefills but returns attachFull', async () => {
    const io = makeIo({
      addAttachment(sessionId, payload) {
        io.attaches.push({ sessionId, payload })
        return { ok: false, reason: 'quota-exceeded' }
      },
    })
    const result = await oneClickReplicate(ROW, io)
    assert.deepEqual(result, { ok: false, error: 'attachFull' })
    assert.equal(io.prefills.length, 1)
    assert.equal(io.closes.length, 0)
    assert.equal(io.status.at(-1), 'card.cta.attachFull')
  })

  it('prefill failure after attach is sendManual and never clicks send', async () => {
    let sendClicks = 0
    const io = makeIo({
      async prefillPrompt() {
        return { ok: false, error: 'composer-missing' }
      },
      findSendButton() {
        return { click() { sendClicks += 1 } }
      },
    })
    const result = await oneClickReplicate(ROW, io)
    assert.equal(result.ok, false)
    assert.equal(result.error, 'sendManual')
    assert.equal(io.status.at(-1), 'card.cta.sendManual')
    assert.equal(sendClicks, 0)
    assert.equal(io.closes.length, 0)
  })

  it('runExclusive does not queue: two concurrent calls invoke the worker once', async () => {
    let release
    const hanging = new Promise((resolve) => { release = resolve })
    let runCount = 0
    const first = runExclusive(async () => {
      runCount += 1
      await hanging
      return { ok: true, n: runCount }
    })
    const second = await runExclusive(async () => {
      runCount += 1
      return { ok: true, n: runCount }
    })
    assert.deepEqual(second, { ok: false, error: 'busy' })
    assert.equal(runCount, 1)
    release()
    const settled = await first
    assert.deepEqual(settled, { ok: true, n: 1 })
    assert.equal(isReplicateBusy(), false)
  })
})
