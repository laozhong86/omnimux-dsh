import { mkdirSync, mkdtempSync, writeFileSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loadCatalog } from './catalog.js'
import { createCatalogSkillProvider, registerCatalogSkillProvider, resolveSkillDefinition } from './catalog-provider.js'

const PACKAGE_ROOT = join(import.meta.dirname, '..', '..')

function env() {
  const home = mkdtempSync(join(tmpdir(), 'omx-catprov-'))
  const profileDir = join(home, 'profiles', 'omnimux')
  mkdirSync(profileDir, { recursive: true })
  return { home, profileDir, packageRoot: PACKAGE_ROOT }
}

test('catalog provider list returns candidates with 0 token modelInvocable: false', async () => {
  const roots = env()
  const provider = createCatalogSkillProvider({
    catalog: loadCatalog(),
    ...roots,
  })

  const result = await provider.list()
  assert.equal(result.complete, true)
  assert.ok(result.candidates.length > 50, `expected >50 skills, got ${result.candidates.length}`)

  // Verify policy: modelInvocable must be strictly false for all catalog candidates (0 Token pollution to LLM)
  // and userInvocable must be strictly true (so users can find them in / slash composer)
  for (const c of result.candidates) {
    assert.equal(c.invocation.modelInvocable, false, `skill ${c.name} must not be modelInvocable`)
    assert.equal(c.invocation.userInvocable, true, `skill ${c.name} must be userInvocable`)
    assert.ok(c.name, 'candidate must have name')
    assert.ok(c.description, 'candidate must have description')
  }

  const names = new Set(result.candidates.map(c => c.name))
  assert.ok(names.has('ad-creative'), 'should contain ad-creative')
  assert.ok(names.has('content-strategy'), 'should contain content-strategy')
  assert.ok(names.has('social-caption'), 'should contain social-caption')
  assert.ok(names.has('dynamic-poster'), 'should contain dynamic-poster')
  assert.ok(names.has('ecommerce-image'), 'should contain ecommerce-image')
  assert.ok(names.has('character-scene-storyboard'), 'should contain character-scene-storyboard')
  assert.ok(names.has('cinematic-motion-language'), 'should contain cinematic-motion-language')
  assert.ok(names.has('clip-export'), 'should contain clip-export')
})

test('catalog provider get resolves bundled Tier 1 skills', async () => {
  const roots = env()
  const provider = createCatalogSkillProvider({
    catalog: loadCatalog(),
    ...roots,
  })

  const def = await provider.get('ad-creative')
  assert.equal(def.name, 'ad-creative')
  assert.equal(def.invocation.modelInvocable, false)
  assert.equal(def.invocation.userInvocable, true)
  assert.ok(def.content.includes('Ad Creative') || def.content.includes('ad-creative'))
})

test('catalog provider get resolves bundled social-engagement-team skills', async () => {
  const roots = env()
  const provider = createCatalogSkillProvider({
    catalog: loadCatalog(),
    ...roots,
  })

  const def = await provider.get('social-engagement-ops')
  assert.equal(def.name, 'social-engagement-ops')
  assert.ok(def.content.length > 0)
})

test('catalog provider get throws on unknown skill', async () => {
  const roots = env()
  const provider = createCatalogSkillProvider({
    catalog: loadCatalog(),
    ...roots,
  })

  await assert.rejects(
    () => provider.get('non-existent-skill-xyz-12345'),
    /not found/
  )
})

test('registerCatalogSkillProvider registers with ctx.skills', () => {
  let registered = null
  const mockCtx = {
    skills: {
      registerProvider(factory) {
        registered = factory()
        return () => { registered = null }
      },
    },
  }

  const disposer = registerCatalogSkillProvider(mockCtx)
  assert.ok(registered)
  assert.equal(registered.name, 'omnimux-catalog')
  disposer()
  assert.equal(registered, null)
})

test('registerCatalogSkillProvider never throws when ctx.skills is a Cordis Proxy that throws', () => {
  // 复刻 Cordis 的 ctx Proxy：访问未注入的 services 会直接 throw
  // "cannot get property ... without inject"，可选链 ?. 拦不住。
  // registerCatalogSkillProvider 必须 try/catch 绝对防御，否则整个插件在 apply 阶段崩掉 Host。
  const cordisProxy = new Proxy({}, {
    get(_target, prop) {
      if (prop === 'skills') throw new Error('cannot get property "skills" without inject')
      return undefined
    },
  })

  let disposer
  assert.doesNotThrow(() => {
    disposer = registerCatalogSkillProvider(cordisProxy)
  })
  assert.equal(typeof disposer, 'function')
  disposer()
})

test('registerCatalogSkillProvider no-ops when ctx.skills lacks registerProvider', () => {
  const noSkills = { skills: {} }
  let disposer
  assert.doesNotThrow(() => {
    disposer = registerCatalogSkillProvider(noSkills)
  })
  assert.equal(typeof disposer, 'function')
  disposer()
})

// —— DSH 官方契约镜像校验（依据 @deepseek-ai/dsh-skill/lib/index.js）——
// validateCandidate 硬性要求 name/description/source/rank/provider，缺失即抛错并中止注册；
// validateDefinition 额外要求 content。这里把官方规则搬进单测，防止契约漂移静默回归。
const SKILL_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

/** 镜像官方 validateCandidate。 */
function validateCandidate(candidate, providerName) {
  if (typeof candidate.name !== 'string') throw new TypeError('non-string skill name')
  if (!SKILL_NAME.test(candidate.name)) throw new Error(`invalid skill name "${candidate.name}"`)
  if (typeof candidate.description !== 'string') throw new TypeError('non-string description')
  if (candidate.description.length === 0) throw new Error('missing description')
  const p = candidate.invocation
  if (typeof p.modelInvocable !== 'boolean') throw new TypeError('non-boolean invocation.modelInvocable')
  if (typeof p.userInvocable !== 'boolean') throw new TypeError('non-boolean invocation.userInvocable')
  if (typeof candidate.source !== 'string') throw new TypeError('non-string source')
  if (typeof candidate.rank !== 'number' || !Number.isFinite(candidate.rank)) throw new Error('invalid rank')
  if (typeof candidate.provider !== 'string') throw new TypeError('non-string provider')
  if (candidate.provider !== providerName) throw new Error('provider mismatch')
}

/** 镜像官方 validateDefinition。 */
function validateDefinition(skill) {
  if (typeof skill.name !== 'string' || !SKILL_NAME.test(skill.name)) throw new Error('bad name')
  if (typeof skill.description !== 'string' || skill.description.length === 0) throw new Error('bad description')
  if (typeof skill.source !== 'string') throw new TypeError('source must be a string')
  if (typeof skill.provider !== 'string') throw new TypeError('provider must be a string')
  if (typeof skill.content !== 'string') throw new TypeError('content must be a string')
  const p = skill.invocation
  if (typeof p.modelInvocable !== 'boolean' || typeof p.userInvocable !== 'boolean') throw new TypeError('bad invocation')
}

test('every catalog candidate satisfies official validateCandidate', async () => {
  const provider = createCatalogSkillProvider({ catalog: loadCatalog(), ...env() })
  const { candidates } = await provider.list()
  assert.ok(candidates.length > 0)
  for (const c of candidates) {
    validateCandidate(c, provider.name)
  }
})

test('catalog rank loses to filesystem so installed skills stay model-invocable', async () => {
  const provider = createCatalogSkillProvider({ catalog: loadCatalog(), ...env() })
  const { candidates } = await provider.list()
  // filesystem 本地根为 100~500，bundled 为 600；本目录必须严格更低优先级
  for (const c of candidates) {
    assert.ok(c.rank > 600, `rank ${c.rank} must be > 600 so filesystem/bundled win`)
  }
})

test('resolved definitions satisfy official validateDefinition', async () => {
  const provider = createCatalogSkillProvider({ catalog: loadCatalog(), ...env() })
  for (const name of ['ad-creative', 'social-engagement-ops']) {
    const definition = await provider.get(name)
    validateDefinition(definition)
    assert.equal(definition.provider, provider.name)
    assert.equal(definition.source, 'omnimux-market')
  }
})

test('host.ts declares skills in inject so ctx.skills is safely readable', () => {
  // R1 事故回归护栏：host.ts 必须把 skills 加入 inject 声明，
  // 否则 Cordis 在 apply() 阶段读 ctx.skills 会抛 "without inject" 崩掉整个 Host。
  const hostPath = join(import.meta.dirname, '..', '..', 'src', 'host.ts')
  const host = readFileSync(hostPath, 'utf8')
  const injectMatch = host.match(/export\s+const\s+inject\s*=\s*(\[[\s\S]*?\])/)
  assert.ok(injectMatch, 'host.ts must declare export const inject')
  const injectArr = injectMatch[1]
  assert.match(injectArr, /'skills'/, 'host.ts inject must declare "skills" so ctx.skills is inject-required-safe')
  assert.match(injectArr, /'tools'/, 'host.ts inject must still declare "tools"')
})
