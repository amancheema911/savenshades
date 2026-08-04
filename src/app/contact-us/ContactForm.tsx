"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

const PROJECT_TYPES = [
  "Garage Floors",
  "Commercial",
  "Industrial",
  "Metallic Epoxy",
  "Flake Flooring",
  "Quartz Flooring",
  "Decorative Flooring",
  "Other",
] as const;

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const fieldClassName =
  "w-full rounded-xl border border-black/10 bg-[#F7F8FA] px-4 py-3.5 text-sm text-[#0B1120] outline-none transition-[border-color,box-shadow,background-color] placeholder:text-black/35 focus:border-[var(--brand-color)]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(184,134,11,0.12)]";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      event.currentTarget.reset();
    }, 700);
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center rounded-[1.5rem] border border-black/8 bg-white px-6 py-12 text-center sm:rounded-[1.75rem] sm:px-10 sm:py-14"
        role="status"
      >
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-[var(--brand-color)] text-white shadow-[0_10px_28px_rgba(184,134,11,0.35)]">
          <CheckIcon />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-[#0B1120]">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-black/50">
          Thanks for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-semibold text-[var(--brand-color)] transition-colors hover:brightness-110"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_20px_60px_rgba(11,17,32,0.06)] sm:rounded-[1.75rem] sm:p-8 lg:p-9"
      noValidate={false}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-xs font-bold tracking-wide text-[#0B1120]">
            Full Name
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="John Smith"
            className={fieldClassName}
          />
        </label>

        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-xs font-bold tracking-wide text-[#0B1120]">
            Phone
          </span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="(123) 456-7890"
            className={fieldClassName}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-bold tracking-wide text-[#0B1120]">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClassName}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-bold tracking-wide text-[#0B1120]">
            Project Type
          </span>
          <select
            name="projectType"
            required
            defaultValue=""
            className={`${fieldClassName} appearance-none`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-bold tracking-wide text-[#0B1120]">
            Message
          </span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us about your space, timeline, and goals..."
            className={`${fieldClassName} resize-none`}
          />
        </label>
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="mt-6"
        showIcon={!submitting}
      >
        {submitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="mt-4 text-center text-xs leading-relaxed text-black/40">
        By submitting, you agree to be contacted about your project. No spam —
        ever.
      </p>
    </form>
  );
}
