"use client";

import { useEffect, useLayoutEffect, useState } from "react";

/**
 * The stage is a fixed 930×298 box; the rotated card union measures ~927px
 * wide centred inside it. Scaling the stage by `s` (origin top-centre) puts
 * the union's edges at `w/2 − 466.3s` and `w/2 + 461s`, so
 * `s = (w − GUTTER)/FAN_SPAN` keeps ~15px of gutter on both sides at every
 * width (466.3/933 ≈ ½ — the margin is width-independent).
 */
const FAN_SPAN = 933;
const GUTTER = 30;
/** The stage box the compensating bottom margin is derived from. */
const STAGE_HEIGHT = 298;
/** Blueprint caps: ≤900 scales .84, ≤640 keeps the fixed .62 CSS class
 *  (documented blueprint parity — the hook never touches ≤640). */
const DESKTOP_MIN = 901;
const SMALL_MIN = 641;
const TABLET_CAP = 0.84;
/** Never widen past the reference block — above it the fit scale owns the
 *  composition and the fan renders native inside the 1282-wide block. */
const MAX_BLOCK = 1282;

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export type StageFit = {
  scale: number;
  /** negative bottom margin cancelling the empty strip the scale leaves
   *  below the stage box, so subtitle spacing stays constant */
  marginBottom: number;
};

/**
 * Width-driven fit for the fan stage on desktop-tier (901–962px) and tablet
 * (641–900px) windows where the fixed 930px stage would bleed past the
 * viewport edges: `min(cap, (vw − 30)/933)` with a compensating bottom
 * margin. The ≤900 CSS classes (.84 / mb −48) stay as the pre-JS base and
 * the exact value the hook returns at ≥814px; at ≤640px the hook steps aside
 * and the blueprint's fixed .62 / mb −92 classes are authoritative.
 */
export function useFanScale(): StageFit | null {
  const [fit, setFit] = useState<StageFit | null>(null);

  useIsoLayoutEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width < SMALL_MIN) {
        setFit(null);
        return;
      }
      const cap = width < DESKTOP_MIN ? TABLET_CAP : 1;
      const scale = Math.min(
        cap,
        (Math.min(width, MAX_BLOCK) - GUTTER) / FAN_SPAN,
      );
      setFit(
        scale >= 1
          ? null
          : { scale, marginBottom: Math.round(-STAGE_HEIGHT * (1 - scale)) },
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return fit;
}
