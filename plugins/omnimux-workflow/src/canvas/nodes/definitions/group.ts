import type { NodeDefinition } from '../registry';
import { GroupNode } from '../../editor/components/GroupNode/GroupNode';

export const groupNodeDefinition: NodeDefinition = {
  type: 'group',
  component: GroupNode,
  ports: [],
  defaultData: () => ({
    title: '',
    color: '#3b82f6',
    padding: 32,
    minWidth: 300,
    minHeight: 200,
    nodeIds: [],
  }),
};
