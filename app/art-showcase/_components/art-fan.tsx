"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CARDS } from "./art-cards";
import { EASE_GLIDE, EASE_OUT, TAG_SPRING, TIMELINE } from "./motion-timeline";

type CreatorTag = {
  label: string;
  background: string;
  rotate: number;
  position: { left?: number; right?: number; top: number };
  tail: string;
};

/**
 * Handle positions and fills matched to the reference's rendered pixels:
 * @coplin (138, −16) sits above the card 1/2 junction, @andrea (right 11,
 * top 4) above the card 6/7 junction; colours are the reference's badge
 * core values re-derived through this renderer's colour response. Tail
 * offsets are Tailwind classes so the JIT sees them; every geometry value
 * is multiplied by the element scale `var(--k, 1)` (see globals.css).
 */
const TAGS: readonly CreatorTag[] = [
  {
    label: "@coplin",
    background: "#1458ED",
    rotate: -1,
    position: { left: 138, top: -16 },
    tail: "right-[calc(17px_*_var(--k,_1))]",
  },
  {
    label: "@andrea",
    background: "#59AC8B",
    rotate: 10,
    position: { right: 11, top: 4 },
    tail: "left-[calc(18px_*_var(--k,_1))]",
  },
];

/** Reference-px geometry × the element scale — inline-style counterpart of
 *  the `calc(× var(--k, 1))` Tailwind utilities (script-written `--k` on
 *  <html>: `h/754` ≥641, `1` ≤640 / other routes / JS-off). */
const kpx = (value: number) => `calc(var(--k, 1) * ${value}px)`;

/**
 * Fanned artwork stage (930×298 × the element scale `var(--k, 1)`) with a
 * broad soft group shadow. Centered through a flex wrapper with `shrink-0`
 * so the fixed-width stage stays centred even when it overflows narrow
 * viewports — the native-size desktop regime (user: "keep overall size and
 * everything same … allow the cards to be clipped" + "instead of scaling
 * the whole container … increase the size of the individual elements")
 * keeps the stage at reference size down to 641px and lets the overflow
 * clip symmetrically at the viewport edges, while on taller-than-reference
 * screens the ELEMENTS (not a container transform) grow with the height so
 * the cards keep the reference's proportions and the composition fills the
 * frame; entrance offsets below ride the card's own box as a percentage so
 * they stay centred at any `--k` (transient only — the settled transform
 * is always x 0 / y 0).
 */
export function ArtFan() {
  const reduce = useReducedMotion();
  // art-7 (the green poster) leads: it rises from the bottom of the page to
  // the CENTRE of the stage during the headline reveal (0.03–0.4s), then rolls
  // to the side into its final slot while the remaining six cards fan out
  // from the centre underneath it — bunched as if by negative margins,
  // staggered outward in rings (pairs) with distinct rotational offsets: the
  // smooth waterfall. Final x/y are always 0, so the settled transform (and
  // pixels) are unchanged.
  const primaryIndex = CARDS.length - 1;
  const primary = CARDS[primaryIndex];
  /** Horizontal centre column of the stage — where art-7 pauses. */
  const CENTER_LEFT = (930 - 184) / 2; // 373
  const centerX = CENTER_LEFT - primary.left; // −354 during rise/hold
  const RISE_Y = 200; // starts just below the page bottom
  const RISE_ROT = -32; // counter-clockwise swing up to flat…
  const ROLL_PEAK = 26; // …then a clockwise roll onto its audited +9.7°

  /**
   * Entrance offsets are authored in reference px, but the card box itself is
   * `184 × var(--k)` / `192 × var(--k)` — a raw `-354px` therefore lands the
   * card off-centre by `(1 − k)·354` whenever `--k ≠ 1` (measured: −49px at
   * 1282×650, +130px at 1920×1032). Expressing them as a percentage of the
   * card's own box cancels `--k` exactly, so the rise always starts on the
   * stage centre-line at any laptop size while `--k = 1` renders
   * pixel-identical to the audited reference px value.
   */
  const CARD_W = 184;
  const CARD_H = 192;
  const pctX = (refPx: number) => `${(refPx / CARD_W) * 100}%`;
  const pctY = (refPx: number) => `${(refPx / CARD_H) * 100}%`;
  const ZERO = "0%";

  // Two-phase timing for art-7, split PER CHANNEL instead of one shared
  // multi-segment `times` track: y/scale rise 0.03–0.4, x glides 0.4–1.1,
  // and rotate rides a single even keyframe track (−32 → 0 → peak → +9.7)
  // over the whole sequence — all channels start/end at zero velocity on
  // EASE_GLIDE, so the rise → roll handoff has no kink and x/rotate can't
  // drift apart (they land together at 1.1s).
  const rollEnd = TIMELINE.roll - TIMELINE.anchor + TIMELINE.rollDur;

  return (
    <div
      /* ≤640 hands the slot to the cover-flow carousel (`art-cover-flow.tsx`,
         user-requested mobile design): the fanned stage bleeds off-screen at
         phone widths. Pure CSS show/hide — both trees exist on every load, so
         there is no hydration flash and ≥641 markup is untouched. */
      className="art-fan-row mt-[calc(-8px_*_var(--k,_1))] flex justify-center max-[641px]:hidden"
    >
      <div className="art-fan-stage relative h-[calc(298px_*_var(--k,_1))] w-[calc(930px_*_var(--k,_1))] shrink-0 [filter:drop-shadow(0_calc(24px_*_var(--k,_1))_calc(18px_*_var(--k,_1))_rgba(0,0,0,0.13))]">
        {CARDS.map((card, index) => {
          const isPrimary = index === primaryIndex;
          const ring = Math.round(Math.abs(CENTER_LEFT - card.left) / 120);
          const delay = reduce
            ? 0
            : isPrimary
              ? TIMELINE.anchor
              : TIMELINE.cascade + ring * TIMELINE.cascadeStep;
          // Emergence: the six followers start stacked in the centre column
          // (the deck packed as if by negative margins) and fan out
          // underneath art-7 (lower z-index) into their audited slots — the
          // offsets ride the card's own box so they scale with `--k`.
          const startX = pctX(isPrimary ? centerX : CENTER_LEFT - card.left);
          const startY = pctY(isPrimary ? RISE_Y : primary.top - card.top);
          // Followers start flat (the deck is bunched beneath art-7's centre
          // pose) and splay into their distinct audited angles; art-7's
          // rotation is keyframed rise → roll.
          const startRotate = isPrimary ? RISE_ROT : 0;
          // Spec smoothness pass: cards glide — gentle ramp-in from rest,
          // fluid middle, soft landing — so the fan follows art-7 without
          // the expo-out snap (no spring: no bounce, no kink).
          const settle = {
            duration: TIMELINE.cascadeDur,
            ease: EASE_GLIDE,
            delay,
          };
          const HOVER = { duration: 0.28, ease: EASE_OUT };
          return (
            <motion.div
              key={card.src}
              initial={{
                opacity: 0,
                x: reduce ? ZERO : startX,
                y: reduce ? ZERO : startY,
                scale: reduce ? 1 : isPrimary ? 0.9 : 0.92,
                rotate: reduce ? card.rotate : startRotate,
              }}
              animate={
                reduce || !isPrimary
                  ? { opacity: 1, x: ZERO, y: ZERO, scale: 1, rotate: card.rotate }
                  : {
                      opacity: 1,
                      x: ZERO,
                      y: ZERO,
                      scale: 1,
                      rotate: [RISE_ROT, 0, ROLL_PEAK, card.rotate],
                    }
              }
              transition={
                reduce
                  ? { duration: 0 }
                  : isPrimary
                    ? {
                        opacity: {
                          duration: TIMELINE.rise,
                          delay: TIMELINE.anchor,
                          ease: "easeOut",
                        },
                        x: {
                          delay: TIMELINE.roll,
                          duration: TIMELINE.rollDur,
                          ease: EASE_GLIDE,
                        },
                        y: {
                          delay: TIMELINE.anchor,
                          duration: TIMELINE.rise,
                          ease: EASE_GLIDE,
                        },
                        scale: {
                          delay: TIMELINE.anchor,
                          duration: TIMELINE.rise,
                          ease: EASE_GLIDE,
                        },
                        rotate: {
                          delay: TIMELINE.anchor,
                          duration: rollEnd,
                          ease: [EASE_GLIDE, "easeInOut", "easeInOut"],
                        },
                      }
                    : {
                        x: settle,
                        y: settle,
                        scale: settle,
                        rotate: settle,
                        opacity: { duration: 0.22, delay, ease: "easeOut" },
                      }
              }
              style={{
                left: kpx(card.left),
                top: kpx(card.top),
                zIndex: index + 1,
              }}
              className="absolute h-[calc(192px_*_var(--k,_1))] w-[calc(184px_*_var(--k,_1))]"
            >
              {/* The hover lift lives on the inner figure: the gesture (y −6)
                  and the entrance keyframes (the green card's rise/roll) must
                  never write `y` on the same element — sharing one transform
                  channel made the card jitter under the cursor. */}
              <motion.figure
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -6,
                        // explicit transition: entrance delays must not defer gestures
                        transition: HOVER,
                      }
                }
                transition={HOVER}
                className="h-full w-full overflow-hidden rounded-[calc(13px_*_var(--k,_1))] bg-[#DDDDDD] dark:bg-[#2A2A2A]"
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={184}
                  height={192}
                  unoptimized
                  /* Every card sits above the fold (the fan is the hero) and is
                     part of the entrance choreography — lazy-loading them made
                     Next flag the LCP card (art-4) and could pop cards in late. */
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </motion.figure>
            </motion.div>
          );
        })}

        {TAGS.map((tag) => (
          <motion.div
            key={tag.label}
            initial={{
              opacity: 0,
              scale: reduce ? 1 : 0,
              rotate: tag.rotate,
            }}
            animate={{ opacity: 1, scale: 1, rotate: tag.rotate }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    // Spec: fast pop with a slight overshoot — bouncy spring
                    // 200/15 on scale, a quick fade so the pop reads first.
                    // `type: "spring"` is REQUIRED: framer-motion 13 only
                    // selects the spring generator for an explicit type —
                    // bare stiffness/damping keys silently fall back to a
                    // plain keyframes tween (measured: no overshoot).
                    opacity: {
                      duration: 0.3,
                      delay: TIMELINE.tags,
                      ease: EASE_OUT,
                    },
                    scale: { type: "spring", ...TAG_SPRING, delay: TIMELINE.tags },
                  }
            }
            style={{
              ...(tag.position.left !== undefined
                ? { left: kpx(tag.position.left) }
                : {}),
              ...(tag.position.right !== undefined
                ? { right: kpx(tag.position.right) }
                : {}),
              top: kpx(tag.position.top),
              zIndex: 8,
              backgroundColor: tag.background,
            }}
            className="absolute h-[calc(36px_*_var(--k,_1))] rounded-[calc(20px_*_var(--k,_1))] px-[calc(14px_*_var(--k,_1))] text-[calc(18px_*_var(--k,_1))] leading-[calc(36px_*_var(--k,_1))] tracking-[calc(-0.5px_*_var(--k,_1))] text-white max-[641px]:translate-x-[15px]"
          >
            {tag.label}
            <span
              aria-hidden="true"
              style={{ borderTopColor: tag.background }}
              className={`absolute bottom-[calc(-9px_*_var(--k,_1))] h-0 w-0 border-x-[calc(9px_*_var(--k,_1))] border-x-transparent border-t-[calc(12px_*_var(--k,_1))] ${tag.tail}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}