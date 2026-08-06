"use client";

import { useState, type FormEvent } from "react";

const PROJECT_TYPES = [
  "Garage Flooring",
  "Basement Flooring",
  "Commercial Flooring",
  "Metallic Epoxy",
  "Flake Flooring",
  "Quartz Flooring",
  "Other",
];

const SIZE_OPTIONS = [
  "Under 250 sq ft",
  "250 – 500 sq ft",
  "500 – 1,000 sq ft",
  "1,000 – 2,000 sq ft",
  "2,000+ sq ft",
];

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 11V8a4 4 0 1 1 8 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-white/55"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const fieldClass = "w-full rounded-lg border border-white/12 bg-[#0c1a2e] px-3 py-2.5 text-xs text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/40 focus:border-[var(--brand-color)]/65 focus:bg-[#0e2038]";

const labelClass = "mb-1.5 block text-[0.7rem] font-semibold tracking-[0.04em] text-white uppercase";

export default function FlooringQuoteForm({
  className = "",
}: {
  className?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      event.currentTarget.reset();
    }, 600);
  };

  return (
    <div className="relative w-full lg:max-w-[440px] overflow-hidden rounded-2xl border border-[var(--brand-color)]/50 bg-[#071628]/92 shadow-md backdrop-blur-xl px-3 py-4">      

      <div className="relative z-10">
        <p className="text-xl text-white uppercase tracking-wide font-semibold">Get Your Free</p>
        <h2 className=" text-[1.25rem] font-bold leading-[1.15] tracking-tight text-[var(--brand-color)] uppercase sm:text-[1.5rem]">Epoxy Flooring Quote</h2>

        <div className="mt-3 flex items-center" aria-hidden="true">
          <span className="h-px w-10 bg-[var(--brand-color)]" />
        </div>

        <p className="mt-3 text-sm text-white/80">Tell us about your project and we&apos;ll get back to you with a custom quote.</p>

        {submitted ? (
          <div className="mt-6 rounded-xl border border-white/15 bg-white/5 px-4 py-5 text-center" role="status">
            <p className="font-semibold text-white">Request received!</p>
            <p className="mt-1 text-sm text-white/65">Our team will contact you shortly.</p>
            <button type="button" onClick={() => setSubmitted(false)} className="mt-4 text-sm font-semibold text-[var(--brand-color)] hover:underline">
              Send another request
            </button>
          </div>
        ) : (
          <form className="mt-3 space-y-3" onSubmit={onSubmit}>
            <label className="block">
              <span className={labelClass}>Project Type</span>
              <span className="relative block">
                <select
                  name="projectType"
                  required
                  defaultValue=""
                  className={`${fieldClass} appearance-none pr-10`}
                >
                  <option value="" disabled className="bg-[#0c1a2e] text-white/50">
                    Select Project Type
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-[#0c1a2e] text-white"
                    >
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon />
              </span>
            </label>

            <label className="block">
              <span className={labelClass}>Approximate Size (Sq Ft)</span>
              <span className="relative block">
                <select
                  name="size"
                  required
                  defaultValue=""
                  className={`${fieldClass} appearance-none pr-10`}
                >
                  <option value="" disabled className="bg-[#0c1a2e] text-white/50">
                    Select Size Range
                  </option>
                  {SIZE_OPTIONS.map((size) => (
                    <option
                      key={size}
                      value={size}
                      className="bg-[#0c1a2e] text-white"
                    >
                      {size}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon />
              </span>
            </label>

            <label className="block">
              <span className={labelClass}>Postal Code</span>
              <input
                type="text"
                name="postalCode"
                required
                placeholder="e.g. V3S 0A1"
                className={fieldClass}
              />
            </label>

            <div className="flex items-center gap-3 py-1.5">
              <span className="h-px flex-1 bg-white/15" />
              <span className="text-[0.68rem] font-semibold tracking-[0.14em] text-white/45 uppercase">
                Your Details
              </span>
              <span className="h-px flex-1 bg-white/15" />
            </div>

            <label className="block">
              <span className={labelClass}>Full Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className={fieldClass}
              />
            </label>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(604) 123-4567"
                  className={fieldClass}
                />
              </label>

              <label className="block">
                <span className={labelClass}>Email Address</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--brand-color)] px-5 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-[filter,transform] hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Sending..." : "Get My Free Estimate"}
              {!submitting ? <ArrowRightIcon /> : null}
            </button>

            <p className="flex items-center justify-center gap-1.5 pt-0.5 text-center text-[0.72rem] text-white/50">
              <LockIcon />
              No obligation. Your information is safe and secure.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
