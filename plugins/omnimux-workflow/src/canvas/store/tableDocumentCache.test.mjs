import test from 'node:test';
import assert from 'node:assert/strict';
import { tableDocumentCache, createDefaultInitialDocument } from './tableDocumentCache.ts';

test('tableDocumentCache: ensure, mutate, undo, redo and dirty tracking', async () => {
  tableDocumentCache.resetAll();

  const tableId1 = 'tbl_alpha';
  const tableId2 = 'tbl_beta';

  // 1. Ensure local session without workspaceId (clean initialization)
  const session1 = await tableDocumentCache.ensure('', tableId1, {
    initialDoc: { title: '表一' },
  });

  assert.equal(session1.tableId, tableId1);
  assert.equal(session1.document.title, '表一');
  assert.equal(session1.dirty, false);
  assert.equal(session1.loadState, 'ready');

  // 2. Mutate session 1
  tableDocumentCache.mutate(tableId1, (doc) => {
    return {
      ...doc,
      rows: [{ id: 'r1', cells: { col_text: 'Alpha Row 1' } }],
    };
  });

  const s1Mutated = tableDocumentCache.getSession(tableId1);
  assert.ok(s1Mutated);
  assert.equal(s1Mutated.dirty, true);
  assert.equal(s1Mutated.document.rows.length, 1);
  assert.equal(s1Mutated.undoStack.length, 1);

  // 3. Ensure session 2 is isolated
  const session2 = await tableDocumentCache.ensure('', tableId2, {
    initialDoc: { title: '表二' },
  });
  assert.equal(session2.tableId, tableId2);
  assert.equal(session2.document.rows.length, 0);
  assert.equal(session2.dirty, false);

  // 4. Capture dirty
  const dirtyList = tableDocumentCache.captureDirty();
  assert.equal(dirtyList.length, 1);
  assert.equal(dirtyList[0].tableId, tableId1);
  assert.equal(dirtyList[0].document.rows[0].cells['col_text'], 'Alpha Row 1');

  // 5. Undo on session 1
  assert.equal(tableDocumentCache.canUndo(tableId1), true);
  tableDocumentCache.undo(tableId1);
  const s1Undone = tableDocumentCache.getSession(tableId1);
  assert.equal(s1Undone.document.rows.length, 0);
  assert.equal(tableDocumentCache.canRedo(tableId1), true);

  // 6. Redo on session 1
  tableDocumentCache.redo(tableId1);
  const s1Redone = tableDocumentCache.getSession(tableId1);
  assert.equal(s1Redone.document.rows.length, 1);

  // 7. Mark saved
  tableDocumentCache.markSaved(tableId1, 1, s1Redone.document);
  assert.equal(tableDocumentCache.getSession(tableId1).dirty, false);
  assert.equal(tableDocumentCache.getSession(tableId1).contentRev, 1);

  // Clean up
  tableDocumentCache.resetAll();
  assert.equal(tableDocumentCache.getSession(tableId1), undefined);
});
