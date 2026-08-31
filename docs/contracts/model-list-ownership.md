---
title: "OmniMux model-list ownership"
id: "contract-model-list-ownership"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-18"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
---

# OmniMux model-list ownership

The app's OmniMux model list has exactly one owner: `plugins/omnimux/cordis.patch.yml`.

## Why one owner

`llm-pi-ai` is a row in the composed config. Every layer that patches it by id
(`- id: llm-pi-ai`) **replaces the whole row** — the loader matches by id and
swaps the entire `config`, it does not merge. So a machine-local
`cordis.patch.yml` that re-declares the row with a different model subset
silently shadows the plugin's list: the app then shows whatever the local
layer wrote, and the plugin's (correct, live-verified) list disappears. That
is exactly the bug this file documents: the web profile's local layer once
declared `omnimux-compat` with stale context windows (131072/200000/262144
that the gateway does not document) and hid the plugin's list.

Layer order (later wins on id match):

1. bundle patches (each `dsh.profile.bundles` entry, `omnimux` ships its
   patch here)
2. profile-local `cordis.patch.yml` (`~/.dsh/profiles/<name>/cordis.patch.yml`)
3. `$DSH_HOME/cordis.patch.yml`
4. launcher `--patch` overlays

The plugin patch lives at layer 1, so any layer-2+ re-declaration wins. Keep
it that way: user layers set `agent-default-model` only.

## What the plugin patch owns

- The `omnimux` provider row under `llm-pi-ai` (`apiKeyEnv`,
  `baseURL`, `api`).
- The model list. Every id is verified live against
  `api.omnimux.ai/v1/models`; `contextWindow` values come from
  `api.omnimux.ai/api/pricing` and are set only where that catalog documents
  the number. Undocumented windows stay unset and fall back to the requester's
  `defaultContextWindow` — an over-high client-side window causes context
  over-fill and server rejects, so an unset window is the safe direction.
- Input modalities: `input: [text, image]` is declared only where the measured
  gateway matrix confirms image input (`docs/evidence/omnimux-modality-2026-08-18.md`
  — a 64px red image plus a content prompt; rows that read the color declare
  image). gpt-5.6-sol, grok-4.6, kimi-k3, gemini-3.7-flash accept images;
  deepseek-v4-pro/flash and glm-5.3 reject `image_url` upstream and stay
  text-only; claude-opus-5 accepts images on `/v1/messages` but the
  chat-completions group is 403 for this key. The pi-ai adapter refuses an
  image before it attaches when the model's `input` lacks `image`, and a model
  over-claiming image input is rejected by the provider mid-turn after the
  message is durable — so the measured matrix, not the pricing catalog text
  (which lags reality: it only mentions grok-4.6), is the gate.
  `verify:models` enforces both directions keyless against `CHAT_MODELS`.
- Reasoning efforts: each model declares `reasoningEfforts` from the measured
  gateway matrix (`docs/evidence/omnimux-reasoning-2026-08-20.md`). Only
  levels that returned HTTP 200 on `POST /v1/chat/completions` with
  `reasoning_effort` are listed; the route default is `reasoning: max` so the
  composer effort pane opens on Max. A literal `off` 400s on most upstreams
  — rows that can disable thinking map `off` to wire `none`; rows that still
  think when the field is omitted do not offer Off. The route also sets
  `supportsDeveloperRole: false` because this gateway rejects the
  `developer` role pi-ai would otherwise send on a reasoning model.
  `verify:models` fails if a patch row omits the `reasoningEfforts.max`
  key or if the route default is not `max`. The UI `max` value is usually
  wire `max`; `gpt-5.5` maps it to `xhigh` because the wire enum has no
  literal `max` (`docs/evidence/omnimux-brand-four-2026-08-23.md`).
- The one-shot expert whitelist (`plugins/omnimux/src/text/catalog.js`
  `CHAT_MODELS`) is a subset of this patch list, and its `input` matrix must
  agree with the patch. `verify:models` fails on any mismatch or if a
  whitelist id is missing from the patch.
- Deployment / instance gating for the expert whitelist only:
  `Config.gate.models.textComplete.<id>` can hide a whitelist row from
  `omnimux_text_complete` without editing `cordis.patch.yml`. A model is
  callable iff `text.models[].enabled !== false` **and**
  `gate.models.textComplete[id] !== false`. Phase-1 gate does **not** filter
  the chat composer model list; that list remains owned solely by this patch.

## Changing the list

1. Edit `plugins/omnimux/cordis.patch.yml` (provider row + models).
2. Run `pnpm verify:models` — modality consistency always runs (keyless);
   the gateway existence check needs `OMNIMUX_API_KEY` (reads
   `~/.config/omnimux/dsh.env` when the env var is absent).
3. Restart the app (patches resolve at every launch) and check the Settings →
   Models list shows the new set.

## User layers

A user-layer `cordis.patch.yml` MUST NOT declare `- id: llm-pi-ai`. It sets
`agent-default-model` (provider `omnimux`, a model id from the plugin list).
See the drama profile (`~/.dsh/profiles/drama/cordis.patch.yml`) for the
reference shape.

## Verify

- `pnpm verify:models` — modality declarations match the measured matrix in
  `CHAT_MODELS` (keyless), every patch model declares `reasoningEfforts.max`
  with route `reasoning: max` (keyless), and every declared model id exists
  on the live gateway (with a key).
- `dsh --profile <name> --dump-config` — the composed `llm-pi-ai` provider
  block must come from `omnimux` (dump headers name the patching layer),
  and no `omnimux-compat` provider may exist anywhere.
