import assert from 'node:assert/strict';
import { test } from 'node:test';
import { sessionToWorkspaceId } from './sessionWorkspaceId.ts';

test('sessionToWorkspaceId: empty → undefined', () => {
  assert.equal(sessionToWorkspaceId(undefined), undefined);
  assert.equal(sessionToWorkspaceId(null), undefined);
  assert.equal(sessionToWorkspaceId(''), undefined);
  assert.equal(sessionToWorkspaceId(1), undefined);
});

test('sessionToWorkspaceId: stable ws_ + 12 hex (locked vector)', () => {
  const id = sessionToWorkspaceId('sess-1');
  assert.equal(typeof id, 'string');
  assert.match(id, /^ws_[0-9a-f]{12}$/);
  assert.equal(id, sessionToWorkspaceId('sess-1'));
  assert.notEqual(id, sessionToWorkspaceId('sess-2'));
  // Frozen vector — Host project lookup and CanvasTab must stay in lockstep.
  assert.equal(sessionToWorkspaceId('sess-1'), 'ws_5b511f810d9f');
});
