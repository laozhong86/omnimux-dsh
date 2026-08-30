import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

/**
 * DeepSeek Harness Native DSW Token Theme for CodeMirror 6.
 *
 * 100% 直连消费宿主 --dsw-* CSS 变量体系：
 * - 零 JS 切换：暗色与亮色随宿主 CSS 变量级联自适应；
 * - 纯正等宽与 Markdown 排版，行高 1.6，舒适编辑间距；
 * - 符合 WCAG AA 对比度与设计系统规范。
 */
export const dshCodeMirrorTheme = EditorView.theme({
  '&': {
    color: 'var(--dsw-alias-label-primary, #ffffff)',
    backgroundColor: 'transparent',
    height: '100%',
    fontSize: '14px',
    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
    lineHeight: '1.6',
  },
  '.cm-scroller': {
    overflow: 'auto',
    height: '100%',
    fontFamily: 'inherit',
  },
  '.cm-content': {
    padding: '16px 20px',
    caretColor: 'var(--dsw-alias-label-primary, #ffffff)',
  },
  '.cm-line': {
    padding: '0 2px',
  },
  '&.cm-focused': {
    outline: 'none',
  },
  '&.cm-focused .cm-cursor': {
    borderLeftColor: 'var(--dsw-alias-label-primary, #ffffff)',
    borderLeftWidth: '2px',
  },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection': {
    backgroundColor: 'rgba(59, 130, 246, 0.28) !important',
    borderRadius: '2px',
  },
  '.cm-gutters': {
    backgroundColor: 'var(--dsw-alias-bg-layer-1, rgba(255, 255, 255, 0.03))',
    color: 'var(--dsw-alias-label-tertiary, rgba(255, 255, 255, 0.40))',
    borderRight: '1px solid var(--dsw-alias-border-l1, rgba(255, 255, 255, 0.06))',
    paddingRight: '8px',
    userSelect: 'none',
  },
  '.cm-activeLineGutter': {
    backgroundColor: 'var(--dsw-alias-bg-layer-2, rgba(255, 255, 255, 0.06))',
    color: 'var(--dsw-alias-label-primary, #ffffff)',
    fontWeight: '500',
  },
  '.cm-activeLine': {
    backgroundColor: 'var(--dsw-alias-bg-layer-1, rgba(255, 255, 255, 0.03))',
  },
  '.cm-selectionMatch': {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: '2px',
  },
  '.cm-placeholder': {
    color: 'var(--dsw-alias-label-tertiary, rgba(255, 255, 255, 0.35))',
    fontStyle: 'normal',
  },
});

/**
 * Markdown 语法高亮样式定义（对应 Lezer Tag）
 */
export const dshHighlightStyle = HighlightStyle.define([
  { tag: t.heading1, fontSize: '1.25em', fontWeight: 'bold', color: 'var(--dsw-alias-label-primary, #ffffff)' },
  { tag: t.heading2, fontSize: '1.15em', fontWeight: 'bold', color: 'var(--dsw-alias-label-primary, #ffffff)' },
  { tag: t.heading3, fontSize: '1.05em', fontWeight: '600', color: 'var(--dsw-alias-label-primary, #ffffff)' },
  { tag: [t.heading4, t.heading5, t.heading6], fontWeight: '600', color: 'var(--dsw-alias-label-primary, #ffffff)' },
  { tag: t.strong, fontWeight: 'bold', color: 'var(--dsw-alias-label-primary, #ffffff)' },
  { tag: t.emphasis, fontStyle: 'italic', color: 'var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.85))' },
  { tag: t.strikethrough, textDecoration: 'line-through', color: 'var(--dsw-alias-label-tertiary, rgba(255, 255, 255, 0.5))' },
  { tag: t.keyword, color: '#93c5fd', fontWeight: '500' },
  { tag: [t.atom, t.bool, t.url, t.contentSeparator], color: '#60a5fa' },
  { tag: [t.literal, t.inserted], color: '#34d399' },
  { tag: [t.string, t.deleted], color: '#f87171' },
  { tag: [t.regexp, t.escape, t.special(t.string)], color: '#fbbf24' },
  { tag: t.link, color: '#60a5fa', textDecoration: 'underline' },
  { tag: t.monospace, color: '#f472b6', backgroundColor: 'var(--dsw-alias-bg-layer-2, rgba(255, 255, 255, 0.06))' },
  { tag: t.comment, color: 'var(--dsw-alias-label-tertiary, rgba(255, 255, 255, 0.40))', fontStyle: 'italic' },
  { tag: t.meta, color: '#a78bfa' },
  { tag: t.quote, color: 'var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.72))', fontStyle: 'italic' },
  { tag: t.list, color: 'var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.75))' },
]);

export const dshMarkdownHighlighting = syntaxHighlighting(dshHighlightStyle);
