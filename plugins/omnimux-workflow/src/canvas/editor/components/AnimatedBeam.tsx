/**
 * Ported verbatim from Gxgen
 * `apps/web/src/components/magicui/animated-beam.tsx` (161 lines) —
 * zero-dependency SVG beam primitive (stroke-dasharray + getTotalLength()
 * + inline CSS keyframes + glow filter). esbuild-compatible, no
 * framer-motion.
 *
 * Only the default colors changed: gradient defaults → --wb-beam-start /
 * --wb-beam-end (dsh blue, not Gxgen purple); track color → --wb-edge.
 *
 * Kept behaviors (plan pit #3): the top flowing path renders only when
 * pathLength > 0 (getTotalLength() is 0 on the first frame); useId colon
 * cleanup is copied as-is.
 */

import { useId, useRef, useState, useEffect, useMemo } from 'react';

export interface AnimatedBeamProps {
  /** SVG path d 值（由调用方计算提供） */
  pathD: string;
  /** 路径起点坐标（保留接口兼容，当前实现不依赖此参数） */
  startPoint?: { x: number; y: number };
  /** 路径终点坐标（保留接口兼容，当前实现不依赖此参数） */
  endPoint?: { x: number; y: number };
  /** 底层轨迹线颜色 */
  pathColor?: string;
  /** 底层轨迹线宽度 */
  pathWidth?: number;
  /** 底层轨迹线透明度 */
  pathOpacity?: number;
  /** 光束渐变起始色（电流主色） */
  gradientStartColor?: string;
  /** 光束渐变终止色（电流辉光色） */
  gradientStopColor?: string;
  /** 动画一个循环周期的时长（秒），值越小流速越快 */
  duration?: number;
  /** 动画延迟（秒） */
  delay?: number;
  /** 是否反向流动 */
  reverse?: boolean;
  /** 附加 className */
  className?: string;
}

/**
 * SVG 光束动画原语 —— 电流持续循环流动效果
 *
 * 渲染三层：
 * 1. SVG filter（glow 辉光）
 * 2. 底层 path：低透明度静态描边（轨迹背景线）
 * 3. 顶层 path：虚线段 + dashoffset 动画（流动电流）
 *
 * 必须在 <svg> 内使用（如 ReactFlow edge、独立 SVG 等）。
 */
export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  pathD,
  pathColor = 'var(--wb-edge, #b1b1b7)',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = 'var(--wb-beam-start, #4176E6)',
  gradientStopColor = 'var(--wb-beam-end, #679EFE)',
  duration = 1.5,
  delay = 0,
  reverse = false,
  className,
}) => {
  const id = useId();
  // 清理 id 中的特殊字符（如 :），确保可用于 CSS animation-name
  const safeId = id.replace(/:/g, '');
  const filterId = `${safeId}-glow`;
  const gradientId = `${safeId}-grad`;
  const animationName = `beam-flow-${safeId}`;

  // 测量 path 实际长度，用于精确匹配 dasharray 循环
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathD]);

  // dash 段长和间隔（基于路径长度动态计算，确保均匀分布）
  const { dashSize, gapSize, offsetRange } = useMemo(() => {
    if (!pathLength) return { dashSize: 8, gapSize: 16, offsetRange: 24 };
    // 每段"电流"约 8px，间隔约 16px，构成一个周期 24px
    const period = 24;
    // 取整到路径长度的整数倍，确保循环无缝
    const cycles = Math.max(1, Math.round(pathLength / period));
    const adjustedPeriod = pathLength / cycles;
    const dash = adjustedPeriod * (1 / 3); // 1/3 为发光段
    const gap = adjustedPeriod * (2 / 3); // 2/3 为间隔
    return { dashSize: dash, gapSize: gap, offsetRange: adjustedPeriod };
  }, [pathLength]);

  // 注入 keyframes（CSS animation 比 framer-motion 更适合无限线性循环，零 JS 开销）
  const styleContent = `
        @keyframes ${animationName} {
            from { stroke-dashoffset: ${reverse ? -offsetRange : 0}px; }
            to { stroke-dashoffset: ${reverse ? 0 : -offsetRange}px; }
        }
    `;

  return (
    <g className={className}>
      <defs>
        {/* CSS keyframes */}
        <style>{styleContent}</style>
        {/* 电流辉光滤镜 */}
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* 电流渐变色 */}
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} />
        </linearGradient>
      </defs>

      {/* 底层：静态轨迹背景线 */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        fill="none"
      />

      {/* 隐藏的测量路径（用于获取 path 总长度） */}
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="none"
      />

      {/* 顶层：流动电流 */}
      {pathLength > 0 && (
        <path
          d={pathD}
          stroke={`url(#${gradientId})`}
          strokeWidth={pathWidth + 1}
          strokeLinecap="round"
          strokeDasharray={`${dashSize} ${gapSize}`}
          fill="none"
          filter={`url(#${filterId})`}
          style={{
            animation: `${animationName} ${duration}s linear ${delay}s infinite`,
            willChange: 'stroke-dashoffset',
          }}
        />
      )}
    </g>
  );
};

export default AnimatedBeam;
