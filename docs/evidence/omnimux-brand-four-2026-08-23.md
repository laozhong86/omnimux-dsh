# OmniMux live brand-four probe — 2026-08-23

Measured against `https://api.omnimux.ai/v1` with a real `OMNIMUX_API_KEY`.
No secrets below. Catalog exists; chat-completions is the gate for hub.

## Catalog

`GET /v1/models` 200, 95 ids. All four present:

| display | id |
|---|---|
| MiniMax M3 | `minimax-m3` |
| Claude Opus 4.6 | `claude-opus-4-6` |
| GPT 5.5 | `gpt-5.5` |
| Gemini 3.1 Pro Preview | `gemini-3.1-pro-preview` |

`GET /api/pricing` also lists all four (context copy says ~1M for GPT/Claude).

## Chat completions (`POST /v1/chat/completions`)

Prompt: `Reply with exactly OK`, non-streaming. Image: 64px red PNG.

### Round 1 (gate all four)

| model | text OK | image (64px red) | `reasoning_effort=max` | notes |
|---|---|---|---|---|
| `minimax-m3` | ❌ 403 twice, 0.6s | not run | not run | `API Key 所属专属分组不再允许当前用户使用` |
| `claude-opus-4-6` | ✅ 200 / `OK` / 2.0s | ✅ 200 / `Red` / 4.8s | ❌ 403 Claude Code group | omitting effort works; sending `max`/`off` routed to `/v1/messages`-only group |
| `gpt-5.5` | ❌ omit effort: 45s then 90s timeout | ⏳ timeout 60s with `low` | not completed | `reasoning_effort=low` text ✅ 200 / `OK` / 2.1s and returned `reasoning_content`. Follow-up batch then `Connection refused` — stop probing. |
| `gemini-3.1-pro-preview` | ✅ 200 / `OK` / 3.9s | ✅ 200 / `Red` / 4.1s | ✅ 200 / 7.0s | `off` also 200, but dumps thinking into `content` (same pattern as gemini-3.7-flash). No `reasoning_content`. |

### Round 2 (skip MiniMax; sequential)

| model | case | HTTP | time | notes |
|---|---|---|---|---|
| `claude-opus-4-6` | omit | 403 | — | Claude Code group flake |
| `claude-opus-4-6` | `low` / `high` | 403 | — | same group |
| `claude-opus-4-6` | `medium` | 400 | — | `max_tokens` vs `thinking.budget_tokens` |
| `claude-opus-4-6` | **`max`** | **200 `OK`** | — | returned `reasoning_content` |
| `gpt-5.5` | omit | 200 `OK` | 19.56s | slow without effort |
| `gpt-5.5` | `low` | 200 `OK` | 2.24s | image+`low` 200 `red` |
| `gpt-5.5` | **`max`** | **400** | — | `'max' is not supported`. Enum: `none`, `low`, `medium`, `high`, `xhigh` |
| `gpt-5.5` | `off` | 400 | — | not in enum |
| `gpt-5.5` | `none` / `medium` | timeout 50s | — | not offered until re-probed |
| `gpt-5.5` | `high` | 200 | ~3s | |
| `gpt-5.5` | `xhigh` | 200 | 44.67s | UI `max` maps here |

## Gate (updated)

MiniMax M3 is skipped by product request (`minimax-m3` stays off the hub list). The other three pass chat-completions with a usable effort map.

Hub wiring 2026-08-23:

| id | image | `reasoningEfforts` | notes |
|---|---|---|---|
| `claude-opus-4-6` | yes | `max: max` only | other levels 403/400 flake; `max` 200 |
| `gpt-5.5` | yes (`low`) | `low` / `high` / `xhigh` / **`max: xhigh`** | no Off; literal `max` 400s |
| `gemini-3.1-pro-preview` | yes | `max: max` | `off` dumps thinking into `content` |
| `minimax-m3` | — | — | not wired |

Product `agent-default-model` stays `deepseek-v4-flash-vision-exp`. One-shot default stays `gemini-3.7-flash`.
