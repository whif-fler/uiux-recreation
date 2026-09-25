/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import DottedMap from "dotted-map";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-[#ebebeb] bg-white/95 backdrop-blur-[8px] supports-[backdrop-filter:blur(8px)]:bg-white/90">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-[48px] max-[1024px]:px-[32px] max-[760px]:px-[20px] max-[560px]:px-[16px]">
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
          <a href="#" className={`${inter.className} border-b-2 border-[#111] pb-[5px] pt-1 text-[14.5px] font-medium text-[#111]`}>Home</a>
          <a href="#" className={`${inter.className} pb-[5px] pt-1 text-[14.5px] text-[#8a8a8a] transition-colors hover:text-[#111]`}>Properties</a>
          <a href="#" className={`${inter.className} pb-[5px] pt-1 text-[14.5px] text-[#8a8a8a] transition-colors hover:text-[#111]`}>About</a>
          <a href="#" className={`${inter.className} pb-[5px] pt-1 text-[14.5px] text-[#8a8a8a] transition-colors hover:text-[#111]`}>Contact</a>
        </nav>

        <div className="flex items-center gap-[8px]">
          <a href="#" className={`${inter.className} hidden rounded-full border border-[#e2e2e2] bg-white px-[18px] py-[8px] text-[13px] font-semibold text-[#111] shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all hover:bg-[#fafafa] hover:border-[#d6d6d6] active:scale-[0.98] min-[560px]:inline-flex`}>Login</a>
          <a href="#" className={`${inter.className} group inline-flex items-center gap-[6px] rounded-full bg-[#101012] px-[18px] py-[8px] text-[13px] font-semibold text-white shadow-[0_4px_12px_rgba(16,16,18,0.14)] transition-all hover:bg-black hover:shadow-[0_6px_16px_rgba(16,16,18,0.18)] active:scale-[0.98]`}>
            Join Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-[1px]"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)} className="ml-1 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#e2e2e2] bg-white text-[#111] shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all hover:bg-[#f6f6f6] active:scale-[0.97] min-[760px]:hidden">
            <span className="relative block h-[14px] w-[16px]">
              <span className={`absolute left-0 top-0 block h-[2px] w-full rounded-full bg-[#111] transition-all duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[6px] block h-[2px] w-full rounded-full bg-[#111] transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 top-[12px] block h-[2px] w-full rounded-full bg-[#111] transition-all duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] }} className="absolute inset-x-0 top-[68px] z-20 border-t border-[#ebebeb] bg-white shadow-[0_12px_24px_rgba(0,0,0,0.08)] min-[760px]:hidden">
            <nav className={`${inter.className} flex flex-col px-[20px] py-[10px] max-[560px]:px-[16px]`} aria-label="Mobile">
              <a href="#" className="border-b border-[#f0f0f0] py-[14px] text-[15px] font-semibold text-[#111]">Home</a>
              <a href="#" className="border-b border-[#f0f0f0] py-[14px] text-[15px] text-[#555] hover:text-[#111]">Properties</a>
              <a href="#" className="border-b border-[#f0f0f0] py-[14px] text-[15px] text-[#555] hover:text-[#111]">About</a>
              <a href="#" className="border-b border-[#f0f0f0] py-[14px] text-[15px] text-[#555] hover:text-[#111]">Contact</a>
              <div className="flex gap-2 pt-[14px] min-[560px]:hidden">
                <a href="#" className="flex-1 rounded-full border border-[#e2e2e2] bg-white py-[10px] text-center text-[14px] font-semibold text-[#111]">Login</a>
                <a href="#" className="flex-1 rounded-full bg-[#101012] py-[10px] text-center text-[14px] font-semibold text-white">Join Now</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MapBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] via-white to-white" />
      <img src="/real-estate-landing/map-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" style={{ filter:"grayscale(100%) contrast(1.08) brightness(1.2)", opacity:0.30, WebkitMaskImage:"linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 58%, rgba(0,0,0,0) 88%)", maskImage:"linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 58%, rgba(0,0,0,0) 88%)"}} />
      <div className="absolute inset-0" style={{ background:"radial-gradient(900px 420px at 50% -8%, rgba(255,122,69,0.10), transparent 62%), radial-gradient(700px 500px at 90% 30%, rgba(22,22,22,0.04), transparent 60%)"}} />
      {/* subtle amber orb */}
      <div className="absolute left-1/2 top-[18%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,122,69,0.08),transparent_70%)] blur-[1px]" />
      <div className="absolute inset-0 hidden select-none min-[760px]:block">
        <span className="absolute left-[16%] top-[30%] text-[7.5px] font-medium tracking-[0.08em] text-[#c8c8c8]/90">NORTH CALDWELL</span>
        <span className="absolute left-[28%] top-[40%] text-[7px] tracking-wide text-[#d1d1d1]">Cedar Grove</span>
        <span className="absolute left-[16%] top-[52%] text-[7.5px] tracking-wide text-[#c9c9c9]">Essex Fells</span>
        <span className="absolute left-[43%] top-[56%] text-[7px] text-[#d3d3d3]">Bloomfield</span>
        <span className="absolute left-[31%] top-[65%] text-[7px] font-medium text-[#c2c2c2]">City of Orange</span>
        <span className="absolute left-[42%] top-[80%] text-[8px] font-medium tracking-wide text-[#bdbdbd]">Newark</span>
        <span className="absolute left-[62%] top-[76%] text-[6px] tracking-[0.14em] text-[#c9c9c9]">MANHATTAN</span>
        <span className="absolute left-[62%] top-[79%] text-[8.5px] font-light tracking-wide text-[#bdbdbd]">Empire State Building</span>
        <span className="absolute left-[70%] top-[88%] text-[9px] font-medium tracking-[0.06em] text-[#bcbcbc]">New York</span>
      </div>
    </div>
  );
}

function DottedMapCard() {
  const svgString = useMemo(() => {
    try {
      const map = new DottedMap({ height: 42, grid: "diagonal", countries: ["USA"] });
      map.addPin({ lat: 40.7128, lng: -74.006, svgOptions: { color: "#E05A3D", radius: 0.44 } });
      return map.getSVG({ radius: 0.22, color: "#D5D5D3", shape: "circle", backgroundColor: "transparent" });
    } catch { return ""; }
  }, []);
  if (!svgString) return null;
  return (
    <div className="pointer-events-none absolute -left-4 -top-4 h-[128px] w-[208px] opacity-[0.92] max-[560px]:left-0 max-[560px]:top-0 max-[560px]:h-[110px] max-[560px]:w-[180px] max-[560px]:relative" aria-hidden="true">
      <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`} alt="" className="h-full w-full object-contain object-left-top" draggable={false} />
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-white pb-[64px] pt-[48px] max-[1024px]:pb-[48px] max-[1024px]:pt-[36px] max-[560px]:pt-[24px] max-[560px]:pb-8">
      <MapBackdrop />
      <div className="relative z-[1] mx-auto flex max-w-[1240px] flex-col items-center px-6 text-center max-[1024px]:px-6 max-[760px]:px-5 max-[560px]:px-4">
        <motion.div initial={reduce?false:{opacity:0, y:10}} animate={reduce?{}:{opacity:1, y:0}} transition={{duration:0.45}} className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-1.5 py-1.5 pr-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)] max-[560px]:mb-4">
          <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#E05A3D] shadow-[0_2px_8px_rgba(224,90,61,0.35)]"><svg width="9" height="9" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg></span>
          <span className={`${inter.className} text-[13px] font-semibold tracking-[-0.01em] text-[#1a1a1e]`}>What is Arrived?</span>
          <span className="hidden h-3 w-px bg-black/10 sm:block" />
          <span className={`${inter.className} hidden text-[12px] font-medium text-[#8a8a90] sm:inline`}>Fractional ownership, zero hassle.</span>
        </motion.div>

        <motion.h1 initial={reduce?false:{opacity:0, y:16}} animate={reduce?{}:{opacity:1, y:0}} transition={{duration:0.55, delay:0.06, ease:[0.32,0.72,0,1]}} className={`${jakarta.className} m-0 mb-4 max-w-[820px] text-balance text-[clamp(32px,5vw,62px)] font-[800] leading-[0.96] tracking-[-0.035em] text-[#0F0F11] max-[760px]:!text-[34px] max-[560px]:!text-[28px]`}>
          Easily invest in real estate
          <br className="hidden sm:block" />
          to grow{" "}
          <span className="inline-flex translate-y-[3px] align-middle">
            <span className="inline-flex h-[30px] w-[56px] items-center justify-center overflow-hidden rounded-full border border-white shadow-[0_2px_10px_rgba(0,0,0,0.12)] max-[1024px]:h-[26px] max-[1024px]:w-[50px] max-[560px]:h-[22px] max-[560px]:w-[40px]">
              <svg width="112" height="60" viewBox="0 0 104 56" xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[56px] max-[1024px]:h-[26px] max-[1024px]:w-[50px] max-[560px]:h-[22px] max-[560px]:w-[40px]">
                <defs><clipPath id="re-pillClip2"><rect x="0" y="0" width="104" height="56" rx="28"/></clipPath></defs>
                <g clipPath="url(#re-pillClip2)"><image href="/real-estate-landing/hero-small.jpg" width="104" height="56" preserveAspectRatio="xMidYMid slice"/><path d="M8 18 L16 12 L24 18 L34 9 L42 14" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M38 8 L42 14 L36 16" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></g>
              </svg>
            </span>
          </span>{" "}
          your future
        </motion.h1>

        <motion.p initial={reduce?false:{opacity:0, y:10}} animate={reduce?{}:{opacity:1, y:0}} transition={{duration:0.45, delay:0.12}} className={`${inter.className} m-0 mb-8 max-w-[560px] text-balance text-[15.5px] leading-[1.65] text-[#6B6B70] max-[760px]:text-[14px] max-[560px]:text-[13.5px]`}>
          Take control of your financial future by diversifying into secure, high-yield properties — curated and vetted for you.
        </motion.p>

        {/* — search bar — double bezel */}
        <motion.div initial={reduce?false:{opacity:0, y:14}} animate={reduce?{}:{opacity:1, y:0}} transition={{duration:0.5, delay:0.16, ease:[0.32,0.72,0,1]}} className="mb-[52px] max-[560px]:mb-8 max-[560px]:w-full max-[560px]:max-w-[360px]">
          <div className="flex items-center gap-1 rounded-full bg-white p-2 pl-2 shadow-[0_12px_36px_rgba(16,16,18,0.10),0_1px_3px_rgba(16,16,18,0.07)] ring-1 ring-black/[0.07] max-[760px]:flex-wrap max-[760px]:justify-center max-[560px]:rounded-[22px] max-[560px]:p-2">
            <div className="flex items-center gap-0 max-[560px]:w-full">
              <div className={`${inter.className} flex min-w-[132px] flex-col items-start rounded-full px-5 py-2 text-left transition-colors hover:bg-[#F8F8F7] max-[560px]:min-w-0 max-[560px]:flex-1 max-[560px]:px-4`}>
                <span className="mb-[1px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9A9AA0]">Location</span>
                <span className="flex items-center gap-1.5 text-[13.5px] font-semibold text-[#111113] max-[560px]:text-[12.5px]">All Locations <svg className="h-3 w-3 text-[#9A9AA0]" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              </div>
              <div className="h-8 w-px shrink-0 bg-black/[0.08] max-[760px]:hidden" />
              <div className={`${inter.className} flex min-w-[122px] flex-col items-start rounded-full px-5 py-2 text-left transition-colors hover:bg-[#F8F8F7] max-[560px]:min-w-0 max-[560px]:flex-1 max-[560px]:px-4`}>
                <span className="mb-[1px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9A9AA0]">Property Type</span>
                <span className="flex items-center gap-1.5 text-[13.5px] font-semibold text-[#111113] max-[560px]:text-[12.5px]">All <svg className="h-3 w-3 text-[#9A9AA0]" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              </div>
              <div className="h-8 w-px shrink-0 bg-black/[0.08] max-[760px]:hidden" />
              <div className={`${inter.className} flex min-w-[118px] flex-col items-start rounded-full px-5 py-2 text-left max-[560px]:min-w-0 max-[560px]:flex-1 max-[560px]:px-4`}>
                <span className="mb-[1px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9A9AA0]">Budget</span>
                <span className="text-[13.5px] font-semibold text-[#111113] max-[560px]:text-[12.5px]">$500 — $1,200</span>
              </div>
            </div>
            <button aria-label="Search" className="ml-1 flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#111113] text-white shadow-[0_6px_16px_rgba(16,16,18,0.22)] transition-all hover:bg-black hover:scale-[1.02] active:scale-[0.97] max-[560px]:h-10 max-[560px]:w-10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/><path d="M21 21l-4.2-4.2" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <p className={`${inter.className} mt-2.5 hidden text-center text-[11px] font-medium text-[#9A9AA0] sm:block`}>342 properties · Updated 2 hours ago · No brokerage fees</p>
        </motion.div>

        {/* decorative avatars */}
        <div className="pointer-events-none absolute inset-0 z-[1] hidden min-[900px]:block" aria-hidden="true">
          <span className="absolute rounded-full bg-white p-[3px] shadow-[0_8px_20px_rgba(0,0,0,0.12)]" style={{left:"10%", top:"54%"}}><img src="/real-estate-landing/hero-small.jpg" alt="" className="h-[62px] w-[62px] rounded-full object-cover" /></span>
          <span className="absolute rounded-full bg-white p-[3px] shadow-[0_8px_20px_rgba(0,0,0,0.12)]" style={{left:"28.5%", top:"53.5%"}}><img src="/real-estate-landing/hero-main.jpg" alt="" className="h-[62px] w-[62px] rounded-full object-cover" /></span>
          <span className="absolute rounded-full bg-white p-[3px] shadow-[0_8px_20px_rgba(0,0,0,0.12)]" style={{left:"29.5%", top:"67%"}}><img src="/real-estate-landing/hero-small.jpg" alt="" className="h-[62px] w-[62px] rounded-full object-cover" /></span>
          <span className="absolute rounded-full bg-white p-[3px] shadow-[0_8px_20px_rgba(0,0,0,0.12)]" style={{left:"18.5%", top:"70%"}}><img src="/real-estate-landing/hero-main.jpg" alt="" className="h-[62px] w-[62px] rounded-full object-cover" /></span>
          <span className="absolute rounded-full bg-white p-[3px] shadow-[0_8px_20px_rgba(0,0,0,0.12)]" style={{right:"11.5%", top:"54%"}}><img src="/real-estate-landing/hero-small.jpg" alt="" className="h-[62px] w-[62px] rounded-full object-cover" /></span>
          <span className="absolute rounded-full bg-white p-[3px] shadow-[0_8px_20px_rgba(0,0,0,0.12)]" style={{right:"8.5%", top:"72%"}}><img src="/real-estate-landing/hero-main.jpg" alt="" className="h-[62px] w-[62px] rounded-full object-cover" /></span>
          <span className="absolute flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white bg-[#EDEDED] shadow-[0_6px_14px_rgba(0,0,0,0.12)]" style={{right:"13.2%", top:"64.5%"}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 21v-7a8 8 0 0116 0v7" stroke="#333" strokeWidth="1.6"/><rect x="2" y="19" width="20" height="3" rx="1" fill="#333"/></svg>
          </span>
        </div>

        {/* — featured property card — double bezel */}
        <motion.div initial={reduce?false:{opacity:0, y:18, scale:0.98}} animate={reduce?{}:{opacity:1, y:0, scale:1}} transition={{duration:0.6, delay:0.28, ease:[0.32,0.72,0,1]}} className="relative z-[2] w-[min(100%,520px)]">
          <div className="rounded-[22px] bg-white p-[7px] shadow-[0_24px_56px_rgba(16,16,18,0.14),0_1px_4px_rgba(16,16,18,0.06)] ring-1 ring-black/[0.06]">
            <div className="overflow-hidden rounded-[16px] bg-white">
              <div className="relative h-[clamp(172px,13vw,242px)] overflow-hidden">
                <img src="/real-estate-landing/hero-main.jpg" alt="Luxury Oceanfront Bungalow" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                <span className={`${inter.className} absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#111113] shadow-[0_2px_8px_rgba(0,0,0,0.12)] backdrop-blur`}>● New</span>
                <span className={`${inter.className} absolute right-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-semibold text-[#111113] shadow-[0_2px_8px_rgba(0,0,0,0.12)] backdrop-blur`}>Save</span>
                <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5">
                  <span className="h-1.5 w-5 rounded-full bg-white shadow" /><span className="h-1.5 w-1.5 rounded-full bg-white/60" /><span className="h-1.5 w-1.5 rounded-full bg-white/60" /><span className="h-1.5 w-1.5 rounded-full bg-white/60" /><span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                </div>
              </div>
              <div className="px-4 pb-3.5 pt-3.5">
                <h3 className={`${jakarta.className} m-0 mb-1.5 text-[14px] font-bold tracking-[-0.015em] text-[#0F0F11]`}>Luxury Oceanfront Bungalow</h3>
                <p className={`${inter.className} mb-2.5 flex items-center gap-1.5 text-[11px] font-medium text-[#8A8A90]`}><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-7.58 7-12.5A7 7 0 105 9.5C5 14.42 12 22 12 22z" stroke="#9A9AA0" strokeWidth="1.5"/><circle cx="12" cy="9.5" r="2.2" stroke="#9A9AA0" strokeWidth="1.5"/></svg> Catonsville, MD <span className="ml-1 hidden items-center gap-1 rounded-full bg-[#F0FDF4] px-2 py-0.5 text-[10px] font-semibold text-[#15803D] sm:inline-flex">● Open funding</span></p>
                <div className={`${inter.className} mb-3.5 flex flex-wrap items-center gap-2 text-[11px] font-medium text-[#3a3a3e]`}>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6F6F5] px-2.5 py-1"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M4 4h6v6M20 4h-6v6M4 20h6v-6M20 20h-6v-6" stroke="#6B6B70" strokeWidth="1.5" strokeLinecap="round"/></svg> 1,500 sq.ft.</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6F6F5] px-2.5 py-1"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M3 18v-5a2 2 0 012-2h14a2 2 0 012 2v5" stroke="#6B6B70" strokeWidth="1.5" strokeLinecap="round"/></svg> 3 bed</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6F6F5] px-2.5 py-1"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M6 12V7a2 2 0 012-2h2" stroke="#6B6B70" strokeWidth="1.5" strokeLinecap="round"/></svg> 2 bath</span>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-black/[0.06] pt-3">
                  <div className="flex items-baseline gap-2">
                    <p className={`${jakarta.className} m-0 text-[15px] font-bold tracking-[-0.015em] text-[#0F0F11]`}>$520,000</p>
                    <span className={`${inter.className} rounded-full bg-[#E8F5E9] px-2 py-0.5 text-[11px] font-bold text-[#1B8A3D]`}>+10.8%</span>
                  </div>
                  <a href="#" className={`${inter.className} inline-flex items-center gap-1 rounded-full bg-[#0F0F11] px-4 py-2 text-[12.5px] font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.16)] transition-all hover:bg-black hover:translate-y-[-1px] active:translate-y-0`}>Invest Now <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg></a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-[18px] left-1/2 flex h-[28px] w-[28px] -translate-x-1/2 -rotate-45 items-center justify-center rounded-[50%_50%_50%_0] bg-[#0F0F11] shadow-[0_8px_18px_rgba(0,0,0,0.22)] ring-1 ring-white/20"><span className={`${mono.className} rotate-45 text-[10px] font-bold text-white`}>20</span></div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBar() {
  const reduce = useReducedMotion();
  return (
    <section className="border-y border-black/[0.06] bg-[#FCFCFB]/80 backdrop-blur-[6px]" aria-label="Statistics">
      <motion.div initial={reduce?false:{opacity:0, y:10}} whileInView={reduce?{}:{opacity:1, y:0}} viewport={{once:true, margin:"-60px"}} transition={{duration:0.5, ease:[0.32,0.72,0,1]}} className="mx-auto flex max-w-[1240px] flex-wrap items-stretch gap-0 px-6 py-0 max-[1024px]:px-6 max-[760px]:px-5 max-[560px]:px-4">
        {[
          { value: "$1B+", label: "Total invested", sub: "since 2019" },
          { value: "20K+", label: "Happy investors", sub: "4.9/5 rating" },
          { value: "150K+", label: "Properties listed", sub: "32 cities" },
          { value: "8–12%", label: "Average return", sub: "annualized" },
        ].map((s, i) => (
          <div key={s.value} className="flex flex-1 basis-[45%] items-center gap-4 py-7 min-[760px]:basis-0 min-[760px]:justify-center min-[760px]:py-8">
            <div className="flex flex-col">
              <span className={`${jakarta.className} text-[30px] font-[800] leading-none tracking-[-0.03em] text-[#0F0F11] max-[560px]:text-[24px]`}>{s.value}</span>
              <span className={`${mono.className} mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#9A9AA0]`}>{s.sub}</span>
            </div>
            <div className="flex flex-col gap-0.5 border-l border-black/[0.08] pl-4">
              <span className={`${inter.className} text-[11px] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-[#6B6B70]`}>{s.label.split(" ")[0]}<br/>{s.label.split(" ").slice(1).join(" ")}</span>
            </div>
            {i < 3 && <div className="hidden h-10 w-px shrink-0 self-center bg-black/[0.06] min-[760px]:ml-6 min-[760px]:block" />}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Features() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[#F8F8F7] py-[72px] max-[760px]:py-12" aria-label="Why choose us">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-6 max-[1024px]:px-6 max-[760px]:px-5 max-[560px]:px-4 max-[760px]:grid-cols-1 min-[760px]:grid-cols-[0.9fr_1.15fr]">
        <motion.div initial={reduce?false:{opacity:0, y:16}} whileInView={reduce?{}:{opacity:1, y:0}} viewport={{once:true, margin:"-60px"}} transition={{duration:0.55, ease:[0.32,0.72,0,1]}} className="flex flex-col">
          <span className={`${mono.className} mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#E05A3D]/15 bg-[#FFF1ED] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#E05A3D]`}><span className="h-1.5 w-1.5 rounded-full bg-[#E05A3D] animate-pulse" /> Reason to choose us</span>
          <h2 className={`${jakarta.className} m-0 max-w-[380px] text-[clamp(28px,2.8vw,40px)] font-[800] leading-[1.08] tracking-[-0.03em] text-[#0F0F11] max-[560px]:text-[26px]`}>Discover the value behind smart property investments</h2>
          <div className="mt-auto pt-10 max-[760px]:pt-6">
            <p className={`${inter.className} m-0 mb-6 max-w-[360px] text-[14px] leading-[1.7] text-[#5A5A60] max-[560px]:text-[13.5px]`}>We handle the heavy lifting — research, underwriting, and sourcing high-performing properties so you don’t have to.</p>
            <a href="#" className={`${inter.className} group inline-flex items-center gap-3 rounded-full bg-[#0F0F11] py-1.5 pl-6 pr-1.5 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(16,16,18,0.18)] transition-all hover:bg-black hover:translate-y-[-1px] active:translate-y-0`}>
              Find the best for you
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0F0F11] transition-transform group-hover:translate-x-0.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            </a>
            <div className="mt-6 hidden items-center gap-3 border-t border-black/[0.06] pt-6 sm:flex">
              <div className="flex -space-x-2"><img src="/real-estate-landing/hero-small.jpg" className="h-7 w-7 rounded-full border-2 border-white object-cover" alt="" /><img src="/real-estate-landing/hero-main.jpg" className="h-7 w-7 rounded-full border-2 border-white object-cover" alt="" /><img src="/real-estate-landing/hero-small.jpg" className="h-7 w-7 rounded-full border-2 border-white object-cover" alt="" /></div>
              <p className={`${inter.className} text-[12px] font-medium leading-tight text-[#6B6B70]`}><span className="font-semibold text-[#0F0F11]">4.9/5</span> from 2,400+ investors</p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3.5">
          <div className="grid grid-cols-1 gap-3.5 min-[560px]:grid-cols-2">
            <motion.div initial={reduce?false:{opacity:0, y:14}} whileInView={reduce?{}:{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.05, ease:[0.32,0.72,0,1]}} className="group relative overflow-hidden rounded-[22px] bg-white p-[7px] shadow-[0_6px_24px_rgba(16,16,18,0.06)] ring-1 ring-black/[0.06] transition-all hover:shadow-[0_12px_32px_rgba(16,16,18,0.10)] hover:-translate-y-[1px]">
              <div className="rounded-[16px] bg-[#F8F8F7] px-5 pb-6 pt-4">
                <div className={`${inter.className} mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3 py-1.5 text-[11px] font-medium text-[#6B6B70] shadow-[0_1px_4px_rgba(0,0,0,0.05)]`}><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#9A9AA0" strokeWidth="1.7"/><path d="M21 21l-4.2-4.2" stroke="#9A9AA0" strokeWidth="1.7" strokeLinecap="round"/></svg> Search with &ldquo;AI&rdquo; <span className="rounded-full bg-[#0F0F11] px-1.5 py-0.5 text-[9px] font-bold text-white">NEW</span></div>
                <h3 className={`${jakarta.className} m-0 mb-1.5 text-[14.5px] font-bold tracking-[-0.015em] text-[#0F0F11]`}>Smart Suggestions</h3>
                <p className={`${inter.className} m-0 max-w-[200px] text-[12px] leading-[1.6] text-[#6B6B70]`}>AI scans every listing to surface your best-fit match in seconds.</p>
                <div className="mt-4 flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity"><span className="h-1 w-6 rounded-full bg-[#0F0F11]" /><span className="h-1 w-1 rounded-full bg-black/15" /><span className="h-1 w-1 rounded-full bg-black/15" /></div>
              </div>
            </motion.div>

            <motion.div initial={reduce?false:{opacity:0, y:14}} whileInView={reduce?{}:{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1, ease:[0.32,0.72,0,1]}} className="group relative overflow-hidden rounded-[22px] bg-white p-[7px] shadow-[0_6px_24px_rgba(16,16,18,0.06)] ring-1 ring-black/[0.06] transition-all hover:shadow-[0_12px_32px_rgba(16,16,18,0.10)] hover:-translate-y-[1px]">
              <div className="rounded-[16px] bg-[#0F0F11] px-5 pb-6 pt-4 text-white">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[12px] bg-white text-[#0F0F11] shadow-[0_4px_12px_rgba(255,255,255,0.15)]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V5l8-3z" fill="white"/><path d="M9 12l2 2 4-4" stroke="#111" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h3 className={`${jakarta.className} m-0 mb-1.5 text-[14.5px] font-bold tracking-[-0.015em] text-white`}>99% Trusted</h3>
                <p className={`${inter.className} m-0 max-w-[200px] text-[12px] leading-[1.6] text-white/70`}>Investors trust our curation and come back deal after deal.</p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-white/90"><span className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 backdrop-blur"><svg width="10" height="10" viewBox="0 0 24 24" fill="#FFC53D"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg> 4.9</span> <span className="text-white/60">· 12k reviews</span></div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={reduce?false:{opacity:0, y:14}} whileInView={reduce?{}:{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.16, ease:[0.32,0.72,0,1]}} className="relative overflow-hidden rounded-[22px] bg-white p-[7px] shadow-[0_6px_24px_rgba(16,16,18,0.06)] ring-1 ring-black/[0.06]">
            <div className="relative flex min-h-[186px] flex-col overflow-hidden rounded-[16px] bg-[#F8F8F7] p-5 max-[560px]:min-h-[320px]">
              <div className="relative flex h-full w-full flex-1 max-[560px]:flex-col max-[560px]:gap-4">
                <DottedMapCard />
                <div className="absolute left-[44px] top-[10px] z-[2] inline-flex items-center gap-1.5 rounded-full bg-[#E05A3D] px-2.5 py-1 text-[11px] font-bold text-white shadow-[0_6px_16px_rgba(224,90,61,0.35)] ring-1 ring-white/20 max-[560px]:left-1 max-[560px]:top-1 max-[560px]:relative">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> $147
                  <span className="hidden rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-semibold sm:inline">avg / sq ft</span>
                </div>
                <svg className="pointer-events-none absolute left-[96px] top-[24px] z-[2] h-[46px] w-[80px] opacity-90 max-[560px]:left-[56px] max-[560px]:top-[-4px] max-[560px]:relative" width="90" height="60" viewBox="0 0 90 60" fill="none" aria-hidden="true">
                  <path d="M8 8 C 40 50, 55 50, 82 20" stroke="#C8C8C6" strokeWidth="1.4" strokeDasharray="4 4" fill="none"/>
                  <path d="M74 14 L82 20 L74 26" stroke="#C8C8C6" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="absolute bottom-0 left-0 z-[3] max-w-[172px] max-[560px]:relative max-[560px]:bottom-auto max-[560px]:left-auto">
                  <h3 className={`${jakarta.className} m-0 mb-1 text-[14.5px] font-bold leading-[1.25] tracking-[-0.015em] text-[#0F0F11]`}>Invest where it matters</h3>
                  <p className={`${inter.className} m-0 max-w-[172px] text-[12px] leading-[1.6] text-[#6B6B70]`}>High-demand, high-growth neighborhoods backed by live market data.</p>
                </div>
                <div className="absolute bottom-[-6px] right-0 z-[2] h-[148px] w-[164px] max-[560px]:relative max-[560px]:bottom-auto max-[560px]:right-auto max-[560px]:ml-auto max-[560px]:h-[138px] max-[560px]:w-[160px]">
                  <div className="absolute bottom-[6px] right-[8px] h-[98px] w-[142px] rotate-[7deg] overflow-hidden rounded-[12px] bg-[#E9E9E7] shadow-[0_8px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] max-[560px]:h-[94px] max-[560px]:w-[136px]" />
                  <div className="absolute bottom-[12px] right-[16px] flex h-auto w-[142px] -rotate-[4deg] flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_10px_28px_rgba(16,16,18,0.14)] ring-1 ring-black/[0.06] max-[560px]:w-[136px]">
                    <img src="/real-estate-landing/hero-small.jpg" alt="Modern Architectural Marvel" className="h-[68px] w-full shrink-0 object-cover" />
                    <div className="bg-white px-3 py-2.5">
                      <p className={`${jakarta.className} m-0 mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-[9.5px] font-bold leading-none tracking-[-0.01em] text-[#0F0F11]`}>Modern Architectural Mar...</p>
                      <p className={`${inter.className} m-0 flex items-center gap-1 text-[10px] font-medium leading-none text-[#9A9AA0]`}><svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-7.58 7-12.5A7 7 0 105 9.5C5 14.42 12 22 12 22z" stroke="#9A9AA0" strokeWidth="1.5"/><circle cx="12" cy="9.5" r="2" stroke="#9A9AA0" strokeWidth="1.5"/></svg> Catonsville, MD</p>
                    </div>
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
    <div className={`min-h-screen overflow-x-clip bg-[#F8F8F7] antialiased ${inter.className}`}>
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]" aria-hidden="true" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      <Header />
      <main className="relative">
        <Hero />
        <StatsBar />
        <Features />
      </main>
      <footer className="border-t border-black/[0.06] bg-white py-6">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 text-[11px] font-medium text-[#9A9AA0] max-[760px]:flex-col max-[760px]:gap-2 max-[760px]:text-center">
          <span className={`${inter.className}`}>© {new Date().getFullYear()} Brickwise · SEC compliant · SIPC insured</span>
          <span className={`${mono.className} text-[10px] uppercase tracking-[0.08em]`}>Built for long-term wealth</span>
        </div>
      </footer>
    </div>
  );
}
