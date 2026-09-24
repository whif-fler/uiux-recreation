import Link from "next/link";

const routes = [
  { href: "/ride-trip-details", label: "Ride-Share Trip Details" },
  { href: "/art-showcase", label: "Art Showcase" },
  { href: "/travel-landing", label: "Travel App" },
  { href: "/finance-landing", label: "Finance Dashboard" },
  { href: "/real-estate-landing", label: "Real Estate Investment" },
  { href: "/pricing-plans", label: "Pricing Plans" },
  { href: "/developer-portfolio", label: "Developer Portfolio" },
];

/**
 * Unscored navigation hub for the seven recreation routes.
 * Deliberately minimal: centered column, plain list, subtle dividers,
 * simple hover state — no animations, gradients or cards.
 */
export default function Home() {
  return (
    <main className="min-h-dvh w-full bg-white font-sans text-neutral-900">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-7 px-6 py-16 sm:py-24">
        <header className="flex flex-col gap-1.5">
          <h1 className="text-2xl font-semibold tracking-tight">
            UI/UX Recreation
          </h1>
          <p className="text-sm text-neutral-500">
            Seven UI/UX reference recreations
          </p>
        </header>

        <nav aria-label="Screens">
          <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className="block px-1 py-3.5 text-[15px] leading-snug underline-offset-4 hover:underline"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
