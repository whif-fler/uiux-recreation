import { Phone } from "lucide-react";

/**
 * Bottom action bar: compact stadium Call button + flexible dark Join Ride
 * pill, then the iOS home indicator. Sits below the scrollable content so
 * the leftover slack matches the reference's pre-button gap.
 */
export function BottomActions() {
  return (
    <div className="shrink-0 px-4">
      <div className="flex gap-[10px]">
        <button
          type="button"
          aria-label="Call ride"
          className="flex h-[46px] w-[63px] items-center justify-center rounded-full bg-[#F0F0F0] text-[#3E3E3E] transition-all duration-150 hover:bg-[#E8E8E8] active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100"
        >
          <Phone
            aria-hidden="true"
            focusable="false"
            className="size-[19px]"
            fill="currentColor"
            strokeWidth={1.5}
          />
        </button>
        <button
          type="button"
          className="h-[46px] flex-1 rounded-full bg-[#3E3E3E] text-[15px] font-semibold text-white transition-all duration-150 hover:bg-[#333333] active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
        >
          Join Ride
        </button>
      </div>
      <div className="mb-[6px] mt-[35px] flex justify-center">
        <span aria-hidden="true" className="h-[4px] w-[93px] rounded-full bg-[#DDDDDD]" />
      </div>
    </div>
  );
}
