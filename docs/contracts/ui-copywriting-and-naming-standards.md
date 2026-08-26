# OmniMux 全局 UI 命名与微文案规范 (UI Copywriting & Naming Standards)

> **设计基准**：严格对齐 Apple macOS HIG、Linear、GitHub Filters 与 Vercel 的核心设计哲学。  
> **适用范围**：所有插件的一级 Stage、侧边栏、工具栏、筛选器、状态徽章、操作按钮与国际化字典。  
> **级别**：**强制 (MANDATORY)** —— 严过关 (QA) 门禁必检项。

---

## 一、 核心铁律（The 4 Inviolable Laws）

### 1. 实体名词锚定律 (Noun Anchor Law)
* **规则**：维度标识、筛选字段必须使用 **2~4 字纯实体名词**。
* ✅ **正确**：`平台`、`账号`、`发布方式`、`时间跨度`、`状态`、`角色`、`场景`、`分类`
* ❌ **严禁**：`全部平台`、`请选择账号`、`全部账号矩阵`、`内容来源筛选`、`全部发布来源`、`当前项目状态`

### 2. 状态正交分离律 (Orthogonal State Law)
下拉筛选器（Dropdown）与筛选胶囊（Filter Chips）严格遵守三态正交，禁止概念混淆：

| 状态 | 定义 | 触发器 (Trigger) 显示 | 下拉菜单首项 (Option 1) |
|---|---|---|---|
| **默认全量态** | 未施加任何过滤条件 (`value === 'all'`) | `[ 平台 ▾ ]` 或 `[ 平台: 全部 ▾ ]` | `全部` (All) |
| **单值过滤态** | 选中了具体实体 (`value !== 'all'`) | `[ TikTok ▾ ]` 或 `[ 平台: TikTok ▾ ]` | `全部` (All) |
| **多选过滤态** | 选中了多个实体 | `[ 平台: 2项 ▾ ]` | `全部 (已选2项)` |

> 🚨 **红线禁止**：
> 1. 严禁下拉菜单第一项出现「全部+维度」（如 `全部平台`、`所有角色`、`全部发布来源`、`全部账号矩阵`）。
> 2. 严禁多个相邻下拉框在默认态下裸露展示为 `[ 全部 ▾ ] [ 全部 ▾ ] [ 全部 ▾ ]`。

### 3. 动词纯粹律 (Action Purity Law)
* **规则**：仅在产生副作用（创建、删除、修改、网络分发）的交互元素上使用动词。
* ✅ **操作按钮 (CTA)**：`+ 新建项目`、`导出 CSV`、`立即同步`、`连接账号`、`重试`、`登录`
* ❌ **筛选与导航**：严禁使用 `筛选平台`、`点击查看更多`、`进入管理`、`选择时间` 作为标签。

### 4. 零废话占位律 (Zero-Jargon Placeholder Law)
* 搜索框占位符：`搜索 + [实体名词]` 或 `搜索...`（如 `搜索帖子...`、`搜索 Skill...`、`搜索账号...`）。
* 严禁出现：`请输入关键词进行搜索`、`在此输入您想找的内容` 等客服式长句。

---

## 二、 全局标准术语字典（Canonical Lexicon）

所有插件的 `locales.js` 必须严格遵循此标准映射，禁止私自拼装冗余定语：

```javascript
export const CANONICAL_UI_LEXICON = {
  // ── 通用重置与状态 ──────────────────────────
  'common.all': { zh: '全部', en: 'All' },
  'common.any': { zh: '不限', en: 'Any' },
  'common.none': { zh: '无', en: 'None' },
  'common.custom': { zh: '自定义', en: 'Custom' },

  // ── 基础维度 (Dimensions) ──────────────────
  'dimension.platform': { zh: '平台', en: 'Platform' },
  'dimension.account': { zh: '账号', en: 'Account' },
  'dimension.source': { zh: '发布方式', en: 'Publish Method' },
  'dimension.range': { zh: '时间跨度', en: 'Time Range' },
  'dimension.status': { zh: '状态', en: 'Status' },
  'dimension.role': { zh: '角色', en: 'Role' },
  'dimension.scene': { zh: '场景', en: 'Scene' },
  'dimension.category': { zh: '分类', en: 'Category' },

  // ── 具体枚举项 (Specific Options) ────────────
  'source.manual': { zh: '手动', en: 'Manual' },
  'source.omnimux': { zh: 'OmniMux', en: 'OmniMux' },
  'range.7d': { zh: '近 7 天', en: 'Last 7 days' },
  'range.30d': { zh: '近 30 天', en: 'Last 30 days' },
  'range.90d': { zh: '近 90 天', en: 'Last 90 days' },

  // ── 动作 (Actions) ─────────────────────────
  'action.create': { zh: '新建', en: 'New' },
  'action.sync_now': { zh: '立即同步', en: 'Sync now' },
  'action.export': { zh: '导出', en: 'Export' },
  'action.retry': { zh: '重试', en: 'Retry' },
  'action.reauth': { zh: '重新授权', en: 'Reauthorize' },
  'action.login': { zh: '登录', en: 'Sign in' },
}
```

---

## 三、 Agent 实施与审查铁律 (Agent Governance)

1. **高见远（架构师）**：在输出 `tech-spec.md` 时，必须核对 FilterBar 的 state 与 UI 文案是否符合《实体名词锚定律》，将 `source` 规范为 `发布方式`，将首项收敛为 `全部`。
2. **林深（工程师）**：在编写 `FilterBar.jsx` 与 `locales.js` 时，直接引用或对齐标准字典，禁止拼接 `全部` + 维度。
3. **严过关（QA 审计）**：执行合规审计时，自动检索客户端代码及 bundle：
   - 匹配正则 `/全部(平台|账号|来源|类型|状态|分类|发布方式)/` ➔ 命中直接判定 **FAIL** 并拦截。
