"use client";

import { motion, useReducedMotion } from "framer-motion";

type ArtCard = {
  src: string;
  alt: string;
  left: number;
  top: number;
  rotate: number;
};

/**
 * Seven-card fan. Geometry comes from the Claude prototype blueprint and
 * was corrected against the reference image (docs/references/art-showcase.webp):
 * card-7 left 744 → 723 so the fan's right edge lands at x1100, and the
 * stage box sits at y282 (headline ink ends y289; cards ink y≈329..572).
 * The overlap order, uneven tops and −10°..+10° rotations are intentional —
 * this must never become a regular grid.
 */
const CARDS: readonly ArtCard[] = [
  { src: "/art-showcase/art-1.svg", alt: "Collage artwork", left: 15, top: 83, rotate: -10 },
  { src: "/art-showcase/art-2.svg", alt: "Blue line artwork", left: 139, top: 53, rotate: -4 },
  { src: "/art-showcase/art-3.svg", alt: "Yellow poster artwork", left: 277, top: 62, rotate: -3 },
  { src: "/art-showcase/art-4.svg", alt: "Abstract gradient artwork", left: 386, top: 64, rotate: 1 },
  { src: "/art-showcase/art-5.svg", alt: "Portrait study artwork", left: 498, top: 60, rotate: 6 },
  { src: "/art-showcase/art-6.svg", alt: "Graphic number artwork", left: 627, top: 70, rotate: 7 },
  { src: "/art-showcase/art-7.svg", alt: "Green poster artwork", left: 723, top: 76, rotate: 10 },
];

type CreatorTag = {
  label: string;
  background: string;
  rotate: number;
  position: { left?: number; right?: number; top: number };
  tail: string;
};

/** Handle positions corrected to the reference: @coplin (138, −18), @andrea (right 15, top 7). */
const TAGS: readonly CreatorTag[] = [
  {
    label: "@coplin",
    background: "#2467DC",
    rotate: -1,
    position: { left: 138, top: -18 },
    tail: "right-[17px]",
  },
  {
    label: "@andrea",
    background: "#5AAF91",
    rotate: 10,
    position: { right: 15, top: 7 },
    tail: "left-[18px]",
  },
];

/**
 * Fanned artwork stage (930×298) with a broad soft group shadow.
 * Centered through a flex wrapper with `shrink-0` so the fixed-width stage
 * stays centred even when it overflows narrow viewports (the prototype's
 * `margin: auto` + transformed origin shifted the fan off-centre there).
 * Below 900/640px the group scales .84/.62 with compensating bottom margin.
 */
export function ArtFan() {
  const reduce = useReducedMotion();
  const centerIndex = (CARDS.length - 1) / 2;

  return (
    <div className="mt-[-8px] flex justify-center max-[900px]:mb-[-48px] max-[640px]:mb-[-92px]">
      <div className="relative h-[298px] w-[930px] shrink-0 origin-top [filter:drop-shadow(0_24px_18px_rgba(0,0,0,0.13))] max-[900px]:scale-[0.84] max-[640px]:scale-[0.62]">
        {CARDS.map((card, index) => (
          <motion.figure
            key={card.src}
            initial={{
              opacity: 0,
              y: reduce ? 0 : 36,
              rotate: reduce ? card.rotate : card.rotate * 0.35,
            }}
            animate={{ opacity: 1, y: 0, rotate: card.rotate }}
            transition={{
              duration: reduce ? 0 : 0.55,
              delay: reduce ? 0 : 0.18 + Math.abs(index - centerIndex) * 0.07,
              ease: "easeOut",
            }}
            whileHover={reduce ? undefined : { y: -6 }}
            style={{ left: card.left, top: card.top, zIndex: index + 1 }}
            className="absolute h-[192px] w-[184px] overflow-hidden rounded-[13px] bg-[#DDDDDD]"
          >
            <img
              src={card.src}
              alt={card.alt}
              width={184}
              height={192}
              className="h-full w-full object-cover"
            />
          </motion.figure>
        ))}

        {TAGS.map((tag) => (
          <motion.div
            key={tag.label}
            initial={{
              opacity: 0,
              y: reduce ? 0 : 12,
              scale: reduce ? 1 : 0.85,
              rotate: tag.rotate,
            }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: tag.rotate }}
            transition={{
              duration: reduce ? 0 : 0.4,
              delay: reduce ? 0 : 0.75,
              ease: "easeOut",
            }}
            style={{ ...tag.position, zIndex: 8, backgroundColor: tag.background }}
            className="absolute h-[35px] rounded-[20px] px-[14px] text-[18px] leading-[35px] tracking-[-0.5px] text-white"
          >
            {tag.label}
            <span
              aria-hidden="true"
              style={{ borderTopColor: tag.background }}
              className={`absolute bottom-[-9px] h-0 w-0 border-x-[9px] border-x-transparent border-t-[12px] ${tag.tail}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
