/**
 * Global subject library hydrate via ACL (GET /omnimux/assets/library).
 * 404 / network → empty list, never throw.
 */
import { useCallback, useEffect, useState } from 'react';
import { createAssetsLibraryClient } from '../../bridge/assetsLibraryClient.ts';
import type { SubjectPack } from '../components/assets/types.ts';

const client = createAssetsLibraryClient();

export interface UseSubjectLibraryResult {
  subjects: SubjectPack[];
  loading: boolean;
  error: string | null;
  refresh: (filter?: { type?: string; q?: string }) => Promise<void>;
  createSubject: (name: string) => Promise<SubjectPack | null>;
}

export function useSubjectLibrary(enabled: boolean): UseSubjectLibraryResult {
  const [subjects, setSubjects] = useState<SubjectPack[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async (filter: { type?: string; q?: string } = {}) => {
    setLoading(true);
    const result = await client.listLibrary(filter);
    setLoading(false);
    if (!result.ok) {
      setError(result.error || 'library-unavailable');
      setSubjects([]);
      return;
    }
    setError(null);
    setSubjects(result.subjects);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    void refresh();
  }, [enabled, refresh]);

  const createSubject = useCallback(async (name: string) => {
    const result = await client.createLibraryAsset(name, 'custom');
    if (!result.ok || !result.subject) {
      setError(result.error || 'create-failed');
      return null;
    }
    setSubjects((prev) => [result.subject as SubjectPack, ...prev]);
    setError(null);
    return result.subject;
  }, []);

  return { subjects, loading, error, refresh, createSubject };
}
