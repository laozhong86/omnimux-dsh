---
title: "#552 CTA official-session seam evidence"
id: "evidence-552-cta-official-session-seam"
type: "evidence"
status: "partial-live"
date: "2026-09-05"
subsystem: "omnimux-inspiration"
---

# #552 CTA official-session seam evidence

## Runtime identity

- L2 Host: `http://127.0.0.1:44202/`, process `15622`.
- Profile: `omnimux-dev-replicate-dismiss-reversal` with `DSH_HOME=/Users/x/.dsh-dev/tasks/replicate-dismiss-reversal`.
- Host CWD and loaded `omnimux-inspiration` package resolve to `/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh-wt-replicate-dismiss-reversal-552`.
- The watcher process `15792` is active for `omnimux-inspiration`; it rebuilt `plugins/omnimux-inspiration/lib/client.js` to 231947 bytes, SHA-256 `53ec6a41a038c605c031a6df7a41de375b40bdb8f2a2d69193e35555604fd1c0`.

## Root cause

`new-session-click.js` previously used `window.__omnimuxAttachments.getActiveSessionId()` as its only completion oracle and required a new, non-`default` id. The official runtime instead makes `sessions.list` the lifecycle authority: `SessionSummary.blank` records that a selected session is an official blank target, and `uiWorkspace.startSession()` may legally reuse that blank session. Therefore a legitimate blank reuse kept the attachment projection unchanged, timed out after 1.5 seconds, and caused `replicate-to-chat.js` to return before reveal, attachment, and prefill.

The active official sources establish the seam:

- `packages/api/session-controller/src/client/sessions/service.ts:39-61` defines `SessionSummary.blank` and `SessionListState.current/byId`.
- `packages/client/ui-workspace/src/client/navigation.ts:90-132` returns a matching blank session before calling `sessions.create`, then selects it in `startSession`.
- `packages/api/session-controller/src/client/sessions/service.ts:396-410` documents that a created target is synchronously present in `sessions.list` before resolution.

## Minimal design applied

1. The inspiration client injects its already-public `sessions` service and passes it to `bindOfficialSessions`.
2. The official button/menu item is still the only action dispatch. No `sessions.create`, no project creation, and no send action were introduced.
3. Completion requires `sessions.list.getSnapshot().current` whose `byId[current].blank === true`; same-id blank reuse is a successful, explicit target.
4. If the public sessions seam is present, attachment projection is never used as success evidence. Attachment is written only to the resolved explicit id.
5. Immediately after dispatch, the middle conversation column is uncollapsed and set to `split`. Target timeout/error keeps that reveal and returns visible retry feedback with zero attachment/prompt writes.
6. The library tab and canvas panel remain untouched.

## Regression proof

- Focused lifecycle tests: 41 pass / 0 fail.
- Package test suite: 178 pass / 0 fail / 2 skipped.
- `pnpm verify:stages`: pass.
- `pnpm --dir plugins/omnimux-inspiration build`: pass.

New regression cases cover:

- official same-id blank reuse;
- rejection of a non-blank official target even if an unrelated attachment projection changes;
- dispatched-but-unresolved action reveals the middle column while performing zero writes;
- resolved blank-reuse target receives the explicit attachment id and exactly one prompt.

## Live L2 observation and current blocker

The browser confirmed L2 loaded the worktree plugin and exposed `window.__omnimuxAttachments` plus `window.__omnimuxWorkbench`; the rebuilt artifact contains `bindOfficialSessions` and `resolvedOfficialTarget`.

The supplied L2 fixture currently has only the workspace row `测试环境`, no current session, and attachment active id `default`. Clicking both its workspace-specific official New Session control and the official rail New Session control leaves the runtime in the same state (no session tree row, no composer, active id `default`). This is an upstream fixture prerequisite rather than a CTA patch result: official `startSession()` clears selection when it has no resolvable current/recent workspace target (`navigation.ts:114-132`). Consequently the required live scenarios A/B/C cannot truthfully be completed in this L2 state without first provisioning/selecting a usable fixture session; no page injection or fake-success patch was used.

## QA handoff

With a fixture that can create/select an official blank session, exercise:

1. Library + blank official session: CTA must preserve the same official blank id when the host reuses it, show one attachment, and prefill exactly `/video-deconstruct\n\n` plus one constraint paragraph without sending.
2. Library + canvas: CTA must retain both the library tab and canvas, while the middle column becomes visible in split mode.
3. Contentful old session: CTA must leave its attachments/draft untouched and write only to the newly selected or officially blank-reused target.
4. Force official action error: middle column stays revealed, visible error appears, and there are zero attachment/prompt writes.
5. Double click: second CTA returns busy; no second official action or write.
6. Add another plugin's default attachment before CTA: it must remain unclaimed.
