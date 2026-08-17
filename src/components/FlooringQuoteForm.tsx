"use client"
import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { services } from "@/lib/services";

const PROJECT_TYPES = [...services.map((service) => service.title), "Other"];

const SIZE_OPTIONS = [
  "Under 250 sq ft",
  "250 – 500 sq ft",
  "500 – 1,000 sq ft",
  "1,000 – 2,000 sq ft",
  "2,000+ sq ft",
];

type FormTone = "dark" | "light";

const TONE_STYLES = {
  dark: {
    shell: "border-[var(--brand-color)]/50 bg-[var(--black)]/90 shadow-md backdrop-blur-xl",
    eyebrow: "text-white",
    description: "text-white/80",
    label: "text-white",
    field: "border-white/12 bg-[var(--black)]/70 text-white/80 placeholder:text-white/55 focus:border-[var(--brand-color)]/65 focus:bg-[var(--black)]/80",
    option: "bg-[var(--black)] text-white",
    optionDisabled: "bg-[#0c1a2e] text-white/50",
    chevron: "text-white/55",
    dividerLine: "bg-white/15",
    dividerText: "text-white/45",
    successBox: "border-white/15 bg-white/5",
    successTitle: "text-white",
    successBody: "text-white/65",
    footer: "text-white/50",
    error: "border-red-400/30 bg-red-500/10 text-red-200",
  },
  light: {
    shell: "border-black/10 bg-white shadow-xl",
    eyebrow: "text-[var(--black)]",
    description: "text-black/60",
    label: "text-[var(--black)]",
    field: "border-black/12 bg-[#F7F8FA] text-[var(--black)] placeholder:text-black/40 focus:border-[var(--brand-color)]/60 focus:bg-white",
    option: "bg-white text-[var(--black)]",
    optionDisabled: "bg-[#F7F8FA] text-black/45",
    chevron: "text-black/40",
    dividerLine: "bg-black/10",
    dividerText: "text-black/40",
    successBox: "border-black/10 bg-[#F7F8FA]",
    successTitle: "text-[var(--black)]",
    successBody: "text-black/60",
    footer: "text-black/45",
    error: "border-red-300 bg-red-50 text-red-700",
  },
};

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

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 ${className}`}
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

export default function FlooringQuoteForm({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: FormTone;
}) {
  const styles = TONE_STYLES[tone];
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fieldClass = `w-full rounded-lg border px-3 py-2.5 text-xs outline-none transition-[border-color,background-color,box-shadow] ${styles.field}`;
  const labelClass = `mb-1.5 block text-[0.7rem] font-semibold tracking-[0.04em] uppercase ${styles.label}`;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "flooring",
          projectType: String(data.get("projectType") ?? ""),
          size: String(data.get("size") ?? ""),
          postalCode: String(data.get("postalCode") ?? ""),
          name: String(data.get("name") ?? ""),
          phone: String(data.get("phone") ?? ""),
          email: String(data.get("email") ?? ""),
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send your request");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={["relative w-full overflow-hidden rounded-2xl border px-5 py-6 lg:max-w-[440px]",
        styles.shell,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative z-10">
        <p className={`text-xl font-semibold tracking-wide uppercase ${styles.eyebrow}`}>Get Your Free</p>
        <h2 className="text-[1.25rem] leading-[1.15] font-bold tracking-tight text-[var(--brand-color)] uppercase sm:text-[1.5rem]">Epoxy Flooring Quote</h2>

        <div className="mt-3 flex items-center" aria-hidden="true">
          <span className="h-px w-10 bg-[var(--brand-color)]" />
        </div>

        <p className={`mt-3 text-sm ${styles.description}`}>Tell us about your project and we&apos;ll get back to you with a custom quote.</p>

        {submitted ? (
          <div className={`mt-6 rounded-xl border px-4 py-5 text-center ${styles.successBox}`} role="status">
            <p className={`font-semibold ${styles.successTitle}`}>Request received!</p>
            <p className={`mt-1 text-sm ${styles.successBody}`}>Our team will contact you shortly.</p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm font-semibold text-[var(--brand-color)] hover:underline"
            >
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
                  <option value="" disabled className={styles.optionDisabled}>
                    Select Project Type
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type} className={styles.option}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className={styles.chevron} />
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
                  <option value="" disabled className={styles.optionDisabled}>
                    Select Size Range
                  </option>
                  {SIZE_OPTIONS.map((size) => (
                    <option key={size} value={size} className={styles.option}>
                      {size}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className={styles.chevron} />
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
              <span className={`h-px flex-1 ${styles.dividerLine}`} />
              <span
                className={`text-[0.68rem] font-semibold tracking-[0.14em] uppercase ${styles.dividerText}`}
              >
                Your Details
              </span>
              <span className={`h-px flex-1 ${styles.dividerLine}`} />
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

            {error ? (
              <p
                className={`rounded-lg border px-3 py-2 text-xs ${styles.error}`}
                role="alert"
              >
                {error}
              </p>
            ) : null}

            <div className="flex justify-end">
              <Button
                type="submit"
                size="sm"
                disabled={submitting}
                showIcon={!submitting}
                className="uppercase"
              >
                {submitting ? "Sending..." : "Get My Free Estimate"}
              </Button>
            </div>

            <p className={`flex justify-center gap-1.5 pt-0.5 text-center text-[0.72rem] ${styles.footer}`}>
              <LockIcon />
              No obligation. Your information is safe and secure.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
