#!/usr/bin/env bash
# Restore tracked overlay files on the official clone.
set -euo pipefail
src="${DSH_SRC:-/Users/x/Desktop/Project/Github/deepseek-harness}"

if [[ ! -d "$src/.git" ]]; then
  echo "reset-harness-overlay: DSH_SRC is not a git clone: $src" >&2
  exit 1
fi

git -C "$src" checkout -- \
  package.json \
  pnpm-workspace.yaml \
  pnpm-lock.yaml

rm -f "$src/patches/app-builder-lib@26.15.3.patch"

echo "reset-harness-overlay: tracked overlay files restored in $src"
echo "reset-harness-overlay: desktop home is /Users/x/Desktop/Project/omnimux-desktop"
