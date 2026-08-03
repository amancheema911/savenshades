import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Floorix Premium Epoxy Flooring",
  description:
    "Request a free Floorix epoxy flooring estimate. Call, email, or send a message — we respond within 24 hours.",
};

const contactDetails = [
  {
    id: "phone",
    label: "Call us",
    value: "(123) 456-7890",
    href: "tel:+11234567890",
    hint: "Mon–Sat, 8am–6pm",
    icon: "phone" as const,
  },
  {
    id: "email",
    label: "Email",
    value: "info@floorix.com",
    href: "mailto:info@floorix.com",
    hint: "Replies within 24 hours",
    icon: "mail" as const,
  },
  {
    id: "visit",
    label: "Visit",
    value: "123 Flooring Way, Dallas, TX 75001",
    href: "https://maps.google.com/?q=Dallas+TX",
    hint: "By appointment",
    icon: "pin" as const,
  },
] as const;

const promises = [
  {
    id: "estimate",
    title: "Free estimate",
    description: "No obligation quotes for residential and commercial projects.",
  },
  {
    id: "response",
    title: "24-hour reply",
    description: "We respond quickly so your project keeps moving.",
  },
  {
    id: "scope",
    title: "Clear scope",
    description: "Transparent pricing with prep, materials, and finish defined.",
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
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

function ContactIcon({ icon }: { icon: "phone" | "mail" | "pin" }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M8.5 4.5h3l1.2 3.2-1.8 1.2a12.5 12.5 0 0 0 5.2 5.2l1.2-1.8 3.2 1.2v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.7a2 2 0 0 1 2-2.2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <path
            d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="m5.5 8 6.5 4.5L18.5 8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path
            d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
  }
}

export default function ContactUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-[4.75rem] min-h-[64vh] overflow-hidden sm:min-h-[70vh]">
        <Image
          src="/images/hero-epoxy-floor.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] animate-hero-zoom"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,9,16,0.95)_0%,rgba(5,9,16,0.8)_40%,rgba(5,9,16,0.45)_72%,rgba(5,9,16,0.7)_100%),linear-gradient(180deg,rgba(5,9,16,0.5)_0%,transparent_30%,rgba(5,9,16,0.78)_100%)]"
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

        <div className="relative z-10 container mx-auto flex min-h-[64vh] w-full flex-col justify-end px-4 pb-14 pt-32 sm:min-h-[70vh] sm:px-6 sm:pb-16 sm:pt-36 lg:px-8 lg:pb-20">
          <div className="max-w-3xl animate-hero-rise">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--brand-color)] animate-about-line sm:w-14" />
              <p className="text-xs font-bold tracking-[0.22em] text-[var(--brand-color)] sm:text-sm">
                CONTACT US
              </p>
            </div>
            <h1 className="mt-5 font-display text-[2.55rem] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-[3.5rem] lg:text-[4.25rem]">
              Let&apos;s Build Your{" "}
              <span className="text-[var(--brand-color)]">Next Floor.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/78 sm:text-lg">
              Tell us about your space and we&apos;ll prepare a free estimate —
              usually within one business day.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#contact-form"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--brand-color)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(184,134,11,0.35)] transition-[transform,filter] hover:brightness-110 active:scale-[0.98]"
              >
                Send A Message
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </Link>
              <a
                href="tel:+11234567890"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10 active:scale-[0.98]"
              >
                Call (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section
        id="contact-form"
        className="relative bg-[#F7F8FA] px-3 py-14 sm:px-4 sm:py-16 md:px-6 lg:px-8 lg:py-20"
        aria-labelledby="contact-form-heading"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="lg:col-span-5 xl:col-span-4">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
                GET IN TOUCH
              </p>
              <h2
                id="contact-form-heading"
                className="mt-3 font-display text-[1.9rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.35rem]"
              >
                Prefer Direct{" "}
                <span className="text-[var(--brand-color)]">Contact?</span>
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-black/50 sm:text-base">
                Reach the Floorix team by phone, email, or visit — or use the form
                and we&apos;ll follow up with next steps.
              </p>

              <ul className="mt-8 space-y-3">
                {contactDetails.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="group flex items-start gap-4 rounded-[1.25rem] border border-black/8 bg-white p-4 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-color)]/35 sm:p-5"
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[rgba(184,134,11,0.12)] text-[var(--brand-color)] transition-colors group-hover:bg-[var(--brand-color)] group-hover:text-white">
                        <ContactIcon icon={item.icon} />
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block text-[0.68rem] font-semibold tracking-[0.14em] text-black/40 uppercase">
                          {item.label}
                        </span>
                        <span className="mt-1 block font-display text-lg font-bold tracking-tight text-[#0B1120]">
                          {item.value}
                        </span>
                        <span className="mt-0.5 block text-sm text-black/45">
                          {item.hint}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 xl:col-span-8">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-[#0B1120] sm:text-2xl">
                    Request A Free Estimate
                  </h3>
                  <p className="mt-1 text-sm text-black/45">
                    Share a few details — we&apos;ll handle the rest.
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section
        className="relative overflow-hidden bg-white px-3 py-14 sm:px-4 sm:py-16 md:px-6 lg:px-8 lg:py-20"
        aria-labelledby="contact-promises-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(184,134,11,0.08),transparent_45%),radial-gradient(ellipse_at_90%_100%,rgba(184,134,11,0.05),transparent_40%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--brand-color)] sm:text-sm">
              WHAT TO EXPECT
            </p>
            <h2
              id="contact-promises-heading"
              className="mt-3 font-display text-[1.9rem] font-bold tracking-tight text-[#0B1120] sm:text-[2.4rem]"
            >
              Simple Process.{" "}
              <span className="text-[var(--brand-color)]">Clear Answers.</span>
            </h2>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {promises.map((item, index) => (
              <li
                key={item.id}
                className="rounded-[1.35rem] border border-black/8 bg-white p-6 shadow-[0_8px_30px_rgba(11,17,32,0.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--brand-color)]/35 hover:shadow-[0_16px_40px_rgba(11,17,32,0.08)] sm:p-7"
              >
                <span className="font-display text-3xl font-bold tracking-tight text-[var(--brand-color)]/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-[#0B1120]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-black/50">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
