import Image from "next/image";
import Link from "next/link";

function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type BlogCardProps = {
  /** Omit to render a non-clickable card instead of a link */
  href?: string;
  image: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  /** Larger title/excerpt for a spotlight/featured placement */
  featured?: boolean;
  className?: string;
};

export default function BlogCard({
  href,
  image,
  imageAlt,
  title,
  excerpt,
  category,
  date,
  featured = false,
  className,
}: BlogCardProps) {
  const article = (
    <article
      className={[
        "group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl",
        href && "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold text-[var(--brand-color)] uppercase shadow-sm">{category}</span>
      </div>

      <div className="flex flex-1 flex-col p-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-medium text-[var(--black)]/50">
          <span>{date}</span>
        </div>
        <h3 className="font-bold text-[var(--black)] group-hover:text-[var(--brand-color)]">{title}</h3>
        <p>{excerpt}</p>
        <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-[var(--brand-color)]">
          Read Article
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-[var(--brand-color)]/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-[var(--brand-color)] group-hover:text-white">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {article}
      </Link>
    );
  }

  return article;
}
