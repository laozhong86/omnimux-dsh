/**
 * Inline SVG icons for the Accounts client. Prefer 16px linear strokes with
 * `currentColor` so icons track the host theme instead of emoji / text glyphs.
 */

/**
 * Standard 16px plus mark used by ActionRow primary CTAs.
 * @param {{ size?: number, className?: string }} props
 */
export function PlusIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 3.5v9M3.5 8h9" />
    </svg>
  )
}
