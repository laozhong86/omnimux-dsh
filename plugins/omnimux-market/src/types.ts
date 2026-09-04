export type SortBy = 'score' | 'downloads' | 'stars' | 'installs' | 'updated_at'

export type SkillChannel = 'custom' | 'workbuddy' | 'skillhub'

export type SkillInstallBackend = 'catalog' | 'skillhub'

export interface FetchOptions {
  timeoutMs: number
  userAgent: string
}

export interface PluginConfig {
  apiBase: string
  webBase: string
  skillsDir: string
  timeoutMs: number
  userAgent: string
  maxResults: number
  sortBy: SortBy
  /** Keep plaza React tree with display:none after first open. Default true. */
  plazaKeepAlive: boolean
  /** Host SkillHub JSON memo TTL in seconds (plugins / skills search). Default 90. */
  plazaCacheTtlSec: number
  /** plugin_search 上限（1–8）。 */
  pluginMaxResults: number
  /** connector_search 上限（1–8）。 */
  connectorMaxResults: number
  /** 追加不可卸包；不能覆盖 CORE 四项。 */
  protectedBundlesExtra: string[]
  /** 技能聚合默认参与渠。 */
  aggregateChannels: SkillChannel[]
  /** WorkBuddy 技能市场扩展目录；空则 env → ~/.workbuddy/skills-marketplace。 */
  workbuddySkillsMarketplace: string
  /** 远程 SkillHub 失败时不阻断本地渠。 */
  aggregateRemoteSoftFail: boolean
}

export interface MarketToolSpec {
  name: string
  description: string
  parameters: Record<string, { type: string; required?: boolean; description?: string; items?: { type: string } }>
  output: {
    schema: { type: 'object'; additionalProperties: true }
    render: (args: unknown, value: unknown) => Array<{ type: 'text'; text: string }>
    presentationMeta: (args: unknown, value: unknown) => Record<string, unknown>
  }
  presentCall: (args: Record<string, unknown>) => { card: 'generic'; title: string; kind?: string; content: unknown[] }
  presentResult: (args: unknown, info: { isError?: boolean; meta?: Record<string, unknown> }) => { card: 'generic'; title: string; content: unknown[] }
  timeoutMs?: number
  execute: (args: Record<string, unknown>, exec?: unknown) => Promise<unknown>
}

export type SecurityStatus = 'benign' | 'scanning' | 'suspicious' | 'malicious'

export interface SecurityReport {
  status: SecurityStatus
  statusText: string
  reportUrl?: string
}

export interface SecurityReports {
  keen?: SecurityReport
  sanbu?: SecurityReport
}

export interface SkillIntegrity {
  signed: boolean
  contentHash?: string
  signature?: string
}

export interface SkillCard {
  id: string
  slug: string
  name: string
  description: string
  category: string
  categoryLabel: string
  version: string
  downloads: number
  stars: number
  installs: number
  iconUrl?: string
  pageUrl: string
  owner?: string
  installed?: boolean
  rating?: number
  verified?: boolean
  publisherName?: string
  security?: SecurityReports
  integrity?: SkillIntegrity
  channel: SkillChannel
  catalogId?: string
  installBackend?: SkillInstallBackend
  tags?: string[]
}

export interface SearchResult {
  query: string
  queries?: string[]
  category?: string
  sortBy: SortBy
  items: SkillCard[]
  total: number
  offset: number
  hasMore: boolean
  fallback?: boolean
  totalApprox?: boolean
  channelsServed?: SkillChannel[]
  channelCounts?: Partial<Record<SkillChannel, number>>
  channelErrors?: Partial<Record<SkillChannel, string>>
}

export interface InstalledSkill {
  slug: string
  name: string
  description: string
  version?: string
  path: string
}

export interface InstallResult {
  slug: string
  name: string
  version: string
  path: string
  files: number
}

export interface SkillHubSkillRaw {
  slug?: string
  name?: string
  displayName?: string
  description?: string
  description_zh?: string
  summary?: string
  summary_zh?: string
  category?: string
  downloads?: number
  stars?: number
  installs?: number
  stats?: {
    downloads?: number
    stars?: number
    installs?: number
  }
  version?: string
  iconUrl?: string | null
  ownerName?: string
  publisher?: {
    name?: string
    verified?: boolean
  }
  namespace?: {
    canonicalName?: string
    handle?: string
    publicSlug?: string
  }
  securityReports?: {
    keen?: { status?: string; statusText?: string; reportUrl?: string }
    sanbu?: { status?: string; statusText?: string; reportUrl?: string }
  }
}

export interface SkillHubDetailRaw {
  slug?: string
  skill?: SkillHubSkillRaw
  namespace?: SkillHubSkillRaw['namespace']
  owner?: { handle?: string; displayName?: string }
  publisher?: SkillHubSkillRaw['publisher']
  latestVersion?: { version?: string }
  securityReports?: SkillHubSkillRaw['securityReports']
}

export interface SkillHubListResponse {
  code: number
  message?: string
  data?: {
    skills?: SkillHubSkillRaw[]
    total?: number
  }
}
