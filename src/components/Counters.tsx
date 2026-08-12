import { counterItems, type CounterIcon, type CounterItem, } from "@/lib/counters";

function CounterGlyph({ icon }: { icon: CounterIcon }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "projects":
      return (
        <svg {...common}>
          <path
            d="M8 4h8a2 2 0 0 1 2 2v14l-6-3-6 3V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M10 9h4M10 12h4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "sqft":
      return (
        <svg {...common}>
          <path
            d="M6 4h8l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M14 4v4h4M8 13h8M8 16h5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "experience":
      return (
        <svg {...common}>
          <path
            d="M12 3 4.8 6.2v5.1C4.8 15.9 8 19.4 12 21c4-1.6 7.2-5.1 7.2-9.7V6.2L12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "clients":
      return (
        <svg {...common}>
          <path
            d="M12 3 4.8 6.2v5.1C4.8 15.9 8 19.4 12 21c4-1.6 7.2-5.1 7.2-9.7V6.2L12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="m9.2 11.4 1.9 1.9 3.7-3.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

type CountersProps = {
  items?: CounterItem[];
  className?: string;
};

export default function Counters({
  items = counterItems,
  className = "",
}: CountersProps) {
  return (
    <section className={`bg-gray-50 py-14 lg:py-20 ${className}`} aria-label="Company statistics">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] bg-[var(--black)] px-5 py-7 sm:rounded-[2rem] sm:px-8 sm:py-8 lg:rounded-[2.5rem] lg:px-10 lg:py-9">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--brand-color)]/50 bg-[var(--black)] text-[var(--brand-color)] shadow-md">
                  <CounterGlyph icon={item.icon} />
                </span>
                <div className="min-w-0">
                  <div className="text-2xl font-bold tracking-tight text-white">{item.value}</div>
                  <div className="text-white/70">{item.label}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
