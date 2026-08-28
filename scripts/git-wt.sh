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
OmniMux 多 Agent Worktree 隔离与管理工具 (支持 GitHub Issue 绑定与自动解析)

用法:
  ./scripts/git-wt.sh start <plugin> <topic> [issue_id]   从 origin/main 切出专属 Worktree
  ./scripts/git-wt.sh auto-start <issue_id>               根据 Issue ID 自动解析创建 Worktree
  ./scripts/git-wt.sh clean <topic> [issue_id]            PR 合入后安全销毁 Worktree 及本地分支
  ./scripts/git-wt.sh list                                列出当前全部活跃的 Worktree 与对应分支
  ./scripts/git-wt.sh doctor                              检查主目录纯净度与 Worktree 隔离状态

示例:
  # 推荐: 绑定 GitHub Issue ID
  ./scripts/git-wt.sh start workflow table-node 42
  ./scripts/git-wt.sh auto-start 42
  ./scripts/git-wt.sh clean table-node 42

  # 兼容: 无 Issue ID 形式
  ./scripts/git-wt.sh start clip timeline-tools
  ./scripts/git-wt.sh clean timeline-tools
EOF
}

cmd_auto_start() {
  local raw_issue="$1"
  if [ -z "$raw_issue" ]; then
    echo "❌ 错误: 必须提供 <issue_id>"
    echo "示例: ./scripts/git-wt.sh auto-start 42"
    exit 1
  fi
  local clean_issue=$(echo "$raw_issue" | sed 's/^[^0-9]*//g')

  echo "==> 正在查询 GitHub Issue #${clean_issue} 元数据..."
  local issue_json=""
  if command -v gh >/dev/null 2>&1; then
    issue_json=$(gh issue view "$clean_issue" -R laozhong86/omnimux-dsh --json title,labels 2>/dev/null || true)
  fi

  local plugin="common"
  local topic="task"

  if [ -n "$issue_json" ]; then
    # 解析 title 形如 feat(workflow): xxx 或 scope 标签
    local extracted_plugin=$(echo "$issue_json" | grep -oE 'feat\([^)]+\)|fix\([^)]+\)|scope:[a-zA-Z0-9_-]+' | head -1 | sed -E 's/(feat\(|fix\(|scope:)//;s/\)//' || true)
    if [ -n "$extracted_plugin" ]; then
      plugin="$extracted_plugin"
    fi
    local title=$(echo "$issue_json" | grep -oE '"title":"[^"]+"' | head -1 | cut -d: -f2 | tr -d '"')
    if [ -n "$title" ]; then
      topic=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr -c 'a-z0-9' '-' | sed 's/^-\+//;s/-\+$//' | cut -c1-20)
    fi
  fi

  [ -z "$topic" ] && topic="issue-${clean_issue}"

  echo "==> 自动解析结果: Plugin=[$plugin], Topic=[$topic], Issue=[#$clean_issue]"
  cmd_start "$plugin" "$topic" "$clean_issue"
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
  shift 2 || true
  local pr_number=""
  local force_flag=""

  while [ $# -gt 0 ]; do
    case "$1" in
      --pr)
        pr_number="$2"
        shift 2
        ;;
      --force)
        force_flag="1"
        shift
        ;;
      *)
        shift
        ;;
    esac
  done

  if [ -z "$topic" ]; then
    echo "❌ 错误: 必须提供 <topic>"
    echo "示例: ./scripts/git-wt.sh clean table-node 42 [--pr <pr_number>]"
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

  if [ -n "$pr_number" ] && command -v gh >/dev/null 2>&1 && [ "$force_flag" != "1" ]; then
    echo "==> 校验 PR #${pr_number} 合入状态..."
    local pr_state
    pr_state=$(gh pr view "$pr_number" -R laozhong86/omnimux-dsh --json state,mergedAt -q '.state' 2>/dev/null || true)
    if [ "$pr_state" != "MERGED" ]; then
      echo "❌ 安全守卫拦截：PR #${pr_number} 状态为 [$pr_state]，未确认 MERGED 严禁清理现场！" >&2
      exit 1
    fi
    echo "✓ PR #${pr_number} 已确认 MERGED"
  elif [ "$force_flag" != "1" ] && [ "${OMNIMUX_MERGE_CONFIRMED:-0}" != "1" ]; then
    echo "⚠️ 未声明 --pr / --force 且未置位 OMNIMUX_MERGE_CONFIRMED；若要强制清理，请显式传入 --force" >&2
    exit 1
  fi

  echo "==> 1. 移除 Worktree 目录..."
  if [ -d "$wt_dir" ]; then
    git -C "$REPO_ROOT" worktree remove "$wt_dir" 2>/dev/null || git -C "$REPO_ROOT" worktree remove "$wt_dir" --force 2>/dev/null || rm -rf "$wt_dir"
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
  auto-start)
    shift
    cmd_auto_start "$@"
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
