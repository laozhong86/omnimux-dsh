/**
 * Inspiration → chat orchestrator.
 *
 * Pipeline: derive title → exclusive lock → wait workflow global →
 * startReplicationProject → prefillReplicationPrompt.
 * Failures write onStatus(errorKey); success is silent (composer prefilled,
 * user decides when to send).
 */
import { buildReplicationPrompt, deriveProjectTitle } from './replication.js'
import { prefillReplicationPrompt } from './composer-inject.js'
import { waitForWorkflowGlobal } from './workflow-global.js'

/** Module-level inflight lock. A second call returns `{ error: 'busy' }` and does not queue. */
let replicateInflight = null

/**
 * Immediate try-lock. If a replicate is already running, the second caller
 * is rejected with `{ ok: false, error: 'busy' }` and `fn` is never invoked.
 * @template T
 * @param {() => Promise<T>} fn
 * @returns {Promise<T | { ok: false, error: 'busy' }>}
 */
export function runExclusive(fn) {
  if (replicateInflight) {
    return Promise.resolve({ ok: false, error: 'busy' })
  }
  const work = Promise.resolve()
    .then(fn)
    .finally(() => {
      if (replicateInflight === work) replicateInflight = null
    })
  replicateInflight = work
  return work
}

export function isReplicateBusy() {
  return replicateInflight != null
}

/**
 * Test-only: drop the inflight handle so cases start from idle.
 */
export function resetReplicateLock() {
  replicateInflight = null
}

/**
 * @param {{ id?: unknown, title?: unknown, source_url?: unknown, type?: unknown, local_paths?: object }} row
 * @param {{
 *   waitForWorkflow?: typeof waitForWorkflowGlobal,
 *   startReplication?: (input: { title: string, source: 'inspiration' }) => Promise<{ ok: boolean, error?: string }>,
 *   prefillPrompt?: typeof prefillReplicationPrompt,
 *   now?: () => number,
 *   onStatus?: (key: string | null, detail?: string) => void,
 * }} [io]
 */
export async function replicateInspirationToChat(row, io = {}) {
  const onStatus = typeof io.onStatus === 'function' ? io.onStatus : () => {}
  const wait = typeof io.waitForWorkflow === 'function' ? io.waitForWorkflow : waitForWorkflowGlobal
  const prefill = typeof io.prefillPrompt === 'function' ? io.prefillPrompt : prefillReplicationPrompt

  if (isReplicateBusy()) {
    onStatus('card.cta.busy')
    return { ok: false, error: 'busy' }
  }

  return runExclusive(async () => {
    onStatus('card.cta.replicating')
    const title = deriveProjectTitle(row)
    const api = await wait()
    if (!api) {
      onStatus('card.cta.workflowMissing')
      return { ok: false, error: 'workflowMissing' }
    }
    const start = typeof io.startReplication === 'function'
      ? io.startReplication
      : (typeof api.startReplicationProject === 'function'
        ? (input) => api.startReplicationProject(input)
        : null)

    if (typeof start !== 'function') {
      onStatus('card.cta.workflowMissing')
      return { ok: false, error: 'workflowMissing' }
    }

    let created
    try {
      created = await start({ title, source: 'inspiration' })
    } catch {
      onStatus('card.cta.createFailed')
      return { ok: false, error: 'createFailed' }
    }

    if (!created || created.ok !== true) {
      const code = created && created.error ? String(created.error) : 'create-failed'
      if (code === 'busy') {
        onStatus('card.cta.busy')
        return { ok: false, error: 'busy' }
      }
      if (code === 'unavailable') {
        onStatus('card.cta.workflowMissing')
        return { ok: false, error: 'workflowMissing' }
      }
      onStatus('card.cta.createFailed', code)
      return { ok: false, error: code }
    }

    const prompt = buildReplicationPrompt(row)
    let prefilled
    try {
      prefilled = await prefill(prompt)
    } catch {
      onStatus('card.cta.sendManual')
      return { ok: false, error: 'sendManual', created: true }
    }

    if (!prefilled || prefilled.ok !== true) {
      onStatus('card.cta.sendManual')
      return { ok: false, error: 'sendManual', created: true }
    }

    onStatus(null)
    return { ok: true, created }
  })
}
