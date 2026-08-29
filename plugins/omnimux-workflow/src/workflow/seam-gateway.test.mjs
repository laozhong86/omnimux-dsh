/**
 * M4 seam client tests: OmniMuxSeamClient over FAKE hub seams (提交 → 轮询 →
 * 完成 → 回填), error mapping, cancel, fallback assembly and the seam
 * concurrency cap. No real model calls anywhere (红线：不烧额度).
 *
 * Runs against the built dist/index.js (npm run build first) over a temp
 * $DSH_HOME; the "hub" is a fake seam registry injected through ctx.get.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
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

// ============================================================================
// Fake execution hub (seam registry)
// ============================================================================

function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      if (signal?.aborted) {
        reject(Object.assign(new Error('aborted'), { code: 'omnimux-request-failed' }));
        return;
      }
      resolve();
    }, ms);
    signal?.addEventListener(
      'abort',
      () => {
        clearTimeout(timer);
        reject(Object.assign(new Error('aborted'), { code: 'omnimux-request-failed' }));
      },
      { once: true },
    );
  });
}

function codedError(code, message) {
  return Object.assign(new Error(message), { code });
}

/**
 * Fake hub seams mirroring the real contract (docs/m4-hub-seam-research.md):
 * media execute({wait:false}) submits → {mode:'submitted', taskId};
 * execute({dest, taskId}) polls + writes dest → {mode:'live', taskId, url}.
 */
function createFakeSeamHub(opts = {}) {
  const state = {
    submits: 0,
    polls: 0,
    concurrent: 0,
    maxConcurrent: 0,
    submitRequests: [],
    pollRequests: [],
    textRequests: [],
  };
  const pollDelayMs = opts.pollDelayMs ?? 25;
  const submitDelayMs = opts.submitDelayMs ?? 5;

  const makeMediaSeam = (capability) => ({
    async execute(req) {
      state.concurrent += 1;
      state.maxConcurrent = Math.max(state.maxConcurrent, state.concurrent);
      try {
        if (req.taskId) {
          state.pollRequests.push({ capability, ...req });
          state.polls += 1;
          await sleep(pollDelayMs, req.signal);
          if (opts.failPollWith) throw opts.failPollWith;
          mkdirSync(dirname(req.dest), { recursive: true });
          writeFileSync(req.dest, `fake-${capability}-${req.taskId}`);
          return {
            mode: 'live',
            taskId: req.taskId,
            url: `https://cdn.test/${capability}/${req.taskId}`,
          };
        }
        state.submitRequests.push({ capability, ...req });
        state.submits += 1;
        if (opts.failSubmitWith) throw opts.failSubmitWith;
        assert.equal(req.wait, false, 'fake hub expects wait:false submits');
        await sleep(submitDelayMs, req.signal);
        const taskId = `hub_${capability}_${state.submits}`;
        return { mode: 'submitted', taskId, url: null };
      } finally {
        state.concurrent -= 1;
      }
    },
  });

  const textComplete = {
    async execute(req) {
      state.textRequests.push({ ...req });
      await sleep(pollDelayMs, req.signal);
      if (opts.failTextWith) throw opts.failTextWith;
      return {
        mode: 'live',
        model: req.model ?? 'gemini-3.7-flash',
        text: `echo:${req.prompt}${req.image ? ' (+img)' : ''}`,
      };
    },
  };

  const seams = {
    videoGenerate: makeMediaSeam('video'),
    imageGenerate: makeMediaSeam('image'),
    audioGenerate: makeMediaSeam('audio'),
    textComplete,
  };
  return { seams, state };
}

// ============================================================================
// Mount harness
// ============================================================================

function makeHarness({ seamHub = null, gatewayMode, seamConcurrency, env } = {}) {
  const root = mkdtempSync(join(tmpdir(), 'omnimux-seam-gw-'));
  const captured = { handler: null };
  const webServer = {
    register(route) {
      captured.handler = route.handler;
      return () => {};
    },
  };
  const ctx = { webServer };
  if (seamHub) {
    ctx.get = (name) => seamHub.seams[name];
  }
  const opts = {
    paths: {
      root,
      workspacesDir: join(root, 'workspaces'),
      executionsDir: join(root, 'executions'),
      mediaDir: join(root, 'media'),
    },
    env: env ?? {},
  };
  if (gatewayMode !== undefined) opts.gatewayMode = gatewayMode;
  if (seamConcurrency !== undefined) opts.seamConcurrency = seamConcurrency;
  const dispose = host.mountWorkflowHost(ctx, opts);

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
    let json = null;
    try {
      json = JSON.parse(res.state.body);
    } catch {
      json = null;
    }
    return { status: res.state.status, body: json };
  };

  /** GET an SSE stream; resolves once `until(rawBody)` is satisfied. */
  const openSse = async ({ url, until, timeoutMs = 15000 }) => {
    const res = new FakeRes();
    const handlerPromise = captured.handler(fakeReq({ method: 'GET', url }), res);
    const satisfied = await new Promise((resolve) => {
      const deadline = Date.now() + timeoutMs;
      const poll = () => {
        if (until(res.state.body) || Date.now() > deadline) {
          resolve(until(res.state.body));
          return;
        }
        setTimeout(poll, 15);
      };
      poll();
    });
    await handlerPromise;
    res.destroy();
    return { satisfied, raw: res.state.body };
  };

  const parseSse = (raw) => {
    const events = [];
    let event = '';
    let data = '';
    for (const line of raw.split('\n')) {
      if (line.startsWith('event: ')) event = line.slice(7).trim();
      else if (line.startsWith('data: ')) data = line.slice(6);
      else if (line === '' && event && data) {
        try {
          events.push({ event, data: JSON.parse(data) });
        } catch {
          /* ignore malformed */
        }
        event = '';
        data = '';
      }
    }
    return events;
  };

  const waitUntil = async (fn, timeoutMs = 15000, intervalMs = 20) => {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      if (await fn()) return true;
      await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
    return false;
  };

  /** Create a workspace and save a graph (nodes/edges/settings). */
  const createGraph = async ({ nodes, edges = [], maxParallel }) => {
    const created = await call({
      method: 'POST',
      url: '/omnimux-workflow/api/workspaces',
      body: { name: 'seam-test' },
    });
    const wsId = created.body.workspace.id;
    const saved = await call({
      method: 'PUT',
      url: `/omnimux-workflow/api/workspaces/${wsId}`,
      body: {
        expectedVersion: 0,
        nodes,
        edges,
        ...(maxParallel !== undefined ? { settings: { maxParallel } } : {}),
      },
    });
    assert.equal(saved.status, 200, 'graph save failed');
    return wsId;
  };

  const materialNode = (id, materialType, data = {}) => ({
    id,
    type: 'material',
    position: { x: 0, y: 0 },
    data: {
      label: id,
      materialType,
      selectedTool: materialType === 'text' ? 'text-to-text'
        : materialType === 'image' ? 'text-to-image'
          : 'video-generation',
      prompt: `prompt for ${id}`,
      status: 'ready',
      ...data,
    },
  });

  return {
    root,
    dispose,
    call,
    openSse,
    parseSse,
    waitUntil,
    createGraph,
    materialNode,
  };
}

// ============================================================================
// Tests
// ============================================================================

test('image node: submit → poll → download → mediaUrl 回填 (fake seam full chain)', async () => {
  const hub = createFakeSeamHub();
  const h = makeHarness({ seamHub: hub });
  try {
    const wsId = await h.createGraph({ nodes: [h.materialNode('n1', 'image')] });
    const exec = await h.call({
      method: 'POST',
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions`,
      body: { mode: 'full' },
    });
    const execId = exec.body.execution.id;
    const sse = await h.openSse({
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions/${execId}/events`,
      until: (raw) => raw.includes('event: execution_complete'),
    });
    const events = h.parseSse(sse.raw);
    assert.ok(sse.satisfied, 'execution should complete');

    const complete = events.find((e) => e.event === 'node_complete');
    const asset = complete.data.output.mediaAssets[0];
    assert.match(asset.url, /^\/omnimux-workflow\/media\/executions\/[^/]+\/n1\.svg$/);
    assert.equal(asset.type, 'image');

    // The hub downloaded the artifact to dest (fake writes the file):
    const absolute = join(h.root, 'media', 'executions', execId, 'n1.svg');
    assert.ok(existsSync(absolute), 'artifact must exist on disk');
    assert.match(readFileSync(absolute, 'utf8'), /^fake-image-hub_image_1$/);

    // Seam traffic: one wait:false submit + one {dest, taskId} poll.
    assert.equal(hub.state.submits, 1);
    assert.equal(hub.state.polls, 1);
    assert.equal(hub.state.submitRequests[0].prompt, 'prompt for n1');
    assert.equal(hub.state.submitRequests[0].dest, absolute);
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }
});

test('text node: textComplete seam → generatedContent 回填 + 落盘', async () => {
  const hub = createFakeSeamHub();
  const h = makeHarness({ seamHub: hub });
  try {
    const wsId = await h.createGraph({ nodes: [h.materialNode('n1', 'text')] });
    const exec = await h.call({
      method: 'POST',
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions`,
      body: { mode: 'full' },
    });
    const execId = exec.body.execution.id;
    const sse = await h.openSse({
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions/${execId}/events`,
      until: (raw) => raw.includes('event: execution_complete'),
    });
    assert.ok(sse.satisfied);
    const complete = h.parseSse(sse.raw).find((e) => e.event === 'node_complete');
    assert.equal(complete.data.output.text, 'echo:prompt for n1');

    assert.equal(hub.state.textRequests.length, 1);
    assert.equal(hub.state.textRequests[0].prompt, 'prompt for n1');

    // Text artifact persisted beside media outputs (same dest contract).
    const absolute = join(h.root, 'media', 'executions', execId, 'n1.txt');
    assert.ok(existsSync(absolute));
    assert.equal(readFileSync(absolute, 'utf8'), 'echo:prompt for n1');
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }
});

test('hub 错误映射：code 透传到节点错误（omnimux-unconfigured）', async () => {
  const hub = createFakeSeamHub({
    failSubmitWith: codedError('omnimux-unconfigured', 'set OMNIMUX_API_KEY or OMNIMUX_TOKEN'),
  });
  const h = makeHarness({ seamHub: hub });
  try {
    const wsId = await h.createGraph({ nodes: [h.materialNode('n1', 'image')] });
    const exec = await h.call({
      method: 'POST',
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions`,
      body: { mode: 'full' },
    });
    const execId = exec.body.execution.id;
    const sse = await h.openSse({
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions/${execId}/events`,
      until: (raw) => raw.includes('event: execution_error'),
    });
    assert.ok(sse.satisfied, 'execution should fail');
    const nodeError = h.parseSse(sse.raw).find((e) => e.event === 'node_error');
    assert.match(nodeError.data.error, /\[omnimux:omnimux-unconfigured\]/);
    assert.match(nodeError.data.error, /OMNIMUX_API_KEY/);
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }
});

test('failStrategy=skip：hub 错误只失败单节点，执行整体完成', async () => {
  const hub = createFakeSeamHub({
    failSubmitWith: codedError('unknown-model', "no model configured for omnimux/image"),
  });
  const h = makeHarness({ seamHub: hub });
  try {
    const nodes = [
      h.materialNode('bad', 'image', { failStrategy: 'skip' }),
      h.materialNode('good', 'text'),
    ];
    const wsId = await h.createGraph({ nodes });
    const exec = await h.call({
      method: 'POST',
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions`,
      body: { mode: 'full' },
    });
    const execId = exec.body.execution.id;
    const sse = await h.openSse({
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions/${execId}/events`,
      until: (raw) => raw.includes('event: execution_complete'),
    });
    assert.ok(sse.satisfied, 'skip strategy should keep the run alive');
    const events = h.parseSse(sse.raw);
    const badError = events.find(
      (e) => e.event === 'node_error' && e.data.nodeId === 'bad',
    );
    assert.match(badError.data.error, /\[omnimux:unknown-model\]/);
    assert.ok(events.some((e) => e.event === 'node_complete' && e.data.nodeId === 'good'));
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }
});

test('取消：AbortSignal 贯通到 seam 轮询，执行转为 cancelled', async () => {
  const hub = createFakeSeamHub({ pollDelayMs: 400 });
  const h = makeHarness({ seamHub: hub });
  try {
    const wsId = await h.createGraph({ nodes: [h.materialNode('n1', 'image')] });
    const exec = await h.call({
      method: 'POST',
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions`,
      body: { mode: 'full' },
    });
    const execId = exec.body.execution.id;
    await h.waitUntil(async () =>
      (await h.call({ url: `/omnimux-workflow/api/workspaces/${wsId}/executions/${execId}` }))
        .body?.execution?.status === 'running');
    const cancelled = await h.call({
      method: 'POST',
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions/${execId}/cancel`,
      body: {},
    });
    assert.equal(cancelled.status, 200);
    const done = await h.waitUntil(async () =>
      (await h.call({ url: `/omnimux-workflow/api/workspaces/${wsId}/executions/${execId}` }))
        .body?.execution?.status === 'cancelled');
    assert.ok(done, 'execution should reach cancelled');
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }
});

test('capabilities：seam 可达时返回 omnimux 真实目录（含 env 覆盖）', async () => {
  const hub = createFakeSeamHub();
  const h = makeHarness({
    seamHub: hub,
    env: { OMNIMUX_VIDEO_MODEL: 'custom-video-model' },
  });
  try {
    const caps = await h.call({ url: '/omnimux-workflow/api/capabilities' });
    assert.equal(caps.body.source, 'omnimux');
    assert.deepEqual(caps.body.video, [{ id: 'custom-video-model', label: 'custom-video-model' }]);
    assert.ok(caps.body.image.some((row) => row.id === 'gpt-image-2'));
    assert.ok(caps.body.image.some((row) => row.id === 'nanobanana-2'));
    assert.equal(caps.body.text.length, 5);
    assert.ok(caps.body.text.some((row) => row.id === 'gemini-3.7-flash'));
    assert.ok(caps.body.text.some((row) => row.id === 'claude-opus-4-6'));
    assert.ok(caps.body.audio.some((row) => row.id === 'suno'));
    assert.ok(caps.body.audio.some((row) => row.id === 'gpt-4o-mini-tts'));
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }

  // Without env override: check default rich video and image models
  const hDefault = makeHarness({ seamHub: hub });
  try {
    const caps = await hDefault.call({ url: '/omnimux-workflow/api/capabilities' });
    assert.equal(caps.body.source, 'omnimux');
    assert.ok(caps.body.video.some((row) => row.id === 'kling-o1'));
    assert.ok(caps.body.video.some((row) => row.id === 'wan-2.6'));
    assert.ok(caps.body.video.some((row) => row.id === 'veo-3.1-fast'));
  } finally {
    hDefault.dispose();
    rmSync(hDefault.root, { recursive: true, force: true });
  }
});

test('回退：无 seam 时 auto 装配 mock 网关（static-stub 目录）', async () => {
  const h = makeHarness({});
  try {
    const caps = await h.call({ url: '/omnimux-workflow/api/capabilities' });
    assert.equal(caps.body.source, 'static-stub');
    assert.ok(caps.body.image.some((row) => row.id === 'mock-image-1'));
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }
});

test('回退：OMNIMUX_WORKFLOW_GATEWAY=mock 强制 mock（即使 seam 在场）', async () => {
  const hub = createFakeSeamHub();
  const h = makeHarness({
    seamHub: hub,
    env: { OMNIMUX_WORKFLOW_GATEWAY: 'mock' },
  });
  try {
    const caps = await h.call({ url: '/omnimux-workflow/api/capabilities' });
    assert.equal(caps.body.source, 'static-stub');
    assert.ok(caps.body.video.some((row) => row.id === 'mock-video-1'));
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }
});

test('强制 omnimux 且 seam 缺失：节点错误 needs-provider（不静默 mock）', async () => {
  const h = makeHarness({
    gatewayMode: 'omnimux',
    env: { OMNIMUX_WORKFLOW_GATEWAY: 'omnimux' },
  });
  try {
    const wsId = await h.createGraph({ nodes: [h.materialNode('n1', 'image')] });
    const exec = await h.call({
      method: 'POST',
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions`,
      body: { mode: 'full' },
    });
    const execId = exec.body.execution.id;
    const sse = await h.openSse({
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions/${execId}/events`,
      until: (raw) => raw.includes('event: execution_error'),
    });
    assert.ok(sse.satisfied);
    const nodeError = h.parseSse(sse.raw).find((e) => e.event === 'node_error');
    assert.match(nodeError.data.error, /\[omnimux:needs-provider\]/);
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }
});

test('并发上限：宽 DAG（maxParallel=8）下 seam 并发被压到 ≤2（默认值）', async () => {
  const hub = createFakeSeamHub({ pollDelayMs: 40 });
  const h = makeHarness({ seamHub: hub });
  try {
    const nodes = ['a', 'b', 'c', 'd'].map((id) => h.materialNode(id, 'image'));
    const wsId = await h.createGraph({ nodes, maxParallel: 8 });
    const exec = await h.call({
      method: 'POST',
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions`,
      body: { mode: 'full' },
    });
    const execId = exec.body.execution.id;
    const sse = await h.openSse({
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions/${execId}/events`,
      until: (raw) => raw.includes('event: execution_complete'),
      timeoutMs: 30000,
    });
    assert.ok(sse.satisfied);
    assert.equal(hub.state.submits, 4);
    assert.ok(
      hub.state.maxConcurrent <= 2,
      `seam concurrency must stay <= 2, saw ${hub.state.maxConcurrent}`,
    );
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }
});

test('并发上限可配：seamConcurrency=4 时并发可达 4', async () => {
  const hub = createFakeSeamHub({ pollDelayMs: 60 });
  const h = makeHarness({ seamHub: hub, seamConcurrency: 4 });
  try {
    const nodes = ['a', 'b', 'c', 'd'].map((id) => h.materialNode(id, 'image'));
    const wsId = await h.createGraph({ nodes, maxParallel: 8 });
    const exec = await h.call({
      method: 'POST',
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions`,
      body: { mode: 'full' },
    });
    const execId = exec.body.execution.id;
    const sse = await h.openSse({
      url: `/omnimux-workflow/api/workspaces/${wsId}/executions/${execId}/events`,
      until: (raw) => raw.includes('event: execution_complete'),
      timeoutMs: 30000,
    });
    assert.ok(sse.satisfied);
    assert.ok(
      hub.state.maxConcurrent >= 3,
      `raised cap should allow parallel seam calls, saw ${hub.state.maxConcurrent}`,
    );
  } finally {
    h.dispose();
    rmSync(h.root, { recursive: true, force: true });
  }
});

test('auto 晚绑定：mount 时无 seam，hub 出现后目录升级为 omnimux', async () => {
  const hub = createFakeSeamHub();
  const holder = { seams: null };
  const root = mkdtempSync(join(tmpdir(), 'omnimux-seam-late-'));
  const captured = { handler: null };
  const webServer = {
    register(route) {
      captured.handler = route.handler;
      return () => {};
    },
  };
  const dispose = host.mountWorkflowHost(
    { webServer, get: (name) => holder.seams?.[name] },
    {
      paths: {
        root,
        workspacesDir: join(root, 'workspaces'),
        executionsDir: join(root, 'executions'),
        mediaDir: join(root, 'media'),
      },
      env: {},
    },
  );
  try {
    const before = await h0call(captured, { url: '/omnimux-workflow/api/capabilities' });
    assert.equal(before.body.source, 'static-stub');

    holder.seams = hub.seams; // hub mounted later in the session
    const after = await h0call(captured, { url: '/omnimux-workflow/api/capabilities' });
    assert.equal(after.body.source, 'omnimux');
    assert.ok(after.body.video.some((row) => row.id === 'kling-o1'));
    assert.ok(after.body.video.some((row) => row.id === 'wan-2.6'));
  } finally {
    dispose();
    rmSync(root, { recursive: true, force: true });
  }
});

async function h0call(captured, { method = 'GET', url, body }) {
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
}
