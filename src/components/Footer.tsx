import Link from "next/link";
import type { ReactNode } from "react";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

const SERVICES = [
  { href: "/services/garage-floors", label: "Garage Floors" },
  { href: "/services/commercial", label: "Commercial Flooring" },
  { href: "/services/industrial", label: "Industrial Flooring" },
  { href: "/services/metallic-epoxy", label: "Metallic Epoxy" },
  { href: "/services/flake-flooring", label: "Flake Flooring" },
] as const;

const SUPPORT = [
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;

function LogoMark() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M21 2.5L37.5 12.25V31.75L21 41.5L4.5 31.75V12.25L21 2.5Z"
        fill="url(#floorix-footer-logo-grad)"
      />
      <path
        d="M21 9L30.5 14.5V25.5L21 31L11.5 25.5V14.5L21 9Z"
        fill="#0B1A2A"
        fillOpacity="0.35"
      />
      <path
        d="M15 18.5L21 15L27 18.5V25.5L21 29L15 25.5V18.5Z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M21 15V29M15 18.5L27 25.5M27 18.5L15 25.5"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="floorix-footer-logo-grad"
          x1="4.5"
          y1="2.5"
          x2="37.5"
          y2="41.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9A84B" />
          <stop offset="0.45" stopColor="#B8860B" />
          <stop offset="1" stopColor="#6B4F0E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.735-8.835L2.25 2.25H8.08l4.261 5.686L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function HouzzIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3 3 10.2V21h7.2v-5.4h3.6V21H21V10.2L12 3Zm1.8 10.8h-3.6V9h3.6v4.8Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

const SOCIAL = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
  { label: "Houzz", href: "https://houzz.com", Icon: HouzzIcon },
] as const;

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[0.92rem] text-white/55 transition-colors hover:text-white">{children}</Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#05070b] text-white">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Floorix home">
              <LogoMark />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.35rem] font-bold tracking-[0.08em]">FLOORIX</span>
                <span className="mt-1 text-[0.58rem] font-medium tracking-[0.16em] text-white/60">PREMIUM EPOXY FLOORING</span>
              </span>
            </Link>

            <p>We transform ordinary concrete into extraordinary floors that are beautiful, durable and built to last.</p>

            <ul className="mt-6 flex items-center gap-3">
              {SOCIAL.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h2 className="text-base font-semibold text-white">Quick Links</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h2 className="text-base font-semibold text-white">Services</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICES.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h2 className="text-base font-semibold text-white">Support</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {SUPPORT.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h2 className="text-base font-semibold text-white">Contact Us</h2>
            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a
                  href="tel:+11234567890"
                  className="flex items-start gap-3 text-[0.92rem] text-white/55 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80">
                    <PhoneIcon />
                  </span>
                  <span className="pt-1.5">(123) 456-7890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@floorix.com"
                  className="flex items-start gap-3 text-[0.92rem] text-white/55 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80">
                    <MailIcon />
                  </span>
                  <span className="pt-1.5">info@floorix.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[0.92rem] text-white/55">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80">
                    <PinIcon />
                  </span>
                  <span className="pt-1.5 leading-relaxed">
                    123 Flooring Way,
                    <br />
                    Dallas, TX 75001
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto container px-4 text-center text-sm text-white/45 sm:px-6 lg:px-8 py-5">
          © 2026 Saven Shades. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
