import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";
import { DeveloperPortfolioScreen } from "./_components/developer-portfolio-screen";

export const metadata: Metadata = {
  title: "Developer Portfolio Landing",
  description:
    "API-based developer portfolio hero with split layout, headline, supporting copy, CTAs, phone mockup and company logo strip.",
};

export default function DeveloperPortfolioPage() {
  return (
    <>
      <DeveloperPortfolioScreen />
      <BackToHome />
    </>
  );
}
