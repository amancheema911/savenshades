import Image from "next/image";
import Link from "next/link";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import Button from "@/components/ui/Button";

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "25K+", label: "Projects Completed" },
  { value: "2M+", label: "Sq Ft Installed" },
  { value: "4.9 ★", label: "Client Rating" },
];

const PARTNERS = [
  {
    name: "Sherwin Williams",
    mark: (
      <span className="flex items-center gap-2">
        <span className="relative inline-flex size-7 items-center justify-center rounded-full border border-current">
          <span className="absolute inset-x-1.5 top-1/2 h-px -translate-y-1/2 bg-current" />
          <span className="absolute inset-y-1.5 left-1/2 w-px -translate-x-1/2 bg-current" />
        </span>
        <span className="text-[0.65rem] font-bold leading-tight tracking-[0.08em]">
          SHERWIN
          <br />
          WILLIAMS.
        </span>
      </span>
    ),
  },
  {
    name: "Sika",
    mark: (
      <span className="text-[1.55rem] font-extrabold leading-none tracking-tight">
        Sika
      </span>
    ),
  },
  {
    name: "Rust-Oleum",
    mark: (
      <span className="text-[1.05rem] font-extrabold italic tracking-wide">
        Rust-Oleum
      </span>
    ),
  },
  {
    name: "Armorpoxy",
    mark: (
      <span className="text-[0.85rem] font-bold tracking-[0.18em]">
        ARMORPOXY
      </span>
    ),
  },
  {
    name: "Tennant",
    mark: (
      <span className="text-[0.95rem] font-bold tracking-[0.14em]">
        TENNANT
      </span>
    ),
  },
];

function PlayIcon() {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/30 text-white transition-transform duration-300 group-hover:scale-105 size-10 sm:size-11"
      aria-hidden="true"
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5.14v13.72L19 12 8 5.14Z" />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate -mt-[4.75rem] min-h-screen overflow-hidden py-12 sm:py-20">
      <Image src="/images/hero-epoxy-floor.png" alt="" fill priority sizes="100vw" className="object-cover object-[72%_center] animate-hero-zoom" />

      <div className="absolute inset-0 bg-[#05070b]/60" aria-hidden="true" />

      <div className="relative z-10 container mx-auto flex min-h-screen w-full flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left content */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="max-w-[680px] animate-hero-rise">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(8,12,20,0.55)] px-3.5 py-1.5 text-[0.68rem] font-semibold tracking-[0.16em] text-white backdrop-blur-md sm:text-[0.72rem]">
                <span>PREMIUM EPOXY FLOORING</span>
              </div>

              <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.05] tracking-[-0.025em] text-white sm:text-[3.4rem] lg:text-[4rem]">
                Transform Concrete Into{" "}
                <span className="text-[var(--brand-color)]">Luxury Floors</span>
              </h1>

              <p className="mt-5 text-[1.02rem] leading-[1.65] text-white/85 sm:text-lg">High performance epoxy flooring systems built for beauty, durability, and a lifetime of performance.</p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <Button href="/contact-us">Get Free Quote</Button>

                <Link href="/our-work" className="inline-flex items-center gap-2.5 rounded-full border border-white/75 bg-transparent pl-6 pr-1.5 py-1.5 text-[0.95rem] font-semibold text-white transition-colors hover:border-white hover:bg-white/10 active:scale-[0.98]">
                  Explore Finishes
                  <PlayIcon />
                </Link>
              </div>
            </div>

            <div className="mt-10 max-w-[760px] animate-hero-rise-delayed sm:mt-12">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-1 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150 sm:px-2 sm:py-5 before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:content-['']">
                <dl className="relative z-10 grid grid-cols-2 sm:grid-cols-4">
                  {STATS.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`px-4 py-2 text-center sm:px-5 ${
                        index % 2 === 1 ? "border-l border-white/20" : ""
                      } ${
                        index > 1
                          ? "border-t border-white/20 sm:border-t-0"
                          : ""
                      } ${index > 0 ? "sm:border-l sm:border-white/20" : ""}`}
                    >
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <p className="font-display text-[1.65rem] font-bold tracking-tight text-white sm:text-[1.85rem]">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-[0.72rem] font-medium text-white/70 sm:text-[0.78rem]">
                          {stat.label}
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/55 sm:gap-x-10">
                {PARTNERS.map(({ name, mark }) => (
                  <li key={name} className="opacity-75 transition-opacity hover:opacity-100" aria-label={name}>{mark}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right glassmorphism form */}
          <div className="animate-hero-rise-delayed flex justify-center lg:col-span-5 lg:justify-end">
            <HeroQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
