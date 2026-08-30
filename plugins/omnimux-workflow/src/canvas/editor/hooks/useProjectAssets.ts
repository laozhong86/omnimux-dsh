/**
 * Project-private assets.json hydrate + write-back.
 * GET on workspace change (AbortController); actions persist then adopt the
 * returned document. Never treats useState([]) as the source of truth.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  getWorkspaceAssets,
  indexWorkspaceAssets,
  mkdirWorkspaceAsset,
  saveWorkspaceAssets,
} from '../../bridge/apiClient.ts';
import {
  collectSubtreeIds,
  emptyProjectAssetsDocument,
  type ProjectAssetsDocument,
  type ProjectAssetsFolder,
  type ProjectAssetsItem,
} from '../../../shared/projectAssets.ts';
import type { AssetItem } from '../components/assets/types.ts';
import { flattenProjectAssets } from './flattenProjectAssets.ts';

export { flattenProjectAssets };

export interface UseProjectAssetsResult {
  document: ProjectAssetsDocument;
  assets: AssetItem[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  mkdir: (name: string, parentId?: string | null) => Promise<boolean>;
  indexPaths: (paths: string[], parentId?: string | null) => Promise<boolean>;
  persist: (next: { folders: ProjectAssetsFolder[]; items: ProjectAssetsItem[] }) => Promise<boolean>;
  renameFolder: (folderId: string, name: string) => Promise<boolean>;
  moveNode: (id: string, parentId: string | null) => Promise<boolean>;
  deleteNode: (id: string) => Promise<boolean>;
}

export function useProjectAssets(workspaceId: string | null | undefined): UseProjectAssetsResult {
  const [document, setDocument] = useState<ProjectAssetsDocument>(emptyProjectAssetsDocument);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const documentRef = useRef(document);
  documentRef.current = document;

  const hydrate = useCallback(async (id: string, signal: AbortSignal) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getWorkspaceAssets(id, signal);
      if (signal.aborted) return;
      if (!result.ok || !result.body.assets) {
        setError(result.body.error || result.body.message || `HTTP ${String(result.status)}`);
        setDocument(emptyProjectAssetsDocument());
        return;
      }
      setDocument(result.body.assets);
    } catch (err) {
      if (signal.aborted) return;
      setError(err instanceof Error ? err.message : String(err));
      setDocument(emptyProjectAssetsDocument());
    } finally {
      if (!signal.aborted) setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!workspaceId) {
      setDocument(emptyProjectAssetsDocument());
      setError(null);
      return;
    }
    const controller = new AbortController();
    void hydrate(workspaceId, controller.signal);
    return () => controller.abort();
  }, [workspaceId, hydrate]);

  const adopt = useCallback((next: ProjectAssetsDocument) => {
    setDocument(next);
    setError(null);
  }, []);

  const mkdir = useCallback(async (name: string, parentId?: string | null) => {
    if (!workspaceId) return false;
    const result = await mkdirWorkspaceAsset(workspaceId, {
      name,
      parentId: parentId ?? null,
      expectedRev: documentRef.current.rev,
    });
    if (!result.ok || !result.body.assets) {
      setError(result.body.error || result.body.message || 'mkdir failed');
      return false;
    }
    adopt(result.body.assets);
    return true;
  }, [adopt, workspaceId]);

  const indexPaths = useCallback(async (paths: string[], parentId?: string | null) => {
    if (!workspaceId) return false;
    const result = await indexWorkspaceAssets(workspaceId, {
      paths,
      parentId: parentId ?? null,
      expectedRev: documentRef.current.rev,
    });
    if (!result.ok || !result.body.assets) {
      setError(result.body.error || result.body.message || 'index failed');
      return false;
    }
    adopt(result.body.assets);
    return true;
  }, [adopt, workspaceId]);

  const persist = useCallback(async (next: { folders: ProjectAssetsFolder[]; items: ProjectAssetsItem[] }) => {
    if (!workspaceId) return false;
    const result = await saveWorkspaceAssets(workspaceId, {
      expectedRev: documentRef.current.rev,
      folders: next.folders,
      items: next.items,
    });
    if (!result.ok || !result.body.assets) {
      setError(result.body.error || result.body.message || 'save failed');
      return false;
    }
    adopt(result.body.assets);
    return true;
  }, [adopt, workspaceId]);

  const renameFolder = useCallback(async (folderId: string, name: string) => {
    const current = documentRef.current;
    return persist({
      folders: current.folders.map((folder) =>
        folder.id === folderId ? { ...folder, name, updatedAt: Date.now() } : folder,
      ),
      items: current.items,
    });
  }, [persist]);

  const moveNode = useCallback(async (id: string, parentId: string | null) => {
    const current = documentRef.current;
    return persist({
      folders: current.folders.map((folder) =>
        folder.id === id ? { ...folder, parentId, updatedAt: Date.now() } : folder,
      ),
      items: current.items.map((item) =>
        item.id === id ? { ...item, parentId, updatedAt: Date.now() } : item,
      ),
    });
  }, [persist]);

  const deleteNode = useCallback(async (id: string) => {
    const current = documentRef.current;
    const drop = new Set(collectSubtreeIds(current.folders, current.items, id));
    return persist({
      folders: current.folders.filter((folder) => !drop.has(folder.id)),
      items: current.items.filter((item) => !drop.has(item.id)),
    });
  }, [persist]);

  const refresh = useCallback(async () => {
    if (!workspaceId) return;
    await hydrate(workspaceId, new AbortController().signal);
  }, [hydrate, workspaceId]);

  const assets = useMemo(() => flattenProjectAssets(document, workspaceId), [document, workspaceId]);

  return {
    document,
    assets,
    loading,
    error,
    refresh,
    mkdir,
    indexPaths,
    persist,
    renameFolder,
    moveNode,
    deleteNode,
  };
}
