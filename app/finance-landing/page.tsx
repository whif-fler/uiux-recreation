import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";

export const metadata: Metadata = {
  title: "Finance Dashboard Landing",
  description: "Placeholder for the finance dashboard landing page.",
};

export default function FinanceLandingPage() {
  return (
    <>
      <main className="p-8">
        <h1>Finance Dashboard Landing</h1>
        <p>Implementation pending.</p>
      </main>
      <BackToHome />
    </>
  );
}
