# Third-Party Notices and Licenses

This plugin (`omnimux-clip`) incorporates and vendorizes components from open-source projects under permissible licenses.

---

## 1. OpenReel Video

- **Upstream Project**: OpenReel Video (`Augani/openreel-video`)
- **License**: MIT License
- **Copyright**: (c) 2024-2026 Augustus Otu and Contributors
- **License Text**: See [`LICENSE.openreel.txt`](./LICENSE.openreel.txt)
- **Vendorized Location**: `src/client/engine/openreel/`
- **Scope & Modifications**:
  - Adopted OpenReel's multi-track timeline engine, WebCodecs/Canvas frame decoding and composition pipeline, Web Audio waveform/pitch processing, and Web Worker hardware-accelerated MP4 export pipeline.
  - Pruned cloud user authentication, cloud storage uploads, and standalone router/topbar.
  - Integrated with DeepSeek Harness / OmniMux host lifecycle via `openreelAdapter.js` and `ClipBridge.js`.
