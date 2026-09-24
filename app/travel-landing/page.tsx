import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";

export const metadata: Metadata = {
  title: "Travel App Landing",
  description: "Placeholder for the travel app landing page.",
};

export default function TravelLandingPage() {
  return (
    <>
      <main className="p-8">
        <h1>Travel App Landing</h1>
        <p>Implementation pending.</p>
      </main>
      <BackToHome />
    </>
  );
}
