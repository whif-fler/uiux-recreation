/**
 * Entrance choreography timeline for /art-showcase.
 *
 * Spec-driven pacing (user's "Element Durations & Timing Breakdown" — the
 * authoritative schedule; total entrance = 1.8s), later revised by the
 * user's motion pass: text and buttons FADE IN AND RISE (fade-in-up) —
 * every clip-path wipe is gone ("Replace the wipes") — and every entrance
 * runs on EASE_GLIDE ("smoother … fluid … too snappy": the expo-out
 * EASE_OUT front-loaded 45% of the travel into the first 40ms).
 *
 *   P0 0.0–0.62 — header entrance (user request, supersedes "static"):
 *                 the logo and the action cluster fade in + rise at t=0,
 *                 then the six nav links in a right-to-left wave, 60ms
 *                 steps, 260ms each (last link lands 0.62s).
 *   P1 0.0–0.56 — headline fades in word-by-word (60ms steps, 260ms per
 *                 word, 6th word lands 0.56s) while the whole h1 block
 *                 rises 20px → 0 over 0.5s.
 *   P1 0.03–0.4 — art-7 (the green poster) rises from the page bottom to
 *                 the CENTRE of the stage in parallel, then holds flat.
 *   P2 0.4–1.1  — Card Arc Expansion / fan-out (primary focus transition):
 *                 art-7 rolls from centre into its slot while the remaining
 *                 six fan out from the centre underneath — bunched as if by
 *                 negative margins, staggered outward in distance rings
 *                 (60ms steps, 520ms glides).
 *   P3 0.7–1.3  — sub-caption fade/slide, starting midway through the fan.
 *   P4 1.1–1.5  — creator badges pop in (fast spring, slight overshoot).
 *   P5 1.3–1.8  — CTA lock-in: vertical slide up + fade, 160ms apart.
 *
 * Timing values only; geometry lives in the components' audited constants.
 */

export const TIMELINE = {
  /** header entrance: logo + action cluster fade-rise together at the top
   *  of the page's choreography */
  header: 0,
  /** stagger between header elements in the right-to-left wave (same 60ms
   *  rhythm as the headline words) */
  headerStep: 0.06,
  /** duration of one header element's fade-in-up (slightly longer than the
   *  old 200ms wipe — the smoothness pass softened every reveal) */
  headerDur: 0.26,
  /** first headline word begins fading in */
  headline: 0,
  /** stagger between headline words (six words fill the 0–0.56s window) */
  headlineStep: 0.06,
  /** duration of one word's fade-in */
  headlineWord: 0.26,
  /** the h1 block's rise (y 20 → 0) — spans the word reveal so the block
   *  settles as the last words appear */
  headlineRise: 0.5,
  /** art-7 rises from the bottom to the centre of the stage */
  anchor: 0.03,
  /** duration of the rise (lands at 0.4s, when the fan-out starts) */
  rise: 0.37,
  /** art-7 rolls from centre into its final slot, inside the fan window */
  roll: 0.4,
  /** duration of the roll (settles with the deck at 1.1s) */
  rollDur: 0.7,
  /** the six remaining cards fan out from the centre */
  cascade: 0.4,
  /** cascade step per distance ring */
  cascadeStep: 0.06,
  /** duration of one ring's glide travel (last ring settles at 1.1s) */
  cascadeDur: 0.52,
  /** supporting copy while the deck is still spreading */
  subtitle: 0.7,
  /** duration of the sub-caption fade/slide */
  subtitleDur: 0.6,
  /** creator badges pop in as the deck settles */
  tags: 1.1,
  /** primary CTA lock-in */
  ctas: 1.3,
  /** secondary CTA follows the primary */
  ctaStep: 0.16,
  /** duration of one CTA's vertical lock-in (both land by 1.8s) */
  ctaDur: 0.34,
} as const;

/**
 * Gesture/badge curve: the spec's expo-out — crisp and immediate, right for
 * micro-feedback (card hover, the badge's quick fade under its pop) but it
 * covered 45% of the travel in the first 40ms, which is exactly the "too
 * snappy" entrance feel the user asked to remove. Entrances no longer use it.
 */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * The shared FLUID curve — every entrance (headline words, h1 rise, header
 * chrome, subtitle, CTAs) and all card travel run on it (user: "make the
 * overall animations smoother and feel fluid … too snappy"). Gentle ramp-in
 * from rest, fluid middle, soft landing — zero velocity at every start and
 * end, so nothing snaps into motion or stops abruptly.
 */
export const EASE_GLIDE: [number, number, number, number] = [0.4, 0, 0.15, 1];

/** Badge pop-in spring (spec): bouncy, slight overshoot. */
export const TAG_SPRING = { stiffness: 200, damping: 15, mass: 1 } as const;
