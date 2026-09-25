import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ScreenLink = {
  href: string;
  label: string;
  blurb: string;
};

const screens: ScreenLink[] = [
  {
    href: "/ride-trip-details",
    label: "Ride-Share Trip Details",
    blurb: "Trip summary, driver card, fare split and next-ride reminders for one completed ride.",
  },
  {
    href: "/art-showcase",
    label: "Art Showcase",
    blurb: "Gallery landing: centred hero above an overlapping row of seven artwork cards.",
  },
  {
    href: "/travel-landing",
    label: "Travel App",
    blurb: "Sky-gradient hero with a floating pill nav and a centred call to action.",
  },
  {
    href: "/finance-landing",
    label: "Finance Dashboard",
    blurb: "Marketing page built from a dashboard-mockup hero, trust bar and feature panel.",
  },
  {
    href: "/real-estate-landing",
    label: "Real Estate Investment",
    blurb: "Property landing with a map hero, stats bar and a two-column feature grid.",
  },
  {
    href: "/pricing-plans",
    label: "Pricing Plans",
    blurb: "Pricing hero above two side-by-side plan cards with a feature list.",
  },
  {
    href: "/developer-portfolio",
    label: "Developer Portfolio",
    blurb: "Portfolio hero with a nav bar, a two-line headline and a phone mockup.",
  },
];

const stats = ["7 screens", "Desktop + mobile"];

export default function Home() {
  return (
    <div className="hub font-sans">
      <header className="sticky top-0 z-40 border-b border-[var(--hub-line)] bg-[var(--hub-canvas)]/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <span className="flex items-center gap-2.5">
            <span aria-hidden="true" className="grid size-3.5 grid-cols-2 gap-[3px]">
              <span className="bg-[var(--hub-ink)]" />
              <span className="bg-[var(--hub-accent)]" />
              <span className="bg-[var(--hub-ink)]" />
              <span className="bg-[var(--hub-ink)]" />
            </span>
            <span className="text-[13.5px] font-medium tracking-tight">UI/UX Recreation</span>
          </span>
          <span className="hub-meta hidden sm:inline">Index · 07</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1180px] px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
        <section className="max-w-3xl">
          <p className="hub-meta flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--hub-accent)]" />
            Recreation index
          </p>
          <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.035em]">
            Reference designs, rebuilt as working screens.
          </h1>
          <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-[var(--hub-muted)]">
            Every card opens a recreation. Choose a route below to view the implementation.
          </p>
        </section>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--hub-line)] pt-4">
          {stats.map((stat) => (
            <li key={stat} className="hub-meta">
              {stat}
            </li>
          ))}
        </ul>

        <nav aria-label="Recreated screens" className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {screens.map((screen, index) => (
            <Link
              key={screen.href}
              href={screen.href}
              style={{ "--i": index } as React.CSSProperties}
              className="hub-card group flex flex-col overflow-hidden rounded-xl border border-[var(--hub-line)] bg-[var(--hub-surface)] transition-[border-color,box-shadow] duration-200 hover:border-[var(--hub-line-strong)] hover:shadow-[0_16px_32px_-24px_rgba(12,14,18,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--hub-ink)]"
            >
              <div className="flex items-center gap-2.5 border-b border-[var(--hub-line)] bg-[var(--hub-chrome)] px-3.5 py-2.5">
                <span aria-hidden="true" className="flex gap-1.5">
                  <span className="size-[7px] rounded-full bg-[var(--hub-line-strong)]" />
                  <span className="size-[7px] rounded-full bg-[var(--hub-line-strong)]" />
                  <span className="size-[7px] rounded-full bg-[var(--hub-line-strong)]" />
                </span>
                <span className="truncate font-mono text-[11px] leading-none text-[var(--hub-muted)]">
                  {screen.href}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[15px] font-medium leading-snug tracking-tight">{screen.label}</h2>
                  <p className="text-[13px] leading-relaxed text-[var(--hub-muted)]">{screen.blurb}</p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                  <span className="inline-flex items-center rounded-full bg-[var(--hub-accent)] px-3 py-1.5 text-xs font-medium tracking-wide text-[#0c0e12]">
                    Open
                  </span>
                  <span
                    aria-hidden="true"
                    className="hub-open inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[var(--hub-line)]"
                  >
                    <ArrowUpRight className="size-3.5" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}

/** Keeps `--i` typed when the stagger index is set inline on a card. */
export type HubStyle = React.CSSProperties;
