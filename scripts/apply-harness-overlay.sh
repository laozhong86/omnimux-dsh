#!/usr/bin/env bash
# Apply remaining official-harness overlays onto a clean clone.
# Desktop packaging no longer overlays this clone.
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd -P)"
pin_sha="47f943859bef60e4160492346772ded9b24f765a"
src="${DSH_SRC:-/Users/x/Desktop/Project/Github/deepseek-harness}"

if [[ ! -d "$src/.git" ]]; then
  echo "apply-harness-overlay: DSH_SRC is not a git clone: $src" >&2
  exit 1
fi

head="$(git -C "$src" rev-parse HEAD)"
if [[ "$head" != "$pin_sha" ]]; then
  echo "apply-harness-overlay: HEAD is $head; pin is $pin_sha (see docs/harness-pin.md)" >&2
  exit 1
fi

echo "apply-harness-overlay: no desktop overlays; Electron shell is /Users/x/Desktop/Project/omnimux-desktop"
echo "apply-harness-overlay: pin ok on $src"
