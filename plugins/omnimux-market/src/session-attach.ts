import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

/** 会话已挂专家的落盘形状。真源是这份文件，不是斜杠手势、也不是本轮上下文。 */
export interface SessionExpertAttach {
  id: string
  skill: string
  title: string
  kind: string
  attachedAt: string
}

const MAX_SKILL_CHARS = 24_000

/** 会话 id 只允许落盘安全字符，防止路径穿越。 */
export function sanitizeSessionId(raw: unknown): string {
  const id = String(raw || '').trim()
  if (!id || id.length > 180) return ''
  if (!/^[A-Za-z0-9._-]+$/.test(id)) return ''
  return id
}

/** `$DSH_HOME/omnimux-market/sessions/<sessionId>.json` */
export function sessionExpertPath(home: string, sessionId: string): string {
  const id = sanitizeSessionId(sessionId)
  if (!id) return ''
  return join(home, 'omnimux-market', 'sessions', `${id}.json`)
}

export function readSessionExpert(home: string, sessionId: unknown): SessionExpertAttach | null {
  const path = sessionExpertPath(home, String(sessionId || ''))
  if (!path || !existsSync(path)) return null
  try {
    const raw = JSON.parse(readFileSync(path, 'utf8')) as Record<string, unknown>
    const id = String(raw.id || '').trim()
    const skill = String(raw.skill || '').trim()
    if (!id || !skill) return null
    return {
      id,
      skill,
      title: String(raw.title || id),
      kind: String(raw.kind || 'expert'),
      attachedAt: String(raw.attachedAt || ''),
    }
  } catch {
    return null
  }
}

export function writeSessionExpert(home: string, sessionId: unknown, attach: Omit<SessionExpertAttach, 'attachedAt'> & { attachedAt?: string }): SessionExpertAttach {
  const path = sessionExpertPath(home, String(sessionId || ''))
  if (!path) throw new Error('invalid session id')
  const payload: SessionExpertAttach = {
    id: String(attach.id).trim(),
    skill: String(attach.skill).trim(),
    title: String(attach.title || attach.id).trim(),
    kind: String(attach.kind || 'expert').trim() || 'expert',
    attachedAt: attach.attachedAt || new Date().toISOString(),
  }
  if (!payload.id || !payload.skill) throw new Error('attach requires id and skill')
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, `${JSON.stringify(payload, null, 2)}\n`)
  return payload
}

export function loadSkillBody(home: string, skill: string): string {
  const dest = join(home, 'skills', skill, 'SKILL.md')
  if (!existsSync(dest)) return ''
  try {
    return readFileSync(dest, 'utf8')
  } catch {
    return ''
  }
}

/**
 * DSH systemPrompt.section interpolates any `{{...}}` as a template variable reference.
 * External skill/expert instructions often include `{{...}}` in code snippets (GitHub Actions,
 * Prometheus alerts, Jinja/Vue templates, etc.). Inserting a zero-width space between double
 * braces prevents DSH from parsing them as variable interpolations while preserving the exact
 * visual text for the model.
 */
export function escapePromptVariables(text: string): string {
  if (!text || (!text.includes('{{') && !text.includes('}}'))) return text
  return text.replace(/\{(?=\{)/g, '{\u200B').replace(/\}(?=\})/g, '}\u200B')
}

/**
 * 每步系统提示用的身份段。挂上后跨轮、重启、压缩后都从落盘重读。
 * 空串表示本会话未挂专家，组装时会被丢掉。
 */
export function renderAttachedExpertSection(home: string, sessionId: unknown): string {
  const attach = readSessionExpert(home, sessionId)
  if (!attach) return ''
  const body = loadSkillBody(home, attach.skill)
  const truncated = body.length > MAX_SKILL_CHARS
  const skillText = truncated ? `${body.slice(0, MAX_SKILL_CHARS)}\n\n…(instructions truncated; call the skill tool with "${attach.skill}" for the rest)` : body
  const kindLabel = attach.kind === 'team' ? '专家团' : '专家'
  const raw = [
    `This session has a persistent attached plaza ${kindLabel}: 「${attach.title}」 (catalog id ${attach.id}, skill ${attach.skill}).`,
    'Stay in this role for the rest of the session. Do not plaza_search or recommend a different expert unless the user explicitly asks to switch.',
    'The slash gesture only injects a skill for one step. This attachment is the durable identity: reload it from here even if later user messages omit /skill.',
    skillText
      ? `Follow these expert instructions:\n\n${skillText}`
      : `Expert skill "${attach.skill}" is installed. Call the skill tool with that exact name before acting, then stay in character.`,
  ].join('\n')
  return escapePromptVariables(raw)
}

/** 从工具 exec 抠会话 id；测例可以不传。 */
export function sessionIdFromExec(exec: unknown): string {
  const agent = (exec as { agent?: { id?: unknown; session?: { id?: unknown; header?: { id?: unknown } } } } | undefined)?.agent
  const raw = agent?.session?.header?.id ?? agent?.session?.id ?? agent?.id
  return sanitizeSessionId(raw)
}
