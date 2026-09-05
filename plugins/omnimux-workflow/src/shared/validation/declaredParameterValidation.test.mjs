import assert from 'node:assert/strict';
import { test } from 'node:test';
import { findDeclaredParameterFailure } from './declaredParameterValidation.ts';

const modelParameters = {
  aspectRatio: { options: [{ value: '16:9' }, { value: '9:16' }], defaultValue: '16:9' },
  resolution: { options: [{ value: '720p' }, { value: '1080p' }], defaultValue: '720p' },
};

test('declared parameter validation rejects kept values outside operation/model contract', () => {
  assert.deepEqual(
    findDeclaredParameterFailure({ aspectRatio: 'auto', resolution: '480p' }, undefined, modelParameters),
    { field: 'aspectRatio', message: '参数“aspectRatio”不支持值 "auto"' },
  );
});

test('operation declarations override model declarations and preserve documented automatic duration', () => {
  assert.equal(
    findDeclaredParameterFailure(
      { duration: -1 },
      { duration: { options: [{ value: -1 }], defaultValue: -1, allowAuto: true } },
      { duration: { options: [{ value: 5 }], defaultValue: 5 } },
    ),
    null,
  );
});
