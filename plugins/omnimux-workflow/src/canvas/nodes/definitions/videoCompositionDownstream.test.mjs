/**
 * Clip export 下游成片节点连线：生产 helper + mutation gateway。
 * 桩 id 必须是 CanvasNodeHandle 的 `out` / `in`，否则 React Flow 不画边。
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  CLIP_EXPORT_SOURCE_HANDLE,
  CLIP_EXPORT_TARGET_HANDLE,
  planClipExportDownstream,
} from './videoCompositionDownstream.ts';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'videoComposition.tsx');
const handlePath = join(here, '../../editor/components/CanvasNodeHandle.tsx');

const compositionNode = {
  id: 'node_video_composition_1',
  type: 'video_composition',
  position: { x: 40, y: 80 },
  data: { title: '视频合成', status: 'completed', outputVideoUrl: '/exports/a.mp4' },
};

const output = {
  videoPath: '/exports/a.mp4',
  thumbnailPath: 'data:image/jpeg;base64,cover',
  durationMs: 5000,
  width: 1920,
  height: 1080,
};

test('CanvasNodeHandle 桩 id 是 in/out，不是 input/output', () => {
  const source = readFileSync(handlePath, 'utf8');
  assert.match(source, /id=\{isLeft \? 'in' : 'out'\}/);
  assert.equal(/id=\{isLeft \? 'input' : 'output'\}/.test(source), false);
});

test('videoComposition.tsx 走 planClipExportDownstream，不再手写 output/input 桩', () => {
  const source = readFileSync(sourcePath, 'utf8');
  assert.match(source, /planClipExportDownstream/);
  assert.match(source, /applyCanvasInputMutation/);
  assert.equal(/sourceHandle:\s*'output'/.test(source), false);
  assert.equal(/targetHandle:\s*'input'/.test(source), false);
});

test('planClipExportDownstream：新建成片节点并用 out/in 连线', () => {
  const plan = planClipExportDownstream({
    sourceNodeId: compositionNode.id,
    sourcePosition: compositionNode.position,
    sourceLabel: '视频合成',
    output,
    currentNodes: [compositionNode],
    currentEdges: [],
    nodeWidth: 350,
    createNodeId: () => 'node_mat_vid_fixed',
  });

  assert.ok(plan);
  assert.equal(plan.addNodes.length, 1);
  assert.equal(plan.addEdges.length, 1);
  assert.deepEqual(plan.removeEdgeIds, []);
  assert.equal(plan.addNodes[0].id, 'node_mat_vid_fixed');
  assert.equal(plan.addNodes[0].data.label, '视频合成_成片');
  assert.equal(plan.addEdges[0].source, compositionNode.id);
  assert.equal(plan.addEdges[0].target, 'node_mat_vid_fixed');
  assert.equal(plan.addEdges[0].sourceHandle, CLIP_EXPORT_SOURCE_HANDLE);
  assert.equal(plan.addEdges[0].targetHandle, CLIP_EXPORT_TARGET_HANDLE);
  assert.equal(CLIP_EXPORT_SOURCE_HANDLE, 'out');
  assert.equal(CLIP_EXPORT_TARGET_HANDLE, 'in');
});

test('planClipExportDownstream：已有成片节点但缺边时补边，不重复建节点', () => {
  const existing = {
    id: 'node_mat_vid_existing',
    type: 'material',
    position: { x: 470, y: 80 },
    data: { materialType: 'video', realPath: output.videoPath, mediaUrl: output.videoPath },
  };
  const plan = planClipExportDownstream({
    sourceNodeId: compositionNode.id,
    sourcePosition: compositionNode.position,
    sourceLabel: '视频合成',
    output,
    currentNodes: [compositionNode, existing],
    currentEdges: [],
    nodeWidth: 350,
  });

  assert.ok(plan);
  assert.equal(plan.addNodes.length, 0);
  assert.equal(plan.addEdges.length, 1);
  assert.deepEqual(plan.removeEdgeIds, []);
  assert.equal(plan.addEdges[0].source, compositionNode.id);
  assert.equal(plan.addEdges[0].target, existing.id);
  assert.equal(plan.addEdges[0].sourceHandle, 'out');
  assert.equal(plan.addEdges[0].targetHandle, 'in');
});

test('planClipExportDownstream：已有 output/input 坏边时删掉并换成 out/in', () => {
  const existing = {
    id: 'node_mat_vid_existing',
    type: 'material',
    data: { materialType: 'video', realPath: output.videoPath },
  };
  const brokenId = `edge_${compositionNode.id}_${existing.id}`;
  const plan = planClipExportDownstream({
    sourceNodeId: compositionNode.id,
    sourcePosition: compositionNode.position,
    sourceLabel: '视频合成',
    output,
    currentNodes: [compositionNode, existing],
    currentEdges: [{
      id: brokenId,
      source: compositionNode.id,
      target: existing.id,
      sourceHandle: 'output',
      targetHandle: 'input',
    }],
    nodeWidth: 350,
  });

  assert.ok(plan);
  assert.equal(plan.addNodes.length, 0);
  assert.deepEqual(plan.removeEdgeIds, [brokenId]);
  assert.equal(plan.addEdges[0].sourceHandle, 'out');
  assert.equal(plan.addEdges[0].targetHandle, 'in');
  assert.equal(plan.addEdges[0].id, brokenId);
});

test('planClipExportDownstream：可绘制 out/in 边已在时返回 null', () => {
  const existing = {
    id: 'node_mat_vid_existing',
    type: 'material',
    data: { materialType: 'video', realPath: output.videoPath },
  };
  const plan = planClipExportDownstream({
    sourceNodeId: compositionNode.id,
    sourcePosition: compositionNode.position,
    sourceLabel: '视频合成',
    output,
    currentNodes: [compositionNode, existing],
    currentEdges: [{
      source: compositionNode.id,
      target: existing.id,
      sourceHandle: 'out',
      targetHandle: 'in',
    }],
    nodeWidth: 350,
  });
  assert.equal(plan, null);
});

test('planClipExportDownstream：createIfMissing=false 且没有成片节点时不新建', () => {
  const plan = planClipExportDownstream({
    sourceNodeId: compositionNode.id,
    sourcePosition: compositionNode.position,
    sourceLabel: '视频合成',
    output,
    currentNodes: [compositionNode],
    currentEdges: [],
    nodeWidth: 350,
    createIfMissing: false,
  });
  assert.equal(plan, null);
});

test('错误桩 id output/input 即使写入 store，也不是画布能画的边', () => {
  const broken = {
    id: 'edge_broken',
    source: compositionNode.id,
    target: 'node_mat_vid_fixed',
    sourceHandle: 'output',
    targetHandle: 'input',
  };
  assert.notEqual(broken.sourceHandle, CLIP_EXPORT_SOURCE_HANDLE);
  assert.notEqual(broken.targetHandle, CLIP_EXPORT_TARGET_HANDLE);
});
