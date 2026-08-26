---
title: "OmniMux live reader evidence — 2026-08-23"
id: "evidence-omnimux-reader"
type: "evidence"
status: "accepted"
authority: "L3"
date: "2026-08-23"
authors: ["x", "agent-architect"]
subsystem: "global"
---

# OmniMux live reader evidence — 2026-08-23

No secrets below. Probe used a stored `OMNIMUX_API_KEY` against production.

## Contract

`POST /v1/reader`

```json
{ "model": "jina-reader-v1", "url": "https://example.com" }
```

| Case | Host | HTTP | Body |
|---|---|---|---|
| Happy path | `https://omnimux.ai` | 200 | `text/plain; charset=utf-8`, starts `Title: Example Domain` |
| Happy path | `https://api.omnimux.ai` | 200 | same markdown (~367 bytes for example.com) |
| Missing token | either | 401 | JSON `Invalid token` |
| GET | either | 404 | JSON |
| Missing / bad URL | either | 500 | JSON `invalid_request` |
| Cloudflare without a browser User-Agent | either | 403 | Cloudflare 1010 |

Hub default base is `https://api.omnimux.ai/v1` (`OMNIMUX_BASE_URL` overlay). Client sends `User-Agent: OmniMuxHub/0.1.2 (omnimux_page_fetch; +https://omnimux.ai)`.

## Hub mapping

Tool `omnimux_page_fetch` must `response.text()` on 200. `createOfficialClient.withSk` always `response.json()` and is the wrong path.

Success object: `{ mode: "live", model: "jina-reader-v1", url, title, pageContent }`.

Local Go checkout (`relay/channel/jina`) only has rerank + embeddings. Production is ahead of that tree.

Agent-in-App window QA is **not** in this file. Code + this HTTP probe ≠ session-visible delivery.

## L2 Agent session — 2026-08-24

Isolation Host `omnimux-dev-page-fetch-qa` @ `http://127.0.0.1:44120`, hub link to source, L2 credentials flattened for current credentials-local. Ego task space `page-fetch-qa` (id 23).

| Case | Result |
|---|---|
| Agent `omnimux_page_fetch({ url: https://example.com })` | Tool call 1.5s; `mode: live`, `model: jina-reader-v1`, `title: Example Domain`, `pageContent` starts `Title: Example Domain` |
| Agent `ftp://example.com` | Tool Failed: `Error: url must be http(s)` (no invented body) |
| URL → `products_create` | Fetch then create `prd_fb7ab277` / `E2E PageFetch Widget`; description quoted Jina text; later DELETE 200 |

Screenshots live in fork `.workbuddy/artifacts/2026-08-24-page-fetch-example.png` and `2026-08-24-page-fetch-products-create.png`. No keys in those files.
