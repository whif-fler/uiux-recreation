"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * The links shown inline in the header on wide viewports and inside the
 * hamburger panel when the row gets too narrow for them (≤1010px).
 */
const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#system", label: "Design System" },
  { href: "#docs", label: "Documentation" },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[20px] w-[20px]">
      <circle cx="12" cy="12" r="3.3" fill="none" stroke="#666" strokeWidth="1.15" strokeLinecap="round" />
      <path
        d="M12 1.8v2.1M12 20.1v2.1M1.8 12h2.1M20.1 12h2.1M4.8 4.8l1.5 1.5M17.7 17.7l1.5 1.5M19.2 4.8l-1.5 1.5M6.3 17.7l-1.5 1.5"
        fill="none"
        stroke="#666"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DeveloperPortfolioScreen() {
  /**
   * Entrance choreography is gated ONLY on reduced motion. Framer Motion reads
   * `initial` once, when the motion element is created (its first render) — a
   * flag that flips to `true` after mount (the previous `mounted` state) is
   * therefore ignored and no animation ever runs. Keeping `initial` static from
   * the very first (SSR) render is what makes these entrances play, matching the
   * other six routes.
   */
  const shouldAnimate = !useReducedMotion();

  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  /* Close the hamburger panel on Escape and on a click outside the header. */
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <div
      className="developer-portfolio-screen min-h-screen overflow-x-hidden bg-[#fafafa] text-[#111] antialiased dark:bg-[#0f0f0f] dark:text-[#ededed]"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* Sizes are fixed — they never scale with the viewport. When the row can
          no longer hold the nav links next to the buttons (≤1010px) the links
          collapse into a hamburger panel instead of shrinking or wrapping. */}
      <header ref={headerRef} className="relative z-10 min-h-[110px] max-[900px]:min-h-[72px]">
        <motion.nav
          aria-label="Primary navigation"
          className="relative mx-auto flex min-h-[110px] max-w-[calc(100%-64px)] flex-wrap items-center gap-y-[8px] max-[900px]:min-h-[72px] max-[900px]:max-w-[calc(100%-36px)] max-[520px]:max-w-[calc(100%-28px)]"
          style={{ width: "clamp(1014px, 84.5vw, 1360px)" }}
          initial={shouldAnimate ? { y: -8, opacity: 0 } : false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        >
          <div className="flex items-center">
            <a
              href="#"
              className="mr-[72px] font-bold tracking-normal text-[#111] no-underline max-[1010px]:mr-0"
              style={{ fontSize: "26px" }}
            >
              Stage
            </a>

            <div className="hidden items-center min-[1011px]:flex" style={{ gap: "clamp(36px, 3.6vw, 56px)" }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-normal text-[#333] no-underline hover:text-[#111] dark:text-[#a0a0a0]"
                  style={{ fontSize: "17px" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="ml-auto flex items-center gap-[20px] max-[520px]:gap-[12px]">
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[8px] border border-[#d5d5d5] bg-[#fbfbfb] font-normal text-[#3f3f3f] shadow-[0_1px_4px_rgba(0,0,0,0.04)] no-underline transition-colors hover:bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-[#a0a0a0]"
              style={{ height: "52px", padding: "0 20px", fontSize: "16px", borderRadius: "8px" }}
            >
              Contact
            </a>
            <a
              href="#signup"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[8px] border border-[#212121] bg-[#212121] font-semibold text-white shadow-[0_1px_2px_rgba(0,0,0,0.16)] no-underline transition-opacity hover:opacity-90 dark:border-[#ededed] dark:bg-[#ededed] dark:text-[#0f0f0f]"
              style={{ height: "52px", padding: "0 22px", fontSize: "16px", borderRadius: "8px" }}
            >
              Sign up
            </a>
            <button
              type="button"
              className="hidden h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-[8px] border border-[#d5d5d5] bg-[#fbfbfb] text-[#333] max-[1010px]:inline-flex dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-[#a0a0a0]"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="primary-nav-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[22px] w-[22px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="primary-nav-menu"
                className="absolute right-0 top-[calc(100%+10px)] z-50 w-[240px] rounded-[10px] border border-[#d5d5d5] bg-white p-[6px] shadow-[0_14px_34px_rgba(0,0,0,0.14)] min-[1011px]:hidden dark:border-[#2a2a2a] dark:bg-[#1a1a1a]"
                initial={shouldAnimate ? { opacity: 0, y: -6 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-[8px] px-[16px] py-[11px] font-normal text-[#333] no-underline hover:bg-[#f1f1f1] dark:text-[#a0a0a0] dark:hover:bg-[#242424]"
                    style={{ fontSize: "17px" }}
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>

      <main>
        {/* Height lives in globals.css (scoped to ≥1581px) — an inline height
            would beat the `max-[1580px]:h-auto` class and clip the stacked
            hero (phone + logo rows) behind `overflow-hidden`. */}
        <section
          aria-labelledby="hero-title"
          className="developer-portfolio-hero relative w-full overflow-hidden max-[1580px]:h-auto max-[1580px]:min-h-0 max-[1580px]:pb-0"
        >
          {/* Orbits - fixed size, shifted right so the phone sits inside them */}
          <div
            aria-hidden="true"
            className="absolute left-[39.5%] top-[52px] h-[1050px] w-[1050px] rounded-full border border-[rgba(160,160,160,0.25)]"
          />
          <div
            aria-hidden="true"
            className="absolute left-[47.5%] top-[188px] h-[880px] w-[880px] rounded-full border border-[rgba(160,160,160,0.25)]"
          />

          {/* Hero copy - snapped to the bottom next to the phone on very wide
              viewports; below 1580px there is no room for both, so it stacks
              (the block keeps its size and simply moves down). */}
          <div
            className="absolute bottom-0 left-1/2 z-[4] mx-auto -translate-x-1/2 pb-0 max-[1580px]:relative max-[1580px]:bottom-auto max-[1580px]:left-auto max-[1580px]:translate-x-0 max-[1580px]:max-w-[calc(100%-40px)] max-[1580px]:pb-0 max-[1580px]:pt-[64px] max-[520px]:max-w-[calc(100%-32px)] max-[520px]:pt-[45px]"
            style={{ width: "clamp(1014px, 84.5vw, 1360px)", maxWidth: "calc(100% - 64px)" }}
          >
            <motion.h1
              id="hero-title"
              className="m-0 font-medium leading-[1.08] tracking-[-1.6px] text-[#111] max-[1580px]:!w-auto max-[1580px]:max-w-full"
              style={{ width: "clamp(620px, 51vw, 860px)", fontSize: "66px", letterSpacing: "-1.6px" } as React.CSSProperties}
              initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
            >
              API-based developer portfolio,
              <br />
              that converts.
            </motion.h1>

            <motion.p
              className="mt-[28px] leading-[1.7] tracking-[0.01px] text-[#555] max-[1580px]:max-w-[600px]"
              style={{ maxWidth: "clamp(620px, 50vw, 740px)", fontSize: "22px" }}
              initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.16 }}
            >
              Next-gen developer portfolio that helps you showcase your projects,
              <br className="max-[1580px]:hidden" />
              {" "}skills, and experience. Personalize it by an evergrowing collection of
              <br className="max-[1580px]:hidden" />
              {" "}building blocks and analyse your growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-[20px]"
              style={{ marginTop: "clamp(28px, 2.4vw, 40px)" }}
              initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.24 }}
            >
              <a
                href="#start"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-[8px] bg-[#212121] font-medium text-white no-underline shadow-[0_1px_2px_rgba(0,0,0,0.16)] transition-opacity hover:opacity-90 dark:bg-[#ededed] dark:text-[#0f0f0f]"
                style={{ height: "58px", padding: "0 28px", fontSize: "18px", borderRadius: "8px" }}
              >
                Get started
              </a>
              <a
                href="#future"
                className="inline-flex items-center justify-center gap-[12px] whitespace-nowrap rounded-[8px] border border-[#d8d8d8] bg-[#fbfbfb] font-normal text-[#555] shadow-[0_1px_4px_rgba(0,0,0,0.025)] no-underline transition-colors hover:bg-white dark:border-[#333] dark:bg-[#1a1a1a] dark:text-[#a0a0a0]"
                style={{ height: "58px", padding: "0 22px 0 18px", fontSize: "17px", borderRadius: "8px" }}
              >
                <span className="inline-flex items-center justify-center rounded-full border border-[#c8c8c8] pl-[1px] text-[#aaa]" style={{ width: "32px", height: "32px", fontSize: "12px" }}>
                  ▶
                </span>
                <span>Experience the future</span>
              </a>
            </motion.div>

            {/* Social proof - fixed-size marks, rows wrap when they run out
                of horizontal room */}
            <motion.section
              aria-label="Customer feedback"
              className="max-[1580px]:mt-[55px]"
              style={{ marginTop: "clamp(80px, 7vw, 120px)" }}
              initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.32 }}
            >
              <p className="m-0 font-bold text-[#111]" style={{ marginBottom: "clamp(24px, 2vw, 36px)", fontSize: "17px" }}>
                Built with feedback from amazing engineers at
              </p>

              <div className="flex flex-wrap items-center gap-[clamp(30px,2.9vw,48px)] leading-none text-[#777] grayscale">
                <span className="inline-flex items-center whitespace-nowrap font-medium" style={{ fontSize: "50px", letterSpacing: "-2.4px" }}>
                  Uber
                </span>
                <span className="inline-flex items-center whitespace-nowrap font-bold" style={{ fontSize: "50px", letterSpacing: "-2.2px" }}>
                  <b className="mr-[4px] inline-block skew-x-[-12deg] border-b-[5px] border-t-[5px] border-[#777]" style={{ height: "32px", fontSize: "36px", lineHeight: "10px" }}>
                    Z
                  </b>
                  illow
                </span>
                <span className="inline-flex items-center font-black rotate-[-4deg]" style={{ width: "58px", fontSize: "46px", letterSpacing: "-9px" }}>
                  M<span className="inline-block translate-y-[2px] rotate-[20deg]">J</span>
                </span>
                <span className="inline-flex items-center whitespace-nowrap font-semibold" style={{ fontSize: "44px", letterSpacing: "-1.5px" }}>
                  Google
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-[clamp(30px,2.9vw,48px)] leading-none text-[#777] grayscale" style={{ marginTop: "clamp(22px, 1.9vw, 34px)" }}>
                <span className="inline-flex items-center whitespace-nowrap font-serif font-bold" style={{ fontSize: "44px", letterSpacing: "-4px" }}>
                  (♨)
                </span>
                <span className="inline-flex items-center whitespace-nowrap font-bold" style={{ fontSize: "44px", letterSpacing: "-1.2px" }}>
                  Drupal<sup className="ml-[2px]" style={{ fontSize: "11px" }}>®</sup>
                </span>
                <span className="inline-flex items-center whitespace-nowrap font-black italic" style={{ fontSize: "50px", letterSpacing: "-3px" }}>
                  <i className="mr-[5px] font-normal not-italic" style={{ fontSize: "30px", letterSpacing: "-6px" }}>
                    ≡
                  </i>
                  GO
                </span>
                <span className="inline-flex items-center whitespace-nowrap font-bold" style={{ fontSize: "60px" }}>
                  ◌
                </span>
              </div>
            </motion.section>
          </div>

          {/* Phone - fixed 440×900, never scaled. Stacked (`max-[1580px]`) it
              is centred with a margin rather than `mx-auto` so that on a
              viewport narrower than 440px it clips equally on both sides
              instead of running off to the right. `pb-0` on the hero +
              `-mb-[80px]` here crop its bottom 80px: the hero is
              `overflow-hidden`, so its edge lands 80px above the phone's
              bottom. */}
          <motion.div
            aria-label="Portfolio preview on a phone"
            /* z-[5]: the copy box above spans nearly the full hero width, so it
               would otherwise cover the phone's right half (incl. the theme
               toggle) and swallow its clicks. Their contents never overlap. */
            className="absolute bottom-[-218px] left-[62%] top-auto z-[5] max-[1580px]:relative max-[1580px]:bottom-auto max-[1580px]:left-auto max-[1580px]:top-auto max-[1580px]:ml-[calc(50%-220px)] max-[1580px]:mt-[72px] max-[1580px]:-mb-[80px]"
            style={{ width: "440px", height: "900px" }}
            initial={shouldAnimate ? { opacity: 0, y: 28, scale: 0.97 } : false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.22 }}
          >
            <div className="absolute -left-[4px] bg-[#dedede]" style={{ top: "108px", height: "56px", width: "4px", borderRadius: "3px", boxShadow: "0 66px 0 #dedede,0 124px 0 #dedede" }} aria-hidden="true" />
            <div className="absolute -right-[4px] bg-[#dedede]" style={{ top: "182px", height: "92px", width: "4px", borderRadius: "3px" }} aria-hidden="true" />

            <article
              className="relative rounded-t-[52px] border border-[#ddd] bg-gradient-to-br from-[#ececec] via-[#fafafa] via-[27%] to-[#e5e5e5] to-[62%] shadow-[-12px_0_30px_rgba(0,0,0,0.06),14px_0_28px_rgba(0,0,0,0.05)] dark:border-[#333] dark:from-[#1a1a1a] dark:via-[#1e1e1e] dark:to-[#252525]"
              style={{ height: "900px", width: "100%", padding: "11px", borderRadius: "52px 52px 0 0" }}
            >
              <div className="pointer-events-none absolute border border-[#f5f5f5] dark:border-[#333]" style={{ inset: "7px", borderRadius: "46px 46px 0 0" }} aria-hidden="true" />
              <div
                className="absolute left-1/2 z-[4] -translate-x-1/2 rounded-b-[18px] bg-[#ededed] dark:bg-[#2a2a2a]"
                style={{ top: "12px", width: "194px", height: "36px" }}
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 z-[5] -translate-x-1/2 rounded-[2px] bg-[#c9c9c9] dark:bg-[#555]"
                style={{ top: "27px", width: "62px", height: "3px" }}
                aria-hidden="true"
              />

              <div className="relative h-full overflow-hidden border border-[#efefef] bg-white dark:border-[#2a2a2a] dark:bg-[#1e1e1e]" style={{ borderRadius: "42px 42px 0 0" }}>
                <button
                  type="button"
                  aria-label="Toggle theme"
                  onClick={() => {
                    const isDark = document.documentElement.dataset.theme === "dark";
                    const next = isDark ? "light" : "dark";
                    document.documentElement.dataset.theme = next;
                    try {
                      localStorage.setItem("theme", next);
                    } catch {}
                  }}
                  className="absolute z-[999] grid cursor-pointer place-items-center rounded-full border-0 bg-white shadow-[0_7px_18px_rgba(0,0,0,0.09)] transition-[box-shadow,transform] duration-200 hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)] active:scale-95 dark:bg-[#2a2a2a] dark:text-white"
                  style={{ right: "32px", top: "58px", width: "44px", height: "44px" }}
                >
                  <SunIcon />
                </button>

                <div style={{ padding: "140px 48px 0" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/developer-portfolio/avatar.svg"
                    alt="Abstract profile portrait"
                    className="block rounded-full"
                    style={{ width: "78px", height: "78px" }}
                    width={60}
                    height={60}
                  />
                  <h2 className="font-bold leading-[1.32] text-[#111]" style={{ margin: "40px 0 30px", fontSize: "26px", letterSpacing: "-0.6px" }}>
                    Software designer,
                    <br />
                    founder, and amateur
                    <br />
                    astronaut.
                  </h2>
                  <p className="m-0 leading-[1.45] text-[#555]" style={{ width: "320px", fontSize: "19px" }}>
                    I’m Felix, a software designer and entrepreneur based in New York City. I’m currently working on a new project called Stage.
                  </p>

                  <div aria-label="Social links" className="flex flex-wrap" style={{ marginTop: "32px", gap: "30px" }}>
                    <a href="#" aria-label="Twitter" className="block" style={{ width: "24px", height: "24px" }}>
                      <svg viewBox="0 0 24 24" className="fill-[#9b9b9b]" style={{ width: "23px", height: "23px" }}>
                        <path d="M20 7.1c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.5-1.8-.6.4-1.4.7-2.1.8a3.2 3.2 0 0 0-5.5 2.2c0 .3 0 .5.1.7-2.7-.1-5.1-1.4-6.7-3.4-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.4 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1h-.6c.4 1.3 1.6 2.2 3 2.2a6.5 6.5 0 0 1-4 1.4h-.8a9.1 9.1 0 0 0 5 1.5c6 0 9.3-5 9.3-9.3v-.4A6.8 6.8 0 0 0 20 7.1z" />
                      </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="block" style={{ width: "24px", height: "24px" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "23px", height: "23px" }}>
                        <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="#9b9b9b" strokeWidth="1.55" />
                        <circle cx="12" cy="12" r="3.7" fill="none" stroke="#9b9b9b" strokeWidth="1.55" />
                        <circle cx="17.2" cy="6.9" r="1" fill="#9b9b9b" stroke="none" />
                      </svg>
                    </a>
                    <a href="#" aria-label="GitHub" className="block" style={{ width: "24px", height: "24px" }}>
                      <svg viewBox="0 0 24 24" className="fill-[#9b9b9b]" style={{ width: "23px", height: "23px" }}>
                        <path d="M12 3a9 9 0 0 0-2.8 17.6c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.3-2.3-.3-4.6-1.1-4.6-5a4 4 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a4 4 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 1.9V20c0 .3.2.6.7.5A9 9 0 0 0 12 3z" />
                      </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="block" style={{ width: "24px", height: "24px" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "23px", height: "23px" }}>
                        <rect x="4" y="4" width="16" height="16" rx="1" fill="none" stroke="#9b9b9b" strokeWidth="1.55" />
                        <path
                          d="M8 10v7M8 7.5v.1M11.5 17v-7m0 3c0-1.8 4.5-2.5 4.5.7V17"
                          fill="none"
                          stroke="#9b9b9b"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect x="4" y="4" width="16" height="16" rx="1" fill="none" stroke="#9b9b9b" strokeWidth="1.55" className="pointer-events-none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
