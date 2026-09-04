import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  collectRuntimeModelIds,
  diffCoverage,
  coverageIssues,
} from './coverage.js';
import { loadAll, resetContractCache, DEFAULT_SPECS_DIR } from './load.js';
import { verifyContracts } from './index.js';

test('collectRuntimeModelIds returns unique sorted ids (~43)', () => {
  const ids = collectRuntimeModelIds();
  assert.ok(ids.length >= 40, `expected ~43 runtime ids, got ${ids.length}`);
  assert.equal(ids.length, new Set(ids).size);
  assert.deepEqual(ids, [...ids].sort((a, b) => a.localeCompare(b)));
  assert.ok(ids.includes('whisper-1'));
  assert.ok(ids.includes('kling-avatar'));
});

test('coverage report exposes missingInYaml + listedOperations=[] on real specs', () => {
  resetContractCache();
  const index = loadAll(DEFAULT_SPECS_DIR, { useCache: false });
  const runtimeIds = collectRuntimeModelIds();
  const cov = diffCoverage(runtimeIds, index);
  assert.ok(cov.missingInYaml.length > 0, 'H1 expects coverage gaps');
  assert.ok(cov.contractIds.includes('kling-avatar'));
  assert.ok(cov.contractIds.includes('whisper-1'));
  assert.deepEqual(cov.listedOperations, []);
  assert.equal(cov.listedOperationCount, 0);
  // listedIds is any-op summary only; also empty in H1
  assert.deepEqual(cov.listedIds, []);
  assert.deepEqual(cov.listedModelIds, []);

  const auditIssues = coverageIssues(cov, { strict: false });
  assert.ok(auditIssues.every((i) => i.level === 'warning' || i.code === 'coverage_extra'));
  assert.ok(auditIssues.some((i) => i.code === 'coverage_missing'));

  const strictIssues = coverageIssues(cov, { strict: true });
  assert.ok(strictIssues.some((i) => i.code === 'coverage_missing' && i.level === 'error'));
});

test('verifyContracts audit ok; strict fails only on coverage; admission errors=0', () => {
  const audit = verifyContracts({ strict: false });
  assert.equal(audit.ok, true, JSON.stringify(audit.issues.filter((i) => i.level === 'error'), null, 2));
  assert.equal(audit.exitCode, 0);
  assert.equal(audit.admission.errorCount, 0);
  assert.ok(audit.coverage.missingCount > 0);
  assert.deepEqual(audit.listedOperations, []);
  assert.deepEqual(audit.coverage.listedOperations, []);

  const strict = verifyContracts({ strict: true });
  assert.equal(strict.ok, false);
  assert.equal(strict.exitCode, 1);
  assert.equal(strict.admission.errorCount, 0, 'strict must not invent admission errors');
  assert.ok(strict.issues.some((i) => i.code === 'coverage_missing' && i.level === 'error'));
  assert.ok(strict.issues.every((i) => i.level !== 'error' || i.code === 'coverage_missing'));
});

test('whisper-1 and kling-avatar not listed in real specs', () => {
  resetContractCache();
  const index = loadAll(DEFAULT_SPECS_DIR, { useCache: false });
  const w = index.get('whisper-1');
  assert.ok(w);
  assert.equal(w.listed, false);
  assert.equal(w.operations[0].listed, false);
  assert.equal(w.operations[0].id, 'speech_to_text');
  assert.equal(w.operations[0].output.type, 'text');
  assert.equal(w.operations[0].execution.status, 'none');

  const avatar = index.get('kling-avatar');
  assert.ok(avatar);
  assert.equal(avatar.listed, false);
  assert.equal(avatar.operations[0].id, 'digital_human');
  assert.equal(avatar.operations[0].listed, false);
  assert.ok(!avatar.operations.map((o) => o.id).includes('first_last_frame'));
});
