"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Heading from "@/components/Heading";
import ServiceCard from "@/components/ServiceCard";
import { featuredServices } from "@/lib/services";

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(maxScroll > 4 && track.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-service-card]");
    if (!card) return;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "16") || 16;
    const amount = card.getBoundingClientRect().width + gap;

    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-gray-50 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            tag="h2"
            align="center"
            size="section"
            tone="dark"
            eyebrow="OUR SERVICES"
            title="Premium Flooring Solutions"
            description="High performance epoxy systems for every space. Engineered for durability. Designed for stunning results."
          />
        </div>

        <div className="relative mt-10 sm:mt-12">
          <div ref={trackRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 lg:gap-6 xl:gap-7 [&::-webkit-scrollbar]:hidden">
            {featuredServices.map((service) => (
              <div key={service.id} data-service-card className="w-[min(82vw,310px)] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-5.25rem)/4)]">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Scroll controls — hide when all 4 cards fit (xl+) */}
          <div className="mt-6 flex items-center justify-center gap-3 xl:hidden">
            <button
              type="button"
              onClick={() => scrollByCard("prev")}
              disabled={!canPrev}
              aria-label="Previous services"
              className="inline-flex size-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#0B1120] shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-[transform,background-color,opacity] hover:bg-[#05070b] hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              disabled={!canNext}
              aria-label="Next services"
              className="inline-flex size-11 items-center justify-center rounded-full border border-black/10 bg-[var(--brand-color)] text-white shadow-[0_8px_20px_rgba(184,134,11,0.3)] transition-[transform,filter,opacity] hover:brightness-110 active:scale-95 disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
