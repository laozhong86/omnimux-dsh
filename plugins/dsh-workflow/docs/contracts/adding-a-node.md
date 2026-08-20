# 如何添加一个新节点类型（端到端指南）

> dsh-workflow 的扩展性承诺：新增节点类型不改画布核心。三步注册，M1 已立好全部接口。

## 第 1 步：client 侧 — 注册节点定义（节点类型注册表）

```ts
// src/canvas/nodes/definitions/myNode.ts
import MyNode from '../../editor/components/MyNode';
import type { NodeDefinition } from '../registry';

export const myNodeDefinition: NodeDefinition = {
  type: 'my-node',                       // React Flow node type key
  component: MyNode,                     // React 19 island 内的节点组件
  ports: [                               // 连线端口合同（校验用）
    { side: 'in', acceptedTypes: ['text', 'image'] },
    { side: 'out', acceptedTypes: ['image'] },
  ],
  defaultData: () => ({ label: '我的节点', status: 'empty' }),
  configSpec: { promptEnabled: true, modelCategory: 'image' },
  executorKey: 'my-node',                // → host 执行器注册表 key
  palette: { group: '生成', label: '我的节点', icon: '✨' },  // 工具栏条目
};
```

然后在 `src/canvas/editor/CanvasEditor.tsx` 顶部 `registerNodeDefinition(myNodeDefinition)`（现有 material 定义即此模式）。nodeTypes / palette 均从注册表生成。

## 第 2 步：host 侧 — 注册执行器（执行器注册表）

```ts
// src/workflow/executors/registry.ts 追加
registerExecutor({
  key: 'my-node',                        // 与 NodeDefinition.executorKey 对应
  async execute(node, ctx) {
    // ctx.upstreamOutputs：上游节点产物
    // ctx.mediaDir：本次执行产物落盘目录（插件自有 media 区）
    // M3 起：经注入的 GenerationGateway 提交，返回 { mediaAssets | text }
  },
});
```

## 第 3 步（可选）：能力目录接线

若节点需要模型列表：`src/workflow/seam/gateway.ts` 的 `capabilities()` 返回对应类别目录；M4 后该数据来自 OmniMux 能力发现（`ctx.get` seam 侧快照），前端零改动。

## 约束

- 节点组件跑在 React 19 island 内，不得 import 宿主（client 区）模块
- 执行器跑在 host，不得 import canvas/client 模块；I/O 只经 GenerationGateway 与插件自有磁盘区
- 端口合同决定连线校验（connectionConfig 类型矩阵），端口类型为 text/image/video/audio 四类素材
