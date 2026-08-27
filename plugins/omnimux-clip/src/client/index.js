import { ClipOverlay } from './ClipOverlay.jsx'

export const name = 'omnimux-clip'
export const inject = ['slots', 'locale']

const NS = 'omnimux.clip'

/**
 * Register Stage `clip-editor` on `shell.overlay`.
 * Overlay unmounts on close (spec: release WebGPU / decoders in later phases).
 *
 * `locale` is a declared strict inject (mirrors omnimux-assets); guarded bind
 * keeps node-side tests without a locale service working.
 *
 * @param {{
 *   slots: { inject: Function, register: Function },
 *   locale?: { bind?: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  const t = ctx.locale && typeof ctx.locale.bind === 'function'
    ? ctx.locale.bind(NS)
    : undefined
  const face = () => ({ t })
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'clip-editor',
    order: 50,
    locale: NS,
    inject: face,
  }, ClipOverlay))
}
