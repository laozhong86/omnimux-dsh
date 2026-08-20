import { test } from 'node:test'
import assert from 'node:assert/strict'
import { insertGesture } from './insert-gesture.js'

test('insertGesture appends the slash token through the value setter', () => {
  const field = {
    value: 'hello',
    selectionStart: 5,
    selectionEnd: 5,
    events: [],
    setSelectionRange(start, end) {
      this.selectionStart = start
      this.selectionEnd = end
    },
    dispatchEvent(event) {
      this.events.push(event.type)
      return true
    },
    focus() {
      this.focused = true
    },
  }
  assert.equal(insertGesture(field, '/stock-research'), true)
  assert.equal(field.value, 'hello/stock-research ')
  assert.ok(field.events.includes('input'))
  assert.equal(field.focused, true)
})
