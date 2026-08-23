/**
 * Native file chooser for the product add/edit flow.
 * Prefix is independent from the assets picker HTTP path.
 *
 * macOS uses AppleScript `choose file` (user-driven). Other platforms
 * answer `picker-unsupported`. File picks allow multiple selections.
 */
import { spawn } from 'node:child_process'

const PROMPTS = {
  file: '选择要挂到产品的文件',
  directory: '选择要挂到产品的文件夹',
}

/**
 * @param {'file' | 'directory'} kind
 */
function pickScript(kind) {
  const prompt = PROMPTS[kind]
  const choose = kind === 'file' ? 'file' : 'folder'
  return [
    `set theItems to choose ${choose} with prompt "${prompt}" with multiple selections allowed`,
    'set posixPaths to ""',
    'repeat with theItem in theItems',
    'set posixPaths to posixPaths & POSIX path of theItem & linefeed',
    'end repeat',
    'return posixPaths',
  ].join('\n')
}

/**
 * @param {string} stdout
 * @returns {string[]}
 */
export function parsePickedPaths(stdout) {
  const text = typeof stdout === 'string' ? stdout : ''
  const paths = []
  for (const line of text.split(/\r?\n/)) {
    const path = line.replace(/\s+$/, '')
    if (path === '') continue
    paths.push(path)
  }
  return paths
}

/**
 * @param {'file' | 'directory'} kind
 * @param {{ platform?: NodeJS.Platform, run?: typeof runCommand }} [deps]
 * @returns {Promise<{ path: string | null, paths: string[] }>}
 */
export async function pickNativePath(kind, deps = {}) {
  if (kind !== 'file' && kind !== 'directory') {
    throw new PickerError('picker-invalid-kind', `unknown pick kind: ${String(kind)}`)
  }
  const platform = deps.platform ?? process.platform
  if (platform !== 'darwin') {
    throw new PickerError('picker-unsupported', `native picker not supported on ${platform}`)
  }
  const run = deps.run ?? runCommand
  const script = pickScript(kind)
  try {
    const { stdout } = await run('osascript', ['-e', script])
    const paths = parsePickedPaths(stdout)
    return { path: paths[0] ?? null, paths }
  } catch (error) {
    if (isUserCancel(error)) return { path: null, paths: [] }
    throw new PickerError('picker-failed', messageOf(error))
  }
}

export class PickerError extends Error {
  /**
   * @param {string} code
   * @param {string} message
   */
  constructor(code, message) {
    super(message)
    this.name = 'PickerError'
    this.code = code
  }
}

/**
 * @param {unknown} error
 */
function isUserCancel(error) {
  const text = messageOf(error)
  return /User canceled|-128/i.test(text)
}

/**
 * @param {unknown} error
 */
function messageOf(error) {
  if (error instanceof Error) return `${error.message} ${(error.stderr ?? '')}`
  return String(error)
}

/**
 * @param {string} command
 * @param {string[]} argv
 * @returns {Promise<{ stdout: string, stderr: string }>}
 */
function runCommand(command, argv) {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(command, argv, { stdio: ['ignore', 'pipe', 'pipe'] })
    const stdoutChunks = []
    const stderrChunks = []
    child.stdout.on('data', (chunk) => stdoutChunks.push(chunk))
    child.stderr.on('data', (chunk) => stderrChunks.push(chunk))
    child.on('error', rejectPromise)
    child.on('close', (code) => {
      const stdout = Buffer.concat(stdoutChunks).toString('utf8')
      const stderr = Buffer.concat(stderrChunks).toString('utf8')
      if (code === 0) {
        resolvePromise({ stdout, stderr })
        return
      }
      const error = new Error(`${command} exited with code ${code}`)
      error.code = code
      error.stderr = stderr
      rejectPromise(error)
    })
  })
}
