---
title: "#552 engineering runtime diagnosis — official workspace action"
id: "qa-552-engineering-runtime"
type: "engineering-evidence"
status: "blocked-live-retest"
date: "2026-09-05"
subsystem: "omnimux-inspiration"
---

# #552 Engineering runtime diagnosis — official workspace action

## Scope and environment

- Worktree: `/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh-wt-replicate-dismiss-reversal-552`
- Source baseline before this repair: `f37a728030a91f315fa3adf5487b4dfa1c7c2b02`
- L2 URL: `http://127.0.0.1:44202`
- L2 profile: `omnimux-dev-replicate-dismiss-reversal`
- L2 `DSH_HOME`: `/Users/x/.dsh-dev/tasks/replicate-dismiss-reversal`
- Actual Host process before controlled restart: PID `15622`, command `/Users/x/Desktop/Project/Github/deepseek-harness/apps/cli/lib/bin.js --profile omnimux-dev-replicate-dismiss-reversal --host 127.0.0.1 --port 44202 --no-open`.
- Actual Host source runtime: `/Users/x/Desktop/Project/Github/deepseek-harness`, CLI package version `0.1.2-alpha.3`; this is the source used by the L2 launcher, not the unrelated packaged-App path.
- Controlled L2-only host restart: `pnpm dev:env restart-host replicate-dismiss-reversal`; replacement PID `53395`, same profile, same task data and port. No public App or public development port was restarted.

## Repro and collected evidence

1. Initial L2 DOM had one visible workspace row `测试环境`, one visible official per-workspace button `button[aria-label="在“测试环境”中新建会话"]`, no active session (`window.__omnimuxAttachments.getActiveSessionId() === "default"`), and no composer/session rows.
2. The generic product-wrapped `button.FrcAXG_newSession.omnimux-sidebar-inline-new-session` was also present.
3. The running official runtime is explicit about the difference:
   - `WorkspaceRuntime.startSession()` resolves `workspaceId ?? currentWorkspaceId ?? recentWorkspaceId`; with all three absent it runs `sessions.clear()` (`packages/client/ui-workspace/src/client/navigation.ts:165-181` in the actual Host source; matching deployed runtime behavior).
   - `WorkspaceRuntime.connectWorkspace(workspaceId)` resolves/reuses a blank workspace session or calls the official `sessions.create({ workspaceId })` (`navigation.ts:108-117`).
4. A real ego-browser click on the visible per-workspace control produced `POST /api/session/create` with the existing workspace id. It then persisted an official blank session file `storages/session_projcache/sessions/session-e6cc3213-5e5b-4ea6-9186-d699c9b24002.json`; its `sessionListMetadata.blank` is `true` and its `cwd` is `/Users/x/Desktop/Project/测试环境`. No direct session API, runtime injection, fake blank state, message send, or cloud request was used.
5. Before the browser tab became stale, the generic action left the presentation on `default`; this exactly matches the no-current/no-recent clear arm. The prior QA conclusion that no official request occurred is therefore disproved for the explicit workspace control: the official RPC was actually emitted and a blank session was written.
6. After the required controlled Host restart, the original ego tab was stale and a fresh task space loaded the same L2 host but still did not project a session/composer. A repeated per-workspace click produced neither a new `session/create` network event nor a console/RPC error in the fresh browser capture. This is a separate runtime projection/connection failure, so CTA end-to-end success could not truthfully be claimed.

## Root cause

`plugins/omnimux-inspiration/src/client/new-session-click.js` chose the generic `.newSession` control whenever `sessions.list.current` was empty. In this L2 state that generic official action has no `currentWorkspaceId` or `recentWorkspaceId`, so the running DSH `WorkspaceRuntime.startSession()` clears selection instead of selecting the one visible workspace. The explicit per-workspace official control has the required workspace id and is proven to invoke the official session RPC.

## Minimal repair

- Added `findSingleWorkspaceNewSessionButton()`.
- When the official session snapshot has no current session, the helper first chooses exactly one visible per-workspace `在…中新建会话` / `New session in …` official button. It refuses to guess if there are zero or multiple choices, and otherwise retains the generic official-control/menu behavior.
- The repair does not call `sessions.create`, does not use an attachment/default fallback, does not alter library/canvas handling, and does not send a message.

## Regression guards

`plugins/omnimux-inspiration/src/client/new-session-click.test.js` now proves:

- exactly one visible per-workspace official control is identified;
- multiple visible workspace controls are rejected as ambiguous;
- with no official current session, the helper clicks the explicit workspace control once, never clicks the generic control, and accepts only the authoritative blank `sessions.list` target.

## Validation

| Check | Result |
|---|---|
| Focused official-session + CTA tests | PASS — 44 passed, 0 failed |
| Full `pnpm --filter omnimux-inspiration test` | PASS — 181 passed, 0 failed, 2 skipped |
| `pnpm --filter omnimux-inspiration build` | PASS |
| Built artifact SHA-256 | `445864cd3d1e665bf419e2621d2b9967e2b87691d03d475686610673d6f878f3` |
| L2 live initial official RPC | PASS — official `session/create` observed and blank persistence verified |
| L2 final CTA A | BLOCKED — post-restart session projection did not restore, so a truthful attachment/prompt/middle-column inspection was not possible |

## Screenshots

- `docs/evidence/qa-552-engineering-before.png`
- `docs/evidence/qa-552-engineering-official-workspace-new-session.png`
- `docs/evidence/qa-552-engineering-official-baseline-after.png`

These are diagnostic before/baseline artifacts, not a claimed CTA-success demo.

## Temporary environment changes and cleanup

- Created earlier by authorized official UI action: L2-owned blank session `session-e6cc3213-5e5b-4ea6-9186-d699c9b24002` under the task-specific `DSH_HOME`; it contains no messages and exists solely as the official lifecycle probe result.
- Existing L2 directory `/Users/x/.dsh-dev/tasks/replicate-dismiss-reversal/qa-552-live-workspace` was not adopted or modified in this engineering pass.
- Restarted only the task-specific L2 Host; watcher stayed running and verified the rebuilt artifact.
- No production/public profile, App, plugin sync, push, merge, or official Host source was modified.

## Required next probe

Resolve why the restarted L2 client does not project the persisted official blank session into `sessions.list`/the conversation UI. Capture the exact Host RPC response or connection error for that projection. Once the baseline is visible, use a clean official blank session and run CTA A: one real card click, then record the resulting authoritative session id, one explicit inspiration attachment, exact one-copy `/video-deconstruct\n\n…` composer text, Send untouched, and library/middle-panel snapshots.
