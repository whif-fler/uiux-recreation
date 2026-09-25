"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArtFan } from "./art-fan";
import { EASE_OUT, TIMELINE } from "./motion-timeline";
import { SiteHeader } from "./site-header";
import { REFERENCE_HEIGHT, useFitScale } from "./use-fit-scale";

/** Headline words revealed one by one (reference video) — the line break
 *  stays after "your", so the final layout is unchanged. */
const HEADLINE_WORDS = ["A", "place", "to", "display", "your"] as const;

/**
 * Headline wipe (element spec): each word is revealed by a left-to-right
 * clip-path mask — no fade, no shift, no scaling (opacity stays 1 throughout).
 * WIPE_HIDDEN collapses the right edge onto the left edge (fully hidden);
 * WIPE_OPEN overshoots the inline box (−10% left, −20% right, ±5% vertical)
 * because the −1.9px tracking lets glyph ink spill past the box — a plain
 * `inset(0)` shaved ~50px off the "A"'s right foot (measured). The open value
 * is pixel-identical to no clip at rest (frozen-frame diff: 0 px).
 */
const WIPE_HIDDEN = "inset(-5% 100% -5% 0%)";
const WIPE_OPEN = "inset(-5% -20% -5% -10%)";

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
  const fit = useFitScale();

  const rise = (delay: number, y: number, duration: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: reduce
      ? { duration: 0 }
      : { duration, delay, ease: EASE_OUT },
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
          transition: { duration: TIMELINE.ctaDur, delay, ease: EASE_OUT },
        };

  const fitMode = fit !== null;
  return (
    <div
      className={
        fitMode
          ? "art-showcase-screen flex min-h-dvh w-full items-center justify-center overflow-hidden text-[#0D0D0D] dark:text-[#EDEDEB]"
          : "art-showcase-screen min-h-dvh overflow-x-hidden text-[#0D0D0D] dark:text-[#EDEDEB]"
      }
    >
      {/* Full-screen fit: an explicit footprint (content × scale) keeps the
          page's layout height at the SCALED size, so short windows
          (1280×720, 1366×768 with browser chrome) never scroll; the inner
          block renders at natural size and scales from the top-left into
          that footprint, centred by the outer flex. Above the reference
          width it's the image-viewer contain fit on a 1282 block
          (min(vw/1282, vh/754)); in the desktop tier (≥901px) the layout is
          fluid, so only its height is contained (vh/754). The inner block
          carries no background so the outer's %-relative paper mottle stays
          one continuous canvas across the whole viewport. */}
      <div
        style={
          fit !== null
            ? {
                width: fit.contentWidth * fit.scale,
                height: REFERENCE_HEIGHT * fit.scale,
              }
            : undefined
        }
        className={fitMode ? "shrink-0" : undefined}
      >
        <div
          style={
            fit !== null
              ? {
                  width: fit.contentWidth,
                  transform: `scale(${fit.scale})`,
                  transformOrigin: "top left",
                }
              : undefined
          }
        >
          {/* Canvas (base colour + paper mottle) lives in globals.css under
              `.art-showcase-screen` so the explicit dark treatment can swap it;
              the light values there are the audited reference colours. */}
          <SiteHeader />

          <main className="pb-[57px] pt-[40px] text-center max-[901px]:pt-[28px] max-[641px]:pt-[22px]">
            <h1 className="mx-auto max-w-[820px] text-[71px] font-medium leading-[77px] tracking-[-1.9px] max-[901px]:text-[clamp(43px,8vw,68px)] max-[901px]:leading-[1.06] max-[901px]:tracking-[-3px] max-[641px]:text-[45px] max-[641px]:leading-[1.02]">
              {/* Word-by-word left-to-right wipe (spec: 0–0.5s, 60ms steps,
                  200ms each). The spans stay PLAIN INLINE — inline-block
                  would break whole-line text shaping and widen line 1 by ~4px
                  (measured vs the reference) — and clip-path is one of the
                  few visual effects that works on inline boxes (transform
                  doesn't). */}
              {HEADLINE_WORDS.map((word, i) => (
                <Fragment key={word}>
                  {i > 0 ? " " : null}
                  <motion.span
                    initial={{ clipPath: reduce ? WIPE_OPEN : WIPE_HIDDEN }}
                    animate={{ clipPath: WIPE_OPEN }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : {
                            duration: TIMELINE.headlineWord,
                            delay:
                              TIMELINE.headline + i * TIMELINE.headlineStep,
                            ease: EASE_OUT,
                          }
                    }
                  >
                    {word}
                  </motion.span>
                </Fragment>
              ))}
              <br />
              <motion.span
                initial={{ clipPath: reduce ? WIPE_OPEN : WIPE_HIDDEN }}
                animate={{ clipPath: WIPE_OPEN }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        duration: TIMELINE.headlineWord,
                        delay:
                          TIMELINE.headline +
                          HEADLINE_WORDS.length * TIMELINE.headlineStep,
                        ease: EASE_OUT,
                      }
                }
              >
                masterpiece.
              </motion.span>
            </h1>

            <ArtFan />

            <motion.p
              {...rise(TIMELINE.subtitle, 20, TIMELINE.subtitleDur)}
              className="mx-auto mt-[13px] text-[14px] leading-[21px] tracking-[-0.13px] max-[641px]:text-[13px] max-[641px]:leading-[19px]"
            >
              Artists can display their masterpieces, and buyers can discover and{" "}
              <br className="max-[641px]:hidden" />
              purchase works that resonate with them.
            </motion.p>

            <div className="mt-[24px] flex items-center justify-center gap-[13px] pr-[10px] text-[12px] max-[641px]:mt-[20px]">
              <motion.a
                href="#"
                {...ctaRise(TIMELINE.ctas)}
                className={CTA_HOVER + " h-[38px] w-[143px] bg-[#111111] text-white dark:bg-[#F5F5F4] dark:text-[#111111]"}
              >
                Join for $9.99/m
              </motion.a>
              <motion.a
                href="#"
                {...ctaRise(TIMELINE.ctas + TIMELINE.ctaStep)}
                className={CTA_HOVER + " h-[38px] min-w-[91px] bg-[#F1F1F1] dark:bg-[#1F1F1F]"}
              >
                Read more
              </motion.a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
