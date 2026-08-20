/**
 * Shared a11y helpers: focus ring + hover rules for keyboard-reachable rows,
 * and the Enter/Space activation handler. Kept separate from AssetsStage so
 * row components avoid a circular import.
 */

/** Focus ring + row hover rules (injected once by AssetsStage). */
export const FOCUS_CSS = [
  '.dsh-omnimux-assets-focusable:focus-visible{outline:2px solid var(--dsw-alias-bg-interactive-primary,#3b6fbd);outline-offset:-2px;border-radius:4px;}',
  'tr.dsh-omnimux-assets-focusable:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(128,128,128,.12));}',
].join('\n')

/** Enter/Space activates a keyboard-reachable row. */
export function activateRowKeydown(trigger) {
  return (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      trigger()
    }
  }
}
