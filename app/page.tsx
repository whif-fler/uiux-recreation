import { FeaturedScreenCard, ScreenCard, type Screen } from "./_components/screen-card";

import artShowcaseShot from "../docs/references/art-showcase.webp";
import developerPortfolioShot from "../docs/references/developer-portfolio.webp";
import financeLandingShot from "../docs/references/finance-landing.webp";
import pricingPlansShot from "../docs/references/pricing-plans.webp";
import realEstateLandingShot from "../docs/references/real-estate-landing.webp";
import rideTripDetailsShot from "../docs/references/ride-trip-details.webp";
import travelLandingShot from "../docs/references/travel-landing.webp";

const screens: Screen[] = [
  {
    href: "/ride-trip-details",
    label: "Ride-Share Trip Details",
    blurb: "Trip summary, driver card, fare split and next-ride reminders for one completed ride.",
    shot: rideTripDetailsShot,
    pan: "y",
  },
  {
    href: "/art-showcase",
    label: "Art Showcase",
    blurb: "Gallery landing: centred hero above an overlapping row of seven artwork cards.",
    shot: artShowcaseShot,
    pan: "zoom",
  },
  {
    href: "/travel-landing",
    label: "Travel App",
    blurb: "Sky-gradient hero with a floating pill nav and a centred call to action.",
    shot: travelLandingShot,
    pan: "zoom",
  },
  {
    href: "/finance-landing",
    label: "Finance Dashboard",
    blurb: "Marketing page built from a dashboard-mockup hero, trust bar and feature panel.",
    shot: financeLandingShot,
    pan: "y",
  },
  {
    href: "/real-estate-landing",
    label: "Real Estate Investment",
    blurb: "Property landing with a map hero, stats bar and a two-column feature grid.",
    shot: realEstateLandingShot,
    pan: "y",
  },
  {
    href: "/pricing-plans",
    label: "Pricing Plans",
    blurb: "Pricing hero above two side-by-side plan cards with a feature list.",
    shot: pricingPlansShot,
    pan: "y",
  },
  {
    href: "/developer-portfolio",
    label: "Developer Portfolio",
    blurb: "Portfolio hero with a nav bar, a two-line headline and a phone mockup.",
    shot: developerPortfolioShot,
    pan: "zoom",
  },
];

/** 3 × 2 grid, then the seventh screen full-width beneath it. */
const gridScreens = screens.slice(0, 6);
const featuredScreen = screens[6];

const stats = ["7 screens", "7 reference captures", "Desktop + mobile"];

/**
 * Home index for the seven recreations — an app-shell hub, not a reference
 * design: sticky chrome, a short intro, then a card grid whose previews are
 * the supplied reference captures.
 */
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
            Every card opens a recreation built from its supplied reference image. Hover a
            preview to see more of the page.
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
          {gridScreens.map((screen, index) => (
            <ScreenCard key={screen.href} screen={screen} index={index} />
          ))}
          <FeaturedScreenCard screen={featuredScreen} index={gridScreens.length} />
        </nav>
      </main>
    </div>
  );
}

/** Keeps `--i` typed when the stagger index is set inline on a card. */
export type HubStyle = React.CSSProperties;
