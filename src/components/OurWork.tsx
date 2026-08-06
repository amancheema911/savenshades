import Link from "next/link";
import Heading from "@/components/Heading";
import OverlayCard from "@/components/OverlayCard";

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
    <section className="relative bg-gray-50 pt-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Heading
              tag="h2"
              size="section"
              tone="dark"
              eyebrow="OUR WORK"
              title={
                <>
                  Real Floors. Real{" "}
                  <span className="text-[var(--brand-color)]">Results.</span>
                </>
              }
            />
          </div>

          <Link
            href="/our-work"
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-black/45 transition-colors hover:text-[var(--brand-color)]"
          >
            View All Projects
            <span className="text-[var(--brand-color)]">
              <ChevronIcon />
            </span>
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {projects.map((project) => (
            <li key={project.id}>
              <OverlayCard
                href={`/our-work?project=${project.id}`}
                image={project.image}
                imageAlt={project.imageAlt}
                title={project.title}
                category={project.category}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
