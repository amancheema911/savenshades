import Heading from "@/components/Heading";
import Button from "@/components/ui/Button";
import { whyChooseFeatures, type WhyChooseFeature, } from "@/lib/why-choose-us";

function FeatureIcon({ icon }: { icon: WhyChooseFeature["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "lifetime":
      return (
        <svg {...common}>
          <path
            d="M12 20.5s-7-4.3-7-9.2A4.3 4.3 0 0 1 12 7.5a4.3 4.3 0 0 1 7 3.8c0 4.9-7 9.2-7 9.2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chemical":
      return (
        <svg {...common}>
          <path
            d="M9 3h6M10 3v5.2L5.8 16.5A3.2 3.2 0 0 0 8.6 21h6.8a3.2 3.2 0 0 0 2.8-4.5L14 8.2V3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.2 14h7.6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "scratch":
      return (
        <svg {...common}>
          <path
            d="M14.5 4.5 19 9l-9.8 9.8a2 2 0 0 1-1.1.55L4 20l.65-4.1a2 2 0 0 1 .55-1.1L14.5 4.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M13 6.2 17.3 10.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "waterproof":
      return (
        <svg {...common}>
          <path
            d="M12 3.5c3.8 4.2 6.5 7.4 6.5 10.2a6.5 6.5 0 1 1-13 0C5.5 10.9 8.2 7.7 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "uv":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "fast":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 8v4.2l3 1.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...common}>
          <path
            d="M8 4h5l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2l2-3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="13" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "slip":
      return (
        <svg {...common}>
          <path
            d="M8.5 20.5 11 12l2.2 3.2 2.3-1.4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12.5" cy="6.5" r="1.8" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M4 20.5h16"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "custom":
      return (
        <svg {...common}>
          <path
            d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M12 12 4 8.5M12 12l8-3.5M12 12v8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 sm:rounded-[2.25rem] lg:rounded-[2.75rem]">
        <div className="rounded-[1.75rem] bg-white overflow-hidden px-6 py-8 sm:px-8 sm:py-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-0 lg:items-center">
          {/* Left content */}
          <div className="lg:col-span-4 lg:pr-10 xl:pr-14 space-y-4">
            <Heading
              tag="h2"
              size="section"
              tone="dark"
              eyebrow="WHY CHOOSE US"
              title={
                <>
                  Stronger. Safer. Better.{" "}
                  <span className="text-[var(--brand-color)]">Forever.</span>
                </>
              }
              description="Our epoxy floors deliver unmatched performance and elevate every space."
            />

            <Button href="/about-us">More About Us</Button>
          </div>

          {/* Divider + features */}
          <div className="lg:col-span-8 lg:border-l lg:border-black/10 lg:pl-10 xl:pl-14">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 sm:gap-x-6 sm:gap-y-10">
              {whyChooseFeatures.map((feature) => (
                <li key={feature.id} className="flex flex-row gap-4 items-start sm:flex-col">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--brand-color)] text-white">
                    <FeatureIcon icon={feature.icon} />
                  </span>
                  <div>
                    <h3 className="text-md font-bold text-[var(--black)]">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
