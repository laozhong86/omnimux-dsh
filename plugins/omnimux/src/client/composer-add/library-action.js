/** Keep one pending AssetPicker action from settling another action's UI. */
export function createLibraryActionController() {
  let current = null

  const settle = (action, restoreComposerFocus) => {
    if (!action || current !== action) return false
    current = null
    action.resolve()
    if (restoreComposerFocus && !action.signal.aborted) action.restoreComposerFocus()
    return true
  }

  return {
    start(action) {
      settle(current, false)
      current = action
      return action
    },
    current() {
      return current
    },
    isCurrent(action) {
      return current === action
    },
    settle(action) {
      return settle(action, true)
    },
  }
}
