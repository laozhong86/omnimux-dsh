/**
 * Pure flatten: assets.json document → drawer AssetItem[] (folders + files).
 */
import { localFileMediaUrl } from '../../../shared/localMedia.ts';
import type { ProjectAssetsDocument, ProjectAssetsFolder, ProjectAssetsItem } from '../../../shared/projectAssets.ts';
import type { AssetItem } from '../components/assets/types.ts';

function folderToAsset(folder: ProjectAssetsFolder, itemCount: number): AssetItem {
  return {
    id: folder.id,
    name: folder.name,
    type: 'folder',
    parentId: folder.parentId,
    real_path: folder.real_path,
    updatedAt: folder.updatedAt,
    itemCount,
  };
}

function itemToAsset(item: ProjectAssetsItem): AssetItem {
  return {
    id: item.id,
    name: item.name,
    type: item.type,
    fileExt: item.name.split('.').pop()?.toUpperCase() || 'FILE',
    parentId: item.parentId,
    real_path: item.real_path,
    updatedAt: item.updatedAt,
    previewUrl: localFileMediaUrl(item.real_path),
  };
}

export function flattenProjectAssets(doc: ProjectAssetsDocument): AssetItem[] {
  const counts = new Map<string, number>();
  for (const folder of doc.folders) {
    if (folder.parentId) counts.set(folder.parentId, (counts.get(folder.parentId) ?? 0) + 1);
  }
  for (const item of doc.items) {
    if (item.parentId) counts.set(item.parentId, (counts.get(item.parentId) ?? 0) + 1);
  }
  const folders = doc.folders.map((folder) => folderToAsset(folder, counts.get(folder.id) ?? 0));
  const items = doc.items.map(itemToAsset);
  return [...folders, ...items];
}
