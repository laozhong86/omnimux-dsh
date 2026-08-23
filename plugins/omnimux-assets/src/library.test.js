import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, it } from 'node:test'
import { createLibraryStore } from './library.js'
import { createMappingStore } from './mappings.js'

let root
let realFile

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), 'assets-library-'))
  realFile = join(root, 'hero.png')
  writeFileSync(realFile, 'png')
})

afterEach(() => {
  rmSync(root, { recursive: true, force: true })
})

function makeStore() {
  return createLibraryStore({
    paths: { libraryFile: join(root, 'store', 'library.json') },
  })
}

describe('LibraryStore add/list', () => {
  it('creates a named character with no files', () => {
    const store = makeStore()
    const asset = store.add({ name: '林晓', type: 'character', description: '冷白皮长直发' })
    assert.match(asset.id, /^ast_[0-9a-f]{8}$/)
    assert.equal(asset.type, 'character')
    assert.equal(asset.handle, '林晓')
    assert.equal(asset.cite, '@角色/林晓')
    assert.equal(asset.files.length, 0)
    assert.equal(store.revision(), 1)
  })

  it('falls into custom when type is omitted', () => {
    const store = makeStore()
    const asset = store.add({ name: '未分类草稿' })
    assert.equal(asset.type, 'custom')
  })

  it('rejects blank names, slashes, and duplicates', () => {
    const store = makeStore()
    assert.throws(() => store.add({ name: '  ' }), (error) => error.code === 'name-required')
    assert.throws(() => store.add({ name: 'a/b' }), (error) => error.code === 'name-invalid')
    store.add({ name: '林晓', type: 'character' })
    assert.throws(() => store.add({ name: '林晓', type: 'scene' }), (error) => error.code === 'name-conflict')
  })

  it('search hits description and tags', () => {
    const store = makeStore()
    store.add({ name: '林晓', type: 'character', description: '冷白皮', tags: ['女主'] })
    store.add({ name: '雨夜便利店', type: 'scene', description: '霓虹' })
    assert.equal(store.list({ query: '冷白' }).length, 1)
    assert.equal(store.list({ query: '女主' })[0].name, '林晓')
    assert.equal(store.list({ type: 'scene' }).length, 1)
  })
})

describe('LibraryStore path refs', () => {
  it('skips missing paths on create and hides files that vanish later', () => {
    const store = makeStore()
    const missingAtCreate = join(root, 'never-there.jpg')
    const asset = store.add({
      name: '定妆',
      type: 'character',
      files: [{ real_path: realFile }, { real_path: missingAtCreate }],
    })
    assert.equal(asset.files.length, 1)
    assert.equal(asset.files[0].real_path, realFile)

    const gone = join(root, 'gone.jpg')
    writeFileSync(gone, 'jpg')
    store.update(asset.id, { files: [{ real_path: realFile }, { real_path: gone }] })
    rmSync(gone)
    const view = store.getView(asset.id)
    assert.equal(view.files.length, 1)
    assert.equal(view.files[0].real_path, realFile)
    assert.equal(view.missing_file_count, 1)
    assert.equal(statSync(realFile).isFile(), true)
  })

  it('keeps a folder as one file ref and lists one directory layer at a time', () => {
    const store = makeStore()
    const pack = join(root, 'pack')
    mkdirSync(join(pack, 'looks'), { recursive: true })
    writeFileSync(join(pack, 'cover.png'), 'png')
    writeFileSync(join(pack, 'looks', 'front.png'), 'png')
    const asset = store.add({ name: '风格包A', type: 'style', files: [{ real_path: pack }] })
    assert.equal(asset.files.length, 1)
    assert.equal(asset.files[0].kind, 'directory')
    const rootLayer = store.listFileEntries(asset.id, asset.files[0].id, '')
    assert.equal(rootLayer.entries.some((row) => row.name === 'cover.png' && !row.is_dir), true)
    assert.equal(rootLayer.entries.some((row) => row.name === 'looks' && row.is_dir), true)
    assert.equal(rootLayer.entries.some((row) => row.name === 'front.png'), false)
    const nested = store.listFileEntries(asset.id, asset.files[0].id, 'looks')
    assert.deepEqual(nested.entries.map((row) => row.name), ['front.png'])
    const preview = store.resolvePreview(asset.id, asset.files[0].id, 'looks/front.png')
    assert.equal(preview.mime, 'image/png')
    assert.equal(preview.absolutePath.endsWith('front.png'), true)
    assert.throws(() => store.resolvePreview(asset.id, asset.files[0].id, ''), (error) => error.code === 'path-not-dir')
    assert.throws(
      () => store.listFileEntries(asset.id, asset.files[0].id, '../'),
      (error) => error.code === 'path-denied' || error.code === 'path-not-found',
    )
  })

  it('remove drops the JSON record and never unlinks the real file', () => {
    const store = makeStore()
    const asset = store.add({ name: '林晓', files: [{ real_path: realFile }] })
    store.remove(asset.id)
    assert.equal(store.list().length, 0)
    assert.equal(statSync(realFile).isFile(), true)
  })
})

describe('LibraryStore mapping migrate', () => {
  it('turns each mapping into a custom path-ref asset', () => {
    const mappings = createMappingStore({
      paths: {
        mappingsFile: join(root, 'store', 'mappings.json'),
        scansDir: join(root, 'store', 'scans'),
      },
    })
    const dir = join(root, 'brand')
    mkdirSync(dir)
    mappings.add(dir, '品牌素材')
    const store = makeStore()
    const result = store.migrateMappings(mappings)
    assert.equal(result.migrated, 1)
    const listed = store.list()
    assert.equal(listed.length, 1)
    assert.equal(listed[0].type, 'custom')
    assert.equal(listed[0].source, 'migrated-mapping')
    assert.equal(listed[0].files[0].real_path, dir)
    const second = store.migrateMappings(mappings)
    assert.equal(second.migrated, 0)
    assert.equal(store.list().length, 1)
  })
})
