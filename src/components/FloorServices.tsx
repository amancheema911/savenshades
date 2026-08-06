import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { services, type ServiceIcon } from "@/lib/services";

function GarageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9 21v-7h6v7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function CommercialIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 20V8.5L12 4l8 4.5V20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9 20v-5h6v5M10 10h.01M14 10h.01M10 13h.01M14 13h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IndustrialIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 20V10l5 3V10l5 3V7l6 3.5V20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function MetallicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m12 3 1.2 3.4L16.5 8 13.2 9.2 12 12.5l-1.2-3.3L7.5 8l3.3-1.6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m18 11 .8 2.2L21 14.4l-2.2.8L18 17.5l-.8-2.3L15 14.4l2.2-.8L18 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m6.5 13 .7 1.8L9 15.6l-1.8.7L6.5 18l-.7-1.7L4 15.6l1.8-.8L6.5 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlakeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="7.5" r="1.1" fill="currentColor" />
      <circle cx="15.8" cy="9.2" r="1.1" fill="currentColor" />
      <circle cx="16.5" cy="13" r="1.1" fill="currentColor" />
      <circle cx="13.5" cy="16" r="1.1" fill="currentColor" />
      <circle cx="9.4" cy="15.5" r="1.1" fill="currentColor" />
      <circle cx="7.6" cy="11.8" r="1.1" fill="currentColor" />
      <circle cx="9.2" cy="8.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function StoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 19 8v8l-7 4.5L5 16V8l7-4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M12 3.5 12 12M12 12 19 8M12 12 5 8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DecorativeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const SERVICE_ICONS: Record<ServiceIcon, ReactNode> = {
  garage: <GarageIcon />,
  commercial: <CommercialIcon />,
  industrial: <IndustrialIcon />,
  metallic: <MetallicIcon />,
  flake: <FlakeIcon />,
  quartz: <StoneIcon />,
  decorative: <DecorativeIcon />,
};

export default function FloorServices() {
  return (
    <section className="relative bg-[var(--black)] py-6 sm:py-8" aria-labelledby="floor-services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="lg:col-span-3">
            <h2 className="max-w-[18ch] text-2xl font-semibold text-white uppercase sm:text-3xl lg:max-w-none">
              Floors That Look{" "}
              <span className="text-[var(--brand-color)]">Amazing &amp; Perform</span>{" "}
              Even Better.
            </h2>

            <div className="mt-3 flex items-center" aria-hidden="true">
              <span className="h-px w-10 bg-[var(--brand-color)]" />
            </div>

            <p className="mt-3 text-white/70">Engineered for durability. Designed for your lifestyle.</p>
          </div>

          <div className="lg:col-span-9">
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id} className="min-w-0">
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#1a1f28]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 15vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 flex w-full items-center gap-2 bg-gradient-to-t from-[#05070b]/85 via-[#05070b]/55 via-60% to-transparent px-2.5 py-3 sm:gap-2.5 sm:px-3.5 sm:py-3.5">
                      <span className="inline-flex shrink-0 text-[var(--brand-color)]">
                        {SERVICE_ICONS[service.icon]}
                      </span>
                      <span className="min-w-0 truncate text-[0.65rem] font-medium tracking-wide text-white uppercase sm:text-xs">
                        {service.title}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
