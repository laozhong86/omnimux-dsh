/**
 * Text-node model dropdown order (Issue #302).
 *
 * Client ConfigPanel sorts catalog rows with this list so the UI does not
 * depend on a restarted Host process serving a fresh `/api/capabilities`.
 * Host `TEXT_MODEL_IDS` aliases the same constant.
 *
 * Known ids keep spec order; unknown ids keep original relative order
 * and are appended after known ids.
 */

export const TEXT_MODEL_ORDER: ReadonlyArray<string> = [
  'gemini-3.7-flash',
  'claude-opus-4-6',
  'gpt-5.5',
  'gemini-3.1-pro-preview',
  'deepseek-v4-flash-vision-exp',
];

export type TextModelRow = { id: string };

const TEXT_MODEL_RANK: ReadonlyMap<string, number> = new Map(
  TEXT_MODEL_ORDER.map((id, index) => [id, index]),
);

/**
 * Stable-sort catalog rows by {@link TEXT_MODEL_ORDER}.
 * Does not mutate `rows`. Empty / non-array input returns `[]`.
 */
export function orderTextModels<T extends TextModelRow>(rows: readonly T[] | null | undefined): T[] {
  if (!Array.isArray(rows) || rows.length === 0) {
    return [];
  }

  const known: Array<{ row: T; rank: number; orig: number }> = [];
  const unknown: T[] = [];

  for (let orig = 0; orig < rows.length; orig += 1) {
    const row = rows[orig];
    const rank = TEXT_MODEL_RANK.get(row.id);
    if (rank === undefined) {
      unknown.push(row);
    } else {
      known.push({ row, rank, orig });
    }
  }

  known.sort((a, b) => a.rank - b.rank || a.orig - b.orig);
  return known.map((item) => item.row).concat(unknown);
}
