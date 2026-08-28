/**
 * Shared open state for the sidebar products entry and the center stage.
 * Consumes standard StageStore from dsh-ui-kit.
 */
import { createStageStore as createKitStageStore } from 'dsh-ui-kit'

export const PRODUCT_STAGE_EVENT = 'dsh-product-stage'
export const STAGE_ID = 'omnimux-products'

export function createStageStore(getStage) {
  return createKitStageStore(STAGE_ID, getStage)
}
