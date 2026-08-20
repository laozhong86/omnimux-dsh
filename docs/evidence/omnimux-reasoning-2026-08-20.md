# OmniMux live reasoning-effort evidence — 2026-08-20

Measured against `https://api.omnimux.ai/v1/chat/completions` with a real
`OMNIMUX_API_KEY`. No secrets below.

## Method

- Prompt: `Reply with exactly OK`. `max_tokens: 16`. Non-streaming.
- Each directory model was sent with no `reasoning_effort`, then with
  `off`, `low`, `high`, `max`. Follow-up spellings (`none`, `minimal`,
  `medium`, `xhigh`) ran where the 400 body named them.
- A level is offered only when the gateway returned HTTP 200. 400s that
  name the allowed enum are the source of the wire vocabulary. Timeouts
  are not 400s: `gemini-3.7-flash` `high` timed out twice at 60–75s, but
  `low` / `medium` / `max` accepted the same field, so `high` stays on
  the offer.
- `developer` role probe: `deepseek-v4-flash` with
  `messages[0].role = developer` returned 400
  (`unknown variant developer, expected one of system, user, assistant,
  tool, latest_reminder`). The route therefore sets
  `supportsDeveloperRole: false`.

## Matrix

| model | Off | other offered levels | default | notes |
|---|---|---|---|---|
| `claude-opus-5` | no — 400, enum is `low`/`medium`/`high`/`xhigh`/`max` | low, medium, high, xhigh, max | max | `max`/`xhigh` returned `reasoning_content`. Some concurrent `high`/`medium` hits 403 Claude Code group; that is group routing, not the effort enum. |
| `gpt-5.6-sol` | yes, wire `none` | low, medium, high, xhigh, max | max | 400 on literal `off` and on `minimal`. Reasoning stays hidden (`reasoning_content` absent). |
| `grok-4.6` | no — 400 `Invalid reasoning effort` | low, medium, high, max | max | Always returns `reasoning_content`. `low` used fewer reasoning tokens than `max`. |
| `kimi-k3` | no | low, medium, high, max | max | Always reasons. Literal `off` is 200 but still emits `reasoning_content`, so Off would be a lying control. |
| `deepseek-v4-pro` | yes, wire `none` | minimal, low, medium, high, xhigh, max | max | Literal `off` 400 (`none`/`minimal`/`low`/`medium`/`high`/`xhigh`/`max`). `none` returned no reasoning. |
| `deepseek-v4-flash` | yes, wire `none` | minimal, low, medium, high, xhigh, max | max | Same enum as Pro. `none` returned no reasoning. |
| `gemini-3.7-flash` | no | low, medium, high, max | max | Field accepted. Thinking dumps into `content` rather than `reasoning_content`. Literal `off` still dumps thinking; omitting the field was the only clean `OK`. `high` timed out under a 60s read. |
| `glm-5.3` | no — 400, valid `low`/`medium`/`high` | low, medium, high, max | max | Always returns `reasoning_content`. Live `max` is 200 even though the `off` 400 body omitted it from the enum. |

## Compat

- Route: `thinkingFormat: openai` (send `reasoning_effort`, not DeepSeek
  `thinking: {type}`), `supportsReasoningEffort: true`,
  `supportsDeveloperRole: false`, `reasoning: max`.
- `requiresReasoningContentOnAssistantMessages: true` on every row that
  returned `reasoning_content` (Claude, Grok, Kimi, both DeepSeek, GLM).
  GPT-5.6 Sol and Gemini 3.7 Flash did not, so they omit that switch.
