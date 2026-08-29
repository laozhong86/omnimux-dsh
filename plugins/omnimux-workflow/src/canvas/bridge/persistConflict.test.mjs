/**
 * 远端 version 前进：同图 adopt，本地干净 reload，真冲突才 conflict。
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { decideRemoteVersionAdvance } from './persistConflict.ts';

test('本地签名 == 远端签名 → adopt（打开自撞 / flush 409）', () => {
  assert.equal(
    decideRemoteVersionAdvance({
      localSignature: 'graph-a',
      lastSavedSignature: 'graph-a',
      remoteSignature: 'graph-a',
    }),
    'adopt',
  );
  assert.equal(
    decideRemoteVersionAdvance({
      localSignature: 'graph-a',
      lastSavedSignature: 'stale',
      remoteSignature: 'graph-a',
    }),
    'adopt',
  );
});

test('本地干净但远端图不同 → reload', () => {
  assert.equal(
    decideRemoteVersionAdvance({
      localSignature: 'graph-a',
      lastSavedSignature: 'graph-a',
      remoteSignature: 'graph-b',
    }),
    'reload',
  );
});

test('本地脏且远端图不同 → conflict', () => {
  assert.equal(
    decideRemoteVersionAdvance({
      localSignature: 'local-edit',
      lastSavedSignature: 'graph-a',
      remoteSignature: 'graph-b',
    }),
    'conflict',
  );
});
