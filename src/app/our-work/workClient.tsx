"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import {
  ourWorkCategories,
  ourWorkItems,
  type OurWorkCategory,
  type OurWorkItem,
} from "@/lib/ourwork";
import Button from "@/components/ui/Button";

function ArrowUpRightIcon({ size = 18 }: { size?: number }) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/30 text-white transition-transform duration-300 group-hover:scale-105 size-10 sm:size-11">
      <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    </span>
  );
}

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

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectLightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: OurWorkItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const titleId = useId();
  const item = items[index];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [item?.id]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  const ourWork = item.images.length > 0 ? item.images : [{ src: item.image, alt: item.imageAlt }];
  const activeImage = ourWork[imageIndex] ?? ourWork[0];

  const showPrevImage = () => {
    setImageIndex((current) => (current - 1 + ourWork.length) % ourWork.length);
  };

  const showNextImage = () => {
    setImageIndex((current) => (current + 1) % ourWork.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <button type="button" className="absolute inset-0 bg-black/85 backdrop-blur-sm" aria-label="Close project preview" onClick={onClose} />

      <div className="relative z-10 flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-t-[1.5rem] bg-[#05070b] sm:max-h-[90vh] sm:rounded-[1.5rem] border border-white/20">
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
          <div className="min-w-0">
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--brand-color)] uppercase">
              {item.category}
            </p>
            <h2
              id={titleId}
              className="truncate font-display text-lg font-bold text-white sm:text-xl"
            >
              {item.title}
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden text-sm text-white/50 sm:inline">
              Project {index + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[1.35fr_1fr]">
          <div className="relative flex flex-col bg-[#05070b]">
            <div className="relative aspect-[16/11] w-full sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px] lg:flex-1">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 1024px) 94vw, 640px"
                className="object-contain"
                priority
              />

              {ourWork.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={showPrevImage}
                    className="absolute top-1/2 left-3 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65"
                    aria-label="Previous project image"
                  >
                    <ChevronLeftIcon />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute top-1/2 right-3 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65"
                    aria-label="Next project image"
                  >
                    <ChevronRightIcon />
                  </button>
                </>
              ) : null}
            </div>

            {ourWork.length > 1 ? (
              <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-3 py-3 sm:px-4">
                {ourWork.map((image, thumbIndex) => {
                  const active = thumbIndex === imageIndex;
                  return (
                    <button
                      key={`${item.id}-${image.src}-${thumbIndex}`}
                      type="button"
                      onClick={() => setImageIndex(thumbIndex)}
                      className={`relative size-14 shrink-0 overflow-hidden rounded-lg ring-2 transition-opacity sm:size-16 ${
                        active
                          ? "ring-[var(--brand-color)] opacity-100"
                          : "ring-transparent opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Show image ${thumbIndex + 1}`}
                      aria-current={active ? "true" : undefined}
                    >
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-5 border-t border-white/10 p-5 sm:p-6 lg:border-t-0 lg:border-l">
            <div>
              <p className="text-sm text-white/55">{item.location}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/80 sm:text-base">
                {item.description}
              </p>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <p className="text-sm text-white/45">
                {ourWork.length} {ourWork.length === 1 ? "photo" : "photos"}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPrev}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Previous project"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Next project"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>

            <Button href="/contact-us" size="sm">
              Start a Similar Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurWorkClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectParam = searchParams.get("project");

  const [category, setCategory] = useState<OurWorkCategory>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === "All") return ourWorkItems;
    return ourWorkItems.filter((item) => item.category === category);
  }, [category]);

  const syncProjectParam = useCallback(
    (projectId: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (projectId) {
        params.set("project", projectId);
      } else {
        params.delete("project");
      }
      const query = params.toString();
      router.replace(query ? `/our-work?${query}` : "/our-work", { scroll: false });
    },
    [router, searchParams],
  );

  const openAt = useCallback(
    (index: number) => {
      const item = filtered[index];
      if (!item) return;
      setActiveIndex(index);
      syncProjectParam(item.id);
    },
    [filtered, syncProjectParam],
  );

  const close = useCallback(() => {
    setActiveIndex(null);
    syncProjectParam(null);
  }, [syncProjectParam]);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || filtered.length === 0) return current;
      const next = (current - 1 + filtered.length) % filtered.length;
      const item = filtered[next];
      if (item) syncProjectParam(item.id);
      return next;
    });
  }, [filtered, syncProjectParam]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || filtered.length === 0) return current;
      const next = (current + 1) % filtered.length;
      const item = filtered[next];
      if (item) syncProjectParam(item.id);
      return next;
    });
  }, [filtered, syncProjectParam]);

  // Deep-link from homepage (and shareable URLs): /our-work?project=<id>
  useEffect(() => {
    if (!projectParam) return;

    const indexInFiltered = filtered.findIndex((item) => item.id === projectParam);
    if (indexInFiltered >= 0) {
      setActiveIndex(indexInFiltered);
      return;
    }

    // Project is outside the current filter — reset to All so it can open
    if (category !== "All") {
      setCategory("All");
      return;
    }

    const index = ourWorkItems.findIndex((item) => item.id === projectParam);
    if (index >= 0) setActiveIndex(index);
  }, [projectParam, category, filtered]);

  const selectCategory = (next: OurWorkCategory) => {
    setCategory(next);
    setActiveIndex(null);
    syncProjectParam(null);
  };

  const onFilterKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % ourWorkCategories.length
        : (index - 1 + ourWorkCategories.length) % ourWorkCategories.length;
    selectCategory(ourWorkCategories[next]);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-[4.75rem] min-h-[68vh] overflow-hidden sm:min-h-[74vh]">
        <Image
          src="/images/services/service-metallic.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-hero-zoom"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,9,16,0.95)_0%,rgba(5,9,16,0.8)_42%,rgba(5,9,16,0.45)_72%,rgba(5,9,16,0.72)_100%),linear-gradient(180deg,rgba(5,9,16,0.5)_0%,transparent_32%,rgba(5,9,16,0.78)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto flex min-h-[68vh] w-full flex-col justify-end px-4 pb-14 pt-32 sm:min-h-[74vh] sm:px-6 sm:pb-16 sm:pt-36 lg:px-8 lg:pb-20">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="max-w-3xl animate-hero-rise lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--brand-color)] animate-about-line sm:w-14" />
                <p className="text-xs font-bold tracking-[0.22em] text-[var(--brand-color)] sm:text-sm">
                  OUR WORK
                </p>
              </div>
              <h1 className="mt-5 font-display text-[2.55rem] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-[3.5rem] lg:text-[4.25rem]">
                Real Floors.
                <br />
                Real{" "}
                <span className="text-[var(--brand-color)]">Results.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/78 sm:text-lg">
                Browse finished installs across residential, commercial, and
                industrial spaces — click any project to open photos and details.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Button href="#our-work-grid">Explore Our Work</Button>
                <Link
                  href="#all-services"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/75 bg-transparent pl-6 pr-1.5 py-1.5 text-[0.95rem] font-semibold text-white transition-colors hover:border-white hover:bg-white/10 active:scale-[0.98]"
                >
                  Start Your Project
                  <ArrowUpRightIcon />
                </Link>
              </div>
            </div>

            <div className="hidden animate-hero-rise-delayed lg:col-span-4 lg:flex lg:justify-end">
              <div className="w-full max-w-[220px] rounded-[1.35rem] border border-white/15 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-white/45 uppercase">
                  Projects
                </p>
                <p className="mt-1 font-display text-4xl font-bold tracking-tight text-white">
                  {ourWorkItems.length}+
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-[var(--brand-color)] to-transparent" />
                <p className="mt-4 text-sm leading-snug text-white/65">
                  Featured installs from garages to warehouses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work grid */}
      <section
        id="our-work-grid"
        className="relative bg-[#F7F8FA] px-3 py-14 sm:px-4 sm:py-16 md:px-6 lg:px-8 lg:py-20"
        aria-labelledby="our-work-heading"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
                PROJECT ARCHIVE
              </p>
              <h2
                id="our-work-heading"
                className="mt-3 font-display text-[1.9rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.4rem] lg:text-[2.65rem]"
              >
                Surfaces Worth{" "}
                <span className="text-[var(--brand-color)]">A Closer Look.</span>
              </h2>
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter our work by category"
            >
              {ourWorkCategories.map((item, index) => {
                const active = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => selectCategory(item)}
                    onKeyDown={(event) => onFilterKeyDown(event, index)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-color)] ${
                      active
                        ? "bg-[#05070b] text-white shadow-[0_8px_20px_rgba(11,17,32,0.2)]"
                        : "bg-white text-black/55 ring-1 ring-black/8 hover:text-[#0B1120]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <ul className="mt-10 columns-1 gap-4 sm:mt-12 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6">
            {filtered.map((item, index) => {
              const tall = index % 5 === 1 || index % 5 === 3;
              return (
                <li key={`${category}-${item.id}`} className="mb-4 break-inside-avoid sm:mb-5 lg:mb-6">
                  <button
                    type="button"
                    onClick={() => openAt(index)}
                    className="group relative block w-full overflow-hidden rounded-[1.35rem] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color)] sm:rounded-[1.5rem]"
                    aria-label={`Open ${item.title} preview`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        tall ? "aspect-[3/4]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                        <div className="min-w-0">
                          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-white/70 uppercase">
                            {item.category}
                          </p>
                          <p className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-sm text-white/65">
                            {item.location}
                          </p>
                        </div>
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B1120]">
                          <ExpandIcon />
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-sm text-black/45">
              No projects in this category yet.
            </p>
          ) : null}
        </div>
      </section>

      {activeIndex !== null ? (
        <ProjectLightbox
          items={filtered}
          index={activeIndex}
          onClose={close}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </>
  );
}
