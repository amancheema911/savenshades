import Image from "next/image";
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

export default function PageHeader({
  eyebrow,
  title,
  description,
  image = "/images/epoxy-floor.webp",
  imageAlt = "",
  imageClassName = "w-full h-full object-cover object-bottom animate-hero-zoom",
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

      <div className="absolute inset-0 bg-[var(--black)]/80" aria-hidden="true" />

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