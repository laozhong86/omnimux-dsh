# Issue #554 Engineering Summary

## Scope delivered

- Kept the official composer command list and its two registered commands intact.
- Added pointer-only direct activation for the exact controlled command IDs:
  - `add-file` opens the native `kind: "any"` picker.
  - `add-from-library` opens the shared `AssetPicker` modal.
- Preserved the official keyboard Enter path and popupSelect flow as the fallback.
- Added the native assets picker `any` kind, which forwards the user-confirmed AppleScript UTI union (`public.folder`, `public.data`). This is unit-tested script construction only; it is not automated mixed-panel UI evidence.
- Moved selection model and card UI into `components/asset-picker/`; retained `AssetPickerModal` as the composer-only adapter injecting the eight-item cap and workbench empty-state action.

## Direct-menu safety review

- Binding is scoped to rows under the official composer listbox and accepts only exact stable command IDs controlled by this plugin; it does not match localized descriptions or generic substrings.
- The matcher scans all spans so the optional leading icon span cannot be mistaken for the command name.
- Only an unmodified primary `mousedown` triggers direct behavior. Right click, modified clicks, and click-only activation do not intercept and remain with the host fallback.
- The paired `click` after an intercepted primary `mousedown` is swallowed once to prevent duplicate activation and a future host click handler; it is not used to start actions.
- Bound rows are reconciled on mutation. If a React-reused row changes command content, the old binding is removed before the new exact command binding is installed.
- Disposal disconnects the observer and removes every direct listener. No timer is retained.
- Dismissal dispatches Escape only; no delayed synthetic outside pointer event is used, so a stale dismissal cannot close a newly opened AssetPicker.
- Official DOM is never removed or replaced. Inspection of the installed DSH MenuView confirmed `onMouseDown` is the current host pick handler; target-row capture is used because direct experimentation must be at the row, not on a document-level theory.

## AssetPicker review

- `busy` prevents re-entrant confirms.
- Before confirm, selected IDs are reconciled with current `alreadyIds` and current quota, guarding state changes while the dialog is open.
- Fetch request revisions prevent stale close/reopen responses from changing the current dialog state.
- Categories use `all` plus either the supplied narrowed categories or the six canonical categories.
- Fetching lives in the reusable component through an injectable `fetchAssets`; composer instantiation and AttachmentStore mutation remain in its thin adapter (`install.js`). No vertical plugin imports this hub-private path.
- Composer continues to inject `maxSelect=8`; shared model defaults to `Infinity` and retains the existing materialize/instantiate pipeline.

## Verification

Passed:

```sh
cd plugins/omnimux
node --test src/client/composer-add/menu-direct.test.js src/client/composer-add/install.test.js src/client/composer-add/kind.test.js src/client/components/asset-picker/picker-model.test.js
node --test ../omnimux-assets/src/picker.test.js ../omnimux-assets/src/http-routes.test.js
```

Results: 19 composer/shared-model tests passed and 32 assets picker/route tests passed.

```sh
pnpm --filter omnimux-assets test
```

Result: 132 passed, 0 failed.

`git diff --check` passed.

Blocked by worktree dependency materialization (not product failures): `pnpm --filter omnimux test` and `pnpm --filter omnimux build` cannot resolve declared packages (`react`, `jsdom`, `yaml`, `esbuild`) because this isolated worktree has no usable `node_modules` resolution tree. No dependency installation or profile sync was performed. Therefore client build output and live Dev App / ego-browser acceptance remain unverified and must be completed by the QA follow-up owner.

## Consistency verdict

**IS_PASS: YES** for the scoped source-code consistency review: imports, command IDs, picker kind propagation, fallback preservation, component ownership, model contracts, disposal, and direct-action safety checks are consistent.

This verdict is not UI acceptance. Live Dev App verification remains a delivery risk because no profile was materialized or restarted, per task boundary.
