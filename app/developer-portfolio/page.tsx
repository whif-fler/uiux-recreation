import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";

export const metadata: Metadata = {
  title: "Developer Portfolio Landing",
  description: "Placeholder for the developer portfolio landing page.",
};

export default function DeveloperPortfolioPage() {
  return (
    <>
      <main className="p-8">
        <h1>Developer Portfolio Landing</h1>
        <p>Implementation pending.</p>
      </main>
      <BackToHome />
    </>
  );
}
