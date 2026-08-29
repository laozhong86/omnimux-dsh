import { Button, DropdownSelect, IconButton, InputField } from 'dsh-ui-kit'
import { emptyBrandStrategy } from '../brand-strategy.js'


/**
 * @param {unknown} list
 */
function linesOf(list) {
  return Array.isArray(list) ? list.join('\n') : ''
}

/**
 * @param {string} text
 */
function listOf(text) {
  return String(text).split('\n').map((row) => row.trim()).filter(Boolean)
}

/**
 * @param {{
 *   t: (key: string) => string,
 *   strategy: ReturnType<typeof emptyBrandStrategy>,
 *   patchStrategy: (fn: (next: any) => void) => void,
 * }} props
 */
export function StrategyFields({ t, strategy, patchStrategy }) {
  const basic = strategy.brand_basic_info
  const identity = strategy.identity_and_product
  const mission = strategy.mission_and_positioning
  const market = strategy.market_and_competition
  const priorityOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ]

  return (
    <div className="omnimux-products-form">
      <section className="omnimux-products-section">
        <div className="omnimux-products-section-title">{t('strategy.basic')}</div>
        <div className="omnimux-products-grid-fields">
          <InputField value={basic.company.name} placeholder={t('strategy.companyName')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.company.name = event.target.value }) }} />
          <InputField value={basic.company.website} placeholder={t('strategy.companyWebsite')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.company.website = event.target.value }) }} />
          <InputField value={basic.company.locale} placeholder={t('strategy.companyLocale')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.company.locale = event.target.value }) }} />
          <InputField value={basic.product.name} placeholder={t('strategy.productName')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.product.name = event.target.value }) }} />
          <InputField className="omnimux-products-span2" value={basic.product.category} placeholder={t('strategy.productCategory')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.product.category = event.target.value }) }} />
        </div>
      </section>

      <section className="omnimux-products-section">
        <div className="omnimux-products-section-head">
          <div className="omnimux-products-section-title">{t('strategy.angles')}</div>
          <Button
            variant="outline"
            size="xs"
            onClick={() => {
              patchStrategy((next) => {
                if (next.content_angles.length >= 10) return
                next.content_angles.push({ id: '', title: '', description: '', target_audience: '', priority: 3 })
              })
            }}
          >
            {t('strategy.addAngle')}
          </Button>
        </div>
        {strategy.content_angles.map((angle, index) => (
          <div key={angle.id || `new-${index}`} className="omnimux-products-section">
            <div className="omnimux-products-angle-row">
              <InputField value={angle.title} placeholder={t('strategy.angleTitle')} onChange={(event) => { patchStrategy((next) => { next.content_angles[index].title = event.target.value }) }} />
              <DropdownSelect
                value={String(angle.priority || 3)}
                options={priorityOptions}
                aria-label={t('strategy.angleTitle')}
                onChange={(value) => { patchStrategy((next) => { next.content_angles[index].priority = Number(value) }) }}
              />
              <IconButton
                variant="ghost"
                size="xs"
                aria-label={t('remove.confirm')}
                onClick={() => { patchStrategy((next) => { next.content_angles.splice(index, 1) }) }}
              >
                ×
              </IconButton>
            </div>
            <textarea className="omnimux-products-textarea" rows={2} value={angle.description} placeholder={t('strategy.angleDesc')} onChange={(event) => { patchStrategy((next) => { next.content_angles[index].description = event.target.value }) }} />
            <InputField value={angle.target_audience} placeholder={t('strategy.angleAudience')} onChange={(event) => { patchStrategy((next) => { next.content_angles[index].target_audience = event.target.value }) }} />
          </div>
        ))}
      </section>

      <section className="omnimux-products-section">
        <div className="omnimux-products-section-title">{t('strategy.tone')}</div>
        <p className="omnimux-products-label">{t('strategy.listHint')}</p>
        <textarea className="omnimux-products-textarea" rows={3} value={linesOf(strategy.tone_and_voice.dos)} placeholder={t('strategy.dos')} onChange={(event) => { patchStrategy((next) => { next.tone_and_voice.dos = listOf(event.target.value) }) }} />
        <textarea className="omnimux-products-textarea" rows={3} value={linesOf(strategy.tone_and_voice.donts)} placeholder={t('strategy.donts')} onChange={(event) => { patchStrategy((next) => { next.tone_and_voice.donts = listOf(event.target.value) }) }} />
      </section>

      <section className="omnimux-products-section">
        <div className="omnimux-products-section-title">{t('strategy.identity')}</div>
        <textarea className="omnimux-products-textarea" rows={2} value={identity.core_identity} placeholder={t('strategy.coreIdentity')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.core_identity = event.target.value }) }} />
        <p className="omnimux-products-label">{t('strategy.listHint')}</p>
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(identity.product_offering)} placeholder={t('strategy.offering')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.product_offering = listOf(event.target.value) }) }} />
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(identity.unique_advantage)} placeholder={t('strategy.advantage')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.unique_advantage = listOf(event.target.value) }) }} />
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(identity.problems_solved)} placeholder={t('strategy.problems')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.problems_solved = listOf(event.target.value) }) }} />
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(identity.solutions)} placeholder={t('strategy.solutions')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.solutions = listOf(event.target.value) }) }} />
      </section>

      <section className="omnimux-products-section">
        <div className="omnimux-products-section-title">{t('strategy.mission')}</div>
        <textarea className="omnimux-products-textarea" rows={2} value={mission.mission} placeholder={t('strategy.missionText')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.mission = event.target.value }) }} />
        <p className="omnimux-products-label">{t('strategy.listHint')}</p>
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(mission.differentiation)} placeholder={t('strategy.diff')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.differentiation = listOf(event.target.value) }) }} />
        <InputField value={mission.ownable_space.statement} placeholder={t('strategy.ownableStatement')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.ownable_space.statement = event.target.value }) }} />
        <InputField value={mission.ownable_space.category} placeholder={t('strategy.ownableCategory')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.ownable_space.category = event.target.value }) }} />
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(mission.ownable_space.is_not)} placeholder={t('strategy.ownableNot')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.ownable_space.is_not = listOf(event.target.value) }) }} />
      </section>

      <section className="omnimux-products-section">
        <div className="omnimux-products-section-head">
          <div className="omnimux-products-section-title">{t('strategy.market')}</div>
        </div>
        <div className="omnimux-products-section-head">
          <span className="omnimux-products-label">{t('strategy.segments')}</span>
          <Button
            variant="outline"
            size="xs"
            onClick={() => {
              patchStrategy((next) => {
                if (next.market_and_competition.customer_segments.length >= 10) return
                next.market_and_competition.customer_segments.push({ name: '', percentage: 0 })
              })
            }}
          >
            {t('strategy.addSegment')}
          </Button>
        </div>
        {market.customer_segments.map((row, index) => (
          <div key={`seg-${index}`} className="omnimux-products-seg-row">
            <InputField value={row.name} placeholder={t('strategy.segmentName')} onChange={(event) => { patchStrategy((next) => { next.market_and_competition.customer_segments[index].name = event.target.value }) }} />
            <InputField
              type="number"
              min={0}
              max={100}
              value={row.percentage}
              onChange={(event) => { patchStrategy((next) => { next.market_and_competition.customer_segments[index].percentage = Number(event.target.value) }) }}
            />
            <IconButton
              variant="ghost"
              size="xs"
              aria-label={t('remove.confirm')}
              onClick={() => { patchStrategy((next) => { next.market_and_competition.customer_segments.splice(index, 1) }) }}
            >
              ×
            </IconButton>
          </div>
        ))}
        <div className="omnimux-products-section-head">
          <span className="omnimux-products-label">{t('strategy.competitors')}</span>
          <Button
            variant="outline"
            size="xs"
            onClick={() => {
              patchStrategy((next) => {
                if (next.market_and_competition.competitors.length >= 10) return
                next.market_and_competition.competitors.push({ name: '', website: '' })
              })
            }}
          >
            {t('strategy.addCompetitor')}
          </Button>
        </div>
        {market.competitors.map((row, index) => (
          <div key={`comp-${index}`} className="omnimux-products-comp-row">
            <InputField value={row.name} placeholder={t('strategy.competitorName')} onChange={(event) => { patchStrategy((next) => { next.market_and_competition.competitors[index].name = event.target.value }) }} />
            <InputField value={row.website} placeholder={t('strategy.competitorWebsite')} onChange={(event) => { patchStrategy((next) => { next.market_and_competition.competitors[index].website = event.target.value }) }} />
            <IconButton
              variant="ghost"
              size="xs"
              aria-label={t('remove.confirm')}
              onClick={() => { patchStrategy((next) => { next.market_and_competition.competitors.splice(index, 1) }) }}
            >
              ×
            </IconButton>
          </div>
        ))}
      </section>
    </div>
  )
}
