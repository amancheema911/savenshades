"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import {
  ourWorkCategories,
  ourWorkItems,
  type OurWorkCategory,
  type OurWorkItem,
} from "@/lib/ourwork";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/ui/Button";
import Heading from "@/components/Heading";

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
            <div className="text-sm text-[var(--brand-color)] uppercase">{item.category}</div>
            <h2 className="truncate text-2xl font-bold text-white">{item.title}</h2>
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
                width={600}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover"
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
                        alt={image.alt}
                        width={100}
                        height={100}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-5 border-t border-white/10 p-5 sm:p-6 lg:border-t-0 lg:border-l">
            <div>
              <div className="text-white/80">{item.location}</div>
              <p className="text-white">{item.description}</p>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <div className="text-white/70">{ourWork.length} {ourWork.length === 1 ? "photo" : "photos"}</div>
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

  return (
    <>
      <PageHeader
        eyebrow="OUR WORK"
        title={
          <>
            Real Floors. Real <span className="text-[var(--brand-color)]">Results.</span>
          </>
        }
        description="Browse finished installs across garage, commercial, residential, and specialty epoxy and rubber surfaces — click any project to open photos and details."
        primaryAction={{ href: "#our-work-grid", label: "Explore Our Work" }}
        secondaryAction={{
          href: "/contact-us",
          label: "Start Your Project",
          icon: "arrow",
        }}
        aside={{
          label: "Projects",
          value: `${ourWorkItems.length}+`,
          description: "Featured installs matched to our flooring services.",
        }}
      />

      {/* Our Work grid */}
      <section className="relative bg-gray-50 pt-14 sm:pt-16 lg:pt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="PROJECT ARCHIVE"
                title={<>Surfaces Worth <span className="text-[var(--brand-color)]">A Closer Look.</span></>}
                description="Browse finished installs across garage, commercial, residential, and specialty epoxy and rubber surfaces — click any project to open photos and details."
              />
            </div>

            <div className="w-full sm:w-auto sm:min-w-[260px]">
              <label htmlFor="our-work-category" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-black/45">Filter by category</label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(event) =>
                    selectCategory(event.target.value as OurWorkCategory)
                  }
                  className="w-full cursor-pointer appearance-none rounded-full border border-black/8 bg-white px-4 py-2.5 pr-10 text-sm shadow-sm transition-colors hover:border-black/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-color)]"
                >
                  {ourWorkCategories.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                <span
                  className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-black/45"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-10 columns-1 gap-4 sm:mt-12 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6">
            {filtered.map((item, index) => {
              const tall = index % 5 === 1 || index % 5 === 3;
              return (
                <li key={`${category}-${item.id}`} className="mb-4 break-inside-avoid sm:mb-5 lg:mb-6">
                  <button type="button" onClick={() => openAt(index)} className="group relative block w-full overflow-hidden rounded-[1.35rem] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color)] sm:rounded-[1.5rem]" aria-label={`Open ${item.title} preview`}>
                    <div className={`relative overflow-hidden ${ tall ? "aspect-[3/4]" : "aspect-[4/3]" }`}>
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        width={600}
                        height={600}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"/>
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                        <div className="space-y-1">
                          <div className="text-white/70 uppercase">{item.category}</div>
                          <div className="text-lg font-bold text-white">{item.title}</div>
                          <div className="text-white/70">{item.location}</div>
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
            <p>No projects in this category yet.</p>
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
