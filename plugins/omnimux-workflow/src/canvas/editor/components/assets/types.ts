/**
 * Data models and state types for Project Assets & Canvas Outline
 */

export type AssetType =
  | 'image'
  | 'video'
  | 'audio'
  | 'doc'
  | 'character'
  | 'scene'
  | 'prop'
  | 'style'
  | 'knowledge'
  | 'custom'
  | 'artifacts'
  | 'folder';

export interface TagInfo {
  id: string;
  name: string;
  color: string; // CSS color string (e.g. #3b82f6)
}

export interface AssetItem {
  id: string;
  name: string;
  type: AssetType;
  fileExt?: string;
  size?: string;
  resolution?: string;
  duration?: string;
  updatedAt: number; // timestamp
  tags?: string[];
  previewUrl?: string;
  real_path?: string;
  parentId?: string | null;
  itemCount?: number; // For folders
}

export interface CanvasNodeItem {
  id: string;
  name: string;
  type: 'image' | 'video' | 'audio' | 'table' | 'text' | 'group' | string;
  status?: 'idle' | 'generating' | 'success' | 'error';
  prompt?: string;
  previewUrl?: string;
  real_path?: string;
  tags?: string[];
  updatedAt: number;
}

export interface SubjectPack {
  id: string;
  name: string;
  avatar: string;
  itemCount: number;
  tags: string[];
  updatedAt: number;
  previewUrls: string[];
}

export type ViewMode = 'tree' | 'grid';
export type ActiveTab = 'canvas' | 'assets';

export interface FilterState {
  types: string[]; // empty means all
  tags: string[]; // empty means all
  timeRange: 'all' | 'today' | '7d' | '30d' | 'custom';
  sortOrder: 'desc' | 'asc'; // desc = latest first, asc = oldest first
}

export interface ContextMenuState {
  visible: boolean;
  x: number;
  y: number;
  targetType: 'canvas-item' | 'asset-item' | 'asset-folder';
  targetItem?: AssetItem | CanvasNodeItem;
}

export interface HoverInspectorState {
  visible: boolean;
  x: number;
  y: number;
  item?: AssetItem | CanvasNodeItem;
}
