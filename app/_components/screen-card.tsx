import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/** One recreation route as it appears on the home index. */
export type Screen = {
  href: string;
  label: string;
  blurb: string;
  /** Full-size reference capture, statically imported from `docs/references`. */
  shot: StaticImageData;
  /**
   * Hover behaviour of the preview:
   * - `y` — capture is taller than the preview frame, so hovering scrolls it
   *   from top to bottom (you see the whole page in two passes).
   * - `zoom` — capture is wider than the frame (nothing below to scroll to),
   *   so hovering pushes in slightly instead.
   */
  pan: "y" | "zoom";
};

/** `MOBILE · 549 × 1095` — derived from the capture, never hand-written.
 *  Classed by capture *width*: a full-page desktop capture (1760 × 2478) is
 *  taller than it is wide, so aspect ratio would misread it as a phone. */
function metaOf({ shot }: Screen): string {
  const kind = shot.width < 700 ? "Mobile" : "Desktop";
  return `${kind} · ${shot.width} × ${shot.height}`;
}

/** Browser chrome: three dots plus the real route path the card opens. */
function Chrome({ href }: { href: string }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-[var(--hub-line)] bg-[var(--hub-chrome)] px-3.5 py-2.5">
      <span aria-hidden="true" className="flex gap-1.5">
        <span className="size-[7px] rounded-full bg-[var(--hub-line-strong)]" />
        <span className="size-[7px] rounded-full bg-[var(--hub-line-strong)]" />
        <span className="size-[7px] rounded-full bg-[var(--hub-line-strong)]" />
      </span>
      <span className="truncate font-mono text-[11px] leading-none text-[var(--hub-muted)]">
        {href}
      </span>
    </div>
  );
}

function Preview({
  screen,
  sizes,
  className = "aspect-[4/3]",
}: {
  screen: Screen;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[var(--hub-chrome)] ${className}`}>
      <Image
        src={screen.shot}
        alt={`Reference capture of the ${screen.label} screen`}
        fill
        sizes={sizes}
        data-pan={screen.pan}
        /* All seven captures *are* the page — lazy loading them would only
           delay the previews and pop them in on scroll. */
        loading="eager"
        className="hub-shot__img object-cover"
      />
    </div>
  );
}

function OpenBadge({ size = 28 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="hub-open inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--hub-line)]"
      style={{ width: size, height: size }}
    >
      <ArrowUpRight className="size-3.5" strokeWidth={2} />
    </span>
  );
}

/**
 * Standard grid card (six per grid). The whole card is the link, so the
 * preview, the title and the route path are one target.
 */
export function ScreenCard({ screen, index }: { screen: Screen; index: number }) {
  return (
    <Link
      href={screen.href}
      style={{ "--i": index } as CSSProperties}
      className="hub-card group flex flex-col overflow-hidden rounded-xl border border-[var(--hub-line)] bg-[var(--hub-surface)] transition-[border-color,box-shadow] duration-200 hover:border-[var(--hub-line-strong)] hover:shadow-[0_16px_32px_-24px_rgba(12,14,18,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--hub-ink)]"
    >
      <Chrome href={screen.href} />
      <Preview
        screen={screen}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[15px] font-medium leading-snug tracking-tight">{screen.label}</h2>
          <p className="text-[13px] leading-relaxed text-[var(--hub-muted)]">{screen.blurb}</p>
        </div>
        <div className="mt-auto flex items-end justify-between gap-3">
          <span className="hub-meta">{metaOf(screen)}</span>
          <OpenBadge />
        </div>
      </div>
    </Link>
  );
}

/**
 * Seventh route, rendered full-width beneath the 3 × 2 grid: a banner preview
 * with the copy set beside it, so the row of cards resolves instead of leaving
 * a single orphan cell.
 */
export function FeaturedScreenCard({ screen, index }: { screen: Screen; index: number }) {
  return (
    <Link
      href={screen.href}
      style={{ "--i": index } as CSSProperties}
      className="hub-card group col-span-1 overflow-hidden rounded-xl border border-[var(--hub-line)] bg-[var(--hub-surface)] transition-[border-color,box-shadow] duration-200 hover:border-[var(--hub-line-strong)] hover:shadow-[0_16px_32px_-24px_rgba(12,14,18,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--hub-ink)] sm:col-span-2 lg:col-span-3"
    >
      <Chrome href={screen.href} />
      <Preview
        screen={screen}
        sizes="(min-width: 1180px) 1148px, 100vw"
        className="aspect-[4/3] sm:aspect-[16/6]"
      />
      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex max-w-2xl flex-col gap-1.5">
          <h2 className="text-lg font-medium leading-snug tracking-tight">{screen.label}</h2>
          <p className="text-[13px] leading-relaxed text-[var(--hub-muted)]">{screen.blurb}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="hub-meta">{metaOf(screen)}</span>
          <OpenBadge size={34} />
        </div>
      </div>
    </Link>
  );
}
