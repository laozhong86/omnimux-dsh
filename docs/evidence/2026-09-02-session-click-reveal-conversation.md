# Evidence: session click re-opens collapsed conversation

## Change
Hub `conversation-box` session-enter intent now calls `setFocus('split')` when `conversationCollapsed` is sticky-true.

## Unit
`pnpm exec node --test plugins/omnimux/src/client/apps-stage-box.test.js` — includes:
- reveals collapsed conversation when a workspace session row is clicked
- reveals on already-selected row
- no-op when already visible / pin button
- leaves product stage + reveals when both apply

## Live
- Materialized to `~/.omnimux-dev` via `yarn omnimux:sync omnimux` (`OMNIMUX_ALLOW_UNMERGED_MATERIALIZE=1`).
- `http://127.0.0.1:45120/` returns 401 without process launch token (ego-browser blocked).
- Desktop OmniMux Dev after Cmd+R: collapsed/gui blank middle → click left session row → conversation column restored (see before/after PNGs).
