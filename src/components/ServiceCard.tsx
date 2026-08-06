import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

// function ServiceIconGlyph({ icon }: { icon: ServiceIcon }) {
//   const common = {
//     width: 18,
//     height: 18,
//     viewBox: "0 0 24 24",
//     fill: "none" as const,
//     "aria-hidden": true as const,
//   };

//   switch (icon) {
//     case "garage":
//       return (
//         <svg {...common}>
//           <path
//             d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5Z"
//             stroke="currentColor"
//             strokeWidth="1.7"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M8 21v-3h8v3"
//             stroke="currentColor"
//             strokeWidth="1.7"
//             strokeLinecap="round"
//           />
//         </svg>
//       );
//     case "commercial":
//       return (
//         <svg {...common}>
//           <path
//             d="M4 20V7l8-3 8 3v13"
//             stroke="currentColor"
//             strokeWidth="1.7"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M9 20v-5h6v5M9 10h.01M12 10h.01M15 10h.01M9 13.5h.01M12 13.5h.01M15 13.5h.01"
//             stroke="currentColor"
//             strokeWidth="1.7"
//             strokeLinecap="round"
//           />
//         </svg>
//       );
//     case "industrial":
//       return (
//         <svg {...common}>
//           <path
//             d="M3 20h18M5 20V9l5 3V9l5 3V6l4 2v12"
//             stroke="currentColor"
//             strokeWidth="1.7"
//             strokeLinejoin="round"
//           />
//         </svg>
//       );
//     case "metallic":
//       return (
//         <svg {...common}>
//           <path
//             d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3Z"
//             stroke="currentColor"
//             strokeWidth="1.7"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M18 15l.9 2.6L21.5 18l-2.6.9L18 21.5l-.9-2.6L14.5 18l2.6-.9L18 15Z"
//             fill="currentColor"
//           />
//         </svg>
//       );
//     case "flake":
//       return (
//         <svg {...common}>
//           <circle cx="8" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
//           <circle cx="15" cy="7" r="1.6" stroke="currentColor" strokeWidth="1.6" />
//           <circle cx="12" cy="14" r="2.2" stroke="currentColor" strokeWidth="1.6" />
//           <circle cx="17" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.6" />
//         </svg>
//       );
//     case "quartz":
//       return (
//         <svg {...common}>
//           <path
//             d="M12 3 4.5 8v8L12 21l7.5-5V8L12 3Z"
//             stroke="currentColor"
//             strokeWidth="1.7"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M12 3v18M4.5 8 12 12l7.5-4"
//             stroke="currentColor"
//             strokeWidth="1.5"
//           />
//         </svg>
//       );
//     case "decorative":
//       return (
//         <svg {...common}>
//           <path
//             d="M12 4c2.5 3 5 4.5 8 5-3 .5-5.5 2-8 5-2.5-3-5-4.5-8-5 3-.5 5.5-2 8-5Z"
//             stroke="currentColor"
//             strokeWidth="1.7"
//             strokeLinejoin="round"
//           />
//           <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
//         </svg>
//       );
//     default:
//       return null;
//   }
// }

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export default function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <article
      className={`group relative isolate h-full min-h-[320px] overflow-hidden rounded-[1.5rem] aspect-[3/4] sm:min-h-[360px] sm:rounded-[1.75rem] lg:min-h-[400px] ${className}`}
    >
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes="(max-width: 640px) 82vw, (max-width: 1280px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,20,0.1)_0%,rgba(8,12,20,0.2)_45%,rgba(8,12,20,0.85)_100%)]"
        aria-hidden="true"
      />

      <div className="absolute top-4 left-4 z-10 sm:top-5 sm:left-5">
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-[var(--brand-color)] text-white shadow-[0_8px_20px_rgba(184,134,11,0.35)]">
          <div dangerouslySetInnerHTML={{ __html: service.icon as string }} />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold tracking-tight text-white">{service.title}</h3>
          <p className="text-white/70">{service.description}</p>
        </div>

        <Link
          href={service.href}
          aria-label={`View ${service.title} service`}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/80 bg-black/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B1120]"
        >
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
