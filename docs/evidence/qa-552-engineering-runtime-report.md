---
title: "#552 engineering runtime and draft-protection evidence"
id: "qa-552-engineering-runtime"
type: "engineering-evidence"
status: "partial-live-baseline; CTA-fixture-blocked"
date: "2026-09-05"
subsystem: "omnimux-inspiration"
---

# #552 engineering runtime and draft-protection evidence

## Environment and provenance

- Worktree: `/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh-wt-replicate-dismiss-reversal-552`
- Source base: `8de974391cdb3136b300d40083a3d544f9e5c846`
- Authorized isolated L2: `http://127.0.0.1:44202/`, profile `omnimux-dev-replicate-dismiss-reversal`.
- Host PID `53395` runs `/Users/x/Desktop/Project/Github/deepseek-harness/apps/cli/lib/bin.js`, version `0.1.2-alpha.3`, with `DSH_HOME=/Users/x/.dsh-dev/tasks/replicate-dismiss-reversal`; watcher PID `15792` is `scripts/watch-plugin.mjs omnimux-inspiration` from this worktree.
- The Host current directory is this worktree. The live browser resource batch carries `rev=0598c85ecd13`; after the watcher rebuild, the served plugin source is the worktree build whose SHA-256 is recorded below.
- The user-owned workspace `/Users/x/Desktop/Project/测试环境` and the prepared QA workspace `/Users/x/.dsh-dev/tasks/replicate-dismiss-reversal/qa-552-live-workspace` both exist and are readable (`drwxr-xr-x`). Session storage is private (`0700` directory, `0600` session files).

## Official session baseline: real RPC/state result

1. The official explicit per-workspace control `button[aria-label="在“测试环境”中新建会话"]` was previously clicked through ego-browser, not a direct `sessions.create` call.
2. It emitted real `POST /api/session/create` and persisted `session-e6cc3213-5e5b-4ea6-9186-d699c9b24002.json` with `cwd=/Users/x/Desktop/Project/测试环境` and official `sessionListMetadata.blank=true`.
3. Fresh L2 observation now projects that exact legal blank session: `window.__omnimuxAttachments.getActiveSessionId()` is `session-e6cc3213-5e5b-4ea6-9186-d699c9b24002`; the sidebar contains `测试环境` then `新会话`; one official Lexical input exists (`data-composer-input=true`, `data-lexical-editor=true`) with empty text; Send is present but untouched.
4. This disproves the earlier generic-clear baseline as a blocker. The no-current generic action calls the official clear path; the explicit workspace action is the required one-ID official gesture and has a projected composer on the fresh L2 page.

## Root cause and minimal repair

**Root cause:** `plugins/omnimux-inspiration/src/client/composer-inject.js` selected a global DOM editor and full-replaced it, while `SessionSummary.blank` only proves an empty message log. Thus a reused blank target could have an unsent draft that was overwritten, and a retained/hidden old editor could consume the write.

**Repair:** `session-prefill.js` holds one bounded intent `{targetSessionId,prompt}`. `SessionPrefillConsumer`, registered in the official session-scoped `conversation.composer.dock` slot, consumes it only when that slot's `sessionId` equals the resolved target and `useInput(...draft)` is exactly empty. It invokes the official `inputActions.setDraft(prompt)` exactly once. A non-empty target draft returns `draft-protected`, does not replace or append, and the CTA adds no attachment. A target mismatch waits; unavailable input actions, replacement intent, or expiry rejects and releases the CTA. The CTA retains its explicit target id and only adds the attachment after safe prefill succeeds.

The API shape was verified against the actual L2 runtime source, not an installed package assumption: `packages/client/ui-conversation/src/client/contract/slots.ts:127-171` declares `conversation.composer.dock` as `scope: 'session'` with `useInput` and `inputActions`; `apply.ts:175-193` supplies session-bound `inputActions`.

## Regression coverage

`plugins/omnimux-inspiration/src/client/session-prefill.test.js` proves:

- target scope match writes the exact prompt once through `inputActions.setDraft`;
- a blank-message session with non-empty draft returns `draft-protected`, does not write or attach;
- a delayed old composer cannot consume the new target's intent;
- absent target `inputActions` fails safely;
- replacement/cancellation resolves the earlier CTA so busy state cannot remain locked.

`replicate-to-chat.test.js` additionally proves protected prefill yields zero attachment writes. Existing focused guards retain official-only click, no `sessions.create`, one explicit attachment target, no send, and library/canvas preservation.

## Checks

| Check | Result |
|---|---|
| Focused session/composer/CTA test set | PASS — 66 passed, 0 failed |
| `pnpm --filter omnimux-inspiration test` | PASS — 187 passed, 0 failed, 2 skipped |
| `pnpm --filter omnimux-inspiration build` | PASS |
| Built `plugins/omnimux-inspiration/lib/client.js` SHA-256 | `286c90c5bdaf3d09f659da639284fb517867e78f539b4f2392e463d5e30193a4` |
| `pnpm verify:slots` | PASS — 0 violations |
| `pnpm verify:stages` | PASS |
| `git diff --check` | PASS |

## L2 runtime acceptance matrix

| Scenario | Actual outcome | Status |
|---|---|---|
| Baseline official workspace → session → input | Existing official blank session projects with non-default id and empty official Lexical input. Screenshot: `docs/evidence/qa-552-l2-baseline.png`. | PASS |
| A: library CTA | Inspiration library opens, but its authorized local data set contains no card/CTA after a 5-second settled observation. No cloud request, seed, DOM patch, or fake card was used. | BLOCKED: no real CTA fixture |
| B: library + canvas CTA | Same missing real CTA fixture; canvas was not altered. | BLOCKED: no real CTA fixture |
| C: existing draft protection | Covered by the official slot seam's focused regression tests. No existing user draft was touched in L2. | PASS (automated); live CTA fixture blocked |

This is not a claim that A/B are successful. The only remaining runtime prerequisite is an authorized local inspiration fixture exposed through the normal library UI/API, then one real CTA click in A/B and a known non-empty target-draft C check. No further server restart was performed because L2 is healthy and the missing data is a fixture condition, not a host failure.
