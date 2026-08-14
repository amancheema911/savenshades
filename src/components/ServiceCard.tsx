import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export default function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <article className={`group relative isolate h-full min-h-[320px] overflow-hidden rounded-[1.5rem] aspect-[3/4] sm:min-h-[360px] sm:rounded-[1.75rem] lg:min-h-[400px] ${className}`}>
      <Image
        src={service.image}
        alt={service.imageAlt}
        width={400}
        height={400}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,20,0.1)_0%,rgba(8,12,20,0.2)_45%,rgba(8,12,20,0.85)_100%)]" aria-hidden="true" />

      <div className="absolute top-4 left-4 z-10 sm:top-5 sm:left-5">
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-[var(--brand-color)] text-white shadow-[0_8px_20px_rgba(184,134,11,0.35)]">
          <div dangerouslySetInnerHTML={{ __html: service.icon as string }} />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold tracking-tight text-white">{service.title}</h3>
          <p className="text-white/70">{service.description}</p>
        </div>

        <Link
          href={service.href}
          aria-label={`View ${service.title} service`}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/80 bg-black/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B1120]"
        >
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
