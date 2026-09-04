import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { createAttachmentStore } from '../attachments/store.ts'
import {
  CONTEXT_MARKER,
  hasAttachedContext,
  injectAttachmentsBeforeSubmit,
  nextComposerText,
} from './submit-inject.js'

describe('submit-inject', () => {
  it('leaves empty attachments unchanged', () => {
    assert.equal(nextComposerText('hello', []), 'hello')
  })

  it('does not append twice when the marker is already present', () => {
    const once = nextComposerText('ask', [{
      kind: 'document',
      title: 'a.md',
      extension: 'MD',
      relativePath: 'assets/imported/a.md',
    }])
    assert.match(once, new RegExp(CONTEXT_MARKER))
    assert.equal(nextComposerText(once, [{ kind: 'document', title: 'a.md', extension: 'MD', relativePath: 'assets/imported/a.md' }]), once)
    assert.equal(hasAttachedContext(once), true)
  })

  it('no-ops when the store has no session attachments', () => {
    const store = createAttachmentStore()
    store.setActiveSessionId('ses_1')
    const field = { value: 'draft', isContentEditable: false }
    const doc = {
      querySelector(sel) {
        if (String(sel).includes('textarea') || String(sel).includes('textbox') || String(sel).includes('lexical')) return field
        return null
      },
    }
    assert.equal(injectAttachmentsBeforeSubmit(doc, { store }), false)
    assert.equal(field.value, 'draft')
  })
})
