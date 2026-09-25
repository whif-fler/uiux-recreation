import { Nunito_Sans } from "next/font/google";

/**
 * Font for the /travel-landing screen. Nunito Sans is the closest practical
 * match to the reference's rounded geometric sans — see the font-ID caveat in
 * docs/page-specs/travel-landing/visual-spec.md.
 */
export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito-sans",
});
