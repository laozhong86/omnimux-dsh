# dsh-omnimux

Execution hub for landing OmniMux on official dsh. Not a gateway: OmniMux cloud owns HTTP; this package exposes seams and tools. Product chrome, identity, model routes, and media seams live here. Verticals send requests in and take results out. Do not split chrome or identity into a sibling plugin. Third-party compatible media endpoints are configured here. Official-only tools stay here because only OmniMux cloud implements them.

I/O and the seam list: repo `docs/contracts/hub.md`.

`ctx.provide('videoGenerate' | 'imageGenerate')` then `api.execute({ prompt, dest, … })`. Default waits until the file is on disk (`mode: "live"`). `wait: false` returns `{ mode: "submitted", taskId }`. `{ dest, taskId }` skips submit and only polls then downloads. Tools: `omnimux_video_submit`, `omnimux_image_submit`. Default image model is `gpt-image2` (`OMNIMUX_IMAGE_MODEL`). The hub resolves `Config.media` (provider → protocol → vendor fields). The hub does not keep a task ledger.

## Identity (settings)

The Web client registers **个人资料** and **DSH 插件** in Settings, and **应用** in the left sidebar. **DSH 插件** is mounted only when the OmniMux desktop injects `OMNIMUX_DSH_CLI`; it installs npm packages into the `omnimux` profile through packaged `dsh plugin`. Clicking Apps fills the conversation column (`shell.overlay` over `[data-slot="conversation"]`); it is not a sidebar menu. The button uses the official `sidebar.footer.action` seat above Settings. Host talks to OmniMux device-login HTTP itself (`POST /api/user/device/code` and `/token` on the site origin). The OmniMux CLI is not required.

Host plugins read `ctx.get('identity')`: `status({ verify })` returns the public profile; `require()` throws `needs-omnimux` when unsigned. The browser still only calls `/omnimux/auth/*`.

Two keys, two URLs:

| Key / URL | Purpose |
|---|---|
| `OMNIMUX_ACCESS_TOKEN` in `$DSH_HOME/.credentials.yaml` (or `$DSH_HOME/omnimux/access-token`) | Who you are. Issued by device login. Never sent to the browser. |
| `OMNIMUX_API_KEY` / `OMNIMUX_TOKEN` | Metered video/API calls. Unchanged. |
| `OMNIMUX_SITE_URL` or config `siteBaseUrl` (default `https://omnimux.ai`) | Login and `/api/user/self` |
| `OMNIMUX_BASE_URL` (default `https://api.omnimux.ai/v1`) | Video API |

Startup only describes the stored access token. Opening **应用** verifies it. **应用** and Settings **个人资料** can both start device login (`client_name: dsh-omnimux`).

## Product chrome

The host half embeds overlay config in the Web index (`window.__OMNIMUX_BRAND__`). The browser half covers official whale / wordmark / tab title / favicon without detaching React nodes. Config fields (all optional): `productName`, `logoSvg`, `wordmarkText`, `replaceHeroMark`, `hidePreviewBadge`, `rewriteWelcome`. Defaults are OmniMux.

Do not export a `sk-` as `OMNIMUX_ACCESS_TOKEN`. Do not put `series/` or Drama Center logic here. Do not split chrome into a sibling plugin.
