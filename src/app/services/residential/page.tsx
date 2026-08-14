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
  title: "Residential Epoxy Flooring Installation | Seven Shades",
  description: "Professional residential epoxy flooring by Seven Shades. Beautiful, durable floors for garages, basements, mudrooms, and living spaces — easy to clean, stylish, and built for everyday home life.",
  keywords: ["residential epoxy flooring", "home epoxy floors", "garage epoxy flooring", "basement epoxy floor", "residential floor coating"],
  alternates: {
    canonical: `${BASE_URL}/services/residential`,
  },
  openGraph: {
    title: "Residential Epoxy Flooring Installation | Seven Shades",
    description: "Professional residential epoxy flooring by Seven Shades. Beautiful, durable floors for garages, basements, mudrooms, and living spaces — easy to clean, stylish, and built for everyday home life.",
    type: "website",
    images: [
      {
        url: BASE_URL + "/images/services/service-garage.webp",
        alt: "Residential garage with finished epoxy flooring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Epoxy Flooring Installation | Seven Shades",
    description: "Professional residential epoxy flooring by Seven Shades. Beautiful, durable floors for garages, basements, mudrooms, and living spaces — easy to clean, stylish, and built for everyday home life.",
    images: [BASE_URL + "/images/services/service-residential.png"],
  },  
};

const specs = [
  { label: "Best for", value: "Homes · Garages · Basements" },
  { label: "Finish options", value: "Solid · Flake · Metallic" },
  { label: "Typical install", value: "2–4 days" },
  { label: "Return to use", value: "Usually 48–72 hours" },
];

const benefits = [
  {
    title: "Looks that elevate your home",
    description:
      "From clean solid colors to full flake and metallic depth, residential systems are designed to feel intentional — not like a workshop afterthought.",
  },
  {
    title: "Built for real home life",
    description:
      "Resists oil, salt, muddy shoes, pet accidents, and everyday spills while staying easier to clean than sealed concrete or thin paint coatings.",
  },
  {
    title: "Safer, seamless surfaces",
    description:
      "Optional texture for wet entryways and laundry zones, with seamless finishes that hide dust and make weekly upkeep simple.",
  },
  {
    title: "Color that stays true",
    description:
      "UV-stable clears and pigmented systems that help resist ambering and fading under garage-door sunlight and bright living spaces.",
  },
];

const process = [
  {
    step: "01",
    title: "Home assessment",
    description:
      "We review how you use the space — cars, kids, pets, moisture, and style goals — so the system fits your household, not a one-size template.",
  },
  {
    step: "02",
    title: "Prep & repair",
    description:
      "Diamond grinding, crack repair, and contaminant removal create a mechanical bond that lasts through seasons of daily wear.",
  },
  {
    step: "03",
    title: "Coat & finish",
    description:
      "Primer, color or decorative broadcast, and protective clear coats applied in controlled stages for a clean, uniform residential finish.",
  },
  {
    step: "04",
    title: "Cure & care guide",
    description:
      "Clear timing for foot traffic and vehicles, plus simple maintenance guidance that keeps the floor looking sharp for years.",
  },
];

const finishes = [
  {
    id: "solid",
    name: "Solid Color",
    detail: "Clean continuous color with gloss or satin clear — ideal for modern homes and tidy garage or basement builds.",
    image: "/images/services/service-commercial.webp",
  },
  {
    id: "flake",
    name: "Full Flake",
    detail: "Multi-tone broadcast for grip, style, and everyday forgiveness in busy family spaces.",
    image: "/images/services/service-garage.webp",
  },
  {
    id: "metallic",
    name: "Metallic",
    detail: "Liquid depth and movement for feature rooms, basements, and collector bays that deserve a statement floor.",
    image: "/images/services/service-metallic.webp",
  },
];

const faqs = serviceFaqs.residential;

const idealFor = [
  "Residential garages",
  "Basements & recreation rooms",
  "Mudrooms & laundry",
  "Home workshops & gyms",
];

const related = services.filter((s) => s.id !== "residential").slice(0, 3);

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

export default function ResidentialPage() {

  return (
    <>

      <PageHeader
        eyebrow="RESIDENTIAL EPOXY SYSTEMS"
        title={
          <>
            Floors Built For{" "}
            <span className="text-[var(--brand-color)]">Home Life.</span>
          </>
        }
        description="Residential epoxy for garages, basements, mudrooms, and living spaces — stylish, easy to clean, and engineered for everyday family use."
        primaryAction={{ href: "/contact-us", label: "Get Free Quote" }}
        secondaryAction={{
          href: "#system",
          label: "Browse Systems",
          icon: "arrow",
        }}
        asideContent={
          <div className="w-full max-w-[240px] rounded-[1.35rem] border border-white/15 bg-white/5 p-5 backdrop-blur-md">
            <ul className="w-full max-w-[240px] space-y-3.5">
              {["Family-ready", "Easy to clean", "Showroom finishes"].map(
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
                  <p>Your home floor should handle muddy shoes, parked cars, laundry spills, and weekend projects — without looking worn out. Seven Shades residential epoxy turns ordinary concrete into a seamless, easy-care surface with style that fits the house.</p>

                  <p>From garage bays and basements to mudrooms and recreation rooms, we diamond-grind the slab and install systems chosen for durability and everyday beauty — not thin temporary coatings.</p>
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
                  src="/images/services/service-garage.webp"
                  alt="Residential garage with finished epoxy flooring"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070b]/45 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 -left-3 hidden w-[46%] overflow-hidden rounded-[1.35rem] shadow-xl sm:block lg:-left-8 lg:-bottom-7">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/services/service-metallic.webp"
                    alt="Residential metallic epoxy flooring detail"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute top-5 right-5 hidden rounded-2xl border border-white/20 bg-black/35 px-4 py-3 backdrop-blur-md sm:block">
                <div className="text-white/70">Finish</div>
                <div className="text-lg font-bold text-white">Home-ready build</div>
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
              eyebrow="WHY RESIDENTIAL EPOXY"
              title={
                <>
                  Performance You Notice{" "}
                  <span className="text-[var(--brand-color)]">
                    Every Day.
                  </span>
                </>
              }
              description="A residential floor should look great and live easy — durable under family traffic, simple to clean, and finished with intention."
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
                title={<>Choose How Your Home <span className="text-[var(--brand-color)]">Shows Up.</span></>}
                description="Matched to room use, style preference, and how much grip or visual depth you want."
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
                      Home-Ready.
                    </span>
                  </>
                }
                description="Prep first. Schedule around your household. Every coat earns the next one."
                descriptionClassName="max-w-md"
              />

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/8 pt-6">
                <div>
                  <div>Typical install</div>
                  <div className="text-2xl font-bold tracking-tight text-[#0B1120]">2–4 days</div>
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
      <section className="relative overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-24">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading
              tag="h2"
              size="section"
              tone="dark"
              eyebrow="QUESTIONS"
              title={
                <>
                  Residential Floor{" "}
                  <span className="text-[var(--brand-color)]">FAQs</span>
                </>
              }
              description="Clear answers before you commit — room fit, cure timing, finishes, and long-term care."
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
                description="Explore other epoxy systems that pair well with residential spaces."
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
