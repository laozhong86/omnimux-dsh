#!/usr/bin/env bash
# materialize-with-rollback.sh — build, snapshot, materialize, verify, and rollback on failure.
#
# Contracts:
#   docs/contracts/dev-pipeline.md
#   docs/contracts/plugin-git-pr.md
#   docs/contracts/ops-entry.md
#
# Default target is the Dev App home (~/.omnimux-dev), matching sync-to-app.sh.
# Pass --prod / --dsh / --all to retarget; PROFILE verification must match the
# same home(s) that sync-to-app writes.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

TARGET_PLUGIN=""
SYNC_TARGET_FLAGS=()
PROFILE_HOME="${HOME}/.omnimux-dev"
while [[ $# -gt 0 ]]; do
  case "$1" in
    --dev|--omnimux-dev)
      PROFILE_HOME="${HOME}/.omnimux-dev"
      SYNC_TARGET_FLAGS=(--dev)
      shift
      ;;
    --prod|--omnimux)
      PROFILE_HOME="${HOME}/.omnimux"
      SYNC_TARGET_FLAGS=(--prod)
      shift
      ;;
    --dsh)
      PROFILE_HOME="${HOME}/.dsh"
      SYNC_TARGET_FLAGS=(--dsh)
      shift
      ;;
    --all)
      # Snapshot/verify against prod by default when broadcasting; sync still
      # fans out via sync-to-app.sh --all.
      PROFILE_HOME="${HOME}/.omnimux"
      SYNC_TARGET_FLAGS=(--all)
      shift
      ;;
    -*)
      echo "❌ materialize-with-rollback: unknown flag $1" >&2
      exit 2
      ;;
    *)
      if [[ -n "$TARGET_PLUGIN" ]]; then
        echo "❌ materialize-with-rollback: unexpected arg $1" >&2
        exit 2
      fi
      TARGET_PLUGIN="$1"
      shift
      ;;
  esac
done

PROFILE_DIR="${PROFILE_HOME}/profiles/omnimux"
SNAPSHOT_BASE="${PROFILE_DIR}/.materialize-snapshots"
TIMESTAMP="$(date +%Y%m%d_%H%M%S)"
SNAPSHOT_DIR="${SNAPSHOT_BASE}/${TIMESTAMP}_$$"

if [[ -z "$TARGET_PLUGIN" ]]; then
  echo "❌ materialize-with-rollback: 必须指定目标插件" >&2
  exit 2
fi

if [[ "${OMNIMUX_MERGE_CONFIRMED:-0}" != "1" && "${OMNIMUX_ALLOW_UNMERGED_MATERIALIZE:-0}" != "1" ]]; then
  echo "❌ materialize-with-rollback: 未置位 OMNIMUX_MERGE_CONFIRMED=1；生产物化仅在确认 MERGED 后执行" >&2
  exit 1
fi

TARGET_DIR="${PROFILE_DIR}/node_modules/${TARGET_PLUGIN}"
mkdir -p "$SNAPSHOT_BASE"
mkdir -p "$PROFILE_DIR/node_modules"

if [[ -d "$TARGET_DIR" || -L "$TARGET_DIR" ]]; then
  echo "==> 创建物化前快照: $SNAPSHOT_DIR"
  mkdir -p "$SNAPSHOT_DIR"
  cp -Rc "$TARGET_DIR" "$SNAPSHOT_DIR/" 2>/dev/null || cp -R "$TARGET_DIR" "$SNAPSHOT_DIR/"
fi

rollback() {
  local exit_code=$?
  if [[ $exit_code -ne 0 ]]; then
    echo "⚠ 物化失败 (exit $exit_code)，开始执行回滚..." >&2
    if [[ -d "$SNAPSHOT_DIR/$TARGET_PLUGIN" ]]; then
      rm -rf "$TARGET_DIR"
      cp -Rc "$SNAPSHOT_DIR/$TARGET_PLUGIN" "$TARGET_DIR" 2>/dev/null || cp -R "$SNAPSHOT_DIR/$TARGET_PLUGIN" "$TARGET_DIR"
      echo "✓ 已从快照恢复生产副本: $TARGET_DIR" >&2
    fi
  fi
  rm -rf "$SNAPSHOT_DIR" 2>/dev/null || true
  exit "$exit_code"
}
trap rollback EXIT

echo "==> 1. 执行 sync-to-app.sh 构建与物化: $TARGET_PLUGIN → ${PROFILE_HOME}"
OMNIMUX_SYNC_VIA=materialize-with-rollback "$REPO_ROOT/scripts/sync-to-app.sh" "${SYNC_TARGET_FLAGS[@]}" "$TARGET_PLUGIN"

echo "==> 2. 校验物化产物完整性..."
if [[ ! -d "$TARGET_DIR" ]]; then
  echo "❌ 物化目标目录不存在: $TARGET_DIR" >&2
  exit 1
fi

if [[ -L "$TARGET_DIR" ]]; then
  echo "❌ 生产 profile node_modules/$TARGET_PLUGIN 是软链接，违反生产物化契约！" >&2
  exit 1
fi

if [[ ! -f "$TARGET_DIR/package.json" ]]; then
  echo "❌ 生产副本缺少 package.json: $TARGET_DIR" >&2
  exit 1
fi

echo "✅ 插件 [$TARGET_PLUGIN] 已安全物化进生产 profile 并通过校验。"
trap - EXIT
rm -rf "$SNAPSHOT_DIR" 2>/dev/null || true
