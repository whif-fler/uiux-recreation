"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PricingScreen() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#f1f1f1] pb-[40px] antialiased overflow-x-hidden" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* centered reference frame — keeps 1025px proportions centered on large screens */}
      <div className="mx-auto w-full max-w-[1025px]">
        {/* Header */}
        <header className="relative h-[82px] md:h-[108px] shrink-0">
          <motion.a
            href="#contact"
            initial={reduce ? false : { opacity: 0, x: 8 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={reduce ? undefined : { duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="absolute top-[31px] right-[24px] md:top-[67px] md:right-[80px] inline-flex items-center gap-[10px] text-[14px] md:text-[16px] leading-none tracking-[-0.45px] text-[#767676] no-underline hover:opacity-80 transition-opacity"
          >
            <span>
              Schedule a <strong className="font-medium text-[#111]">Call</strong>
            </span>
            <svg viewBox="0 0 34 12" aria-hidden="true" className="w-[31px] h-[12px] overflow-visible shrink-0">
              <path d="M1 6h29M25 1l5 5-5 5" fill="none" stroke="#111" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </header>

        <main>
          {/* Hero */}
          <section aria-labelledby="pricing-title" className="ml-[24px] w-[calc(100%-48px)] md:ml-[58px] md:w-[790px] max-w-full">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.35, ease: "easeOut" }}
            className="inline-block mb-[24px] md:mb-[32px] px-[3px] pt-[1px] border border-[#7e7e7e] text-[#151515] text-[10px] leading-[12px] tracking-[-0.2px]"
          >
            PRICING
          </motion.span>

          <h1
            id="pricing-title"
            className="m-0 text-[#9c9c9c] font-normal leading-[1.14] md:leading-[1.17] tracking-[-0.065em] md:tracking-[-3.35px] text-[clamp(37px,8.7vw,57px)] md:text-[57px]"
          >
            {/* Line 1 */}
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="block whitespace-normal md:whitespace-nowrap"
            >
              Better tools
            </motion.span>

            {/* Line 2 */}
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
              className="flex flex-wrap md:flex-nowrap items-center gap-[10px] md:gap-[13px]"
            >
              <span>smooth</span>
              <span
                aria-label="creative tools"
                className="relative inline-flex items-center w-[161px] h-[58px] ml-[2px] shrink-0 max-[460px]:scale-[0.82] max-[460px]:origin-left max-[460px]:-mr-[25px] md:scale-100"
              >
                {/* Tile 1 - Dribbble */}
                <motion.span
                  initial={reduce ? false : { opacity: 0, scale: 0.8, rotate: -8 }}
                  animate={reduce ? {} : { opacity: 1, scale: 1, rotate: -8 }}
                  transition={reduce ? undefined : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                  className="absolute left-0 top-[4px] grid place-items-center w-[54px] h-[54px] rounded-[15px] bg-white shadow-[0_10px_19px_rgba(0,0,0,0.12),0_2px_5px_rgba(0,0,0,0.08)]"
                  style={{ transformOrigin: "center" }}
                >
                  <svg viewBox="0 0 40 40" aria-hidden="true" className="w-[41px] h-[41px]">
                    <circle cx="20" cy="20" r="13" fill="#e64588" stroke="#b12064" strokeWidth={1.6} />
                    <path d="M10 13c8 5 13 12 15 20M8 22c10-2 19-2 27 2M18 7c2 7 7 12 15 15" fill="none" stroke="#a91f5d" strokeWidth={1.4} strokeLinecap="round" />
                  </svg>
                </motion.span>
                {/* Tile 2 - Bē */}
                <motion.span
                  initial={reduce ? false : { opacity: 0, scale: 0.8, rotate: 11 }}
                  animate={reduce ? {} : { opacity: 1, scale: 1, rotate: 11 }}
                  transition={reduce ? undefined : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                  className="absolute left-[51px] top-0 grid place-items-center w-[54px] h-[54px] rounded-[15px] bg-white shadow-[0_10px_19px_rgba(0,0,0,0.12),0_2px_5px_rgba(0,0,0,0.08)] text-[#247fc3] text-[25px] font-bold tracking-[-2px] leading-none select-none"
                  style={{ transformOrigin: "center" }}
                >
                  Bē
                </motion.span>
                {/* Tile 3 - mark */}
                <motion.span
                  initial={reduce ? false : { opacity: 0, scale: 0.8, rotate: -11 }}
                  animate={reduce ? {} : { opacity: 1, scale: 1, rotate: -11 }}
                  transition={reduce ? undefined : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
                  className="absolute left-[102px] top-[3px] grid place-items-center w-[54px] h-[54px] rounded-[15px] bg-white shadow-[0_10px_19px_rgba(0,0,0,0.12),0_2px_5px_rgba(0,0,0,0.08)]"
                  style={{ transformOrigin: "center" }}
                >
                  <svg viewBox="0 0 42 34" aria-hidden="true" className="w-[35px] h-[30px]">
                    <path d="M8 24l5-12 5 6 6-11 4 10 5-3 3 10z" fill="#050505" />
                  </svg>
                </motion.span>
              </span>
              <strong className="text-[#050505] font-semibold">workflow</strong>
            </motion.span>

            {/* Line 3 */}
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="block whitespace-normal md:whitespace-nowrap"
            >
              including same great deal,
            </motion.span>

            {/* Line 4 */}
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
              className="flex flex-wrap md:flex-nowrap items-center gap-[10px] md:gap-[16px] mt-[3px]"
            >
              <motion.span
                initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                animate={reduce ? {} : { opacity: 1, scale: 1 }}
                transition={reduce ? undefined : { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                aria-hidden="true"
                className="relative inline-block shrink-0 w-[105px] h-[52px] rounded-[30px] max-[780px]:scale-[0.84] max-[780px]:origin-left max-[780px]:-mr-[13px]"
                style={{
                  background: "linear-gradient(105deg,#5ab7f7 3%,#a95df4 52%,#ff78a0 100%)",
                  boxShadow: "0 14px 19px rgba(185,84,186,.18)",
                }}
              >
                {/* = mark */}
                <span className="absolute left-[25px] top-[7px] text-[#785bd9] text-[24px] leading-[34px] opacity-60 select-none">=</span>
                {/* knob */}
                <span
                  className="absolute right-[7px] top-[6px] w-[40px] h-[40px] rounded-full"
                  style={{
                    background: "linear-gradient(145deg,#fff,#f6e7ee)",
                    boxShadow: "0 4px 9px rgba(0,0,0,.25)",
                  }}
                />
              </motion.span>
              <strong className="text-[#050505] font-semibold">annually.</strong>
            </motion.span>
          </h1>
        </section>

        {/* Pricing grid */}
        <section
          aria-label="Pricing plans"
          className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-[60px] mx-[16px] md:mt-[72px] md:mx-[28px]"
        >
          {/* Free card */}
          <motion.article
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="min-h-[320px] md:min-h-[360px] pt-[20px] md:pt-[25px] px-[16px] md:px-[23px] pb-[26px] md:pb-[32px] rounded-[25px] bg-[rgba(255,255,255,0.78)] border border-transparent shadow-none"
            style={{ background: "rgba(255,255,255,0.78)" }}
          >
            <header className="flex items-center min-h-[58px] md:min-h-[77px]">
              <span className="grid place-items-center w-[58px] h-[58px] md:w-[64px] md:h-[64px] mr-[16px] md:mr-[30px] rounded-[19px] border border-[#ececec] bg-[rgba(255,255,255,0.78)] shadow-[0_16px_17px_rgba(0,0,0,0.1)] shrink-0">
                <span className="w-[49px] h-[49px] md:w-[54px] md:h-[54px] rounded-[15px] grid place-items-center overflow-hidden" style={{ background: "linear-gradient(145deg,#4b4b4b,#080808)", boxShadow: "inset 0 1px 3px rgba(255,255,255,.34), 0 5px 10px rgba(0,0,0,.25)" }}>
                  {/* Free icon - tag-like */}
                  <svg viewBox="0 0 44 44" aria-hidden="true" className="w-full h-full p-[7px]">
                    <path d="M11 22l10-10 12 12-10 10z" fill="#f3f3f3" opacity={0.95} />
                    <circle cx="17.5" cy="20.5" r="1.7" fill="#090909" />
                    <path d="M22 17v10M27 21l3 3-3 3" fill="none" stroke="#1a1a1a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 22l10-10 12 12-10 10z" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth={0.5} />
                  </svg>
                </span>
              </span>
              <h2 className="m-0 text-[25px] md:text-[29px] leading-none font-semibold tracking-[-1.25px] text-[#050505]">Free</h2>
              <p className="ml-auto flex items-baseline gap-[1px] leading-none tracking-[-1.45px] whitespace-nowrap">
                <span className="text-[13px] md:text-[13px] font-medium text-[#050505] translate-y-[-5px]">$</span>
                <span className="text-[22px] md:text-[27px] font-medium text-[#050505]">0</span>
                <span className="text-[22px] md:text-[27px] font-normal text-[#777]">/month</span>
              </p>
            </header>

            <a
              href="#contact"
              className="grid place-items-center w-full h-[73px] mt-[22px] rounded-[18px] border border-[#e6e6e6] bg-[rgba(255,255,255,0.5)] text-[16px] tracking-[-0.45px] no-underline text-[#888] hover:border-[#d6d6d6] hover:bg-white transition-colors motion-reduce:transition-none"
            >
              <span>
                Get <strong className="font-medium text-[#222]">Started</strong>
              </span>
            </a>

            <ul className="m-0 mt-[21px] ml-[12px] p-0 list-none text-[#777] text-[14px] tracking-[-0.25px]">
              <li className="relative ml-[25px] mb-[17px] leading-[1.2]">
                <span aria-hidden="true" className="absolute -left-[25px] -top-[2px] text-[#080808] text-[17px] leading-none">
                  ✓
                </span>
                Nothing but a Hug
              </li>
            </ul>
          </motion.article>

          {/* Personal card */}
          <motion.article
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            className="min-h-[320px] md:min-h-[360px] pt-[20px] md:pt-[25px] px-[16px] md:px-[23px] pb-[26px] md:pb-[32px] rounded-[25px] border border-transparent"
            style={{ background: "rgba(255,255,255,0.78)" }}
          >
            <header className="flex items-center min-h-[58px] md:min-h-[77px]">
              <span className="grid place-items-center w-[58px] h-[58px] md:w-[64px] md:h-[64px] mr-[16px] md:mr-[30px] rounded-[19px] border border-[#ececec] bg-[rgba(255,255,255,0.78)] shadow-[0_16px_17px_rgba(0,0,0,0.1)] shrink-0">
                <span className="w-[49px] h-[49px] md:w-[54px] md:h-[54px] rounded-[15px] grid place-items-center overflow-hidden" style={{ background: "linear-gradient(145deg,#4b4b4b,#080808)", boxShadow: "inset 0 1px 3px rgba(255,255,255,.34), 0 5px 10px rgba(0,0,0,.25)" }}>
                  <svg viewBox="0 0 44 44" aria-hidden="true" className="w-full h-full p-[8px]">
                    <path d="M24 8L14 24h8l-2 12 11-18h-8z" fill="#f3f3f3" />
                  </svg>
                </span>
              </span>
              <h2 className="m-0 text-[25px] md:text-[29px] leading-none font-semibold tracking-[-1.25px] text-[#050505]">Personal</h2>
              <p className="ml-auto flex items-baseline gap-[1px] leading-none tracking-[-1.45px] whitespace-nowrap">
                <span className="text-[13px] md:text-[13px] font-medium text-[#050505] translate-y-[-5px]">$</span>
                <span className="text-[22px] md:text-[27px] font-medium text-[#050505]">69</span>
                <span className="text-[22px] md:text-[27px] font-normal text-[#777]">/month</span>
              </p>
            </header>

            <a
              href="#contact"
              className="grid place-items-center w-full h-[73px] mt-[22px] rounded-[18px] border border-[#e6e6e6] bg-[rgba(255,255,255,0.5)] text-[16px] tracking-[-0.45px] no-underline text-[#888] hover:border-[#d6d6d6] hover:bg-white transition-colors motion-reduce:transition-none"
            >
              <span>
                View <strong className="font-medium text-[#222]">Pricing</strong>
              </span>
            </a>

            <ul className="m-0 mt-[21px] ml-[12px] p-0 list-none text-[#777] text-[14px] tracking-[-0.25px]">
              <li className="relative ml-[25px] mb-[17px] leading-[1.3]">
                <span aria-hidden="true" className="absolute -left-[25px] -top-[2px] text-[#080808] text-[17px] leading-none">
                  ✓
                </span>
                Full access to tools, 24/7 support
              </li>
              <li className="relative ml-[25px] mb-[17px] leading-[1.3]">
                <span aria-hidden="true" className="absolute -left-[25px] -top-[2px] text-[#080808] text-[17px] leading-none">
                  ✓
                </span>
                Monthly updates
              </li>
              <li className="relative ml-[25px] mb-0 leading-[1.3]">
                <span aria-hidden="true" className="absolute -left-[25px] -top-[2px] text-[#080808] text-[17px] leading-none">
                  ✓
                </span>
                Customization options
              </li>
            </ul>
          </motion.article>
        </section>
      </main>

      <footer id="contact" className="sr-only">
        Contact area
      </footer>
      </div>
    </div>
  );
}
