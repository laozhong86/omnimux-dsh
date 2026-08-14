# Capabilities

Honest surface for both coding agents and the product agent. If a row is stub or absent, do not tell the user it works. **unproven** = 代码已写、仅 mock 测试通过、未对真实 OmniMux 跑通，不得对用户宣称可用。

| Surface | Status | Evidence |
|---|---|---|
| `dsh plugin add ./plugins/dsh-omnimux` | **real** | 2026-08-14：`DSH_SRC=… pnpm dsh --profile drama --help` 启动不再 `provide` 崩溃；`scripts/verify-cordis-propagate.mjs` |
| `dsh plugin add ./plugins/dsh-drama` | **real** | same |
| `drama_project_status` | **real** | reads `series/` |
| `drama_init_project` | **real** | creates empty `series/` |
| `drama_upsert_series` / `drama_upsert_shot` / `drama_confirm_bible` | **real** | writes yaml/json |
| `drama_generate_shot` | **unproven + stub** | stub（显式工件）/ needs-provider（默认）/ live 经 `videoGenerate` 缝（cordis 级已验，端到端未验） |
| Third-party compatible endpoint via `OMNIMUX_BASE_URL` env | **unproven** | 仅 OpenAI-video 兼容形；只有 OmniMux 本身经真实任务验证过 |
| `omnimux_video_submit` | **real** | [docs/evidence/omnimux-video-2026-08-14.md](evidence/omnimux-video-2026-08-14.md) |
| OmniMux chat as default dsh model | **absent** | no adapter; Settings custom provider still works |
| OmniMux image jobs | **absent** | video only |
| Custom provider in Settings (manual) | **upstream** | dsh Web → Add a custom provider → `https://api.omnimux.ai/v1` |
| Drama Center login / upload / payout | **docs only** | skill `tiktok-drama-center`; no tool |
| Official dsh plugin marketplace | **absent** | install via `dsh plugin add`; discover via `dsh-plugin` topic |
| `dsh web --host 0.0.0.0` | **blocked upstream** | official CLI rejects it |

Phase labels in older notes (`A` / `B` / `C`) are history. Use this table.

Do not put `fetch` to OmniMux inside `dsh-drama`.

Promote `omnimux_video_submit` / live generate to **real** only with: 真实 `task_id` + 产物 URL + 磁盘 mp4 + `mode: "live"` 返回日志.
