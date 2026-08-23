import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
const MAX_SKILL_CHARS = 24_000;
/** 会话 id 只允许落盘安全字符，防止路径穿越。 */
export function sanitizeSessionId(raw) {
    const id = String(raw || '').trim();
    if (!id || id.length > 180)
        return '';
    if (!/^[A-Za-z0-9._-]+$/.test(id))
        return '';
    return id;
}
/** `$DSH_HOME/omnimux-market/sessions/<sessionId>.json` */
export function sessionExpertPath(home, sessionId) {
    const id = sanitizeSessionId(sessionId);
    if (!id)
        return '';
    return join(home, 'omnimux-market', 'sessions', `${id}.json`);
}
export function readSessionExpert(home, sessionId) {
    const path = sessionExpertPath(home, String(sessionId || ''));
    if (!path || !existsSync(path))
        return null;
    try {
        const raw = JSON.parse(readFileSync(path, 'utf8'));
        const id = String(raw.id || '').trim();
        const skill = String(raw.skill || '').trim();
        if (!id || !skill)
            return null;
        return {
            id,
            skill,
            title: String(raw.title || id),
            kind: String(raw.kind || 'expert'),
            attachedAt: String(raw.attachedAt || ''),
        };
    }
    catch {
        return null;
    }
}
export function writeSessionExpert(home, sessionId, attach) {
    const path = sessionExpertPath(home, String(sessionId || ''));
    if (!path)
        throw new Error('invalid session id');
    const payload = {
        id: String(attach.id).trim(),
        skill: String(attach.skill).trim(),
        title: String(attach.title || attach.id).trim(),
        kind: String(attach.kind || 'expert').trim() || 'expert',
        attachedAt: attach.attachedAt || new Date().toISOString(),
    };
    if (!payload.id || !payload.skill)
        throw new Error('attach requires id and skill');
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, `${JSON.stringify(payload, null, 2)}\n`);
    return payload;
}
export function loadSkillBody(home, skill) {
    const dest = join(home, 'skills', skill, 'SKILL.md');
    if (!existsSync(dest))
        return '';
    try {
        return readFileSync(dest, 'utf8');
    }
    catch {
        return '';
    }
}
/**
 * 每步系统提示用的身份段。挂上后跨轮、重启、压缩后都从落盘重读。
 * 空串表示本会话未挂专家，组装时会被丢掉。
 */
export function renderAttachedExpertSection(home, sessionId) {
    const attach = readSessionExpert(home, sessionId);
    if (!attach)
        return '';
    const body = loadSkillBody(home, attach.skill);
    const truncated = body.length > MAX_SKILL_CHARS;
    const skillText = truncated ? `${body.slice(0, MAX_SKILL_CHARS)}\n\n…(instructions truncated; call the skill tool with "${attach.skill}" for the rest)` : body;
    const kindLabel = attach.kind === 'team' ? '专家团' : '专家';
    return [
        `This session has a persistent attached plaza ${kindLabel}: 「${attach.title}」 (catalog id ${attach.id}, skill ${attach.skill}).`,
        'Stay in this role for the rest of the session. Do not plaza_search or recommend a different expert unless the user explicitly asks to switch.',
        'The slash gesture only injects a skill for one step. This attachment is the durable identity: reload it from here even if later user messages omit /skill.',
        skillText
            ? `Follow these expert instructions:\n\n${skillText}`
            : `Expert skill "${attach.skill}" is installed. Call the skill tool with that exact name before acting, then stay in character.`,
    ].join('\n');
}
/** 从工具 exec 抠会话 id；测例可以不传。 */
export function sessionIdFromExec(exec) {
    const agent = exec?.agent;
    const raw = agent?.session?.header?.id ?? agent?.session?.id ?? agent?.id;
    return sanitizeSessionId(raw);
}
