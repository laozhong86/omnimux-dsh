# Issue #554 Engineering Summary

## Implemented

- Replaced the pointer-only `menu-direct` interception with the formal `clientAction` command UI contribution declared by the pinned runtime overlay. The native + command list, command names, descriptions, and fuzzy search remain unchanged.
- `add-file` consumes the session provided by the command runtime and invokes the existing `kind: 'any'` native picker path. Cancellation and abort skip materialization, attachment writes, and error toasts.
- `add-from-library` owns its AssetPicker instance through the action session and abort signal. Close, cancel, and scope disposal settle only that action; a successful action restores composer focus only through the provided guarded callback.
- Removed `menu-direct.js` and its MutationObserver/capture/Escape implementation. There is no DOM menu selector, synthetic Escape, Host command execution, or `command/run` / `command/done` invocation in this path.
- Added `patches/dsh-0.1.2-alpha.3/ui-commands-client-action.patch`, updated overlay apply/reset coverage, and retained the pinned `dd6322d604e00eec1ba5e0c8541159906a21094a` / `0.1.2-alpha.3` values.

## Verification

- `node --test plugins/omnimux/src/client/composer-add/commands.test.js plugins/omnimux/src/client/composer-add/install.test.js plugins/omnimux/src/client/composer-add/kind.test.js plugins/omnimux/src/client/components/asset-picker/picker-model.test.js` passed.
- `pnpm --filter omnimux test` passed: 954 tests, 0 failed.
- The isolated pinned upstream worktree ran `./node_modules/.bin/vitest run packages/client/ui-commands/tests/service.client.spec.ts`: 54 tests, 0 failed.
- An isolated pinned clone completed product `apply-harness-overlay.sh` → repeated apply (already applied) → `reset-harness-overlay.sh`; `git diff --check` and final `git diff --exit-code` passed.

## Delivery boundary

The desktop-fork managed runtime-overlay PR is a required dependency. This product PR has not been merged, no runtime has been materialized into a public profile, and neither `/Applications/OmniMux Dev.app` nor port 45120 was restarted or accepted. L2 evidence under `docs/evidence/issue-554/` is preserved but is not a 45120 QA sign-off.

## Consistency verdict

**IS_PASS: YES** for source, overlay reversibility, targeted runtime regression coverage, and package tests. It is not a final Electron Dev-App QA approval.
