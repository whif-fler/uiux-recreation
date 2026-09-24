import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";

export const metadata: Metadata = {
  title: "Real Estate Investment Landing",
  description: "Placeholder for the real estate investment landing page.",
};

export default function RealEstateLandingPage() {
  return (
    <>
      <main className="p-8">
        <h1>Real Estate Investment Landing</h1>
        <p>Implementation pending.</p>
      </main>
      <BackToHome />
    </>
  );
}
