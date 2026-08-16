# Execution hub

Normative I/O for `dsh-omnimux` and every vertical. Status of a live surface is [capabilities.md](../capabilities.md). Rationale: [2026-08-16 hub I/O and facilities](../decisions/2026-08-16-hub-io-and-facilities.md).

## Terms

| Term | Means | Must not be called |
|---|---|---|
| Execution hub | `dsh-omnimux`. Product chrome, identity, model routes, media seams, official-only tools, Apps shell | Gateway, 网关, OmniMux cloud, a vertical |
| Vertical | One scene plugin (`dsh-drama`, later e-commerce / brand). Owns its disk and tools | Hub sibling, second chrome/auth package |
| Neutral seam | `ctx.provide` / `ctx.get` interface a third-party adapter may satisfy | An `omnimux_*` official-only tool |
| Official-only tool | `omnimux_*` tool that exists only because OmniMux cloud implements it | A swap-in provider |
| OmniMux cloud | Hosted HTTP at `omnimux.ai` and `api.omnimux.ai` | The hub plugin |

Do not call the hub a gateway. Do not implement a second OmniMux HTTP client inside a vertical.

## I/O

```text
vertical tool  --input-->  ctx.get('<seam>') | omnimux_* tool
                         hub holds keys + HTTP + poll + download
vertical tool  <--output--  { mode, taskId?, url? } or a thrown error
vertical disk  <--only the vertical writes its own files
```

- A vertical sends a request (prompt, dest, ids, signal). It does not open sockets to OmniMux and does not read `OMNIMUX_*` secrets.
- The hub returns a result object or throws. It does not write `series/`, 货盘, or any other vertical store.
- Missing hub: the vertical stubs from its own explicit fixture, or throws `needs-provider`. It must not pretend a model ran.
- Official-only tool and OmniMux is not configured or the user is not signed in: throw `needs-omnimux`. Do not return 500 or a successful empty value.
- Apps and other plugins consume the same seams. They must not import `dsh-omnimux` internals.

Chat stays on the dsh LLM surface (`llm-pi-ai` `omnimux` route). The hub must not register a parallel chat tool.

## Media layers

One generation seam, many vendors and HTTP bodies. Do not put vendor fields or protocol paths on the seam. Do not copy OmniMux cloud channel types (Kling `50`, Gxgen `61`, …) into the hub.

```text
vertical / omnimux_* tool
        │  { prompt, dest, duration?, image?, provider?, model?, signal? }
        ▼
1. Capability   videoGenerate / imageGenerate     stable I/O
        ▼
2. Route        Config.media + request            providerId + modelId + protocol
        ▼
3. Protocol     openai-media / later              HTTP path, submit, poll
        ▼
4. Vendor map   omnimux / later                   field names, envelope, extra headers
        ▼
5. Job          submit handle / poll / download
        ▼
     { mode: "live" | "submitted", taskId, url? }
```

| Layer | Owns | Must not own |
|---|---|---|
| Capability | dest, prompt, optional `image` / `duration` / `taskId` / `wait`, result | base URL, API key, `/v1/…` path |
| Route | `Config.media.providers`, default provider, model id per capability | channel integers, billing |
| Protocol | how to speak HTTP (`openai-media` today) | OmniMux-only envelope quirks |
| Vendor map | catalog defaults, pick `task_id` / URL, talking-head extras | a second seam |
| Job | submit handle, poll by `taskId`, write dest | a task table, task UI, `ctx.jobs` |

`execute` job handle:

| Call | Result |
|---|---|
| `{ prompt, dest }` or `wait: true` | submit, poll, download → `{ mode: "live", taskId, url }` |
| `{ prompt, dest, wait: false }` | submit only → `{ mode: "submitted", taskId }` unless the provider already returned a URL (then `live` + download) |
| `{ dest, taskId }` | skip submit; poll + download → `{ mode: "live", taskId, url }` |

Session-visible background work stays on dsh `ctx.jobs`. The hub does not store a task ledger. The vertical writes `taskId` to its own disk as soon as `submitted` (or `live`) returns.

`t2v`, `i2v`, talking-head are **variants** of `videoGenerate` (optional `image` and speech fields). They are not new seams and not new providers.

A vertical omits `provider` and `model` unless it must pin one. The hub fills them from `Config.media`. Unknown provider or protocol fails at resolve, not mid-HTTP.

```text
media:
  defaultProvider: omnimux
  providers:
    omnimux:
      protocol: openai-media
      baseUrl: https://api.omnimux.ai/v1
      apiKeyEnv: OMNIMUX_API_KEY
      models:
        video: seedance-2-0-fast
        image: gpt-image2
```

`OMNIMUX_BASE_URL` / `OMNIMUX_VIDEO_MODEL` / `OMNIMUX_IMAGE_MODEL` / `OMNIMUX_API_KEY` overlay the `omnimux` row at resolve time. Adding a vendor is a new `providers` row plus `src/media/vendors/<id>.js`. Adding a wire format is a new `src/media/protocols/<id>.js`. Do not grow `apply()` or the seam.

## Seams and tools

| Name | Kind | Request | Success | Failure |
|---|---|---|---|---|
| `identity` | official provide | `{ verify?: boolean }` | public profile fields only; never a token | unsigned / `token_invalid` |
| `videoGenerate` | neutral provide | `{ dest, prompt?, duration?, image?, speech?, audio?, provider?, model?, taskId?, wait?, signal? }` | `{ mode: "live" \| "submitted", taskId, url? }` | `needs-provider`, `omnimux-unconfigured`, `unknown-provider`, `unknown-protocol`, `omnimux-invalid-request`, task/download errors |
| `imageGenerate` | neutral provide | same job handle as video | same | same |
| `omnimux_video_submit` | hub tool over `videoGenerate` | same as the seam | same | same |
| `omnimux_image_submit` | hub tool over `imageGenerate` | same as the seam | same | same |
| `omnimux_social_data` | official-only tool | `platform` + `capability` + `url`/`id`/`query`; `sk-` | `{ platform, capability, model, data }` | `omnimux-unconfigured`, `omnimux-invalid-request` |
| `omnimux_accounts_*` / `omnimux_publish_*` | official-only tools | connect / list / presign / create / get post; access token | upstream JSON, secrets stripped | `needs-omnimux` |

`audioGenerate` does not exist until OmniMux publishes a live audio generation contract. Digital-human / talking-head is a `videoGenerate` request (reference image, duration, speech constraints), not a third HTTP client.

## Official-only (C-class)

These cannot be swapped for a third-party endpoint. Unconfigured calls throw `needs-omnimux` and name the missing install or sign-in.

- Identity: device login, `GET /api/user/self`, public profile cache
- Social data: OmniMux social-data capabilities (`sk-`)
- Social publish: connect account, list accounts, media presign, create post (`OMNIMUX_ACCESS_TOKEN`)

The hub may wrap those HTTP calls. It must not store an account matrix, posting calendar, warmup roster, or Drama Center upload.

## Credentials

| Secret | Who uses it | Browser |
|---|---|---|
| `OMNIMUX_ACCESS_TOKEN` | identity + social publish | never |
| `OMNIMUX_API_KEY` / `OMNIMUX_TOKEN` | chat route, media, social data | never |

Do not export a `sk-` as `OMNIMUX_ACCESS_TOKEN`.

## Package layout

Hub implementation stays in `plugins/dsh-omnimux`. New capability = new directory under that package, not a sibling plugin.

```text
plugins/dsh-omnimux/src/
  config.js              plugin Config (brand + media)
  brand/                 chrome overlay
  auth/                  device login, token store, provide('identity'), /omnimux/auth/*
  llm/                   omnimux chat route / future adapter only
  media/
    route.js             resolve provider + protocol + model
    job.js               download dest
    video.js             videoGenerate over the route
    protocols/           openai-media.js  (HTTP)
    vendors/             omnimux.js       (envelope + defaults)
  official/              social-data and publish tools
  client/                Profile, Apps shell
```

The plugin entry exports `Config` (Standard Schema). Brand strings and `media.providers` live there, not in `apply()`.

## Vertical duties

| Vertical may | Vertical must not |
|---|---|
| `ctx.get` a listed seam | import hub modules or ship an OmniMux client |
| call `omnimux_*` tools via the model | store hub secrets |
| write its own disk contract | implement chrome, login, or provider routes |
| stub or throw `needs-provider` when a seam is absent | claim `mode: "stub"` is a model render |

`dsh-omnimux` itself is not a shelf app. Catalog rows belong on OmniMux cloud.
