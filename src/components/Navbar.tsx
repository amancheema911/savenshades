"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/contact-us", label: "Contact Us" },
];

function LogoMark() {
  return (
    <svg
      width="42"
      height="42"
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
          id="Saven shades-logo-grad"
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="flex w-4 flex-col gap-[5px]" aria-hidden="true">
      <span
        className={`h-[1.5px] w-full origin-center bg-current transition-transform duration-200 ${
          open ? "translate-y-[6.5px] rotate-45" : ""
        }`}
      />
      <span
        className={`h-[1.5px] w-full bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`h-[1.5px] w-full origin-center bg-current transition-transform duration-200 ${
          open ? "-translate-y-[6.5px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 inset-x-0">
      <nav
        className={`relative z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ${
          scrolled || menuOpen
            ? "border-b border-white/10 bg-[#05070b] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent backdrop-blur-md"
        }`}
        aria-label="Primary"
      >
        <div className="container mx-auto flex items-center justify-between gap-4 py-3 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="Saven shades home"
          >
            <LogoMark />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] font-bold tracking-[0.08em] text-white sm:text-[1.5rem]">
                Saven shades
              </span>
              <span className="mt-1 text-[0.58rem] font-medium tracking-[0.18em] text-white/75 sm:text-[0.62rem]">
                PREMIUM EPOXY SOLUTIONS
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-[0.95rem] font-medium transition-colors ${
                      active
                        ? "text-[var(--brand-color)]"
                        : "text-white/90 hover:text-white"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active ? (
                      <span
                        className="absolute bottom-0 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[var(--brand-color)]"
                        aria-hidden="true"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 sm:gap-4">
            <Button href="/contact-us" size="sm" className="max-[399px]:pl-3.5">
              <span className="hidden min-[400px]:inline">Get Free Quote</span>
              <span className="min-[400px]:hidden">Quote</span>
            </Button>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:border-white hover:bg-white/10 xl:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <button
        type="button"
        tabIndex={menuOpen ? 0 : -1}
        aria-hidden={!menuOpen}
        aria-label="Close menu overlay"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/55 transition-opacity duration-300 xl:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Right-to-left slide drawer */}
      <aside
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(86vw,320px)] flex-col border-l border-white/10 bg-[rgba(8,14,24,0.98)] shadow-[-12px_0_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-300 ease-out sm:w-[min(70vw,380px)] xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="font-display text-sm font-semibold tracking-[0.14em] text-white/80">
            MENU
          </span>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <MenuIcon open />
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-3.5 text-base font-medium transition-colors ${
                    active
                      ? "bg-white/5 text-[var(--brand-color)]"
                      : "text-white/90 hover:bg-white/5 hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="border-t border-white/10 p-4">
          <Button
            href="/contact-us"
            fullWidth
            onClick={() => setMenuOpen(false)}
          >
            Get Free Quote
          </Button>
        </div>
      </aside>
    </header>
  );
}
