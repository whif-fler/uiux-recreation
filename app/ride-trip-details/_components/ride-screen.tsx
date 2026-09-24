"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { AppHeader } from "./app-header";
import { BottomActions } from "./bottom-actions";
import { DriverCard, VerificationBadges } from "./driver-card";
import { inter } from "./fonts";
import { FareSplitCard } from "./fare-split-card";
import { ReminderRow } from "./reminder-row";
import { TripTimeline } from "./trip-timeline";

/**
 * Ride-Share Trip Details screen.
 *
 * Responsive states:
 * - <md:   full-bleed white app screen filling the viewport.
 * - md-lg: centred 393×850 phone panel on the #DEDEDE page canvas.
 * - >=lg:  same panel with `zoom: 1.448` so its visual size (569×1231) matches
 *         the reference image's phone pixel-for-pixel at a 1200×1499 viewport.
 */
export function RideScreen() {
  const reduce = useReducedMotion();

  const root: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.07,
        delayChildren: reduce ? 0 : 0.03,
      },
    },
  };

  const main: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
  };

  const section: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.4, ease: "easeOut" } },
  };

  return (
    <div className="min-h-dvh w-full bg-white md:flex md:items-center md:justify-center md:bg-[#DEDEDE] md:py-10">
      <motion.div
        variants={root}
        initial="hidden"
        animate="show"
        className={`${inter.className} flex h-dvh w-full flex-col overflow-hidden bg-white md:h-[850px] md:w-[393px] md:shrink-0 md:rounded-[63px] lg:[zoom:1.448]`}
      >
        <h1 className="sr-only">Ride-Share Trip Details</h1>

        {/* The iOS status bar (9:41 + signal/wifi/battery) was removed at the
            user's request — the page spec already classed it as OS chrome
            ("not part of app"), and its 52px band read as dead space. 20px is
            the tightened top pad: the floor is ~11px, because the brand mark
            (pl-4, pt-10 → content top at pad+10, left edge x16) must stay
            inside the panel's 63px top-left arc or `overflow-hidden` clips it
            (boundary x = 63 − √(63² − (63−y)²) ≤ 16 needs y ≥ 21). */}
        <motion.div variants={section} className="shrink-0 pt-[20px]">
          <AppHeader />
        </motion.div>

        <motion.main
          variants={main}
          className="min-h-0 flex-1 overflow-y-auto px-4 pt-[17px]"
        >
          <motion.div variants={section}>
            <DriverCard />
          </motion.div>
          <motion.div variants={section}>
            <VerificationBadges />
          </motion.div>
          <motion.h2
            variants={section}
            className="mt-[21px] text-[13px] font-semibold leading-[17px] text-black"
          >
            Trip Info
          </motion.h2>
          <TripTimeline />
          <motion.div variants={section}>
            <FareSplitCard />
          </motion.div>
          <motion.div variants={section}>
            <ReminderRow />
          </motion.div>
        </motion.main>

        <motion.div variants={section}>
          <BottomActions />
        </motion.div>
      </motion.div>
    </div>
  );
}
