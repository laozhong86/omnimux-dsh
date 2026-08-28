#!/bin/bash
# sync-stable.sh — 【内部实现】把已构建好的插件目录物化进生产 profile（omnimux）。
#
# ⚠ 日常请勿直调本脚本。统一入口：
#   cd ~/Desktop/Project/omnimux-desktop-fork
#   yarn omnimux:sync [插件...]          # 会先 build 再调本脚本
#   yarn omnimux:restart                 # 需要时再重启 App
#
# 本脚本只做 rsync 物化 + file: 依赖声明 + dsh.profile.bundles 幂等入名单 + pnpm install，**不 build**。
# 直调容易把陈旧 lib/client.js 推进生产（已踩过坑）。禁止手动 rsync/cp 进 profile。
#
# 规范：docs/contracts/dev-pipeline.md
set -euo pipefail

if [ "${OMNIMUX_SYNC_VIA:-}" != "sync-to-app" ] && [ "${OMNIMUX_SYNC_VIA:-}" != "internal" ]; then
  echo "⚠ sync-stable.sh 是内部实现。日常请用：yarn omnimux:sync [插件...]" >&2
  echo "  （若你确认已手动 build 且只要物化，可设 OMNIMUX_SYNC_VIA=internal 消掉本提示）" >&2
fi

PLUGINS_ROOT="${OMNIMUX_PLUGINS_DIR:-/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh/plugins}"
PROFILE="${DSH_HOME:-$HOME/.dsh}/profiles/omnimux"
# 产品树垂直（含产品库 / 插件市场 / 剪辑）+ omnimux-video + omnimux-analytics（埋点）+ omnimux-publish（发布中心）
ALL_PLUGINS=(omnimux omnimux-accounts omnimux-assets omnimux-products omnimux-workflow omnimux-market omnimux-inspiration omnimux-clip omnimux-video omnimux-analytics omnimux-publish)

if [ $# -gt 0 ]; then
  PLUGINS=("$@")
else
  PLUGINS=("${ALL_PLUGINS[@]}")
fi

for name in "${PLUGINS[@]}"; do
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
  echo "✓ $name 已物化进生产 profile"
done

# 依赖声明统一回 file:（物化副本形态），声明了 dsh.bundle 的插件幂等写入加载名单
node - "$PROFILE" "${PLUGINS[@]}" <<'EOF'
const fs = require('fs')
const path = require('path')
const [profile, ...plugins] = process.argv.slice(2)
const file = path.join(profile, 'package.json')
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
    try { fs.rmSync(legacyDir, { recursive: true, force: true }) } catch {}
  }
}

for (const name of plugins) {
  const spec = `file:./node_modules/${name}`
  if (manifest.dependencies[name] !== spec) {
    manifest.dependencies[name] = spec
    depChanged = true
  }
}

// 先处理 omnimux-assets，保证后续产品垂直能插在它后面；已存在则不动。
// 插入不碰 @deepseek-ai/* 前缀段：只 splice 在 assets 之后，或 append。
function ensureInBundles(name, insertAt) {
  if (!declaresBundle(name) || bundles.includes(name)) return insertAt
  if (insertAt >= 0) {
    bundles.splice(insertAt, 0, name)
    bundleChanged = true
    return insertAt + 1
  }
  bundles.push(name)
  bundleChanged = true
  return bundles.length
}

const names = plugins.filter((n, i) => plugins.indexOf(n) === i)
if (names.includes('omnimux-assets')) ensureInBundles('omnimux-assets', -1)
let cursor = bundles.indexOf('omnimux-assets')
cursor = cursor >= 0 ? cursor + 1 : -1
for (const name of names) {
  if (name === 'omnimux-assets') continue
  cursor = ensureInBundles(name, cursor)
}

if (depChanged || bundleChanged) fs.writeFileSync(file, `${JSON.stringify(manifest, null, 2)}\n`)
if (depChanged) console.log('✓ package.json 依赖声明已切回 file: 物化形态')
else console.log('· 依赖声明已是物化形态')
if (bundleChanged) console.log('✓ dsh.profile.bundles 已幂等补齐本次 dsh.bundle 插件')
else console.log('· dsh.profile.bundles 无需变更')
EOF

(cd "$PROFILE" && pnpm install --silent)
echo "✓ pnpm install 完成。重启 OmniMux 后生效。"
