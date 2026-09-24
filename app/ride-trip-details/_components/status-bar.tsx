import { BatteryGlyph, SignalGlyph, WifiGlyph } from "./brand-marks";

/**
 * iOS status bar (9:41 + signal/wifi/battery), kept for reference fidelity.
 * Sizes match the measured reference: time 17px/600, icons 19/17/27px wide.
 */
export function StatusBar() {
  return (
    <div className="flex h-[52px] shrink-0 items-center justify-between pl-[41px] pr-[34px]">
      <span className="text-[17px] font-semibold leading-none tabular-nums text-black">
        9:41
      </span>
      <div className="flex items-center gap-[7px] text-black" aria-hidden="true">
        <SignalGlyph className="h-[11px] w-[19px]" />
        <WifiGlyph className="h-[12px] w-[17px]" />
        <BatteryGlyph className="h-[12px] w-[27px]" />
      </div>
    </div>
  );
}
