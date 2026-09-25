/**
 * The seven artworks shared by the desktop fan (`art-fan.tsx`) and the
 * mobile cover flow (`art-cover-flow.tsx`).
 *
 * Geometry (src/alt/left/top/rotate) is measured from the reference image
 * (docs/references/art-showcase.webp): lefts come from the blueprint and the
 * fan's horizontal extents (x≈174..1104); tops and rotations were re-fitted
 * from the reference's card top edges with arc-free line fits — the fan's
 * top silhouette peaks over card 2 (y≈320) and card 1's top-left corner sits
 * at y≈391, so the stagger is irregular and must never become a symmetric arc.
 * The overlap order and uneven tops are intentional — never a regular grid.
 *
 * `handle`/`tagBg` drive ONLY the mobile cover flow's single dynamic
 * speech-bubble tag (user-requested: one tag above the active card whose
 * text updates per card). @coplin/@andrea and both fills are the reference's
 * two badges; the other five handles are invented for that feature (no
 * reference evidence exists for them) and never render on desktop.
 */
export type ArtCard = {
  src: string;
  alt: string;
  left: number;
  top: number;
  rotate: number;
  /** Creator handle for the mobile dynamic tag. */
  handle: string;
  /** Mobile tag bubble fill — reference palette (#1458ED / #59AC8B). */
  tagBg: string;
};

export const CARDS: readonly ArtCard[] = [
  { src: "/art-showcase/art-1.jpg", alt: "Collage artwork", left: 15, top: 90.4, rotate: -10.8, handle: "@nova.ink", tagBg: "#59AC8B" },
  { src: "/art-showcase/art-2.jpg", alt: "Blue line artwork", left: 139, top: 49.3, rotate: -7.7, handle: "@coplin", tagBg: "#1458ED" },
  { src: "/art-showcase/art-3.jpg", alt: "Yellow poster artwork", left: 277, top: 58.5, rotate: -4.8, handle: "@riso.club", tagBg: "#59AC8B" },
  { src: "/art-showcase/art-4.jpg", alt: "Abstract gradient artwork", left: 386, top: 60.4, rotate: 0, handle: "@atelier.m", tagBg: "#1458ED" },
  { src: "/art-showcase/art-5.jpg", alt: "Portrait study artwork", left: 498, top: 62.3, rotate: 4, handle: "@juno.draws", tagBg: "#59AC8B" },
  { src: "/art-showcase/art-6.jpg", alt: "Graphic number artwork", left: 627, top: 72, rotate: 6.85, handle: "@kai.press", tagBg: "#1458ED" },
  { src: "/art-showcase/art-7.jpg", alt: "Green poster artwork", left: 727, top: 69.2, rotate: 9.7, handle: "@andrea", tagBg: "#59AC8B" },
];
