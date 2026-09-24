"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Stop = {
  label: string;
  name: string;
  time: string;
  note?: string;
  /** Space above this row, matching the reference's uneven vertical rhythm. */
  gap: number;
};

const STOPS: Stop[] = [
  { label: "Pickup", name: "Main Street Bus Stop", time: "08:15 AM", note: "(in 5 mins)", gap: 0 },
  { label: "Passenger 2", name: "Oakwood Apartments", time: "08:20 AM", gap: 19 },
  { label: "Passenger 3", name: "Central Mall Entrance B", time: "08:25 AM", gap: 28 },
  {
    label: "Dropoff",
    name: "Tech Park, Building A",
    time: "08:40 AM",
    note: "(Estimated arrival)",
    gap: 18,
  },
];

/**
 * Indicator geometry, in CSS px from the timeline top (measured from the
 * reference): light-blue track behind segment 1, blue segment line, gray
 * lines below it, and one ring per stop (blue, muted blue, gray, target).
 * Row text tops land at 0/57/123/179 so rings sit on the label line
 * (row 1), block centre (rows 2-3) and name line (row 4), as in the source.
 */
const TRACK = { top: 0, height: 68, width: 23 };

const SEGMENTS = [
  { top: 17, height: 50, color: "#3C7DCB" },
  { top: 89, height: 42, color: "#E1E1E1" },
  { top: 154, height: 41, color: "#E1E1E1" },
] as const;

const RINGS = [
  { top: 0, size: 17, border: 3, color: "#3E89E1" },
  { top: 68, size: 17, border: 3, color: "#9DBBD3" },
  { top: 134, size: 15, border: 2, color: "#E0E0E0" },
  { top: 200, size: 16, border: 2, color: "#E0E0E0" },
] as const;

const CENTER_X = 11.5;

/**
 * Trip stops timeline: four text rows (label, name, time, optional note)
 * on the right, with an absolutely-positioned indicator column on the left
 * whose geometry is taken straight from the reference screenshot.
 */
export function TripTimeline() {
  const reduce = useReducedMotion();

  const rise: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 8 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.4, ease: "easeOut" } },
  };

  const drawLine = (delay: number): Variants => ({
    hidden: { scaleY: reduce ? 1 : 0 },
    show: {
      scaleY: 1,
      transition: {
        duration: reduce ? 0 : 0.45,
        ease: "easeOut",
        delay: reduce ? 0 : delay,
      },
    },
  });

  const popRing = (delay: number): Variants => ({
    hidden: { scale: reduce ? 1 : 0.4, opacity: reduce ? 1 : 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: reduce ? 0 : 0.35,
        ease: "easeOut",
        delay: reduce ? 0 : delay,
      },
    },
  });

  const section: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      aria-label="Trip stops"
      variants={section}
      initial="hidden"
      animate="show"
      className="relative mt-3"
    >
      {/* Light-blue track behind the first (active) segment. */}
      <motion.span
        variants={drawLine(0.1)}
        aria-hidden="true"
        className="absolute rounded-full bg-[#C1DDFF]"
        style={{
          top: TRACK.top,
          left: CENTER_X - TRACK.width / 2,
          width: TRACK.width,
          height: TRACK.height,
          transformOrigin: "top",
        }}
      />

      {/* Connecting lines: blue through the track segment, gray below. */}
      {SEGMENTS.map((segment, index) => (
        <motion.span
          key={`${segment.top}-${index}`}
          variants={drawLine(0.16 + index * 0.07)}
          aria-hidden="true"
          className="absolute w-[2.5px] rounded-full"
          style={{
            top: segment.top,
            height: segment.height,
            left: CENTER_X - 1.25,
            backgroundColor: segment.color,
            transformOrigin: "top",
          }}
        />
      ))}

      {/* Stop rings, drawn above the lines (white fill masks overlaps). */}
      {RINGS.map((ring, index) => (
        <motion.span
          key={`${ring.top}-${index}`}
          variants={popRing(0.12 + index * 0.07)}
          aria-hidden="true"
          className="absolute rounded-full bg-white"
          style={{
            top: ring.top,
            left: CENTER_X - ring.size / 2,
            width: ring.size,
            height: ring.size,
            border: `${ring.border}px solid ${ring.color}`,
          }}
        >
          {index === RINGS.length - 1 ? (
            /* Dropoff target: filled dot inside the ring. */
            <span
              className="absolute left-1/2 top-1/2 block h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E0E0E0]"
            />
          ) : null}
        </motion.span>
      ))}

      {STOPS.map((stop) => (
        <motion.div
          key={stop.label}
          variants={rise}
          className="flex justify-between pl-[33px]"
          style={{ marginTop: stop.gap || undefined }}
        >
          <div className="flex flex-col gap-[4px]">
            <span className="text-[13.5px] leading-[17px] text-[#767676]">{stop.label}</span>
            <span className="text-[14px] font-semibold leading-[17px] text-black">
              {stop.name}
            </span>
          </div>
          {/* Right column stretches with the row: time is centred when there
              is no note, and top/bottom aligned with the text lines when
              there is one — matching the reference. */}
          <div className="flex flex-col items-end justify-center gap-[3px]">
            <span className="text-[16px] font-semibold leading-[20px] tabular-nums text-black">
              {stop.time}
            </span>
            {stop.note ? (
              <span className="text-[12px] leading-[16px] text-[#737373]">{stop.note}</span>
            ) : null}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
