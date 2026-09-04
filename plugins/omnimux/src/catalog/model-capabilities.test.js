import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SPECS_DIR = path.join(__dirname, "specs");

function parseSimpleYaml(content) {
  const lines = content.split(String.fromCharCode(10));
  const models = [];
  let currentModel = null;
  let inModes = false;
  let currentMode = null;

  for (let rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    if (line.startsWith("- id:")) {
      const id = line.replace("- id:", "").trim().replace(/['"]/g, "");
      currentModel = { id, modes: [] };
      models.push(currentModel);
      inModes = false;
      currentMode = null;
      continue;
    }

    if (currentModel && line.startsWith("modes:")) {
      inModes = true;
      continue;
    }

    if (inModes && line.startsWith("- mode:")) {
      const mode = line.replace("- mode:", "").trim().replace(/['"]/g, "");
      currentMode = { mode };
      currentModel.modes.push(currentMode);
      continue;
    }

    if (inModes && currentMode && line.startsWith("label:")) {
      currentMode.label = line.replace("label:", "").trim().replace(/['"]/g, "");
      continue;
    }
  }
  return models;
}

test("MCC 契约门禁: 检查视频模型能力声明文件完备性", () => {
  const videoYamlPath = path.join(SPECS_DIR, "video-models.yaml");
  assert.ok(fs.existsSync(videoYamlPath), "video-models.yaml 必须存在");

  const content = fs.readFileSync(videoYamlPath, "utf8");
  const declaredModels = parseSimpleYaml(content);
  assert.ok(declaredModels.length >= 6, "必须至少声明主流视频模型");

  // 断言 Kling Avatar 纯数字人绝无首尾帧
  const avatar = declaredModels.find((m) => m.id === "kling-avatar");
  assert.ok(avatar, "必须声明 kling-avatar 数字人");
  const avatarModes = avatar.modes.map((m) => m.mode);
  assert.ok(avatarModes.includes("digital_human"), "数字人必须包含 digital_human 模式");
  assert.ok(!avatarModes.includes("first_last_frame"), "数字人严禁包含首尾帧模式");

  // 断言 Seedance 系列绝无首尾帧
  const seedance = declaredModels.find((m) => m.id === "seedance-2-5");
  assert.ok(seedance, "必须声明 seedance-2-5");
  const seedanceModes = seedance.modes.map((m) => m.mode);
  assert.ok(!seedanceModes.includes("first_last_frame"), "Seedance 严禁包含首尾帧模式");
});
