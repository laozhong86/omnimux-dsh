# Domain

This repo lands OmniMux on official dsh. `dsh-omnimux` is the execution hub, not a gateway. Verticals send requests into hub seams and write only their own disk. `dsh-drama` is the first vertical (short-drama production). Drama Center upload is a different skill. I/O: `docs/contracts/hub.md`.

Two agents share this repo. Do not mix their jobs.

| Agent | Lives in | Job |
|---|---|---|
| **Coding agent** | this checkout (Cursor / Claude / Grok) | Edit `plugins/*`, contracts, skills. Read `AGENTS.md` first. |
| **Product agent** | `dsh --profile drama` | Mutate one `series/` project through `drama_*` tools. |

## Objects

| Term | On disk | Meaning |
|---|---|---|
| Project root | directory that contains `series/series.yaml` | One series. Tools walk up from session cwd. |
| Series | `series/series.yaml` | Title, logline, locale, aspect. |
| Bible | `series/bible.yaml` | Characters and scenes. `confirmed: true` is the generate gate. |
| Episode | `series/episodes/<id>.yaml` | One episode: hook, synopsis, status. |
| Shot | one object in `series/shots.json` | One generate unit. Status machine below. |
| Asset | `series/assets/<shot_id>.mp4` | File that exists only after generate. |

## Shot status

`draft` → `confirmed` → (`generating`) → `ready`. `failed` is a dead end until rewritten.

| Status | Who may set it | Meaning |
|---|---|---|
| `draft` | `drama_upsert_shot` | Text only. |
| `confirmed` | `drama_upsert_shot` | Ready to generate after bible confirm. |
| `generating` | `drama_generate_shot` | Task in flight. |
| `ready` | `drama_generate_shot` only | Asset path is real. Check `mode`. |
| `failed` | `drama_upsert_shot` | Last generate failed. |

A shot cannot become `generating` or `ready` if any `character_ids` entry is missing or `confirmed: false` in the bible.

## Packages

| Package | Owns | Does not own |
|---|---|---|
| `dsh-omnimux` | Execution hub: chrome, identity, model routes, media seams, official-only tools | `series/` files, Drama Center, account matrix / scheduling, vertical workflows |
| `dsh-drama` | `series/` contract and `drama_*` tools. Inputs generate via `videoGenerate` | Hub chrome, auth, model routes, OmniMux HTTP |

Hub I/O: `docs/contracts/hub.md`. Field list: `docs/contracts/series.md`. What is real vs stub: `docs/capabilities.md`.
