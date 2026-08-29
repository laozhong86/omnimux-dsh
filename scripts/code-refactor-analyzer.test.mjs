/**
 * @file scripts/code-refactor-analyzer.test.mjs
 * CRSA 代码重构与简化分析工具单元测试集
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  analyzeSource,
  analyzeProject,
  formatReport,
  DEFAULT_THRESHOLDS,
} from './code-refactor-analyzer.mjs';

describe('CRSA (Code Refactor & Simplification Analyzer) 核心测试', () => {

  describe('1. 代码行数过多情况分析 (Code Bloat)', () => {
    it('应正确计算 SLOC、注释行与空行', () => {
      const code = `
        // 单行注释
        /* 多行
           注释 */
        function hello() {
          const a = 1;
          
          return a;
        }
      `;
      const result = analyzeSource(code, 'test.js');
      assert.equal(result.metrics.blankLines >= 2, true);
      assert.equal(result.metrics.commentLines >= 3, true);
      assert.equal(result.metrics.sloc >= 4, true);
    });

    it('应检测出超长函数并给出 Extract Function 重构建议', () => {
      // 构造超过 10 行的函数 (设置阈值为 5)
      const lines = ['function megaFunction() {'];
      for (let i = 0; i < 15; i++) {
        lines.push(`  const step${i} = ${i} * 2;`);
      }
      lines.push('  return step0;');
      lines.push('}');
      const code = lines.join('\n');

      const result = analyzeSource(code, 'megaFunc.js', { maxFuncLines: 5 });
      assert.equal(result.functions.length, 1);
      assert.equal(result.functions[0].sloc > 5, true);

      const longFuncSmell = result.smells.find(s => s.type === 'LONG_FUNCTION');
      assert.ok(longFuncSmell, '应捕获 LONG_FUNCTION 异味');
      assert.equal(longFuncSmell.category, 'CODE_BLOAT');
      assert.match(longFuncSmell.recommendation, /Extract Function/);
    });

    it('应检测出单文件体积过大并给出 Split Module 建议', () => {
      const lines = [];
      for (let i = 0; i < 50; i++) {
        lines.push(`const var_${i} = ${i};`);
      }
      const code = lines.join('\n');

      const result = analyzeSource(code, 'bigFile.js', { maxFileLines: 20 });
      const bigFileSmell = result.smells.find(s => s.type === 'LARGE_FILE');
      assert.ok(bigFileSmell, '应捕获 LARGE_FILE 异味');
      assert.match(bigFileSmell.recommendation, /Split Module/);
    });
  });

  describe('2. 业务逻辑混乱情况分析 (Chaotic Logic)', () => {
    it('应准确计算圈复杂度 (Cyclomatic Complexity) 并告警', () => {
      const code = `
        function complexLogic(a, b, c, d) {
          if (a > 1) {
            if (b && c) {
              for (let i = 0; i < 5; i++) {
                while (d) {
                  return 1;
                }
              }
            }
          } else if (b || c) {
            return 2;
          }
          return 0;
        }
      `;
      const result = analyzeSource(code, 'complex.js', { maxCyclomatic: 4 });
      assert.equal(result.functions.length, 1);
      assert.ok(result.functions[0].cyclomatic > 4, '圈复杂度应大于 4');

      const ccSmell = result.smells.find(s => s.type === 'HIGH_CYCLOMATIC_COMPLEXITY');
      assert.ok(ccSmell, '应捕获 HIGH_CYCLOMATIC_COMPLEXITY 异味');
      assert.match(ccSmell.recommendation, /Lookup Table|Strategy Pattern/);
    });

    it('应检测深层嵌套 (Deep Nesting) 并给出 Guard Clauses 重构建议', () => {
      const code = `
        function deeplyNested(x) {
          if (x > 0) {
            if (x > 10) {
              if (x > 20) {
                if (x > 30) {
                  return 'deep';
                }
              }
            }
          }
          return 'shallow';
        }
      `;
      const result = analyzeSource(code, 'deep.js', { maxDepth: 3 });
      const depthSmell = result.smells.find(s => s.type === 'DEEP_NESTING');
      assert.ok(depthSmell, '应捕获 DEEP_NESTING 异味');
      assert.match(depthSmell.recommendation, /Guard Clauses/);
    });

    it('应检测高密度布尔条件并给出 Decompose Conditional 建议', () => {
      const code = `
        function validate(user) {
          if (user.active && user.age > 18 && user.verified && user.role === 'admin') {
            return true;
          }
          return false;
        }
      `;
      const result = analyzeSource(code, 'boolean.js', { maxBooleanDensity: 2 });
      const boolSmell = result.smells.find(s => s.type === 'HIGH_BOOLEAN_DENSITY');
      assert.ok(boolSmell, '应捕获 HIGH_BOOLEAN_DENSITY 异味');
      assert.match(boolSmell.recommendation, /Decompose Conditional/);
    });

    it('应检测多层嵌套三元表达式 (Nested Ternary)', () => {
      const code = `
        function getStatus(code) {
          return code === 200 ? 'OK' : code === 404 ? 'Not Found' : 'Error';
        }
      `;
      const result = analyzeSource(code, 'ternary.js');
      const ternarySmell = result.smells.find(s => s.type === 'NESTED_TERNARY');
      assert.ok(ternarySmell, '应捕获 NESTED_TERNARY 异味');
    });

    it('应检测超长参数列表 (Long Parameter List)', () => {
      const code = `
        function createAccount(username, email, password, phone, role, department) {
          return { username, email };
        }
      `;
      const result = analyzeSource(code, 'params.js', { maxParams: 3 });
      const paramSmell = result.smells.find(s => s.type === 'LONG_PARAMETER_LIST');
      assert.ok(paramSmell, '应捕获 LONG_PARAMETER_LIST 异味');
      assert.match(paramSmell.recommendation, /Parameter Object/);
    });

    it('应支持 async 箭头函数与 TypeScript/JSX 语法解析', () => {
      const tsxCode = `
        export const UserProfile = async (props: { id: string }) => {
          const { id } = props;
          if (!id) {
            return null;
          }
          return <div>User: {id}</div>;
        };
      `;
      const result = analyzeSource(tsxCode, 'UserProfile.tsx');
      assert.equal(result.functions.length, 1);
      assert.equal(result.functions[0].name, 'UserProfile');
      assert.equal(result.healthLevel, 'A');
    });
  });

  describe('3. 健康度评分与评级 (Health Score & Grade)', () => {
    it('整洁代码应获得等级 A 与高分', () => {
      const cleanCode = `
        export function add(a, b) {
          return a + b;
        }
        export function multiply(a, b) {
          return a * b;
        }
      `;
      const result = analyzeSource(cleanCode, 'clean.js');
      assert.equal(result.healthLevel, 'A');
      assert.equal(result.healthScore >= 95, true);
      assert.equal(result.smells.length, 0);
    });

    it('重度异味与混乱代码应降级至 D 或 F', () => {
      const badLines = ['function godFunction(a, b, c, d, e, f) {'];
      for (let i = 0; i < 60; i++) {
        badLines.push(`  if (a > ${i} && b > ${i} && c > ${i}) {`);
        badLines.push(`    if (d > ${i}) {`);
        badLines.push(`      if (e > ${i}) {`);
        badLines.push(`        return a ? (b ? (c ? 1 : 2) : 3) : 4;`);
        badLines.push('      }');
        badLines.push('    }');
        badLines.push('  }');
      }
      badLines.push('}');
      const badCode = badLines.join('\n');

      const result = analyzeSource(badCode, 'disaster.js');
      assert.equal(['D', 'F'].includes(result.healthLevel), true);
      assert.equal(result.healthScore < 60, true);
      assert.equal(result.smells.length >= 3, true);
    });
  });

  describe('4. 多格式报表导出验证', () => {
    it('应支持 JSON 与 Markdown 格式导出', () => {
      const code = `function foo() { return 1; }`;
      const single = analyzeSource(code, 'foo.js');
      const projectReport = {
        summary: {
          totalFiles: 1,
          totalSLOC: 1,
          totalFunctions: 1,
          totalSmells: 0,
          avgHealthScore: 100,
          projectLevel: 'A',
          analyzedAt: new Date().toISOString(),
        },
        files: [single],
      };

      const jsonStr = formatReport(projectReport, 'json');
      const parsed = JSON.parse(jsonStr);
      assert.equal(parsed.summary.avgHealthScore, 100);

      const mdStr = formatReport(projectReport, 'markdown');
      assert.match(mdStr, /# 代码重构与简化分析报表/);
      assert.match(mdStr, /100 \/ 100/);
    });
  });

});
