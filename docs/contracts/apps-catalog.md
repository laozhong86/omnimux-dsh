# Apps catalog

Normative local + remote JSON catalog for the Apps shelf. Status of the live UI is [capabilities.md](../capabilities.md). This file replaces the 08-15 assumption that the catalog must be an OmniMux application table.

## Terms

| Term | Means | Must not be |
|---|---|---|
| Bundled catalog | `plugins/omnimux/apps/catalog.json` shipped with the hub | A scan of the profile's `dsh.profile.bundles` |
| Disk cache | `$DSH_HOME/omnimux/apps/catalog.json` plus `meta.json` | A second source of truth beside a valid newer bundled file |
| Remote catalog | `GET {siteBaseUrl}/apps/catalog.json` | An authenticated write API, a per-user "mine" list |
| Shelf view | `GET /omnimux/apps` JSON the Apps page renders | The Settings → 插件 tab that installs Host plugins |
| App row | One object in `apps[]` with `omnimux.app` identity | `omnimux`, `dsh-base`, `dsh-web-app`, community plugins |

`omnimux` renders the shelf and is never a row. Installation stays `dsh plugin add`. The browser never fetches the remote file.

## Layers

```text
bundled catalog          always valid; hub is misbuilt if it is not
        │
        ▼
disk cache               last valid remote body (may be absent)
        │
        ▼
in-process view          Host memory for this boot
        │
        ▼
GET /omnimux/apps        listed rows + local install state
        │
        ▼
optional background GET  {siteBaseUrl}/apps/catalog.json
```

Resolve never blocks Host boot. A failed remote leaves the previous view in place.

## Files

| Path | Owner | Role |
|---|---|---|
| `plugins/omnimux/apps/catalog.json` | hub package | Floor. Copied onto the machine with the hub (Desktop seed or `dsh plugin add`) |
| `plugins/omnimux/apps/catalog.schema.json` | hub package | Validator used by tests and by `parseCatalog` |
| `$DSH_HOME/omnimux/apps/catalog.json` | Host | Last valid remote body. Mode `0600`, directory `0700` |
| `$DSH_HOME/omnimux/apps/meta.json` | Host | ETag, fetch time, URL, sha256, last error. No secrets |
| `{siteBaseUrl}/apps/catalog.json` | OmniMux site origin | Public official catalog. Same host as device-login (`https://omnimux.ai` by default) |

Do not store the catalog under `profiles/omnimux/`. Desktop seed rewrites owned plugin directories; `$DSH_HOME/omnimux/` already holds the access-token and must outlive that copy.

## Catalog document

Schema `1` only. Unknown `schema` rejects the whole document.

```json
{
  "schema": 1,
  "generated_at": "2026-08-17T00:00:00Z",
  "min_hub": "0.1.0",
  "apps": [
    {
      "id": "accounts",
      "title": "账号",
      "summary": "按平台或分组查看并连接已绑定的社媒账号",
      "kind": "official",
      "listed": true,
      "capabilities": ["identity", "official"],
      "client": true,
      "spec": {
        "source": "npm",
        "name": "omnimux-accounts",
        "version": "0.1.0"
      }
    }
  ]
}
```

| Field | Rule |
|---|---|
| `schema` | Integer `1` |
| `generated_at` | UTC instant (`YYYY-MM-DDTHH:mm:ssZ`). Compare as instants, not strings |
| `min_hub` | Semver of `omnimux`. Remote is discarded when local hub version is lower |
| `apps` | Array, max 64 rows, max document 65536 bytes |
| `id` | `[a-z0-9]+(-[a-z0-9]+)*`, 2–64 chars. Unique in the document |
| `title`, `summary` | Non-empty strings. `title` ≤ 40, `summary` ≤ 160 |
| `kind` | `official` only in schema 1 |
| `listed` | Boolean. `false` is unpublish, not delete |
| `capabilities` | Subset of `identity`, `videoGenerate`, `imageGenerate`, `official` |
| `client` | Boolean. `false` rows are not Apps (Host tools only) and stay off the shelf |
| `spec.source` | `npm` or `bundled` |
| `spec.name` | npm package name. Same allowlist as Settings install (`assertNpmSpec` without a range) |
| `spec.version` | Required when `source` is `npm`. Forbidden when `source` is `bundled`. Exact `MAJOR.MINOR.PATCH` with optional `-prerelease`. No `latest`, `*`, `x`, `^`, `~`, or git URL |

Forbidden `id` and `spec.name` values: `omnimux`, `@deepseek-ai/dsh-base`, `@deepseek-ai/dsh-web-app`, `dsh-better-sidebar`.

`bundled` means the package is already on disk from Desktop seed (or an equivalent local add). The shelf enables it with `dsh plugin add <name>` against that local copy. It does not download.

A document that fails any rule is invalid. Invalid remote or disk files are ignored as a whole. Do not keep the valid rows from a bad file.

## Resolve

Inputs: bundled document `B` (required), disk document `D` (optional), in-memory document `M` (optional), hub version `H`, now `T`.

1. Parse and validate `B`. Failure is a hub bug; `GET /omnimux/apps` returns 500.
2. Drop `D` or `M` when invalid, when `min_hub` > `H`, or when its `generated_at` < `B.generated_at`.
3. Chosen document = the remaining candidate with the latest `generated_at`. Tie order: `M`, then `D`, then `B`.
4. If `D` was dropped because it is older than `B`, delete `$DSH_HOME/omnimux/apps/catalog.json` and clear the stale ETag in `meta.json`. A hub upgrade is the new floor.
5. Build the shelf view from the chosen document plus the `omnimux` profile bundle list (see [View](#view)).
6. If a refresh is due, start one in the background and return the current view immediately.

A newer remote `generated_at` can unpublish a row that the bundled file still lists. An older cache cannot hide a newer bundled floor after upgrade.

## Request

Only the Host fetches the remote file. `siteBaseUrl` is the same origin as device-login (`Config` / `OMNIMUX_SITE_URL` / `https://omnimux.ai`).

| Item | Value |
|---|---|
| Method | `GET` |
| Default URL | `{siteBaseUrl}/apps/catalog.json` |
| Headers | `Accept: application/json`. `If-None-Match` and `If-Modified-Since` from `meta.json` when present |
| Auth | None. Do not send `OMNIMUX_ACCESS_TOKEN` or `OMNIMUX_API_KEY` |
| Redirects | Follow at most 3, and only to `https:` on the same host |
| Timeout | `Config.apps.timeoutMs` (default 5000) |
| Size | Stop at 65536 bytes; treat overflow as invalid |
| Concurrency | Single-flight. A second caller joins the same in-flight GET |

`304` updates `meta.fetched_at` only. `200` runs validation, then replaces the disk catalog and memory. Any other status, timeout, DNS failure, TLS failure, or invalid body leaves the previous catalog in place and writes `meta.last_error`.

Do not fetch when `Config.apps.remote` is `false`. First ship can leave remote off and still serve bundled rows.

## Cache

`meta.json`:

```json
{
  "source_url": "https://omnimux.ai/apps/catalog.json",
  "etag": "W/\"abc\"",
  "last_modified": "Mon, 17 Aug 2026 00:00:00 GMT",
  "fetched_at": "2026-08-17T00:05:00Z",
  "sha256": "…",
  "status": "ok",
  "last_error": null
}
```

`status` is `ok`, `not_modified`, `invalid`, or `network`. `sha256` is hex of the raw `200` body.

TTL: `Config.apps.ttlSeconds` (default 21600). Refresh is due when `meta.json` is missing, `fetched_at` is missing, or `now - fetched_at` ≥ TTL. A failed or rejected fetch still writes `fetched_at` so the Host does not retry on every `GET /omnimux/apps`.

Stale-while-revalidate: a due refresh never delays `GET /omnimux/apps`. The response sets `stale: true` until the in-flight GET finishes. The next GET (or the in-page poll after refresh) sees the new view.

Memory holds the last chosen document for the Host process. Dispose of the plugin clears it.

## When a refresh starts

| Trigger | Behavior |
|---|---|
| Hub `apply()` | Background refresh if due. Boot does not wait |
| `GET /omnimux/apps` | Return current view. Start a refresh if due and none is running |
| `POST /omnimux/apps/refresh` | Start a refresh even when TTL has not expired. Wait up to `timeoutMs` for completion, then return the current view and `refresh` |
| Opening the Apps overlay | Client calls `GET /omnimux/apps` only. No second remote hop |

There is no timer loop. Closing Apps does not cancel an in-flight GET; the result still writes the disk cache.

## View

`GET /omnimux/apps` (Host, browser-safe):

```json
{
  "schema": 1,
  "source": "bundled",
  "stale": false,
  "fetched_at": null,
  "refresh": "idle",
  "error": null,
  "apps": []
}
```

`source` is `bundled`, `cache`, or `remote` according to which document won resolve (`M` after a successful fetch counts as `remote`).

Each row in `apps` is a catalog app plus local state and `install_spec` (`name@version` for npm, `name` for bundled). Rows with `listed: false` are omitted. Rows with `client: false` are omitted. The hub package is omitted.

| `state` | Meaning |
|---|---|
| `available` | Listed, not in the profile bundle list |
| `installed` | Listed, bundle present, installed version equals `spec.version` (or `bundled` and present) |
| `update` | Listed, bundle present, installed version differs from `spec.version` |

Install and remove stay on `/omnimux/plugins` with the catalog's pinned `name@version` (npm) or `name` (bundled). The Apps page must not send a free-typed spec. Settings "DSH plugins" remains the inventory of every bundle, including unmarked community packages.

Bundled install resolution: `POST /omnimux/plugins` with a bare name whose catalog row is `spec.source: "bundled"` must resolve the name to a local package directory before invoking `dsh plugin add` — the CLI is a pnpm forwarder and a bare name would hit the registry (404 for private packages). Resolution order: `Config.apps.bundledDir/<name>` first, then the profile's installed copy (`<profile>/node_modules/<name>`, real path). Neither present → `400` with a "not on disk" error; the Host never falls back to the registry for a bundled row. `Config.apps.bundledDir` (or env `OMNIMUX_APPS_BUNDLED_DIR`) points at the desktop preset plugins directory in production, or a dev plugin tree on a development machine.

Unpublish (`listed: false`) removes the card. The local bundle is not deleted.

### Card click and the fixed action slot

Clicking the card body (title / summary area, not the footer) is the open path:

| Card state | Card body click | Fixed action slot | Overflow (`···`) menu |
|---|---|---|---|
| `available` | Install confirm bubble 「是否安装「{title}」？」 | Primary「安装」 | none |
| `update` | Open the app page (same as `installed`) | Primary「更新」 | 打开 · 卸载 |
| `installed` | Open the app page | `···` icon button | 打开 · 卸载 |

Open path: `canOpen` (installed or update, `client: true`, no pending restart) → device-login gate when the row has the `identity` capability and the user is signed out → `omnimux-app-open` dispatch → the app claims the product stage. When no app claims within 600 ms (usually a pending Host restart), the page surfaces 重启后可用 instead of a dead screen.

`pendingRestart` is page-level client state on the Apps page: set after any successful install / update / remove and cleared after the desktop shell restarts the Host. While it holds, the menu's 打开 item is disabled with the 重启后可用 hint and card-body open attempts return the same hint.

Remove is destructive and lives only in the overflow menu behind a second confirm bubble; PROTECTED_BUNDLES never get a remove entry.

### Tabs records

Opening an app also records a sidebar tab. The Host owns the records: `GET /omnimux/apps/tabs` (filtered view), `POST /omnimux/apps/tabs/{id}` (upsert on open), `PATCH /omnimux/apps/tabs/{id}` (pin / top), `DELETE /omnimux/apps/tabs/{id}`; uninstalling a bundle removes its tab. Tab row rendering, hover actions, and sorting semantics live in the sidebar contract ([sidebar-extra-entries.md](sidebar-extra-entries.md), *Dynamic app tabs*).

## Config

Hub `Config.apps` (all optional):

| Field | Default | Meaning |
|---|---|---|
| `remote` | `false` until the site file exists, then `true` | When false, never GET the origin |
| `catalogUrl` | empty → `{siteBaseUrl}/apps/catalog.json` | Absolute `https:` URL on the site host only |
| `ttlSeconds` | `21600` | Freshness window |
| `timeoutMs` | `5000` | Remote GET and refresh wait |
| `bundledDir` | empty; env fallback `OMNIMUX_APPS_BUNDLED_DIR` | Directory holding bundled plugin packages for local install resolution |

A `catalogUrl` whose host is not the resolved site host fails at config parse. No silent fallback.

## Publish (operators)

There is no write HTTP. Official unpublish is: edit the site `apps/catalog.json`, bump `generated_at`, deploy the static file. The next successful Host GET updates every machine that can reach the origin.

The same file lives in `plugins/omnimux/apps/catalog.json` so a Desktop or hub release ships a floor for offline machines. After a shelf change, update the hub copy in the same product PR when the change should survive a later seed that is newer than an old cache.

## Client

`PluginsSection` reads `/omnimux/apps`. It does not call `siteBaseUrl`. Empty `apps` keeps the current empty copy. A soft `error` is shown as secondary text; the list still renders.

Login stays as it is: unsigned users can see official listed rows. Opening an installed app that needs `identity` uses the existing device-login gate.

## Non-scope

- Personal "mine" rows in the JSON
- POST/PUT to the catalog URL
- Git or URL install specs from a catalog row
- Scanning `dsh.profile.bundles` to invent shelf cards
- Fetching the remote file from the renderer
- Auto-install or auto-remove on catalog change

## Tests (acceptance)

| Case | Expect |
|---|---|
| Missing bundled file | Hub tests fail; `GET /omnimux/apps` is 500 |
| Valid bundled, `remote: false` | View `source: "bundled"`, no network |
| Valid remote newer than bundled | Disk written; view uses remote rows |
| Remote `listed: false` for an id bundled as true | Card absent; local bundle untouched |
| Bundled `generated_at` newer than disk | Disk catalog deleted; view is bundled |
| Remote `min_hub` above local hub | Remote ignored; previous view kept; `meta.status` is `invalid` |
| Remote body > 65536 bytes | Treated as invalid; previous view kept |
| `spec.version` is `latest` or `^1.0.0` | Document invalid |
| Row `id` or `name` is `omnimux` | Document invalid |
| Timeout / 5xx | Previous view; `refresh` becomes `failed`; `error` set |
| `304` | `fetched_at` updates; catalog body unchanged |
| Two overlapping refreshes | One GET |
| Profile has `dsh-cron-parse` and no catalog row | Settings lists it; Apps does not |
| Catalog npm row installed at the pinned version | `state: "installed"` |
| Catalog npm row installed at another version | `state: "update"` |
| Response JSON contains `sk-` or an access token | `sendJson` refuses (existing guard) |

## Ship order

Each step is usable alone.

1. Bundled `catalog.json` (may be `{ "schema": 1, "generated_at": "…", "min_hub": "0.1.0", "apps": [] }`) + `parseCatalog` + `GET /omnimux/apps` from bundled only.
2. Disk cache + remote GET + `POST /omnimux/apps/refresh` + `Config.apps`.
3. Apps page renders the view instead of only the empty sentence.
4. First real row `accounts` (`omnimux-accounts`, `source: bundled`) with `client: true`. Install posts the bare name to `/omnimux/plugins`; the package must already be on disk (Desktop seed or a local add). Isolated add/remove: `scripts/accept-apps-install.sh`.
