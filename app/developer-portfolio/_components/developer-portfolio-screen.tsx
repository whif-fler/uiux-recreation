"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[20px] w-[20px] max-[1180px]:h-[18px] max-[1180px]:w-[18px]">
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
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional mount flag to avoid SSR opacity:0 flash for screenshots
    setMounted(true);
  }, []);
  const shouldAnimate = mounted && !reduce;

  return (
    <div
      className="developer-portfolio-screen min-h-screen overflow-x-hidden bg-[#fafafa] text-[#111] antialiased dark:bg-[#0f0f0f] dark:text-[#ededed]"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <header className="relative z-10 h-[110px] max-[900px]:h-auto">
        <motion.nav
          aria-label="Primary navigation"
          className="mx-auto flex h-[110px] items-center max-[900px]:h-[72px] max-[900px]:max-w-[calc(100%-36px)] max-[520px]:max-w-[calc(100%-28px)]"
          style={{ width: "clamp(1014px, 84.5vw, 1360px)", maxWidth: "calc(100% - 64px)" }}
          initial={shouldAnimate ? { y: -8, opacity: 0 } : false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        >
          <a
            href="#"
            className="mr-[72px] font-bold tracking-normal text-[#111] no-underline max-[900px]:mr-0"
            style={{ fontSize: "clamp(22px, 1.75vw, 26px)" }}
          >
            Stage
          </a>

          <div className="flex items-center max-[900px]:hidden" style={{ gap: "clamp(36px, 3.6vw, 56px)" }}>
            <a href="#features" className="font-normal text-[#333] no-underline hover:text-[#111] dark:text-[#a0a0a0]" style={{ fontSize: "clamp(15px, 1.2vw, 17px)" }}>
              Features
            </a>
            <a href="#system" className="font-normal text-[#333] no-underline hover:text-[#111] dark:text-[#a0a0a0]" style={{ fontSize: "clamp(15px, 1.2vw, 17px)" }}>
              Design System
            </a>
            <a href="#docs" className="font-normal text-[#333] no-underline hover:text-[#111] dark:text-[#a0a0a0]" style={{ fontSize: "clamp(15px, 1.2vw, 17px)" }}>
              Documentation
            </a>
          </div>

          <div className="ml-auto flex items-center gap-[20px] max-[900px]:gap-[10px]">
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[8px] border border-[#d5d5d5] bg-[#fbfbfb] font-normal text-[#3f3f3f] shadow-[0_1px_4px_rgba(0,0,0,0.04)] no-underline transition-colors hover:bg-white max-[520px]:hidden dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-[#a0a0a0]"
              style={{ height: "clamp(44px, 3.25vw, 52px)", padding: "0 clamp(16px, 1.3vw, 20px)", fontSize: "clamp(15px, 1.2vw, 16px)", borderRadius: "8px" }}
            >
              Contact
            </a>
            <a
              href="#signup"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[8px] border border-[#212121] bg-[#212121] font-semibold text-white shadow-[0_1px_2px_rgba(0,0,0,0.16)] no-underline transition-opacity hover:opacity-90 max-[520px]:h-[36px] max-[520px]:px-[14px] max-[520px]:text-[12px] dark:border-[#ededed] dark:bg-[#ededed] dark:text-[#0f0f0f]"
              style={{ height: "clamp(44px, 3.25vw, 52px)", padding: "0 clamp(18px, 1.5vw, 22px)", fontSize: "clamp(15px, 1.2vw, 16px)", borderRadius: "8px" }}
            >
              Sign up
            </a>
          </div>
        </motion.nav>
      </header>

      <main>
        <section
          aria-labelledby="hero-title"
          className="relative w-full overflow-hidden max-[900px]:h-auto max-[900px]:min-h-0 max-[900px]:pb-[50px]"
          style={{ height: "calc(100vh - 110px)", minHeight: "660px" } as React.CSSProperties & { height: string }}
        >
          {/* Orbits - fluid, shifted right so phone sits inside circle */}
          <div
            aria-hidden="true"
            className="absolute rounded-full border border-[rgba(160,160,160,0.25)] max-[900px]:left-1/2 max-[900px]:-translate-x-1/2 max-[900px]:h-[680px] max-[900px]:w-[680px] max-[900px]:top-[520px]"
            style={{ width: "clamp(790px, 64vw, 1050px)", height: "clamp(790px, 64vw, 1050px)", left: "39.5%", top: "52px" }}
          />
          <div
            aria-hidden="true"
            className="absolute rounded-full border border-[rgba(160,160,160,0.25)] max-[900px]:left-1/2 max-[900px]:-translate-x-1/2 max-[900px]:h-[570px] max-[900px]:w-[570px] max-[900px]:top-[615px]"
            style={{ width: "clamp(660px, 54vw, 880px)", height: "clamp(660px, 54vw, 880px)", left: "47.5%", top: "188px" }}
          />

          {/* Hero copy - fluid container, snapped to bottom same as phone */}
          <div
            className="absolute bottom-0 left-1/2 z-[4] mx-auto -translate-x-1/2 pb-[40px] max-[900px]:relative max-[900px]:bottom-auto max-[900px]:left-auto max-[900px]:translate-x-0 max-[900px]:max-w-[calc(100%-40px)] max-[900px]:pb-0 max-[900px]:pt-[64px] max-[520px]:max-w-[calc(100%-32px)] max-[520px]:pt-[45px]"
            style={{ width: "clamp(1014px, 84.5vw, 1360px)", maxWidth: "calc(100% - 64px)" }}
          >
            <motion.h1
              id="hero-title"
              className="m-0 font-medium leading-[1.08] tracking-[-1.6px] text-[#111] max-[900px]:!w-auto max-[900px]:max-w-full max-[520px]:leading-[1.12]"
              style={{ width: "clamp(620px, 51vw, 860px)", fontSize: "clamp(44px, 3.7vw, 66px)", letterSpacing: "-1.6px" } as React.CSSProperties}
              initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
            >
              API-based developer portfolio,
              <br />
              that converts.
            </motion.h1>

            <motion.p
              className="mt-[28px] leading-[1.7] tracking-[0.01px] text-[#555] max-[900px]:max-w-[600px]"
              style={{ maxWidth: "clamp(620px, 50vw, 740px)", fontSize: "clamp(18px, 1.45vw, 22px)" }}
              initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.16 }}
            >
              Next-gen developer portfolio that helps you showcase your projects,
              <br className="max-[900px]:hidden" />
              {" "}skills, and experience. Personalize it by an evergrowing collection of
              <br className="max-[900px]:hidden" />
              {" "}building blocks and analyse your growth.
            </motion.p>

            <motion.div
              className="flex gap-[20px] max-[520px]:flex-wrap"
              style={{ marginTop: "clamp(28px, 2.4vw, 40px)" }}
              initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.24 }}
            >
              <a
                href="#start"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-[8px] bg-[#212121] font-medium text-white no-underline shadow-[0_1px_2px_rgba(0,0,0,0.16)] transition-opacity hover:opacity-90 dark:bg-[#ededed] dark:text-[#0f0f0f]"
                style={{ height: "clamp(44px, 3.6vw, 58px)", padding: "0 clamp(20px, 1.7vw, 28px)", fontSize: "clamp(15px, 1.2vw, 18px)", borderRadius: "8px" }}
              >
                Get started
              </a>
              <a
                href="#future"
                className="inline-flex items-center justify-center gap-[12px] whitespace-nowrap rounded-[8px] border border-[#d8d8d8] bg-[#fbfbfb] font-normal text-[#555] shadow-[0_1px_4px_rgba(0,0,0,0.025)] no-underline transition-colors hover:bg-white dark:border-[#333] dark:bg-[#1a1a1a] dark:text-[#a0a0a0]"
                style={{ height: "clamp(44px, 3.6vw, 58px)", padding: "0 clamp(16px, 1.3vw, 22px) 0 clamp(12px, 1vw, 18px)", fontSize: "clamp(15px, 1.2vw, 17px)", borderRadius: "8px" }}
              >
                <span className="inline-flex items-center justify-center rounded-full border border-[#c8c8c8] pl-[1px] text-[#aaa]" style={{ width: "clamp(24px, 1.9vw, 32px)", height: "clamp(24px, 1.9vw, 32px)", fontSize: "clamp(9px, 0.7vw, 12px)" }}>
                  ▶
                </span>
                <span>Experience the future</span>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.section
              aria-label="Customer feedback"
              className="max-[900px]:mt-[55px] max-[520px]:overflow-hidden"
              style={{ marginTop: "clamp(80px, 7vw, 120px)" }}
              initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.32 }}
            >
              <p className="m-0 font-bold text-[#111]" style={{ marginBottom: "clamp(24px, 2vw, 36px)", fontSize: "clamp(14px, 1.1vw, 17px)" }}>
                Built with feedback from amazing engineers at
              </p>

              <div className="flex flex-wrap items-center leading-none text-[#777] grayscale max-[900px]:flex-wrap max-[520px]:gap-[22px]" style={{ gap: "clamp(30px, 2.9vw, 48px)" }}>
                <span className="inline-flex items-center whitespace-nowrap font-medium" style={{ fontSize: "clamp(36px, 3vw, 50px)", letterSpacing: "-2.4px" }}>
                  Uber
                </span>
                <span className="inline-flex items-center whitespace-nowrap font-bold" style={{ fontSize: "clamp(36px, 3vw, 50px)", letterSpacing: "-2.2px" }}>
                  <b className="mr-[4px] inline-block skew-x-[-12deg] border-b-[5px] border-t-[5px] border-[#777]" style={{ height: "clamp(26px, 2vw, 32px)", fontSize: "clamp(26px, 2.1vw, 36px)", lineHeight: "10px" }}>
                    Z
                  </b>
                  illow
                </span>
                <span className="inline-flex items-center font-black rotate-[-4deg]" style={{ width: "clamp(46px, 3.6vw, 58px)", fontSize: "clamp(32px, 2.6vw, 46px)", letterSpacing: "-9px" }}>
                  M<span className="inline-block translate-y-[2px] rotate-[20deg]">J</span>
                </span>
                <span className="inline-flex items-center whitespace-nowrap font-semibold" style={{ fontSize: "clamp(30px, 2.5vw, 44px)", letterSpacing: "-1.5px" }}>
                  Google
                </span>
              </div>

              <div className="flex flex-wrap items-center leading-none text-[#777] grayscale max-[520px]:gap-[22px]" style={{ marginTop: "clamp(22px, 1.9vw, 34px)", gap: "clamp(30px, 2.9vw, 48px)" }}>
                <span className="inline-flex items-center whitespace-nowrap font-serif font-bold" style={{ fontSize: "clamp(32px, 2.6vw, 44px)", letterSpacing: "-4px" }}>
                  (♨)
                </span>
                <span className="inline-flex items-center whitespace-nowrap font-bold" style={{ fontSize: "clamp(30px, 2.5vw, 44px)", letterSpacing: "-1.2px" }}>
                  Drupal<sup className="ml-[2px]" style={{ fontSize: "clamp(9px, 0.7vw, 11px)" }}>®</sup>
                </span>
                <span className="inline-flex items-center whitespace-nowrap font-black italic" style={{ fontSize: "clamp(36px, 3vw, 50px)", letterSpacing: "-3px" }}>
                  <i className="mr-[5px] font-normal not-italic" style={{ fontSize: "clamp(22px, 1.8vw, 30px)", letterSpacing: "-6px" }}>
                    ≡
                  </i>
                  GO
                </span>
                <span className="inline-flex items-center whitespace-nowrap font-bold" style={{ fontSize: "clamp(42px, 3.4vw, 60px)" }}>
                  ◌
                </span>
              </div>
            </motion.section>
          </div>

          {/* Phone - fluid, height before + minor width tweak */}
          <motion.div
            aria-label="Portfolio preview on a phone"
            className="absolute bottom-[-152px] left-[62%] top-auto z-[3] max-[900px]:relative max-[900px]:bottom-auto max-[900px]:left-auto max-[900px]:top-auto max-[900px]:mx-auto max-[900px]:mt-[72px] max-[900px]:h-auto max-[900px]:w-[340px] max-[520px]:origin-top max-[520px]:-mb-[44px] max-[520px]:scale-[0.92]"
            style={{ width: "clamp(320px, 26vw, 440px)", height: "clamp(680px, 55vw, 900px)" }}
            initial={shouldAnimate ? { opacity: 0, y: 28, scale: 0.97 } : false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.22 }}
          >
            <div className="absolute -left-[4px] bg-[#dedede]" style={{ top: "clamp(80px, 6.5vw, 108px)", height: "clamp(44px, 3.5vw, 56px)", width: "4px", borderRadius: "3px", boxShadow: "0 66px 0 #dedede,0 124px 0 #dedede" }} aria-hidden="true" />
            <div className="absolute -right-[4px] bg-[#dedede]" style={{ top: "clamp(139px, 11vw, 182px)", height: "clamp(71px, 5.6vw, 92px)", width: "4px", borderRadius: "3px" }} aria-hidden="true" />

            <article
              className="relative rounded-t-[48px] border border-[#ddd] bg-gradient-to-br from-[#ececec] via-[#fafafa] via-[27%] to-[#e5e5e5] to-[62%] shadow-[-12px_0_30px_rgba(0,0,0,0.06),14px_0_28px_rgba(0,0,0,0.05)] max-[900px]:h-[640px] max-[900px]:w-[340px] max-[900px]:rounded-t-[42px] dark:border-[#333] dark:from-[#1a1a1a] dark:via-[#1e1e1e] dark:to-[#252525]"
              style={{ height: "clamp(680px, 55vw, 900px)", width: "100%", padding: "clamp(9px, 0.7vw, 11px)", borderRadius: "clamp(42px, 3.2vw, 52px) clamp(42px, 3.2vw, 52px) 0 0" }}
            >
              <div className="pointer-events-none absolute border border-[#f5f5f5] dark:border-[#333]" style={{ inset: "clamp(5px, 0.4vw, 7px)", borderRadius: "clamp(37px, 2.8vw, 46px) clamp(37px, 2.8vw, 46px) 0 0" }} aria-hidden="true" />
              <div
                className="absolute left-1/2 z-[4] -translate-x-1/2 rounded-b-[18px] bg-[#ededed] dark:bg-[#2a2a2a]"
                style={{ top: "clamp(9px, 0.7vw, 12px)", width: "clamp(146px, 11.8vw, 194px)", height: "clamp(29px, 2.2vw, 36px)" }}
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 z-[5] -translate-x-1/2 rounded-[2px] bg-[#c9c9c9] dark:bg-[#555]"
                style={{ top: "clamp(21px, 1.6vw, 27px)", width: "clamp(47px, 3.8vw, 62px)", height: "3px" }}
                aria-hidden="true"
              />

              <div className="relative h-full overflow-hidden border border-[#efefef] bg-white dark:border-[#2a2a2a] dark:bg-[#1e1e1e]" style={{ borderRadius: "clamp(33px, 2.5vw, 42px) clamp(33px, 2.5vw, 42px) 0 0" }}>
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
                  className="absolute z-[999] grid cursor-pointer place-items-center rounded-full border-0 bg-white shadow-[0_7px_18px_rgba(0,0,0,0.09)] dark:bg-[#2a2a2a] dark:text-white"
                  style={{ right: "clamp(25px, 1.9vw, 32px)", top: "clamp(44px, 3.4vw, 58px)", width: "clamp(35px, 2.65vw, 44px)", height: "clamp(35px, 2.65vw, 44px)" }}
                >
                  <SunIcon />
                </button>

                <div style={{ padding: "clamp(108px, 8.5vw, 140px) clamp(36px, 2.9vw, 48px) 0" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/developer-portfolio/avatar.svg"
                    alt="Abstract profile portrait"
                    className="block rounded-full"
                    style={{ width: "clamp(60px, 4.8vw, 78px)", height: "clamp(60px, 4.8vw, 78px)" }}
                    width={60}
                    height={60}
                  />
                  <h2 className="font-bold leading-[1.32] text-[#111]" style={{ margin: "clamp(30px, 2.4vw, 40px) 0 clamp(22px, 1.7vw, 30px)", fontSize: "clamp(24px, 1.9vw, 30px)", letterSpacing: "-0.6px" }}>
                    Software designer,
                    <br />
                    founder, and amateur
                    <br />
                    astronaut.
                  </h2>
                  <p className="m-0 leading-[1.45] text-[#555]" style={{ width: "clamp(240px, 19vw, 320px)", fontSize: "clamp(16px, 1.3vw, 19px)" }}>
                    I’m Felix, a software designer and entrepreneur based in New York City. I’m currently working on a new project called Stage.
                  </p>

                  <div aria-label="Social links" className="flex" style={{ marginTop: "clamp(24px, 1.9vw, 32px)", gap: "clamp(22px, 1.7vw, 30px)" }}>
                    <a href="#" aria-label="Twitter" className="block" style={{ width: "clamp(20px, 1.5vw, 24px)", height: "clamp(20px, 1.5vw, 24px)" }}>
                      <svg viewBox="0 0 24 24" className="fill-[#9b9b9b]" style={{ width: "clamp(19px, 1.4vw, 23px)", height: "clamp(19px, 1.4vw, 23px)" }}>
                        <path d="M20 7.1c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.5-1.8-.6.4-1.4.7-2.1.8a3.2 3.2 0 0 0-5.5 2.2c0 .3 0 .5.1.7-2.7-.1-5.1-1.4-6.7-3.4-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.4 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1h-.6c.4 1.3 1.6 2.2 3 2.2a6.5 6.5 0 0 1-4 1.4h-.8a9.1 9.1 0 0 0 5 1.5c6 0 9.3-5 9.3-9.3v-.4A6.8 6.8 0 0 0 20 7.1z" />
                      </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="block" style={{ width: "clamp(20px, 1.5vw, 24px)", height: "clamp(20px, 1.5vw, 24px)" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "clamp(19px, 1.4vw, 23px)", height: "clamp(19px, 1.4vw, 23px)" }}>
                        <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="#9b9b9b" strokeWidth="1.55" />
                        <circle cx="12" cy="12" r="3.7" fill="none" stroke="#9b9b9b" strokeWidth="1.55" />
                        <circle cx="17.2" cy="6.9" r="1" fill="#9b9b9b" stroke="none" />
                      </svg>
                    </a>
                    <a href="#" aria-label="GitHub" className="block" style={{ width: "clamp(20px, 1.5vw, 24px)", height: "clamp(20px, 1.5vw, 24px)" }}>
                      <svg viewBox="0 0 24 24" className="fill-[#9b9b9b]" style={{ width: "clamp(19px, 1.4vw, 23px)", height: "clamp(19px, 1.4vw, 23px)" }}>
                        <path d="M12 3a9 9 0 0 0-2.8 17.6c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.3-2.3-.3-4.6-1.1-4.6-5a4 4 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a4 4 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 1.9V20c0 .3.2.6.7.5A9 9 0 0 0 12 3z" />
                      </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="block" style={{ width: "clamp(20px, 1.5vw, 24px)", height: "clamp(20px, 1.5vw, 24px)" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "clamp(19px, 1.4vw, 23px)", height: "clamp(19px, 1.4vw, 23px)" }}>
                        <rect x="4" y="4" width="16" height="16" rx="1" fill="none" stroke="#9b9b9b" strokeWidth="1.55" />
                        <path
                          d="M8 10v7M8 7.5v.1M11.5 17v-7m0 3c0-1.8 4.5-2.5 4.5.7V17"
                          fill="none"
                          stroke="#fff"
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
