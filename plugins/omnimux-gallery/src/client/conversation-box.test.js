import { test } from 'node:test'
import assert from 'node:assert/strict'
import { PRODUCT_STAGE_CHROME } from './conversation-box.js'

test('product stage chrome hides the session header and session highlight', () => {
  assert.match(PRODUCT_STAGE_CHROME, /conversation\.session\.header/)
  assert.match(PRODUCT_STAGE_CHROME, /treeitem/)
  assert.match(PRODUCT_STAGE_CHROME, /toggleCluster/)
  assert.match(PRODUCT_STAGE_CHROME, /pointer-events:none/)
  assert.match(PRODUCT_STAGE_CHROME, /dsh-window-drag/)
})
