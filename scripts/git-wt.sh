#!/usr/bin/env bash
# ==============================================================================
# OmniMux DSH Plugin - Multi-Agent Worktree & Branch Lifecycle Manager
# Contracts: docs/contracts/plugin-git-pr.md, docs/contracts/agent-issue-lifecycle.md
# ==============================================================================
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

usage() {
  cat <<'EOF'
OmniMux 多 Agent Worktree 隔离与管理工具 (支持 GitHub Issue 绑定)

用法:
  ./scripts/git-wt.sh start <plugin> <topic> [issue_id]   从 origin/main 切出专属 Worktree
  ./scripts/git-wt.sh clean <topic> [issue_id]            PR 合入后安全销毁 Worktree 及本地分支
  ./scripts/git-wt.sh list                                列出当前全部活跃的 Worktree 与对应分支
  ./scripts/git-wt.sh doctor                              检查主目录纯净度与 Worktree 隔离状态

示例:
  # 推荐: 绑定 GitHub Issue ID
  ./scripts/git-wt.sh start workflow table-node 42
  ./scripts/git-wt.sh clean table-node 42

  # 兼容: 无 Issue ID 形式
  ./scripts/git-wt.sh start clip timeline-tools
  ./scripts/git-wt.sh clean timeline-tools
EOF
}

cmd_start() {
  local plugin="$1"
  local topic="$2"
  local raw_issue="$3"

  if [ -z "$plugin" ] || [ -z "$topic" ]; then
    echo "❌ 错误: 必须提供 <plugin> 和 <topic>"
    echo "示例: ./scripts/git-wt.sh start workflow table-node 42"
    exit 1
  fi

  local clean_issue=""
  local branch="agent/${plugin}-${topic}"
  local wt_suffix="${topic}"

  if [ -n "$raw_issue" ]; then
    clean_issue=$(echo "$raw_issue" | sed 's/^[^0-9]*//g')
    if [ -n "$clean_issue" ]; then
      branch="agent/${plugin}-${topic}-issue-${clean_issue}"
      wt_suffix="${topic}-${clean_issue}"
    fi
  fi

  local wt_dir="$(cd "$REPO_ROOT/.." && pwd)/omnimux-dsh-wt-${wt_suffix}"

  if [ -d "$wt_dir" ]; then
    echo "⚠️  Worktree 目录已存在: $wt_dir"
    exit 1
  fi

  echo "==> 1. 获取最新远程主干 origin/main..."
  git -C "$REPO_ROOT" fetch origin main

  echo "==> 2. 创建独立 Worktree: $wt_dir (分支: $branch)..."
  git -C "$REPO_ROOT" worktree add -b "$branch" "$wt_dir" origin/main

  echo ""
  echo "✅ Worktree 已就绪！"
  echo "👉 请进入专属工作区开工:"
  echo "   cd $wt_dir"
  echo "   (在该目录下修改代码、构建与测试，互不干扰)"
}

cmd_clean() {
  local topic="$1"
  local raw_issue="$2"

  if [ -z "$topic" ]; then
    echo "❌ 错误: 必须提供 <topic>"
    echo "示例: ./scripts/git-wt.sh clean table-node 42"
    exit 1
  fi

  local wt_suffix="${topic}"
  if [ -n "$raw_issue" ]; then
    local clean_issue=$(echo "$raw_issue" | sed 's/^[^0-9]*//g')
    if [ -n "$clean_issue" ]; then
      wt_suffix="${topic}-${clean_issue}"
    fi
  fi

  local wt_dir="$(cd "$REPO_ROOT/.." && pwd)/omnimux-dsh-wt-${wt_suffix}"

  echo "==> 1. 移除 Worktree 目录..."
  if [ -d "$wt_dir" ]; then
    git -C "$REPO_ROOT" worktree remove "$wt_dir" --force 2>/dev/null || rm -rf "$wt_dir"
    git -C "$REPO_ROOT" worktree prune
    echo "✓ 目录 $wt_dir 已移除"
  else
    echo "· Worktree 目录不存在，跳过目录删除"
  fi

  echo "==> 2. 同步远程并清理本地跟踪分支..."
  git -C "$REPO_ROOT" fetch origin --prune

  # 匹配可能的分支名 (带 issue 或不带 issue)
  local branches=$(git -C "$REPO_ROOT" branch --list "agent/*-${topic}*" "agent/*-${wt_suffix}")
  if [ -n "$branches" ]; then
    for b in $branches; do
      local clean_b=$(echo "$b" | tr -d ' *+')
      git -C "$REPO_ROOT" branch -D "$clean_b" 2>/dev/null || true
      echo "✓ 已删除本地分支: $clean_b"
    done
  fi

  echo "✅ Topic [${wt_suffix}] 对应的 Worktree 与分支清理完成。"
}

cmd_list() {
  echo "== OmniMux 活跃 Worktree 清单 =="
  git -C "$REPO_ROOT" worktree list
}

cmd_doctor() {
  echo "== 检查主仓库纯净度 =="
  local current_branch=$(git -C "$REPO_ROOT" rev-parse --abbrev-ref HEAD)
  if [ "$current_branch" != "main" ]; then
    echo "⚠️  警告: 主仓库当前位于 [$current_branch]，规范要求主仓库必须停留在 [main]！"
  else
    echo "✓ 主仓库处于 main 分支"
  fi

  local dirty=$(git -C "$REPO_ROOT" status --porcelain)
  if [ -n "$dirty" ]; then
    echo "⚠️  警告: 主仓库存在未提交的脏改动:"
    echo "$dirty"
  else
    echo "✓ 主仓库工作区纯净 (零脏改动)"
  fi

  echo ""
  echo "== 活跃 Worktree 数量 =="
  local count=$(git -C "$REPO_ROOT" worktree list | wc -l | tr -d ' ')
  echo "当前共有 $count 个工作树 (含主树)"
}

case "$1" in
  start)
    shift
    cmd_start "$@"
    ;;
  clean)
    shift
    cmd_clean "$@"
    ;;
  list)
    cmd_list
    ;;
  doctor)
    cmd_doctor
    ;;
  *)
    usage
    exit 1
    ;;
esac
