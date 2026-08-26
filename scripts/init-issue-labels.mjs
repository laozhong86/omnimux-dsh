#!/usr/bin/env node
/**
 * scripts/init-issue-labels.mjs
 * Initialize standard GitHub Issue labels for omnimux-dsh Agent workflows.
 * Contract: docs/contracts/agent-issue-lifecycle.md
 */

import { execSync } from 'node:child_process';

const LABELS = [
  // Status labels
  { name: 'status:triage', color: 'ededed', description: '待需求定界与查重 (许清楚)' },
  { name: 'status:planning', color: 'd4c5f9', description: '架构设计与扩展点选型中 (高见远)' },
  { name: 'status:in-progress', color: 'fbca04', description: '专属 Worktree 隔离编码与单测中 (林深)' },
  { name: 'status:qa-review', color: '0e8a16', description: 'PR 已发起，五维质检验收中 (严过关)' },
  { name: 'status:ready-for-boss', color: '1d76db', description: 'QA 验收放行，等待老板审查合入' },

  // Track labels
  { name: 'track:A-dynamic', color: 'bfd4f2', description: 'Track A: 动态轻量插件 / 临时工具' },
  { name: 'track:B-stage', color: '5319e7', description: 'Track B: OmniMux 产品级 Stage 一级页' },
  { name: 'track:C-service', color: '1d76db', description: 'Track C: 标准服务与通用工具包' },
  { name: 'track:D-patch', color: 'd93f0b', description: 'Track D: 增量热修与版本迭代' },

  // QA verdicts
  { name: 'qa:pass', color: '0e8a16', description: '严过关五维立体验收通过 (PASS)' },
  { name: 'qa:changes-requested', color: 'b60205', description: '严过关五维验收打回，需修复' },

  // Priority
  { name: 'priority:P0', color: 'b60205', description: '最高优先级 / 阻断性故障' },
  { name: 'priority:P1', color: 'e99695', description: '常规需求 / 核心特性' },
  { name: 'priority:P2', color: 'fef2c0', description: '低优先级 / 优化改进' },
];

const REPO = 'laozhong86/omnimux-dsh';

console.log(`[init-labels] Starting label initialization for ${REPO}...`);

for (const label of LABELS) {
  try {
    // Attempt to create label or update if exists
    execSync(
      `gh label create "${label.name}" --repo "${REPO}" --color "${label.color}" --description "${label.description}" --force`,
      { stdio: 'inherit' }
    );
    console.log(`✓ Synchronized label: ${label.name}`);
  } catch (err) {
    console.warn(`! Failed to create/update label "${label.name}":`, err.message);
  }
}

console.log('[init-labels] Done.');
