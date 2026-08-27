import { spawnSync } from 'node:child_process'

export const KEYCHAIN_SERVICE = 'omnimux'
export const KEYCHAIN_ACCOUNT = 'access_token'
export const KEYCHAIN_LABEL = 'OmniMux access token'
export const KEYCHAIN_TIMEOUT_MS = 500

/**
 * Executes a security CLI command with timeout and safety guarantees.
 * Never logs or returns secrets in error messages.
 *
 * @param {string[]} args
 * @param {number} [timeout]
 * @param {Function} [runner]
 * @returns {{ status: number | null, stdout: string, error?: Error }}
 */
function runSecurity(args, timeout = KEYCHAIN_TIMEOUT_MS, runner = spawnSync) {
  try {
    const res = runner('security', args, {
      encoding: 'utf8',
      timeout,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
    return {
      status: res.status ?? null,
      stdout: typeof res.stdout === 'string' ? res.stdout : '',
      error: res.error,
    }
  } catch {
    return { status: 1, stdout: '', error: new Error('security execution failed') }
  }
}

/**
 * Creates a platform-aware Keychain accessor.
 * On darwin, reads/writes macOS Keychain using the `security` CLI.
 * On other platforms, acts as a safe no-op.
 *
 * @param {{
 *   platform?: string,
 *   service?: string,
 *   account?: string,
 *   timeoutMs?: number,
 *   runner?: typeof spawnSync,
 * }} [opts]
 */
export function createKeychain(opts = {}) {
  const platform = opts.platform || process.platform
  const service = opts.service || KEYCHAIN_SERVICE
  const account = opts.account || KEYCHAIN_ACCOUNT
  const timeoutMs = opts.timeoutMs ?? KEYCHAIN_TIMEOUT_MS
  const runner = opts.runner ?? spawnSync

  const isDarwin = platform === 'darwin'

  /**
   * Retrieves the access token from Keychain.
   * @returns {string | undefined}
   */
  function get() {
    if (!isDarwin) return undefined
    const res = runSecurity(['find-generic-password', '-s', service, '-a', account, '-w'], timeoutMs, runner)
    if (res.status === 0 && res.stdout) {
      const token = res.stdout.trim()
      return token || undefined
    }
    return undefined
  }

  /**
   * Sets or updates the access token in Keychain.
   * @param {string} value
   * @returns {boolean}
   */
  function set(value) {
    if (!isDarwin || !value) return false
    const res = runSecurity(
      ['add-generic-password', '-U', '-s', service, '-a', account, '-l', KEYCHAIN_LABEL, '-w', value],
      timeoutMs,
      runner,
    )
    return res.status === 0
  }

  /**
   * Deletes the access token entry from Keychain.
   * @returns {boolean}
   */
  function unset() {
    if (!isDarwin) return false
    const res = runSecurity(['delete-generic-password', '-s', service, '-a', account], timeoutMs, runner)
    return res.status === 0
  }

  return { get, set, unset }
}
