import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/ui/Button";
import { services } from "@/lib/services";
import Heading from "@/components/Heading";
import FaqAccordion from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Quartz Epoxy Flooring Installation | Saven shades",
  description:
    "Professional quartz epoxy flooring by Saven shades. Heavy-duty quartz systems for commercial kitchens, wash-down areas, and demanding spaces — refined look with maximum toughness.",
  keywords: [
    "quartz epoxy flooring",
    "quartz floor coating",
    "commercial quartz flooring",
    "heavy duty quartz epoxy",
    "quartz epoxy installation",
  ],
  alternates: { canonical: "/services/quartz-flooring" },
  openGraph: {
    title: "Quartz Epoxy Flooring Installation | Saven shades",
    description:
      "Heavy-duty quartz epoxy floors with refined texture for wash-down zones, commercial service areas, and high-abuse spaces.",
    type: "website",
    images: [
      {
        url: "/images/services/service-commercial.png",
        alt: "Quartz epoxy flooring in a commercial space",
      },
    ],
  },
};

const specs = [
  { label: "Best for", value: "Kitchens · Wash-down · Service areas" },
  { label: "Finish options", value: "Fine · Medium · Heavy texture" },
  { label: "Typical install", value: "3–5 days" },
  { label: "Return to use", value: "Often 48–72 hours" },
];

const benefits = [
  {
    title: "Heavy-duty under real abuse",
    description:
      "Quartz aggregate systems build a denser, more resilient surface than standard coatings — made for carts, wash-downs, and demanding service traffic.",
  },
  {
    title: "Slip resistance where it counts",
    description:
      "Textured quartz profiles improve footing in wet process areas, commercial kitchens, and zones where safety and sanitation both matter.",
  },
  {
    title: "Refined enough for public spaces",
    description:
      "Despite the toughness, quartz floors read clean and intentional — professional color options without looking unfinished or purely industrial.",
  },
  {
    title: "Easy to sanitize & maintain",
    description:
      "A seamless, non-porous system that stands up to cleaning routines and helps resist staining in high-moisture commercial environments.",
  },
];

const process = [
  {
    step: "01",
    title: "Use-case assessment",
    description:
      "We review traffic, moisture, cleaning chemicals, and safety needs so texture and system build match how the space actually operates.",
  },
  {
    step: "02",
    title: "Precision prep",
    description:
      "Diamond grinding, crack repair, and contamination removal create a mechanical bond strong enough for quartz aggregate systems.",
  },
  {
    step: "03",
    title: "Build, broadcast & seal",
    description:
      "Base coats, quartz broadcast, and clear seals are applied in controlled stages for coverage, texture, and long-term durability.",
  },
  {
    step: "04",
    title: "Handoff & care plan",
    description:
      "Clear return-to-use timing plus maintenance guidance for staff cleaning schedules and ongoing slip-resistant performance.",
  },
];

const finishes = [
  {
    id: "fine",
    name: "Fine Quartz",
    detail: "Subtle texture with a refined look — ideal for corridors and professionally finished service spaces.",
    image: "/images/services/service-commercial.png",
  },
  {
    id: "medium",
    name: "Medium Quartz",
    detail: "Balanced grip and appearance for kitchens, labs adjacent areas, and high-traffic commercial floors.",
    image: "/images/services/service-industrial.png",
  },
  {
    id: "heavy",
    name: "Heavy Quartz",
    detail: "Maximum texture and toughness for wash-down zones, docks, and the most demanding wet areas.",
    image: "/images/services/service-garage.png",
  },
];

const faqs = [
  {
    question: "How is quartz flooring different from flake?",
    answer:
      "Quartz systems use denser mineral aggregate for heavier texture and typically higher abuse resistance. Flake offers multi-tone camouflage with lighter decorative texture. We recommend quartz when grip, moisture, and durability are the priority.",
  },
  {
    question: "Is quartz epoxy good for commercial kitchens and wash-down areas?",
    answer:
      "Yes. Quartz profiles are frequently specified for wet process zones, food service adjacent areas, and spaces that need both sanitation-friendly surfaces and reliable traction.",
  },
  {
    question: "Will quartz floors feel too rough?",
    answer:
      "Texture is selectable. Fine profiles feel more refined underfoot, while heavier builds maximize slip resistance. We’ll match texture to footwear, traffic, and safety requirements.",
  },
  {
    question: "How long does quartz epoxy flooring last?",
    answer:
      "A properly prepped Saven shades quartz system is engineered for years of commercial use. Lifespan depends on prep quality, traffic, cleaning chemicals, and the texture profile installed.",
  },
];

const idealFor = [
  "Commercial kitchens",
  "Wash-down & wet zones",
  "Corridors & service areas",
  "Labs & clinical spaces",
];

const related = services.filter((s) => s.id !== "quartz-flooring").slice(0, 3);

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

export default function QuartzFlooringPage() {
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
    name: "Quartz Epoxy Flooring",
    description:
      "Professional quartz epoxy flooring with heavy-duty texture and a refined finish for commercial kitchens, wash-down areas, and demanding service spaces.",
    provider: { "@type": "Organization", name: "Saven shades" },
    serviceType: "Quartz Epoxy Flooring Installation",
    url: "/services/quartz-flooring",
    image: "/images/services/service-commercial.png",
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

      <PageHeader
        eyebrow="QUARTZ EPOXY SYSTEMS"
        title={
          <>
            Floors Built For{" "}
            <span className="text-[var(--brand-color)]">Tough Duty.</span>
          </>
        }
        description="Heavy-duty quartz epoxy for commercial kitchens, wash-down zones, and service areas — maximum toughness with a clean, professional finish."
        primaryAction={{ href: "/contact-us", label: "Get Free Quote" }}
        secondaryAction={{
          href: "#system",
          label: "Browse Systems",
          icon: "arrow",
        }}
        asideContent={
          <div className="w-full max-w-[240px] rounded-[1.35rem] border border-white/15 bg-white/5 p-5 backdrop-blur-md">
            <ul className="w-full max-w-[240px] space-y-3.5">
              {["Heavy-duty build", "Wet-area grip", "Easy to sanitize"].map(
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
        <div className="container mx-auto sm:px-4 md:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {specs.map((spec, index) => (
              <div key={spec.label} className={index > 0 ? "lg:border-l lg:border-black/8 lg:pl-8" : undefined}>
                <dt className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] uppercase">{spec.label}</dt>
                <dd className="font-display text-lg font-bold tracking-tight text-black">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── System overview ── */}
      <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto sm:px-4 md:px-6 lg:px-8">
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
                  <p>Quartz epoxy is the system you choose when the floor has to work as hard as the rest of the facility. Dense mineral aggregate builds a tough, textured surface that stands up to wash-downs, carts, and demanding service traffic — without looking unfinished.</p>

                  <p>From commercial kitchens and wet process zones to corridors and clinical spaces, we diamond-grind the slab and install quartz systems matched to grip, sanitation, and long-term durability.</p>
                  </>
                }
              />

              <div className="mt-9">
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-black/35 uppercase">Ideal for</p>
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
                  src="/images/services/service-commercial.png"
                  alt="Quartz epoxy flooring in a commercial space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070b]/45 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 -left-3 hidden w-[46%] overflow-hidden rounded-[1.35rem] shadow-[0_28px_70px_rgba(11,17,32,0.3)] sm:block lg:-left-8 lg:-bottom-7">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/services/service-industrial.png"
                    alt="Quartz epoxy flooring texture detail"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute top-5 right-5 hidden rounded-2xl border border-white/20 bg-black/35 px-4 py-3 backdrop-blur-md sm:block">
                <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-white/55 uppercase">Finish</p>
                <div className="mt-0.5 font-display text-base font-bold text-white">Quartz texture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="relative overflow-hidden bg-[var(--black)] py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(184,134,11,0.14),transparent_50%),radial-gradient(ellipse_at_0%_100%,rgba(184,134,11,0.06),transparent_40%)]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Heading
              tag="h2"
              id="quartz-benefits-heading"
              align="center"
              size="section"
              tone="light"
              eyebrow="WHY QUARTZ EPOXY"
              title={
                <>
                  Performance You Notice{" "}
                  <span className="text-[var(--brand-color)]">
                    Under Pressure.
                  </span>
                </>
              }
              description="A quartz floor isn’t a light decorative broadcast — it’s a heavy-duty system. Tough aggregate texture, wet-area traction, and a finish that still looks intentional."
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
                  <span className="pointer-events-none absolute top-4 right-5 font-display text-6xl font-bold leading-none tracking-tight text-white/[0.04] transition-colors duration-500 group-hover:text-[var(--brand-color)]/15 sm:top-5 sm:right-6 sm:text-7xl">{number}</span>

                  <div className="relative z-10 flex h-full flex-col text-white/85 space-y-2">
                    <span className="inline-flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-[var(--brand-color)] uppercase">
                      <span className="h-px w-6 bg-[var(--brand-color)] transition-all duration-500 group-hover:w-10" />
                      {number}
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[var(--brand-color)] sm:text-2xl">{benefit.title}</h3>
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
        <div className="container mx-auto sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="FINISH LIBRARY"
                title={<>Choose How Your Quartz <span className="text-[var(--brand-color)]">Performs.</span></>}
                description="Matched to moisture risk, cleaning routines, and the texture profile your space needs."
              />
              </div>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {finishes.map((finish, index) => (
              <li key={finish.id} className="group relative isolate">
                <div className={`relative overflow-hidden rounded-[1.5rem] ${index === 1 ? "min-h-[380px] sm:min-h-[420px]" : "min-h-[340px] sm:min-h-[380px]"}`}>
                  <Image
                    src={finish.image}
                    alt={finish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,16,0.08)_0%,rgba(5,9,16,0.82)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white/85 space-y-2">
                    <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--brand-color)] uppercase">Option {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="font-display text-2xl font-bold text-white">{finish.name}</h3>
                    <p>{finish.detail}</p>
                  </div>
                </div>
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
                id="quartz-process-heading"
                size="section"
                tone="dark"
                eyebrow="HOW WE INSTALL"
                title={
                  <>
                    From Bare Slab To{" "}
                    <span className="text-[var(--brand-color)]">
                      Service-Ready.
                    </span>
                  </>
                }
                description="Prep first. Build texture with intent. Every coat earns the next one."
                descriptionClassName="max-w-md"
              />

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/8 pt-6">
                <div>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-black/35 uppercase">Typical install</p>
                  <p className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0B1120]">3–5 days</p>
                </div>
                <span className="hidden h-10 w-px bg-black/10 sm:block" aria-hidden="true" />
                <div>
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-black/35 uppercase">Return to use</p>
                  <p className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0B1120]">48–72 hrs</p>
                </div>
              </div>
            </div>

            <ol className="relative lg:col-span-7">
              <span className="absolute top-3 bottom-3 left-[0.95rem] w-px bg-gradient-to-b from-[var(--brand-color)]/55 via-black/10 to-[var(--brand-color)]/35 sm:left-[1.15rem]" />

              {process.map((item, index) => (
                <li key={item.step} className="group relative grid grid-cols-[2.25rem_1fr] gap-5 border-b border-black/8 py-7 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[2.75rem_1fr] sm:gap-8 sm:py-9">
                  <span className="relative z-10 mt-1.5 inline-flex size-[1.9rem] items-center justify-center sm:mt-2 sm:size-[2.3rem]">
                    <span className="absolute inset-0 rounded-full bg-[var(--brand-color)]/15 transition-transform duration-500 group-hover:scale-125" />
                    <span className="relative size-3 rounded-full bg-[var(--brand-color)] shadow-[0_0_0_4px_#F7F8FA] transition-shadow duration-500 group-hover:shadow-[0_0_0_6px_#F7F8FA,0_0_20px_rgba(184,134,11,0.35)] sm:size-3.5" />
                  </span>

                  <div className="min-w-0 space-y-2">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-display text-sm font-bold tracking-[0.16em] text-[var(--brand-color)]">{item.step}</span>
                      <span className="hidden h-px w-8 bg-[var(--brand-color)]/40 sm:inline-block"/>
                      <span className="text-[0.68rem] font-semibold tracking-[0.14em] text-black/30 uppercase">Step {index + 1} of {process.length}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-black transition-colors duration-300 group-hover:text-[var(--brand-color)] sm:text-2xl">{item.title}</h3>
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
              id="faq-heading"
              size="section"
              tone="dark"
              eyebrow="QUESTIONS"
              title={
                <>
                  Quartz Floor{" "}
                  <span className="text-[var(--brand-color)]">FAQs</span>
                </>
              }
              description="Clear answers before you commit — texture levels, wet-area use, durability, and how quartz compares to flake."
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
        <div className="container mx-auto sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="KEEP EXPLORING"
                title={<>Related<span className="text-[var(--brand-color)]">Systems.</span></>}
                description="Explore other epoxy systems that pair well with quartz floors."
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
                <Link href={item.href} className="group relative block min-h-[280px] overflow-hidden rounded-[1.5rem] sm:min-h-[320px]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,16,0.1)_0%,rgba(5,9,16,0.85)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div className="min-w-0 text-white/85 space-y-2">
                      <h3 className="font-display text-xl font-bold">{item.title}</h3>
                      <p>{item.description}</p>
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
