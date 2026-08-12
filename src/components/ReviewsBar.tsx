function IconLicensed() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="7.6" r="3.2" stroke="currentColor" strokeWidth="1.55" />
      <path
        d="M5.4 19.3c.85-3.35 3.35-5.2 6.6-5.2s5.75 1.85 6.6 5.2"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <path
        d="m15.5 8.8 1.55 1.55 2.95-3"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWarranty() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 19.2 6.1v5.2c0 4.5-3.1 8.4-7.2 9.9-4.1-1.5-7.2-5.4-7.2-9.9V6.1L12 3Z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <path
        d="m8.9 11.8 2.1 2.1 4.1-4.2"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.05" stroke="currentColor" strokeWidth="1.55" />
      <path
        d="M12 7.6V12l3.35 2.05"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHeadset() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.35 13.7v-1.05A7.65 7.65 0 0 1 12 5a7.65 7.65 0 0 1 7.65 7.65v1.05"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <path
        d="M4.35 13.3a1.95 1.95 0 0 0 1.95 1.95h.7v-4.3h-.7a1.95 1.95 0 0 0-1.95 1.95ZM19.65 13.3a1.95 1.95 0 0 1-1.95 1.95h-.7v-4.3h.7a1.95 1.95 0 0 1 1.95 1.95Z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <path
        d="M19.65 15.25v1A3.4 3.4 0 0 1 16.25 19.65H13"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Stars() {
  return (
    <span className="inline-flex items-center gap-px text-[#F4B400]" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.6 14.9 9l6.8.7-5.1 4.5 1.6 6.7L12 17.4 5.8 20.9l1.6-6.7L2.3 9.7 9.1 9 12 2.6Z" />
        </svg>
      ))}
    </span>
  );
}

const FEATURES = [
  { id: "licensed", line: "Fully Licensed & Insured", line2: "", icon: <IconLicensed /> },
  { id: "warranty", line: "Industry Leading Warranty", icon: <IconWarranty /> },
  { id: "turnaround", line: "Fast Turnaround Times", icon: <IconClock /> },
  { id: "support", line: "Friendly Local Support", icon: <IconHeadset /> },
];

export default function ReviewsBar() {
  return (
    <section className="relative overflow-hidden py-5 sm:py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <ul className="grid grid-cols-1 items-center gap-5 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 md:gap-x-6 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr] lg:gap-0">
          <li className="flex flex-wrap items-center sm:justify-center gap-x-2.5 gap-y-2 border-b border-[#C8CCD3]/80 pb-5 sm:col-span-2 sm:pb-6 lg:col-span-1 lg:justify-center lg:border-b-0 lg:pb-0 lg:pr-3">
            <span className="text-[1.55rem] font-bold leading-none tracking-tight text-[var(--black)] sm:text-[1.7rem]">4.9</span>
            <Stars />
            <span className="text-xs font-bold tracking-wide text-[var(--black)] uppercase">100+ Reviews</span>
          </li>

          {FEATURES.map((item, index) => (
            <li key={item.id} className={[
                "relative flex items-center gap-3 px-1 sm:justify-center sm:px-2 lg:border-l lg:border-[#C8CCD3] lg:px-3",
                index % 2 === 1 ? "sm:border-l sm:border-[#C8CCD3] lg:border-l" : "",
              ].join(" ")}
            >
              <span className="inline-flex shrink-0 text-[var(--brand-color)]">{item.icon}</span>
              <span className="smLmax-w-[18ch] text-left text-xs font-bold text-[var(--black)] uppercase">
                <span className="block">{item.line}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
