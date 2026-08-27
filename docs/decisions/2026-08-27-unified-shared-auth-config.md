---
title: "决策：OmniMux 统一共享复用认证配置落地方案"
id: "decision-unified-shared-auth-config"
type: "decision"
status: "proposed"
authority: "L2"
date: "2026-08-27"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
---

# 决策：OmniMux 统一共享复用认证配置落地方案

日期：2026-08-27。  
状态：**草案（设计阶段）**。  
性质：核心架构 / 安全与凭据子系统决策。规范 Desktop Hub、CLI、Agent 运行时与中枢插件间统一的凭据存储、解析流水线、生命周期状态机与多端共享复用机制。

勘误记录（调度引擎落盘时对高见远草案的两处事实修正，不改架构结论）：

1. §6.2 残留设备码会话文件路径更正为 `~/.config/omnimux/login-flows/`（CLI 侧）；中枢 `pending.js` 为进程内 Map，磁盘上无 `$DSH_HOME/omnimux/login-flows/`。
2. §8.1 验收命令对齐仓库根 `pnpm test`（本树无 `pnpm --filter omnimux` workspace 过滤器）。

依据：2026-08-27 业界四工具 macOS 实证横评 + 跨平台网检（Windows Credential Manager / RFC 9700 / Gemini CLI 安全存储 PR）+ 三端只读取证（`plugins/omnimux/src/auth/{store,identity,omnimux-auth}.js`、`@omnimux/cli` secrets/http、桌面壳 preset-profile）+ 本机双孤岛令牌探活与官方 `omnimux login status --verify` oracle。

---

## 1. 决策背景与陈述

### 1.1 核心矛盾与三大病灶（P1 / P2 / P3）

当前 OmniMux 认证体系在 Desktop 宿主、CLI 终端与中枢插件（`plugins/omnimux`）之间处于分裂割裂状态，引发了三大核心病灶：

- **P1（协议缺续命）**：底座协议基于定制 `new-api` 的设备码流（`POST /api/user/device/token`），响应只包含 `access_token`、`user_id`、`username`，**无 `refresh_token`**。短生命周期的 PAT 令牌缺乏静默续期通道，导致各端频繁要求人工重复扫码/重登。
- **P2（三端孤岛与割裂）**：
  - Desktop / 中枢插件将 Token 存入 `$DSH_HOME/omnimux/access-token`（0600 明文文件）+ `profile.json` 缓存。
  - CLI（`@omnimux/cli v0.3.0`）默认写入 macOS Keychain（`service="omnimux", acct="access_token"`），非 macOS 兜底 `~/.config/omnimux/secrets.json`。
  - 环境变量 `OMNIMUX_ACCESS_TOKEN` / `.credentials.yaml` 缺乏双向同步。
  - 实测物证表明：同一机器上桌面端（`sha8=db96faba`）与 CLI 端（`sha8=e4ef017d`）持有互不相同的两枚孤岛令牌，登录态完全脱节。
- **P3（即焚放大器与状态分歧）**：
  - 中枢插件 `identity.js:50` 在 `fetchSelf` 遇到 401 报错（`token_invalid`）时，立即调用 `deps.store.unset()` 物理擦除磁盘文件。
  - CLI 采用懒校验（`omnimux login status` 仅检查本地条目是否存在，`--verify` 才向云端发起验证），而桌面端仅读内存或缓存。
  - 这种行为造成用户体感上的「伪登录」与「随机掉线物理销毁」，且销毁后排障现场被彻底抹除。

### 1.2 路线抉择：默认采纳【路线 A（纯端侧统一）】

- **路线 A（当前采纳）**：在**完全不改动云端/服务端接口**的前提下，对 Desktop Hub、CLI、Cordis 插件的中枢凭据存储与解析流进行端侧收敛。建立单一真源（Canonical Store）、去即焚状态机、原子化无锁 I/O 以及向后兼容迁移管线。
- **路线 B（演进诉求）**：云端契约升级（设备码流下发 Refresh Token 家族、多 Client 命名 Slot 授予、可配置 TTL 与 RFC 9700 令牌轮换）。本方案将路线 B 作为**附录契约诉求**沉淀，为后续云端重构提供输入，当前代码实现严格锁定路线 A。

采纳路线 A 的理由：本期不改云端；P2/P3 可纯端侧止血；P1 的根治依赖路线 B，但端侧统一解析 + 去即焚即可把「突然掉线、现场被抹」降为「过期提示、保留凭据、一次重登」。

---

## 2. 统一凭据解析管线设计（单一真源 Canonical Store）

### 2.1 凭据解析优先级（Read Pipeline）

所有端（Desktop GUI、中枢插件 `plugins/omnimux`、CLI）统一遵循以下自顶向下的解析链：

```
[Level 1] 进程环境变量 (Explicit Env Override)
          process.env.OMNIMUX_ACCESS_TOKEN
                 │ (存在且非空) ───► 返回 Token (只读注入，严禁持久化)
                 ▼ (未命中)
[Level 2] DSH 凭据抽象接缝 (Credentials Seam)
          ctx.get('credentials').resolve('OMNIMUX_ACCESS_TOKEN') / $DSH_HOME/.credentials.yaml
                 │ (命中有效配置) ───► 返回 Token
                 ▼ (未命中)
[Level 3] 平台共享主存储 (Canonical Shared Store)
          ┌──────────────────────────────────────────────────────────┐
          │ macOS: OS Keychain (service="omnimux", acct="access_token")│
          │ Linux / Headless / CI: ~/.config/omnimux/secrets.json   │
          │ Windows: Windows Credential Manager (Target="omnimux")   │
          │          或 ~/.config/omnimux/secrets.json              │
          └──────────────────────────────────────────────────────────┘
                 │ (命中有效配置) ───► 返回 Token
                 ▼ (未命中)
[Level 4] 存量旧孤岛文件 (Legacy Fallback & Auto-Migrate)
          $DSH_HOME/omnimux/access-token
                 │ (命中) ───► 触发惰性升级(Promote)写回主存储 ───► 返回 Token
                 ▼ (未命中)
[Level 5] 未认证状态 (Unauthenticated)
```

### 2.2 主存储选型与 Fallback 论证

| 运行环境 | 主存储 (Primary) | 降级兜底 (Fallback) | 选型权衡与依据 |
|---|---|---|---|
| **macOS (Desktop / CLI)** | OS Keychain (`service="omnimux"`, `account="access_token"`) | `~/.config/omnimux/secrets.json` (0600) | 保持与现有 CLI `@omnimux/cli` 条目兼容；桌面与终端共享系统凭据；Keychain 读写异常时静默降级为文件，杜绝崩溃。 |
| **Linux Desktop / Headless / CI** | `~/.config/omnimux/secrets.json` (0600) | `$DSH_HOME/omnimux/access-token` | Linux 无统一安全密钥环标准，选用 XDG 规范路径，CI 及容器环境纯文件 0600 可靠落地。 |
| **Windows** | Windows Credential Manager (`omnimux/access_token`) | `%USERPROFILE%\.config\omnimux\secrets.json` (0600) | 优先接入系统凭据保管库，非特权/WSL 跨宿主环境可通过配置文件共享。 |

> **关键决议**：
> 1. **OS Keychain 严禁作为硬依赖**：在任何平台（包括 macOS），若系统安全服务拒绝、无 GUI 会话或报错，管线必须 100% 自动无损 fallback 至文件存储。
> 2. **`ctx.get('credentials')` 的定位**：官方 `credentials` 抽象仅作为 DSH 宿主环境的只读配置/注入接缝，中枢插件不可把主持久化职责完全绑定在私有 `.credentials.yaml` 上，主存储真源属于 `omnimux` 共享层。
> 3. **PAT 与 sk- 计量密钥隔离**：`OMNIMUX_ACCESS_TOKEN`（身份 PAT）与 `OMNIMUX_API_KEY` / `OMNIMUX_TOKEN`（`sk-` 计量密钥）分仓分键，严禁把 `sk-` 写成 ACCESS_TOKEN。

---

## 3. 每-Client 槽位模型（Slot Registry）与云降级策略

### 3.1 槽位标识规范（Slot ID Specification）

为支持多端复用及未来多授予隔离，定义标准的 Client Slot 命名空间：

`Slot ID = <client-type>[:<profile-or-instance>]`

- `desktop:default`：标准 OmniMux Desktop 桌面客户端。
- `desktop:dev-<profile>`：本地开发隔离档案（如 `~/.dsh-dev/drama`）。
- `cli:default`：开发者命令行终端。
- `agent:worker-<uuid>`：独立背景 Worker / CI Runner。

### 3.2 存储键映射规则

- **KeyChain / Credential Manager**：
  - 单槽位兼容键：`service = "omnimux"`, `account = "access_token"`（映射当前活跃槽位 `active_slot`）。
  - 多槽位扩展键：`service = "omnimux"`, `account = "slot:${slotId}:token"`。
- **文件存储结构（`~/.config/omnimux/secrets.json`）**：

```json
{
  "version": 1,
  "active_slot": "desktop:default",
  "slots": {
    "desktop:default": {
      "access_token": "<redacted>",
      "user_id": "1",
      "username": "developer",
      "updated_at": 1756278000000
    },
    "cli:default": {
      "access_token": "<redacted>",
      "user_id": "1",
      "username": "developer",
      "updated_at": 1756281600000
    }
  }
}
```

### 3.3 云不支持多授予时的退化策略（Last-Write-Wins with Truth Notice）

由于当前云端仅维护单用户最新 PAT（或单一 Token 互踢），端侧实施如下策略：

1. **统一活跃指针**：写入任意 Slot 时，同步更新 `active_slot`。
2. **最后写入者胜（Last-Write-Wins）**：各端读写默认读取当前激活的 Token。
3. **多档案隔离防串档**：`~/.dsh-dev` 开发档案强制在初始化时指定隔离的 profile 目录，并在读取共享存储时明确标识来源，防止开发态 Token 覆写生产环境凭据。
4. **单一真相提示**：当本地发现多枚不同值令牌（本机已实测存在）时，UI/CLI 提示「多端凭据不一致，已采用最近写入的槽位」，不静默覆盖未升迁的孤岛文件直到惰性迁移规则触发。

---

## 4. P3 治理：状态机、去即焚与校验规范

### 4.1 彻底废除 401 物理销毁（No-Op Wipeout Ban）

中枢插件 `plugins/omnimux/src/auth/identity.js` **严禁在 401 响应时执行 `deps.store.unset()`**。  
物理删除仅允许在用户**显式主动触发登出操作**（`omnimux logout` / UI 退出登录按钮）时调用。

### 4.2 认证状态机设计

```
                   ┌─────────────────┐
                   │ Unauthenticated │ (无 Token)
                   └────────┬────────┘
                            │ Login Success / Import
                            ▼
                   ┌─────────────────┐
     ┌────────────►│     Valid       │ (已认证，Verify 成功)
     │             └────────┬────────┘
     │                      │
     │            Verify 401│          Network Error
     │                      ▼                │
     │             ┌─────────────────┐       │
     │             │     Expired     │◄──────┤ (网络不通保持原态 / 标记 Net_Fail)
     │             │   (Token失效)   │
     │             └────────┬────────┘
     │                      │
     └──────────────────────┴──────── (重新登录 / 更新 Token)
```

| 状态 (Kind) | 判定条件 | 内存与磁盘行为 | 端上 UI / CLI 表现 |
|---|---|---|---|
| `unauthenticated` | 本地存储与环境变量均无 Token | 无凭据文件 | 显示未登录，引导设备码扫码登录。 |
| `valid` | Token 存在且 `/api/user/self` 校验 HTTP 200 | 内存标记有效，更新 `profile.json` 缓存及 `mtime` | 正常展示用户信息与配额，功能全开。 |
| `expired` | Token 存在但 `/api/user/self` 返回 401 (`token_invalid`) | **保留磁盘凭据**，内存标记过期；建立 `LoginGate` 拦截业务请求 | 顶部展示「登录态已过期，请重新登录」条幅；**严禁静默清空**，保留排障现场。 |
| `net_fail` | 请求网络不可达 / 超时 / DNS 失败 | 保持上次缓存状态，不改变过期标记 | 展示「离线/网络异常」，允许使用离线缓存或本地 stub。 |
| `self_failed` | 服务端返回 5xx / 502 / WAF 拦截等非 401 错误 | 保留凭据，记录诊断日志 | 展示「云端服务响应异常」，不标记 Token 失效。 |

### 4.3 校验策略对齐规范与 Proactive 过期估算

- **CLI 行为对齐**：`omnimux login status` 默认输出中，若未经验证则显式标注 `verified: false (cached)`；`omnimux login status --verify` 强制打网并输出状态机精准评级。
- **Hub / Desktop 对齐**：`/omnimux/auth/status` 默认 cache-only；`?verify=1` 走同一状态机。Host 响应继续走 `assertPublic()`，零 secret 泄漏。
- **Proactive TTL 估算（禁止瞎编）**：在无服务端 TTL 字段前，严格以凭据文件的 `mtime` 或 `updated_at` 作为代际基准：`Δt = Date.now() - updated_at`。若 `Δt > 7 天`，状态提示标注 `status: "potentially_expired"`（建议校验），但不直接置为 invalid。

---

## 5. 并发与一致性保障（轻量无锁与原子 I/O）

### 5.1 无锁竞争模型论证

由于路线 A 不包含由各端发起的后台自动 Token Refresh 机制，不存在「多进程同时抢跑换 Token」的高频写竞争场景。写操作仅发生在：

1. 用户在 Desktop 端扫码登录成功。
2. 用户在 CLI 执行 `omnimux login`。
3. 存量旧凭据首次加载时的惰性升迁（Promote）。

因此，无需引入重量级的跨进程分布式锁或守护进程，采用**轻量级文件原子写 + 内存状态同步**即可达成完备的一致性。

### 5.2 原子写入流水线（Atomic Write Pipeline）

针对所有 JSON / 文件写操作（`secrets.json`、`profile.json`、`access-token`）：

1. **临时文件写入**：在同一文件系统目录下写入 `.${filename}.${pid}.${Date.now()}.tmp`，设置安全权限位（`0600` / 目录 `0700`）。
2. **刷新落盘**：`fsync` 确保数据完全落盘。
3. **原子重命名**：利用 POSIX `fs.renameSync`（或 Windows 原子移动）替换目标文件，杜绝截断写或脏读。

```
[Write Request] ──► [Write to .token.tmp (mode: 0600)] ──► [fsync] ──► [rename to target]
```

### 5.3 代际检测与热加载（Generation Check）

- 读操作前校验目标存储文件的 `mtime`（及 macOS Keychain 的变更时间戳）。
- 当检测到文件被外部进程（如 CLI）更新时，中枢插件自动失效内存中的旧 Token / Profile 缓存，重新执行加载。

---

## 6. 存量迁移、清理与收敛清单

### 6.1 惰性升迁规则（Lazy Promotion）

在系统初始化或中枢启动阶段，执行单向安全迁移：

1. 若主存储（Keychain 或 `~/.config/omnimux/secrets.json`）已存在有效凭据，优先使用，跳过迁移。
2. 若主存储为空，但检测到 `$DSH_HOME/omnimux/access-token`（8/24 存量孤岛文件）：
   - 读取该 Token，尝试写入共享主存储；
   - 写入成功后，将旧文件更名为 `$DSH_HOME/omnimux/access-token.migrated`，实现平滑升迁且不丢老用户登录态。

### 6.2 残留临时状态清理

- 扫描并清理 `~/.config/omnimux/login-flows/` 目录下所有超过 24 小时（或已过 `expires_at`）的 `.json` 临时设备码会话文件。中枢侧 pending device flow 仅存在于进程内 Map（`plugins/omnimux/src/auth/pending.js`），随进程退出自然消失，无需磁盘清理。

### 6.3 命名与行为收敛清单

| 模块 / 组件 | 涉及路径 | 原行为 | 收敛后标准行为 |
|---|---|---|---|
| **中枢插件 Store** | `plugins/omnimux/src/auth/store.js` | 仅读写 `$DSH_HOME/omnimux/access-token` | 接入统一凭据解析管线，支持 Keychain + `secrets.json` + 存量 Fallback。 |
| **中枢插件 Identity** | `plugins/omnimux/src/auth/identity.js` | 401 立即 `store.unset()` 物理清空 | 401 进入 `expired` 状态，保留本地凭据，禁止物理删除。 |
| **CLI Secrets** | `@omnimux/cli/src/lib/secrets.js` | 独立写 Keychain，非 macOS 独写 `secrets.json` | 统一 `service="omnimux", acct="access_token"` 规范，统一 JSON Schema。 |
| **CLI Status 命令** | `@omnimux/cli/src/commands/login.js` | `status` 仅判本地存在，`--verify` 简单报错 | 统一输出状态机枚举（`valid`/`expired`/`net_fail`）。 |

---

## 7. 安全与合规矩阵表

| 存储位置 / 路径 | 操作系统权限位 | 是否加密 | 泄漏暴露面评估 | 审计与防泄漏钩子 |
|---|---|---|---|---|
| **macOS Keychain** (`svce: omnimux`) | OS ACL 级隔离 | ✅ 系统级加密 (AES) | 仅授权 App / 终端签名进程可读 | 系统安全审计日志。 |
| **Linux/Fallback** `~/.config/omnimux/secrets.json` | `0600` (目录 `0700`) | ❌ 明文（受文件权限保护） | 同主机其他非 root 用户不可读 | 启动时强校验权限位，不合规强行 `chmod 0600`。 |
| **存量文件** `$DSH_HOME/omnimux/access-token` | `0600` (目录 `0700`) | ❌ 明文 | 仅迁移期过渡使用 | 迁移后立即重命名禁用。 |
| **内存态缓存** (V8 Heap) | 进程私有内存 | ❌ 内存明文 | 进程 Dump / 调试器 | 严禁挂在 `globalThis`；对象解构严格受控。 |
| **Host HTTP 路由** (`/omnimux/auth/*`) | 内部本地环回 | ❌ JSON Payload | Web UI 渲染拦截 | **强制调用 `assertPublic()`**：正则匹配 `/access_token\|"sk-/`，命中立即拦截抛错。 |
| **x.ai 视觉适配** | N/A | N/A | 视觉无 Secret 暴露 | N/A（与 Secret 存储无关）。 |

---

## 8. 分期落地计划（Phased Roadmap）

实施按 `docs/contracts/plugin-git-pr.md`：从 `origin/main` 开 `agent/omnimux-unified-auth-adr` 类分支 + PR，合入永远老板；多代理用 `./scripts/git-wt.sh` 隔离。生产 profile 经 fork `yarn omnimux:sync` 物化分发，禁 link 工作树。

### 8.1 Phase 1：止血与去即焚（P3 止血阶段）

- **目标**：彻底消除 401 物理误删、收敛统一解析读序、引入文件原子写。
- **涉及文件范围**：
  - `plugins/omnimux/src/auth/store.js`
  - `plugins/omnimux/src/auth/identity.js`
  - `plugins/omnimux/src/auth/omnimux-auth.js`
- **验收命令与回归**：

```bash
pnpm test
./scripts/smoke-drama.sh
# 新增回归：401 注入用例断言令牌文件仍存在且状态 = expired
```

### 8.2 Phase 2：共享主存储与双向平滑迁移

- **目标**：打通 macOS Keychain 与 `~/.config/omnimux/secrets.json` 共享主存储，实现 Desktop 与 CLI 双向互认，完成存量令牌自动升迁。
- **涉及文件范围**：
  - `plugins/omnimux/src/auth/keychain.js`（新增平台适配层）
  - `plugins/omnimux/src/auth/store.js`
  - `@omnimux/cli/src/lib/secrets.js`（CLI 仓，独立 PR）
- **验收命令与回归**：

```bash
omnimux login status --verify
pnpm test
./scripts/smoke-drama.sh
```

### 8.3 Phase 3：路线 B 契约对接与 Refresh 家族支持（依赖云端就绪）

- **目标**：对接云端新协议，支持 Refresh Token 静默换票与 RFC 9700 轮换检测。
- **涉及文件范围**：
  - `plugins/omnimux/src/auth/refresh-client.js`
  - `plugins/omnimux/src/auth/identity.js`
- **前置条件**：附录 B 所列云端端点上线，且 `parseDeviceTokenResponse` 能解析 `refresh_token` / `expires_in`。

---

## 9. 风险登记册（Risk Register）

| 序号 | 风险描述 | 严重度 | 发生概率 | 缓解与应对策略 |
|---|---|---|---|---|
| **R1** | **macOS Keychain 权限弹窗干扰**：Desktop 与 CLI 签名证书不一致导致系统弹窗要求授权。 | 高 | 中 | 实现 `keychain` 模块容错机制；若 500ms 内调用被拒绝或超时，立即静默降级到 `~/.config/omnimux/secrets.json`。 |
| **R2** | **CF / WAF 拦截干扰自检**：`/api/user/self` 偶发被 Cloudflare 验证码拦截产生 403/503。 | 中 | 高 | 状态机严格区分 401 与其他 HTTP 状态，将 WAF 拦截归类为 `self_failed`，严禁判定为 Token 失效。 |
| **R3** | **Dev 与 Prod 双 Profile 凭据混淆**：开发环境（`~/.dsh-dev`）启动时误覆盖生产环境 Token。 | 高 | 低 | 环境变量注入及 dev profile 初始化时，给存储路径注入独立命名空间，杜绝生产槽位被脏写。 |
| **R4** | **CI / Docker Headless 无安全环**：自动化测试环境无 Keychain 支持。 | 高 | 高 | 架构设计保证纯文件模式为一等公民（First-class citizen），无安全存储时自动以 0600 文件运行。 |
| **R5** | **旧版本 CLI 兼容窗口**：存量老 CLI 用户未及时升级，仍写入旧单槽位 Keychain。 | 中 | 中 | 中枢插件读取逻辑全面兼容旧版 `service="omnimux", acct="access_token"` 命名规范。 |
| **R6** | **升级故障与回滚保障**：新版本出现文件读写异常导致无法读取登录态。 | 高 | 低 | 保留 `.migrated` 原始文件；提供一键回滚开关 `OMNIMUX_AUTH_LEGACY_STORE=1` 强制切回旧文件读取模式。 |
| **R7** | **云端短 TTL 未知上限**：本机实证今日 14:58 新令牌当晚即 `token_invalid`；TTL 精确值未知。 | 高 | 已发生 | 路线 A 只能「去即焚 + 明确过期提示」；根治依赖路线 B。风险登记册第一条。 |
| **R8** | **桌面 Electron 与 CLI 不同进程读 Keychain**：无 GUI 会话时 `security` CLI 可能失败。 | 中 | 中 | 与 R1 同一 fallback；Desktop 主进程不自管 Token，只走中枢插件管线。 |

---

## 10. 开放问题清单（Open Questions）

1. **多 Profile 开发隔离粒度**：当开发者在同一机器上多开 `omnimux-dev-drama` 与 `omnimux-dev-clip` 时，是否默认共享主登录账号，还是必须在 profile 配置文件中完全物理隔离凭据？*(建议：默认共享主登录身份，支持环境变量单独覆盖)*
2. **Keychain Service 命名所有权**：当前使用的 `service="omnimux"` 是否需要在后续正式发布时注册为带反向域名的正式标识（如 `ai.omnimux.desktop`）？*(建议：当前保持 `omnimux` 兼容已有 CLI)*
3. **老用户存量孤岛文件删除时机**：惰性升迁生成的 `access-token.migrated` 文件是否需要在 30 天后由定时任务静默物理清理？*(建议：不自动删，留给用户/运维；回滚开关依赖它)*
4. **云端 TTL 精确值与吊销语义**：今日 14:58 新令牌当晚失效，是固定 TTL、单会话吊销，还是设备流未真正完成写入？需一次受控实验（登录成功后立刻 `--verify`，再按小时抽样）才能把 R7 从「已发生」升级为「可量化」。
5. **Windows Credential Manager 目标名**：路线 A Phase 2 落地 Windows 时，Target 用 `omnimux` 还是 `omnimux/access_token`？需对照 GCM wincred 惯例拍板。

---

## 附录：【路线 B 云端契约诉求附录】（供后续批次引用）

为彻底解决 P1（无 Refresh Token 导致的频繁掉线），向云底座（定制 `new-api` 服务层）提出以下接口协议演进诉求：

1. **设备码轮询返回 Refresh Token 家族（RFC 6749 / RFC 9700）**：
   - `POST /api/user/device/token` 响应 Payload 增加 `refresh_token` 与 `expires_in`（如 7200 秒）：

     ```json
     {
       "access_token": "<redacted>",
       "refresh_token": "<redacted>",
       "token_type": "Bearer",
       "expires_in": 7200,
       "user_id": 1,
       "username": "developer"
     }
     ```

2. **增加刷新令牌端点**：
   - `POST /api/user/token/refresh`
   - 请求体：`{ "refresh_token": "<redacted>", "client_id": "desktop:default" }`
   - 支持 **Per-Family Token Rotation** 与 **Reuse Detection**（一旦旧 Refresh Token 被重放，立即吊销该家族全部活跃 Token）。
3. **支持多 Client Slot 授予管理**：
   - 后台用户中心展示当前已授予的客户端列表（Desktop、CLI、Web），支持单个客户端独立吊销，消除全端共用单 Token 导致的互相踢下线现象。
4. **TTL 配置化**：管理面可调 access_token `expires_in`（建议默认 ≥ 7 天）与 refresh 家族寿命，避免「当天发当天废」。
