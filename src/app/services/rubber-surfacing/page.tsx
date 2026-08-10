import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/services";
import Heading from "@/components/Heading";
import FaqAccordion from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Rubber Surfacing Installation | Saven shades",
  description:
    "Professional rubber surfacing by Saven shades. Soft, durable, slip-resistant floors for gyms, play areas, daycare spaces, and recreational zones — impact absorbing and built for high activity.",
  keywords: [
    "rubber surfacing",
    "rubber flooring installation",
    "gym rubber floor",
    "playground rubber surface",
    "impact absorbing rubber flooring",
  ],
  alternates: { canonical: "/services/rubber-surfacing" },
  openGraph: {
    title: "Rubber Surfacing Installation | Saven shades",
    description:
      "Soft, durable rubber surfaces for gyms, play spaces, and high-activity areas — impact absorbing, slip resistant, and easy to maintain.",
    type: "website",
    images: [
      {
        url: "/images/services/service-garage.png",
        alt: "Rubber surfacing for recreation and activity spaces",
      },
    ],
  },
};

const specs = [
  { label: "Best for", value: "Gyms · Play · Rec spaces" },
  { label: "Finish options", value: "Tiles · Rolls · Poured" },
  { label: "Typical install", value: "1–3 days" },
  { label: "Return to use", value: "Often same day–48 hrs" },
];

const benefits = [
  {
    title: "Impact absorption underfoot",
    description:
      "Rubber surfaces cushion falls, drops, and workout impact — a smarter choice for gyms, play areas, and spaces where comfort and safety matter every day.",
  },
  {
    title: "Slip resistance for active zones",
    description:
      "Textured rubber profiles help improve traction in high-movement areas, from training floors to daycare play spaces and indoor recreation rooms.",
  },
  {
    title: "Quiet, comfortable performance",
    description:
      "Rubber dampens noise and softens hard concrete underfoot, making busy rooms feel quieter and more comfortable without sacrificing durability.",
  },
  {
    title: "Durable and easy to maintain",
    description:
      "Built for heavy foot traffic and equipment use. Routine sweeping and damp mopping keep rubber floors looking intentional and ready for the next session.",
  },
];

const process = [
  {
    step: "01",
    title: "Space & activity assessment",
    description:
      "We review how the room is used — weights, play, kids, or recreation — then recommend tile, roll, or poured systems with the right thickness and grip.",
  },
  {
    step: "02",
    title: "Subfloor prep",
    description:
      "The concrete is cleaned, leveled, and corrected where needed so the rubber system bonds cleanly and stays flat under equipment and daily traffic.",
  },
  {
    step: "03",
    title: "Install & finish",
    description:
      "Tiles, rolls, or poured rubber are installed with precise seams and edges, then finished for a clean, continuous activity-ready surface.",
  },
  {
    step: "04",
    title: "Handoff & care plan",
    description:
      "Clear return-to-use timing plus simple maintenance guidance so your rubber surface stays safe, soft, and ready for everyday activity.",
  },
];

const finishes = [
  {
    id: "tiles",
    name: "Rubber Tiles",
    detail: "Interlocking tiles for fast install, modular replacement, and flexible layouts in gyms and play rooms.",
    image: "/images/services/service-garage.png",
  },
  {
    id: "rolls",
    name: "Rubber Rolls",
    detail: "Continuous rolled rubber for cleaner sightlines and fewer seams in training floors and recreational interiors.",
    image: "/images/services/service-commercial.png",
  },
  {
    id: "poured",
    name: "Poured Systems",
    detail: "Seamless poured rubber for outdoor play zones and custom shapes that need continuous coverage and strong drainage performance.",
    image: "/images/services/service-industrial.png",
  },
];

const faqs = [
  {
    question: "Where is rubber surfacing the best fit?",
    answer:
      "Gyms, home fitness rooms, daycare and play areas, recreational spaces, and outdoor play zones. We recommend rubber when impact absorption, grip, and comfort matter more than a hard epoxy showroom finish.",
  },
  {
    question: "How is rubber different from epoxy flooring?",
    answer:
      "Epoxy creates a hard, seamless resin surface. Rubber is softer and more forgiving underfoot, with better impact cushioning and noise reduction — ideal for activity spaces rather than vehicle or industrial traffic.",
  },
  {
    question: "Tiles, rolls, or poured — which should I choose?",
    answer:
      "Tiles are modular and quick. Rolls give a cleaner continuous look indoors. Poured systems suit outdoor play areas and custom shapes. We’ll match the system to use, budget, and maintenance preferences.",
  },
  {
    question: "How do I maintain rubber surfacing?",
    answer:
      "Sweep or vacuum regularly and damp mop with mild cleaners. Avoid harsh solvents that can dry out rubber. We provide a care plan based on the exact system installed.",
  },
];

const idealFor = [
  "Home & commercial gyms",
  "Playrooms & daycare spaces",
  "Recreational interiors",
  "Outdoor play surfaces",
];

const related = services.filter((s) => s.id !== "rubber-surfacing").slice(0, 3);

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

export default function RubberSurfacingPage() {
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
    name: "Rubber Surfacing",
    description:
      "Professional rubber surfacing for gyms, play areas, and recreational spaces — impact absorbing, slip resistant, and built for high activity.",
    provider: { "@type": "Organization", name: "Saven shades" },
    serviceType: "Rubber Surfacing Installation",
    url: "/services/rubber-surfacing",
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

      <PageHeader
        eyebrow="RUBBER SURFACING SYSTEMS"
        title={
          <>
            Floors Built For{" "}
            <span className="text-[var(--brand-color)]">Active Spaces.</span>
          </>
        }
        description="Rubber surfacing for gyms, play areas, and recreation rooms — soft underfoot, slip resistant, and engineered for impact, noise reduction, and everyday activity."
        primaryAction={{ href: "/contact-us", label: "Get Free Quote" }}
        secondaryAction={{
          href: "#system",
          label: "Browse Systems",
          icon: "arrow",
        }}
        asideContent={
          <div className="w-full max-w-[240px] rounded-[1.35rem] border border-white/15 bg-white/5 p-5 backdrop-blur-md">
            <ul className="w-full max-w-[240px] space-y-3.5">
              {["Impact cushioning", "Slip resistant", "Quiet underfoot"].map(
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

      <section className="relative border-b border-black/5 bg-gray-50 py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto sm:px-4 md:px-6 lg:px-8">
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

      <section id="system" className="relative bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="THE SYSTEM"
                title={<>More Than Soft. <span className="text-[var(--brand-color)]">A Real Activity Floor.</span></>}
                description={
                  <>
                  <p>Rubber surfacing is the system you choose when the floor has to cushion impact, reduce noise, and stay safe under constant movement. Saven shades rubber floors turn hard concrete into a softer, high-grip surface built for training, play, and recreation.</p>

                  <p>From home gyms and daycare rooms to commercial fitness and outdoor play zones, we prep the slab and install tile, roll, or poured systems matched to use — not temporary mats that curl and shift.</p>
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
                  src="/images/services/rubber-surfacing.jpg"
                  alt="Rubber surfacing for recreation and activity spaces"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070b]/45 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 -left-3 hidden w-[46%] overflow-hidden rounded-[1.35rem] shadow-[0_28px_70px_rgba(11,17,32,0.3)] sm:block lg:-left-8 lg:-bottom-7">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/services/rubber-surfacing-working-man.jpg"
                    alt="Rubber flooring detail for gym and play spaces"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute top-5 right-5 hidden rounded-2xl border border-white/20 bg-black/35 px-4 py-3 backdrop-blur-md sm:block">
                <div className="text-white/70">Finish</div>
                <div className="text-lg font-bold text-white">Rubber surface</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--black)] py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(13,127,232,0.14),transparent_50%),radial-gradient(ellipse_at_0%_100%,rgba(13,127,232,0.06),transparent_40%)]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Heading
              tag="h2"
              id="rubber-benefits-heading"
              align="center"
              size="section"
              tone="light"
              eyebrow="WHY RUBBER SURFACING"
              title={
                <>
                  Soft Where It Matters.{" "}
                  <span className="text-[var(--brand-color)]">
                    Tough Where It Counts.
                  </span>
                </>
              }
              description="A rubber floor isn’t a temporary mat — it’s cushioned performance for high-activity rooms that need comfort, grip, and everyday durability."
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

      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="SYSTEM LIBRARY"
                title={<>Choose How Your Rubber <span className="text-[var(--brand-color)]">Installs.</span></>}
                description="Matched to activity type, indoor or outdoor use, and how modular or seamless you want the surface."
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
                  <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-white/85 sm:p-6">
                    <h3 className="text-2xl font-bold text-white">{finish.name}</h3>
                    <p>{finish.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--brand-color)]/12" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-black/20" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
              <Heading
                tag="h2"
                id="rubber-process-heading"
                size="section"
                tone="dark"
                eyebrow="HOW WE INSTALL"
                title={
                  <>
                    From Hard Slab To{" "}
                    <span className="text-[var(--brand-color)]">
                      Activity-Ready.
                    </span>
                  </>
                }
                description="Prep first. Install clean. Every detail supports comfort and safety."
                descriptionClassName="max-w-md"
              />

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/8 pt-6">
                <div>
                  <div>Typical install</div>
                  <div className="text-2xl font-bold tracking-tight text-[#0B1120]">1–3 days</div>
                </div>
                <span className="hidden h-10 w-px bg-black/10 sm:block" aria-hidden="true" />
                <div>
                  <div>Return to use</div>
                  <div className="text-2xl font-bold tracking-tight text-[#0B1120]">Same day–48 hrs</div>
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
                  Rubber Surface{" "}
                  <span className="text-[var(--brand-color)]">FAQs</span>
                </>
              }
              description="Clear answers before you commit — rubber vs epoxy, system types, care, and where rubber performs best."
              align="center"
            />
          </div>

          <div className="mx-auto mt-12 max-w-3xl sm:mt-14">
            <FaqAccordion items={faqs} defaultOpenIndex={0} />
          </div>
        </div>
      </section>

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
                description="Explore other flooring systems that pair well with active or mixed-use spaces."
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
                    <div className="min-w-0 space-y-2 text-white/85">
                      <h3 className="text-xl font-bold">{item.title}</h3>
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
