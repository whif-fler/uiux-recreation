import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";
import { RealEstateScreen } from "./_components/real-estate-screen";

export const metadata: Metadata = {
  title: "Real Estate Investment Landing",
  description: "Brickwise real estate investing landing — hero, search, map, featured listing, stats and features.",
};

export default function RealEstateLandingPage() {
  return (
    <>
      <RealEstateScreen />
      <BackToHome />
    </>
  );
}
