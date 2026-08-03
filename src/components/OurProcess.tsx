import { processSteps, type ProcessStep } from "@/lib/process";

function StepIcon({ icon }: { icon: ProcessStep["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "consultation":
      return (
        <svg {...common}>
          <path
            d="M5 18V7.5A2.5 2.5 0 0 1 7.5 5H16a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9l-4 3v-3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 10h6M9 13h4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "prep":
      return (
        <svg {...common}>
          <path
            d="M4 18h16M7 18V9l5-4 5 4v9"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M10 18v-4h4v4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "repair":
      return (
        <svg {...common}>
          <path
            d="M14.5 4.5 19 9l-9.5 9.5a2 2 0 0 1-1.1.55L4 20l.65-4.4a2 2 0 0 1 .55-1.1L14.5 4.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M13 6.2 17.3 10.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "primer":
      return (
        <svg {...common}>
          <path
            d="M8 4h5l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2l2-3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 14h6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "install":
      return (
        <svg {...common}>
          <path
            d="M4 17h16M6 17V9l6-4 6 4v8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 13h6M9 10h6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "topcoat":
      return (
        <svg {...common}>
          <path
            d="M5 19h14M7 19V8.5L12 5l5 3.5V19"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.5h5M9.5 15.5h5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "inspect":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="m16 16 4 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="m8.8 11.2 1.6 1.6 3.2-3.4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "delivery":
      return (
        <svg {...common}>
          <path
            d="M3 16V7.5A1.5 1.5 0 0 1 4.5 6H14v10H3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M14 10h4l3 3.5V16h-7V10Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="17.5" r="1.7" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="17.5" r="1.7" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function OurProcess() {
  return (
    <section className="relative overflow-hidden bg-[#05070b] py-14 lg:py-20" aria-labelledby="process-heading">
      {/* Ambient glow on the right */}
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,134,11,0.22)_0%,transparent_68%)] blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(184,134,11,0.06))]" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-[var(--brand-color)] sm:text-sm">OUR PROCESS</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Precision. Process.{" "}
            <span className="text-[var(--brand-color)]">Perfection.</span>
          </h2>
          <p className="mt-4 text-[0.95rem] text-white/60 sm:text-base">A proven 8-step process for flawless results.</p>
        </div>

        {/* Desktop / tablet timeline */}
        <div className="relative mt-14 hidden sm:block">
          {/* Connecting line through icon centers */}
          <div
            className="pointer-events-none absolute top-7 right-[6.25%] left-[6.25%] hidden h-px bg-white/20 lg:block"
            aria-hidden="true"
          />
          {/* Midpoint dots between steps */}
          {Array.from({ length: processSteps.length - 1 }, (_, index) => (
            <span
              key={`dot-${index}`}
              className="pointer-events-none absolute top-7 hidden size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-color)] lg:block"
              style={{ left: `${((index + 1) / processSteps.length) * 100}%` }}
              aria-hidden="true"
            />
          ))}

          <ol className="relative grid grid-cols-4 gap-x-3 gap-y-12 lg:grid-cols-8 lg:gap-x-2">
            {processSteps.map((step) => (
              <li
                key={step.id}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-[var(--brand-color)] text-white shadow-[0_0_24px_rgba(184,134,11,0.35)]">
                  <StepIcon icon={step.icon} />
                </span>

                <p className="mt-4 text-xs font-medium text-white/70">{step.step}</p>
                <h3 className="mt-1.5 text-[0.92rem] font-bold leading-snug text-white lg:text-[0.95rem]">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[9.5rem] text-[0.75rem] leading-snug text-white/50 lg:text-[0.78rem]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile vertical timeline */}
        <ol className="relative mt-12 space-y-8 sm:hidden">
          <div
            className="absolute top-3 bottom-3 left-[1.75rem] w-px bg-white/20"
            aria-hidden="true"
          />
          {processSteps.map((step) => (
            <li key={step.id} className="relative flex gap-4 pl-1">
              <span className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--brand-color)] text-white shadow-[0_0_24px_rgba(184,134,11,0.35)]">
                <StepIcon icon={step.icon} />
              </span>
              <div className="pt-1.5">
                <p className="text-xs font-medium text-white/70">{step.step}</p>
                <h3 className="mt-1 text-base font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-white/50">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
