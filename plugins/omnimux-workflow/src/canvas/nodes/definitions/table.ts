import { TableNode } from '../../components/table-node/TableNode';
import type { NodeDefinition } from '../registry';

export const tableNodeDefinition: NodeDefinition = {
  type: 'table',
  component: TableNode,
  ports: [
    // Output contract: can connect to any downstream material node for batch processing
    { side: 'out', acceptedTypes: ['text', 'image', 'video', 'audio'] },
  ],
  defaultData: () => ({
    title: '未命名表格',
    path: '',
    columnCount: 1,
    rowCount: 0,
  }),
  palette: {
    group: 'palette.group.data',
    label: '结构化数据表',
    icon: 'table',
  },
};
