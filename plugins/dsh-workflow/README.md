# dsh-workflow

DeepSeek Harness（dsh）的工作流无限画布插件：拖拽节点、连线成 DAG、编排多模态生成任务。画布自身零模型 API 调用——所有生成经 OmniMux 执行中枢的 seam 提交（M4 接通）；数据 100% 本地文件。

## 安装

```bash
# 本地源码位于 product/omnimux-dsh/plugins/dsh-workflow/
cd /path/to/dsh-workflow
npm install        # 同时触发 prepare = 三 bundle 构建
npm run build      # 手动重建：dist/index.js + lib/client.js + lib/canvas.js
```

### Profile 方式加载（dsh 标准安装形态）

在目标 profile（如 `~/.dsh/profiles/<name>/package.json`）中：

```jsonc
{
  "dependencies": {
    "dsh-workflow": "link:/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh/plugins/dsh-workflow"
  },
  "dsh": { "profile": { "bundles": [ /* ...既有 bundles... */ "dsh-workflow" ] } }
}
```

然后 `pnpm install` + 重启 dsh web。

**M1 已验证的部分**（不依赖完整 harness 启动）：
- host 面：`dist/index.js` 按 cordis 契约导出 `name/inject/apply`，`apply(ctx)` 经真实 HTTP handler 冒烟测试（5/5 通过：快照 CRUD、乐观锁 409、跨域写拒绝、媒体防穿越、能力目录）
- client 面：`lib/client.js` 在 ModuleLoader 契约 shim 下评估通过，`apply(ctx)` 正确注册 locale / shell.overlay slot / 侧边栏条目
- manifest 结构与已上线的 dsh-omnimux-assets 插件逐字段对齐（main/exports/dsh.bundle.patch/dsh.client.inject/cordis.patch.yml）

**待现场验证**：在真实 profile 中 `pnpm install` 并启动 dsh web 后，侧边栏出现「工作流」条目、画布可打开（需要完整 harness 运行时）。

## 打开画布

1. dsh web 侧边栏「新会话」下方出现「工作流」条目（32/14/14 规格行）
2. 点击条目 → 全屏 claim product-stage（`dsh-workflow`）→ 首次打开时懒加载画布 island（`GET /dsh-workflow/canvas.js`，内容 hash 缓存戳）
3. 画布内：左侧工具栏添加素材节点（文本/图片/视频/音频）→ 选中节点展开配置面板（prompt + 模型 + 执行 stub）→ 悬停节点出现锚点拖线（类型校验 + 环检测）→ 右上角「保存」落盘快照（乐观锁）

## 架构速览

```
┌ dsh web（宿主 React 18）────────────────────────┐
│ sidebar-entry ── shell.overlay slot             │
│      └ WorkflowStage（React 18 chrome）          │
│           └ CanvasBridge ── DOM 容器 + plain props│
├ ────────────────── React 边界（硬规则）──────────┤
┌ canvas island（自带 React 19.2.8，懒加载）──────┐
│ React Flow 画布 + MaterialNode + canvasStore     │
│ 连接校验链（Gxgen 移植） + --wb-* 主题变量层      │
├ HTTP /dsh-workflow/*（同源 fetch）──────────────┤
┌ host（Node，dist/index.js，零运行时三方依赖）───┐
│ WorkspaceStore（快照 + 乐观锁 + 原子写）          │
│ 扩展点：执行器注册表 / GenerationGateway(mock)   │
└ 磁盘 $DSH_HOME/omnimux/workflow/ ──────────────┘
```

详见 `docs/ARCHITECTURE.md` 与 `docs/contracts/`。

## 命令

| 命令 | 作用 |
|---|---|
| `npm run build` | 三 bundle 构建（host/client/canvas） |
| `npm run typecheck` | tsc -b（canvas + host 双 project，strict） |
| `npm run dev` | esbuild watch，改码 1-2s 重建，刷新 dsh web 生效 |
| `npm test` | host 冒烟测试（node --test） |

## 已知限制（M1）

- 执行按钮是 stub（模拟 generating→completed）；真实 ExecutionScheduler 与 OmniMux seam 在 M3/M4 交付
- 保存为手动按钮；M2 换 debounce 自动保存 + 409 冲突合并 UX
- 能力目录为静态 stub；M4 起来自 OmniMux 能力发现
- React DevTools 双 root（宿主 18 + island 19）为预期现象
