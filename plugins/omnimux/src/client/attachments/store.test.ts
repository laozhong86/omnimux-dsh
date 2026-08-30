import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createAttachmentStore,
  inferExtension,
  generateFingerprint,
  MAX_ATTACHMENTS_PER_SESSION,
} from './store.ts';

test('inferExtension: 正确提取全大写格式扩展名', () => {
  assert.equal(inferExtension('未命名表格.htable', '.hilo/tables/node-01.htable'), 'HTABLE');
  assert.equal(inferExtension('请创作一个[时长]的[类.md', 'prompts/template.md'), 'MD');
  assert.equal(inferExtension('镜头_01.mp4', 'assets/videos/shot1.mp4'), 'MP4');
  assert.equal(inferExtension('无扩展名文件', 'some/path', 'custom_ext'), 'CUSTOM_EXT');
});

test('AttachmentStore: 基础增删与多会话隔离', () => {
  const store = createAttachmentStore();
  const sessionA = 'session-alpha';
  const sessionB = 'session-beta';

  let sessionANotifyCount = 0;
  let sessionBNotifyCount = 0;

  const unsubA = store.subscribe(sessionA, () => {
    sessionANotifyCount++;
  });
  const unsubB = store.subscribe(sessionB, () => {
    sessionBNotifyCount++;
  });

  // 1. Session A 添加表格
  const res1 = store.addAttachment(sessionA, {
    sourcePlugin: 'omnimux-workflow',
    kind: 'table',
    entityId: 'node-tbl-01',
    title: '未命名表格.htable',
    relativePath: '.hilo/tables/node-tbl-01.htable',
  });
  assert.equal(res1.ok, true);
  assert.equal(sessionANotifyCount, 1);
  assert.equal(sessionBNotifyCount, 0);

  // 验证 Session A 快照与 Session B 隔离
  const snapA1 = store.getSnapshot(sessionA);
  const snapB1 = store.getSnapshot(sessionB);
  assert.equal(snapA1.length, 1);
  assert.equal(snapA1[0].extension, 'HTABLE');
  assert.equal(snapB1.length, 0);

  // 2. Session B 添加视频
  const res2 = store.addAttachment(sessionB, {
    sourcePlugin: 'omnimux-workflow',
    kind: 'video',
    entityId: 'node-vid-01',
    title: '主角镜头.mp4',
    relativePath: 'assets/videos/shot1.mp4',
    duration: '0:31',
    previewUrl: 'blob:http://localhost/video-thumb.png',
  });
  assert.equal(res2.ok, true);
  assert.equal(sessionBNotifyCount, 1);

  const snapB2 = store.getSnapshot(sessionB);
  assert.equal(snapB2.length, 1);
  assert.equal(snapB2[0].duration, '0:31');
  assert.equal(snapB2[0].extension, 'MP4');

  // 3. 重复添加相同实体到 Session A (指纹去重)
  const resDuplicate = store.addAttachment(sessionA, {
    sourcePlugin: 'omnimux-workflow',
    kind: 'table',
    entityId: 'node-tbl-01',
    title: '未命名表格.htable',
    relativePath: '.hilo/tables/node-tbl-01.htable',
  });
  assert.equal(resDuplicate.ok, false);
  assert.equal(resDuplicate.reason, 'duplicate');
  assert.equal(store.getSnapshot(sessionA).length, 1);

  // 4. 移除单个附件
  store.removeAttachment(sessionA, snapA1[0].id);
  assert.equal(store.getSnapshot(sessionA).length, 0);

  // 5. 清空 Session B
  store.clear(sessionB);
  assert.equal(store.getSnapshot(sessionB).length, 0);

  unsubA();
  unsubB();
});

test('AttachmentStore: 单会话上限约束 (MAX_ATTACHMENTS_PER_SESSION = 8)', () => {
  const store = createAttachmentStore();
  const sessionId = 'session-limit-test';

  for (let i = 0; i < MAX_ATTACHMENTS_PER_SESSION; i++) {
    const res = store.addAttachment(sessionId, {
      sourcePlugin: 'omnimux-workflow',
      kind: 'document',
      entityId: `doc-${i}`,
      title: `文档_${i}.md`,
      relativePath: `docs/doc_${i}.md`,
    });
    assert.equal(res.ok, true);
  }

  assert.equal(store.getSnapshot(sessionId).length, 8);

  // 第 9 个应该被拒绝
  const resOverflow = store.addAttachment(sessionId, {
    sourcePlugin: 'omnimux-workflow',
    kind: 'document',
    entityId: 'doc-overflow',
    title: '超限文档.md',
    relativePath: 'docs/doc_overflow.md',
  });
  assert.equal(resOverflow.ok, false);
  assert.equal(resOverflow.reason, 'quota-exceeded');
  assert.equal(store.getSnapshot(sessionId).length, 8);
});
