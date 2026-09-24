/**
 * "Set Reminder" row: text block on the left, pill "Set" button on the right.
 * No card container — plain white background, matching the reference.
 */
export function ReminderRow() {
  return (
    <section aria-label="Reminder" className="mt-[13px] flex items-center justify-between gap-3">
      <div>
        <h2 className="text-[14px] font-semibold leading-[18px] text-black">Set Reminder</h2>
        <p className="mt-[3px] max-w-[210px] text-[11.5px] leading-[14.5px] text-[#737373]">
          {"Get notified 10 minutes before pickup so you're ready on time."}
        </p>
      </div>
      <button
        type="button"
        className="h-10 w-[84px] shrink-0 rounded-full bg-[#F0F0F0] text-[18px] font-semibold text-black transition-all duration-150 hover:bg-[#E9E9E9] active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100"
      >
        Set
      </button>
    </section>
  );
}
