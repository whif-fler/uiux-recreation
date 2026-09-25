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
/** Cover-flow depth: side cards angle away from the viewer (3D). */
const ROTATE_Y = 30;
/** Commit a swipe past 40px of travel or a flick at 450px/s. */
const SWIPE_PX = 40;
const SWIPE_V = 450;
/** EASE_GLIDE as a CSS cubic-bezier — the index glide on the track. */
const GLIDE_CSS = "cubic-bezier(0.4, 0, 0.15, 1)";

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
    <div className="relative hidden max-[641px]:block">
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
            centred. overflow-x-clip on the wrapper absorbs the elastic drag
            bleed so the document never scrolls sideways (clip does NOT
            affect the vertical axis, so the tag above the cards is safe). */}
        <div
          className="relative aspect-[184/192] w-[46vw] max-w-[200px] overflow-x-clip [perspective:900px]"
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
                className="absolute left-1/2 top-0 h-full w-full"
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

                  {isActive ? (
                    /* Single dynamic speech bubble above the ACTIVE card
                       (spec: absolute -top-10 left-1/2 -translate-x-1/2);
                       text re-keys per handle so it updates on every swipe. */
                    <div
                      aria-live="polite"
                      className="absolute -top-10 left-1/2 z-20 h-[36px] -translate-x-1/2 whitespace-nowrap rounded-[20px] px-[14px] text-[18px] leading-[36px] tracking-[-0.5px] text-white"
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

      {/* Page-level spacing: 46px of headroom for the bubble above the cards
          (it hangs 40px up), 20px below so the subtitle keeps the fan-era
          ~33px gap. Live-region text for assistive tech mirrors the tag. */}
      <p className="sr-only">
        {active.handle}, artwork {index + 1} of {CARDS.length}
      </p>
    </div>
  );
}
