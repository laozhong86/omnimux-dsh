import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mapLegacyOperation, LEGACY_OPERATION_MAP } from './legacy-operation-map.js';

test('legacy map translates historical aliases', () => {
  assert.equal(mapLegacyOperation('reference'), 'video_multi_ref');
  assert.equal(mapLegacyOperation('i2v'), 'first_frame');
  assert.equal(mapLegacyOperation('asr'), 'speech_to_text');
  assert.equal(mapLegacyOperation('first_last_frame'), 'first_last_frame');
  assert.equal(mapLegacyOperation('unknown_keep'), 'unknown_keep');
  assert.ok(Object.keys(LEGACY_OPERATION_MAP).length >= 8);
});
