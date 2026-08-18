# Capabilities

Honest surface for both coding agents and the product agent. If a row is stub or absent, do not tell the user it works. **unproven** = 代码已写、仅 mock 测试通过、未对真实 OmniMux 跑通，不得对用户宣称可用。 Hub vs vertical I/O: [contracts/hub.md](contracts/hub.md).

| Surface | Status | Evidence |
|---|---|---|
| `dsh plugin add ./plugins/dsh-omnimux` | **real** | 2026-08-14：`DSH_SRC=… pnpm dsh --profile drama --help` 启动不再 `provide` 崩溃；`scripts/verify-cordis-propagate.mjs` |
| `dsh plugin add ./plugins/dsh-drama` | **real** | same |
| `drama_project_status` | **real** | reads `series/` |
| `drama_init_project` | **real** | creates empty `series/` |
| `drama_upsert_series` / `drama_upsert_shot` / `drama_confirm_bible` | **real** | writes yaml/json |
| `drama_generate_shot` | **real + stub** | live: [docs/evidence/e2e-dsh-2026-08-15.md](evidence/e2e-dsh-2026-08-15.md) (`mode: "live"`, task `task_7iQMXxX3tL6EBiPUmi9NYiigZL1rtMzx`, 1732475-byte mp4). Default sync; `background` optional. Writes `job_id` on submit; `generating` + `job_id` resumes. No seam → stub or `needs-provider`. |
| Third-party compatible endpoint via `OMNIMUX_BASE_URL` env | **unproven** | 仅 OpenAI-video 兼容形；只有 OmniMux 本身经真实任务验证过 |
| `omnimux_video_submit` | **real** | [docs/evidence/omnimux-video-2026-08-14.md](evidence/omnimux-video-2026-08-14.md). Routed through `Config.media` (`omnimux` + `openai-media`) |
| Media provider route table | **real** (keyless) | `src/media/route.js`. Unknown provider/protocol fail at resolve. One live vendor row: OmniMux |
| OmniMux chat as default dsh model | **absent** | no adapter; Settings custom provider still works |
| `identity` provide for other plugins | **real** (keyless) | `ctx.get('identity').status` / `require`. PAT never in the payload. HTTP `/omnimux/auth/*` still for the browser. |
| `imageGenerate` / `omnimux_image_submit` | **real** | Default `gpt-image-2`. Live: [docs/evidence/omnimux-image-2026-08-16.md](evidence/omnimux-image-2026-08-16.md). Also live: `grok-imagine-image`. `nano_banana_2` excluded (tokens-flow 403) |
| `needs-omnimux` error | **real** (keyless) | `identity.require()` throws `needs-omnimux` when unsigned. Official-only tools throw the same code when unsigned |
| `omnimux_social_data` | **unproven** | First cut: tiktok/video, tiktok/user, instagram/post via `/v1/chat/completions`. Keyless only |
| Accounts / publish tools | **unproven** | `omnimux_accounts_*` + `omnimux_publish_*` wrap `/api/social/v1`. Unauthenticated → `needs-omnimux` |
| Apps hub capability list | **real** (keyless) | `GET /omnimux/capabilities`. Apps overlay now renders the catalog, not this list |
| Custom provider in Settings (manual) | **upstream** | dsh Web → Add a custom provider → `https://api.omnimux.ai/v1` |
| Drama Center login / upload / payout | **docs only** | skill `tiktok-drama-center`; no tool |
| Official dsh plugin marketplace | **absent** | install via `dsh plugin add`; discover via `dsh-plugin` topic |
| OmniMux settings login (device HTTP, no CLI) | **unproven** | Host `/omnimux/auth/*` + settings 个人资料登录 + 侧栏「应用」. Keyless unit tests only; live login not claimed until a manual pass |
| OmniMux product chrome (logo / wordmark / tab title / favicon) | **real** (keyless) | Hub `src/brand` overlay + `tapIndex` boot. Tests in `plugins/dsh-omnimux/src/brand/*.test.js`. No sibling `omnimux-brand` package |
| OmniMux Apps catalog (bundled + optional remote JSON) | **real** (keyless) | Host `GET /omnimux/apps` + Apps overlay. Remote is `Config.apps.remote` (default off). Tests inject fetchers. Contract: [contracts/apps-catalog.md](contracts/apps-catalog.md) |
| Official Apps row `accounts` | **real** (keyless) | Bundled catalog lists `dsh-omnimux-accounts@0.1.0`. Isolated add/remove: `scripts/accept-apps-install.sh`. npm registry publish still absent |
| Accounts app UI | **unproven** | Settings 账号 + `GET /omnimux/accounts`. Filters and connect/disconnect are keyless-tested. Live OmniMux account list not claimed |
| `dsh web --host 0.0.0.0` | **blocked upstream** | official CLI rejects it |

Phase labels in older notes (`A` / `B` / `C`) are history. Use this table.

Do not put `fetch` to OmniMux inside a vertical. Verticals I/O only through hub seams.

Promote `omnimux_video_submit` / live generate to **real** only with: 真实 `task_id` + 产物 URL + 磁盘 mp4 + `mode: "live"` 返回日志.
