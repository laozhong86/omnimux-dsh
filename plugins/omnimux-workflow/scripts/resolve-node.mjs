/**
 * Resolve the real Node binary + a spawn-safe environment for this package's
 * scripts, so they never exec the DSH Desktop binary as a GUI app.
 *
 * Background: DSH Desktop injects `runtime-commands/bin` (an
 * `ELECTRON_RUN_AS_NODE` shim) at the front of PATH. Under it, `process.execPath`
 * (and often `command -v node`) resolves to the DSH Desktop app binary. If a
 * script does `spawn(process.execPath, [other.mjs])`, Electron may boot as a
 * **GUI app** instead of a headless node — flashing Dock icons and foreground
 * activation loops. Forcing `ELECTRON_RUN_AS_NODE=1` on the child lets the same
 * binary run as plain node.
 */
import { execFileSync } from 'node:child_process'

/** Absolute path to a usable Node binary. Prefer a real node, else execPath. */
export function realNode() {
  // In a normal (non-shim) environment `process.execPath` is already real Node.
  // Detect the DSH shim by an app-bundle suffix and, if so, resolve a real node.
  const execPath = process.execPath
  if (!/DSH Desktop\.app\/Contents\/MacOS/.test(execPath)) return execPath
  for (const candidate of [process.env.NODE, process.env.OMNIMUX_NODE]) {
    if (candidate && !/DSH Desktop\.app/.test(candidate)) return candidate
  }
  try {
    const found = execFileSync('which', ['node'], { encoding: 'utf8' }).trim()
    if (found && !/DSH Desktop\.app/.test(found)) return found
  } catch {}
  return execPath
}

/** Environment for spawning a child Node/JS script headlessly. */
export function nodeEnv(base = process.env) {
  return {
    ...base,
    // Force Electron's node mode so a DSH-binary-resolved `node` never boots GUI.
    ELECTRON_RUN_AS_NODE: '1',
    NODE: realNode(),
  }
}

export default { realNode, nodeEnv }
