---
title: "决策：OmniMux 统一共享复用认证配置落地方案（极简纯文件标准）"
id: "decision-unified-shared-auth-config"
type: "decision"
status: "accepted"
authority: "L2"
date: "2026-08-27"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
---

# 决策：OmniMux 统一共享复用认证配置落地方案（极简纯文件标准）

日期：2026-08-27。  
状态：**已通过（标准基线）**。  
性质：核心架构 / 安全与凭据子系统决策。规范 Desktop Hub、CLI、Agent 运行时与中枢插件间统一的凭据存储、解析流水线、生命周期状态机与多端共享复用机制。

依据：对标 Codex / Gemini CLI 业界最佳实践（全平台一致采用 0600 权限文件，不依赖 OS 钥匙串）。当前项目处于未上线阶段，不考虑历史存量迁移与复杂回滚，直接按全新统一标准部署。

---

## 1. 决策陈述与核心原则

### 1.1 核心原则
1. **全面废弃 OS Keychain 作为凭据依赖**：
   - 彻底避免 macOS / Windows / Linux 之间的系统密钥环异构开销、权限弹窗及无头（Headless / CI / Docker）环境失效问题。
   - 对标 Codex（`~/.codex/auth.json`）与 Gemini CLI（`~/.gemini/oauth_creds.json`），全平台统一采用受操作系统 ACL 保护的文件存储（`0600` 文件，`0700` 目录）。
2. **轻装上阵，零迁移负担**：
   - 放弃对旧孤岛文件（`$DSH_HOME/omnimux/access-token`）的惰性升迁与备份机制；
   - 放弃复杂回滚兼容开关，全端直接收敛至全新标准配置目录。
3. **去即焚生命周期保护**：
   - 401 报错严禁物理删除磁盘凭据，改由内存标记 `expired` 状态并阻断请求；仅在显式退出登录时清空。

---

## 2. 统一凭据解析管线设计（单一真源）

### 2.1 凭据解析优先级（Read Pipeline）

所有端（Desktop GUI、中枢插件 `plugins/omnimux`、CLI）统一遵循以下自顶向下的极简读取流水线：

```
[Level 1] 进程环境变量 (Explicit Env Override)
          process.env.OMNIMUX_ACCESS_TOKEN
                 │ (存在且非空) ───► 返回 Token (只读注入，严禁持久化)
                 ▼ (未命中)
[Level 2] DSH 凭据抽象接缝 (Credentials Seam)
          ctx.get('credentials').resolve('OMNIMUX_ACCESS_TOKEN') / $DSH_HOME/.credentials.yaml
                 │ (命中有效配置) ───► 返回 Token
                 ▼ (未命中)
[Level 3] 统一共享凭据文件 (Canonical Secrets Store)
          ~/.config/omnimux/secrets.json (权限 mode: 0600)
                 │ (命中有效配置) ───► 返回 Token
                 ▼ (未命中)
[Level 4] 未认证状态 (Unauthenticated)
```

---

## 3. 存储结构规范（`~/.config/omnimux/secrets.json`）

### 3.1 文件规范
- **文件路径**：`~/.config/omnimux/secrets.json`（Windows 为 `%USERPROFILE%\.config\omnimux\secrets.json`）。
- **权限控制**：文件严格设定为 `0600`（所有者可读写，其他不可读）；所在目录严格设定为 `0700`。启动检测到权限不合规时自动执行 `chmod 0600`。
- **原子写流水线**：写入时统一走 `atomicWriteFileSync`（同目录临时文件写入 $\rightarrow$ `fsync` 落盘 $\rightarrow$ `chmod 0600` $\rightarrow$ `rename` 原子替换）。

### 3.2 JSON 结构契约

兼容平铺读取与多客户端槽位扩展：

```json
{
  "version": 1,
  "active_slot": "desktop:default",
  "access_token": "<redacted_access_token>",
  "slots": {
    "desktop:default": {
      "access_token": "<redacted_access_token>",
      "user_id": "1",
      "username": "developer",
      "updated_at": 1756281600000
    },
    "cli:default": {
      "access_token": "<redacted_access_token>",
      "user_id": "1",
      "username": "developer",
      "updated_at": 1756281600000
    }
  }
}
```

- **平铺兼容**：顶层 `access_token` 直接映射当前活跃槽位的令牌，直接兼容精简消费端。
- **写入策略**：Desktop 与 CLI 写入任意槽位时，同步刷新 `active_slot` 与顶层 `access_token`。

---

## 4. 认证状态机与去即焚治理

### 4.1 彻底废除 401 物理销毁
中枢插件 `plugins/omnimux/src/auth/identity.js` **严禁在 401 响应时执行物理文件删除（`unset`）**。  
物理清除操作仅在用户发起显式注销（`/omnimux/auth/logout` 或 CLI `omnimux logout`）时触发。

### 4.2 状态机定义

```
[Unauthenticated] ──(登录成功)──► [Valid]
                                  │
                          (Verify 401)
                                  ▼
                            [Expired] (保留本地文件，内存标记失效，拦截业务)
                                  │
                          (重新登录 / 续约成功)
                                  ▼
                               [Valid]
```

- `unauthenticated`：本地无 Token，引导设备流登录。
- `valid`：Token 存在且验证成功，更新 profile 缓存。
- `expired`：Token 校验返回 401，保留磁盘文件，标记过期并建立请求 Gate 弹窗拦截，UI 展示“登录过期”条幅。
- `self_failed` / `net_fail`：5xx / 网络不可达，不改变过期标记，保留离线状态。

---

## 5. 安全与权限矩阵

| 存储目标 | 操作系统权限位 | 加密状态 | 暴露面评估 | 审计与防泄漏 |
|---|---|---|---|---|
| `~/.config/omnimux/secrets.json` | `0600` (目录 `0700`) | 操作系统 ACL 保护 | 仅当前用户进程可读 | 启动时强检权限位并自动收紧 |
| 内存态缓存 (V8 Heap) | 进程内部内存 | 明文 | 仅调试器/Dump 可视 | 严禁挂载至 `globalThis` |
| Host HTTP 接口 | 环回网络 | 脱敏 JSON Payload | 页面渲染拦截 | 强制调用 `assertPublic()` 正则拦截令牌泄漏 |

---

## 6. 演进诉求（云端契约）

虽然端侧统一为极简纯文件，但由于云端设备码流目前缺少 Refresh Token，未来云端升级仍建议提供以下能力：
1. `POST /api/user/device/token` 返回 `refresh_token` 与 `expires_in`；
2. 提供 `POST /api/user/token/refresh` 刷新接口（基于 RFC 9700 轮换规范）；
3. 后台支持多 Client Slot 会话管理与独立吊销。
