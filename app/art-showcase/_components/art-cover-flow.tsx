"use client";

import { type KeyboardEvent, useState } from "react";
import { motion, type PanInfo, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CARDS } from "./art-cards";
import { EASE_GLIDE, EASE_OUT, TIMELINE } from "./motion-timeline";

/** One swipe step = 65% of the card width: neighbours peek in from both
 *  sides while the active card stays centred (scale/opacity/z per spec). */
const STEP_PCT = 65;
const PEEK_SCALE = 0.85;
const PEEK_OPACITY = 0.7;
/** Cover-flow depth: side cards angle away from the viewer (3D). Kept
 *  shallow (14°) to match the user's reference image, whose peeking cards
 *  read as near-flat — a 30° tilt visibly foreshortens them by comparison. */
const ROTATE_Y = 14;
/** Commit a swipe past 40px of travel or a flick at 450px/s. */
const SWIPE_PX = 40;
const SWIPE_V = 450;
/** EASE_GLIDE as a CSS cubic-bezier — the index glide on the track. */
const GLIDE_CSS = "cubic-bezier(0.4, 0, 0.15, 1)";
/** Speech-bubble whitelist: per the user's follow-up request the mobile
 *  bubble renders ONLY on cards 2 & 7 — the reference's own @coplin/@andrea
 *  badges — and is removed from every other active card. Matched by handle,
 *  not index, so it survives a reordering of CARDS. */
const BUBBLE_HANDLES: ReadonlySet<string> = new Set(["@coplin", "@andrea"]);

/**
 * Mobile (<640px) cover-flow carousel — the user-requested replacement for
 * the fanned stage, which cannot fit phone screens (the old ≤640 fan bled
 * off both edges and pushed @andrea off-screen).
 *
 * Shown ONLY at ≤640 (`hidden max-[641px]:block`) while `.art-fan-row`
 * carries the inverse — a pure-CSS swap, so the desktop tree renders
 * untouched and there is no width-detection hydration flash.
 *
 * Transform channels are strictly nested so nothing overwrites anything:
 * 1. outer `motion.div`  — framer drag (finger px) + entrance + snap-back x
 * 2. track div           — CSS translateX(-index×65%) glide
 * 3. positioner div      — CSS translateX(-50%) + k×65% (per-card slot)
 * 4. card `motion.div`   — framer scale/opacity/rotateY (active vs peek)
 *
 * Accessibility: the drag surface is a focusable region with arrow-key
 * paging and a polite live region announcing the active creator handle.
 * Touch drag uses framer's pan-y touch-action, so vertical page scrolling
 * still works while swiping.
 */
export function ArtCoverFlow() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const last = CARDS.length - 1;

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info;
    if ((offset.x < -SWIPE_PX || velocity.x < -SWIPE_V) && index < last) {
      setIndex(index + 1);
    } else if ((offset.x > SWIPE_PX || velocity.x > SWIPE_V) && index > 0) {
      setIndex(index - 1);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" && index < last) {
      event.preventDefault();
      setIndex(index + 1);
    } else if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      setIndex(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      setIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setIndex(last);
    }
  };

  const active = CARDS[index];

  return (
    /* mt: 18px of air under the headline puts the bubble top ~24px below the
       h1 (the reference's gap); pb: none — the subtitle's own mt-13 closes
       the card→subtitle gap (~13px, per the reference image). */
    <div className="relative mt-[18px] hidden overflow-x-clip pt-[46px] max-[641px]:block">
      <motion.div
        role="region"
        aria-roledescription="carousel"
        aria-label="Artwork showcase"
        tabIndex={0}
        onKeyDown={onKeyDown}
        /* Entrance rides the fan's P2 window (0.4–1.1s); x:0 doubles as the
           drag snap-back target. Reduced motion renders the final state. */
        initial={reduce ? false : { opacity: 0, y: 16, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={
          reduce
            ? { duration: 0 }
            : {
                opacity: { duration: 0.6, delay: TIMELINE.cascade, ease: EASE_GLIDE },
                y: { duration: 0.6, delay: TIMELINE.cascade, ease: EASE_GLIDE },
                x: { type: "spring", stiffness: 300, damping: 32 },
              }
        }
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.14}
        dragMomentum={false}
        onDragEnd={onDragEnd}
        className="flex cursor-grab justify-center outline-none active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-[#1458ED]/60"
      >
        {/* Track: card-sized box; its −index×65% glide keeps the active card
            centred. The elastic drag bleed is absorbed by overflow-x-clip on
            the WRAPPER (not here — clipping this box would hide the peeking
            neighbours; clip also never affects the vertical axis, so the tag
            above the cards is safe).
            Sizing follows the user's mobile reference image: the active card
            is 65vw of a 4:5 PORTRAIT frame (the artworks are ~4:5 at source —
            art-7 renders uncropped like the comp), capped at 300px, with the
            65% step leaving ~65px peeks at 393. */}
        <div
          className="relative aspect-[4/5] w-[65vw] max-w-[300px]"
          style={{
            transform: `translateX(${-index * STEP_PCT}%)`,
            transition: reduce ? undefined : `transform 0.45s ${GLIDE_CSS}`,
          }}
        >
          {CARDS.map((card, k) => {
            const distance = k - index;
            const isActive = distance === 0;
            const isPeek = Math.abs(distance) === 1;
            return (
              <div
                key={card.src}
                className="absolute left-1/2 top-0 h-full w-full [perspective:900px]"
                style={{
                  transform: `translateX(-50%) translateX(${k * STEP_PCT}%)`,
                  zIndex: isActive ? 10 : 0,
                }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1 : isPeek ? PEEK_SCALE : 0.8,
                    opacity: isActive ? 1 : isPeek ? PEEK_OPACITY : 0,
                    rotateY: distance === 0 ? 0 : distance < 0 ? ROTATE_Y : -ROTATE_Y,
                  }}
                  transition={reduce ? { duration: 0 } : { duration: 0.45, ease: EASE_GLIDE }}
                  className="h-full w-full"
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  <figure className="h-full w-full overflow-hidden rounded-[13px] bg-[#DDDDDD] shadow-[0_16px_28px_rgba(0,0,0,0.16)] dark:bg-[#2A2A2A]">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      width={184}
                      height={192}
                      unoptimized
                      /* Same rationale as the fan: every card sits above the
                         fold and is part of the entrance — no lazy pop-in. */
                      loading="eager"
                      className="h-full w-full object-cover"
                    />
                  </figure>

                  {isActive && BUBBLE_HANDLES.has(card.handle) ? (
                    /* Speech bubble above the ACTIVE card — but only for the
                       reference's two badges (cards 2 & 7); every other card
                       renders bare (user request). Position: absolute
                       -top-10 left-1/2 -translate-x-1/2; text re-keys per
                       handle so it updates on every swipe. 32px tall / 16px
                       type — the reference bubble's size. */
                    <div
                      aria-live="polite"
                      className="absolute -top-10 left-1/2 z-20 h-[32px] -translate-x-1/2 whitespace-nowrap rounded-[20px] px-[13px] text-[16px] leading-[32px] tracking-[-0.5px] text-white"
                      style={{ backgroundColor: card.tagBg }}
                    >
                      <motion.span
                        key={card.handle}
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={reduce ? { duration: 0 } : { duration: 0.18, ease: EASE_OUT }}
                        className="inline-block"
                      >
                        {card.handle}
                      </motion.span>
                      <span
                        aria-hidden="true"
                        style={{ borderTopColor: card.tagBg }}
                        className="absolute -bottom-[9px] left-1/2 ml-[-9px] h-0 w-0 border-x-[9px] border-x-transparent border-t-[12px]"
                      />
                    </div>
                  ) : null}
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Page-level spacing: 46px of headroom above the cards for the bubble
          (it hangs 40px up) — kept CONSTANT even on the five bare cards so
          the card never jumps mid-swipe; none below, the subtitle's mt-13 is
          the card→subtitle gap. The sr-only live region still announces the
          active creator handle for every card. */}
      <p className="sr-only">
        {active.handle}, artwork {index + 1} of {CARDS.length}
      </p>
    </div>
  );
}