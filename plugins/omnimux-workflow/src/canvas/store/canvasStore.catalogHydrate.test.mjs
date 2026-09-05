import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { buildSync } from 'esbuild';
import { afterEach, test } from 'node:test';

const here = fileURLToPath(new URL('.', import.meta.url));
const bundle = join(mkdtempSync(join(tmpdir(), 'omnimux-canvas-store-')), 'runtime.mjs');
buildSync({
  stdin: { contents: "export { useCanvasStore } from './canvasStore.ts';", resolveDir: here, sourcefile: 'runtime.ts' },
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: bundle,
});
const { useCanvasStore } = await import(pathToFileURL(bundle).href);
import { createCompatTestCatalog } from '../../shared/validation/compatTestCatalog.ts';

function graph(model = 'img-prompt-only') {
  return {
    nodes: [
      {
        id: 'gen',
        type: 'material',
        position: { x: 0, y: 0 },
        data: {
          materialType: 'image',
          nodeKind: 'generate',
          selectedTool: 'text-to-image',
          prompt: 'make it',
          params: { model },
        },
      },
      {
        id: 'source',
        type: 'material',
        position: { x: 0, y: 0 },
        data: {
          materialType: 'image',
          nodeKind: 'import',
          selectedTool: 'import',
          mimeType: 'image/png',
          sizeBytes: 1024,
        },
      },
    ],
    edges: [{ id: 'source-gen', source: 'source', target: 'gen', targetHandle: 'in' }],
  };
}

afterEach(() => useCanvasStore.getState().resetStore());

test('catalog-first hydrate reconciles the loaded graph even when runtime fingerprint is unchanged', () => {
  const store = useCanvasStore.getState();
  store.setCatalogRuntime(createCompatTestCatalog());
  const saved = graph();
  store.hydrateGraph(saved.nodes, saved.edges);

  const node = useCanvasStore.getState().nodes.find((candidate) => candidate.id === 'gen');
  assert.equal(node.data.params.model, 'img-ref');
  assert.equal(node.data.params.operation, 'image_to_image');
});

test('graph-first hydrate reconciles after catalog arrives and preserves an explicit valid model', () => {
  const store = useCanvasStore.getState();
  const stale = graph();
  store.hydrateGraph(stale.nodes, stale.edges);
  store.setCatalogRuntime(createCompatTestCatalog());
  assert.equal(
    useCanvasStore.getState().nodes.find((candidate) => candidate.id === 'gen').data.params.model,
    'img-ref',
  );

  store.resetStore();
  const valid = graph('img-ref');
  store.hydrateGraph(valid.nodes, valid.edges);
  store.setCatalogRuntime(createCompatTestCatalog());
  const node = useCanvasStore.getState().nodes.find((candidate) => candidate.id === 'gen');
  assert.equal(node.data.params.model, 'img-ref');
  assert.equal(node.data.params.operation, 'image_to_image');
});
