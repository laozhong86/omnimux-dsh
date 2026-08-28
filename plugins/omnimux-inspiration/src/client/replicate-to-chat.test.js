import assert from 'node:assert/strict'
import { afterEach, describe, it } from 'node:test'
import {
  isReplicateBusy,
  replicateInspirationToChat,
  resetReplicateLock,
  runExclusive,
} from './replicate-to-chat.js'

afterEach(() => {
  resetReplicateLock()
})

const ROW = {
  id: 'insp-1',
  title: '夏日护肤',
  source_url: 'https://tiktok.com/@x/video/1',
  type: 'video',
}

describe('replicateInspirationToChat', () => {
  it('waits for the global then starts then prefills, success is silent', async () => {
    const status = []
    const starts = []
    const prefills = []
    const result = await replicateInspirationToChat(ROW, {
      async waitForWorkflow() {
        return { version: 1, startReplicationProject: async () => ({ ok: true }) }
      },
      async startReplication(input) {
        starts.push(input)
        return { ok: true, sessionId: 's1', project: { id: 'p1', path: '/lib/夏日护肤' } }
      },
      async prefillPrompt(text) {
        prefills.push(text)
        return { ok: true, via: 'prefill' }
      },
      onStatus(key) { status.push(key) },
    })
    assert.equal(result.ok, true)
    assert.deepEqual(starts, [{ title: '夏日护肤', source: 'inspiration' }])
    assert.equal(prefills.length, 1)
    assert.match(prefills[0], /inspiration_id: insp-1/)
    assert.match(prefills[0], /\/video-replication/)
    assert.equal(status.at(-1), null)
  })

  it('maps a 4s timeout to workflowMissing and never starts / prefills', async () => {
    const status = []
    let started = 0
    let prefilled = 0
    const result = await replicateInspirationToChat(ROW, {
      async waitForWorkflow() { return null },
      async startReplication() { started += 1; return { ok: true } },
      async prefillPrompt() { prefilled += 1; return { ok: true } },
      onStatus(key) { status.push(key) },
    })
    assert.deepEqual(result, { ok: false, error: 'workflowMissing' })
    assert.equal(started, 0)
    assert.equal(prefilled, 0)
    assert.equal(status.at(-1), 'card.cta.workflowMissing')
  })

  it('busy does not prefill a prompt', async () => {
    let prefilled = 0
    const result = await replicateInspirationToChat(ROW, {
      async waitForWorkflow() { return { version: 1, startReplicationProject() {} } },
      async startReplication() { return { ok: false, error: 'busy' } },
      async prefillPrompt() { prefilled += 1; return { ok: true } },
      onStatus() {},
    })
    assert.deepEqual(result, { ok: false, error: 'busy' })
    assert.equal(prefilled, 0)
  })

  it('does not call startReplication a second time when prefill fails', async () => {
    let startCount = 0
    const result = await replicateInspirationToChat(ROW, {
      async waitForWorkflow() { return { version: 1, startReplicationProject() {} } },
      async startReplication() {
        startCount += 1
        return { ok: true, sessionId: 's1' }
      },
      async prefillPrompt() { return { ok: false, error: 'composer-missing' } },
      onStatus() {},
    })
    assert.equal(result.ok, false)
    assert.equal(result.error, 'sendManual')
    assert.equal(result.created, true)
    assert.equal(startCount, 1)
  })

  it('concurrent clicks call startReplicationProject exactly once; second returns busy', async () => {
    let releaseFirst
    const firstGate = new Promise((resolve) => { releaseFirst = resolve })
    const starts = []
    const api = {
      version: 1,
      async startReplicationProject(input) {
        starts.push(input)
        await firstGate
        return { ok: true, sessionId: 's1', project: { id: 'p1' } }
      },
    }
    const first = replicateInspirationToChat(ROW, {
      async waitForWorkflow() { return api },
      async prefillPrompt() { return { ok: true, via: 'prefill' } },
      onStatus() {},
    })
    const secondResult = await replicateInspirationToChat({ ...ROW, id: 'insp-2' }, {
      async waitForWorkflow() { return api },
      async prefillPrompt() { return { ok: true, via: 'prefill' } },
      onStatus() {},
    })
    assert.deepEqual(secondResult, { ok: false, error: 'busy' })
    releaseFirst()
    const firstResult = await first
    assert.equal(firstResult.ok, true)
    assert.equal(starts.length, 1)
    assert.deepEqual(starts[0], { title: '夏日护肤', source: 'inspiration' })
  })

  it('immediate try-lock rejects a second click with busy and never starts a second project', async () => {
    const order = []
    const starts = []
    let releaseFirst
    const firstGate = new Promise((resolve) => { releaseFirst = resolve })
    const first = replicateInspirationToChat(ROW, {
      async waitForWorkflow() {
        order.push('wait-1')
        await firstGate
        return { version: 1, startReplicationProject() {} }
      },
      async startReplication(input) {
        order.push('start-1')
        starts.push(input)
        return { ok: true, sessionId: 's1' }
      },
      async prefillPrompt() {
        order.push('prefill-1')
        return { ok: true, via: 'prefill' }
      },
      onStatus() {},
    })
    assert.equal(isReplicateBusy(), true)
    const secondStatus = []
    const second = replicateInspirationToChat({ ...ROW, id: 'insp-2' }, {
      async waitForWorkflow() {
        order.push('wait-2')
        return { version: 1, startReplicationProject() {} }
      },
      async startReplication(input) {
        order.push('start-2')
        starts.push(input)
        return { ok: true, sessionId: 's2' }
      },
      async prefillPrompt() {
        order.push('prefill-2')
        return { ok: true, via: 'prefill' }
      },
      onStatus(key) { secondStatus.push(key) },
    })
    const secondResult = await second
    assert.deepEqual(secondResult, { ok: false, error: 'busy' })
    assert.deepEqual(secondStatus, ['card.cta.busy'])
    assert.deepEqual(order, ['wait-1'])
    assert.equal(starts.length, 0)
    releaseFirst()
    const firstResult = await first
    assert.equal(firstResult.ok, true)
    assert.deepEqual(order, ['wait-1', 'start-1', 'prefill-1'])
    assert.equal(starts.length, 1)
    assert.equal(isReplicateBusy(), false)
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
