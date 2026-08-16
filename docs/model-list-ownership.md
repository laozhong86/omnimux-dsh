# OmniMux model-list ownership

The app's OmniMux model list has exactly one owner: `plugins/dsh-omnimux/cordis.patch.yml`.

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

1. bundle patches (each `dsh.profile.bundles` entry, `dsh-omnimux` ships its
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
- Input modalities: `input: [text, image]` is declared only where the pricing
  catalog documents image input (grok-4.6 says "text+image input"; the other
  seven descriptions do not mention images). The pi-ai adapter refuses an
  image before it attaches when the model's `input` lacks `image`, and a model
  over-claiming image input is rejected by the provider mid-turn after the
  message is durable — so the catalog, not real-world brand knowledge, is the
  gate. `verify:models` enforces both directions keyless.

## Changing the list

1. Edit `plugins/dsh-omnimux/cordis.patch.yml` (provider row + models).
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

- `pnpm verify:models` — modality declarations match the pricing catalog
  (keyless) and every declared model id exists on the live gateway (with a
  key).
- `dsh --profile <name> --dump-config` — the composed `llm-pi-ai` provider
  block must come from `dsh-omnimux` (dump headers name the patching layer),
  and no `omnimux-compat` provider may exist anywhere.
