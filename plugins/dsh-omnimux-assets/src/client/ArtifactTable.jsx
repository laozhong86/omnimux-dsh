import { activateRowKeydown } from './a11y.js'
import { formatRelative } from './format.js'

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: 13,
  lineHeight: '20px',
}

const th = {
  textAlign: 'left',
  fontWeight: 600,
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: 0.4,
  color: 'var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))',
  padding: '6px 10px',
  borderBottom: '1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.25)))',
  position: 'sticky',
  top: 0,
  background: 'var(--dsw-alias-bg-primary, var(--dsw-bg, #111))',
}

const td = {
  padding: '6px 10px',
  borderBottom: '1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.15)))',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: 0,
}

const muted = {
  margin: 0,
  fontSize: 12,
  lineHeight: '18px',
  color: 'var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))',
}

/**
 * Core-2 table: reported artifacts with source columns.
 * @param {{
 *   t: (key: string) => string,
 *   artifacts: any[],
 *   onOpen: (artifact: any) => void,
 * }} props
 */
export function ArtifactTable({ t, artifacts, onOpen }) {
  if (artifacts.length === 0) {
    return <p style={muted}>{t('artifact.empty')}</p>
  }
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={{ ...th, width: '34%' }}>{t('table.name')}</th>
          <th style={th}>{t('artifact.agent')}</th>
          <th style={th}>{t('artifact.model')}</th>
          <th style={th}>{t('table.type')}</th>
          <th style={th}>{t('table.time')}</th>
        </tr>
      </thead>
      <tbody>
        {artifacts.map((artifact) => (
          <tr
            key={String(artifact.id)}
            className="dsh-omnimux-assets-focusable"
            style={{ cursor: 'pointer' }}
            tabIndex={0}
            role="button"
            aria-label={String(artifact.title)}
            onClick={() => { onOpen(artifact) }}
            onKeyDown={activateRowKeydown(() => { onOpen(artifact) })}
          >
            <td style={td} title={String(artifact.title)}>{String(artifact.title)}</td>
            <td style={td}>{String(artifact.source?.agent ?? '—')}</td>
            <td style={td}>{artifact.source?.model ? String(artifact.source.model) : '—'}</td>
            <td style={td}>{t(`type.${artifact.type}`)}</td>
            <td style={td}>{formatRelative(String(artifact.created_at))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
