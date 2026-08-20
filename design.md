# OmniMux 插件系列设计规范 —— x.ai 品牌语言的设计令牌落地（v1.0）

> 品牌参考：[x.ai DESIGN.md](https://github.com/ricocc/brands-design-md/tree/master/brands/x.ai)（2026-08-01 对官网校验，验证主题为 light）。
> 适用范围：本仓库（omnimux-dsh）内全部带 Web 客户端的插件——`plugins/omnimux`（hub 壳层与货架页）、`plugins/omnimux-accounts`、`plugins/omnimux-assets`、`plugins/omnimux-workflow`，及后续新插件。`plugins/dsh-drama` 现为纯域层，一旦新增 UI 同样遵循。
> 本文件是该规范的唯一事实源（触发场景与索引见 `AGENTS.md`）；与旧实现冲突时以本文为准。

---

## 1. x.ai 品牌设计语言提取

### 1.1 视觉基调

**白纸黑字的编辑式极简**：白画布、近黑墨色、大留白、发丝线（hairline）分隔。层级来自字号、间距与规则线，而非颜色和阴影。主操作反转为实心黑色胶囊按钮；技术数据用等宽字体。整体气质：精密、自信、产品优先。

核心关键词：`极简` `单色` `发丝线` `编辑式留白` `产品优先`

**对 OmniMux 工作台的两点适配**（品牌规范面向营销页，插件是密集工作台 UI）：

1. 密度：营销页的 spacious（96/128px 节奏）压缩为工作台节奏（区块 24/32px，行高 40px），保留 `--omx-space-*` 全阶梯供空态、引导页使用。
2. display 大字阶（96/72/48px）保留为令牌，但仅用于空态与引导场景；工作台信息层级从 `title`（24px）起步。

### 1.2 色彩体系

x.ai 验证主题为 light。dark 为本规范推导的反转单色系（与 x.ai 暗色页面行为一致：黑底白字、白色胶囊按钮）。

**Light（品牌原始值）**

| 令牌 | 值 | 用途 |
|---|---|---|
| `--omx-color-canvas` | `#ffffff` | 页面/面板主背景 |
| `--omx-color-canvas-soft` | `#f7f7f7` | 交替带、代码面板、次级背景 |
| `--omx-color-canvas-raised` | `#fbfbfb` | 轻微浮起/内嵌表面 |
| `--omx-color-ink` | `#0a0a0a` | 标题、主文本、焦点环 |
| `--omx-color-ink-soft` | `#1f1f1f` | 密集正文、代码文本 |
| `--omx-color-body` | `#4b4b4b` | 辅助段落、次级文本 |
| `--omx-color-muted` | `#848484` | 导航、标签、元数据、占位符 |
| `--omx-color-hairline` | `#dbdbdb` | 描边、分隔线、组件边界 |
| `--omx-color-hairline-strong` | `#bfbfbf` | 悬停描边、强调分隔 |
| `--omx-color-primary` | `#0a0a0a` | 主按钮填充、最高强调 |
| `--omx-color-primary-hover` | `#242424` | 黑色填充控件悬停 |
| `--omx-color-on-primary` | `#ffffff` | 黑色控件上的文字图标 |
| `--omx-color-interactive-hover` | `rgba(10,10,10,.05)` | 行/列表悬停 |
| `--omx-color-interactive-active` | `rgba(10,10,10,.09)` | 行/列表选中 |
| `--omx-color-overlay` | `rgba(10,10,10,.40)` | 对话框遮罩 |

**Dark（推导值）**

| 令牌 | 值 | 备注 |
|---|---|---|
| `--omx-color-canvas` | `#0a0a0a` | |
| `--omx-color-canvas-soft` | `#131313` | |
| `--omx-color-canvas-raised` | `#171717` | |
| `--omx-color-ink` | `#ffffff` | 焦点环随 ink 反转为白 |
| `--omx-color-ink-soft` | `#ebebeb` | |
| `--omx-color-body` | `#b4b4b4` | |
| `--omx-color-muted` | `#7c7c7c` | |
| `--omx-color-hairline` | `#242424` | |
| `--omx-color-hairline-strong` | `#3d3d3d` | |
| `--omx-color-primary` | `#ffffff` | 主按钮反转为白胶囊 |
| `--omx-color-primary-hover` | `#ebebeb` | |
| `--omx-color-on-primary` | `#0a0a0a` | |
| `--omx-color-interactive-hover` | `rgba(255,255,255,.07)` | |
| `--omx-color-interactive-active` | `rgba(255,255,255,.13)` | |
| `--omx-color-overlay` | `rgba(0,0,0,.60)` | |

**功能性语义色（唯一允许的彩色例外）**：x.ai 严格单色，但工作台需要状态标识。仅限状态 Chip、行内错误提示使用，禁止大面积填充：

| 令牌 | light | dark | 用途 |
|---|---|---|---|
| `--omx-color-success` | `#15803d` | `#4ade80` | 扫描完成、同步成功 |
| `--omx-color-warning` | `#b45309` | `#fbbf24` | 只读降级、部分失败 |
| `--omx-color-error` | `#b91c1c` | `#f87171` | 扫描错误、删除确认 |
| `--omx-color-on-error` | `#ffffff` | `#0a0a0a` | error 填充上的文字 |

### 1.3 字体排版

| 字族 | 栈（`--omx-font-sans` / `--omx-font-mono`） |
|---|---|
| 主字体 | `'Universal Sans','Inter',system-ui,-apple-system,'PingFang SC','Microsoft YaHei',sans-serif`（中文回退必须保留） |
| 等宽 | `'Geist Mono','IBM Plex Mono',ui-monospace,SFMono-Regular,Menlo,monospace` |

字阶（x.ai 原始值，`font` 简写令牌 = `weight size/line-height family`）：

| 角色 | 令牌 | 定义 | letter-spacing |
|---|---|---|---|
| display-xl | `--omx-text-display-xl` | `600 96px/96px var(--omx-font-sans)` | `-3.2px`（`--omx-ls-display-xl`） |
| display-lg | `--omx-text-display-lg` | `600 72px/76px var(--omx-font-sans)` | `-2.2px` |
| display-md | `--omx-text-display-md` | `600 48px/52px var(--omx-font-sans)` | `-1.4px` |
| display-sm | `--omx-text-display-sm` | `600 32px/38px var(--omx-font-sans)` | `-0.7px` |
| title | `--omx-text-title` | `600 24px/30px var(--omx-font-sans)` | `-0.3px` |
| title-sm | `--omx-text-title-sm` | `600 18px/28px var(--omx-font-sans)` | `0` |
| body-lg | `--omx-text-body-lg` | `400 18px/28px var(--omx-font-sans)` | `0` |
| body-md | `--omx-text-body-md` | `400 16px/24px var(--omx-font-sans)` | `0` |
| body-sm | `--omx-text-body-sm` | `400 14px/20px var(--omx-font-sans)` | `0` |
| label | `--omx-text-label` | `500 13px/16px var(--omx-font-sans)` | `0` |
| action | `--omx-text-action` | `500 14px/20px var(--omx-font-sans)` | `0` |
| code | `--omx-text-code` | `400 13px/20px var(--omx-font-mono)` | `0` |

字重只用 400 / 500 / 600 三档。display 级负字距必须与对应 `--omx-ls-*` 令牌成对使用。

### 1.4 间距 / 圆角 / 布局

**间距阶梯**：`--omx-space-2xs:2px`（表格密度扩展档）｜`xs:4`｜`sm:8`｜`md:12`｜`lg:16`｜`xl:24`｜`2xl:32`｜`3xl:48`｜`4xl:64`｜`5xl:96`｜`6xl:128`（px）

**圆角**：`--omx-radius-none:0`｜`sm:8px`｜`md:12px`｜`lg:16px`｜`xl:24px`｜`pill:9999px`。
规则：**pill 只给按钮和 Chip**；面板/表格/输入框用 `md`，对话框用 `lg`，卡片容器用 `lg` 或 `xl`。

**布局令牌**：`--omx-max-content:1280px`｜`--omx-reading-width:760px`｜`--omx-section-gap:96px`（空态/引导用）｜`--omx-card-padding:24px`｜`--omx-element-gap:16px`

### 1.5 深度哲学：发丝线优先，无投影

品牌层级来自 hairline 分隔，不靠阴影。全系统只有一个阴影令牌，仅用于浮层：

| 令牌 | light | dark |
|---|---|---|
| `--omx-shadow-overlay` | `0 8px 24px rgba(10,10,10,.08), 0 1px 2px rgba(10,10,10,.06)` | `0 8px 24px rgba(0,0,0,.48), 0 1px 2px rgba(0,0,0,.40)` |

Z 轴：`--omx-z-sticky:10`｜`--omx-z-overlay:100`｜`--omx-z-modal:200`｜`--omx-z-toast:300`

焦点环（品牌规范）：`--omx-focus-ring: 2px solid var(--omx-color-ink)`，`--omx-focus-ring-offset: 2px`，随模式自动反色。

动效：`--omx-motion-fast:120ms`｜`--omx-motion-base:180ms`｜`--omx-motion-ease:cubic-bezier(.2,.4,.6,1)`；按钮按下 `transform: scale(0.98)`。

---

## 2. 设计令牌体系：命名规则与层级结构

### 2.1 命名规则

```
--omx-{类别}-{名称}[-{变体}][-{状态}]
```

- 前缀统一 `--omx-`，全小写，连字符分词，禁止驼峰，总段数 ≤ 5。
- **类别枚举**：`color` `text` `font` `ls` `space` `radius` `border` `shadow` `z` `motion` `layout`（layout 仅上节布局令牌）。
- **状态后缀**（仅交互令牌）：`-hover` `-active` `-selected` `-disabled`。
- **插件扩展令牌**：`--omx-{插件域}-*`，插件域 ∈ `assets` `accounts` `workflow` `drama` …（如 `--omx-assets-chip-bg`）。
- JS 侧镜像常量放 `plugins/omnimux-theme/src/tokens.js`（如 `tokens.color.ink`），仅用于生成 CSS 与测试；**组件代码禁止内联任何色值字面量**。

### 2.2 四层层级

```
L0 调色板      文档 + tokens.js 常量，不输出 CSS 变量，组件禁止直接消费
   ↓
L1 语义令牌    共享主题层输出（.omx-scope），即 §1 全部令牌，双模式
   ↓
L2 组件令牌    共享组件类（.omx-btn 等，随 omnimux-theme 分发）
              + 插件扩展令牌（--omx-{域}-*，只准 var() 引用 L1）
   ↓
L3 组件实现    插件 JSX/样式，只消费 L2/L1，禁止裸值
```

**铁律**：值只能向下引用，不能向上；同一条 CSS 属性禁止混用 `--dsw-*` 与 `--omx-*`。

---

## 3. 共享主题层与插件扩展层

### 3.1 共享模块 `plugins/omnimux-theme`

pnpm 工作区纯客户端库包（无 cordis 注册，不进 cordis.patch.yml），被各插件作为依赖引入、由各插件自己的 esbuild 打包。

```
plugins/omnimux-theme/
  package.json            # name: omnimux-theme, type: module, peerDeps: react(optional)
  src/tokens.js           # L0 常量 + L1 令牌表（单一事实源，light/dark 双值对象）
  src/theme.css.js        # 由 tokens.js 生成 <style> 文本（幂等，id=omnimux-theme）
  src/install.js          # installOmniMuxTheme() 安装器（见 §4.1）
  src/components.js       # 共享组件类样式（.omx-btn/.omx-table/.omx-chip/...）
  src/index.js            # 导出 install / uninstall / tokens / getMode
  src/index.test.js       # node --test：双值完备性、命名正则、CSS 生成快照
```

**共享层职责**：L1 全量令牌 + 通用组件类 + 明暗模式安装器 + 令牌测试。**不做**：任何业务组件、任何插件专属令牌。

### 3.2 插件扩展层规则

1. 扩展令牌挂在插件自己 stage 根节点（`.omx-scope` 之内），命名 `--omx-{域}-*`。
2. 值必须 `var()` 引用 L1/L2，例如 `--omx-assets-chip-bg: var(--omx-color-canvas-soft)`；写裸值 = 违规。
3. 扩展令牌在插件内也须双模式（引用 L1 时自动继承；确需特判时在 `[data-omx-mode="dark"]` 下重声明，仍引用 L1）。
4. 出现第二次复用的样式必须上提为共享组件类；禁止插件间互相 import 对方的样式。

### 3.3 与宿主壳（`--dsw-*`）的边界

- **默认策略（阶段 1–2）**：插件 UI 完全走 `--omx-*`，不再读 `--dsw-alias-*`。视觉上插件 stage 形成 x.ai 风格岛，宿主壳保持原样。
- **可选终态（阶段 3，需老板拍板）**：通过宿主主题服务把整个壳的别名层也染成 x.ai 调色板（OmniMux 桌面本来就全由本系列插件构成，全壳统一是合理终态）：

```js
// 注册进宿主 theme 服务（ctx.theme.overrideTokens，天然双模式、可整体卸载）
ctx.theme.overrideTokens('omnimux-xai', {
  '--dsw-alias-bg-primary':          { light: '#ffffff', dark: '#0a0a0a' },
  '--dsw-alias-bg-secondary':        { light: '#f7f7f7', dark: '#131313' },
  '--dsw-alias-border':              { light: '#dbdbdb', dark: '#242424' },
  '--dsw-alias-label-primary':       { light: '#0a0a0a', dark: '#ffffff' },
  '--dsw-alias-label-secondary':     { light: '#4b4b4b', dark: '#b4b4b4' },
  '--dsw-alias-label-primary-inverted': { light: '#ffffff', dark: '#0a0a0a' },
  '--dsw-alias-interactive-bg-hover':   { light: 'rgba(10,10,10,.05)',  dark: 'rgba(255,255,255,.07)' },
  '--dsw-alias-interactive-bg-active':  { light: 'rgba(10,10,10,.09)',  dark: 'rgba(255,255,255,.13)' },
  '--dsw-alias-button-primary-fill':    { light: '#0a0a0a', dark: '#ffffff' },
  '--dsw-alias-button-primary-hover':   { light: '#242424', dark: '#ebebeb' },
})
```

桥接后插件侧无需改动——`--omx-*` 与 `--dsw-*` 两套值同源，视觉自然连续。

---

## 4. 暗色 / 亮色模式适配策略

### 4.1 模式信号与安装器

模式解析优先级：**宿主主题服务 > 系统偏好 > light**。宿主 `theme` 服务已把 `system` 解析为具体 `colorScheme` 并在变化时发 `theme/change` 事件；无宿主环境（独立预览、单测）退回 `matchMedia`。

```js
// plugins/omnimux-theme/src/install.js（骨架）
export function installOmniMuxTheme({ scope, ctx }) {
  injectSharedStyles()                       // 幂等 <style id="omnimux-theme">
  scope.classList.add('omx-scope')
  const apply = (mode) => { scope.dataset.omxMode = mode }   // 'light' | 'dark'

  let dispose = () => {}
  if (ctx?.theme) {                          // 首选：宿主主题服务
    apply(ctx.theme.getTheme().active.colorScheme)
    dispose = ctx.on('theme/change', (snap) => apply(snap.active.colorScheme))
  } else {                                   // 兜底：系统偏好
    const mq = matchMedia('(prefers-color-scheme: dark)')
    apply(mq.matches ? 'dark' : 'light')
    const onChange = () => apply(mq.matches ? 'dark' : 'light')
    mq.addEventListener('change', onChange)
    dispose = () => mq.removeEventListener('change', onChange)
  }
  return () => { dispose(); scope.classList.remove('omx-scope'); delete scope.dataset.omxMode }
}
```

插件接入（以 omnimux-assets 为例）：

```js
// plugins/omnimux-assets/src/client/index.js
ctx.effect(() => installOmniMuxTheme({ scope: stageEl, ctx }), 'omnimux-assets: omnimux theme')
```

### 4.2 令牌层规则

1. **双值强制**：每个颜色/阴影/遮罩令牌都有 light 与 dark 两套定义（见 §1.2、§1.5）；提交时 `tokens.js` 测试强制校验双值完备，缺一即失败。
2. **非颜色令牌模式无关**：字号、间距、圆角、z 轴、动效在两种模式下取值相同。
3. **CSS 组织**：light 值定义在 `.omx-scope`，dark 值整体重声明在 `.omx-scope[data-omx-mode="dark"]`，禁止散落多处。
4. **图标**：线性图标 `stroke="currentColor"`，颜色继承文本令牌，零特判。
5. **切换过渡**：`color/background-color/border-color` 加 `transition: var(--omx-motion-fast) var(--omx-motion-ease)`，避免模式切换闪白。
6. **禁忌**：禁止 `filter: invert()` 全局反转（破坏图片与状态色）；禁止用 JS 逐个改颜色——只改 `data-omx-mode` 一个属性。

### 4.3 对比度红线

- `body`（#4b4b4b/#b4b4b4）≈ 8.9:1，正文一律用它。
- `muted`（#848484）对白底 ≈ 3.0:1，**仅限非必要元数据、占位符、禁用态**，不得用于正文（品牌接受的既有取舍，写进规范固化）。

---

## 5. 组件样式规范（共享组件类）

以下类由 `plugins/omnimux-theme/src/components.js` 提供，插件直接用类名，禁止复制样式体。

**按钮**（共用基类 `.omx-btn`：`inline-flex; align-items:center; gap:var(--omx-space-sm); border-radius:var(--omx-radius-pill); padding:var(--omx-space-md) var(--omx-space-xl); font:var(--omx-text-action); cursor:pointer; transition:all var(--omx-motion-fast) var(--omx-motion-ease); active:transform scale(.98); focus-visible:outline var(--omx-focus-ring), offset var(--omx-focus-ring-offset)`）

| 变体 | 背景 | 文字 | 边框 | 悬停 |
|---|---|---|---|---|
| `.omx-btn-primary` | `primary` | `on-primary` | 无 | 背景 `primary-hover` |
| `.omx-btn-secondary` | `canvas` | `ink` | `--omx-border-hairline` | 边框 `hairline-strong` + 背景 `canvas-soft` |
| `.omx-btn-ghost` | 透明 | `body` | 无 | 背景 `interactive-hover`，文字 `ink` |
| `.omx-btn-danger` | `error` | `on-error` | 无 | `opacity:.92` |

小号按钮 `.omx-btn--sm`：`padding:var(--omx-space-sm) var(--omx-space-lg)`。

**输入框** `.omx-input`：高 36px，`padding:0 var(--omx-space-md)`，`border-radius:var(--omx-radius-md)`，`border:var(--omx-border-hairline)`，背景 `canvas`，文字 `ink`，占位符 `muted`；聚焦 `outline: var(--omx-focus-ring); outline-offset: var(--omx-focus-ring-offset)`。

**数据表** `.omx-table`：表头行高 36px，文字 `--omx-text-label` 色 `muted`；数据行高 40px（`min-height`），单元格 `padding:var(--omx-space-sm) var(--omx-space-lg)`，行分隔 `border-bottom:var(--omx-border-hairline)`，行悬停背景 `interactive-hover`，选中行背景 `interactive-active` + 文字 `ink` + 左侧 2px `ink` 指示条。路径/哈希/大小/时间戳列用 `--omx-text-code`。

**侧栏导航项** `.omx-nav-item`：高 36px，`border-radius:var(--omx-radius-sm)`，`padding:0 var(--omx-space-md)`，文字 `muted`；悬停文字 `ink` + 背景 `interactive-hover`；激活文字 `ink` + `font-weight:500` + 背景 `interactive-active`。

**Chip / 过滤标签** `.omx-chip`：`border-radius:var(--omx-radius-pill)`，`padding:var(--omx-space-xs) var(--omx-space-lg)`，`font:var(--omx-text-label)`，背景 `canvas-soft`，边框 `hairline`，文字 `ink`；悬停边框 `hairline-strong`；激活（`[data-active]`）背景 `primary`、文字 `on-primary`、无边框。状态 Chip 用语义色文字 + 同色 `rgba` 15% 背景，在 tokens.js 中预定义。

**详情侧栏** `.omx-detail`：`border-left:var(--omx-border-hairline)`，宽 360px，`padding:var(--omx-space-xl)`，背景 `canvas`，标题 `--omx-text-title`。

**对话框** `.omx-dialog-overlay`（fixed 全屏，背景 `overlay`，`z-index:var(--omx-z-modal)`）+ `.omx-dialog`（背景 `canvas`，`border-radius:var(--omx-radius-lg)`，边框 `hairline`，阴影 `--omx-shadow-overlay`，`padding:var(--omx-space-xl)`，宽度 `min(480px, calc(100vw - 48px))`）。危险确认（如移除映射）标题旁加 `error` 色图标，确认按钮用 `.omx-btn-danger`。

**技术面板** `.omx-panel`：背景 `canvas-soft`，`border-radius:var(--omx-radius-md)`，边框 `hairline`，`padding:var(--omx-space-lg)`，内容 `--omx-text-code`。

**空态** `.omx-empty`：居中，`padding:var(--omx-space-5xl) var(--omx-space-xl)`，主文案 `--omx-text-title` 色 `ink`，副文案 `--omx-text-body-md` 色 `muted`，唯一允许使用 display 字阶的插件场景（`--omx-text-display-sm` + 对应 `--omx-ls-*`）。

---

## 6. Do's & Don'ts

**Do**
- 所有视觉取值经 `--omx-*` 令牌；需要新颜色时先在 tokens.js 加令牌，再使用。
- 用 hairline 分隔与留白建立层级，用字号建立信息梯度。
- 等宽字体只用于路径、哈希、字节数、时间戳等技术数据。
- 每个颜色令牌双值提交；`data-omx-mode` 是唯一模式开关。
- pill 圆角只给按钮和 Chip；焦点环统一 ink 色 2px / offset 2px。
- 表格等密集区可用 `--omx-space-2xs` 密度档，但行高不低于 40px。

**Don't**
- 组件代码内联任何 hex/rgba 色值（`plugins/omnimux-theme` 之外出现即违规）。
- 用 `primary` 黑色做大面积背景或长文本。
- 用 `muted` 写正文；用 display 字阶写表格或密集数据。
- 给表格、面板、卡片加彩色或大投影（品牌是发丝线哲学，只有浮层有阴影）。
- 引入黑白灰 + 3 个状态色之外的任何颜色。
- 同一属性混用 `--dsw-*` 与 `--omx-*`；插件间互相拷贝样式。
- 用 JS 逐属性切换暗色模式或全局 `filter: invert()`。

---

## 7. 现有插件迁移实施步骤

### 7.0 现状引用 → 目标令牌对照表（机械替换依据）

已在 omnimux-assets / omnimux-accounts / omnimux-workflow / omnimux（hub 客户端）确认的现存写法，全部是 `var(--dsw-alias-*, 兜底值)` 模式：

| 现有写法 | 出现位置（举例） | 替换为 |
|---|---|---|
| `var(--dsw-alias-bg-primary, var(--dsw-bg, #111))` | AssetsStage / ArtifactTable / WorkflowStage | `var(--omx-color-canvas)` |
| `var(--dsw-alias-label-primary, inherit)` | 各组件 / hub sidebar-entry | `var(--omx-color-ink)` |
| `var(--dsw-alias-label-secondary, …)` | 导航/表头/副文本（CanvasBridge 等） | `var(--omx-color-body)`；纯元数据（日期、大小）用 `var(--omx-color-muted)` |
| `var(--dsw-alias-border, …)` | 表格/面板分隔线 | `var(--omx-color-hairline)` |
| `var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12))` | 行/条目悬停 | `var(--omx-color-interactive-hover)` |
| `var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18))` | 选中态 | `var(--omx-color-interactive-active)` |
| `var(--dsw-alias-bg-interactive-primary, #3b6fbd)`（a11y 焦点环） | omnimux-assets a11y.js | `var(--omx-color-ink)`（品牌焦点环为墨色，非蓝） |
| `var(--dsw-font-s-14, inherit)` | sidebar-entry | `var(--omx-text-body-sm)` |

### 7.1 阶段 0：建仓共享主题层（1 个 PR）

1. 新建 `plugins/omnimux-theme/`（§3.1 结构），实现 tokens.js / theme.css.js / install.js / components.js / 测试。
2. 测试覆盖：全部颜色令牌双值完备；命名匹配 `^--omx-[a-z0-9-]+$`；生成的 CSS 快照。
3. 验收：`node --test` 通过；空 HTML 挂 `.omx-scope` 手动切 `data-omx-mode` 双模式走查。

### 7.2 阶段 1：omnimux-assets 试点（1–2 个 PR）

1. `package.json` 增加依赖 `omnimux-theme: workspace:*`；stage 根节点执行 `installOmniMuxTheme({ scope, ctx })`。
2. 按 §7.0 对照表机械替换全部 `--dsw-*` 引用（FileTable / ArtifactTable / DetailPanel / MappingNav / ArtifactNav / AssetsStage / a11y.js / sidebar-entry.js / ConfirmRemoveDialog）。
3. ConfirmRemoveDialog 换 `.omx-dialog` + `.omx-btn-danger`；Chip 过滤换 `.omx-chip`；侧栏入口换 `.omx-nav-item`。
4. 验收：全局 grep 无 `--dsw-`（该插件客户端源码内）；双模式截图走查表格、详情栏、对话框、Chip、空态；焦点环键盘走查为墨色。

### 7.3 阶段 2：omnimux-accounts + omnimux-workflow + 共享组件沉淀

1. 同法迁移 omnimux-accounts 与 omnimux-workflow（WorkflowStage / CanvasBridge）。
2. 迁移中第二次出现的样式（表格壳、空态、过滤条）上提进 `omnimux-theme/src/components.js`。
3. 在本仓库 `AGENTS.md` 的 Design system 触发条款下开发新 UI（已加入）。
4. 验收：多个插件同屏视觉一致；新增一个最小试验页面验证接入 < 10 行代码。

### 7.4 阶段 3：hub 壳层 + 收尾与全壳统一（可选，需拍板）

1. 迁移 `plugins/omnimux` 客户端壳层（sidebar-entry / ProfileSection / AppsStage 等货架页）。
2. 清理所有遗留兜底值与重复 `<style>` 注入；加 `scripts/check-tokens.mjs` 令牌 lint（客户端源码正则扫 `#[0-9a-fA-F]{3,8}\b|rgba?\(`，白名单 omnimux-theme）。
3. （可选）按 §3.3 注册 `overrideTokens('omnimux-xai', …)`，全壳 x.ai 化；卸载该层即可回滚。
4. 验收：lint 进 `pnpm test`；双模式全插件走查一次。

---

## 8. AI 代理提示指南（组件生成 Prompt）

生成组件时把本文件路径喂给代理，并用以下句式（只提令牌名，禁止让代理自选颜色）：

1. 「基于 omnimux 设计规范（design.md），生成主按钮 + 次按钮 + 幽灵按钮组合：类 `.omx-btn` 系，颜色一律 var(--omx-color-*)，圆角 var(--omx-radius-pill)，active 时 scale(0.98)。」
2. 「生成资产表格组件：表头 --omx-text-label/muted，行高 40px，hairline 分隔，悬停 var(--omx-color-interactive-hover)，路径列用 --omx-text-code。」
3. 「生成删除确认对话框：.omx-dialog-overlay + .omx-dialog，确认按钮 .omx-btn-danger，遮罩 var(--omx-color-overlay)。」
4. 「生成过滤 Chip 行：.omx-chip，激活态 primary/on-primary 反转，含 success/warning/error 状态 Chip 变体。」
5. 「生成空态引导：.omx-empty，主文案 --omx-text-display-sm 配 --omx-ls-display-sm，副文案 body-md/muted。」

迭代口诀：先令牌后样式；颜色不对先查令牌表，不改组件；任何新视觉先问"规范里有令牌吗"，没有就先加令牌。

---

## 附：L1 令牌 CSS 完整定义（可直接复制进 theme.css.js 生成逻辑）

```css
.omx-scope {
  --omx-font-sans: 'Universal Sans','Inter',system-ui,-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;
  --omx-font-mono: 'Geist Mono','IBM Plex Mono',ui-monospace,SFMono-Regular,Menlo,monospace;
  --omx-text-display-xl: 600 96px/96px var(--omx-font-sans);
  --omx-text-display-lg: 600 72px/76px var(--omx-font-sans);
  --omx-text-display-md: 600 48px/52px var(--omx-font-sans);
  --omx-text-display-sm: 600 32px/38px var(--omx-font-sans);
  --omx-text-title: 600 24px/30px var(--omx-font-sans);
  --omx-text-title-sm: 600 18px/28px var(--omx-font-sans);
  --omx-text-body-lg: 400 18px/28px var(--omx-font-sans);
  --omx-text-body-md: 400 16px/24px var(--omx-font-sans);
  --omx-text-body-sm: 400 14px/20px var(--omx-font-sans);
  --omx-text-label: 500 13px/16px var(--omx-font-sans);
  --omx-text-action: 500 14px/20px var(--omx-font-sans);
  --omx-text-code: 400 13px/20px var(--omx-font-mono);
  --omx-ls-display-xl: -3.2px; --omx-ls-display-lg: -2.2px; --omx-ls-display-md: -1.4px;
  --omx-ls-display-sm: -0.7px; --omx-ls-title: -0.3px;
  --omx-color-canvas: #ffffff; --omx-color-canvas-soft: #f7f7f7; --omx-color-canvas-raised: #fbfbfb;
  --omx-color-ink: #0a0a0a; --omx-color-ink-soft: #1f1f1f; --omx-color-body: #4b4b4b; --omx-color-muted: #848484;
  --omx-color-hairline: #dbdbdb; --omx-color-hairline-strong: #bfbfbf;
  --omx-color-primary: #0a0a0a; --omx-color-primary-hover: #242424; --omx-color-on-primary: #ffffff;
  --omx-color-interactive-hover: rgba(10,10,10,.05); --omx-color-interactive-active: rgba(10,10,10,.09);
  --omx-color-success: #15803d; --omx-color-warning: #b45309;
  --omx-color-error: #b91c1c; --omx-color-on-error: #ffffff;
  --omx-color-overlay: rgba(10,10,10,.40);
  --omx-space-2xs: 2px; --omx-space-xs: 4px; --omx-space-sm: 8px; --omx-space-md: 12px;
  --omx-space-lg: 16px; --omx-space-xl: 24px; --omx-space-2xl: 32px; --omx-space-3xl: 48px;
  --omx-space-4xl: 64px; --omx-space-5xl: 96px; --omx-space-6xl: 128px;
  --omx-radius-none: 0; --omx-radius-sm: 8px; --omx-radius-md: 12px;
  --omx-radius-lg: 16px; --omx-radius-xl: 24px; --omx-radius-pill: 9999px;
  --omx-border-hairline: 1px solid var(--omx-color-hairline);
  --omx-border-hairline-strong: 1px solid var(--omx-color-hairline-strong);
  --omx-shadow-overlay: 0 8px 24px rgba(10,10,10,.08), 0 1px 2px rgba(10,10,10,.06);
  --omx-max-content: 1280px; --omx-reading-width: 760px; --omx-section-gap: 96px;
  --omx-card-padding: 24px; --omx-element-gap: 16px;
  --omx-focus-ring: 2px solid var(--omx-color-ink); --omx-focus-ring-offset: 2px;
  --omx-motion-fast: 120ms; --omx-motion-base: 180ms; --omx-motion-ease: cubic-bezier(.2,.4,.6,1);
  --omx-z-sticky: 10; --omx-z-overlay: 100; --omx-z-modal: 200; --omx-z-toast: 300;
  color: var(--omx-color-ink); font: var(--omx-text-body-md); background: var(--omx-color-canvas);
}
.omx-scope[data-omx-mode="dark"] {
  --omx-color-canvas: #0a0a0a; --omx-color-canvas-soft: #131313; --omx-color-canvas-raised: #171717;
  --omx-color-ink: #ffffff; --omx-color-ink-soft: #ebebeb; --omx-color-body: #b4b4b4; --omx-color-muted: #7c7c7c;
  --omx-color-hairline: #242424; --omx-color-hairline-strong: #3d3d3d;
  --omx-color-primary: #ffffff; --omx-color-primary-hover: #ebebeb; --omx-color-on-primary: #0a0a0a;
  --omx-color-interactive-hover: rgba(255,255,255,.07); --omx-color-interactive-active: rgba(255,255,255,.13);
  --omx-color-success: #4ade80; --omx-color-warning: #fbbf24;
  --omx-color-error: #f87171; --omx-color-on-error: #0a0a0a;
  --omx-color-overlay: rgba(0,0,0,.60);
  --omx-shadow-overlay: 0 8px 24px rgba(0,0,0,.48), 0 1px 2px rgba(0,0,0,.40);
}
```
