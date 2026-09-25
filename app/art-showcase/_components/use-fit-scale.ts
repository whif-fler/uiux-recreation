"use client";

import { useEffect, useLayoutEffect, useState } from "react";

/** The audited reference canvas: 1282×754 at DPR 1. */
export const REFERENCE_WIDTH = 1282;
export const REFERENCE_HEIGHT = 754;
/** Desktop tier: the ≤900px breakpoint owns its own layout below this. */
const DESKTOP_MIN = 901;

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export type FitScale = {
  /** contain-fit factor applied to the whole composition */
  scale: number;
  /** unscaled width of the composition block: the reference width above
   *  1282, the fluid viewport width in the desktop tier (the layout is
   *  fluid below 1282, so only its height needs containing). */
  contentWidth: number;
};

/**
 * "Contain" fit for windows the composition can't fill natively:
 * - wider than the reference → `min(vw/1282, vh/754)` on a fixed 1282-wide
 *   block — the image-viewer fit with the reference image's exact
 *   proportions (unchanged from the >1282 behaviour);
 * - desktop-tier windows shorter than the reference (1280×720, 1366×768
 *   with browser chrome) → `vh/754` on the fluid block, so the whole design
 *   is visible with NO vertical scroll.
 * The caller wraps the composition in an explicit footprint
 * (`contentWidth*scale` × `REFERENCE_HEIGHT*scale`) so the page's layout
 * height is the SCALED height — transforms alone don't shrink layout, which
 * is what used to leave a strip of dead scroll space on short windows.
 * Returns null where the audited native layout applies unchanged
 * (≤1282 wide and ≥754 tall, and everything ≤900px).
 */
export function useFitScale(): FitScale | null {
  const [fit, setFit] = useState<FitScale | null>(null);

  useIsoLayoutEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const wider = width > REFERENCE_WIDTH;
      if (!wider && !(width >= DESKTOP_MIN && height < REFERENCE_HEIGHT)) {
        setFit(null);
        return;
      }
      setFit({
        scale: wider
          ? Math.min(width / REFERENCE_WIDTH, height / REFERENCE_HEIGHT)
          : height / REFERENCE_HEIGHT,
        contentWidth: wider ? REFERENCE_WIDTH : width,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return fit;
}
