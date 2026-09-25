"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, User } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { EASE_GLIDE, TIMELINE } from "./motion-timeline";

const NAV_ITEMS: ReadonlyArray<{ label: string; strategy?: boolean }> = [
  { label: "Get Started" },
  { label: "Create strategy", strategy: true },
  { label: "Pricing" },
  { label: "Contact" },
  { label: "Solution" },
  { label: "E-Commerce" },
];

/** Small black disc with white centre dot shown before "Create strategy".
 *  Sized at reference 11px × the element scale (`--k`). */
function StrategyGlyph() {
  return (
    <svg viewBox="0 0 11 11" aria-hidden="true" className="size-[calc(11px_*_var(--k,_1))] shrink-0">
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
 * Width regime (user: "keep overall size and everything same … when the
 * width gets to mobile size activate mobile mode"): the header keeps its
 * DESKTOP metrics — h96, px43 × the element scale `var(--k, 1)` (reference
 * exact at 1; individually larger on big screens per "increase the size of
 * the individual elements", never a container transform) — at every width
 * ≥641, and only ≤640 switches to the mobile comp (72px + safe-area inset,
 * px22). The nav
 * links still swap for a hamburger below 901 (user-confirmed: the full
 * run no longer fits there), toggling a dropdown panel so the buttons
 * are never dead controls.
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  /** One element's entrance: fade-in-up — opacity 0 → 1 with a 14px rise
   *  (user: "fade-in-up … replace the wipes" — the clip-path reveal is
   *  gone), the same timing recipe as a headline word (headerDur on
   *  EASE_GLIDE, headerStep between elements); reduced motion renders the
   *  settled state directly. */
  const fadeInUp = (delay: number) => ({
    initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: reduce
      ? { duration: 0 }
      : { duration: TIMELINE.headerDur, delay, ease: EASE_GLIDE },
  });

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
      className="relative flex h-[calc(96px_*_var(--k,_1))] items-center px-[calc(43px_*_var(--k,_1))] max-[641px]:h-[calc(72px_+_env(safe-area-inset-top,0px))] max-[641px]:px-[22px] max-[641px]:pt-[env(safe-area-inset-top,0px)]"
    >
      {/* Logo: fade-in-up at t=0 — same beat as the action cluster. */}
      <motion.a
        href="#"
        aria-label="Pallet Ross home"
        {...fadeInUp(TIMELINE.header)}
        className="relative top-[calc(1px_*_var(--k,_1))] flex items-center gap-[calc(13px_*_var(--k,_1))]"
      >
        <svg
          viewBox="0 0 30 30"
          aria-hidden="true"
          className="size-[calc(28px_*_var(--k,_1))] shrink-0 fill-[#77C8C0]"
        >
          <path d="M2 5h12l4 5-7 4L2 11z" />
          <path d="M17 3h9l1 13-7-5z" />
          <path d="M10 16l7-4 2 15-6-2z" />
        </svg>
        <span className="text-[calc(20px_*_var(--k,_1))] font-bold tracking-[calc(-0.9px_*_var(--k,_1))] max-[641px]:text-[18px]">
          Pallet Ross
        </span>
      </motion.a>

      <div className="ml-auto flex items-center gap-[calc(46px_*_var(--k,_1))]">
        <nav
          aria-label="Primary navigation"
          className="art-nav flex items-center gap-[calc(32px_*_var(--k,_1))] whitespace-nowrap text-[calc(12px_*_var(--k,_1))] font-semibold tracking-[calc(-0.25px_*_var(--k,_1))] max-[901px]:hidden"
        >
          {/* Nav: a right-to-left wave of fade-in-ups — the rightmost link
              starts first (with the action cluster), 60ms steps. */}
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href="#"
              {...fadeInUp(
                TIMELINE.header + (NAV_ITEMS.length - i) * TIMELINE.headerStep,
              )}
              className="flex items-center gap-[calc(5px_*_var(--k,_1))] transition-opacity duration-150 hover:opacity-60 motion-reduce:transition-none"
            >
              {item.strategy ? <StrategyGlyph /> : null}
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Action cluster: ONE fade-in-up across the whole group at t=0
            (same beat as the logo). Wrapping the existing flex div keeps
            the layout byte-identical. */}
        <motion.div
          {...fadeInUp(TIMELINE.header)}
          className="flex items-center gap-[calc(6px_*_var(--k,_1))]"
        >
          <button
            type="button"
            aria-label="Account"
            className="grid size-[calc(36px_*_var(--k,_1))] place-items-center rounded-full bg-white shadow-[0_calc(2px_*_var(--k,_1))_calc(10px_*_var(--k,_1))_rgba(0,0,0,0.04)] transition-transform duration-150 hover:scale-105 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 dark:bg-[#232323]"
          >
            <User aria-hidden="true" className="size-[calc(20px_*_var(--k,_1))]" strokeWidth={1.4} />
          </button>
          {/* The reference's theme control — now functional (ripple toggle).
              Button classes and the sun glyph are unchanged, so the light
              render is pixel-identical to the audited design. Shown on mobile
              too (user request): it sits beside the account icon there, so the
              hamburger is pulled to the front of the group below 641 — giving
              the reference's [☰] left / [👤] right header with the toggle
              appended at the side of the account. */}
          <ThemeToggle className="grid size-[calc(34px_*_var(--k,_1))] place-items-center rounded-full bg-white shadow-[0_calc(2px_*_var(--k,_1))_calc(10px_*_var(--k,_1))_rgba(0,0,0,0.04)] transition-transform duration-150 hover:scale-105 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 dark:bg-[#232323]" />
          {/* Mobile hamburger — visible exactly where the nav hides (≤901),
              mirroring the requested hidden-md:flex / flex-md:hidden swap.
              Same 36px action-circle language as account/theme. */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="art-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="art-burger hidden size-[calc(36px_*_var(--k,_1))] place-items-center rounded-full bg-white shadow-[0_calc(2px_*_var(--k,_1))_calc(10px_*_var(--k,_1))_rgba(0,0,0,0.04)] transition-transform duration-150 hover:scale-105 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 max-[901px]:grid max-[641px]:order-first dark:bg-[#232323]"
          >
            <Menu aria-hidden="true" className="size-[calc(20px_*_var(--k,_1))]" strokeWidth={1.4} />
          </button>
        </motion.div>
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