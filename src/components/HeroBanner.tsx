import Image from "next/image";
import Link from "next/link";
import FlooringQuoteForm from "@/components/FlooringQuoteForm";
import Heading from "@/components/Heading";
import Button from "@/components/ui/Button";

const TRUST_ITEMS = [
  {
    id: "local",
    line1: "Locally Owned",
    line2: "& Operated",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>
    ),
  },
  {
    id: "experience",
    line1: "10+ Years",
    line2: "Experience",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
    ),
  },
  {
    id: "materials",
    line1: "Premium Quality",
    line2: "Materials",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"/><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"/><path d="M2 9h20"/></svg>
    ),
  },
  {
    id: "guarantee",
    line1: "Satisfaction",
    line2: "Guaranteed",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
    ),
  },
];

function ArrowRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GalleryIcon() {
  return (
    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/30 text-white transition-transform duration-300 group-hover:scale-105 sm:size-11">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><circle cx="8.5" cy="10" r="1.5" fill="currentColor" /><path d="m7 16 3.2-3.2a1 1 0 0 1 1.4 0L15 16l1.3-1.3a1 1 0 0 1 1.4 0L21 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function HeroBanner() {
  return (
    <section className="relative -mt-[5.75rem] overflow-hidden">
      <Image src="/images/hero-epoxy-floor-1.2.1.webp" alt="Premium epoxy garage floor with reflective flake finish" fill priority className="w-full h-full object-cover object-top"/>

      <div className="w-full xl:w-1/2 h-full absolute inset-0 bg-gradient-to-r from-[#05070b]/85 via-[#05070b]/70 via-70% md:via-70% lg:via-50% xl:via-80% 2xl:via-70% to-transparent"></div>

      <div className="relative z-10 flex flex-col">
        <div className="container mx-auto flex flex-1 flex-col justify-center px-4 pt-28 pb-10 sm:px-6 sm:pt-30 sm:pb-1 lg:px-8 lg:pt-30">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            <div className="animate-hero-rise lg:col-span-7">
              <div>

                <div className="max-w-xl">
                  <Heading
                    tag="h1"
                    size="hero"
                    tone="light"
                    eyebrow="Residential &amp; Commercial Epoxy Flooring"
                    title={<>Premium Epoxy Flooring In <span className="text-[var(--brand-color)]">Surrey, BC</span></>}
                    description="Durable. Beautiful. Built to Last. Transform your garage, basement, or commercial space with high-performance epoxy flooring installed by local experts."
                    titleClassName="uppercase"
                  />
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Button href="/contact-us">Get A Free On-Site Estimate</Button>

                  <Link
                    href="/our-work"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/75 bg-transparent py-1.5 pr-1.5 pl-6 text-[0.95rem] font-semibold text-white transition-colors hover:border-white hover:bg-white/10 active:scale-[0.98]"
                  >
                    View Our Work
                    <GalleryIcon />
                  </Link>
                </div>

                <div className="mt-8 w-full max-w-3xl rounded-2xl border border-[var(--brand-color)]/25 bg-[var(--black)]/90 px-3 py-5 shadow-md backdrop-blur-sm">
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2 lg:gap-3">
                    {TRUST_ITEMS.map((item) => (
                      <li key={item.id} className="flex items-center gap-2.5">
                        <span className="text-[var(--brand-color)]">{item.icon}</span>
                        <span className="text-xs font-semibold tracking-wide text-white uppercase">
                          <span className="block">{item.line1}</span>
                          <span className="block">{item.line2}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            <div id="hero-quote" className="animate-hero-rise-delayed flex justify-center lg:col-span-5 lg:justify-end">
              <FlooringQuoteForm tone="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
