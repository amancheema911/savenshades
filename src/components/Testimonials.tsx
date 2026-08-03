"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  testimonials,
  testimonialRating,
  type Testimonial,
} from "@/lib/testimonials";

function QuoteIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="text-[var(--brand-color)]"
    >
      <circle cx="7" cy="9" r="3" fill="currentColor" />
      <circle cx="15" cy="9" r="3" fill="currentColor" />
      <circle cx="7" cy="17" r="3" fill="currentColor" />
      <circle cx="15" cy="17" r="3" fill="currentColor" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#F5B301"
        >
          <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.6l1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full min-h-[260px] flex-col rounded-[1.5rem] shadow-sm bg-white p-6 sm:min-h-[280px] sm:p-7">
      <QuoteIcon />
      <p className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-[#1f2937] sm:text-base">
        {item.quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: item.avatarColor }}
          aria-hidden="true"
        >
          {item.initials}
        </span>
        <div>
          <p className="text-sm font-bold text-[#0B1120]">- {item.name}</p>
          <p className="text-sm text-black/45">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

function getSlidesPerView(width: number) {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  if (width >= 576) return 1;
  return 1;
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const update = () => setSlidesPerView(getSlidesPerView(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const getStride = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector<HTMLElement>("[data-testimonial-card]");
    if (!card) return 0;
    const styles = getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
    return card.getBoundingClientRect().width + gap;
  }, []);

  const goToSlide = (index: number) => {
    const next = Math.max(0, Math.min(index, maxIndex));
    const track = trackRef.current;
    const stride = getStride();
    if (!track || stride <= 0) return;

    setActiveIndex(next);
    track.scrollTo({
      left: next * stride,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    const track = trackRef.current;
    const stride = getStride();
    if (!track || stride <= 0) return;

    const index = Math.round(track.scrollLeft / stride);
    setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  return (
    <section className="bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--brand-color)] sm:text-sm">
              TESTIMONIALS
            </p>
            <h2
              id="testimonials-heading"
              className="mt-2 font-display text-[1.85rem] font-bold tracking-tight text-[#0B1120] sm:text-3xl lg:text-[2.5rem]"
            >
              Loved By{" "}
              <span className="text-[var(--brand-color)]">Thousands</span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <Stars count={testimonialRating.stars} />
            <p className="text-sm text-black/55">
              <span className="font-semibold text-[#0B1120]">
                {testimonialRating.score}
              </span>{" "}
              <span>{testimonialRating.countLabel}</span>
            </p>
          </div>
        </div>

        <div className="relative mt-8 sm:mt-10">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 lg:gap-4 [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                data-testimonial-card
                className="w-[min(88vw,360px)] p-2 shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-8 flex items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Testimonials slides"
        >
          {Array.from({ length: maxIndex + 1 }, (_, index) => {
            const active = index === activeIndex;
            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Go to testimonials slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`size-2.5 rounded-full transition-colors duration-300 ${
                  active
                    ? "bg-[var(--brand-color)]"
                    : "bg-black/15 hover:bg-black/25"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
