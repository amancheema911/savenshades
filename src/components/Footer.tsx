import Link from "next/link";
import type { ReactNode } from "react";
import { contactInfo, socialLinks } from "@/lib/config";

const { phone, address, email } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
const emailHref = `mailto:${email}`;

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
        fill="var(--brand-color)"
      />
      <path
        d="M21 9L30.5 14.5V25.5L21 31L11.5 25.5V14.5L21 9Z"
        fill="var(--black)"
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
          id="Saven shades-footer-logo-grad"
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
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Saven shades home">
              <img src="/logo.png" alt="Saven shades" className="h-14" />
            </Link>

            <p>We transform ordinary concrete into extraordinary floors that are beautiful, durable and built to last.</p>

              <div className="flex items-center space-x-2 mt-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-[var(--brand-color)] transition-colors duration-300 hover:border-[var(--brand-color)]"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                ))}
            </div>
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
                <a href={phoneHref} className="flex items-start gap-3 text-[0.92rem] text-white/55 transition-colors hover:text-white">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80"><PhoneIcon /></span>
                  <span className="pt-1.5">{phone}</span>
                </a>
              </li>
              <li>
                <a href={emailHref} className="flex items-start gap-3 text-[0.92rem] text-white/55 transition-colors hover:text-white">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80"><MailIcon /></span>
                  <span className="pt-1.5">{email}</span>
                </a>
              </li>
              <li>
                  <div className="flex items-start gap-3 text-[0.92rem] text-white/55 transition-colors hover:text-white">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80"><PinIcon /></span>
                    <span className="pt-1.5 leading-relaxed">{address}</span>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-5 text-white/70">
          <p>© 2026 Saven Shades. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
