import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import Button from "@/components/ui/Button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Garage Epoxy Flooring Installation | Floorix",
  description:
    "Professional garage epoxy flooring by Floorix. Hot-tire resistant, easy to clean, UV-stable showroom finishes for residential and collector garages. Free quotes.",
  keywords: [
    "garage epoxy flooring",
    "garage floor coating",
    "epoxy garage floor installation",
    "hot tire resistant epoxy",
    "residential garage floors",
  ],
  alternates: { canonical: "/services/garage-floors" },
  openGraph: {
    title: "Garage Epoxy Flooring Installation | Floorix",
    description:
      "Showroom-grade garage floors engineered for hot tires, oil, salt, and daily life.",
    type: "website",
    images: [
      {
        url: "/images/services/service-garage.png",
        alt: "Luxury car on a finished garage epoxy floor",
      },
    ],
  },
};

const specs = [
  { label: "Best for", value: "Residential & collector garages" },
  { label: "Finish options", value: "Gloss · Satin · Full flake" },
  { label: "Typical install", value: "2–3 days" },
  { label: "Return to vehicles", value: "Usually 48–72 hours" },
] as const;

const benefits = [
  {
    title: "Hot-tire & chemical resistant",
    description:
      "Formulated to resist tire softener, road salt, oil, and grease without etching or peeling — so your investment stays intact season after season.",
  },
  {
    title: "Easy everyday care",
    description:
      "A seamless non-porous surface that dust-mops clean. No stained concrete, no musty damp odors trapped in open pores.",
  },
  {
    title: "Grip where you need it",
    description:
      "Optional texture packages for wet-weather entries without sacrificing the polished, intentional look you want.",
  },
  {
    title: "Color that stays true",
    description:
      "UV-stable clears and pigmented systems that resist ambering under garage-door sunlight.",
  },
] as const;

const process = [
  {
    step: "01",
    title: "Inspect & moisture test",
    description:
      "We evaluate cracks, oil contamination, and moisture so the system bonds for the long term.",
  },
  {
    step: "02",
    title: "Diamond grind & repair",
    description:
      "Mechanical profiling opens the slab. Joints and imperfections are repaired before any coat goes down.",
  },
  {
    step: "03",
    title: "Coat & finish",
    description:
      "Primer, color base, optional flake broadcast, and UV-clear applied with precision.",
  },
  {
    step: "04",
    title: "Cure & care guide",
    description:
      "Walkthrough of return-to-use timing and simple maintenance that keeps the sheen for years.",
  },
] as const;

const finishes = [
  {
    id: "solid",
    name: "Solid Color",
    detail: "Clean, continuous color with a high-gloss or satin clear.",
    image: "/images/services/service-commercial.png",
  },
  {
    id: "flake",
    name: "Full Flake",
    detail: "Multi-tone broadcast for grip, style, and everyday forgiveness.",
    image: "/images/services/service-garage.png",
  },
  {
    id: "metallic",
    name: "Metallic Accent",
    detail: "Liquid depth for collector bays that deserve a feature floor.",
    image: "/images/services/service-metallic.png",
  },
] as const;

const faqs = [
  {
    question: "How long does garage epoxy flooring last?",
    answer:
      "A properly prepped and installed Floorix garage system typically lasts many years with normal residential use. Longevity depends on prep quality, topcoat, UV exposure, and how vehicles and chemicals are managed.",
  },
  {
    question: "Can I park cars soon after install?",
    answer:
      "Light foot traffic is often possible within 24–48 hours. Vehicle parking is usually recommended after 48–72 hours depending on temperature and the system we install — we confirm exact timing at handoff.",
  },
  {
    question: "Will epoxy peel from my garage floor?",
    answer:
      "Peeling is almost always a prep or moisture issue — not epoxy itself. We grind for mechanical adhesion, remediate contaminants, and only install when conditions support a lasting bond.",
  },
  {
    question: "Solid color or flake — which should I choose?",
    answer:
      "Choose solid for a clean showroom look. Choose full flake when you want more grip and a surface that hides dust and micro-scuffs between cleanings. We’ll recommend based on how you use the space.",
  },
] as const;

const idealFor = [
  "Residential garages",
  "Collector & display bays",
  "Home workshops",
  "Basements & gyms",
] as const;

const related = services.filter((s) => s.id !== "garage-floors").slice(0, 3);

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

function ArrowUpRightIcon({ size = 18 }: { size?: number }) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/30 text-white transition-transform duration-300 group-hover:scale-105 size-10 sm:size-11">
      <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 9.5 17 19 7.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function GarageFloorsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Garage Epoxy Flooring",
    description:
      "Professional garage epoxy flooring installation with hot-tire resistance, UV-stable finishes, and optional flake systems.",
    provider: { "@type": "Organization", name: "Floorix" },
    serviceType: "Garage Epoxy Flooring Installation",
    url: "/services/garage-floors",
    image: "/images/services/service-garage.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative isolate -mt-[4.75rem] min-h-[72vh] overflow-hidden sm:min-h-[78vh]">
        <Image
          src="/images/services/service-garage.png"
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
                GARAGE EPOXY SYSTEMS
                </p>
              </div>
              <h1 className="mt-5 font-display text-[2.55rem] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-[3.5rem] lg:text-[4.25rem]">
              Garage Floors Built To{" "}
                <span className="text-[var(--brand-color)]">Outlast.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/78 sm:text-lg">
              Showroom-grade epoxy for residential and collector garages — hot-tire resistant, easy to clean, finished for decades of daily use.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Button href="/contact-us">Get Free Quote</Button>
                <Link
                  href="#system"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/75 bg-transparent pl-6 pr-1.5 py-1.5 text-[0.95rem] font-semibold text-white transition-colors hover:border-white hover:bg-white/10 active:scale-[0.98]"
                >
                  Browse Systems
                  <ArrowUpRightIcon />
                </Link>
              </div>
            </div>

            <div className="hidden animate-hero-rise-delayed lg:col-span-4 lg:flex lg:justify-end">
              <div className="w-full max-w-[240px] rounded-[1.35rem] border border-white/15 bg-white/5 p-5 backdrop-blur-md">
                <ul className="w-full max-w-[240px] space-y-3.5">
                    {["Hot-tire resistant", "UV-stable clear", "2–3 day install"].map(
                    (item) => (
                        <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm font-medium text-white/85"
                        >
                        <span className="inline-flex size-6 items-center justify-center rounded-full bg-[var(--brand-color)]/20 text-[var(--brand-color)]">
                            <CheckIcon />
                        </span>
                        {item}
                        </li>
                    ),
                    )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spec strip ── */}
      <section
        className="relative border-b border-black/5 bg-[#F7F8FA] px-3 py-8 sm:px-4 md:px-6 lg:px-8"
        aria-label="Garage floor specifications"
      >
        <div className="container mx-auto">
          <dl className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className={index > 0 ? "lg:border-l lg:border-black/8 lg:pl-8" : undefined}
              >
                <dt className="text-[0.68rem] font-semibold tracking-[0.16em] text-black/35 uppercase">
                  {spec.label}
                </dt>
                <dd className="mt-2 font-display text-lg font-bold tracking-tight text-[#0B1120] sm:text-xl">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── System overview ── */}
      <section
        id="system"
        className="relative bg-[#F7F8FA] px-3 py-16 sm:px-4 sm:py-20 md:px-6 lg:px-8 lg:py-24"
        aria-labelledby="system-heading"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
                THE SYSTEM
              </p>
              <h2
                id="system-heading"
                className="mt-3 font-display text-[1.95rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.45rem] lg:text-[2.75rem]"
              >
                More Than Paint.
                <br />
                <span className="text-[var(--brand-color)]">A Real Floor Build.</span>
              </h2>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-black/55 sm:text-lg">
                Your garage is more than parking — it&apos;s cars, tools, seasonal
                traffic, and the first space guests see. Floorix garage epoxy
                transforms bare concrete into a seamless, high-performance
                surface with UV-stable clears and lasting chemical resistance.
              </p>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-black/55 sm:text-lg">
                Whether you want a mirror polish under a weekend car or a tough
                flake system that hides dust between cleanings, we diamond-grind
                the slab and install coatings built to last — not thin temporary
                coverings.
              </p>

              <div className="mt-9">
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-black/35 uppercase">
                  Ideal for
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {idealFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-medium text-[#0B1120]"
                    >
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-[var(--brand-color)]/12 text-[var(--brand-color)]">
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 lg:col-span-7">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] sm:rounded-[2.1rem]">
                <Image
                  src="/images/services/service-garage.png"
                  alt="Finished garage epoxy floor with luxury vehicle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#05070b]/45 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute -bottom-5 -left-3 hidden w-[46%] overflow-hidden rounded-[1.35rem] shadow-[0_28px_70px_rgba(11,17,32,0.3)] sm:block lg:-left-8 lg:-bottom-7">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/hero-epoxy-floor.png"
                    alt="Wide residential epoxy flooring detail"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute top-5 right-5 hidden rounded-2xl border border-white/20 bg-black/35 px-4 py-3 backdrop-blur-md sm:block">
                <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-white/55 uppercase">
                  Finish
                </p>
                <p className="mt-0.5 font-display text-base font-bold text-white">
                  Showroom gloss
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section
        className="relative overflow-hidden bg-[#070b14] px-3 py-16 sm:px-4 sm:py-20 md:px-6 lg:px-8 lg:py-24"
        aria-labelledby="benefits-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_0%,rgba(184,134,11,0.15),transparent_42%),radial-gradient(ellipse_at_92%_100%,rgba(184,134,11,0.08),transparent_40%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
              WHY GARAGE EPOXY
            </p>
            <h2
              id="benefits-heading"
              className="mt-3 font-display text-[1.95rem] font-bold tracking-tight text-white sm:text-[2.45rem]"
            >
              Performance You Notice{" "}
              <span className="text-[var(--brand-color)]">Every Time You Park.</span>
            </h2>
          </div>

          <ol className="mt-14 divide-y divide-white/10 border-t border-white/10">
            {benefits.map((benefit, index) => (
              <li
                key={benefit.title}
                className="group grid grid-cols-1 gap-4 py-8 sm:grid-cols-12 sm:gap-8 sm:py-10"
              >
                <span className="font-display text-3xl font-bold tracking-tight text-[var(--brand-color)]/35 transition-colors duration-300 group-hover:text-[var(--brand-color)] sm:col-span-2 sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-white sm:col-span-4 sm:text-2xl">
                  {benefit.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-white/55 sm:col-span-6 sm:text-base">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Finish options ── */}
      <section
        className="relative bg-white px-3 py-16 sm:px-4 sm:py-20 md:px-6 lg:px-8 lg:py-24"
        aria-labelledby="finishes-heading"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
                FINISH LIBRARY
              </p>
              <h2
                id="finishes-heading"
                className="mt-3 font-display text-[1.95rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.45rem]"
              >
                Choose How Your Garage{" "}
                <span className="text-[var(--brand-color)]">Shows Up.</span>
              </h2>
            </div>
            <p className="max-w-xs text-[0.95rem] leading-relaxed text-black/45 sm:text-right">
              Matched to your cars, tools, and how the space lives day to day.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {finishes.map((finish, index) => (
              <li key={finish.id} className="group relative isolate">
                <div
                  className={`relative overflow-hidden rounded-[1.5rem] ${
                    index === 1 ? "min-h-[380px] sm:min-h-[420px]" : "min-h-[340px] sm:min-h-[380px]"
                  }`}
                >
                  <Image
                    src={finish.image}
                    alt={finish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,16,0.08)_0%,rgba(5,9,16,0.82)_100%)]"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--brand-color)] uppercase">
                      Option {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-bold text-white">
                      {finish.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {finish.detail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Process ── */}
      <section
        className="relative bg-[#F7F8FA] px-3 py-16 sm:px-4 sm:py-20 md:px-6 lg:px-8 lg:py-24"
        aria-labelledby="process-heading"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
                HOW WE INSTALL
              </p>
              <h2
                id="process-heading"
                className="mt-3 font-display text-[1.95rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.45rem]"
              >
                From Bare Slab To{" "}
                <span className="text-[var(--brand-color)]">Finished Surface.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-black/45 sm:text-right">
              Prep first. No shortcuts. Every coat earns the next one.
            </p>
          </div>

          <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((item, index) => (
              <li key={item.step} className="relative">
                {index < process.length - 1 ? (
                  <span
                    className="absolute top-5 left-[calc(100%_-_0.5rem)] hidden h-px w-[calc(100%_-_1.5rem)] bg-gradient-to-r from-[var(--brand-color)]/55 to-transparent lg:block"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="font-display text-4xl font-bold tracking-tight text-[var(--brand-color)]/20 sm:text-5xl">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-[#0B1120]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/50">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Visual proof ── */}
      <section
        className="relative bg-white px-3 py-16 sm:px-4 sm:py-20 md:px-6 lg:px-8"
        aria-labelledby="proof-heading"
      >
        <div className="container mx-auto">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
              IN THE WILD
            </p>
            <h2
              id="proof-heading"
              className="mt-3 font-display text-[1.95rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.45rem]"
            >
              Garage Floors Worth{" "}
              <span className="text-[var(--brand-color)]">A Closer Look.</span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] sm:col-span-7 sm:aspect-auto sm:min-h-[400px]">
              <Image
                src="/images/services/service-garage.png"
                alt="Luxury garage with finished epoxy floor"
                fill
                sizes="(max-width: 640px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:col-span-5 sm:aspect-auto sm:min-h-[400px]">
              <Image
                src="/images/services/service-metallic.png"
                alt="Garage floor coating finish detail"
                fill
                sizes="(max-width: 640px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] sm:col-span-12 sm:min-h-[280px]">
              <Image
                src="/images/hero-epoxy-floor.png"
                alt="Premium epoxy floor across a residential space"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section
        className="relative bg-[#F7F8FA] px-3 py-16 sm:px-4 sm:py-20 md:px-6 lg:px-8"
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
              QUESTIONS
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-display text-[1.95rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.45rem]"
            >
              Garage Floor{" "}
              <span className="text-[var(--brand-color)]">FAQs</span>
            </h2>
          </div>

          <div className="mt-12 divide-y divide-black/8 border-t border-black/8">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-bold tracking-tight text-[#0B1120] marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-[var(--brand-color)] transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-10 text-[0.95rem] leading-relaxed text-black/55">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid CTA band ── */}
      <section className="relative overflow-hidden bg-[#070b14] px-3 py-14 sm:px-4 sm:py-16 md:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_50%,rgba(184,134,11,0.18),transparent_52%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-white sm:text-[2.25rem]">
              Ready for a garage that looks intentional?
            </h2>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-white/60">
              Tell us about your slab, timeline, and finish preference — we&apos;ll
              recommend the right garage epoxy system.
            </p>
          </div>
          <Button href="/contact-us" className="shrink-0">
            Request a Quote
          </Button>
        </div>
      </section>

      {/* ── Related ── */}
      <section
        className="relative bg-white px-3 py-16 sm:px-4 sm:py-20 md:px-6 lg:px-8 lg:pb-24"
        aria-labelledby="related-heading"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
                KEEP EXPLORING
              </p>
              <h2
                id="related-heading"
                className="mt-3 font-display text-[1.95rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.45rem]"
              >
                Related{" "}
                <span className="text-[var(--brand-color)]">Systems.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-black/45 transition-colors hover:text-[var(--brand-color)]"
            >
              All services
              <span className="text-[var(--brand-color)] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowIcon size={14} />
              </span>
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {related.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="group relative block min-h-[280px] overflow-hidden rounded-[1.5rem] sm:min-h-[320px]"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,16,0.1)_0%,rgba(5,9,16,0.85)_100%)]"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/70">{item.description}</p>
                    </div>
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/70 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B1120]">
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
