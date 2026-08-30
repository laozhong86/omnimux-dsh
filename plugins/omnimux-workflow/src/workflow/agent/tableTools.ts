import path from 'node:path';
import type { WorkflowAgentDeps, AgentToolSpec } from './agentTools.ts';
import { TableStorageService } from '../storage/TableStorageService.ts';
import {
  buildTableDocument,
  tableDocumentToLlmContent,
  type HTableDocument,
  shortId,
} from '../../shared/types/htable.ts';

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
      render: jsonOut,
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

      // 1. 利用 buildTableDocument 构建标准物理字典文档
      const doc = buildTableDocument({
        title,
        columns: rawColumns,
        rows: rawRows,
        filter,
        rowHeight,
      });

      try {
        // 2. 原子落盘 .htable 文件
        const tableRelPath = `.hilo/tables/${nodeId}.htable`;
        const fullPath = path.join(process.cwd(), tableRelPath);
        await TableStorageService.saveTable(fullPath, doc);

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
    },
  };
}

export function createCanvasGetTableNodeTool(deps: WorkflowAgentDeps): AgentToolSpec {
  return {
    name: 'canvas_get_table_node',
    description: '读取画布结构化数据表节点的完整数据内容 (.htable)，返回 LLM 友好的脱敏字段列表与二维行记录数据。',
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
        // 转换为 LLM 纯净二维格式
        const llmContent = tableDocumentToLlmContent(doc);

        return {
          ok: true,
          tablePath,
          tableContent: llmContent,
        };
      } catch (err: any) {
        return errorBody('table-read-failed', err?.message || 'Failed to load table document');
      }
    },
  };
}
