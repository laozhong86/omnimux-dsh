/**
 * Inline SVG icon set: 14px linear strokes following `currentColor`, so the
 * icons track the active theme instead of the OS emoji font. Sizes and stroke
 * width follow the sidebar-extra-entries contract (14×14 box).
 */

/**
 * @param {{ size?: number, children: any }} props
 */
function Icon({ size = 14, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flex: 'none', display: 'inline-block', verticalAlign: 'middle' }}
    >
      {children}
    </svg>
  )
}

/** @param {{ size?: number }} props */
export function FolderIcon(props) {
  return (
    <Icon {...props}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </Icon>
  )
}

/** @param {{ size?: number }} props */
export function FileIcon(props) {
  return (
    <Icon {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
    </Icon>
  )
}

/** @param {{ size?: number }} props */
export function AlertIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 4 2.8 20h18.4Z" />
      <path d="M12 10v4" />
      <path d="M12 17.5h.01" />
    </Icon>
  )
}

/** @param {{ size?: number }} props */
export function BotIcon(props) {
  return (
    <Icon {...props}>
      <rect x="5" y="8" width="14" height="11" rx="2" />
      <path d="M12 8V4" />
      <path d="M9 4h6" />
      <path d="M9.5 13h.01" />
      <path d="M14.5 13h.01" />
      <path d="M9 16.5h6" />
    </Icon>
  )
}

/** Folder with a check mark — local artifacts group icon. */
export function FolderCheckIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="m9 13 2 2 4-4" />
    </Icon>
  )
}

/** @param {{ size?: number }} props */
export function PlusIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </Icon>
  )
}

/** @param {{ size?: number }} props */
export function DotsIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </Icon>
  )
}

/** @param {{ size?: number }} props */
export function CloseIcon(props) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </Icon>
  )
}

/** @param {{ size?: number }} props */
export function RefreshIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 11a8 8 0 0 0-14.9-3" />
      <path d="M4 5v4h4" />
      <path d="M4 13a8 8 0 0 0 14.9 3" />
      <path d="M20 19v-4h-4" />
    </Icon>
  )
}

/** @param {{ size?: number }} props */
export function ChevronRightIcon(props) {
  return (
    <Icon {...props}>
      <path d="m9 6 6 6-6 6" />
    </Icon>
  )
}
