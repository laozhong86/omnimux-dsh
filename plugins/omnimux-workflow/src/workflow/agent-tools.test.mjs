/**
 * M5 agent tool tests: fake ctx.tools / ctx.systemPrompt seats collect the
 * registrations from mountWorkflowHost, then the three tools are exercised
 * in-process (no HTTP from the tools themselves — workspaces are seeded
 * through the HTTP handler like the other suites).
 *
 * Success paths: workflow_list (empty + non-empty + executions overview),
 * workflow_run (wait=false / wait=true completed / by name / subset),
 * workflow_snapshot (summary + include_nodes).
 * Error paths: missing/unknown workspace, bad mode, subset without nodeIds,
 * unknown nodeIds, snapshot of a missing workspace, wait timeout.
 *
 * Runs against the built dist/index.js (npm run build first) over a temp
 * $DSH_HOME with the mock gateway (10-30ms latency — no real model calls).
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Writable } from 'node:stream';

const host = await import('../../dist/index.js');

class FakeRes extends Writable {
  constructor() {
    super();
    this.state = { status: 0, headers: {}, body: '' };
  }

  writeHead(status, headers) {
    this.state.status = status;
    this.state.headers = headers ?? {};
    return this;
  }

  _write(chunk, _encoding, callback) {
    this.state.body += chunk.toString();
    callback();
  }

  end(text) {
    if (typeof text === 'string') this.state.body += text;
    super.end();
    return this;
  }
}

function fakeReq({ method = 'GET', url = '/', body = undefined }) {
  const chunks = body === undefined ? [] : [Buffer.from(JSON.stringify(body))];
  return {
    method,
    url,
    headers: { origin: 'http://localhost:3000' },
    async *[Symbol.asyncIterator]() {
      for (const chunk of chunks) yield chunk;
    },
  };
}

const PREFIX = '/omnimux-workflow';

function makeHarness({ gatewayLatency = { minLatencyMs: 10, maxLatencyMs: 30 } } = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'omnimux-agent-tools-'));
  const captured = { handler: null };
  const webServer = {
    register(route) {
      captured.handler = route.handler;
      return () => {};
    },
  };
  const tools = [];
  const promptSections = [];
  const ctx = {
    webServer,
    tools: {
      register(tool) {
        tools.push(tool);
        return () => {};
      },
    },
    systemPrompt: {
      section(spec) {
        promptSections.push(spec);
        return () => {};
      },
    },
  };
  const libraryRoot = join(dir, 'library');
  mkdirSync(libraryRoot, { recursive: true });
  const dispose = host.mountWorkflowHost(ctx, {
    paths: {
      root: dir,
      workspacesDir: join(dir, 'workspaces'),
      executionsDir: join(dir, 'executions'),
      mediaDir: join(dir, 'media'),
    },
    libraryRoot,
    gateway: host.createMockGateway(gatewayLatency),
  });

  const call = async ({ method = 'GET', url, body }) => {
    const res = new FakeRes();
    await captured.handler(fakeReq({ method, url, body }), res);
    if (!res.writableEnded) {
      await new Promise((resolve) => {
        const timer = setTimeout(resolve, 1000);
        res.once('finish', () => { clearTimeout(timer); resolve(); });
        res.once('close', () => { clearTimeout(timer); resolve(); });
      });
    }
    return { status: res.state.status, body: JSON.parse(res.state.body || 'null') };
  };

  const tool = (name) => {
    const found = tools.find((t) => t.name === name);
    if (!found) throw new Error(`tool ${name} not registered`);
    return found;
  };

  /** Seed a workspace with a 2-node chain (text -> image). */
  const seedWorkspace = async (name = '工具测试工作区') => {
    const created = await call({
      method: 'POST',
      url: `${PREFIX}/api/workspaces`,
      body: { name },
    });
    const ws = created.body.workspace;
    await call({
      method: 'PUT',
      url: `${PREFIX}/api/workspaces/${ws.id}`,
      body: {
        expectedVersion: 0,
        nodes: [
          {
            id: 'txt1',
            type: 'material',
            position: { x: 0, y: 0 },
            data: { label: '文本节点', materialType: 'text', selectedTool: 'text-to-text', prompt: '写一句测试', status: 'ready' },
          },
          {
            id: 'img1',
            type: 'material',
            position: { x: 400, y: 0 },
            data: { label: '图片节点', materialType: 'image', selectedTool: 'text-to-image', prompt: '画一张测试图', status: 'ready' },
          },
        ],
        edges: [{ id: 'e1', source: 'txt1', target: 'img1' }],
      },
    });
    const projectRoot = join(libraryRoot, ws.id);
    mkdirSync(projectRoot, { recursive: true });
    host.createProjectStore({ libraryRoot }).create('工具测试项目', {
      projectRoot,
      canvasWorkspaceIds: [ws.id],
    });
    return ws.id;
  };

  return { dir, libraryRoot, tools, promptSections, dispose, call, tool, seedWorkspace };
}

test('agent seats register the twelve tools + workflow:ops prompt section', () => {
  const h = makeHarness();
  try {
    assert.deepEqual(
      h.tools.map((t) => t.name).sort(),
      [
        'canvas_get_table_node',
        'canvas_write_table_node',
        'workflow_connect',
        'workflow_create',
        'workflow_disconnect',
        'workflow_execution_control',
        'workflow_list',
        'workflow_node_add',
        'workflow_node_remove',
        'workflow_node_update',
        'workflow_run',
        'workflow_snapshot',
      ],
    );
    for (const tool of h.tools) {
      assert.equal(tool.parameters.type, 'object');
      assert.equal(typeof tool.execute, 'function');
      assert.equal(typeof tool.description, 'string');
    }
    const section = h.promptSections.find((s) => s.name === 'workflow:ops');
    assert.ok(section, 'workflow:ops section registered');
    assert.equal(section.order, 60);
    assert.match(section.text, /workflow_run/);
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_list on an empty store returns an empty array', async () => {
  const h = makeHarness();
  try {
    const result = await h.tool('workflow_list').execute({});
    assert.deepEqual(result, { workspaces: [] });
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_list returns workspace summaries + optional executions overview', async () => {
  const h = makeHarness();
  try {
    const wsId = await h.seedWorkspace('列表工作区');
    const result = await h.tool('workflow_list').execute({ include_executions: true });
    assert.equal(result.workspaces.length, 1);
    assert.equal(result.workspaces[0].id, wsId);
    assert.equal(result.workspaces[0].nodeCount, 2);
    assert.equal(typeof result.workspaces[0].updatedAt, 'string');
    assert.ok(Array.isArray(result.executions));

    // Run something so the executions overview is non-empty.
    await h.tool('workflow_run').execute({ workspace_id: wsId, wait: true });
    const after = await h.tool('workflow_list').execute({ include_executions: true });
    assert.equal(after.executions.length, 1);
    assert.equal(after.executions[0].workspaceId, wsId);
    assert.equal(after.executions[0].status, 'completed');
    assert.equal(after.executions[0].progress.total, 2);
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_snapshot default returns a compact summary', async () => {
  const h = makeHarness();
  try {
    const wsId = await h.seedWorkspace();
    const result = await h.tool('workflow_snapshot').execute({ workspace_id: wsId });
    const summary = result.summary;
    assert.equal(summary.id, wsId);
    assert.equal(summary.name, '工具测试工作区');
    assert.equal(summary.nodeCount, 2);
    assert.equal(summary.edgeCount, 1);
    assert.equal(summary.nodeTypeCounts.material, 2);
    assert.equal(summary.materialCounts.text, 1);
    assert.equal(summary.materialCounts.image, 1);
    assert.equal(summary.settings.maxParallel, 3);
    assert.equal(typeof summary.metadata.updatedAt, 'string');
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_snapshot include_nodes=true returns the full graph', async () => {
  const h = makeHarness();
  try {
    const wsId = await h.seedWorkspace();
    const result = await h.tool('workflow_snapshot').execute({ workspace_id: wsId, include_nodes: true });
    assert.equal(result.workspace.id, wsId);
    assert.equal(result.workspace.nodes.length, 2);
    assert.equal(result.workspace.edges.length, 1);
    assert.equal(result.workspace.nodes[0].data.prompt, '写一句测试');
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_snapshot errors carry the {error, message} envelope', async () => {
  const h = makeHarness();
  try {
    const missing = await h.tool('workflow_snapshot').execute({ workspace_id: 'ws_000000000000' });
    assert.equal(missing.error, 'workspace-not-found');
    assert.equal(typeof missing.message, 'string');

    const noArgs = await h.tool('workflow_snapshot').execute({});
    assert.equal(noArgs.error, 'invalid-args');
    assert.equal(typeof noArgs.message, 'string');
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_run wait=false returns immediately with an executionId + hint', async () => {
  const h = makeHarness();
  try {
    const wsId = await h.seedWorkspace();
    const result = await h.tool('workflow_run').execute({ workspace_id: wsId });
    assert.match(result.executionId, /^[0-9a-f-]{36}$/);
    assert.equal(result.workspaceId, wsId);
    assert.equal(result.mode, 'full');
    assert.equal(result.totalNodes, 2);
    assert.equal(typeof result.hint, 'string');
    // The run really happens in the background: poll via HTTP status.
    const deadline = Date.now() + 5000;
    let status = '';
    while (Date.now() < deadline) {
      const snap = await h.call({ url: `${PREFIX}/api/workspaces/${wsId}/executions/${result.executionId}` });
      status = snap.body.execution.status;
      if (status === 'completed') break;
      await new Promise((resolve) => setTimeout(resolve, 25));
    }
    assert.equal(status, 'completed');
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_run wait=true returns the terminal summary with per-node results', async () => {
  const h = makeHarness();
  try {
    const wsId = await h.seedWorkspace();
    const result = await h.tool('workflow_run').execute({
      workspace_id: wsId,
      wait: true,
      timeout_ms: 10000,
    });
    assert.equal(result.status, 'completed');
    assert.equal(result.timedOut, false);
    assert.equal(result.progress.total, 2);
    assert.equal(result.progress.completed, 2);
    assert.equal(typeof result.durationMs, 'number');

    const txt = result.nodes.find((n) => n.nodeId === 'txt1');
    const img = result.nodes.find((n) => n.nodeId === 'img1');
    assert.equal(txt.status, 'completed');
    assert.equal(typeof txt.textExcerpt, 'string');
    assert.match(txt.textExcerpt, /mock/);
    assert.equal(img.status, 'completed');
    assert.ok(img.mediaAssets.length > 0, 'image node carries a media asset');
    assert.match(img.mediaAssets[0].url, /\/omnimux-workflow\/api\/workspaces\/.+\/file\?rel=/);
    assert.equal(typeof img.mediaAssets[0].path, 'string');
    assert.match(String(img.mediaAssets[0].path), /^artifacts\//);
    assert.equal(String(img.mediaAssets[0].path).includes('/Users'), false);
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_run resolves by unique name and supports subset mode', async () => {
  const h = makeHarness();
  try {
    await h.seedWorkspace('按名执行');
    const byName = await h.tool('workflow_run').execute({
      workspace_name: '按名执行',
      wait: true,
      timeout_ms: 10000,
    });
    assert.equal(byName.status, 'completed');
    assert.equal(byName.workspaceName, '按名执行');
    // subset: only img1 + its upstream closure (txt1) — still both nodes.
    const subset = await h.tool('workflow_run').execute({
      workspace_name: '按名执行',
      mode: 'subset',
      node_ids: ['img1'],
      wait: true,
      timeout_ms: 10000,
    });
    assert.equal(subset.mode, 'subset');
    assert.equal(subset.status, 'completed');
    assert.equal(subset.totalNodes, 2);

    // single: only img1 (direct target only) — 1 node.
    const single = await h.tool('workflow_run').execute({
      workspace_name: '按名执行',
      mode: 'single',
      node_ids: ['img1'],
      wait: true,
      timeout_ms: 10000,
    });
    assert.equal(single.mode, 'single');
    assert.equal(single.status, 'completed');
    assert.equal(single.totalNodes, 1);
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_run wait=true reports timedOut when the budget is exhausted', async () => {
  const h = makeHarness({ gatewayLatency: { minLatencyMs: 800, maxLatencyMs: 1200 } });
  try {
    const wsId = await h.seedWorkspace();
    const result = await h.tool('workflow_run').execute({
      workspace_id: wsId,
      wait: true,
      timeout_ms: 60, // far below the 800ms+ node latency
    });
    assert.equal(result.timedOut, true);
    assert.notEqual(result.status, 'completed');
    assert.equal(typeof result.hint, 'string');
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_run error paths: args / workspace / mode / subgraph', async () => {
  const h = makeHarness();
  try {
    const wsId = await h.seedWorkspace();

    const noRef = await h.tool('workflow_run').execute({});
    assert.equal(noRef.error, 'invalid-args');

    const unknownId = await h.tool('workflow_run').execute({ workspace_id: 'ws_000000000000' });
    assert.equal(unknownId.error, 'workspace-not-found');

    const unknownName = await h.tool('workflow_run').execute({ workspace_name: '不存在的工作区' });
    assert.equal(unknownName.error, 'workspace-not-found');

    const badMode = await h.tool('workflow_run').execute({ workspace_id: wsId, mode: 'yolo' });
    assert.equal(badMode.error, 'invalid-args');

    const subsetNoIds = await h.tool('workflow_run').execute({ workspace_id: wsId, mode: 'subset' });
    assert.equal(subsetNoIds.error, 'invalid-subgraph');

    const badNode = await h.tool('workflow_run').execute({
      workspace_id: wsId,
      mode: 'subset',
      node_ids: ['ghost'],
    });
    assert.equal(badNode.error, 'invalid-subgraph');
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_run unbound media generate 惰性种子项目且幂等', async () => {
  const h = makeHarness();
  try {
    const created = await h.call({
      method: 'POST',
      url: `${PREFIX}/api/workspaces`,
      body: { name: '未绑定生视频' },
    });
    const wsId = created.body.workspace.id;
    await h.call({
      method: 'PUT',
      url: `${PREFIX}/api/workspaces/${wsId}`,
      body: {
        expectedVersion: 0,
        nodes: [{
          id: 'vid',
          type: 'material',
          position: { x: 0, y: 0 },
          data: {
            label: '视频',
            materialType: 'video',
            selectedTool: 'video-generation',
            prompt: '1dog',
            status: 'ready',
          },
        }],
        edges: [],
      },
    });

    const first = await h.tool('workflow_run').execute({
      workspace_id: wsId,
      wait: true,
      timeout_ms: 10000,
    });
    assert.ok(!first.error, first.error ?? first.message);
    assert.ok(first.executionId);
    assert.equal(first.status, 'completed');

    const dirs = readdirSync(h.libraryRoot, { withFileTypes: true }).filter((e) => e.isDirectory());
    const seeded = dirs.filter((e) => existsSync(join(h.libraryRoot, e.name, '.omnimux', 'project.json')));
    assert.equal(seeded.length, 1);
    const project = JSON.parse(
      readFileSync(join(h.libraryRoot, seeded[0].name, '.omnimux', 'project.json'), 'utf8'),
    );
    assert.ok((project.canvasWorkspaceIds ?? []).includes(wsId));
    assert.equal(project.title, '未绑定生视频');

    const second = await h.tool('workflow_run').execute({
      workspace_id: wsId,
      wait: true,
      timeout_ms: 10000,
    });
    assert.ok(!second.error, second.error ?? second.message);
    assert.equal(second.status, 'completed');
    const after = readdirSync(h.libraryRoot, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .filter((e) => existsSync(join(h.libraryRoot, e.name, '.omnimux', 'project.json')));
    assert.equal(after.length, 1);
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('workflow_run on an empty workspace returns empty-graph', async () => {
  const h = makeHarness();
  try {
    const created = await h.call({
      method: 'POST',
      url: `${PREFIX}/api/workspaces`,
      body: { name: '空工作区' },
    });
    const result = await h.tool('workflow_run').execute({ workspace_id: created.body.workspace.id });
    assert.equal(result.error, 'empty-graph');
    assert.equal(typeof result.message, 'string');
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});

test('pinned schemas: workflow_* tool names and parameter contracts remain equal', () => {
  const h = makeHarness();
  try {
    const workflowTools = h.tools
      .filter((t) => t.name.startsWith('workflow_'))
      .sort((a, b) => a.name.localeCompare(b.name));

    const names = workflowTools.map((t) => t.name);
    assert.deepEqual(names, [
      'workflow_connect',
      'workflow_create',
      'workflow_disconnect',
      'workflow_execution_control',
      'workflow_list',
      'workflow_node_add',
      'workflow_node_remove',
      'workflow_node_update',
      'workflow_run',
      'workflow_snapshot',
    ]);

    const toolMap = new Map(workflowTools.map((t) => [t.name, t]));

    // Critical parameter checks
    assert.deepEqual(toolMap.get('workflow_list').parameters.required, undefined);

    assert.deepEqual(toolMap.get('workflow_run').parameters.properties.mode.enum, ['full', 'subset', 'single']);

    assert.deepEqual(toolMap.get('workflow_snapshot').parameters.required, ['workspace_id']);

    assert.deepEqual(toolMap.get('workflow_create').parameters.required, undefined);

    assert.deepEqual(toolMap.get('workflow_node_add').parameters.required, ['workspace_id', 'material_type']);
    assert.deepEqual(toolMap.get('workflow_node_add').parameters.properties.material_type.enum, ['text', 'image', 'video', 'audio']);
    assert.deepEqual(toolMap.get('workflow_node_add').parameters.properties.position.required, ['x', 'y']);

    assert.deepEqual(toolMap.get('workflow_node_update').parameters.required, ['workspace_id', 'node_id', 'patch']);
    assert.deepEqual(toolMap.get('workflow_node_update').parameters.properties.patch.properties.position.required, ['x', 'y']);

    assert.deepEqual(toolMap.get('workflow_node_remove').parameters.required, ['workspace_id', 'node_ids']);

    assert.deepEqual(toolMap.get('workflow_connect').parameters.required, ['workspace_id', 'source', 'target']);

    assert.deepEqual(toolMap.get('workflow_disconnect').parameters.required, ['workspace_id']);

    assert.deepEqual(toolMap.get('workflow_execution_control').parameters.required, ['execution_id', 'action']);
    assert.deepEqual(toolMap.get('workflow_execution_control').parameters.properties.action.enum, ['pause', 'resume', 'cancel']);

    // Check that descriptions are non-empty strings and untouched
    for (const tool of workflowTools) {
      assert.ok(tool.description && tool.description.length > 20);
    }
  } finally {
    h.dispose();
    rmSync(h.dir, { recursive: true, force: true });
  }
});
