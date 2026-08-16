/** Shared open state for the sidebar Apps entry and the center stage. */

export function createAppsStore() {
  let open = false
  const listeners = new Set()

  function emit() {
    for (const listener of listeners) listener()
  }

  return {
    getSnapshot: () => open,
    /**
     * @param {() => void} listener
     */
    subscribe(listener) {
      listeners.add(listener)
      return () => { listeners.delete(listener) }
    },
    /**
     * @param {boolean} next
     */
    set(next) {
      if (open === next) return
      open = next
      emit()
    },
    toggle() {
      open = !open
      emit()
    },
  }
}
