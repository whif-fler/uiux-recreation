import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";
import { PricingScreen } from "./_components/pricing-screen";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Pricing plans with mixed-weight headline, app icons, gradient toggle and Free/Personal plan cards.",
};

export default function PricingPlansPage() {
  return (
    <>
      <PricingScreen />
      <BackToHome />
    </>
  );
}
