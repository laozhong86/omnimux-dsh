---
title: "plugin-offline-cloud-matrix — 插件离线/云端定界与侧栏动态可见性合同"
id: "contract-plugin-offline-cloud-matrix"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-30"
authors: ["x", "agent-architect"]
subsystem: "global"
---

# plugin-offline-cloud-matrix — 插件离线/云端定界与侧栏动态可见性合同

> 目的：规范 OmniMux 插件在离线（Local/Offline）与云端强依赖（Cloud-dependent）场景下的能力定级、数据源归属、侧栏入口响应式可见性协议及方案 D 游客拦截规则。

## 1. 核心交互铁律 (Core Invariants)

1. **显示入口必然离线可用 (Visible = Offline Capable)**：
   所有在侧边栏保持可见的插件入口，用户必须能够**离线正常点击进入并浏览/使用其本地持久化数据与核心功能**。严禁在入口点击时弹出全屏或前置阻断式的登录窗口。
2. **链接云端数据未登录直接隐藏 (Cloud-Dependent = Hidden When Unauthenticated)**：
   强依赖云端账号、指标、授权与云端服务流的插件，在用户未登录 OmniMux 时，**直接不渲染/隐藏侧栏入口**（保持 DOM 零干扰与侧栏紧凑）；用户登录成功后动态呈现；登出或 401 会话失效后动态隐藏。
3. **方案 D 游客礼貌拦截 (Policy D: Session Suppression)**：
   离线可用插件在进入后，若用户主动触发了需要云端鉴权的写操作（如发起云端大模型生成、调用云端授权接口）而弹出了登录窗口，一旦用户主动点击 ✕ 取消，系统将**在当前会话（Session）内抑制后续页面切换时的导航弹窗**。只有在主动登出或登录态恢复时才重置抑制标记。

## 2. 插件能力定级与数据源矩阵 (Access Matrix)

| 插件标识 (`id`) | 业务入口 | 侧栏 Rank | 数据源与能力特征 | 访问定级 (`access`) | 未登录侧栏表现 | 免登可操作范围 |
|---|---|---|---|---|---|---|
| `omnimux-workflow` | 创作 / 项目 | 5 | 本地 DAG 画布 / 本地 JSON / 项目相对路径资源 | `offline` | **常驻显示** | 本地画布编辑、节点拖拽、离线脚本执行、本地素材管理 |
| `omnimux-assets` | 资产库 | 4 | `$DSH_HOME/omnimux/assets/data/files/` 物理实体化 | `offline` | **常驻显示** | 浏览已下载资产、角色/场景/风格包检视、本地导入 |
| `omnimux-products` | 产品库 | 6 | `$DSH_HOME/omnimux/products/data/` 本地持久化 | `offline` | **常驻显示** | 浏览商品数据、卖点/人群管理、本地图片引用 |
| `omnimux-clip` | 剪辑工坊 | 8.2 | 浏览器内置 WebCodecs/Canvas/WebGPU 渲染管线 | `offline` | **常驻显示** | 多轨时间轴剪辑、波形预览、本地视频导出 |
| `omnimux-analytics` | 数据分析 | 10 | 云端社媒账号多维指标聚合、云端 API 统计 | `cloud` | **未登录隐藏** | 必须登录 OmniMux 云端账号以同步社媒运营数据 |
| `omnimux-publish` | 账号发布中心 | 9 | 云端账号矩阵分发通道、云端 Token 鉴权与台账 | `cloud` | **未登录隐藏** | 必须登录 OmniMux 云端账号以管理授权与发布通道 |
| `omnimux-accounts` | 账号矩阵 | 3 | 云端 OAuth 绑定与多平台凭据中心 | `cloud` | **未登录隐藏** | 必须登录 OmniMux 云端账号以获取跨平台凭据 |
| `omnimux-inspiration` | 灵感素材库 | 7 | 云端公共灵感流与远程 Showcase 实时 Feed | `cloud` | **未登录隐藏** | 必须登录 OmniMux 云端账号以拉取云端公共案例 |

## 3. 侧栏入口动态可见性协议 (Sidebar Visibility Protocol)

`dsh-ui-kit` 中的 `createSidebarEntry` 是全量侧栏额外入口的唯一标准构造器。

### 3.1 选项扩展规范

```ts
export interface SidebarEntryOptions {
  id: string
  rank: number
  label: string | (() => string)
  iconSvg: string
  stageStore: StageStore
  locale?: { subscribe?: (fn: () => void) => () => void }
  customClassName?: string
  datasetKey?: string
  /**
   * 插件数据源与访问定级 (默认 'offline')
   * - 'offline': 入口常驻显示，点击直接打开 Stage
   * - 'cloud': 强依赖云端；未登录时 entry 隐藏 (display: none)，登录后自动呈现
   */
  access?: 'offline' | 'cloud'
  /** @deprecated 请使用 access 替代；旧参数保留向前兼容 */
  requireAuth?: boolean
  authReason?: string | (() => string)
}
```

### 3.2 动态显隐生命周期

1. **初始化挂载**：
   - 若 `access === 'offline'`，节点正常渲染并由 `SidebarCoordinator` 统一布局；
   - 若 `access === 'cloud'`，探测 `window.__omnimuxAuth` 缓存与快照。若 `logged_in !== true`，赋予样式 `.omnimux-sidebar-nav-entry-hidden`（`display: none !important;`）。
2. **响应式监听**：
   - 订阅 `window.__omnimuxAuth.subscribe`；
   - 监听到鉴权状态切换时，重新执行 `syncVisibility()` 并触发 Coordinator 的 `placeAll()`；
3. **销毁与退订**：
   - 当插件卸载时，自动清理 `__omnimuxAuth` 订阅与 DOM 节点。

## 4. 鉴权网关方案 D 会话抑制契约 (Policy D Implementation)

在 `plugins/omnimux/src/client/auth-gate.js` 中：

1. **策略常量激活**：
   ```js
   export const AUTH_GATE_POLICY = Object.freeze({
     gateNavigation: true,
     suppressNavigationAfterCancel: true, // 方案 D 激活
   })
   ```
2. **抑制状态机**：
   - 当用户在弹窗中点击 ✕（触发 `cancel()`）时，置位 `navSuppressed = true`；
   - 当收到导航性质的 `ensureLogin({ kind: 'nav' })` 且 `navSuppressed === true` 时，直接短路放行 `onSuccess()`，不将门打到 `prompt` 或发起 HTTP 探测；
   - 写操作 `ensureLogin({ kind: 'write' })` 依然保持严格拦截；
   - 触发登出（`rememberLoggedOutStatus`）或收到后端 401 时，重置 `navSuppressed = false`。
