#!/usr/bin/env bash
# sync-agent-presets.sh — 把 OmniMux 出厂三项 Agent Preset 物化进运行时
# 默认同步到开发版 (~/.omnimux-dev)，支持 --prod / --dsh / --all 参数扩展
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/presets"
KEEP=(standard social-content-team social-engagement-team)

if [ ! -d "$SRC/standard" ] || [ ! -d "$SRC/social-content-team" ] || [ ! -d "$SRC/social-engagement-team" ]; then
  echo "❌ presets/ 缺少三项出厂预设" >&2
  exit 1
fi

TARGET_SELECTION=()
if [ -n "${OMNIMUX_SYNC_TARGETS:-}" ]; then
  IFS=',' read -ra ENV_TARGETS <<< "$OMNIMUX_SYNC_TARGETS"
  for t in "${ENV_TARGETS[@]}"; do
    t=$(echo "$t" | tr '[:upper:]' '[:lower:]' | xargs)
    [ -n "$t" ] && TARGET_SELECTION+=("$t")
  done
fi

parse_target_value() {
  local val="$1"
  IFS=',' read -ra PARTS <<< "$val"
  for p in "${PARTS[@]}"; do
    p=$(echo "$p" | tr '[:upper:]' '[:lower:]' | xargs)
    [ -n "$p" ] && TARGET_SELECTION+=("$p")
  done
}

while [ $# -gt 0 ]; do
  case "$1" in
    --dev|--omnimux-dev)
      TARGET_SELECTION+=("dev")
      shift ;;
    --prod|--omnimux)
      TARGET_SELECTION+=("prod")
      shift ;;
    --dsh)
      TARGET_SELECTION+=("dsh")
      shift ;;
    --all|--broadcast|--all-profiles)
      TARGET_SELECTION+=("all")
      shift ;;
    --target=*|--profile=*)
      val="${1#*=}"
      parse_target_value "$val"
      shift ;;
    --target|--profile)
      if [ $# -ge 2 ]; then
        parse_target_value "$2"
        shift 2
      else
        shift
      fi ;;
    *)
      shift ;;
  esac
done

TARGET_HOMES=()
add_target_home() {
  local h="$1"
  if [ "${#TARGET_HOMES[@]}" -gt 0 ]; then
    for existing in "${TARGET_HOMES[@]}"; do
      [ "$existing" = "$h" ] && return 0
    done
  fi
  TARGET_HOMES+=("$h")
}

HAS_DEV=0
HAS_PROD=0
HAS_DSH=0

if [ ${#TARGET_SELECTION[@]} -eq 0 ]; then
  add_target_home "$HOME/.omnimux-dev"
  HAS_DEV=1
else
  for item in "${TARGET_SELECTION[@]}"; do
    case "$item" in
      all|broadcast)
        add_target_home "$HOME/.omnimux-dev"
        add_target_home "$HOME/.omnimux"
        add_target_home "$HOME/.dsh"
        HAS_DEV=1
        HAS_PROD=1
        HAS_DSH=1
        ;;
      dev|omnimux-dev)
        add_target_home "$HOME/.omnimux-dev"
        HAS_DEV=1
        ;;
      prod|omnimux|omnimux-prod)
        add_target_home "$HOME/.omnimux"
        HAS_PROD=1
        ;;
      dsh|dsh-desktop)
        add_target_home "$HOME/.dsh"
        HAS_DSH=1
        ;;
      /*|~*)
        eval expanded_path="$item"
        add_target_home "$expanded_path"
        ;;
    esac
  done
fi

materialize_into() {
  local dest="$1"
  if [ ! -d "$dest" ]; then
    echo "· skip missing $dest"
    return 0
  fi
  echo "==> 物化 Agent Presets → $dest"
  # remove non-keep children
  for child in "$dest"/*; do
    [ -e "$child" ] || continue
    base=$(basename "$child")
    keep=0
    for k in "${KEEP[@]}"; do
      if [ "$base" = "$k" ]; then keep=1; break; fi
    done
    if [ "$keep" -eq 0 ]; then
      rm -rf "$child"
      echo "  - removed $base"
    fi
  done
  for k in "${KEEP[@]}"; do
    rm -rf "$dest/$k"
    mkdir -p "$dest/$k"
    cp -R "$SRC/$k/." "$dest/$k/"
    echo "  + synced $k"
  done
}

# 1) profiles under target homes that vendor @deepseek-ai/dsh
shopt -s nullglob
for home_dir in "${TARGET_HOMES[@]}"; do
  for profile_home in "$home_dir/profiles"/*; do
    [ -d "$profile_home" ] || continue
    dest="$profile_home/node_modules/@deepseek-ai/dsh/config/agent-presets"
    materialize_into "$dest"
  done
done

# 2) App unpacked preset folders + asar headers
patch_asar_preset_header() {
  local asar="$1"
  local unpacked="$2"
  [ -f "$asar" ] && [ -d "$unpacked" ] || return 0
  node "$ROOT/scripts/patch-asar-agent-presets.mjs" "$asar" "$unpacked" || echo "· asar header patch failed for $asar"
}

if [ "$HAS_DEV" -eq 1 ]; then
  materialize_into "/Applications/OmniMux Dev.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets"
  patch_asar_preset_header "/Applications/OmniMux Dev.app/Contents/Resources/app.asar" "/Applications/OmniMux Dev.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets"
fi

if [ "$HAS_PROD" -eq 1 ]; then
  materialize_into "/Applications/OmniMux.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets"
  patch_asar_preset_header "/Applications/OmniMux.app/Contents/Resources/app.asar" "/Applications/OmniMux.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets"
fi

if [ "$HAS_DSH" -eq 1 ]; then
  materialize_into "/Applications/DSH Desktop.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets"
  materialize_into "$HOME/Desktop/Project/omnimux-desktop-fork/dsh-plugin-desktop/node_modules/@deepseek-ai/dsh/config/agent-presets"
  patch_asar_preset_header "/Applications/DSH Desktop.app/Contents/Resources/app.asar" "/Applications/DSH Desktop.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets"
fi

# 3) ensure profile patch disables user-root merge
patch_profile() {
  local patch="$1"
  [ -f "$patch" ] || return 0
  if grep -q "id: agent-presets" "$patch" 2>/dev/null; then
    echo "· $patch 已含 agent-presets，跳过自动改写（请人工确认 includeUserRoot: false）"
    return 0
  fi
  if grep -qE '^\[\]\s*$' "$patch"; then
    cat > "$patch" <<'YAML'
# Product defaults for this dsh profile. Edit freely.
# Applied after every bundle layer. Do not put API keys here.

# OmniMux 出厂会话预设：只保留标准模式 + 两个社媒专家团
- id: agent-presets
  config:
    default: standard
    includeUserRoot: false
YAML
    echo "  ✓ wrote agent-presets patch → $patch"
  else
    cat >> "$patch" <<'YAML'

# OmniMux 出厂会话预设：只保留标准模式 + 两个社媒专家团
- id: agent-presets
  config:
    default: standard
    includeUserRoot: false
YAML
    echo "  ✓ appended agent-presets patch → $patch"
  fi
}

for home_dir in "${TARGET_HOMES[@]}"; do
  for patch in "$home_dir/profiles"/*/cordis.patch.yml; do
    patch_profile "$patch"
  done
done

# 4) retire obsolete user presets if dsh target or all
if [ "$HAS_DSH" -eq 1 ]; then
  USER_ROOT="$HOME/.dsh/.agent-presets"
  if [ -d "$USER_ROOT" ]; then
    echo "==> 清理旧用户预设（保留目录，移除非出厂项）"
    for child in "$USER_ROOT"/*; do
      [ -e "$child" ] || continue
      base=$(basename "$child")
      case "$base" in
        standard|social-content-team|social-engagement-team) ;;
        .DS_Store) rm -f "$child" || true ;;
        *)
          archive="$USER_ROOT/.retired"
          mkdir -p "$archive"
          rm -rf "$archive/$base"
          mv "$child" "$archive/$base"
          echo "  - retired $base → .retired/"
          ;;
      esac
    done
    for k in "${KEEP[@]}"; do
      rm -rf "$USER_ROOT/$k"
      mkdir -p "$USER_ROOT/$k"
      cp -R "$SRC/$k/." "$USER_ROOT/$k/"
      echo "  + user-root synced $k"
    done
  fi
fi

echo "✅ Agent Presets 物化完成。请重启对应 Host / Desktop 后刷新会话模式下拉。"
