type GlyphProps = {
  className?: string;
};

/**
 * Original placeholder brand mark for the "HoᵖOn" wordmark.
 * Abstract hop trajectory — a solid dot, a rising arc and an open ring —
 * drawn from scratch. It deliberately shares only the reference glyph's
 * box size (32×34), ink colour and visual weight; it is never a copy or
 * trace of the reference's logo.
 */
export function BrandMark({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 32 34"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M8.5 28C8.5 18 11.5 10.2 18 8.4"
        stroke="#1A1A1A"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <circle cx="8.5" cy="28" r="6" fill="#1A1A1A" />
      <circle cx="24" cy="8" r="5.4" stroke="#1A1A1A" strokeWidth="3.8" fill="none" />
    </svg>
  );
}

/** Flat pink person glyph used as the driver avatar (no background circle). */
export function PersonGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 15 19"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="7.5" cy="4.4" r="4.4" />
      <path d="M7.5 10.3c-4.2 0-7.5 2.7-7.5 6.1V19h15v-2.6c0-3.4-3.3-6.1-7.5-6.1Z" />
    </svg>
  );
}

/**
 * Filled rosette badge with a white check for the "Verified ID" pill.
 * Badge outline follows the Lucide "badge-check" geometry, filled solid.
 */
export function VerifiedBadgeGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        fill="currentColor"
      />
      <path
        d="m9 12 2 2 4-4"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** iOS-style status bar glyphs, drawn to the reference's measured sizes. */
export function SignalGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 19 11"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect x="0" y="6.9" width="3.4" height="4.1" rx="1.1" />
      <rect x="5.2" y="4.9" width="3.4" height="6.1" rx="1.1" />
      <rect x="10.4" y="2.6" width="3.4" height="8.4" rx="1.1" />
      <rect x="15.6" y="0" width="3.4" height="11" rx="1.1" />
    </svg>
  );
}

export function WifiGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 17 12"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M1.5 4.2a10.4 10.4 0 0 1 14 0" strokeWidth="1.9" />
      <path d="M4.4 7.3a6.3 6.3 0 0 1 8.2 0" strokeWidth="1.9" />
      <circle cx="8.5" cy="10.4" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BatteryGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 27 12"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect
        x="0.6"
        y="0.6"
        width="23"
        height="10.8"
        rx="3.2"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
      <rect x="2.3" y="2.3" width="19.6" height="7.4" rx="1.9" fill="currentColor" />
      <path
        d="M25.3 4.1c1 .35 1.6 1 1.6 1.9s-.6 1.55-1.6 1.9Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
    </svg>
  );
}
