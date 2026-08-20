import { homedir } from 'node:os'
import { join } from 'node:path'

export const MCP_BEGIN = '# --- omnimux-gallery managed ---'
export const MCP_END = '# --- end omnimux-gallery managed ---'

/**
 * @param {string | undefined} home
 */
export function resolveHome(home) {
  return home || process.env.DSH_HOME || join(homedir(), '.dsh')
}

/**
 * @param {string} home
 * @param {string} [profile]
 */
export function profileDir(home, profile) {
  return join(home, 'profiles', profile || process.env.OMNIMUX_PLUGIN_PROFILE || 'omnimux')
}

/**
 * @param {string} home
 * @param {string} skill
 */
export function skillDir(home, skill) {
  return join(home, 'skills', skill)
}

/**
 * @param {string} itemId
 */
export function mcpRowId(itemId) {
  return `esc-mcp-${itemId}`
}

/**
 * @param {string} home
 */
export function expertModePresent(home) {
  return join(home, '.agent-presets', 'expert-mode', 'agent.cordis.yml')
}
