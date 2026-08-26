# omnimux-clip

OmniMux Clip / AI 剪辑工坊。独立 `shell.overlay` 剪辑工作台；与画布只交换 JSON（`omnimux-clip-*` CustomEvent + Host HTTP `/omnimux-clip/api`）。

Agent 面：`clip_get` / `clip_edit` / `clip_view` / `clip_snapshot` / `clip_diagnostics` / `clip_export`。判断层见 `skills/clip-craft/SKILL.md`。失败抛 `ClipDomainError`，禁止 `{ ok: false }` 当成功值。

## 身份

| 项 | 值 |
|---|---|
| id | `omnimux-clip` |
| tier | `tier-1-app` |
| storage | `$DSH_HOME/omnimux/clip/{projects,exports,snapshots,tmp}/` |
| HTTP | `/omnimux-clip/api` |

## 本地验证

```sh
npm install
node scripts/build-client.mjs
node --test src/*.test.js
```

加载走绝对路径 patch，禁止杀桌面 App。L2：`node scripts/omnimux.mjs dev start <task> omnimux-clip`。
