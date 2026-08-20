# Changelog

本项目遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/) 格式。

## [0.1.0] - 2026-08-20 — M1 脚手架 + 画布壳

### 新增
- 四区目录（client / canvas / host / shared）+ esbuild 三 bundle 构建流水线（host / client / canvas）
- React 19 island 桥（方案 α）：CanvasBridge（宿主 React 18 壳）→ `__dshWorkflowCanvas` IIFE global（自带 React 19.2.8）；桥接只过 DOM + plain props
- 画布内核（Gxgen 移植，spike 验证口径）：React Flow 容器 + MaterialNode 骨架 + canvasStore Graph slice + 连接校验链 4 文件（类型矩阵 / 环检测 / mutation gateway）
- `--wb-*` 主题变量层映射 dsh 蓝 `#4176E6`（`--dsw-static-deepseek-500` fallback 链）+ `body[data-ds-dark-theme]` 暗色跟随
- Host：`/dsh-workflow/*` HTTP 路由（工作区 CRUD + 乐观锁 409 + 岛 bundle 下发 + 媒体静态路由防穿越）+ `$DSH_HOME/omnimux/workflow/` 文件持久化（zod 构建期打包、原子写）
- 三处扩展点脚手架：节点类型注册表（client）、执行器注册表（host）、GenerationGateway 接口 + mock 实现
- 侧边栏「工作流」条目（32/14/14 规格，双 MutationObserver 挂载）+ shell.overlay 一级页面 + product-stage claim

### α 验证（React 19 island，双 React 验证页实测）
- ✅ 双 React 同 document 共存：React 18.2 宿主树（计数器/受控输入）与 React 19 island（xyflow 画布 + antd 组件）互不干扰，全程零 console 错误
- ✅ xyflow 交互：节点尺寸/拖线成边/环检测拒绝均正常
- ✅ 暗色主题跟随（body[data-ds-dark-theme] 切换 island CSS 变量实测变化）
- ✅ island 生命周期与持久化闭环：unmount/remount 后工作区从快照恢复；保存走 PUT 乐观锁（v0→v1）
- ⏳ React DevTools 双 root 检查与 200 节点性能基线待真实 dsh 宿主环境（M2 前置项）

### 修复（构建/测试过程中发现）
- esbuild text-loader 会吞掉 CSS import：`@xyflow/react/dist/style.css` 必须与主题 CSS 一起在 island 入口手动注入 `<style>`（Vite 自动注入、esbuild 不会——spike 未暴露此差异）
- snapshotSchema 一处 `z.boolean().optional` 漏写调用括号（zod 报「expected a Zod schema」）
- host bundle 内插件根目录解析需同时兼容 dist（上溯一层）与源码（上溯三层）两种布局

### 已知限制
- 执行按钮为 stub；能力目录为静态 stub；保存为手动按钮（见 README）
