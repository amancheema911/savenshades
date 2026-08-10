import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import Button from "@/components/ui/Button";
import Counters from "@/components/Counters";
import { contactInfo } from "@/lib/config";
import { counterItems } from "@/lib/counters";
import Heading from "@/components/Heading";
import { services } from "@/lib/services";

const { phone } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

export const metadata: Metadata = {
  title: "About Us | Saven shades Premium Epoxy Solutions",
  description: "Learn how Saven shades crafts high-performance epoxy floors — our story, values, and the standards behind every install.",
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

const aboutQualities = [
  {
    id: "equipped",
    title: "50+ Systems Spec'd",
    description:
      "With 50+ ready epoxy systems and advanced prep equipment, we match every slab with precision.",
    icon: "pulse" as const,
  },
  {
    id: "experts",
    title: "100+ Skilled Experts",
    description:
      "Dedicated install crews combine experience, technique, and creative finish control on every pour.",
    icon: "experts" as const,
  },
  {
    id: "reach",
    title: "80+ Communities Served",
    description:
      "Our regional reach spans 80+ communities, delivering consistent quality wherever we install.",
    icon: "reach" as const,
  },
  {
    id: "experience",
    title: "10+ Years Experience",
    description:
      "Over a decade specializing in epoxy floors that perform under real residential and commercial use.",
    icon: "experience" as const,
  },
];

type QualityIconName = (typeof aboutQualities)[number]["icon"];

type ValueIconName = (typeof aboutValues)[number]["icon"];

function HeadsetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 12v4.5A2.5 2.5 0 0 0 6.5 19H8v-5H5.5A1.5 1.5 0 0 0 4 15.5V12ZM20 12v3.5a1.5 1.5 0 0 1-1.5 1.5H16v5h1.5A2.5 2.5 0 0 0 20 16.5V12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QualityIcon({ icon }: { icon: QualityIconName }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "pulse":
      return (
        <svg {...common}>
          <path
            d="M3 12h4l2.5-6 4 12 2.5-6H21"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "experts":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M3.5 19c.8-3 2.9-4.5 5.5-4.5S13.7 16 14.5 19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="17.5" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M16.2 10.5h2.6M17.5 9.2v2.6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "reach":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="12" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1.7" />
          <ellipse cx="12" cy="12" rx="3.5" ry="8" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "experience":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 8v4.5l3 1.8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
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
      {/* Story — asymmetric editorial */}
      <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-24">
        
        <div className="pointer-events-none absolute top-0 left-0 h-64 w-full bg-[radial-gradient(ellipse_at_top_left,rgba(184,134,11,0.08),transparent_55%)]" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            {/* Left image */}
            <div className="relative lg:col-span-6 xl:col-span-7">
              <div className="relative mx-auto max-w-xl lg:mx-0 lg:max-w-none">
                <div className="absolute -top-4 -left-4 hidden h-28 w-28 rounded-[1.25rem] border border-[var(--brand-color)]/40 sm:block lg:-top-6 lg:-left-6" />
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
                  <Image
                    src="/images/hero-epoxy-floor.png"
                    alt="Premium epoxy garage floor installed by Saven shades"
                    fill
                    sizes="(max-width: 1024px) 92vw, 55vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,9,16,0.65)_100%)]" />
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

                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-[var(--brand-color)]/75 px-4 py-3 backdrop-blur-md sm:bottom-7 sm:left-7 sm:px-5 sm:py-3.5">
                  <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Est. 2014</div>
                  <p className="text-white/70">Residential &amp; commercial epoxy</p>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-6 xl:col-span-5 lg:pl-4 xl:pl-8">            
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="OUR STORY"
                title={<>More Than Coatings. <span className="text-[var(--brand-color)]">A Standard.</span></>}
                description={<>
                  <p>Saven shades started with a simple frustration: too many floors looked great on day one and failed by year three. We rebuilt the process from the slab up — materials, prep, install discipline — so every surface earns its finish. </p>
                  
                  <p>Today we partner with homeowners, builders, and facility managers who want floors that stay sharp under real use.</p>
                </>}
              />

              <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/8">
                <div className="bg-white px-5 py-5 sm:px-6 sm:py-6">
                  <div>Focus</div>
                  <div className="text-lg font-bold text-[var(--black)]">Epoxy only</div>
                </div>
                <div className="bg-white px-5 py-5 sm:px-6 sm:py-6">
                  <div>Promise</div>
                  <div className="text-lg font-bold text-[var(--black)]">Built to last</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — modern bento strip */}
      <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <Heading
              tag="h2"
              size="section"
              tone="dark"
              eyebrow="WHAT DRIVES US"
              title={<>Principles Under <span className="text-[var(--brand-color)]">Every Coat.</span></>}
              description="Four standards we refuse to compromise — on every project, every slab."
            />
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {aboutValues.map((value, index) => (
              <li key={value.id} className={`group relative overflow-hidden rounded-[1.35rem] space-y-3 border border-black/[0.06] bg-white p-6 shadow-[0_8px_24px_rgba(11,17,32,0.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--brand-color)]/35 hover:shadow-[0_16px_40px_rgba(11,17,32,0.08)] sm:p-7 ${
                  index % 2 === 1 ? "lg:mt-8" : "" }`}>
                <div className="pointer-events-none absolute -top-8 -right-8 size-28 rounded-full bg-[radial-gradient(circle,var(--brand-color),transparent_70%)] opacity-20 transition-opacity duration-300" />
                <span className=" text-4xl font-bold tracking-tight text-black/[0.06] transition-colors duration-300 group-hover:text-[var(--brand-color)]/20">{String(index + 1).padStart(2, "0")}</span>
                <span className="mt-5 flex size-12 items-center justify-center rounded-full border border-black/8 bg-[var(--brand-color)]/10 text-[var(--brand-color)] transition-colors duration-300 group-hover:border-[var(--brand-color)]/40 group-hover:bg-[var(--brand-color)]/15"><ValueIcon icon={value.icon} /></span>
                <h3 className=" text-lg font-bold tracking-tight text-[#0B1120]">{value.title}</h3>
                <p>{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Surfaces collection — split layout */}
      <section className="relative overflow-hidden bg-[var(--black)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left image */}
          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[640px]">
            <Image
              src="/images/services/service-metallic.png"
              alt="Elegant epoxy surface in a refined interior space"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right content */}
          <div className="relative flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:px-12 xl:px-16 lg:py-20">
            <div className="relative z-10">
              <Heading
                tag="h2"
                size="section"
                tone="light"
                eyebrow="Our Surfaces"
                title={<>Enhance your spaces with elegant <span className="text-[var(--brand-color)]">surface collection</span></>}
                description={<>
                  <p>From garages to showrooms, Saven shades systems are engineered for durability and designed for spaces that deserve a finished look — not a temporary coat.</p>
                  <p>Choose the surface that fits your traffic, style, and timeline. Every install starts with precision prep and ends with lasting protection.</p>
                </>}
              />

              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link href={service.href} className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-5 transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-color)]/30 hover:bg-white/[0.07] sm:px-5 sm:py-6">
                      <span className="text-[var(--brand-color)] transition-transform duration-300 group-hover:scale-110">
                        <div dangerouslySetInnerHTML={{ __html: service.icon as string }} />
                      </span>
                      <span className=" text-sm font-bold tracking-tight text-white sm:text-[0.95rem]">
                        {service.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                <Button href="/contact-us">Get In Touch</Button>

                <Link href={phoneHref} className="group inline-flex items-center gap-3 text-white transition-opacity hover:opacity-90">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-color)] text-[#1a1408] shadow-[0_10px_28px_rgba(184,134,11,0.28)] transition-transform duration-300  group-hover:scale-105"><HeadsetIcon /></span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white/90">Call Us!</span>
                    <span className="mt-0.5 block  text-base font-bold tracking-tight text-white sm:text-lg">{phone}</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Counters items={counterItems} />

      {/* Product qualities */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Left — visual composition */}
            <div className="relative mx-auto w-full max-w-[420px] sm:max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none">
              <div className="relative w-full">
                {/* Dot grid accent */}
                <div className="pointer-events-none absolute top-[3%] right-0 z-0 h-[28%] w-[38%] opacity-60 sm:top-[4%] sm:h-[36%] sm:w-[42%] sm:opacity-70" style={{ backgroundImage: "radial-gradient(circle, rgba(11,17,32,0.14) 1.1px, transparent 1.2px)", backgroundSize: "10px 10px", }} />

                {/* Top/back image — left aligned (your position) */}
                <div className="relative mr-auto aspect-[4/5] w-[78%] max-w-[450px] overflow-hidden rounded-[1.15rem] shadow-[0_18px_40px_rgba(11,17,32,0.12)] sm:w-[75%] sm:rounded-[1.35rem] lg:w-[72%]">
                  <Image
                    src="/images/services/service-metallic.png"
                    alt="Premium epoxy floor hallway with soft natural light"
                    fill
                    sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 28vw"
                    className="object-cover"
                  />
                </div>

                {/* Bottom/front image — right + bottom (your position) */}
                <div className="absolute right-0 bottom-4 z-[2] aspect-[4/3] w-[68%] max-w-[260px] overflow-hidden rounded-[1.15rem] shadow-[0_22px_50px_rgba(11,17,32,0.16)] sm:bottom-10 sm:w-[60%] sm:max-w-[340px] sm:rounded-[1.35rem] lg:max-w-[380px]">
                  <Image
                    src="/images/hero-epoxy-floor.png"
                    alt="Luxury living space with finished epoxy flooring"
                    fill
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 35vw, 26vw"
                    className="object-cover"
                  />
                </div>

                {/* Satisfaction callout — top right (your position) */}
                <div className="absolute top-4 right-0 z-[3] flex w-[38%] max-w-[120px] flex-col items-center justify-center bg-[var(--brand-color)] px-2.5 py-4 text-center text-white shadow-md sm:top-10 sm:w-[38%] sm:max-w-[168px] sm:px-4 sm:py-7 space-y-2">
                  <div className="text-4xl font-bold tracking-tight">98%</div>
                  <p className="text-white/70">Client Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Right — headline + quality cards */}
            <div className="lg:col-span-7 lg:col-start-6">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="Our Product Qualities"
                title={<>The standards that make our <span className="text-[var(--brand-color)]">epoxy floors exceptional</span></>}
                description="Our floors are crafted to the highest standards, combining precision prep, rigorous quality checks, and superior materials."
              />

              <ul className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:gap-5">
                {aboutQualities.map((quality) => (
                  <li key={quality.id} className="group relative overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-white p-4 shadow-[0_8px_24px_rgba(11,17,32,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(11,17,32,0.08)] sm:rounded-2xl sm:p-5 lg:p-6">
                    <span className="pointer-events-none absolute -right-2 -bottom-2 text-[var(--brand-color)] opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.14]">
                      <span className="block origin-bottom-right scale-[2.4]"><QualityIcon icon={quality.icon} /></span>
                    </span>

                    <div className="relative z-10 flex items-start gap-3 sm:gap-3.5">
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-color)] text-white sm:size-10"><QualityIcon icon={quality.icon} /></span>
                      <div className="min-w-0 pt-0.5 space-y-2">
                        <h3 className=" text-base font-bold tracking-tight text-[#0B1120] sm:text-[1.05rem] lg:text-lg">
                          {quality.title}
                        </h3>
                        <p>{quality.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
