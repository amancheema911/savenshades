import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

export default function FloorServices() {
  return (
    <section className="relative bg-[var(--black)] py-6 sm:py-8" aria-labelledby="floor-services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="lg:col-span-3">
            <h2 className="max-w-[18ch] text-2xl font-semibold text-white uppercase sm:text-3xl lg:max-w-none">
              Floors That Look{" "}
              <span className="text-[var(--brand-color)]">Amazing &amp; Perform</span>{" "}
              Even Better.
            </h2>

            <div className="mt-3 flex items-center" aria-hidden="true">
              <span className="h-px w-10 bg-[var(--brand-color)]" />
            </div>

            <p className="mt-3 text-white/70">Engineered for durability. Designed for your lifestyle.</p>
          </div>

          <div className="lg:col-span-9">
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id} className="min-w-0">
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#1a1f28]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 15vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 flex w-full items-center gap-2 bg-gradient-to-t from-[#05070b]/85 via-[#05070b]/55 via-60% to-transparent px-2.5 py-3 sm:gap-2.5 sm:px-3.5 sm:py-3.5">
                      <span className="inline-flex shrink-0 text-[var(--brand-color)]">
                        <div dangerouslySetInnerHTML={{ __html: service.icon as string }} />
                      </span>
                      <span className="min-w-0 truncate text-[0.65rem] font-medium tracking-wide text-white uppercase sm:text-xs">
                        {service.title}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
