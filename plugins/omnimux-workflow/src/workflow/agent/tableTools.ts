import path from 'node:path';
import type { WorkflowAgentDeps, AgentToolSpec } from './agentTools.ts';
import { TableStorageService } from '../storage/TableStorageService.ts';
import { type HTableDocument } from '../../shared/types/htable.ts';

function jsonOut(args: unknown, value: unknown): Array<{ type: string; text: string }> {
  return [{ type: 'text', text: JSON.stringify(value, null, 2) }];
}

function readString(args: Record<string, unknown>, key: string): string | undefined {
  const v = args[key];
  return typeof v === 'string' && v.trim() !== '' ? v.trim() : undefined;
}

function errorBody(code: string, message: string): Record<string, unknown> {
  return { error: code, message };
}

export function createCanvasWriteTableNodeTool(deps: WorkflowAgentDeps): AgentToolSpec {
  return {
    name: 'canvas_write_table_node',
    description: '在当前画布工作区中创建或更新一个结构化数据表节点 (.htable)，支持批量数据导入与分镜剧本记录。',
    parameters: {
      type: 'object',
      properties: {
        workspace_id: { type: 'string', description: '工作区 ID (缺省则使用默认工作区)' },
        node_id: { type: 'string', description: '已有节点 ID，留空则在画布新建节点' },
        title: { type: 'string', description: '表格标题 (如 "短剧分镜表")' },
        columns: {
          type: 'array',
          description: '字段列定义列表',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
              type: { type: 'string', enum: ['text', 'number', 'attachment'] },
              visible: { type: 'boolean' },
              width: { type: 'number' },
            },
            required: ['title', 'type'],
          },
        },
        rows: {
          type: 'array',
          description: '行数据列表 (每行的 cells 与 columns 下标一一对应)',
          items: {
            type: 'object',
            properties: {
              cells: { type: 'array' },
            },
            required: ['cells'],
          },
        },
        row_height: { type: 'string', enum: ['low', 'medium', 'tall', 'extraTall'] },
        position: {
          type: 'object',
          properties: {
            x: { type: 'number' },
            y: { type: 'number' },
          },
        },
      },
      required: ['title', 'columns', 'rows'],
    },
    output: {
      schema: { type: 'object' },
      render: jsonOut,
    },
    async execute(args) {
      const title = readString(args, 'title') || '未命名表格';
      const rawColumns = Array.isArray(args.columns) ? args.columns : [];
      const rawRows = Array.isArray(args.rows) ? args.rows : [];
      const rowHeight = (readString(args, 'row_height') as any) || 'low';
      const nodeId = readString(args, 'node_id') || `tbl_${Math.random().toString(36).substring(2, 9)}`;

      const formattedColumns = rawColumns.map((c: any, idx: number) => ({
        id: c.id || `col_${idx}_${Math.random().toString(36).substring(2, 6)}`,
        title: c.title || `列 ${idx + 1}`,
        type: c.type || 'text',
        visible: c.visible !== false,
        width: c.width || 240,
      }));

      const formattedRows = rawRows.map((r: any) => ({
        cells: Array.isArray(r.cells) ? r.cells : [],
      }));

      const doc: HTableDocument = {
        version: 1,
        title,
        columns: formattedColumns,
        rows: formattedRows,
        rowHeight,
      };

      try {
        // 保存 .htable 文件
        const tableRelPath = `.hilo/tables/${nodeId}.htable`;
        const fullPath = path.join(process.cwd(), tableRelPath);
        await TableStorageService.saveTable(fullPath, doc);

        return {
          ok: true,
          nodeId,
          tablePath: tableRelPath,
          title,
          columnCount: formattedColumns.length,
          rowCount: formattedRows.length,
        };
      } catch (err: any) {
        return errorBody('table-save-failed', err?.message || 'Failed to save table document');
      }
    },
  };
}

export function createCanvasGetTableNodeTool(deps: WorkflowAgentDeps): AgentToolSpec {
  return {
    name: 'canvas_get_table_node',
    description: '读取画布结构化数据表节点的完整数据内容 (.htable)，返回字段列表与行记录数据。',
    parameters: {
      type: 'object',
      properties: {
        table_path: { type: 'string', description: '表格相对路径 (如 .hilo/tables/tbl_xxx.htable)' },
      },
      required: ['table_path'],
    },
    output: {
      schema: { type: 'object' },
      render: jsonOut,
    },
    async execute(args) {
      const tablePath = readString(args, 'table_path');
      if (!tablePath) {
        return errorBody('invalid-args', 'table_path is required');
      }

      try {
        const fullPath = path.join(process.cwd(), tablePath);
        const doc = await TableStorageService.loadTable(fullPath);
        return {
          ok: true,
          tablePath,
          document: doc,
        };
      } catch (err: any) {
        return errorBody('table-read-failed', err?.message || 'Failed to load table document');
      }
    },
  };
}
