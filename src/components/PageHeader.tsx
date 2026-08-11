import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Heading from "@/components/Heading";

type PageHeaderAction = {
  href: string;
  label: string;
};

type PageHeaderSecondaryAction = PageHeaderAction & {
  icon?: "arrow" | "phone";
};

type PageHeaderAside = {
  label: string;
  value: string;
  description: string;
};

export type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
  minHeightClassName?: string;
  primaryAction?: PageHeaderAction;
  secondaryAction?: PageHeaderSecondaryAction;
  aside?: PageHeaderAside;
  asideContent?: ReactNode;
};

function ArrowUpRightIcon({ size = 18 }: { size?: number }) {
  return (
    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/30 text-white transition-transform duration-300 group-hover:scale-105 sm:size-11">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function PhoneIcon() {
  return (
    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/30 text-white transition-transform duration-300 group-hover:scale-105">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
    </span>
  );
}

const NOISE_BG = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

export default function PageHeader({
  eyebrow,
  title,
  description,
  image = "/images/epoxy-floor.png",
  imageAlt = "",
  imageClassName = "object-cover object-bottom animate-hero-zoom",
  minHeightClassName = "py-14 sm:py-16",
  primaryAction,
  secondaryAction,
  aside,
  asideContent,
}: PageHeaderProps) {
  const hasActions = Boolean(primaryAction || secondaryAction);
  const showAside = Boolean(asideContent || aside);

  return (
    <section className={`relative isolate overflow-hidden ${minHeightClassName}`}>
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className={imageClassName} />

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,9,16,0.95)_0%,rgba(5,9,16,0.78)_40%,rgba(5,9,16,0.42)_72%,rgba(5,9,16,0.7)_100%),linear-gradient(180deg,rgba(5,9,16,0.45)_0%,transparent_30%,rgba(5,9,16,0.75)_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-soft-light" style={{ backgroundImage: NOISE_BG }} aria-hidden="true" />

      <div className="relative z-10 container mx-auto flex w-full flex-col justify-end px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className={`max-w-3xl animate-hero-rise ${showAside ? "lg:col-span-8" : "lg:col-span-10"}`}>
            <Heading
              tag="h1"
              size="page"
              tone="light"
              eyebrow={eyebrow}
              title={title}
              description={description}
            />

            {hasActions ? (
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                {primaryAction ? (
                  <Button href={primaryAction.href}>{primaryAction.label}</Button>
                ) : null}
                {/* {secondaryAction ? (
                  <Link href={secondaryAction.href} className="group inline-flex items-center gap-2.5 rounded-full border border-white/75 bg-transparent py-1.5 pr-1.5 pl-6 text-[0.95rem] font-semibold text-white transition-colors hover:border-white hover:bg-white/10 active:scale-[0.98]">
                    {secondaryAction.label}
                    {secondaryAction.icon === "phone" ? (
                      <PhoneIcon />
                    ) : (
                      <ArrowUpRightIcon />
                    )}
                  </Link>
                ) : null} */}
              </div>
            ) : null}
          </div>

          {showAside ? (
            <div className="hidden animate-hero-rise-delayed lg:col-span-4 lg:flex lg:justify-end">
              {asideContent ?? (
                <div className="w-full max-w-[240px] rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md space-y-3">
                  <div className="text-white/70">{aside!.label}</div>
                  <div className="text-4xl font-bold tracking-tight text-white">{aside!.value}</div>
                  <div className="h-px w-full bg-gradient-to-r from-[var(--brand-color)] to-transparent" />
                  <p className="text-white/70">{aside!.description}</p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}