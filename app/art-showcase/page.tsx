import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";
import { ArtShowcaseScreen } from "./_components/art-showcase-screen";

export const metadata: Metadata = {
  title: "Art Showcase",
  description:
    "Art showcase landing page for Pallet Ross: top navigation, headline, fanned artwork cards with creator tags, subtitle and calls to action.",
};

export default function ArtShowcasePage() {
  return (
    <>
      <ArtShowcaseScreen />
      <BackToHome />
    </>
  );
}
