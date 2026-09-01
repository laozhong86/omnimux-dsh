import path from 'node:path';
import type { WorkflowAgentDeps, AgentToolSpec } from './agentTools.ts';
import { TableStorageService } from '../storage/TableStorageService.ts';
import {
  buildTableDocument,
  tableDocumentToLlmContent,
  type HTableDocument,
  shortId,
} from '../../shared/types/htable.ts';
import {
  errorBody,
  jsonOut,
  readPosition,
  defaultNodePosition,
  withWorkspace,
} from './agentToolShared.ts';
import { mutateWorkspaceGraph } from '../graph/GraphMutator.ts';

function readString(args: Record<string, unknown>, key: string): string | undefined {
  const v = args[key];
  return typeof v === 'string' && v.trim() !== '' ? v.trim() : undefined;
}

export function createCanvasWriteTableNodeTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store } = deps;

  return {
    name: 'canvas_write_table_node',
    description:
      '在当前画布工作区中创建或全量覆写结构化数据表节点 (.htable)。\n' +
      '- CREATE 模式 (不传 node_id)：在画布上新建表格节点并落盘，返回创建结果与物理路径；\n' +
      '- REPLACE 模式 (提供 node_id)：全量覆写已有表格节点的 .htable 内容并触发表格热更新。',
    parameters: {
      type: 'object',
      properties: {
        workspace_id: { type: 'string', description: '工作区 ID (缺省则使用默认工作区)' },
        node_id: { type: 'string', description: '已有节点 ID。提供时执行 REPLACE 全量更新，缺省时执行 CREATE' },
        title: { type: 'string', description: '表格标题 (如 "短剧分镜表")' },
        columns: {
          type: 'array',
          description: '字段列定义列表',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', description: '列名' },
              type: { type: 'string', enum: ['text', 'number', 'attachment'], description: '列类型' },
              visible: { type: 'boolean', description: '是否可见' },
              width: { type: 'number', description: '列宽 (px)' },
            },
            required: ['title'],
          },
        },
        rows: {
          type: 'array',
          description: '行数据列表 (每行的 cells 与 columns 下标一一严格对齐)',
          items: {
            type: 'object',
            properties: {
              cells: {
                type: 'array',
                description: '单元格数组。普通列为字符串/数字/null，attachment 列为 [{assetId, name, kind}]',
              },
            },
            required: ['cells'],
          },
        },
        filter: {
          type: 'object',
          description: '可选表格筛选条件',
          properties: {
            match: { type: 'string', enum: ['all', 'any'] },
            conditions: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  columnIndex: { type: 'number' },
                  op: { type: 'string' },
                  value: { type: ['string', 'number'] },
                },
                required: ['columnIndex', 'op'],
              },
            },
          },
        },
        row_height: { type: 'string', enum: ['low', 'medium', 'tall', 'extraTall'], description: '行高预设' },
        position: {
          type: 'object',
          description: '[CREATE 专有] 画布坐标位置',
          properties: {
            x: { type: 'number' },
            y: { type: 'number' },
          },
        },
      },
      required: ['columns', 'rows'],
    },
    output: {
      schema: { type: 'object' },
      render: jsonOut.render,
    },
    async execute(args) {
      const isReplace = Boolean(readString(args, 'node_id'));
      const nodeId = readString(args, 'node_id') || `tbl_${shortId()}`;
      const title = readString(args, 'title') || '未命名表格';
      const rawColumns = Array.isArray(args.columns) ? (args.columns as any[]) : [];
      const rawRows = Array.isArray(args.rows) ? (args.rows as any[]) : [];
      const rowHeight = (readString(args, 'row_height') as any) || 'low';
      const filter = typeof args.filter === 'object' && args.filter !== null ? (args.filter as any) : undefined;

      if (isReplace && rawColumns.length === 0) {
        return errorBody('invalid-args', 'Replacing a table requires at least one column in columns');
      }

      // 确定目标工作区
      let targetWorkspaceId = readString(args, 'workspace_id');
      if (!targetWorkspaceId) {
        const list = store.list();
        if (list.length > 0 && list[0]) {
          targetWorkspaceId = list[0].id;
        } else {
          const created = store.create('默认工作流');
          targetWorkspaceId = created.id;
        }
      }

      // 1. 利用 buildTableDocument 构建标准物理字典文档
      const doc = buildTableDocument({
        title,
        columns: rawColumns,
        rows: rawRows,
        filter,
        rowHeight,
      });

      return await withWorkspace(store, targetWorkspaceId, async (snapshot) => {
        try {
          const wsDir = path.dirname(store.canvasFileOf(targetWorkspaceId!));
          const fullPath = TableStorageService.resolveTablePath(wsDir, nodeId);
          await TableStorageService.saveTable(fullPath, doc);

          const tableRelPath = `.omnimux/tables/${nodeId}.htable`;
          const firstCol = doc.columns[0];
          const previewRows: string[] = doc.rows.slice(0, 3).map((r) => {
            const cellVal = firstCol ? r.cells[firstCol.id] : undefined;
            if (typeof cellVal === 'string' && cellVal) return cellVal;
            if (typeof cellVal === 'number') return String(cellVal);
            if (Array.isArray(cellVal) && cellVal.length > 0) return `📎 附件 (${cellVal.length})`;
            return '（空记录）';
          });

          if (!isReplace) {
            const node = {
              id: nodeId,
              type: 'table',
              position: readPosition(args) ?? defaultNodePosition(snapshot),
              data: {
                label: doc.title,
                title: doc.title,
                tableId: nodeId,
                tablePath: tableRelPath,
                rowCount: doc.rows.length,
                columnCount: doc.columns.length,
                contentRev: doc.contentRev ?? 0,
                previewRows,
                status: doc.rows.length > 0 ? 'ready' : 'empty',
              },
            };
            const mutResult = mutateWorkspaceGraph(store, targetWorkspaceId!, { addNodes: [node] });
            if (!mutResult.ok) {
              return errorBody(mutResult.error, mutResult.message);
            }
          } else {
            const mutResult = mutateWorkspaceGraph(store, targetWorkspaceId!, {
              nodePatches: [{
                nodeId,
                data: {
                  label: doc.title,
                  title: doc.title,
                  rowCount: doc.rows.length,
                  columnCount: doc.columns.length,
                  contentRev: doc.contentRev ?? 0,
                  previewRows,
                  status: doc.rows.length > 0 ? 'ready' : 'empty',
                },
              }],
            });
            if (!mutResult.ok) {
              return errorBody(mutResult.error, mutResult.message);
            }
          }

          return {
            ok: true,
            nodeId,
            tablePath: tableRelPath,
            title: doc.title,
            columnCount: doc.columns.length,
            rowCount: doc.rows.length,
            created: !isReplace,
          };
        } catch (err: any) {
          return errorBody('table-save-failed', err?.message || 'Failed to save table document');
        }
      });
    },
  };
}

export function createCanvasGetTableNodeTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store } = deps;

  return {
    name: 'canvas_get_table_node',
    description: '读取画布结构化数据表节点的完整数据内容 (.htable)，返回 LLM 友好的脱敏字段列表与二维行记录数据。',
    parameters: {
      type: 'object',
      properties: {
        workspace_id: { type: 'string', description: '工作区 ID (缺省则使用默认工作区)' },
        table_path: { type: 'string', description: '表格相对路径 (如 .omnimux/tables/tbl_xxx.htable)' },
        node_id: { type: 'string', description: '表格节点 ID (与 table_path 二选一)' },
      },
    },
    output: {
      schema: { type: 'object' },
      render: jsonOut.render,
    },
    async execute(args) {
      let targetWorkspaceId = readString(args, 'workspace_id');
      if (!targetWorkspaceId) {
        const list = store.list();
        if (list.length > 0 && list[0]) {
          targetWorkspaceId = list[0].id;
        }
      }

      const tablePath = readString(args, 'table_path');
      const nodeId = readString(args, 'node_id');

      if (!tablePath && !nodeId) {
        return errorBody('invalid-args', 'Either table_path or node_id is required');
      }

      try {
        let fullPath: string;
        if (targetWorkspaceId) {
          const wsDir = path.dirname(store.canvasFileOf(targetWorkspaceId));
          const effectiveTableId = nodeId || (tablePath ? path.basename(tablePath, '.htable') : '');
          fullPath = TableStorageService.resolveTablePath(wsDir, effectiveTableId);
        } else if (tablePath) {
          fullPath = path.isAbsolute(tablePath) ? tablePath : path.join(process.cwd(), tablePath);
        } else {
          fullPath = path.join(process.cwd(), `.omnimux/tables/${nodeId}.htable`);
        }

        const doc = await TableStorageService.loadTable(fullPath);
        // 转换为 LLM 纯净二维格式
        const llmContent = tableDocumentToLlmContent(doc);

        return {
          ok: true,
          tablePath: tablePath || `.omnimux/tables/${nodeId}.htable`,
          tableContent: llmContent,
        };
      } catch (err: any) {
        return errorBody('table-read-failed', err?.message || 'Failed to load table document');
      }
    },
  };
}
