---
title: "OmniMux live modality evidence — 2026-08-18"
id: "evidence-omnimux-modality"
type: "evidence"
status: "accepted"
authority: "L3"
date: "2026-08-18"
authors: ["x", "agent-architect"]
subsystem: "global"
---

# OmniMux live modality evidence — 2026-08-18

Measured against `https://api.omnimux.ai/v1/chat/completions` with a real
`OMNIMUX_API_KEY`. No secrets below.

## Method

- A 64×64 solid-red PNG was attached as an `image_url` part alongside a prompt
  asking for the image color. A model that answered with the color received
  the image; one that rejected the part type or read a wrong/no color did not.
- A 1×1 PNG was sent first; `grok-4.6` rejected it with "dimensions 1x1 are
  too small" (a minimum-size gate, not a modality rejection), so the matrix
  uses the 64px run.
- `file` (PDF) and `video_url` were accepted by the gateway envelope but the
  content never reached the model (a PDF containing `BANANAFRUIT` returned
  `SHARK`; a video returned `NO_VIDEO`), so neither is treated as usable.
- `input_audio` (a 0.05s 440Hz WAV) reached `gemini-3.7-flash` (it answered
  "tone") but not `gpt-5.6-sol` (`NO_AUDIO`); harness attachment blocks only
  cover text/image today, so audio is recorded but not yet wired.
- `claude-opus-5` was probed on both protocols: `POST /v1/chat/completions`
  returns 403 ("This group is restricted to Claude Code clients (/v1/messages
  only)") for this key, while `POST /v1/messages` with an Anthropic image part
  answered "Red". It is image-capable but the chat-completions group is not
  yet upgraded for the harness, so it stays text-only in this release.

## Matrix

| model | image | audio | file (PDF) | video |
|---|---|---|---|---|
| `claude-opus-5` | ✅ via `/v1/messages`; ❌ chat-completions group 403 | ❌ | ❌ | ❌ |
| `gpt-5.6-sol` | ✅ "Red" | ❌ `NO_AUDIO` | ❌ not delivered | ❌ |
| `grok-4.6` | ✅ "red" (min size > 1×1) | ❌ rejects part | ❌ rejects part | ❌ |
| `kimi-k3` | ✅ "Red" | ❌ rejects part | ❌ rejects part | ❌ |
| `deepseek-v4-pro` | ❌ `unknown variant image_url` | ❌ | ❌ | ❌ |
| `deepseek-v4-flash` | ❌ `unknown variant image_url` | ❌ | ❌ | ❌ |
| `gemini-3.7-flash` | ✅ "Red" | ✅ "tone" | ❌ not delivered | ❌ |
| `glm-5.3` | ❌ `type is invalid, allowed: ['text']` | ❌ | ❌ | ❌ |

Also probed image-only: `gemini-3.6-flash`, `gemini-3.5-flash`,
`gemini-3-flash`, `gemini-2.5-flash`, `gemini-2.5-flash-lite`,
`gemini-2.5-pro`, `gemini-3-pro`, `gemini-3.1-pro` all answered "Red";
`gpt-5.5` answered "red". Those ids are not yet in the chat directory.
