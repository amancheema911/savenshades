"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Heading from "@/components/Heading";
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
    <article className="flex flex-col rounded-[1.5rem] shadow-sm bg-white p-6 sm:p-7 space-y-4">
      <QuoteIcon />
      <p>{item.quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: item.avatarColor }} aria-hidden="true">
          {item.initials}
        </span>
        <div>
          <div className="text-sm font-bold text-[var(--black)]">{item.name}</div>
          <p>{item.role}</p>
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
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Heading
              tag="h2"
              size="section"
              tone="dark"
              eyebrow="TESTIMONIALS"
              title={
                <>
                  Loved By{" "}
                  <span className="text-[var(--brand-color)]">Thousands</span>
                </>
              }
            />
          </div>

          <div className="flex items-center gap-2.5">
            <Stars count={testimonialRating.stars} />
            <div>
              <span className="font-semibold text-[#0B1120]">
                {testimonialRating.score}
              </span>{" "}
              <span>{testimonialRating.countLabel}</span>
            </div>
          </div>
        </div>

        <div className="relative mt-8 sm:mt-10">
          <div ref={trackRef} onScroll={onScroll} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((item) => (
              <div key={item.id} data-testimonial-card className="w-[min(88vw,360px)] shrink-0 py-2 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)]">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5" role="tablist" aria-label="Testimonials slides">
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
