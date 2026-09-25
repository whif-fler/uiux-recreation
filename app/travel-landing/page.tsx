import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";
import { TravelLandingScreen } from "./_components/travel-landing-screen";

export const metadata: Metadata = {
  title: "Travel App Landing",
  description:
    "Capsule keeps flights, tickets, bookings and documents in one place.",
};

export default function TravelLandingPage() {
  return (
    <>
      <TravelLandingScreen />
      <BackToHome />
    </>
  );
}
