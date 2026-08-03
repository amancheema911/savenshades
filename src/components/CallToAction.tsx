import Image from "next/image";
import Link from "next/link";

const CTA_PERKS = [
  "100% Free Estimate",
  "No Hidden Costs",
  "Quick Response",
  "Satisfaction Guaranteed",
] as const;

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5"
        width="17"
        height="15.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.5 10h17M8 3.5V7M16 3.5V7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="m10 15 1.5 1.5L14.5 13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12 5 5L20 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CallToAction() {
  return (
    <section className="bg-gray-50 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#050A14] sm:rounded-[2.25rem] lg:rounded-[2.75rem]">
          {/* Glossy floor graphic on the right */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[55%] lg:w-[48%]">
            <Image
              src="/images/services/service-metallic.png"
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-center opacity-80"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,#050A14_0%,rgba(5,10,20,0.92)_28%,rgba(5,10,20,0.45)_58%,rgba(5,10,20,0.15)_100%)] sm:bg-[linear-gradient(90deg,#050A14_0%,rgba(5,10,20,0.95)_18%,rgba(5,10,20,0.55)_48%,transparent_78%)]"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-12 lg:py-14">
            {/* Left: headline + CTAs */}
            <div className="lg:col-span-7">
              <h2 className="font-display text-[1.55rem] font-bold tracking-wide text-white sm:text-3xl lg:text-[2.15rem] lg:leading-[1.15]">
                Ready To{" "}
                <span className="text-[var(--brand-color)]">Upgrade</span> Your
                Floors?
              </h2>
              <p className="mt-3 text-[0.95rem] text-white/75 sm:text-base">
                Get a free consultation and estimate today.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-color)] px-6 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-[transform,filter] hover:brightness-110 active:scale-[0.98]"
                >
                  Get Free Quote
                  <ArrowIcon />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-transparent px-6 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-white/10 active:scale-[0.98]"
                >
                  Schedule Consultation
                  <CalendarIcon />
                </Link>
              </div>
            </div>

            {/* Center checklist */}
            <div className="lg:col-span-5 lg:justify-self-end xl:pr-8">
              <ul className="flex flex-col gap-3.5 sm:gap-4">
                {CTA_PERKS.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-sm text-white sm:text-[0.95rem]"
                  >
                    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-color)] text-white">
                      <CheckIcon />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
