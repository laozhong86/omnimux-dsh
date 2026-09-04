import { test } from 'node:test';
import assert from 'node:assert/strict';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  loadAll,
  resetContractCache,
  getModelContract,
  verifyContracts,
  DEFAULT_SPECS_DIR,
} from './contract/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SPECS_DIR = join(__dirname, 'specs');

test('MCC 契约门禁: 视频模型能力声明文件完备性（contract loader）', () => {
  resetContractCache();
  const index = loadAll(SPECS_DIR, { useCache: false });
  assert.equal((index.parseErrors ?? []).length, 0);

  const videoModels = index.all().filter((m) => m.managementGroup === 'video');
  assert.ok(videoModels.length >= 6, '必须至少声明主流视频模型');

  // 断言 Kling Avatar 纯数字人绝无首尾帧
  const avatar = index.get('kling-avatar') ?? getModelContract('kling-avatar', SPECS_DIR);
  assert.ok(avatar, '必须声明 kling-avatar 数字人');
  const avatarOps = avatar.operations.map((m) => m.id);
  assert.ok(avatarOps.includes('digital_human'), '数字人必须包含 digital_human 模式');
  assert.ok(!avatarOps.includes('first_last_frame'), '数字人严禁包含首尾帧模式');
  assert.equal(avatar.listed, false);
  assert.equal(avatar.operations[0].listed, false);

  // 断言 Seedance 系列绝无首尾帧
  const seedance = index.get('seedance-2-5');
  assert.ok(seedance, '必须声明 seedance-2-5');
  const seedanceOps = seedance.operations.map((m) => m.id);
  assert.ok(!seedanceOps.includes('first_last_frame'), 'Seedance 严禁包含首尾帧模式');
});

test('H1 real specs listedOperations must be empty', () => {
  resetContractCache();
  const index = loadAll(DEFAULT_SPECS_DIR, { useCache: false });
  assert.equal(index.schemaVersion, '1.1');
  assert.deepEqual(index.listedOperations ?? [], []);
  for (const model of index.all()) {
    assert.equal(model.listed, false, model.id);
    for (const op of model.operations) {
      assert.equal(op.listed, false, `${model.id}#${op.id}`);
      assert.ok(op.research?.status, `${model.id}#${op.id} research`);
      assert.ok(op.execution?.status, `${model.id}#${op.id} execution`);
      // H1: no verified+live pair on real specs
      const verifiedLive =
        op.research.status === 'verified' && op.execution.status === 'live';
      assert.equal(verifiedLive, false, `${model.id}#${op.id} must not be verified+live in H1`);
    }
  }

  const report = verifyContracts({ strict: false });
  assert.equal(report.ok, true);
  assert.equal(report.schemaVersion, '1.1');
  assert.equal(Object.prototype.hasOwnProperty.call(report, 'version'), false);
  assert.deepEqual(report.listedOperations, []);
});

test('real specs load via DEFAULT_SPECS_DIR with canonical schemaVersion', () => {
  resetContractCache();
  const index = loadAll(DEFAULT_SPECS_DIR, { useCache: false });
  assert.equal(index.schemaVersion, '1.1');
  assert.ok(index.get('kling-v3'));
  assert.ok(index.get('suno'));
  assert.ok(index.get('gpt-image-2'));
  assert.ok(index.get('whisper-1'));
});
