import Image from "next/image";
import Link from "next/link";

export type OverlayCardProps = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  category?: string;
  ctaLabel?: string;
  sizes?: string;
  /** Tailwind aspect utility, e.g. `aspect-square` or `aspect-[4/5]` */
  aspectClassName?: string;
  className?: string;
};

export default function OverlayCard({
  href,
  image,
  imageAlt,
  title,
  category,
  ctaLabel = "View Details →",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  aspectClassName = "aspect-square",
  className,
}: OverlayCardProps) {
  return (
    <Link
      href={href}
      className={[
        "group relative block overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={["relative overflow-hidden rounded-2xl", aspectClassName]
          .filter(Boolean)
          .join(" ")}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:p-4">
          <div className="translate-y-3 rounded-2xl border border-white/20 bg-white/15 p-3 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
            {category ? (
              <p className="text-xs font-medium text-white/70 uppercase">
                {category}
              </p>
            ) : null}
            <div className="text-base font-bold text-white">{title}</div>
            <p className="mt-0.5 text-sm font-semibold text-[var(--brand-color)]">
              {ctaLabel}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
