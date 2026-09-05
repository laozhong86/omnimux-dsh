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
import { loadDispositions, forbiddenListedIds } from './contract/dispositions.js';

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

test('H2: 处置表 45 行 + listed 集合与处置一致', () => {
  resetContractCache();
  const index = loadAll(DEFAULT_SPECS_DIR, { useCache: false });
  assert.equal(index.schemaVersion, '1.1');

  const doc = loadDispositions();
  assert.equal(doc.dispositions.length, 45);
  const byId = new Map(doc.dispositions.map((r) => [r.id, r]));
  const forbidden = forbiddenListedIds(doc);

  for (const model of index.all()) {
    const row = byId.get(model.id);
    assert.ok(row, `model ${model.id} must have a disposition row`);
    if (forbidden.has(model.id)) {
      assert.deepEqual(model.listedOperations ?? [], [], `${model.id} must not list (disposition ${row.disposition})`);
    }
    for (const op of model.operations) {
      // verified+live pair requires the op to actually be listed (profile + contract complete)
      const verifiedLive = op.research.status === 'verified' && op.execution.status === 'live';
      if (verifiedLive) {
        assert.equal(op.listed, true, `${model.id}#${op.id} verified+live should be listed`);
        assert.ok(op.research.docUrl, `${model.id}#${op.id} verified requires docUrl`);
        assert.ok(op.research.verifiedAt, `${model.id}#${op.id} verified requires verifiedAt`);
      }
    }
  }

  // #530 PR-A: listed = Batch A 三媒体键 + text 19 op；多一条少一条都是红灯
  assert.deepEqual(index.listedOperations, [
    'claude-opus-4-6#chat',
    'claude-opus-4-6#vision_chat',
    'claude-opus-5#chat',
    'deepseek-v4-flash-vision-exp#chat',
    'deepseek-v4-flash-vision-exp#vision_chat',
    'deepseek-v4-pro#chat',
    'gemini-3.1-pro-preview#chat',
    'gemini-3.1-pro-preview#vision_chat',
    'gemini-3.7-flash#chat',
    'gemini-3.7-flash#vision_chat',
    'glm-5.3#chat',
    'gpt-5.5#chat',
    'gpt-5.5#vision_chat',
    'gpt-5.6-sol#chat',
    'gpt-5.6-sol#vision_chat',
    'gpt-image-2#text_to_image',
    'grok-4.6#chat',
    'grok-4.6#vision_chat',
    'grok-imagine-image#text_to_image',
    'kimi-k3#chat',
    'kimi-k3#vision_chat',
    'seedance-2-0-fast#text_to_video',
    'seedance-2-0-fast#video_multi_ref',
    'seedance-2-0-mini#text_to_video',
    'seedance-2-0#text_to_video',
    'seedance-2-5#text_to_video',
    'seedance-2-5#video_multi_ref',
  ]);
  // 媒体同模型其它 op 仍不得 listed
  assert.ok(!index.listedOperations.includes('seedance-2-0-fast#first_frame'));
  assert.ok(index.listedOperations.includes('seedance-2-0-fast#video_multi_ref'));
  assert.ok(!index.listedOperations.includes('gpt-image-2#multi_reference'));
  // audio 无 listed（suno/tts draft；whisper unavailable）
  assert.ok(!index.listedOperations.some((key) => key.startsWith('suno#')));
  assert.ok(!index.listedOperations.some((key) => key.startsWith('whisper-1#')));
  assert.ok(!index.listedOperations.some((key) => key.startsWith('kling-avatar#')));
  assert.ok(!index.listedOperations.includes('minimax-h3-endframe#end_frame'));
  assert.ok(!index.listedOperations.some((key) => key.startsWith('minimax-h3-endframe#')));

  const report = verifyContracts({ strict: true });
  assert.equal(report.ok, true, JSON.stringify(report.issues.filter((i) => i.level === 'error'), null, 2));
  assert.equal(report.schemaVersion, '1.1');
  assert.equal(Object.prototype.hasOwnProperty.call(report, 'version'), false);
  assert.ok(report.listedOperations.length > 0);
  assert.equal(report.dispositions.total, 45);
  assert.deepEqual(report.dispositions.unresolvedDispositions, []);
});

test('H2: 冲突限制取更严（policy_conservative）写入契约', () => {
  resetContractCache();
  const index = loadAll(DEFAULT_SPECS_DIR, { useCache: false });

  const grokVideo = index.get('grok-imagine-video-1-5');
  const grokMultiRef = grokVideo.operations.find((op) => op.id === 'video_multi_ref');
  const grokRefSlot = grokMultiRef.inputs.find((s) => s.type === 'image');
  assert.equal(grokRefSlot.max, 1, 'Grok video 参考图验证前取更严 max:1');
  assert.equal(grokRefSlot.limitSource?.kind, 'policy_conservative');

  const fast = index.get('seedance-2-0-fast');
  const fastMulti = fast.operations.find((op) => op.id === 'video_multi_ref');
  const fastSlot = fastMulti.inputs.find((s) => s.type === 'image');
  assert.equal(fastSlot.max, 2, 'seedance-2-0-fast multi-ref C1 live 2 图');
  assert.equal(fastSlot.limitSource?.kind, 'measured');

  const s25 = index.get('seedance-2-5');
  const s25Multi = s25.operations.find((op) => op.id === 'video_multi_ref');
  const s25Slot = s25Multi.inputs.find((s) => s.type === 'image');
  assert.equal(s25Slot.max, 1, 'seedance-2-5 multi-ref 仅 1 图 live，保持 max1');
  assert.equal(s25Slot.limitSource?.kind, 'measured');
});

test('real specs load via DEFAULT_SPECS_DIR with canonical schemaVersion', () => {
  resetContractCache();
  const index = loadAll(DEFAULT_SPECS_DIR, { useCache: false });
  assert.equal(index.schemaVersion, '1.1');
  assert.ok(index.get('kling-v3'));
  assert.ok(index.get('suno'));
  assert.ok(index.get('gpt-image-2'));
  assert.ok(index.get('whisper-1'));
  // extra ghost ids deleted
  assert.equal(index.get('deepseek-v3'), undefined);
  assert.equal(index.get('deepseek-r1'), undefined);
  assert.equal(index.get('gpt-4o'), undefined);
});
