import { z } from 'zod';

/** 字段类型定义 */
export const HTableFieldTypeSchema = z.enum(['text', 'number', 'attachment']);
export type HTableFieldType = z.infer<typeof HTableFieldTypeSchema>;

/** 字段列定义 */
export const HTableColumnSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  type: HTableFieldTypeSchema,
  visible: z.boolean().default(true),
  width: z.number().min(60).max(2000).default(240),
});
export type HTableColumn = z.infer<typeof HTableColumnSchema>;

/** 附件多模态单元格结构 */
export const HTableAttachmentSchema = z.object({
  assetId: z.string(),
  name: z.string(),
  kind: z.enum(['image', 'video', 'audio', 'text']),
  thumbnailUrl: z.string().optional(),
  mimeType: z.string().optional(),
  size: z.number().optional(),
});
export type HTableAttachment = z.infer<typeof HTableAttachmentSchema>;

/** 单元格值类型 */
export const HTableCellValueSchema = z.union([
  z.string(),
  z.number(),
  z.array(HTableAttachmentSchema),
  z.null(),
]);
export type HTableCellValue = z.infer<typeof HTableCellValueSchema>;

/** 行记录定义 */
export const HTableRowSchema = z.object({
  id: z.string().optional(),
  cells: z.array(HTableCellValueSchema),
});
export type HTableRow = z.infer<typeof HTableRowSchema>;

/** 筛选匹配操作符 */
export const FilterOperatorSchema = z.enum([
  'equals',
  'notEquals',
  'contains',
  'notContains',
  'gt',
  'gte',
  'lt',
  'lte',
  'empty',
  'notEmpty',
]);
export type FilterOperator = z.infer<typeof FilterOperatorSchema>;

/** 单条筛选条件 */
export const HTableFilterConditionSchema = z.object({
  columnIndex: z.number().int().min(0),
  op: FilterOperatorSchema,
  value: z.union([z.string(), z.number()]).optional(),
});
export type HTableFilterCondition = z.infer<typeof HTableFilterConditionSchema>;

/** 筛选配置 */
export const HTableFilterSchema = z.object({
  match: z.enum(['all', 'any']).default('all'),
  conditions: z.array(HTableFilterConditionSchema),
});
export type HTableFilter = z.infer<typeof HTableFilterSchema>;

/** 行高预设枚举 */
export const HTableRowHeightSchema = z.enum(['low', 'medium', 'tall', 'extraTall']);
export type HTableRowHeight = z.infer<typeof HTableRowHeightSchema>;

/** 表格主文档 Schema (.htable) */
export const HTableDocumentSchema = z.object({
  version: z.literal(1),
  title: z.string().default('未命名表格'),
  columns: z.array(HTableColumnSchema),
  rows: z.array(HTableRowSchema),
  filter: HTableFilterSchema.optional(),
  rowHeight: HTableRowHeightSchema.default('low'),
});
export type HTableDocument = z.infer<typeof HTableDocumentSchema>;
