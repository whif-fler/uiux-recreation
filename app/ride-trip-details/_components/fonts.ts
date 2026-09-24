import { Inter, Poppins } from "next/font/google";

/**
 * Fonts for the /ride-trip-details screen.
 * Inter is the UI face (closest practical match to the reference's SF-like
 * system font). Poppins is used only for the "HoᵖOn" wordmark, which is a
 * rounded geometric bold in the reference.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});
