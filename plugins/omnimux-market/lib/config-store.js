import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
const SORTS = ['score', 'downloads', 'stars', 'installs', 'updated_at'];
export function dshHome() {
    return process.env.DSH_HOME || join(homedir(), '.dsh');
}
export function defaultSkillsDir() {
    return join(dshHome(), 'skills');
}
export function overlayPath() {
    return join(dshHome(), 'omnimux-market.json');
}
export function sanitizeSortBy(raw, fallback = 'score') {
    const value = String(raw || '').trim();
    return SORTS.includes(value) ? value : fallback;
}
export function publicConfig(cfg) {
    return {
        apiBase: cfg.apiBase,
        webBase: cfg.webBase,
        skillsDir: cfg.skillsDir,
        timeoutMs: cfg.timeoutMs,
        maxResults: cfg.maxResults,
        sortBy: cfg.sortBy,
        plazaKeepAlive: cfg.plazaKeepAlive,
        plazaCacheTtlSec: cfg.plazaCacheTtlSec,
    };
}
export function readOverlay() {
    try {
        const raw = JSON.parse(readFileSync(overlayPath(), 'utf8'));
        return sanitizePatch(raw);
    }
    catch {
        return {};
    }
}
export function writeOverlay(cfg) {
    const path = overlayPath();
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, `${JSON.stringify(publicConfig(cfg), null, 2)}\n`);
}
export function sanitizePatch(raw) {
    const out = {};
    if (typeof raw.apiBase === 'string' && /^https?:\/\//i.test(raw.apiBase.trim()))
        out.apiBase = raw.apiBase.trim().replace(/\/$/, '');
    if (typeof raw.webBase === 'string' && /^https?:\/\//i.test(raw.webBase.trim()))
        out.webBase = raw.webBase.trim().replace(/\/$/, '');
    if (typeof raw.skillsDir === 'string' && raw.skillsDir.trim())
        out.skillsDir = raw.skillsDir.trim();
    if (typeof raw.userAgent === 'string' && raw.userAgent.trim())
        out.userAgent = raw.userAgent.trim();
    const timeout = Number(raw.timeoutMs);
    if (Number.isFinite(timeout) && timeout >= 3000)
        out.timeoutMs = Math.min(timeout, 120000);
    const max = Number(raw.maxResults);
    if (Number.isFinite(max) && max >= 1)
        out.maxResults = Math.min(Math.floor(max), 80);
    if (raw.sortBy !== undefined)
        out.sortBy = sanitizeSortBy(raw.sortBy);
    if (typeof raw.plazaKeepAlive === 'boolean')
        out.plazaKeepAlive = raw.plazaKeepAlive;
    else if (raw.plazaKeepAlive === 'false' || raw.plazaKeepAlive === 0)
        out.plazaKeepAlive = false;
    else if (raw.plazaKeepAlive === 'true' || raw.plazaKeepAlive === 1)
        out.plazaKeepAlive = true;
    const ttl = Number(raw.plazaCacheTtlSec);
    if (Number.isFinite(ttl) && ttl >= 15)
        out.plazaCacheTtlSec = Math.min(Math.floor(ttl), 600);
    return out;
}
export function assignConfig(live, patch) {
    if (patch.apiBase)
        live.apiBase = patch.apiBase;
    if (patch.webBase)
        live.webBase = patch.webBase;
    if (patch.skillsDir)
        live.skillsDir = patch.skillsDir;
    if (patch.userAgent)
        live.userAgent = patch.userAgent;
    if (patch.timeoutMs != null)
        live.timeoutMs = patch.timeoutMs;
    if (patch.maxResults != null)
        live.maxResults = patch.maxResults;
    if (patch.sortBy)
        live.sortBy = patch.sortBy;
    if (patch.plazaKeepAlive != null)
        live.plazaKeepAlive = patch.plazaKeepAlive;
    if (patch.plazaCacheTtlSec != null)
        live.plazaCacheTtlSec = patch.plazaCacheTtlSec;
    return live;
}
export function withDefaults(config) {
    return {
        apiBase: config.apiBase || 'https://api.skillhub.cn',
        webBase: config.webBase || 'https://skillhub.cn',
        skillsDir: config.skillsDir || defaultSkillsDir(),
        timeoutMs: config.timeoutMs || 20000,
        userAgent: config.userAgent || 'Mozilla/5.0 (compatible; skillhub/0.1)',
        maxResults: config.maxResults || 12,
        sortBy: sanitizeSortBy(config.sortBy, 'score'),
        plazaKeepAlive: config.plazaKeepAlive !== false,
        plazaCacheTtlSec: Number.isFinite(Number(config.plazaCacheTtlSec)) && Number(config.plazaCacheTtlSec) >= 15
            ? Math.min(Math.floor(Number(config.plazaCacheTtlSec)), 600)
            : 90,
    };
}
