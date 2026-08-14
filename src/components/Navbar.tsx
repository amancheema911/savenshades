"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import Button from "@/components/ui/Button";
import { BASE_URL, contactInfo } from "@/lib/config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

const { phone, hours, logo } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
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

  const isHome = pathname === "/";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navSolid = !isHome || scrolled || menuOpen;

  return (
    <header className={`${isHome ? "fixed" : "sticky"} top-0 z-50 w-full`}>
      <nav
        className={`relative z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ${
          navSolid
            ? "border-b border-white/10 bg-[var(--black)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent backdrop-blur-md"
        }`}
        aria-label="Primary"
      >
        <div className="container mx-auto flex items-center justify-between gap-4 py-3 px-4 sm:px-6 lg:px-8">
          <Link href={BASE_URL}>
            <Image src={logo} alt="Seven Shades" width={250} height={250} />
          </Link>

          <ul className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
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

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
            <a href={phoneHref} className="hidden items-center gap-3 transition-opacity hover:opacity-90 xl:flex">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[var(--brand-color)] text-[var(--brand-color)]"><PhoneIcon /></span>
              <span className="flex flex-col leading-tight">
                <span className="text-[0.8rem] font-medium text-white">Call Us Today</span>
                <span className="text-base font-bold tracking-tight text-white">{phone}</span>
                <span className="text-[0.72rem] font-medium text-white/90">{hours}</span>
              </span>
            </a>

            <div className="hidden sm:block">
              <Button href="/contact-us" size="sm">Get Free Quote</Button>
            </div>

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
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(86vw,320px)] flex-col border-l border-white/10 bg-[var(--black)] shadow-lg backdrop-blur-xl transition-transform duration-300 ease-out sm:w-[min(70vw,380px)] xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className=" text-sm font-semibold tracking-[0.14em] text-white/80">
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
          <a href={phoneHref} className="mb-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition-colors hover:bg-white/10" onClick={() => setMenuOpen(false)}>
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[var(--brand-color)] text-[var(--brand-color)]"><PhoneIcon /></span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="text-[0.75rem] font-medium text-white">Call Us Today</span>
              <span className="truncate text-sm font-bold text-white">{phone}</span>
              <span className="text-[0.7rem] font-medium text-white/80">{hours}</span>
            </span>
          </a>

          <Button href="/contact-us" fullWidth onClick={() => setMenuOpen(false)}>Get Free Quote</Button>
        </div>
      </aside>
    </header>
  );
}
