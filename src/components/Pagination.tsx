import Link from "next/link";

function ChevronIcon({ direction = "left" }: { direction?: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PageToken = number | "ellipsis";

function getPageTokens(current: number, total: number): PageToken[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const tokens: PageToken[] = [1];

  if (current > 3) tokens.push("ellipsis");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let page = start; page <= end; page += 1) {
    tokens.push(page);
  }

  if (current < total - 2) tokens.push("ellipsis");

  tokens.push(total);

  return tokens;
}

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  /** Route path the pagination lives on, e.g. `/blog` */
  basePath: string;
  /** Query param name used to track the page number */
  searchParamKey?: string;
  /** Optional hash appended to each link, e.g. `#latest-articles` */
  hash?: string;
  className?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  searchParamKey = "page",
  hash,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const buildHref = (page: number) => {
    const query = page > 1 ? `?${searchParamKey}=${page}` : "";
    return `${basePath}${query}${hash ?? ""}`;
  };

  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;
  const tokens = getPageTokens(currentPage, totalPages);

  const navButtonClass =
    "inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--black)]/70 transition-colors duration-200 hover:border-[var(--brand-color)]/40 hover:text-[var(--brand-color)] sm:size-11";
  const navButtonDisabledClass =
    "inline-flex size-10 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-black/5 text-[var(--black)]/25 sm:size-11";

  return (
    <nav
      aria-label="Blog pagination"
      className={["mt-12 flex flex-col items-center gap-3 sm:mt-14", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-2 sm:gap-2.5">
        {isFirst ? (
          <span aria-disabled="true" className={navButtonDisabledClass}>
            <ChevronIcon direction="left" />
          </span>
        ) : (
          <Link href={buildHref(currentPage - 1)} aria-label="Previous page" className={navButtonClass}>
            <ChevronIcon direction="left" />
          </Link>
        )}

        <div className="hidden items-center gap-1.5 sm:flex">
          {tokens.map((token, index) =>
            token === "ellipsis" ? (
              <span
                key={`ellipsis-${index}`}
                aria-hidden="true"
                className="inline-flex size-10 items-center justify-center text-[var(--black)]/40"
              >
                &#8230;
              </span>
            ) : (
              <Link
                key={token}
                href={buildHref(token)}
                aria-current={token === currentPage ? "page" : undefined}
                className={
                  token === currentPage
                    ? "inline-flex size-10 items-center justify-center rounded-full bg-[var(--brand-color)] text-sm font-semibold text-white shadow-sm sm:size-11"
                    : "inline-flex size-10 items-center justify-center rounded-full text-sm font-medium text-[var(--black)]/65 transition-colors duration-200 hover:bg-black/5 hover:text-[var(--brand-color)] sm:size-11"
                }
              >
                {token}
              </Link>
            ),
          )}
        </div>

        <div className="text-sm font-medium text-[var(--black)]/60 sm:hidden">
          Page {currentPage} of {totalPages}
        </div>

        {isLast ? (
          <span aria-disabled="true" className={navButtonDisabledClass}>
            <ChevronIcon direction="right" />
          </span>
        ) : (
          <Link href={buildHref(currentPage + 1)} aria-label="Next page" className={navButtonClass}>
            <ChevronIcon direction="right" />
          </Link>
        )}
      </div>
    </nav>
  );
}
