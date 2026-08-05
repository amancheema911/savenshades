"use client";

import Image from "next/image";
import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Heading from "@/components/Heading";

const FEATURES = [
  {
    id: "commercial",
    label: "Commercial Grade",
    icon: "building" as const,
  },
  {
    id: "durability",
    label: "Extreme Durability",
    icon: "shield" as const,
  },
  {
    id: "finishes",
    label: "Premium Finishes",
    icon: "diamond" as const,
  },
  {
    id: "longevity",
    label: "Built to Last for Years",
    icon: "clock" as const,
  },
];

function FeatureIcon({ icon }: { icon: (typeof FEATURES)[number]["icon"] }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "building":
      return (
        <svg {...common}>
          <path
            d="M4 20h16M6 20V8l6-4 6 4v12"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M10 20v-5h4v5M10 10h.01M14 10h.01M10 13h.01M14 13h.01"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path
            d="M12 3 5 6v5c0 4.5 2.9 7.6 7 9 4.1-1.4 7-4.5 7-9V6l-7-3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="m9.2 12 2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path
            d="M6 8.5 12 4l6 4.5L12 20 6 8.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M6 8.5h12M9.2 8.5 12 4l2.8 4.5L12 12 9.2 8.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 8v4.2L15 15"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function SliderHandleIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/></svg>
  );
}

function DragHandIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 11V7.5a1.5 1.5 0 0 1 3 0V11M11 10.5V6.5a1.5 1.5 0 0 1 3 0V11M14 10V7.5a1.5 1.5 0 0 1 3 0V14c0 3-2 5-5 5h-1.2C8.6 19 7 17.5 7 15.2V11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12H2m20 0h-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Visualize() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [position, setPosition] = useState(50);

  const updatePosition = useCallback((clientX: number) => {
    const track = sliderRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(4, Math.min(96, next)));
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updatePosition(event.clientX);
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const onSliderKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((value) => Math.max(4, value - 2));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((value) => Math.min(96, value + 2));
    }
  };

  return (
    <div className="relative overflow-hidden py-12 sm:py-14 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,134,11,0.08)_0%,transparent_55%)]" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          {/* Title */}
          <div className="text-center lg:col-span-3 lg:text-left">
            <Heading
              tag="h2"
              size="section"
              tone="dark"
              eyebrow="BEFORE & AFTER"
              title="Experience the Difference"
              description="The same space. A stunning transformation."
            />
          </div>

          {/* Slider */}
          <div className="relative w-full lg:col-span-6">
            <div
              ref={sliderRef}
              className="relative aspect-[4/3] cursor-ew-resize touch-none overflow-hidden rounded-2xl select-none sm:aspect-[16/10] sm:rounded-[1.25rem] lg:aspect-[16/9]"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onKeyDown={onSliderKeyDown}
              role="slider"
              aria-valuemin={4}
              aria-valuemax={96}
              aria-valuenow={Math.round(position)}
              aria-label="Compare before and after floor finish"
              tabIndex={0}
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/before-after/after-floor.png"
                  alt="Warehouse with polished premium epoxy floor"
                  fill
                  sizes="(max-width: 1024px) 94vw, 50vw"
                  className="object-cover"
                  priority={false}
                />
                <span className="absolute top-3 right-3 rounded-md bg-[var(--brand-color)] px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.14em] text-white sm:top-4 sm:right-4 sm:px-3.5 sm:py-1.5 sm:text-[0.7rem]">
                  AFTER
                </span>
              </div>

              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
                <Image
                  src="/images/before-after/before-floor.png"
                  alt="Warehouse with worn unfinished concrete floor"
                  fill
                  sizes="(max-width: 1024px) 94vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 rounded-md bg-black/55 px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.14em] text-white backdrop-blur-sm sm:top-4 sm:left-4 sm:px-3.5 sm:py-1.5 sm:text-[0.7rem]">
                  BEFORE
                </span>
              </div>

              <div className="absolute inset-y-0 z-10 w-0.5 bg-[var(--brand-color)]" style={{ left: `${position}%`, transform: "translateX(-50%)" }} aria-hidden="true">
                <span className="absolute top-1/2 left-1/2 flex size-15 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--brand-color)] text-white ring-2 ring-[var(--brand-color)]/40">
                  <SliderHandleIcon />
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3 border-b border-black/10 py-4 sm:gap-6">
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-[var(--brand-color)] sm:text-sm">BEFORE</p>
                <p className="mt-1 text-xs text-black/55 sm:text-sm">Worn. Dull. Uninspiring.</p>
              </div>
              <span className="shrink-0 text-base text-[var(--brand-color)] sm:text-xl">→</span>
              <div className="min-w-0 flex-1 text-center sm:text-right">
                <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-[var(--brand-color)] sm:text-sm">AFTER</p>
                <p className="mt-1 text-xs text-black/55 sm:text-sm">Seamless. Durable. Exceptional.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="lg:col-span-3">
            <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-1 lg:gap-y-5">
              {FEATURES.map((feature) => (
                <li key={feature.id} className="flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 bg-white/60 rounded-2xl p-3 border border-black/8">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-color)] text-white sm:size-14 lg:size-12">
                    <FeatureIcon icon={feature.icon} />
                  </span>
                  <p className="max-w-[9rem] text-[0.8rem] font-semibold leading-snug text-[#0B1120] sm:max-w-none sm:text-sm">
                    {feature.label}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center lg:mt-10 lg:justify-start">
              <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/15 px-3.5 py-2.5 text-[0.6rem] font-semibold tracking-[0.1em] text-black/45 uppercase sm:gap-2.5 sm:px-5 sm:text-[0.7rem] sm:tracking-[0.14em]">
                <span className="shrink-0 text-[var(--brand-color)]">
                  <DragHandIcon />
                </span>
                <span className="sm:hidden">Drag to compare</span>
                <span className="hidden sm:inline">Drag the slider left or right to compare</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
