import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { readSessionExpert, renderAttachedExpertSection, sanitizeSessionId, sessionExpertPath, sessionIdFromExec, writeSessionExpert, } from '../session-attach.js';
function home() {
    return mkdtempSync(join(tmpdir(), 'omx-attach-'));
}
test('sanitizeSessionId rejects path traversal', () => {
    assert.equal(sanitizeSessionId('../etc/passwd'), '');
    assert.equal(sanitizeSessionId('a/b'), '');
    assert.equal(sanitizeSessionId('sess_01.abc-2'), 'sess_01.abc-2');
});
test('write then read persists identity across process', () => {
    const h = home();
    const saved = writeSessionExpert(h, 's1', {
        id: 'exp-product-management',
        skill: 'product-management',
        title: '产品管理专家',
        kind: 'expert',
    });
    assert.equal(saved.id, 'exp-product-management');
    const again = readSessionExpert(h, 's1');
    assert.deepEqual(again, saved);
    assert.equal(sessionExpertPath(h, 's1').endsWith('omnimux-market/sessions/s1.json'), true);
});
test('renderAttachedExpertSection reloads SKILL.md from disk', () => {
    const h = home();
    mkdirSync(join(h, 'skills', 'product-management'), { recursive: true });
    writeFileSync(join(h, 'skills', 'product-management', 'SKILL.md'), '# 产品管理专家\n\n你必须先写问题陈述。\n');
    writeSessionExpert(h, 's2', {
        id: 'exp-product-management',
        skill: 'product-management',
        title: '产品管理专家',
        kind: 'expert',
    });
    const text = renderAttachedExpertSection(h, 's2');
    assert.match(text, /persistent attached plaza 专家/);
    assert.match(text, /exp-product-management/);
    assert.match(text, /你必须先写问题陈述/);
    assert.match(text, /Do not plaza_search/);
});
test('unattached session renders empty so the section is dropped', () => {
    assert.equal(renderAttachedExpertSection(home(), 'nobody'), '');
});
test('sessionIdFromExec reads header.id then agent.id (assemble path)', () => {
    assert.equal(sessionIdFromExec({ agent: { session: { header: { id: 'abc_1' } } } }), 'abc_1');
    assert.equal(sessionIdFromExec({ agent: { id: 'session-9' } }), 'session-9');
    assert.equal(sessionIdFromExec({}), '');
});
