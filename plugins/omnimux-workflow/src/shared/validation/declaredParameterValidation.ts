/**
 * Parameter admission shared by the canvas and execution readiness guard.
 *
 * This mirrors the hub submit guard's declared-parameter rules: operation
 * declarations override model declarations; undeclared values are left to the
 * provider; only supplied values (or declared defaults) are checked.
 */
export interface DeclaredParameterFailure {
  field: string;
  message: string;
}

function entriesOf(definitions: unknown): Array<[string, Record<string, unknown>]> {
  if (!definitions || typeof definitions !== 'object' || Array.isArray(definitions)) return [];
  return Object.entries(definitions as Record<string, unknown>).filter(
    (entry): entry is [string, Record<string, unknown>] => Boolean(entry[1]) && typeof entry[1] === 'object' && !Array.isArray(entry[1]),
  );
}

/** Return the first contract-declared parameter that rejects a supplied value. */
export function findDeclaredParameterFailure(
  values: Record<string, unknown>,
  operationParameters: Record<string, unknown> | undefined,
  modelParameters: Record<string, unknown> | undefined,
): DeclaredParameterFailure | null {
  const definitions = {
    ...(modelParameters ?? {}),
    ...(operationParameters ?? {}),
  };
  for (const [field, definition] of entriesOf(definitions)) {
    const supplied = Object.prototype.hasOwnProperty.call(values, field)
      && values[field] !== undefined
      && values[field] !== null
      && values[field] !== '';
    const hasDefault = Object.prototype.hasOwnProperty.call(definition, 'defaultValue');
    if (!supplied && !hasDefault) continue;
    const value = supplied ? values[field] : definition.defaultValue;

    const options = Array.isArray(definition.options) ? definition.options : [];
    if (options.length > 0) {
      const matches = options.some((option) => {
        const candidate = option && typeof option === 'object' && !Array.isArray(option)
          ? (option as Record<string, unknown>).value
          : option;
        return Object.is(candidate, value)
          || (definition.caseInsensitive === true
            && typeof candidate === 'string'
            && typeof value === 'string'
            && candidate.toLowerCase() === value.toLowerCase());
      });
      if (!matches) return { field, message: `参数“${field}”不支持值 ${JSON.stringify(value)}` };
    }
    if (definition.supported === true && typeof value !== 'boolean') {
      return { field, message: `参数“${field}”必须为布尔值` };
    }
    if (definition.supported === false && supplied) {
      return { field, message: `当前模型或生成方式不支持参数“${field}”` };
    }
    if (definition.type === 'integer' && !Number.isInteger(value)) {
      return { field, message: `参数“${field}”必须为整数` };
    }
    const range = definition.range;
    if (range && typeof range === 'object' && !Array.isArray(range)) {
      const bounds = range as Record<string, unknown>;
      if (typeof value !== 'number' || !Number.isFinite(value)) {
        return { field, message: `参数“${field}”必须为数字` };
      }
      const auto = definition.allowAuto === true && value === -1;
      const min = typeof bounds.min === 'number' ? bounds.min : undefined;
      const max = typeof bounds.max === 'number' ? bounds.max : undefined;
      const step = typeof bounds.step === 'number' ? bounds.step : undefined;
      if (!auto && (
        (min !== undefined && value < min)
        || (max !== undefined && value > max)
        || (step !== undefined && min !== undefined
          && Math.abs((value - min) / step - Math.round((value - min) / step)) > Number.EPSILON)
      )) {
        return { field, message: `参数“${field}”超出合同允许范围` };
      }
    }
    if (typeof value === 'string') {
      const length = Array.from(value).length;
      if (typeof definition.minLength === 'number' && length < definition.minLength) {
        return { field, message: `参数“${field}”少于 ${definition.minLength} 个字符` };
      }
      if (typeof definition.maxLength === 'number' && length > definition.maxLength) {
        return { field, message: `参数“${field}”超过 ${definition.maxLength} 个字符` };
      }
    }
  }
  return null;
}
