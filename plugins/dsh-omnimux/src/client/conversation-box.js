/**
 * @param {unknown} node
 * @returns {{ top: number, left: number, width: number, height: number } | null}
 */
function sizableBox(node) {
  if (!node || typeof node.getBoundingClientRect !== 'function') return null
  const rect = node.getBoundingClientRect()
  if (rect.width >= 8 && rect.height >= 8) {
    return { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
  }
  return null
}

/**
 * Cover the conversation scrollport only. The session header / view tabs sit
 * above `[data-conversation-scroll]` and must stay clickable.
 * @returns {{ top: number, left: number, width: number, height: number }}
 */
export function readConversationBox() {
  const preferred = sizableBox(document.querySelector('[data-conversation-scroll]'))
  if (preferred) return preferred
  let node = document.querySelector('[data-slot="conversation"]')
  while (node) {
    const box = sizableBox(node)
    if (box) return box
    node = node.parentElement
  }
  const left = 56
  return { top: 0, left, width: Math.max(8, window.innerWidth - left), height: Math.max(8, window.innerHeight) }
}
