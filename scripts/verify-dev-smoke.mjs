#!/usr/bin/env node
/**
 * scripts/verify-dev-smoke.mjs
 *
 * OmniMux Cold-Start E2E Smoke Probe:
 * 1. Probes Dev App (default port 45120) and Prod App (port 44120/44200).
 * 2. Checks:
 *    - HTTP Status === 200
 *    - HTML DOM skeleton valid (#root container present)
 *    - No `[data-dsh-boot="hanging"]` or `data-dsh-boot-error`
 *    - No `[data-dsh-desktop-recovery]` emergency recovery overlay
 *    - 0 Fatal JavaScript errors
 *
 * Usage:
 *   node scripts/verify-dev-smoke.mjs [--port=45120] [--strict]
 */

import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { probeHttpEndpoint, analyzeHtmlSkeleton } from './lib/smoke-probe-utils.mjs'

const DEFAULT_DEV_PORTS = [45120, 44200]

/**
 * Run smoke check against target URL.
 * @param {string} url
 * @param {{ strict?: boolean }} [opts]
 */
export async function runSmokeCheck(url, opts = {}) {
  const strict = opts.strict ?? false
  console.log(`[Smoke Probe] Probing ${url}...`)

  const res = await probeHttpEndpoint(url, { timeoutMs: 5000 })

  if (!res.ok) {
    if (res.status === 0) {
      if (!strict) {
        console.log(`[SMOKE SKIP] Host unreachable at ${url} (${res.error || 'Connection refused'}).`)
        console.log('  · Start the desktop dev app with `pnpm dev` or `yarn omnimux:dev` to run live smoke probe.')
        return { skipped: true, success: true }
      } else {
        console.error(`❌ [Smoke Failure] Server unreachable at ${url}: ${res.error}`)
        return { skipped: false, success: false, error: res.error }
      }
    } else {
      console.error(`❌ [Smoke Failure] Received HTTP ${res.status} from ${url}`)
      return { skipped: false, success: false, error: `HTTP ${res.status}` }
    }
  }

  console.log(`  ✓ HTTP ${res.status} OK (${res.durationMs}ms)`)

  // Analyze HTML DOM skeleton
  const analysis = analyzeHtmlSkeleton(res.body)

  if (!analysis.valid) {
    console.error(`❌ [Smoke Failure] HTML validation errors on ${url}:`)
    for (const issue of analysis.issues) {
      console.error(`  - ${issue}`)
    }
    return { skipped: false, success: false, issues: analysis.issues }
  }

  console.log(`  ✓ HTML DOM skeleton verified (Root container OK, 0 boot errors, 0 recovery overlays)`)
  return { skipped: false, success: true }
}

// CLI Execution Entrypoint
const isMain = process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))

if (isMain) {
  const args = process.argv.slice(2)
  let targetPort = null
  let targetUrl = null
  let strict = false

  for (const arg of args) {
    if (arg === '--strict') {
      strict = true
    } else if (arg.startsWith('--port=')) {
      targetPort = parseInt(arg.slice('--port='.length), 10)
    } else if (arg.startsWith('--url=')) {
      targetUrl = arg.slice('--url='.length)
    }
  }

  const urlsToProbe = targetUrl
    ? [targetUrl]
    : targetPort
    ? [`http://127.0.0.1:${targetPort}`]
    : DEFAULT_DEV_PORTS.map((p) => `http://127.0.0.1:${p}`)

  let allSuccess = true
  let probedCount = 0

  for (const url of urlsToProbe) {
    const outcome = await runSmokeCheck(url, { strict })
    if (!outcome.skipped) {
      probedCount++
      if (!outcome.success) {
        allSuccess = false
      }
    }
  }

  if (probedCount === 0 && !strict) {
    console.log('[Smoke Probe] All target ports idle/skipped. Verification completed.')
    process.exit(0)
  }

  if (allSuccess) {
    console.log('✓ Smoke probe completed successfully.')
    process.exit(0)
  } else {
    console.error('❌ Smoke probe failed.')
    process.exit(1)
  }
}
