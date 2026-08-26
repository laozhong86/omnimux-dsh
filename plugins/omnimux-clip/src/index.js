import { createClipDispatcher, registerClipRoutes } from './http/routes.js'
import { ensureClipDirs, resolveClipPaths } from './paths.js'
import { createProjectStore } from './store/projectStore.js'
import { createClipEditorSeam } from './seam/clipEditor.js'
import { CLIP_PROMPT, createClipTools, registerClipTools } from './tools.js'

export const name = 'omnimux-clip'
export const inject = ['tools']

export { ClipDomainError } from './errors.js'
export { resolveClipPaths, ensureClipDirs } from './paths.js'
export { createClipTools, objectParams } from './tools.js'
export { applyOperations, CLIP_EDIT_TYPES } from './timeline/ops.js'
export { diagnoseTimeline } from './timeline/diagnostics.js'
export { createProjectStore } from './store/projectStore.js'

/**
 * Cordis host entry. Mounts HTTP, clipEditor seam, and clip_* tools.
 *
 * @param {{
 *   webServer?: { register: Function },
 *   tools?: { register: Function },
 *   systemPrompt?: { section: Function },
 *   provide?: (name: string, value: unknown) => void,
 *   get?: (name: string) => unknown,
 *   effect?: (factory: () => () => void, label?: string) => void,
 *   inject?: (deps: string[], callback: (inner: object) => void) => void,
 * }} ctx
 */
export function apply(ctx) {
  const paths = ensureClipDirs(resolveClipPaths())
  const store = createProjectStore({ paths })
  const dispatcher = createClipDispatcher({ paths, store })
  const tools = createClipTools({ store })

  if (typeof ctx.provide === 'function') {
    ctx.provide('clipEditor', createClipEditorSeam({ store }))
  }

  const registerPromptOn = (c) => {
    if (c?.systemPrompt && typeof c.systemPrompt.section === 'function') {
      const registerPrompt = () => c.systemPrompt.section({
        name: 'clip:ops',
        order: 55,
        text: CLIP_PROMPT,
      })
      if (typeof c.effect === 'function') c.effect(registerPrompt, 'omnimux-clip: prompt')
      else registerPrompt()
    }
  }

  if (ctx.systemPrompt) {
    registerPromptOn(ctx)
  } else if (typeof ctx.inject === 'function') {
    ctx.inject(['systemPrompt'], (innerCtx) => registerPromptOn(innerCtx))
  }

  registerClipTools(ctx, tools)

  if (typeof ctx.inject === 'function') {
    ctx.inject(['webServer'], (innerCtx) => {
      if (innerCtx.webServer) registerClipRoutes(innerCtx, dispatcher)
    })
  }
}
