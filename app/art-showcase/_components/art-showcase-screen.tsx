"use client";

import { Fragment, useLayoutEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArtCoverFlow } from "./art-cover-flow";
import { ArtFan } from "./art-fan";
import { EASE_GLIDE, TIMELINE } from "./motion-timeline";
import { SiteHeader } from "./site-header";

/**
 * The element scale (`--k` on <html>) is computed BEFORE first paint by the
 * inline boot script in app/layout.tsx — see globals.css. That script
 * exposes itself here so a CLIENT-SIDE route entry (no full load, so the
 * script never re-ran) applies the scale in a layout effect, still before
 * the browser paints the new route. On a hard load the effect is a no-op
 * re-application of the same value.
 */
declare global {
  interface Window {
    __artElementScale?: () => void;
  }
}

/** Headline words revealed one by one (reference video) — the line break
 *  stays after "your", so the final layout is unchanged. */
const HEADLINE_WORDS = ["A", "place", "to", "display", "your"] as const;

/**
 * Shared chrome + gesture for both CTA pills: exactly the header account
 * button's interaction (`transition-transform duration-150 hover:scale-105
 * active:scale-95` + `motion-reduce:*`), so the two pills and the
 * account/theme circles all react the same way.
 *
 * The gesture lives in CSS, not in Framer: the pills' entrance animation owns
 * Framer's `transform`/opacity with a `delay`, and a Framer `whileHover` on the
 * same element reverts to `animate` through THAT delayed transition — which
 * left the pill frozen at hover scale for the entrance delay after the pointer
 * left. Tailwind v4 writes the standalone `scale` property, which composes with
 * Framer's inline `transform`, so the two never fight.
 */
const CTA_HOVER =
  "grid place-items-center rounded-full transition-transform duration-150 hover:scale-105 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100";

/**
 * Art Showcase Landing (Screen 2).
 *
 * Reference: docs/references/art-showcase.webp (1282×754, DPR 1).
 * Landmark targets measured from the reference:
 * - header content centred y≈48 (h96, px43); nav run x600..1116
 * - headline ink y147..289, two lines with 77px baselines, break after "your"
 * - art stage box top y282 (cards ink ≈320..580, fan x178..1104)
 * - subtitle ink y598..631, two lines, 21px baselines
 * - CTAs y659..697 (dark pill 143×38 `#111`, gap 13 to a light `#F1F1F1`
 *   pill behind "Read more"; row `pr-[10px]`); page pb 57
 * Background: base `#F7F7F6` with a barely-there large-scale mottle — the
 * reference's empty areas vary smoothly between L≈240 and L≈248 (paper-like
 * blotches, no fine grain, no prominent gradient).
 */
export function ArtShowcaseScreen() {
  const reduce = useReducedMotion();

  // Element scale is applied before first paint by the inline boot script
  // (layout.tsx) on every full load. On a CLIENT-SIDE route entry that script
  // already ran with the previous pathname, so re-apply here — a layout effect
  // commits before the browser paints the new route, and the same call on
  // unmount clears the variable for whatever route comes next.
  useLayoutEffect(() => {
    const apply = window.__artElementScale;
    apply?.();
    return () => apply?.();
  }, []);

  const rise = (delay: number, y: number, duration: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: reduce
      ? { duration: 0 }
      : { duration, delay, ease: EASE_GLIDE },
  });

  // Per-button CTA entrance (stagger between the two pills). Spec: opacity 0
  // + vertical slide (y 20 → 0) + fade inside the 1.3–1.8s window. Hover/press
  // is NOT declared here — see CTA_HOVER: the gesture is pure CSS so the
  // entrance delay can't defer it.
  const ctaRise = (delay: number) =>
    reduce
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: TIMELINE.ctaDur, delay, ease: EASE_GLIDE },
        };

  return (
    <div className="art-showcase-screen min-h-dvh overflow-x-clip text-[#0D0D0D] dark:text-[#EDEDEB]">
      {/* No fit wrapper and NO container transform (user: "instead of scaling
          the whole container … increase the size of the individual elements"):
          the desktop sizes below are element-level `calc(× var(--k, 1))`, so
          changing the window WIDTH never rescales anything — the layout
          re-centres and clips (native+clip), while the HEIGHT sets `--k`
          (boot script, pre-paint) so a full laptop screen fills the frame
          with the reference's own card/gap proportions. */}
      {/* Canvas (base colour + paper mottle) lives in globals.css under
          `.art-showcase-screen` so the explicit dark treatment can swap it;
          the light values there are the audited reference colours. */}
      <SiteHeader />

      {/* Mobile container (≤640, follows the user's reference image):
          left-aligned text (the comp is flush-left, not centred), px-4
          side padding, near-full-width. ≥641 keeps the audited centred
          layout untouched — its paddings ride the element scale `--k`
          (`h/754`: exact reference spacing at 1282×754, proportionally filled
          at any laptop window). */}
      <main className="pb-[calc(57px_*_var(--k,_1))] pt-[calc(40px_*_var(--k,_1))] text-center max-[641px]:mx-auto max-[641px]:max-w-md max-[641px]:px-4 max-[641px]:pb-[40px] max-[641px]:pt-[26px] max-[641px]:text-left">
        {/* Headline type: mobile-first, sized from the reference image —
            line 1 "A place to display" fills ~96% of the padded column,
            which natural-wraps to the reference's "A place to display" /
            "your masterpiece." break at every width in the ≤640 band
            (12.05vw ≈ 47px at 393; capped at 54px so the reference break
            survives once max-w-md freezes the column at 448).
            ≥641 (native-size desktop regime, user: "keep overall size
            and everything same … allow for clipping" + "increase the size
            of the individual elements"): the audited 71px/77px/−1.9px
            metrics × `var(--k, 1)` — pixel-exact at 1282×754 and scaled by
            the HEIGHT only, so every laptop screen keeps the reference's
            proportions — in a
            FIXED 820px box (also × `--k`) centred with margin-inline:
            calc(50% − half the box). That calc keeps the box centred even
            when the viewport is narrower than it (plain mx-auto left-aligns
            an over-wide block), so the headline clips symmetrically at the
            viewport edges instead of re-wrapping to three lines. The hard
            break after "your" is desktop-only; phones wrap naturally. */}
        <motion.h1
          initial={{ y: reduce ? 0 : 20 }}
          animate={{ y: 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: TIMELINE.headlineRise,
                  delay: TIMELINE.headline,
                  ease: EASE_GLIDE,
                }
          }
          className="mx-auto max-w-[820px] text-[clamp(37px,12.05vw,54px)] font-medium leading-[1.06] tracking-[-1.3px] min-[641px]:mx-[calc(50%_-_410px_*_var(--k,_1))] min-[641px]:max-w-[calc(820px_*_var(--k,_1))] min-[641px]:w-[calc(820px_*_var(--k,_1))] min-[641px]:text-[calc(71px_*_var(--k,_1))] min-[641px]:leading-[calc(77px_*_var(--k,_1))] min-[641px]:tracking-[calc(-1.9px_*_var(--k,_1))]"
        >
          {/* Word-by-word fade-in (user: "fade-in-up … replace the
              wipes" — the old clip-path reveal is gone), 60ms steps over
              the block's 20px rise. The spans stay PLAIN INLINE —
              inline-block would break whole-line text shaping and widen
              line 1 by ~4px (measured vs the reference); opacity works
              on inline boxes, transform does not — which is why the
              rise rides the h1 block instead of each word. */}
          {HEADLINE_WORDS.map((word, i) => (
            <Fragment key={word}>
              {i > 0 ? " " : null}
              <motion.span
                initial={{ opacity: reduce ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        duration: TIMELINE.headlineWord,
                        delay:
                          TIMELINE.headline + i * TIMELINE.headlineStep,
                        ease: EASE_GLIDE,
                      }
                }
              >
                {word}
              </motion.span>
            </Fragment>
          ))}
          <br className="max-[641px]:hidden" />
          {/* Space so "your" and "masterpiece." don't fuse when the hard
              break collapses at ≤640; browsers drop line-start spaces,
              so the desktop render after the <br> is unchanged. */}
          {" "}
          <motion.span
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: TIMELINE.headlineWord,
                    delay:
                      TIMELINE.headline +
                      HEADLINE_WORDS.length * TIMELINE.headlineStep,
                    ease: EASE_GLIDE,
                  }
            }
          >
            masterpiece.
          </motion.span>
        </motion.h1>

        <ArtFan />
        {/* ≤640 swaps the fan for the swipeable cover flow (see
            art-cover-flow.tsx); ≥641 it stays hidden. */}
        <ArtCoverFlow />

        <motion.p
          {...rise(TIMELINE.subtitle, 20, TIMELINE.subtitleDur)}
          /* ≤640 (reference image): the subtitle tracks the column width
             (available/20, capped with the 448 container) so it keeps the
             reference's 3-line break — "…masterpieces, and" / "…works that"
             / "resonate with them." — from 320 to 640, line-height 1.28.
             ≥641: reference 14/21/−0.13 × `var(--k, 1)` (element scale) in a
             FIXED 820×`--k` box centred with the headline's margin calc —
             the hard <br> then can't re-wrap as the viewport narrows (line 1
             scales with the box), so instead of growing the page (which would
             push the CTAs past the viewport) the line clips at the centred
             edges exactly like the cards and headline. */
          className="mx-auto mt-[calc(13px_*_var(--k,_1))] text-[calc(14px_*_var(--k,_1))] leading-[calc(21px_*_var(--k,_1))] tracking-[calc(-0.13px_*_var(--k,_1))] min-[641px]:mx-[calc(50%_-_410px_*_var(--k,_1))] min-[641px]:w-[calc(820px_*_var(--k,_1))] max-[641px]:text-[min(calc(5vw_-_1.6px),20.8px)] max-[641px]:leading-[1.28]"
        >
          Artists can display their masterpieces, and buyers can discover and{" "}
          <br className="max-[641px]:hidden" />
          purchase works that resonate with them.
        </motion.p>

        {/* Mobile (≤640, user spec): full-width vertical stack, primary
            on top — `flex-col w-full` + per-button `w-full`; ≥641 keeps
            the audited row (143px primary, gap 13, row pr-10 — each ×
            `var(--k, 1)` element scale). */}
        <div className="mt-[calc(24px_*_var(--k,_1))] flex items-center justify-center gap-[calc(13px_*_var(--k,_1))] pr-[calc(10px_*_var(--k,_1))] text-[calc(12px_*_var(--k,_1))] max-[641px]:mt-[16px] max-[641px]:w-full max-[641px]:flex-col max-[641px]:gap-[10px] max-[641px]:pr-0">
          <motion.a
            href="#"
            {...ctaRise(TIMELINE.ctas)}
            className={CTA_HOVER + " h-[calc(38px_*_var(--k,_1))] w-[calc(143px_*_var(--k,_1))] bg-[#111111] text-white dark:bg-[#F5F5F4] dark:text-[#111111] max-[641px]:w-full"}
          >
            Join for $9.99/m
          </motion.a>
          <motion.a
            href="#"
            {...ctaRise(TIMELINE.ctas + TIMELINE.ctaStep)}
            className={CTA_HOVER + " h-[calc(38px_*_var(--k,_1))] min-w-[calc(91px_*_var(--k,_1))] bg-[#F1F1F1] dark:bg-[#1F1F1F] max-[641px]:w-full"}
          >
            Read more
          </motion.a>
        </div>
      </main>
    </div>
  );
}