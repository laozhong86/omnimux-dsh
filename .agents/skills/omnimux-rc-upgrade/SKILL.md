---
name: omnimux-rc-upgrade
description: "OmniMux 升官方 dsh RC / 改 harness-pin 时的强制核对。Use when: 升 rc、bump pin、dsh 0.1.0-rc、harness-pin、RC 升级、Host 升级后插件炸、reading prepare、品牌 overlay、/omnimux-rc-upgrade。Not for: 日常改 drama 垂直、只改桌面窗口 chrome、学写第一个插件。"
---

# omnimux-rc-upgrade

升官方 DeepSeek Harness RC（改 `docs/harness-pin.md`）时必须跑完本表。未填交付块不得声称 bump 完成、不得打产品 tag、不得把桌面当已验收。

Pin 步骤（fetch / checkout / replay overlay）真源：`docs/harness-pin.md`。本 skill 只补 **契约差 + 安装树 + 三屏**。不要把 pin 步骤抄进对话当已核对。

## 何时加载

- 改 `docs/harness-pin.md` 的 SHA / 包版本
- 用户说升 rc、跟官方 tag、重打 OmniMux.app
- Host 升级后出现：工具 `prepare`、品牌空/乱飞、侧栏叠层、启动弹出系统浏览器

日常改 `omnimux-drama` / Apps 文案：不加载。

## 硬边界

- Host 包版本以 **正在跑的 OmniMux.app 或 `$DSH_SRC`** 为准，不以记忆中的 rc 为准。
- Overlay 的 viewBox / 槽名以 **当前 Host `lib/client.js` + `plugins/dsh-omnimux/src/brand/defaults.js`** 为准。禁止把上次 rc 的 viewBox 写死进新测试夹具而不对照 Host。
- `@deepseek-ai/*` 在 profile 插件里只能是 **peer**。`dependencies` 里出现 `dsh-tools` / `schemastery` / `cordis` 视为失败。
- 盖官方 DOM 的 overlay 禁止往 React 管理的父节点 `append` 后 `display:none` 其子节点。只盖官方 SVG，祖先白名单见下。
- 桌面 spawn Host 必须带 `--no-open`。

## 步骤（按序，不可跳）

### 0. 记下两端版本

```sh
python3 .agents/skills/omnimux-rc-upgrade/scripts/check-rc-contracts.py
```

脚本失败则停。先修脚本指出的项，再往下。环境变量：`DSH_SRC`、`OMNIMUX_PROFILE`（默认 `~/.dsh/profiles/omnimux`）、`OMNIMUX_DESKTOP`。

### 1. 安装树

脚本已查：profile 是否物化了第二份 `@deepseek-ai/dsh-tools`，以及谁把它写进 `dependencies`。

失败动作：把该包装成 peer（范围含当前 rc），删掉 profile 里的实体目录，重启 Host。不要在 overlay 里「兼容两份 Symbol」。

### 2. 官方 chrome 契约差

对照当前 Host，更新（需要才改代码）：

| 表面 | 读 Host | 插件必须跟上 |
|---|---|---|
| 侧栏品牌 | `sidebar.brand.mark` / `sidebar.brand.name`；`FishLogo` viewBox；`BrandWordmark includeMark={false}` 的 viewBox | `defaults.js` 的 `FISH_VIEWBOX` / `WORDMARK_VIEWBOX` / `NAME_WORDMARK_VIEWBOX`；overlay 测试夹具 |
| 空会话英雄 | `conversation.hero.brand.mark` 尺寸 34；父级 `.composerHero` 已 `position:relative` | 英雄标只在 `fishHitbox`/`headline` **就地**替换；禁止绝对定位到 composer 栈 |
| 折叠轨 | 侧栏 toggle 里 24px 鱼 | 只盖 `sidebarCol` / `railMark` / `logoRow`，不扫整页 24px 鱼 |
| 输入框 | `[data-composer-seat]` | 禁止出现 `data-omnimux-brand` |
| 新会话按钮 | `class` 含 `newSession`；品牌按钮 `aria-label` 也是「新建会话」 | 找新会话时排除 `logoRow` |

盖层祖先白名单：`brandIdentity` / `brandMark` / `brandName` / `fishHitbox` / `headline` / `railMark` / `[data-pane=sidebar]`。其它父级出现盖层 = 失败。

改 overlay 后：`node --test plugins/dsh-omnimux/src/brand/overlay.test.js`，再 `node plugins/dsh-omnimux/scripts/build-client.mjs`。profile 若是 `file:` 副本，必须把 `lib/client.js` 同步进去或改成 `link:` 真源。

### 3. 侧栏叠层

官方 `ui-sidebar` 仍在时，禁止 `disabled: ui-sidebar` 换整栏。内容库 / 应用 / ESC 共用「新会话」下方时：

- 内容模式必须藏起 `data-dsh-omnimux-apps-entry`、`data-dsh-esc-entry`、`data-dsh-taskboard-entry`
- 内容库宿主必须带 `data-plugin` + `data-surface="sidebar"`，否则原 CSS 不生效

合同：`docs/contracts/sidebar-extra-entries.md`。

### 4. 三屏（必做，截图或 GIF）

在 **当前要交付的 App**（打包的 OmniMux.app 或 fork 仓 `omnimux-desktop-fork` `corepack yarn dev`）上：

1. **空会话**：标题旁品牌合理；输入框内无 OmniMux 方标。
2. **展开侧栏**：左上角有 OmniMux 标 + 名称，不是空白、不是 DeepSeek 字标。
3. **一条工具调用**（如读文件）：`turn/end` 不得 `Cannot read properties of undefined (reading 'prepare')`。
4. **冷启动桌面**：只开 Electron 窗口，不再弹出系统浏览器。

缺任一屏证据 = 未完成。

### 5. 交付块

填完才能说 bump 完成：

```text
pin: <docs/harness-pin.md 中的 dsh 版本 + SHA>
host: <OmniMux.app | DSH_SRC> <dsh-tools 版本>
script: pass | fail (<第一条失败>)
dsh-tools-copies: none | <paths>
hard-deps: none | <package:dep>
overlay-fixtures: match-host | updated <files>
screens:
  empty-session: pass | fail | missing
  sidebar-brand: pass | fail | missing
  tool-call: pass | fail | missing
  desktop-no-open: pass | fail | missing
residual: <未修项或 none>
```

`screens.*: missing` 不得当 pass。

## 排除

- 不替代 `docs/harness-pin.md` 的 checkout / patch replay。
- 不替代 `pnpm verify:models` / drama smoke。
- 不为社区插件写兼容层。发现硬依赖 Host 包：记 `hard-deps`，要求对方改 peer，或从 profile 卸掉。
