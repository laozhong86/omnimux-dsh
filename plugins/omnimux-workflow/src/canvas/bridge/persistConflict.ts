/**
 * 远端 version 前进时的冲突判定（纯函数）。
 *
 * 打开画布的静默 PUT / remount flush 会把 version +1，但图内容没变。
 * 这种「自己和自己打架」不得弹「其它会话已更新」。
 *
 * - 本地签名 == 远端签名 → adopt（只跟上 version）
 * - 本地签名 == 上次已存签名 → reload（本地干净，取远端图）
 * - 否则 → conflict（真的两边不一样）
 */

export type RemoteVersionAdvanceDecision = 'adopt' | 'reload' | 'conflict';

export function decideRemoteVersionAdvance(input: {
  localSignature: string;
  lastSavedSignature: string;
  remoteSignature: string;
}): RemoteVersionAdvanceDecision {
  if (input.localSignature === input.remoteSignature) return 'adopt';
  if (input.localSignature === input.lastSavedSignature) return 'reload';
  return 'conflict';
}
