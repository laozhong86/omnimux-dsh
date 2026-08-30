#!/bin/bash
# sync-stable.sh — 【内部实现】把已构建好的插件目录物化进目标 profile。
#
# ⚠ 日常请勿直调本脚本。统一入口：
#   cd ~/Desktop/Project/omnimux-desktop-fork
#   yarn omnimux:sync [插件...] [--prod|--dsh|--all]   # 会先 build 再调本脚本
#   yarn omnimux:restart dev                          # 需要时再重启 App
#
# 默认行为：仅物化到 ~/.omnimux-dev；可通过 --prod / --dsh / --all 参数扩展到其他环境。
# 本脚本只做 rsync 物化 + file: 依赖声明 + dsh.profile.bundles 幂等入名单 + pnpm install，**不 build**。
# 直调容易把陈旧 lib/client.js 推进生产（已踩过坑）。禁止手动 rsync/cp 进 profile。
#
# 规范：docs/contracts/dev-pipeline.md
set -euo pipefail

if [ "${OMNIMUX_SYNC_VIA:-}" != "sync-to-app" ] && [ "${OMNIMUX_SYNC_VIA:-}" != "internal" ]; then
  echo "⚠ sync-stable.sh 是内部实现。日常请用：yarn omnimux:sync [插件...] [--prod|--dsh|--all]" >&2
  echo "  （若你确认已手动 build 且只要物化，可设 OMNIMUX_SYNC_VIA=internal 消掉本提示）" >&2
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PLUGINS_ROOT="${OMNIMUX_PLUGINS_DIR:-$ROOT/plugins}"

TARGET_SELECTION=()
PLUGINS=()

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
    --skip-build)
      shift ;;
    --*)
      # 忽略其他不认识的参数
      shift ;;
    *)
      PLUGINS+=("$1")
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

if [ ${#TARGET_SELECTION[@]} -eq 0 ]; then
  add_target_home "$HOME/.omnimux-dev"
else
  for item in "${TARGET_SELECTION[@]}"; do
    case "$item" in
      all|broadcast)
        add_target_home "$HOME/.omnimux-dev"
        add_target_home "$HOME/.omnimux"
        add_target_home "$HOME/.dsh"
        ;;
      dev|omnimux-dev)
        add_target_home "$HOME/.omnimux-dev"
        ;;
      prod|omnimux|omnimux-prod)
        add_target_home "$HOME/.omnimux"
        ;;
      dsh|dsh-desktop)
        add_target_home "$HOME/.dsh"
        ;;
      /*|~*)
        eval expanded_path="$item"
        add_target_home "$expanded_path"
        ;;
      *)
        ;;
    esac
  done
fi

PROFILES=()
for home_candidate in "${TARGET_HOMES[@]}"; do
  prof_dir="$home_candidate/profiles/omnimux"
  if [ -d "$prof_dir" ] || [ -d "$home_candidate" ]; then
    already=0
    if [ "${#PROFILES[@]}" -gt 0 ]; then
      for p in "${PROFILES[@]}"; do
        if [ "$p" = "$prof_dir" ]; then
          already=1
          break
        fi
      done
    fi
    if [ "$already" -eq 0 ]; then
      PROFILES+=("$prof_dir")
    fi
  fi
done

# 产品树垂直（含产品库 / 插件市场 / 剪辑）+ omnimux-video + omnimux-analytics（埋点）+ omnimux-publish（发布中心）
ALL_PLUGINS=(omnimux omnimux-accounts omnimux-assets omnimux-products omnimux-workflow omnimux-market omnimux-inspiration omnimux-clip omnimux-video omnimux-analytics omnimux-publish)

if [ ${#PLUGINS[@]} -gt 0 ]; then
  TARGET_PLUGINS=("${PLUGINS[@]}")
else
  TARGET_PLUGINS=("${ALL_PLUGINS[@]}")
fi

for PROFILE in "${PROFILES[@]}"; do
  echo "== 同步目标 Profile: $PROFILE =="
  mkdir -p "$PROFILE/node_modules"

  for name in "${TARGET_PLUGINS[@]}"; do
    src="$PLUGINS_ROOT/$name"
    dst="$PROFILE/node_modules/$name"
    if [ ! -f "$src/package.json" ]; then
      echo "✗ 源码缺失: $src" >&2
      exit 1
    fi
    # 逐目录同步（含 lib/ 构建产物与 cordis.patch.yml），排除依赖与测试
    mkdir -p "$dst"
    rsync -a --delete \
      --exclude node_modules \
      --exclude '*.test.js' \
      --exclude '*.spec.js' \
      "$src/" "$dst/"
    echo "✓ $name 已物化进 $PROFILE"
  done

  # 依赖声明统一回 file:（物化副本形态），声明了 dsh.bundle 的插件幂等写入加载名单
  node - "$PROFILE" "${TARGET_PLUGINS[@]}" <<'EOF'
const fs = require('fs')
const path = require('path')
const [profile, ...plugins] = process.argv.slice(2)
const file = path.join(profile, 'package.json')
if (!fs.existsSync(file)) {
  process.exit(0)
}
const manifest = JSON.parse(fs.readFileSync(file, 'utf8'))
if (!manifest.dependencies) manifest.dependencies = {}
if (!manifest.dsh) manifest.dsh = {}
if (!manifest.dsh.profile) manifest.dsh.profile = {}
if (!Array.isArray(manifest.dsh.profile.bundles)) manifest.dsh.profile.bundles = []
const bundles = manifest.dsh.profile.bundles
let depChanged = false
let bundleChanged = false

function declaresBundle(name) {
  const pkgFile = path.join(profile, 'node_modules', name, 'package.json')
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf8'))
    return pkg?.dsh?.bundle != null
  } catch {
    return false
  }
}

// 清理已知历史废弃/更名前的包名，避免 Cordis 重复注册 Service 冲突导致 Host 启动失败崩溃
const LEGACY_PRUNE_NAMES = ['dsh-video', 'dsh-omnimux', 'dsh-drama', 'dsh-publish']
for (const legacy of LEGACY_PRUNE_NAMES) {
  if (manifest.dependencies[legacy]) {
    delete manifest.dependencies[legacy]
    depChanged = true
  }
  const idx = bundles.indexOf(legacy)
  if (idx >= 0) {
    bundles.splice(idx, 1)
    bundleChanged = true
  }
  const legacyDir = path.join(profile, 'node_modules', legacy)
  if (fs.existsSync(legacyDir)) {
    fs.rmSync(legacyDir, { recursive: true, force: true })
    console.log(`  - 已清理历史残留包目录: ${legacy}`)
  }
}

for (const name of plugins) {
  const targetSpec = `file:node_modules/${name}`
  if (manifest.dependencies[name] !== targetSpec) {
    manifest.dependencies[name] = targetSpec
    depChanged = true
  }
  if (declaresBundle(name)) {
    if (!bundles.includes(name)) {
      bundles.push(name)
      bundleChanged = true
    }
  } else {
    const idx = bundles.indexOf(name)
    if (idx >= 0) {
      bundles.splice(idx, 1)
      bundleChanged = true
    }
  }
}

if (depChanged || bundleChanged) {
  fs.writeFileSync(file, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
  console.log(`  ✓ 更新 ${file} (dependencies/bundles)`)
}
EOF

  # 写入后刷新 profile 下的 node_modules 符号拓扑
  echo "  → 刷新 profile 依赖 (corepack pnpm install)..."
  (cd "$PROFILE" && corepack pnpm install >/dev/null 2>&1) || true
done

echo "✅ 插件物化完成。"
