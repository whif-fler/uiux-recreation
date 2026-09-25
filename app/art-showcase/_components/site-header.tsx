"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, User } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const NAV_ITEMS: ReadonlyArray<{ label: string; strategy?: boolean }> = [
  { label: "Get Started" },
  { label: "Create strategy", strategy: true },
  { label: "Pricing" },
  { label: "Contact" },
  { label: "Solution" },
  { label: "E-Commerce" },
];

/** Small black disc with white centre dot shown before "Create strategy". */
function StrategyGlyph() {
  return (
    <svg viewBox="0 0 11 11" aria-hidden="true" className="size-[11px] shrink-0">
      <circle
        cx="5.5"
        cy="5.5"
        r="5.5"
        className="fill-[#111111] dark:fill-[#EDEDEB]"
      />
      <circle cx="5.5" cy="5.5" r="2" className="fill-white dark:fill-[#141414]" />
    </svg>
  );
}

/**
 * Top navigation for the Art Showcase screen.
 *
 * Reference targets (1282×754): content centred at y≈48 (header h96,
 * px 43); nav run x600..1116 — reproduced by right-grouping the nav 42px
 * before the action buttons instead of absolute centring. The brand mark
 * is an original placeholder glyph (never a copy of the reference logo)
 * kept at the reference's size/weight/placement.
 *
 * Mobile (≤900, user-requested): the nav links swap for a hamburger that
 * toggles a dropdown panel (the buttons would otherwise be dead controls),
 * and the header reserves `env(safe-area-inset-top)` for notched phones —
 * 0 on desktop/Android, so the audited layout is untouched (the height is
 * `72px + inset` with matching top padding, keeping the 72px content band).
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile panel on outside press or Escape while it is open.
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="relative flex h-[96px] items-center px-[43px] max-[901px]:h-[calc(72px_+_env(safe-area-inset-top,0px))] max-[901px]:px-[22px] max-[901px]:pt-[env(safe-area-inset-top,0px)]"
    >
      <a
        href="#"
        aria-label="Pallet Ross home"
        className="relative top-[1px] flex items-center gap-[13px]"
      >
        <svg
          viewBox="0 0 30 30"
          aria-hidden="true"
          className="size-[28px] shrink-0 fill-[#77C8C0]"
        >
          <path d="M2 5h12l4 5-7 4L2 11z" />
          <path d="M17 3h9l1 13-7-5z" />
          <path d="M10 16l7-4 2 15-6-2z" />
        </svg>
        <span className="text-[20px] font-bold tracking-[-0.9px] max-[641px]:text-[18px]">
          Pallet Ross
        </span>
      </a>

      <div className="ml-auto flex items-center gap-[46px]">
        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-[32px] whitespace-nowrap text-[12px] font-semibold tracking-[-0.25px] max-[901px]:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-[5px] transition-opacity duration-150 hover:opacity-60 motion-reduce:transition-none"
            >
              {item.strategy ? <StrategyGlyph /> : null}
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[6px]">
          <button
            type="button"
            aria-label="Account"
            className="grid size-[36px] place-items-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-transform duration-150 hover:scale-105 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 dark:bg-[#232323]"
          >
            <User aria-hidden="true" className="size-5" strokeWidth={1.4} />
          </button>
          {/* The reference's theme control — now functional (ripple toggle).
              Button classes and the sun glyph are unchanged, so the light
              render is pixel-identical to the audited design. */}
          <ThemeToggle className="grid size-[34px] place-items-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-transform duration-150 hover:scale-105 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 max-[641px]:hidden dark:bg-[#232323]" />
          {/* Mobile hamburger — visible exactly where the nav hides (≤900),
              mirroring the requested hidden-md:flex / flex-md:hidden swap.
              Same 36px action-circle language as account/theme. */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="art-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="hidden size-[36px] place-items-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-transform duration-150 hover:scale-105 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 max-[901px]:grid dark:bg-[#232323]"
          >
            <Menu aria-hidden="true" className="size-5" strokeWidth={1.4} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="art-mobile-menu"
          className="absolute left-0 right-0 top-full z-50 hidden flex-col border-b border-black/[0.06] bg-white py-[6px] shadow-[0_18px_36px_-18px_rgba(0,0,0,0.22)] max-[901px]:flex dark:border-white/10 dark:bg-[#171717]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-[6px] px-[22px] py-[13px] text-[13px] font-semibold tracking-[-0.25px] transition-opacity duration-150 hover:opacity-60 motion-reduce:transition-none"
            >
              {item.strategy ? <StrategyGlyph /> : null}
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
