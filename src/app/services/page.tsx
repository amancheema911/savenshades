import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/services";
import Heading from "@/components/Heading";
import { BASE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Services | Seven Shades",
  description: "Browse Seven Shades epoxy systems for every space — garage, commercial, residential, metallic, solid, stone epoxy, and rubber surfacing. Precision install, built to last.",
  keywords: ["epoxy flooring services", "garage epoxy flooring", "commercial epoxy floors", "residential epoxy flooring", "metallic epoxy flooring", "solid epoxy flooring", "stone epoxy flooring", "rubber surfacing" ],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Epoxy Flooring Services | Seven Shades",
    description: "High-performance epoxy systems engineered for durability — from garages to commercial spaces, specified for traffic, chemicals, and the look you want.",
    type: "website",
    images: [
      {
        url: BASE_URL + "/images/services/service-garage.webp",
        alt: "Luxury car on a finished garage epoxy floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring Services | Seven Shades",
    description: "Browse Seven Shades epoxy systems for every space — garage, commercial, residential, metallic, solid, stone epoxy, and rubber surfacing. Precision install, built to last.",
    images: [BASE_URL + "/images/services/service-garage.webp"],
  },
};

const servicePerks = [
  {
    id: "durability",
    title: "Built to last",
    description: "Systems engineered for decades of wear, chemicals, and traffic.",
  },
  {
    id: "finish",
    title: "Showroom finish",
    description: "Gloss, satin, or matte — tuned for light, grip, and style.",
  },
  {
    id: "install",
    title: "Precision install",
    description: "Prep-first process. No shortcuts. Clean handoff every time.",
  },
  {
    id: "support",
    title: "Aftercare support",
    description: "Care guidance and lasting partnership beyond install day.",
  },
];

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

export default function ServicesPage() {
  const [featured, ...rest] = services;
  const secondary = rest.slice(0, 2);
  const remaining = rest.slice(2);

  return (
    <>
      <PageHeader
        eyebrow="OUR SERVICES"
        title={
          <>
            Surfaces For Every{" "}
            <span className="text-[var(--brand-color)]">Space.</span>
          </>
        }
        description="High-performance epoxy systems engineered for durability — designed for results that look intentional, not temporary."
        primaryAction={{ href: "/contact-us", label: "Get Free Quote" }}
        secondaryAction={{
          href: "#all-services",
          label: "Browse Systems",
          icon: "arrow",
        }}
        aside={{
          label: "Systems",
          value: `${services.length}+`,
          description: "From garages to industrial slabs — matched to how you use the floor.",
        }}
      />

      {/* Featured bento */}
      <section className="relative bg-[#F7F8FA] py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <Heading
              tag="h2"
              size="section"
              tone="dark"
              eyebrow="EXPLORE SYSTEMS"
              title={<>Choose The Floor <span className="text-[var(--brand-color)]">That Fits.</span></>}
              description="Every system is specified for traffic, chemicals, moisture, and the look you want to live with."
            />
          </div>

          {/* Featured + secondary */}
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            {featured ? (
              <Link href={featured.href} className="group relative isolate h-[420px] overflow-hidden rounded-[1.75rem] min-h-[420px] sm:rounded-[2rem] lg:col-span-7 lg:min-h-[560px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,16,0.15)_0%,rgba(5,9,16,0.25)_40%,rgba(5,9,16,0.88)_100%)]" />
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--brand-color)] text-white shadow-md">
                    <div dangerouslySetInnerHTML={{ __html: featured.icon as string }} />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                  <div className="space-y-1">
                    <div className="text-sm text-[var(--brand-color)] uppercase">Featured</div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{featured.title}</h3>
                    <p className="text-white/70">{featured.description}</p>
                  </div>
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-white/70 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B1120]">
                    <ArrowIcon size={18} />
                  </span>
                </div>
              </Link>
            ) : null}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-6">
              {secondary.map((service) => (
                <Link key={service.id} href={service.href} className="group relative isolate h-[260px] overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
                  <Image 
                  src={service.image} 
                  alt={service.imageAlt} 
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,16,0.1)_0%,rgba(5,9,16,0.82)_100%)]" aria-hidden="true" />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--brand-color)] text-white">
                      <div dangerouslySetInnerHTML={{ __html: service.icon as string }} /></span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div className="space-y-1">
                      <h3 className=" text-xl font-bold tracking-tight text-white">{service.title}</h3>
                      <p className="text-white/70">{service.description}</p>
                    </div>
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/70 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B1120]">
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining services */}
          {remaining.length > 0 ? (
            <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:mt-6 lg:grid-cols-4 lg:gap-6">
              {remaining.map((service, index) => (
                <li key={service.id}>
                  <Link href={service.href} className={`group relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[1.5rem] sm:min-h-[360px] sm:rounded-[1.75rem] ${ index === remaining.length - 1 &&  remaining.length % 2 === 1 ? "sm:col-span-2 lg:col-span-1" : "" }`}>
                    <Image 
                    src={service.image} 
                    alt={service.imageAlt} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,16,0.12)_0%,rgba(5,9,16,0.2)_45%,rgba(5,9,16,0.85)_100%)]" />
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--brand-color)] text-white shadow-md">
                        <div dangerouslySetInnerHTML={{ __html: service.icon as string }} />
                      </span>
                    </div>
                    <div className="relative z-10 flex items-end justify-between gap-3 p-5">
                      <div className="space-y-1">
                        <h3 className=" text-xl font-bold tracking-tight text-white">{service.title}</h3>
                        <p className="text-white/70">{service.description}</p>
                      </div>
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/70 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B1120]">
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {/* Perks strip */}
      <section className="relative overflow-hidden bg-[#070b14] py-14 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(184,134,11,0.14),transparent_45%),radial-gradient(ellipse_at_90%_100%,rgba(184,134,11,0.1),transparent_40%)]" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Heading
              tag="h2"
              size="section"
              tone="light"
              eyebrow="WHY Seven Shades"
              title={<>Spec&apos;d For Real Life. <span className="text-[var(--brand-color)]">Not Showrooms Only.</span></>}
              description="Every system is specified for traffic, chemicals, moisture, and the look you want to live with."
            />
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {servicePerks.map((perk, index) => (
              <li key={perk.id} className="group rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[var(--brand-color)]/35 hover:bg-white/[0.06] sm:p-7 space-y-2">
                <span className=" text-3xl font-bold tracking-tight text-white/10 transition-colors duration-300 group-hover:text-[var(--brand-color)]/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className=" text-lg font-bold tracking-tight text-white">{perk.title}</h3>
                <p className="text-white/70">{perk.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
