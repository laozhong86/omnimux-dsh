#!/bin/bash
# dev-env.sh — 预发布/开发环境管理（L2 层）。规范：docs/contracts/dev-pipeline.md
#
# 模型：每个开发/测试任务一个独立 profile（omnimux-dev-<name>），独立数据根
# ~/.dsh-dev，与生产（omnimux profile + ~/.dsh）零共享、互不干扰。
#
# 铁律：一个 dev profile 里 link 的在研插件不超过 1 个，其余全是物化稳定副本。
#
# 用法：
#   ./scripts/dev-env.sh start <name> <plugin>   # 建环境 + Host + 插件 watch（后台）
#   ./scripts/dev-env.sh stop <name>             # 停 Host + watch
#   ./scripts/dev-env.sh ls                      # 列出现有 dev 环境
#   ./scripts/dev-env.sh rm <name>               # 停 Host/watch 并删除整个环境
#   ./scripts/dev-env.sh watch <name> <plugin>   # 只启/换在研插件的 watch（不重启 Host）
#   ./scripts/dev-env.sh unwatch <name>          # 只停 watch
#
# 例：./scripts/dev-env.sh start assets-v2 omnimux-assets
#     → 浏览器打开打印的 URL；改 src/client 后 watch 重建，官方 HMR 自动推浏览器。
#
# 【内部实现】日常入口请用 fork 仓库：
#   yarn omnimux:dev start <name> <plugin>
#   yarn omnimux:dev watch|stop|rm|ls ...
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PLUGINS_ROOT="${OMNIMUX_PLUGINS_DIR:-$ROOT/plugins}"
DSH_SRC="${DSH_SRC:-/Users/x/Desktop/Project/Github/deepseek-harness}"
DEV_HOME="${DSH_DEV_HOME:-$HOME/.dsh-dev}"
PROD_PROFILE="${DSH_HOME:-$HOME/.dsh}/profiles/omnimux"

usage() { sed -n '2,22p' "$0"; exit 1; }
[ $# -lt 1 ] && usage
cmd="$1"; name="${2:-}"

profile_dir() { echo "$DEV_HOME/profiles/omnimux-dev-$1"; }

stop_watch() {
  local pdir="$1"
  if [ -f "$pdir/watch.pid" ]; then
    kill "$(cat "$pdir/watch.pid")" 2>/dev/null || true
    # workflow 的 dev.mjs 可能再拉起子进程；尽量清掉同插件的残留 watch
    if [ -f "$pdir/watch.plugin" ]; then
      local plug
      plug="$(cat "$pdir/watch.plugin")"
      pkill -f "watch-plugin.mjs ${plug}$" 2>/dev/null || true
      pkill -f "${plug}/scripts/dev.mjs" 2>/dev/null || true
    fi
    rm -f "$pdir/watch.pid" "$pdir/watch.plugin"
    echo "✓ watch 已停止"
  fi
}

start_watch() {
  local pdir="$1"
  local plugin="$2"
  stop_watch "$pdir" >/dev/null 2>&1 || true
  mkdir -p "$pdir"
  echo "$plugin" > "$pdir/watch.plugin"
  nohup node "$ROOT/scripts/watch-plugin.mjs" "$plugin" \
    > "$pdir/watch.log" 2>&1 &
  echo $! > "$pdir/watch.pid"
  echo "✓ watch → $plugin（日志: $pdir/watch.log）"
}

case "$cmd" in
  start)
    plugin="${3:-}"
    if [ -z "$name" ] || [ -z "$plugin" ]; then usage; fi
    [ -f "$PLUGINS_ROOT/$plugin/package.json" ] || { echo "✗ 插件源码不存在: $PLUGINS_ROOT/$plugin" >&2; exit 1; }
    pdir="$(profile_dir "$name")"
    if [ ! -d "$pdir/node_modules" ]; then
      echo "→ 初始化环境 omnimux-dev-${name}（APFS 克隆生产依赖，秒级）"
      mkdir -p "$pdir"
      cp "$PROD_PROFILE/package.json" "$PROD_PROFILE/cordis.patch.yml" "$pdir/"
      # dev profile 独立 pnpm store（不引用生产 profile 的 .npmrc 配置）
      echo "store-dir=$pdir/.pnpm-store/v10" > "$pdir/.npmrc"
      cp -Rc "$PROD_PROFILE/node_modules" "$pdir/node_modules" 2>/dev/null \
        || cp -R "$PROD_PROFILE/node_modules" "$pdir/node_modules"
    fi
    # 在研插件换 link（其余保持物化副本）
    rm -rf "${pdir:?}/node_modules/$plugin"
    ln -s "$PLUGINS_ROOT/$plugin" "$pdir/node_modules/$plugin"
    echo "✓ $plugin → link $PLUGINS_ROOT/$plugin"
    # 停掉旧实例再启动
    [ -f "$pdir/host.pid" ] && kill "$(cat "$pdir/host.pid")" 2>/dev/null || true
    stop_watch "$pdir" >/dev/null 2>&1 || true
    sleep 1
    # OMNIMUX_PLUGIN_PROFILE：dev profile 用 symlink 装插件，Node 按 realpath 解析
    # packageRoot 后无法从 node_modules 位置反推 profile（gallery/market 的 paths 逻辑），
    # 显式注入让连接器等写 profile 的操作落在正确的 dev profile。
    DSH_HOME="$DEV_HOME" OMNIMUX_PLUGIN_PROFILE="omnimux-dev-$name" nohup node "$DSH_SRC/apps/cli/lib/bin.js" \
      --profile "omnimux-dev-$name" --host 127.0.0.1 --port 0 --no-open \
      > "$pdir/host.log" 2>&1 &
    echo $! > "$pdir/host.pid"
    # 从 Host 日志解析真实端口（lsof 在本机有 Surge 等代理工具时不可信）
    port=""
    for _ in $(seq 1 20); do
      sleep 1
      port=$(grep -oE 'http://127\.0\.0\.1:[0-9]+' "$pdir/host.log" 2>/dev/null | tail -1 | grep -oE '[0-9]+$' || true)
      [ -n "$port" ] && break
    done
    if [ -z "$port" ]; then
      echo "✗ Host 未在 20s 内监听，日志: $pdir/host.log" >&2
      exit 1
    fi
    start_watch "$pdir" "$plugin"
    echo "✓ dev 环境已启动: omnimux-dev-$name"
    echo "  URL:   http://127.0.0.1:$port"
    echo "  link:  $plugin"
    echo "  watch: 已启用（改 client 源码 → 自动重建 → 浏览器 HMR）"
    echo "  数据:  ${DEV_HOME}（与生产 ~/.dsh 完全隔离）"
    ;;
  watch)
    plugin="${3:-}"
    if [ -z "$name" ] || [ -z "$plugin" ]; then usage; fi
    [ -f "$PLUGINS_ROOT/$plugin/package.json" ] || { echo "✗ 插件源码不存在: $PLUGINS_ROOT/$plugin" >&2; exit 1; }
    pdir="$(profile_dir "$name")"
    [ -d "$pdir" ] || { echo "✗ 环境不存在: omnimux-dev-$name（先 start）" >&2; exit 1; }
    # 允许只换 watch；若 profile 里还没 link 该插件，补 link
    if [ ! -L "$pdir/node_modules/$plugin" ]; then
      rm -rf "${pdir:?}/node_modules/$plugin"
      ln -s "$PLUGINS_ROOT/$plugin" "$pdir/node_modules/$plugin"
      echo "✓ $plugin → link $PLUGINS_ROOT/$plugin"
    fi
    start_watch "$pdir" "$plugin"
    ;;
  unwatch)
    [ -z "$name" ] && usage
    pdir="$(profile_dir "$name")"
    stop_watch "$pdir" || echo "· omnimux-dev-$name 无 watch"
    ;;
  stop)
    [ -z "$name" ] && usage
    pdir="$(profile_dir "$name")"
    stop_watch "$pdir" >/dev/null 2>&1 || true
    [ -f "$pdir/host.pid" ] && kill "$(cat "$pdir/host.pid")" 2>/dev/null && rm -f "$pdir/host.pid" \
      && echo "✓ omnimux-dev-$name Host 已停止" || echo "· omnimux-dev-$name Host 未在运行"
    ;;
  ls)
    if [ -d "$DEV_HOME/profiles" ]; then
      for d in "$DEV_HOME"/profiles/omnimux-dev-*; do
        [ -d "$d" ] || continue
        state=" stopped"
        [ -f "$d/host.pid" ] && kill -0 "$(cat "$d/host.pid")" 2>/dev/null && state=" running"
        wstate="watch:off"
        if [ -f "$d/watch.pid" ] && kill -0 "$(cat "$d/watch.pid")" 2>/dev/null; then
          wstate="watch:$(cat "$d/watch.plugin" 2>/dev/null || echo on)"
        fi
        linked=$(find "$d/node_modules" -maxdepth 1 -type l 2>/dev/null | xargs -I{} basename {} 2>/dev/null | tr '\n' ' ')
        echo "$(basename "$d")  [$state]  $wstate  link: ${linked:-（无）}"
      done
    else
      echo "（还没有 dev 环境）"
    fi
    ;;
  rm)
    [ -z "$name" ] && usage
    "$0" stop "$name" || true
    rm -rf "$(profile_dir "$name")"
    echo "✓ omnimux-dev-$name 已删除"
    ;;
  *) usage ;;
esac
