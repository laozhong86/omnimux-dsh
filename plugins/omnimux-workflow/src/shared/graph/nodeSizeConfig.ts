/**
 * Ported verbatim (subset) from Gxgen
 * `apps/web/src/pages/CanvasEditor/utils/nodeSizeConfig.ts`
 * (validated by the extraction spike).
 */

import type { MaterialType } from './materialNode.ts';

type NodeSizeCategory = 'square' | 'widescreen';

interface NodeSizeConfig {
  min: { width: number; height: number };
  default: { width: number; height: number };
  max: { width: number; height: number };
  aspectRatio: number;
}

export const CANVAS_ZOOM_CONFIG = {
  minZoom: 0.23,
  maxZoom: 1.29,
  defaultZoom: 1,
} as const;

const SQUARE_SIZE_CONFIG: NodeSizeConfig = {
  min: { width: 75, height: 75 },
  default: { width: 325, height: 325 },
  max: { width: 420, height: 420 },
  aspectRatio: 1,
};

const WIDESCREEN_SIZE_CONFIG: NodeSizeConfig = {
  min: { width: 133, height: 75 },
  default: { width: 578, height: 325 },
  max: { width: 746, height: 420 },
  aspectRatio: 16 / 9,
};

const NODE_SIZE_CONFIGS: Record<NodeSizeCategory, NodeSizeConfig> = {
  square: SQUARE_SIZE_CONFIG,
  widescreen: WIDESCREEN_SIZE_CONFIG,
};

export function getNodeSizeCategory(nodeType: MaterialType): NodeSizeCategory {
  switch (nodeType) {
    case 'video':
    case 'audio':
      return 'widescreen';
    case 'text':
    case 'image':
    default:
      return 'square';
  }
}

function getNodeSizeConfig(nodeType: MaterialType): NodeSizeConfig {
  return NODE_SIZE_CONFIGS[getNodeSizeCategory(nodeType)];
}

export function calculateNodeHeight(width: number, category: NodeSizeCategory): number {
  return Math.round(width / NODE_SIZE_CONFIGS[category].aspectRatio);
}

export function getMinimumNodeHeight(nodeType: MaterialType): number {
  return getNodeSizeConfig(nodeType).min.height;
}

export function getDefaultNodeWidth(nodeType: MaterialType): number {
  return getNodeSizeConfig(nodeType).default.width;
}
