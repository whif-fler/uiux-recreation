import type { Metadata } from "next";
import { BackToHome } from "@/components/shared/back-to-home";
import { RideScreen } from "./_components/ride-screen";

export const metadata: Metadata = {
  title: "Ride-Share Trip Details",
  description:
    "Trip details screen for a HopOn ride: driver and verified badges, stops timeline, fare split, reminder and ride actions.",
};

export default function RideTripDetailsPage() {
  return (
    <>
      <RideScreen />
      <BackToHome />
    </>
  );
}
