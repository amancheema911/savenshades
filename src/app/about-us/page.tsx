import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import Counters from "@/components/Counters";
import { counterItems } from "@/lib/counters";

export const metadata: Metadata = {
  title: "About Us | Floorix Premium Epoxy Solutions",
  description:
    "Learn how Floorix crafts high-performance epoxy floors — our story, values, and the standards behind every install.",
};

const aboutValues = [
  {
    id: "precision",
    title: "Precision Prep",
    description:
      "Every slab is measured, repaired, and profiled before a single coat goes down.",
    icon: "precision" as const,
  },
  {
    id: "integrity",
    title: "Honest Craft",
    description:
      "Clear scopes, premium materials, and finishes that perform the way we promise.",
    icon: "integrity" as const,
  },
  {
    id: "craft",
    title: "Surface Mastery",
    description:
      "From flake systems to metallic depth — installed by specialists, not generalists.",
    icon: "craft" as const,
  },
  {
    id: "partnership",
    title: "Lifetime Care",
    description:
      "We stay with you after install — guidance, maintenance, and lasting support.",
    icon: "partnership" as const,
  },
];

const aboutMilestones = [
  {
    id: "today",
    year: "Today",
    title: "Regional leaders",
    description:
      "25K+ projects completed with the same obsession for flawless floors.",
  },
  {
    id: "scale",
    year: "2021",
    title: "1M+ sq ft installed",
    description:
      "Systems refined for speed, sheen control, and industrial durability.",
  },
  {
    id: "commercial",
    year: "2017",
    title: "Commercial expansion",
    description:
      "Showrooms, warehouses, and high-traffic facilities join the roster.",
  },
  {
    id: "founded",
    year: "2014",
    title: "Floorix begins",
    description: "A small crew focused on garage floors that actually last.",
  },
];

const aboutPrinciples = [
  {
    id: "listen",
    number: "01",
    title: "Listen first",
    description:
      "We study how you use the space — traffic, chemicals, light — then design the system around it.",
  },
  {
    id: "prep",
    number: "02",
    title: "Prep without shortcuts",
    description:
      "Diamond grinding, moisture testing, and crack repair are non-negotiable foundations.",
  },
  {
    id: "finish",
    number: "03",
    title: "Finish for decades",
    description:
      "Topcoats, UV protection, and slip resistance tuned for beauty that holds up under real life.",
  },
];

type ValueIconName = (typeof aboutValues)[number]["icon"];

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

function ValueIcon({ icon }: { icon: ValueIconName }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "precision":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "integrity":
      return (
        <svg {...common}>
          <path
            d="M12 3.5 19 7v5.2c0 4.2-2.9 7.4-7 8.8-4.1-1.4-7-4.6-7-8.8V7l7-3.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="m9.2 12.2 2 2 4-4.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "craft":
      return (
        <svg {...common}>
          <path
            d="M4 17.5 12 4l8 13.5H4Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 17.5 12 11l3.5 6.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "partnership":
      return (
        <svg {...common}>
          <path
            d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M3.5 19.5c.6-3 2.8-4.5 5-4.5s4.4 1.5 5 4.5M10.5 19.5c.6-3 2.8-4.5 5-4.5s4.4 1.5 5 4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-[4.75rem] min-h-[72vh] overflow-hidden sm:min-h-[78vh]">
        <Image
          src="/images/hero-epoxy-floor.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-hero-zoom"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,9,16,0.95)_0%,rgba(5,9,16,0.78)_40%,rgba(5,9,16,0.42)_72%,rgba(5,9,16,0.7)_100%),linear-gradient(180deg,rgba(5,9,16,0.45)_0%,transparent_30%,rgba(5,9,16,0.75)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto flex min-h-[72vh] w-full flex-col justify-end px-4 pb-14 pt-32 sm:min-h-[78vh] sm:px-6 sm:pb-16 sm:pt-36 lg:px-8 lg:pb-20">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="max-w-3xl animate-hero-rise lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--brand-color)] animate-about-line sm:w-14" />
                <p className="text-xs font-bold tracking-[0.22em] text-[var(--brand-color)] sm:text-sm">
                  ABOUT US
                </p>
              </div>
              <h1 className="mt-5 font-display text-[2.55rem] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-[3.5rem] lg:text-[4.25rem]">
                Floor Built{" "} 
                with{" "} <span className="text-[var(--brand-color)]">obsession.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/78 sm:text-lg">
                We're not just a company — we're a team of obsessive perfectionists who are passionate about creating the best epoxy floors possible.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--brand-color)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(184,134,11,0.35)] transition-[transform,filter] hover:brightness-110 active:scale-[0.98]"
                >
                  Work With Us
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowIcon />
                  </span>
                </Link>
                <Link
                  href="#all-services"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10 active:scale-[0.98]"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="hidden animate-hero-rise-delayed lg:col-span-4 lg:flex lg:justify-end">
              <div className="w-full max-w-[240px] rounded-[1.35rem] border border-white/15 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-white/45 uppercase">
                  Since
                </p>
                <p className="mt-1 font-display text-4xl font-bold tracking-tight text-white">
                  2014
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-[var(--brand-color)] to-transparent" />
                <p className="mt-4 text-sm leading-snug text-white/65">
                A decade refining epoxy systems that stay sharp under real use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story — asymmetric editorial */}
      <section
        className="relative overflow-hidden bg-[#F7F8FA] px-3 py-16 sm:px-4 sm:py-20 md:px-6 lg:px-8 lg:py-24"
        aria-labelledby="about-story-heading"
      >
        <div
          className="pointer-events-none absolute top-0 left-0 h-64 w-full bg-[radial-gradient(ellipse_at_top_left,rgba(184,134,11,0.08),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            <div className="relative lg:col-span-6 xl:col-span-7">
              <div className="relative mx-auto max-w-xl lg:mx-0 lg:max-w-none">
                <div
                  className="absolute -top-4 -left-4 hidden h-28 w-28 rounded-[1.25rem] border border-[var(--brand-color)]/40 sm:block lg:-top-6 lg:-left-6"
                  aria-hidden="true"
                />
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
                  <Image
                    src="/images/services/service-garage.png"
                    alt="Premium epoxy garage floor installed by Floorix"
                    fill
                    sizes="(max-width: 1024px) 92vw, 55vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,9,16,0.65)_100%)]"
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute -right-2 -bottom-8 w-[42%] overflow-hidden rounded-[1.15rem] shadow-[0_20px_50px_rgba(0,0,0,0.28)] ring-1 ring-white/20 sm:-right-4 sm:-bottom-10 sm:rounded-[1.35rem] lg:-right-6 animate-about-float">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/services/service-metallic.png"
                      alt="Metallic epoxy detail"
                      fill
                      sizes="(max-width: 1024px) 40vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-[#0B1120]/75 px-4 py-3 backdrop-blur-md sm:bottom-7 sm:left-7 sm:px-5 sm:py-3.5">
                  <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Est. 2014
                  </p>
                  <p className="mt-0.5 text-[0.75rem] text-white/65 sm:text-sm">
                    Residential &amp; commercial epoxy
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-5 lg:pl-4 xl:pl-8">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
                OUR STORY
              </p>
              <h2
                id="about-story-heading"
                className="mt-3 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-[#0B1120] sm:text-[2.55rem] lg:text-[2.85rem]"
              >
                More Than Coatings.
                <br />
                <span className="bg-gradient-to-r from-[var(--brand-color)] to-[#926e19] bg-clip-text text-transparent">
                  A Standard.
                </span>
              </h2>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-black/55 sm:text-base">
                Floorix started with a simple frustration: too many floors looked
                great on day one and failed by year three. We rebuilt the process
                from the slab up — materials, prep, install discipline — so every
                surface earns its finish.
              </p>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-black/55 sm:text-base">
                Today we partner with homeowners, builders, and facility managers
                who want floors that stay sharp under real use.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/8">
                <div className="bg-white px-5 py-5 sm:px-6 sm:py-6">
                  <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-black/35 uppercase">
                    Focus
                  </p>
                  <p className="mt-2 font-display text-lg font-bold text-[#0B1120] sm:text-xl">
                    Epoxy only
                  </p>
                </div>
                <div className="bg-white px-5 py-5 sm:px-6 sm:py-6">
                  <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-black/35 uppercase">
                    Promise
                  </p>
                  <p className="mt-2 font-display text-lg font-bold text-[#0B1120] sm:text-xl">
                    Built to last
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — modern bento strip */}
      <section
        className="relative overflow-hidden bg-[#070b14] px-3 py-16 sm:px-4 sm:py-20 md:px-6 lg:px-8 lg:py-24"
        aria-labelledby="about-values-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(184,134,11,0.14),transparent_45%),radial-gradient(ellipse_at_90%_80%,rgba(184,134,11,0.1),transparent_40%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-color)]/50 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
                WHAT DRIVES US
              </p>
              <h2
                id="about-values-heading"
                className="mt-3 font-display text-[2rem] font-bold tracking-tight text-white sm:text-[2.55rem] lg:text-[2.85rem]"
              >
                Principles Under{" "}
                <span className="text-[var(--brand-color)]">Every Coat.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-white/50 lg:text-right">
              Four standards we refuse to compromise — on every project, every
              slab.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {aboutValues.map((value, index) => (
              <li
                key={value.id}
                className={`group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[var(--brand-color)]/40 hover:bg-white/[0.06] sm:p-7 ${
                  index % 2 === 1 ? "lg:mt-8" : ""
                }`}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-[radial-gradient(circle,rgba(184,134,11,0.18),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="font-display text-4xl font-bold tracking-tight text-white/10 transition-colors duration-300 group-hover:text-[var(--brand-color)]/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-5 flex size-12 items-center justify-center rounded-full border border-white/15 text-[var(--brand-color)] transition-colors duration-300 group-hover:border-[var(--brand-color)]/50 group-hover:bg-[var(--brand-color)]/10">
                  <ValueIcon icon={value.icon} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-white/48">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline — editorial years */}
      <section
        className="relative overflow-hidden bg-white px-3 py-16 sm:px-4 sm:py-20 md:px-6 lg:px-8 lg:py-24"
        aria-labelledby="about-timeline-heading"
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
              OUR JOURNEY
            </p>
            <h2
              id="about-timeline-heading"
              className="mt-3 font-display text-[2rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.55rem] lg:text-[2.85rem]"
            >
              Built Over{" "}
              <span className="text-[var(--brand-color)]">Time.</span>
            </h2>
            <p className="mt-4 text-[0.95rem] text-black/50 sm:text-base">
              A decade of refining systems, crews, and craft — one floor at a
              time.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-4xl">
            <div
              className="pointer-events-none absolute top-3 bottom-3 left-4 w-px bg-gradient-to-b from-[var(--brand-color)] via-black/15 to-transparent sm:left-1/2 sm:-translate-x-px"
              aria-hidden="true"
            />
            <ol>
              {aboutMilestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <li key={milestone.id} className="relative py-7 sm:py-9">
                    <span className="absolute top-9 left-2.5 z-10 flex size-4 items-center justify-center rounded-full border-2 border-[var(--brand-color)] bg-white sm:left-1/2 sm:-translate-x-1/2">
                      <span className="size-1.5 rounded-full bg-[var(--brand-color)]" />
                    </span>

                    <div
                      className={`pl-12 sm:w-[calc(50%-2rem)] sm:pl-0 ${
                        isLeft
                          ? "sm:mr-auto sm:pr-4 sm:text-right"
                          : "sm:ml-auto sm:pl-4 sm:text-left"
                      }`}
                    >
                      <p className="font-display text-3xl font-bold tracking-tight text-[var(--brand-color)] sm:text-4xl">
                        {milestone.year}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-[#0B1120]">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-[0.92rem] leading-relaxed text-black/50">
                        {milestone.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <Counters items={counterItems} />

      {/* Principles — immersive split */}
      <section
        className="bg-[#F7F8FA] px-3 py-14 sm:px-4 sm:py-16 md:px-6 lg:px-8 lg:py-20"
        aria-labelledby="about-principles-heading"
      >
        <div className="container mx-auto overflow-hidden rounded-[1.85rem] bg-[#070b14] ring-1 ring-white/10 sm:rounded-[2.35rem] lg:rounded-[2.85rem]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative min-h-[320px] lg:col-span-5 lg:min-h-[560px]">
              <Image
                src="/images/services/service-metallic.png"
                alt="Metallic epoxy floor detail"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,20,0.15)_0%,rgba(7,11,20,0.88)_100%)] lg:bg-[linear-gradient(90deg,transparent_10%,rgba(7,11,20,0.7)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-10">
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)]">
                  THE FLOORIX WAY
                </p>
                <p className="mt-2 max-w-xs font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Method over
                  <br />
                  shortcuts.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:col-span-7 lg:px-12 lg:py-14 xl:px-14">
              <h2
                id="about-principles-heading"
                className="font-display text-[1.8rem] font-bold tracking-tight text-white sm:text-[2.25rem]"
              >
                How We Approach{" "}
                <span className="text-[var(--brand-color)]">Every Floor.</span>
              </h2>
              <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-white/50">
                Three commitments that shape install day — and every year after.
              </p>

              <ol className="mt-10 divide-y divide-white/10">
                {aboutPrinciples.map((principle) => (
                  <li
                    key={principle.id}
                    className="group grid grid-cols-[auto_1fr] gap-5 py-6 first:pt-0 last:pb-0 sm:gap-7 sm:py-7"
                  >
                    <span className="font-display text-3xl font-bold tracking-tight text-[var(--brand-color)]/80 transition-colors duration-300 group-hover:text-[var(--brand-color)] sm:text-4xl">
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                        {principle.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[0.92rem] leading-relaxed text-white/48">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
