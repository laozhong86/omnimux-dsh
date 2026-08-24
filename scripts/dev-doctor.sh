#!/bin/bash
# dev-doctor.sh — 三层环境合规自检。规范：docs/contracts/dev-pipeline.md
#
# 下次会话/动手前先跑一遍：./scripts/dev-doctor.sh
# 输出每项 ✓/✗ 与修复提示；任一 ✗ 时退出码 1。
set -uo pipefail

PLUGINS_ROOT="${OMNIMUX_PLUGINS_DIR:-/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh/plugins}"
PROD_HOME="${DSH_HOME:-$HOME/.dsh}"
PROD_PROFILE="$PROD_HOME/profiles/omnimux"
DEV_HOME="${DSH_DEV_HOME:-$HOME/.dsh-dev}"
PLUGINS=(omnimux omnimux-accounts omnimux-assets omnimux-products omnimux-market omnimux-workflow dsh-video omnimux-analytics)
fails=0

ok()   { echo "✓ $1"; }
bad()  { echo "✗ $1"; fails=$((fails+1)); }

echo "== 1. 生产 profile 插件形态（必须物化副本，禁止 link） =="
for p in "${PLUGINS[@]}"; do
  path="$PROD_PROFILE/node_modules/$p"
  if [ -L "$path" ]; then
    bad "$p 是 link（生产被污染通道打开）→ 修复: yarn omnimux:sync（fork 仓库）"
  elif [ -d "$path" ]; then
    ok "$p 物化副本"
  else
    bad "$p 缺失 → 修复: yarn omnimux:sync（fork 仓库）"
  fi
done

echo
echo "== 2. 生产依赖声明（必须 file: 物化形态） =="
for p in "${PLUGINS[@]}"; do
  spec=$(node -e "try{console.log(require('$PROD_PROFILE/package.json').dependencies['$p']||'')}catch{console.log('')}" 2>/dev/null)
  case "$spec" in
    file:*) ok "$p → $spec" ;;
    link:*) bad "$p 声明为 link: → 修复: yarn omnimux:sync（fork 仓库）" ;;
    *)      bad "$p 声明异常（'$spec'）→ 修复: yarn omnimux:sync（fork 仓库）" ;;
  esac
done

echo
echo "== 3. 生产 profile bundles（声明了 dsh.bundle 的必须进加载名单） =="
bundles_json=$(node -e "try{const m=require('$PROD_PROFILE/package.json'); console.log(JSON.stringify((m.dsh&&m.dsh.profile&&m.dsh.profile.bundles)||[]))}catch{console.log('[]')}" 2>/dev/null)
for p in "${PLUGINS[@]}"; do
  src="$PLUGINS_ROOT/$p/package.json"
  if [ ! -f "$src" ]; then
    echo "· $p 源码缺失（跳过 bundles 检查）"
    continue
  fi
  has_bundle=$(node -e "try{const m=require(process.argv[1]); process.stdout.write(m.dsh&&m.dsh.bundle!=null?'1':'0')}catch{process.stdout.write('0')}" "$src")
  if [ "$has_bundle" != "1" ]; then
    echo "· $p 未声明 dsh.bundle（不必入加载名单）"
    continue
  fi
  in_list=$(node -e "const name=process.argv[1]; const list=JSON.parse(process.argv[2]||'[]'); process.stdout.write(list.includes(name)?'1':'0')" "$p" "$bundles_json")
  if [ "$in_list" = "1" ]; then
    ok "$p 已在 dsh.profile.bundles"
  else
    bad "$p 声明了 dsh.bundle 但不在 dsh.profile.bundles → 修复: yarn omnimux:sync $p"
  fi
done

echo
echo "== 4. 生产 profile store 固定 =="
if [ -f "$PROD_PROFILE/.npmrc" ] && grep -q "store-dir=$PROD_PROFILE/.pnpm-store" "$PROD_PROFILE/.npmrc"; then
  ok ".npmrc store-dir 固定 profile 内"
else
  bad ".npmrc 缺失或 store 未固定 → 写入: echo 'store-dir=$PROD_PROFILE/.pnpm-store/v10' > $PROD_PROFILE/.npmrc"
fi

echo
echo "== 5. dev 环境（任务子根 / 在研 ≤1 / 端口池） =="
check_dev_profile() {
  local d="$1"
  local tag="${2:-}"
  local name short linked pid running aport home age_days
  name="$(basename "$d")"
  short="${name#omnimux-dev-}"
  linked=$(find "$d/node_modules" -maxdepth 1 -type l 2>/dev/null | wc -l | tr -d ' ')
  pid=""
  [ -f "$d/host.pid" ] && pid=$(cat "$d/host.pid")
  running="stopped"
  if [ -n "$pid" ]; then
    if kill -0 "$pid" 2>/dev/null; then
      running="running"
    else
      bad "$name${tag} stale host.pid=$pid → yarn omnimux:dev stop $short 或 rm"
      running="stale"
    fi
  fi
  if [ "$linked" -le 1 ]; then
    ok "$name${tag} [$running] link 数 $linked"
  else
    bad "$name${tag} link 数 ${linked}（>1，违反在研 ≤1 铁律）→ 修复: yarn omnimux:dev rm $short"
  fi
  aport=""
  [ -f "$d/port.txt" ] && aport=$(tr -d '[:space:]' < "$d/port.txt")
  if [ "$running" = "running" ]; then
    if [ -n "$aport" ] && [ "$aport" -ge 44200 ] 2>/dev/null && [ "$aport" -le 44299 ] 2>/dev/null; then
      ok "$name port $aport ∈ L2 池"
    elif [ -n "$aport" ] && [ "$aport" -ge 44120 ] 2>/dev/null && [ "$aport" -le 44151 ] 2>/dev/null; then
      bad "$name running 口 $aport 落在 App 保留窗 → 再 start 迁入 44200-44299"
    elif [ -n "$aport" ]; then
      echo "· $name port ${aport}（非池内；动态口可接受，建议下次 start 进池）"
    else
      echo "· $name 无 port.txt"
    fi
    if [ -f "$d/dsh-home.txt" ]; then
      home=$(tr -d '[:space:]' < "$d/dsh-home.txt")
      case "$home" in
        */tasks/"$short"|*/tasks/"$short"/) ok "$name DSH_HOME 任务子根" ;;
        "$DEV_HOME"|"$DEV_HOME"/) echo "· $name 仍用共享 DEV_HOME（legacy 或 OMNIMUX_DEV_LEGACY_HOME=1）" ;;
        *) echo "· $name DSH_HOME=$home" ;;
      esac
    else
      echo "· $name 无 dsh-home.txt（旧环境；再 start 会写入）"
    fi
  elif [ "$running" = "stopped" ]; then
    if [ -d "$d" ]; then
      age_days=$(( ( $(date +%s) - $(stat -f %m "$d" 2>/dev/null || stat -c %Y "$d") ) / 86400 ))
      if [ "$age_days" -ge 7 ]; then
        echo "· $name${tag} stopped 已 ${age_days} 天 → 建议 yarn omnimux:dev rm $short"
      fi
    fi
  fi
}
found=0
if [ -d "$DEV_HOME/tasks" ]; then
  for d in "$DEV_HOME"/tasks/*/profiles/omnimux-dev-*; do
    [ -d "$d" ] || continue
    found=1
    check_dev_profile "$d"
  done
fi
if [ -d "$DEV_HOME/profiles" ]; then
  for d in "$DEV_HOME"/profiles/omnimux-dev-*; do
    [ -d "$d" ] || continue
    case "$d" in *.migrated-*) continue ;; esac
    found=1
    check_dev_profile "$d" " [legacy]"
  done
fi
[ "$found" = 0 ] && echo "· 无 dev 环境（正常，用完即弃）"

echo
echo "== 6. dev 环境 MUST NOT 出现在生产数据根 =="
stray=$(find "$PROD_HOME/profiles" -maxdepth 1 -name "omnimux-dev-*" 2>/dev/null | head -1)
if [ -n "$stray" ]; then
  bad "生产数据根下发现 dev profile: $stray → 移走或删除"
else
  ok "生产数据根无 dev profile"
fi

echo
echo "== 7. 源码树构建新鲜度（lib 不落后于 src） =="
for p in "${PLUGINS[@]}"; do
  src="$PLUGINS_ROOT/$p/src/client"
  lib="$PLUGINS_ROOT/$p/lib/client.js"
  if [ -d "$src" ] && [ -f "$lib" ]; then
    newest_src=$(find "$src" -name "*.js*" ! -name "*.test.js" ! -name "*.spec.js" -newer "$lib" 2>/dev/null | head -1)
    if [ -n "$newest_src" ]; then
      build_hint="node scripts/build-client.mjs"
      [ -f "$PLUGINS_ROOT/$p/scripts/build-client.mjs" ] || build_hint="按该插件自身构建命令"
      bad "$p 源码比 lib 新（${newest_src}）→ 修复: (cd $PLUGINS_ROOT/$p && $build_hint)"
    else
      ok "$p lib 已是最新"
    fi
  else
    echo "· $p 无 client（跳过）"
  fi
done

echo
if [ "$fails" -gt 0 ]; then
  echo "✗ $fails 项不合规，按提示修复"
  exit 1
fi
echo "✓ 全部合规（三层环境：生产物化 / dev link / 数据隔离）"
