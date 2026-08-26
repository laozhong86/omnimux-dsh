---
title: "OmniMux live image evidence — 2026-08-16"
id: "evidence-omnimux-image"
type: "evidence"
status: "accepted"
authority: "L3"
date: "2026-08-16"
authors: ["x", "agent-architect"]
subsystem: "global"
---

# OmniMux live image evidence — 2026-08-16

`scripts/verify-omnimux-image-live.mjs` → `executeOmnimuxImage`. No secrets below.

| Field | `gpt-image-2` (default) | `grok-imagine-image` |
|---|---|---|
| HTTP | 200 `POST /v1/images/generations` | 200 same path |
| Envelope | sync `data[0].b64_json` | sync `data[0].url` |
| Result | `mode: "live"`, dest **1542823** bytes png | `mode: "live"`, dest **98213** bytes |
| Elapsed | 32.2s | 10.3s |

`nano_banana_2` is out of this evidence (tokens-flow 403, being repaired elsewhere). `gpt-image2` (no hyphen) is a different async GoEasy row, not the default.

Hub now maps `b64_json` to a data URL and writes dest without fetching.
