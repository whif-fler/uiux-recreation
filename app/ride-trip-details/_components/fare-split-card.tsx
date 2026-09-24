/**
 * Fare split card: centered stack (heading, price + /seat, riders chip)
 * over a soft green radial gradient on a near-white base.
 */
export function FareSplitCard() {
  return (
    <section
      aria-label="Fare split"
      className="mt-[22px] flex h-[119px] flex-col items-center rounded-[18px] pt-[21px] text-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 95% at 50% 0%, #D1F1DF 0%, #E9F5EE 55%, #F7F7F7 100%)",
      }}
    >
      <p className="text-[13px] font-medium leading-[17px] text-[#314B39]">Fare Split</p>
      <p className="flex items-baseline gap-[7px]">
        <span className="text-[37px] font-bold leading-[36px] tabular-nums text-black">
          $4.20
        </span>
        <span className="text-[15.5px] font-normal text-[#38453C]">/seat</span>
      </p>
      <span className="flex h-[26px] items-center rounded-full bg-[#E7ECE8] px-[11px] text-[12px] font-medium text-[#8D928E]">
        × 3 riders
      </span>
    </section>
  );
}
