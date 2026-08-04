import Image from "next/image";
import Link from "next/link";
import { getFeaturedOurWorkItems } from "@/lib/ourwork";

function ChevronIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover/link:translate-x-1"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OurWork() {
  const projects = getFeaturedOurWorkItems();

  return (
    <section className="relative bg-gray-50 pt-6 " aria-labelledby="our-work-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--brand-color)] sm:text-sm">OUR WORK</p>
            <h2 id="our-work-heading" className="mt-2 font-display text-[1.85rem] font-bold tracking-tight text-[#0B1120] sm:text-3xl lg:text-[2.5rem]">
              Real Floors. Real{" "}
              <span className="text-[var(--brand-color)]">Results.</span>
            </h2>
          </div>

          <Link href="/our-work" className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-black/45 transition-colors hover:text-[var(--brand-color)]">
            View All Projects
            <span className="text-[var(--brand-color)]"><ChevronIcon /></span>
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {projects.map((project) => (
            <li key={project.id}>
              <Link
                href={`/our-work?project=${project.id}`}
                className="group relative block overflow-hidden rounded-[1.35rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color)]"
              >
                <div className="relative aspect-[3/3] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Soft lift shadow / vignette */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                    aria-hidden="true"
                  />

                  {/* Hover glass overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:p-5"
                    aria-hidden="true"
                  >
                    <div className="translate-y-3 rounded-2xl border border-white/20 bg-white/15 p-3 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                      <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-white/75 uppercase">
                        {project.category}
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-white">
                        {project.title}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[var(--brand-color)]">
                        View Details →
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
