import Image from "next/image";
import Link from "next/link";

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type OverlayCardProps = {
  /** Omit to render a non-clickable card instead of a link */
  href?: string;
  image: string;
  imageAlt: string;
  title: string;
  category?: string;
  /** Shown under the title when `alwaysVisible` is set */
  description?: string;
  ctaLabel?: string;
  sizes?: string;
  /** Tailwind aspect/height utility, e.g. `aspect-square`, `aspect-[4/5]`, or `h-[400px]` */
  aspectClassName?: string;
  /** Tailwind rounding utility applied to the card and its media */
  roundedClassName?: string;
  /** Keep the caption visible at all times instead of only on hover */
  alwaysVisible?: boolean;
  /** Caption presentation when `alwaysVisible` is set — `panel` (default) shows a backdrop card, `plain` lays text directly over the gradient */
  captionStyle?: "panel" | "plain";
  /** Show a circular arrow affordance next to the caption (only with `captionStyle="plain"`) */
  showArrow?: boolean;
  className?: string;
};

export default function OverlayCard({
  href,
  image,
  imageAlt,
  title,
  category,
  description,
  ctaLabel = "View Details →",
  aspectClassName = "aspect-square",
  roundedClassName = "rounded-2xl",
  alwaysVisible = false,
  captionStyle = "panel",
  showArrow = false,
  className,
}: OverlayCardProps) {
  const wrapperClassName = [
    "group relative block overflow-hidden",
    roundedClassName,
    href &&
      "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <div
      className={["relative overflow-hidden", roundedClassName, aspectClassName]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={image}
        alt={imageAlt}
        width={400}
        height={400}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"/>

      {alwaysVisible && captionStyle === "plain" ? (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div className="min-w-0 text-white/85 space-y-2">
            {category ? (
              <p className="text-xs font-medium text-white/70 uppercase">{category}</p>
            ) : null}
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {description ? <p>{description}</p> : null}
          </div>
          {showArrow ? (
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/70 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B1120]">
              <ArrowIcon />
            </span>
          ) : null}
        </div>
      ) : alwaysVisible ? (
        <div className="absolute inset-x-0 bottom-0 p-5 text-white/85 sm:p-6 space-y-2">
          <div className="translate-y-3 rounded-2xl border border-white/20 bg-white/15 p-3 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
            {category ? (
              <p className="text-xs font-medium text-white/70 uppercase">{category}</p>
            ) : null}
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {description ? <p>{description}</p> : null}
          </div>
        </div>
      ) : (
        <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:p-4">
          <div className="translate-y-3 rounded-2xl border border-white/20 bg-white/15 p-3 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
            {category ? (
              <p className="text-xs font-medium text-white/70 uppercase">{category}</p>
            ) : null}
            <div className="text-base font-bold text-white">{title}</div>
            <p className="mt-0.5 text-sm font-semibold text-[var(--brand-color)]">{ctaLabel}</p>
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={wrapperClassName}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClassName}>{content}</div>;
}
