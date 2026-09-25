/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function Header() {
  return (
    <header className="border-b border-[#ebebeb] bg-white sticky top-0 z-30">
      <div className="mx-auto flex h-[76px] max-w-[1360px] items-center justify-between px-[48px] max-[1024px]:px-[32px] max-[760px]:px-[20px] max-[560px]:px-[16px]">
        <a href="#" className="flex items-center gap-2" aria-label="Brickwise home">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="1" y="12" width="4" height="11" rx="1" fill="#111" />
            <rect x="7" y="7" width="4" height="16" rx="1" fill="#111" />
            <rect x="13" y="2" width="4" height="21" rx="1" fill="#111" />
            <rect x="19" y="9" width="4" height="14" rx="1" fill="#111" />
          </svg>
          <span className={`${jakarta.className} text-[19px] font-bold tracking-[-0.01em] text-[#111]`}>Brickwise</span>
        </a>

        <nav className="hidden items-center gap-8 min-[760px]:flex" aria-label="Primary">
          <a href="#" className={`${inter.className} border-b-2 border-[#111] pb-[5px] pt-1 text-[14.5px] font-medium text-[#111]`}>
            Home
          </a>
          <a href="#" className={`${inter.className} pb-[5px] pt-1 text-[14.5px] text-[#8a8a8a] hover:text-[#111]`}>
            Properties
          </a>
          <a href="#" className={`${inter.className} pb-[5px] pt-1 text-[14.5px] text-[#8a8a8a] hover:text-[#111]`}>
            About
          </a>
          <a href="#" className={`${inter.className} pb-[5px] pt-1 text-[14.5px] text-[#8a8a8a] hover:text-[#111]`}>
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-[8px]">
          <a
            href="#"
            className={`${inter.className} hidden rounded-full border border-[#e2e2e2] bg-white px-[18px] py-[8px] text-[13px] font-semibold text-[#111] min-[560px]:inline-flex`}
          >
            Login
          </a>
          <a
            href="#"
            className={`${inter.className} inline-flex items-center gap-[6px] rounded-full bg-[#101012] px-[18px] py-[8px] text-[13px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            Join Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

function MapBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 45%), repeating-linear-gradient(0deg, rgba(0,0,0,0.035) 0, rgba(0,0,0,0.035) 1px, transparent 1px, transparent 90px), repeating-linear-gradient(90deg, rgba(0,0,0,0.035) 0, rgba(0,0,0,0.035) 1px, transparent 1px, transparent 120px), #fbfbfb",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.12) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.12) 100%)",
        }}
      />
      <div className="absolute inset-0 hidden min-[760px]:block select-none">
        <span className="absolute left-[16%] top-[32%] text-[8px] tracking-wide text-[#d0d0d0]">North Caldwell</span>
        <span className="absolute left-[28%] top-[42%] text-[7px] text-[#d4d4d4]">Cedar Grove</span>
        <span className="absolute left-[16%] top-[54%] text-[8px] text-[#d0d0d0]">Essex Fells</span>
        <span className="absolute left-[43%] top-[58%] text-[7px] text-[#d6d6d6]">Bloomfield</span>
        <span className="absolute left-[7%] top-[68%] text-[7px] text-[#d0d0d0]">Livingston</span>
        <span className="absolute left-[31%] top-[67%] text-[7px] font-medium text-[#cccccc]">City of Orange</span>
        <span className="absolute left-[38%] top-[72%] text-[6px] text-[#d8d8d8]">East Orange</span>
        <span className="absolute left-[16%] top-[82%] text-[6px] text-[#d6d6d6]">Maplewood</span>
        <span className="absolute left-[42%] top-[82%] text-[8px] font-medium text-[#c8c8c8]">Newark</span>
        <span className="absolute left-[62%] top-[78%] text-[6px] text-[#d6d6d6]">MANHATTAN</span>
        <span className="absolute left-[62%] top-[81%] text-[9px] font-light tracking-wide text-[#cccccc]">Empire State Building</span>
        <span className="absolute left-[68%] top-[86%] text-[8px] text-[#d0d0d0]">Jersey City</span>
        <span className="absolute left-[70%] top-[90%] text-[10px] font-medium tracking-wide text-[#c8c8c8]">New York</span>
        <span className="absolute right-[18%] top-[48%] text-[6px] text-[#d6d6d6]">Clifton</span>
        <span className="absolute right-[8%] top-[66%] text-[6px] text-[#d6d6d6]">Rivers Island</span>
        <span className="absolute left-[8%] top-[86%] text-[5px] text-[#d8d8d8]">Summit</span>
        <span className="absolute left-[38%] top-[84%] text-[5px] text-[#d8d8d8]">Irvington</span>
      </div>
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-white pb-[72px] pt-[48px] max-[1024px]:pb-[56px] max-[1024px]:pt-[36px] max-[560px]:pt-[24px] max-[560px]:pb-[36px]">
      <MapBackdrop />

      <div className="relative z-[1] mx-auto flex max-w-[1360px] flex-col items-center px-[48px] text-center max-[1024px]:px-[32px] max-[760px]:px-[20px] max-[560px]:px-[16px]">
        <motion.a
          href="#"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={`${inter.className} mb-[20px] inline-flex items-center gap-[8px] text-[13.5px] font-medium text-[#111] max-[560px]:mb-[14px]`}
        >
          <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#e05a3d]">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          What is Arrived?
        </motion.a>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className={`${jakarta.className} m-0 mb-[20px] max-w-[860px] text-[clamp(32px,4.4vw,64px)] font-bold leading-[1.06] tracking-[-0.03em] text-[#111] max-[760px]:!text-[30px] max-[560px]:!text-[26px]`}
        >
          Easily Invest in Real Estate
          <br />
          to Grow{" "}
          <span className="inline-flex translate-y-[1px] align-middle" aria-hidden="true">
            <span className="inline-flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full max-[1024px]:h-[28px] max-[1024px]:w-[28px] max-[560px]:h-[22px] max-[560px]:w-[22px]">
              <svg width="32" height="32" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="h-[32px] w-[32px] max-[1024px]:h-[28px] max-[1024px]:w-[28px]">
                <defs>
                  <clipPath id="re-circleClip">
                    <circle cx="20" cy="20" r="20" />
                  </clipPath>
                </defs>
                <g clipPath="url(#re-circleClip)">
                  <rect width="40" height="40" fill="#1c2b3a" />
                  <rect x="0" y="24" width="40" height="16" fill="#c88a4a" />
                  <path d="M8 18 L20 24 L34 10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M34 10 L34 17 M34 10 L27 10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
              </svg>
            </span>
          </span>{" "}
          Your Future
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className={`${inter.className} m-0 mb-[32px] max-w-[640px] text-[16px] leading-[1.6] text-[#666] max-[760px]:text-[14px] max-[560px]:text-[13px]`}
        >
          Take control of your financial future by diversifying your portfolio with
          <br className="max-[560px]:hidden" /> secure and high-yield real estate properties.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mb-[56px] flex items-center gap-0 rounded-full border border-[#ececec] bg-white px-[10px] py-[10px] pl-[28px] shadow-[0_12px_32px_rgba(0,0,0,0.1)] max-[760px]:flex-wrap max-[760px]:justify-center max-[560px]:w-full max-[560px]:max-w-[360px] max-[560px]:rounded-[20px] max-[560px]:px-[8px]"
        >
          <div className={`${inter.className} flex min-w-[124px] flex-col items-start px-[16px] py-[4px] text-left max-[560px]:min-w-0 max-[560px]:flex-1 max-[560px]:px-[10px]`}>
            <span className="mb-[2px] text-[11px] text-[#9a9a9a]">Location</span>
            <span className="flex items-center gap-[6px] text-[13.5px] font-semibold text-[#111] max-[560px]:text-[12px]">
              All Locations
              <svg className="h-3 w-3 shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="#9a9a9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <div className="h-[32px] w-px shrink-0 bg-[#e9e9e9] max-[760px]:hidden" />
          <div className={`${inter.className} flex min-w-[116px] flex-col items-start px-[16px] py-[4px] text-left max-[560px]:min-w-0 max-[560px]:flex-1 max-[560px]:px-[10px]`}>
            <span className="mb-[2px] text-[11px] text-[#9a9a9a]">Property Type</span>
            <span className="flex items-center gap-[6px] text-[13.5px] font-semibold text-[#111] max-[560px]:text-[12px]">
              All
              <svg className="h-3 w-3 shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="#9a9a9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <div className="h-[32px] w-px shrink-0 bg-[#e9e9e9] max-[760px]:hidden" />
          <div className={`${inter.className} flex min-w-[110px] flex-col items-start px-[16px] py-[4px] text-left max-[560px]:min-w-0 max-[560px]:flex-1 max-[560px]:px-[10px]`}>
            <span className="mb-[2px] text-[11px] text-[#9a9a9a]">Budget</span>
            <span className="text-[13.5px] font-semibold text-[#111] max-[560px]:text-[12px]">$500 - $1200</span>
          </div>
          <button
            aria-label="Search"
            className="ml-[6px] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#101012] transition-transform hover:scale-[1.04] active:scale-[0.96] max-[560px]:h-[32px] max-[560px]:w-[32px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
              <path d="M21 21l-4.3-4.3" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-[1] hidden min-[760px]:block" aria-hidden="true">
          <div className="absolute h-[32px] w-[32px] rounded-full border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] bg-[#8b7355] flex items-center justify-center overflow-hidden" style={{ left: "13.5%", top: "57%" }}>
            <span className="h-full w-full block bg-[#8b7355]"></span>
          </div>
          <div className="absolute h-[32px] w-[32px] rounded-full border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] bg-[#6a8a9a] flex items-center justify-center overflow-hidden" style={{ left: "30.5%", top: "56%" }}>
            <span className="h-full w-full block bg-[#6a8a9a]"></span>
          </div>
          <div className="absolute h-[32px] w-[32px] rounded-full border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] bg-[#9a8b7a] flex items-center justify-center overflow-hidden" style={{ left: "31.5%", top: "70%" }}>
            <span className="h-full w-full block bg-[#9a8b7a]"></span>
          </div>
          <div className="absolute h-[32px] w-[32px] rounded-full border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] bg-[#6b7a6b] flex items-center justify-center overflow-hidden" style={{ left: "20.5%", top: "72%" }}>
            <span className="h-full w-full block bg-[#6b7a6b]"></span>
          </div>
          <div className="absolute h-[32px] w-[32px] rounded-full border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] bg-[#7a6a8a] flex items-center justify-center overflow-hidden" style={{ right: "10.5%", top: "57.5%" }}>
            <span className="h-full w-full block bg-[#7a6a8a]"></span>
          </div>
          <div className="absolute h-[32px] w-[32px] rounded-full border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] bg-[#5a7a8a] flex items-center justify-center overflow-hidden" style={{ right: "8.5%", top: "75%" }}>
            <span className="h-full w-full block bg-[#5a7a8a]"></span>
          </div>
          <div className="absolute flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-white bg-[#dcdcdc] shadow-[0_4px_10px_rgba(0,0,0,0.12)]" style={{ right: "12.5%", top: "67%" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 21v-7a8 8 0 0116 0v7" stroke="#333" strokeWidth="1.6" />
              <rect x="2" y="19" width="20" height="3" rx="1" fill="#333" />
            </svg>
          </div>
        </div>

        <motion.article
          initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
          animate={reduce ? {} : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="relative z-[2] mt-1 w-[clamp(218px,18vw,280px)] rounded-[16px] bg-white text-left shadow-[0_20px_40px_rgba(0,0,0,0.14)]"
        >
          <div className="relative h-[clamp(106px,9vw,140px)] overflow-hidden rounded-t-[16px]">
            <img src="/real-estate-landing/hero-main.jpg" alt="Luxury Oceanfront Bungalow" className="h-full w-full object-cover" />
            <span className={`${inter.className} absolute right-[7px] top-[7px] rounded-full bg-white px-[8px] py-[3px] text-[9px] font-semibold text-[#111]`}>New</span>
            <div className="absolute bottom-[6px] left-0 right-0 flex justify-center gap-[3px]">
              <span className="h-1 w-[10px] rounded-[3px] bg-white" />
              <span className="h-1 w-1 rounded-full bg-white/55" />
              <span className="h-1 w-1 rounded-full bg-white/55" />
              <span className="h-1 w-1 rounded-full bg-white/55" />
              <span className="h-1 w-1 rounded-full bg-white/55" />
            </div>
          </div>
          <div className="px-[12px] pb-[12px] pt-[10px]">
            <h3 className={`${jakarta.className} m-0 mb-[4px] whitespace-nowrap text-[13px] font-bold leading-none text-[#111]`}>Luxury Oceanfront Bungalow</h3>
            <p className={`${inter.className} mb-[7px] flex items-center gap-[3px] text-[10px] text-[#9a9a9a]`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22s7-7.58 7-12.5A7 7 0 105 9.5C5 14.42 12 22 12 22z" stroke="#8a8a8a" strokeWidth="1.6" />
                <circle cx="12" cy="9.5" r="2.3" stroke="#8a8a8a" strokeWidth="1.6" />
              </svg>
              Catonsville, MD
            </p>
            <div className={`${inter.className} mb-[10px] flex flex-wrap items-center gap-[5px] text-[9px] text-[#555]`}>
              <span className="inline-flex items-center gap-[3px]">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 4h6v6M20 4h-6v6M4 20h6v-6M20 20h-6v-6" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                1,500 sq.ft.
              </span>
              <span className="text-[#ddd]">|</span>
              <span className="inline-flex items-center gap-[3px]">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 18v-5a2 2 0 012-2h14a2 2 0 012 2v5M3 18v2M21 18v2M6 11V8a2 2 0 012-2h2a2 2 0 012 2v3" stroke="#555" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                3 bed
              </span>
              <span className="text-[#ddd]">|</span>
              <span className="inline-flex items-center gap-[3px]">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h16M6 12V7a2 2 0 012-2h2M6 20l-1-4M18 20l1-4" stroke="#555" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                2 bath
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className={`${jakarta.className} m-0 text-[13px] font-bold text-[#111]`}>
                520,000 <span className={`${inter.className} text-[10px] font-semibold text-[#3fa24b]`}>(10.8%)</span>
              </p>
              <a
                href="#"
                className={`${inter.className} rounded-full border border-[#e4e4e4] bg-white px-[11px] py-[6px] text-[10px] font-semibold text-[#111] hover:bg-[#f6f6f6]`}
              >
                Invest Now
              </a>
            </div>
          </div>
          <div className="absolute -bottom-[24px] left-1/2 flex h-[24px] w-[24px] -translate-x-1/2 rotate-45 items-center justify-center rounded-[50%_50%_50%_0] bg-[#101012] shadow-[0_6px_14px_rgba(0,0,0,0.2)]">
            <span className={`${inter.className} -rotate-45 text-[10px] font-semibold text-white`}>20</span>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function StatsBar() {
  const reduce = useReducedMotion();
  return (
    <section className="border-y border-[#ebebeb] bg-white" aria-label="Statistics">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[1360px] flex-wrap items-center px-[48px] py-[32px] max-[1024px]:px-[32px] max-[760px]:px-[20px] max-[560px]:px-[16px] min-[760px]:flex-nowrap max-[760px]:gap-y-5"
      >
        <div className="flex flex-1 basis-[45%] items-baseline gap-[10px] min-[760px]:basis-0">
          <span className={`${jakarta.className} whitespace-nowrap text-[clamp(28px,2.4vw,40px)] font-bold tracking-[-0.01em] text-[#111] max-[560px]:text-[26px]`}>$1B+</span>
          <span className={`${inter.className} text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.03em] text-[#9a9a9a]`}>
            TOTAL
            <br />
            INVESTED
          </span>
        </div>
        <div className="hidden h-8 w-px shrink-0 bg-[#ebebeb] min-[760px]:mx-5 min-[760px]:block" />
        <div className="flex flex-1 basis-[45%] items-baseline gap-[10px] min-[760px]:basis-0">
          <span className={`${jakarta.className} whitespace-nowrap text-[clamp(28px,2.4vw,40px)] font-bold tracking-[-0.01em] text-[#111] max-[560px]:text-[26px]`}>20K+</span>
          <span className={`${inter.className} text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.03em] text-[#9a9a9a]`}>
            HAPPY
            <br />
            CUSTOMERS
          </span>
        </div>
        <div className="hidden h-8 w-px shrink-0 bg-[#ebebeb] min-[760px]:mx-5 min-[760px]:block" />
        <div className="flex flex-1 basis-[45%] items-baseline gap-[10px] min-[760px]:basis-0">
          <span className={`${jakarta.className} whitespace-nowrap text-[clamp(28px,2.4vw,40px)] font-bold tracking-[-0.01em] text-[#111] max-[560px]:text-[26px]`}>150K+</span>
          <span className={`${inter.className} text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.03em] text-[#9a9a9a]`}>
            PROPERTY
            <br />
            LISTED
          </span>
        </div>
        <div className="hidden h-8 w-px shrink-0 bg-[#ebebeb] min-[760px]:mx-5 min-[760px]:block" />
        <div className="flex flex-1 basis-[45%] items-baseline gap-[10px] min-[760px]:basis-0">
          <span className={`${jakarta.className} whitespace-nowrap text-[clamp(28px,2.4vw,40px)] font-bold tracking-[-0.01em] text-[#111] max-[560px]:text-[26px]`}>8–12%</span>
          <span className={`${inter.className} text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.03em] text-[#9a9a9a]`}>
            AVERAGE
            <br />
            RETURN VALUE
          </span>
        </div>
      </motion.div>
    </section>
  );
}

function Features() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-[64px] max-[760px]:py-[40px]" aria-label="Why choose us">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-[48px] max-[1024px]:px-[32px] max-[760px]:px-[20px] max-[560px]:px-[16px] max-[760px]:grid-cols-1 min-[760px]:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <p className={`${inter.className} m-0 mb-[14px] text-[12px] font-medium text-[#e05a3d]`}>- Reason to choose us</p>
          <h2 className={`${jakarta.className} m-0 max-w-[380px] text-[clamp(28px,2.6vw,40px)] font-bold leading-[1.2] tracking-[-0.01em] text-[#111] max-[560px]:text-[24px]`}>
            Discover the value behind smart property investments
          </h2>
          <div className="mt-auto pt-[48px] max-[760px]:pt-6">
            <p className={`${inter.className} m-0 mb-5 max-w-[360px] text-[14px] leading-[1.65] text-[#555] max-[560px]:text-[13px]`}>
              We handle the heavy lifting by conducting in-depth research, analyzing the numbers, and finding high-performing properties for you.
            </p>
            <a
              href="#"
              className={`${inter.className} inline-flex items-center gap-[6px] rounded-full bg-[#101012] px-[20px] py-[12px] pl-6 text-[14px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]`}
            >
              Find the best for you
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 min-[560px]:grid-cols-2">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="rounded-[24px] bg-[#f6f6f6] px-6 pb-6 pt-[16px]"
            >
              <div className={`${inter.className} mb-[22px] flex items-center gap-[7px] rounded-full bg-white px-[12px] py-[8px] text-[11px] text-[#9a9a9a]`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" stroke="#9a9a9a" strokeWidth="1.8" />
                  <path d="M21 21l-4.3-4.3" stroke="#9a9a9a" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Search with &ldquo;AI&rdquo;
              </div>
              <h3 className={`${jakarta.className} m-0 mb-[6px] text-[14px] font-bold leading-[1.3] text-[#111]`}>Smart Suggestions</h3>
              <p className={`${inter.className} m-0 max-w-[190px] text-[11px] leading-[1.5] text-[#555]`}>AI scans listings to find your best-fit property.</p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="rounded-[24px] bg-[#f6f6f6] px-6 pb-6 pt-[16px]"
            >
              <div className="mb-[24px] flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#101012]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V5l8-3z" fill="#fff" />
                  <path d="M9 12l2 2 4-4" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={`${jakarta.className} m-0 mb-[6px] text-[14px] font-bold leading-[1.3] text-[#111]`}>99% Trusted Investor</h3>
              <p className={`${inter.className} m-0 max-w-[190px] text-[11px] leading-[1.5] text-[#555]`}>Users trust our picks and return for more deals.</p>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="relative h-[180px] overflow-hidden rounded-[24px] bg-[#f6f6f6] p-5 max-[560px]:h-auto max-[560px]:min-h-[160px]"
          >
            <div className="relative h-full max-[560px]:flex max-[560px]:flex-col max-[560px]:gap-5">
              <div
                className="pointer-events-none absolute -left-4 -top-4 h-[120px] w-[180px]"
                aria-hidden="true"
                style={{
                  backgroundImage: "radial-gradient(circle, #d7d7d7 1.2px, transparent 1.4px)",
                  backgroundSize: "9px 9px",
                  WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 25% 15%, black 35%, transparent 80%)",
                  maskImage: "radial-gradient(ellipse 100% 100% at 25% 15%, black 35%, transparent 80%)",
                }}
              />
              <div className="absolute left-[42px] top-[10px] z-[2] flex items-center gap-[4px] rounded-full bg-[#e05a3d] px-[9px] py-[4px] text-[10px] font-bold text-white shadow-[0_5px_12px_rgba(224,90,61,0.32)] max-[560px]:left-0 max-[560px]:top-0 max-[560px]:relative">
                <span className="h-[4px] w-[4px] rounded-full bg-white" />
                $147
              </div>
              <svg className="absolute left-[94px] top-[24px] h-[48px] w-[80px] max-[560px]:left-[54px] max-[560px]:top-[-6px] max-[560px]:relative" width="90" height="60" viewBox="0 0 90 60" fill="none" aria-hidden="true">
                <path d="M8 8 C 40 50, 55 50, 82 20" stroke="#c9c9c9" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                <path d="M74 14 L82 20 L74 26" stroke="#c9c9c9" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="absolute bottom-4 left-4 max-w-[170px] max-[560px]:relative max-[560px]:bottom-auto max-[560px]:left-auto">
                <h3 className={`${jakarta.className} m-0 mb-[4px] text-[14px] font-bold leading-[1.3] text-[#111]`}>Invest Where it Matters</h3>
                <p className={`${inter.className} m-0 max-w-[170px] text-[11px] leading-[1.5] text-[#555]`}>We pinpoint High-demand, high-grow areas backed by market data.</p>
              </div>

              <div className="absolute -right-4 top-[8px] h-[132px] w-[132px] max-[560px]:relative max-[560px]:right-auto max-[560px]:top-auto max-[560px]:ml-auto max-[560px]:h-[128px]">
                <div className="absolute bottom-[-12px] right-[-6px] h-[118px] w-[118px] rotate-[10deg] overflow-hidden rounded-[10px] bg-[#e2e2e2] shadow-[0_8px_20px_rgba(0,0,0,0.09)]" />
                <div className="absolute bottom-[-4px] right-[8px] h-[118px] w-[118px] -rotate-[5deg] overflow-hidden rounded-[10px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.09)]">
                  <img src="/real-estate-landing/hero-small.jpg" alt="Modern Architectural Marvel" className="h-[74px] w-full object-cover" />
                  <div className="px-[8px] py-[5px]">
                    <p className={`${jakarta.className} m-0 mb-[1px] overflow-hidden text-ellipsis whitespace-nowrap text-[8.5px] font-bold text-[#111]`}>Modern Architectural Mar...</p>
                    <p className={`${inter.className} m-0 text-[8px] text-[#9a9a9a]`}>Catonsville, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function RealEstateScreen() {
  return (
    <div className={`min-h-screen overflow-x-clip bg-white antialiased ${inter.className}`}>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Features />
      </main>
    </div>
  );
}
