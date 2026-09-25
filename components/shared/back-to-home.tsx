import { House } from "lucide-react";
import Link from "next/link";

/**
 * Project-level "Back to home" utility rendered on all seven screen routes.
 *
 * This is NOT part of any reference design — it is layered on top of the
 * pages with `position: fixed`, so it never participates in document flow,
 * adds no height, and cannot shift, resize or restyle the audited layouts.
 *
 * Position: bottom-left (12px from left, 8px from bottom, 32×32) on six
 * routes — a single consistent position:
 * - `/ride-trip-details` mobile: that screen's bottom band is only 18px (the
 *   Call / Join Ride row ends 18px above the bottom edge) and both the row and
 *   the content column are full-width, so a bottom-anchored circle would cover
 *   them — the route passes
 *   `max-md:left-auto max-md:right-[70px] max-md:bottom-auto max-md:top-[30.5px]`
 *   to place it in the header row instead — 18px left of the close X and
 *   centred on that row's content band, so it lines up with the X. Its own
 *   doc comment records why.
 * - `/ride-trip-details` desktop/tablet: sits on the grey canvas outside
 *   the phone panel and outside the reference crop window (x ≥ 323), so
 *   the audited pixel diff is unaffected.
 * - The six landing routes: bottom-left is empty in their current
 *   placeholder state.
 * If a future route fills its bottom-left corner, pass `className` with a
 * positioning override (e.g. the `max-md:*` relocation ride-trip-details
 * uses, or `left-auto right-3`).
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