import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: "Placeholder for the pricing plans page.",
};

export default function PricingPlansPage() {
  return (
    <>
      <main className="p-8">
        <h1>Pricing Plans</h1>
        <p>Implementation pending.</p>
      </main>
      <BackToHome />
    </>
  );
}
