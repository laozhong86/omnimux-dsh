# 新建本地项目（作品包 = dsh 工作区文件夹）

> 状态：**已拍板**（2026-08-23）  
> 落点：`omnimux-workflow`（`src/projects/` + `src/client/projects/newProject.js`）  
> 契约真源：[`docs/contracts/gxgen-workflow-migration.md`](../../contracts/gxgen-workflow-migration.md) §0 / §1 / §5  
> 对照：MiniMax Design「新建本地项目」弹窗；默认库路径策略 `app.getPath("videos")` + `<产品名>/Projects`  
> 不改：画布仍挂 `dsh-better-sidebar` 方案 C；官方 details 不接管；禁止 `connectWorkspace` / `sessions.create({ cwd })`

---

## 0. TL;DR

**项目就是一个本地文件夹。** 这个文件夹既是 MiniMax 意义上的作品包，也是 dsh 必须绑定的会话工作区。

点「新建项目」→ 弹「新建本地项目」只收名称 → 在默认库目录建可读名文件夹 → 把该路径登记进官方工作区账本 → 新建绑定会话 → 打开会话页并默认右侧画布 15:85。

一句话对齐两边：

| 要对齐的 | 怎么对齐 |
|---|---|
| MiniMax 本地文件 | 可见项目文件夹；人能在访达 / 资源管理器打开；隐藏元数据进 `.omnimux/` |
| dsh 会话绑工作区 | 该文件夹 **就是** `workspace.path`；`sessions.create({ workspaceId })` |

**旧语义作废**：不再在「当前会话 cwd」下写 `.omnimux/projects/<id>/`，也不再多个项目挤在同一个 dsh 工作区里。

---

## 1. 问题陈述

现在的 `runNewProject` 会立刻在**当前会话工作区**里写一份隐藏 `project.json`，再复用**同一个** `workspaceId` 开新会话。Finder 里几乎看不见项目；会话 cwd 仍是上一个工作区，不是作品包。这和 MiniMax「一个项目一个文件夹」、也和 dsh「会话必须绑工作区」都拧着。

不改的成本：

- 生成物、简报、画布继续散落 `$DSH_HOME/omnimux/workflow/`，关 App 找不到片子。
- 项目库作用域绑在「碰巧打开的那个 cwd」，换文件夹列表就空。
- 后续节点 `path`、生成落盘两刀没有合法项目根。

证据：MiniMax 文案 `workspace.newProject.defaultFolderDisplay = "~/Movies/Hub/Projects"`，解析走视频已知文件夹，不是写死 `Movies`。dsh `IWorkspaces.create({ path })` 就是「把已有路径登记为工作区」。

---

## 2. Goals

1. **新建后访达能看见项目文件夹**（至少一份人读文件 + `.omnimux/`）。
2. **该文件夹 = 会话 cwd**；侧栏工作区账本出现这一条。
3. **名称弹窗提交才落盘**；取消零副作用。
4. **默认库路径跨平台**，跟 MiniMax 同一套「视频已知文件夹」策略，品牌目录用 OmniMux 不是 Hub。
5. **进会话即画布 15:85**（P0-13；旧 3:7 当磁铁会改写，人手拖过不覆盖）。

---

## 3. Non-Goals

| 不做 | 原因 |
|---|---|
| 弹窗里选保存位置 / 改默认库 | P0 对齐 MiniMax 默认路径；改位置是 P1 |
| 云同步、与其他设备共享 | MiniMax 弹窗已写明本地不共享；我们同样 local-first |
| `connectWorkspace` | 会复用空白会话，把画布换成 Files |
| `sessions.create({ cwd })` | 生出未进账本的 ungrouped 会话 |
| sqlite / `.hilo` / zstd / Stage 计划机 | 研究已裁，见文件本地化简报 |
| 把画布/媒体继续写 `$DSH_HOME/omnimux/workflow/` 当作品 | 刀 2/3 搬走；本规格先把项目根钉死 |
| 多个 OmniMux 项目挤在同一个 dsh 工作区 | 旧 Phase 0 草案，已否决 |
| 删项目时默认 `rm` 用户文件夹 | 与资产库同一红线；P0 只摘会话/账本引用 |
| 自动迁移旧 `.omnimux/projects/<id>/` | 另开兼容，不堵新建主路径 |

---

## 4. 用户故事

1. **作为创作者**，我希望点「新建项目」先输入名称再创建，以便不会在磁盘上留下一堆「未命名项目」。
2. **作为创作者**，我希望项目出现在默认库目录的可见文件夹里，以便用访达 / Premiere 直接打开作品。
3. **作为创作者**，我希望确认后直接进入该项目的会话，右侧就是画布（对话:画布 15:85），以便立刻开始排片子。
4. **作为创作者**，我希望这个文件夹就是会话工作区，以便 Agent 读写落在作品包内，而不是上一个随便打开的目录。
5. **作为创作者**，我取消弹窗后磁盘和工作区账本都不变，以便误触没有成本。

---

## 5. 身份模型（禁止再混）

| 中文 | 代码 | 是什么 | 不是什么 |
|---|---|---|---|
| **默认项目库目录** | `defaultProjectLibrary()` | 视频已知文件夹下 `OmniMux/Projects` | 不是当前会话 cwd，不是 `$DSH_HOME` |
| **OmniMux 项目** | 该库里的一个子文件夹 | 作品包；绑定 1 个 dsh 工作区 + 1 个会话 | 不是画布 `WorkspaceStore` |
| **dsh 工作区** | `workspaces.items[].path` | **等于**项目文件夹绝对路径 | 不是「项目们的父沙盒」 |
| **画布工作区** | `.omnimux/canvas.json`（刀 2） | 一张画布文档 | 历史 `$DSH_HOME/.../workspaces/<id>` |

**代理硬规则**：新建项目时，先有文件夹，再有工作区账本，再有会话。禁止先开会话再找地方写文件。

---

## 6. 默认路径（对齐 MiniMax 策略，不用它的品牌名）

MiniMax：展示 `~/Movies/Hub/Projects`，解析 `app.getPath("videos")` + `Hub/Projects`。  
我们：**同一套已知文件夹，目录名换成 OmniMux。**

| 系统 | 解析 | 默认库（展示可写 `~`） |
|---|---|---|
| macOS | Electron / 宿主 `videos` 已知文件夹 | `~/Movies/OmniMux/Projects` |
| Windows | 同一 API（用户「视频」目录，不是写死 `Movies`） | `%USERPROFILE%\Videos\OmniMux\Projects` |
| Linux（若有桌面壳） | `videos`，没有则 `$HOME` | `$HOME/Videos/OmniMux/Projects` 或 `$HOME/OmniMux/Projects` |

实现约束：

- **禁止**客户端写死 `/Users/.../Movies` 或 `C:\Users\...\Movies`。
- 插件 web 面没有 Electron：默认库路径由 **workflow host** 解析（`GET /api/projects/library`；darwin `~/Movies`，win32 `~/Videos`）。P1 再接壳注入 `app.getPath("videos")`。
- 库根不存在：Host `mkdirSync(..., { recursive: true })`。**不要**走客户端 `workspaces.createDirectory`——OmniMux.app 的 `directoryPicker` 是 `native`，该 RPC 需要 `browse`，桌面壳上会失败。
- P1 才在弹窗露出「保存到：…」和更改位置。

---

## 7. 弹窗 UX（对照 MiniMax 截图）

| 元素 | 文案 |
|---|---|
| 标题 | 新建本地项目 |
| 字段标签 | 项目名称 |
| 占位 | 例如：宣传片 |
| 说明 | 本地项目不会自动与其他设备或用户共享 |
| 次按钮 | 取消 |
| 主按钮 | 创建项目 |

行为：

- 侧栏「新建项目」、折叠加号菜单「新建项目」、项目库页「+ 新建项目」共用此弹窗。
- 打开时焦点在输入框；Enter = 创建（名称非空）；Esc / 取消 = 关，零写入。
- 名称为空或只空白：主按钮禁用（不要静默写成「未命名项目 日期」——那是旧 Phase 0 无弹窗时的退路）。
- 长度 1–200，与现 `MAX_PROJECT_TITLE_LENGTH` 一致。
- **P0 不画**位置选择器、模板、云项目开关。
- 一级页 token 走 `--dsw-alias-*`；禁止 `--omx-*` 浅色 fallback。

---

## 8. 确认后副作用顺序（P0 必须按序）

提交后串行，失败可停，禁止 `connectWorkspace`。弹窗 **等到本链结束才关**：失败把错误画在弹窗里，成功才关。

1. **净化文件夹名**：展示名保留用户输入；目录名去掉路径分隔符 / 控制字符；全空则拒绝（弹窗已拦）。
2. **Host 建作品包**：`POST /api/projects { title }`。Host 确保库根、在默认库下一层 `mkdir`（非 recursive，重名 `名称 (2)`）、写 `说明.md` + `.omnimux/project.json`。返回 `project.path`。客户端 **不**调 `createDirectory`。
3. **登记工作区**：`workspaces.create({ path: projectRoot })`。官方幂等：路径已在账本则拿回同一 `workspaceId`。路径必须已存在（上一步 Host 已 mkdir）。
4. **新建会话**：`sessions.create({ workspaceId })`。禁止 `create({ cwd })`。
5. **回写** `project.json.sessionId`。
6. **关一级页 overlay**：`stage.set(false)` + 清 `html.dataset.dshProductStage` + 派发 `dsh-product-stage` `{id:''}`。只关本插件 stage 不够：`html[data-dsh-product-stage]` 会藏 `[data-dsh-panel-host]`。
7. **导航**：`sessions.open(sessionId)`。
8. **画布**：`activateProjectCanvas`（`closeDetails` + 关空 Files 种子 + 开 `omnimux-workflow:canvas` + **15:85**）。旧 3:7 会改写；人手拖过的宽度仍不覆盖（P0-13）。

任一步失败：

- 弹窗保持打开，错误画在弹窗内（`projects.createFailed`）。
- 文件夹已建但账本/会话失败：保留文件夹，允许从项目库「打开」补绑定；不要偷偷 `rm -rf`。

---

## 9. 落盘布局（替代旧 §5 草案）

```text
<videos>/OmniMux/Projects/
  <可读项目名>/                 ← dsh workspace.path = 会话 cwd
    说明.md
    images/  video/  audio/     ← 刀 3 生成物；本轮可先空
    .omnimux/
      project.json              ← 元数据
      canvas.json               ← 刀 2 从 $DSH_HOME 搬走；本轮可后写
```

**`project.json`**

| 字段 | 类型 | 说明 |
|---|---|---|
| `schemaVersion` | number | 仍从 1；字段增量向后兼容 |
| `id` | string | 稳定 id |
| `title` | string | 展示名（用户输入，不是净化后的文件夹名） |
| `createdAt` / `updatedAt` | ISO string | |
| `sessionId` | string \| null | 绑定会话 |
| `canvasWorkspaceIds` | string[] | Phase 0 可 0～1；刀 2 后画布文件已在本目录，此字段可作内部 id |

不再把「父 cwd」当作项目库作用域。项目库列表 = 默认库目录下一层、且含合法 `project.json` 的文件夹（可用账本 `workspaces.items` 做 cwd 匹配加速，扫描目录是真相）。

---

## 10. Requirements

### Must-Have（P0）

- [ ] 三处入口都先弹窗，提交才落盘。
- [ ] 默认库路径走视频已知文件夹 + `OmniMux/Projects`；Mac / Windows 用同一 API。
- [ ] 确认后：建文件夹 → 种子 md → `project.json` → `workspaces.create({ path })` → `sessions.create({ workspaceId })` → open → 画布 15:85。
- [ ] 重名文件夹自动加 `(2)`，不覆盖已有项目。
- [ ] 取消 / Esc：磁盘、账本、会话都不变。
- [ ] 项目库列出默认库里的项目，不再依赖「当前会话 cwd 下的隐藏 index」。
- [ ] 点已有项目：打开绑定会话（有则 open，无则按同一 workspaceId 新建会话再 bind）；画布 15:85。
- [ ] 单测覆盖：弹窗提交契约、重名、`create({ path })` 后必须 `sessions.create({ workspaceId })`、禁止 `connectWorkspace`。

### Should-Have（P1）

- [ ] 弹窗展示「保存到：~/Movies/OmniMux/Projects」；可改位置（原生选目录）。
- [ ] `workspaces.rename(workspaceId, title)` 让侧栏工作区名等于项目名。
- [ ] 项目库保活（`everOpened` + `display:none`），关页不要卸树。

### Won't-Have（本轮）

节点 `path`、生成物改写、Agent 返回 path（刀 2–4，项目根钉死后再做）。

---

## 11. 验收（Given / When / Then）

1. Given 默认库尚无该名  
   When 输入「宣传片」点创建项目  
   Then 出现 `<videos>/OmniMux/Projects/宣传片/`（或净化名），内有 `说明.md` 与 `.omnimux/project.json`；账本多一条 path 等于该文件夹的工作区；当前会话 cwd 就是它；右侧画布 15:85。

2. Given 弹窗已开  
   When 点取消  
   Then 不新建目录、不写 json、不增会话。

3. Given 已有「宣传片」文件夹  
   When 再创建同名  
   Then 得到 `宣传片 (2)`，原文件夹不动。

4. Given 刚建完项目  
   When 用访达打开该文件夹  
   Then 能看见人读文件，不需要打开 OmniMux。

5. Given 普通「新建会话」  
   When 点新建会话（不是新建项目）  
   Then 仍走原工作区 + Files，不弹本窗、不建 OmniMux 项目文件夹。

---

## 12. 成功指标

| 指标 | 成功线 | 怎么看 |
|---|---|---|
| 新建完成率 | 打开弹窗后提交且进入会话 ≥ 90%（内部试用） | 失败应有可见错误，不是按钮无响应 |
| 磁盘可见 | 100% 新建能在默认库看到文件夹 | 访达 / 资源管理器 |
| 工作区绑定 | 100% 会话 `cwd` == 项目根 | 官方账本 `path` |
| 画布比例 | 新项目会话默认 15:85（未手拖；旧 3:7 也会被改写） | P0-13 同款复验 1280/280 → 约 150:850 |

---

## 13. Open Questions（不挡 P0 编码）

| 问 | 建议默认 | 谁拍 |
|---|---|---|
| 旧 `<cwd>/.omnimux/projects/` 要不要迁 | **不自动迁**；项目库只扫新库。要开旧片子走「打开文件夹」P1 | 产品，已取默认 |
| 文件夹名用展示名还是 slug | **尽量用展示名**（中文可以）；非法字符替换为 `_` | 工程 |
| 默认库是否允许改 | P1 再做；P0 写死策略 | 已定 |
| 种子文件叫 `说明.md` 还是 `需求简报.md` | **`说明.md`**，避免假装已有完整 brief | 产品 |

---

## 14. 工程接口备忘（给实现，不是另开范围）

官方客户端已有，不必造旁路：

- Host `allocateUniqueProjectFolder`：默认库下一层 mkdir（桌面壳没有可用的 `createDirectory`）
- `workspaces.create({ path }) → WorkspaceView`（登记**已存在**路径，幂等）
- `sessions.create({ workspaceId }) → sessionId`
- **禁止** `workspaces.connectWorkspace`
- **禁止**客户端 `workspaces.createDirectory`（native picker 无 browse）
- **禁止**手 `rsync` 进 profile；日常 `yarn omnimux:sync omnimux-workflow`

动的代码：`newProject.js`、`sidebar-new-project.js`、`ProjectLibraryPage.jsx`、弹窗组件、`folderName.ts` / `ProjectStore.ts` / `library.ts`、宿主侧 videos 路径解析。

先合本规格 + 蓝图 §5，再写码。
