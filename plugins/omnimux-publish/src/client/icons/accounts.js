import React from 'react'

/**
 * 16px 搜索放大镜大纲图标 (Search Outline)
 * @param {{ size?: number, className?: string }} props
 */
export function IconSearchOutline16({ size = 16, className, ...props } = {}) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 16 16',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.3,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      className,
      ...props,
    },
    React.createElement('circle', { cx: 7, cy: 7, r: 4.75 }),
    React.createElement('path', { d: 'm10.5 10.5 3.25 3.25' })
  )
}

/**
 * 16px 书本大纲图标 (Book / Tutorial Outline)
 * @param {{ size?: number, className?: string }} props
 */
export function IconBookOutline16({ size = 16, className, ...props } = {}) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 16 16',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.3,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      className,
      ...props,
    },
    React.createElement('path', {
      d: 'M2.75 3.5A1.25 1.25 0 0 1 4 2.25h9.25v11.5H4a1.25 1.25 0 0 0-1.25 1.25V3.5Z',
    }),
    React.createElement('path', { d: 'M2.75 15A1.25 1.25 0 0 1 4 13.75h9.25' }),
    React.createElement('path', { d: 'M5.5 5.5h5' })
  )
}

/**
 * 16px 外链大纲图标 (External Link Outline)
 * @param {{ size?: number, className?: string }} props
 */
export function IconExternalLinkOutline16({ size = 16, className, ...props } = {}) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 16 16',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.3,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      className,
      ...props,
    },
    React.createElement('path', { d: 'M6.5 3.5h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3' }),
    React.createElement('path', { d: 'M9.5 2.5h4v4' }),
    React.createElement('path', { d: 'm13.5 2.5-6.25 6.25' })
  )
}

/**
 * 16px 警示三角大纲图标 (Warning Triangle Outline)
 * @param {{ size?: number, className?: string }} props
 */
export function IconWarningOutline16({ size = 16, className, ...props } = {}) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 16 16',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.3,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      className,
      ...props,
    },
    React.createElement('path', {
      d: 'M7.13 2.6 1.9 11.6a1.25 1.25 0 0 0 1.08 1.9h10.04a1.25 1.25 0 0 0 1.08-1.9L8.87 2.6a1.25 1.25 0 0 0-1.74 0Z',
    }),
    React.createElement('path', { d: 'M8 6v3' }),
    React.createElement('path', { d: 'M8 11.25h.01' })
  )
}

/**
 * 16px 下/上箭头大纲图标 (Chevron Outline)
 * @param {{ size?: number, className?: string, direction?: 'down' | 'up' }} props
 */
export function IconChevronOutline16({ size = 16, className, direction = 'down', ...props } = {}) {
  const d = direction === 'up' ? 'm3.5 10 4.5-4.5L12.5 10' : 'm3.5 6 4.5 4.5L12.5 6'
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 16 16',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.3,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      className,
      ...props,
    },
    React.createElement('path', { d })
  )
}

/**
 * 16px 用户大纲图标（头像加载失败/缺失时的矢量占位）
 * @param {{ size?: number, className?: string }} props
 */
export function IconUserOutline16({ size = 16, className, ...props } = {}) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 16 16',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.3,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      className,
      ...props,
    },
    React.createElement('circle', { cx: 8, cy: 5.25, r: 2.75 }),
    React.createElement('path', { d: 'M2.75 13.5a5.25 5.25 0 0 1 10.5 0' })
  )
}
