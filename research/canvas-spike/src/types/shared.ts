/**
 * Inlined narrow replacement for `@gxg/shared` media source types.
 *
 * Gxgen canvas core references `CanvasMediaSourceRef` from `@gxg/shared` in
 * ~20 files (always as `import type`). For the spike we inline the minimal
 * shape actually consumed by the canvas graph layer — proving the shared
 * package dependency can be cut by local narrowing.
 */

export type CanvasAssetType = 'text' | 'image' | 'video' | 'audio';

/**
 * Persistent reference to a media asset backing a canvas node.
 * - `cloud-file`: uploaded asset (Gxgen R2/Supabase; would become a local
 *   workbench file path in the dsh plugin).
 * - `task-output`: output of a generation task.
 */
export interface CanvasMediaSourceRef {
  provider: 'cloud-file' | 'task-output';
  assetType: CanvasAssetType;
  fileId?: string;
  taskId?: string;
  url?: string;
}
