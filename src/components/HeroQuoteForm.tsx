"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

const PROJECT_TYPES = [
  "Garage Floors",
  "Commercial",
  "Industrial",
  "Metallic Epoxy",
  "Flake Flooring",
  "Other",
] as const;

export default function HeroQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    // UI-only submit — wire to an API later
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      event.currentTarget.reset();
    }, 600);
  };

  return (
    <div className="animate-hero-rise-delayed liquid-glass bg-white/5 backdrop-blur-md relative w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/25 p-5 sm:p-6">
      {/* Liquid ripple + specular layers */}
      <div className="liquid-glass-ripple pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="liquid-glass-shine pointer-events-none absolute inset-y-[-20%] left-0 w-1/2" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_42%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-10 -bottom-14 size-44 rounded-full bg-[radial-gradient(circle,rgba(184,134,11,0.35),transparent_70%)] blur-2xl" aria-hidden="true" />

      <div className="relative z-10">
        <h2 className="mt-2  text-xl font-bold tracking-tight text-white sm:text-2xl">Get Your Estimate</h2>
        <p className="mt-1.5 text-md font-medium text-white">Tell us about your project and we&apos;ll get back within 24 hours.</p>

        {submitted ? (
          <div className="mt-6 rounded-2xl border border-white/25 bg-white/10 px-4 py-5 text-center backdrop-blur-md" role="status">
            <p className="font-semibold text-white">Request received!</p>
            <p className="mt-1 text-sm text-white/70">Our team will contact you shortly.</p>
            <button type="button" onClick={() => setSubmitted(false)} className="mt-4 text-sm font-semibold text-[var(--brand-color)] hover:underline">
              Send another request
            </button>
          </div>
        ) : (
          <form className="mt-5 space-y-3.5" onSubmit={onSubmit}>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold text-white">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                required
                placeholder="John Smith"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-3 text-sm text-white outline-none placeholder:text-white backdrop-blur-md transition-[border-color,box-shadow,background-color] focus:border-white/45 focus:bg-white/15"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-bold text-white">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-3 text-sm text-white outline-none placeholder:text-white backdrop-blur-md transition-[border-color,box-shadow,background-color] focus:border-white/45 focus:bg-white/15"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-bold text-white">
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(123) 456-7890"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-3 text-sm text-white outline-none placeholder:text-white backdrop-blur-md transition-[border-color,box-shadow,background-color] focus:border-white/45 focus:bg-white/15"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-bold text-white">
                Project Type
              </span>
              <select
                name="projectType"
                required
                defaultValue=""
                className="w-full appearance-none rounded-xl border border-white/20 bg-white/10 px-3.5 py-3 text-sm text-white outline-none backdrop-blur-md transition-[border-color,box-shadow,background-color] focus:border-white/45 focus:bg-white/15"
              >
                <option value="" disabled className="bg-white text-black">Select a service</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type} className="bg-white text-black">{type}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-bold text-white">
                Message
              </span>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about your space..."
                className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-3.5 py-3 text-sm text-white outline-none placeholder:text-white backdrop-blur-md transition-[border-color,box-shadow,background-color] focus:border-white/45 focus:bg-white/15"
              />
            </label>

            <Button
              type="submit"
              disabled={submitting}
              fullWidth
              size="sm"
              showIcon={!submitting}
            >
              {submitting ? "Sending..." : "Get Free Quote"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
