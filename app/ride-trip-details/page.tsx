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
      {/* This screen's bottom band is tight (18px) and the Call / Join Ride row
          plus the content column are both full-width, so a bottom-anchored
          circle has nowhere to sit without covering the row or the text (the
          first attempt floated it above the row and grazed the reminder card).
          On mobile the panel is full-bleed, so the circle joins the header row
          instead: `right-[70px]` puts it 18px left of the close X, and
          `top-[30.5px]` centres its 32px box on the row's 33px content band
          (header pt-20 + row pt-10 + (33−32)/2 → centre y 46.5, the same
          centre line as the X), so it reads as part of the row rather than
          floating above it. Those two offsets track the header geometry —
          recheck them if the top pad or the row padding changes. At md+ it
          lives on the grey canvas outside the panel and keeps the shared
          bottom-left position — hence `max-md:` only. */}
      <BackToHome className="max-md:left-auto max-md:right-[70px] max-md:bottom-auto max-md:top-[30.5px]" />
    </>
  );
}
