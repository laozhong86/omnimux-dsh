export const FOCUS_CSS = [
  '.omnimux-products-focusable:focus-visible{outline:2px solid var(--dsw-alias-label-primary);outline-offset:2px;border-radius:8px;}',
  '.omnimux-products-focusable:hover{border-color:var(--dsw-alias-border-l4);}',
].join('\n')

export function activateRowKeydown(trigger) {
  return (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      trigger()
    }
  }
}
