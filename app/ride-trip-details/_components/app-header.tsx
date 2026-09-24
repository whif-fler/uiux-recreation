import { X } from "lucide-react";
import { BrandMark } from "./brand-marks";
import { poppins } from "./fonts";

const STEPS = [0, 1, 2, 3] as const;
const ACTIVE_STEP = 2;

/**
 * App header: brand mark + "HoᵖOn" wordmark on the left, close glyph on the
 * right, and the 4-segment progress stepper beneath (3rd segment active).
 */
export function AppHeader() {
  return (
    <header className="shrink-0">
      <div className="flex items-center justify-between pl-4 pr-[25px] pt-[10px]">
        <div className="flex items-center gap-[4px]">
          <BrandMark className="h-[33px] w-[32px]" />
          <span
            aria-label="HopOn"
            className={`${poppins.className} inline-block origin-left text-[26px] font-bold leading-[30px] tracking-[-0.01em] text-[#1A1A1A] [transform:scaleX(0.9)]`}
          >
            <span aria-hidden="true">
              Ho<span className="relative top-[-9px]">p</span>On
            </span>
          </span>
        </div>
        <button
          type="button"
          aria-label="Close trip details"
          className="text-black transition-opacity hover:opacity-60 motion-reduce:transition-none"
        >
          <X aria-hidden="true" focusable="false" className="size-[27px]" strokeWidth={2.2} />
        </button>
      </div>

      <div className="mx-[30px] mt-[25px] flex h-[4px] gap-2" role="presentation">
        {STEPS.map((step) => (
          <span
            key={step}
            className={`h-full flex-1 rounded-full ${
              step === ACTIVE_STEP ? "bg-black" : "bg-[#F7F7F7]"
            }`}
          />
        ))}
      </div>
    </header>
  );
}
