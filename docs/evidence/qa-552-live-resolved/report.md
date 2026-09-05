---
title: "#552 L2 independent live QA — official session seam"
id: "qa-552-live-resolved"
type: "qa-evidence"
status: "fail"
date: "2026-09-05"
subsystem: "omnimux-inspiration"
---

# #552 L2 independent live QA — official session seam

## Scope and runtime identity

- **QA target:** `b70143c0ec9ebc8b4889e6200f338ce223071dae` — `fix(inspiration): confirm official blank session target`.
- **Worktree:** `/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh-wt-replicate-dismiss-reversal-552`.
- **Actual isolated L2 URL / ego task space:** `http://127.0.0.1:44202/` / `476` (reused existing QA real-session tab; not a new task space).
- **Host / watcher:** PID `15622` / `15792`; profile `omnimux-dev-replicate-dismiss-reversal`; `DSH_HOME=/Users/x/.dsh-dev/tasks/replicate-dismiss-reversal`.
- **Loaded product artifact:** `plugins/omnimux-inspiration/lib/client.js`, SHA-256 `53ec6a41a038c605c031a6df7a41de375b40bdb8f2a2d69193e35555604fd1c0` (matches requested hash). The L2 page loaded the plugin from `http://127.0.0.1:44202/plugins/??omnimux-inspiration/client.js&rev=fb190495f1af`.
- **Boundaries:** QA only; no product-source edits, no `sessions.create`, no page runtime patch/mock, no send/generation/cloud request, no public 45120/44200/43120 interaction, no sync/push/PR/merge. Existing untracked `docs/evidence/qa-552-replicate-dismiss-reversal-report.md` was not changed.

## Fixture and preparation

The previous fixture was not treated as a blocker. I reused the L2 local row `qa552-live-fixture` (`QA-552 isolated inspiration fixture`, source `https://example.invalid/qa-552-live-fixture`) and the pre-existing official session id `session-bdc04d83-3a50-4546-b2cd-5604bb110c46`. I also inspected the official workspace picker and created the isolated existing directory `/Users/x/.dsh-dev/tasks/replicate-dismiss-reversal/qa-552-live-workspace` for adoption through the official workspace API/UI path if required.

However, the L2 UI only listed the current workspace `测试环境`; its official **添加工作区…** action did not render a picker/dialog. Clicking the official sidebar `.FrcAXG_newSession.omnimux-sidebar-inline-new-session` once left `sessions` presentation unchanged: no menu, no session tree row, same active attachment id, and empty composer. This is material runtime evidence, not a fixture refusal.

Installed L2 Host code confirms its official behavior: `workspaces.startSession()` resolves explicit/current/recent workspace; when none is resolvable it calls `sessions.clear()` rather than opening a session. The rendered current workspace row does not yield a session target in this L2 state.

## Code and test review

| Check | Result | Evidence |
|---|---|---|
| Official public seam is injected | PASS (code) | `src/client/index.js:85-88` injects `['layout', 'sessions']` then calls `bindOfficialSessions(inner.sessions)`. |
| Official confirmation requires `current` and `byId[current].blank === true` | PASS (code) | `new-session-click.js:164-177`. |
| Same-id legal blank reuse | PASS (unit) | `new-session-click.test.js:322-346`. |
| With sessions seam, attachments cannot be success fallback | PASS (unit/code) | fallback at `new-session-click.js:232-237,243-246` executes only under `!sessions`; test `:348-370` rejects changing attachment projection with an official nonblank target. |
| Official action only, no direct new session/project creation | PASS (source isolation) | no `sessions.create`; action remains official button/menu click at `new-session-click.js:211-229`. |
| Reveal immediately after dispatch, failure zero writes | PASS (unit/code) | `replicate-to-chat.js:206-227`; regression test `:259-284`. |
| Explicit attachment id; no default queue | PASS (code/unit) | `resolveNewSessionId()` rejects `default` at `replicate-to-chat.js:152-157`; attachment gets returned id at `:230-242`; test `:316-352`. |
| Library/canvas and no-send red lines | PASS (code/unit) | source isolation tests `replicate-to-chat.test.js:89-96`; reveal uses only uncollapse + `split`. |
| Busy double click guard | PASS (unit) | `replicate-to-chat.test.js:355-376`; **not live-exercised**, because the first success baseline never formed. |

### Gate results

- Focused CTA lifecycle tests: **41 passed, 0 failed**.
- `pnpm --filter omnimux-inspiration test`: **180 total; 178 passed; 0 failed; 2 skipped**.
- `pnpm verify:stages`: **PASS** (10 Stage components / 8 StageStores).
- `pnpm --filter omnimux-inspiration build`: **PASS**, rebuilt `lib/client.js` to 231947 bytes.

## L2 scenario A — real CTA

**Procedure:** while the card’s real `.omnimux-inspiration-overlay-cta-btn.primary` was visible, I hovered it then clicked it **exactly once**. I waited 2.5 seconds and read real DOM `innerText`/`textContent`, attachment snapshot, workbench snapshot, session-tree DOM, and the actual Send button. No `includes`-only prompt test was used.

| Assertion | Result | Actual observation |
|---|---|---|
| A: official blank target resolves | **FAIL** | No target/session tree row appeared; active remained `session-bdc04d83-3a50-4546-b2cd-5604bb110c46`. |
| CTA exposes visible feedback | PASS | `无法打开新会话，请手动点「新会话」后重试`. |
| Zero attachment write when no target | PASS | `window.__omnimuxAttachments.getSnapshot()` stayed `[]`. |
| Zero prompt write | PASS | Actual contenteditable `innerText` and `textContent` both remained `""`. |
| Unique exact `/video-deconstruct\n\n…` prompt | **FAIL (not reached)** | No prompt was written. |
| Send untouched | PASS | Send remained disabled; click count `0`. |
| Library stays open / no canvas mutation | PASS | Only `omnimux-inspiration:library` remained in workbench tabs; canvas was not opened/closed/mutated. |
| Middle split reveal | **FAIL** | Workbench still had one library leaf; no session conversation column appeared. |

**Root-cause evidence:** The patch correctly treats `sessions.list` as authoritative, but this L2 runtime never exposes an official `current` blank target after the official UI action. It therefore returns the designed `newSessionFailed` zero-write path. The specific observed prerequisite failure is outside the attachment projection and is consistent with the installed official `workspaces.startSession()` behavior when no current/recent workspace is resolvable. The source patch’s successful path consequently cannot be accepted from this L2 run.

## Scenarios not run

- **B (library + canvas): NOT RUN.** Repeating a CTA when A cannot obtain the shared target/session baseline would not be a valid canvas preservation test.
- **C (contentful/draft old session): NOT RUN.** This L2 state cannot first establish an official blank/replacement target. I did not manufacture a history/blank marker or modify any user draft. The live run nevertheless proves zero mutation of the existing empty real composer.
- **Error/no-target:** PASS for visible retry + zero attachment/prompt writes, as shown in A.
- **Double click busy:** unit PASS; live not safely meaningful with the baseline unavailable.
- **GIF:** not generated. A success demo would be false, and the task disallows PR publishing; failure screenshots are provided instead.

## Evidence files

- `00-l2-before-cta.png` — L2 baseline.
- `01-a-hover.png` — actual primary CTA hover state.
- `02-a-after-settle.png` — visible retry result after the one real click.
- `03-official-new-session-menu.png` — attempted official session control (no menu/session outcome).
- `04-workspace-selector.png` and `05-add-workspace-dialog.png` — only workspace selection/add-flow UI available in this L2 state.
- `A-live-state.json` — structured before/action/after state; contains no token or user draft.

## Test report

- **Total tests:** 221 (focused 41 + package 180) | **Passed:** 219 | **Failed:** 0 | **Skipped:** 2.
- **Coverage:** high for seam/zero-write/unit behavior; insufficient for the actual official target-to-Lexical success path.
- **Routing decision:** **Engineer / main owner only — L2 release gate FAIL.**

## Required next action

Repair or provision the L2 official workspace/session lifecycle so that a button-driven official `startSession()` produces a current `SessionSummary` where `byId[current].blank === true`. Then rerun A, B, C and live double-click from a fresh isolated L2 workspace. The rerun must record the resolved session id, explicit attachment snapshot, exact real composer `innerText`, Send click count zero, library/canvas snapshots, and a truthful success GIF.
