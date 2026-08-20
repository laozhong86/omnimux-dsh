/**
 * Material node definition — the first registry entry (extension point ①).
 *
 * Wraps the Gxgen-ported MaterialNode component; ports follow the
 * MATERIAL_TOOL_INPUT_TYPES matrix (all tools of the material type, so
 * connect-then-switch-tool stays possible).
 */

import MaterialNode from '../../editor/components/MaterialNode';
import type { NodeDefinition } from '../registry';
import { createDefaultMaterialNodeData } from '../../types/materialNode';
import { getDefaultNodeWidth } from '../../editor/utils/nodeSizeConfig';

export const materialNodeDefinition: NodeDefinition = {
  type: 'material',
  component: MaterialNode,
  ports: [
    // Input contract: union of all tool input types of any material type
    // (the runtime check narrows by node data; see connectionConfig).
    { side: 'in', acceptedTypes: ['text', 'image', 'video', 'audio'] },
    { side: 'out', acceptedTypes: ['text', 'image', 'video', 'audio'] },
  ],
  defaultData: () =>
    createDefaultMaterialNodeData('text', {
      status: 'empty',
      nodeWidth: getDefaultNodeWidth('text'),
    }) as unknown as Record<string, unknown>,
  configSpec: {
    promptEnabled: true,
    modelCategory: 'text',
  },
  executorKey: 'material',
  palette: {
    group: '素材',
    label: '素材节点',
    icon: '🧱',
  },
};
