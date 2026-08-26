---
title: "Client external store（useSyncExternalStore）"
id: "contract-client-external-store"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-22"
authors: ["x", "agent-architect"]
subsystem: "omnimux-workflow"
---

# Client external store（useSyncExternalStore）

Normative rule for first-level product pages that subscribe to Cordis / Locale faces via React `useSyncExternalStore`.

Incident source (2026-08-22): `omnimux-workflow` `WorkflowStage` passed `locale.subscribe` bare into `useSyncExternalStore`. `LocaleRuntime.subscribe` is an **instance method** that reads `this.listeners`. React calls subscribe as a plain function, so `this` became `undefined`, the slot crashed with `Cannot read properties of undefined (reading 'listeners')`, and `shell.overlay` rendered only `<div data-slot-error="shell.overlay">` — sidebar click looked like “no response / blank page”.

## Rule

| Pattern | Verdict |
|---|---|
| `useSyncExternalStore(store.subscribe, store.getSnapshot)` when `subscribe`/`getSnapshot` are **own/plain** functions (e.g. stage-store object literals) | OK |
| `useSyncExternalStore(locale.subscribe, …)` or `locale ? locale.subscribe : …` when `subscribe` is a **class / prototype method** | **MUST NOT** |
| `useSyncExternalStore((cb) => locale.subscribe(cb), () => locale.getLocale().active)` | Required when the face is an instance method |

Same rule for any other face whose `subscribe` / `getSnapshot` closes over `this` (Auth gate store, settings scope host, etc.).

## Why assets/accounts did not blow up

Their stage pages only `useSyncExternalStore` against the **local** `createStageStore()` object (arrow/`function` methods on a plain object). They never bind host `locale.subscribe` into the hook. Workflow alone added live locale → island props and hit the unbound-method path.

## Detection

- Source gate: forbid `locale ? locale.subscribe` and bare `locale.subscribe` as the first argument of `useSyncExternalStore` in product overlay stages.
- Prefer a wrapper helper if a plugin needs locale live-updates in more than one component:

```js
function subscribeLocale(locale, onStoreChange) {
  return locale.subscribe(onStoreChange)
}
```

## Symptom → check

| Symptom | First check |
|---|---|
| Sidebar row click claims stage (`data-dsh-product-stage` set) but center stays blank | Console: `slot entry crashed in 'shell.overlay'` + `reading 'listeners'` |
| Overlay DOM is only `data-slot-error="shell.overlay"` | Unbound instance `subscribe` in a stage component |
| Canvas route 200 / assets page opens | Not a sync/artifact problem — keep looking at the crashing overlay entry |

MUST NOT treat this class of failure as “sync stale” or “canvas.js missing” without checking the slot-error console line first.
