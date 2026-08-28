/**
 * StatusBadge — 从 M1-M5 MaterialNode.tsx:275-296 抽出的执行状态徽标。
 *
 * 语义原样保留：executionStatus（SSE 写入）优先，回退本地 status；
 * CSS 类复用 theme 的 wf-material-node__badge* 块。
 */

import { memo, useMemo } from 'react';
import type { MaterialStatus } from '../../../types/materialNode';
import type { NodeExecutionApiStatus } from '../../../../shared/api';
import { useT } from '../../../i18n';

export interface StatusBadgeProps {
  executionStatus?: NodeExecutionApiStatus;
  status?: MaterialStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ executionStatus, status }) => {
  const t = useT();
  const badge = useMemo(() => {
    switch (executionStatus) {
      case 'running':
        return <span className="wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin" />;
      case 'completed':
        return <span className="wf-material-node__badge wf-material-node__badge--done" />;
      case 'error':
        return <span className="wf-material-node__badge wf-material-node__badge--failed" />;
      case 'skipped':
        return <span className="wf-material-node__badge wf-material-node__badge--skipped" title={t('node.skipped')} />;
      case 'pending':
        return <span className="wf-material-node__badge wf-material-node__badge--pending" />;
      default:
        break;
    }
    switch (status) {
      case 'generating':
        return <span className="wf-material-node__badge wf-material-node__badge--running wf-material-node__badge--spin" />;
      case 'completed':
        return <span className="wf-material-node__badge wf-material-node__badge--done" />;
      case 'failed':
        return <span className="wf-material-node__badge wf-material-node__badge--failed" />;
      case 'offline':
        return <span className="wf-material-node__badge wf-material-node__badge--offline" title={t('node.offline')} />;
      default:
        return null;
    }
  }, [executionStatus, status, t]);

  return badge;
};

export default memo(StatusBadge);
