import { House } from "lucide-react";
import Link from "next/link";

/**
 * Project-level "Back to home" utility rendered on all seven screen routes.
 *
 * This is NOT part of any reference design — it is layered on top of the
 * pages with `position: fixed`, so it never participates in document flow,
 * adds no height, and cannot shift, resize or restyle the audited layouts.
 *
 * Position: bottom-left (12px from left, 8px from bottom, 32×32) on every
 * route — a single consistent position with no per-page overrides needed:
 * - `/ride-trip-details` mobile: sits in the empty white strip below the
 *   Call / Join Ride row (5px clearance, guaranteed by CSS: the row ends
 *   45px above the bottom edge) and left of the centred home indicator.
 * - `/ride-trip-details` desktop/tablet: sits on the grey canvas outside
 *   the phone panel and outside the reference crop window (x ≥ 323), so
 *   the audited pixel diff is unaffected.
 * - The six landing routes: bottom-left is empty in their current
 *   placeholder state.
 * If a future route fills its bottom-left corner, pass `className` with a
 * positioning override (e.g. `left-auto right-3 bottom-4`) for that route.
 */
type BackToHomeProps = {
  /** Optional class appended for page-specific positioning overrides. */
  className?: string;
};

export function BackToHome({ className = "" }: BackToHomeProps) {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className={`fixed bottom-2 left-3 z-50 flex size-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-all duration-150 hover:scale-105 hover:text-neutral-900 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 ${className}`}
    >
      <House
        aria-hidden="true"
        focusable="false"
        className="size-4"
        strokeWidth={1.8}
      />
    </Link>
  );
}
