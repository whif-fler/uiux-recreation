"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowUp,
  Bell,
  Check,
  ChevronDown,
  Star,
  TrendingUp,
  Wallet,
  X,
} from "lucide-react";

/*
 * Fluid replica system — the reference (1760px capture ≈ 2x of an 880px
 * viewport) holds fixed PROPORTIONS at any size: content spans ~86% of the
 * viewport, headline ≈ 5.7vw, etc. Every size below is expressed in vw with
 * a px floor (which doubles as the phone size), so the composition matches
 * the reference from 640px phonescape up to full desktop. Below 640px the
 * grids stack but keep the same scale tokens.
 */

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-[clamp(56px,6.2vw,110px)] w-[86%] max-w-[1480px] items-center justify-between">
        <a href="#" className="flex items-center gap-[0.6em] text-[max(11px,1.2vw)]" aria-label="FinSuite home">
          <span className="flex h-[max(20px,1.7vw)] w-[max(20px,1.7vw)] items-center justify-center rounded-[0.4em] bg-[#2f6bf0]">
            <Wallet className="h-[0.62em] w-[0.62em] text-white" strokeWidth={2} aria-hidden="true" />
          </span>
          <span className="font-bold tracking-tight text-[#14161a]">FinSuite</span>
        </a>
        <nav className="hidden items-center gap-[max(16px,3vw)] min-[680px]:flex" aria-label="Primary">
          <a href="#" className="text-[max(10px,1.02vw)] font-semibold text-[#14161a]">Home</a>
          <a href="#" className="text-[max(10px,1.02vw)] font-medium text-[#4b4d54] hover:text-[#14161a]">About Us</a>
          <a href="#" className="text-[max(10px,1.02vw)] font-medium text-[#4b4d54] hover:text-[#14161a]">Blog</a>
          <a href="#" className="inline-flex items-center gap-1 text-[max(10px,1.02vw)] font-medium text-[#4b4d54] hover:text-[#14161a]">
            Pages <ChevronDown className="h-[0.9em] w-[0.9em]" aria-hidden="true" />
          </a>
          <a href="#" className="text-[max(10px,1.02vw)] font-medium text-[#4b4d54] hover:text-[#14161a]">Pricing</a>
        </nav>
        <div className="flex items-center gap-[max(12px,2vw)]">
          <a href="#" className="hidden text-[max(10px,1.1vw)] font-semibold text-[#14161a] min-[750px]:inline">Log In</a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[#14161a] px-[1.75em] py-[0.75em] text-[max(10px,1.15vw)] font-semibold leading-[1.1] text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

function ActionIcons({ dark = false }: { dark?: boolean }) {
  const items = [
    { icon: ArrowUp, label: "Send" },
    { icon: ArrowDown, label: "Receive" },
    { icon: ArrowLeftRight, label: "Convert" },
  ];
  return (
    <div className="flex gap-[0.8em]" role="list" aria-label="Quick actions">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} role="listitem" className="flex flex-col items-center gap-[0.3em]">
          <span
            className={`flex h-[2.6em] w-[2.6em] items-center justify-center rounded-full ${
              dark ? "bg-white text-[#33430f]" : "border border-[#e7e8ec] bg-white text-[#4b4d54]"
            }`}
          >
            <Icon className="h-[1.1em] w-[1.1em]" strokeWidth={2.2} aria-hidden="true" />
          </span>
          <small className={`text-[0.85em] ${dark ? "text-[#4b5a1c]" : "text-[#6b7280]"}`}>{label}</small>
        </div>
      ))}
    </div>
  );
}

function HeroDashboard() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="relative w-[92%] max-w-[320px] rounded-[2em] border border-[#e7e8ec] bg-[#fbfbfc] px-[1.4em] pb-[1em] pt-[1em] text-[max(9px,1.05vw)] shadow-[0_30px_60px_-30px_rgba(20,22,26,0.18)] min-[640px]:max-w-none"
    >
      <div className="mb-[0.2em] flex items-center gap-[0.6em]" aria-hidden="true">
        <span className="flex gap-[0.6em]">
          <span className="h-[0.8em] w-[0.8em] rounded-full bg-[#ff5f57]" />
          <span className="h-[0.8em] w-[0.8em] rounded-full bg-[#febc2e]" />
          <span className="h-[0.8em] w-[0.8em] rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto h-[0.7em] w-[11em] rounded-full bg-[#eceef1]" />
        <span className="flex h-[1.4em] w-[1.4em] items-center justify-center rounded-full bg-[#eceef1] text-[#8a8d94]">
          <Bell className="h-[0.9em] w-[0.9em]" strokeWidth={2} aria-hidden="true" />
        </span>
      </div>

      {/* Subscription cards — Spotify overlaps Netflix, tilted */}
      <div className="relative mb-[3em] min-h-[10em]">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex min-h-[10.5em] w-[43%] flex-col rounded-[1.4em] border border-[#e7e8ec] bg-white p-[1.4em]"
        >
          <div className="mb-[1.4em] flex items-center gap-[0.6em]">
            <span className="flex h-[1.6em] w-[1.6em] items-center justify-center rounded-[0.4em] bg-[#e50914] text-[0.9em] font-extrabold text-white" aria-hidden="true">N</span>
            <span className="flex-1 text-[1.1em] font-semibold text-[#14161a]">Netflix</span>
            <X className="h-[0.9em] w-[0.9em] text-[#9b9da4]" aria-hidden="true" />
          </div>
          <div className="flex-1" aria-hidden="true" />
          <div className="flex items-center justify-between gap-[0.6em]">
            <p className="m-0 text-[1.7em] font-bold text-[#14161a]">
              $24<span className="text-[0.56em] font-normal opacity-75">/month</span>
            </p>
            <span className="flex h-[1.8em] w-[1.8em] shrink-0 items-center justify-center rounded-full border border-[#e7e8ec] text-[1em] font-extrabold text-[#4b4d54]" aria-hidden="true">✓</span>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 16, rotate: 14 }}
          animate={{ opacity: 1, x: 0, rotate: 10 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="absolute right-[-1.4em] top-[-0.2em] w-[58%] rounded-[1.6em] bg-gradient-to-br from-[#7cabec] to-[#4189fa] p-[1.5em] pb-[2.5em] pr-[4em] text-white shadow-[0_18px_36px_-16px_rgba(47,87,224,0.6)]"
        >
          <div className="mb-[2em] flex items-center gap-[0.6em]">
            <span className="flex h-[2em] w-[2em] items-center justify-center rounded-full bg-white" aria-hidden="true">
              <svg className="h-[1.2em] w-[1.2em]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 10.5c3.5-1 8-.7 11 1M6.5 13.5c3-1 6.5-.7 9 .8M7 16.3c2.4-.7 5-.5 7 .7" stroke="#1db954" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="flex-1 text-[1.1em] font-semibold">Spotify</span>
          </div>
          <p className="m-0 text-[2.2em] font-bold">
            $13<span className="text-[0.6em] font-normal opacity-75">/month</span>
          </p>
          <span className="absolute bottom-[1.4em] right-[0.8em] top-[1.4em] flex flex-col justify-between" aria-hidden="true">
            <span className="flex h-[1.8em] w-[1.8em] items-center justify-center rounded-full border border-white/50 text-white">
              <X className="h-[0.9em] w-[0.9em]" strokeWidth={2.5} />
            </span>
            <span className="flex h-[1.8em] w-[1.8em] items-center justify-center rounded-full bg-white text-[1em] font-extrabold text-[#2f57e0]">✓</span>
          </span>
        </motion.div>
      </div>

      <div className="rounded-[1em] bg-[#f3f5f8] p-[1.2em]">
      <div className="mb-[1.4em]">
        <p className="m-0 mb-[1.3em] text-[1.2em] font-medium leading-[1.1] text-[#6b7280]">My Balance</p>
        <div className="flex items-start justify-between gap-[0.8em]">
          <p className="m-0 text-[2.4em] font-extrabold leading-[1.1] tracking-[-0.01em] text-[#14161a]">$9,823,28</p>
          <ActionIcons />
        </div>
        <p className="m-0 mt-[0.6em] text-[1.05em] leading-[1.3] text-[#7f7f7f]">Your made an extra $2,832.19 in this month.</p>
      </div>

      <div className="relative flex h-[7.2em] items-end gap-[0.8em] pt-[1.2em]">
        <div className="pointer-events-none absolute inset-x-0 bottom-[0em] top-[1.2em] flex flex-col justify-between" aria-hidden="true">
          <span className="w-full border-t border-dotted border-[#dfe1e6]" />
          <span className="w-full border-t border-dotted border-[#dfe1e6]" />
          <span className="w-full border-t border-dotted border-[#dfe1e6]" />
        </div>
        <div className="flex h-full flex-col justify-between pb-[0.2em] text-[0.8em] text-[#b3b5bb]" aria-hidden="true">
          <span>150K</span><span>125K</span><span>100K</span>
        </div>
        <div className="relative z-[1] flex h-full flex-1 items-end gap-[max(10px,1.25vw)]">
          {[40, 85, 55, 35, 55, 45].map((h, i) => (
            <div
              key={i}
              className={`relative w-[max(28px,3.1vw)] shrink-0 origin-bottom rounded-t-[max(6px,calc(1vw-2px))] ${i === 1 ? "bg-gradient-to-b from-[#7c5cff] via-[#2f6bf0] to-[#9fd93a]" : "bg-[#e9edf2]"}`}
              style={{ height: `${h}%` }}
              aria-hidden="true"
            >
              {i === 1 ? (
                <>
                  <span className="absolute bottom-[calc(100%+0.9em)] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-[0.6em] bg-[#14161a] px-[1em] py-[0.5em] text-[0.85em] font-semibold text-white">
                    $4,229.12
                    <span className="absolute -bottom-[0.3em] left-1/2 h-[0.7em] w-[0.7em] -translate-x-1/2 rotate-45 rounded-[0.12em] bg-[#14161a]" aria-hidden="true" />
                  </span>
                  <span className="absolute -top-[0.35em] left-1/2 z-10 h-[0.7em] w-[0.7em] -translate-x-1/2 rounded-full bg-[#2f6bf0] ring-[0.18em] ring-white" aria-hidden="true" />
                  <span className="absolute bottom-[0em] left-1/2 top-[0em] w-0 -translate-x-1/2 border-l border-dashed border-white/70" aria-hidden="true" />
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      </div>
    </motion.div>
  );
}

function TrustItem({
  score,
  name,
  color,
  glyph,
}: {
  score: string;
  name: string;
  color: string;
  glyph: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-[max(6px,0.8vw)]">
      <span className="text-[max(15px,2.2vw)] font-bold leading-none text-[#14161a]">{score}</span>
      <span className="flex flex-col gap-[max(2px,0.35vw)]">
        <span className="flex items-center gap-[max(4px,0.7vw)]">
          {glyph}
          <span className="text-[max(12px,1.5vw)] font-medium leading-[1.1] text-[#4b4d54]">{name}</span>
        </span>
        <span className="ml-[max(16px,2.5vw)] flex gap-[0.15em]" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-[max(10px,1.4vw)] w-[max(10px,1.4vw)]" fill={color} strokeWidth={0} color={color} aria-hidden="true" />
          ))}
        </span>
      </span>
    </div>
  );
}

function TrustBar() {
  const reduce = useReducedMotion();
  return (
    <section className="mt-[clamp(40px,6.8vw,120px)] bg-[#f6f8fa] py-[max(20px,3.3vw)]" aria-label="Ratings">
      <div className="mx-auto w-[86%] max-w-[1480px]">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <p className="m-0 mb-[max(14px,2.5vw)] text-center text-[max(11.5px,1.5vw)] font-semibold leading-[1.2] text-[#2f6bf0]">
            Trusted by <span className="font-medium text-[#4b4d54]">users across the platform</span>
          </p>
          <div className="flex flex-col items-center gap-y-5 min-[640px]:flex-row min-[640px]:flex-wrap min-[640px]:items-start min-[640px]:justify-center min-[640px]:gap-x-[max(24px,6vw)]">
            <TrustItem
              score="4.8"
              name="Chrome store"
              color="#f5b400"
              glyph={
                <svg className="h-[max(14px,1.8vw)] w-[max(14px,1.8vw)]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.34 7 A10 10 0 0 1 20.66 7 L12 12 Z" fill="#EA4335" />
                  <path d="M20.66 7 A10 10 0 0 1 12 22 L12 12 Z" fill="#FBBC05" />
                  <path d="M12 22 A10 10 0 0 1 3.34 7 L12 12 Z" fill="#34A853" />
                  <circle cx="12" cy="12" r="5" fill="#fff" />
                  <circle cx="12" cy="12" r="3.8" fill="#4285F4" />
                </svg>
              }
            />
            <TrustItem
              score="4.9"
              name="Producthunt"
              color="#e0522e"
              glyph={
                <span className="flex h-[max(14px,1.8vw)] w-[max(14px,1.8vw)] items-center justify-center rounded-[0.25em] bg-[#da552f] text-[max(8px,1.15vw)] font-extrabold text-white" aria-hidden="true">P</span>
              }
            />
            <TrustItem
              score="4.8"
              name="Trustpilot"
              color="#00b67a"
              glyph={
                <span className="flex h-[max(14px,1.8vw)] w-[max(14px,1.8vw)] items-center justify-center rounded-[0.2em] bg-[#00b67a] text-[max(8px,1.15vw)] text-white" aria-hidden="true">★</span>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AnalyticsPanel() {
  const reduce = useReducedMotion();
  const checks = ["Keep tracking balance", "Send money easily", "Receive money easily", "Convert currency"];
  return (
    <section className="bg-white pb-[max(20px,1.5vw)]" aria-label="Financial analytics">
      <div className="mx-auto w-[89%] max-w-[1570px]">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="grid items-center gap-[max(24px,4.5vw)] rounded-[max(18px,2.3vw)] bg-[#f6f8fa] px-[max(16px,2.5vw)] pb-[max(32px,7vw)] pt-[max(24px,5.5vw)] min-[640px]:grid-cols-[0.95fr_1.1fr]"
        >
          {/* Left visual: green balance header overlapping white chart */}
          <div className="relative">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -14, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative z-10 rounded-[1.8em] bg-gradient-to-br from-[#b9e76b] to-[#ade160] p-[1.8em] text-[max(9px,1.14vw)] shadow-[0_24px_50px_-24px_rgba(120,190,30,0.55)]"
            >
              <p className="m-0 mb-[0.6em] text-[1.2em] font-medium leading-[1.1] text-[#33430f]">My Balance</p>
              <div className="flex items-start justify-between gap-[0.8em]">
                <p className="m-0 text-[2.4em] font-extrabold leading-[1.1] text-[#182103]">$9,823,28</p>
                <ActionIcons dark />
              </div>
              <p className="m-0 mt-[0.6em] text-[1.05em] leading-[1.3] text-[#4b5a1c]">Your made an extra $2,832.19 in this month.</p>
            </motion.div>
            <div className="-mt-[3em] rounded-[1.8em] bg-white px-[2em] pb-[2em] pt-[2.5em] text-[max(9px,1.14vw)] shadow-sm">
              <div className="flex h-[13em] items-end gap-[1.2em] border-t border-black/10 pt-[1.2em]">
                <div className="flex h-full flex-col justify-between text-[0.8em] text-[#18210373]" aria-hidden="true">
                  <span>125K</span><span>100K</span><span>75K</span><span>50K</span><span>25K</span><span>0</span>
                </div>
                <div className="flex h-full flex-1 items-end gap-[1.2em]">
                  {[45, 55, 100, 35, 50, 65, 45].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={reduce ? false : { scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                      style={i === 2 ? { height: "calc(100% + 2em)" } : { height: `${h}%` }}
                      className={`relative flex-1 origin-bottom rounded-[max(6px,calc(1vw-2px))] ${i === 2 ? "bg-gradient-to-b from-[#7c5cff] via-[#2f6bf0] to-[#9fd93a]" : "bg-[#edf0f3]"}`}
                      aria-hidden="true"
                    >
                      {i === 2 ? (
                        <span className="absolute bottom-[0em] left-1/2 top-[0em] w-0 -translate-x-1/2 border-l border-dashed border-white/70" aria-hidden="true" />
                      ) : null}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-[640px]:pr-[1.1vw]">
            <h3 className="m-0 mb-[max(8px,1.15vw)] text-[clamp(24px,3.4vw,60px)] font-bold leading-[1.15] text-[#14161a]">
              Comprehensive
              <br />
              Financial <span className="text-[#2f6bf0]">Analytics</span>
              <br />
              Dashboard
            </h3>
            <p className="m-0 mb-[max(18px,2.5vw)] max-w-[380px] text-[max(12px,1.55vw)] leading-[1.6] text-[#585d64] min-[640px]:max-w-[43vw]">
              Gain real-time visibility into your financial performance with intuitive dashboards.
            </p>
            <hr className="m-0 mb-[max(16px,2.5vw)] border-0 border-t border-[#e7e8ec]" />
            <motion.ul
              initial={reduce ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="m-0 grid list-none grid-cols-1 gap-[max(10px,1.7vw)] gap-x-[max(20px,3.4vw)] p-0 sm:grid-cols-2"
            >
              {checks.map((c) => (
                <motion.li
                  key={c}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-[max(6px,0.9vw)] text-[max(11px,1.35vw)] font-medium text-[#14161a]"
                >
                  <span className="flex h-[max(14px,1.8vw)] w-[max(14px,1.8vw)] shrink-0 items-center justify-center rounded-full bg-[#14161a] text-white" aria-hidden="true">
                    <Check className="h-[max(8px,1vw)] w-[max(8px,1vw)]" strokeWidth={3} />
                  </span>
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FinanceScreen() {
  const reduce = useReducedMotion();
  return (
    <div className={`min-h-screen overflow-x-clip bg-white font-sans text-[#14161a] antialiased ${jakarta.className}`}>
      <Header />
      <main>
        {/*
          * Full-screen hero: fills exactly the first viewport under the
          * header (min-h grows if content needs more — nothing can crop),
          * child uses my-auto so it centers when space allows but pins to
          * the top gracefully when content overflows (flex centering would
          * cut off the top instead).
          */}
        <section className="flex bg-white pb-[max(10px,0.6vw)] pt-[clamp(24px,6.8vw,120px)]" aria-label="Hero">
          <div className="m-auto grid w-[86%] max-w-[1480px] items-center gap-[clamp(32px,11vw,194px)] min-[640px]:grid-cols-2">
            <motion.div
              initial={reduce ? false : "hidden"}
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="text-center min-[640px]:text-left"
            >
              <span className="mb-[max(14px,2.3vw)] inline-block rounded-full bg-[#f1ecfd] px-[1.2em] py-[0.25em] text-[max(9.5px,1.15vw)] font-semibold text-[#8a5cf6]">
                Finance Solutions for You
              </span>
              <h1 className="m-0 mb-[max(12px,1vw)] text-[clamp(36px,5.7vw,100px)] font-extrabold leading-[1.13] tracking-[-0.025em] text-[#14161a]">
                Maximize
                <span className="ml-[0.12em] inline-flex -translate-y-[0.08em] items-center align-middle" aria-hidden="true">
                  <span className="h-[0.62em] w-[0.62em] rounded-full bg-[#14161a]" />
                  <span className="-ml-[0.26em] flex h-[0.72em] w-[0.72em] items-center justify-center rounded-full bg-[#bfe94f]">
                    <TrendingUp className="h-[0.38em] w-[0.38em] text-[#14161a]" strokeWidth={2.6} />
                  </span>
                </span>
                <br />
                Your{" "}
                <a href="#" className="relative whitespace-nowrap text-[#2f6bf0]">
                  Financial
                  <svg
                    className="absolute -bottom-[0.1em] left-[-3%] h-[0.14em] w-[106%]"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2,7 C30,3 70,3 98,6"
                      fill="none"
                      stroke="#2f6bf0"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <br />
                Potential
              </h1>
              <p className="mx-auto mb-[max(20px,2.4vw)] max-w-[340px] text-[max(12.5px,1.55vw)] leading-[1.6] text-[#585d64] min-[640px]:mx-0 min-[640px]:max-w-[36vw]">
                Welcome to FinSuite, where financial management meets simplicity and efficiency.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#14161a] px-[1.75em] py-[0.9em] text-[max(12px,1.6vw)] font-semibold leading-[1.2] text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Get Started
              </a>
            </motion.div>
            <div className="flex justify-center min-[640px]:justify-end">
              <HeroDashboard />
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="bg-white pb-[max(24px,5.5vw)] pt-[max(48px,9.4vw)] text-center" aria-label="Empower">
          <motion.h2
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto m-0 w-[86%] max-w-[min(800px,92%)] text-[clamp(24px,3.2vw,56px)] font-bold leading-[1.25] text-[#14161a]"
          >
            <span className="text-[#2f6bf0]">Empower</span> Your Financial
            <br />
            Future with us
          </motion.h2>
        </section>

        <AnalyticsPanel />
      </main>
    </div>
  );
}
