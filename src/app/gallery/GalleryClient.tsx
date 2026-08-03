"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/gallery";

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

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const titleId = useId();
  const item = items[index];

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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        aria-label="Close image preview"
        onClick={onClose}
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col">
        <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
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
              {index + 1} / {items.length}
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

        <div className="relative aspect-[16/11] overflow-hidden rounded-[1.25rem] bg-[#0B1120] ring-1 ring-white/10 sm:rounded-[1.5rem]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 1024px) 94vw, 1024px"
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
          <p className="text-sm text-white/55">{item.location}</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryClient() {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === category);
  }, [category]);

  const selectCategory = (next: GalleryCategory) => {
    setCategory(next);
    setActiveIndex(null);
  };

  const openAt = (index: number) => setActiveIndex(index);
  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || filtered.length === 0) return current;
      return (current - 1 + filtered.length) % filtered.length;
    });
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || filtered.length === 0) return current;
      return (current + 1) % filtered.length;
    });
  }, [filtered.length]);

  const onFilterKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % galleryCategories.length
        : (index - 1 + galleryCategories.length) % galleryCategories.length;
    setCategory(galleryCategories[next]);
    setActiveIndex(null);
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
                  GALLERY
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
                industrial spaces — click any image to open a full preview.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="#gallery-grid"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--brand-color)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(184,134,11,0.35)] transition-[transform,filter] hover:brightness-110 active:scale-[0.98]"
                >
                  Explore Gallery
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowIcon />
                  </span>
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10 active:scale-[0.98]"
                >
                  Start Your Project
                </Link>
              </div>
            </div>

            <div className="hidden animate-hero-rise-delayed lg:col-span-4 lg:flex lg:justify-end">
              <div className="w-full max-w-[220px] rounded-[1.35rem] border border-white/15 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-white/45 uppercase">
                  Projects
                </p>
                <p className="mt-1 font-display text-4xl font-bold tracking-tight text-white">
                  {galleryItems.length}+
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

      {/* Gallery grid */}
      <section
        id="gallery-grid"
        className="relative bg-[#F7F8FA] px-3 py-14 sm:px-4 sm:py-16 md:px-6 lg:px-8 lg:py-20"
        aria-labelledby="gallery-heading"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
                PROJECT ARCHIVE
              </p>
              <h2
                id="gallery-heading"
                className="mt-3 font-display text-[1.9rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.4rem] lg:text-[2.65rem]"
              >
                Surfaces Worth{" "}
                <span className="text-[var(--brand-color)]">A Closer Look.</span>
              </h2>
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter gallery by category"
            >
              {galleryCategories.map((item, index) => {
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
                        ? "bg-[#0B1120] text-white shadow-[0_8px_20px_rgba(11,17,32,0.2)]"
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
        <Lightbox
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
