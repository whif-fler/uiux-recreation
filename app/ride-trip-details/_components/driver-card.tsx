import { Shield, Star } from "lucide-react";
import { PersonGlyph, VerifiedBadgeGlyph } from "./brand-marks";

/** Two-column driver card: avatar + name/rating on the left, car + plate right. */
export function DriverCard() {
  return (
    <section
      aria-label="Driver"
      className="flex h-[73px] items-center justify-between rounded-[18px] bg-[#F7F7F7] px-5"
    >
      <div className="flex flex-col gap-[11px]">
        <div className="flex items-center gap-[8px]">
          <PersonGlyph className="h-[19px] w-[15px] text-[#F472B6]" />
          <span className="text-[14px] font-semibold leading-[17px] text-black">
            Lara Larsson
          </span>
        </div>
        <div className="flex items-center gap-[5px] leading-[17px]">
          <Star
            aria-hidden="true"
            focusable="false"
            className="size-[13px] text-[#3A8AF2]"
            fill="currentColor"
            strokeWidth={0}
          />
          <span className="text-[13.5px] font-semibold text-[#4080B6]">4.9</span>
          <span className="text-[13px] text-[#767676]">· (120 rides)</span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-[11px] text-right text-[13px] leading-[17px] text-[#767676]">
        <span>Tesla Model X • Gray</span>
        <span>
          Plate: <span className="font-bold text-black">ABC 432 KJ</span>
        </span>
      </div>
    </section>
  );
}

/** Verification pills shown directly below the driver card. */
export function VerificationBadges() {
  return (
    <div className="mt-[14px] flex items-center gap-2" aria-label="Verifications">
      <span className="flex h-9 items-center gap-[6px] rounded-full bg-[#ECF2FE] px-[10px] text-[14px] font-semibold text-[#4080B6]">
        <VerifiedBadgeGlyph className="size-[17px] text-[#3A8AF2]" />
        Verified ID
      </span>
      <span className="flex h-9 items-center gap-[6px] rounded-full bg-[#EBFBF1] px-[10px] text-[14px] font-semibold text-[#45A97B]">
        <Shield
          aria-hidden="true"
          focusable="false"
          className="size-[14px] text-[#3FD278]"
          fill="currentColor"
          strokeWidth={1.5}
        />
        Safe Driver
      </span>
    </div>
  );
}
