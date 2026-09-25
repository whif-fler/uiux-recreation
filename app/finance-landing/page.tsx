import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";
import { FinanceScreen } from "./_components/finance-screen";

export const metadata: Metadata = {
  title: "Finance Dashboard Landing",
  description:
    "FinSuite landing: hero headline, balance dashboard mock with subscription cards, ratings strip, and financial analytics feature section.",
};

export default function FinanceLandingPage() {
  return (
    <>
      <FinanceScreen />
      <BackToHome />
    </>
  );
}
