import assert from 'node:assert/strict';
import test from 'node:test';
import { HttpError } from '../http.js';
import { clearEvalScoreMemo, dimScore, evalScoreMemoSize, fetchEvalScore, fetchSkillTab, overallScore, resetEvalNow, setEvalNow } from '../skill-detail.js';
import { withDefaults } from '../config-store.js';
test('TRACE scores average item scores', () => {
    const dims = {
        trust: { items: { a: { score: 5 }, b: { score: 4 } } },
        reliability: { items: { a: { score: 4 } } },
    };
    assert.equal(dimScore(dims.trust), 4.5);
    assert.equal(overallScore(dims), 4.3);
    assert.equal(dimScore(null), null);
    assert.equal(overallScore(undefined), null);
});
test('fetchSkillTab versions sanitize payload', async () => {
    const versions = await fetchSkillTab('demo', 'versions', testCfg(), {
        fetchJson: async () => ({
            versions: [
                { version: '1.0.2', changelog: 'Initial release', createdAt: 1782461490627 },
                { version: '1.0.1', changelog: 'fix', createdAt: 1 },
            ],
        }),
    });
    assert.equal(versions.versions.length, 2);
});
test('fetchEvalScore returns overall TRACE score', async () => {
    clearEvalScoreMemo();
    const score = await fetchEvalScore('ima-skills', testCfg(), {
        fetchJson: async () => ({
            dimensions: {
                trust: { items: { a: { score: 5 }, b: { score: 4 } } },
                reliability: { items: { a: { score: 4.6 } } },
                adaptability: { items: { a: { score: 4.4 } } },
                convention: { items: { a: { score: 4.5 } } },
                effectiveness: { items: { a: { score: 4.9 } } },
            },
        }),
    });
    assert.equal(score, 4.6);
});
test('fetchEvalScore memos by slug within TTL', async () => {
    clearEvalScoreMemo();
    let now = 1_000;
    setEvalNow(() => now);
    let calls = 0;
    const deps = {
        fetchJson: async () => {
            calls += 1;
            return {
                dimensions: { trust: { items: { a: { score: 5 } } } },
            };
        },
    };
    try {
        const a = await fetchEvalScore('memo-slug', testCfg(), deps);
        const b = await fetchEvalScore('memo-slug', testCfg(), deps);
        assert.equal(a, 5);
        assert.equal(b, 5);
        assert.equal(calls, 1);
        assert.equal(evalScoreMemoSize(), 1);
        now += 21 * 60 * 1000;
        await fetchEvalScore('memo-slug', testCfg(), deps);
        assert.equal(calls, 2);
    }
    finally {
        resetEvalNow();
        clearEvalScoreMemo();
    }
});
test('fetchEvalScore returns null when missing', async () => {
    clearEvalScoreMemo();
    const score = await fetchEvalScore('demo-missing-eval', testCfg(), {
        fetchJson: async () => {
            throw new HttpError('HTTP 404', 404);
        },
    });
    assert.equal(score, null);
});
test('fetchSkillTab evaluation missing becomes null', async () => {
    const result = await fetchSkillTab('demo', 'evaluation', testCfg(), {
        fetchJson: async () => {
            throw new HttpError('HTTP 404', 404);
        },
    });
    assert.equal(result.evaluation, null);
});
test('fetchSkillTab evaluation sanitizes and truncates text', async () => {
    const result = await fetchSkillTab('demo', 'evaluation', testCfg(), {
        fetchJson: async () => ({
            userSummary: 's'.repeat(2000),
            dimensions: {
                trust: {
                    userReason: 'r'.repeat(2000),
                    items: { a: { score: 4, userReason: 'i'.repeat(800) } },
                },
            },
        }),
    });
    const ev = result.evaluation;
    assert.equal(ev.userSummary.length, 1200);
    assert.equal(ev.dimensions.trust.userReason.length, 1200);
    assert.equal(ev.dimensions.trust.items.a.userReason.length, 400);
    assert.equal(ev.score, 4);
});
test('fetchSkillTab evaluation rethrows non-404 errors', async () => {
    await assert.rejects(() => fetchSkillTab('demo', 'evaluation', testCfg(), {
        fetchJson: async () => {
            throw new HttpError('HTTP 500', 500);
        },
    }), /HTTP 500/);
});
test('fetchSkillTab versions cap changelog length', async () => {
    const versions = await fetchSkillTab('demo', 'versions', testCfg(), {
        fetchJson: async () => ({
            versions: [{ version: '2.0.0', changelog: 'c'.repeat(800), createdAt: 'bad' }],
        }),
    });
    const first = versions.versions[0];
    assert.equal(first.changelog.length, 500);
    assert.equal(first.createdAt, 0);
});
test('fetchSkillTab rejects unknown tab', async () => {
    await assert.rejects(() => fetchSkillTab('demo', 'comments', testCfg(), {
        fetchJson: async () => ({}),
    }), /未知 tab/);
});
function testCfg() {
    return withDefaults({ timeoutMs: 5000, userAgent: 'test' });
}
