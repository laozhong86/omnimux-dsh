/**
 * ResourcePicker 纯策略测试：列表 / 过滤 / MIME / 提交计划。
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  listCanvasResources,
  filterCanvasResources,
  mimeToMaterialType,
  formatFileSize,
  planResourcePickerCommit,
} from './resourcePickerPolicy.ts';

function materialNode(id, materialType, extras = {}) {
  return {
    id,
    type: 'material',
    position: extras.position ?? { x: 400, y: 80 },
    data: {
      label: extras.label ?? id,
      materialType,
      status: extras.status ?? 'ready',
      mediaUrl: extras.mediaUrl,
      mediaAssets: extras.mediaAssets,
      content: extras.content,
      selectedTool: extras.selectedTool ?? (materialType === 'text' ? 'text-to-text' : 'import'),
      nodeWidth: extras.nodeWidth,
      nodeHeight: extras.nodeHeight,
      dimensions: extras.dimensions,
    },
  };
}

test('mimeToMaterialType：MIME 优先，扩展名兜底，未知返回 null', () => {
  assert.equal(mimeToMaterialType('image/png'), 'image');
  assert.equal(mimeToMaterialType('video/mp4'), 'video');
  assert.equal(mimeToMaterialType('audio/mpeg'), 'audio');
  assert.equal(mimeToMaterialType('', 'hero.PNG'), 'image');
  assert.equal(mimeToMaterialType('application/octet-stream', 'clip.webm'), 'video');
  assert.equal(mimeToMaterialType('', 'voice.m4a'), 'audio');
  assert.equal(mimeToMaterialType('application/pdf', 'doc.pdf'), null);
  assert.equal(mimeToMaterialType('', 'readme'), null);
});

test('formatFileSize：B / KB / MB', () => {
  assert.equal(formatFileSize(512), '512 B');
  assert.equal(formatFileSize(2048), '2.0 KB');
  assert.equal(formatFileSize(2.5 * 1024 * 1024), '2.5 MB');
  assert.equal(formatFileSize(-1), '');
});

test('listCanvasResources：排除自身与文本，标记已连接，解析预览 URL', () => {
  const nodes = [
    materialNode('target', 'image', { mediaUrl: 'self.png' }),
    materialNode('img-a', 'image', {
      label: '参考图.png',
      mediaUrl: 'a.png',
      dimensions: { width: 1024, height: 768 },
    }),
    materialNode('vid-b', 'video', {
      label: '尾帧',
      mediaAssets: [{ type: 'video', url: 'b.mp4' }],
    }),
    materialNode('txt-c', 'text', { content: 'hello', selectedTool: 'text-to-text' }),
    materialNode('empty-d', 'image', { status: 'empty' }),
    { id: 'table-1', type: 'table', position: { x: 0, y: 0 }, data: {} },
  ];
  const edges = [{ id: 'e1', source: 'img-a', target: 'target' }];
  const items = listCanvasResources(nodes, edges, 'target');
  assert.deepEqual(items.map((item) => item.nodeId).sort(), ['img-a', 'vid-b']);
  const img = items.find((item) => item.nodeId === 'img-a');
  assert.equal(img.alreadyConnected, true);
  assert.equal(img.title, '参考图.png');
  assert.equal(img.previewUrl, 'a.png');
  assert.match(img.subtitle, /1024 × 768/);
  const vid = items.find((item) => item.nodeId === 'vid-b');
  assert.equal(vid.alreadyConnected, false);
  assert.equal(vid.previewUrl, 'b.mp4');
});

test('filterCanvasResources：按类型与搜索词过滤', () => {
  const items = [
    { nodeId: 'n1', materialType: 'image', title: '参考图.png', alreadyConnected: false, subtitle: '1024 × 768' },
    { nodeId: 'n2', materialType: 'video', title: '尾帧.mp4', alreadyConnected: false, subtitle: 'n2' },
    { nodeId: 'n3', materialType: 'audio', title: '旁白.mp3', alreadyConnected: true, subtitle: 'n3' },
  ];
  assert.equal(filterCanvasResources(items, '', 'all').length, 3);
  assert.deepEqual(filterCanvasResources(items, '', 'image').map((i) => i.nodeId), ['n1']);
  assert.deepEqual(filterCanvasResources(items, '尾帧', 'all').map((i) => i.nodeId), ['n2']);
  assert.deepEqual(filterCanvasResources(items, 'n3', 'audio').map((i) => i.nodeId), ['n3']);
  assert.equal(filterCanvasResources(items, '不存在', 'all').length, 0);
});

test('planResourcePickerCommit：画布资源只给未连线节点加边，已连线进 rejected', () => {
  const nodes = [
    materialNode('target', 'video', { selectedTool: 'video-generation' }),
    materialNode('img-a', 'image', { mediaUrl: 'a.png' }),
    materialNode('img-b', 'image', { mediaUrl: 'b.png' }),
  ];
  const edges = [{ id: 'e1', source: 'img-a', target: 'target' }];
  const plan = planResourcePickerCommit({
    nodes,
    edges,
    targetNodeId: 'target',
    selectedCanvasNodeIds: ['img-a', 'img-b', 'target', 'missing'],
    localFiles: [],
  });
  assert.equal(plan.hasWork, true);
  assert.equal(plan.addEdges?.length, 1);
  assert.equal(plan.addEdges[0].source, 'img-b');
  assert.equal(plan.addEdges[0].target, 'target');
  assert.deepEqual(
    plan.rejected.map((r) => r.reason).sort(),
    ['already_connected', 'missing', 'self'],
  );
  assert.equal(plan.addNodes, undefined);
  assert.equal(plan.nodePatches, undefined);
});

test('planResourcePickerCommit：单文件类型匹配时写入当前节点', () => {
  const nodes = [materialNode('target', 'image', { status: 'empty' })];
  const plan = planResourcePickerCommit({
    nodes,
    edges: [],
    targetNodeId: 'target',
    selectedCanvasNodeIds: [],
    localFiles: [
      {
        id: 'f1',
        name: 'hero.png',
        mime: 'image/png',
        size: 12,
        realPath: '/Users/me/hero.png',
        materialType: 'image',
      },
    ],
  });
  assert.equal(plan.hasWork, true);
  assert.equal(plan.addNodes, undefined);
  assert.equal(plan.addEdges, undefined);
  assert.equal(plan.nodePatches?.length, 1);
  assert.equal(plan.nodePatches[0].nodeId, 'target');
  assert.equal(plan.nodePatches[0].data.realPath, '/Users/me/hero.png');
  assert.equal(plan.nodePatches[0].data.status, 'ready');
  assert.equal(plan.nodePatches[0].data.content, 'hero.png');
  assert.equal(plan.nodePatches[0].data.mediaUrl.includes('blob:'), false);
  assert.equal(plan.nodePatches[0].data.mediaUrl.includes('/api/local-file?path='), true);
  assert.equal(plan.nodePatches[0].data.mediaAssets[0].path, '/Users/me/hero.png');
});

test('planResourcePickerCommit：多文件首个写入当前节点，其余创建上游并连线', () => {
  const nodes = [materialNode('target', 'image', { status: 'empty', position: { x: 600, y: 100 } })];
  const plan = planResourcePickerCommit({
    nodes,
    edges: [],
    targetNodeId: 'target',
    selectedCanvasNodeIds: [],
    localFiles: [
      { id: 'f1', name: 'a.png', mime: 'image/png', size: 1, realPath: '/Users/me/a.png', materialType: 'image' },
      { id: 'f2', name: 'b.png', mime: 'image/png', size: 1, realPath: '/Users/me/b.png', materialType: 'image' },
      { id: 'f3', name: 'c.png', mime: 'image/png', size: 1, realPath: '/Users/me/c.png', materialType: 'image' },
    ],
  });
  assert.equal(plan.hasWork, true);
  assert.equal(plan.nodePatches?.length, 1);
  assert.equal(plan.nodePatches[0].data.realPath, '/Users/me/a.png');
  assert.equal(String(plan.nodePatches[0].data.mediaUrl).includes('blob:'), false);
  assert.equal(plan.addNodes?.length, 2);
  assert.equal(plan.addEdges?.length, 2);
  assert.ok(plan.addNodes.every((node) => node.position.x < 600));
  assert.ok(plan.addEdges.every((edge) => edge.target === 'target'));
  assert.ok(plan.addNodes.every((node) => node.data.materialType === 'image'));
});

test('planResourcePickerCommit：类型合同不匹配的上游不入 mutation', () => {
  const nodes = [materialNode('target', 'image', { status: 'empty' })];
  const plan = planResourcePickerCommit({
    nodes,
    edges: [],
    targetNodeId: 'target',
    selectedCanvasNodeIds: [],
    localFiles: [
      { id: 'f1', name: 'a.png', mime: 'image/png', size: 1, realPath: '/Users/me/a.png', materialType: 'image' },
      { id: 'f2', name: 'c.mp4', mime: 'video/mp4', size: 1, realPath: '/Users/me/c.mp4', materialType: 'video' },
    ],
  });
  assert.equal(plan.nodePatches?.length, 1);
  assert.equal(plan.addNodes, undefined);
  assert.equal(plan.addEdges, undefined);
  assert.equal(plan.rejected.some((r) => r.id === 'f2' && r.reason === 'type_contract'), true);
});

test('planResourcePickerCommit：当前节点为文本时全部本地文件走上游节点', () => {
  const nodes = [materialNode('target', 'text', { selectedTool: 'text-to-text', content: 'prompt' })];
  const plan = planResourcePickerCommit({
    nodes,
    edges: [],
    targetNodeId: 'target',
    selectedCanvasNodeIds: [],
    localFiles: [
      { id: 'f1', name: 'a.png', mime: 'image/png', size: 1, realPath: '/Users/me/a.png', materialType: 'image' },
    ],
  });
  assert.equal(plan.nodePatches, undefined);
  assert.equal(plan.addNodes?.length, 1);
  assert.equal(plan.addEdges?.length, 1);
  assert.equal(plan.addNodes[0].data.materialType, 'image');
});

test('planResourcePickerCommit：无 realPath 的 draft 视为 unsupported', () => {
  const nodes = [materialNode('target', 'image', { status: 'empty' })];
  const plan = planResourcePickerCommit({
    nodes,
    edges: [],
    targetNodeId: 'target',
    selectedCanvasNodeIds: [],
    localFiles: [
      { id: 'f1', name: 'hero.png', mime: 'image/png', size: 12, objectUrl: 'blob:hero', materialType: 'image' },
    ],
  });
  assert.equal(plan.hasWork, false);
  assert.equal(plan.nodePatches, undefined);
  assert.equal(plan.rejected[0].reason, 'unsupported');
});

test('planResourcePickerCommit：目标缺失时无 mutation', () => {
  const plan = planResourcePickerCommit({
    nodes: [],
    edges: [],
    targetNodeId: 'gone',
    selectedCanvasNodeIds: ['x'],
    localFiles: [],
  });
  assert.equal(plan.hasWork, false);
  assert.equal(plan.rejected[0].reason, 'missing');
});
