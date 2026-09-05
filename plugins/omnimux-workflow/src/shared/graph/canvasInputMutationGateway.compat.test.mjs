/**
 * Issue #466 (W1): atomic canvas input mutation compat pass tests.
 *
 * New edge + slot binding + necessary model/operation switch land in ONE
 * plan (one store set). Zero candidates / missing catalog fail closed with
 * nodes/edges untouched. Canvas planner and host GraphMutator share the same
 * evaluator + catalog injection and return the same verdict.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { buildCanvasUpstreamFingerprint, planCanvasInputMutation } from './canvasInputMutationGateway.ts';
import { mutateWorkspaceGraph } from '../../workflow/graph/GraphMutator.ts';
import { createWorkspaceStore } from '../../workflow/workspace/WorkspaceStore.ts';
import { createCompatTestCatalog } from '../validation/compatTestCatalog.ts';

const MB = 1024 * 1024;

function generateNode(id, materialType, tool, model, extraData = {}) {
  return {
    id,
    type: 'material',
    position: { x: 0, y: 0 },
    data: {
      label: '',
      materialType,
      status: 'empty',
      selectedTool: tool,
      nodeKind: 'generate',
      params: model ? { model } : {},
      ...extraData,
    },
  };
}

function importNode(id, materialType, extraData = {}) {
  return {
    id,
    type: 'material',
    position: { x: 0, y: 0 },
    data: {
      label: '',
      materialType,
      status: 'ready',
      selectedTool: 'import',
      nodeKind: 'import',
      mimeType: 'image/png',
      fileSize: 1 * MB,
      ...extraData,
    },
  };
}

function imageGenWithImport({ model = 'img-ref', importData = {} } = {}) {
  const target = generateNode('gen', 'image', 'text-to-image', model);
  const source = importNode('src', 'image', importData);
  return { nodes: [target, source], edges: [] };
}

const CONNECT = { addEdges: [{ source: 'src', target: 'gen' }] };

function makeStore() {
  const dir = mkdtempSync(join(tmpdir(), 'omnimux-compat-mutation-'));
  const store = createWorkspaceStore({ workspacesDir: join(dir, 'workspaces') });
  return { dir, store, cleanup: () => rmSync(dir, { recursive: true, force: true }) };
}

// ============================================================================
// 原子适配：edge + binding + model/operation 切换 = 一个 plan
// ============================================================================

test('原子适配：新边 + slot binding + 自动切模/切 operation 在同一 plan', () => {
  const catalog = createCompatTestCatalog();
  const current = imageGenWithImport({ model: 'img-prompt-only' });

  const plan = planCanvasInputMutation(current, CONNECT, { catalog });

  assert.equal(plan.status, 'allowed');
  assert.equal(plan.edges.length, 1);

  // 自动适配：img-prompt-only 无法吸收图片 → 切到 img-ref#image_to_image。
  const gen = plan.nodes.find((node) => node.id === 'gen');
  assert.equal(gen.data.params.model, 'img-ref');
  assert.equal(gen.data.params.operation, 'image_to_image');

  // slot binding 写在新边上。
  const edge = plan.edges[0];
  assert.equal(edge.data.slotBinding.slot, 'reference_images');
  assert.equal(edge.data.slotBinding.role, 'reference');

  // 节点 compat 状态（fingerprint + catalogFingerprint 供失效判定）。
  assert.equal(gen.data.compat.status, 'ok');
  assert.equal(gen.data.compat.acceptsCurrentInputs, true);
  assert.equal(gen.data.compat.readyToSubmit, false); // 缺 prompt
  assert.equal(gen.data.compat.catalogFingerprint, 'fixture-v1');
  assert.ok(gen.data.compat.fingerprint);
});

test('原子适配：当前模型兼容 → keep_current（不切换）', () => {
  const catalog = createCompatTestCatalog();
  const current = imageGenWithImport({ model: 'img-ref' });

  const plan = planCanvasInputMutation(current, CONNECT, { catalog });

  assert.equal(plan.status, 'allowed');
  const gen = plan.nodes.find((node) => node.id === 'gen');
  assert.equal(gen.data.params.model, 'img-ref');
  assert.equal(gen.data.params.operation, 'image_to_image');
});

test('原子适配：alias 寻址当前模型 → 归一为 canonical id 并保持', () => {
  const catalog = createCompatTestCatalog();
  const current = imageGenWithImport({ model: 'alias-img-wire' });

  const plan = planCanvasInputMutation(current, CONNECT, { catalog });

  assert.equal(plan.status, 'allowed');
  const gen = plan.nodes.find((node) => node.id === 'gen');
  assert.equal(gen.data.params.model, 'alias-img');
});

test('canonical operation stays authoritative during compatibility planning', () => {
  const catalog = createCompatTestCatalog();
  const target = generateNode('gen', 'video', 'text-to-video', 'vid-frames', {
    params: { model: 'vid-frames', operation: 'first_last_frame' },
  });
  const srcA = importNode('a', 'image');
  const srcB = importNode('b', 'image');
  const plan = planCanvasInputMutation(
    { nodes: [target, srcA, srcB], edges: [] },
    { addEdges: [{ source: 'a', target: 'gen' }, { source: 'b', target: 'gen' }] },
    { catalog },
  );
  assert.equal(plan.status, 'allowed');
  assert.equal(plan.nodes.find((node) => node.id === 'gen').data.params.operation, 'first_last_frame');
});

test('effectiveOps：0 → 拒绝；1 → 唯一 op；>=2 → keep_current 或同 model 切换', () => {
  const catalog = createCompatTestCatalog();

  // 0 effective：gif 无人吸收
  const zero = planCanvasInputMutation(
    imageGenWithImport({ importData: { mimeType: 'image/gif' } }),
    CONNECT,
    { catalog },
  );
  assert.equal(zero.status, 'rejected');
  assert.equal(zero.reasonCode, 'mime_unsupported');

  // 1 effective：img-hd 仅 max1 的 image_to_image 可吸收 1 张 png
  const one = planCanvasInputMutation(
    imageGenWithImport({ model: 'img-hd' }),
    CONNECT,
    { catalog },
  );
  assert.equal(one.status, 'allowed');
  assert.equal(one.nodes.find((n) => n.id === 'gen').data.params.operation, 'image_to_image');

  // >=2：img-ref 同时有 text_to_image + image_to_image；带图时只剩 image_to_image 有效
  // 但同 model 另一 op 场景用 currentOperationId=text_to_image 触发 same_model
  const multi = planCanvasInputMutation(
    {
      nodes: [
        generateNode('gen', 'image', 'text-to-image', 'img-ref', {
          params: { model: 'img-ref', operation: 'text_to_image' },
        }),
        importNode('src', 'image'),
      ],
      edges: [],
    },
    CONNECT,
    { catalog },
  );
  assert.equal(multi.status, 'allowed');
  const multiGen = multi.nodes.find((n) => n.id === 'gen');
  assert.equal(multiGen.data.params.model, 'img-ref');
  assert.equal(multiGen.data.params.operation, 'image_to_image');
});

// ============================================================================
// Fail closed
// ============================================================================

test('零候选（gif 无人吸收）→ 拒绝且 nodes/edges 完全不变', () => {
  const catalog = createCompatTestCatalog();
  const current = imageGenWithImport({ importData: { mimeType: 'image/gif' } });

  const plan = planCanvasInputMutation(current, CONNECT, { catalog });

  assert.equal(plan.status, 'rejected');
  assert.equal(plan.reasonCode, 'mime_unsupported');
  assert.equal(plan.nodes, current.nodes);
  assert.equal(plan.edges, current.edges);
});

test('超全目录体积上限 → size_exceeded', () => {
  const catalog = createCompatTestCatalog();
  const current = imageGenWithImport({ importData: { fileSize: 11 * MB } });

  const plan = planCanvasInputMutation(current, CONNECT, { catalog });

  assert.equal(plan.status, 'rejected');
  assert.equal(plan.reasonCode, 'size_exceeded');
  assert.equal(plan.nodes, current.nodes);
});

test('超全目录槽容量（5 张图）→ slot_capacity', () => {
  const catalog = createCompatTestCatalog();
  const target = generateNode('gen', 'image', 'text-to-image', 'alias-img');
  const sources = Array.from({ length: 5 }, (_, i) => importNode(`src${i}`, 'image'));
  const edges = sources.slice(0, 4).map((source) => ({
    id: `e-${source.id}`,
    source: source.id,
    target: 'gen',
  }));
  const current = { nodes: [target, ...sources], edges };

  const plan = planCanvasInputMutation(
    current,
    { addEdges: [{ source: 'src4', target: 'gen' }] },
    { catalog },
  );

  assert.equal(plan.status, 'rejected');
  assert.equal(plan.reasonCode, 'slot_capacity');
  assert.equal(plan.edges, current.edges);
});

test('catalog 缺失 → 生成节点媒体连线 catalog_unavailable', () => {
  const current = imageGenWithImport();
  const plan = planCanvasInputMutation(current, CONNECT, { catalog: null });

  assert.equal(plan.status, 'rejected');
  assert.equal(plan.reasonCode, 'catalog_unavailable');
  assert.equal(plan.nodes, current.nodes);
});

test('无 runtime context（legacy 调用）→ 仅结构校验（向后兼容）', () => {
  const current = imageGenWithImport();
  const plan = planCanvasInputMutation(current, CONNECT);

  assert.equal(plan.status, 'allowed');
  const gen = plan.nodes.find((node) => node.id === 'gen');
  assert.equal(gen.data.compat, undefined);
});

// ============================================================================
// 删除 / 修改触发同一规划器重算
// ============================================================================

test('删除边触发重算：剩余边保留 binding，模型保持，无非法窗口', () => {
  const catalog = createCompatTestCatalog();
  const base = imageGenWithImport({ model: 'img-ref' });
  const first = planCanvasInputMutation(base, CONNECT, { catalog });
  assert.equal(first.status, 'allowed');

  const second = planCanvasInputMutation(first, { removeEdgeIds: [first.edges[0].id] }, { catalog });
  assert.equal(second.status, 'allowed');
  assert.equal(second.edges.length, 0);
  const gen = second.nodes.find((node) => node.id === 'gen');
  // 模型不切回（keep_current）；compat 状态按空指纹重算。
  assert.equal(gen.data.params.model, 'img-ref');
  assert.equal(gen.data.compat.status, 'ok');
  assert.notEqual(gen.data.compat.fingerprint, first.nodes.find((n) => n.id === 'gen').data.compat.fingerprint);
});

test('catalog 缺失时结构删除仍可操作', () => {
  const catalog = createCompatTestCatalog();
  const base = imageGenWithImport({ model: 'img-ref' });
  const connected = planCanvasInputMutation(base, CONNECT, { catalog });
  assert.equal(connected.status, 'allowed');

  const removed = planCanvasInputMutation(connected, { removeEdgeIds: [connected.edges[0].id] }, { catalog: null });
  assert.equal(removed.status, 'allowed');
  assert.equal(removed.edges.length, 0);
});

test('显式 model patch：未知模型 → unknown_model；不兼容模型 → model_incompatible', () => {
  const catalog = createCompatTestCatalog();
  const connected = planCanvasInputMutation(imageGenWithImport({ model: 'img-ref' }), CONNECT, { catalog });
  assert.equal(connected.status, 'allowed');

  const unknown = planCanvasInputMutation(
    connected,
    { nodePatches: [{ nodeId: 'gen', data: { params: { model: 'not-a-model' } } }] },
    { catalog },
  );
  assert.equal(unknown.status, 'rejected');
  assert.equal(unknown.reasonCode, 'unknown_model');

  // img-hd max1/png≤2MB 吸不了 5MB png，但目录有兼容模型 → 显式选择被拒。
  const big = imageGenWithImport({ model: 'img-ref', importData: { fileSize: 5 * MB } });
  const connectedBig = planCanvasInputMutation(big, CONNECT, { catalog });
  assert.equal(connectedBig.status, 'allowed');
  const incompatible = planCanvasInputMutation(
    connectedBig,
    { nodePatches: [{ nodeId: 'gen', data: { params: { model: 'img-hd' } } }] },
    { catalog },
  );
  assert.equal(incompatible.status, 'rejected');
  assert.equal(incompatible.reasonCode, 'model_incompatible');

  // 已知且兼容的显式切换 → allowed。
  const compatible = planCanvasInputMutation(
    connectedBig,
    { nodePatches: [{ nodeId: 'gen', data: { params: { model: 'alias-img' } } }] },
    { catalog },
  );
  assert.equal(compatible.status, 'allowed');
  assert.equal(compatible.nodes.find((n) => n.id === 'gen').data.params.model, 'alias-img');
});

test('显式 model patch：catalog 缺失 → catalog_unavailable；无媒体输入时仅做已知性校验', () => {
  const catalog = createCompatTestCatalog();
  const lonely = { nodes: [generateNode('gen', 'image', 'text-to-image', 'img-ref')], edges: [] };

  const noCatalog = planCanvasInputMutation(
    lonely,
    { nodePatches: [{ nodeId: 'gen', data: { params: { model: 'img-hd' } } }] },
    { catalog: null },
  );
  assert.equal(noCatalog.status, 'rejected');
  assert.equal(noCatalog.reasonCode, 'catalog_unavailable');

  const ok = planCanvasInputMutation(
    lonely,
    { nodePatches: [{ nodeId: 'gen', data: { params: { model: 'img-hd' } } }] },
    { catalog },
  );
  assert.equal(ok.status, 'allowed');
});

// ============================================================================
// Canvas planner ⟂ host GraphMutator parity
// ============================================================================

test('parity：同一图/目录/mutation，GraphMutator 与 planner verdict 一致', () => {
  const { store, cleanup } = makeStore();
  try {
    const catalog = createCompatTestCatalog();
    const current = imageGenWithImport({ model: 'img-prompt-only' });

    // Canvas planner verdict
    const plan = planCanvasInputMutation(current, CONNECT, { catalog });
    assert.equal(plan.status, 'allowed');

    // Host GraphMutator verdict（同一 mutation + catalog 注入）
    const ws = store.create('parity');
    const seeded = mutateWorkspaceGraph(store, ws.id, { addNodes: current.nodes }, { catalog });
    assert.equal(seeded.ok, true);
    const result = mutateWorkspaceGraph(store, ws.id, CONNECT, { catalog });
    assert.equal(result.ok, true);

    const savedGen = result.snapshot.nodes.find((node) => node.id === 'gen');
    const planGen = plan.nodes.find((node) => node.id === 'gen');
    assert.equal(savedGen.data.params.model, planGen.data.params.model);
    assert.equal(savedGen.data.params.operation, planGen.data.params.operation);
    assert.equal(
      result.snapshot.edges[0].data.slotBinding.slot,
      plan.edges[0].data.slotBinding.slot,
    );

    // 拒绝路径也一致：gif → 同一 reasonCode。
    const gif = imageGenWithImport({ model: 'img-prompt-only', importData: { mimeType: 'image/gif' } });
    const ws2 = store.create('parity-reject');
    assert.equal(mutateWorkspaceGraph(store, ws2.id, { addNodes: gif.nodes }, { catalog }).ok, true);
    const rejected = mutateWorkspaceGraph(store, ws2.id, CONNECT, { catalog });
    assert.equal(rejected.ok, false);
    assert.equal(rejected.reasonCode, 'mime_unsupported');
    // 图未被污染
    assert.equal(store.get(ws2.id).edges.length, 0);
  } finally {
    cleanup();
  }
});

test('GraphMutator：catalog 缺失时媒体连线 catalog_unavailable；文本连线不受影响', () => {
  const { store, cleanup } = makeStore();
  try {
    const ws = store.create('no-catalog');
    const textA = generateNode('ta', 'text', 'text-editor', null);
    const imgGen = generateNode('gen', 'image', 'text-to-image', 'img-ref');
    const imgSrc = importNode('src', 'image');
    assert.equal(mutateWorkspaceGraph(store, ws.id, { addNodes: [textA, imgGen, imgSrc] }, { catalog: null }).ok, true);

    // 文本 → 生成节点：软输入，不需要目录。
    const textEdge = mutateWorkspaceGraph(store, ws.id, { addEdges: [{ source: 'ta', target: 'gen' }] }, { catalog: null });
    assert.equal(textEdge.ok, true);

    // 媒体 → 生成节点：fail closed。
    const mediaEdge = mutateWorkspaceGraph(store, ws.id, { addEdges: [{ source: 'src', target: 'gen' }] }, { catalog: null });
    assert.equal(mediaEdge.ok, false);
    assert.equal(mediaEdge.reasonCode, 'catalog_unavailable');
  } finally {
    cleanup();
  }
});

test('图形 targetHandle=in 不会写入 contract targetSlot；语义帧槽仍保留', () => {
  const current = imageGenWithImport();
  const generic = buildCanvasUpstreamFingerprint(
    'gen',
    current.nodes,
    [{ id: 'generic', source: 'src', target: 'gen', targetHandle: 'in' }],
  );
  assert.equal(generic.assets[0].targetSlot, undefined);

  const semantic = buildCanvasUpstreamFingerprint(
    'gen',
    current.nodes,
    [{ id: 'semantic', source: 'src', target: 'gen', targetHandle: 'end_frame' }],
  );
  assert.equal(semantic.assets[0].targetSlot, 'end_frame');

  const firstFrame = buildCanvasUpstreamFingerprint(
    'gen',
    current.nodes,
    [{ id: 'first-frame', source: 'src', target: 'gen', targetHandle: 'first_frame' }],
  );
  assert.equal(firstFrame.assets[0].targetSlot, 'first_frame');
});
