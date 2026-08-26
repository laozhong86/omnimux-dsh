import { createClipDispatcher, registerClipRoutes } from './http/routes.js'
import { ensureClipDirs, resolveClipPaths } from './paths.js'

export const name = 'omnimux-clip'
export const inject = ['webServer']

export { ClipDomainError } from './errors.js'
export { resolveClipPaths, ensureClipDirs } from './paths.js'

/**
 * Cordis host entry. Phase 1 mounts HTTP + storage dirs only.
 * Agent tools (`clip_*`) land in a later phase.
 *
 * @param {{
 *   webServer?: { register: Function },
 *   get?: (name: string) => unknown,
 *   effect?: (factory: () => () => void, label?: string) => void,
 *   inject?: (deps: string[], callback: (inner: object) => void) => void,
 * }} ctx
 */
export function apply(ctx) {
  const paths = ensureClipDirs(resolveClipPaths())
  const dispatcher = createClipDispatcher({ paths })

  const mountHttp = (httpCtx) => {
    const webServer = httpCtx.webServer ?? httpCtx.get?.('webServer')
    if (!webServer || typeof webServer.register !== 'function') return
    const mount = () => registerClipRoutes(webServer, dispatcher)
    if (typeof httpCtx.effect === 'function') {
      httpCtx.effect(mount, 'omnimux-clip: http routes')
    } else {
      mount()
    }
  }

  if (typeof ctx.inject === 'function') ctx.inject(['webServer'], mountHttp)
  else mountHttp(ctx)
}
