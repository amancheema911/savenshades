"use client"
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
  id?: string;
};

export type FaqAccordionProps = {
  items: readonly FaqItem[] | FaqItem[];
  /** Index open on mount — defaults to first item (0) */
  defaultOpenIndex?: number | null;
  /** Allow more than one panel open at once */
  allowMultiple?: boolean;
  className?: string;
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function getItemKey(item: FaqItem, index: number) {
  return item.id ?? `faq-${index}`;
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span className={cx( "relative inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:size-10",
        open
          ? "border-[var(--brand-color)] bg-[var(--brand-color)] text-[#1a1408]"
          : "border-black/12 bg-white text-[var(--brand-color)] group-hover/btn:border-[var(--brand-color)]/50",
      )}
      aria-hidden="true"
    >
      <span className={cx( "absolute h-[1.5px] w-3.5 rounded-full bg-current transition-transform duration-300",
          open && "scale-x-0",
        )}
      />
      <span className={cx( "absolute h-[1.5px] w-3.5 rounded-full bg-current transition-transform duration-300",
          open ? "rotate-0 text-white" : "rotate-90",
        )}
      />
    </span>
  );
}

export default function FaqAccordion({
  items,
  defaultOpenIndex = 0,
  allowMultiple = false,
  className,
}: FaqAccordionProps) {
  const baseId = useId();

  const [openKeys, setOpenKeys] = useState<string[]>(() => {
    if (
      defaultOpenIndex == null ||
      defaultOpenIndex < 0 ||
      defaultOpenIndex >= items.length
    ) {
      return [];
    }
    return [getItemKey(items[defaultOpenIndex], defaultOpenIndex)];
  });

  const panelRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [heights, setHeights] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);

  const measure = useCallback(() => {
    const next: Record<string, number> = {};
    panelRefs.current.forEach((el, key) => {
      next[key] = el.scrollHeight;
    });
    setHeights(next);
  }, []);

  // Measure real content heights once panels are in the DOM, and keep them
  // in sync with resizes/content reflow (e.g. font load, viewport change).
  useEffect(() => {
    measure();
    setReady(true);

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, items]);

  if (!items.length) return null;

  const toggle = (key: string) => {
    measure();
    setOpenKeys((prev) => {
      const isOpen = prev.includes(key);

      if (allowMultiple) {
        return isOpen ? prev.filter((item) => item !== key) : [...prev, key];
      }

      return isOpen ? [] : [key];
    });
  };

  const setPanelRef = (key: string) => (el: HTMLDivElement | null) => {
    if (el) panelRefs.current.set(key, el);
    else panelRefs.current.delete(key);
  };

  return (
    <ul className={cx("list-none space-y-3 p-0", className)}>
      {items.map((item, index) => {
        const key = getItemKey(item, index);
        const isOpen = openKeys.includes(key);
        const panelId = `${baseId}-panel-${key}`;
        const buttonId = `${baseId}-button-${key}`;
        const number = String(index + 1).padStart(2, "0");

        return (
          <li key={key} className={cx( "group relative overflow-hidden rounded-[1.15rem] border transition-[border-color,background-color,box-shadow] duration-300", isOpen ? "border-[var(--brand-color)]/35 bg-white shadow-sm" : "border-black/8 bg-gray-50 hover:border-black/15 hover:bg-white", )}>
            <span className={cx( "absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-[var(--brand-color)] transition-transform duration-500 ease-out", isOpen && "scale-y-100", )} />

            <h3 className="m-0">
              <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(key)} className="group/btn flex w-full items-center gap-4 px-4 py-4 text-left sm:gap-5">
                <span className={cx( "mt-0.5  text-sm font-bold tracking-[0.14em] transition-colors duration-300 sm:text-base", isOpen ? "text-[var(--brand-color)]" : "text-black/25", )}>
                  {number}
                </span>

                <span className={cx( "min-w-0 flex-1  text-[1.05rem] font-bold leading-snug tracking-tight text-[#0B1120] transition-colors duration-300 sm:text-lg", !isOpen && "opacity-90 group-hover/btn:opacity-100", )}>
                  {item.question}
                </span>

                <PlusIcon open={isOpen} />
              </button>
            </h3>

            <div
              id={panelId}
              ref={setPanelRef(key)}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              style={{ maxHeight: isOpen ? `${heights[key] ?? 2000}px` : "0px" }}
              className={cx(
                "overflow-hidden",
                ready && "transition-[max-height] duration-500 ease-out",
              )}
            >
              <div className="max-w-3xl px-5 pb-5 pl-[3.35rem] leading-relaxed text-black/55 sm:px-6 sm:pb-6 sm:pl-[4.1rem]">
                <p className="m-0">{item.answer}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
