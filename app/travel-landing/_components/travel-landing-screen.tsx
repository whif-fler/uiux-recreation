"use client";

import { motion, useReducedMotion } from "framer-motion";
import { nunitoSans } from "./fonts";
import styles from "./travel-landing.module.css";

/**
 * /travel-landing — Capsule travel app landing.
 *
 * Static recreation of the reference (1199 × 666): pill navigation, three-line
 * fading headline, four overlapping rotated ticket/booking cards, sub-copy and
 * the "Download for IOS" call to action. All geometry lives in
 * travel-landing.module.css; every value is measured from the reference image
 * (derivation in docs/page-specs/travel-landing/visual-spec.md).
 *
 * The nav brand mark and the CTA glyph are original placeholders for the
 * reference's logo marks (see app/travel-landing/AGENTS.md).
 */

/** Shared settle easing — matches the design's soft, rounded character. */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type EntranceProps = {
  initial: { opacity: number; y?: number; scale?: number; rotate?: number } | false;
  animate: { opacity: number; y?: number; scale?: number; rotate?: number };
  transition?: { duration: number; delay: number; ease: typeof EASE };
};

/**
 * Entrance choreography: everything rises a short distance into its measured
 * reference position and settles there (no looping idle motion, so the
 * settled state is pixel-identical to the reference). Under prefers-reduced
 * motion every element renders at its final state without animating.
 */
function entrance(
  reduce: boolean | null,
  from: { y?: number; scale?: number; rotate?: number },
  delay: number,
  duration = 0.55,
  /** Rest opacity — must match the element's design opacity (e.g. the
      headline's fading lines) or an inline opacity would override it. */
  restOpacity = 1
): EntranceProps {
  if (reduce) return { initial: false, animate: { opacity: restOpacity } };
  return {
    initial: { opacity: 0, ...from },
    animate: {
      opacity: restOpacity,
      y: 0,
      scale: 1,
      ...(from.rotate !== undefined ? { rotate: from.rotate } : {}),
    },
    transition: { duration, delay, ease: EASE },
  };
}

export function TravelLandingScreen() {
  const reduce = useReducedMotion();

  return (
    <div className={`${styles.screen} ${nunitoSans.variable}`}>
      <div className={styles.stage}>
        {/* ── Navigation ─────────────────────────────────────────── */}
        <header className={styles["site-header"]}>
          <motion.nav
            className={styles["nav-pill"]}
            aria-label="Main"
            {...entrance(reduce, { y: -10 }, 0, 0.5)}
          >
            <a className={styles.brand} href="#">
              <span className={styles["brand-mark"]} aria-hidden="true">
                <svg viewBox="0 0 18 19" focusable="false">
                  <rect
                    x="7.5"
                    y="4.5"
                    width="11"
                    height="14"
                    rx="4.5"
                    fill="#ffffff"
                    opacity="0.55"
                  />
                  <circle cx="6.6" cy="7" r="6.6" fill="#ffffff" />
                </svg>
              </span>
              <span className={styles["brand-name"]}>Capsule</span>
            </a>

            <ul className={styles["nav-links"]}>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">
                  Company
                  <svg
                    className={styles.chevron}
                    viewBox="0 0 6 4"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M0.6 0.7 3 3.1 5.4 0.7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  Help
                  <svg
                    className={styles.chevron}
                    viewBox="0 0 6 4"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M0.6 0.7 3 3.1 5.4 0.7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>

            <a className={styles["nav-login"]} href="#">
              Log in
            </a>
          </motion.nav>
        </header>

        {/* ── Headline ───────────────────────────────────────────── */}
        <h1 className={styles.headline}>
          <motion.span
            className={`${styles["headline-line"]} ${styles["headline-line--1"]}`}
            {...entrance(reduce, { y: 16 }, 0.1)}
          >
            Place for your
          </motion.span>
          <motion.span
            className={`${styles["headline-line"]} ${styles["headline-line--2"]}`}
            {...entrance(reduce, { y: 16 }, 0.18, 0.55, 0.87)}
          >
            tickets, booking
          </motion.span>
          <motion.span
            className={`${styles["headline-line"]} ${styles["headline-line--3"]}`}
            {...entrance(reduce, { y: 16 }, 0.26, 0.55, 0.73)}
          >
            and documents
          </motion.span>
        </h1>

        {/* ── Overlapping ticket cards ───────────────────────────── */}
        <div className={styles["cards-wrap"]}>
          <div className={styles["cards-frame"]}>
            {/* Card A — feature copy */}
            <motion.article
              className={`${styles.card} ${styles["card--a"]}`}
              {...entrance(reduce, { y: 40, rotate: -7.48 }, 0.34, 0.65)}
            >
              <p className={styles["card-copy"]}>
                <span>
                  Manage your flights, <span className={styles.emoji}>
                    <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true" focusable="false">
                      <path
                        transform="rotate(42 7 7)"
                        fill="#3c82cd"
                        d="M7 .7c.9 0 1.5.9 1.5 2.6v2.9l4.8 2.9v1.5l-4.8-1.5v2.5l1.8 1.4v1.1L7 13.2l-3.3.5v-1.1l1.8-1.4V8.6L.7 10.1V8.6l4.8-2.9V3.3C5.5 1.6 6.1.7 7 .7z"
                      />
                    </svg>
                  </span>
                </span>
                <span>
                  bookings and documents <span className={styles.emoji}>
                    <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true" focusable="false">
                      <rect x="1.5" y="0.9" width="11" height="12.4" rx="2.2" fill="#7fb8de" />
                      <rect x="3.6" y="3" width="6.8" height="6.4" rx="1.3" fill="none" stroke="#3f80bd" strokeWidth="1.8" />
                      <rect x="5.4" y="4.7" width="3.2" height="3" rx="0.8" fill="#d3ebfa" />
                    </svg>
                  </span>
                </span>
                <span>
                  directly in one app <span className={styles.emoji}>
                    <svg viewBox="0 0 12 14" width="12" height="14" aria-hidden="true" focusable="false">
                      <rect x="1.2" y="0.7" width="9.6" height="12.6" rx="2.2" fill="#f2f9fd" stroke="#83b3d6" strokeWidth="1.7" />
                      <rect x="3.6" y="3.6" width="4.8" height="6.8" rx="1" fill="#cbe6f7" />
                    </svg>
                  </span>
                </span>
              </p>
              <span className={`${styles["card-action"]} ${styles["card-action--a"]}`}>
                <svg
                  className={styles["plus-dot"]}
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle
                    cx="5"
                    cy="5"
                    r="4.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  />
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                </svg>
                Add your stuff
              </span>
            </motion.article>

            {/* Card Norway */}
            <motion.article
              className={`${styles.card} ${styles["card--nor"]}`}
              {...entrance(reduce, { y: 40, rotate: 11 }, 0.41, 0.65)}
            >
              <span
                className={`${styles["card-flag"]} ${styles["card-flag--no"]}`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 36 26" focusable="false">
                  <rect width="36" height="26" fill="#ba0c2f" />
                  <rect x="0" y="9" width="36" height="8" fill="#ffffff" />
                  <rect x="10" y="0" width="8" height="26" fill="#ffffff" />
                  <rect x="0" y="11" width="36" height="4" fill="#002868" />
                  <rect x="12" y="0" width="4" height="26" fill="#002868" />
                </svg>
              </span>
              <p className={styles["card-country"]}>Norway</p>
              <p className={styles["card-days"]}>12 Days</p>
              <p className={styles["card-date"]}>Thu, 5 Dec</p>
            </motion.article>

            {/* Card black — flight status */}
            <motion.article
              className={`${styles.card} ${styles["card--blk"]}`}
              {...entrance(reduce, { y: 40, rotate: -8.6 }, 0.48, 0.65)}
            >
              <span
                className={`${styles["card-flag"]} ${styles["card-flag--us"]}`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 35 24" focusable="false">
                  <rect width="35" height="24" fill="#ffffff" />
                  <g fill="#b22234">
                    <rect y="0" width="35" height="1.85" />
                    <rect y="3.7" width="35" height="1.85" />
                    <rect y="7.4" width="35" height="1.85" />
                    <rect y="11.1" width="35" height="1.85" />
                    <rect y="14.8" width="35" height="1.85" />
                    <rect y="18.5" width="35" height="1.85" />
                    <rect y="22.15" width="35" height="1.85" />
                  </g>
                  <rect width="15" height="13" fill="#3c3b6e" />
                  <g fill="#ffffff">
                    <circle cx="3" cy="3" r="1" />
                    <circle cx="7.5" cy="3" r="1" />
                    <circle cx="12" cy="3" r="1" />
                    <circle cx="5.2" cy="6.5" r="1" />
                    <circle cx="9.8" cy="6.5" r="1" />
                    <circle cx="3" cy="10" r="1" />
                    <circle cx="7.5" cy="10" r="1" />
                    <circle cx="12" cy="10" r="1" />
                  </g>
                </svg>
              </span>

              <p className={styles["blk-number"]}>WE1786</p>
              <p className={styles["blk-ref"]}>#WE975333</p>
              <p className={styles["blk-country"]}>USA</p>

              <svg
                className={`${styles["blk-plane"]} ${styles["blk-plane--1"]}`}
                viewBox="0 0 12 14"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M6 0 7.2 4 12 6.8 12 8.6 7 7.4 7 10.6 9.2 12.4 9.2 13.8 6 12.6 2.8 13.8 2.8 12.4 5 10.6 5 7.4 0 8.6 0 6.8 4.8 4Z"
                  fill="#1974e2"
                />
              </svg>
              <span className={styles["blk-dash"]} aria-hidden="true" />
              <svg
                className={`${styles["blk-plane"]} ${styles["blk-plane--2"]}`}
                viewBox="0 0 12 14"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M6 0 7.2 4 12 6.8 12 8.6 7 7.4 7 10.6 9.2 12.4 9.2 13.8 6 12.6 2.8 13.8 2.8 12.4 5 10.6 5 7.4 0 8.6 0 6.8 4.8 4Z"
                  fill="#ffffff"
                />
              </svg>

              <p className={styles["blk-days"]}>25 Days</p>
              <p className={styles["blk-date"]}>Fri, 18 Dec</p>
            </motion.article>

            {/* Card C — route */}
            <motion.article
              className={`${styles.card} ${styles["card--c"]}`}
              {...entrance(reduce, { y: 40, rotate: 13.34 }, 0.55, 0.65)}
            >
              <p className={`${styles["c-row"]} ${styles["c-row--from"]}`}>
                <span>New Jersey</span>
                <svg
                  className={styles["c-arrow"]}
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M3 11 11 3M4.6 3H11v6.4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>

              <p
                className={`${styles["c-row"]} ${styles["c-row--time"]} ${styles["c-row--t1"]}`}
              >
                <svg
                  className={styles["c-plane"]}
                  viewBox="0 0 12 14"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M6 0 7.2 4 12 6.8 12 8.6 7 7.4 7 10.6 9.2 12.4 9.2 13.8 6 12.6 2.8 13.8 2.8 12.4 5 10.6 5 7.4 0 8.6 0 6.8 4.8 4Z"
                    fill="#1974e2"
                  />
                </svg>
                <span>5:23pm</span>
              </p>

              <span className={styles["c-dash"]} aria-hidden="true" />

              <p
                className={`${styles["c-row"]} ${styles["c-row--time"]} ${styles["c-row--t2"]}`}
              >
                <svg
                  className={`${styles["c-plane"]} ${styles["c-plane--muted"]}`}
                  viewBox="0 0 12 14"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M6 0 7.2 4 12 6.8 12 8.6 7 7.4 7 10.6 9.2 12.4 9.2 13.8 6 12.6 2.8 13.8 2.8 12.4 5 10.6 5 7.4 0 8.6 0 6.8 4.8 4Z"
                    fill="#1974e2"
                  />
                </svg>
                <span>8:43pm</span>
              </p>

              <p className={`${styles["c-row"]} ${styles["c-row--to"]}`}>
                <span>California</span>
                <svg
                  className={styles["c-arrow"]}
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M3 3 11 11M11 4.6V11H4.6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>

              <span className={`${styles["card-action"]} ${styles["card-action--c"]}`}>
                Check it live
              </span>
            </motion.article>
          </div>
        </div>

        {/* ── Sub copy ───────────────────────────────────────────── */}
        <p className={styles.subcopy}>
          <motion.span
            className={styles["subcopy-line--1"]}
            {...entrance(reduce, { y: 10 }, 0.64, 0.5)}
          >
            Everything related to travelling
          </motion.span>
          <motion.span
            className={styles["subcopy-line--2"]}
            {...entrance(reduce, { y: 10 }, 0.7, 0.5)}
          >
            stored in one place. Never
          </motion.span>
          <motion.span
            className={styles["subcopy-line--3"]}
            {...entrance(reduce, { y: 10 }, 0.76, 0.5)}
          >
            forget anything important.
          </motion.span>
        </p>

        {/* ── Call to action ─────────────────────────────────────── */}
        <motion.a
          className={styles.cta}
          href="#"
          {...entrance(reduce, { y: 12, scale: 0.96 }, 0.84, 0.55)}
          whileHover={reduce ? undefined : { y: -1 }}
          whileFocus={reduce ? undefined : { y: -1 }}
        >
          <svg
            className={styles["cta-mark"]}
            viewBox="0 0 12 14"
            aria-hidden="true"
            focusable="false"
          >
            <rect x="1" y="0" width="10" height="14" rx="2.6" fill="#131313" />
            <circle cx="6" cy="11.4" r="1.15" fill="#ffffff" />
          </svg>
          <span>Download for IOS</span>
        </motion.a>
      </div>
    </div>
  );
}
