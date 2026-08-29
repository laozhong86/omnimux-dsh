#!/usr/bin/env node
/**
 * Splice OmniMux expert fragments into agent.cordis.yml files.
 *
 * Anchor is the complete `tool-subagent-fork` block (line-boundary), never a
 * mid-line `    # ──` search. Running twice is a no-op besides rewriting
 * the expert section from fragments/.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const fragments = join(root, 'presets/fragments')

const FORK_END = [
  '    - id: tool-subagent-fork',
  "      name: '@deepseek-ai/dsh-tool-subagent'",
  '      config:',
  '        provider: fork',
  '        toolName: subagent_fork',
  '        backgroundMode: continuable',
].join('\n')

const TAIL_MARKERS = [
  '    # Production dsh does not install these optional providers.',
  '    # Product providers are host-plane singletons.',
]

const STANDARD_PERSONA = `    text: |
      你是 OmniMux「标准模式」编码 Agent，工作目录 {{cwd}}。
      你具备完整编码能力（文件编辑、Shell、检索、Skills、计划、目标、子代理、工作流）。
      同时可 spawn 两个社媒专家团成员（**不切换会话 preset**，标题保持「标准模式」）：

      创作团：
      - expert_content_copywriter：社媒文案专员 可可
      - expert_speech：配音解说专家 沃伊斯
      - expert_image：视觉生图专家 维森
      - expert_video：分镜生成专家 维迪奥
      - expert_music：配乐音效专家 缪斯
      - expert_editing：剪辑合成专家 艾迪特

      增长团：
      - expert_interaction_automator：自动化互动专家 柏特
      - expert_ai_comment：AI 评论运营专家 瑞普
      - expert_signal_miner：信号挖掘专家 麦恩
      - expert_brand_monitor：品牌监控专家 沃奇

      工作方式：
      1. 创作/成片/文案/配音/生图/分镜/BGM/剪辑 → 按创作 SOP 调度对应 6 人（可并行），汇总不改写专家数据依据。
      2. 互动增长/评论运营/信号挖掘/舆情监控/养号防封 → 调度增长 4 人。
      3. 编码、重构、文件、检索、闲聊 → **自己做，禁止为了「显得专业」而 spawn**。
      4. 跨域（例如「做一条带货视频并设计评论转化」）→ 两团并行再汇总。
      5. 子任务失败 3 次熔断说明；增长侧无审核不执行高风险写操作。
      6. 不要尝试切换会话 preset；header 保持「标准模式」。
`

function loadFragment(name) {
  const text = readFileSync(join(fragments, name), 'utf8').replace(/\s+$/, '')
  if (!text.includes('    - id: tool-subagent-expert-')) {
    throw new Error(`fragment ${name} has no expert spawn rows`)
  }
  return `${text}\n`
}

function spliceExperts(yml, fragment) {
  const forkAt = yml.indexOf(FORK_END)
  if (forkAt < 0) {
    throw new Error('tool-subagent-fork block not found as a complete 6-line unit')
  }
  const afterFork = forkAt + FORK_END.length
  let tailAt = -1
  let marker = ''
  for (const m of TAIL_MARKERS) {
    const i = yml.indexOf(m, afterFork)
    if (i >= 0 && (tailAt < 0 || i < tailAt)) {
      tailAt = i
      marker = m
    }
  }
  if (tailAt < 0) {
    throw new Error('no Production/Product providers tail marker after fork')
  }
  const between = yml.slice(afterFork, tailAt)
  if (between.includes("name: '@deepseek-ai/dsh-tool-subagent    #")
    || between.includes("name: '@deepseek-ai/dsh-tool-s    #")) {
    throw new Error('refusing to splice over a mangled tool-subagent line')
  }
  return `${yml.slice(0, afterFork)}\n\n${fragment}${yml.slice(tailAt)}`
}

function replaceStandardPersona(yml) {
  const personaId = yml.indexOf('- id: persona')
  if (personaId < 0) throw new Error('persona id missing')
  const start = yml.indexOf('    text:', personaId)
  const end = yml.indexOf('\n- id: agent-instructions', start)
  if (start < 0 || end < 0 || start > end) {
    throw new Error('standard persona block not found')
  }
  return `${yml.slice(0, start)}${STANDARD_PERSONA}${yml.slice(end)}`
}

const contentFrag = loadFragment('content-experts.cordis.yml')
const engagementFrag = loadFragment('engagement-experts.cordis.yml')
const bothFrag = `${contentFrag}\n${engagementFrag}`

const targets = [
  {
    file: 'presets/standard/agent.cordis.yml',
    fragment: bothFrag,
    persona: true,
  },
  {
    file: 'presets/social-content-team/agent.cordis.yml',
    fragment: contentFrag,
    persona: false,
  },
  {
    file: 'presets/social-engagement-team/agent.cordis.yml',
    fragment: engagementFrag,
    persona: false,
  },
]

for (const t of targets) {
  const path = join(root, t.file)
  let yml = readFileSync(path, 'utf8')
  if (t.persona) yml = replaceStandardPersona(yml)
  yml = spliceExperts(yml, t.fragment)
  writeFileSync(path, yml)
  const experts = (yml.match(/toolName: expert_/g) || []).length
  console.log(`  ✓ ${t.file} experts=${experts}`)
}
