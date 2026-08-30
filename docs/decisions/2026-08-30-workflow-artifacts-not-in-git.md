---
title: "决策：omnimux-workflow 生成物不进 Git，源码为唯一真相"
id: "decision-workflow-artifacts-not-in-git"
type: "decision"
status: "accepted"
authority: "L2"
date: "2026-08-30"
updated: "2026-08-30"
authors: ["x", "agent-architect"]
subsystem: "omnimux-workflow"
tags: ["build", "artifacts", "git", "src-of-truth", "adr"]
supersedes: []
superseded_by: null
related:
  - "docs/contracts/dev-pipeline.md"
  - "docs/contracts/plugin-git-pr.md"
  - "plugins/omnimux-workflow/docs/ARCHITECTURE.md"
---

# 决策：omnimux-workflow 生成物不进 Git，源码为唯一真相

> **权威等级**：L2 | **状态**：`accepted` | **生效日期**：2026-08-30  
> **关联契约**：[dev-pipeline.md](../contracts/dev-pipeline.md)、[plugin-git-pr.md](../contracts/plugin-git-pr.md)

## 背景

`omnimux-workflow` 运行时有两套包：Host（`dist/index.js`，Agent 工具 / `.htable`）与画布 island（`lib/canvas.js`）。分层本身正确。错误的是把 minify 产物当 Git 真相：PR 只合 `src/` 时，仓内 `dist` 仍旧、本机 `sync-to-app` 却是新的，于是出现「再补一刀 dist PR」的假流程。

根 `.gitignore` 已忽略 `dist`，但 `dist/index.js` 曾被 force-track，gitignore 管不到。`omnimux-market` 已用 `prepare` 生成且不入库。

## 裁定

1. Git 只跟踪 `plugins/omnimux-workflow/src/` 与构建脚本。`dist/`、`lib/client.js`、`lib/canvas.js` gitignore，停跟踪。
2. 入口仍是 `package.json` `main` / `dsh.manifest.json` `entrypoint` = `dist/index.js`。生成时机：`prepare`、`npm run build`、`scripts/sync-to-app.sh`（已对 workflow 三件套 build）。
3. CI：`git ls-files` 命中上述路径即失败；另用 `--ignore-scripts` 装 esbuild 后跑 `build-host.mjs`，证明 src→Host 可复现。完整 client/canvas 构建依赖仓外 `dsh-ui-kit`，由本机 `sync-to-app` 覆盖，不在本阶段强行进 GitHub Actions。
4. 禁止为「跟仓」单独提交生成物。其它插件 `lib/client.js` 本阶段仍跟踪（第二阶段再统一）。
5. 画布加载必须带 `?v=<canvasHash>`；hash 变化替换旧 `<script>`。验收见旧 UI 先硬刷新。

## 备选（否决）

- **仍跟踪生成物 + CI 字节对齐**：Git 持续巨大 minify diff，Agent 仍要记得 build。否决。
- **全仓所有插件立刻停跟踪 `lib/client.js`**：爆破面过大。否决，留给后续。

## 后果

新 clone 未 install/build 时没有 `dist/index.js` 是目标态。禁止 `--ignore-scripts` 安装本插件。历史 blob 不重写。
