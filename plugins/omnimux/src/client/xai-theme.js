/**
 * Full-shell x.ai brand theme override for the OmniMux execution hub.
 *
 * Stacks a single override layer over the host shell's active theme via
 * `ctx.theme.overrideTokens`, tinting the whole DeepSeek Harness shell
 * (sidebar, conversation, header, settings) in the OmniMux x.ai palette.
 * Dual-mode: every token carries both `light` and `dark` values (a bare
 * string throws a teaching error in the host guard). Wrapped in
 * `ctx.effect` so plugin unload disposes the layer and the presenter strips
 * the body inline tokens on the next apply — no persistence, restart cleans.
 *
 * Token names are grepped-verified against the official
 * `@deepseek-ai/dsh-client-ui-theme` inspect-token directory and base
 * stylesheets. This is the design-system Phase-3 `--dsw-alias-*` bridge
 * (full-shell tint), an explicit owner-approved decision.
 */

/** Token-name → `{ light, dark }` value pairs. @type {Record<string, { light: string, dark: string }>} */
export const XAI_TOKENS = {
  // 背景层
  '--dsw-alias-bg-base':            { light: '#ffffff', dark: '#0a0a0a' },
  '--dsw-alias-bg-layer-1':         { light: '#fbfbfb', dark: '#171717' },
  '--dsw-alias-bg-layer-2':         { light: '#fbfbfb', dark: '#171717' },
  '--dsw-alias-bg-layer-3':         { light: '#fbfbfb', dark: '#171717' },
  '--dsw-alias-bg-module-platform': { light: '#f7f7f7', dark: '#131313' },
  '--dsw-alias-bg-overlay':         { light: '#ebebeb', dark: '#3d3d3d' },
  '--dsw-alias-bg-mask-1':          { light: 'rgba(10,10,10,.40)', dark: 'rgba(0,0,0,.60)' },
  '--dsw-alias-bg-mask-2':          { light: 'rgba(10,10,10,.24)', dark: 'rgba(0,0,0,.40)' },
  '--dsw-alias-bg-mask-3':          { light: 'rgba(10,10,10,.48)', dark: 'rgba(0,0,0,.60)' },
  '--dsw-alias-bg-skeleton':        { light: 'rgba(10,10,10,.05)', dark: 'rgba(255,255,255,.08)' },
  // 文本层
  '--dsw-alias-label-primary':            { light: '#0a0a0a', dark: '#ffffff' },
  '--dsw-alias-label-secondary':          { light: '#4b4b4b', dark: '#b4b4b4' },
  '--dsw-alias-label-tertiary':           { light: '#848484', dark: '#7c7c7c' },
  '--dsw-alias-label-caption':            { light: '#848484', dark: '#7c7c7c' },
  '--dsw-alias-label-dimmed':             { light: '#bfbfbf', dark: '#3d3d3d' },
  '--dsw-alias-label-primary-inverted':   { light: '#ffffff', dark: '#0a0a0a' },
  '--dsw-alias-label-primary-foreground': { light: '#ffffff', dark: '#0a0a0a' },
  '--dsw-alias-label-primary-dimmed':     { light: '#1f1f1f', dark: '#ebebeb' },
  '--dsw-alias-label-primary-bluish':     { light: '#0a0a0a', dark: '#ffffff' },
  // 边框层
  '--dsw-alias-border-l1':               { light: 'rgba(10,10,10,.06)', dark: 'rgba(255,255,255,.08)' },
  '--dsw-alias-border-l2':               { light: '#dbdbdb', dark: '#242424' },
  '--dsw-alias-border-l2-darkmode-thin': { light: 'rgba(10,10,10,.10)', dark: 'rgba(255,255,255,.06)' },
  '--dsw-alias-border-l3':               { light: '#dbdbdb', dark: '#3d3d3d' },
  '--dsw-alias-border-l4':               { light: '#bfbfbf', dark: '#3d3d3d' },
  '--dsw-alias-border-inverted':         { light: 'rgba(10,10,10,.06)', dark: 'rgba(255,255,255,.10)' },
  // 交互 / 按钮层
  '--dsw-alias-interactive-bg-hover':        { light: 'rgba(10,10,10,.05)', dark: 'rgba(255,255,255,.07)' },
  '--dsw-alias-interactive-bg-active':       { light: 'rgba(10,10,10,.09)', dark: 'rgba(255,255,255,.13)' },
  '--dsw-alias-interactive-bg-hover-accent': { light: 'rgba(10,10,10,.09)', dark: 'rgba(255,255,255,.13)' },
  '--dsw-alias-interactive-bg-hover-solid':  { light: '#f7f7f7', dark: '#242424' },
  '--dsw-alias-interactive-bg-hover-danger': { light: 'rgba(185,28,28,.06)', dark: 'rgba(248,113,113,.15)' },
  '--dsw-alias-button-primary-fill':     { light: '#0a0a0a', dark: '#ffffff' },
  '--dsw-alias-button-primary-hover':    { light: '#242424', dark: '#ebebeb' },
  '--dsw-alias-button-primary-dimmed':   { light: '#f7f7f7', dark: '#242424' },
  '--dsw-alias-button-contrast-fill':    { light: '#0a0a0a', dark: '#ebebeb' },
  '--dsw-alias-button-elevated-fill':    { light: '#ffffff', dark: '#242424' },
  '--dsw-alias-button-floating-fill':    { light: '#ffffff', dark: '#171717' },
  '--dsw-alias-button-floating-hover':   { light: '#f7f7f7', dark: '#242424' },
  '--dsw-alias-button-ghost-active-border': { light: '#848484', dark: '#7c7c7c' },
  '--dsw-alias-button-ghost-active-fill':   { light: '#f7f7f7', dark: '#242424' },
  '--dsw-alias-button-ghost-active-hover':  { light: '#dbdbdb', dark: '#3d3d3d' },
  '--dsw-alias-button-info-fill':        { light: '#0a0a0a', dark: '#ffffff' },
  '--dsw-alias-button-info-hover':       { light: '#242424', dark: '#ebebeb' },
  '--dsw-alias-button-tool-bar-fill':    { light: 'rgba(10,10,10,.40)', dark: 'rgba(255,255,255,.40)' },
  '--dsw-alias-button-tool-bar-hover':   { light: 'rgba(10,10,10,.50)', dark: 'rgba(255,255,255,.50)' },
  // 状态层
  '--dsw-alias-state-success-primary':   { light: '#15803d', dark: '#4ade80' },
  '--dsw-alias-state-success-secondary': { light: '#15803d', dark: '#4ade80' },
  '--dsw-alias-state-success-tertiary':  { light: 'rgba(21,128,61,.10)', dark: 'rgba(74,222,128,.14)' },
  '--dsw-alias-state-error-primary':     { light: '#b91c1c', dark: '#f87171' },
  '--dsw-alias-state-error-secondary':   { light: '#b91c1c', dark: '#f87171' },
  '--dsw-alias-state-warn-primary':      { light: '#b45309', dark: '#fbbf24' },
  '--dsw-alias-state-warn-secondary':    { light: '#b45309', dark: '#fbbf24' },
  '--dsw-alias-state-warn-tertiary':     { light: 'rgba(180,83,9,.10)', dark: 'rgba(251,191,36,.14)' },
  '--dsw-alias-state-warn-label':        { light: '#b45309', dark: '#fbbf24' },
  '--dsw-alias-state-business-primary':  { light: '#0a0a0a', dark: '#ffffff' },
  '--dsw-alias-state-business-tertiary': { light: 'rgba(10,10,10,.08)', dark: 'rgba(255,255,255,.10)' },
  '--dsw-alias-label-error':             { light: '#b91c1c', dark: '#f87171' },
  // 品牌层
  '--dsw-alias-brand-primary':        { light: '#0a0a0a', dark: '#ffffff' },
  '--dsw-alias-brand-primary-invert': { light: '#ffffff', dark: '#0a0a0a' },
  '--dsw-alias-brand-text':           { light: '#0a0a0a', dark: '#ffffff' },
  // Markdown / 代码块
  '--dsw-alias-markdown-code-block':              { light: '#f7f7f7', dark: '#131313' },
  '--dsw-alias-markdown-code-block-banner':       { light: '#f7f7f7', dark: '#171717' },
  '--dsw-alias-markdown-inline-code':             { light: '#f7f7f7', dark: '#242424' },
  '--dsw-alias-markdown-citation':                { light: '#f7f7f7', dark: '#242424' },
  '--dsw-alias-markdown-tag':                     { light: '#f7f7f7', dark: '#242424' },
  '--dsw-alias-markdown-placeholder':             { light: '#f7f7f7', dark: '#171717' },
  '--dsw-alias-markdown-code-segment-selected':   { light: '#ffffff', dark: '#242424' },
  '--dsw-alias-markdown-code-segment-unselected': { light: '#f7f7f7', dark: '#131313' },
  // 浮层 / 滚动条
  '--dsw-alias-tooltip-bg':         { light: '#1f1f1f', dark: '#3d3d3d' },
  '--dsw-alias-toast-bg':           { light: '#1f1f1f', dark: '#3d3d3d' },
  '--dsw-alias-scrollbar-bg-l1':    { light: '#dbdbdb', dark: '#3d3d3d' },
  '--dsw-alias-scrollbar-hover-l1': { light: '#bfbfbf', dark: '#848484' },
  '--dsw-alias-scrollbar-bg-l2':    { light: '#dbdbdb', dark: '#3d3d3d' },
  '--dsw-alias-scrollbar-hover-l2': { light: '#bfbfbf', dark: '#848484' },
  // specific 壳结构面
  '--dsw-specific-sidebar-fill':                    { light: '#fbfbfb', dark: '#131313' },
  '--dsw-specific-sidebar-nav-item-hover':          { light: 'rgba(10,10,10,.05)', dark: 'rgba(255,255,255,.07)' },
  '--dsw-specific-sidebar-nav-item-active':         { light: 'rgba(10,10,10,.09)', dark: 'rgba(255,255,255,.13)' },
  '--dsw-specific-sidebar-nav-item-active-accent':  { light: 'rgba(10,10,10,.09)', dark: 'rgba(255,255,255,.13)' },
  '--dsw-specific-menu':              { light: '#fbfbfb', dark: '#171717' },
  '--dsw-specific-tip':               { light: '#f7f7f7', dark: '#171717' },
  '--dsw-specific-input-major':       { light: '#ffffff', dark: '#131313' },
  '--dsw-specific-selector':          { light: '#f7f7f7', dark: '#242424' },
  '--dsw-specific-bubble':            { light: '#f7f7f7', dark: '#171717' },
  '--dsw-specific-bubble-highlight':  { light: '#dbdbdb', dark: '#3d3d3d' },
  '--dsw-specific-login-input':       { light: '#f7f7f7', dark: '#131313' },
}

/**
 * Stack the x.ai override layer over the active theme. Returns the disposer
 * `overrideTokens` hands back, so `ctx.effect` reverts the layer on unload.
 * @param {{ theme: { overrideTokens: Function } }} ctx
 * @returns {() => void} disposer removing exactly this layer.
 */
export function applyXaiShellTheme(ctx) {
  return ctx.theme.overrideTokens('omnimux-xai', XAI_TOKENS)
}
