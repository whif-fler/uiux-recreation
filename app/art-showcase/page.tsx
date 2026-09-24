import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";

export const metadata: Metadata = {
  title: "Art Showcase",
  description: "Placeholder for the art showcase landing page.",
};

export default function ArtShowcasePage() {
  return (
    <>
      <main className="p-8">
        <h1>Art Showcase</h1>
        <p>Implementation pending.</p>
      </main>
      <BackToHome />
    </>
  );
}
