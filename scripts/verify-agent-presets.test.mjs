import { test } from 'node:test'
import { ok, equal, deepEqual } from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const CONTENT = [
  'expert_content_copywriter',
  'expert_speech',
  'expert_image',
  'expert_video',
  'expert_music',
  'expert_editing',
]
const ENGAGEMENT = [
  'expert_interaction_automator',
  'expert_ai_comment',
  'expert_signal_miner',
  'expert_brand_monitor',
]
const ALL = [...CONTENT, ...ENGAGEMENT]

const FORK_END = [
  '    - id: tool-subagent-fork',
  "      name: '@deepseek-ai/dsh-tool-subagent'",
  '      config:',
  '        provider: fork',
  '        toolName: subagent_fork',
  '        backgroundMode: continuable',
].join('\n')

function read(rel) {
  return readFileSync(join(root, rel), 'utf8')
}

function toolNames(text) {
  return [...text.matchAll(/toolName: (expert_\w+)/g)].map((m) => m[1])
}

function parseWithPython(rel) {
  const script = `
import sys, yaml
from pathlib import Path
p = Path(sys.argv[1])
text = p.read_text()
def js_ctor(loader, node):
    return False
yaml.SafeLoader.add_constructor('tag:yaml.org,2002:js', js_ctor)
docs = list(yaml.load_all(text, Loader=yaml.SafeLoader))
# agent.cordis.yml is a single sequence of mappings
data = docs[0]
assert isinstance(data, list), type(data)
print(len(data))
`
  const res = spawnSync('python3', ['-c', script, join(root, rel)], { encoding: 'utf8' })
  if (res.status !== 0) {
    throw new Error(`${rel} yaml parse failed:\n${res.stderr || res.stdout}`)
  }
  return Number(res.stdout.trim())
}

test('preset fragments exist and list the expected experts', () => {
  const content = read('presets/fragments/content-experts.cordis.yml')
  const engagement = read('presets/fragments/engagement-experts.cordis.yml')
  deepEqual(toolNames(content), CONTENT)
  deepEqual(toolNames(engagement), ENGAGEMENT)
})

for (const [id, expected] of [
  ['standard', ALL],
  ['social-content-team', CONTENT],
  ['social-engagement-team', ENGAGEMENT],
]) {
  test(`${id} agent.cordis.yml is structurally valid`, () => {
    const rel = `presets/${id}/agent.cordis.yml`
    ok(existsSync(join(root, rel)), rel)
    const text = read(rel)
    ok(!text.includes("name: '@deepseek-ai/dsh-tool-subagent    #"), 'mangled subagent line')
    ok(!text.includes("name: '@deepseek-ai/dsh-tool-s    #"), 'mangled fork line')
    ok(text.includes(FORK_END), 'complete tool-subagent-fork block')
    deepEqual(toolNames(text), expected)
    const rows = parseWithPython(rel)
    ok(rows >= 8, `${id} parsed ${rows} top-level rows`)
  })
}

test('standard persona routes both teams and forbids forced spawn', () => {
  const text = read('presets/standard/agent.cordis.yml')
  ok(text.includes('不强行委派') || text.includes('禁止为了「显得专业」而 spawn'))
  ok(text.includes('不要尝试切换会话 preset'))
  for (const name of ALL) ok(text.includes(name), name)
})

test('dedicated teams keep their own lead persona and do not mix the other team', () => {
  const content = read('presets/social-content-team/agent.cordis.yml')
  const engagement = read('presets/social-engagement-team/agent.cordis.yml')
  ok(content.includes('迪克特'))
  ok(engagement.includes('格罗斯'))
  for (const name of ENGAGEMENT) {
    equal(content.includes(`toolName: ${name}`), false, `content must not own ${name}`)
  }
  for (const name of CONTENT) {
    equal(engagement.includes(`toolName: ${name}`), false, `engagement must not own ${name}`)
  }
})

test('build-agent-presets is idempotent', () => {
  const before = read('presets/standard/agent.cordis.yml')
  const res = spawnSync('node', [join(root, 'scripts/build-agent-presets.mjs')], {
    cwd: root,
    encoding: 'utf8',
  })
  equal(res.status, 0, res.stderr || res.stdout)
  const after = read('presets/standard/agent.cordis.yml')
  equal(after, before)
})

test('sync-agent-presets.sh never writes DSH Desktop or desktop/web profiles', () => {
  const script = read('scripts/sync-agent-presets.sh')
  const code = script
    .split('\n')
    .filter((line) => !line.trimStart().startsWith('#'))
    .join('\n')
  ok(!code.includes('/Applications/DSH Desktop.app'), 'must not touch DSH Desktop.app')
  ok(!code.includes('dsh-plugin-desktop'), 'must not overwrite desktop-fork vendor copy')
  ok(!code.includes('profiles/desktop/cordis.patch.yml'), 'must not patch desktop profile')
  ok(!code.includes('profiles/web/cordis.patch.yml'), 'must not patch web profile')
  ok(!code.includes('$HOME/.dsh/.agent-presets'), 'must not rewrite DSH user preset root')
  ok(code.includes('/Applications/OmniMux.app'), 'must still materialize OmniMux.app')
  ok(code.includes('/Applications/OmniMux Dev.app'), 'must still materialize OmniMux Dev.app')
})
