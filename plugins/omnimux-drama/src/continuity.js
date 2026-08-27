/**
 * plugins/omnimux-drama/src/continuity.js
 * Drama & Workflow Character/Scene Continuity Token Schema & Prompt Compiler
 */

export const DEFAULT_NEGATIVE_TOKENS = Object.freeze([
  'blurry',
  'low quality',
  'deformed',
  'extra limbs',
  'bad anatomy',
  'watermark',
])

/**
 * Validate and normalize a Character Continuity Token.
 * @param {Record<string, unknown>} raw
 * @returns {Record<string, unknown>}
 */
export function normalizeCharacterToken(raw) {
  if (!raw || typeof raw !== 'object') throw new Error('Character token must be an object')
  const characterId = String(raw.characterId || raw.id || '').trim()
  if (!characterId) throw new Error('Character token must have a characterId')
  const name = String(raw.name || characterId).trim()
  const faceRef = typeof raw.faceRef === 'string' ? raw.faceRef.trim() : undefined
  const voiceId = typeof raw.voiceId === 'string' ? raw.voiceId.trim() : undefined
  const costumeId = typeof raw.costumeId === 'string' ? raw.costumeId.trim() : undefined
  const loraWeights = raw.loraWeights && typeof raw.loraWeights === 'object' && !Array.isArray(raw.loraWeights)
    ? { ...raw.loraWeights }
    : {}
  const fixedPromptTokens = Array.isArray(raw.fixedPromptTokens)
    ? raw.fixedPromptTokens.map((t) => String(t).trim()).filter(Boolean)
    : []
  const negativeTokens = Array.isArray(raw.negativeTokens)
    ? raw.negativeTokens.map((t) => String(t).trim()).filter(Boolean)
    : []

  return {
    characterId,
    name,
    faceRef,
    voiceId,
    costumeId,
    loraWeights,
    fixedPromptTokens,
    negativeTokens,
  }
}

/**
 * Validate and normalize a Scene Continuity Token.
 * @param {Record<string, unknown>} raw
 * @returns {Record<string, unknown>}
 */
export function normalizeSceneToken(raw) {
  if (!raw || typeof raw !== 'object') throw new Error('Scene token must be an object')
  const sceneId = String(raw.sceneId || raw.id || '').trim()
  if (!sceneId) throw new Error('Scene token must have a sceneId')
  const name = String(raw.name || sceneId).trim()
  const environmentRef = typeof raw.environmentRef === 'string' ? raw.environmentRef.trim() : undefined
  const lightingProfile = typeof raw.lightingProfile === 'string' ? raw.lightingProfile.trim() : undefined
  const colorGradeLut = typeof raw.colorGradeLut === 'string' ? raw.colorGradeLut.trim() : undefined
  const cameraDefaults = raw.cameraDefaults && typeof raw.cameraDefaults === 'object'
    ? { ...raw.cameraDefaults }
    : {}
  const fixedPromptTokens = Array.isArray(raw.fixedPromptTokens)
    ? raw.fixedPromptTokens.map((t) => String(t).trim()).filter(Boolean)
    : []
  const negativeTokens = Array.isArray(raw.negativeTokens)
    ? raw.negativeTokens.map((t) => String(t).trim()).filter(Boolean)
    : []

  return {
    sceneId,
    name,
    environmentRef,
    lightingProfile,
    colorGradeLut,
    cameraDefaults,
    fixedPromptTokens,
    negativeTokens,
  }
}

/**
 * Compile a full continuity prompt from shot context, scene, characters, and dynamic action.
 * @param {{
 *   shotId?: string,
 *   scene?: Record<string, unknown>,
 *   characters?: Record<string, unknown>[],
 *   visualDescription?: string,
 *   styleToken?: string,
 *   extraNegative?: string[],
 * }} ctx
 */
export function compileContinuityPrompt(ctx) {
  const scene = ctx.scene ? normalizeSceneToken(ctx.scene) : null
  const characters = Array.isArray(ctx.characters)
    ? ctx.characters.map(normalizeCharacterToken)
    : []
  const action = String(ctx.visualDescription || '').trim()
  const style = String(ctx.styleToken || '').trim()

  const positiveParts = []
  const negativeSet = new Set(DEFAULT_NEGATIVE_TOKENS)
  const loras = {}
  const faceRefs = []

  // 1. Style tokens
  if (style) positiveParts.push(style)

  // 2. Scene tokens
  if (scene) {
    if (scene.fixedPromptTokens.length > 0) {
      positiveParts.push(scene.fixedPromptTokens.join(', '))
    }
    if (scene.lightingProfile) {
      positiveParts.push(`lighting: ${scene.lightingProfile}`)
    }
    scene.negativeTokens.forEach((neg) => negativeSet.add(neg))
  }

  // 3. Character tokens & LoRAs
  for (const char of characters) {
    const charParts = []
    if (char.fixedPromptTokens.length > 0) {
      charParts.push(char.fixedPromptTokens.join(', '))
    } else {
      charParts.push(`character ${char.name}`)
    }
    if (char.costumeId) {
      charParts.push(`wearing ${char.costumeId}`)
    }
    positiveParts.push(charParts.join(', '))

    // Collect LoRAs
    for (const [loraName, weight] of Object.entries(char.loraWeights)) {
      loras[loraName] = Number(weight) || 1.0
      positiveParts.push(`<lora:${loraName}:${weight}>`)
    }

    // Collect face references
    if (char.faceRef) {
      faceRefs.push({ characterId: char.characterId, ref: char.faceRef })
    }

    char.negativeTokens.forEach((neg) => negativeSet.add(neg))
  }

  // 4. Dynamic Shot Action
  if (action) positiveParts.push(action)

  // 5. Additional negative tokens
  if (Array.isArray(ctx.extraNegative)) {
    ctx.extraNegative.forEach((n) => negativeSet.add(String(n).trim()))
  }

  return {
    shotId: ctx.shotId || '',
    positivePrompt: positiveParts.filter(Boolean).join(', '),
    negativePrompt: Array.from(negativeSet).filter(Boolean).join(', '),
    loras,
    faceRefs,
    lightingProfile: scene?.lightingProfile || '',
    colorGradeLut: scene?.colorGradeLut || '',
  }
}
