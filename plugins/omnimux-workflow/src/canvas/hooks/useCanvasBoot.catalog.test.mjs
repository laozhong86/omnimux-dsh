/**
 * Catalog fingerprint refresh (#413): always fetch on boot; replace cache
 * when fingerprint changes. Pure function + boot source contract.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { shouldReplaceCatalogCache } from '../editor/hooks/catalogCache.ts';

const here = dirname(fileURLToPath(import.meta.url));
const bootSrc = readFileSync(join(here, 'useCanvasBoot.ts'), 'utf8');

test('shouldReplaceCatalogCache: force true → replace', () => {
  assert.equal(
    shouldReplaceCatalogCache({
      cachedFingerprint: 'abc',
      nextFingerprint: 'abc',
      force: true,
    }),
    true,
  );
});

test('shouldReplaceCatalogCache: next 无 fingerprint → replace', () => {
  assert.equal(
    shouldReplaceCatalogCache({
      cachedFingerprint: 'abc',
      nextFingerprint: '',
      force: false,
    }),
    true,
  );
  assert.equal(
    shouldReplaceCatalogCache({
      cachedFingerprint: 'abc',
      nextFingerprint: null,
      force: false,
    }),
    true,
  );
});

test('shouldReplaceCatalogCache: cached 空 → replace', () => {
  assert.equal(
    shouldReplaceCatalogCache({
      cachedFingerprint: '',
      nextFingerprint: 'abc',
      force: false,
    }),
    true,
  );
  assert.equal(
    shouldReplaceCatalogCache({
      cachedFingerprint: null,
      nextFingerprint: 'abc',
    }),
    true,
  );
});

test('shouldReplaceCatalogCache: 相同 fingerprint → keep', () => {
  assert.equal(
    shouldReplaceCatalogCache({
      cachedFingerprint: 'abc',
      nextFingerprint: 'abc',
      force: false,
    }),
    false,
  );
});

test('shouldReplaceCatalogCache: 不同 fingerprint → replace', () => {
  assert.equal(
    shouldReplaceCatalogCache({
      cachedFingerprint: 'old-fp',
      nextFingerprint: 'new-fp',
      force: false,
    }),
    true,
  );
});

test('源码契约：refreshCatalog(false) 始终 fetchCapabilities，不因 TTL 提前 return', () => {
  assert.match(bootSrc, /async function refreshCatalog\(force = false\)/);
  assert.match(bootSrc, /fetchCapabilities\(\)/);
  assert.match(bootSrc, /shouldReplaceCatalogCache/);
  assert.match(bootSrc, /getCachedFingerprint/);
  assert.doesNotMatch(bootSrc, /isCatalogCacheStale/);
  const refreshStart = bootSrc.indexOf('async function refreshCatalog(force = false)');
  const refreshEnd = bootSrc.indexOf('async function probeAndPatchImportedMedia', refreshStart);
  assert.ok(refreshStart >= 0 && refreshEnd > refreshStart, 'refreshCatalog 函数边界');
  const body = bootSrc.slice(refreshStart, refreshEnd);
  assert.doesNotMatch(body, /if \(!force && !isCatalogCacheStale/);
  assert.match(body, /const result = await fetchCapabilities\(\)/);
  assert.match(body, /if \(cached\) setCatalog\(cached\)/);
});
