import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createAgentTools } from './agent-tools.js'
import { createDispatcher, registerRoutes } from './http.js'

export const name = 'omnimux-gallery'
export const inject = ['tools']

/**
 * @param {{
 *   inject?: (deps: string[], callback: (inner: object) => void) => void,
 *   get?: (name: string) => unknown,
 *   effect?: (factory: () => () => void, label?: string) => void,
 *   tools?: { register: Function },
 *   webServer?: { register: Function },
 *   systemPrompt?: object,
 * }} ctx
 */
export function apply(ctx) {
  const packageRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
  const dispatcher = createDispatcher({ packageRoot })
  /**
   * @param {{ webServer?: { register: Function }, get?: Function, effect?: Function }} httpCtx
   */
  const mountHttp = (httpCtx) => {
    const webServer = httpCtx.webServer ?? httpCtx.get?.('webServer')
    if (!webServer || typeof webServer.register !== 'function') return
    const mount = () => registerRoutes(webServer, dispatcher)
    if (typeof httpCtx.effect === 'function') httpCtx.effect(mount, 'omnimux-gallery: http')
    else mount()
  }
  if (typeof ctx.inject === 'function') ctx.inject(['webServer'], mountHttp)
  else mountHttp(ctx)

  const registerTools = (toolsCtx) => {
    const tools = toolsCtx.tools ?? toolsCtx.get?.('tools')
    if (!tools || typeof tools.register !== 'function') return
    const definitions = createAgentTools(() => dispatcher.roots(), () => dispatcher.catalog())
    const disposers = definitions
      .map((definition) => tools.register(definition))
      .filter((dispose) => typeof dispose === 'function')
    if (typeof toolsCtx.effect === 'function') toolsCtx.effect(() => disposers.forEach((d) => d()))
    else toolsCtx.effect?.()
  }
  if (typeof ctx.inject === 'function') ctx.inject(['tools'], registerTools)
  else registerTools(ctx)

  const registerPrompt = (promptCtx) => {
    const prompt = promptCtx.systemPrompt ?? promptCtx.get?.('systemPrompt')
    if (!prompt || typeof prompt.section !== 'function') return
    const register = () => prompt.section({
      name: 'tool:esc-gallery',
      order: 211,
      text: [
        'The Experts · Skills · Connectors gallery (专家·技能·连接器) has its own tools: esc_search for the local WorkBuddy directory (plus SkillHub when hub:true), esc_install by catalog id, esc_summon for experts, esc_list / esc_uninstall for local management.',
        'Preferred routing: user wants a WorkBuddy expert / local skill / connector → esc_search; user explicitly wants SkillHub 技能 → skillhub_search (do not double-search).',
        'Install only after the user chooses an item: esc_install with the catalog id. Then say it is installed in one short sentence.',
      ].join(' '),
    })
    if (typeof promptCtx.effect === 'function') promptCtx.effect(register, 'omnimux-gallery: system prompt')
    else register()
  }
  if (typeof ctx.inject === 'function') ctx.inject(['systemPrompt'], registerPrompt)
  else registerPrompt(ctx)
}
