import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import OverlayCard from "@/components/OverlayCard";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/services";
import Heading from "@/components/Heading";
import FaqAccordion from "@/components/faq-accordion";
import { serviceFaqs } from "@/lib/service-faqs";
import { BASE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Stone Epoxy Flooring Installation | Seven Shades",
  description: "Professional stone epoxy flooring by Seven Shades. Natural stone-look systems with durable aggregate texture — refined appearance, strong grip, and built for residential and commercial spaces.",
  keywords: ["stone epoxy flooring", "stone look epoxy floor", "epoxy stone flooring", "aggregate epoxy floor", "stone epoxy installation"],
  alternates: {
    canonical: `${BASE_URL}/services/stone-epoxy`,
  },
  openGraph: {
    title: "Stone Epoxy Flooring Installation | Seven Shades",
    description: "Professional stone epoxy flooring by Seven Shades. Natural stone-look systems with durable aggregate texture — refined appearance, strong grip, and built for residential and commercial spaces.",
    type: "website",
    images: [
      {
        url: BASE_URL + "/images/services/stone-epoxy.webp",
        alt: "Stone epoxy flooring with refined aggregate texture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stone Epoxy Flooring Installation | Seven Shades",
    description: "Professional stone epoxy flooring by Seven Shades. Natural stone-look systems with durable aggregate texture — refined appearance, strong grip, and built for residential and commercial spaces.",
    images: [BASE_URL + "/images/services/stone-epoxy.webp"],
  },
};

const specs = [
  { label: "Best for", value: "Homes · Entries · Service floors" },
  { label: "Finish options", value: "Fine · Medium · Bold stone" },
  { label: "Typical install", value: "3–5 days" },
  { label: "Return to use", value: "Often 48–72 hours" },
];

const benefits = [
  {
    title: "Natural stone character",
    description:
      "Mineral aggregate creates depth and variation that reads like stone — more intentional than plain coatings, without bulky tile seams or grout lines.",
  },
  {
    title: "Grip where moisture shows up",
    description:
      "Textured stone profiles improve footing in entries, laundry zones, patios adjacent spaces, and commercial areas that see wet traffic.",
  },
  {
    title: "Tough under real use",
    description:
      "Dense aggregate builds a resilient surface that stands up to carts, foot traffic, cleaning routines, and everyday abrasion better than thin film coatings.",
  },
  {
    title: "Seamless & easy to maintain",
    description:
      "A continuous system without tile joints — wipe or wash clean while keeping a refined stone-inspired look that stays sharp in public and home spaces.",
  },
];

const process = [
  {
    step: "01",
    title: "Style & use assessment",
    description:
      "We review lighting, moisture, traffic, and the stone aesthetic you want — then match aggregate size and color blend to the space.",
  },
  {
    step: "02",
    title: "Precision prep",
    description:
      "Diamond grinding, crack repair, and contamination removal create a mechanical bond strong enough for heavy aggregate stone systems.",
  },
  {
    step: "03",
    title: "Build, broadcast & seal",
    description:
      "Base coats, stone aggregate broadcast, and protective clear seals are applied in controlled stages for coverage, texture, and lasting clarity.",
  },
  {
    step: "04",
    title: "Handoff & care plan",
    description:
      "Clear return-to-use timing plus maintenance guidance so your stone epoxy floor keeps its look and grip performance over time.",
  },
];

const finishes = [
  {
    id: "fine",
    name: "Fine Stone",
    detail: "Subtle aggregate texture with a refined stone look — ideal for entries, corridors, and polished interiors.",
    image: "/images/services/service-commercial.webp",
  },
  {
    id: "medium",
    name: "Medium Stone",
    detail: "Balanced depth and grip for mudrooms, basements, retail floors, and busy household or commercial traffic.",
    image: "/images/services/service-garage.webp",
  },
  {
    id: "bold",
    name: "Bold Stone",
    detail: "Heavier aggregate presence for maximum texture and toughness in wet-prone or high-abuse zones.",
    image: "/images/services/service-industrial.webp",
  },
];

const faqs = serviceFaqs["stone-epoxy"];

const idealFor = [
  "Home entries & mudrooms",
  "Basements & wet-prone areas",
  "Retail & service floors",
  "Garages with weather traffic",
];

const related = services.filter((s) => s.id !== "stone-epoxy").slice(0, 3);

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

export default function StoneEpoxyPage() {

  return (
    <>
      <PageHeader
        eyebrow="STONE EPOXY SYSTEMS"
        title={
          <>
            Floors With{" "}
            <span className="text-[var(--brand-color)]">Stone Character.</span>
          </>
        }
        description="Stone epoxy for homes and commercial spaces — natural aggregate depth, strong grip, and a refined seamless finish built for real traffic."
        primaryAction={{ href: "/contact-us", label: "Get Free Quote" }}
        secondaryAction={{
          href: "#system",
          label: "Browse Systems",
          icon: "arrow",
        }}
        asideContent={
          <div className="w-full max-w-[240px] rounded-[1.35rem] border border-white/15 bg-white/5 p-5 backdrop-blur-md">
            <ul className="w-full max-w-[240px] space-y-3.5">
              {["Stone-look depth", "Strong grip", "Seamless finish"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/85">
                    <span className="inline-flex size-6 items-center justify-center rounded-full bg-[var(--brand-color)]/20 text-[var(--brand-color)]"><CheckIcon /></span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        }
      />
    
      {/* ── Spec strip ── */}
      <section className="relative border-b border-black/5 bg-gray-50 py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {specs.map((spec, index) => (
              <div key={spec.label} className={index > 0 ? "lg:border-l lg:border-black/8 lg:pl-8" : undefined}>
                <dt className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] uppercase">{spec.label}</dt>
                <dd className="text-lg font-bold tracking-tight text-black">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── System overview ── */}
      <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="THE SYSTEM"
                title={<>More Than Paint. <span className="text-[var(--brand-color)]">A Real Floor Build.</span></>}
                description={
                  <>
                  <p>Stone epoxy delivers the look of natural aggregate with the seamless performance of a high-build floor system. Seven Shades stone floors combine mineral texture, durable clear seals, and a refined finish that belongs in homes and professional spaces alike.</p>

                  <p>From entries and mudrooms to retail and service floors, we diamond-grind the slab and install stone aggregate systems matched to grip, style, and long-term toughness — not temporary coatings.</p>
                  </>
                }
              />

              <div className="mt-9">
                <div>Ideal for</div>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {idealFor.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-black">
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
                  src="/images/services/stone-epoxy.webp"
                  alt="Stone epoxy flooring with refined aggregate texture"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070b]/45 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 -left-3 hidden w-[46%] overflow-hidden rounded-[1.35rem] shadow-xl sm:block lg:-left-8 lg:-bottom-7">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/services/service-garage.webp"
                    alt="Stone epoxy flooring texture detail"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute top-5 right-5 hidden rounded-2xl border border-white/20 bg-black/35 px-4 py-3 backdrop-blur-md sm:block">
                <div className="text-white/70">Finish</div>
                <div className="text-lg font-bold text-white">Stone texture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="relative overflow-hidden bg-[var(--black)] py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(13,127,232,0.14),transparent_50%),radial-gradient(ellipse_at_0%_100%,rgba(13,127,232,0.06),transparent_40%)]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Heading
              tag="h2"
              align="center"
              size="section"
              tone="light"
              eyebrow="WHY STONE EPOXY"
              title={
                <>
                  Texture You Feel.{" "}
                  <span className="text-[var(--brand-color)]">
                    Style You See.
                  </span>
                </>
              }
              description="A stone floor isn’t thin decoration — it’s aggregate depth, wet-area traction, and a seamless finish that still looks refined."
              descriptionClassName="mx-auto max-w-2xl text-white/60"
            />
          </div>

          <ul className="mt-14 grid grid-cols-1 overflow-hidden border border-white/10 sm:mt-16 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const number = String(index + 1).padStart(2, "0");
              const isRight = index % 2 === 1;
              const isBottom = index >= 2;

              return (
                <li key={benefit.title}
                  className={[
                    "group relative min-h-[220px] p-7 sm:min-h-[260px] sm:p-9 lg:p-10",
                    isRight ? "sm:border-l sm:border-white/10" : "",
                    isBottom ? "border-t border-white/10" : "",
                    index > 0 && !isBottom ? "border-t border-white/10 sm:border-t-0" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span className="pointer-events-none absolute top-4 right-5 text-6xl font-bold leading-none tracking-tight text-white/[0.04] transition-colors duration-500 group-hover:text-[var(--brand-color)]/15 sm:top-5 sm:right-6 sm:text-7xl">{number}</span>

                  <div className="relative z-10 flex h-full flex-col space-y-2 text-white/85">
                    <span className="inline-flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-[var(--brand-color)] uppercase">
                      <span className="h-px w-6 bg-[var(--brand-color)] transition-all duration-500 group-hover:w-10" />
                      {number}
                    </span>
                    <h3 className="mt-5 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[var(--brand-color)] sm:text-2xl">{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>

                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--brand-color)] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
            
      {/* ── Finish options ── */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="FINISH LIBRARY"
                title={<>Choose How Your Stone <span className="text-[var(--brand-color)]">Reads.</span></>}
                description="Matched to style preference, moisture exposure, and how much texture you want underfoot."
              />
              </div>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 items-center">
            {finishes.map((finish, index) => (
              <li key={finish.id}>
                <OverlayCard
                  image={finish.image}
                  imageAlt={finish.name}
                  title={finish.name}
                  description={finish.detail}
                  alwaysVisible
                  captionStyle="panel"
                  roundedClassName="rounded-[1.5rem]"
                  aspectClassName={index === 1 ? "h-[400px]" : "h-[340px]"}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
            
      {/* ── Process ── */}
      <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--brand-color)]/12" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-black/20" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="HOW WE INSTALL"
                title={
                  <>
                    From Bare Slab To{" "}
                    <span className="text-[var(--brand-color)]">
                      Finished Stone.
                    </span>
                  </>
                }
                description="Prep first. Broadcast with intent. Every coat earns the next one."
                descriptionClassName="max-w-md"
              />

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/8 pt-6">
                <div>
                  <div>Typical install</div>
                  <div className="text-2xl font-bold tracking-tight text-[#0B1120]">3–5 days</div>
                </div>
                <span className="hidden h-10 w-px bg-black/10 sm:block" aria-hidden="true" />
                <div>
                  <div>Return to use</div>
                  <div className="text-2xl font-bold tracking-tight text-[#0B1120]">48–72 hrs</div>
                </div>
              </div>
            </div>

            <ol className="relative lg:col-span-7">
              <span className="absolute top-3 bottom-3 left-[0.95rem] w-px bg-gradient-to-b from-[var(--brand-color)]/55 via-black/10 to-[var(--brand-color)]/35 sm:left-[1.15rem]" />

              {process.map((item, index) => (
                <li key={item.step} className="group relative grid grid-cols-[2.25rem_1fr] gap-5 border-b border-black/8 py-7 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[2.75rem_1fr] sm:gap-8 sm:py-9">
                  <span className="relative z-10 mt-1.5 inline-flex size-[1.9rem] items-center justify-center sm:mt-2 sm:size-[2.3rem]">
                    <span className="absolute inset-0 rounded-full bg-[var(--brand-color)]/15 transition-transform duration-500 group-hover:scale-125" />
                    <span className="relative size-3 rounded-full bg-[var(--brand-color)] shadow-[0_0_0_4px_#F7F8FA] transition-shadow duration-500 group-hover:shadow-[0_0_0_6px_#F7F8FA,0_0_20px_rgba(13,127,232,0.35)] sm:size-3.5" />
                  </span>

                  <div className="min-w-0 space-y-2">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-sm font-bold tracking-[0.16em] text-[var(--brand-color)]">{item.step}</span>
                      <span className="hidden h-px w-8 bg-[var(--brand-color)]/40 sm:inline-block"/>
                      <span className="text-[0.68rem] font-semibold tracking-[0.14em] text-black/30 uppercase">Step {index + 1} of {process.length}</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-black transition-colors duration-300 group-hover:text-[var(--brand-color)] sm:text-2xl">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
              
      {/* ── FAQs ── */}
      <section className="relative overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-28">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading
              tag="h2"
              size="section"
              tone="dark"
              eyebrow="QUESTIONS"
              title={
                <>
                  Stone Floor{" "}
                  <span className="text-[var(--brand-color)]">FAQs</span>
                </>
              }
              description="Clear answers before you commit — texture levels, wet-area use, durability, and how stone compares to flake or solid."
              align="center"
            />
          </div>

          <div className="mx-auto mt-12 max-w-3xl sm:mt-14">
            <FaqAccordion items={faqs} defaultOpenIndex={0} />
          </div>
        </div>
      </section>
              
      {/* ── Related ── */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="KEEP EXPLORING"
                title={<>Related <span className="text-[var(--brand-color)]">Systems.</span></>}
                description="Explore other epoxy systems that pair well with stone epoxy floors."
              />
            </div>
            <Link href="/services" className="group inline-flex items-center gap-1.5 text-sm font-medium text-black/45 transition-colors hover:text-[var(--brand-color)]">
              All services
              <span className="text-[var(--brand-color)] transition-transform duration-300 group-hover:translate-x-0.5"><ArrowIcon size={14} /></span>
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {related.map((item) => (
              <li key={item.id}>
                <OverlayCard
                  href={item.href}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  description={item.description}
                  alwaysVisible
                  captionStyle="plain"
                  showArrow
                  roundedClassName="rounded-[1.5rem]"
                  aspectClassName="h-[320px]"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
